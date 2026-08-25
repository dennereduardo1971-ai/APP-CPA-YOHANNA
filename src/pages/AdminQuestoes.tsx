import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Pill } from '@/components/ui/Badge'
import { Vazio } from '@/components/ui/Empty'
import { AdminShell, ItemAdmin } from '@/components/domain/AdminShell'
import { MACROTEMAS, getConceito } from '@/lib/content'
import { QUESTOES, ROTULO_DIFICULDADE } from '@/lib/questions'
import { useStore } from '@/lib/store'

export default function AdminQuestoes() {
  const overlay = useStore((s) => s.overlay)
  const navegar = useNavigate()
  const [busca, setBusca] = useState('')
  const [macroId, setMacroId] = useState('')

  const visiveis = useMemo(() => {
    const termo = busca.trim().toLowerCase()
    return QUESTOES.filter(
      (q) =>
        (!macroId || q.macrotemaId === macroId) &&
        (!termo || q.enunciado.toLowerCase().includes(termo) || q.id.includes(termo)),
    )
  }, [busca, macroId, overlay])

  return (
    <AdminShell
      titulo="Questões"
      descricao={`${QUESTOES.length} no banco. Toda questão é autoral (regra 5).`}
      acao={
        <Button tamanho="sm" onClick={() => navegar('/admin/questao/nova')}>
          Nova
        </Button>
      }
    >
      <Card className="mb-5">
        <input
          type="search"
          value={busca}
          placeholder="Buscar por enunciado ou id"
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

      {visiveis.length === 0 ? (
        <Vazio
          icone="questao"
          titulo="Nenhuma questão encontrada"
          descricao="Ajuste a busca ou o filtro de módulo."
        />
      ) : (
        <ul className="flex flex-col gap-2">
          {visiveis.slice(0, 80).map((q) => {
            const corretas = q.alternativas.filter((a) => a.correta).length
            return (
              <li key={q.id}>
                <ItemAdmin
                  para={`/admin/questao/${q.id}`}
                  titulo={q.enunciado.slice(0, 90)}
                  detalhe={`${getConceito(q.conceitoId)?.titulo ?? 'sem conceito'} · ${ROTULO_DIFICULDADE[q.dificuldade]}`}
                  marca={corretas !== 1 ? <Pill tom="danger">sem gabarito</Pill> : undefined}
                />
              </li>
            )
          })}
        </ul>
      )}

      {visiveis.length > 80 && (
        <p className="mt-3 text-center text-xs text-muted">
          Mostrando 80 de {visiveis.length}. Use a busca para chegar mais perto.
        </p>
      )}
    </AdminShell>
  )
}
