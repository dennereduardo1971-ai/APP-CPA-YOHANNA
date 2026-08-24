import { useState } from 'react'
import { Card, Secao } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Vazio } from '@/components/ui/Empty'
import { AreaTexto, Campo } from '@/components/ui/Campo'
import { AdminShell } from '@/components/domain/AdminShell'
import { BLUEPRINT } from '@/lib/blueprint'
import { useStore } from '@/lib/store'

const hoje = () => new Date().toISOString().slice(0, 10)

export default function AdminVersoes() {
  const versoes = useStore((s) => s.versoesConteudo)
  const registrar = useStore((s) => s.registrarVersao)
  const remover = useStore((s) => s.removerVersao)

  const [rotulo, setRotulo] = useState('')
  const [data, setData] = useState(hoje())
  const [notas, setNotas] = useState('')
  const [fonte, setFonte] = useState('')

  function salvar() {
    if (!rotulo.trim()) return
    registrar({ rotulo: rotulo.trim(), data, notas: notas.trim(), fonte: fonte.trim() || undefined })
    setRotulo('')
    setNotas('')
    setFonte('')
    setData(hoje())
  }

  return (
    <AdminShell
      titulo="Versões de conteúdo"
      descricao="Registro manual do que mudou na matéria e por quê."
    >
      <Card className="mb-6 border-warn/30 bg-warn-soft/40">
        <p className="text-sm font-bold text-warn">Este registro é manual — e é assim de propósito</p>
        <p className="mt-1.5 text-xs leading-relaxed text-ink-2">
          A especificação pedia um bloco que detectasse sozinho quando a ANBIMA publica uma revisão.
          O app roda offline e sem servidor: não há como detectar nada, e fingir que há seria pior
          do que não ter. Quem confere a fonte é você; aqui fica escrito o que foi conferido e
          quando. Monitoramento automático segue como pendência externa.
        </p>
      </Card>

      <Secao titulo="Registrar uma revisão">
        <Card>
          <Campo
            rotulo="Rótulo"
            dica="Ex.: Programa Detalhado v1.2, ou Res. CMN 5.295/2026."
            valor={rotulo}
            onChange={setRotulo}
            placeholder="O que foi revisado"
          />
          <Campo rotulo="Data" tipo="date" valor={data} onChange={setData} />
          <AreaTexto
            rotulo="O que mudou"
            valor={notas}
            onChange={setNotas}
            linhas={4}
            placeholder="Quais conceitos, questões ou pesos foram afetados."
          />
          <Campo
            rotulo="Fonte oficial"
            dica="Opcional, mas é o que separa dado verificado de lembrança."
            valor={fonte}
            onChange={setFonte}
          />
          <Button bloco onClick={salvar} disabled={!rotulo.trim()}>
            Registrar
          </Button>
        </Card>
      </Secao>

      <Secao
        titulo="Histórico"
        descricao={`Blueprint em vigor: ${BLUEPRINT.nome} · versão ${BLUEPRINT.versao}.`}
      >
        {versoes.length === 0 ? (
          <Vazio
            icone="resumo"
            titulo="Nenhuma revisão registrada"
            descricao="A primeira entrada costuma ser a versão do programa em que o conteúdo foi baseado."
          />
        ) : (
          <ul className="flex flex-col gap-2.5">
            {versoes.map((v) => (
              <li key={v.id}>
                <Card>
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="min-w-0 truncate font-semibold">{v.rotulo}</p>
                    <span className="tnum shrink-0 text-xs text-muted">
                      {new Date(`${v.data}T12:00`).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  {v.notas && (
                    <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-ink-2">
                      {v.notas}
                    </p>
                  )}
                  {v.fonte && <p className="mt-2 text-xs text-muted">Fonte: {v.fonte}</p>}
                  <button
                    type="button"
                    onClick={() => remover(v.id)}
                    className="mt-3 text-xs font-semibold text-danger"
                  >
                    Remover
                  </button>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </Secao>
    </AdminShell>
  )
}
