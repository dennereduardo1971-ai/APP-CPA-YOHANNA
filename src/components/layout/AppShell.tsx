import type { ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useStore } from '@/lib/store'
import { useNivel } from '@/lib/store'
import { tituloDoNivel } from '@/lib/engine/gamification'

interface ItemNav {
  para: string
  rotulo: string
  icone: string
  /** Aparece na barra inferior do celular. */
  mobile?: boolean
}

export const NAVEGACAO: ItemNav[] = [
  { para: '/', rotulo: 'Início', icone: '⌂', mobile: true },
  { para: '/trilha', rotulo: 'Trilha', icone: '⛿', mobile: true },
  { para: '/rapido', rotulo: 'Estudo rápido', icone: '⚡', mobile: true },
  { para: '/revisao', rotulo: 'Revisão', icone: '↺', mobile: true },
  { para: '/questoes', rotulo: 'Questões', icone: '?' },
  { para: '/simulados', rotulo: 'Simulados', icone: '⏱' },
  { para: '/resumos', rotulo: 'Resumos', icone: '☰' },
  { para: '/mapas', rotulo: 'Mapas mentais', icone: '⌗' },
  { para: '/progresso', rotulo: 'Progresso', icone: '▤' },
  { para: '/estatisticas', rotulo: 'Estatísticas', icone: '◔' },
  { para: '/metas', rotulo: 'Metas', icone: '◎' },
  { para: '/conquistas', rotulo: 'Conquistas', icone: '★' },
  { para: '/perfil', rotulo: 'Perfil', icone: '◉', mobile: true },
  { para: '/config', rotulo: 'Configurações', icone: '⚙' },
]

const MOBILE = NAVEGACAO.filter((i) => i.mobile)

function IconeNav({ children, ativo }: { children: string; ativo: boolean }) {
  return (
    <span
      aria-hidden
      className={`grid h-6 w-6 place-items-center text-[15px] leading-none ${
        ativo ? 'text-aqua' : 'text-muted'
      }`}
    >
      {children}
    </span>
  )
}

function BarraLateral() {
  const nivel = useNivel()
  const nome = useStore((s) => s.perfil.nome)
  const sequencia = useStore((s) => s.sequencia.atual)

  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-line bg-surface/50 lg:flex">
      <div className="px-5 py-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-aqua">
          Preparatório
        </p>
        <p className="text-xl font-extrabold tracking-tight">CPA</p>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        <ul className="flex flex-col gap-0.5">
          {NAVEGACAO.map((item) => (
            <li key={item.para}>
              <NavLink
                to={item.para}
                end={item.para === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'bg-aqua/10 font-semibold text-aqua'
                      : 'text-ink-2 hover:bg-elevated hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <IconeNav ativo={isActive}>{item.icone}</IconeNav>
                    {item.rotulo}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-line px-5 py-4">
        <p className="truncate text-sm font-semibold">{nome || 'Estudante'}</p>
        <p className="mt-0.5 text-xs text-muted">
          Nível {nivel.nivel} · {tituloDoNivel(nivel.nivel)}
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted">
          <span aria-hidden className="text-aqua">
            ≡
          </span>
          <span className="tnum">{sequencia}</span>{' '}
          {sequencia === 1 ? 'dia seguido' : 'dias seguidos'}
        </div>
      </div>
    </aside>
  )
}

function BarraInferior() {
  return (
    <nav className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 pt-1 backdrop-blur lg:hidden">
      <ul className="mx-auto flex max-w-md items-stretch justify-around">
        {MOBILE.map((item) => (
          <li key={item.para} className="flex-1">
            <NavLink
              to={item.para}
              end={item.para === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 rounded-lg py-1.5 text-[10px] font-medium transition-colors ${
                  isActive ? 'text-aqua' : 'text-muted'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <IconeNav ativo={isActive}>{item.icone}</IconeNav>
                  {item.rotulo}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function AppShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  // Sessões imersivas (questões, simulado) escondem a navegação.
  const imersivo = /^\/(rapido|simulado\/|vespera\/sessao)/.test(pathname)

  return (
    <div className="flex min-h-screen">
      {!imersivo && <BarraLateral />}
      <div className="flex min-w-0 flex-1 flex-col">
        <main
          className={`safe-top mx-auto w-full max-w-3xl flex-1 px-4 pb-28 pt-4 sm:px-6 lg:max-w-4xl lg:pb-10 ${
            imersivo ? 'max-w-2xl' : ''
          }`}
        >
          {children}
        </main>
      </div>
      {!imersivo && <BarraInferior />}
    </div>
  )
}

export function Cabecalho({
  titulo,
  descricao,
  acao,
}: {
  titulo: string
  descricao?: string
  acao?: ReactNode
}) {
  return (
    <header className="mb-6 flex items-start justify-between gap-4">
      <div className="min-w-0">
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{titulo}</h1>
        {descricao && <p className="mt-1 text-sm text-muted">{descricao}</p>}
      </div>
      {acao}
    </header>
  )
}
