import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AppShell } from '@/components/layout/AppShell'
import { useStore } from '@/lib/store'

import Onboarding from '@/pages/Onboarding'
import Home from '@/pages/Home'
import Trilha from '@/pages/Trilha'
import Aula from '@/pages/Aula'
import Resumos from '@/pages/Resumos'
import Mapas from '@/pages/Mapas'
import Questoes from '@/pages/Questoes'
import EstudoRapido from '@/pages/EstudoRapido'
import Simulados from '@/pages/Simulados'
import SimuladoRun from '@/pages/SimuladoRun'
import Resultado from '@/pages/Resultado'
import Revisao from '@/pages/Revisao'
import Metas from '@/pages/Metas'
import Conquistas from '@/pages/Conquistas'
import Estatisticas from '@/pages/Estatisticas'
import Progresso from '@/pages/Progresso'
import Perfil from '@/pages/Perfil'
import Config from '@/pages/Config'
import Vespera from '@/pages/Vespera'
import Baixar from '@/pages/Baixar'
import NaoEncontrado from '@/pages/NaoEncontrado'

function RolarAoTopo() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
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
      <RolarAoTopo />
      <AppShell>
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
          <Route path="*" element={<NaoEncontrado />} />
        </Routes>
      </AppShell>
    </>
  )
}
