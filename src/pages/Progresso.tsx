import { useMemo } from 'react'
import { Cabecalho } from '@/components/layout/AppShell'
import { Card, Secao } from '@/components/ui/Card'
import { Anel, Barra } from '@/components/ui/Progress'
import { Pill } from '@/components/ui/Badge'
import { MACROTEMAS } from '@/lib/content'
import { useStore } from '@/lib/store'
import { cobertura, dominioMacrotema, progressoGeral, ranking } from '@/lib/engine/stats'
import { dominioEfetivo, nivelDominio, ROTULO_NIVEL, retencao } from '@/lib/engine/mastery'
import { FAIXAS_DOMINIO } from '@/lib/blueprint'

export default function Progresso() {
  const estados = useStore((s) => s.estados)
  const agora = Date.now()

  const geral = useMemo(() => progressoGeral(estados, agora), [estados, agora])
  const cob = useMemo(() => cobertura(estados), [estados])
  const rank = useMemo(() => ranking(estados, agora), [estados, agora])

  const fortes = rank.filter((r) => r.dominio >= 0.75)
  const fracos = rank.filter((r) => r.dominio < 0.6 && r.respostas > 0)

  return (
    <div>
      <Cabecalho
        titulo="Progresso"
        descricao="Domínio por conceito, com desconto de esquecimento."
      />

      <div className="mb-6 grid gap-3 sm:grid-cols-[auto_1fr]">
        <Card className="flex items-center justify-center sm:px-8">
          <Anel valor={geral} sublegenda="domínio geral" />
        </Card>
        <Card>
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">
            Cobertura do programa
          </p>
          <p className="tnum text-2xl font-extrabold">{Math.round(cob * 100)}%</p>
          <Barra valor={cob} className="mt-2" />
          <p className="mt-2 text-xs text-muted">
            Proporção de conceitos com pelo menos uma questão respondida.
          </p>
        </Card>
      </div>

      <Secao titulo="Escala de domínio" descricao="Indicadores pedagógicos, não previsão de nota.">
        <Card>
          <ul className="flex flex-col gap-1.5 text-sm">
            {FAIXAS_DOMINIO.map((f) => (
              <li key={f.id} className="flex items-baseline justify-between gap-3">
                <span className="text-ink-2">{f.rotulo}</span>
                <span className="tnum shrink-0 text-muted">
                  {Math.round(f.min * 100)}–{Math.round(f.max * 100)}%
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </Secao>

      {fracos.length > 0 && (
        <Secao titulo="Assuntos fracos" descricao="Abaixo de 60% de domínio.">
          <ul className="flex flex-col gap-2.5">
            {fracos.map((r) => (
              <li key={r.macrotemaId}>
                <Card>
                  <div className="flex items-center justify-between gap-3">
                    <p className="min-w-0 truncate font-semibold">{r.nome}</p>
                    <Pill tom="danger">{ROTULO_NIVEL[r.nivel]}</Pill>
                  </div>
                  <Barra valor={r.dominio} tom="danger" className="mt-3" />
                </Card>
              </li>
            ))}
          </ul>
        </Secao>
      )}

      {fortes.length > 0 && (
        <Secao titulo="Assuntos fortes" descricao="75% ou mais de domínio.">
          <ul className="flex flex-col gap-2.5">
            {fortes.map((r) => (
              <li key={r.macrotemaId}>
                <Card>
                  <div className="flex items-center justify-between gap-3">
                    <p className="min-w-0 truncate font-semibold">{r.nome}</p>
                    <Pill tom="aqua">{ROTULO_NIVEL[r.nivel]}</Pill>
                  </div>
                  <Barra valor={r.dominio} className="mt-3" />
                </Card>
              </li>
            ))}
          </ul>
        </Secao>
      )}

      <Secao titulo="Detalhe por conceito">
        {MACROTEMAS.map((macro) => {
          const dominio = dominioMacrotema(macro.id, estados, agora)
          return (
            <div key={macro.id} className="mb-5">
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-bold">{macro.nome}</h3>
                <span className="tnum text-xs text-muted">{Math.round(dominio * 100)}%</span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {macro.microtemas.flatMap((mt) => mt.conceitos).map((c) => {
                  const estado = estados[c.id]
                  const valor = estado ? dominioEfetivo(estado, agora) : 0
                  const ret = estado ? retencao(estado, agora) : 0
                  return (
                    <li key={c.id}>
                      <div className="card p-3">
                        <div className="flex items-center justify-between gap-3">
                          <p className="min-w-0 truncate text-sm">{c.titulo}</p>
                          <span className="tnum shrink-0 text-xs text-muted">
                            {estado?.n ? `${Math.round(valor * 100)}%` : '—'}
                          </span>
                        </div>
                        <Barra
                          valor={valor}
                          altura="h-1.5"
                          className="mt-2"
                          tom={valor >= 0.75 ? 'aqua' : valor >= 0.4 ? 'warn' : 'danger'}
                        />
                        {estado?.n ? (
                          <p className="tnum mt-1.5 text-[11px] text-muted">
                            {ROTULO_NIVEL[nivelDominio(valor)]} · {estado.acertos}/{estado.n}{' '}
                            acertos · retenção {Math.round(ret * 100)}%
                          </p>
                        ) : (
                          <p className="mt-1.5 text-[11px] text-muted">ainda não praticado</p>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </Secao>
    </div>
  )
}
