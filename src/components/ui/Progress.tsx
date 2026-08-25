/*
 * Uma barra sem nome acessível é ruído: o leitor de tela anuncia "barra de
 * progresso, 74%" logo depois de já ter lido "74%" no rótulo ao lado. Por
 * isso a barra só vira `progressbar` quando recebe `rotulo`; sem ele, ela é
 * a ilustração de um número que já está escrito na tela, e some da leitura.
 */
interface BarraProps {
  valor: number
  className?: string
  altura?: string
  tom?: 'aurora' | 'jade' | 'warn' | 'danger'
  /** Nome acessível. Passe só quando a barra for a ÚNICA fonte do número. */
  rotulo?: string
}

export function Barra({
  valor,
  className = '',
  altura = 'h-2',
  tom = 'aurora',
  rotulo,
}: BarraProps) {
  const pct = Math.max(0, Math.min(1, valor)) * 100
  const cores = { aurora: 'bg-aurora', jade: 'bg-jade', warn: 'bg-warn', danger: 'bg-danger' }
  return (
    <div
      className={`w-full overflow-hidden rounded-full bg-elevated ${altura} ${className}`}
      role={rotulo ? 'progressbar' : undefined}
      aria-label={rotulo}
      aria-hidden={rotulo ? undefined : true}
      aria-valuenow={rotulo ? Math.round(pct) : undefined}
      aria-valuemin={rotulo ? 0 : undefined}
      aria-valuemax={rotulo ? 100 : undefined}
      aria-valuetext={rotulo ? `${Math.round(pct)}%` : undefined}
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

/**
 * Indicador de progresso de uma sessão: pontinhos por item.
 *
 * Decorativo de propósito: quem usa o componente escreve "Questão 3 de 10"
 * em texto logo abaixo. Um `aria-label` aqui faria o leitor de tela repetir
 * a mesma frase duas vezes — e num `div` sem papel ele nem seria exposto.
 */
export function PassosSessao({ total, atual }: { total: number; atual: number }) {
  return (
    <div className="flex items-center gap-1" aria-hidden>
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
