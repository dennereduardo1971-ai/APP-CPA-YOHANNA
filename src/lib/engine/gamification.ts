import type { Conquista, Dificuldade } from '../types'

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

export interface ResultadoSequencia {
  atual: number
  recorde: number
  ultimoDia: string
  congelamentos: number
  /** `true` quando a sequência foi mantida por um congelamento. */
  usouCongelamento: boolean
  quebrou: boolean
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
  if (ultimoDia === hoje) {
    return { atual, recorde, ultimoDia: hoje, congelamentos, usouCongelamento: false, quebrou: false }
  }
  if (!ultimoDia) {
    return { atual: 1, recorde: Math.max(recorde, 1), ultimoDia: hoje, congelamentos, usouCongelamento: false, quebrou: false }
  }

  const lacuna = diasEntre(ultimoDia, hoje)

  if (lacuna === 1) {
    const novo = atual + 1
    return { atual: novo, recorde: Math.max(recorde, novo), ultimoDia: hoje, congelamentos, usouCongelamento: false, quebrou: false }
  }

  // Um único dia perdido pode ser coberto por congelamento.
  if (lacuna === 2 && congelamentos > 0) {
    const novo = atual + 1
    return {
      atual: novo,
      recorde: Math.max(recorde, novo),
      ultimoDia: hoje,
      congelamentos: congelamentos - 1,
      usouCongelamento: true,
      quebrou: false,
    }
  }

  return { atual: 1, recorde, ultimoDia: hoje, congelamentos, usouCongelamento: false, quebrou: true }
}

export const CONQUISTAS: Conquista[] = [
  { id: 'primeira-aula', nome: 'Primeiro passo', descricao: 'Concluiu a primeira aula.', icone: '◆', incentiva: 'conclusao' },
  { id: 'primeira-sessao', nome: 'Rotina iniciada', descricao: 'Concluiu a primeira sessão de estudo.', icone: '◆', incentiva: 'consistencia' },
  { id: 'sequencia-3', nome: 'Três seguidos', descricao: 'Manteve 3 dias de sequência.', icone: '≡', incentiva: 'consistencia' },
  { id: 'sequencia-7', nome: 'Uma semana', descricao: 'Manteve 7 dias de sequência.', icone: '≡', incentiva: 'consistencia' },
  { id: 'sequencia-30', nome: 'Um mês inteiro', descricao: 'Manteve 30 dias de sequência.', icone: '≡', incentiva: 'consistencia' },
  { id: 'erro-superado-10', nome: 'Corrigiu a rota', descricao: 'Superou 10 erros na revisão.', icone: '↺', incentiva: 'revisao' },
  { id: 'revisao-em-dia', nome: 'Revisão em dia', descricao: 'Zerou a fila de revisão pendente.', icone: '↺', incentiva: 'revisao' },
  { id: 'macrotema-completo', nome: 'Macrotema concluído', descricao: 'Concluiu todas as aulas de um macrotema.', icone: '□', incentiva: 'conclusao' },
  { id: 'dominado-5', nome: 'Cinco dominados', descricao: 'Atingiu nível Dominado em 5 conceitos.', icone: '★', incentiva: 'desempenho' },
  { id: 'simulado-aprovado', nome: 'Passou no simulado', descricao: 'Atingiu a nota de corte em um simulado completo.', icone: '★', incentiva: 'desempenho' },
  { id: 'meta-7', nome: 'Meta batida 7 vezes', descricao: 'Cumpriu a meta diária em 7 dias.', icone: '◎', incentiva: 'meta' },
  { id: 'sem-pressa', nome: 'Sem pressa', descricao: 'Concluiu uma sessão inteira sem respostas apressadas.', icone: '◎', incentiva: 'desempenho' },
]

export const CONQUISTA_POR_ID = new Map(CONQUISTAS.map((c) => [c.id, c]))
