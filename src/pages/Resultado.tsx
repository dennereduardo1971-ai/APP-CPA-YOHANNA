import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, Secao } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { Anel, Barra } from '@/components/ui/Progress'
import { Vazio } from '@/components/ui/Empty'
import { BLUEPRINT, SIMULADO_PRESETS } from '@/lib/blueprint'
import { MACROTEMAS, getConceito } from '@/lib/content'
import { ROTULO_DIFICULDADE, getQuestao } from '@/lib/questions'
import type { Dificuldade } from '@/lib/types'
import { useStore } from '@/lib/store'

export default function Resultado() {
  const { simuladoId } = useParams()
  const simulados = useStore((s) => s.simulados)
  const resultado = simulados.find((s) => s.id === simuladoId)

  const porConceito = useMemo(() => {
    if (!resultado) return []
    const mapa = new Map<string, { total: number; erros: number }>()
    for (const r of resultado.respostas) {
      const atual = mapa.get(r.conceitoId) ?? { total: 0, erros: 0 }
      atual.total += 1
      if (!r.acertou) atual.erros += 1
      mapa.set(r.conceitoId, atual)
    }
    return [...mapa.entries()]
      .filter(([, v]) => v.erros > 0)
      .sort((a, b) => b[1].erros - a[1].erros)
  }, [resultado])

  if (!resultado) {
    return (
      <Vazio
        titulo="Resultado não encontrado"
        descricao="Este simulado pode ter sido removido do histórico."
        acao={<ButtonLink to="/simulados">Voltar aos simulados</ButtonLink>}
      />
    )
  }

  const minutos = Math.round((resultado.fim - resultado.inicio) / 60_000)
  const tempoMedio = Math.round(resultado.tempoMedioMs / 1000)
  const erros = resultado.totalQuestoes - resultado.acertos

  return (
    <div>
      <header className="mb-6 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
          {SIMULADO_PRESETS[resultado.modo].rotulo}
        </p>
        <h1 className="display mt-1 text-3xl">
          {resultado.aprovado ? 'Você atingiu a nota de corte' : 'Ainda não atingiu a nota de corte'}
        </h1>

        <div className="mt-6 flex justify-center">
          <Anel
            valor={resultado.percentual}
            tamanho={140}
            espessura={11}
            tom={resultado.aprovado ? 'jade' : 'danger'}
            sublegenda={`corte ${Math.round(BLUEPRINT.notaCorte * 100)}%`}
          />
        </div>
      </header>

      <Card className="mb-6">
        <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
          <div>
            <p className="tnum text-2xl font-extrabold text-jade">{resultado.acertos}</p>
            <p className="text-[11px] uppercase tracking-wider text-muted">acertos</p>
          </div>
          <div>
            <p className="tnum text-2xl font-extrabold text-danger">{erros}</p>
            <p className="text-[11px] uppercase tracking-wider text-muted">erros</p>
          </div>
          <div>
            <p className="tnum text-2xl font-extrabold">{minutos} min</p>
            <p className="text-[11px] uppercase tracking-wider text-muted">duração</p>
          </div>
          <div>
            <p className="tnum text-2xl font-extrabold">{tempoMedio}s</p>
            <p className="text-[11px] uppercase tracking-wider text-muted">por questão</p>
          </div>
        </div>
      </Card>

      <Secao titulo="Desempenho por tema">
        <ul className="flex flex-col gap-3">
          {MACROTEMAS.map((m) => {
            const dados = resultado.porMacrotema[m.id]
            if (!dados?.total) return null
            const taxa = dados.acertos / dados.total
            return (
              <li key={m.id}>
                <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                  <span className="truncate font-medium">{m.nome}</span>
                  <span className="tnum shrink-0 text-muted">
                    {dados.acertos}/{dados.total} · {Math.round(taxa * 100)}%
                  </span>
                </div>
                <Barra valor={taxa} tom={taxa >= 0.7 ? 'jade' : taxa >= 0.5 ? 'warn' : 'danger'} />
              </li>
            )
          })}
        </ul>
      </Secao>

      <Secao titulo="Desempenho por dificuldade">
        <ul className="flex flex-col gap-3">
          {(['facil', 'media', 'dificil'] as Dificuldade[]).map((d) => {
            const dados = resultado.porDificuldade[d]
            if (!dados.total) return null
            const taxa = dados.acertos / dados.total
            return (
              <li key={d}>
                <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-medium">{ROTULO_DIFICULDADE[d]}</span>
                  <span className="tnum text-muted">
                    {dados.acertos}/{dados.total} · {Math.round(taxa * 100)}%
                  </span>
                </div>
                <Barra valor={taxa} tom={taxa >= 0.7 ? 'jade' : taxa >= 0.5 ? 'warn' : 'danger'} />
              </li>
            )
          })}
        </ul>
      </Secao>

      {porConceito.length > 0 && (
        <Secao
          titulo="O que mais contribuiu para os erros"
          descricao="Conceitos ordenados pelo número de erros neste simulado."
        >
          <ul className="flex flex-col gap-2.5">
            {porConceito.slice(0, 6).map(([conceitoId, dados]) => {
              const conceito = getConceito(conceitoId)
              return (
                <li key={conceitoId}>
                  <Card to={`/conteudo/${conceitoId}`}>
                    <div className="flex items-center justify-between gap-3">
                      <p className="min-w-0 truncate font-semibold">{conceito?.titulo}</p>
                      <span className="tnum shrink-0 rounded-full bg-danger-soft px-2 py-0.5 text-xs font-bold text-danger">
                        {dados.erros}/{dados.total}
                      </span>
                    </div>
                  </Card>
                </li>
              )
            })}
          </ul>
        </Secao>
      )}

      <Secao titulo="Recomendação de revisão">
        <Card className="border-aurora/40 bg-aurora/10">
          <p className="text-[15px] leading-relaxed text-ink-2">
            {resultado.aprovado
              ? 'Bom resultado. Mantenha a revisão espaçada em dia para não perder o que já consolidou, e ataque os temas que ficaram abaixo de 70%.'
              : `Concentre-se nos temas abaixo de 70%. A sessão "Revise seus erros" já está montada com ${erros} ${erros === 1 ? 'conceito' : 'conceitos'} deste simulado.`}
          </p>
          <ButtonLink to="/revisao" bloco className="mt-4">
            Revise seus erros
          </ButtonLink>
        </Card>
      </Secao>

      <Secao titulo="Respostas" descricao="Revise questão por questão.">
        <ul className="flex flex-col gap-2">
          {resultado.respostas.map((r, i) => {
            const questao = getQuestao(r.questaoId)
            if (!questao) return null
            const escolhida = questao.alternativas.find((a) => a.id === r.escolhida)
            return (
              <li key={r.id}>
                <details className="card p-4">
                  <summary className="flex cursor-pointer items-start gap-3 text-sm">
                    <span
                      aria-hidden
                      className={`tnum mt-px grid h-6 w-6 shrink-0 place-items-center rounded-full border text-xs font-bold ${
                        r.acertou
                          ? 'border-aurora bg-aurora-soft text-aurora'
                          : 'border-danger bg-danger-soft text-danger'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="min-w-0 flex-1 font-medium">{questao.enunciado}</span>
                  </summary>
                  <div className="mt-3 border-t border-line pt-3 text-[14px] leading-relaxed">
                    <p className="mb-2">
                      <span className="text-muted">Sua resposta: </span>
                      <span className={r.acertou ? 'text-jade' : 'text-danger'}>
                        {escolhida?.texto ?? 'em branco'}
                      </span>
                    </p>
                    <p className="text-ink-2">{questao.explicacao}</p>
                    <Link
                      to={`/conteudo/${questao.conceitoId}`}
                      className="mt-2 inline-block text-sm font-semibold text-aurora"
                    >
                      Rever a aula
                    </Link>
                  </div>
                </details>
              </li>
            )
          })}
        </ul>
      </Secao>

      <p className="mt-8 text-center text-xs text-muted">
        Indicador pedagógico. Não é garantia de aprovação na prova real.
      </p>
    </div>
  )
}
