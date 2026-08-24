interface BarraProps {
  valor: number
  className?: string
  altura?: string
  tom?: 'aurora' | 'jade' | 'warn' | 'danger'
}

export function Barra({ valor, className = '', altura = 'h-2', tom = 'aurora' }: BarraProps) {
  const pct = Math.max(0, Math.min(1, valor)) * 100
  const cores = { aurora: 'bg-aurora', jade: 'bg-jade', warn: 'bg-warn', danger: 'bg-danger' }
  return (
    <div
      className={`w-full overflow-hidden rounded-full bg-elevated ${altura} ${className}`}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`h-full rounded-full transition-[width] duration-500 ease-out ${cores[tom]}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

interface AnelProps {
  valor: number
  tamanho?: number
  espessura?: number
  rotulo?: string
  sublegenda?: string
  tom?: 'aurora' | 'jade' | 'warn' | 'danger'
}

export function Anel({
  valor,
  tamanho = 96,
  espessura = 8,
  rotulo,
  sublegenda,
  tom = 'aurora',
}: AnelProps) {
  const pct = Math.max(0, Math.min(1, valor))
  const r = (tamanho - espessura) / 2
  const c = 2 * Math.PI * r
  const cores = {
    aurora: 'rgb(var(--aurora))',
    jade: 'rgb(var(--jade))',
    warn: 'rgb(var(--warn))',
    danger: 'rgb(var(--danger))',
  }

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: tamanho, height: tamanho }}>
      <svg width={tamanho} height={tamanho} className="-rotate-90" aria-hidden>
        <circle
          cx={tamanho / 2}
          cy={tamanho / 2}
          r={r}
          fill="none"
          stroke="rgb(var(--elevated))"
          strokeWidth={espessura}
        />
        <circle
          cx={tamanho / 2}
          cy={tamanho / 2}
          r={r}
          fill="none"
          stroke={cores[tom]}
          strokeWidth={espessura}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          className="transition-[stroke-dashoffset] duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="tnum text-xl font-bold leading-none">{rotulo ?? `${Math.round(pct * 100)}%`}</span>
        {sublegenda && <span className="mt-1 text-[10px] uppercase tracking-wider text-muted">{sublegenda}</span>}
      </div>
    </div>
  )
}

/** Indicador de progresso de uma sessão: pontinhos por item. */
export function PassosSessao({ total, atual }: { total: number; atual: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Questão ${atual + 1} de ${total}`}>
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`h-1.5 flex-1 rounded-full transition-colors ${
            i < atual ? 'bg-aurora' : i === atual ? 'bg-aurora/50' : 'bg-elevated'
          }`}
        />
      ))}
    </div>
  )
}
