import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { BLUEPRINT } from '@/lib/blueprint'
import { useStore } from '@/lib/store'

/**
 * Onboarding curto. Termina levando o usuário direto para uma sessão —
 * nunca para uma tela vazia.
 */
export default function Onboarding() {
  const navegar = useNavigate()
  const concluir = useStore((s) => s.concluirOnboarding)

  const [passo, setPasso] = useState(0)
  const [nome, setNome] = useState('')
  const [minutos, setMinutos] = useState(30)
  const [dataProva, setDataProva] = useState('')

  function finalizar() {
    concluir(
      { nome: nome.trim() || 'Estudante' },
      {
        minutosDia: minutos,
        questoesDia: Math.max(10, Math.round(minutos * 0.7)),
        dataProva: dataProva || null,
      },
    )
    navegar('/rapido', { replace: true })
  }

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center py-8">
      <div className="mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aurora">
          Preparatório
        </p>
        <h1 className="mt-1 text-4xl font-extrabold tracking-tight">CPA</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          {BLUEPRINT.nome}. Sessões curtas, conteúdo direto e um sistema que aprende onde você
          precisa de reforço.
        </p>
      </div>

      {passo === 0 && (
        <div className="animate-fade-up">
          <label htmlFor="nome" className="mb-2 block text-sm font-semibold">
            Como podemos te chamar?
          </label>
          <input
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            autoComplete="given-name"
            className="mb-6 h-12 w-full rounded-xl border border-line bg-surface px-4 text-[15px] outline-none transition-colors focus:border-aurora"
          />
          <Button bloco tamanho="lg" onClick={() => setPasso(1)}>
            Continuar
          </Button>
        </div>
      )}

      {passo === 1 && (
        <div className="animate-fade-up">
          <p className="mb-2 text-sm font-semibold">Quanto tempo por dia você consegue estudar?</p>
          <p className="mb-4 text-xs text-muted">
            Isso vira sua meta diária. Dá para mudar quando quiser.
          </p>
          <div className="mb-6 grid grid-cols-2 gap-2.5">
            {[15, 30, 45, 60].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setMinutos(v)}
                aria-pressed={minutos === v}
                className={`rounded-xl border p-4 text-left transition-all ${
                  minutos === v
                    ? 'border-aurora bg-aurora/10'
                    : 'border-line bg-surface hover:border-aurora/40'
                }`}
              >
                <span className="tnum block text-xl font-bold">{v} min</span>
                <span className="text-xs text-muted">
                  {v <= 15 ? 'Bem enxuto' : v <= 30 ? 'Equilibrado' : v <= 45 ? 'Ritmo forte' : 'Intensivo'}
                </span>
              </button>
            ))}
          </div>
          <Button bloco tamanho="lg" onClick={() => setPasso(2)}>
            Continuar
          </Button>
        </div>
      )}

      {passo === 2 && (
        <div className="animate-fade-up">
          <label htmlFor="prova" className="mb-2 block text-sm font-semibold">
            Já tem data marcada para a prova?
          </label>
          <p className="mb-4 text-xs text-muted">
            Opcional. Com a data, o sistema muda o ritmo na reta final.
          </p>
          <input
            id="prova"
            type="date"
            value={dataProva}
            onChange={(e) => setDataProva(e.target.value)}
            className="mb-6 h-12 w-full rounded-xl border border-line bg-surface px-4 text-[15px] outline-none transition-colors focus:border-aurora"
          />
          <Button bloco tamanho="lg" onClick={finalizar}>
            Começar a estudar
          </Button>
          <button
            type="button"
            onClick={finalizar}
            className="mt-3 w-full text-sm text-muted hover:text-ink"
          >
            Ainda não sei
          </button>
        </div>
      )}

      <div className="mt-8 flex justify-center gap-1.5" aria-hidden>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === passo ? 'w-6 bg-aurora' : 'w-1.5 bg-elevated'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
