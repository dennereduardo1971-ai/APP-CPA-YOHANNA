import { useMemo, useState } from 'react'
import { Cabecalho } from '@/components/layout/AppShell'
import { Card, Secao } from '@/components/ui/Card'
import { Button, ButtonLink } from '@/components/ui/Button'
import { Barra } from '@/components/ui/Progress'
import { Vazio } from '@/components/ui/Empty'
import { SessaoEstudo } from '@/components/domain/SessaoEstudo'
import { errosAbertos, filaDeRevisao, ROTULO_SELECAO } from '@/lib/engine/scheduler'
import { escolherQuestao } from '@/lib/engine/scheduler'
import { dominioEfetivo, retencao } from '@/lib/engine/mastery'
import { getConceito, MACROTEMAS } from '@/lib/content'
import { questoesDoConceito } from '@/lib/questions'
import { useStore } from '@/lib/store'
import type { PassoSessao } from '@/lib/engine/planner'

export default function Revisao() {
  const estados = useStore((s) => s.estados)
  const respostas = useStore((s) => s.respostas)
  const [emSessao, setEmSessao] = useState(false)
  const agora = Date.now()

  const erros = useMemo(() => errosAbertos(estados), [estados])
  const vencidas = useMemo(() => filaDeRevisao(estados, agora), [estados, agora])

  // "Revise seus erros": monta a sessão a partir dos erros e das revisões vencidas.
  const passos = useMemo<PassoSessao[]>(() => {
    const jaVistas = new Set(respostas.map((r) => r.questaoId))
    const alvos = [...erros, ...vencidas.filter((v) => !erros.some((e) => e.conceitoId === v.conceitoId))]
    const saida: PassoSessao[] = []

    for (const estado of alvos.slice(0, 15)) {
      const questao = escolherQuestao(
        questoesDoConceito(estado.conceitoId),
        estado,
        jaVistas,
      )
      if (!questao) continue
      jaVistas.add(questao.id)
      const motivo = estado.errosAbertos > 0 ? 'erro_recente' : 'revisao_vencida'
      saida.push({
        tipo: 'questao',
        conceitoId: estado.conceitoId,
        questaoId: questao.id,
        motivo,
        explicacao: ROTULO_SELECAO[motivo],
        minutos: 1.5,
      })
    }
    return saida
  }, [erros, vencidas, respostas])

  if (emSessao) {
    return (
      <SessaoEstudo
        passos={passos}
        origem="revisao"
        titulo="Revise seus erros"
        justificativa="Questões dos conceitos que você errou ou que estão esfriando na memória."
        aoSair="/revisao"
      />
    )
  }

  const nada = erros.length === 0 && vencidas.length === 0

  return (
    <div>
      <Cabecalho
        titulo="Revisão"
        descricao="Erros recentes, conteúdos esquecendo e o que o sistema recomenda rever."
      />

      {nada ? (
        <Vazio
          icone="✓"
          titulo="Revisão em dia"
          descricao="Nenhum erro em aberto e nenhuma revisão vencida. Continue praticando para alimentar a fila."
          acao={<ButtonLink to="/rapido">Fazer uma sessão</ButtonLink>}
        />
      ) : (
        <>
          <Card className="mb-6 border-aurora/40 bg-aurora/10">
            <p className="font-bold text-aurora">Revise seus erros</p>
            <p className="mt-1 text-sm text-ink-2">
              {passos.length} {passos.length === 1 ? 'questão montada' : 'questões montadas'} a
              partir do que você errou e do que está esfriando.
            </p>
            <Button className="mt-4" bloco onClick={() => setEmSessao(true)} disabled={!passos.length}>
              Começar revisão
            </Button>
          </Card>

          {erros.length > 0 && (
            <Secao titulo="Erros recentes" descricao="Some da lista quando você acerta de novo.">
              <ul className="flex flex-col gap-2.5">
                {erros.map((estado) => {
                  const conceito = getConceito(estado.conceitoId)
                  const macro = MACROTEMAS.find((m) => m.id === estado.macrotemaId)
                  return (
                    <li key={estado.conceitoId}>
                      <Card to={`/conteudo/${estado.conceitoId}`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="truncate text-[11px] uppercase tracking-wider text-muted">
                              {macro?.nome}
                            </p>
                            <p className="mt-0.5 truncate font-semibold">{conceito?.titulo}</p>
                          </div>
                          <span className="tnum shrink-0 rounded-full bg-danger-soft px-2 py-0.5 text-xs font-bold text-danger">
                            {estado.errosAbertos} {estado.errosAbertos === 1 ? 'erro' : 'erros'}
                          </span>
                        </div>
                        <Barra
                          valor={dominioEfetivo(estado, agora)}
                          altura="h-1.5"
                          tom="danger"
                          className="mt-3"
                        />
                      </Card>
                    </li>
                  )
                })}
              </ul>
            </Secao>
          )}

          {vencidas.length > 0 && (
            <Secao
              titulo="Conteúdos esquecendo"
              descricao="A retenção estimada caiu abaixo do ponto de revisão."
            >
              <ul className="flex flex-col gap-2.5">
                {vencidas.slice(0, 10).map((estado) => {
                  const conceito = getConceito(estado.conceitoId)
                  const ret = retencao(estado, agora)
                  const dias = Math.max(
                    0,
                    Math.round((agora - estado.revisarEm) / 86_400_000),
                  )
                  return (
                    <li key={estado.conceitoId}>
                      <Card to={`/conteudo/${estado.conceitoId}`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="truncate font-semibold">{conceito?.titulo}</p>
                            <p className="tnum mt-0.5 text-xs text-muted">
                              retenção estimada {Math.round(ret * 100)}%
                              {dias > 0 && ` · vencida há ${dias} ${dias === 1 ? 'dia' : 'dias'}`}
                            </p>
                          </div>
                        </div>
                        <Barra valor={ret} altura="h-1.5" tom="warn" className="mt-3" />
                      </Card>
                    </li>
                  )
                })}
              </ul>
            </Secao>
          )}
        </>
      )}
    </div>
  )
}
