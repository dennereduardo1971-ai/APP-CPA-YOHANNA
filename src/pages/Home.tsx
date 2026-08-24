import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardTitulo, Secao } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { Anel, Barra } from '@/components/ui/Progress'
import { Pill } from '@/components/ui/Badge'
import { Vazio } from '@/components/ui/Empty'
import { useStore, progressoDoDia, proximosConceitos, diasParaProva, useNivel } from '@/lib/store'
import { agregar, progressoGeral, ranking } from '@/lib/engine/stats'
import { errosAbertos, filaDeRevisao } from '@/lib/engine/scheduler'
import { nivelDominio, ROTULO_NIVEL } from '@/lib/engine/mastery'
import { tituloDoNivel } from '@/lib/engine/gamification'
import { getConceito, MACROTEMAS } from '@/lib/content'
import { MarcaPersonagem, FaixaPersonagem } from '@/components/domain/Personagem'
import { GUIA_PRINCIPAL } from '@/lib/personagens'

function saudacao(hora: number) {
  if (hora < 5) return 'Boa madrugada'
  if (hora < 12) return 'Bom dia'
  if (hora < 18) return 'Boa tarde'
  return 'Boa noite'
}

export default function Home() {
  const estado = useStore()
  const nivel = useNivel()
  const agora = Date.now()

  const dia = progressoDoDia(estado)
  const geral = progressoGeral(estado.estados, agora)
  const revisoes = filaDeRevisao(estado.estados, agora)
  const erros = errosAbertos(estado.estados)
  const proximos = proximosConceitos(estado, 3)
  const diasProva = diasParaProva(estado.metas)

  const recentes = useMemo(
    () => estado.respostas.slice(-20),
    [estado.respostas],
  )
  const desempenho = agregar(recentes)
  const fracos = useMemo(
    () => ranking(estado.estados, agora).filter((r) => r.respostas > 0),
    [estado.estados, agora],
  )
  const recomendacao = fracos[0]

  const primeiroAcesso = estado.respostas.length === 0 && estado.sessoes.length === 0

  return (
    <div>
      <header className="mb-6 flex items-center gap-3">
        <MarcaPersonagem personagem={GUIA_PRINCIPAL} tamanho={44} />
        <div className="min-w-0">
          <p className="text-sm text-muted">{saudacao(new Date().getHours())},</p>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {estado.perfil.nome || 'Estudante'}
          </h1>
        </div>
      </header>

      {diasProva !== null && diasProva >= 0 && diasProva <= 2 && (
        <Link
          to="/vespera"
          className="mb-5 flex items-center justify-between gap-3 rounded-2xl border border-warn/40 bg-warn-soft p-4 transition-colors hover:border-warn"
        >
          <div>
            <p className="font-bold text-warn">
              {diasProva === 0 ? 'A prova é hoje' : diasProva === 1 ? 'A prova é amanhã' : 'Faltam 2 dias'}
            </p>
            <p className="mt-0.5 text-[13px] text-warn/80">Ativar a revisão expressa da véspera</p>
          </div>
          <span aria-hidden className="text-warn">
            →
          </span>
        </Link>
      )}

      {/* Bloco principal: progresso, sequência e meta */}
      <div className="mb-6 grid gap-3 sm:grid-cols-[auto_1fr]">
        <Card className="flex items-center justify-center sm:px-8">
          <Anel valor={geral} sublegenda="domínio geral" />
        </Card>

        <div className="grid gap-3 sm:grid-rows-2">
          <Card>
            <CardTitulo>Sequência</CardTitulo>
            <div className="flex items-end gap-2">
              <span className="tnum text-3xl font-extrabold text-aqua">{estado.sequencia.atual}</span>
              <span className="pb-1 text-sm text-muted">
                {estado.sequencia.atual === 1 ? 'dia seguido' : 'dias seguidos'}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted">
              Recorde: <span className="tnum">{estado.sequencia.recorde}</span> ·{' '}
              {estado.sequencia.congelamentos} congelamento
              {estado.sequencia.congelamentos === 1 ? '' : 's'} disponíve
              {estado.sequencia.congelamentos === 1 ? 'l' : 'is'}
            </p>
          </Card>

          <Card>
            <CardTitulo>Meta de hoje</CardTitulo>
            <div className="flex items-baseline justify-between text-sm">
              <span className="tnum font-semibold">
                {dia.minutos} / {dia.metaMinutos} min
              </span>
              <span className="tnum text-muted">
                {dia.questoes} / {dia.metaQuestoes} questões
              </span>
            </div>
            <Barra valor={Math.max(dia.progressoMinutos, dia.progressoQuestoes)} className="mt-2" />
            {dia.cumprida && <p className="mt-2 text-xs font-semibold text-aqua">Meta cumprida hoje</p>}
          </Card>
        </div>
      </div>

      <ButtonLink to="/rapido" tamanho="lg" bloco className="mb-6">
        {estado.respostas.length ? 'Continuar estudando' : 'Começar a estudar'}
      </ButtonLink>

      {/* A fala de guia só no primeiro acesso — depois vira ruído diário. */}
      {primeiroAcesso && <FaixaPersonagem personagem={GUIA_PRINCIPAL} className="mb-6" />}

      {/* Recomendação */}
      <Secao titulo="Recomendação de estudo">
        {recomendacao ? (
          <Card to="/rapido">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <Pill tom={recomendacao.dominio < 0.4 ? 'danger' : recomendacao.dominio < 0.6 ? 'warn' : 'aqua'}>
                  {ROTULO_NIVEL[nivelDominio(recomendacao.dominio)]}
                </Pill>
                <p className="mt-2 font-semibold">{recomendacao.nome}</p>
                <p className="mt-1 text-sm text-muted">
                  Seu ponto mais fraco agora, com{' '}
                  <span className="tnum">{Math.round(recomendacao.dominio * 100)}%</span> de domínio.
                  A próxima sessão vai priorizar este tema.
                </p>
              </div>
              <span aria-hidden className="text-muted">
                →
              </span>
            </div>
          </Card>
        ) : (
          <Card to="/rapido">
            <p className="font-semibold">Vamos descobrir onde você está</p>
            <p className="mt-1 text-sm text-muted">
              Faça a primeira sessão. A partir das suas respostas, o sistema passa a montar o
              estudo pelos seus pontos fracos.
            </p>
          </Card>
        )}
      </Secao>

      {/* Revisão pendente */}
      <Secao
        titulo="Revisão pendente"
        acao={
          revisoes.length + erros.length > 0 ? (
            <Link to="/revisao" className="text-sm font-semibold text-aqua">
              Ver tudo
            </Link>
          ) : undefined
        }
      >
        {revisoes.length + erros.length === 0 ? (
          <Card>
            <p className="text-sm text-muted">
              Nada vencido por enquanto. A revisão aparece aqui quando a memória de um conceito
              começa a esfriar.
            </p>
          </Card>
        ) : (
          <div className="grid gap-2.5 sm:grid-cols-2">
            {erros.length > 0 && (
              <Card to="/revisao">
                <CardTitulo>Erros a superar</CardTitulo>
                <p className="tnum text-2xl font-extrabold text-danger">{erros.length}</p>
                <p className="mt-1 text-xs text-muted">
                  {erros
                    .slice(0, 2)
                    .map((e) => getConceito(e.conceitoId)?.titulo)
                    .filter(Boolean)
                    .join(' · ')}
                </p>
              </Card>
            )}
            {revisoes.length > 0 && (
              <Card to="/revisao">
                <CardTitulo>Revisões vencidas</CardTitulo>
                <p className="tnum text-2xl font-extrabold text-warn">{revisoes.length}</p>
                <p className="mt-1 text-xs text-muted">
                  {revisoes
                    .slice(0, 2)
                    .map((e) => getConceito(e.conceitoId)?.titulo)
                    .filter(Boolean)
                    .join(' · ')}
                </p>
              </Card>
            )}
          </div>
        )}
      </Secao>

      {/* Desempenho recente */}
      <Secao titulo="Desempenho recente" descricao="Últimas 20 questões respondidas">
        {desempenho.total === 0 ? (
          <Vazio
            icone="◔"
            titulo="Sem dados ainda"
            descricao="Responda algumas questões para ver seu desempenho aqui."
          />
        ) : (
          <Card>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="tnum text-2xl font-extrabold text-aqua">
                  {Math.round(desempenho.taxaAcerto * 100)}%
                </p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wider text-muted">acerto</p>
              </div>
              <div>
                <p className="tnum text-2xl font-extrabold">{desempenho.acertos}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wider text-muted">acertos</p>
              </div>
              <div>
                <p className="tnum text-2xl font-extrabold text-danger">
                  {desempenho.total - desempenho.acertos}
                </p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wider text-muted">erros</p>
              </div>
            </div>
            <Link
              to="/estatisticas"
              className="mt-4 block text-center text-sm font-semibold text-aqua"
            >
              Ver estatísticas completas
            </Link>
          </Card>
        )}
      </Secao>

      {/* Próximos conteúdos */}
      <Secao
        titulo="Próximos conteúdos"
        acao={
          <Link to="/trilha" className="text-sm font-semibold text-aqua">
            Ver trilha
          </Link>
        }
      >
        {proximos.length === 0 ? (
          <Card>
            <p className="font-semibold text-aqua">Todas as aulas concluídas</p>
            <p className="mt-1 text-sm text-muted">
              Agora é manter a revisão em dia e treinar com simulados.
            </p>
          </Card>
        ) : (
          <ul className="flex flex-col gap-2.5">
            {proximos.map((c) => {
              const macro = MACROTEMAS.find((m) =>
                m.microtemas.some((mt) => mt.id === c.microtemaId),
              )
              return (
                <li key={c.id}>
                  <Card to={`/conteudo/${c.id}`}>
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-[11px] uppercase tracking-wider text-muted">
                          {macro?.nome}
                        </p>
                        <p className="mt-0.5 truncate font-semibold">{c.titulo}</p>
                      </div>
                      <span className="tnum shrink-0 text-xs text-muted">
                        {c.minutosEstimados} min
                      </span>
                    </div>
                  </Card>
                </li>
              )
            })}
          </ul>
        )}
      </Secao>

      {!primeiroAcesso && (
        <p className="mt-8 text-center text-xs text-muted">
          Nível {nivel.nivel} · {tituloDoNivel(nivel.nivel)} ·{' '}
          <span className="tnum">{estado.xpTotal}</span> XP
        </p>
      )}
    </div>
  )
}
