import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { readdirSync, statSync } from 'node:fs'
import { join, sep } from 'node:path'
import { ICONES } from '@/components/ui/Icone'

/**
 * Acessibilidade conferida por teste, não por inspeção.
 *
 * Contraste e "não depender só de cor" são as duas coisas que quebram sem
 * ninguém perceber: um ajuste de tom no `index.css` derruba meia interface
 * abaixo do mínimo legível, e o próximo componente escrito com pressa volta a
 * usar um glifo Unicode que o Android não tem. Ambos são verificáveis a
 * partir do código-fonte — então é aqui que ficam.
 */

const CSS = readFileSync('src/styles/index.css', 'utf8')

// ── Contraste ────────────────────────────────────────────────────────────

/** Lê `--token: r g b;` do `:root`, resolvendo apelidos `var(--outro)`. */
function tokens(): Record<string, [number, number, number]> {
  const cru: Record<string, string> = {}
  for (const [, nome, valor] of CSS.matchAll(/--([a-z0-9-]+):\s*([^;]+);/g)) {
    cru[nome] = valor.trim()
  }
  const resolvido: Record<string, [number, number, number]> = {}
  const resolver = (nome: string, visitados = new Set<string>()): [number, number, number] => {
    if (resolvido[nome]) return resolvido[nome]
    expect(visitados.has(nome), `apelido circular em --${nome}`).toBe(false)
    visitados.add(nome)
    const valor = cru[nome]
    expect(valor, `token --${nome} não existe no :root`).toBeTruthy()
    const apelido = valor.match(/var\(--([a-z0-9-]+)\)/)
    const rgb = apelido
      ? resolver(apelido[1], visitados)
      : (valor.split(/\s+/).map(Number) as [number, number, number])
    resolvido[nome] = rgb
    return rgb
  }
  for (const nome of Object.keys(cru)) {
    if (/^\d+\s+\d+\s+\d+$/.test(cru[nome]) || cru[nome].startsWith('var(')) resolver(nome)
  }
  return resolvido
}

const T = tokens()

const canal = (c: number) => {
  const s = c / 255
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
}
const luminancia = ([r, g, b]: [number, number, number]) =>
  0.2126 * canal(r) + 0.7152 * canal(g) + 0.0722 * canal(b)

function contraste(a: string, b: string): number {
  const [l1, l2] = [luminancia(T[a]), luminancia(T[b])]
  const [alto, baixo] = l1 > l2 ? [l1, l2] : [l2, l1]
  return (alto + 0.05) / (baixo + 0.05)
}

const SUPERFICIES = ['bg', 'surface', 'elevated'] as const
/** Tudo que o app usa como cor de TEXTO por cima das superfícies. */
const TEXTOS = [
  'ink',
  'ink-2',
  'muted',
  'aurora',
  'jade',
  'warn',
  'danger',
  'hakuryuu',
  'seiryuu',
  'ryokuryuu',
  'ouryuu',
] as const

describe('contraste da paleta Alvorada', () => {
  it('todo texto passa de 4.5:1 nas três superfícies', () => {
    for (const fundo of SUPERFICIES) {
      for (const texto of TEXTOS) {
        const v = contraste(texto, fundo)
        expect(v, `${texto} sobre ${fundo}: ${v.toFixed(2)}:1`).toBeGreaterThanOrEqual(4.5)
      }
    }
  })

  it('as pílulas passam de 4.5:1 contra o próprio fundo', () => {
    // Estes pares são o motivo de `Badge.tsx` usar `*-soft` opaco em vez de
    // `cor/15`: com transparência o resultado dependia da superfície de baixo.
    for (const cor of ['aurora', 'jade', 'warn', 'danger'] as const) {
      const v = contraste(cor, `${cor}-soft`)
      expect(v, `${cor} sobre ${cor}-soft: ${v.toFixed(2)}:1`).toBeGreaterThanOrEqual(4.5)
    }
  })

  it('texto escuro sobre preenchimento cheio passa de 4.5:1', () => {
    // Botão primário, marcador de acerto/erro, selos: fundo cheio e tinta `bg`.
    for (const cheio of ['aurora', 'ouro', 'jade', 'danger'] as const) {
      const v = contraste('bg', cheio)
      expect(v, `bg sobre ${cheio}: ${v.toFixed(2)}:1`).toBeGreaterThanOrEqual(4.5)
    }
  })

  it('barra e borda que carregam estado passam de 3:1', () => {
    // WCAG 1.4.11: componente gráfico não-textual. A barra de progresso é
    // preenchimento colorido sobre o trilho `elevated`.
    for (const cor of ['aurora', 'jade', 'warn', 'danger'] as const) {
      for (const fundo of ['bg', 'elevated'] as const) {
        const v = contraste(cor, fundo)
        expect(v, `${cor} sobre ${fundo}: ${v.toFixed(2)}:1`).toBeGreaterThanOrEqual(3)
      }
    }
  })

  it('o anel de foco não é a própria cor de acento', () => {
    // Um anel carmesim em volta do botão primário — que é carmesim — some.
    const bloco = CSS.match(/:focus-visible\s*\{[^}]*\}/)?.[0] ?? ''
    expect(bloco, 'falta a regra :focus-visible').toContain('outline')
    expect(bloco).not.toContain('--aurora')
    expect(bloco).toContain('outline-offset')
  })
})

// ── Nada de glifo Unicode na interface ───────────────────────────────────

/** Remove comentários para que a própria regra escrita em comentário passe. */
function semComentarios(fonte: string): string {
  return fonte.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')
}

function arquivosFonte(dir: string, saida: string[] = []): string[] {
  for (const nome of readdirSync(dir)) {
    const caminho = join(dir, nome)
    if (statSync(caminho).isDirectory()) arquivosFonte(caminho, saida)
    else if (/\.tsx?$/.test(caminho) && !caminho.split(sep).join('/').includes('/test/')) saida.push(caminho)
  }
  return saida
}

/*
 * Símbolos que o app já usou e que o Android renderiza como caixinha quando a
 * fonte do sistema não os cobre — e o APK não tem rede para buscar outra.
 * Todos têm traço equivalente em `Icone.tsx` (regra 10 do CLAUDE.md).
 */
const GLIFOS_PROIBIDOS = [...'★☆◆◉▶◀▲▼●✓✕✔✖⏱◔✳❯❮◇■□•▪▸►⬟⚡🔒✨']

describe('nada de glifo Unicode na interface', () => {
  it('nenhum componente ou página desenha com símbolo de fonte', () => {
    const infratores: string[] = []
    for (const caminho of arquivosFonte('src')) {
      const fonte = semComentarios(readFileSync(caminho, 'utf8'))
      const achados = GLIFOS_PROIBIDOS.filter((g) => fonte.includes(g))
      if (achados.length) infratores.push(`${caminho}: ${achados.join(' ')}`)
    }
    expect(infratores, `use um traço de Icone.tsx:\n${infratores.join('\n')}`).toEqual([])
  })

  it('todo traço de ícone é um path fechado e não-vazio', () => {
    for (const [nome, d] of Object.entries(ICONES)) {
      expect(d.length, `ícone ${nome} está vazio`).toBeGreaterThan(10)
      expect(d, `ícone ${nome} não começa com um comando de traço`).toMatch(/^[Mm]/)
    }
  })
})

// ── Semântica que não dá para ver no navegador sem leitor de tela ────────

describe('semântica dos componentes interativos', () => {
  const ler = (caminho: string) => readFileSync(caminho, 'utf8')

  it('o player de questões é um grupo de rádio, não uma lista de botões', () => {
    const fonte = ler('src/components/domain/QuestaoPlayer.tsx')
    expect(fonte).toContain('role="radiogroup"')
    expect(fonte).toContain('role="radio"')
    expect(fonte).toContain('aria-checked')
    // O grupo precisa de nome acessível — aqui, o próprio enunciado.
    expect(fonte).toContain('aria-labelledby')
  })

  it('certo e errado não são só cor e ícone', () => {
    const fonte = ler('src/components/domain/QuestaoPlayer.tsx')
    expect(fonte).toContain('Resposta correta.')
    expect(fonte).toContain('Sua resposta. Incorreta.')
    // O veredito aparece sem foco: precisa ser anunciado sozinho.
    expect(fonte).toContain('role="status"')
  })

  it('o mapa mental é uma árvore declarada, com teclado', () => {
    const fonte = ler('src/components/domain/MapaMental.tsx')
    for (const atributo of ['role="tree"', 'role="treeitem"', 'role="group"', 'aria-expanded', 'aria-level']) {
      expect(fonte, `falta ${atributo}`).toContain(atributo)
    }
    for (const tecla of ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft']) {
      expect(fonte, `falta navegação por ${tecla}`).toContain(tecla)
    }
  })

  it('existe atalho para pular a navegação e destino para ele', () => {
    const shell = ler('src/components/layout/AppShell.tsx')
    expect(shell).toContain('Pular para o conteúdo')
    expect(shell).toContain('id="conteudo"')
    expect(shell).toContain('tabIndex={-1}')
    // Trocar de rota move o foco para o conteúdo — senão o leitor de tela
    // não sabe que a página mudou.
    expect(ler('src/App.tsx')).toContain("getElementById('conteudo')")
  })
})
