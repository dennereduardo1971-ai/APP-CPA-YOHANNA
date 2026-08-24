import { useMemo } from 'react'
import { Cabecalho } from '@/components/layout/AppShell'
import { Card, Secao } from '@/components/ui/Card'
import { Anel, Barra } from '@/components/ui/Progress'
import { MACROTEMAS } from '@/lib/content'
import type { Conceito, EstadoConceito } from '@/lib/types'
import { useStore } from '@/lib/store'
import type { LinhaMicrotema } from '@/lib/engine/stats'
import {
  cobertura,
  dominioMacrotema,
  panoramaMicrotemas,
  progressoGeral,
  ranking,
} from '@/lib/engine/stats'
import {
  dominioEfetivo,
  nivelDominio,
  ROTULO_NIVEL,
  retencao,
  TEXTO_DOMINIO,
  tomDominio,
} from '@/lib/engine/mastery'
import { FAIXAS_DOMINIO } from '@/lib/blueprint'

const plural = (n: number, um: string, muitos: string) => `${n} ${n === 1 ? um : muitos}`

/** Uma linha de conceito dentro do microtema. */
function LinhaConceito({
  conceito,
  estado,
  agora,
}: {
  conceito: Conceito
  estado?: EstadoConceito
  agora: number
}) {
  const valor = estado ? dominioEfetivo(estado, agora) : 0
  const ret = estado ? retencao(estado, agora) : 0

  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p className="min-w-0 truncate text-[13px] text-ink-2">{conceito.titulo}</p>
        <span className="tnum shrink-0 text-[11px] text-muted">
          {estado?.n ? `${Math.round(valor * 100)}%` : '—'}
        </span>
      </div>
      <Barra valor={valor} altura="h-1" className="mt-1.5" tom={tomDominio(valor)} />
      {estado?.n ? (
        <p className="tnum mt-1 text-[11px] text-muted">
          {ROTULO_NIVEL[nivelDominio(valor)]} · {estado.acertos}/{estado.n} acertos · retenção{' '}
          {Math.round(ret * 100)}%
        </p>
      ) : (
        <p className="mt-1 text-[11px] text-muted">ainda não praticado</p>
      )}
    </div>
  )
}

/**
 * Um microtema oficial. Microtema sem aula escrita NÃO mostra barra: 0% ali
 * seria uma acusação ao aluno por matéria que ninguém escreveu ainda.
 */
function CartaoMicrotema({
  linha,
  conceitos,
  estados,
  agora,
}: {
  linha: LinhaMicrotema
  conceitos: Conceito[]
  estados: Record<string, EstadoConceito>
  agora: number
}) {
  return (
    <div className="card p-3.5">
      <div className="flex items-baseline justify-between gap-3">
        <p className="min-w-0 text-sm font-semibold">
          <span className="tnum mr-1.5 text-muted">{linha.codigo}</span>
          {linha.nome}
        </p>
        <span
          className={`tnum shrink-0 text-xs ${
            linha.semConteudo ? 'text-muted' : TEXTO_DOMINIO[tomDominio(linha.dominio)]
          }`}
        >
          {linha.semConteudo ? '—' : `${Math.round(linha.dominio * 100)}%`}
        </span>
      </div>

      {linha.semConteudo ? (
        <p className="mt-2 text-[11px] leading-relaxed text-muted">
          Aula ainda não escrita. Este microtema está no programa oficial, então aparece aqui —
          mas não conta contra o seu domínio.
        </p>
      ) : (
        <>
          <Barra
            valor={linha.dominio}
            altura="h-1.5"
            className="mt-2.5"
            tom={tomDominio(linha.dominio)}
          />
          <p className="tnum mt-1.5 text-[11px] text-muted">
            {ROTULO_NIVEL[linha.nivel]} · {linha.praticados}/{linha.conceitos} conceitos praticados
            {linha.respostas > 0 && ` · ${plural(linha.respostas, 'resposta', 'respostas')}`}
          </p>

          <ul className="mt-3 flex flex-col gap-2.5 border-t border-line pt-3">
            {conceitos.map((c) => (
              <li key={c.id}>
                <LinhaConceito conceito={c} estado={estados[c.id]} agora={agora} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

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
          <Anel valor={geral} tom={tomDominio(geral)} sublegenda="domínio geral" />
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
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="min-w-0 truncate font-semibold">{r.nome}</p>
                    <span
                      className={`tnum shrink-0 text-sm font-bold ${
                        TEXTO_DOMINIO[tomDominio(r.dominio)]
                      }`}
                    >
                      {Math.round(r.dominio * 100)}%
                    </span>
                  </div>
                  <Barra valor={r.dominio} tom={tomDominio(r.dominio)} className="mt-2.5" />
                  <p className="mt-1.5 text-[11px] text-muted">{ROTULO_NIVEL[r.nivel]}</p>
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
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="min-w-0 truncate font-semibold">{r.nome}</p>
                    <span
                      className={`tnum shrink-0 text-sm font-bold ${
                        TEXTO_DOMINIO[tomDominio(r.dominio)]
                      }`}
                    >
                      {Math.round(r.dominio * 100)}%
                    </span>
                  </div>
                  <Barra valor={r.dominio} tom={tomDominio(r.dominio)} className="mt-2.5" />
                  <p className="mt-1.5 text-[11px] text-muted">{ROTULO_NIVEL[r.nivel]}</p>
                </Card>
              </li>
            ))}
          </ul>
        </Secao>
      )}

      <Secao
        titulo="Detalhe por microtema"
        descricao="Os microtemas do Programa Detalhado, na ordem oficial."
      >
        {MACROTEMAS.map((macro) => {
          const dominio = dominioMacrotema(macro.id, estados, agora)
          return (
            <div key={macro.id} className="mb-6">
              <div className="mb-2.5 flex items-baseline justify-between gap-3">
                <h3 className="display min-w-0 truncate text-sm">{macro.nome}</h3>
                <span className={`tnum shrink-0 text-xs ${TEXTO_DOMINIO[tomDominio(dominio)]}`}>
                  {Math.round(dominio * 100)}%
                </span>
              </div>

              <ul className="flex flex-col gap-2.5">
                {panoramaMicrotemas(estados, agora, macro.id).map((linha) => (
                  <li key={linha.microtemaId}>
                    <CartaoMicrotema
                      linha={linha}
                      conceitos={
                        macro.microtemas.find((mt) => mt.id === linha.microtemaId)?.conceitos ?? []
                      }
                      estados={estados}
                      agora={agora}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </Secao>
    </div>
  )
}
