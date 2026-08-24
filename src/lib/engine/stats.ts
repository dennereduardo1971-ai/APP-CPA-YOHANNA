import type { Dificuldade, EstadoConceito, Resposta } from '../types'
import { CONCEITOS, MACROTEMAS, MICROTEMAS, pesosEfetivos } from '../content'
import { dominioEfetivo, nivelDominio } from './mastery'

/** Cálculo de desempenho. Puro: recebe respostas e estados, devolve números. */

export interface Agregado {
  total: number
  acertos: number
  taxaAcerto: number
  taxaErro: number
  tempoMedioMs: number
}

export function agregar(respostas: Resposta[]): Agregado {
  const total = respostas.length
  const acertos = respostas.filter((r) => r.acertou).length
  const tempo = respostas.reduce((s, r) => s + r.tempoMs, 0)
  return {
    total,
    acertos,
    taxaAcerto: total ? acertos / total : 0,
    taxaErro: total ? (total - acertos) / total : 0,
    tempoMedioMs: total ? tempo / total : 0,
  }
}

export function porMacrotema(respostas: Resposta[]): Record<string, Agregado> {
  const saida: Record<string, Agregado> = {}
  for (const macro of MACROTEMAS) {
    saida[macro.id] = agregar(respostas.filter((r) => r.macrotemaId === macro.id))
  }
  return saida
}

export function porMicrotema(respostas: Resposta[]): Record<string, Agregado> {
  const saida: Record<string, Agregado> = {}
  for (const micro of MICROTEMAS) {
    saida[micro.id] = agregar(respostas.filter((r) => r.microtemaId === micro.id))
  }
  return saida
}

export function porDificuldade(respostas: Resposta[]): Record<Dificuldade, Agregado> {
  return {
    facil: agregar(respostas.filter((r) => r.dificuldade === 'facil')),
    media: agregar(respostas.filter((r) => r.dificuldade === 'media')),
    dificil: agregar(respostas.filter((r) => r.dificuldade === 'dificil')),
  }
}

/** Domínio médio de um macrotema, ponderado pelos conceitos que o compõem. */
export function dominioMacrotema(
  macrotemaId: string,
  estados: Record<string, EstadoConceito>,
  agora: number,
): number {
  const macro = MACROTEMAS.find((m) => m.id === macrotemaId)
  if (!macro) return 0
  const conceitos = macro.microtemas.flatMap((mt) => mt.conceitos)
  if (!conceitos.length) return 0
  const soma = conceitos.reduce((s, c) => {
    const estado = estados[c.id]
    return s + (estado ? dominioEfetivo(estado, agora) : 0)
  }, 0)
  return soma / conceitos.length
}

/**
 * Domínio médio de um microtema. Vivia ad-hoc dentro de `pages/Trilha.tsx`;
 * subiu para cá porque a trilha, o progresso e as recomendações precisam da
 * mesma conta — e duas cópias divergem.
 */
export function dominioMicrotema(
  microtemaId: string,
  estados: Record<string, EstadoConceito>,
  agora: number,
): number {
  const micro = MACROTEMAS.flatMap((m) => m.microtemas).find((mt) => mt.id === microtemaId)
  if (!micro?.conceitos.length) return 0
  const soma = micro.conceitos.reduce((s, c) => {
    const estado = estados[c.id]
    return s + (estado ? dominioEfetivo(estado, agora) : 0)
  }, 0)
  return soma / micro.conceitos.length
}

export interface LinhaMicrotema {
  microtemaId: string
  macrotemaId: string
  codigo: string
  nome: string
  dominio: number
  nivel: ReturnType<typeof nivelDominio>
  /** Conceitos escritos neste microtema. */
  conceitos: number
  /** Quantos deles já receberam ao menos uma resposta. */
  praticados: number
  respostas: number
  /**
   * `true` quando ainda não escrevemos nenhuma aula aqui. Sem esta marca,
   * uma barra em 0% acusaria o aluno de não saber o que ninguém ensinou —
   * a mesma distinção que a trilha faz entre etapa `vazia` e `bloqueada`.
   */
  semConteudo: boolean
}

/**
 * Uma linha por microtema oficial, na ordem do Programa Detalhado.
 * Inclui os microtemas sem conteúdo: escondê-los faria a plataforma parecer
 * mais completa do que é (a Regra de Ouro da especificação).
 */
export function panoramaMicrotemas(
  estados: Record<string, EstadoConceito>,
  agora: number,
  macrotemaId?: string,
): LinhaMicrotema[] {
  const micros = macrotemaId
    ? MICROTEMAS.filter((mt) => mt.macrotemaId === macrotemaId)
    : MICROTEMAS

  return micros.map((mt) => {
    const dominio = dominioMicrotema(mt.id, estados, agora)
    return {
      microtemaId: mt.id,
      macrotemaId: mt.macrotemaId,
      codigo: mt.codigo,
      nome: mt.nome,
      dominio,
      nivel: nivelDominio(dominio),
      conceitos: mt.conceitos.length,
      praticados: mt.conceitos.filter((c) => (estados[c.id]?.n ?? 0) > 0).length,
      respostas: mt.conceitos.reduce((s, c) => s + (estados[c.id]?.n ?? 0), 0),
      semConteudo: mt.conceitos.length === 0,
    }
  })
}

/**
 * Progresso geral: domínio ponderado pelo peso de cada macrotema na prova.
 * É um indicador pedagógico — nunca uma previsão de aprovação.
 */
export function progressoGeral(
  estados: Record<string, EstadoConceito>,
  agora: number,
): number {
  const pesos = pesosEfetivos()
  return MACROTEMAS.reduce(
    (s, m) => s + (pesos[m.id] ?? 0) * dominioMacrotema(m.id, estados, agora),
    0,
  )
}

/** Cobertura: proporção de conceitos com pelo menos uma resposta. */
export function cobertura(estados: Record<string, EstadoConceito>): number {
  if (!CONCEITOS.length) return 0
  const tocados = CONCEITOS.filter((c) => (estados[c.id]?.n ?? 0) > 0).length
  return tocados / CONCEITOS.length
}

export interface AssuntoDestaque {
  macrotemaId: string
  nome: string
  dominio: number
  nivel: ReturnType<typeof nivelDominio>
  respostas: number
}

/** Macrotemas ordenados por domínio — os primeiros são os fracos. */
export function ranking(
  estados: Record<string, EstadoConceito>,
  agora: number,
): AssuntoDestaque[] {
  return MACROTEMAS.map((m) => {
    const conceitos = m.microtemas.flatMap((mt) => mt.conceitos)
    const respostas = conceitos.reduce((s, c) => s + (estados[c.id]?.n ?? 0), 0)
    const dominio = dominioMacrotema(m.id, estados, agora)
    return { macrotemaId: m.id, nome: m.nome, dominio, nivel: nivelDominio(dominio), respostas }
  }).sort((a, b) => a.dominio - b.dominio)
}

export const assuntosFracos = (estados: Record<string, EstadoConceito>, agora: number) =>
  ranking(estados, agora).filter((r) => r.dominio < 0.6)

export const assuntosFortes = (estados: Record<string, EstadoConceito>, agora: number) =>
  ranking(estados, agora)
    .filter((r) => r.dominio >= 0.75)
    .reverse()

/** Série temporal de taxa de acerto por dia, para o gráfico de evolução. */
export function evolucaoDiaria(
  respostas: Resposta[],
  dias = 30,
): { dia: string; taxa: number; total: number }[] {
  const porDia = new Map<string, { acertos: number; total: number }>()
  for (const r of respostas) {
    const d = new Date(r.data)
    const chave = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
      d.getDate(),
    ).padStart(2, '0')}`
    const atual = porDia.get(chave) ?? { acertos: 0, total: 0 }
    atual.total += 1
    if (r.acertou) atual.acertos += 1
    porDia.set(chave, atual)
  }
  return [...porDia.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-dias)
    .map(([dia, v]) => ({ dia, taxa: v.total ? v.acertos / v.total : 0, total: v.total }))
}

/**
 * Prontidão declarada com honestidade: só reporta um número quando há
 * amostra suficiente. Abaixo do mínimo, devolve `null` e a interface diz
 * "cobertura insuficiente" em vez de inventar uma probabilidade.
 */
export const MINIMO_RESPOSTAS = 60
export const MINIMA_COBERTURA = 0.5

export interface Prontidao {
  valor: number | null
  cobertura: number
  respostas: number
  faltamRespostas: number
  motivo?: string
}

export function prontidao(
  respostas: Resposta[],
  estados: Record<string, EstadoConceito>,
  agora: number,
): Prontidao {
  const cob = cobertura(estados)
  const n = respostas.length

  if (n < MINIMO_RESPOSTAS || cob < MINIMA_COBERTURA) {
    return {
      valor: null,
      cobertura: cob,
      respostas: n,
      faltamRespostas: Math.max(0, MINIMO_RESPOSTAS - n),
      motivo:
        n < MINIMO_RESPOSTAS
          ? `Responda mais ${MINIMO_RESPOSTAS - n} questões para liberar esta estimativa.`
          : `Você ainda não estudou ${Math.round((1 - cob) * 100)}% dos conceitos.`,
    }
  }

  return { valor: progressoGeral(estados, agora), cobertura: cob, respostas: n, faltamRespostas: 0 }
}
