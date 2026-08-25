import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        /*
         * React, o roteador e o Zustand num pedaço só, separado do app.
         *
         * O motivo é o cache offline, não o tamanho total: o service worker
         * guarda por nome de arquivo, e os nomes carregam hash do conteúdo.
         * Com tudo junto, publicar a correção de uma alíquota trocava o hash
         * do pacote inteiro e obrigava o aparelho a baixar de novo os ~140 kB
         * de biblioteca que não mudaram. Separado, uma atualização de
         * conteúdo baixa só o pedaço do app.
         */
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'zustand'],
          conteudo: ['./src/lib/content/index.ts', './src/lib/questions/index.ts'],
        },
      },
    },
  },
})
