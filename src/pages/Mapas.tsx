import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Cabecalho } from '@/components/layout/AppShell'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { Vazio } from '@/components/ui/Empty'
import { MapaMental } from '@/components/domain/MapaMental'
import { CONCEITOS, MACROTEMAS, getConceito } from '@/lib/content'
import { useStore } from '@/lib/store'

export default function Mapas() {
  const { conceitoId } = useParams()
  const [modoRevisao, setModoRevisao] = useState(false)
  const favoritos = useStore((s) => s.favoritos.mapas)
  const alternarFavorito = useStore((s) => s.alternarFavorito)

  /* ---------------- Um mapa específico ---------------- */
  if (conceitoId) {
    const conceito = getConceito(conceitoId)
    if (!conceito) {
      return (
        <Vazio
          titulo="Mapa não encontrado"
          acao={<ButtonLink to="/mapas">Ver todos os mapas</ButtonLink>}
        />
      )
    }
    const favorito = favoritos.includes(conceito.id)

    return (
      <div>
        <nav className="mb-4 flex items-center gap-2 text-xs text-muted">
          <Link to="/mapas" className="hover:text-ink">
            Mapas mentais
          </Link>
          <span aria-hidden>/</span>
          <span className="truncate">{conceito.titulo}</span>
        </nav>

        <Cabecalho
          titulo={conceito.titulo}
          descricao={modoRevisao ? 'Modo revisão: só o que é essencial memorizar.' : conceito.objetivo}
          acao={
            <button
              type="button"
              onClick={() => alternarFavorito('mapas', conceito.id)}
              aria-pressed={favorito}
              aria-label={favorito ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
              className={`text-xl ${favorito ? 'text-aqua' : 'text-muted hover:text-ink'}`}
            >
              {favorito ? '★' : '☆'}
            </button>
          }
        />

        <div className="mb-5 flex gap-2">
          <button
            type="button"
            onClick={() => setModoRevisao(false)}
            aria-pressed={!modoRevisao}
            className={`rounded-lg border px-3 py-1.5 text-[13px] transition-colors ${
              !modoRevisao
                ? 'border-aqua bg-aqua/15 font-semibold text-aqua'
                : 'border-line bg-surface text-ink-2'
            }`}
          >
            Mapa completo
          </button>
          <button
            type="button"
            onClick={() => setModoRevisao(true)}
            aria-pressed={modoRevisao}
            className={`rounded-lg border px-3 py-1.5 text-[13px] transition-colors ${
              modoRevisao
                ? 'border-aqua bg-aqua/15 font-semibold text-aqua'
                : 'border-line bg-surface text-ink-2'
            }`}
          >
            Mapa para revisão
          </button>
        </div>

        <Card>
          <MapaMental raiz={conceito.mapaMental} modoRevisao={modoRevisao} />
        </Card>

        <p className="mt-3 text-xs text-muted">
          Toque em um nó para destacar e ver o detalhe. Os pontos em verde-água marcam o que é
          essencial na revisão.
        </p>

        <div className="mt-6 flex flex-col gap-2.5">
          <ButtonLink to={`/conteudo/${conceito.id}`} variante="secundaria" bloco>
            Ver a aula completa
          </ButtonLink>
        </div>
      </div>
    )
  }

  /* ---------------- Índice de mapas ---------------- */
  return (
    <div>
      <Cabecalho
        titulo="Mapas mentais"
        descricao="A estrutura de cada conceito em forma de árvore navegável."
      />

      {favoritos.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.13em] text-aqua">
            Favoritos
          </h2>
          <ul className="flex flex-col gap-2.5">
            {favoritos.map((id) => {
              const c = getConceito(id)
              if (!c) return null
              return (
                <li key={id}>
                  <Card to={`/mapas/${id}`}>
                    <p className="font-semibold">{c.titulo}</p>
                  </Card>
                </li>
              )
            })}
          </ul>
        </section>
      )}

      {MACROTEMAS.map((macro) => (
        <section key={macro.id} className="mb-8">
          <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">
            {macro.nome}
          </h2>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {macro.microtemas.flatMap((mt) => mt.conceitos).map((c) => (
              <li key={c.id}>
                <Card to={`/mapas/${c.id}`}>
                  <p className="font-semibold">{c.titulo}</p>
                  <p className="mt-1 line-clamp-2 text-sm text-muted">{c.conceitoChave}</p>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <p className="text-center text-xs text-muted">
        {CONCEITOS.length} mapas disponíveis
      </p>
    </div>
  )
}
