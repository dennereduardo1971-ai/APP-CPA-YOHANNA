import type { ReactNode } from 'react'

/**
 * Ornamento da identidade "Alvorada".
 *
 * Tudo aqui é SVG autoral desenhado no próprio arquivo: nenhum asset externo,
 * nenhuma requisição de rede. É requisito, não preferência — o app roda dentro
 * do APK sem conexão.
 *
 * Os motivos vêm da estética que a temática pede — amanhecer, escama, pena,
 * traço de pincel, selo de tinta — e não de reprodução de arte de terceiros.
 */

/** Céu do amanhecer atrás de um cabeçalho. Puramente decorativo. */
export function CeuAlvorada({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 bg-ceu ${className}`}
    />
  )
}

/**
 * Traço de pincel que separa seções. A espessura varia ao longo do caminho,
 * como um traço de tinta — é isso que o distingue de uma linha comum.
 */
export function DivisorPincel({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 240 8"
      preserveAspectRatio="none"
      className={`h-2 w-full text-aurora/45 ${className}`}
    >
      <path
        fill="currentColor"
        d="M2 4.4c14-2.1 27-3.1 39-3 12 .1 23 1.2 34 2.1 15 1.3 30 2.2 45 1.6 18-.7 35-2.8 53-3.7 20-1 40-.5 65 1.2-24 2.6-44 3.6-64 3.2-18-.4-35-2-53-2.6-15-.5-30 .1-45 1.2-11 .8-22 1.7-34 1.6-12-.1-25-1.2-40-3.3Z"
      />
    </svg>
  )
}

/**
 * Padrão de escamas — textura de fundo bem discreta. Usa `<pattern>` para não
 * repetir centenas de nós no DOM. O `id` precisa ser único por instância.
 */
export function PadraoEscamas({
  id = 'escamas',
  className = '',
}: {
  id?: string
  className?: string
}) {
  return (
    <svg aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}>
      <defs>
        <pattern id={id} width="22" height="18" patternUnits="userSpaceOnUse">
          <path
            d="M-11 18a11 9 0 0 1 22 0M11 18a11 9 0 0 1 22 0M0 9a11 9 0 0 1 22 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

/**
 * Selo de tinta — o carimbo quadrado usado como marca de conquista. A borda é
 * irregular de propósito: selo prensado à mão não sai perfeito.
 */
export function SeloConquista({
  children,
  tamanho = 56,
  obtido = true,
  className = '',
}: {
  children: ReactNode
  tamanho?: number
  obtido?: boolean
  className?: string
}) {
  return (
    <span
      className={`relative grid shrink-0 place-items-center ${
        obtido ? 'text-aurora' : 'text-muted'
      } ${className}`}
      style={{ width: tamanho, height: tamanho }}
    >
      <svg
        aria-hidden
        viewBox="0 0 56 56"
        className="absolute inset-0 h-full w-full"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M6.4 8.2c-.5 12-.7 25-.2 39.2 13.3.8 26.7.9 44.1.2.6-13.4.5-26.4-.3-39.6-13.9-.7-28.6-.7-43.6.2Z"
          strokeWidth="2.4"
          opacity={obtido ? 1 : 0.5}
        />
        {obtido && (
          <path
            d="M9.8 11.4c-.3 9.4-.4 19.6-.1 30.8 10.4.6 20.9.7 34.5.1.5-10.5.4-20.7-.2-31-10.9-.5-22.4-.5-34.2.1Z"
            strokeWidth="1"
            opacity={0.4}
          />
        )}
      </svg>
      <span className="relative grid place-items-center">{children}</span>
    </span>
  )
}

/**
 * Faixa do amanhecer: o clarão radial do horizonte. Vai atrás de blocos de
 * destaque — resultado de simulado, conquista, fim de sessão.
 */
export function Horizonte({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 bg-horizonte ${className}`}
    />
  )
}
