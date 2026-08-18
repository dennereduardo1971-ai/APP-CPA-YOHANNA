import type { Conceito, Questao } from '../types'
import { CONCEITOS, getConceito, MACROTEMAS, pesosEfetivos } from '../content'
import { questoesDoConceito } from '../questions'
import type { ContextoPrioridade, ItemPriorizado, MotivoSelecao } from './scheduler'
import { escolherQuestao, pontuarConceito, ROTULO_SELECAO } from './scheduler'
import { dominioEfetivo } from './mastery'
import type { EstadoConceito } from '../types'

/**
 * Montador da sessão de Estudo Rápido.
 *
 * A sessão é orçada em MINUTOS, não em número de itens — é isso que garante
 * a promessa de "30 a 45 minutos". Mistura quatro blocos com proporção fixa
 * e intercala temas para evitar blocos monótonos.
 */

export type TipoPasso = 'aula' | 'questao'

export interface PassoSessao {
  tipo: TipoPasso
  conceitoId: string
  questaoId?: string
  motivo: MotivoSelecao
  explicacao: string
  minutos: number
}

export interface PlanoSessao {
  passos: PassoSessao[]
  minutosEstimados: number
  /** Resumo textual do porquê desta sessão — exibido antes de começar. */
  justificativa: string
  focos: { macrotemaId: string; nome: string; itens: number }[]
}

/** Proporção de tempo por bloco. Soma 1. */
export const MIX = { aprender: 0.25, praticar: 0.45, revisar: 0.25, pegadinha: 0.05 }

const MINUTOS_POR_QUESTAO = 1.5

export interface OpcoesPlano {
  minutos: number
  estados: Record<string, EstadoConceito>
  agora: number
  recentes: Set<string>
  /** Questões já respondidas — evita repetir o que o aluno já domina. */
  jaVistas: Set<string>
  /** Restringe a estes macrotemas (usado pelo simulado por tema). */
  macrotemas?: string[]
}

function ordenarPorPrioridade(opcoes: OpcoesPlano): ItemPriorizado[] {
  const ctx: ContextoPrioridade = {
    estados: opcoes.estados,
    pesoMacrotema: pesosEfetivos(),
    agora: opcoes.agora,
    recentes: opcoes.recentes,
  }

  const universo = opcoes.macrotemas?.length
    ? CONCEITOS.filter((c) => {
        const macro = MACROTEMAS.find((m) => m.microtemas.some((mt) => mt.id === c.microtemaId))
        return macro && opcoes.macrotemas!.includes(macro.id)
      })
    : CONCEITOS

  return universo
    .map((c) => {
      const macro = MACROTEMAS.find((m) => m.microtemas.some((mt) => mt.id === c.microtemaId))
      return pontuarConceito(c.id, macro?.id ?? '', ctx)
    })
    .sort((a, b) => b.score - a.score)
}

/**
 * Evita mais de 3 itens seguidos do mesmo microtema.
 * Intercalar melhora a retenção e deixa a sessão menos monótona.
 */
function intercalar(passos: PassoSessao[]): PassoSessao[] {
  const saida: PassoSessao[] = []
  const restantes = [...passos]

  while (restantes.length) {
    const ultimoMicro = (id: string) => getConceito(id)?.microtemaId
    const trio = saida.slice(-3)
    const travado =
      trio.length === 3 && new Set(trio.map((p) => ultimoMicro(p.conceitoId))).size === 1
        ? ultimoMicro(trio[0].conceitoId)
        : null

    const idx = travado
      ? restantes.findIndex((p) => ultimoMicro(p.conceitoId) !== travado)
      : 0

    saida.push(restantes.splice(idx === -1 ? 0 : idx, 1)[0])
  }
  return saida
}

export function montarSessao(opcoes: OpcoesPlano): PlanoSessao {
  const prioridades = ordenarPorPrioridade(opcoes)
  const orcamento = opcoes.minutos
  const passos: PassoSessao[] = []
  const usadas = new Set(opcoes.jaVistas)

  const adicionarQuestoes = (
    candidatos: ItemPriorizado[],
    minutosBloco: number,
    filtro?: (q: Questao) => boolean,
  ) => {
    let restante = minutosBloco
    for (const item of candidatos) {
      if (restante < MINUTOS_POR_QUESTAO) break
      const pool = questoesDoConceito(item.conceitoId).filter((q) => filtro?.(q) ?? true)
      const escolhida = escolherQuestao(pool, opcoes.estados[item.conceitoId], usadas)
      if (!escolhida) continue
      usadas.add(escolhida.id)
      passos.push({
        tipo: 'questao',
        conceitoId: item.conceitoId,
        questaoId: escolhida.id,
        motivo: item.motivo,
        explicacao: item.explicacao,
        minutos: MINUTOS_POR_QUESTAO,
      })
      restante -= MINUTOS_POR_QUESTAO
    }
  }

  // 1. APRENDER — conceitos ainda não estudados
  const novos = prioridades.filter((p) => !opcoes.estados[p.conceitoId]?.aulaConcluida)
  let restanteAprender = orcamento * MIX.aprender
  for (const item of novos) {
    const conceito = getConceito(item.conceitoId) as Conceito | undefined
    if (!conceito || restanteAprender < conceito.minutosEstimados) break
    passos.push({
      tipo: 'aula',
      conceitoId: conceito.id,
      motivo: 'conteudo_novo',
      explicacao: ROTULO_SELECAO.conteudo_novo,
      minutos: conceito.minutosEstimados,
    })
    restanteAprender -= conceito.minutosEstimados
  }

  // 2. PRATICAR — os pontos mais fracos que já foram estudados
  const praticaveis = prioridades.filter((p) => opcoes.estados[p.conceitoId]?.n)
  adicionarQuestoes(praticaveis.length ? praticaveis : prioridades, orcamento * MIX.praticar)

  // 3. REVISAR — bloco protegido: nunca é sacrificado quando o tempo aperta
  const paraRevisar = prioridades.filter(
    (p) => p.motivo === 'revisao_vencida' || p.motivo === 'erro_recente',
  )
  adicionarQuestoes(paraRevisar, orcamento * MIX.revisar)

  // 4. PEGADINHA — um erro típico de prova
  const pegadinhas = prioridades.filter((p) =>
    getConceito(p.conceitoId)?.etiquetas.includes('PEGADINHA'),
  )
  adicionarQuestoes(pegadinhas, orcamento * MIX.pegadinha)

  const finais = intercalar(passos)
  const minutosEstimados = Math.round(finais.reduce((t, p) => t + p.minutos, 0))

  // Resumo dos macrotemas tocados
  const contagem = new Map<string, number>()
  for (const p of finais) {
    const macro = MACROTEMAS.find((m) =>
      m.microtemas.some((mt) => mt.id === getConceito(p.conceitoId)?.microtemaId),
    )
    if (macro) contagem.set(macro.id, (contagem.get(macro.id) ?? 0) + 1)
  }
  const focos = [...contagem.entries()]
    .map(([macrotemaId, itens]) => ({
      macrotemaId,
      nome: MACROTEMAS.find((m) => m.id === macrotemaId)?.nome ?? '',
      itens,
    }))
    .sort((a, b) => b.itens - a.itens)

  return {
    passos: finais,
    minutosEstimados,
    justificativa: justificar(finais, focos, opcoes),
    focos,
  }
}

function justificar(
  passos: PassoSessao[],
  focos: PlanoSessao['focos'],
  opcoes: OpcoesPlano,
): string {
  if (!passos.length) return 'Nada pendente por agora. Você está em dia.'

  const principal = focos[0]
  const revisoes = passos.filter((p) => p.motivo === 'revisao_vencida').length
  const erros = passos.filter((p) => p.motivo === 'erro_recente').length
  const novos = passos.filter((p) => p.tipo === 'aula').length

  const partes: string[] = []
  if (principal) {
    const estado = CONCEITOS.filter((c) =>
      MACROTEMAS.find((m) => m.id === principal.macrotemaId)?.microtemas.some(
        (mt) => mt.id === c.microtemaId,
      ),
    )
      .map((c) => opcoes.estados[c.id])
      .filter(Boolean) as EstadoConceito[]

    const media = estado.length
      ? estado.reduce((s, e) => s + dominioEfetivo(e, opcoes.agora), 0) / estado.length
      : 0

    partes.push(
      estado.length
        ? `Foco em ${principal.nome}, onde seu domínio está em ${Math.round(media * 100)}%.`
        : `Começando por ${principal.nome}.`,
    )
  }
  if (erros) partes.push(`${erros} ${erros === 1 ? 'questão' : 'questões'} de erro recente.`)
  if (revisoes) partes.push(`${revisoes} em revisão vencida.`)
  if (novos) partes.push(`${novos} ${novos === 1 ? 'aula nova' : 'aulas novas'}.`)

  return partes.join(' ')
}

/**
 * Sessão da véspera: só o essencial, sem conteúdo longo.
 * Prioriza pegadinhas, conceitos-chave e os erros do próprio aluno.
 */
export function montarVespera(opcoes: OpcoesPlano): PlanoSessao {
  const prioridades = ordenarPorPrioridade(opcoes)
  const passos: PassoSessao[] = []
  const usadas = new Set(opcoes.jaVistas)
  let restante = opcoes.minutos

  const alvos = [
    ...prioridades.filter((p) => p.motivo === 'erro_recente'),
    ...prioridades.filter((p) => getConceito(p.conceitoId)?.etiquetas.includes('PEGADINHA')),
    ...prioridades.filter((p) => getConceito(p.conceitoId)?.etiquetas.includes('DECORAR')),
    ...prioridades,
  ]

  const vistos = new Set<string>()
  for (const item of alvos) {
    if (restante < MINUTOS_POR_QUESTAO) break
    if (vistos.has(item.conceitoId)) continue
    vistos.add(item.conceitoId)

    const escolhida = escolherQuestao(
      questoesDoConceito(item.conceitoId),
      opcoes.estados[item.conceitoId],
      usadas,
    )
    if (!escolhida) continue
    usadas.add(escolhida.id)
    passos.push({
      tipo: 'questao',
      conceitoId: item.conceitoId,
      questaoId: escolhida.id,
      motivo: item.motivo,
      explicacao: item.explicacao,
      minutos: MINUTOS_POR_QUESTAO,
    })
    restante -= MINUTOS_POR_QUESTAO
  }

  return {
    passos,
    minutosEstimados: Math.round(passos.reduce((t, p) => t + p.minutos, 0)),
    justificativa: 'Revisão expressa: pegadinhas, pontos de decorar e seus erros recentes.',
    focos: [],
  }
}
