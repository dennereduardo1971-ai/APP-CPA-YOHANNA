import { useMemo } from 'react'
import { SessaoEstudo } from '@/components/domain/SessaoEstudo'
import { montarSessao } from '@/lib/engine/planner'
import { useStore } from '@/lib/store'

/**
 * Estudo Rápido — a página central do produto.
 * O usuário entra e estuda; não escolhe nada. Tudo vem do desempenho atual.
 */
export default function EstudoRapido() {
  const estados = useStore((s) => s.estados)
  const respostas = useStore((s) => s.respostas)
  const minutosMeta = useStore((s) => s.metas.minutosDia)

  const plano = useMemo(() => {
    const agora = Date.now()
    const umDia = agora - 86_400_000
    return montarSessao({
      minutos: Math.min(45, Math.max(15, minutosMeta)),
      estados,
      agora,
      recentes: new Set(respostas.filter((r) => r.data > umDia).map((r) => r.conceitoId)),
      jaVistas: new Set(respostas.map((r) => r.questaoId)),
    })
    // Recalcula só ao montar: a sessão não deve se reorganizar no meio.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SessaoEstudo
      passos={plano.passos}
      origem="rapido"
      titulo="Estudo rápido"
      justificativa={plano.justificativa}
    />
  )
}
