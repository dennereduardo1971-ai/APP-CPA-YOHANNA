import { useEffect, useState } from 'react'
import { Cabecalho } from '@/components/layout/AppShell'
import { Card, Secao } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { APP } from '@/lib/app-config'

/** Evento de instalação de PWA — tipagem mínima, não exposta pelo TS DOM. */
interface PromptInstalacao extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const PASSOS_APK = [
  'Toque em “Baixar APK”. O Android vai avisar que o arquivo pode ser prejudicial — é o aviso padrão para qualquer app fora da Play Store.',
  'Abra o arquivo baixado. Se aparecer “instalação bloqueada”, toque em Configurações e autorize o navegador a instalar apps.',
  'Confirme a instalação e abra o Preparatório CPA pela gaveta de aplicativos.',
]

export default function Baixar() {
  const [promptInstalacao, setPromptInstalacao] = useState<PromptInstalacao | null>(null)
  const [instalado, setInstalado] = useState(false)

  useEffect(() => {
    function capturar(e: Event) {
      e.preventDefault()
      setPromptInstalacao(e as PromptInstalacao)
    }
    window.addEventListener('beforeinstallprompt', capturar)
    setInstalado(window.matchMedia('(display-mode: standalone)').matches)
    return () => window.removeEventListener('beforeinstallprompt', capturar)
  }, [])

  async function instalarPWA() {
    if (!promptInstalacao) return
    await promptInstalacao.prompt()
    const escolha = await promptInstalacao.userChoice
    if (escolha.outcome === 'accepted') setInstalado(true)
    setPromptInstalacao(null)
  }

  return (
    <div>
      <Cabecalho
        titulo="Baixar o aplicativo"
        descricao="Duas formas de usar no celular. As duas funcionam offline."
      />

      <Secao titulo="Opção 1 — Instalar pelo navegador" descricao="Mais rápido, sem APK.">
        <Card>
          <p className="text-[15px] leading-relaxed text-ink-2">
            O site é um aplicativo web instalável. Depois de instalado, abre em tela cheia, tem
            ícone próprio e funciona sem internet — o progresso continua salvo no aparelho.
          </p>

          {instalado ? (
            <p className="mt-4 text-sm font-semibold text-aqua">
              Já está instalado neste dispositivo.
            </p>
          ) : promptInstalacao ? (
            <Button bloco className="mt-4" onClick={() => void instalarPWA()}>
              Instalar agora
            </Button>
          ) : (
            <div className="mt-4 rounded-xl border border-line bg-elevated p-3.5 text-sm leading-relaxed text-ink-2">
              <p className="mb-2 font-semibold">Como instalar manualmente</p>
              <p className="mb-1">
                <span className="font-medium">Android (Chrome):</span> menu ⋮ → “Instalar
                aplicativo” ou “Adicionar à tela inicial”.
              </p>
              <p>
                <span className="font-medium">iPhone (Safari):</span> botão Compartilhar →
                “Adicionar à Tela de Início”.
              </p>
            </div>
          )}
        </Card>
      </Secao>

      <Secao titulo="Opção 2 — Baixar o APK" descricao="Aplicativo Android empacotado.">
        <Card>
          <p className="text-[15px] leading-relaxed text-ink-2">
            O APK é gerado automaticamente a cada versão publicada e fica disponível na página de
            releases do repositório.
          </p>

          <a
            href={APP.apkLatest}
            className="mt-4 inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-aqua px-6 text-base font-semibold text-bg shadow-glow transition-all hover:brightness-110 active:scale-[.985]"
          >
            Baixar APK
          </a>

          <a
            href={APP.releases}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block text-center text-sm font-semibold text-aqua"
          >
            Ver todas as versões
          </a>

          <ol className="mt-5 flex flex-col gap-3 border-t border-line pt-4">
            {PASSOS_APK.map((passo, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-2">
                <span
                  aria-hidden
                  className="tnum grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line text-xs font-bold text-muted"
                >
                  {i + 1}
                </span>
                {passo}
              </li>
            ))}
          </ol>

          <div className="mt-5 rounded-xl border border-warn/30 bg-warn-soft p-3.5 text-[13px] leading-relaxed text-warn">
            O APK não está publicado na Google Play. O aviso de “fonte desconhecida” do Android é
            esperado. Baixe apenas do endereço oficial acima.
          </div>
        </Card>
      </Secao>

      <Secao titulo="Sobre os dados">
        <Card>
          <p className="text-[15px] leading-relaxed text-ink-2">
            Web e APK guardam o progresso separadamente, cada um no seu próprio armazenamento.
            Para migrar de um para o outro, use o backup em Configurações → Seus dados.
          </p>
        </Card>
      </Secao>

      <p className="mt-8 text-center text-xs text-muted">
        {APP.nome} v{APP.versao} · pacote {APP.pacoteAndroid}
      </p>
    </div>
  )
}
