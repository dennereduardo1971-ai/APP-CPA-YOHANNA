import { afterEach, describe, expect, it } from 'vitest'
import type { Conceito, Macrotema, Microtema, Questao } from '@/lib/types'
import type { OverlayConteudo } from '@/lib/content/overlay'
import {
  contarAlteracoes,
  montarConteudo,
  montarQuestoes,
  normalizarOverlay,
  overlayEstaVazio,
  overlayVazio,
} from '@/lib/content/overlay'
import { CONCEITOS, MICROTEMAS, conteudoOriginal, getConceito } from '@/lib/content'
import { QUESTOES, getQuestao } from '@/lib/questions'
import { aplicarOverlayLocal } from '@/lib/pacote'
import { auditar, conceitoCompleto } from '@/lib/auditoria'

/* ------------------------------------------------------------------ */
/* Conteúdo de brinquedo — pequeno o bastante para conferir a olho     */
/* ------------------------------------------------------------------ */

const conceito = (id: string, microtemaId: string): Conceito => ({
  id,
  microtemaId,
  titulo: `Conceito ${id}`,
  objetivo: '',
  etiquetas: [],
  resumo30s: '',
  explicacao: {
    oQueE: 'x',
    porQueImporta: 'x',
    paraQueServe: 'x',
    comoFunciona: ['x'],
    exemploSimples: 'x',
    exemploAplicado: 'x',
    lembrarNaProva: ['x'],
    revisaoRapida: ['x'],
  },
  exemplos: [],
  conceitoChave: '',
  pontosChave: [],
  erroComum: '',
  perguntaRapida: { enunciado: '', alternativas: [], correta: 0, explicacao: '' },
  mapaMental: { id: 'r', rotulo: 'r' },
  reexplicacoes: { simples: '', exemplo: '', analogia: '', iniciante: '' },
  niveis: { entenda: 'x', aprofunde: 'x' },
  minutosEstimados: 5,
})

const microtema = (id: string, macrotemaId: string, ordem: number, conceitos: Conceito[]): Microtema => ({
  id,
  macrotemaId,
  codigo: `${ordem}`,
  nome: `Micro ${id}`,
  ordem,
  preRequisitos: [],
  conceitos,
})

const base: Macrotema[] = [
  {
    id: 'M1',
    codigo: '1',
    nome: 'Módulo 1',
    resumo: '',
    peso: 0.5,
    pesoVerificado: true,
    ordem: 1,
    microtemas: [
      microtema('mt1', 'M1', 1, [conceito('c1', 'mt1'), conceito('c2', 'mt1')]),
      microtema('mt2', 'M1', 2, []),
    ],
  },
  {
    id: 'M2',
    codigo: '2',
    nome: 'Módulo 2',
    resumo: '',
    peso: 0.5,
    pesoVerificado: true,
    ordem: 2,
    microtemas: [microtema('mt3', 'M2', 1, [conceito('c3', 'mt3')])],
  },
]

const questao = (id: string, conceitoId: string, microtemaId: string, macrotemaId: string): Questao => ({
  id,
  macrotemaId,
  microtemaId,
  conceitoId,
  tipo: 'multipla_escolha',
  dificuldade: 'media',
  habilidade: '',
  enunciado: 'Pergunta',
  alternativas: [
    { id: 'a', texto: 'a', correta: true, justificativa: 'j' },
    { id: 'b', texto: 'b', correta: false, justificativa: 'j' },
  ],
  explicacao: 'e',
  tags: [],
  b: 0,
  origem: 'autoral',
})

const questoesBase = [
  questao('q1', 'c1', 'mt1', 'M1'),
  questao('q2', 'c3', 'mt3', 'M2'),
]

const com = (parcial: Partial<OverlayConteudo>): OverlayConteudo => ({
  ...overlayVazio(),
  ...parcial,
})

const idsDeConceito = (arvore: Macrotema[]) =>
  arvore.flatMap((m) => m.microtemas.flatMap((mt) => mt.conceitos.map((c) => c.id)))

/* ------------------------------------------------------------------ */

describe('overlay de conteúdo', () => {
  it('overlay vazio devolve exatamente o conteúdo do código', () => {
    const arvore = montarConteudo(base, overlayVazio())
    expect(arvore.map((m) => m.id)).toEqual(['M1', 'M2'])
    expect(idsDeConceito(arvore)).toEqual(['c1', 'c2', 'c3'])
    expect(overlayEstaVazio(overlayVazio())).toBe(true)
  })

  it('não muta o conteúdo do código ao aplicar um patch', () => {
    // O `BASE` do app é importado uma vez; se `montarConteudo` escrevesse
    // nele, "desfazer edições" não teria para onde voltar.
    montarConteudo(base, com({ macrotemas: { M1: { nome: 'Renomeado' } } }))
    expect(base[0].nome).toBe('Módulo 1')
    expect(base[0].microtemas[0].conceitos).toHaveLength(2)
  })

  it('patch altera só os campos declarados', () => {
    const arvore = montarConteudo(base, com({ macrotemas: { M1: { nome: 'Novo nome' } } }))
    expect(arvore[0].nome).toBe('Novo nome')
    expect(arvore[0].peso).toBe(0.5)
    expect(arvore[0].microtemas).toHaveLength(2)
  })

  it('patch em id inexistente é ignorado, não cria item fantasma', () => {
    const arvore = montarConteudo(base, com({ conceitos: { 'c-nao-existe': { titulo: 'x' } } }))
    expect(idsDeConceito(arvore)).toEqual(['c1', 'c2', 'c3'])
  })

  it('o id nunca é sobrescrito por um patch', () => {
    const arvore = montarConteudo(
      base,
      com({ conceitos: { c1: { titulo: 'Novo', microtemaId: 'mt1' } as never } }),
    )
    const c1 = arvore[0].microtemas[0].conceitos.find((c) => c.titulo === 'Novo')
    expect(c1?.id).toBe('c1')
  })

  it('item criado no painel entra na árvore no lugar certo', () => {
    const arvore = montarConteudo(
      base,
      com({ criados: { ...overlayVazio().criados, conceitos: [conceito('c9', 'mt2')] } }),
    )
    expect(arvore[0].microtemas[1].conceitos.map((c) => c.id)).toEqual(['c9'])
  })

  it('remover um microtema leva junto os conceitos dele', () => {
    const arvore = montarConteudo(base, com({ removidos: { ...overlayVazio().removidos, microtemas: ['mt1'] } }))
    expect(arvore[0].microtemas.map((mt) => mt.id)).toEqual(['mt2'])
    expect(idsDeConceito(arvore)).toEqual(['c3'])
  })

  it('remover um macrotema leva junto microtemas e conceitos', () => {
    const arvore = montarConteudo(base, com({ removidos: { ...overlayVazio().removidos, macrotemas: ['M1'] } }))
    expect(arvore.map((m) => m.id)).toEqual(['M2'])
    expect(idsDeConceito(arvore)).toEqual(['c3'])
  })

  it('a árvore sai ordenada, mesmo com item criado fora de ordem', () => {
    const novo: Macrotema = { ...base[0], id: 'M0', ordem: 0, microtemas: [] }
    const arvore = montarConteudo(
      base,
      com({ criados: { ...overlayVazio().criados, macrotemas: [novo] } }),
    )
    expect(arvore.map((m) => m.ordem)).toEqual([0, 1, 2])
  })

  it('conta as alterações de todos os tipos', () => {
    const overlay = com({
      conceitos: { c1: { titulo: 'x' } },
      criados: { ...overlayVazio().criados, questoes: [questao('q9', 'c1', 'mt1', 'M1')] },
      removidos: { ...overlayVazio().removidos, microtemas: ['mt2'] },
    })
    expect(contarAlteracoes(overlay)).toBe(3)
    expect(overlayEstaVazio(overlay)).toBe(false)
  })

  it('normaliza overlay antigo sem quebrar', () => {
    // Estado gravado por uma versão anterior do app não tem os campos novos.
    const bruto = { conceitos: { c1: { titulo: 'x' } } } as Partial<OverlayConteudo>
    const overlay = normalizarOverlay(bruto)
    expect(overlay.criados.questoes).toEqual([])
    expect(overlay.removidos.macrotemas).toEqual([])
    expect(() => montarConteudo(base, overlay)).not.toThrow()
    expect(normalizarOverlay(null)).toEqual(overlayVazio())
    expect(normalizarOverlay(undefined)).toEqual(overlayVazio())
  })
})

describe('overlay de questões', () => {
  const arvore = (overlay: OverlayConteudo) => montarConteudo(base, overlay)

  it('sem overlay, o banco fica igual', () => {
    const overlay = overlayVazio()
    expect(montarQuestoes(questoesBase, arvore(overlay), overlay).map((q) => q.id)).toEqual([
      'q1',
      'q2',
    ])
  })

  it('apagar o conceito descarta as questões dele', () => {
    // Questão sem conceito é questão que o player não consegue explicar.
    const overlay = com({ removidos: { ...overlayVazio().removidos, conceitos: ['c1'] } })
    expect(montarQuestoes(questoesBase, arvore(overlay), overlay).map((q) => q.id)).toEqual(['q2'])
  })

  it('a cascata também alcança as questões: some o módulo, somem as questões', () => {
    const overlay = com({ removidos: { ...overlayVazio().removidos, macrotemas: ['M2'] } })
    expect(montarQuestoes(questoesBase, arvore(overlay), overlay).map((q) => q.id)).toEqual(['q1'])
  })

  it('questão criada para um conceito vivo entra no banco', () => {
    const overlay = com({
      criados: { ...overlayVazio().criados, questoes: [questao('q9', 'c2', 'mt1', 'M1')] },
    })
    expect(montarQuestoes(questoesBase, arvore(overlay), overlay).map((q) => q.id)).toContain('q9')
  })

  it('questão criada apontando para conceito inexistente não entra', () => {
    const overlay = com({
      criados: { ...overlayVazio().criados, questoes: [questao('q9', 'c-fantasma', 'mt1', 'M1')] },
    })
    expect(montarQuestoes(questoesBase, arvore(overlay), overlay).map((q) => q.id)).not.toContain(
      'q9',
    )
  })
})

describe('auditoria do conteúdo', () => {
  it('lê o conteúdo real do app e devolve números coerentes', () => {
    const { resumo, achados } = auditar()
    expect(resumo.microtemasComConteudo).toBeLessThanOrEqual(resumo.microtemas)
    expect(resumo.conceitosCompletos).toBeLessThanOrEqual(resumo.conceitos)
    expect(resumo.conceitosComQuestao).toBeLessThanOrEqual(resumo.conceitos)
    expect(achados.length).toBe(
      resumo.porSeveridade.defeito + resumo.porSeveridade.incompleto + resumo.porSeveridade.lacuna,
    )
  })

  it('nenhuma questão do banco está sem gabarito único', () => {
    // Este é o achado que estraga o estudo de verdade: se aparecer, é bug de
    // conteúdo nosso, não trabalho de autoria pendente.
    const defeitos = auditar().achados.filter((a) => a.severidade === 'defeito')
    expect(defeitos.map((d) => `${d.itemId}: ${d.problema}`)).toEqual([])
  })

  it('todo microtema sem aula vira exatamente um achado de lacuna', () => {
    const { achados } = auditar()
    const semAula = conteudoOriginal()
      .flatMap((m) => m.microtemas)
      .filter((mt) => mt.conceitos.length === 0)
    const lacunasDeMicrotema = achados.filter(
      (a) => a.tipo === 'microtema' && a.severidade === 'lacuna',
    )
    expect(lacunasDeMicrotema).toHaveLength(semAula.length)
  })

  it('achado de item editável leva ao editor daquele item', () => {
    for (const achado of auditar().achados) {
      if (achado.tipo === 'conceito') {
        expect(achado.destino).toBe(`/admin/conceito/${achado.itemId}`)
      }
      if (achado.tipo === 'questao') {
        expect(achado.destino).toBe(`/admin/questao/${achado.itemId}`)
      }
    }
  })

  it('defeito vem antes de incompleto, que vem antes de lacuna', () => {
    const peso = { defeito: 0, incompleto: 1, lacuna: 2 }
    const ordem = auditar().achados.map((a) => peso[a.severidade])
    expect([...ordem].sort((a, b) => a - b)).toEqual(ordem)
  })

  it('conceitoCompleto exige os três blocos novos e os dois níveis', () => {
    const pleno = conceito('cx', 'mt1')
    expect(conceitoCompleto(pleno)).toBe(true)
    expect(
      conceitoCompleto({ ...pleno, explicacao: { ...pleno.explicacao, exemploAplicado: '' } }),
    ).toBe(false)
    expect(conceitoCompleto({ ...pleno, niveis: undefined })).toBe(false)
    expect(
      conceitoCompleto({ ...pleno, explicacao: { ...pleno.explicacao, revisaoRapida: [] } }),
    ).toBe(false)
  })
})

describe('registro mutável de conteúdo', () => {
  /*
   * O teste que justifica o desenho. `MACROTEMAS`, `CONCEITOS` e `QUESTOES`
   * são importados uma vez por meia dúzia de módulos; se `aplicarOverlay`
   * reatribuísse as listas em vez de mutá-las, essas cópias continuariam
   * apontando para o conteúdo anterior e o app mostraria texto velho depois
   * de salvar. Aqui as listas são capturadas ANTES da edição, como aqueles
   * módulos fazem, e conferidas depois.
   */
  const alvo = CONCEITOS[0]

  afterEach(() => aplicarOverlayLocal(overlayVazio()))

  it('editar um conceito muda o que os importadores antigos enxergam', () => {
    const listaCapturadaAntes = CONCEITOS
    const tituloOriginal = alvo.titulo

    aplicarOverlayLocal(com({ conceitos: { [alvo.id]: { titulo: 'Título editado' } } }))

    expect(getConceito(alvo.id)?.titulo).toBe('Título editado')
    expect(listaCapturadaAntes.find((c) => c.id === alvo.id)?.titulo).toBe('Título editado')

    aplicarOverlayLocal(overlayVazio())
    expect(getConceito(alvo.id)?.titulo).toBe(tituloOriginal)
  })

  it('apagar um conceito tira as questões dele do banco em vigor', () => {
    const bancoCapturadoAntes = QUESTOES
    const comQuestao = CONCEITOS.find((c) => QUESTOES.some((q) => q.conceitoId === c.id))!
    const antes = QUESTOES.filter((q) => q.conceitoId === comQuestao.id).length
    expect(antes).toBeGreaterThan(0)

    aplicarOverlayLocal(
      com({ removidos: { ...overlayVazio().removidos, conceitos: [comQuestao.id] } }),
    )

    expect(getConceito(comQuestao.id)).toBeUndefined()
    expect(bancoCapturadoAntes.filter((q) => q.conceitoId === comQuestao.id)).toHaveLength(0)
    expect(getQuestao(QUESTOES[0].id)).toBeTruthy()
  })

  it('a auditoria enxerga a edição na hora', () => {
    const microVazio = MICROTEMAS.find((mt) => mt.conceitos.length === 0)
    if (!microVazio) return
    const antes = auditar().resumo.microtemasComConteudo

    aplicarOverlayLocal(
      com({ criados: { ...overlayVazio().criados, conceitos: [conceito('c-novo', microVazio.id)] } }),
    )

    expect(auditar().resumo.microtemasComConteudo).toBe(antes + 1)
  })
})
