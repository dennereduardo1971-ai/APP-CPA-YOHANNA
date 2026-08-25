import { useState } from 'react'
import type { Conceito } from '@/lib/types'
import { Link } from 'react-router-dom'

type Modo = 'simples' | 'exemplo' | 'analogia' | 'iniciante'

const BOTOES: { modo: Modo; rotulo: string }[] = [
  { modo: 'simples', rotulo: 'Explicar mais simples' },
  { modo: 'exemplo', rotulo: 'Dar exemplo' },
  { modo: 'analogia', rotulo: 'Fazer analogia' },
  { modo: 'iniciante', rotulo: 'Como se eu fosse iniciante' },
]

/**
 * Reexplicações pré-autoradas.
 *
 * Decisão de projeto: o texto vem do próprio conteúdo revisado, não de
 * geração ao vivo. Isso garante que a segunda explicação esteja correta,
 * funciona offline e não custa nada por uso. O gancho de IA continua
 * possível — mas nunca como fonte primária de conteúdo regulatório.
 */
export function ExpliqueDeOutroJeito({
  conceito,
  onFechar,
}: {
  conceito: Conceito
  onFechar?: () => void
}) {
  const [modo, setModo] = useState<Modo>('simples')

  return (
    <div className="rounded-2xl border border-line bg-elevated/60 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">
          Explique de outro jeito
        </p>
        {onFechar && (
          <button
            type="button"
            onClick={onFechar}
            className="text-xs text-muted hover:text-ink"
            aria-label="Fechar"
          >
            fechar
          </button>
        )}
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        {BOTOES.map((b) => (
          <button
            key={b.modo}
            type="button"
            onClick={() => setModo(b.modo)}
            aria-pressed={modo === b.modo}
            className={`rounded-lg border px-3 py-1.5 text-[13px] transition-colors ${
              modo === b.modo
                ? 'border-aurora bg-aurora-soft font-semibold text-aurora'
                : 'border-line bg-surface text-ink-2 hover:border-aurora/40'
            }`}
          >
            {b.rotulo}
          </button>
        ))}
      </div>

      <p className="text-[15px] leading-relaxed text-ink-2">{conceito.reexplicacoes[modo]}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          to={`/conteudo/${conceito.id}`}
          className="rounded-lg border border-line bg-surface px-3 py-1.5 text-[13px] text-ink-2 transition-colors hover:border-aurora/40 hover:text-ink"
        >
          Rever a aula
        </Link>
        <Link
          to={`/mapas/${conceito.id}`}
          className="rounded-lg border border-line bg-surface px-3 py-1.5 text-[13px] text-ink-2 transition-colors hover:border-aurora/40 hover:text-ink"
        >
          Ver mapa mental
        </Link>
      </div>
    </div>
  )
}
