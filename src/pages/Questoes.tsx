import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Cabecalho } from '@/components/layout/AppShell'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Vazio } from '@/components/ui/Empty'
import { SessaoEstudo } from '@/components/domain/SessaoEstudo'
import { MACROTEMAS, MICROTEMAS } from '@/lib/content'
import {
  filtrarQuestoes,
  ROTULO_DIFICULDADE,
  ROTULO_TIPO,
  QUESTOES,
} from '@/lib/questions'
import type { Dificuldade, QuestionKind } from '@/lib/types'
import { useStore } from '@/lib/store'
import type { PassoSessao } from '@/lib/engine/planner'
import { ROTULO_SELECAO } from '@/lib/engine/scheduler'

const DIFICULDADES: Dificuldade[] = ['facil', 'media', 'dificil']
const TIPOS = [...new Set(QUESTOES.map((q) => q.tipo))] as QuestionKind[]

function Chip({
  ativo,
  onClick,
  children,
}: {
  ativo: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={ativo}
      className={`rounded-lg border px-3 py-1.5 text-[13px] transition-colors ${
        ativo
          ? 'border-aurora bg-aurora-soft font-semibold text-aurora'
          : 'border-line bg-surface text-ink-2 hover:border-aurora/40'
      }`}
    >
      {children}
    </button>
  )
}

export default function Questoes() {
  const respostas = useStore((s) => s.respostas)
  const [params] = useSearchParams()
  // Permite chegar aqui já filtrado a partir de uma aula.
  const [macros, setMacros] = useState<string[]>(() => {
    const inicial = params.get('macro')
    return inicial && MACROTEMAS.some((m) => m.id === inicial) ? [inicial] : []
  })
  /*
   * Os nós de miniquiz e desafio da trilha entram por aqui: `?micro=<id>` diz
   * o tópico, `?dif=` o recorte e `?iniciar=1` pula a tela de filtros. Sem
   * isso a jornada viraria enfeite — cada nó levaria a uma tela genérica onde
   * o aluno teria de remontar o filtro na mão.
   */
  const [micros, setMicros] = useState<string[]>(() => {
    const inicial = params.get('micro')
    return inicial && MICROTEMAS.some((m) => m.id === inicial) ? [inicial] : []
  })
  const [difs, setDifs] = useState<Dificuldade[]>(() =>
    (params.get('dif')?.split(',') ?? []).filter((d): d is Dificuldade =>
      DIFICULDADES.includes(d as Dificuldade),
    ),
  )
  const [tipos, setTipos] = useState<QuestionKind[]>([])
  const [quantidade, setQuantidade] = useState(10)
  const [evitarRespondidas, setEvitarRespondidas] = useState(true)
  const [emSessao, setEmSessao] = useState(params.get('iniciar') === '1')

  const microFiltrado = MICROTEMAS.find((m) => m.id === micros[0])

  const respondidas = useMemo(() => new Set(respostas.map((r) => r.questaoId)), [respostas])

  const disponiveis = useMemo(
    () =>
      filtrarQuestoes({
        macrotemas: macros,
        microtemas: micros,
        dificuldades: difs,
        tipos,
        excluir: evitarRespondidas ? [...respondidas] : [],
      }),
    [macros, micros, difs, tipos, evitarRespondidas, respondidas],
  )

  const passos = useMemo<PassoSessao[]>(() => {
    // Embaralhamento estável dentro da seleção.
    const embaralhadas = [...disponiveis].sort(() => Math.random() - 0.5)
    return embaralhadas.slice(0, quantidade).map((q) => ({
      tipo: 'questao' as const,
      conceitoId: q.conceitoId,
      questaoId: q.id,
      motivo: 'lacuna' as const,
      explicacao: ROTULO_SELECAO.lacuna,
      minutos: 1.5,
    }))
  }, [disponiveis, quantidade])

  function alternar<T>(lista: T[], set: (v: T[]) => void, valor: T) {
    set(lista.includes(valor) ? lista.filter((x) => x !== valor) : [...lista, valor])
  }

  if (emSessao && passos.length > 0) {
    return (
      <SessaoEstudo
        passos={passos}
        origem="pratica"
        titulo={microFiltrado ? microFiltrado.nome : 'Prática dirigida'}
        justificativa={
          microFiltrado
            ? `${passos.length} questões de ${microFiltrado.codigo} ${microFiltrado.nome}.`
            : `${passos.length} questões com os filtros que você escolheu.`
        }
        aoSair="/questoes"
      />
    )
  }

  return (
    <div>
      <Cabecalho
        titulo="Questões"
        descricao="Escolha o recorte e pratique. Todas as questões são autorais."
      />

      {microFiltrado && (
        <Card className="mb-4 border-aurora/40 bg-aurora/5">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-aurora">
                Recorte da trilha
              </p>
              <p className="mt-0.5 truncate text-sm font-semibold">
                <span className="tnum mr-1.5 font-normal text-muted">{microFiltrado.codigo}</span>
                {microFiltrado.nome}
              </p>
            </div>
            <Button variante="secundaria" tamanho="sm" onClick={() => setMicros([])}>
              Remover
            </Button>
          </div>
        </Card>
      )}

      <Card className="mb-4">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">
          Macrotema
        </p>
        <div className="flex flex-wrap gap-2">
          <Chip ativo={macros.length === 0} onClick={() => setMacros([])}>
            Todos
          </Chip>
          {MACROTEMAS.map((m) => (
            <Chip
              key={m.id}
              ativo={macros.includes(m.id)}
              onClick={() => alternar(macros, setMacros, m.id)}
            >
              {m.nome}
            </Chip>
          ))}
        </div>
      </Card>

      <Card className="mb-4">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">
          Dificuldade
        </p>
        <div className="flex flex-wrap gap-2">
          <Chip ativo={difs.length === 0} onClick={() => setDifs([])}>
            Todas
          </Chip>
          {DIFICULDADES.map((d) => (
            <Chip key={d} ativo={difs.includes(d)} onClick={() => alternar(difs, setDifs, d)}>
              {ROTULO_DIFICULDADE[d]}
            </Chip>
          ))}
        </div>
      </Card>

      <Card className="mb-4">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">
          Tipo de questão
        </p>
        <div className="flex flex-wrap gap-2">
          <Chip ativo={tipos.length === 0} onClick={() => setTipos([])}>
            Todos
          </Chip>
          {TIPOS.map((t) => (
            <Chip key={t} ativo={tipos.includes(t)} onClick={() => alternar(tipos, setTipos, t)}>
              {ROTULO_TIPO[t]}
            </Chip>
          ))}
        </div>
      </Card>

      <Card className="mb-4">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">
          Quantidade
        </p>
        <div className="flex flex-wrap gap-2">
          {[5, 10, 15, 20].map((n) => (
            <Chip key={n} ativo={quantidade === n} onClick={() => setQuantidade(n)}>
              {n} questões
            </Chip>
          ))}
        </div>

        <label className="mt-4 flex cursor-pointer items-center gap-2.5 text-sm">
          <input
            type="checkbox"
            checked={evitarRespondidas}
            onChange={(e) => setEvitarRespondidas(e.target.checked)}
            className="h-4 w-4 accent-[rgb(var(--aurora))]"
          />
          Evitar questões que já respondi
        </label>
      </Card>

      {passos.length === 0 ? (
        <Vazio
          titulo="Nenhuma questão com esses filtros"
          descricao={
            evitarRespondidas
              ? 'Você já respondeu tudo o que se encaixa. Desmarque a opção acima para repetir.'
              : 'Afrouxe os filtros para encontrar questões.'
          }
        />
      ) : (
        <>
          <p className="mb-3 text-center text-sm text-muted">
            <span className="tnum font-semibold text-ink">{disponiveis.length}</span> questões
            disponíveis · sessão de <span className="tnum">{passos.length}</span>
          </p>
          <Button bloco tamanho="lg" onClick={() => setEmSessao(true)}>
            Praticar agora
          </Button>
        </>
      )}
    </div>
  )
}
