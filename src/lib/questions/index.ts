import type { Dificuldade, Questao, QuestionKind } from '../types'
import { BANCO_M1 } from './banco-m1'
import { BANCO_M1_2 } from './banco-m1-2'
import { BANCO_M1_3 } from './banco-m1-3'
import { BANCO_M1_4 } from './banco-m1-4'
import { BANCO_M2 } from './banco-m2'
import { BANCO_M2_3 } from './banco-m2-3'
import { BANCO_M2_4 } from './banco-m2-4'
import { BANCO_M2_5 } from './banco-m2-5'
import { BANCO_M3_1 } from './banco-m3-1'
import { BANCO_M3_2 } from './banco-m3-2'
import { BANCO_M34 } from './banco-m34'
import { BANCO_M4_6 } from './banco-m4-6'
import { BANCO_M4_RESTO } from './banco-m4-resto'
import { MACROTEMAS } from '../content'
import type { OverlayConteudo } from '../content/overlay'
import { montarQuestoes, overlayVazio } from '../content/overlay'

/*
 * Um arquivo por microtema, na ordem do programa oficial. A divisão não é
 * estética: o banco vai crescer até algumas centenas de itens, e revisar
 * questão de um microtema num arquivo único de milhares de linhas é onde o
 * erro editorial se esconde.
 */
const BASE: Questao[] = [
  ...BANCO_M1,
  ...BANCO_M1_2,
  ...BANCO_M1_3,
  ...BANCO_M1_4,
  ...BANCO_M2,
  ...BANCO_M2_3,
  ...BANCO_M2_4,
  ...BANCO_M2_5,
  ...BANCO_M3_1,
  ...BANCO_M3_2,
  ...BANCO_M34,
  ...BANCO_M4_6,
  ...BANCO_M4_RESTO,
]

/**
 * Banco completo de questões autorais.
 *
 * Como em `content/index.ts`, a lista é mutada no lugar — nunca reatribuída —
 * para que quem já importou continue lendo o banco em vigor.
 */
export const QUESTOES: Questao[] = []

const porId = new Map<string, Questao>()

function reconstruir(overlay: OverlayConteudo) {
  QUESTOES.splice(0, QUESTOES.length, ...montarQuestoes(BASE, MACROTEMAS, overlay))
  porId.clear()
  for (const q of QUESTOES) porId.set(q.id, q)
}

/**
 * Remonta o banco com o overlay em vigor.
 * Exige que o CONTEÚDO já tenha sido remontado — questão de conceito que
 * sumiu é descartada, e essa decisão depende da árvore atual. Use
 * `aplicarOverlayLocal` (em `lib/pacote.ts`) para não errar a ordem.
 */
export const aplicarOverlayQuestoes = (overlay: OverlayConteudo) => reconstruir(overlay)

reconstruir(overlayVazio())

export const getQuestao = (id: string) => porId.get(id)

export const questoesDoConceito = (conceitoId: string) =>
  QUESTOES.filter((q) => q.conceitoId === conceitoId)

export const questoesDoMicrotema = (microtemaId: string) =>
  QUESTOES.filter((q) => q.microtemaId === microtemaId)

export const questoesDoMacrotema = (macrotemaId: string) =>
  QUESTOES.filter((q) => q.macrotemaId === macrotemaId)

export interface FiltroQuestoes {
  macrotemas?: string[]
  microtemas?: string[]
  conceitos?: string[]
  dificuldades?: Dificuldade[]
  tipos?: QuestionKind[]
  excluir?: string[]
}

export function filtrarQuestoes(filtro: FiltroQuestoes): Questao[] {
  return QUESTOES.filter((q) => {
    if (filtro.macrotemas?.length && !filtro.macrotemas.includes(q.macrotemaId)) return false
    if (filtro.microtemas?.length && !filtro.microtemas.includes(q.microtemaId)) return false
    if (filtro.conceitos?.length && !filtro.conceitos.includes(q.conceitoId)) return false
    if (filtro.dificuldades?.length && !filtro.dificuldades.includes(q.dificuldade)) return false
    if (filtro.tipos?.length && !filtro.tipos.includes(q.tipo)) return false
    if (filtro.excluir?.includes(q.id)) return false
    return true
  })
}

export const ROTULO_TIPO: Record<QuestionKind, string> = {
  multipla_escolha: 'Múltipla escolha',
  conceitual: 'Conceitual',
  aplicacao: 'Aplicação',
  calculo: 'Cálculo',
  situacao_pratica: 'Situação prática',
  comparacao: 'Comparação',
  verdadeiro_falso: 'Verdadeiro ou falso',
  arvore_decisao: 'Árvore de diálogo',
  case: 'Case',
}

export const ROTULO_DIFICULDADE: Record<Dificuldade, string> = {
  facil: 'Fácil',
  media: 'Média',
  dificil: 'Difícil',
}
