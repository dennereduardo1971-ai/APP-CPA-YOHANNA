import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Secao } from '@/components/ui/Card'
import { Barra } from '@/components/ui/Progress'
import { Pill } from '@/components/ui/Badge'
import { AdminShell } from '@/components/domain/AdminShell'
import { useStore } from '@/lib/store'
import { auditar, ROTULO_SEVERIDADE, type Severidade } from '@/lib/auditoria'
import { BLUEPRINT } from '@/lib/blueprint'
import { tomDominio } from '@/lib/engine/mastery'

const TOM: Record<Severidade, 'danger' | 'warn' | 'neutro'> = {
  defeito: 'danger',
  incompleto: 'warn',
  lacuna: 'neutro',
}

const ORDEM: Severidade[] = ['defeito', 'incompleto', 'lacuna']

function Numero({
  rotulo,
  valor,
  total,
  nota,
}: {
  rotulo: string
  valor: number
  total?: number
  nota?: string
}) {
  return (
    <Card>
      <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">{rotulo}</p>
      <p className="tnum mt-1 text-2xl font-extrabold">
        {valor}
        {total !== undefined && <span className="text-base font-semibold text-muted">/{total}</span>}
      </p>
      {total !== undefined && (
        <Barra
          valor={total ? valor / total : 0}
          altura="h-1"
          className="mt-2"
          tom={tomDominio(total ? valor / total : 0)}
        />
      )}
      {nota && <p className="mt-2 text-[11px] leading-relaxed text-muted">{nota}</p>}
    </Card>
  )
}

export default function Admin() {
  const overlay = useStore((s) => s.overlay)
  const versoes = useStore((s) => s.versoesConteudo)

  // Reaudita a cada mudança do overlay: o painel fala do conteúdo em vigor,
  // incluindo as edições locais.
  const { achados, resumo } = useMemo(() => auditar(), [overlay])
  const [filtro, setFiltro] = useState<Severidade | 'todos'>('todos')

  const visiveis = filtro === 'todos' ? achados : achados.filter((a) => a.severidade === filtro)

  return (
    <AdminShell
      titulo="Painel de conteúdo"
      descricao="O estado real da matéria, calculado agora — não um relatório de outro dia."
    >
      <div className="mb-6 grid gap-3 sm:grid-cols-2">
        <Numero
          rotulo="Microtemas com aula"
          valor={resumo.microtemasComConteudo}
          total={resumo.microtemas}
          nota="A Regra de Ouro: o app não está pronto enquanto houver microtema oficial sem material."
        />
        <Numero
          rotulo="Aulas nos 9 blocos"
          valor={resumo.conceitosCompletos}
          total={resumo.conceitos}
          nota="Conceitos com os três blocos novos e os níveis 1 e 3 preenchidos."
        />
        <Numero
          rotulo="Aulas com questão"
          valor={resumo.conceitosComQuestao}
          total={resumo.conceitos}
          nota={`${resumo.questoes} questões autorais no banco.`}
        />
        <Numero
          rotulo="Banco de questões"
          valor={resumo.questoes}
          nota={`A prova tem ${BLUEPRINT.totalQuestoes} questões. Um banco saudável tem várias vezes isso.`}
        />
      </div>

      <Secao
        titulo="Achados"
        descricao="Defeito atrapalha quem estuda hoje; lacuna é trabalho de autoria."
        acao={
          versoes.length > 0 ? (
            <Link to="/admin/versoes" className="text-sm font-semibold text-aurora">
              Versões
            </Link>
          ) : undefined
        }
      >
        <div className="no-scrollbar -mx-1 mb-3 flex gap-1.5 overflow-x-auto px-1">
          {(['todos', ...ORDEM] as const).map((chave) => {
            const total = chave === 'todos' ? achados.length : resumo.porSeveridade[chave]
            return (
              <button
                key={chave}
                type="button"
                onClick={() => setFiltro(chave)}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  filtro === chave
                    ? 'border-aurora/40 bg-aurora-soft text-aurora'
                    : 'border-line bg-elevated text-ink-2'
                }`}
              >
                {chave === 'todos' ? 'Todos' : ROTULO_SEVERIDADE[chave]}{' '}
                <span className="tnum text-muted">{total}</span>
              </button>
            )
          })}
        </div>

        {visiveis.length === 0 ? (
          <Card>
            <p className="font-semibold text-jade">Nada nesta categoria.</p>
            <p className="mt-1 text-sm text-muted">
              {filtro === 'defeito'
                ? 'Nenhuma questão quebrada. É o que mais importa.'
                : 'Continue pelas outras categorias.'}
            </p>
          </Card>
        ) : (
          <ul className="flex flex-col gap-2">
            {visiveis.slice(0, 60).map((achado, i) => (
              <li key={`${achado.itemId}-${i}`}>
                <Card to={achado.destino}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-[11px] uppercase tracking-wider text-muted">
                        {achado.contexto}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-semibold">{achado.titulo}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{achado.problema}</p>
                    </div>
                    <Pill tom={TOM[achado.severidade]}>{ROTULO_SEVERIDADE[achado.severidade]}</Pill>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        )}

        {visiveis.length > 60 && (
          <p className="mt-3 text-center text-xs text-muted">
            Mostrando 60 de {visiveis.length}. Resolva estes e a lista encurta.
          </p>
        )}
      </Secao>
    </AdminShell>
  )
}
