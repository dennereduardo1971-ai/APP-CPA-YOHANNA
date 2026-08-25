import type { ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useStore } from '@/lib/store'
import { useNivel } from '@/lib/store'
import { tituloDoNivel } from '@/lib/engine/gamification'
import { Icone, type IconeNome } from '@/components/ui/Icone'
import { CeuAlvorada, DivisorPincel } from '@/components/ui/Ornamento'

interface ItemNav {
  para: string
  rotulo: string
  icone: IconeNome
  /** Aparece na barra inferior do celular. */
  mobile?: boolean
}

export const NAVEGACAO: ItemNav[] = [
  { para: '/', rotulo: 'Início', icone: 'inicio', mobile: true },
  { para: '/trilha', rotulo: 'Trilha', icone: 'trilha', mobile: true },
  { para: '/rapido', rotulo: 'Estudo rápido', icone: 'raio', mobile: true },
  { para: '/revisao', rotulo: 'Revisão', icone: 'revisao', mobile: true },
  { para: '/questoes', rotulo: 'Questões', icone: 'questao' },
  { para: '/simulados', rotulo: 'Simulados', icone: 'cronometro' },
  { para: '/resumos', rotulo: 'Resumos', icone: 'resumo' },
  { para: '/mapas', rotulo: 'Mapas mentais', icone: 'mapa' },
  { para: '/progresso', rotulo: 'Progresso', icone: 'progresso' },
  { para: '/estatisticas', rotulo: 'Estatísticas', icone: 'estatistica' },
  { para: '/metas', rotulo: 'Metas', icone: 'meta' },
  { para: '/conquistas', rotulo: 'Conquistas', icone: 'troféu' },
  { para: '/perfil', rotulo: 'Perfil', icone: 'perfil', mobile: true },
  { para: '/config', rotulo: 'Configurações', icone: 'config' },
]

const MOBILE = NAVEGACAO.filter((i) => i.mobile)

function IconeNav({ nome, ativo }: { nome: IconeNome; ativo: boolean }) {
  return (
    <span
      className={`grid h-6 w-6 place-items-center ${ativo ? 'text-aurora' : 'text-muted'}`}
    >
      <Icone nome={nome} tamanho={20} />
    </span>
  )
}

function BarraLateral() {
  const nivel = useNivel()
  const nome = useStore((s) => s.perfil.nome)
  const sequencia = useStore((s) => s.sequencia.atual)

  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-line bg-surface/50 lg:flex">
      <div className="relative px-5 py-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-aurora/80">
          Preparatório
        </p>
        <p className="texto-alvorada display text-2xl leading-tight">CPA</p>
        <DivisorPincel className="mt-2 opacity-70" />
      </div>

      <nav aria-label="Seções do app" className="flex-1 overflow-y-auto px-3 pb-4">
        <ul className="flex flex-col gap-0.5">
          {NAVEGACAO.map((item) => (
            <li key={item.para}>
              <NavLink
                to={item.para}
                end={item.para === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'bg-aurora-soft font-semibold text-aurora'
                      : 'text-ink-2 hover:bg-elevated hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <IconeNav nome={item.icone} ativo={isActive} />
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
          <span aria-hidden className="text-aurora">
            <Icone nome="chama" tamanho={14} />
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
    <nav
      aria-label="Navegação principal"
      className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 pt-1 backdrop-blur lg:hidden"
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-around">
        {MOBILE.map((item) => (
          <li key={item.para} className="flex-1">
            <NavLink
              to={item.para}
              end={item.para === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 rounded-lg py-1.5 text-[10px] font-medium transition-colors ${
                  isActive ? 'text-aurora' : 'text-muted'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <IconeNav nome={item.icone} ativo={isActive} />
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
      {/*
        Atalho para o conteúdo. Sem ele, quem navega por teclado percorre os
        catorze itens da barra lateral de novo a cada página. Fica escondido
        até receber foco — é o primeiro alvo do Tab.

        É um botão, não um link `#conteudo`: o app usa HashRouter, e trocar o
        hash da URL levaria o roteador para uma rota inexistente.
      */}
      <button
        type="button"
        onClick={() => document.getElementById('conteudo')?.focus()}
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-elevated focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Pular para o conteúdo
      </button>
      {!imersivo && <BarraLateral />}
      <div className="relative flex min-w-0 flex-1 flex-col">
        {!imersivo && <CeuAlvorada />}
        <main
          id="conteudo"
          /*
           * `tabIndex={-1}` existe para que a troca de rota possa mover o foco
           * para cá por programa (ver `FocoDeRota` em App.tsx). Sem isso, o
           * foco fica preso no link clicado e o leitor de tela não sabe que a
           * página mudou.
           */
          tabIndex={-1}
          className={`safe-top mx-auto w-full max-w-3xl flex-1 px-4 pb-28 pt-4 sm:px-6 lg:max-w-4xl lg:pb-10 ${
            imersivo ? 'max-w-2xl' : ''
          }`}
        >
          {children}
          {!imersivo && <RodapeLegal />}
        </main>
      </div>
      {!imersivo && <BarraInferior />}
    </div>
  )
}

/**
 * Aviso de não-afiliação — item 20 da especificação, exigido em todas as
 * páginas. Fica fora das sessões imersivas para não competir com a questão
 * na tela; ali a navegação também some.
 */
function RodapeLegal() {
  return (
    <footer className="mt-12 border-t border-line pt-4">
      <p className="text-[11px] leading-relaxed text-muted">
        Plataforma independente de preparação para certificações. Não afiliada, patrocinada ou
        endossada pela ANBIMA.
      </p>
    </footer>
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
        <h1 className="display text-2xl sm:text-3xl">{titulo}</h1>
        {descricao && <p className="mt-1 text-sm text-muted">{descricao}</p>}
      </div>
      {acao}
    </header>
  )
}
