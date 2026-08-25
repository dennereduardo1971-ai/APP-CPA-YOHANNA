import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variante = 'primaria' | 'secundaria' | 'contorno' | 'fantasma' | 'perigo'
type Tamanho = 'sm' | 'md' | 'lg'

const VARIANTES: Record<Variante, string> = {
  // O gradiente da alvorada só aparece na ação principal da tela: é o que
  // separa "o que fazer agora" de todo o resto da interface.
  primaria:
    'bg-alvorada text-bg font-bold hover:brightness-110 active:brightness-95 shadow-alvorada disabled:shadow-none',
  secundaria: 'bg-elevated text-ink border border-line hover:border-aurora/50',
  contorno: 'border border-aurora/60 text-aurora hover:bg-aurora-soft',
  fantasma: 'text-ink-2 hover:text-ink hover:bg-elevated',
  perigo: 'border border-danger/50 text-danger hover:bg-danger/10',
}

const TAMANHOS: Record<Tamanho, string> = {
  sm: 'h-9 px-3 text-sm rounded-lg gap-1.5',
  md: 'h-11 px-4 text-[15px] rounded-xl gap-2',
  lg: 'h-14 px-6 text-base rounded-2xl gap-2.5',
}

const base =
  'inline-flex items-center justify-center transition-all duration-150 select-none ' +
  'disabled:opacity-40 disabled:pointer-events-none active:scale-[.985] whitespace-nowrap'

interface Comum {
  variante?: Variante
  tamanho?: Tamanho
  bloco?: boolean
  children: ReactNode
  className?: string
}

export function Button({
  variante = 'primaria',
  tamanho = 'md',
  bloco,
  className = '',
  ...props
}: Comum & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${base} ${VARIANTES[variante]} ${TAMANHOS[tamanho]} ${bloco ? 'w-full' : ''} ${className}`}
      {...props}
    />
  )
}

export function ButtonLink({
  to,
  variante = 'primaria',
  tamanho = 'md',
  bloco,
  className = '',
  children,
}: Comum & { to: string }) {
  return (
    <Link
      to={to}
      className={`${base} ${VARIANTES[variante]} ${TAMANHOS[tamanho]} ${bloco ? 'w-full' : ''} ${className}`}
    >
      {children}
    </Link>
  )
}
