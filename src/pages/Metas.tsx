import { useState } from 'react'
import { Cabecalho } from '@/components/layout/AppShell'
import { Card, Secao } from '@/components/ui/Card'
import { Barra } from '@/components/ui/Progress'
import { useStore, progressoDoDia, diasParaProva } from '@/lib/store'
import { diaLocal } from '@/lib/engine/gamification'

export default function Metas() {
  const estado = useStore()
  const atualizarMetas = useStore((s) => s.atualizarMetas)
  const dia = progressoDoDia(estado)
  const diasProva = diasParaProva(estado.metas)
  const [salvou, setSalvou] = useState(false)

  // Progresso semanal: últimos 7 dias com meta cumprida.
  const hoje = new Date()
  const semana = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(hoje)
    d.setDate(d.getDate() - (6 - i))
    const chave = diaLocal(d.getTime())
    const minutos = estado.minutosPorDia[chave] ?? 0
    return {
      chave,
      rotulo: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'][d.getDay()],
      minutos,
      cumprida: minutos >= estado.metas.minutosDia,
    }
  })
  const diasCumpridos = semana.filter((d) => d.cumprida).length

  function salvar(campos: Parameters<typeof atualizarMetas>[0]) {
    atualizarMetas(campos)
    setSalvou(true)
    setTimeout(() => setSalvou(false), 1600)
  }

  return (
    <div>
      <Cabecalho titulo="Metas" descricao="Ritmo é mais importante que volume." />

      <Secao titulo="Hoje">
        <Card>
          <div className="mb-1 flex items-baseline justify-between text-sm">
            <span className="font-medium">Minutos de estudo</span>
            <span className="tnum text-muted">
              {dia.minutos} / {dia.metaMinutos}
            </span>
          </div>
          <Barra valor={dia.progressoMinutos} />

          <div className="mb-1 mt-4 flex items-baseline justify-between text-sm">
            <span className="font-medium">Questões respondidas</span>
            <span className="tnum text-muted">
              {dia.questoes} / {dia.metaQuestoes}
            </span>
          </div>
          <Barra valor={dia.progressoQuestoes} />

          {dia.cumprida && (
            <p className="mt-4 text-sm font-semibold text-aqua">
              Meta de hoje cumprida. Estudar além disso é bônus.
            </p>
          )}
        </Card>
      </Secao>

      <Secao titulo="Semana" descricao={`Meta: ${estado.metas.diasSemana} dias por semana.`}>
        <Card>
          <div className="mb-3 flex items-end justify-between gap-1">
            {semana.map((d, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                <div className="flex h-20 w-full items-end justify-center">
                  <div
                    className={`w-full max-w-8 rounded-t-md transition-all ${
                      d.cumprida ? 'bg-aqua' : d.minutos > 0 ? 'bg-aqua/30' : 'bg-elevated'
                    }`}
                    style={{
                      height: `${Math.max(4, Math.min(100, (d.minutos / Math.max(1, estado.metas.minutosDia)) * 100))}%`,
                    }}
                  />
                </div>
                <span className="text-[11px] text-muted">{d.rotulo}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted">
            <span className="tnum font-semibold text-ink">{diasCumpridos}</span> de{' '}
            <span className="tnum">{estado.metas.diasSemana}</span> dias cumpridos nesta janela de
            7 dias.
          </p>
        </Card>
      </Secao>

      <Secao titulo="Ajustar metas">
        <Card>
          <label className="mb-2 block text-sm font-semibold">Minutos por dia</label>
          <div className="mb-5 flex flex-wrap gap-2">
            {[15, 30, 45, 60, 90].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => salvar({ minutosDia: v })}
                aria-pressed={estado.metas.minutosDia === v}
                className={`tnum rounded-lg border px-3 py-1.5 text-[13px] transition-colors ${
                  estado.metas.minutosDia === v
                    ? 'border-aqua bg-aqua/15 font-semibold text-aqua'
                    : 'border-line bg-surface text-ink-2 hover:border-aqua/40'
                }`}
              >
                {v} min
              </button>
            ))}
          </div>

          <label className="mb-2 block text-sm font-semibold">Questões por dia</label>
          <div className="mb-5 flex flex-wrap gap-2">
            {[10, 20, 30, 50].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => salvar({ questoesDia: v })}
                aria-pressed={estado.metas.questoesDia === v}
                className={`tnum rounded-lg border px-3 py-1.5 text-[13px] transition-colors ${
                  estado.metas.questoesDia === v
                    ? 'border-aqua bg-aqua/15 font-semibold text-aqua'
                    : 'border-line bg-surface text-ink-2 hover:border-aqua/40'
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <label className="mb-2 block text-sm font-semibold">Dias por semana</label>
          <div className="mb-5 flex flex-wrap gap-2">
            {[3, 4, 5, 6, 7].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => salvar({ diasSemana: v })}
                aria-pressed={estado.metas.diasSemana === v}
                className={`tnum rounded-lg border px-3 py-1.5 text-[13px] transition-colors ${
                  estado.metas.diasSemana === v
                    ? 'border-aqua bg-aqua/15 font-semibold text-aqua'
                    : 'border-line bg-surface text-ink-2 hover:border-aqua/40'
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <label htmlFor="data-prova" className="mb-2 block text-sm font-semibold">
            Data da prova
          </label>
          <input
            id="data-prova"
            type="date"
            value={estado.metas.dataProva ?? ''}
            onChange={(e) => salvar({ dataProva: e.target.value || null })}
            className="h-11 w-full rounded-xl border border-line bg-elevated px-3.5 text-[15px] outline-none transition-colors focus:border-aqua"
          />
          {diasProva !== null && (
            <p className="mt-2 text-sm text-muted">
              {diasProva > 0
                ? `Faltam ${diasProva} ${diasProva === 1 ? 'dia' : 'dias'}.`
                : diasProva === 0
                  ? 'A prova é hoje.'
                  : 'A data informada já passou.'}
            </p>
          )}

          {salvou && <p className="mt-4 text-sm font-semibold text-aqua">Metas atualizadas.</p>}
        </Card>
      </Secao>
    </div>
  )
}
