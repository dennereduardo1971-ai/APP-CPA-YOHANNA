import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './styles/index.css'

// HashRouter: a aplicação é servida como arquivo estático e roda também
// dentro do WebView do Capacitor (file://), onde history API não funciona.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)

// Service worker: mantém o app utilizável sem rede.
// Não roda dentro do Capacitor (file://), onde os assets já são locais.
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(new URL('sw.js', document.baseURI).href)
      .catch(() => {
        /* offline ou ambiente sem suporte — a aplicação segue funcionando */
      })
  })
}
