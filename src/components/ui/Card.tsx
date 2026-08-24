import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children: ReactNode
  className?: string
  /** Torna o card inteiro clicável. */
  to?: string
  onClick?: () => void
}

export function Card({ children, className = '', to, onClick }: Props) {
  const classe = `card p-4 sm:p-5 ${to || onClick ? 'card-hover cursor-pointer text-left w-full' : ''} ${className}`

  if (to) {
    return (
      <Link to={to} className={`block ${classe}`}>
        {children}
      </Link>
    )
  }
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classe}>
        {children}
      </button>
    )
  }
  return <div className={classe}>{children}</div>
}

export function CardTitulo({ children, acao }: { children: ReactNode; acao?: ReactNode }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">
        {children}
      </h2>
      {acao}
    </div>
  )
}

export function Secao({
  titulo,
  descricao,
  acao,
  children,
}: {
  titulo: string
  descricao?: string
  acao?: ReactNode
  children: ReactNode
}) {
  return (
    <section className="mb-8">
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <h2 className="display text-lg">{titulo}</h2>
          {descricao && <p className="mt-0.5 text-sm text-muted">{descricao}</p>}
        </div>
        {acao}
      </div>
      {children}
    </section>
  )
}
