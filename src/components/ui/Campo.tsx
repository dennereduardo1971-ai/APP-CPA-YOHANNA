import { useId, type ReactNode } from 'react'

/**
 * Campos de formulário do painel `/admin`.
 *
 * O app de estudo quase não tem formulário — só o onboarding e as metas. O
 * painel tem dezenas, então o estilo mora aqui em vez de ser recopiado.
 */

const BASE =
  'w-full rounded-xl border border-line bg-elevated px-3.5 text-[15px] outline-none transition-colors focus:border-aurora placeholder:text-muted/70'

function Envelope({
  rotulo,
  dica,
  htmlFor,
  children,
}: {
  rotulo: string
  dica?: string
  htmlFor: string
  children: ReactNode
}) {
  return (
    <div className="mb-4">
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold">
        {rotulo}
      </label>
      {dica && <p className="mb-2 text-xs leading-relaxed text-muted">{dica}</p>}
      {children}
    </div>
  )
}

export function Campo({
  rotulo,
  dica,
  valor,
  onChange,
  tipo = 'text',
  placeholder,
}: {
  rotulo: string
  dica?: string
  valor: string
  onChange: (v: string) => void
  tipo?: 'text' | 'number' | 'date'
  placeholder?: string
}) {
  const id = useId()
  return (
    <Envelope rotulo={rotulo} dica={dica} htmlFor={id}>
      <input
        id={id}
        type={tipo}
        value={valor}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`${BASE} h-11`}
      />
    </Envelope>
  )
}

export function AreaTexto({
  rotulo,
  dica,
  valor,
  onChange,
  linhas = 4,
  placeholder,
}: {
  rotulo: string
  dica?: string
  valor: string
  onChange: (v: string) => void
  linhas?: number
  placeholder?: string
}) {
  const id = useId()
  return (
    <Envelope rotulo={rotulo} dica={dica} htmlFor={id}>
      <textarea
        id={id}
        rows={linhas}
        value={valor}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`${BASE} resize-y py-2.5 leading-relaxed`}
      />
    </Envelope>
  )
}

/**
 * Lista de textos editada como uma linha por item.
 *
 * Vários campos do conteúdo são `string[]` — `comoFunciona`, `lembrarNaProva`,
 * `pontosChave`. Uma interface de "adicionar/remover item" para cada um seria
 * lenta de usar e grande de manter; uma caixa de texto onde cada linha é um
 * item resolve os três com o mesmo componente. Linha em branco é descartada,
 * então dá para respirar entre os itens enquanto escreve.
 */
export function ListaLinhas({
  rotulo,
  dica,
  valor,
  onChange,
  linhas = 5,
}: {
  rotulo: string
  dica?: string
  valor: string[]
  onChange: (v: string[]) => void
  linhas?: number
}) {
  const id = useId()
  return (
    <Envelope rotulo={rotulo} dica={dica ?? 'Um item por linha.'} htmlFor={id}>
      <textarea
        id={id}
        rows={linhas}
        value={valor.join('\n')}
        onChange={(e) =>
          onChange(
            e.target.value
              .split('\n')
              .map((linha) => linha.trim())
              .filter(Boolean),
          )
        }
        className={`${BASE} resize-y py-2.5 leading-relaxed`}
      />
    </Envelope>
  )
}

export function Selecao<T extends string>({
  rotulo,
  dica,
  valor,
  opcoes,
  onChange,
}: {
  rotulo: string
  dica?: string
  valor: T
  opcoes: { valor: T; rotulo: string }[]
  onChange: (v: T) => void
}) {
  const id = useId()
  return (
    <Envelope rotulo={rotulo} dica={dica} htmlFor={id}>
      <select
        id={id}
        value={valor}
        onChange={(e) => onChange(e.target.value as T)}
        className={`${BASE} h-11`}
      >
        {opcoes.map((o) => (
          <option key={o.valor} value={o.valor}>
            {o.rotulo}
          </option>
        ))}
      </select>
    </Envelope>
  )
}

export function Marcador({
  rotulo,
  dica,
  ativo,
  onChange,
}: {
  rotulo: string
  dica?: string
  ativo: boolean
  onChange: (v: boolean) => void
}) {
  const id = useId()
  return (
    <div className="mb-4 flex items-start gap-3">
      <input
        id={id}
        type="checkbox"
        checked={ativo}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-5 w-5 shrink-0 accent-[rgb(var(--aurora))]"
      />
      <label htmlFor={id} className="text-sm">
        <span className="font-semibold">{rotulo}</span>
        {dica && <span className="mt-0.5 block text-xs text-muted">{dica}</span>}
      </label>
    </div>
  )
}
