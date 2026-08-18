import { useMemo, useState } from 'react'
import type { MapaMentalNode } from '@/lib/types'

/**
 * Mapa mental navegável.
 *
 * Estrutura em árvore com linhas de ligação, em vez de grafo livre: lê bem
 * em tela de celular, não exige biblioteca de layout e mantém a hierarquia
 * dos conceitos explícita.
 */

interface Props {
  raiz: MapaMentalNode
  /** Mostra apenas os nós marcados como essenciais para revisão. */
  modoRevisao?: boolean
}

function coletarIds(no: MapaMentalNode, ate = 1, nivel = 0, saida = new Set<string>()) {
  if (nivel < ate) saida.add(no.id)
  no.filhos?.forEach((f) => coletarIds(f, ate, nivel + 1, saida))
  return saida
}

function filtrarRevisao(no: MapaMentalNode): MapaMentalNode | null {
  const filhos = (no.filhos ?? []).map(filtrarRevisao).filter(Boolean) as MapaMentalNode[]
  if (!no.revisao && !filhos.length) return null
  return { ...no, filhos: filhos.length ? filhos : undefined }
}

export function MapaMental({ raiz, modoRevisao = false }: Props) {
  const arvore = useMemo(
    () => (modoRevisao ? (filtrarRevisao(raiz) ?? raiz) : raiz),
    [raiz, modoRevisao],
  )
  const [abertos, setAbertos] = useState<Set<string>>(() => coletarIds(arvore, 2))
  const [destaque, setDestaque] = useState<string | null>(null)

  function alternar(id: string) {
    setAbertos((s) => {
      const novo = new Set(s)
      if (novo.has(id)) novo.delete(id)
      else novo.add(id)
      return novo
    })
  }

  const todosIds = useMemo(() => coletarIds(arvore, 99), [arvore])
  const tudoAberto = abertos.size >= todosIds.size

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setAbertos(tudoAberto ? coletarIds(arvore, 1) : new Set(todosIds))}
          className="rounded-lg border border-line bg-surface px-3 py-1.5 text-[13px] text-ink-2 transition-colors hover:border-aqua/40 hover:text-ink"
        >
          {tudoAberto ? 'Recolher tudo' : 'Expandir tudo'}
        </button>
        {destaque && (
          <button
            type="button"
            onClick={() => setDestaque(null)}
            className="rounded-lg border border-aqua/40 bg-aqua/10 px-3 py-1.5 text-[13px] text-aqua"
          >
            Limpar destaque
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[280px]">
          <No
            no={arvore}
            nivel={0}
            abertos={abertos}
            alternar={alternar}
            destaque={destaque}
            setDestaque={setDestaque}
          />
        </div>
      </div>
    </div>
  )
}

interface NoProps {
  no: MapaMentalNode
  nivel: number
  abertos: Set<string>
  alternar: (id: string) => void
  destaque: string | null
  setDestaque: (id: string | null) => void
}

function No({ no, nivel, abertos, alternar, destaque, setDestaque }: NoProps) {
  const temFilhos = !!no.filhos?.length
  const aberto = abertos.has(no.id)
  const emDestaque = destaque === no.id

  const estilos = [
    'border-aqua/60 bg-aqua/12 text-ink font-bold',
    'border-line bg-elevated text-ink font-semibold',
    'border-line bg-surface text-ink-2',
  ]
  const estilo = estilos[Math.min(nivel, estilos.length - 1)]

  return (
    <div className={nivel > 0 ? 'relative pl-5' : ''}>
      {nivel > 0 && (
        <span aria-hidden className="absolute bottom-3 left-0 top-0 w-px bg-line" />
      )}
      {nivel > 0 && <span aria-hidden className="absolute left-0 top-5 h-px w-4 bg-line" />}

      <div className="flex items-start gap-2 py-1">
        <button
          type="button"
          onClick={() => {
            setDestaque(emDestaque ? null : no.id)
            if (temFilhos) alternar(no.id)
          }}
          className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm transition-all ${estilo} ${
            emDestaque ? 'ring-2 ring-aqua/50' : ''
          } ${destaque && !emDestaque ? 'opacity-45' : ''}`}
        >
          {temFilhos && (
            <span aria-hidden className={`text-[10px] text-muted transition-transform ${aberto ? 'rotate-90' : ''}`}>
              ▶
            </span>
          )}
          <span>{no.rotulo}</span>
          {no.revisao && (
            <span
              aria-label="essencial para revisão"
              className="ml-1 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua"
            />
          )}
        </button>
      </div>

      {emDestaque && no.detalhe && (
        <p className="mb-2 ml-3 max-w-md text-[13px] leading-relaxed text-muted">{no.detalhe}</p>
      )}

      {temFilhos && aberto && (
        <div>
          {no.filhos!.map((filho) => (
            <No
              key={filho.id}
              no={filho}
              nivel={nivel + 1}
              abertos={abertos}
              alternar={alternar}
              destaque={destaque}
              setDestaque={setDestaque}
            />
          ))}
        </div>
      )}
    </div>
  )
}
