import type { Conquista, Dificuldade } from '../types'
import { MACROTEMAS } from '../content'
import { guardiaoDoMacrotema, type CorDragao } from '../personagens'

/**
 * Gamificação orientada a APRENDIZADO, não a volume.
 *
 * Regras de projeto:
 *  - revisar erro vale mais que responder questão nova;
 *  - refazer questão já dominada vale quase nada;
 *  - resposta rápida demais não ganha bônus (evita clicar no automático);
 *  - perder um dia custa a sequência, nunca o progresso real.
 */

export const XP = {
  concluirAula: 25,
  responderQuestao: 5,
  acertoBonus: 10,
  acertoDificilBonus: 6,
  revisarErro: 18,
  concluirMetaDiaria: 60,
  concluirMetaSemanal: 150,
  concluirSimulado: 80,
  primeiraVezDominado: 40,
} as const

/** Tempo abaixo do qual não há bônus — resposta no automático não é estudo. */
export const TEMPO_MINIMO_MS = 3000

export interface GanhoXP {
  pontos: number
  motivo: string
}

export function xpPorResposta(params: {
  acertou: boolean
  dificuldade: Dificuldade
  tempoMs: number
  eraErroAberto: boolean
  jaDominado: boolean
}): GanhoXP {
  const { acertou, dificuldade, tempoMs, eraErroAberto, jaDominado } = params

  // Refazer o que já se domina rende quase nada — evita farm de XP.
  if (jaDominado && acertou) return { pontos: 1, motivo: 'Manutenção' }

  const rapidoDemais = tempoMs < TEMPO_MINIMO_MS
  let pontos = XP.responderQuestao
  let motivo = 'Questão respondida'

  if (acertou && !rapidoDemais) {
    pontos += XP.acertoBonus
    motivo = 'Acerto'
    if (dificuldade === 'dificil') {
      pontos += XP.acertoDificilBonus
      motivo = 'Acerto em questão difícil'
    }
  } else if (acertou && rapidoDemais) {
    motivo = 'Acerto rápido demais — sem bônus'
  }

  if (eraErroAberto && acertou) {
    pontos += XP.revisarErro
    motivo = 'Erro superado'
  }

  return { pontos, motivo }
}

/** Nível cresce de forma quadrática: cada nível exige um pouco mais. */
export function nivelPorXP(xpTotal: number): { nivel: number; atual: number; proximo: number } {
  const nivel = Math.floor(Math.sqrt(xpTotal / 100)) + 1
  const base = (nivel - 1) ** 2 * 100
  const proximo = nivel ** 2 * 100
  return { nivel, atual: xpTotal - base, proximo: proximo - base }
}

export const TITULOS_NIVEL = [
  'Iniciante',
  'Aprendiz',
  'Praticante',
  'Aplicado',
  'Consistente',
  'Avançado',
  'Veterano',
  'Especialista',
  'Mestre',
] as const

export function tituloDoNivel(nivel: number): string {
  return TITULOS_NIVEL[Math.min(nivel - 1, TITULOS_NIVEL.length - 1)] ?? 'Iniciante'
}

/** Data local no formato YYYY-MM-DD, respeitando o fuso do dispositivo. */
export function diaLocal(ts: number): string {
  const d = new Date(ts)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate(),
  ).padStart(2, '0')}`
}

export function diasEntre(a: string, b: string): number {
  return Math.round((Date.parse(`${b}T00:00:00`) - Date.parse(`${a}T00:00:00`)) / 86_400_000)
}

/**
 * Congelamentos deixaram de ser um saldo que só desce. O usuário começa com
 * dois e ganha mais um a cada marco de sequência — sem isso, quem usasse os
 * dois iniciais ficava sem rede para sempre, e a sequência virava uma métrica
 * que só se pode perder.
 */
export const MAX_CONGELAMENTOS = 3
export const MARCOS_CONGELAMENTO = [7, 14, 30, 60, 100] as const

/** Um marco foi cruzado nesta virada de dia? */
export function cruzouMarco(anterior: number, novo: number): boolean {
  return MARCOS_CONGELAMENTO.some((m) => anterior < m && novo >= m)
}

export interface ResultadoSequencia {
  atual: number
  recorde: number
  ultimoDia: string
  congelamentos: number
  /** `true` quando a sequência foi mantida por um congelamento. */
  usouCongelamento: boolean
  /** `true` quando esta virada de dia cruzou um marco e rendeu um congelamento. */
  ganhouCongelamento: boolean
  quebrou: boolean
}

/** Aplica o marco de sequência, respeitando o teto. */
function comMarco(anterior: number, novo: number, congelamentos: number) {
  const ganhou = cruzouMarco(anterior, novo) && congelamentos < MAX_CONGELAMENTOS
  return {
    congelamentos: ganhou ? congelamentos + 1 : congelamentos,
    ganhouCongelamento: ganhou,
  }
}

/**
 * Atualiza a sequência de estudos.
 * Um dia perdido consome um congelamento, se houver — a ideia é reduzir a
 * ansiedade da sequência sem tornar a métrica inútil.
 */
export function atualizarSequencia(
  atual: number,
  recorde: number,
  ultimoDia: string | null,
  congelamentos: number,
  hoje: string,
): ResultadoSequencia {
  const parado = {
    atual,
    recorde,
    ultimoDia: hoje,
    congelamentos,
    usouCongelamento: false,
    ganhouCongelamento: false,
    quebrou: false,
  }

  if (ultimoDia === hoje) return parado
  if (!ultimoDia) {
    return { ...parado, atual: 1, recorde: Math.max(recorde, 1) }
  }

  const lacuna = diasEntre(ultimoDia, hoje)

  if (lacuna === 1) {
    const novo = atual + 1
    return {
      ...parado,
      atual: novo,
      recorde: Math.max(recorde, novo),
      ...comMarco(atual, novo, congelamentos),
    }
  }

  // Um único dia perdido pode ser coberto por congelamento. O marco é avaliado
  // depois do gasto: quem usa a última rede e cruza o marco na mesma virada
  // sai com uma de novo, não com duas.
  if (lacuna === 2 && congelamentos > 0) {
    const novo = atual + 1
    const marco = comMarco(atual, novo, congelamentos - 1)
    return {
      ...parado,
      atual: novo,
      recorde: Math.max(recorde, novo),
      usouCongelamento: true,
      ...marco,
    }
  }

  return { ...parado, atual: 1, quebrou: true }
}

/** Domínio de um módulo que rende o selo do guardião. */
export const LIMIAR_GUARDIAO = 0.75

/** Domínio de um módulo que libera o desafio do guardião. */
export const LIMIAR_DESAFIO_GUARDIAO = 0.6

/**
 * Selos dos guardiões — derivados de `personagens.ts` e de `content`, nunca
 * escritos à mão. Trocar a temática ou renumerar os módulos não deve exigir
 * editar uma lista de conquistas em paralelo.
 */
const selosGuardiao = (): Conquista[] =>
  MACROTEMAS.map((macro) => {
    const guardiao = guardiaoDoMacrotema(macro.id)
    return {
      id: `guardiao-${macro.id}`,
      nome: guardiao ? `Selo de ${guardiao.nome}` : `Selo do módulo ${macro.ordem}`,
      descricao: `Levou o módulo ${macro.ordem} a ${Math.round(LIMIAR_GUARDIAO * 100)}% de domínio.`,
      icone: guardiao?.icone ?? 'escudo',
      incentiva: 'guardioes',
    }
  })

/*
 * O ícone é o NOME de um traço de `components/ui/Icone.tsx`, não um glifo
 * Unicode: no Android vários glifos caem em caixinha (regra 10). Há teste
 * garantindo que todo nome usado aqui existe lá.
 */
const CONQUISTAS_FIXAS: Conquista[] = [
  { id: 'primeira-aula', nome: 'Primeiro passo', descricao: 'Concluiu a primeira aula.', icone: 'livro', incentiva: 'conclusao' },
  { id: 'primeira-sessao', nome: 'Rotina iniciada', descricao: 'Concluiu a primeira sessão de estudo.', icone: 'raio', incentiva: 'consistencia' },
  { id: 'sequencia-3', nome: 'Três seguidos', descricao: 'Manteve 3 dias de sequência.', icone: 'chama', incentiva: 'consistencia' },
  { id: 'sequencia-7', nome: 'Uma semana', descricao: 'Manteve 7 dias de sequência.', icone: 'chama', incentiva: 'consistencia' },
  { id: 'sequencia-30', nome: 'Um mês inteiro', descricao: 'Manteve 30 dias de sequência.', icone: 'chama', incentiva: 'consistencia' },
  { id: 'erro-superado-10', nome: 'Corrigiu a rota', descricao: 'Superou 10 erros na revisão.', icone: 'revisao', incentiva: 'revisao' },
  { id: 'revisao-em-dia', nome: 'Revisão em dia', descricao: 'Zerou a fila de revisão pendente.', icone: 'revisao', incentiva: 'revisao' },
  { id: 'primeira-luz', nome: 'Primeira luz', descricao: 'Concluiu a primeira etapa da trilha.', icone: 'bandeira', incentiva: 'conclusao' },
  { id: 'macrotema-completo', nome: 'Macrotema concluído', descricao: 'Concluiu todas as aulas de um macrotema.', icone: 'trilha', incentiva: 'conclusao' },
  { id: 'dominado-5', nome: 'Cinco dominados', descricao: 'Atingiu nível Dominado em 5 conceitos.', icone: 'troféu', incentiva: 'desempenho' },
  { id: 'lamina-afiada', nome: 'Lâmina afiada', descricao: 'Acertou 20 questões difíceis.', icone: 'lanca', incentiva: 'desempenho' },
  { id: 'simulado-aprovado', nome: 'Passou no simulado', descricao: 'Atingiu a nota de corte em um simulado completo.', icone: 'cronometro', incentiva: 'desempenho' },
  { id: 'meta-7', nome: 'Meta batida 7 vezes', descricao: 'Cumpriu a meta diária em 7 dias.', icone: 'meta', incentiva: 'meta' },
  { id: 'sem-pressa', nome: 'Sem pressa', descricao: 'Concluiu uma sessão inteira sem respostas apressadas.', icone: 'olho', incentiva: 'desempenho' },
]

/** Fecha a lista: só faz sentido depois dos selos individuais. */
const QUATRO_DRAGOES: Conquista = {
  id: 'quatro-dragoes',
  nome: 'Os quatro dragões',
  descricao: 'Reuniu os selos de todos os guardiões.',
  icone: 'estrela',
  incentiva: 'guardioes',
}

/**
 * A lista completa é FUNÇÃO, não constante de módulo.
 *
 * Os selos dos guardiões saem de `MACROTEMAS`, e o painel `/admin` pode
 * renomear ou acrescentar um módulo em tempo de execução. Uma constante
 * calculada no import congelaria a lista no conteúdo anterior à edição —
 * e o app passaria a premiar módulos que não existem mais.
 */
export const conquistas = (): Conquista[] => [
  ...CONQUISTAS_FIXAS,
  ...selosGuardiao(),
  QUATRO_DRAGOES,
]

export const getConquista = (id: string) => conquistas().find((c) => c.id === id)

/**
 * O recorte do estado que as regras precisam ver.
 *
 * As regras moravam em `store.ts` e liam o `Estado` inteiro. Passaram a ler
 * este contrato estreito para poderem ser testadas sem montar um store — e
 * para que ficar claro, na assinatura, de que a gamificação depende.
 */
export interface SnapshotGamificacao {
  sessoes: number
  sequenciaAtual: number
  sequenciaRecorde: number
  congelamentos: number
  aulasConcluidas: number
  /** Macrotemas com TODAS as aulas concluídas. */
  macrotemasCompletos: number
  conceitosDominados: number
  errosSuperados: number
  revisaoEmDia: boolean
  simuladoAprovado: boolean
  diasComMetaCumprida: number
  ultimaSessaoSemPressa: boolean
  /** Domínio 0–1 por macrotema, indexado pelo id. */
  dominioPorMacrotema: Record<string, number>
  /** Questões difíceis acertadas. */
  dificeisAcertadas: number
  /** Etapas da trilha já concluídas. */
  etapasConcluidas: number
}

const temSeloDeTodos = (s: SnapshotGamificacao) =>
  MACROTEMAS.length > 0 &&
  MACROTEMAS.every((m) => (s.dominioPorMacrotema[m.id] ?? 0) >= LIMIAR_GUARDIAO)

const regras = (): Record<string, (s: SnapshotGamificacao) => boolean> => ({
  'primeira-aula': (s) => s.aulasConcluidas >= 1,
  'primeira-sessao': (s) => s.sessoes >= 1,
  'sequencia-3': (s) => s.sequenciaAtual >= 3,
  'sequencia-7': (s) => s.sequenciaAtual >= 7,
  'sequencia-30': (s) => s.sequenciaAtual >= 30,
  'erro-superado-10': (s) => s.errosSuperados >= 10,
  'revisao-em-dia': (s) => s.revisaoEmDia,
  'primeira-luz': (s) => s.etapasConcluidas >= 1,
  'macrotema-completo': (s) => s.macrotemasCompletos >= 1,
  'dominado-5': (s) => s.conceitosDominados >= 5,
  'lamina-afiada': (s) => s.dificeisAcertadas >= 20,
  'simulado-aprovado': (s) => s.simuladoAprovado,
  'meta-7': (s) => s.diasComMetaCumprida >= 7,
  'sem-pressa': (s) => s.ultimaSessaoSemPressa,
  'quatro-dragoes': temSeloDeTodos,
  ...Object.fromEntries(
    MACROTEMAS.map((macro) => [
      `guardiao-${macro.id}`,
      (s: SnapshotGamificacao) => (s.dominioPorMacrotema[macro.id] ?? 0) >= LIMIAR_GUARDIAO,
    ]),
  ),
})

/** Conquistas que o snapshot satisfaz e que ainda não foram concedidas. */
export function avaliarConquistas(
  snap: SnapshotGamificacao,
  jaObtidas: readonly string[],
): Conquista[] {
  const regra = regras()
  return conquistas().filter((c) => !jaObtidas.includes(c.id) && regra[c.id]?.(snap))
}

/**
 * Desbloqueios progressivos (item 10 da especificação).
 *
 * Desbloqueio aqui é RECOMPENSA, não trava: nada que já estava aberto fecha
 * para caber nesta lista. São coisas que passam a existir conforme se estuda —
 * e, enquanto fechadas, dizem exatamente o que falta.
 */
export interface Desbloqueio {
  id: string
  nome: string
  descricao: string
  /** O que falta, em uma linha, enquanto está fechado. */
  requisito: string
  icone: string
  /** Cor de identidade, quando o desbloqueio pertence a um módulo. */
  cor?: CorDragao
  destino?: string
}

export interface EstadoDesbloqueio {
  desbloqueio: Desbloqueio
  liberado: boolean
  /** 0–1 do caminho até a liberação. */
  progresso: number
}

/** Próximo marco de sequência ainda não alcançado. */
export function proximoMarco(recorde: number): number | null {
  return MARCOS_CONGELAMENTO.find((m) => recorde < m) ?? null
}

export function desbloqueios(snap: SnapshotGamificacao): EstadoDesbloqueio[] {
  const marco = proximoMarco(snap.sequenciaRecorde)

  const rede: EstadoDesbloqueio = {
    desbloqueio: {
      id: 'congelamento',
      nome: 'Rede de segurança',
      descricao:
        'Um congelamento cobre um dia perdido sem zerar a sequência. Você ganha um a cada marco.',
      requisito: marco
        ? `Chegue a ${marco} dias de sequência para ganhar o próximo (teto de ${MAX_CONGELAMENTOS}).`
        : 'Todos os marcos de sequência alcançados.',
      icone: 'chama',
      destino: '/metas',
    },
    liberado: snap.congelamentos > 0,
    progresso: marco ? Math.min(1, snap.sequenciaRecorde / marco) : 1,
  }

  const desafios: EstadoDesbloqueio[] = MACROTEMAS.map((macro) => {
    const dominio = snap.dominioPorMacrotema[macro.id] ?? 0
    const guardiao = guardiaoDoMacrotema(macro.id)
    return {
      desbloqueio: {
        id: `desafio-${macro.id}`,
        nome: guardiao ? `Desafio de ${guardiao.nome}` : `Desafio do módulo ${macro.ordem}`,
        descricao: `Só as questões difíceis do módulo ${macro.ordem}, de uma vez.`,
        requisito: `Chegue a ${Math.round(LIMIAR_DESAFIO_GUARDIAO * 100)}% de domínio no módulo ${macro.ordem}.`,
        icone: guardiao?.icone ?? 'lanca',
        // O desafio é do módulo: aqui a cor do dragão está dizendo de quem é.
        cor: guardiao?.cor,
        destino: `/questoes?macro=${macro.id}&dif=dificil&iniciar=1`,
      },
      liberado: dominio >= LIMIAR_DESAFIO_GUARDIAO,
      progresso: Math.min(1, dominio / LIMIAR_DESAFIO_GUARDIAO),
    }
  })

  return [rede, ...desafios]
}
