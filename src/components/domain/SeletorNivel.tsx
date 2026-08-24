import { useState } from 'react'
import type { NiveisExplicacao } from '@/lib/types'

/**
 * Três níveis progressivos de profundidade (item 4 da especificação).
 *
 * O nível 2 — "Aprenda" — não tem texto próprio: ele É a lição completa que
 * segue abaixo na página. Por isso selecioná-lo apenas recolhe este painel e
 * devolve o leitor ao corpo da aula.
 *
 * Ninguém é obrigado a subir de nível: o padrão é nenhum selecionado, e a
 * aula continua legível como sempre foi.
 */

type Nivel = 1 | 2 | 3

const ROTULOS: Record<Nivel, { titulo: string; descricao: string }> = {
  1: { titulo: 'Entenda', descricao: 'a ideia em duas frases' },
  2: { titulo: 'Aprenda', descricao: 'a lição completa, abaixo' },
  3: { titulo: 'Aprofunde', descricao: 'detalhe técnico e conexões' },
}

export function SeletorNivel({ niveis }: { niveis: NiveisExplicacao }) {
  const [nivel, setNivel] = useState<Nivel | null>(null)
  const texto = nivel === 1 ? niveis.entenda : nivel === 3 ? niveis.aprofunde : null

  return (
    <section className="mb-8" aria-labelledby="nivel-titulo">
      <p
        id="nivel-titulo"
        className="mb-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted"
      >
        Escolha a profundidade
      </p>

      <div role="group" aria-labelledby="nivel-titulo" className="flex flex-wrap gap-2">
        {([1, 2, 3] as Nivel[]).map((n) => {
          const ativo = nivel === n
          return (
            <button
              key={n}
              type="button"
              aria-pressed={ativo}
              onClick={() => setNivel(ativo ? null : n)}
              className={`rounded-xl border px-3 py-2 text-left transition-colors ${
                ativo
                  ? 'border-aqua bg-aqua/10 text-ink'
                  : 'border-line bg-elevated text-ink-2 hover:border-aqua/40 hover:text-ink'
              }`}
            >
              <span className="block text-[13px] font-semibold">
                <span className="tnum text-muted">{n}.</span> {ROTULOS[n].titulo}
              </span>
              <span className="block text-[11px] text-muted">{ROTULOS[n].descricao}</span>
            </button>
          )
        })}
      </div>

      {texto && (
        <div className="mt-3 rounded-2xl border border-line bg-elevated/60 p-4">
          <p className="text-[15px] leading-relaxed text-ink-2">{texto}</p>
        </div>
      )}

      {nivel === 2 && (
        <p className="mt-3 text-[13px] leading-relaxed text-muted">
          O nível 2 é a própria aula, logo abaixo — siga a leitura normalmente.
        </p>
      )}
    </section>
  )
}
