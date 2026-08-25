import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardTitulo, Secao } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { Anel, Barra } from '@/components/ui/Progress'
import { Vazio } from '@/components/ui/Empty'
import { useStore, progressoDoDia, proximosConceitos, diasParaProva, useNivel } from '@/lib/store'
import { agregar, progressoGeral } from '@/lib/engine/stats'
import { errosAbertos, filaDeRevisao } from '@/lib/engine/scheduler'
import { tomDominio } from '@/lib/engine/mastery'
import { tituloDoNivel } from '@/lib/engine/gamification'
import type { AcaoRecomendada, Recomendacao } from '@/lib/engine/planner'
import { recomendar, ROTULO_ACAO } from '@/lib/engine/planner'
import { Icone, type IconeNome } from '@/components/ui/Icone'
import { getConceito, MACROTEMAS } from '@/lib/content'
import { MarcaPersonagem, FaixaPersonagem } from '@/components/domain/Personagem'
import { GUIA_PRINCIPAL } from '@/lib/personagens'

function saudacao(hora: number) {
  if (hora < 5) return 'Boa madrugada'
  if (hora < 12) return 'Bom dia'
  if (hora < 18) return 'Boa tarde'
  return 'Boa noite'
}

/**
 * Um passo recomendado. O ícone diz o TIPO de ação e o texto diz o MOTIVO —
 * uma recomendação sem motivo é só um atalho, e o aluno não aprende a
 * confiar nela.
 */
const ICONE_ACAO: Record<AcaoRecomendada, IconeNome> = {
  aula: 'livro',
  praticar: 'questao',
  revisar: 'revisao',
}

function CartaoRecomendacao({ recomendacao: r }: { recomendacao: Recomendacao }) {
  return (
    <Card to={r.destino} className="animate-fade-up">
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-elevated text-aurora"
        >
          <Icone nome={ICONE_ACAO[r.acao]} tamanho={18} />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <p className="min-w-0 truncate text-[11px] uppercase tracking-wider text-muted">
              {r.microtema || r.macrotema}
            </p>
            <span className="tnum shrink-0 text-[11px] text-muted">{r.minutos} min</span>
          </div>
          <p className="mt-0.5 font-semibold">{r.titulo}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">{r.justificativa}</p>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-aurora">
            {ROTULO_ACAO[r.acao]} →
          </p>
        </div>
      </div>
    </Card>
  )
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

  const recomendacoes = useMemo(
    () =>
      recomendar({
        minutos: estado.metas.minutosDia,
        estados: estado.estados,
        agora,
        // Conceitos vistos nas últimas 24h entram penalizados: recomendar
        // agora o que acabou de ser estudado é conselho vazio.
        recentes: new Set(
          estado.respostas.filter((r) => r.data > agora - 86_400_000).map((r) => r.conceitoId),
        ),
        jaVistas: new Set(estado.respostas.map((r) => r.questaoId)),
      }),
    [estado.estados, estado.respostas, estado.metas.minutosDia, agora],
  )

  const primeiroAcesso = estado.respostas.length === 0 && estado.sessoes.length === 0

  return (
    <div>
      <header className="mb-6 flex items-center gap-3.5">
        <MarcaPersonagem personagem={GUIA_PRINCIPAL} tamanho={52} />
        <div className="min-w-0">
          <p className="text-sm text-muted">{saudacao(new Date().getHours())},</p>
          <h1 className="display text-2xl sm:text-3xl">{estado.perfil.nome || 'Estudante'}</h1>
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
          <Anel valor={geral} tom={tomDominio(geral)} sublegenda="domínio geral" />
        </Card>

        <div className="grid gap-3 sm:grid-rows-2">
          <Card>
            <CardTitulo>Sequência</CardTitulo>
            <div className="flex items-end gap-2">
              <span className="tnum text-3xl font-extrabold text-aurora">{estado.sequencia.atual}</span>
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
            {dia.cumprida && <p className="mt-2 text-xs font-semibold text-jade">Meta cumprida hoje</p>}
          </Card>
        </div>
      </div>

      <ButtonLink to="/rapido" tamanho="lg" bloco className="mb-6">
        {estado.respostas.length ? 'Continuar estudando' : 'Começar a estudar'}
      </ButtonLink>

      {/* A fala de guia só no primeiro acesso — depois vira ruído diário. */}
      {primeiroAcesso && <FaixaPersonagem personagem={GUIA_PRINCIPAL} className="mb-6" />}

      {/* Estude agora */}
      <Secao
        titulo="Estude agora"
        descricao="Em ordem de prioridade. Cada cartão diz por que está aí."
        acao={
          recomendacoes.length > 0 ? (
            <Link to="/rapido" className="text-sm font-semibold text-aurora">
              Sessão completa
            </Link>
          ) : undefined
        }
      >
        {recomendacoes.length === 0 ? (
          <Card to="/rapido">
            <p className="font-semibold">Vamos descobrir onde você está</p>
            <p className="mt-1 text-sm text-muted">
              Faça a primeira sessão. A partir das suas respostas, o sistema passa a montar o
              estudo pelos seus pontos fracos.
            </p>
          </Card>
        ) : (
          <ul className="flex flex-col gap-2.5">
            {recomendacoes.map((r) => (
              <li key={r.conceitoId}>
                <CartaoRecomendacao recomendacao={r} />
              </li>
            ))}
          </ul>
        )}
      </Secao>

      {/* Revisão pendente */}
      <Secao
        titulo="Revisão pendente"
        acao={
          revisoes.length + erros.length > 0 ? (
            <Link to="/revisao" className="text-sm font-semibold text-aurora">
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
            icone="estatistica"
            titulo="Sem dados ainda"
            descricao="Responda algumas questões para ver seu desempenho aqui."
          />
        ) : (
          <Card>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="tnum text-2xl font-extrabold text-jade">
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
              className="mt-4 block text-center text-sm font-semibold text-aurora"
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
          <Link to="/trilha" className="text-sm font-semibold text-aurora">
            Ver trilha
          </Link>
        }
      >
        {proximos.length === 0 ? (
          <Card>
            <p className="font-semibold text-jade">Todas as aulas concluídas</p>
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
