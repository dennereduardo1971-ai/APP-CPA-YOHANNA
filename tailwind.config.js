/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        elevated: 'rgb(var(--elevated) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        'ink-2': 'rgb(var(--ink-2) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        // Acento único da marca.
        aurora: 'rgb(var(--aurora) / <alpha-value>)',
        'aurora-dim': 'rgb(var(--aurora-dim) / <alpha-value>)',
        'aurora-soft': 'rgb(var(--aurora-soft) / <alpha-value>)',
        ouro: 'rgb(var(--ouro) / <alpha-value>)',
        // Identidade de módulo — ver src/lib/personagens.ts.
        hakuryuu: 'rgb(var(--hakuryuu) / <alpha-value>)',
        seiryuu: 'rgb(var(--seiryuu) / <alpha-value>)',
        ryokuryuu: 'rgb(var(--ryokuryuu) / <alpha-value>)',
        ouryuu: 'rgb(var(--ouryuu) / <alpha-value>)',
        // Semânticos.
        jade: 'rgb(var(--jade) / <alpha-value>)',
        'jade-soft': 'rgb(var(--jade-soft) / <alpha-value>)',
        warn: 'rgb(var(--warn) / <alpha-value>)',
        'warn-soft': 'rgb(var(--warn-soft) / <alpha-value>)',
        danger: 'rgb(var(--danger) / <alpha-value>)',
        'danger-soft': 'rgb(var(--danger-soft) / <alpha-value>)',
      },
      backgroundImage: {
        // O gradiente da alvorada: carmesim -> ouro.
        alvorada: 'linear-gradient(96deg, rgb(var(--aurora)), rgb(var(--ouro)))',
        // Céu antes do amanhecer, para o topo das páginas.
        ceu: 'linear-gradient(180deg, rgb(var(--aurora) / .16) 0%, rgb(var(--ouro) / .07) 45%, transparent 100%)',
        // Clarão no horizonte — cabeçalhos e telas de resultado.
        horizonte:
          'radial-gradient(120% 130% at 50% 118%, rgb(var(--ouro) / .30) 0%, rgb(var(--aurora) / .22) 38%, transparent 72%)',
      },
      // A fonte web é opcional; a pilha de fallback precisa ficar boa sozinha,
      // porque o APK roda sem rede.
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        // Serif de traço modulado para títulos — o contraste com o sans do
        // corpo é o que carrega a hierarquia, mesmo sem a fonte web.
        display: [
          '"Gowun Batang"',
          '"Noto Serif"',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          '"Roboto Mono"',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      borderRadius: { xl2: '1.25rem' },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,.4), 0 12px 32px -20px rgba(0,0,0,.9)',
        glow: '0 0 0 1px rgb(var(--aurora) / .35), 0 8px 28px -12px rgb(var(--aurora) / .4)',
        // Halo do amanhecer, para o elemento em foco na tela.
        alvorada: '0 0 0 1px rgb(var(--aurora) / .35), 0 10px 40px -14px rgb(var(--ouro) / .45)',
      },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(6px)' }, '100%': { opacity: '1', transform: 'none' } },
        'pop': { '0%': { transform: 'scale(.94)' }, '60%': { transform: 'scale(1.02)' }, '100%': { transform: 'scale(1)' } },
        'shake': { '0%,100%': { transform: 'translateX(0)' }, '25%': { transform: 'translateX(-4px)' }, '75%': { transform: 'translateX(4px)' } },
        // O horizonte clareando — usado uma vez por tela, nunca em laço curto.
        'amanhecer': {
          '0%': { opacity: '0', transform: 'translateY(10px) scale(.98)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        // Brilho lento de escama/selo. Respeita prefers-reduced-motion.
        'brilho': {
          '0%,100%': { opacity: '.55' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up .28s ease-out both',
        'pop': 'pop .26s ease-out both',
        'shake': 'shake .3s ease-in-out both',
        'amanhecer': 'amanhecer .5s cubic-bezier(.22,.9,.28,1) both',
        'brilho': 'brilho 3.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
