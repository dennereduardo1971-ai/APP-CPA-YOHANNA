import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Secao } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AdminShell } from '@/components/domain/AdminShell'
import { useStore } from '@/lib/store'
import { contarAlteracoes } from '@/lib/content/overlay'
import { getConceito, getMacrotema, getMicrotema } from '@/lib/content'
import { getQuestao } from '@/lib/questions'
import type { TipoConteudo } from '@/lib/content/overlay'

/** Baixa um texto como arquivo. O sandbox do app não pede permissão nenhuma. */
function baixar(nome: string, conteudo: string) {
  const url = URL.createObjectURL(new Blob([conteudo], { type: 'application/json' }))
  const a = document.createElement('a')
  a.href = url
  a.download = nome
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

const NOME_TIPO: Record<TipoConteudo, string> = {
  macrotema: 'Módulo',
  microtema: 'Microtema',
  conceito: 'Aula',
  questao: 'Questão',
}

function tituloDoItem(tipo: TipoConteudo, id: string): string {
  if (tipo === 'macrotema') return getMacrotema(id)?.nome ?? id
  if (tipo === 'microtema') return getMicrotema(id)?.nome ?? id
  if (tipo === 'conceito') return getConceito(id)?.titulo ?? id
  return getQuestao(id)?.enunciado.slice(0, 60) ?? id
}

export default function AdminDados() {
  const overlay = useStore((s) => s.overlay)
  const versoes = useStore((s) => s.versoesConteudo)
  const limparOverlay = useStore((s) => s.limparOverlay)
  const reverterItem = useStore((s) => s.reverterItem)
  const importarConteudo = useStore((s) => s.importarConteudo)

  const [mensagem, setMensagem] = useState<string | null>(null)
  const [confirmar, setConfirmar] = useState(false)
  const arquivo = useRef<HTMLInputElement>(null)

  const alteracoes = contarAlteracoes(overlay)

  /** Lista plana do que o overlay mexeu, para revisão antes de exportar. */
  const editados: { tipo: TipoConteudo; id: string; acao: string }[] = [
    ...Object.keys(overlay.macrotemas).map((id) => ({ tipo: 'macrotema' as const, id, acao: 'editado' })),
    ...Object.keys(overlay.microtemas).map((id) => ({ tipo: 'microtema' as const, id, acao: 'editado' })),
    ...Object.keys(overlay.conceitos).map((id) => ({ tipo: 'conceito' as const, id, acao: 'editado' })),
    ...Object.keys(overlay.questoes).map((id) => ({ tipo: 'questao' as const, id, acao: 'editado' })),
    ...overlay.criados.macrotemas.map((m) => ({ tipo: 'macrotema' as const, id: m.id, acao: 'criado' })),
    ...overlay.criados.microtemas.map((m) => ({ tipo: 'microtema' as const, id: m.id, acao: 'criado' })),
    ...overlay.criados.conceitos.map((c) => ({ tipo: 'conceito' as const, id: c.id, acao: 'criado' })),
    ...overlay.criados.questoes.map((q) => ({ tipo: 'questao' as const, id: q.id, acao: 'criado' })),
    ...overlay.removidos.macrotemas.map((id) => ({ tipo: 'macrotema' as const, id, acao: 'removido' })),
    ...overlay.removidos.microtemas.map((id) => ({ tipo: 'microtema' as const, id, acao: 'removido' })),
    ...overlay.removidos.conceitos.map((id) => ({ tipo: 'conceito' as const, id, acao: 'removido' })),
    ...overlay.removidos.questoes.map((id) => ({ tipo: 'questao' as const, id, acao: 'removido' })),
  ]

  function exportarOverlay() {
    baixar(
      `cpa-conteudo-${new Date().toISOString().slice(0, 10)}.json`,
      JSON.stringify({ overlay, versoesConteudo: versoes }, null, 2),
    )
    setMensagem('Arquivo de conteúdo baixado.')
  }

  async function importarOverlay(arq: File) {
    // A escrita passa pelo store, que remonta o conteúdo junto (regra 8).
    setMensagem(
      importarConteudo(await arq.text())
        ? 'Conteúdo importado.'
        : 'Arquivo inválido. Para restaurar progresso de estudo, use Configurações.',
    )
  }

  return (
    <AdminShell titulo="Dados" descricao="As edições locais e como levá-las de volta ao código.">
      <Card className="mb-6">
        <p className="text-sm font-bold">Onde o conteúdo mora de verdade</p>
        <p className="mt-1.5 text-xs leading-relaxed text-ink-2">
          O conteúdo canônico é código, em <code className="text-aurora">src/lib/content/</code>.
          O que você edita neste painel fica só neste aparelho, por cima do código — some se você
          limpar os dados do navegador ou trocar de telefone. É o caminho certo para uma correção
          urgente, não para escrever a matéria inteira: exporte e devolva ao repositório.
        </p>
      </Card>

      <Secao titulo="Edições locais" descricao={`${alteracoes} no total.`}>
        {alteracoes === 0 ? (
          <Card>
            <p className="font-semibold text-jade">Nenhuma edição local</p>
            <p className="mt-1 text-sm text-muted">
              O app está mostrando exatamente o conteúdo do repositório.
            </p>
          </Card>
        ) : (
          <>
            <ul className="mb-3 flex flex-col gap-2">
              {editados.map(({ tipo, id, acao }) => (
                <li key={`${tipo}-${id}-${acao}`}>
                  <div className="card flex items-start justify-between gap-3 p-3">
                    <div className="min-w-0">
                      <p className="truncate text-[11px] uppercase tracking-wider text-muted">
                        {NOME_TIPO[tipo]} · {acao}
                      </p>
                      <p className="mt-0.5 truncate text-sm">{tituloDoItem(tipo, id)}</p>
                    </div>
                    {acao !== 'criado' && (
                      <button
                        type="button"
                        onClick={() => reverterItem(tipo, id)}
                        className="shrink-0 text-xs font-semibold text-aurora"
                      >
                        Desfazer
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <Card>
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <Button variante="secundaria" onClick={exportarOverlay}>
                  Exportar conteúdo
                </Button>
                {confirmar ? (
                  <Button
                    variante="perigo"
                    onClick={() => {
                      limparOverlay()
                      setConfirmar(false)
                      setMensagem('Conteúdo local descartado. O app voltou ao código.')
                    }}
                  >
                    Descartar tudo mesmo
                  </Button>
                ) : (
                  <Button variante="perigo" onClick={() => setConfirmar(true)}>
                    Descartar todas
                  </Button>
                )}
              </div>
              {confirmar && (
                <p className="mt-3 text-xs leading-relaxed text-danger">
                  Isto apaga as {alteracoes} edições de uma vez e não tem desfazer. Exporte antes
                  se ainda não devolveu nada ao repositório.
                </p>
              )}
            </Card>
          </>
        )}
      </Secao>

      <Secao titulo="Importar conteúdo">
        <Card>
          <p className="text-sm leading-relaxed text-ink-2">
            Carrega um arquivo exportado por este painel. Só mexe no conteúdo — seu progresso de
            estudo não é tocado.
          </p>
          <Button
            variante="secundaria"
            className="mt-4"
            onClick={() => arquivo.current?.click()}
          >
            Escolher arquivo
          </Button>
          <input
            ref={arquivo}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => {
              const arq = e.target.files?.[0]
              if (arq) void importarOverlay(arq)
              e.target.value = ''
            }}
          />
        </Card>
      </Secao>

      <Secao titulo="Backup do progresso">
        <Card>
          <p className="text-sm leading-relaxed text-ink-2">
            Respostas, domínio, sequência e conquistas são outra coisa, e têm backup próprio.
          </p>
          <Link to="/config" className="mt-3 inline-block text-sm font-semibold text-aurora">
            Ir para Configurações →
          </Link>
        </Card>
      </Secao>

      {mensagem && <p className="mb-6 text-center text-sm font-semibold text-aurora">{mensagem}</p>}
    </AdminShell>
  )
}
