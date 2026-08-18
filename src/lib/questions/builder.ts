import type { Dificuldade, PassoDecisao, Questao, QuestionKind } from '../types'
import { CONCEITOS, MICROTEMAS } from '../content'

/** Tupla compacta de alternativa: [texto, correta, justificativa]. */
export type AltSpec = [string, boolean, string]

export interface QSpec {
  /** ID do conceito ao qual a questão pertence. */
  c: string
  tipo: QuestionKind
  dif: Dificuldade
  /** Habilidade avaliada. */
  hab: string
  /** Contexto opcional (situação prática, case). */
  ctx?: string
  e: string
  alt: AltSpec[]
  exp: string
  tags: string[]
  passos?: PassoDecisao[]
}

/** Dificuldade latente inicial por faixa — calibrada depois pelas respostas. */
const B_INICIAL: Record<Dificuldade, number> = {
  facil: -0.8,
  media: 0,
  dificil: 0.9,
}

const microPorConceito = new Map(CONCEITOS.map((c) => [c.id, c.microtemaId]))
const macroPorMicro = new Map(MICROTEMAS.map((m) => [m.id, m.macrotemaId]))

/**
 * Expande a forma compacta na entidade completa.
 * Valida em desenvolvimento que existe exatamente uma alternativa correta e
 * que toda alternativa traz justificativa — inclusive as incorretas.
 */
export function q(id: string, spec: QSpec): Questao {
  const microtemaId = microPorConceito.get(spec.c)
  if (!microtemaId) throw new Error(`Questão ${id}: conceito "${spec.c}" não existe.`)
  const macrotemaId = macroPorMicro.get(microtemaId)
  if (!macrotemaId) throw new Error(`Questão ${id}: microtema "${microtemaId}" sem macrotema.`)

  const corretas = spec.alt.filter(([, ok]) => ok).length
  if (corretas !== 1) {
    throw new Error(`Questão ${id}: precisa de exatamente 1 alternativa correta (achou ${corretas}).`)
  }
  const semJustificativa = spec.alt.findIndex(([, , j]) => !j?.trim())
  if (semJustificativa >= 0) {
    throw new Error(`Questão ${id}: alternativa ${semJustificativa + 1} sem justificativa.`)
  }

  return {
    id,
    macrotemaId,
    microtemaId,
    conceitoId: spec.c,
    tipo: spec.tipo,
    dificuldade: spec.dif,
    habilidade: spec.hab,
    contexto: spec.ctx,
    enunciado: spec.e,
    alternativas: spec.alt.map(([texto, correta, justificativa], i) => ({
      id: `${id}-${String.fromCharCode(97 + i)}`,
      texto,
      correta,
      justificativa,
    })),
    explicacao: spec.exp,
    tags: spec.tags,
    b: B_INICIAL[spec.dif],
    passos: spec.passos,
    origem: 'autoral',
  }
}
