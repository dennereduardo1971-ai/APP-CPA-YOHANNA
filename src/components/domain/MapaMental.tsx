import { useMemo, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import type { MapaMentalNode } from '@/lib/types'
import { Icone } from '@/components/ui/Icone'

/**
 * Mapa mental navegável.
 *
 * Estrutura em árvore com linhas de ligação, em vez de grafo livre: lê bem
 * em tela de celular, não exige biblioteca de layout e mantém a hierarquia
 * dos conceitos explícita.
 *
 * A hierarquia é desenhada com traço e recuo — informação que só existe para
 * quem enxerga. Por isso a árvore também é declarada em ARIA (`tree`,
 * `treeitem`, `aria-level`, `aria-expanded`): assim um leitor de tela anuncia
 * "nível 2, item 3 de 5, recolhido", que é exatamente o que o desenho diz.
 *
 * O teclado segue o padrão de árvore, não o de lista de botões: as setas
 * ↑↓ andam pelos nós visíveis, → abre (ou desce), ← fecha (ou sobe) e só o nó
 * em foco fica no Tab. Sem isso, um mapa aberto com 40 nós custaria 40 Tabs
 * para atravessar.
 */

interface Props {
  raiz: MapaMentalNode
  /** Mostra apenas os nós marcados como essenciais para revisão. */
  modoRevisao?: boolean
}

function coletarIds(no: MapaMentalNode, ate = 1, nivel = 0, saida = new Set<string>()) {
  if (nivel < ate) saida.add(no.id)
  no.filhos?.forEach((f) => coletarIds(f, ate, nivel + 1, saida))
  return saida
}

function filtrarRevisao(no: MapaMentalNode): MapaMentalNode | null {
  const filhos = (no.filhos ?? []).map(filtrarRevisao).filter(Boolean) as MapaMentalNode[]
  if (!no.revisao && !filhos.length) return null
  return { ...no, filhos: filhos.length ? filhos : undefined }
}

/** Mapa filho -> pai, para a seta ← subir um nível. */
function mapearPais(no: MapaMentalNode, pai: string | null = null, saida: Record<string, string | null> = {}) {
  saida[no.id] = pai
  no.filhos?.forEach((f) => mapearPais(f, no.id, saida))
  return saida
}

/**
 * Nós que estão na tela agora, na ordem em que aparecem. É esta lista — não a
 * árvore — que as setas ↑↓ percorrem: um nó dentro de um ramo fechado não
 * existe para o teclado, do mesmo jeito que não existe para os olhos.
 */
function nosVisiveis(no: MapaMentalNode, abertos: Set<string>, saida: MapaMentalNode[] = []) {
  saida.push(no)
  if (abertos.has(no.id)) no.filhos?.forEach((f) => nosVisiveis(f, abertos, saida))
  return saida
}

export function MapaMental({ raiz, modoRevisao = false }: Props) {
  const arvore = useMemo(
    () => (modoRevisao ? (filtrarRevisao(raiz) ?? raiz) : raiz),
    [raiz, modoRevisao],
  )
  const [abertos, setAbertos] = useState<Set<string>>(() => coletarIds(arvore, 2))
  const [destaque, setDestaque] = useState<string | null>(null)
  const [foco, setFoco] = useState<string>(arvore.id)
  const botoes = useRef<Record<string, HTMLButtonElement | null>>({})

  const pais = useMemo(() => mapearPais(arvore), [arvore])
  const visiveis = useMemo(() => nosVisiveis(arvore, abertos), [arvore, abertos])

  /*
   * Recolher um ramo — ou entrar no modo revisão — pode esconder o nó que
   * guardava o tabindex 0. Se isso acontecesse sem tratamento, a árvore
   * inteira sairia da ordem de Tab e viraria conteúdo inalcançável pelo
   * teclado. O foco volta então para a raiz.
   */
  const focoEfetivo = visiveis.some((v) => v.id === foco) ? foco : arvore.id

  function alternar(id: string) {
    setAbertos((s) => {
      const novo = new Set(s)
      if (novo.has(id)) novo.delete(id)
      else novo.add(id)
      return novo
    })
  }

  function irPara(id: string | null | undefined) {
    if (!id) return
    setFoco(id)
    botoes.current[id]?.focus()
  }

  function navegar(e: KeyboardEvent<HTMLButtonElement>, no: MapaMentalNode) {
    const i = visiveis.findIndex((v) => v.id === no.id)
    const temFilhos = !!no.filhos?.length
    const aberto = abertos.has(no.id)

    switch (e.key) {
      case 'ArrowDown':
        irPara(visiveis[i + 1]?.id)
        break
      case 'ArrowUp':
        irPara(visiveis[i - 1]?.id)
        break
      case 'ArrowRight':
        if (temFilhos && !aberto) alternar(no.id)
        else if (temFilhos) irPara(no.filhos![0].id)
        else return
        break
      case 'ArrowLeft':
        if (temFilhos && aberto) alternar(no.id)
        else irPara(pais[no.id])
        break
      case 'Home':
        irPara(visiveis[0]?.id)
        break
      case 'End':
        irPara(visiveis[visiveis.length - 1]?.id)
        break
      default:
        return
    }
    e.preventDefault()
  }

  const todosIds = useMemo(() => coletarIds(arvore, 99), [arvore])
  const tudoAberto = abertos.size >= todosIds.size

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          aria-expanded={tudoAberto}
          onClick={() => setAbertos(tudoAberto ? coletarIds(arvore, 1) : new Set(todosIds))}
          className="rounded-lg border border-line bg-surface px-3 py-1.5 text-[13px] text-ink-2 transition-colors hover:border-aurora/40 hover:text-ink"
        >
          {tudoAberto ? 'Recolher tudo' : 'Expandir tudo'}
        </button>
        {destaque && (
          <button
            type="button"
            onClick={() => setDestaque(null)}
            className="rounded-lg border border-aurora/40 bg-aurora-soft px-3 py-1.5 text-[13px] text-aurora"
          >
            Limpar destaque
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[280px]">
          <div role="tree" aria-label="Mapa mental do conceito">
            <No
              no={arvore}
              nivel={0}
              posicao={1}
              irmaos={1}
              abertos={abertos}
              alternar={alternar}
              destaque={destaque}
              setDestaque={setDestaque}
              foco={focoEfetivo}
              setFoco={setFoco}
              navegar={navegar}
              botoes={botoes}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface NoProps {
  no: MapaMentalNode
  nivel: number
  posicao: number
  irmaos: number
  abertos: Set<string>
  alternar: (id: string) => void
  destaque: string | null
  setDestaque: (id: string | null) => void
  foco: string
  setFoco: (id: string) => void
  navegar: (e: KeyboardEvent<HTMLButtonElement>, no: MapaMentalNode) => void
  botoes: React.MutableRefObject<Record<string, HTMLButtonElement | null>>
}

function No({
  no,
  nivel,
  posicao,
  irmaos,
  abertos,
  alternar,
  destaque,
  setDestaque,
  foco,
  setFoco,
  navegar,
  botoes,
}: NoProps) {
  const temFilhos = !!no.filhos?.length
  const aberto = abertos.has(no.id)
  const emDestaque = destaque === no.id

  const estilos = [
    'border-aurora/60 bg-aurora/12 text-ink font-bold',
    'border-line bg-elevated text-ink font-semibold',
    'border-line bg-surface text-ink-2',
  ]
  const estilo = estilos[Math.min(nivel, estilos.length - 1)]

  return (
    <div className={nivel > 0 ? 'relative pl-5' : ''} role="none">
      {nivel > 0 && (
        <span aria-hidden className="absolute bottom-3 left-0 top-0 w-px bg-line" />
      )}
      {nivel > 0 && <span aria-hidden className="absolute left-0 top-5 h-px w-4 bg-line" />}

      <div role="none" className="flex items-start gap-2 py-1">
        <button
          ref={(el) => {
            botoes.current[no.id] = el
          }}
          type="button"
          role="treeitem"
          aria-level={nivel + 1}
          aria-posinset={posicao}
          aria-setsize={irmaos}
          aria-expanded={temFilhos ? aberto : undefined}
          aria-selected={emDestaque}
          tabIndex={foco === no.id ? 0 : -1}
          onFocus={() => setFoco(no.id)}
          onKeyDown={(e) => navegar(e, no)}
          onClick={() => {
            setDestaque(emDestaque ? null : no.id)
            if (temFilhos) alternar(no.id)
          }}
          /*
           * Destacar um nó apaga os outros — mas apagar não pode chegar a
           * ilegível. A 45% de opacidade o rótulo caía para 2.9:1; a 65% fica
           * em 4.8:1 no pior par (ink-2 sobre surface) e o efeito continua
           * lendo como "estes aqui saíram de foco". O que compensa a diferença
           * é o anel do nó escolhido, agora sólido em vez de meia tinta.
           */
          className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm transition-all ${estilo} ${
            emDestaque ? 'ring-2 ring-aurora' : ''
          } ${destaque && !emDestaque ? 'opacity-65' : ''}`}
        >
          {temFilhos && (
            <span
              aria-hidden
              className={`text-muted transition-transform ${aberto ? 'rotate-90' : ''}`}
            >
              <Icone nome="chevron" tamanho={11} />
            </span>
          )}
          <span>{no.rotulo}</span>
          {/*
            O ponto marca "essencial para revisão". Um `aria-label` num `span`
            não é exposto por leitor de tela nenhum — o texto precisa existir.
          */}
          {no.revisao && (
            <>
              <span aria-hidden className="ml-1 h-1.5 w-1.5 shrink-0 rounded-full bg-aurora" />
              <span className="sr-only">essencial para revisão</span>
            </>
          )}
        </button>
      </div>

      {emDestaque && no.detalhe && (
        <p className="mb-2 ml-3 max-w-md text-[13px] leading-relaxed text-muted">{no.detalhe}</p>
      )}

      {temFilhos && aberto && (
        <div role="group">
          {no.filhos!.map((filho, i) => (
            <No
              key={filho.id}
              no={filho}
              nivel={nivel + 1}
              posicao={i + 1}
              irmaos={no.filhos!.length}
              abertos={abertos}
              alternar={alternar}
              destaque={destaque}
              setDestaque={setDestaque}
              foco={foco}
              setFoco={setFoco}
              navegar={navegar}
              botoes={botoes}
            />
          ))}
        </div>
      )}
    </div>
  )
}
