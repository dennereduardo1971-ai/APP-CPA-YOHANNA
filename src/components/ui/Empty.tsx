import type { ReactNode } from 'react'

export function Vazio({
  icone = '○',
  titulo,
  descricao,
  acao,
}: {
  icone?: string
  titulo: string
  descricao?: string
  acao?: ReactNode
}) {
  return (
    <div className="card flex flex-col items-center px-6 py-10 text-center">
      <span aria-hidden className="mb-3 text-3xl text-muted/50">
        {icone}
      </span>
      <p className="font-semibold">{titulo}</p>
      {descricao && <p className="mt-1 max-w-sm text-sm text-muted">{descricao}</p>}
      {acao && <div className="mt-5">{acao}</div>}
    </div>
  )
}

export function AvisoVerificacao({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-2.5 rounded-xl border border-warn/30 bg-warn-soft px-3.5 py-3 text-[13px] leading-relaxed text-warn">
      <span aria-hidden className="mt-px shrink-0 font-bold">
        !
      </span>
      <p>{children}</p>
    </div>
  )
}
