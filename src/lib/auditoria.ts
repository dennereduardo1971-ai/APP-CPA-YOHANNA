import type { Conceito, Questao } from './types'
import { MACROTEMAS, MICROTEMAS, CONCEITOS } from './content'
import { QUESTOES } from './questions'
import type { TipoConteudo } from './content/overlay'

/**
 * Auditoria do conteúdo — o que o painel `/admin` mostra no Panorama.
 *
 * Existe porque `docs/AUDITORIA-CONTEUDO.md` envelhece: é um retrato tirado
 * no dia em que foi escrito. Isto aqui lê o conteúdo em vigor (inclusive as
 * edições locais do painel) e responde sempre sobre o estado de hoje.
 *
 * TS puro, sem React: dá para testar sem DOM, como o resto de `lib/`.
 */

/**
 * Três coisas diferentes que o painel não deve misturar:
 *
 * - `lacuna`     — não foi escrito ainda. É trabalho de autoria, não erro.
 * - `incompleto` — existe, mas não cumpre a regra 6 (9 blocos, 3 níveis).
 * - `defeito`    — está errado e quebra a experiência de quem estuda.
 */
export type Severidade = 'lacuna' | 'incompleto' | 'defeito'

export const ROTULO_SEVERIDADE: Record<Severidade, string> = {
  lacuna: 'Falta escrever',
  incompleto: 'Incompleto',
  defeito: 'Defeito',
}

export interface Achado {
  itemId: string
  tipo: TipoConteudo
  titulo: string
  /** Onde o item vive, para o painel dar contexto sem o usuário caçar. */
  contexto: string
  problema: string
  severidade: Severidade
  /** Rota do editor que resolve o achado, quando existe uma. */
  destino?: string
}

export interface ResumoAuditoria {
  macrotemas: number
  microtemas: number
  microtemasComConteudo: number
  conceitos: number
  conceitosCompletos: number
  questoes: number
  conceitosComQuestao: number
  porSeveridade: Record<Severidade, number>
}

export interface Auditoria {
  achados: Achado[]
  resumo: ResumoAuditoria
}

/** Blocos que a regra 6 exige e que a migração do conteúdo legado pode não ter. */
const BLOCOS_NOVOS: { campo: keyof Conceito['explicacao']; rotulo: string }[] = [
  { campo: 'porQueImporta', rotulo: 'Por que importa' },
  { campo: 'exemploAplicado', rotulo: 'Exemplo aplicado ao mercado' },
  { campo: 'revisaoRapida', rotulo: 'Revisão rápida' },
]

const vazio = (v: unknown) =>
  v == null || (typeof v === 'string' && !v.trim()) || (Array.isArray(v) && v.length === 0)

/** `true` quando o conceito cumpre os 9 blocos e os 3 níveis. */
export function conceitoCompleto(conceito: Conceito): boolean {
  return (
    BLOCOS_NOVOS.every(({ campo }) => !vazio(conceito.explicacao[campo])) &&
    !vazio(conceito.niveis?.entenda) &&
    !vazio(conceito.niveis?.aprofunde)
  )
}

function auditarConceito(conceito: Conceito, contexto: string): Achado[] {
  const achados: Achado[] = []
  const base = {
    itemId: conceito.id,
    tipo: 'conceito' as const,
    titulo: conceito.titulo,
    contexto,
    destino: `/admin/conceito/${conceito.id}`,
  }

  const faltando = BLOCOS_NOVOS.filter(({ campo }) => vazio(conceito.explicacao[campo]))
  if (faltando.length) {
    achados.push({
      ...base,
      severidade: 'incompleto',
      problema: `Sem ${faltando.map((b) => `"${b.rotulo}"`).join(', ')} — a regra 6 pede os 9 blocos.`,
    })
  }

  if (vazio(conceito.niveis?.entenda) || vazio(conceito.niveis?.aprofunde)) {
    achados.push({
      ...base,
      severidade: 'incompleto',
      problema: 'Sem os níveis 1 (Entenda) e/ou 3 (Aprofunde).',
    })
  }

  if (QUESTOES.every((q) => q.conceitoId !== conceito.id)) {
    achados.push({
      ...base,
      severidade: 'lacuna',
      problema: 'Nenhuma questão escrita para este conceito.',
    })
  }

  return achados
}

function auditarQuestao(questao: Questao, contexto: string): Achado[] {
  const achados: Achado[] = []
  const base = {
    itemId: questao.id,
    tipo: 'questao' as const,
    titulo: questao.enunciado.slice(0, 70),
    contexto,
    destino: `/admin/questao/${questao.id}`,
  }

  const corretas = questao.alternativas.filter((a) => a.correta).length
  if (corretas !== 1) {
    achados.push({
      ...base,
      severidade: 'defeito',
      problema:
        corretas === 0
          ? 'Nenhuma alternativa marcada como correta.'
          : `${corretas} alternativas marcadas como corretas.`,
    })
  }

  if (questao.alternativas.length < 2) {
    achados.push({ ...base, severidade: 'defeito', problema: 'Menos de duas alternativas.' })
  }

  const semJustificativa = questao.alternativas.filter((a) => vazio(a.justificativa)).length
  if (semJustificativa) {
    achados.push({
      ...base,
      severidade: 'incompleto',
      problema: `${semJustificativa} alternativa(s) sem justificativa — toda incorreta precisa explicar por quê.`,
    })
  }

  if (vazio(questao.explicacao)) {
    achados.push({ ...base, severidade: 'incompleto', problema: 'Sem explicação da resposta.' })
  }

  return achados
}

/** Ordem de exibição: defeito primeiro — é o que atrapalha quem estuda hoje. */
const PESO_SEVERIDADE: Record<Severidade, number> = { defeito: 0, incompleto: 1, lacuna: 2 }

export function auditar(): Auditoria {
  const achados: Achado[] = []

  for (const macro of MACROTEMAS) {
    if (!macro.pesoVerificado) {
      achados.push({
        itemId: macro.id,
        tipo: 'macrotema',
        titulo: macro.nome,
        contexto: `Módulo ${macro.ordem}`,
        severidade: 'incompleto',
        problema: 'Peso na prova ainda não conferido contra documento oficial.',
        destino: '/admin/estrutura',
      })
    }

    for (const micro of macro.microtemas) {
      const contexto = `${micro.codigo} · ${macro.nome}`

      if (micro.conceitos.length === 0) {
        achados.push({
          itemId: micro.id,
          tipo: 'microtema',
          titulo: micro.nome,
          contexto,
          severidade: 'lacuna',
          problema: 'Microtema do programa oficial sem nenhuma aula escrita.',
          destino: '/admin/estrutura',
        })
      }

      for (const conceito of micro.conceitos) {
        achados.push(...auditarConceito(conceito, contexto))
      }
    }
  }

  for (const questao of QUESTOES) {
    const micro = MICROTEMAS.find((mt) => mt.id === questao.microtemaId)
    achados.push(...auditarQuestao(questao, micro ? micro.nome : 'sem microtema'))
  }

  achados.sort((a, b) => PESO_SEVERIDADE[a.severidade] - PESO_SEVERIDADE[b.severidade])

  const comQuestao = new Set(QUESTOES.map((q) => q.conceitoId))

  return {
    achados,
    resumo: {
      macrotemas: MACROTEMAS.length,
      microtemas: MICROTEMAS.length,
      microtemasComConteudo: MICROTEMAS.filter((mt) => mt.conceitos.length > 0).length,
      conceitos: CONCEITOS.length,
      conceitosCompletos: CONCEITOS.filter(conceitoCompleto).length,
      questoes: QUESTOES.length,
      conceitosComQuestao: CONCEITOS.filter((c) => comQuestao.has(c.id)).length,
      porSeveridade: {
        defeito: achados.filter((a) => a.severidade === 'defeito').length,
        incompleto: achados.filter((a) => a.severidade === 'incompleto').length,
        lacuna: achados.filter((a) => a.severidade === 'lacuna').length,
      },
    },
  }
}
