import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Cabecalho } from '@/components/layout/AppShell'
import { Card } from '@/components/ui/Card'
import { EtiquetaBadge } from '@/components/ui/Badge'
import { MACROTEMAS } from '@/lib/content'

/** Resumos de 30 segundos, agrupados por macrotema. Leitura de revisão. */
export default function Resumos() {
  const [filtro, setFiltro] = useState<string | null>(null)
  const macros = filtro ? MACROTEMAS.filter((m) => m.id === filtro) : MACROTEMAS

  return (
    <div>
      <Cabecalho
        titulo="Resumos"
        descricao="O essencial de cada conceito em 30 segundos de leitura."
      />

      <div className="mb-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFiltro(null)}
          aria-pressed={filtro === null}
          className={`rounded-lg border px-3 py-1.5 text-[13px] transition-colors ${
            filtro === null
              ? 'border-aqua bg-aqua/15 font-semibold text-aqua'
              : 'border-line bg-surface text-ink-2 hover:border-aqua/40'
          }`}
        >
          Todos
        </button>
        {MACROTEMAS.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setFiltro(m.id)}
            aria-pressed={filtro === m.id}
            className={`rounded-lg border px-3 py-1.5 text-[13px] transition-colors ${
              filtro === m.id
                ? 'border-aqua bg-aqua/15 font-semibold text-aqua'
                : 'border-line bg-surface text-ink-2 hover:border-aqua/40'
            }`}
          >
            {m.codigo}
          </button>
        ))}
      </div>

      {macros.map((macro) => (
        <section key={macro.id} className="mb-8">
          <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">
            {macro.nome}
          </h2>
          <ul className="flex flex-col gap-2.5">
            {macro.microtemas.flatMap((mt) => mt.conceitos).map((c) => (
              <li key={c.id}>
                <Card>
                  <div className="mb-2 flex flex-wrap items-center gap-1.5">
                    {c.etiquetas.map((e) => (
                      <EtiquetaBadge key={e} etiqueta={e} />
                    ))}
                  </div>
                  <p className="font-bold">{c.titulo}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{c.resumo30s}</p>
                  <div className="mt-3 flex gap-4 text-sm font-semibold">
                    <Link to={`/conteudo/${c.id}`} className="text-aqua">
                      Aula completa
                    </Link>
                    <Link to={`/mapas/${c.id}`} className="text-aqua">
                      Mapa mental
                    </Link>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
