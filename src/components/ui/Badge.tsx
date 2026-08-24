import type { ReactNode } from 'react'
import type { Dificuldade, Etiqueta } from '@/lib/types'

const ETIQUETAS: Record<Etiqueta, { rotulo: string; classe: string }> = {
  ESSENCIAL: { rotulo: 'Essencial', classe: 'bg-aurora/15 text-aurora border-aurora/30' },
  ATENCAO: { rotulo: 'Atenção', classe: 'bg-warn-soft text-warn border-warn/30' },
  DECORAR: { rotulo: 'Decorar', classe: 'bg-elevated text-ink-2 border-line' },
  ENTENDER: { rotulo: 'Entender', classe: 'bg-elevated text-ink-2 border-line' },
  PEGADINHA: { rotulo: 'Pegadinha', classe: 'bg-danger-soft text-danger border-danger/30' },
}

export function EtiquetaBadge({ etiqueta }: { etiqueta: Etiqueta }) {
  const cfg = ETIQUETAS[etiqueta]
  return (
    <span
      className={`inline-flex items-center rounded-md border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${cfg.classe}`}
    >
      {cfg.rotulo}
    </span>
  )
}

const DIFICULDADES: Record<Dificuldade, { rotulo: string; classe: string }> = {
  facil: { rotulo: 'Fácil', classe: 'text-jade' },
  media: { rotulo: 'Média', classe: 'text-warn' },
  dificil: { rotulo: 'Difícil', classe: 'text-danger' },
}

export function DificuldadeBadge({ nivel }: { nivel: Dificuldade }) {
  const cfg = DIFICULDADES[nivel]
  return (
    <span className={`inline-flex items-center gap-1 text-[11px] font-medium ${cfg.classe}`}>
      <span aria-hidden className="text-[8px]">
        {nivel === 'facil' ? '●' : nivel === 'media' ? '●●' : '●●●'}
      </span>
      {cfg.rotulo}
    </span>
  )
}

export function Pill({
  children,
  tom = 'neutro',
}: {
  children: ReactNode
  tom?: 'neutro' | 'aurora' | 'jade' | 'warn' | 'danger'
}) {
  const tons = {
    neutro: 'bg-elevated text-ink-2 border-line',
    aurora: 'bg-aurora/15 text-aurora border-aurora/30',
    jade: 'bg-jade/15 text-jade border-jade/30',
    warn: 'bg-warn-soft text-warn border-warn/30',
    danger: 'bg-danger-soft text-danger border-danger/30',
  }
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${tons[tom]}`}
    >
      {children}
    </span>
  )
}
