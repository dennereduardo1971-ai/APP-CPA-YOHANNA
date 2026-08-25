import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

/** Normaliza o id do módulo — no Windows o Rollup entrega caminho com `\`. */
const caminho = (id: string) => id.split('\\').join('/')

/**
 * Divisão do pacote.
 *
 * O critério é o CACHE, não o tamanho total: o app roda offline e o service
 * worker guarda por nome de arquivo com hash de conteúdo. Um pedaço único
 * obriga o aparelho a rebaixar tudo quando uma única aula muda.
 *
 * As camadas abaixo são declaradas em ordem de dependência, e a ordem importa:
 * um ciclo ENTRE PEDAÇOS quebraria a inicialização, porque
 * `content/index.ts` executa `reconstruir()` no topo do módulo e
 * `questions/builder.ts` monta seus índices a partir do conteúdo já montado.
 * A cadeia é sempre num sentido só:
 *
 *   registro-questoes → questoes-mN → questoes-motor
 *                                   → registro-conteudo → conteudo-mN
 *
 * Nenhuma seta volta. Ao mexer aqui, confira se isso continua verdadeiro.
 */
function pedaco(id: string): string | undefined {
  const p = caminho(id)

  if (p.includes('node_modules')) {
    if (/[/]node_modules[/](react|react-dom|react-router|react-router-dom|zustand)[/]/.test(p)) {
      return 'vendor'
    }
    return undefined
  }

  // Dados de aula: um pedaço por macrotema. Corrigir uma alíquota do módulo 2
  // não invalida o cache dos módulos 1, 3 e 4.
  const aula = p.match(/[/]src[/]lib[/]content[/]m(\d)/)
  if (aula) return `conteudo-m${aula[1]}`

  // Banco de questões: mesmo critério, um pedaço por macrotema.
  const banco = p.match(/[/]src[/]lib[/]questions[/]banco-m(\d)/)
  if (banco) return `questoes-m${banco[1]}`

  // Camadas de registro, separadas para manter a cadeia acíclica.
  if (p.includes('/src/lib/questions/builder.ts')) return 'questoes-motor'
  if (p.includes('/src/lib/questions/')) return 'registro-questoes'
  if (p.includes('/src/lib/content/')) return 'registro-conteudo'

  return undefined
}

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Cada macrotema fica abaixo de 500 kB; o aviso volta a ser sinal útil.
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: pedaco,
      },
    },
  },
})
