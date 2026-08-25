import { describe, expect, it } from 'vitest'
import {
  coberturaPendente,
  CONCEITOS,
  MACROTEMAS,
  MICROTEMAS,
  coberturaGeral,
  coberturaMacrotema,
  microtemasSemConteudo,
  pesosEfetivos,
} from '@/lib/content'
import { QUESTOES, questoesDoConceito } from '@/lib/questions'
import { BLUEPRINT } from '@/lib/blueprint'
import {
  GUARDIAO_DESAFIOS,
  GUIA_PRINCIPAL,
  MASCOTE,
  PERSONAGENS,
  guardiaoDoMacrotema,
} from '@/lib/personagens'
import type { CorDragao } from '@/lib/personagens'
import { readFileSync } from 'node:fs'
import type { MapaMentalNode } from '@/lib/types'

function todosNos(no: MapaMentalNode, saida: MapaMentalNode[] = []) {
  saida.push(no)
  no.filhos?.forEach((f) => todosNos(f, saida))
  return saida
}

describe('integridade do conteúdo', () => {
  it('não há IDs duplicados', () => {
    for (const [rotulo, ids] of [
      ['macrotemas', MACROTEMAS.map((m) => m.id)],
      ['microtemas', MICROTEMAS.map((m) => m.id)],
      ['conceitos', CONCEITOS.map((c) => c.id)],
      ['questões', QUESTOES.map((q) => q.id)],
    ] as [string, string[]][]) {
      expect(new Set(ids).size, `IDs duplicados em ${rotulo}`).toBe(ids.length)
    }
  })

  it('todo microtema aponta para um macrotema existente', () => {
    const macros = new Set(MACROTEMAS.map((m) => m.id))
    for (const micro of MICROTEMAS) expect(macros.has(micro.macrotemaId)).toBe(true)
  })

  it('todo conceito aponta para um microtema existente', () => {
    const micros = new Set(MICROTEMAS.map((m) => m.id))
    for (const c of CONCEITOS) expect(micros.has(c.microtemaId), c.id).toBe(true)
  })

  it('pré-requisitos apontam para microtemas existentes', () => {
    const micros = new Set(MICROTEMAS.map((m) => m.id))
    for (const micro of MICROTEMAS) {
      for (const req of micro.preRequisitos) expect(micros.has(req), `${micro.id} -> ${req}`).toBe(true)
    }
  })

  it('a explicação segue os cinco passos obrigatórios', () => {
    for (const c of CONCEITOS) {
      expect(c.explicacao.oQueE.length, c.id).toBeGreaterThan(20)
      expect(c.explicacao.paraQueServe.length, c.id).toBeGreaterThan(20)
      expect(c.explicacao.comoFunciona.length, c.id).toBeGreaterThanOrEqual(3)
      expect(c.explicacao.exemploSimples.length, c.id).toBeGreaterThan(20)
      expect(c.explicacao.lembrarNaProva.length, c.id).toBeGreaterThanOrEqual(2)
    }
  })

  it('todo conceito tem resumo de 30 segundos, erro comum e conceito-chave', () => {
    for (const c of CONCEITOS) {
      expect(c.resumo30s.length, c.id).toBeGreaterThan(30)
      // "30 segundos" de leitura: cerca de 500 caracteres é o teto razoável.
      expect(c.resumo30s.length, `${c.id}: resumo longo demais`).toBeLessThan(500)
      expect(c.erroComum.length, c.id).toBeGreaterThan(20)
      expect(c.conceitoChave.length, c.id).toBeGreaterThan(15)
      expect(c.pontosChave.length, c.id).toBeGreaterThanOrEqual(3)
    }
  })

  it('as quatro reexplicações estão preenchidas', () => {
    for (const c of CONCEITOS) {
      for (const modo of ['simples', 'exemplo', 'analogia', 'iniciante'] as const) {
        expect(c.reexplicacoes[modo].length, `${c.id}.${modo}`).toBeGreaterThan(20)
      }
    }
  })

  it('a pergunta rápida tem índice de resposta válido', () => {
    for (const c of CONCEITOS) {
      expect(c.perguntaRapida.alternativas.length, c.id).toBeGreaterThanOrEqual(3)
      expect(c.perguntaRapida.correta).toBeGreaterThanOrEqual(0)
      expect(c.perguntaRapida.correta).toBeLessThan(c.perguntaRapida.alternativas.length)
    }
  })

  it('os mapas mentais têm nós com ID único e ao menos um marcado para revisão', () => {
    const globais = new Set<string>()
    for (const c of CONCEITOS) {
      const nos = todosNos(c.mapaMental)
      expect(nos.length, c.id).toBeGreaterThan(2)
      expect(nos.some((n) => n.revisao), `${c.id}: nenhum nó de revisão`).toBe(true)
      for (const no of nos) {
        expect(globais.has(no.id), `ID de nó duplicado: ${no.id}`).toBe(false)
        globais.add(no.id)
      }
    }
  })

  it('as tabelas têm linhas com o mesmo número de colunas do cabeçalho', () => {
    for (const c of CONCEITOS) {
      if (!c.tabela) continue
      for (const linha of c.tabela.linhas) {
        expect(linha.length, `${c.id}: linha fora do formato`).toBe(c.tabela.colunas.length)
      }
    }
  })
})

describe('integridade do banco de questões', () => {
  it('toda questão tem exatamente uma alternativa correta', () => {
    for (const q of QUESTOES) {
      expect(q.alternativas.filter((a) => a.correta).length, q.id).toBe(1)
    }
  })

  it('toda alternativa tem justificativa — inclusive as incorretas', () => {
    for (const q of QUESTOES) {
      for (const alt of q.alternativas) {
        expect(alt.justificativa.trim().length, `${q.id}/${alt.id}`).toBeGreaterThan(15)
      }
    }
  })

  it('toda questão tem ao menos 3 alternativas e IDs únicos', () => {
    for (const q of QUESTOES) {
      expect(q.alternativas.length, q.id).toBeGreaterThanOrEqual(3)
      const ids = q.alternativas.map((a) => a.id)
      expect(new Set(ids).size, q.id).toBe(ids.length)
    }
  })

  it('toda questão aponta para conceito, microtema e macrotema existentes', () => {
    const conceitos = new Set(CONCEITOS.map((c) => c.id))
    const micros = new Set(MICROTEMAS.map((m) => m.id))
    const macros = new Set(MACROTEMAS.map((m) => m.id))
    for (const q of QUESTOES) {
      expect(conceitos.has(q.conceitoId), q.id).toBe(true)
      expect(micros.has(q.microtemaId), q.id).toBe(true)
      expect(macros.has(q.macrotemaId), q.id).toBe(true)
    }
  })

  it('toda questão declara habilidade avaliada, explicação e tags', () => {
    for (const q of QUESTOES) {
      expect(q.habilidade.length, q.id).toBeGreaterThan(5)
      expect(q.explicacao.length, q.id).toBeGreaterThan(20)
      expect(q.tags.length, q.id).toBeGreaterThan(0)
    }
  })

  it('todo item é declarado como autoral', () => {
    for (const q of QUESTOES) expect(q.origem).toBe('autoral')
  })

  it('todo conceito tem pelo menos uma questão', () => {
    for (const c of CONCEITOS) {
      expect(questoesDoConceito(c.id).length, `${c.id} sem questões`).toBeGreaterThan(0)
    }
  })

  it('os passos de árvore de decisão são válidos quando existem', () => {
    for (const q of QUESTOES.filter((x) => x.passos?.length)) {
      for (const passo of q.passos!) {
        expect(passo.alternativas.filter((a) => a.correta).length, `${q.id}/${passo.id}`).toBe(1)
        expect(passo.enunciado.length).toBeGreaterThan(10)
      }
    }
  })

  it('cobre pelo menos seis dos nove tipos de questão especificados', () => {
    expect(new Set(QUESTOES.map((q) => q.tipo)).size).toBeGreaterThanOrEqual(6)
  })
})

describe('blueprint da prova', () => {
  it('declara ao menos um formato de questão', () => {
    expect(BLUEPRINT.formatos.length).toBeGreaterThan(0)
  })

  it('se todo formato traz quantidade, elas somam o total de questões', () => {
    const qtds = BLUEPRINT.formatos.map((f) => f.quantidade)
    if (qtds.every((q): q is number => q !== undefined)) {
      expect(qtds.reduce((s, q) => s + q, 0)).toBe(BLUEPRINT.totalQuestoes)
    }
  })

  it('a nota de corte é um percentual válido', () => {
    expect(BLUEPRINT.notaCorte).toBeGreaterThan(0)
    expect(BLUEPRINT.notaCorte).toBeLessThanOrEqual(1)
  })

  it('os pesos efetivos dos macrotemas somam 1', () => {
    const soma = Object.values(pesosEfetivos()).reduce((s, p) => s + p, 0)
    expect(soma).toBeCloseTo(1, 6)
  })

  it('há questões suficientes para montar o simulado rápido', () => {
    expect(QUESTOES.length).toBeGreaterThanOrEqual(10)
  })
})

describe('estrutura oficial do programa', () => {
  it('declara os 20 microtemas do Programa Detalhado', () => {
    expect(MICROTEMAS).toHaveLength(20)
  })

  it('todo microtema traz código oficial coerente com o macrotema', () => {
    for (const mt of MICROTEMAS) {
      expect(mt.codigo).toMatch(/^\d+\.\d+$/)
      const macro = MACROTEMAS.find((m) => m.id === mt.macrotemaId)
      expect(macro).toBeDefined()
      expect(mt.codigo.split('.')[0]).toBe(String(macro!.ordem))
    }
  })

  it('os códigos oficiais são únicos', () => {
    const codigos = MICROTEMAS.map((mt) => mt.codigo)
    expect(new Set(codigos).size).toBe(codigos.length)
  })

  it('todo pré-requisito aponta para um microtema existente', () => {
    const ids = new Set(MICROTEMAS.map((mt) => mt.id))
    for (const mt of MICROTEMAS) {
      for (const pre of mt.preRequisitos) expect(ids.has(pre)).toBe(true)
    }
  })

  it('nenhum microtema é pré-requisito de si mesmo', () => {
    for (const mt of MICROTEMAS) expect(mt.preRequisitos).not.toContain(mt.id)
  })

  it('todo conceito aponta para o microtema que de fato o contém', () => {
    for (const mt of MICROTEMAS) {
      for (const c of mt.conceitos) expect(c.microtemaId).toBe(mt.id)
    }
  })
})

describe('cobertura de conteúdo', () => {
  it('a cobertura geral reflete os microtemas ainda sem aula', () => {
    const esperado = (MICROTEMAS.length - microtemasSemConteudo().length) / MICROTEMAS.length
    expect(coberturaGeral()).toBeCloseTo(esperado)
  })

  it('coberturaPendente acompanha a existência de microtema vazio', () => {
    expect(coberturaPendente()).toBe(microtemasSemConteudo().length > 0)
  })

  it('a cobertura por macrotema fica entre 0 e 1', () => {
    for (const m of MACROTEMAS) {
      const c = coberturaMacrotema(m.id)
      expect(c).toBeGreaterThanOrEqual(0)
      expect(c).toBeLessThanOrEqual(1)
    }
  })
})

describe('lição em nove blocos e três níveis', () => {
  it('todo conceito preenche os nove blocos obrigatórios', () => {
    for (const c of CONCEITOS) {
      const e = c.explicacao
      expect(e.oQueE.length, `${c.id}/1 o que é`).toBeGreaterThan(20)
      expect(e.porQueImporta?.length ?? 0, `${c.id}/2 por que importa`).toBeGreaterThan(20)
      expect(e.comoFunciona.length, `${c.id}/3 como funciona`).toBeGreaterThanOrEqual(3)
      expect(e.exemploSimples.length, `${c.id}/4 exemplo simples`).toBeGreaterThan(20)
      expect(e.exemploAplicado?.length ?? 0, `${c.id}/5 exemplo aplicado`).toBeGreaterThan(20)
      expect(e.lembrarNaProva.length, `${c.id}/6 lembrar na prova`).toBeGreaterThanOrEqual(2)
      expect(c.erroComum.length, `${c.id}/7 erro comum`).toBeGreaterThan(20)
      expect(c.perguntaRapida.enunciado.length, `${c.id}/8 miniquestão`).toBeGreaterThan(10)
      expect(e.revisaoRapida?.length ?? 0, `${c.id}/9 revisão rápida`).toBeGreaterThanOrEqual(3)
    }
  })

  it('o exemplo aplicado é distinto do exemplo simples', () => {
    for (const c of CONCEITOS) {
      expect(c.explicacao.exemploAplicado, c.id).not.toBe(c.explicacao.exemploSimples)
    }
  })

  it('todo conceito traz os níveis 1 e 3 — o nível 2 é a própria explicação', () => {
    for (const c of CONCEITOS) {
      expect(c.niveis?.entenda.length ?? 0, `${c.id}: nível 1`).toBeGreaterThan(20)
      expect(c.niveis?.aprofunde.length ?? 0, `${c.id}: nível 3`).toBeGreaterThan(20)
    }
  })

  it('os níveis são progressivos: entenda é mais curto que aprofunde', () => {
    for (const c of CONCEITOS) {
      expect(c.niveis!.entenda.length, c.id).toBeLessThan(c.niveis!.aprofunde.length)
    }
  })

  it('a revisão rápida é composta por linhas curtas', () => {
    for (const c of CONCEITOS) {
      for (const linha of c.explicacao.revisaoRapida!) {
        expect(linha.length, `${c.id}: "${linha}"`).toBeLessThan(120)
      }
    }
  })

  it('todo conceito declara versão e data de revisão editorial', () => {
    for (const c of CONCEITOS) {
      expect(c.versao ?? 0, c.id).toBeGreaterThanOrEqual(1)
      expect(c.atualizadoEm, c.id).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })
})

const DRAGOES: CorDragao[] = ['hakuryuu', 'seiryuu', 'ryokuryuu', 'ouryuu']

describe('identidade temática', () => {
  it('todo macrotema tem um guardião alocado', () => {
    for (const m of MACROTEMAS) {
      expect(guardiaoDoMacrotema(m.id), `${m.id} sem guardião`).toBeDefined()
    }
  })

  it('cada guardião cuida de um único macrotema', () => {
    const guardados = PERSONAGENS.filter((p) => p.macrotemaId).map((p) => p.macrotemaId)
    expect(new Set(guardados).size).toBe(guardados.length)
  })

  it('todo macrotemaId de personagem existe de fato', () => {
    const ids = new Set(MACROTEMAS.map((m) => m.id))
    for (const p of PERSONAGENS.filter((x) => x.macrotemaId)) {
      expect(ids.has(p.macrotemaId!), `${p.id} -> ${p.macrotemaId}`).toBe(true)
    }
  })

  it('os IDs de personagem são únicos', () => {
    const ids = PERSONAGENS.map((p) => p.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('todo personagem declara papel, fala de guia e ícone', () => {
    for (const p of PERSONAGENS) {
      expect(p.papel.length, p.id).toBeGreaterThan(5)
      expect(p.guia.length, p.id).toBeGreaterThan(20)
      expect(p.icone.length, p.id).toBeGreaterThan(0)
    }
  })

  it('a fala de guia cabe em uma linha de acompanhamento', () => {
    for (const p of PERSONAGENS) expect(p.guia.length, p.id).toBeLessThan(140)
  })

  it('os papéis exigidos pela especificação estão preenchidos', () => {
    expect(GUIA_PRINCIPAL.id).toBe('yona')
    expect(MASCOTE.id).toBe('ao')
    expect(GUARDIAO_DESAFIOS.id).toBe('hak')
  })

  it('todo personagem tem retrato autoral — o app desenha mesmo sem arquivo de arte', () => {
    for (const p of PERSONAGENS) {
      expect(p.retrato, p.id).toBeTruthy()
      expect(p.avatar, `${p.id}: arte externa não pode ser requisito`).toBeUndefined()
    }
  })

  it('cada guardião de módulo tem a cor de um dragão, e elas não se repetem', () => {
    const guardioes = PERSONAGENS.filter((p) => p.macrotemaId)
    const cores = guardioes.map((p) => p.cor)
    expect(new Set(cores).size, 'dois guardiões com a mesma cor').toBe(cores.length)
    for (const p of guardioes) {
      expect(DRAGOES, `${p.id} não usa cor de dragão`).toContain(p.cor)
    }
  })

  it('personagem sem módulo herda o acento da marca — cor não é decoração', () => {
    for (const p of PERSONAGENS.filter((x) => !x.macrotemaId)) {
      expect(p.cor, `${p.id} não guarda módulo e não pode ter cor própria`).toBe('aurora')
    }
  })

  it('a temática não fixa cor em hexadecimal — tudo vive nos tokens do tema', () => {
    for (const p of PERSONAGENS) {
      expect(JSON.stringify(p), p.id).not.toMatch(/#[0-9a-f]{3,6}\b/i)
    }
  })

  it('toda cor de identidade tem token no CSS e classe no Tailwind', () => {
    // Lidos como texto: `?raw` num .css volta vazio, porque o plugin de CSS
    // do Vite intercepta o import antes.
    const css = readFileSync('src/styles/index.css', 'utf8')
    const config = readFileSync('tailwind.config.js', 'utf8')
    for (const cor of ['aurora', ...DRAGOES]) {
      expect(css, `--${cor} não declarado em index.css`).toContain(`--${cor}:`)
      expect(config, `${cor} não mapeado no tailwind.config.js`).toContain(
        `${cor}: 'rgb(var(--${cor})`,
      )
    }
  })
})
