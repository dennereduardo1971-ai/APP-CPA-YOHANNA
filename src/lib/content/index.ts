import type { Conceito, Macrotema, Microtema } from '../types'
import { M1 } from './m1-sfn'
import { M2 } from './m2-produtos'
import { M3 } from './m3-relacionamento'
import { M4 } from './m4-inovacao'
import type { OverlayConteudo } from './overlay'
import { montarConteudo, overlayVazio } from './overlay'

/**
 * Pacote de conteúdo. Adicionar matéria = adicionar entrada aqui.
 * Nenhum componente deve conter texto de aula.
 *
 * As listas são MUTADAS NO LUGAR por `aplicarOverlay`, nunca reatribuídas.
 * A diferença importa: metade do app importa `MACROTEMAS` uma única vez, e um
 * `MACROTEMAS = outraLista` deixaria essas cópias apontando para a versão
 * antiga. Mutar o array que todos já seguram mantém a leitura consistente.
 *
 * Quem derivar algo de `MACROTEMAS` no nível do módulo (um `const X =
 * MACROTEMAS.map(...)`) precisa virar função — senão congela o conteúdo de
 * antes do overlay. Ver `engine/gamification.ts`.
 */
const BASE: Macrotema[] = [M1, M2, M3, M4]

export const MACROTEMAS: Macrotema[] = []
export const MICROTEMAS: Microtema[] = []
export const CONCEITOS: Conceito[] = []

const mapaMacro = new Map<string, Macrotema>()
const mapaMicro = new Map<string, Microtema>()
const mapaConceito = new Map<string, Conceito>()

/** Overlay em vigor. Só `aplicarOverlay` escreve aqui. */
let overlayAtual: OverlayConteudo = overlayVazio()

function reconstruir() {
  const arvore = montarConteudo(BASE, overlayAtual)

  MACROTEMAS.splice(0, MACROTEMAS.length, ...arvore)
  MICROTEMAS.splice(0, MICROTEMAS.length, ...arvore.flatMap((m) => m.microtemas))
  CONCEITOS.splice(0, CONCEITOS.length, ...MICROTEMAS.flatMap((mt) => mt.conceitos))

  mapaMacro.clear()
  mapaMicro.clear()
  mapaConceito.clear()
  for (const m of MACROTEMAS) mapaMacro.set(m.id, m)
  for (const mt of MICROTEMAS) mapaMicro.set(mt.id, mt)
  for (const c of CONCEITOS) mapaConceito.set(c.id, c)
}

/**
 * Troca o overlay em vigor e remonta o conteúdo.
 * Chamado na hidratação do store e a cada edição no painel `/admin`.
 */
export function aplicarOverlay(overlay: OverlayConteudo) {
  overlayAtual = overlay
  reconstruir()
}

/** O conteúdo do código, sem overlay — base de comparação para o painel. */
export const conteudoOriginal = (): Macrotema[] => montarConteudo(BASE, overlayVazio())

reconstruir()

export const getMacrotema = (id: string) => mapaMacro.get(id)
export const getMicrotema = (id: string) => mapaMicro.get(id)
export const getConceito = (id: string) => mapaConceito.get(id)

export const conceitosDoMacrotema = (macrotemaId: string) =>
  CONCEITOS.filter((c) => mapaMicro.get(c.microtemaId)?.macrotemaId === macrotemaId)

export const macrotemaDoConceito = (conceitoId: string) => {
  const micro = mapaMicro.get(mapaConceito.get(conceitoId)?.microtemaId ?? '')
  return micro ? mapaMacro.get(micro.macrotemaId) : undefined
}

/**
 * Peso efetivo do macrotema para ponderar desempenho.
 * Quando o peso oficial não foi verificado, distribui o resíduo igualmente
 * entre os macrotemas sem peso — nunca inventa um número específico.
 */
export function pesosEfetivos(): Record<string, number> {
  const comPeso = MACROTEMAS.filter((m) => m.peso != null)
  const somaConhecida = comPeso.reduce((s, m) => s + (m.peso ?? 0), 0)
  const semPeso = MACROTEMAS.filter((m) => m.peso == null)
  const resto = Math.max(0, 1 - somaConhecida)
  const fatia = semPeso.length ? resto / semPeso.length : 0

  return Object.fromEntries(
    MACROTEMAS.map((m) => [m.id, m.peso ?? fatia]),
  )
}

/** `true` quando algum peso ainda não foi conferido contra o programa oficial. */
export const pesosPendentes = () => MACROTEMAS.some((m) => !m.pesoVerificado)

/* ------------------------------------------------------------------ */
/* Cobertura de conteúdo                                               */
/* ------------------------------------------------------------------ */

/**
 * Regra de Ouro da especificação: a aplicação não está completa enquanto
 * houver microtema oficial sem material didático. Estas funções tornam a
 * lacuna visível ao estudante em vez de escondê-la.
 */
export const microtemasSemConteudo = (): Microtema[] =>
  MICROTEMAS.filter((mt) => mt.conceitos.length === 0)

/** Fração de microtemas do macrotema que já têm ao menos um conceito (0–1). */
export function coberturaMacrotema(macrotemaId: string): number {
  const micros = MICROTEMAS.filter((mt) => mt.macrotemaId === macrotemaId)
  if (micros.length === 0) return 0
  return micros.filter((mt) => mt.conceitos.length > 0).length / micros.length
}

/** Fração de microtemas cobertos no programa inteiro (0–1). */
export function coberturaGeral(): number {
  if (MICROTEMAS.length === 0) return 0
  return (MICROTEMAS.length - microtemasSemConteudo().length) / MICROTEMAS.length
}

/** `true` enquanto houver microtema oficial sem nenhuma aula. */
export const coberturaPendente = () => MICROTEMAS.some((mt) => mt.conceitos.length === 0)
