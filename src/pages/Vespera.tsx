import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Cabecalho } from '@/components/layout/AppShell'
import { Card } from '@/components/ui/Card'
import { Button, ButtonLink } from '@/components/ui/Button'
import { EtiquetaBadge } from '@/components/ui/Badge'
import { MapaMental } from '@/components/domain/MapaMental'
import { SessaoEstudo } from '@/components/domain/SessaoEstudo'
import { CONCEITOS, getConceito } from '@/lib/content'
import { useStore, diasParaProva } from '@/lib/store'
import { montarVespera } from '@/lib/engine/planner'
import { errosAbertos } from '@/lib/engine/scheduler'

type Etapa = 0 | 1 | 2 | 3 | 4 | 5 | 6

const ETAPAS: { titulo: string; descricao: string }[] = [
  { titulo: 'Conceitos essenciais', descricao: 'O núcleo de cada tema, em uma frase.' },
  { titulo: 'Números para lembrar', descricao: 'Limites, prazos e percentuais que caem.' },
  { titulo: 'Comparações', descricao: 'Os pares que a banca costuma trocar.' },
  { titulo: 'Pegadinhas', descricao: 'Onde a maioria erra.' },
  { titulo: 'Mapas mentais', descricao: 'Só o essencial da estrutura.' },
  { titulo: 'Questões dos seus erros', descricao: 'O que você errou e ainda não superou.' },
  { titulo: 'Simulado final', descricao: 'Última medição antes da prova.' },
]

/** Extrai os pontos-chave que contêm número — as regras decoráveis. */
function numerosDecoraveis() {
  return CONCEITOS.flatMap((c) =>
    c.pontosChave
      .filter((p) => /\d/.test(p))
      .map((ponto) => ({ conceitoId: c.id, titulo: c.titulo, ponto })),
  )
}

export default function Vespera() {
  const estado = useStore()
  const [ativo, setAtivo] = useState(false)
  const [etapa, setEtapa] = useState<Etapa>(0)
  const [emSessao, setEmSessao] = useState(false)
  const diasProva = diasParaProva(estado.metas)

  const essenciais = useMemo(
    () => CONCEITOS.filter((c) => c.etiquetas.includes('ESSENCIAL')),
    [],
  )
  const pegadinhas = useMemo(
    () => CONCEITOS.filter((c) => c.etiquetas.includes('PEGADINHA')),
    [],
  )
  const comparacoes = useMemo(() => CONCEITOS.filter((c) => c.tabela), [])
  const numeros = useMemo(numerosDecoraveis, [])
  const erros = useMemo(() => errosAbertos(estado.estados), [estado.estados])

  const plano = useMemo(() => {
    const agora = Date.now()
    return montarVespera({
      minutos: 20,
      estados: estado.estados,
      agora,
      recentes: new Set(),
      jaVistas: new Set(),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ativo])

  if (emSessao) {
    return (
      <SessaoEstudo
        passos={plano.passos}
        origem="vespera"
        titulo="Questões dos seus erros"
        justificativa={plano.justificativa}
        aoSair="/vespera"
      />
    )
  }

  /* ---------------- Tela de entrada ---------------- */
  if (!ativo) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-warn">
          Modo véspera
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight">Tenho prova amanhã</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          A experiência muda por completo: nada de conteúdo longo. Só o que dá para revisar em
          uma sentada — conceitos essenciais, números decoráveis, comparações, pegadinhas, mapas
          resumidos, seus erros e um simulado final.
        </p>

        {diasProva !== null && (
          <Card className="mt-6 border-warn/40 bg-warn-soft">
            <p className="font-bold text-warn">
              {diasProva > 1
                ? `Faltam ${diasProva} dias`
                : diasProva === 1
                  ? 'A prova é amanhã'
                  : diasProva === 0
                    ? 'A prova é hoje'
                    : 'A data da prova já passou'}
            </p>
          </Card>
        )}

        <Button bloco tamanho="lg" className="mt-6" onClick={() => setAtivo(true)}>
          Iniciar revisão expressa
        </Button>
        <Link to="/" className="mt-3 text-center text-sm text-muted hover:text-ink">
          Voltar ao início
        </Link>
      </div>
    )
  }

  /* ---------------- Revisão expressa ---------------- */
  return (
    <div>
      <Cabecalho
        titulo="Revisão expressa"
        descricao={ETAPAS[etapa].descricao}
        acao={
          <button
            type="button"
            onClick={() => setAtivo(false)}
            className="text-xs text-muted hover:text-ink"
          >
            sair
          </button>
        }
      />

      {/* Navegação por etapa */}
      <div className="no-scrollbar -mx-4 mb-5 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        {ETAPAS.map((e, i) => (
          <button
            key={e.titulo}
            type="button"
            onClick={() => setEtapa(i as Etapa)}
            aria-pressed={etapa === i}
            className={`shrink-0 rounded-lg border px-3 py-1.5 text-[13px] transition-colors ${
              etapa === i
                ? 'border-warn bg-warn-soft font-semibold text-warn'
                : 'border-line bg-surface text-ink-2 hover:border-warn/40'
            }`}
          >
            <span className="tnum mr-1.5 text-[11px] opacity-60">{i + 1}</span>
            {e.titulo}
          </button>
        ))}
      </div>

      {etapa === 0 && (
        <ul className="flex flex-col gap-2.5">
          {essenciais.map((c) => (
            <li key={c.id}>
              <Card>
                <p className="text-[11px] uppercase tracking-wider text-muted">{c.titulo}</p>
                <p className="mt-1.5 text-[15px] font-semibold leading-relaxed">
                  {c.conceitoChave}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      )}

      {etapa === 1 && (
        <ul className="flex flex-col gap-2">
          {numeros.map((n, i) => (
            <li key={i}>
              <Link to={`/conteudo/${n.conceitoId}`} className="card card-hover block p-3.5">
                <p className="text-[11px] uppercase tracking-wider text-muted">{n.titulo}</p>
                <p className="tnum mt-1 text-[15px] font-medium">{n.ponto}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {etapa === 2 && (
        <div className="flex flex-col gap-4">
          {comparacoes.map((c) => (
            <Card key={c.id}>
              <p className="mb-3 font-bold">{c.tabela!.titulo}</p>
              <div className="overflow-x-auto rounded-xl border border-line">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-elevated">
                      {c.tabela!.colunas.map((col) => (
                        <th
                          key={col}
                          className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wider text-muted"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.tabela!.linhas.map((linha, i) => (
                      <tr key={i} className="border-t border-line">
                        {linha.map((celula, j) => (
                          <td
                            key={j}
                            className={`px-3 py-2 align-top ${j === 0 ? 'font-medium' : 'text-ink-2'}`}
                          >
                            {celula}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          ))}
        </div>
      )}

      {etapa === 3 && (
        <ul className="flex flex-col gap-2.5">
          {pegadinhas.map((c) => (
            <li key={c.id}>
              <Card className="border-danger/30">
                <div className="mb-2 flex flex-wrap gap-1.5">
                  <EtiquetaBadge etiqueta="PEGADINHA" />
                </div>
                <p className="text-[11px] uppercase tracking-wider text-muted">{c.titulo}</p>
                <p className="mt-1.5 text-[15px] leading-relaxed">{c.erroComum}</p>
                {c.alertaProva && (
                  <p className="mt-2 border-l-2 border-warn pl-3 text-[14px] leading-relaxed text-warn">
                    {c.alertaProva}
                  </p>
                )}
              </Card>
            </li>
          ))}
        </ul>
      )}

      {etapa === 4 && (
        <div className="flex flex-col gap-4">
          {essenciais.map((c) => (
            <Card key={c.id}>
              <p className="mb-3 text-[11px] uppercase tracking-wider text-muted">{c.titulo}</p>
              <MapaMental raiz={c.mapaMental} modoRevisao />
            </Card>
          ))}
        </div>
      )}

      {etapa === 5 && (
        <>
          {erros.length === 0 ? (
            <Card>
              <p className="font-semibold text-aqua">Nenhum erro em aberto</p>
              <p className="mt-1 text-sm text-muted">
                Você não tem erros pendentes. Vá direto para o simulado final.
              </p>
            </Card>
          ) : (
            <>
              <Card className="mb-4 border-warn/40 bg-warn-soft">
                <p className="font-bold text-warn">
                  {erros.length} {erros.length === 1 ? 'conceito' : 'conceitos'} com erro em aberto
                </p>
                <p className="mt-1 text-sm text-ink-2">
                  {plano.passos.length} questões montadas a partir deles.
                </p>
                <Button
                  className="mt-4"
                  bloco
                  onClick={() => setEmSessao(true)}
                  disabled={!plano.passos.length}
                >
                  Revisar agora
                </Button>
              </Card>
              <ul className="flex flex-col gap-2">
                {erros.map((e) => (
                  <li key={e.conceitoId}>
                    <Card to={`/conteudo/${e.conceitoId}`}>
                      <p className="font-semibold">{getConceito(e.conceitoId)?.titulo}</p>
                    </Card>
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}

      {etapa === 6 && (
        <Card className="border-aqua/40 bg-aqua/10">
          <p className="font-bold text-aqua">Simulado final</p>
          <p className="mt-1 text-[15px] leading-relaxed text-ink-2">
            Última medição. Faça em silêncio, cronometrado, sem consultar nada — a ideia é
            reproduzir a condição da prova, não conferir a resposta.
          </p>
          <ButtonLink to="/simulado/completo" bloco className="mt-4">
            Iniciar simulado completo
          </ButtonLink>
          <ButtonLink to="/simulado/rapido" variante="secundaria" bloco className="mt-2.5">
            Prefiro o simulado rápido
          </ButtonLink>
        </Card>
      )}

      <div className="mt-8 flex justify-between gap-3">
        <Button
          variante="fantasma"
          disabled={etapa === 0}
          onClick={() => setEtapa((e) => Math.max(0, e - 1) as Etapa)}
        >
          ← Anterior
        </Button>
        <Button
          variante={etapa === ETAPAS.length - 1 ? 'fantasma' : 'primaria'}
          disabled={etapa === ETAPAS.length - 1}
          onClick={() => setEtapa((e) => Math.min(ETAPAS.length - 1, e + 1) as Etapa)}
        >
          Próxima etapa →
        </Button>
      </div>
    </div>
  )
}
