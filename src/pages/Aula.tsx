import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, ButtonLink } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { EtiquetaBadge } from '@/components/ui/Badge'
import { Vazio } from '@/components/ui/Empty'
import { MapaMental } from '@/components/domain/MapaMental'
import { ExpliqueDeOutroJeito } from '@/components/domain/ExpliqueDeOutroJeito'
import { SeletorNivel } from '@/components/domain/SeletorNivel'
import { CONCEITOS, getConceito, MACROTEMAS } from '@/lib/content'
import { useStore } from '@/lib/store'

function Bloco({ rotulo, children }: { rotulo: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">
        {rotulo}
      </h2>
      {children}
    </section>
  )
}

export default function Aula() {
  const { conceitoId } = useParams()
  const navegar = useNavigate()
  const conceito = conceitoId ? getConceito(conceitoId) : undefined

  const concluirAula = useStore((s) => s.concluirAula)
  const alternarFavorito = useStore((s) => s.alternarFavorito)
  const favoritos = useStore((s) => s.favoritos.conceitos)
  const concluida = useStore((s) => (conceitoId ? !!s.estados[conceitoId]?.aulaConcluida : false))

  const [respostaRapida, setRespostaRapida] = useState<number | null>(null)
  const [mostrarOutro, setMostrarOutro] = useState(false)

  if (!conceito) {
    return (
      <Vazio
        titulo="Aula não encontrada"
        descricao="O conteúdo pode ter sido renomeado."
        acao={<ButtonLink to="/trilha">Voltar para a trilha</ButtonLink>}
      />
    )
  }

  const macro = MACROTEMAS.find((m) => m.microtemas.some((mt) => mt.id === conceito.microtemaId))
  const indice = CONCEITOS.findIndex((c) => c.id === conceito.id)
  const proximo = CONCEITOS[indice + 1]
  const favorita = favoritos.includes(conceito.id)
  const acertouRapida = respostaRapida === conceito.perguntaRapida.correta

  function concluir() {
    concluirAula(conceito!.id)
    if (proximo) navegar(`/conteudo/${proximo.id}`)
    else navegar('/trilha')
  }

  return (
    <article>
      <nav className="mb-4 flex items-center gap-2 text-xs text-muted">
        <Link to="/trilha" className="hover:text-ink">
          Trilha
        </Link>
        <span aria-hidden>/</span>
        <span className="truncate">{macro?.nome}</span>
      </nav>

      <header className="mb-6">
        <div className="mb-2 flex flex-wrap items-center gap-1.5">
          {conceito.etiquetas.map((e) => (
            <EtiquetaBadge key={e} etiqueta={e} />
          ))}
          <button
            type="button"
            onClick={() => alternarFavorito('conceitos', conceito.id)}
            aria-pressed={favorita}
            aria-label={favorita ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
            className={`ml-auto text-lg ${favorita ? 'text-aqua' : 'text-muted hover:text-ink'}`}
          >
            {favorita ? '★' : '☆'}
          </button>
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{conceito.titulo}</h1>
        <p className="mt-2 text-sm text-muted">{conceito.objetivo}</p>
        <p className="tnum mt-2 text-xs text-muted">
          {conceito.minutosEstimados} min de leitura
          {concluida && <span className="ml-2 font-semibold text-aqua">· concluída</span>}
        </p>
      </header>

      {/* Resumo de 30 segundos */}
      <div className="mb-8 rounded-2xl border border-aqua/30 bg-aqua/10 p-4">
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-aqua">
          Resumo de 30 segundos
        </p>
        <p className="text-[15px] leading-relaxed">{conceito.resumo30s}</p>
      </div>

      {conceito.niveis && <SeletorNivel niveis={conceito.niveis} />}

      <Bloco rotulo="O que é">
        <p className="text-[15px] leading-relaxed text-ink-2">{conceito.explicacao.oQueE}</p>
      </Bloco>

      {conceito.explicacao.porQueImporta && (
        <Bloco rotulo="Por que isso importa">
          <p className="text-[15px] leading-relaxed text-ink-2">
            {conceito.explicacao.porQueImporta}
          </p>
        </Bloco>
      )}

      <Bloco rotulo="Para que serve">
        <p className="text-[15px] leading-relaxed text-ink-2">{conceito.explicacao.paraQueServe}</p>
      </Bloco>

      <Bloco rotulo="Como funciona">
        <ul className="flex flex-col gap-2">
          {conceito.explicacao.comoFunciona.map((linha, i) => (
            <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-2">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-aqua" />
              {linha}
            </li>
          ))}
        </ul>
      </Bloco>

      <Bloco rotulo="Exemplo simples">
        <Card className="bg-elevated/60">
          <p className="text-[15px] leading-relaxed text-ink-2">
            {conceito.explicacao.exemploSimples}
          </p>
        </Card>
      </Bloco>

      {conceito.explicacao.exemploAplicado && (
        <Bloco rotulo="Exemplo aplicado ao mercado">
          <Card className="bg-elevated/60">
            <p className="text-[15px] leading-relaxed text-ink-2">
              {conceito.explicacao.exemploAplicado}
            </p>
          </Card>
        </Bloco>
      )}

      {conceito.exemplos.length > 0 && (
        <Bloco rotulo="Mais exemplos">
          <div className="flex flex-col gap-2.5">
            {conceito.exemplos.map((ex, i) => (
              <Card key={i} className="bg-elevated/60">
                <p className="mb-1 text-sm font-semibold">{ex.titulo}</p>
                <p className="text-[15px] leading-relaxed text-ink-2">{ex.corpo}</p>
              </Card>
            ))}
          </div>
        </Bloco>
      )}

      {conceito.tabela && (
        <Bloco rotulo={conceito.tabela.titulo}>
          <div className="overflow-x-auto rounded-xl border border-line">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-elevated">
                  {conceito.tabela.colunas.map((col) => (
                    <th
                      key={col}
                      className="px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {conceito.tabela.linhas.map((linha, i) => (
                  <tr key={i} className="border-t border-line">
                    {linha.map((celula, j) => (
                      <td
                        key={j}
                        className={`px-3 py-2.5 align-top ${j === 0 ? 'font-medium' : 'text-ink-2'}`}
                      >
                        {celula}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Bloco>
      )}

      {/* Conceito-chave */}
      <div className="mb-6 rounded-2xl border-l-2 border-aqua bg-surface p-4">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-aqua">
          Conceito-chave
        </p>
        <p className="text-[15px] font-semibold leading-relaxed">{conceito.conceitoChave}</p>
      </div>

      <Bloco rotulo="O que lembrar na prova">
        <ul className="flex flex-col gap-2">
          {conceito.explicacao.lembrarNaProva.map((linha, i) => (
            <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed">
              <span aria-hidden className="mt-0.5 shrink-0 font-bold text-aqua">
                ✓
              </span>
              {linha}
            </li>
          ))}
        </ul>
      </Bloco>

      {/* Erro comum */}
      <div className="mb-6 rounded-2xl border border-danger/30 bg-danger-soft p-4">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-danger">
          Erro comum
        </p>
        <p className="text-[15px] leading-relaxed text-ink-2">{conceito.erroComum}</p>
      </div>

      {/* Alerta de prova */}
      {conceito.alertaProva && (
        <div className="mb-6 rounded-2xl border border-warn/30 bg-warn-soft p-4">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-warn">
            Alerta de prova
          </p>
          <p className="text-[15px] leading-relaxed text-ink-2">{conceito.alertaProva}</p>
        </div>
      )}

      {conceito.explicacao.revisaoRapida && (
        <Bloco rotulo="Revisão rápida">
          <ol className="flex flex-col gap-2">
            {conceito.explicacao.revisaoRapida.map((linha, i) => (
              <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-2">
                <span
                  aria-hidden
                  className="tnum mt-0.5 shrink-0 text-[13px] font-semibold text-aqua"
                >
                  {i + 1}.
                </span>
                {linha}
              </li>
            ))}
          </ol>
        </Bloco>
      )}

      <Bloco rotulo="Pontos-chave">
        <div className="flex flex-wrap gap-2">
          {conceito.pontosChave.map((p, i) => (
            <span
              key={i}
              className="rounded-lg border border-line bg-elevated px-3 py-1.5 text-[13px] text-ink-2"
            >
              {p}
            </span>
          ))}
        </div>
      </Bloco>

      {/* Mapa mental */}
      <Bloco rotulo="Mapa mental">
        <Card>
          <MapaMental raiz={conceito.mapaMental} />
          <Link
            to={`/mapas/${conceito.id}`}
            className="mt-4 inline-block text-sm font-semibold text-aqua"
          >
            Abrir em tela cheia
          </Link>
        </Card>
      </Bloco>

      {/* Miniquestão */}
      <Bloco rotulo="Pergunta rápida">
        <Card>
          <p className="mb-3 font-semibold">{conceito.perguntaRapida.enunciado}</p>
          <ul className="flex flex-col gap-2">
            {conceito.perguntaRapida.alternativas.map((alt, i) => {
              const escolhida = respostaRapida === i
              const certa = conceito.perguntaRapida.correta === i
              const revelou = respostaRapida !== null

              let estilo = 'border-line bg-elevated hover:border-aqua/40'
              if (revelou && certa) estilo = 'border-aqua bg-aqua/15'
              else if (revelou && escolhida) estilo = 'border-danger bg-danger-soft'

              return (
                <li key={i}>
                  <button
                    type="button"
                    disabled={revelou}
                    onClick={() => setRespostaRapida(i)}
                    className={`w-full rounded-xl border p-3 text-left text-[15px] transition-all disabled:cursor-default ${estilo}`}
                  >
                    {alt}
                  </button>
                </li>
              )
            })}
          </ul>

          {respostaRapida !== null && (
            <div className="mt-3 animate-fade-up">
              <p className={`mb-1 text-sm font-bold ${acertouRapida ? 'text-aqua' : 'text-danger'}`}>
                {acertouRapida ? 'Correto' : 'Quase lá'}
              </p>
              <p className="text-[14px] leading-relaxed text-ink-2">
                {conceito.perguntaRapida.explicacao}
              </p>
            </div>
          )}
        </Card>
      </Bloco>

      {/* Explique de outro jeito */}
      <div className="mb-8">
        {!mostrarOutro ? (
          <button
            type="button"
            onClick={() => setMostrarOutro(true)}
            className="text-sm font-semibold text-aqua underline-offset-4 hover:underline"
          >
            Não entendi — explique de outro jeito
          </button>
        ) : (
          <ExpliqueDeOutroJeito conceito={conceito} onFechar={() => setMostrarOutro(false)} />
        )}
      </div>

      <div className="flex flex-col gap-2.5 border-t border-line pt-6">
        <Button bloco tamanho="lg" onClick={concluir}>
          {concluida ? 'Continuar' : 'Concluir aula'}
          {proximo && ' e ir para a próxima'}
        </Button>
        <ButtonLink
          to={`/questoes?macro=${macro?.id ?? ''}`}
          variante="secundaria"
          bloco
        >
          Praticar questões deste tema
        </ButtonLink>
      </div>
    </article>
  )
}
