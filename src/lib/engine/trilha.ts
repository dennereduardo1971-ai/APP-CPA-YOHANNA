import type { EstadoConceito, Macrotema, Microtema, Resposta } from '../types'
import { MACROTEMAS } from '../content'
import { questoesDoMicrotema } from '../questions'
import { dominioEfetivo } from './mastery'
import { dominioMacrotema, dominioMicrotema } from './stats'

/**
 * Montador da trilha visual de aprendizagem.
 *
 * TS puro, sem React: a jornada é uma função dos estados e das respostas, o
 * que permite testá-la sem DOM e evita que a regra de desbloqueio fique
 * escondida dentro de JSX — foi assim que `dominioMicrotema` acabou duplicado
 * antes.
 *
 * A jornada segue a cadeia da especificação:
 *
 *   INÍCIO → MÓDULO → LIÇÃO → MINIQUIZ → DESAFIO → REVISÃO → PRÓXIMO NÍVEL
 *
 * Duas regras de acesso, e elas são diferentes de propósito:
 *
 * 1. **Macrotema nunca tranca.** A especificação pede acesso livre aos módulos
 *    para estudo pontual. Nenhum estágio devolve estado bloqueado.
 * 2. **Dentro do microtema a ordem importa.** Miniquiz abre quando as lições
 *    acabam; desafio abre quando o miniquiz mostrou domínio. É o pré-requisito
 *    pedagógico que a especificação admite.
 */

/** Domínio do microtema anterior que libera o seguinte. */
export const LIMIAR_LIBERACAO = 0.6

/** Domínio do próprio microtema que libera o desafio. */
export const LIMIAR_DESAFIO = 0.6

/** Domínio a partir do qual o desafio se considera vencido. */
export const LIMIAR_DESAFIO_VENCIDO = 0.75

export type TipoEtapa = 'licao' | 'miniquiz' | 'desafio' | 'revisao'

/**
 * `vazia` não é o mesmo que `bloqueada`: bloqueada é o aluno que ainda não
 * chegou lá, vazia é conteúdo que nós ainda não escrevemos. Misturar as duas
 * faria a plataforma parecer completa quando não está.
 */
export type SituacaoEtapa = 'concluida' | 'disponivel' | 'bloqueada' | 'vazia'

export interface Etapa {
  id: string
  tipo: TipoEtapa
  rotulo: string
  /** Uma linha dizendo o que a etapa é — ou por que não abre. */
  detalhe: string
  situacao: SituacaoEtapa
  /** Rota. Ausente quando a etapa não pode ser aberta. */
  destino?: string
  /** 0–1, quando há progresso mensurável. */
  progresso?: number
}

export interface NoMicrotema {
  microtema: Microtema
  etapas: Etapa[]
  dominio: number
  liberado: boolean
  /** Microtema que falta concluir, quando este está trancado. */
  aguarda?: Microtema
  semConteudo: boolean
}

export interface EstagioTrilha {
  macrotema: Macrotema
  nos: NoMicrotema[]
  dominio: number
  aulasConcluidas: number
  totalAulas: number
  totalQuestoes: number
}

export interface ContextoTrilha {
  estados: Record<string, EstadoConceito>
  respostas: Resposta[]
  agora: number
}

const TODOS_MICROTEMAS = () => MACROTEMAS.flatMap((m) => m.microtemas)

/** Concordância de número. O detalhe da etapa é texto de interface, não log. */
const plural = (n: number, singular: string, plural: string) =>
  `${n} ${n === 1 ? singular : plural}`

/** Uma lição por conceito. */
function etapasDeLicao(micro: Microtema, ctx: ContextoTrilha, liberado: boolean): Etapa[] {
  return micro.conceitos.map((c) => {
    const estado = ctx.estados[c.id]
    const concluida = Boolean(estado?.aulaConcluida)
    return {
      id: `licao:${c.id}`,
      tipo: 'licao',
      rotulo: c.titulo,
      detalhe: concluida
        ? `Aula concluída · ${c.minutosEstimados} min`
        : `${c.minutosEstimados} min de leitura`,
      // A lição em si nunca tranca: o gate é do microtema, não da aula.
      situacao: concluida ? 'concluida' : liberado ? 'disponivel' : 'bloqueada',
      destino: liberado ? `/conteudo/${c.id}` : undefined,
      progresso: estado ? dominioEfetivo(estado, ctx.agora) : 0,
    }
  })
}

function etapaMiniquiz(micro: Microtema, ctx: ContextoTrilha, liberado: boolean): Etapa {
  const faceis = questoesDoMicrotema(micro.id).filter((q) => q.dificuldade !== 'dificil')
  const licoesFeitas = micro.conceitos.every((c) => ctx.estados[c.id]?.aulaConcluida)
  const praticados = micro.conceitos.filter((c) => (ctx.estados[c.id]?.n ?? 0) > 0).length
  const concluido = micro.conceitos.length > 0 && praticados === micro.conceitos.length

  const base = {
    id: `miniquiz:${micro.id}`,
    tipo: 'miniquiz' as const,
    rotulo: 'Miniquiz',
    progresso: micro.conceitos.length ? praticados / micro.conceitos.length : 0,
  }

  if (!faceis.length) {
    return { ...base, situacao: 'vazia', detalhe: 'Questões deste tópico ainda em produção.' }
  }
  if (!liberado) {
    return { ...base, situacao: 'bloqueada', detalhe: 'Abre junto com o tópico.' }
  }
  if (!licoesFeitas) {
    return { ...base, situacao: 'bloqueada', detalhe: 'Conclua as aulas do tópico para abrir.' }
  }
  return {
    ...base,
    situacao: concluido ? 'concluida' : 'disponivel',
    detalhe: concluido
      ? micro.conceitos.length === 1
        ? 'Conceito do tópico já praticado'
        : `Todos os ${micro.conceitos.length} conceitos já praticados`
      : `${plural(faceis.length, 'questão de fixação', 'questões de fixação')}`,
    destino: `/questoes?micro=${micro.id}&dif=facil,media&iniciar=1`,
  }
}

function etapaDesafio(micro: Microtema, ctx: ContextoTrilha, dominio: number): Etapa {
  const dificeis = questoesDoMicrotema(micro.id).filter((q) => q.dificuldade === 'dificil')
  const enfrentadas = ctx.respostas.filter(
    (r) => r.microtemaId === micro.id && r.dificuldade === 'dificil',
  ).length

  const base = {
    id: `desafio:${micro.id}`,
    tipo: 'desafio' as const,
    rotulo: 'Desafio',
    progresso: dificeis.length ? Math.min(1, enfrentadas / dificeis.length) : 0,
  }

  if (!dificeis.length) {
    return { ...base, situacao: 'vazia', detalhe: 'Questões difíceis deste tópico em produção.' }
  }
  if (dominio < LIMIAR_DESAFIO) {
    return {
      ...base,
      situacao: 'bloqueada',
      detalhe: `Abre com ${Math.round(LIMIAR_DESAFIO * 100)}% de domínio no tópico.`,
    }
  }
  const vencido = dominio >= LIMIAR_DESAFIO_VENCIDO && enfrentadas > 0
  return {
    ...base,
    situacao: vencido ? 'concluida' : 'disponivel',
    detalhe: vencido
      ? `Vencido · ${plural(enfrentadas, 'questão difícil enfrentada', 'questões difíceis enfrentadas')}`
      : plural(dificeis.length, 'questão difícil', 'questões difíceis'),
    destino: `/questoes?micro=${micro.id}&dif=dificil&iniciar=1`,
  }
}

function etapaRevisao(micro: Microtema, ctx: ContextoTrilha): Etapa {
  const vencidos = micro.conceitos.filter((c) => {
    const e = ctx.estados[c.id]
    return e && e.n > 0 && (e.revisarEm <= ctx.agora || e.errosAbertos > 0)
  }).length
  const praticados = micro.conceitos.filter((c) => (ctx.estados[c.id]?.n ?? 0) > 0).length

  const base = {
    id: `revisao:${micro.id}`,
    tipo: 'revisao' as const,
    rotulo: 'Revisão',
    progresso: praticados ? 1 - vencidos / praticados : 0,
  }

  if (!praticados) {
    return { ...base, situacao: 'bloqueada', detalhe: 'Aparece depois da primeira prática.' }
  }
  if (!vencidos) {
    return { ...base, situacao: 'concluida', detalhe: 'Memória em dia neste tópico.' }
  }
  return {
    ...base,
    situacao: 'disponivel',
    detalhe: plural(vencidos, 'conceito esfriando', 'conceitos esfriando'),
    destino: '/revisao',
  }
}

/** Monta a jornada inteira: um estágio por macrotema, um nó por microtema. */
export function montarTrilha(ctx: ContextoTrilha): EstagioTrilha[] {
  const todos = TODOS_MICROTEMAS()

  return MACROTEMAS.map((macro) => {
    const conceitos = macro.microtemas.flatMap((mt) => mt.conceitos)

    const nos: NoMicrotema[] = macro.microtemas.map((micro) => {
      const semConteudo = micro.conceitos.length === 0

      // O primeiro pré-requisito que ainda não atingiu o limiar.
      const pendente = micro.preRequisitos
        .map((id) => todos.find((mt) => mt.id === id))
        .find(
          (req) =>
            req && dominioMicrotema(req.id, ctx.estados, ctx.agora) < LIMIAR_LIBERACAO,
        )
      const liberado = !pendente
      const dominio = dominioMicrotema(micro.id, ctx.estados, ctx.agora)

      return {
        microtema: micro,
        dominio,
        liberado,
        aguarda: pendente,
        semConteudo,
        etapas: semConteudo
          ? []
          : [
              ...etapasDeLicao(micro, ctx, liberado),
              etapaMiniquiz(micro, ctx, liberado),
              etapaDesafio(micro, ctx, liberado ? dominio : 0),
              etapaRevisao(micro, ctx),
            ],
      }
    })

    return {
      macrotema: macro,
      nos,
      dominio: dominioMacrotema(macro.id, ctx.estados, ctx.agora),
      aulasConcluidas: conceitos.filter((c) => ctx.estados[c.id]?.aulaConcluida).length,
      totalAulas: conceitos.length,
      totalQuestoes: macro.microtemas.reduce(
        (s, mt) => s + questoesDoMicrotema(mt.id).length,
        0,
      ),
    }
  })
}

export interface PosicaoAtual {
  estagio: EstagioTrilha
  no: NoMicrotema
  etapa: Etapa
}

/**
 * "Você está aqui": a primeira etapa disponível na ordem da trilha.
 *
 * Uma só — o valor da jornada é apontar um próximo passo, e três destaques na
 * mesma tela não apontam nada.
 */
export function etapaAtual(trilha: EstagioTrilha[]): PosicaoAtual | null {
  for (const estagio of trilha) {
    for (const no of estagio.nos) {
      const etapa = no.etapas.find((e) => e.situacao === 'disponivel')
      if (etapa) return { estagio, no, etapa }
    }
  }
  return null
}

/** Quanto da jornada já foi percorrido, em etapas concluídas. */
export function progressoDaTrilha(trilha: EstagioTrilha[]): {
  concluidas: number
  total: number
} {
  const etapas = trilha.flatMap((e) => e.nos.flatMap((n) => n.etapas))
  // Etapas vazias não contam: conteúdo que não escrevemos não é mérito nem
  // dívida do aluno.
  const contaveis = etapas.filter((e) => e.situacao !== 'vazia')
  return {
    concluidas: contaveis.filter((e) => e.situacao === 'concluida').length,
    total: contaveis.length,
  }
}
