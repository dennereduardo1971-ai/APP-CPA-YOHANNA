import { useState } from 'react'
import { Icone } from '@/components/ui/Icone'
import type { Personagem } from '@/lib/personagens'

/**
 * Marca do personagem. Usa a arte de `public/personagens/<id>.webp` quando o
 * arquivo existe e cai no ícone geométrico quando não existe — inclusive se o
 * arquivo falhar ao carregar. O app nunca depende de asset para funcionar.
 */
export function MarcaPersonagem({
  personagem,
  tamanho = 40,
  className = '',
}: {
  personagem: Personagem
  tamanho?: number
  className?: string
}) {
  const [falhou, setFalhou] = useState(false)
  const mostrarArte = Boolean(personagem.avatar) && !falhou

  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden rounded-full border border-aqua/30 bg-aqua/10 text-aqua ${className}`}
      style={{ width: tamanho, height: tamanho }}
    >
      {mostrarArte ? (
        <img
          src={personagem.avatar}
          alt=""
          width={tamanho}
          height={tamanho}
          className="h-full w-full object-cover"
          onError={() => setFalhou(true)}
        />
      ) : (
        <Icone nome={personagem.icone} tamanho={Math.round(tamanho * 0.55)} />
      )}
    </span>
  )
}

/**
 * Faixa de acompanhamento: marca, papel e a fala de guia do personagem.
 * Decorativa — não anuncia nada extra a leitores de tela além do texto.
 */
export function FaixaPersonagem({
  personagem,
  className = '',
}: {
  personagem: Personagem
  className?: string
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-line bg-elevated/50 p-3 ${className}`}
    >
      <MarcaPersonagem personagem={personagem} tamanho={40} />
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">
          {personagem.nome} · {personagem.papel}
        </p>
        <p className="mt-0.5 text-[14px] leading-relaxed text-ink-2">{personagem.guia}</p>
      </div>
    </div>
  )
}
