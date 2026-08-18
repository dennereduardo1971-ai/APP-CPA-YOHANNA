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
        aqua: 'rgb(var(--aqua) / <alpha-value>)',
        'aqua-dim': 'rgb(var(--aqua-dim) / <alpha-value>)',
        'aqua-soft': 'rgb(var(--aqua-soft) / <alpha-value>)',
        warn: 'rgb(var(--warn) / <alpha-value>)',
        'warn-soft': 'rgb(var(--warn-soft) / <alpha-value>)',
        danger: 'rgb(var(--danger) / <alpha-value>)',
        'danger-soft': 'rgb(var(--danger-soft) / <alpha-value>)',
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
        glow: '0 0 0 1px rgb(var(--aqua) / .35), 0 8px 28px -12px rgb(var(--aqua) / .4)',
      },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(6px)' }, '100%': { opacity: '1', transform: 'none' } },
        'pop': { '0%': { transform: 'scale(.94)' }, '60%': { transform: 'scale(1.02)' }, '100%': { transform: 'scale(1)' } },
        'shake': { '0%,100%': { transform: 'translateX(0)' }, '25%': { transform: 'translateX(-4px)' }, '75%': { transform: 'translateX(4px)' } },
      },
      animation: {
        'fade-up': 'fade-up .28s ease-out both',
        'pop': 'pop .26s ease-out both',
        'shake': 'shake .3s ease-in-out both',
      },
    },
  },
  plugins: [],
}
