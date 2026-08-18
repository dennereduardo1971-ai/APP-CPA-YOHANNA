import type { EstadoConceito, Questao } from '../types'
import { dominioEfetivo, probabilidadeAcerto, retencao } from './mastery'

/**
 * Revisão adaptativa — simples e explicável de propósito.
 *
 * Toda questão selecionada carrega o motivo pelo qual foi escolhida, e a
 * interface mostra esse motivo ao usuário. Um algoritmo que o aluno não
 * entende vira superstição.
 */

export type MotivoSelecao =
  | 'erro_recente'
  | 'revisao_vencida'
  | 'lacuna'
  | 'peso_prova'
  | 'conteudo_novo'
  | 'manutencao'

export const ROTULO_SELECAO: Record<MotivoSelecao, string> = {
  erro_recente: 'Você errou isso recentemente',
  revisao_vencida: 'Está na hora de revisar',
  lacuna: 'Seu ponto mais fraco agora',
  peso_prova: 'Tema com peso alto na prova',
  conteudo_novo: 'Conteúdo novo para você',
  manutencao: 'Manutenção — só para não esquecer',
}

export interface ItemPriorizado {
  conceitoId: string
  score: number
  motivo: MotivoSelecao
  /** Frase pronta explicando a escolha ao usuário. */
  explicacao: string
}

export interface ContextoPrioridade {
  estados: Record<string, EstadoConceito>
  pesoMacrotema: Record<string, number>
  agora: number
  /** Conceitos vistos nas últimas 24h — reduz repetição imediata. */
  recentes: Set<string>
}

/** Pesos da fórmula de prioridade. Explicitados para poderem ser auditados. */
export const PESOS = {
  lacuna: 1.0,
  exame: 0.7,
  revisao: 0.9,
  erro: 1.1,
  saturacao: 0.6,
  novo: 0.45,
} as const

/**
 * Pontua um conceito. Quanto maior o score, mais o aluno precisa dele agora.
 *
 *   score = lacuna + peso na prova + urgência de revisão + erros abertos
 *           − saturação recente
 */
export function pontuarConceito(
  conceitoId: string,
  macrotemaId: string,
  ctx: ContextoPrioridade,
): ItemPriorizado {
  const estado = ctx.estados[conceitoId]
  const peso = ctx.pesoMacrotema[macrotemaId] ?? 0.25

  if (!estado || estado.n === 0) {
    return {
      conceitoId,
      score: PESOS.novo + PESOS.exame * peso + (estado?.aulaConcluida ? 0.3 : 0),
      motivo: 'conteudo_novo',
      explicacao: ROTULO_SELECAO.conteudo_novo,
    }
  }

  const efetivo = dominioEfetivo(estado, ctx.agora)
  const lacuna = PESOS.lacuna * (1 - efetivo)
  const relevancia = PESOS.exame * peso
  const urgencia = PESOS.revisao * Math.max(0, 1 - retencao(estado, ctx.agora))
  const erro = PESOS.erro * Math.min(1, estado.errosAbertos / 2)
  const saturacao = ctx.recentes.has(conceitoId) ? PESOS.saturacao : 0

  const score = lacuna + relevancia + urgencia + erro - saturacao

  // O motivo exibido é o termo que mais pesou na escolha.
  const termos: [MotivoSelecao, number][] = [
    ['erro_recente', erro],
    ['revisao_vencida', urgencia],
    ['lacuna', lacuna],
    ['peso_prova', relevancia],
  ]
  termos.sort((a, b) => b[1] - a[1])
  const motivo: MotivoSelecao = efetivo >= 0.9 ? 'manutencao' : termos[0][0]

  return { conceitoId, score, motivo, explicacao: ROTULO_SELECAO[motivo] }
}

/**
 * Escolhe a melhor questão de um conjunto para o estado atual do aluno.
 * Busca chance de acerto próxima de 80% — nem frustrante, nem inútil.
 */
export function escolherQuestao(
  candidatas: Questao[],
  estado: EstadoConceito | undefined,
  jaVistas: Set<string>,
): Questao | undefined {
  if (!candidatas.length) return undefined
  const theta = estado?.theta ?? 0

  const naoVistas = candidatas.filter((q) => !jaVistas.has(q.id))
  const pool = naoVistas.length ? naoVistas : candidatas

  return pool.reduce((melhor, q) => {
    const distancia = Math.abs(probabilidadeAcerto(theta, q.b) - 0.8)
    const distanciaMelhor = Math.abs(probabilidadeAcerto(theta, melhor.b) - 0.8)
    return distancia < distanciaMelhor ? q : melhor
  })
}

/** Conceitos com revisão vencida, do mais atrasado para o menos. */
export function filaDeRevisao(
  estados: Record<string, EstadoConceito>,
  agora: number,
): EstadoConceito[] {
  return Object.values(estados)
    .filter((e) => e.n > 0 && e.revisarEm > 0 && e.revisarEm <= agora)
    .sort((a, b) => a.revisarEm - b.revisarEm)
}

/** Conceitos com erros ainda não superados. */
export function errosAbertos(estados: Record<string, EstadoConceito>): EstadoConceito[] {
  return Object.values(estados)
    .filter((e) => e.errosAbertos > 0)
    .sort((a, b) => b.errosAbertos - a.errosAbertos)
}
