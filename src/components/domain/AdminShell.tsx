import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Cabecalho } from '@/components/layout/AppShell'
import { useStore } from '@/lib/store'
import { contarAlteracoes } from '@/lib/content/overlay'

/**
 * Moldura das telas do painel de conteúdo.
 *
 * O aviso de edições locais fica AQUI, e não em cada página, porque ele é a
 * informação mais importante do painel inteiro: enquanto houver overlay, o
 * que o app mostra não é o que está no repositório. Esconder isso numa aba
 * seria deixar o usuário editar sem saber que divergiu do código.
 */

const ABAS = [
  { para: '/admin', rotulo: 'Panorama' },
  { para: '/admin/estrutura', rotulo: 'Estrutura' },
  { para: '/admin/conceitos', rotulo: 'Aulas' },
  { para: '/admin/questoes', rotulo: 'Questões' },
  { para: '/admin/versoes', rotulo: 'Versões' },
  { para: '/admin/dados', rotulo: 'Dados' },
]

export function AdminShell({
  titulo,
  descricao,
  acao,
  children,
}: {
  titulo: string
  descricao?: string
  acao?: ReactNode
  children: ReactNode
}) {
  const overlay = useStore((s) => s.overlay)
  const { pathname } = useLocation()
  const alteracoes = contarAlteracoes(overlay)

  return (
    <div>
      <Cabecalho titulo={titulo} descricao={descricao} acao={acao} />

      <nav className="no-scrollbar -mx-1 mb-5 flex gap-1.5 overflow-x-auto px-1 pb-1">
        {ABAS.map((aba) => {
          const ativa = aba.para === '/admin' ? pathname === '/admin' : pathname.startsWith(aba.para)
          return (
            <Link
              key={aba.para}
              to={aba.para}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[13px] font-semibold transition-colors ${
                ativa
                  ? 'border-aurora/40 bg-aurora/15 text-aurora'
                  : 'border-line bg-elevated text-ink-2 hover:border-aurora/30'
              }`}
            >
              {aba.rotulo}
            </Link>
          )
        })}
      </nav>

      {alteracoes > 0 && (
        <Link
          to="/admin/dados"
          className="mb-5 flex items-center justify-between gap-3 rounded-2xl border border-warn/40 bg-warn-soft p-3.5 transition-colors hover:border-warn"
        >
          <div className="min-w-0">
            <p className="text-sm font-bold text-warn">
              {alteracoes} {alteracoes === 1 ? 'edição local' : 'edições locais'} de conteúdo
            </p>
            <p className="mt-0.5 text-xs leading-relaxed text-warn/80">
              Valem só neste dispositivo. Exporte para levar de volta ao repositório.
            </p>
          </div>
          <span aria-hidden className="shrink-0 text-warn">
            →
          </span>
        </Link>
      )}

      {children}
    </div>
  )
}

/** Linha de item nas listagens do painel. */
export function ItemAdmin({
  para,
  codigo,
  titulo,
  detalhe,
  marca,
}: {
  para: string
  codigo?: string
  titulo: string
  detalhe?: string
  marca?: ReactNode
}) {
  return (
    <Link
      to={para}
      className="card card-hover flex items-start justify-between gap-3 p-3.5 transition-colors"
    >
      <div className="min-w-0">
        <p className="text-sm font-semibold">
          {codigo && <span className="tnum mr-1.5 text-muted">{codigo}</span>}
          {titulo}
        </p>
        {detalhe && <p className="mt-1 text-xs leading-relaxed text-muted">{detalhe}</p>}
      </div>
      {marca ?? (
        <span aria-hidden className="shrink-0 text-muted">
          →
        </span>
      )}
    </Link>
  )
}
