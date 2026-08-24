import type { Conceito, Macrotema, Microtema, Questao } from '../types'

/**
 * Camada de edição local do conteúdo — o que o painel `/admin` grava.
 *
 * O conteúdo canônico continua sendo código (`src/lib/content/m*.ts`), como
 * manda a regra 2. Este arquivo NÃO substitui aquilo: guarda apenas o
 * *delta* que o usuário aplicou neste dispositivo, para que uma correção
 * urgente (uma alíquota que mudou, um erro de digitação) não precise esperar
 * um rebuild — e para que esse delta possa ser exportado e devolvido ao
 * repositório depois. Overlay vazio = app exatamente igual ao código.
 *
 * Tudo aqui é função pura sobre dados: nada de React, nada de store. É o
 * mesmo princípio de `engine/` e pela mesma razão — dá para testar sem DOM.
 */

/** Os quatro tipos que o painel edita. */
export type TipoConteudo = 'macrotema' | 'microtema' | 'conceito' | 'questao'

/** Patches guardam campos soltos; a hierarquia é remontada a cada rebuild. */
export type PatchMacrotema = Partial<Omit<Macrotema, 'id' | 'microtemas'>>
export type PatchMicrotema = Partial<Omit<Microtema, 'id' | 'conceitos'>>
export type PatchConceito = Partial<Omit<Conceito, 'id'>>
export type PatchQuestao = Partial<Omit<Questao, 'id'>>

export interface OverlayConteudo {
  macrotemas: Record<string, PatchMacrotema>
  microtemas: Record<string, PatchMicrotema>
  conceitos: Record<string, PatchConceito>
  questoes: Record<string, PatchQuestao>
  /** Itens criados no painel — entram inteiros, não como patch. */
  criados: {
    macrotemas: Macrotema[]
    microtemas: Microtema[]
    conceitos: Conceito[]
    questoes: Questao[]
  }
  removidos: {
    macrotemas: string[]
    microtemas: string[]
    conceitos: string[]
    questoes: string[]
  }
}

export const overlayVazio = (): OverlayConteudo => ({
  macrotemas: {},
  microtemas: {},
  conceitos: {},
  questoes: {},
  criados: { macrotemas: [], microtemas: [], conceitos: [], questoes: [] },
  removidos: { macrotemas: [], microtemas: [], conceitos: [], questoes: [] },
})

/** Quantas edições o overlay carrega. Zero = conteúdo igual ao do código. */
export function contarAlteracoes(overlay: OverlayConteudo): number {
  const { macrotemas, microtemas, conceitos, questoes, criados, removidos } = overlay
  return (
    Object.keys(macrotemas).length +
    Object.keys(microtemas).length +
    Object.keys(conceitos).length +
    Object.keys(questoes).length +
    Object.values(criados).reduce((s, lista) => s + lista.length, 0) +
    Object.values(removidos).reduce((s, lista) => s + lista.length, 0)
  )
}

export const overlayEstaVazio = (overlay: OverlayConteudo) => contarAlteracoes(overlay) === 0

/**
 * Normaliza um overlay vindo do `localStorage`. Estado gravado por uma versão
 * anterior pode não ter todos os campos, e um `undefined` no meio do rebuild
 * derruba o app inteiro na inicialização.
 */
export function normalizarOverlay(bruto: Partial<OverlayConteudo> | null | undefined): OverlayConteudo {
  const vazio = overlayVazio()
  if (!bruto || typeof bruto !== 'object') return vazio
  return {
    macrotemas: bruto.macrotemas ?? vazio.macrotemas,
    microtemas: bruto.microtemas ?? vazio.microtemas,
    conceitos: bruto.conceitos ?? vazio.conceitos,
    questoes: bruto.questoes ?? vazio.questoes,
    criados: { ...vazio.criados, ...bruto.criados },
    removidos: { ...vazio.removidos, ...bruto.removidos },
  }
}

/* ------------------------------------------------------------------ */
/* Remontagem                                                          */
/* ------------------------------------------------------------------ */

const porOrdem = <T extends { ordem: number }>(a: T, b: T) => a.ordem - b.ordem

/**
 * Aplica o overlay sobre o conteúdo do código e devolve a árvore remontada.
 *
 * A remoção é em CASCATA de propósito: apagar um macrotema e deixar seus
 * microtemas órfãos produziria conteúdo que a trilha e as estatísticas não
 * conseguem localizar — um estado pior do que a remoção que o usuário pediu.
 */
export function montarConteudo(base: Macrotema[], overlay: OverlayConteudo): Macrotema[] {
  const removidosMacro = new Set(overlay.removidos.macrotemas)
  const removidosMicro = new Set(overlay.removidos.microtemas)
  const removidosConceito = new Set(overlay.removidos.conceitos)

  // 1. Achata o conteúdo do código, separando cada nível dos filhos.
  const macros = new Map<string, Macrotema>()
  const micros = new Map<string, Microtema>()
  const conceitos = new Map<string, Conceito>()

  for (const macro of base) {
    macros.set(macro.id, { ...macro, microtemas: [] })
    for (const micro of macro.microtemas) {
      micros.set(micro.id, { ...micro, conceitos: [] })
      for (const conceito of micro.conceitos) conceitos.set(conceito.id, { ...conceito })
    }
  }

  // 2. Itens criados no painel entram junto com os do código.
  for (const macro of overlay.criados.macrotemas) macros.set(macro.id, { ...macro, microtemas: [] })
  for (const micro of overlay.criados.microtemas) micros.set(micro.id, { ...micro, conceitos: [] })
  for (const conceito of overlay.criados.conceitos) conceitos.set(conceito.id, { ...conceito })

  // 3. Patches por id.
  for (const [id, patch] of Object.entries(overlay.macrotemas)) {
    const atual = macros.get(id)
    if (atual) macros.set(id, { ...atual, ...patch, id, microtemas: [] })
  }
  for (const [id, patch] of Object.entries(overlay.microtemas)) {
    const atual = micros.get(id)
    if (atual) micros.set(id, { ...atual, ...patch, id, conceitos: [] })
  }
  for (const [id, patch] of Object.entries(overlay.conceitos)) {
    const atual = conceitos.get(id)
    if (atual) conceitos.set(id, { ...atual, ...patch, id })
  }

  // 4. Remoção em cascata: some o pai, somem os filhos.
  for (const id of removidosMacro) macros.delete(id)
  for (const [id, micro] of micros) {
    if (removidosMicro.has(id) || !macros.has(micro.macrotemaId)) micros.delete(id)
  }
  for (const [id, conceito] of conceitos) {
    if (removidosConceito.has(id) || !micros.has(conceito.microtemaId)) conceitos.delete(id)
  }

  // 5. Remonta a hierarquia.
  for (const conceito of conceitos.values()) {
    micros.get(conceito.microtemaId)?.conceitos.push(conceito)
  }
  for (const micro of micros.values()) {
    macros.get(micro.macrotemaId)?.microtemas.push(micro)
  }

  const saida = [...macros.values()].sort(porOrdem)
  for (const macro of saida) {
    macro.microtemas.sort(porOrdem)
  }
  return saida
}

/**
 * Aplica o overlay ao banco de questões.
 *
 * Recebe o conteúdo JÁ remontado porque questão sem conceito é questão que o
 * player não consegue explicar: se o conceito sumiu, a questão sai junto.
 */
export function montarQuestoes(
  base: Questao[],
  conteudo: Macrotema[],
  overlay: OverlayConteudo,
): Questao[] {
  const removidas = new Set(overlay.removidos.questoes)
  const conceitosVivos = new Set(
    conteudo.flatMap((m) => m.microtemas.flatMap((mt) => mt.conceitos.map((c) => c.id))),
  )

  const questoes = new Map<string, Questao>()
  for (const q of base) questoes.set(q.id, { ...q })
  for (const q of overlay.criados.questoes) questoes.set(q.id, { ...q })

  for (const [id, patch] of Object.entries(overlay.questoes)) {
    const atual = questoes.get(id)
    if (atual) questoes.set(id, { ...atual, ...patch, id })
  }

  return [...questoes.values()].filter(
    (q) => !removidas.has(q.id) && conceitosVivos.has(q.conceitoId),
  )
}
