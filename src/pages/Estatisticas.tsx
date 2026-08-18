import { useMemo } from 'react'
import { Cabecalho } from '@/components/layout/AppShell'
import { Card, Secao } from '@/components/ui/Card'
import { Barra } from '@/components/ui/Progress'
import { Vazio } from '@/components/ui/Empty'
import { ButtonLink } from '@/components/ui/Button'
import { MACROTEMAS } from '@/lib/content'
import { ROTULO_DIFICULDADE } from '@/lib/questions'
import type { Dificuldade } from '@/lib/types'
import { useStore } from '@/lib/store'
import {
  agregar,
  evolucaoDiaria,
  porDificuldade,
  porMacrotema,
  prontidao,
} from '@/lib/engine/stats'
import { BLUEPRINT } from '@/lib/blueprint'

function GraficoEvolucao({ dados }: { dados: { dia: string; taxa: number; total: number }[] }) {
  if (dados.length < 2) {
    return (
      <p className="py-6 text-center text-sm text-muted">
        Responda em pelo menos dois dias diferentes para ver a evolução.
      </p>
    )
  }

  const largura = 320
  const altura = 100
  const passo = largura / (dados.length - 1)
  const pontos = dados.map((d, i) => `${i * passo},${altura - d.taxa * altura}`).join(' ')
  const area = `0,${altura} ${pontos} ${largura},${altura}`

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${largura} ${altura}`}
        className="h-28 w-full min-w-[280px]"
        preserveAspectRatio="none"
        role="img"
        aria-label={`Evolução da taxa de acerto em ${dados.length} dias`}
      >
        <line
          x1="0"
          y1={altura * 0.3}
          x2={largura}
          y2={altura * 0.3}
          stroke="rgb(var(--line))"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <polygon points={area} fill="rgb(var(--aqua))" opacity="0.12" />
        <polyline
          points={pontos}
          fill="none"
          stroke="rgb(var(--aqua))"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle
          cx={(dados.length - 1) * passo}
          cy={altura - dados[dados.length - 1].taxa * altura}
          r="3.5"
          fill="rgb(var(--aqua))"
        />
      </svg>
      <div className="mt-1 flex justify-between text-[11px] text-muted">
        <span>{new Date(`${dados[0].dia}T12:00`).toLocaleDateString('pt-BR')}</span>
        <span>70% é a linha de corte</span>
        <span>{new Date(`${dados.at(-1)!.dia}T12:00`).toLocaleDateString('pt-BR')}</span>
      </div>
    </div>
  )
}

export default function Estatisticas() {
  const respostas = useStore((s) => s.respostas)
  const estados = useStore((s) => s.estados)
  const agora = Date.now()

  const geral = useMemo(() => agregar(respostas), [respostas])
  const temas = useMemo(() => porMacrotema(respostas), [respostas])
  const dificuldades = useMemo(() => porDificuldade(respostas), [respostas])
  const evolucao = useMemo(() => evolucaoDiaria(respostas), [respostas])
  const pront = useMemo(() => prontidao(respostas, estados, agora), [respostas, estados, agora])

  if (!respostas.length) {
    return (
      <div>
        <Cabecalho titulo="Estatísticas" />
        <Vazio
          icone="◔"
          titulo="Sem dados ainda"
          descricao="As estatísticas aparecem depois das primeiras questões respondidas."
          acao={<ButtonLink to="/rapido">Fazer uma sessão</ButtonLink>}
        />
      </div>
    )
  }

  return (
    <div>
      <Cabecalho
        titulo="Estatísticas"
        descricao={`${geral.total} questões respondidas no total.`}
      />

      <Card className="mb-6">
        <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
          <div>
            <p className="tnum text-2xl font-extrabold text-aqua">
              {Math.round(geral.taxaAcerto * 100)}%
            </p>
            <p className="text-[11px] uppercase tracking-wider text-muted">taxa de acerto</p>
          </div>
          <div>
            <p className="tnum text-2xl font-extrabold text-danger">
              {Math.round(geral.taxaErro * 100)}%
            </p>
            <p className="text-[11px] uppercase tracking-wider text-muted">taxa de erro</p>
          </div>
          <div>
            <p className="tnum text-2xl font-extrabold">{geral.total}</p>
            <p className="text-[11px] uppercase tracking-wider text-muted">respondidas</p>
          </div>
          <div>
            <p className="tnum text-2xl font-extrabold">
              {Math.round(geral.tempoMedioMs / 1000)}s
            </p>
            <p className="text-[11px] uppercase tracking-wider text-muted">tempo médio</p>
          </div>
        </div>
      </Card>

      <Secao titulo="Prontidão estimada">
        <Card>
          {pront.valor === null ? (
            <>
              <p className="font-semibold text-warn">Cobertura insuficiente</p>
              <p className="mt-1 text-sm text-ink-2">{pront.motivo}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Preferimos não mostrar um número do que mostrar um número sem base. A estimativa
                aparece com pelo menos 60 respostas e metade dos conceitos praticados.
              </p>
            </>
          ) : (
            <>
              <div className="flex items-baseline justify-between gap-3">
                <p className="tnum text-3xl font-extrabold text-aqua">
                  {Math.round(pront.valor * 100)}%
                </p>
                <span className="tnum text-sm text-muted">
                  corte: {Math.round(BLUEPRINT.notaCorte * 100)}%
                </span>
              </div>
              <Barra
                valor={pront.valor}
                className="mt-3"
                tom={pront.valor >= BLUEPRINT.notaCorte ? 'aqua' : 'warn'}
              />
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Domínio ponderado pelos pesos dos macrotemas, com desconto de esquecimento.
                Indicador pedagógico — não é previsão de aprovação.
              </p>
            </>
          )}
        </Card>
      </Secao>

      <Secao titulo="Evolução" descricao="Taxa de acerto por dia.">
        <Card>
          <GraficoEvolucao dados={evolucao} />
        </Card>
      </Secao>

      <Secao titulo="Desempenho por assunto">
        <ul className="flex flex-col gap-3">
          {MACROTEMAS.map((m) => {
            const dados = temas[m.id]
            if (!dados?.total) return null
            return (
              <li key={m.id}>
                <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                  <span className="truncate font-medium">{m.nome}</span>
                  <span className="tnum shrink-0 text-muted">
                    {dados.acertos}/{dados.total} · {Math.round(dados.taxaAcerto * 100)}%
                  </span>
                </div>
                <Barra
                  valor={dados.taxaAcerto}
                  tom={dados.taxaAcerto >= 0.7 ? 'aqua' : dados.taxaAcerto >= 0.5 ? 'warn' : 'danger'}
                />
              </li>
            )
          })}
        </ul>
      </Secao>

      <Secao titulo="Desempenho por dificuldade">
        <ul className="flex flex-col gap-3">
          {(['facil', 'media', 'dificil'] as Dificuldade[]).map((d) => {
            const dados = dificuldades[d]
            if (!dados.total) return null
            return (
              <li key={d}>
                <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-medium">{ROTULO_DIFICULDADE[d]}</span>
                  <span className="tnum text-muted">
                    {dados.acertos}/{dados.total} · {Math.round(dados.taxaAcerto * 100)}%
                  </span>
                </div>
                <Barra
                  valor={dados.taxaAcerto}
                  tom={dados.taxaAcerto >= 0.7 ? 'aqua' : dados.taxaAcerto >= 0.5 ? 'warn' : 'danger'}
                />
              </li>
            )
          })}
        </ul>
      </Secao>
    </div>
  )
}
