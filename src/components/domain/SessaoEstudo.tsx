import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { Conquista, Origem } from '@/lib/types'
import { getQuestao } from '@/lib/questions'
import { getConceito } from '@/lib/content'
import { useStore } from '@/lib/store'
import type { PassoSessao } from '@/lib/engine/planner'
import { Button, ButtonLink } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { QuestaoPlayer, type ResultadoQuestao } from './QuestaoPlayer'
import { EtiquetaBadge } from '@/components/ui/Badge'
import { Vazio } from '@/components/ui/Empty'

interface Props {
  passos: PassoSessao[]
  origem: Origem
  titulo: string
  /** Frase explicando por que a sessão foi montada assim. */
  justificativa?: string
  aoSair?: string
}

/**
 * Executor de sessão. Percorre os passos, registra cada resposta pelo store
 * e fecha com um resumo do que mudou — a tela de fim é o que traz o aluno
 * de volta no dia seguinte.
 */
export function SessaoEstudo({ passos, origem, titulo, justificativa, aoSair = '/' }: Props) {
  const navegar = useNavigate()
  const responder = useStore((s) => s.responder)
  const concluirAula = useStore((s) => s.concluirAula)
  const registrarSessao = useStore((s) => s.registrarSessao)
  const favoritos = useStore((s) => s.favoritos.questoes)
  const alternarFavorito = useStore((s) => s.alternarFavorito)

  const [indice, setIndice] = useState(0)
  const [iniciada, setIniciada] = useState(false)
  const [encerrada, setEncerrada] = useState(false)
  const [acertos, setAcertos] = useState(0)
  const [xp, setXp] = useState(0)
  const [conquistas, setConquistas] = useState<Conquista[]>([])
  const inicio = useRef(Date.now())
  const registrado = useRef(false)

  const questoes = useMemo(() => passos.filter((p) => p.tipo === 'questao'), [passos])
  const passo = passos[indice]

  // Fecha a sessão uma única vez, mesmo sob StrictMode.
  useEffect(() => {
    if (!encerrada || registrado.current) return
    registrado.current = true
    // Os minutos já foram creditados item a item, no store — creditar de novo
    // aqui contaria o tempo duas vezes.
    const fim = Date.now()
    registrarSessao({
      tipo: origem,
      inicio: inicio.current,
      fim,
      questoes: questoes.length,
      acertos,
      xp,
      rotulo: titulo,
    })
  }, [encerrada, acertos, xp, questoes.length, origem, titulo, registrarSessao])

  function avancar() {
    if (indice + 1 >= passos.length) setEncerrada(true)
    else setIndice((i) => i + 1)
  }

  function aoResponder(r: ResultadoQuestao) {
    if (!passo?.questaoId) return

    const retorno = responder({
      questaoId: passo.questaoId,
      escolhida: r.alternativaId,
      tempoMs: r.tempoMs,
      origem,
      motivoErro: r.motivoErro,
    })
    if (retorno.acertou) setAcertos((a) => a + 1)
    setXp((x) => x + retorno.xpGanho)
    if (retorno.novasConquistas.length) {
      setConquistas((c) => [...c, ...retorno.novasConquistas])
    }
  }

  if (!passos.length) {
    return (
      <Vazio
        icone="✓"
        titulo="Nada pendente agora"
        descricao="Você está em dia. Volte mais tarde ou escolha um tema para praticar."
        acao={<ButtonLink to="/questoes">Praticar mesmo assim</ButtonLink>}
      />
    )
  }

  /* ---------------- Tela de abertura ---------------- */
  if (!iniciada) {
    const minutos = Math.round(passos.reduce((t, p) => t + p.minutos, 0))
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-aqua">Sessão</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight">{titulo}</h1>

        {justificativa && (
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{justificativa}</p>
        )}

        <Card className="mt-6">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="tnum text-2xl font-extrabold text-aqua">{minutos}</p>
              <p className="text-[11px] uppercase tracking-wider text-muted">minutos</p>
            </div>
            <div>
              <p className="tnum text-2xl font-extrabold">{questoes.length}</p>
              <p className="text-[11px] uppercase tracking-wider text-muted">questões</p>
            </div>
            <div>
              <p className="tnum text-2xl font-extrabold">
                {passos.filter((p) => p.tipo === 'aula').length}
              </p>
              <p className="text-[11px] uppercase tracking-wider text-muted">aulas</p>
            </div>
          </div>
        </Card>

        <Button
          bloco
          tamanho="lg"
          className="mt-6"
          onClick={() => {
            inicio.current = Date.now()
            setIniciada(true)
          }}
        >
          Começar
        </Button>
        <Link to={aoSair} className="mt-3 text-center text-sm text-muted hover:text-ink">
          Agora não
        </Link>
      </div>
    )
  }

  /* ---------------- Tela de encerramento ---------------- */
  if (encerrada) {
    const total = questoes.length
    const taxa = total ? acertos / total : 0
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center animate-fade-up">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-aqua">
          Sessão concluída
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight">
          {taxa >= 0.8 ? 'Muito bem' : taxa >= 0.5 ? 'Bom trabalho' : 'Continue firme'}
        </h1>

        <Card className="mt-6">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="tnum text-2xl font-extrabold text-aqua">
                {total ? Math.round(taxa * 100) : 0}%
              </p>
              <p className="text-[11px] uppercase tracking-wider text-muted">acerto</p>
            </div>
            <div>
              <p className="tnum text-2xl font-extrabold">
                {acertos}/{total}
              </p>
              <p className="text-[11px] uppercase tracking-wider text-muted">questões</p>
            </div>
            <div>
              <p className="tnum text-2xl font-extrabold text-aqua">+{xp}</p>
              <p className="text-[11px] uppercase tracking-wider text-muted">XP</p>
            </div>
          </div>
        </Card>

        {conquistas.length > 0 && (
          <Card className="mt-3 border-aqua/40 bg-aqua/10">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-aqua">
              {conquistas.length === 1 ? 'Nova conquista' : 'Novas conquistas'}
            </p>
            <ul className="flex flex-col gap-1.5">
              {conquistas.map((c) => (
                <li key={c.id} className="flex items-center gap-2 text-sm">
                  <span aria-hidden className="text-aqua">
                    {c.icone}
                  </span>
                  <span className="font-semibold">{c.nome}</span>
                  <span className="text-muted">— {c.descricao}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        <div className="mt-6 flex flex-col gap-2.5">
          <Button bloco tamanho="lg" onClick={() => navegar('/')}>
            Voltar ao início
          </Button>
          {total > acertos && (
            <ButtonLink to="/revisao" variante="secundaria" bloco>
              Revisar os erros agora
            </ButtonLink>
          )}
        </div>
      </div>
    )
  }

  /* ---------------- Passo de aula ---------------- */
  if (passo.tipo === 'aula') {
    const conceito = getConceito(passo.conceitoId)
    if (!conceito) {
      avancar()
      return null
    }
    return (
      <div className="animate-fade-up">
        <div className="mb-4 flex items-center justify-between">
          <p className="tnum text-xs text-muted">
            {indice + 1} de {passos.length}
          </p>
          <Link to={aoSair} className="text-xs text-muted hover:text-ink">
            sair
          </Link>
        </div>

        <div className="mb-2 flex flex-wrap gap-1.5">
          {conceito.etiquetas.map((e) => (
            <EtiquetaBadge key={e} etiqueta={e} />
          ))}
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight">{conceito.titulo}</h1>

        <div className="mt-4 rounded-2xl border border-aqua/30 bg-aqua/10 p-4">
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-aqua">
            Resumo de 30 segundos
          </p>
          <p className="text-[15px] leading-relaxed">{conceito.resumo30s}</p>
        </div>

        <ul className="mt-5 flex flex-col gap-2">
          {conceito.explicacao.comoFunciona.slice(0, 4).map((linha, i) => (
            <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-2">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-aqua" />
              {linha}
            </li>
          ))}
        </ul>

        <div className="mt-5 rounded-2xl border-l-2 border-aqua bg-surface p-4">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-aqua">
            Conceito-chave
          </p>
          <p className="text-[15px] font-semibold leading-relaxed">{conceito.conceitoChave}</p>
        </div>

        <div className="mt-6 flex flex-col gap-2.5">
          <Button
            bloco
            tamanho="lg"
            onClick={() => {
              concluirAula(conceito.id)
              avancar()
            }}
          >
            Entendi, continuar
          </Button>
          <ButtonLink to={`/conteudo/${conceito.id}`} variante="fantasma" bloco>
            Ver aula completa
          </ButtonLink>
        </div>
      </div>
    )
  }

  /* ---------------- Passo de questão ---------------- */
  const questao = passo.questaoId ? getQuestao(passo.questaoId) : undefined
  if (!questao) {
    avancar()
    return null
  }

  const indiceQuestao = passos.slice(0, indice).filter((p) => p.tipo === 'questao').length

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="tnum text-xs text-muted">
          {indice + 1} de {passos.length}
        </p>
        <Link to={aoSair} className="text-xs text-muted hover:text-ink">
          sair
        </Link>
      </div>

      <QuestaoPlayer
        key={questao.id}
        questao={questao}
        indice={indiceQuestao}
        total={questoes.length}
        porQue={passo.explicacao}
        onResponder={aoResponder}
        onContinuar={avancar}
        rotuloContinuar={indice + 1 >= passos.length ? 'Ver resultado' : 'Continuar'}
        favorita={favoritos.includes(questao.id)}
        onAlternarFavorito={() => alternarFavorito('questoes', questao.id)}
      />
    </div>
  )
}
