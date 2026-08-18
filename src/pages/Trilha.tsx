import { Link } from 'react-router-dom'
import { Cabecalho } from '@/components/layout/AppShell'
import { Card } from '@/components/ui/Card'
import { Barra } from '@/components/ui/Progress'
import { Pill } from '@/components/ui/Badge'
import { AvisoVerificacao } from '@/components/ui/Empty'
import { MACROTEMAS, PESOS_PENDENTES, pesosEfetivos } from '@/lib/content'
import { questoesDoMacrotema } from '@/lib/questions'
import { useStore } from '@/lib/store'
import { dominioMacrotema } from '@/lib/engine/stats'
import { dominioEfetivo, nivelDominio, ROTULO_NIVEL } from '@/lib/engine/mastery'

/** Domínio médio de um microtema — usado para liberar pré-requisitos. */
function dominioMicrotema(
  conceitos: { id: string }[],
  estados: ReturnType<typeof useStore.getState>['estados'],
  agora: number,
) {
  if (!conceitos.length) return 0
  return (
    conceitos.reduce((s, c) => s + (estados[c.id] ? dominioEfetivo(estados[c.id], agora) : 0), 0) /
    conceitos.length
  )
}

const LIMIAR_LIBERACAO = 0.6

export default function Trilha() {
  const estados = useStore((s) => s.estados)
  const agora = Date.now()
  const pesos = pesosEfetivos()

  return (
    <div>
      <Cabecalho
        titulo="Trilha de estudos"
        descricao="Quatro macrotemas. Um tópico abre quando o anterior atinge 60% de domínio."
      />

      {PESOS_PENDENTES && (
        <div className="mb-6">
          <AvisoVerificacao>
            Os pesos por módulo ainda não foram conferidos contra o Programa Detalhado oficial
            vigente. Os percentuais exibidos são estimativas de distribuição, não dados da ANBIMA.
          </AvisoVerificacao>
        </div>
      )}

      <ol className="flex flex-col gap-4">
        {MACROTEMAS.map((macro, indiceMacro) => {
          const conceitos = macro.microtemas.flatMap((mt) => mt.conceitos)
          const concluidas = conceitos.filter((c) => estados[c.id]?.aulaConcluida).length
          const dominio = dominioMacrotema(macro.id, estados, agora)
          const totalQuestoes = questoesDoMacrotema(macro.id).length
          const respondidas = new Set(
            Object.values(estados)
              .filter((e) => e.macrotemaId === macro.id)
              .map((e) => e.conceitoId),
          ).size

          return (
            <li key={macro.id} className="relative">
              {indiceMacro < MACROTEMAS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-5 top-full h-4 w-px bg-line"
                />
              )}

              <Card>
                <div className="mb-3 flex items-start gap-3">
                  <span
                    aria-hidden
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border text-sm font-extrabold ${
                      dominio >= 0.75
                        ? 'border-aqua bg-aqua text-bg'
                        : dominio > 0
                          ? 'border-aqua/50 text-aqua'
                          : 'border-line text-muted'
                    }`}
                  >
                    {macro.codigo === 'SFN' ? '1' : macro.codigo === 'PROD' ? '2' : macro.codigo === 'REL' ? '3' : '4'}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-bold">{macro.nome}</h2>
                      {macro.peso != null && (
                        <Pill tom={macro.peso >= 0.3 ? 'aqua' : 'neutro'}>
                          {Math.round(macro.peso * 100)}% da prova
                          {!macro.pesoVerificado && ' ?'}
                        </Pill>
                      )}
                      {macro.peso == null && (
                        <Pill>~{Math.round((pesos[macro.id] ?? 0) * 100)}% estimado</Pill>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted">{macro.resumo}</p>
                  </div>
                </div>

                <div className="mb-3 flex items-baseline justify-between text-sm">
                  <span className="font-semibold text-aqua">
                    {ROTULO_NIVEL[nivelDominio(dominio)]}
                  </span>
                  <span className="tnum text-muted">{Math.round(dominio * 100)}% de domínio</span>
                </div>
                <Barra
                  valor={dominio}
                  tom={dominio >= 0.75 ? 'aqua' : dominio >= 0.4 ? 'warn' : 'danger'}
                />

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted">
                  <span className="tnum">
                    {concluidas}/{conceitos.length} aulas
                  </span>
                  <span className="tnum">{totalQuestoes} questões</span>
                  <span className="tnum">{respondidas} conceitos praticados</span>
                </div>

                <ul className="mt-4 flex flex-col gap-2 border-t border-line pt-4">
                  {macro.microtemas.map((micro) => {
                    const preOk = micro.preRequisitos.every((reqId) => {
                      const req = MACROTEMAS.flatMap((m) => m.microtemas).find((m) => m.id === reqId)
                      return req
                        ? dominioMicrotema(req.conceitos, estados, agora) >= LIMIAR_LIBERACAO
                        : true
                    })
                    const dominioMicro = dominioMicrotema(micro.conceitos, estados, agora)
                    const feitas = micro.conceitos.filter((c) => estados[c.id]?.aulaConcluida).length

                    return (
                      <li key={micro.id}>
                        <div
                          className={`rounded-xl border p-3 transition-colors ${
                            preOk ? 'border-line bg-elevated/50' : 'border-line/50 bg-surface opacity-70'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold">
                                {micro.nome}
                                {!preOk && (
                                  <span aria-label="bloqueado" className="ml-2 text-xs text-muted">
                                    bloqueado
                                  </span>
                                )}
                              </p>
                              <p className="tnum mt-0.5 text-xs text-muted">
                                {feitas}/{micro.conceitos.length} aulas ·{' '}
                                {Math.round(dominioMicro * 100)}% domínio
                              </p>
                            </div>
                            <div className="w-20 shrink-0">
                              <Barra valor={dominioMicro} altura="h-1.5" />
                            </div>
                          </div>

                          {!preOk && (
                            <p className="mt-2 text-xs text-muted">
                              Libera ao atingir 60% no tópico anterior — ou{' '}
                              <Link to="/questoes" className="font-semibold text-aqua">
                                teste direto
                              </Link>{' '}
                              para destravar.
                            </p>
                          )}

                          <ul className="mt-2 flex flex-col gap-1">
                            {micro.conceitos.map((c) => {
                              const estado = estados[c.id]
                              const feita = estado?.aulaConcluida
                              return (
                                <li key={c.id}>
                                  <Link
                                    to={`/conteudo/${c.id}`}
                                    className="flex items-center gap-2 rounded-lg px-1 py-1.5 text-[13px] transition-colors hover:bg-elevated"
                                  >
                                    <span
                                      aria-hidden
                                      className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border text-[9px] ${
                                        feita ? 'border-aqua bg-aqua text-bg' : 'border-line text-transparent'
                                      }`}
                                    >
                                      ✓
                                    </span>
                                    <span className={`truncate ${feita ? 'text-ink-2' : ''}`}>
                                      {c.titulo}
                                    </span>
                                    {estado && estado.n > 0 && (
                                      <span className="tnum ml-auto shrink-0 text-[11px] text-muted">
                                        {Math.round(dominioEfetivo(estado, agora) * 100)}%
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </Card>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
