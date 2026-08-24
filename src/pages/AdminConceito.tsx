import { useMemo, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Card, Secao } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Vazio } from '@/components/ui/Empty'
import { AreaTexto, Campo, ListaLinhas, Selecao } from '@/components/ui/Campo'
import { AdminShell } from '@/components/domain/AdminShell'
import { getConceito, MICROTEMAS } from '@/lib/content'
import { useStore } from '@/lib/store'
import type { Conceito, Etiqueta, MapaMentalNode } from '@/lib/types'

/**
 * Editor de aula.
 *
 * O rascunho vive em estado local e só vai para o store ao salvar. Não é
 * economia de render: `editarConceito` carimba `versao` e `atualizadoEm` a
 * cada chamada, e gravar a cada tecla digitada faria o conceito chegar à
 * versão 400 depois de um parágrafo.
 */

const ETIQUETAS: Etiqueta[] = ['ESSENCIAL', 'ATENCAO', 'DECORAR', 'ENTENDER', 'PEGADINHA']

function conceitoEmBranco(microtemaId: string): Conceito {
  return {
    id: `c-${Math.random().toString(36).slice(2, 9)}`,
    microtemaId,
    titulo: 'Nova aula',
    objetivo: '',
    etiquetas: ['ENTENDER'],
    resumo30s: '',
    explicacao: {
      oQueE: '',
      porQueImporta: '',
      paraQueServe: '',
      comoFunciona: [],
      exemploSimples: '',
      exemploAplicado: '',
      lembrarNaProva: [],
      revisaoRapida: [],
    },
    exemplos: [],
    conceitoChave: '',
    pontosChave: [],
    erroComum: '',
    perguntaRapida: { enunciado: '', alternativas: ['', ''], correta: 0, explicacao: '' },
    mapaMental: { id: 'raiz', rotulo: 'Nova aula', filhos: [] },
    reexplicacoes: { simples: '', exemplo: '', analogia: '', iniciante: '' },
    niveis: { entenda: '', aprofunde: '' },
    minutosEstimados: 6,
  }
}

/**
 * Editor do mapa mental — raiz e um nível de ramos.
 *
 * O tipo permite profundidade arbitrária, mas os mapas do conteúdo têm dois
 * níveis e um editor de árvore genérico em tela de celular é pior do que
 * útil. Ramos mais fundos que existirem são PRESERVADOS: só os rótulos do
 * primeiro nível são editáveis aqui.
 */
function EditorMapa({
  mapa,
  onChange,
}: {
  mapa: MapaMentalNode
  onChange: (m: MapaMentalNode) => void
}) {
  const filhos = mapa.filhos ?? []

  return (
    <>
      <Campo
        rotulo="Nó central"
        valor={mapa.rotulo}
        onChange={(v) => onChange({ ...mapa, rotulo: v })}
      />
      <ListaLinhas
        rotulo="Ramos"
        dica="Um ramo por linha. Apagar uma linha remove o ramo e o que estiver abaixo dele."
        valor={filhos.map((f) => f.rotulo)}
        onChange={(rotulos) =>
          onChange({
            ...mapa,
            filhos: rotulos.map((rotulo, i) => ({
              // Reaproveita o nó existente na mesma posição para não perder
              // `detalhe`, `revisao` e os filhos dele ao renomear.
              ...(filhos[i] ?? { id: `n${i + 1}` }),
              rotulo,
            })),
          })
        }
      />
    </>
  )
}

export default function AdminConceito() {
  const { conceitoId = '' } = useParams()
  const [params] = useSearchParams()
  const navegar = useNavigate()

  const criarConceito = useStore((s) => s.criarConceito)
  const editarConceito = useStore((s) => s.editarConceito)
  const removerItem = useStore((s) => s.removerItem)
  const reverterItem = useStore((s) => s.reverterItem)
  const overlay = useStore((s) => s.overlay)

  const criando = conceitoId === 'novo'
  const original = criando ? undefined : getConceito(conceitoId)

  const [rascunho, setRascunho] = useState<Conceito | null>(
    criando ? conceitoEmBranco(params.get('micro') ?? MICROTEMAS[0]?.id ?? '') : (original ?? null),
  )
  const [salvo, setSalvo] = useState(false)
  const [confirmar, setConfirmar] = useState(false)

  const editadoLocalmente = Boolean(overlay.conceitos[conceitoId])
  const criadoLocalmente = useMemo(
    () => overlay.criados.conceitos.some((c) => c.id === conceitoId),
    [overlay, conceitoId],
  )

  if (!rascunho) {
    return (
      <AdminShell titulo="Aula não encontrada">
        <Vazio
          icone="livro"
          titulo="Esta aula não existe"
          descricao="Ela pode ter sido apagada no painel."
          acao={<Button onClick={() => navegar('/admin/conceitos')}>Voltar à lista</Button>}
        />
      </AdminShell>
    )
  }

  const c = rascunho
  const mudar = (parcial: Partial<Conceito>) => {
    setRascunho({ ...c, ...parcial })
    setSalvo(false)
  }
  const mudarExplicacao = (parcial: Partial<Conceito['explicacao']>) =>
    mudar({ explicacao: { ...c.explicacao, ...parcial } })
  const mudarNiveis = (parcial: Partial<NonNullable<Conceito['niveis']>>) =>
    mudar({ niveis: { entenda: '', aprofunde: '', ...c.niveis, ...parcial } })
  const mudarPergunta = (parcial: Partial<Conceito['perguntaRapida']>) =>
    mudar({ perguntaRapida: { ...c.perguntaRapida, ...parcial } })
  const mudarReexplicacoes = (parcial: Partial<Conceito['reexplicacoes']>) =>
    mudar({ reexplicacoes: { ...c.reexplicacoes, ...parcial } })

  function salvar() {
    if (criando) {
      criarConceito(c)
      navegar(`/admin/conceito/${c.id}`, { replace: true })
    } else {
      const { id: _id, ...campos } = c
      editarConceito(c.id, campos)
    }
    setSalvo(true)
  }

  return (
    <AdminShell
      titulo={criando ? 'Nova aula' : 'Editar aula'}
      descricao={
        criando
          ? 'A aula nasce aqui e vale só neste aparelho até você exportá-la.'
          : `${c.id}${c.versao ? ` · versão ${c.versao}` : ''}${c.atualizadoEm ? ` · revisada em ${c.atualizadoEm}` : ''}`
      }
      acao={
        <Button tamanho="sm" onClick={salvar}>
          {salvo ? 'Salvo' : 'Salvar'}
        </Button>
      }
    >
      <Secao titulo="Identificação">
        <Card>
          <Campo rotulo="Título" valor={c.titulo} onChange={(v) => mudar({ titulo: v })} />
          <Selecao
            rotulo="Microtema"
            valor={c.microtemaId}
            opcoes={MICROTEMAS.map((mt) => ({ valor: mt.id, rotulo: `${mt.codigo} · ${mt.nome}` }))}
            onChange={(v) => mudar({ microtemaId: v })}
          />
          <AreaTexto
            rotulo="Objetivo"
            dica="O que o aluno sabe fazer ao terminar."
            valor={c.objetivo}
            onChange={(v) => mudar({ objetivo: v })}
            linhas={2}
          />
          <AreaTexto
            rotulo="Resumo de 30 segundos"
            valor={c.resumo30s}
            onChange={(v) => mudar({ resumo30s: v })}
            linhas={3}
          />
          <Campo
            rotulo="Minutos estimados"
            tipo="number"
            valor={String(c.minutosEstimados)}
            onChange={(v) => mudar({ minutosEstimados: Number(v) || c.minutosEstimados })}
          />

          <p className="mb-1.5 text-sm font-semibold">Etiquetas</p>
          <div className="flex flex-wrap gap-2">
            {ETIQUETAS.map((etiqueta) => {
              const ativa = c.etiquetas.includes(etiqueta)
              return (
                <button
                  key={etiqueta}
                  type="button"
                  onClick={() =>
                    mudar({
                      etiquetas: ativa
                        ? c.etiquetas.filter((e) => e !== etiqueta)
                        : [...c.etiquetas, etiqueta],
                    })
                  }
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    ativa
                      ? 'border-aurora/40 bg-aurora/15 text-aurora'
                      : 'border-line bg-elevated text-ink-2'
                  }`}
                >
                  {etiqueta}
                </button>
              )
            })}
          </div>
        </Card>
      </Secao>

      <Secao
        titulo="Os nove blocos"
        descricao="A ordem é a da regra 6. Bloco vazio aparece como pendência no Panorama."
      >
        <Card>
          <AreaTexto
            rotulo="1. O que é"
            valor={c.explicacao.oQueE}
            onChange={(v) => mudarExplicacao({ oQueE: v })}
          />
          <AreaTexto
            rotulo="2. Por que isso importa"
            valor={c.explicacao.porQueImporta ?? ''}
            onChange={(v) => mudarExplicacao({ porQueImporta: v })}
          />
          <AreaTexto
            rotulo="Para que serve"
            valor={c.explicacao.paraQueServe}
            onChange={(v) => mudarExplicacao({ paraQueServe: v })}
            linhas={3}
          />
          <ListaLinhas
            rotulo="3. Como funciona"
            valor={c.explicacao.comoFunciona}
            onChange={(v) => mudarExplicacao({ comoFunciona: v })}
          />
          <AreaTexto
            rotulo="4. Exemplo simples"
            valor={c.explicacao.exemploSimples}
            onChange={(v) => mudarExplicacao({ exemploSimples: v })}
          />
          <AreaTexto
            rotulo="5. Exemplo aplicado ao mercado"
            valor={c.explicacao.exemploAplicado ?? ''}
            onChange={(v) => mudarExplicacao({ exemploAplicado: v })}
          />
          <ListaLinhas
            rotulo="6. O que lembrar na prova"
            valor={c.explicacao.lembrarNaProva}
            onChange={(v) => mudarExplicacao({ lembrarNaProva: v })}
          />
          <AreaTexto
            rotulo="7. Erro comum"
            valor={c.erroComum}
            onChange={(v) => mudar({ erroComum: v })}
            linhas={3}
          />
          <ListaLinhas
            rotulo="9. Revisão rápida"
            dica="Uma ideia por linha, para a varredura final."
            valor={c.explicacao.revisaoRapida ?? []}
            onChange={(v) => mudarExplicacao({ revisaoRapida: v })}
          />
        </Card>
      </Secao>

      <Secao titulo="8. Miniquestão" descricao="A pergunta rápida ao fim da aula.">
        <Card>
          <AreaTexto
            rotulo="Enunciado"
            valor={c.perguntaRapida.enunciado}
            onChange={(v) => mudarPergunta({ enunciado: v })}
            linhas={3}
          />
          <ListaLinhas
            rotulo="Alternativas"
            valor={c.perguntaRapida.alternativas}
            onChange={(v) => mudarPergunta({ alternativas: v })}
          />
          <Selecao
            rotulo="Alternativa correta"
            valor={String(c.perguntaRapida.correta)}
            opcoes={c.perguntaRapida.alternativas.map((alt, i) => ({
              valor: String(i),
              rotulo: `${i + 1}. ${alt.slice(0, 40) || '(vazia)'}`,
            }))}
            onChange={(v) => mudarPergunta({ correta: Number(v) })}
          />
          <AreaTexto
            rotulo="Explicação"
            valor={c.perguntaRapida.explicacao}
            onChange={(v) => mudarPergunta({ explicacao: v })}
            linhas={3}
          />
        </Card>
      </Secao>

      <Secao
        titulo="Níveis 1 e 3"
        descricao="O nível 2 é a própria explicação acima — não se duplica texto."
      >
        <Card>
          <AreaTexto
            rotulo="Nível 1 — Entenda"
            dica="Uma ou duas frases, linguagem do dia a dia."
            valor={c.niveis?.entenda ?? ''}
            onChange={(v) => mudarNiveis({ entenda: v })}
            linhas={3}
          />
          <AreaTexto
            rotulo="Nível 3 — Aprofunde"
            dica="Detalhe técnico, exceções e conexões com outros conceitos."
            valor={c.niveis?.aprofunde ?? ''}
            onChange={(v) => mudarNiveis({ aprofunde: v })}
            linhas={5}
          />
        </Card>
      </Secao>

      <Secao
        titulo="Explique de outro jeito"
        descricao="Textos pré-autorados. Não há IA em tempo de execução — é o que faz funcionar offline."
      >
        <Card>
          <AreaTexto
            rotulo="Mais simples"
            valor={c.reexplicacoes.simples}
            onChange={(v) => mudarReexplicacoes({ simples: v })}
            linhas={3}
          />
          <AreaTexto
            rotulo="Com exemplo"
            valor={c.reexplicacoes.exemplo}
            onChange={(v) => mudarReexplicacoes({ exemplo: v })}
            linhas={3}
          />
          <AreaTexto
            rotulo="Como analogia"
            valor={c.reexplicacoes.analogia}
            onChange={(v) => mudarReexplicacoes({ analogia: v })}
            linhas={3}
          />
          <AreaTexto
            rotulo="Para iniciante"
            valor={c.reexplicacoes.iniciante}
            onChange={(v) => mudarReexplicacoes({ iniciante: v })}
            linhas={3}
          />
        </Card>
      </Secao>

      <Secao titulo="Pontos-chave e alerta de prova">
        <Card>
          <AreaTexto
            rotulo="Conceito-chave"
            dica="A frase que resume tudo."
            valor={c.conceitoChave}
            onChange={(v) => mudar({ conceitoChave: v })}
            linhas={2}
          />
          <ListaLinhas
            rotulo="Pontos-chave"
            valor={c.pontosChave}
            onChange={(v) => mudar({ pontosChave: v })}
          />
          <AreaTexto
            rotulo="Alerta de prova"
            dica="O que a banca costuma explorar. Opcional."
            valor={c.alertaProva ?? ''}
            onChange={(v) => mudar({ alertaProva: v })}
            linhas={3}
          />
        </Card>
      </Secao>

      <Secao titulo="Mapa mental">
        <Card>
          <EditorMapa mapa={c.mapaMental} onChange={(m) => mudar({ mapaMental: m })} />
        </Card>
      </Secao>

      <Card className="mb-6">
        <Button bloco onClick={salvar}>
          {salvo ? 'Salvo' : 'Salvar alterações'}
        </Button>

        {!criando && (
          <div className="mt-3 flex flex-wrap gap-2">
            {editadoLocalmente && (
              <Button
                tamanho="sm"
                variante="secundaria"
                onClick={() => {
                  reverterItem('conceito', c.id)
                  navegar('/admin/conceitos')
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
                  removerItem('conceito', c.id)
                  navegar('/admin/conceitos')
                }}
              >
                Apagar mesmo
              </Button>
            ) : (
              <Button tamanho="sm" variante="perigo" onClick={() => setConfirmar(true)}>
                Apagar aula
              </Button>
            )}
          </div>
        )}

        {confirmar && (
          <p className="mt-2.5 text-xs leading-relaxed text-danger">
            As questões desta aula saem do banco junto — questão sem conceito não tem como ser
            explicada. {criadoLocalmente ? 'Esta aula foi criada aqui: apagar é definitivo.' : 'Dá para restaurar em Dados.'}
          </p>
        )}
      </Card>
    </AdminShell>
  )
}
