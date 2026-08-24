import type { Dificuldade, Questao, QuestionKind } from '../types'
import { BANCO_M1 } from './banco-m1'
import { BANCO_M2 } from './banco-m2'
import { BANCO_M34 } from './banco-m34'

/** Banco completo de questões autorais. */
export const QUESTOES: Questao[] = [...BANCO_M1, ...BANCO_M2, ...BANCO_M34]

const porId = new Map(QUESTOES.map((q) => [q.id, q]))
export const getQuestao = (id: string) => porId.get(id)

export const questoesDoConceito = (conceitoId: string) =>
  QUESTOES.filter((q) => q.conceitoId === conceitoId)

export const questoesDoMacrotema = (macrotemaId: string) =>
  QUESTOES.filter((q) => q.macrotemaId === macrotemaId)

export interface FiltroQuestoes {
  macrotemas?: string[]
  conceitos?: string[]
  dificuldades?: Dificuldade[]
  tipos?: QuestionKind[]
  excluir?: string[]
}

export function filtrarQuestoes(filtro: FiltroQuestoes): Questao[] {
  return QUESTOES.filter((q) => {
    if (filtro.macrotemas?.length && !filtro.macrotemas.includes(q.macrotemaId)) return false
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
