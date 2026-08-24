import { Cabecalho } from '@/components/layout/AppShell'
import { Card, Secao } from '@/components/ui/Card'
import { SeloConquista } from '@/components/ui/Ornamento'
import { Barra } from '@/components/ui/Progress'
import {
  CONQUISTAS,
  desbloqueios,
  nivelPorXP,
  tituloDoNivel,
  XP,
} from '@/lib/engine/gamification'
import { snapshotGamificacao, useStore } from '@/lib/store'
import { Icone, type IconeNome } from '@/components/ui/Icone'
import { TOM_PERSONAGEM } from '@/components/domain/Personagem'
import { Link } from 'react-router-dom'

const GRUPOS = [
  { chave: 'guardioes', rotulo: 'Selos dos guardiões' },
  { chave: 'consistencia', rotulo: 'Consistência' },
  { chave: 'revisao', rotulo: 'Revisão' },
  { chave: 'conclusao', rotulo: 'Conclusão de conteúdo' },
  { chave: 'desempenho', rotulo: 'Desempenho' },
  { chave: 'meta', rotulo: 'Metas' },
] as const

export default function Conquistas() {
  const xpTotal = useStore((s) => s.xpTotal)
  const conquistadas = useStore((s) => s.conquistas)
  const eventos = useStore((s) => s.eventosXP)
  const sequencia = useStore((s) => s.sequencia)
  const estado = useStore()
  const nivel = nivelPorXP(xpTotal)
  const liberaveis = desbloqueios(snapshotGamificacao(estado))

  return (
    <div>
      <Cabecalho
        titulo="Conquistas"
        descricao="A pontuação premia consistência e revisão — não volume de cliques."
      />

      <Card className="mb-6">
        <div className="mb-3 flex items-end justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted">Nível {nivel.nivel}</p>
            <p className="text-2xl font-extrabold">{tituloDoNivel(nivel.nivel)}</p>
          </div>
          <p className="tnum text-sm text-muted">
            {nivel.atual} / {nivel.proximo} XP
          </p>
        </div>
        <Barra valor={nivel.atual / Math.max(1, nivel.proximo)} altura="h-2.5" />
        <p className="tnum mt-3 text-sm text-muted">
          {xpTotal} XP no total · sequência de {sequencia.atual}{' '}
          {sequencia.atual === 1 ? 'dia' : 'dias'} · recorde {sequencia.recorde}
        </p>
      </Card>

      <Secao
        titulo="Desbloqueios"
        descricao="Recompensa, não trava: nada que já estava aberto fecha para caber aqui."
      >
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {liberaveis.map(({ desbloqueio, liberado, progresso }) => {
            const corpo = (
              <>
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border ${
                      liberado
                        ? `${TOM_PERSONAGEM[desbloqueio.cor ?? 'aurora'].borda} ${
                            TOM_PERSONAGEM[desbloqueio.cor ?? 'aurora'].texto
                          }`
                        : 'border-line text-muted'
                    }`}
                  >
                    <Icone
                      nome={liberado ? (desbloqueio.icone as IconeNome) : 'cadeado'}
                      tamanho={17}
                    />
                  </span>
                  <div className="min-w-0">
                    <p className={`font-semibold ${liberado ? '' : 'text-muted'}`}>
                      {desbloqueio.nome}
                    </p>
                    <p className="mt-0.5 text-sm text-muted">
                      {liberado ? desbloqueio.descricao : desbloqueio.requisito}
                    </p>
                  </div>
                </div>
                {!liberado && <Barra valor={progresso} altura="h-1" className="mt-3" />}
              </>
            )

            return (
              <li key={desbloqueio.id}>
                {liberado && desbloqueio.destino ? (
                  <Link to={desbloqueio.destino} className="card card-hover block p-4">
                    {corpo}
                  </Link>
                ) : (
                  <div className={`card p-4 ${liberado ? '' : 'opacity-70'}`}>{corpo}</div>
                )}
              </li>
            )
          })}
        </ul>
      </Secao>

      <Secao titulo="Como o XP é distribuído" descricao="Regras explícitas, sem caixa-preta.">
        <Card>
          <ul className="flex flex-col gap-2 text-sm">
            {[
              ['Concluir uma aula', XP.concluirAula],
              ['Responder uma questão', XP.responderQuestao],
              ['Acertar (bônus)', XP.acertoBonus],
              ['Acertar questão difícil (bônus extra)', XP.acertoDificilBonus],
              ['Superar um erro na revisão', XP.revisarErro],
              ['Cumprir a meta diária', XP.concluirMetaDiaria],
              ['Concluir um simulado', XP.concluirSimulado],
            ].map(([rotulo, pontos]) => (
              <li key={rotulo as string} className="flex items-baseline justify-between gap-3">
                <span className="text-ink-2">{rotulo}</span>
                <span className="tnum shrink-0 font-semibold text-aurora">+{pontos}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-line pt-3 text-xs leading-relaxed text-muted">
            Refazer questão de conceito já dominado rende quase nada, e acerto em menos de 3
            segundos não recebe bônus. A intenção é premiar estudo, não velocidade de clique.
          </p>
        </Card>
      </Secao>

      {GRUPOS.map((grupo) => {
        const doGrupo = CONQUISTAS.filter((c) => c.incentiva === grupo.chave)
        if (!doGrupo.length) return null
        return (
          <Secao key={grupo.chave} titulo={grupo.rotulo}>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {doGrupo.map((c) => {
                const obtida = conquistadas.includes(c.id)
                return (
                  <li key={c.id}>
                    <div
                      className={`card p-4 transition-colors ${
                        obtida ? 'border-aurora/40 bg-aurora/10' : 'opacity-60'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <SeloConquista tamanho={42} obtido={obtida}>
                          <Icone nome={c.icone as IconeNome} tamanho={18} />
                        </SeloConquista>
                        <div className="min-w-0">
                          <p className="font-semibold">{c.nome}</p>
                          <p className="mt-0.5 text-sm text-muted">{c.descricao}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Secao>
        )
      })}

      {eventos.length > 0 && (
        <Secao titulo="Últimos ganhos de XP">
          <Card>
            <ul className="flex flex-col gap-1.5 text-sm">
              {[...eventos]
                .reverse()
                .slice(0, 12)
                .map((e) => (
                  <li key={e.id} className="flex items-baseline justify-between gap-3">
                    <span className="truncate text-ink-2">{e.motivo}</span>
                    <span className="tnum shrink-0 text-xs text-muted">
                      +{e.pontos} · {new Date(e.data).toLocaleDateString('pt-BR')}
                    </span>
                  </li>
                ))}
            </ul>
          </Card>
        </Secao>
      )}
    </div>
  )
}
