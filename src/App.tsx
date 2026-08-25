import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect, useRef } from 'react'
import { AppShell } from '@/components/layout/AppShell'
import { useStore } from '@/lib/store'

import Onboarding from '@/pages/Onboarding'
import Home from '@/pages/Home'

/*
 * Só a Home e o onboarding entram no pacote inicial: são o primeiro paint.
 * As demais telas do estudante carregam sob demanda — o `Suspense` que já
 * envolvia o painel cobre todas elas. O ganho não é de rede (dentro do APK
 * os pedaços são arquivos locais), é de trabalho na abertura: o aparelho
 * deixa de analisar o código de vinte telas para desenhar uma.
 */
const Trilha = lazy(() => import('@/pages/Trilha'))
const Aula = lazy(() => import('@/pages/Aula'))
const Resumos = lazy(() => import('@/pages/Resumos'))
const Mapas = lazy(() => import('@/pages/Mapas'))
const Questoes = lazy(() => import('@/pages/Questoes'))
const EstudoRapido = lazy(() => import('@/pages/EstudoRapido'))
const Simulados = lazy(() => import('@/pages/Simulados'))
const SimuladoRun = lazy(() => import('@/pages/SimuladoRun'))
const Resultado = lazy(() => import('@/pages/Resultado'))
const Revisao = lazy(() => import('@/pages/Revisao'))
const Metas = lazy(() => import('@/pages/Metas'))
const Conquistas = lazy(() => import('@/pages/Conquistas'))
const Estatisticas = lazy(() => import('@/pages/Estatisticas'))
const Progresso = lazy(() => import('@/pages/Progresso'))
const Perfil = lazy(() => import('@/pages/Perfil'))
const Config = lazy(() => import('@/pages/Config'))
const Vespera = lazy(() => import('@/pages/Vespera'))
const Baixar = lazy(() => import('@/pages/Baixar'))
/*
 * O painel de conteúdo carrega sob demanda. São oito telas de formulário que
 * um estudante nunca abre — deixá-las no pacote principal engordaria o app
 * de quem só quer estudar. Os pedaços viram arquivos dentro do próprio APK,
 * então continua funcionando sem rede.
 */
const Admin = lazy(() => import('@/pages/Admin'))
const AdminEstrutura = lazy(() => import('@/pages/AdminEstrutura'))
const AdminConceitos = lazy(() => import('@/pages/AdminConceitos'))
const AdminConceito = lazy(() => import('@/pages/AdminConceito'))
const AdminQuestoes = lazy(() => import('@/pages/AdminQuestoes'))
const AdminQuestao = lazy(() => import('@/pages/AdminQuestao'))
const AdminVersoes = lazy(() => import('@/pages/AdminVersoes'))
const AdminDados = lazy(() => import('@/pages/AdminDados'))
import NaoEncontrado from '@/pages/NaoEncontrado'

/**
 * Numa SPA o navegador não recarrega nada ao trocar de rota: a barra de
 * rolagem fica onde estava e — o que é pior — o foco continua no link que
 * acabou de sumir da tela. Quem usa leitor de tela não ouve que a página
 * mudou, e quem navega por teclado recomeça o Tab do meio do documento.
 *
 * Mover o foco para o `<main>` resolve os dois: o leitor de tela lê a região
 * a partir do `<h1>`, e o próximo Tab cai no primeiro controle do conteúdo.
 * A primeira renderização é pulada de propósito — roubar o foco de quem
 * acabou de abrir o app não anuncia nada.
 */
function FocoDeRota() {
  const { pathname } = useLocation()
  const primeira = useRef(true)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    if (primeira.current) {
      primeira.current = false
      return
    }
    document.getElementById('conteudo')?.focus({ preventScroll: true })
  }, [pathname])

  return null
}

export default function App() {
  const concluiu = useStore((s) => s.onboardingConcluido)
  const { pathname } = useLocation()

  if (!concluiu && pathname !== '/onboarding') {
    return <Navigate to="/onboarding" replace />
  }

  return (
    <>
      <FocoDeRota />
      <AppShell>
        <Suspense fallback={<p className="py-16 text-center text-sm text-muted">Carregando…</p>}>
          <Routes>
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/" element={<Home />} />
            <Route path="/trilha" element={<Trilha />} />
            <Route path="/conteudo/:conceitoId" element={<Aula />} />
            <Route path="/resumos" element={<Resumos />} />
            <Route path="/mapas" element={<Mapas />} />
            <Route path="/mapas/:conceitoId" element={<Mapas />} />
            <Route path="/questoes" element={<Questoes />} />
            <Route path="/rapido" element={<EstudoRapido />} />
            <Route path="/simulados" element={<Simulados />} />
            <Route path="/simulado/:modo" element={<SimuladoRun />} />
            <Route path="/resultado/:simuladoId" element={<Resultado />} />
            <Route path="/revisao" element={<Revisao />} />
            <Route path="/metas" element={<Metas />} />
            <Route path="/conquistas" element={<Conquistas />} />
            <Route path="/estatisticas" element={<Estatisticas />} />
            <Route path="/progresso" element={<Progresso />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/config" element={<Config />} />
            <Route path="/vespera" element={<Vespera />} />
            <Route path="/baixar" element={<Baixar />} />

            {/* Painel de conteúdo — fora da navegação principal, por Config. */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/estrutura" element={<AdminEstrutura />} />
            <Route path="/admin/conceitos" element={<AdminConceitos />} />
            <Route path="/admin/conceito/:conceitoId" element={<AdminConceito />} />
            <Route path="/admin/questoes" element={<AdminQuestoes />} />
            <Route path="/admin/questao/:questaoId" element={<AdminQuestao />} />
            <Route path="/admin/versoes" element={<AdminVersoes />} />
            <Route path="/admin/dados" element={<AdminDados />} />
            <Route path="*" element={<NaoEncontrado />} />
          </Routes>
        </Suspense>
      </AppShell>
    </>
  )
}
