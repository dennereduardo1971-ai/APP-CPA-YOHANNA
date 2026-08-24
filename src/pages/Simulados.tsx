import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Cabecalho } from '@/components/layout/AppShell'
import { FaixaPersonagem } from '@/components/domain/Personagem'
import { GUARDIAO_DESAFIOS } from '@/lib/personagens'
import { Card, Secao } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Pill } from '@/components/ui/Badge'
import { AvisoVerificacao, Vazio } from '@/components/ui/Empty'
import { BLUEPRINT, SIMULADO_PRESETS } from '@/lib/blueprint'
import { MACROTEMAS } from '@/lib/content'
import { ROTULO_DIFICULDADE } from '@/lib/questions'
import type { Dificuldade, SimuladoModo } from '@/lib/types'
import { useStore } from '@/lib/store'

const MODOS: SimuladoModo[] = ['completo', 'rapido', 'tema', 'pontos_fracos']

export default function Simulados() {
  const navegar = useNavigate()
  const simulados = useStore((s) => s.simulados)
  const [modo, setModo] = useState<SimuladoModo | null>(null)
  const [macros, setMacros] = useState<string[]>([])
  const [dificuldades, setDificuldades] = useState<Dificuldade[]>([])
  const [quantidade, setQuantidade] = useState(15)

  const historico = useMemo(() => [...simulados].reverse().slice(0, 5), [simulados])

  function iniciar(m: SimuladoModo) {
    const params = new URLSearchParams()
    if (m === 'tema' || m === 'pontos_fracos') {
      params.set('q', String(quantidade))
      if (macros.length) params.set('macros', macros.join(','))
      if (dificuldades.length) params.set('dif', dificuldades.join(','))
    }
    navegar(`/simulado/${m}?${params.toString()}`)
  }

  return (
    <div>
      <Cabecalho
        titulo="Simulados"
        descricao={`Estrutura oficial: ${BLUEPRINT.totalQuestoes} questões, ${BLUEPRINT.duracaoMin} min, ${Math.round(BLUEPRINT.notaCorte * 100)}% para aprovação.`}
      />

      <FaixaPersonagem personagem={GUARDIAO_DESAFIOS} className="mb-6" />

      {!BLUEPRINT.verificado && (
        <div className="mb-6">
          <AvisoVerificacao>
            A estrutura da prova ainda não foi conferida contra o edital vigente da ANBIMA. O
            simulado reproduz o formato conhecido publicamente — confirme os números oficiais
            antes de usar como referência de aprovação.
          </AvisoVerificacao>
        </div>
      )}

      <Secao titulo="Escolha o formato">
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {MODOS.map((m) => {
            const preset = SIMULADO_PRESETS[m]
            const selecionado = modo === m
            const precisaConfig = m === 'tema' || m === 'pontos_fracos'
            return (
              <li key={m}>
                <Card
                  onClick={() => (precisaConfig ? setModo(selecionado ? null : m) : iniciar(m))}
                  className={selecionado ? 'border-aqua' : ''}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-bold">{preset.rotulo}</p>
                      <p className="mt-1 text-sm text-muted">{preset.descricao}</p>
                    </div>
                    {preset.cronometro && <Pill tom="warn">cronômetro</Pill>}
                  </div>
                </Card>
              </li>
            )
          })}
        </ul>
      </Secao>

      {modo && (
        <Secao titulo="Configuração" descricao="Ajuste o recorte antes de começar.">
          <Card>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">
              Quantidade
            </p>
            <div className="mb-5 flex flex-wrap gap-2">
              {[10, 15, 20, 30].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setQuantidade(n)}
                  aria-pressed={quantidade === n}
                  className={`rounded-lg border px-3 py-1.5 text-[13px] transition-colors ${
                    quantidade === n
                      ? 'border-aqua bg-aqua/15 font-semibold text-aqua'
                      : 'border-line bg-surface text-ink-2 hover:border-aqua/40'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>

            {modo === 'tema' && (
              <>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">
                  Temas
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {MACROTEMAS.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() =>
                        setMacros((s) =>
                          s.includes(m.id) ? s.filter((x) => x !== m.id) : [...s, m.id],
                        )
                      }
                      aria-pressed={macros.includes(m.id)}
                      className={`rounded-lg border px-3 py-1.5 text-[13px] transition-colors ${
                        macros.includes(m.id)
                          ? 'border-aqua bg-aqua/15 font-semibold text-aqua'
                          : 'border-line bg-surface text-ink-2 hover:border-aqua/40'
                      }`}
                    >
                      {m.nome}
                    </button>
                  ))}
                </div>
              </>
            )}

            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">
              Dificuldade
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              {(['facil', 'media', 'dificil'] as Dificuldade[]).map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() =>
                    setDificuldades((s) =>
                      s.includes(d) ? s.filter((x) => x !== d) : [...s, d],
                    )
                  }
                  aria-pressed={dificuldades.includes(d)}
                  className={`rounded-lg border px-3 py-1.5 text-[13px] transition-colors ${
                    dificuldades.includes(d)
                      ? 'border-aqua bg-aqua/15 font-semibold text-aqua'
                      : 'border-line bg-surface text-ink-2 hover:border-aqua/40'
                  }`}
                >
                  {ROTULO_DIFICULDADE[d]}
                </button>
              ))}
            </div>

            <Button bloco tamanho="lg" onClick={() => iniciar(modo)}>
              Iniciar simulado
            </Button>
          </Card>
        </Secao>
      )}

      <Secao titulo="Histórico">
        {historico.length === 0 ? (
          <Vazio icone="⏱" titulo="Nenhum simulado ainda" descricao="Faça o primeiro para medir onde você está." />
        ) : (
          <ul className="flex flex-col gap-2.5">
            {historico.map((s) => (
              <li key={s.id}>
                <Link
                  to={`/resultado/${s.id}`}
                  className="card card-hover block p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-semibold">{SIMULADO_PRESETS[s.modo].rotulo}</p>
                      <p className="tnum mt-0.5 text-xs text-muted">
                        {new Date(s.fim).toLocaleDateString('pt-BR')} · {s.acertos}/
                        {s.totalQuestoes} acertos
                      </p>
                    </div>
                    <span
                      className={`tnum shrink-0 text-xl font-extrabold ${
                        s.aprovado ? 'text-aqua' : 'text-danger'
                      }`}
                    >
                      {Math.round(s.percentual * 100)}%
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Secao>
    </div>
  )
}
