import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { BLUEPRINT, SIMULADO_PRESETS } from '@/lib/blueprint'
import { filtrarQuestoes } from '@/lib/questions'
import type { Dificuldade, Resposta, SimuladoModo } from '@/lib/types'
import { useStore } from '@/lib/store'
import { QuestaoPlayer } from '@/components/domain/QuestaoPlayer'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Vazio } from '@/components/ui/Empty'
import { ButtonLink } from '@/components/ui/Button'
import { dominioEfetivo } from '@/lib/engine/mastery'
import { pesosEfetivos } from '@/lib/content'

const MODOS_VALIDOS: SimuladoModo[] = ['completo', 'rapido', 'tema', 'pontos_fracos']

function formatarTempo(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000))
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  const pad = (n: number) => String(n).padStart(2, '0')
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`
}

export default function SimuladoRun() {
  const { modo } = useParams()
  const [params] = useSearchParams()
  const navegar = useNavigate()

  const estados = useStore((s) => s.estados)
  const responder = useStore((s) => s.responder)
  const registrarSimulado = useStore((s) => s.registrarSimulado)

  const modoValido = MODOS_VALIDOS.includes(modo as SimuladoModo)
    ? (modo as SimuladoModo)
    : 'rapido'
  const preset = SIMULADO_PRESETS[modoValido]

  // Seleção de questões: fixada na montagem para não mudar durante a prova.
  const questoes = useMemo(() => {
    const agora = Date.now()
    const quantidade = Number(params.get('q')) || preset.questoes
    const macrosParam = params.get('macros')?.split(',').filter(Boolean)
    const difParam = params.get('dif')?.split(',').filter(Boolean) as Dificuldade[] | undefined

    let pool = filtrarQuestoes({
      macrotemas: macrosParam,
      dificuldades: difParam?.length ? difParam : undefined,
    })

    if (modoValido === 'pontos_fracos') {
      const fracos = new Set(
        Object.values(estados)
          .filter((e) => e.n > 0 && dominioEfetivo(e, agora) < 0.6)
          .map((e) => e.conceitoId),
      )
      const comErro = new Set(
        Object.values(estados).filter((e) => e.errosAbertos > 0).map((e) => e.conceitoId),
      )
      const priorizado = pool.filter((q) => fracos.has(q.conceitoId) || comErro.has(q.conceitoId))
      pool = priorizado.length >= 5 ? priorizado : pool
    }

    if (modoValido === 'completo') {
      // Distribui pelas fatias do blueprint, aproximando a composição da prova.
      const pesos = pesosEfetivos()
      const saida: typeof pool = []
      for (const [macroId, peso] of Object.entries(pesos)) {
        const cota = Math.round(quantidade * peso)
        const doMacro = pool.filter((q) => q.macrotemaId === macroId).sort(() => Math.random() - 0.5)
        saida.push(...doMacro.slice(0, cota))
      }
      const restantes = pool.filter((q) => !saida.includes(q)).sort(() => Math.random() - 0.5)
      saida.push(...restantes.slice(0, Math.max(0, quantidade - saida.length)))
      return saida.sort(() => Math.random() - 0.5).slice(0, quantidade)
    }

    return [...pool].sort(() => Math.random() - 0.5).slice(0, quantidade)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [indice, setIndice] = useState(0)
  const [respostas, setRespostas] = useState<Record<string, { alt: string; ms: number }>>({})
  const [marcadas, setMarcadas] = useState<Set<string>>(new Set())
  const [mostrarGrade, setMostrarGrade] = useState(false)
  const [confirmarFim, setConfirmarFim] = useState(false)
  const [restanteMs, setRestanteMs] = useState(preset.minutos * 60_000)

  const inicio = useRef(Date.now())
  const finalizado = useRef(false)
  const prazo = useRef(Date.now() + preset.minutos * 60_000)

  // Cronômetro baseado em relógio absoluto — não perde tempo se a aba dormir.
  useEffect(() => {
    if (!preset.cronometro) return
    const t = setInterval(() => {
      const restante = prazo.current - Date.now()
      setRestanteMs(restante)
      if (restante <= 0) finalizar()
    }, 500)
    return () => clearInterval(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function finalizar() {
    if (finalizado.current) return
    finalizado.current = true

    const fim = Date.now()
    const registros: Resposta[] = []
    let acertos = 0

    for (const questao of questoes) {
      const dada = respostas[questao.id]
      const correta = questao.alternativas.find((a) => a.correta)!
      const acertou = dada?.alt === correta.id
      if (acertou) acertos += 1

      // Alimenta o motor de domínio com o resultado real da prova.
      if (dada) {
        responder({
          questaoId: questao.id,
          escolhida: dada.alt,
          tempoMs: dada.ms,
          origem: 'simulado',
        })
      }

      registros.push({
        id: `${questao.id}-${fim}`,
        questaoId: questao.id,
        macrotemaId: questao.macrotemaId,
        microtemaId: questao.microtemaId,
        conceitoId: questao.conceitoId,
        dificuldade: questao.dificuldade,
        escolhida: dada?.alt ?? '',
        correta: correta.id,
        acertou,
        tempoMs: dada?.ms ?? 0,
        tentativa: 1,
        data: fim,
        origem: 'simulado',
      })
    }

    const porMacrotema: Record<string, { total: number; acertos: number }> = {}
    const porDificuldade: Record<Dificuldade, { total: number; acertos: number }> = {
      facil: { total: 0, acertos: 0 },
      media: { total: 0, acertos: 0 },
      dificil: { total: 0, acertos: 0 },
    }
    for (const r of registros) {
      const m = (porMacrotema[r.macrotemaId] ??= { total: 0, acertos: 0 })
      m.total += 1
      if (r.acertou) m.acertos += 1
      porDificuldade[r.dificuldade].total += 1
      if (r.acertou) porDificuldade[r.dificuldade].acertos += 1
    }

    const percentual = questoes.length ? acertos / questoes.length : 0
    const tempoTotal = registros.reduce((s, r) => s + r.tempoMs, 0)

    const id = registrarSimulado({
      modo: modoValido,
      inicio: inicio.current,
      fim,
      totalQuestoes: questoes.length,
      acertos,
      percentual,
      aprovado: percentual >= BLUEPRINT.notaCorte,
      tempoMedioMs: questoes.length ? tempoTotal / questoes.length : 0,
      porMacrotema,
      porDificuldade,
      respostas: registros,
    })

    navegar(`/resultado/${id}`, { replace: true })
  }

  if (!questoes.length) {
    return (
      <Vazio
        icone="⏱"
        titulo="Sem questões para este recorte"
        descricao="Não há questões suficientes com os filtros escolhidos."
        acao={<ButtonLink to="/simulados">Voltar aos simulados</ButtonLink>}
      />
    )
  }

  const questao = questoes[indice]
  const respondidas = Object.keys(respostas).length
  const tempoAcabando = preset.cronometro && restanteMs < 5 * 60_000

  return (
    <div>
      {/* Barra de controle fixa */}
      <div className="safe-top sticky top-0 z-30 -mx-4 mb-4 border-b border-line bg-bg/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setMostrarGrade((v) => !v)}
            className="rounded-lg border border-line bg-surface px-3 py-1.5 text-[13px] text-ink-2"
          >
            {indice + 1}/{questoes.length}
          </button>

          {preset.cronometro && (
            <span
              className={`tnum text-lg font-bold ${tempoAcabando ? 'text-danger' : 'text-ink'}`}
              aria-live="polite"
            >
              {formatarTempo(restanteMs)}
            </span>
          )}

          <button
            type="button"
            onClick={() => setConfirmarFim(true)}
            className="rounded-lg border border-line bg-surface px-3 py-1.5 text-[13px] text-ink-2"
          >
            Finalizar
          </button>
        </div>

        {mostrarGrade && (
          <div className="mt-3 grid grid-cols-8 gap-1.5 sm:grid-cols-10">
            {questoes.map((q, i) => {
              const feita = !!respostas[q.id]
              const marcada = marcadas.has(q.id)
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => {
                    setIndice(i)
                    setMostrarGrade(false)
                  }}
                  className={`tnum relative aspect-square rounded-md border text-xs font-semibold transition-colors ${
                    i === indice
                      ? 'border-aurora bg-aurora text-bg'
                      : feita
                        ? 'border-aurora/40 bg-aurora/15 text-aurora'
                        : 'border-line bg-surface text-muted'
                  }`}
                >
                  {i + 1}
                  {marcada && (
                    <span
                      aria-hidden
                      className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-warn"
                    />
                  )}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {confirmarFim && (
        <Card className="mb-4 border-warn/40 bg-warn-soft">
          <p className="font-bold text-warn">Finalizar o simulado?</p>
          <p className="mt-1 text-sm text-ink-2">
            {respondidas} de {questoes.length} respondidas.
            {respondidas < questoes.length &&
              ` As ${questoes.length - respondidas} em branco contam como erro.`}
          </p>
          <div className="mt-4 flex gap-2.5">
            <Button variante="secundaria" onClick={() => setConfirmarFim(false)}>
              Continuar prova
            </Button>
            <Button onClick={finalizar}>Finalizar</Button>
          </div>
        </Card>
      )}

      <div className="mb-3 flex justify-end">
        <button
          type="button"
          onClick={() =>
            setMarcadas((s) => {
              const novo = new Set(s)
              if (novo.has(questao.id)) novo.delete(questao.id)
              else novo.add(questao.id)
              return novo
            })
          }
          aria-pressed={marcadas.has(questao.id)}
          className={`text-[13px] transition-colors ${
            marcadas.has(questao.id) ? 'font-semibold text-warn' : 'text-muted hover:text-ink'
          }`}
        >
          {marcadas.has(questao.id) ? '⚑ marcada para revisar' : '⚐ marcar para revisar'}
        </button>
      </div>

      <QuestaoPlayer
        key={questao.id}
        questao={questao}
        indice={indice}
        total={questoes.length}
        modoProva
        onResponder={(r) =>
          setRespostas((s) => ({ ...s, [questao.id]: { alt: r.alternativaId, ms: r.tempoMs } }))
        }
        onContinuar={() => {
          if (indice + 1 >= questoes.length) setConfirmarFim(true)
          else setIndice((i) => i + 1)
        }}
        rotuloContinuar={indice + 1 >= questoes.length ? 'Revisar e finalizar' : 'Próxima'}
      />

      <div className="mt-4 flex justify-between gap-3">
        <Button
          variante="fantasma"
          disabled={indice === 0}
          onClick={() => setIndice((i) => Math.max(0, i - 1))}
        >
          ← Anterior
        </Button>
        <Button
          variante="fantasma"
          disabled={indice + 1 >= questoes.length}
          onClick={() => setIndice((i) => Math.min(questoes.length - 1, i + 1))}
        >
          Pular →
        </Button>
      </div>
    </div>
  )
}
