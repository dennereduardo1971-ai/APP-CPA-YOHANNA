#!/usr/bin/env node
/**
 * Regenera a seção "Estado atual" do CLAUDE.md a partir do código real.
 *
 * Roda automaticamente via `npm run build` (postbuild) e pelo hook de
 * sessão do Claude Code. Também pode ser chamado à mão: `npm run docs`.
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const INICIO = '<!-- AUTO:INICIO -->'
const FIM = '<!-- AUTO:FIM -->'

/** Percorre um diretório recursivamente devolvendo caminhos de arquivo. */
function walk(dir, out = []) {
  if (!existsSync(dir)) return out
  for (const nome of readdirSync(dir)) {
    const p = join(dir, nome)
    if (statSync(p).isDirectory()) walk(p, out)
    else out.push(p)
  }
  return out
}

const arquivos = walk(join(ROOT, 'src'))
const src = (p) => readFileSync(p, 'utf8')

/** Conta ocorrências de um padrão em todos os arquivos de um diretório. */
function contar(subdir, padrao) {
  return walk(join(ROOT, 'src', subdir))
    .filter((f) => f.endsWith('.ts') || f.endsWith('.tsx'))
    .reduce((total, f) => total + (src(f).match(padrao)?.length ?? 0), 0)
}

const macrotemas = contar('lib/content', /^\s*id: 'm\d+',$/gm)
const microtemas = contar('lib/content', /^\s*id: 'm\d+\.\d+',$/gm)
const conceitos = contar('lib/content', /^\s*id: 'c-[a-z0-9-]+',$/gm)
const questoes = contar('lib/questions', /^\s*q\('q-[a-z0-9-]+',/gm)

// Rotas declaradas no router
const routerPath = join(ROOT, 'src/App.tsx')
const rotas = existsSync(routerPath)
  ? [...src(routerPath).matchAll(/path="([^"]+)"/g)].map((m) => m[1])
  : []

// Blueprint vigente
const bp = existsSync(join(ROOT, 'src/lib/blueprint.ts')) ? src(join(ROOT, 'src/lib/blueprint.ts')) : ''
const campo = (nome) => bp.match(new RegExp(`${nome}: ([^,\\n]+)`))?.[1]?.replace(/'/g, '') ?? '?'

const paginas = walk(join(ROOT, 'src/pages')).filter((f) => f.endsWith('.tsx')).length
const componentes = walk(join(ROOT, 'src/components')).filter((f) => f.endsWith('.tsx')).length
const testes = walk(join(ROOT, 'src')).filter((f) => f.includes('.test.')).length
const linhas = arquivos
  .filter((f) => /\.(ts|tsx|css)$/.test(f))
  .reduce((t, f) => t + src(f).split('\n').length, 0)

const bloco = `${INICIO}
<!-- Gerado por scripts/update-claude-md.mjs — não editar à mão. -->

## Estado atual

_Atualizado em ${new Date().toISOString().slice(0, 10)}._

| Métrica | Valor |
|---|---|
| Macrotemas | ${macrotemas} |
| Microtemas | ${microtemas} |
| Conceitos (aulas) | ${conceitos} |
| Questões no banco | ${questoes} |
| Páginas | ${paginas} |
| Componentes | ${componentes} |
| Arquivos de teste | ${testes} |
| Linhas em \`src/\` | ${linhas.toLocaleString('pt-BR')} |

**Blueprint vigente:** ${campo('nome')} · versão ${campo('versao')} ·
${campo('totalQuestoes')} questões · ${campo('duracaoMin')} min · corte
${campo('notaCorte')} · verificado: **${campo('verificado')}**

**Rotas registradas (${rotas.length}):**
${rotas.map((r) => `\`${r}\``).join(' · ') || '_nenhuma_'}

**Arquivos do motor:**
${walk(join(ROOT, 'src/lib/engine'))
  .map((f) => `- \`${relative(ROOT, f).split(sep).join('/')}\``)
  .join('\n') || '_nenhum_'}
${FIM}`

const caminhoDoc = join(ROOT, 'CLAUDE.md')
const doc = readFileSync(caminhoDoc, 'utf8')
const i = doc.indexOf(INICIO)
const j = doc.indexOf(FIM)

if (i === -1 || j === -1) {
  console.error('CLAUDE.md: marcadores AUTO:INICIO/AUTO:FIM não encontrados.')
  process.exit(1)
}

writeFileSync(caminhoDoc, doc.slice(0, i) + bloco + doc.slice(j + FIM.length))
console.log(
  `CLAUDE.md atualizado — ${conceitos} conceitos, ${questoes} questões, ${rotas.length} rotas.`,
)
