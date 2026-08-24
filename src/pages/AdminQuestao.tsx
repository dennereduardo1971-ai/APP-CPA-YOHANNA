import { useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Card, Secao } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Vazio } from '@/components/ui/Empty'
import { AreaTexto, Campo, ListaLinhas, Selecao } from '@/components/ui/Campo'
import { AdminShell } from '@/components/domain/AdminShell'
import { CONCEITOS, getConceito, getMicrotema } from '@/lib/content'
import { getQuestao, ROTULO_DIFICULDADE, ROTULO_TIPO } from '@/lib/questions'
import { useStore } from '@/lib/store'
import type { Alternativa, Dificuldade, Questao, QuestionKind } from '@/lib/types'

/**
 * Editor de questão.
 *
 * A alternativa correta é escolhida num seletor único, não em caixas
 * independentes: o modelo permite marcar duas como corretas e a auditoria
 * acusa isso como defeito — melhor a interface não deixar acontecer.
 */

const TIPOS = Object.keys(ROTULO_TIPO) as QuestionKind[]
const DIFICULDADES = Object.keys(ROTULO_DIFICULDADE) as Dificuldade[]

/** Dificuldade latente sugerida por faixa, para não deixar `b` em branco. */
const B_SUGERIDO: Record<Dificuldade, number> = { facil: -0.8, media: 0, dificil: 0.9 }

function questaoEmBranco(conceitoId: string): Questao {
  const conceito = getConceito(conceitoId)
  const micro = getMicrotema(conceito?.microtemaId ?? '')
  return {
    id: `q-${Math.random().toString(36).slice(2, 9)}`,
    macrotemaId: micro?.macrotemaId ?? '',
    microtemaId: conceito?.microtemaId ?? '',
    conceitoId,
    tipo: 'multipla_escolha',
    dificuldade: 'media',
    habilidade: '',
    enunciado: '',
    alternativas: [
      { id: 'a', texto: '', correta: true, justificativa: '' },
      { id: 'b', texto: '', correta: false, justificativa: '' },
      { id: 'c', texto: '', correta: false, justificativa: '' },
      { id: 'd', texto: '', correta: false, justificativa: '' },
    ],
    explicacao: '',
    tags: [],
    b: B_SUGERIDO.media,
    origem: 'autoral',
  }
}

export default function AdminQuestao() {
  const { questaoId = '' } = useParams()
  const [params] = useSearchParams()
  const navegar = useNavigate()

  const criarQuestao = useStore((s) => s.criarQuestao)
  const editarQuestao = useStore((s) => s.editarQuestao)
  const removerItem = useStore((s) => s.removerItem)
  const reverterItem = useStore((s) => s.reverterItem)
  const editadoLocalmente = useStore((s) => Boolean(s.overlay.questoes[questaoId]))

  const criando = questaoId === 'nova'
  const [rascunho, setRascunho] = useState<Questao | null>(
    criando
      ? questaoEmBranco(params.get('conceito') ?? CONCEITOS[0]?.id ?? '')
      : (getQuestao(questaoId) ?? null),
  )
  const [salvo, setSalvo] = useState(false)
  const [confirmar, setConfirmar] = useState(false)

  if (!rascunho) {
    return (
      <AdminShell titulo="Questão não encontrada">
        <Vazio
          icone="questao"
          titulo="Esta questão não existe"
          descricao="Ela pode ter sido apagada, ou saiu do banco junto com o conceito dela."
          acao={<Button onClick={() => navegar('/admin/questoes')}>Voltar à lista</Button>}
        />
      </AdminShell>
    )
  }

  const q = rascunho
  const mudar = (parcial: Partial<Questao>) => {
    setRascunho({ ...q, ...parcial })
    setSalvo(false)
  }

  const mudarAlternativa = (indice: number, parcial: Partial<Alternativa>) =>
    mudar({
      alternativas: q.alternativas.map((alt, i) => (i === indice ? { ...alt, ...parcial } : alt)),
    })

  /** Trocar o conceito reancora macrotema e microtema — eles não são digitados. */
  function trocarConceito(conceitoId: string) {
    const micro = getMicrotema(getConceito(conceitoId)?.microtemaId ?? '')
    mudar({
      conceitoId,
      microtemaId: micro?.id ?? '',
      macrotemaId: micro?.macrotemaId ?? '',
    })
  }

  function salvar() {
    if (criando) {
      criarQuestao(q)
      navegar(`/admin/questao/${q.id}`, { replace: true })
    } else {
      const { id: _id, ...campos } = q
      editarQuestao(q.id, campos)
    }
    setSalvo(true)
  }

  const indiceCorreta = q.alternativas.findIndex((a) => a.correta)

  return (
    <AdminShell
      titulo={criando ? 'Nova questão' : 'Editar questão'}
      descricao={criando ? 'Toda questão é autoral (regra 5).' : q.id}
      acao={
        <Button tamanho="sm" onClick={salvar}>
          {salvo ? 'Salva' : 'Salvar'}
        </Button>
      }
    >
      <Secao titulo="Enquadramento">
        <Card>
          <Selecao
            rotulo="Conceito"
            dica="Define também o microtema e o macrotema da questão."
            valor={q.conceitoId}
            opcoes={CONCEITOS.map((c) => ({ valor: c.id, rotulo: c.titulo }))}
            onChange={trocarConceito}
          />
          <Selecao
            rotulo="Tipo"
            valor={q.tipo}
            opcoes={TIPOS.map((t) => ({ valor: t, rotulo: ROTULO_TIPO[t] }))}
            onChange={(v) => mudar({ tipo: v })}
          />
          <Selecao
            rotulo="Dificuldade"
            valor={q.dificuldade}
            opcoes={DIFICULDADES.map((d) => ({ valor: d, rotulo: ROTULO_DIFICULDADE[d] }))}
            onChange={(v) => mudar({ dificuldade: v, b: B_SUGERIDO[v] })}
          />
          <Campo
            rotulo="Dificuldade latente (b)"
            dica="Escala logit usada pelo motor adaptativo. Negativo é mais fácil; positivo, mais difícil."
            tipo="number"
            valor={String(q.b)}
            onChange={(v) => mudar({ b: Number(v) || 0 })}
          />
          <Campo
            rotulo="Habilidade avaliada"
            dica="Verbo + objeto, ex.: 'identificar o órgão responsável'."
            valor={q.habilidade}
            onChange={(v) => mudar({ habilidade: v })}
          />
          <ListaLinhas rotulo="Tags" valor={q.tags} onChange={(v) => mudar({ tags: v })} linhas={3} />
        </Card>
      </Secao>

      <Secao titulo="Enunciado">
        <Card>
          <AreaTexto
            rotulo="Contexto"
            dica="Opcional — usado em situação prática e case."
            valor={q.contexto ?? ''}
            onChange={(v) => mudar({ contexto: v })}
            linhas={3}
          />
          <AreaTexto
            rotulo="Pergunta"
            valor={q.enunciado}
            onChange={(v) => mudar({ enunciado: v })}
            linhas={4}
          />
        </Card>
      </Secao>

      <Secao
        titulo="Alternativas"
        descricao="Toda alternativa precisa de justificativa — inclusive as erradas."
      >
        <Card>
          <Selecao
            rotulo="Gabarito"
            valor={String(Math.max(0, indiceCorreta))}
            opcoes={q.alternativas.map((alt, i) => ({
              valor: String(i),
              rotulo: `${alt.id.toUpperCase()}. ${alt.texto.slice(0, 38) || '(vazia)'}`,
            }))}
            onChange={(v) =>
              mudar({
                alternativas: q.alternativas.map((alt, i) => ({ ...alt, correta: i === Number(v) })),
              })
            }
          />

          <ul className="flex flex-col gap-3">
            {q.alternativas.map((alt, i) => (
              <li
                key={alt.id}
                className={`rounded-xl border p-3 ${
                  alt.correta ? 'border-jade/40 bg-jade/5' : 'border-line bg-bg'
                }`}
              >
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted">
                    Alternativa {alt.id}
                    {alt.correta && <span className="ml-2 text-jade">correta</span>}
                  </span>
                  {q.alternativas.length > 2 && (
                    <button
                      type="button"
                      onClick={() =>
                        mudar({ alternativas: q.alternativas.filter((_, j) => j !== i) })
                      }
                      className="text-xs font-semibold text-danger"
                    >
                      Remover
                    </button>
                  )}
                </div>
                <AreaTexto
                  rotulo="Texto"
                  valor={alt.texto}
                  onChange={(v) => mudarAlternativa(i, { texto: v })}
                  linhas={2}
                />
                <AreaTexto
                  rotulo="Justificativa"
                  valor={alt.justificativa}
                  onChange={(v) => mudarAlternativa(i, { justificativa: v })}
                  linhas={2}
                />
              </li>
            ))}
          </ul>

          <Button
            tamanho="sm"
            variante="secundaria"
            bloco
            className="mt-3"
            onClick={() =>
              mudar({
                alternativas: [
                  ...q.alternativas,
                  {
                    id: String.fromCharCode(97 + q.alternativas.length),
                    texto: '',
                    correta: false,
                    justificativa: '',
                  },
                ],
              })
            }
          >
            Adicionar alternativa
          </Button>
        </Card>
      </Secao>

      <Secao titulo="Explicação da resposta">
        <Card>
          <AreaTexto
            rotulo="Por que a correta é correta"
            valor={q.explicacao}
            onChange={(v) => mudar({ explicacao: v })}
            linhas={5}
          />
        </Card>
      </Secao>

      <Card className="mb-6">
        <Button bloco onClick={salvar}>
          {salvo ? 'Salva' : 'Salvar alterações'}
        </Button>

        {!criando && (
          <div className="mt-3 flex flex-wrap gap-2">
            {editadoLocalmente && (
              <Button
                tamanho="sm"
                variante="secundaria"
                onClick={() => {
                  reverterItem('questao', q.id)
                  navegar('/admin/questoes')
                }}
              >
                Desfazer edições locais
              </Button>
            )}
            {confirmar ? (
              <Button
                tamanho="sm"
                variante="perigo"
                onClick={() => {
                  removerItem('questao', q.id)
                  navegar('/admin/questoes')
                }}
              >
                Apagar mesmo
              </Button>
            ) : (
              <Button tamanho="sm" variante="perigo" onClick={() => setConfirmar(true)}>
                Apagar questão
              </Button>
            )}
          </div>
        )}
      </Card>
    </AdminShell>
  )
}
