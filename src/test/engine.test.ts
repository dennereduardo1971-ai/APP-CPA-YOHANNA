import { describe, expect, it } from 'vitest'
import {
  dificuldadeAlvo,
  dominioEfetivo,
  estadoInicial,
  nivelDominio,
  probabilidadeAcerto,
  registrarResposta,
  retencao,
} from '@/lib/engine/mastery'
import {
  atualizarSequencia,
  diaLocal,
  nivelPorXP,
  xpPorResposta,
} from '@/lib/engine/gamification'
import { escolherQuestao, pontuarConceito } from '@/lib/engine/scheduler'
import { agregar, cobertura, prontidao } from '@/lib/engine/stats'
import type { Questao, Resposta } from '@/lib/types'

const DIA = 86_400_000
const novo = () => estadoInicial('c-x', 'm1.1', 'm1')

describe('domínio', () => {
  it('mantém o nível dentro de [0,1] em qualquer sequência de respostas', () => {
    let estado = novo()
    for (let i = 0; i < 200; i++) {
      const acertou = i % 3 !== 0
      estado = registrarResposta(estado, acertou, (i % 5) - 2, Date.now()).estado
      expect(estado.m).toBeGreaterThanOrEqual(0)
      expect(estado.m).toBeLessThanOrEqual(1)
    }
  })

  it('sobe com acerto e cai com erro', () => {
    const base = novo()
    const acerto = registrarResposta(base, true, 0, Date.now())
    const erro = registrarResposta(base, false, 0, Date.now())
    expect(acerto.deltaM).toBeGreaterThan(0)
    expect(erro.deltaM).toBeLessThan(0)
  })

  it('penaliza menos o erro por desatenção do que o erro de conceito', () => {
    const base = novo()
    const desatencao = registrarResposta(base, false, 0, Date.now(), 'desatencao')
    const conceito = registrarResposta(base, false, 0, Date.now(), 'conceito')
    expect(desatencao.estado.theta).toBeGreaterThan(conceito.estado.theta)
  })

  it('estabiliza o passo de aprendizado com a experiência', () => {
    const saltoInicial = Math.abs(registrarResposta(novo(), true, 0, Date.now()).estado.theta)

    let muitos = novo()
    for (let i = 0; i < 50; i++) {
      muitos = registrarResposta(muitos, true, 0, Date.now()).estado
    }
    const antes = muitos.theta
    muitos = registrarResposta(muitos, true, 0, Date.now()).estado
    expect(muitos.theta - antes).toBeLessThan(saltoInicial)
  })

  it('parte de 50% de domínio bruto, mas 0% de domínio efetivo', () => {
    const base = novo()
    expect(base.m).toBeCloseTo(0.5, 5)
    expect(dominioEfetivo(base, Date.now())).toBe(0)
  })

  it('a probabilidade de acerto cresce com a habilidade', () => {
    expect(probabilidadeAcerto(2, 0)).toBeGreaterThan(probabilidadeAcerto(0, 0))
    expect(probabilidadeAcerto(0, 0)).toBeCloseTo(0.5, 5)
  })
})

describe('esquecimento', () => {
  it('a retenção cai com o tempo sem prática', () => {
    const agora = Date.now()
    const estado = registrarResposta(novo(), true, 0, agora).estado
    expect(retencao(estado, agora)).toBeCloseTo(1, 3)
    expect(retencao(estado, agora + 30 * DIA)).toBeLessThan(retencao(estado, agora + DIA))
  })

  it('o domínio efetivo nunca zera para quem já aprendeu', () => {
    const agora = Date.now()
    let estado = novo()
    for (let i = 0; i < 10; i++) estado = registrarResposta(estado, true, 0, agora).estado
    expect(dominioEfetivo(estado, agora + 3650 * DIA)).toBeGreaterThan(0)
  })

  it('conceito nunca praticado tem domínio zero', () => {
    expect(dominioEfetivo(novo(), Date.now())).toBe(0)
  })

  it('acerto amplia o intervalo de revisão e erro o encurta', () => {
    const agora = Date.now()
    const base = registrarResposta(novo(), true, 0, agora).estado
    const depoisAcerto = registrarResposta(base, true, 0, agora).estado
    const depoisErro = registrarResposta(base, false, 0, agora).estado
    expect(depoisAcerto.estabilidade).toBeGreaterThan(base.estabilidade)
    expect(depoisErro.estabilidade).toBeLessThan(base.estabilidade)
  })
})

describe('faixas de domínio', () => {
  it('classifica conforme a escala definida pelo produto', () => {
    expect(nivelDominio(0.2)).toBe('inicial')
    expect(nivelDominio(0.45)).toBe('desenvolvimento')
    expect(nivelDominio(0.65)).toBe('intermediario')
    expect(nivelDominio(0.8)).toBe('bom')
    expect(nivelDominio(0.95)).toBe('dominado')
  })

  it('sugere dificuldade crescente conforme a habilidade', () => {
    expect(dificuldadeAlvo(-2)).toBe('facil')
    expect(dificuldadeAlvo(3)).toBe('dificil')
  })
})

describe('seleção adaptativa', () => {
  const q = (id: string, b: number): Questao => ({
    id,
    macrotemaId: 'm1',
    microtemaId: 'm1.1',
    conceitoId: 'c-x',
    tipo: 'conceitual',
    dificuldade: 'media',
    habilidade: 'teste',
    enunciado: '',
    alternativas: [],
    explicacao: '',
    tags: [],
    b,
    origem: 'autoral',
  })

  it('escolhe a questão com chance de acerto próxima de 80%', () => {
    // theta = 0 => o alvo é b ≈ -1,386
    const escolhida = escolherQuestao([q('fácil', -3), q('alvo', -1.4), q('difícil', 2)], undefined, new Set())
    expect(escolhida?.id).toBe('alvo')
  })

  it('prefere questões ainda não vistas', () => {
    const escolhida = escolherQuestao(
      [q('vista', -1.4), q('nova', -1.0)],
      undefined,
      new Set(['vista']),
    )
    expect(escolhida?.id).toBe('nova')
  })

  it('não quebra com lista vazia', () => {
    expect(escolherQuestao([], undefined, new Set())).toBeUndefined()
  })
})

describe('prioridade de estudo', () => {
  const ctx = (estados = {}) => ({
    estados,
    pesoMacrotema: { m1: 0.25 },
    agora: Date.now(),
    recentes: new Set<string>(),
  })

  it('conceito nunca visto entra como conteúdo novo', () => {
    expect(pontuarConceito('c-x', 'm1', ctx()).motivo).toBe('conteudo_novo')
  })

  it('erro em aberto domina a escolha', () => {
    const comErro = { ...novo(), n: 4, m: 0.6, theta: 0.4, errosAbertos: 2, ultimaPratica: Date.now() }
    expect(pontuarConceito('c-x', 'm1', ctx({ 'c-x': comErro })).motivo).toBe('erro_recente')
  })

  it('conceito dominado entra em manutenção, com score baixo', () => {
    const agora = Date.now()
    let estado = novo()
    for (let i = 0; i < 30; i++) estado = registrarResposta(estado, true, -1, agora).estado

    const dominado = pontuarConceito('c-x', 'm1', { ...ctx({ 'c-x': estado }), agora })
    const fraco = pontuarConceito('c-x', 'm1', {
      ...ctx({ 'c-x': { ...estado, m: 0.1, theta: -2 } }),
      agora,
    })
    expect(dominado.score).toBeLessThan(fraco.score)
  })

  it('penaliza conceito visto nas últimas 24h', () => {
    const estado = { ...novo(), n: 3, m: 0.5, ultimaPratica: Date.now() }
    const base = pontuarConceito('c-x', 'm1', ctx({ 'c-x': estado }))
    const saturado = pontuarConceito('c-x', 'm1', {
      ...ctx({ 'c-x': estado }),
      recentes: new Set(['c-x']),
    })
    expect(saturado.score).toBeLessThan(base.score)
  })
})

describe('gamificação', () => {
  it('acerto rende mais que erro', () => {
    const params = { dificuldade: 'media' as const, tempoMs: 9000, eraErroAberto: false, jaDominado: false }
    expect(xpPorResposta({ ...params, acertou: true }).pontos).toBeGreaterThan(
      xpPorResposta({ ...params, acertou: false }).pontos,
    )
  })

  it('não dá bônus para resposta rápida demais', () => {
    const base = { acertou: true, dificuldade: 'media' as const, eraErroAberto: false, jaDominado: false }
    expect(xpPorResposta({ ...base, tempoMs: 500 }).pontos).toBeLessThan(
      xpPorResposta({ ...base, tempoMs: 9000 }).pontos,
    )
  })

  it('refazer conceito dominado rende quase nada', () => {
    const pontos = xpPorResposta({
      acertou: true,
      dificuldade: 'dificil',
      tempoMs: 9000,
      eraErroAberto: false,
      jaDominado: true,
    }).pontos
    expect(pontos).toBeLessThanOrEqual(2)
  })

  it('superar um erro vale mais que um acerto comum', () => {
    const base = { acertou: true, dificuldade: 'media' as const, tempoMs: 9000, jaDominado: false }
    expect(xpPorResposta({ ...base, eraErroAberto: true }).pontos).toBeGreaterThan(
      xpPorResposta({ ...base, eraErroAberto: false }).pontos,
    )
  })

  it('o nível cresce de forma monotônica com o XP', () => {
    let anterior = 0
    for (const xp of [0, 100, 400, 900, 2500, 10_000]) {
      const { nivel } = nivelPorXP(xp)
      expect(nivel).toBeGreaterThanOrEqual(anterior)
      anterior = nivel
    }
  })
})

describe('sequência de estudos', () => {
  it('incrementa em dias consecutivos', () => {
    const r = atualizarSequencia(3, 5, '2026-08-17', 2, '2026-08-18')
    expect(r.atual).toBe(4)
    expect(r.quebrou).toBe(false)
  })

  it('não conta duas vezes no mesmo dia', () => {
    const r = atualizarSequencia(3, 5, '2026-08-18', 2, '2026-08-18')
    expect(r.atual).toBe(3)
  })

  it('usa congelamento quando falta exatamente um dia', () => {
    const r = atualizarSequencia(6, 6, '2026-08-16', 2, '2026-08-18')
    expect(r.usouCongelamento).toBe(true)
    expect(r.congelamentos).toBe(1)
    expect(r.atual).toBe(7)
  })

  it('quebra quando falta mais de um dia e não há congelamento', () => {
    const r = atualizarSequencia(6, 6, '2026-08-10', 0, '2026-08-18')
    expect(r.quebrou).toBe(true)
    expect(r.atual).toBe(1)
    expect(r.recorde).toBe(6)
  })

  it('preserva o recorde ao quebrar', () => {
    expect(atualizarSequencia(9, 12, '2026-01-01', 0, '2026-08-18').recorde).toBe(12)
  })

  it('gera o dia local no formato esperado', () => {
    expect(diaLocal(new Date(2026, 7, 18, 10, 0).getTime())).toBe('2026-08-18')
  })
})

describe('estatísticas', () => {
  const resposta = (acertou: boolean): Resposta => ({
    id: Math.random().toString(),
    questaoId: 'q',
    macrotemaId: 'm1',
    microtemaId: 'm1.1',
    conceitoId: 'c-x',
    dificuldade: 'media',
    escolhida: 'a',
    correta: acertou ? 'a' : 'b',
    acertou,
    tempoMs: 5000,
    tentativa: 1,
    data: Date.now(),
    origem: 'pratica',
  })

  it('calcula taxas complementares', () => {
    const a = agregar([resposta(true), resposta(true), resposta(false), resposta(false)])
    expect(a.taxaAcerto).toBe(0.5)
    expect(a.taxaAcerto + a.taxaErro).toBe(1)
  })

  it('não divide por zero sem respostas', () => {
    const a = agregar([])
    expect(a.taxaAcerto).toBe(0)
    expect(a.tempoMedioMs).toBe(0)
  })

  it('a cobertura começa em zero', () => {
    expect(cobertura({})).toBe(0)
  })

  it('não estima prontidão com amostra insuficiente', () => {
    const p = prontidao([resposta(true)], {}, Date.now())
    expect(p.valor).toBeNull()
    expect(p.motivo).toBeTruthy()
  })
})
