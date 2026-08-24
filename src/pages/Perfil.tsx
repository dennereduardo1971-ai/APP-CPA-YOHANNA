import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Cabecalho } from '@/components/layout/AppShell'
import { Card, Secao } from '@/components/ui/Card'
import { Button, ButtonLink } from '@/components/ui/Button'
import { Barra } from '@/components/ui/Progress'
import { Vazio } from '@/components/ui/Empty'
import { useStore, useNivel } from '@/lib/store'
import { tituloDoNivel } from '@/lib/engine/gamification'
import { agregar, progressoGeral } from '@/lib/engine/stats'
import { getConceito } from '@/lib/content'
import { getQuestao, ROTULO_TIPO } from '@/lib/questions'
import { SIMULADO_PRESETS } from '@/lib/blueprint'

const AVATARES = ['◆', '◉', '★', '▲', '■', '⬟']

type Aba = 'historico' | 'favoritos'

export default function Perfil() {
  const estado = useStore()
  const atualizarPerfil = useStore((s) => s.atualizarPerfil)
  const alternarFavorito = useStore((s) => s.alternarFavorito)
  const nivel = useNivel()
  const [aba, setAba] = useState<Aba>('historico')
  const [editando, setEditando] = useState(false)
  const [nome, setNome] = useState(estado.perfil.nome)

  const geral = agregar(estado.respostas)
  const dominio = useMemo(() => progressoGeral(estado.estados, Date.now()), [estado.estados])
  const aulas = Object.values(estado.estados).filter((e) => e.aulaConcluida).length

  const linhaTempo = useMemo(() => {
    const sessoes = estado.sessoes.map((s) => ({
      tipo: 'sessao' as const,
      data: s.fim,
      titulo: s.rotulo,
      detalhe: `${s.acertos}/${s.questoes} acertos · +${s.xp} XP`,
      link: undefined as string | undefined,
    }))
    const simulados = estado.simulados.map((s) => ({
      tipo: 'simulado' as const,
      data: s.fim,
      titulo: SIMULADO_PRESETS[s.modo].rotulo,
      detalhe: `${Math.round(s.percentual * 100)}% · ${s.acertos}/${s.totalQuestoes}`,
      link: `/resultado/${s.id}` as string | undefined,
    }))
    return [...sessoes, ...simulados].sort((a, b) => b.data - a.data).slice(0, 25)
  }, [estado.sessoes, estado.simulados])

  const totalFavoritos =
    estado.favoritos.conceitos.length +
    estado.favoritos.questoes.length +
    estado.favoritos.mapas.length

  return (
    <div>
      <Cabecalho titulo="Perfil" />

      <Card className="mb-6">
        <div className="flex items-start gap-4">
          <span
            aria-hidden
            className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-aurora/40 bg-aurora/10 text-2xl text-aurora"
          >
            {estado.perfil.avatar ?? '◆'}
          </span>
          <div className="min-w-0 flex-1">
            {editando ? (
              <div className="flex gap-2">
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="h-10 min-w-0 flex-1 rounded-lg border border-line bg-elevated px-3 text-[15px] outline-none focus:border-aurora"
                />
                <Button
                  tamanho="sm"
                  onClick={() => {
                    atualizarPerfil({ nome: nome.trim() || 'Estudante' })
                    setEditando(false)
                  }}
                >
                  Salvar
                </Button>
              </div>
            ) : (
              <>
                <p className="truncate text-xl font-extrabold">
                  {estado.perfil.nome || 'Estudante'}
                </p>
                <button
                  type="button"
                  onClick={() => setEditando(true)}
                  className="text-xs text-muted hover:text-ink"
                >
                  editar nome
                </button>
              </>
            )}
            <p className="mt-1 text-sm text-muted">
              Nível {nivel.nivel} · {tituloDoNivel(nivel.nivel)}
            </p>
            <Barra valor={nivel.atual / Math.max(1, nivel.proximo)} className="mt-2" />
            <p className="tnum mt-1.5 text-xs text-muted">
              {nivel.atual}/{nivel.proximo} XP para o próximo nível
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
          {AVATARES.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => atualizarPerfil({ avatar: a })}
              aria-pressed={estado.perfil.avatar === a}
              aria-label={`Escolher avatar ${a}`}
              className={`grid h-9 w-9 place-items-center rounded-xl border text-base transition-colors ${
                estado.perfil.avatar === a
                  ? 'border-aurora bg-aurora/15 text-aurora'
                  : 'border-line bg-elevated text-muted hover:border-aurora/40'
              }`}
            >
              {a}
            </button>
          ))}
        </div>
      </Card>

      <Secao titulo="Estatísticas">
        <Card>
          <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
            <div>
              <p className="tnum text-2xl font-extrabold text-jade">{Math.round(dominio * 100)}%</p>
              <p className="text-[11px] uppercase tracking-wider text-muted">domínio</p>
            </div>
            <div>
              <p className="tnum text-2xl font-extrabold">{geral.total}</p>
              <p className="text-[11px] uppercase tracking-wider text-muted">questões</p>
            </div>
            <div>
              <p className="tnum text-2xl font-extrabold">{aulas}</p>
              <p className="text-[11px] uppercase tracking-wider text-muted">aulas</p>
            </div>
            <div>
              <p className="tnum text-2xl font-extrabold">{estado.simulados.length}</p>
              <p className="text-[11px] uppercase tracking-wider text-muted">simulados</p>
            </div>
          </div>
        </Card>
      </Secao>

      <div className="mb-4 flex gap-2">
        {(
          [
            ['historico', `Histórico (${linhaTempo.length})`],
            ['favoritos', `Favoritos (${totalFavoritos})`],
          ] as [Aba, string][]
        ).map(([chave, rotulo]) => (
          <button
            key={chave}
            type="button"
            onClick={() => setAba(chave)}
            aria-pressed={aba === chave}
            className={`rounded-lg border px-3 py-1.5 text-[13px] transition-colors ${
              aba === chave
                ? 'border-aurora bg-aurora/15 font-semibold text-aurora'
                : 'border-line bg-surface text-ink-2 hover:border-aurora/40'
            }`}
          >
            {rotulo}
          </button>
        ))}
      </div>

      {aba === 'historico' &&
        (linhaTempo.length === 0 ? (
          <Vazio
            titulo="Nenhuma sessão registrada"
            descricao="Seu histórico aparece aqui depois da primeira sessão."
            acao={<ButtonLink to="/rapido">Estudar agora</ButtonLink>}
          />
        ) : (
          <ul className="flex flex-col gap-2">
            {linhaTempo.map((item, i) => {
              const conteudo = (
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate font-semibold">{item.titulo}</p>
                    <p className="tnum mt-0.5 text-xs text-muted">{item.detalhe}</p>
                  </div>
                  <span className="tnum shrink-0 text-xs text-muted">
                    {new Date(item.data).toLocaleDateString('pt-BR')}
                  </span>
                </div>
              )
              return (
                <li key={i}>
                  {item.link ? (
                    <Link to={item.link} className="card card-hover block p-4">
                      {conteudo}
                    </Link>
                  ) : (
                    <div className="card p-4">{conteudo}</div>
                  )}
                </li>
              )
            })}
          </ul>
        ))}

      {aba === 'favoritos' &&
        (totalFavoritos === 0 ? (
          <Vazio
            icone="☆"
            titulo="Nenhum favorito ainda"
            descricao="Use a estrela nas aulas, questões e mapas para salvar aqui."
          />
        ) : (
          <div className="flex flex-col gap-6">
            {estado.favoritos.conceitos.length > 0 && (
              <section>
                <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">
                  Aulas
                </h3>
                <ul className="flex flex-col gap-2">
                  {estado.favoritos.conceitos.map((id) => {
                    const c = getConceito(id)
                    if (!c) return null
                    return (
                      <li key={id}>
                        <Card to={`/conteudo/${id}`}>
                          <p className="font-semibold">{c.titulo}</p>
                        </Card>
                      </li>
                    )
                  })}
                </ul>
              </section>
            )}

            {estado.favoritos.questoes.length > 0 && (
              <section>
                <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">
                  Questões
                </h3>
                <ul className="flex flex-col gap-2">
                  {estado.favoritos.questoes.map((id) => {
                    const q = getQuestao(id)
                    if (!q) return null
                    return (
                      <li key={id}>
                        <div className="card p-4">
                          <p className="text-xs text-muted">{ROTULO_TIPO[q.tipo]}</p>
                          <p className="mt-1 text-sm font-medium">{q.enunciado}</p>
                          <div className="mt-2 flex gap-4 text-sm font-semibold">
                            <Link to={`/conteudo/${q.conceitoId}`} className="text-aurora">
                              Ver a aula
                            </Link>
                            <button
                              type="button"
                              onClick={() => alternarFavorito('questoes', id)}
                              className="text-muted hover:text-ink"
                            >
                              remover
                            </button>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </section>
            )}

            {estado.favoritos.mapas.length > 0 && (
              <section>
                <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">
                  Mapas mentais
                </h3>
                <ul className="flex flex-col gap-2">
                  {estado.favoritos.mapas.map((id) => {
                    const c = getConceito(id)
                    if (!c) return null
                    return (
                      <li key={id}>
                        <Card to={`/mapas/${id}`}>
                          <p className="font-semibold">{c.titulo}</p>
                        </Card>
                      </li>
                    )
                  })}
                </ul>
              </section>
            )}
          </div>
        ))}
    </div>
  )
}
