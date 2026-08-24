import { describe, expect, it } from 'vitest'
import {
  dificuldadeAlvo,
  dominioEfetivo,
  estadoInicial,
  nivelDominio,
  probabilidadeAcerto,
  registrarResposta,
  retencao,
  TEXTO_DOMINIO,
  tomAcerto,
  tomDominio,
} from '@/lib/engine/mastery'
import { CONCEITOS, getConceito, MACROTEMAS, MICROTEMAS } from '@/lib/content'
import { questoesDoConceito } from '@/lib/questions'
import { BLUEPRINT } from '@/lib/blueprint'
import { ICONES } from '@/components/ui/Icone'
import {
  atualizarSequencia,
  avaliarConquistas,
  conquistas,
  cruzouMarco,
  desbloqueios,
  LIMIAR_GUARDIAO,
  type SnapshotGamificacao,
  diaLocal,
  MAX_CONGELAMENTOS,
  nivelPorXP,
  proximoMarco,
  xpPorResposta,
} from '@/lib/engine/gamification'
import { escolherQuestao, pontuarConceito, ROTULO_SELECAO } from '@/lib/engine/scheduler'
import { recomendar, ROTULO_ACAO } from '@/lib/engine/planner'
import {
  agregar,
  cobertura,
  dominioMicrotema,
  panoramaMicrotemas,
  porMacrotema,
  porMicrotema,
  prontidao,
} from '@/lib/engine/stats'
import type { EstadoConceito, Questao, Resposta } from '@/lib/types'

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
    // Dia 4 -> 5 não cruza marco: aqui só se vê o gasto.
    const r = atualizarSequencia(4, 6, '2026-08-16', 2, '2026-08-18')
    expect(r.usouCongelamento).toBe(true)
    expect(r.congelamentos).toBe(1)
    expect(r.atual).toBe(5)
  })

  it('resgatar e cruzar um marco na mesma virada devolve UM, não dois', () => {
    // Gasta uma rede para sobreviver e chega a 7, que é marco. Sai com o mesmo
    // saldo — o resgate custou, o marco pagou. Não é farm: cada marco só é
    // cruzado uma vez.
    const r = atualizarSequencia(6, 6, '2026-08-16', 2, '2026-08-18')
    expect(r.atual).toBe(7)
    expect(r.usouCongelamento).toBe(true)
    expect(r.ganhouCongelamento).toBe(true)
    expect(r.congelamentos).toBe(2)
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

describe('tom de desempenho', () => {
  it('nunca fica mais otimista do que o nível de domínio', () => {
    const ordemTom = { danger: 0, warn: 1, jade: 2 }
    const ordemNivel = {
      inicial: 0,
      desenvolvimento: 1,
      intermediario: 2,
      bom: 3,
      dominado: 4,
    }
    let anteriorTom = -1
    let anteriorNivel = -1
    for (let v = 0; v <= 1.0001; v += 0.01) {
      const t = ordemTom[tomDominio(v)]
      const n = ordemNivel[nivelDominio(v)]
      // As duas escalas sobem juntas: nenhuma pode retroceder enquanto a outra avança.
      expect(t, `tom retrocedeu em ${v.toFixed(2)}`).toBeGreaterThanOrEqual(anteriorTom)
      expect(n, `nível retrocedeu em ${v.toFixed(2)}`).toBeGreaterThanOrEqual(anteriorNivel)
      anteriorTom = t
      anteriorNivel = n
    }
  })

  it('verde só a partir de "Bom" — nunca pinta de verde quem está em desenvolvimento', () => {
    for (let v = 0; v < 0.75; v += 0.01) {
      expect(tomDominio(v), `${v.toFixed(2)} não pode ser jade`).not.toBe('jade')
    }
    expect(tomDominio(0.75)).toBe('jade')
    expect(nivelDominio(0.75)).toBe('bom')
  })

  it('todo tom tem classe de texto declarada', () => {
    for (const t of ['jade', 'warn', 'danger'] as const) {
      expect(TEXTO_DOMINIO[t]).toBeTruthy()
    }
  })
})

describe('congelamentos progressivos', () => {
  it('cada marco de sequência rende um congelamento', () => {
    const r = atualizarSequencia(6, 6, '2026-08-17', 0, '2026-08-18')
    expect(r.atual).toBe(7)
    expect(r.ganhouCongelamento).toBe(true)
    expect(r.congelamentos).toBe(1)
  })

  it('dia comum não rende nada', () => {
    const r = atualizarSequencia(3, 3, '2026-08-17', 1, '2026-08-18')
    expect(r.ganhouCongelamento).toBe(false)
    expect(r.congelamentos).toBe(1)
  })

  it('respeita o teto — não acumula rede infinita', () => {
    const r = atualizarSequencia(13, 13, '2026-08-17', MAX_CONGELAMENTOS, '2026-08-18')
    expect(r.atual).toBe(14)
    expect(r.ganhouCongelamento).toBe(false)
    expect(r.congelamentos).toBe(MAX_CONGELAMENTOS)
  })

  it('um marco só é cruzado uma vez', () => {
    expect(cruzouMarco(6, 7)).toBe(true)
    expect(cruzouMarco(7, 8)).toBe(false)
    expect(cruzouMarco(8, 9)).toBe(false)
  })

  it('os marcos sobem e o próximo é sempre maior que o recorde', () => {
    for (const recorde of [0, 3, 7, 13, 29, 59]) {
      const p = proximoMarco(recorde)
      expect(p, `recorde ${recorde}`).not.toBeNull()
      expect(p!).toBeGreaterThan(recorde)
    }
    expect(proximoMarco(1000)).toBeNull()
  })
})

const SNAP_ZERO: SnapshotGamificacao = {
  sessoes: 0,
  sequenciaAtual: 0,
  sequenciaRecorde: 0,
  congelamentos: 0,
  aulasConcluidas: 0,
  macrotemasCompletos: 0,
  conceitosDominados: 0,
  errosSuperados: 0,
  revisaoEmDia: false,
  simuladoAprovado: false,
  diasComMetaCumprida: 0,
  ultimaSessaoSemPressa: false,
  dominioPorMacrotema: {},
  dificeisAcertadas: 0,
  etapasConcluidas: 0,
}

describe('conquistas', () => {
  it('não concede nada num estado zerado', () => {
    expect(avaliarConquistas(SNAP_ZERO, [])).toEqual([])
  })

  it('nunca concede duas vezes a mesma', () => {
    const snap = { ...SNAP_ZERO, aulasConcluidas: 1 }
    expect(avaliarConquistas(snap, []).map((c) => c.id)).toContain('primeira-aula')
    expect(avaliarConquistas(snap, ['primeira-aula']).map((c) => c.id)).not.toContain(
      'primeira-aula',
    )
  })

  it('toda conquista tem uma regra — nenhuma fica inalcançável', () => {
    // Snapshot generoso: satisfaz todos os limiares de uma vez.
    const tudo: SnapshotGamificacao = {
      sessoes: 99,
      sequenciaAtual: 99,
      sequenciaRecorde: 99,
      congelamentos: 3,
      aulasConcluidas: 99,
      macrotemasCompletos: 99,
      conceitosDominados: 99,
      errosSuperados: 99,
      revisaoEmDia: true,
      simuladoAprovado: true,
      diasComMetaCumprida: 99,
      ultimaSessaoSemPressa: true,
      dominioPorMacrotema: Object.fromEntries(MACROTEMAS.map((m) => [m.id, 1])),
      dificeisAcertadas: 99,
      etapasConcluidas: 99,
    }
    const obtidas = avaliarConquistas(tudo, []).map((c) => c.id)
    for (const c of conquistas()) {
      expect(obtidas, `${c.id} não é alcançável por nenhuma regra`).toContain(c.id)
    }
  })

  it('há um selo para cada macrotema, e nenhum sem guardião', () => {
    const selos = conquistas().filter((c) => c.incentiva === 'guardioes')
    // Um por macrotema, mais o de reunir todos.
    expect(selos).toHaveLength(MACROTEMAS.length + 1)
    for (const m of MACROTEMAS) {
      expect(selos.map((c) => c.id)).toContain(`guardiao-${m.id}`)
    }
  })

  it('o selo do guardião exige domínio no módulo certo', () => {
    const [primeiro, segundo] = MACROTEMAS
    if (!segundo) return
    const snap = {
      ...SNAP_ZERO,
      dominioPorMacrotema: { [primeiro.id]: LIMIAR_GUARDIAO },
    }
    const ids = avaliarConquistas(snap, []).map((c) => c.id)
    expect(ids).toContain(`guardiao-${primeiro.id}`)
    expect(ids).not.toContain(`guardiao-${segundo.id}`)
    expect(ids).not.toContain('quatro-dragoes')
  })

  it('"os quatro dragões" só sai com todos os módulos dominados', () => {
    const snap = {
      ...SNAP_ZERO,
      dominioPorMacrotema: Object.fromEntries(MACROTEMAS.map((m) => [m.id, LIMIAR_GUARDIAO])),
    }
    expect(avaliarConquistas(snap, []).map((c) => c.id)).toContain('quatro-dragoes')
  })

  it('todo ícone de conquista existe no conjunto autoral — nada de glifo Unicode', () => {
    for (const c of conquistas()) {
      expect(Object.keys(ICONES), `${c.id} usa ícone inexistente: ${c.icone}`).toContain(c.icone)
    }
  })

  it('os IDs de conquista são únicos', () => {
    const ids = conquistas().map((c) => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})

describe('desbloqueios', () => {
  it('são recompensa, não trava: todo item diz o que falta enquanto fechado', () => {
    for (const d of desbloqueios(SNAP_ZERO)) {
      expect(d.desbloqueio.requisito.length, d.desbloqueio.id).toBeGreaterThan(10)
      expect(d.progresso).toBeGreaterThanOrEqual(0)
      expect(d.progresso).toBeLessThanOrEqual(1)
    }
  })

  it('há um desafio por macrotema, fechado sem domínio e aberto com ele', () => {
    const fechados = desbloqueios(SNAP_ZERO).filter((d) => d.desbloqueio.id.startsWith('desafio-'))
    expect(fechados).toHaveLength(MACROTEMAS.length)
    expect(fechados.every((d) => !d.liberado)).toBe(true)

    const abertos = desbloqueios({
      ...SNAP_ZERO,
      dominioPorMacrotema: Object.fromEntries(MACROTEMAS.map((m) => [m.id, 1])),
    }).filter((d) => d.desbloqueio.id.startsWith('desafio-'))
    expect(abertos.every((d) => d.liberado)).toBe(true)
  })

  it('todo desbloqueio liberado leva a algum lugar', () => {
    const todos = desbloqueios({
      ...SNAP_ZERO,
      congelamentos: 2,
      dominioPorMacrotema: Object.fromEntries(MACROTEMAS.map((m) => [m.id, 1])),
    })
    for (const d of todos.filter((x) => x.liberado)) {
      expect(d.desbloqueio.destino, d.desbloqueio.id).toBeTruthy()
    }
  })
})

describe('tom de taxa de acerto', () => {
  it('verde só a partir da nota de corte da prova', () => {
    for (let v = 0; v < BLUEPRINT.notaCorte - 1e-9; v += 0.01) {
      expect(tomAcerto(v), `${v.toFixed(2)} não pode ser jade`).not.toBe('jade')
    }
    expect(tomAcerto(BLUEPRINT.notaCorte)).toBe('jade')
    expect(tomAcerto(1)).toBe('jade')
  })

  it('nunca retrocede conforme a taxa sobe', () => {
    const ordem = { danger: 0, warn: 1, jade: 2 }
    let anterior = -1
    for (let v = 0; v <= 1.0001; v += 0.01) {
      const t = ordem[tomAcerto(v)]
      expect(t, `retrocedeu em ${v.toFixed(2)}`).toBeGreaterThanOrEqual(anterior)
      anterior = t
    }
  })

  it('é uma escala diferente da de domínio, e mais exigente no verde', () => {
    // As duas coexistem de propósito: domínio usa as faixas pedagógicas,
    // acerto usa o corte da prova. O teste trava a relação entre elas para
    // que ninguém "unifique" as duas por engano.
    expect(BLUEPRINT.notaCorte).toBeLessThan(0.75)
    expect(tomDominio(0.72)).toBe('warn')
    expect(tomAcerto(0.72)).toBe('jade')
  })
})

describe('panorama por microtema', () => {
  const agora = Date.now()

  it('devolve uma linha por microtema oficial, na ordem do programa', () => {
    const linhas = panoramaMicrotemas({}, agora)
    expect(linhas).toHaveLength(MICROTEMAS.length)
    expect(linhas.map((l) => l.codigo)).toEqual(MICROTEMAS.map((mt) => mt.codigo))
  })

  it('filtra por macrotema sem perder nem inventar linhas', () => {
    const total = MACROTEMAS.reduce(
      (s, m) => s + panoramaMicrotemas({}, agora, m.id).length,
      0,
    )
    expect(total).toBe(MICROTEMAS.length)
    for (const m of MACROTEMAS) {
      for (const linha of panoramaMicrotemas({}, agora, m.id)) {
        expect(linha.macrotemaId).toBe(m.id)
      }
    }
  })

  it('marca semConteudo exatamente nos microtemas sem aula escrita', () => {
    for (const linha of panoramaMicrotemas({}, agora)) {
      const micro = MICROTEMAS.find((mt) => mt.id === linha.microtemaId)!
      expect(linha.semConteudo).toBe(micro.conceitos.length === 0)
      expect(linha.conceitos).toBe(micro.conceitos.length)
    }
  })

  it('microtema sem conteúdo nunca é apresentado como lacuna do aluno', () => {
    // 0% aqui significa "ninguém escreveu", não "você não sabe". A interface
    // usa esta marca para esconder a barra em vez de acusar o estudante.
    for (const linha of panoramaMicrotemas({}, agora)) {
      if (!linha.semConteudo) continue
      expect(linha.praticados).toBe(0)
      expect(linha.respostas).toBe(0)
      expect(linha.dominio).toBe(0)
    }
  })

  it('praticados nunca passa do total de conceitos, e conta só quem respondeu', () => {
    const comConteudo = MICROTEMAS.find((mt) => mt.conceitos.length > 0)!
    const alvo = comConteudo.conceitos[0]
    const estados = {
      [alvo.id]: {
        ...estadoInicial(alvo.id, comConteudo.id, comConteudo.macrotemaId),
        n: 4,
        acertos: 3,
        m: 0.8,
        ultimaPratica: agora,
      },
    }
    const linha = panoramaMicrotemas(estados, agora).find(
      (l) => l.microtemaId === comConteudo.id,
    )!
    expect(linha.praticados).toBe(1)
    expect(linha.respostas).toBe(4)
    expect(linha.praticados).toBeLessThanOrEqual(linha.conceitos)
    expect(linha.dominio).toBeGreaterThan(0)
  })

  it('o domínio do microtema é o mesmo que a trilha usa', () => {
    const estados: Record<string, EstadoConceito> = {}
    for (const c of CONCEITOS) {
      estados[c.id] = { ...estadoInicial(c.id, c.microtemaId, 'm1'), n: 2, m: 0.7, ultimaPratica: agora }
    }
    for (const linha of panoramaMicrotemas(estados, agora)) {
      expect(linha.dominio).toBe(dominioMicrotema(linha.microtemaId, estados, agora))
    }
  })

  it('a soma dos microtemas fecha com o total do macrotema', () => {
    const respostas: Resposta[] = MICROTEMAS.filter((mt) => mt.conceitos.length).map((mt) => ({
      id: mt.id,
      questaoId: 'q',
      macrotemaId: mt.macrotemaId,
      microtemaId: mt.id,
      conceitoId: mt.conceitos[0].id,
      dificuldade: 'media' as const,
      escolhida: 'a',
      correta: 'a',
      acertou: true,
      tempoMs: 1000,
      tentativa: 1,
      data: Date.now(),
      origem: 'pratica' as const,
    }))

    const macro = porMacrotema(respostas)
    const micro = porMicrotema(respostas)
    for (const m of MACROTEMAS) {
      const soma = m.microtemas.reduce((s, mt) => s + micro[mt.id].total, 0)
      expect(soma, m.nome).toBe(macro[m.id].total)
    }
  })
})

describe('recomendações do "Estude agora"', () => {
  const agora = Date.now()

  const opcoes = (estados: Record<string, EstadoConceito>) => ({
    minutos: 30,
    estados,
    agora,
    recentes: new Set<string>(),
    jaVistas: new Set<string>(),
  })

  /** Todos os conceitos estudados e bem sabidos — o piso da comparação. */
  const tudoDominado = (): Record<string, EstadoConceito> => {
    const estados: Record<string, EstadoConceito> = {}
    for (const c of CONCEITOS) {
      const micro = MICROTEMAS.find((mt) => mt.id === c.microtemaId)!
      estados[c.id] = {
        ...estadoInicial(c.id, c.microtemaId, micro.macrotemaId),
        n: 10,
        acertos: 10,
        m: 0.95,
        theta: 2,
        estabilidade: 120,
        ultimaPratica: agora,
        revisarEm: agora + 100 * DIA,
        aulaConcluida: true,
      }
    }
    return estados
  }

  it('respeita o limite pedido', () => {
    expect(recomendar(opcoes({}), 3).length).toBeLessThanOrEqual(3)
    expect(recomendar(opcoes({}), 1).length).toBeLessThanOrEqual(1)
  })

  it('nunca recomenda dois passos do mesmo microtema', () => {
    // Três cartões do mesmo assunto não são três recomendações.
    for (const estados of [{}, tudoDominado()]) {
      const micros = recomendar(opcoes(estados), 3).map((r) => r.microtemaId)
      expect(new Set(micros).size).toBe(micros.length)
    }
  })

  it('para quem nunca estudou, tudo é aula — e aponta para a aula certa', () => {
    const recs = recomendar(opcoes({}), 3)
    expect(recs.length).toBeGreaterThan(0)
    for (const r of recs) {
      expect(r.acao).toBe('aula')
      expect(r.destino).toBe(`/conteudo/${r.conceitoId}`)
      expect(getConceito(r.conceitoId)).toBeTruthy()
    }
  })

  it('erro em aberto vira revisão e ganha a primeira posição', () => {
    const estados = tudoDominado()
    const alvo = CONCEITOS.find((c) => questoesDoConceito(c.id).length > 0)!
    estados[alvo.id] = { ...estados[alvo.id], errosAbertos: 2, m: 0.5, theta: 0 }

    const primeira = recomendar(opcoes(estados), 3)[0]
    expect(primeira.conceitoId).toBe(alvo.id)
    expect(primeira.acao).toBe('revisar')
    expect(primeira.destino).toBe('/revisao')
    expect(primeira.justificativa).toContain('erros ainda não superados')
  })

  it('revisão vencida diz há quantos dias venceu', () => {
    const estados = tudoDominado()
    const alvo = CONCEITOS.find((c) => questoesDoConceito(c.id).length > 0)!
    // Estado coerente: praticado há 90 dias com estabilidade de 2 dias, logo
    // a revisão venceu 88 dias atrás. Só com a retenção realmente no chão a
    // urgência supera a lacuna — que é exatamente a ordem desejada.
    estados[alvo.id] = {
      ...estados[alvo.id],
      estabilidade: 2,
      ultimaPratica: agora - 90 * DIA,
      revisarEm: agora - 88 * DIA,
    }

    const rec = recomendar(opcoes(estados), 3).find((r) => r.conceitoId === alvo.id)
    expect(rec?.acao).toBe('revisar')
    expect(rec?.justificativa).toMatch(/vencida há 88 dias/)
  })

  it('nunca manda praticar um conceito que ainda não tem questão escrita', () => {
    const estados = tudoDominado()
    for (const r of recomendar(opcoes(estados), 3)) {
      if (r.acao === 'aula') continue
      expect(questoesDoConceito(r.conceitoId).length, r.titulo).toBeGreaterThan(0)
    }
  })

  it('toda recomendação explica a escolha e leva a algum lugar', () => {
    const cenarios = [{}, tudoDominado()]
    for (const estados of cenarios) {
      for (const r of recomendar(opcoes(estados), 3)) {
        expect(r.justificativa.length, r.titulo).toBeGreaterThan(10)
        expect(r.destino.startsWith('/'), r.destino).toBe(true)
        expect(ROTULO_ACAO[r.acao]).toBeTruthy()
        expect(r.minutos).toBeGreaterThan(0)
      }
    }
  })

  it('a justificativa nunca é um rótulo genérico do agendador', () => {
    // O ponto do bloco é dizer POR QUE, com os números do aluno. Se a frase
    // for igual ao rótulo interno do motivo, a recomendação não explicou nada.
    const estados = tudoDominado()
    for (const r of recomendar(opcoes(estados), 3)) {
      expect(r.justificativa, r.titulo).not.toBe(ROTULO_SELECAO[r.motivo])
    }
  })
})
