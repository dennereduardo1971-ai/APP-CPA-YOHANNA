import { useEffect, useMemo, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import type { Questao } from '@/lib/types'
import { getConceito } from '@/lib/content'
import { ROTULO_DIFICULDADE, ROTULO_TIPO } from '@/lib/questions'
import { DificuldadeBadge, Pill } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Icone } from '@/components/ui/Icone'
import { PassosSessao } from '@/components/ui/Progress'
import type { MotivoErro } from '@/lib/engine/mastery'
import { ROTULO_MOTIVO } from '@/lib/engine/mastery'
import { ExpliqueDeOutroJeito } from './ExpliqueDeOutroJeito'

export interface ResultadoQuestao {
  acertou: boolean
  alternativaId: string
  tempoMs: number
  motivoErro?: MotivoErro
}

interface Props {
  questao: Questao
  /** Posição na sessão, para a barra de progresso. */
  indice?: number
  total?: number
  /** Motivo pelo qual o algoritmo escolheu esta questão. */
  porQue?: string
  /** Em simulado, o feedback só aparece no fim. */
  modoProva?: boolean
  onResponder: (r: ResultadoQuestao) => void
  onContinuar: () => void
  rotuloContinuar?: string
  favorita?: boolean
  onAlternarFavorito?: () => void
}

const MOTIVOS: MotivoErro[] = ['conceito', 'calculo', 'interpretacao', 'desatencao', 'chute']

export function QuestaoPlayer({
  questao,
  indice = 0,
  total = 1,
  porQue,
  modoProva = false,
  onResponder,
  onContinuar,
  rotuloContinuar = 'Continuar',
  favorita,
  onAlternarFavorito,
}: Props) {
  const [selecionada, setSelecionada] = useState<string | null>(null)
  const [respondida, setRespondida] = useState(false)
  const [motivo, setMotivo] = useState<MotivoErro | null>(null)
  const [mostrarReexplicacao, setMostrarReexplicacao] = useState(false)
  const inicio = useRef(Date.now())
  const decorrido = useRef(0)
  const topo = useRef<HTMLDivElement>(null)
  const opcoes = useRef<(HTMLButtonElement | null)[]>([])

  // Reinicia o estado a cada nova questão.
  useEffect(() => {
    setSelecionada(null)
    setRespondida(false)
    setMotivo(null)
    setMostrarReexplicacao(false)
    inicio.current = Date.now()
    decorrido.current = 0
    topo.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }, [questao.id])

  const conceito = getConceito(questao.conceitoId)
  const correta = useMemo(
    () => questao.alternativas.find((a) => a.correta)!,
    [questao],
  )

  // Ordem embaralhada de forma estável por questão — evita decorar posição
  // sem reembaralhar a cada re-render.
  const ordem = useMemo(() => {
    const semente = [...questao.id].reduce((s, ch) => s + ch.charCodeAt(0), 0)
    return questao.alternativas
      .map((alt, i) => ({ alt, chave: (semente * (i + 7)) % 101 }))
      .sort((a, b) => a.chave - b.chave)
      .map((x) => x.alt)
  }, [questao])

  const acertou = selecionada === correta.id

  function escolher(id: string) {
    if (respondida) return
    setSelecionada(id)
  }

  /**
   * Setas percorrem o grupo de rádio, como no padrão ARIA: mover o foco JÁ
   * marca a opção, e a marcação dá a volta no fim da lista. Depois de
   * responder as setas não mexem em mais nada — o foco continua livre.
   */
  function navegar(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    if (respondida) return
    const passo =
      e.key === 'ArrowDown' || e.key === 'ArrowRight'
        ? 1
        : e.key === 'ArrowUp' || e.key === 'ArrowLeft'
          ? -1
          : 0
    if (passo === 0) return
    e.preventDefault()
    const proximo = (i + passo + ordem.length) % ordem.length
    setSelecionada(ordem[proximo].id)
    opcoes.current[proximo]?.focus()
  }

  function responder() {
    if (!selecionada || respondida) return
    setRespondida(true)
    decorrido.current = Date.now() - inicio.current

    // Em simulado não há etapa de motivo do erro: registra na hora.
    if (modoProva) {
      onResponder({
        acertou: selecionada === correta.id,
        alternativaId: selecionada,
        tempoMs: decorrido.current,
      })
    }
  }

  /**
   * Fora do simulado, o registro só acontece ao continuar — assim o motivo do
   * erro entra na MESMA gravação e o motor pondera corretamente. Registrar
   * antes obrigaria a corrigir a maestria depois, o que é pior.
   */
  function continuar() {
    if (!modoProva && selecionada) {
      onResponder({
        acertou: acertou,
        alternativaId: selecionada,
        tempoMs: decorrido.current,
        motivoErro: motivo ?? undefined,
      })
    }
    onContinuar()
  }

  return (
    <div ref={topo} className="animate-fade-up">
      {total > 1 && (
        <div className="mb-5">
          <PassosSessao total={total} atual={indice} />
          <p className="mt-2 text-xs text-muted tnum">
            Questão {indice + 1} de {total}
          </p>
        </div>
      )}

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Pill>{ROTULO_TIPO[questao.tipo]}</Pill>
        <DificuldadeBadge nivel={questao.dificuldade} />
        {conceito && (
          <span className="min-w-0 truncate text-xs text-muted">{conceito.titulo}</span>
        )}
        {onAlternarFavorito && (
          <button
            type="button"
            onClick={onAlternarFavorito}
            aria-pressed={favorita}
            aria-label={favorita ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
            className={`ml-auto transition-colors ${favorita ? 'text-aurora' : 'text-muted hover:text-ink'}`}
          >
            <Icone nome="estrela" tamanho={18} preenchido={favorita} />
          </button>
        )}
      </div>

      {porQue && !modoProva && (
        <p className="mb-4 flex items-center gap-2 text-xs text-aurora">
          <Icone nome="losango" tamanho={11} preenchido />
          {porQue}
        </p>
      )}

      {questao.contexto && (
        <div className="mb-4 rounded-xl border border-line bg-elevated/60 p-4 text-[15px] leading-relaxed text-ink-2">
          {questao.contexto}
        </div>
      )}

      <p id={`enunciado-${questao.id}`} className="mb-5 text-[17px] font-semibold leading-snug">
        {questao.enunciado}
      </p>

      {/*
        Grupo de rádio, não uma lista de botões: é uma escolha entre opções
        exclusivas, e é assim que o leitor de tela precisa anunciá-la ("opção
        2 de 4, marcada"). O foco entra uma vez no grupo e as setas percorrem
        as alternativas — quem navega por teclado não dá quatro Tabs por
        questão. Só a opção marcada fica no Tab (tabindex rotativo), como
        manda o padrão ARIA.
      */}
      <div
        role="radiogroup"
        aria-labelledby={`enunciado-${questao.id}`}
        className="flex flex-col gap-2.5"
      >
        {ordem.map((alt, i) => {
          const escolhida = selecionada === alt.id
          const revelaCerta = respondida && !modoProva && alt.correta
          const revelaErrada = respondida && !modoProva && escolhida && !alt.correta

          let estilo = 'border-line bg-surface hover:border-aurora/40'
          if (!respondida && escolhida) estilo = 'border-aurora bg-aurora/10'
          if (revelaCerta) estilo = 'border-jade bg-jade/15'
          if (revelaErrada) estilo = 'border-danger bg-danger-soft'
          if (respondida && modoProva && escolhida) estilo = 'border-aurora bg-aurora/10'

          return (
            <div key={alt.id}>
              <button
                ref={(el) => {
                  opcoes.current[i] = el
                }}
                type="button"
                role="radio"
                aria-checked={escolhida}
                /*
                 * `aria-disabled` em vez de `disabled`: depois de responder as
                 * alternativas continuam alcançáveis pelo teclado, para reler
                 * o enunciado junto com a justificativa. `disabled` as tiraria
                 * da ordem de foco justo quando há mais o que ler nelas.
                 */
                aria-disabled={respondida || undefined}
                tabIndex={(selecionada ? escolhida : i === 0) ? 0 : -1}
                onClick={() => escolher(alt.id)}
                onKeyDown={(e) => navegar(e, i)}
                className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left transition-all ${
                  respondida ? 'cursor-default' : ''
                } ${estilo}`}
              >
                <span
                  aria-hidden
                  className={`mt-px grid h-6 w-6 shrink-0 place-items-center rounded-full border text-xs font-bold ${
                    revelaCerta
                      ? 'border-jade bg-jade text-bg'
                      : revelaErrada
                        ? 'border-danger bg-danger text-bg'
                        : escolhida
                          ? 'border-aurora text-aurora'
                          : 'border-line text-muted'
                  }`}
                >
                  {revelaCerta ? (
                    <Icone nome="check" tamanho={14} />
                  ) : revelaErrada ? (
                    <Icone nome="x" tamanho={13} />
                  ) : (
                    String.fromCharCode(65 + i)
                  )}
                </span>
                <span className="text-[15px] leading-snug">{alt.texto}</span>
                {/*
                  Certo e errado não podem ser só a cor da borda e o traço do
                  ícone: quem usa leitor de tela ouviria quatro alternativas
                  idênticas depois de responder.
                */}
                {revelaCerta && <span className="sr-only">Resposta correta.</span>}
                {revelaErrada && <span className="sr-only">Sua resposta. Incorreta.</span>}
              </button>

              {respondida && !modoProva && (escolhida || alt.correta) && (
                <p
                  className={`mt-1.5 pl-9 pr-2 text-[13px] leading-relaxed ${
                    alt.correta ? 'text-jade' : 'text-muted'
                  }`}
                >
                  {alt.justificativa}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {!respondida && (
        <Button
          bloco
          tamanho="lg"
          className="mt-6"
          disabled={!selecionada}
          onClick={responder}
        >
          Responder
        </Button>
      )}

      {respondida && !modoProva && (
        <div className="mt-6 animate-fade-up">
          {/*
            O veredito aparece sem que nada receba foco. `role="status"` faz o
            leitor de tela anunciá-lo assim que entra na tela, em vez de o
            usuário ter de sair procurando o que mudou.
          */}
          <div
            role="status"
            className={`rounded-2xl border p-4 ${
              acertou ? 'border-jade/40 bg-jade/10' : 'border-danger/40 bg-danger-soft'
            }`}
          >
            <p className={`mb-2 font-bold ${acertou ? 'text-jade' : 'text-danger'}`}>
              {acertou ? 'Correto' : 'Não foi dessa vez'}
            </p>
            <p className="text-[15px] leading-relaxed text-ink-2">{questao.explicacao}</p>
          </div>

          {!acertou && !motivo && (
            <div className="mt-4">
              <p className="mb-2 text-sm font-semibold">Por que você errou?</p>
              <p className="mb-3 text-xs text-muted">
                Isso ajusta o que o sistema vai te mostrar depois. Errar por distração não é o
                mesmo que não saber a matéria.
              </p>
              <div className="flex flex-wrap gap-2">
                {MOTIVOS.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMotivo(m)}
                    className="rounded-lg border border-line bg-surface px-3 py-2 text-[13px] text-ink-2 transition-colors hover:border-aurora/50 hover:text-ink"
                  >
                    {ROTULO_MOTIVO[m]}
                  </button>
                ))}
              </div>
            </div>
          )}

          {motivo && (
            <p className="mt-3 text-xs text-muted">
              Registrado: <span className="text-ink-2">{ROTULO_MOTIVO[motivo]}</span>
            </p>
          )}

          {conceito && (
            <div className="mt-4">
              {!mostrarReexplicacao ? (
                <button
                  type="button"
                  onClick={() => setMostrarReexplicacao(true)}
                  className="text-sm font-semibold text-aurora underline-offset-4 hover:underline"
                >
                  Não entendi — explique de outro jeito
                </button>
              ) : (
                <ExpliqueDeOutroJeito
                  conceito={conceito}
                  onFechar={() => setMostrarReexplicacao(false)}
                />
              )}
            </div>
          )}

          <Button bloco tamanho="lg" className="mt-6" onClick={continuar}>
            {rotuloContinuar}
          </Button>
        </div>
      )}

      {respondida && modoProva && (
        <Button bloco tamanho="lg" className="mt-6" onClick={onContinuar}>
          {rotuloContinuar}
        </Button>
      )}

      <p className="mt-4 text-center text-[11px] text-muted">
        Questão autoral · {ROTULO_DIFICULDADE[questao.dificuldade]} · {questao.habilidade}
      </p>
    </div>
  )
}
