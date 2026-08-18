import { Vazio } from '@/components/ui/Empty'
import { ButtonLink } from '@/components/ui/Button'

export default function NaoEncontrado() {
  return (
    <div className="py-16">
      <Vazio
        icone="?"
        titulo="Página não encontrada"
        descricao="O endereço acessado não existe neste aplicativo."
        acao={<ButtonLink to="/">Voltar ao início</ButtonLink>}
      />
    </div>
  )
}
