import { Link } from 'react-router-dom'
import { Cabecalho } from '@/components/layout/AppShell'
import { Card } from '@/components/ui/Card'
import { Barra } from '@/components/ui/Progress'
import { Pill } from '@/components/ui/Badge'
import { AvisoVerificacao } from '@/components/ui/Empty'
import { Icone } from '@/components/ui/Icone'
import { DivisorPincel, Horizonte } from '@/components/ui/Ornamento'
import { MarcaPersonagem, TOM_PERSONAGEM } from '@/components/domain/Personagem'
import { EtapaTrilha } from '@/components/domain/EtapaTrilha'
import { guardiaoDoMacrotema } from '@/lib/personagens'
import {
  coberturaPendente,
  MICROTEMAS,
  pesosPendentes,
  coberturaGeral,
  microtemasSemConteudo,
  pesosEfetivos,
} from '@/lib/content'
import { useStore } from '@/lib/store'
import { etapaAtual, montarTrilha, progressoDaTrilha } from '@/lib/engine/trilha'
import { nivelDominio, ROTULO_NIVEL, TEXTO_DOMINIO, tomDominio } from '@/lib/engine/mastery'

/** Marco da jornada — início e chegada. Não é etapa, é moldura. */
function Marco({ rotulo, descricao }: { rotulo: string; descricao: string }) {
  return (
    <li className="relative flex items-center gap-3 py-1">
      <span
        aria-hidden
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-aurora/40 bg-aurora/10 text-aurora"
      >
        <Icone nome="bandeira" tamanho={20} />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-aurora">{rotulo}</p>
        <p className="mt-0.5 text-sm text-muted">{descricao}</p>
      </div>
    </li>
  )
}

export default function Trilha() {
  const estados = useStore((s) => s.estados)
  const respostas = useStore((s) => s.respostas)
  const agora = Date.now()
  const pesos = pesosEfetivos()

  const trilha = montarTrilha({ estados, respostas, agora })
  const atual = etapaAtual(trilha)
  const jornada = progressoDaTrilha(trilha)

  return (
    <div>
      <Cabecalho
        titulo="Trilha de estudos"
        descricao="O caminho inteiro numa tela: lição, miniquiz, desafio e revisão, tópico por tópico."
      />

      {/* Próximo passo. Um só — dois destaques na mesma tela não apontam nada. */}
      {atual && (
        <Card className="relative mb-6 overflow-hidden border-aurora/40">
          <Horizonte />
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-aurora">
            Continue daqui
          </p>
          <p className="display mt-1 text-lg leading-tight">{atual.etapa.rotulo}</p>
          <p className="mt-1 text-sm text-muted">
            {atual.no.microtema.codigo} {atual.no.microtema.nome} · {atual.etapa.detalhe}
          </p>
          {atual.etapa.destino && (
            <Link
              to={atual.etapa.destino}
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-aurora"
            >
              Abrir <span aria-hidden>→</span>
            </Link>
          )}
        </Card>
      )}

      {jornada.total > 0 && (
        <div className="mb-6">
          <div className="mb-1.5 flex items-baseline justify-between text-sm">
            <span className="font-semibold">Jornada</span>
            <span className="tnum text-muted">
              {jornada.concluidas} de {jornada.total} etapas
            </span>
          </div>
          <Barra valor={jornada.concluidas / jornada.total} />
        </div>
      )}

      {pesosPendentes() && (
        <div className="mb-6">
          <AvisoVerificacao>
            Os pesos por módulo ainda não foram conferidos contra o Programa Detalhado oficial
            vigente. Os percentuais exibidos são estimativas de distribuição, não dados da ANBIMA.
          </AvisoVerificacao>
        </div>
      )}

      {coberturaPendente() && (
        <div className="mb-6">
          <AvisoVerificacao>
            Cobertura do programa oficial: {Math.round(coberturaGeral() * 100)}% dos microtemas já
            têm aula ({MICROTEMAS.length - microtemasSemConteudo().length} de {MICROTEMAS.length}).
            Os tópicos marcados como “conteúdo em produção” fazem parte do Programa Detalhado da
            ANBIMA e ainda não têm material — estude por outra fonte até que estejam prontos.
          </AvisoVerificacao>
        </div>
      )}

      <ol className="flex flex-col gap-6">
        <Marco
          rotulo="Início"
          descricao="Nenhum módulo tranca: dá para estudar qualquer um por fora da ordem."
        />

        {trilha.map((estagio) => {
          const macro = estagio.macrotema
          const guardiao = guardiaoDoMacrotema(macro.id)
          const tom = TOM_PERSONAGEM[guardiao?.cor ?? 'aurora']

          return (
            <li key={macro.id}>
              {/* Cabeçalho do estágio: de quem é o módulo e quanto dele já foi. */}
              <div className="mb-3 flex items-start gap-3">
                {guardiao ? (
                  <MarcaPersonagem personagem={guardiao} tamanho={44} />
                ) : (
                  <span
                    aria-hidden
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-sm font-extrabold text-muted"
                  >
                    {macro.ordem}
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[11px] font-bold uppercase tracking-[0.14em] ${tom.texto}`}>
                      Módulo {macro.ordem}
                    </span>
                    {macro.peso != null ? (
                      <Pill tom={macro.peso >= 0.3 ? 'aurora' : 'neutro'}>
                        {Math.round(macro.peso * 100)}% da prova
                        {!macro.pesoVerificado && ' ?'}
                      </Pill>
                    ) : (
                      <Pill>~{Math.round((pesos[macro.id] ?? 0) * 100)}% estimado</Pill>
                    )}
                  </div>
                  <h2 className="display mt-0.5 text-lg leading-tight">{macro.nome}</h2>
                  {guardiao && (
                    <p className="mt-1 text-xs leading-snug text-muted">
                      <span className={`font-semibold ${tom.texto}`}>{guardiao.nome}</span> ·{' '}
                      {guardiao.guia}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-3 flex items-baseline justify-between text-sm">
                <span className={`font-semibold ${TEXTO_DOMINIO[tomDominio(estagio.dominio)]}`}>
                  {ROTULO_NIVEL[nivelDominio(estagio.dominio)]}
                </span>
                <span className="tnum text-muted">
                  {estagio.aulasConcluidas}/{estagio.totalAulas} aulas ·{' '}
                  {estagio.totalQuestoes} questões
                </span>
              </div>
              <Barra valor={estagio.dominio} tom={tomDominio(estagio.dominio)} />

              <ul className="mt-4 flex flex-col gap-2.5">
                {estagio.nos.map((no) => (
                  <li key={no.microtema.id}>
                    <div
                      className={`rounded-2xl border p-3.5 ${
                        no.semConteudo
                          ? 'border-dashed border-line/70 bg-surface'
                          : no.liberado
                            ? 'border-line bg-elevated/40'
                            : 'border-line/50 bg-surface'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="min-w-0 truncate text-sm font-bold">
                          <span className="tnum mr-1.5 text-xs font-normal text-muted">
                            {no.microtema.codigo}
                          </span>
                          {no.microtema.nome}
                        </p>
                        {!no.semConteudo && (
                          <span className="tnum shrink-0 text-xs text-muted">
                            {Math.round(no.dominio * 100)}%
                          </span>
                        )}
                      </div>

                      {no.semConteudo && (
                        <p className="mt-1 text-xs text-muted">
                          Conteúdo em produção — item do programa oficial ainda sem aula.
                        </p>
                      )}

                      {!no.semConteudo && !no.liberado && (
                        <p className="mt-1.5 flex items-start gap-1.5 text-xs text-muted">
                          <span className="mt-0.5 shrink-0">
                            <Icone nome="cadeado" tamanho={13} />
                          </span>
                          <span className="min-w-0">
                            Abre quando <span className="font-semibold">{no.aguarda?.nome}</span>{' '}
                            chegar a 60% — ou{' '}
                            <Link to="/questoes" className="font-semibold text-aurora">
                              teste direto
                            </Link>{' '}
                            para destravar.
                          </span>
                        </p>
                      )}

                      {no.etapas.length > 0 && (
                        <>
                          <DivisorPincel className="my-2.5 opacity-40" />
                          <ul className="flex flex-col gap-2.5">
                            {no.etapas.map((etapa, i) => (
                              <EtapaTrilha
                                key={etapa.id}
                                etapa={etapa}
                                atual={atual?.etapa.id === etapa.id}
                                ultima={i === no.etapas.length - 1}
                              />
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}

        <Marco
          rotulo="Próximo nível"
          descricao="Trilha percorrida, a prática vira simulado — e o guardião dos desafios assume."
        />
      </ol>

      <Link
        to="/simulados"
        className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-line bg-elevated/40 p-4 text-sm font-semibold transition-colors hover:border-aurora/50"
      >
        <Icone nome="cronometro" tamanho={18} />
        Ir para os simulados
      </Link>
    </div>
  )
}
