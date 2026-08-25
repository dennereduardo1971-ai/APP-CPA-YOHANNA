import type { ReactNode } from 'react'
import type { Dificuldade, Etiqueta } from '@/lib/types'
import { Icone, type IconeNome } from '@/components/ui/Icone'

/*
 * Fundos opacos, não `cor/15`.
 *
 * Uma pílula translúcida herda a superfície debaixo dela, e o mesmo carmesim
 * que dá 4.6:1 sobre `surface` cai para 3.6:1 quando o card é `elevated` —
 * ou seja, o contraste passava a depender de onde a pílula foi colocada. Os
 * tokens `*-soft` são cores fechadas: o par texto/fundo é sempre o mesmo, e
 * o teste em `src/test/acessibilidade.test.ts` consegue conferi-lo.
 */

const ETIQUETAS: Record<Etiqueta, { rotulo: string; classe: string }> = {
  ESSENCIAL: { rotulo: 'Essencial', classe: 'bg-aurora-soft text-aurora border-aurora/40' },
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

/*
 * O medidor de dificuldade é forma, não cor: um, dois ou três pontos cheios,
 * com o nome escrito ao lado. Quem não distingue verde de vermelho conta os
 * pontos; quem usa leitor de tela ouve o rótulo. Os pontos são traço autoral
 * de `Icone.tsx` — glifo Unicode vira caixinha no Android (regra 10).
 */
const DIFICULDADES: Record<Dificuldade, { rotulo: string; classe: string; icone: IconeNome }> = {
  facil: { rotulo: 'Fácil', classe: 'text-jade', icone: 'nivel1' },
  media: { rotulo: 'Média', classe: 'text-warn', icone: 'nivel2' },
  dificil: { rotulo: 'Difícil', classe: 'text-danger', icone: 'nivel3' },
}

export function DificuldadeBadge({ nivel }: { nivel: Dificuldade }) {
  const cfg = DIFICULDADES[nivel]
  return (
    <span className={`inline-flex items-center gap-1 text-[11px] font-medium ${cfg.classe}`}>
      <Icone nome={cfg.icone} tamanho={12} preenchido />
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
    aurora: 'bg-aurora-soft text-aurora border-aurora/40',
    jade: 'bg-jade-soft text-jade border-jade/40',
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
