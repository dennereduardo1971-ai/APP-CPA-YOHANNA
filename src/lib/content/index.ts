import type { Conceito, Macrotema, Microtema } from '../types'
import { M1 } from './m1-sfn'
import { M2 } from './m2-produtos'
import { M3 } from './m3-relacionamento'
import { M4 } from './m4-inovacao'

/**
 * Pacote de conteúdo. Adicionar matéria = adicionar entrada aqui.
 * Nenhum componente deve conter texto de aula.
 */
export const MACROTEMAS: Macrotema[] = [M1, M2, M3, M4].sort((a, b) => a.ordem - b.ordem)

export const MICROTEMAS: Microtema[] = MACROTEMAS.flatMap((m) => m.microtemas)

export const CONCEITOS: Conceito[] = MICROTEMAS.flatMap((mt) => mt.conceitos)

const porId = <T extends { id: string }>(lista: T[]) =>
  new Map(lista.map((item) => [item.id, item]))

const mapaMacro = porId(MACROTEMAS)
const mapaMicro = porId(MICROTEMAS)
const mapaConceito = porId(CONCEITOS)

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
export const PESOS_PENDENTES = MACROTEMAS.some((m) => !m.pesoVerificado)
