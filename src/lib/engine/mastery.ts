import type { Dificuldade, EstadoConceito, NivelDominio } from '../types'

/**
 * Motor de domínio — Elo/IRT de um parâmetro.
 *
 * Deliberadamente simples e auditável: com uma conta de duas linhas dá para
 * explicar ao usuário por que o nível dele subiu ou caiu. Um IRT de três
 * parâmetros exigiria milhares de respostas por questão para calibrar.
 */

/** Probabilidade de acerto dada a habilidade `theta` e a dificuldade `b`. */
export function probabilidadeAcerto(theta: number, b: number): number {
  return 1 / (1 + Math.exp(-(theta - b)))
}

/** Passo de aprendizado: alto no início, estabiliza com a experiência. */
function fatorK(n: number): number {
  return 0.8 / (1 + n / 12)
}

/**
 * Peso do erro conforme o motivo declarado.
 * Errar por desatenção não é o mesmo que não saber a matéria — e tratar os
 * dois igual degrada o modelo.
 */
export const PESO_MOTIVO = {
  conceito: 1,
  calculo: 0.85,
  interpretacao: 0.8,
  desatencao: 0.45,
  chute: 1,
} as const

export type MotivoErro = keyof typeof PESO_MOTIVO

export const ROTULO_MOTIVO: Record<MotivoErro, string> = {
  conceito: 'Não sabia o conceito',
  calculo: 'Errei a conta',
  interpretacao: 'Interpretei mal o enunciado',
  desatencao: 'Sabia, mas me distraí',
  chute: 'Chutei',
}

export function estadoInicial(
  conceitoId: string,
  microtemaId: string,
  macrotemaId: string,
): EstadoConceito {
  return {
    conceitoId,
    microtemaId,
    macrotemaId,
    theta: 0,
    // Sem informação, a estimativa honesta é 50% — é o que `theta = 0`
    // significa. O "0% de domínio" da interface vem de `n === 0`, tratado em
    // `dominioEfetivo`; deixar `m` em 0 aqui tornaria o primeiro erro um
    // ganho de domínio.
    m: 0.5,
    n: 0,
    acertos: 0,
    estabilidade: 1,
    ultimaPratica: 0,
    revisarEm: 0,
    aulaConcluida: false,
    errosAbertos: 0,
  }
}

export interface ResultadoAtualizacao {
  estado: EstadoConceito
  /** Variação do nível de domínio, para exibir feedback ao usuário. */
  deltaM: number
}

/**
 * Atualiza o estado do conceito após uma resposta.
 * `b` é a dificuldade latente da questão; `motivo` só é usado em erros.
 */
export function registrarResposta(
  anterior: EstadoConceito,
  acertou: boolean,
  b: number,
  agora: number,
  motivo?: MotivoErro,
): ResultadoAtualizacao {
  const p = probabilidadeAcerto(anterior.theta, b)
  const y = acertou ? 1 : 0
  const peso = acertou ? 1 : PESO_MOTIVO[motivo ?? 'conceito']
  const k = fatorK(anterior.n)

  const theta = anterior.theta + k * peso * (y - p)
  const n = anterior.n + 1
  const acertos = anterior.acertos + (acertou ? 1 : 0)

  // Nível de domínio: chance de acertar uma questão de dificuldade média.
  const m = probabilidadeAcerto(theta, 0)

  // Estabilidade da memória: cresce com acerto, encolhe com erro.
  const estabilidade = acertou
    ? Math.min(180, Math.max(1, anterior.estabilidade * (1.6 + m * 0.8)))
    : Math.max(0.5, anterior.estabilidade * 0.4)

  return {
    estado: {
      ...anterior,
      theta,
      n,
      acertos,
      m,
      estabilidade,
      ultimaPratica: agora,
      revisarEm: agora + estabilidade * 86_400_000,
      errosAbertos: acertou
        ? Math.max(0, anterior.errosAbertos - 1)
        : anterior.errosAbertos + 1,
    },
    deltaM: m - anterior.m,
  }
}

/**
 * Retenção estimada — curva de esquecimento em potência (FSRS).
 * Retorna 1 logo após a prática e decai conforme a estabilidade.
 */
export function retencao(estado: EstadoConceito, agora: number): number {
  if (!estado.ultimaPratica) return 0
  const dias = (agora - estado.ultimaPratica) / 86_400_000
  if (dias <= 0) return 1
  return 1 / (1 + dias / (9 * Math.max(estado.estabilidade, 0.5)))
}

/**
 * Domínio efetivo: o quanto ainda está acessível na memória.
 * O piso de 0,35 evita modelar como zerado o que foi bem aprendido.
 */
export function dominioEfetivo(estado: EstadoConceito, agora: number): number {
  if (!estado.n) return 0
  return estado.m * Math.max(retencao(estado, agora), 0.35)
}

export function nivelDominio(valor: number): NivelDominio {
  if (valor >= 0.9) return 'dominado'
  if (valor >= 0.75) return 'bom'
  if (valor >= 0.6) return 'intermediario'
  if (valor >= 0.4) return 'desenvolvimento'
  return 'inicial'
}

export const ROTULO_NIVEL: Record<NivelDominio, string> = {
  inicial: 'Inicial',
  desenvolvimento: 'Em desenvolvimento',
  intermediario: 'Intermediário',
  bom: 'Bom',
  dominado: 'Dominado',
}

/** Dificuldade sugerida para manter a chance de acerto perto de 80%. */
export function dificuldadeAlvo(theta: number): Dificuldade {
  // b tal que P(acerto) = 0,8  =>  b = theta - ln(4)
  const b = theta - Math.log(4)
  if (b < -0.4) return 'facil'
  if (b < 0.45) return 'media'
  return 'dificil'
}
