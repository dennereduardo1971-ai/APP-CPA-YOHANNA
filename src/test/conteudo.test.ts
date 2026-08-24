import { describe, expect, it } from 'vitest'
import { CONCEITOS, MACROTEMAS, MICROTEMAS, pesosEfetivos } from '@/lib/content'
import { QUESTOES, questoesDoConceito } from '@/lib/questions'
import { BLUEPRINT } from '@/lib/blueprint'
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
