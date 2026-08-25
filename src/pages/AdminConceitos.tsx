import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Pill } from '@/components/ui/Badge'
import { AdminShell, ItemAdmin } from '@/components/domain/AdminShell'
import { MACROTEMAS, MICROTEMAS } from '@/lib/content'
import { QUESTOES } from '@/lib/questions'
import { conceitoCompleto } from '@/lib/auditoria'
import { useStore } from '@/lib/store'

export default function AdminConceitos() {
  const overlay = useStore((s) => s.overlay)
  const navegar = useNavigate()
  const [busca, setBusca] = useState('')
  const [macroId, setMacroId] = useState<string>('')

  const linhas = useMemo(() => {
    const termo = busca.trim().toLowerCase()
    return MICROTEMAS.filter((mt) => !macroId || mt.macrotemaId === macroId).map((micro) => ({
      micro,
      conceitos: micro.conceitos.filter(
        (c) => !termo || c.titulo.toLowerCase().includes(termo) || c.id.includes(termo),
      ),
    }))
    // `overlay` entra na dependência porque editar conteúdo muda esta lista.
  }, [busca, macroId, overlay])

  const visiveis = linhas.filter((l) => l.conceitos.length > 0 || (!busca.trim() && !macroId))

  return (
    <AdminShell titulo="Aulas" descricao="Um conceito por aula. Editar aqui vale só neste aparelho.">
      <Card className="mb-5">
        <input
          type="search"
          value={busca}
          placeholder="Buscar por título ou id"
          onChange={(e) => setBusca(e.target.value)}
          className="h-11 w-full rounded-xl border border-line bg-elevated px-3.5 text-[15px] outline-none transition-colors placeholder:text-muted/70 focus:border-aurora"
        />
        <div className="no-scrollbar -mx-1 mt-3 flex gap-1.5 overflow-x-auto px-1">
          <button
            type="button"
            onClick={() => setMacroId('')}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
              macroId === ''
                ? 'border-aurora/40 bg-aurora-soft text-aurora'
                : 'border-line bg-elevated text-ink-2'
            }`}
          >
            Todos
          </button>
          {MACROTEMAS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMacroId(m.id)}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                macroId === m.id
                  ? 'border-aurora/40 bg-aurora-soft text-aurora'
                  : 'border-line bg-elevated text-ink-2'
              }`}
            >
              Módulo {m.ordem}
            </button>
          ))}
        </div>
      </Card>

      {visiveis.map(({ micro, conceitos }) => (
        <section key={micro.id} className="mb-6">
          <div className="mb-2 flex items-baseline justify-between gap-3">
            <h2 className="min-w-0 truncate text-sm font-bold">
              <span className="tnum mr-1.5 text-muted">{micro.codigo}</span>
              {micro.nome}
            </h2>
            <Button
              tamanho="sm"
              variante="fantasma"
              onClick={() => navegar(`/admin/conceito/novo?micro=${micro.id}`)}
            >
              + aula
            </Button>
          </div>

          {conceitos.length === 0 ? (
            <p className="rounded-xl border border-dashed border-line px-3.5 py-3 text-xs text-muted">
              Nenhuma aula escrita aqui ainda.
            </p>
          ) : (
            <ul className="flex flex-col gap-2">
              {conceitos.map((c) => {
                const questoes = QUESTOES.filter((q) => q.conceitoId === c.id).length
                const completo = conceitoCompleto(c)
                return (
                  <li key={c.id}>
                    <ItemAdmin
                      para={`/admin/conceito/${c.id}`}
                      titulo={c.titulo}
                      detalhe={`${questoes} ${questoes === 1 ? 'questão' : 'questões'} · ${c.minutosEstimados} min${
                        c.versao ? ` · versão ${c.versao}` : ''
                      }`}
                      marca={
                        <Pill tom={completo ? 'jade' : 'warn'}>
                          {completo ? '9 blocos' : 'incompleta'}
                        </Pill>
                      }
                    />
                  </li>
                )
              })}
            </ul>
          )}
        </section>
      ))}
    </AdminShell>
  )
}
