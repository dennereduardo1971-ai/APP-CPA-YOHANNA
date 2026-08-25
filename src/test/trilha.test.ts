import { describe, expect, it } from 'vitest'
import { MACROTEMAS, MICROTEMAS } from '@/lib/content'
import { estadoInicial } from '@/lib/engine/mastery'
import {
  LIMIAR_DESAFIO,
  LIMIAR_LIBERACAO,
  etapaAtual,
  montarTrilha,
  progressoDaTrilha,
  type ContextoTrilha,
} from '@/lib/engine/trilha'
import type { EstadoConceito, Microtema, Resposta } from '@/lib/types'

const AGORA = Date.parse('2026-08-24T12:00:00Z')

const comConteudo = (): Microtema[] => MICROTEMAS.filter((m) => m.conceitos.length > 0)

const macroDe = (micro: Microtema) =>
  MACROTEMAS.find((m) => m.microtemas.some((mt) => mt.id === micro.id))!

/** Constrói estados para um microtema, com domínio e aula concluída à escolha. */
function estadosDoMicrotema(
  micro: Microtema,
  { m, aulaConcluida, n }: { m: number; aulaConcluida: boolean; n: number },
): Record<string, EstadoConceito> {
  const macro = macroDe(micro)
  const saida: Record<string, EstadoConceito> = {}
  for (const c of micro.conceitos) {
    saida[c.id] = {
      ...estadoInicial(c.id, micro.id, macro.id),
      m,
      n,
      acertos: Math.round(n * m),
      aulaConcluida,
      // Prática recente: sem isso o esquecimento derruba o domínio efetivo.
      ultimaPratica: AGORA - 3600_000,
      revisarEm: AGORA + 86_400_000,
      estabilidade: 30,
    }
  }
  return saida
}

const ctx = (estados: Record<string, EstadoConceito> = {}, respostas: Resposta[] = []): ContextoTrilha => ({
  estados,
  respostas,
  agora: AGORA,
})

describe('montagem da trilha', () => {
  it('devolve um estágio por macrotema, na ordem do programa', () => {
    const trilha = montarTrilha(ctx())
    expect(trilha).toHaveLength(MACROTEMAS.length)
    expect(trilha.map((e) => e.macrotema.id)).toEqual(MACROTEMAS.map((m) => m.id))
  })

  it('cobre todos os microtemas oficiais, inclusive os sem conteúdo', () => {
    const nos = montarTrilha(ctx()).flatMap((e) => e.nos)
    expect(nos).toHaveLength(MICROTEMAS.length)
  })

  it('microtema sem conteúdo não inventa etapas', () => {
    for (const no of montarTrilha(ctx()).flatMap((e) => e.nos)) {
      if (no.semConteudo) expect(no.etapas, no.microtema.id).toHaveLength(0)
    }
  })

  it('microtema com conteúdo tem a cadeia lição → miniquiz → desafio → revisão', () => {
    for (const no of montarTrilha(ctx()).flatMap((e) => e.nos)) {
      if (no.semConteudo) continue
      const tipos = no.etapas.map((e) => e.tipo)
      expect(tipos.filter((t) => t === 'licao').length, no.microtema.id).toBe(
        no.microtema.conceitos.length,
      )
      // A ordem importa: os três nós de prática vêm depois das lições.
      expect(tipos.slice(-3), no.microtema.id).toEqual(['miniquiz', 'desafio', 'revisao'])
    }
  })
})

describe('regras de acesso', () => {
  it('nenhum macrotema tranca — a especificação pede acesso livre aos módulos', () => {
    const trilha = montarTrilha(ctx())
    // Todo estágio é alcançável: nenhum campo do estágio pode negar entrada.
    for (const estagio of trilha) {
      expect(Object.keys(estagio)).not.toContain('bloqueado')
      expect(Object.keys(estagio)).not.toContain('liberado')
    }
  })

  it('sem nenhum progresso, miniquiz e desafio ficam fechados', () => {
    for (const no of montarTrilha(ctx()).flatMap((e) => e.nos)) {
      if (no.semConteudo) continue
      for (const etapa of no.etapas) {
        if (etapa.tipo === 'miniquiz' || etapa.tipo === 'desafio') {
          expect(etapa.situacao, `${no.microtema.id}/${etapa.tipo}`).not.toBe('disponivel')
        }
      }
    }
  })

  it('miniquiz só abre depois de todas as aulas do tópico', () => {
    const micro = comConteudo().find((m) => m.conceitos.length > 1 && !m.preRequisitos.length)
    if (!micro) return

    const parcial = estadosDoMicrotema(micro, { m: 0.5, aulaConcluida: true, n: 2 })
    // Uma aula ainda por concluir derruba o miniquiz.
    parcial[micro.conceitos[0].id] = { ...parcial[micro.conceitos[0].id], aulaConcluida: false }
    const antes = montarTrilha(ctx(parcial))
      .flatMap((e) => e.nos)
      .find((n) => n.microtema.id === micro.id)!
      .etapas.find((e) => e.tipo === 'miniquiz')!
    expect(antes.situacao).toBe('bloqueada')

    const completo = estadosDoMicrotema(micro, { m: 0.5, aulaConcluida: true, n: 2 })
    const depois = montarTrilha(ctx(completo))
      .flatMap((e) => e.nos)
      .find((n) => n.microtema.id === micro.id)!
      .etapas.find((e) => e.tipo === 'miniquiz')!
    expect(['disponivel', 'concluida', 'vazia']).toContain(depois.situacao)
  })

  it('desafio exige domínio no próprio tópico', () => {
    const micro = comConteudo().find((m) => !m.preRequisitos.length)!
    const fraco = estadosDoMicrotema(micro, { m: 0.2, aulaConcluida: true, n: 5 })
    const desafio = montarTrilha(ctx(fraco))
      .flatMap((e) => e.nos)
      .find((n) => n.microtema.id === micro.id)!
      .etapas.find((e) => e.tipo === 'desafio')!
    expect(['bloqueada', 'vazia']).toContain(desafio.situacao)
    expect(LIMIAR_DESAFIO).toBeGreaterThan(0.2)
  })

  it('o limiar de liberação entre tópicos é o mesmo anunciado na interface', () => {
    expect(LIMIAR_LIBERACAO).toBe(0.6)
  })
})

describe('coerência das etapas', () => {
  it('etapa disponível sempre tem destino; bloqueada e vazia nunca têm', () => {
    const estados = Object.assign(
      {},
      ...comConteudo().map((m) => estadosDoMicrotema(m, { m: 0.8, aulaConcluida: true, n: 10 })),
    )
    for (const no of montarTrilha(ctx(estados)).flatMap((e) => e.nos)) {
      for (const etapa of no.etapas) {
        if (etapa.situacao === 'disponivel') {
          expect(etapa.destino, `${etapa.id} disponível sem destino`).toBeTruthy()
        }
        if (etapa.situacao === 'bloqueada' || etapa.situacao === 'vazia') {
          expect(etapa.destino, `${etapa.id} fechada mas com destino`).toBeUndefined()
        }
      }
    }
  })

  it('todo destino aponta para uma rota que existe', () => {
    const rotas = ['/conteudo/', '/questoes', '/revisao', '/rapido', '/simulados']
    const estados = Object.assign(
      {},
      ...comConteudo().map((m) => estadosDoMicrotema(m, { m: 0.8, aulaConcluida: true, n: 10 })),
    )
    for (const no of montarTrilha(ctx(estados)).flatMap((e) => e.nos)) {
      for (const etapa of no.etapas) {
        if (!etapa.destino) continue
        expect(rotas.some((r) => etapa.destino!.startsWith(r)), etapa.destino).toBe(true)
      }
    }
  })

  it('toda etapa explica o próprio estado em uma linha', () => {
    for (const no of montarTrilha(ctx()).flatMap((e) => e.nos)) {
      for (const etapa of no.etapas) {
        expect(etapa.detalhe.length, etapa.id).toBeGreaterThan(5)
        expect(etapa.detalhe.length, etapa.id).toBeLessThan(120)
      }
    }
  })
})

describe('posição atual e progresso', () => {
  it('aponta uma única etapa, e é a primeira disponível na ordem da trilha', () => {
    const trilha = montarTrilha(ctx())
    const atual = etapaAtual(trilha)
    const primeira = trilha
      .flatMap((e) => e.nos)
      .flatMap((n) => n.etapas)
      .find((e) => e.situacao === 'disponivel')
    expect(atual?.etapa.id).toBe(primeira?.id)
  })

  it('sem nenhuma etapa disponível, não inventa posição', () => {
    // Trilha vazia: nenhum estágio, nenhuma etapa.
    expect(etapaAtual([])).toBeNull()
  })

  it('o progresso ignora etapas vazias — conteúdo não escrito não é dívida do aluno', () => {
    const trilha = montarTrilha(ctx())
    const todas = trilha.flatMap((e) => e.nos.flatMap((n) => n.etapas))
    const vazias = todas.filter((e) => e.situacao === 'vazia').length
    const { total } = progressoDaTrilha(trilha)
    expect(total).toBe(todas.length - vazias)
  })

  it('com tudo dominado, o progresso não passa do total', () => {
    const estados = Object.assign(
      {},
      ...comConteudo().map((m) => estadosDoMicrotema(m, { m: 0.95, aulaConcluida: true, n: 20 })),
    )
    const respostas: Resposta[] = comConteudo().map((m, i) => ({
      id: `r${i}`,
      questaoId: `q${i}`,
      macrotemaId: macroDe(m).id,
      microtemaId: m.id,
      conceitoId: m.conceitos[0].id,
      dificuldade: 'dificil',
      escolhida: 'a',
      correta: 'a',
      acertou: true,
      tempoMs: 30_000,
      tentativa: 1,
      data: AGORA - 1000,
      origem: 'pratica',
    }))
    const { concluidas, total } = progressoDaTrilha(montarTrilha(ctx(estados, respostas)))
    expect(concluidas).toBeLessThanOrEqual(total)
    expect(concluidas).toBeGreaterThan(0)
  })
})
