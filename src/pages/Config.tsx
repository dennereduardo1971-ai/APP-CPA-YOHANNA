import { useRef, useState } from 'react'
import { Cabecalho } from '@/components/layout/AppShell'
import { Card, Secao } from '@/components/ui/Card'
import { Button, ButtonLink } from '@/components/ui/Button'
import { AvisoVerificacao } from '@/components/ui/Empty'
import { BLUEPRINT } from '@/lib/blueprint'
import { CONCEITOS, MACROTEMAS } from '@/lib/content'
import { QUESTOES } from '@/lib/questions'
import { useStore, VERSAO_ESTADO } from '@/lib/store'
import { contarAlteracoes } from '@/lib/content/overlay'

function Alternador({
  rotulo,
  descricao,
  ativo,
  onChange,
}: {
  rotulo: string
  descricao?: string
  ativo: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4 py-3">
      <span className="min-w-0">
        <span className="block text-sm font-medium">{rotulo}</span>
        {descricao && <span className="mt-0.5 block text-xs text-muted">{descricao}</span>}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={ativo}
        aria-label={rotulo}
        onClick={() => onChange(!ativo)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
          ativo ? 'bg-aurora' : 'bg-elevated'
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-bg transition-transform ${
            ativo ? 'translate-x-[22px]' : 'translate-x-0.5'
          }`}
        />
      </button>
    </label>
  )
}

export default function Config() {
  const preferencias = useStore((s) => s.preferencias)
  const atualizarPreferencias = useStore((s) => s.atualizarPreferencias)
  const exportar = useStore((s) => s.exportar)
  const importar = useStore((s) => s.importar)
  const resetar = useStore((s) => s.resetarProgresso)
  const edicoesLocais = useStore((s) => contarAlteracoes(s.overlay))

  const [confirmarReset, setConfirmarReset] = useState(false)
  const [mensagem, setMensagem] = useState<string | null>(null)
  const inputArquivo = useRef<HTMLInputElement>(null)

  function baixarBackup() {
    const blob = new Blob([exportar()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `preparatorio-cpa-backup-${new Date().toISOString().slice(0, 10)}.json`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
    setMensagem('Backup baixado.')
  }

  async function carregarBackup(arquivo: File) {
    const texto = await arquivo.text()
    setMensagem(
      importar(texto)
        ? 'Progresso restaurado.'
        : 'Arquivo inválido ou de uma versão incompatível.',
    )
  }

  return (
    <div>
      <Cabecalho titulo="Configurações" />

      <Secao titulo="Experiência">
        <Card className="divide-y divide-line py-0">
          <Alternador
            rotulo="Efeitos de animação"
            descricao="Desligue se preferir uma interface mais estática."
            ativo={preferencias.animacoes}
            onChange={(v) => atualizarPreferencias({ animacoes: v })}
          />
          <Alternador
            rotulo="Som de feedback"
            descricao="Sinal sonoro ao acertar ou errar."
            ativo={preferencias.som}
            onChange={(v) => atualizarPreferencias({ som: v })}
          />
          <Alternador
            rotulo="Abrir explicação automaticamente"
            descricao="Mostra a explicação assim que você responde."
            ativo={preferencias.mostrarExplicacaoAutomatica}
            onChange={(v) => atualizarPreferencias({ mostrarExplicacaoAutomatica: v })}
          />
        </Card>
      </Secao>

      <Secao titulo="Aplicativo Android">
        <Card>
          <p className="text-sm text-ink-2">
            O site funciona offline no navegador e pode ser instalado como aplicativo. Também há
            uma versão empacotada em APK.
          </p>
          <ButtonLink to="/baixar" variante="secundaria" bloco className="mt-4">
            Baixar o APK
          </ButtonLink>
        </Card>
      </Secao>

      <Secao titulo="Seus dados" descricao="Tudo fica salvo neste dispositivo.">
        <Card>
          <p className="text-sm leading-relaxed text-ink-2">
            O progresso é gravado localmente no navegador. Nada é enviado para servidor. Se você
            limpar os dados do navegador ou desinstalar o app, o progresso se perde — por isso
            existe o backup.
          </p>

          <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
            <Button variante="secundaria" onClick={baixarBackup}>
              Baixar backup
            </Button>
            <Button variante="secundaria" onClick={() => inputArquivo.current?.click()}>
              Restaurar backup
            </Button>
            <input
              ref={inputArquivo}
              type="file"
              accept="application/json"
              className="hidden"
              onChange={(e) => {
                const arquivo = e.target.files?.[0]
                if (arquivo) void carregarBackup(arquivo)
                e.target.value = ''
              }}
            />
          </div>

          {mensagem && <p className="mt-3 text-sm font-semibold text-aurora">{mensagem}</p>}
        </Card>
      </Secao>

      <Secao titulo="Conteúdo carregado">
        <Card>
          <ul className="flex flex-col gap-1.5 text-sm">
            <li className="flex justify-between gap-3">
              <span className="text-muted">Certificação</span>
              <span className="text-right font-medium">{BLUEPRINT.nome}</span>
            </li>
            <li className="flex justify-between gap-3">
              <span className="text-muted">Versão do blueprint</span>
              <span className="tnum font-medium">{BLUEPRINT.versao}</span>
            </li>
            <li className="flex justify-between gap-3">
              <span className="text-muted">Macrotemas</span>
              <span className="tnum font-medium">{MACROTEMAS.length}</span>
            </li>
            <li className="flex justify-between gap-3">
              <span className="text-muted">Conceitos</span>
              <span className="tnum font-medium">{CONCEITOS.length}</span>
            </li>
            <li className="flex justify-between gap-3">
              <span className="text-muted">Questões autorais</span>
              <span className="tnum font-medium">{QUESTOES.length}</span>
            </li>
            <li className="flex justify-between gap-3">
              <span className="text-muted">Formato de dados</span>
              <span className="tnum font-medium">v{VERSAO_ESTADO}</span>
            </li>
          </ul>

          {!BLUEPRINT.verificado && (
            <div className="mt-4">
              <AvisoVerificacao>
                A estrutura da prova ainda não foi conferida contra o Programa Detalhado oficial
                vigente. Confirme pesos, número de questões e nota de corte no material da ANBIMA
                antes de usar como referência.
              </AvisoVerificacao>
            </div>
          )}
        </Card>
      </Secao>

      <Secao titulo="Painel de conteúdo" descricao="Auditoria da matéria e edição local.">
        <Card to="/admin">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="font-semibold">Abrir o painel</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Mostra o que falta escrever, o que está incompleto e o que está quebrado. Permite
                corrigir um texto sem esperar uma nova versão do app.
              </p>
            </div>
            <span aria-hidden className="shrink-0 text-muted">
              →
            </span>
          </div>
          {edicoesLocais > 0 && (
            <p className="mt-3 text-xs font-semibold text-warn">
              {edicoesLocais} {edicoesLocais === 1 ? 'edição local' : 'edições locais'} de conteúdo
              neste aparelho.
            </p>
          )}
        </Card>
      </Secao>

      <Secao titulo="Zona de risco">
        <Card className="border-danger/30">
          {!confirmarReset ? (
            <>
              <p className="text-sm text-ink-2">
                Apaga respostas, domínio, XP, sequência, histórico e favoritos. Perfil, metas e
                as edições de conteúdo do painel são mantidos. Não dá para desfazer.
              </p>
              <Button variante="perigo" className="mt-4" onClick={() => setConfirmarReset(true)}>
                Zerar progresso
              </Button>
            </>
          ) : (
            <>
              <p className="font-bold text-danger">Tem certeza?</p>
              <p className="mt-1 text-sm text-ink-2">
                Considere baixar um backup antes. Esta ação é definitiva.
              </p>
              <div className="mt-4 flex gap-2.5">
                <Button variante="secundaria" onClick={() => setConfirmarReset(false)}>
                  Cancelar
                </Button>
                <Button
                  variante="perigo"
                  onClick={() => {
                    resetar()
                    setConfirmarReset(false)
                    setMensagem('Progresso zerado.')
                  }}
                >
                  Zerar tudo
                </Button>
              </div>
            </>
          )}
        </Card>
      </Secao>

      {/* O aviso de não-afiliação agora é global, no rodapé do AppShell. */}
      <p className="mt-8 text-center text-xs leading-relaxed text-muted">
        Preparatório CPA · conteúdo e questões autorais.
      </p>
    </div>
  )
}
