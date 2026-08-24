import { useState } from 'react'
import { Retrato } from '@/components/domain/Retrato'
import type { CorDragao, Personagem } from '@/lib/personagens'

/**
 * Classes por cor de identidade. Precisa ser um mapa literal: o Tailwind varre
 * o código-fonte em busca de nomes de classe completos e não enxerga
 * `border-${cor}/30` montado em tempo de execução.
 */
const MOLDURA: Record<CorDragao, string> = {
  aurora: 'border-aurora/35 bg-aurora/10',
  hakuryuu: 'border-hakuryuu/35 bg-hakuryuu/10',
  seiryuu: 'border-seiryuu/35 bg-seiryuu/10',
  ryokuryuu: 'border-ryokuryuu/35 bg-ryokuryuu/10',
  ouryuu: 'border-ouryuu/35 bg-ouryuu/10',
}

const TEXTO: Record<CorDragao, string> = {
  aurora: 'text-aurora',
  hakuryuu: 'text-hakuryuu',
  seiryuu: 'text-seiryuu',
  ryokuryuu: 'text-ryokuryuu',
  ouryuu: 'text-ouryuu',
}

/**
 * Classes prontas por cor de identidade, para quem precisa colorir algo fora
 * da marca — o número do módulo na trilha, por exemplo. Literais pelo mesmo
 * motivo do mapa acima: o Tailwind só enxerga nome de classe completo.
 */
export const TOM_PERSONAGEM: Record<
  CorDragao,
  { texto: string; borda: string; solido: string }
> = {
  aurora: { texto: 'text-aurora', borda: 'border-aurora/50', solido: 'border-aurora bg-aurora' },
  hakuryuu: {
    texto: 'text-hakuryuu',
    borda: 'border-hakuryuu/50',
    solido: 'border-hakuryuu bg-hakuryuu',
  },
  seiryuu: {
    texto: 'text-seiryuu',
    borda: 'border-seiryuu/50',
    solido: 'border-seiryuu bg-seiryuu',
  },
  ryokuryuu: {
    texto: 'text-ryokuryuu',
    borda: 'border-ryokuryuu/50',
    solido: 'border-ryokuryuu bg-ryokuryuu',
  },
  ouryuu: { texto: 'text-ouryuu', borda: 'border-ouryuu/50', solido: 'border-ouryuu bg-ouryuu' },
}

/**
 * Marca do personagem. Desenha o retrato autoral em SVG por padrão e usa a
 * arte de `public/personagens/<id>.webp` quando o arquivo existe — caindo de
 * volta no desenho se o arquivo falhar ao carregar. O app nunca depende de
 * asset para funcionar.
 */
export function MarcaPersonagem({
  personagem,
  tamanho = 40,
  className = '',
}: {
  personagem: Personagem
  tamanho?: number
  className?: string
}) {
  const [falhou, setFalhou] = useState(false)
  const mostrarArte = Boolean(personagem.avatar) && !falhou

  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden rounded-full border ${
        MOLDURA[personagem.cor]
      } ${className}`}
      style={{ width: tamanho, height: tamanho }}
    >
      {mostrarArte ? (
        <img
          src={personagem.avatar}
          alt=""
          width={tamanho}
          height={tamanho}
          className="h-full w-full object-cover"
          onError={() => setFalhou(true)}
        />
      ) : (
        <Retrato
          nome={personagem.retrato}
          cor={personagem.cor}
          tamanho={Math.round(tamanho * 0.92)}
        />
      )}
    </span>
  )
}

/**
 * Faixa de acompanhamento: marca, papel e a fala de guia do personagem.
 * Decorativa — não anuncia nada extra a leitores de tela além do texto.
 */
export function FaixaPersonagem({
  personagem,
  className = '',
}: {
  personagem: Personagem
  className?: string
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-line bg-elevated/50 p-3 ${className}`}
    >
      <MarcaPersonagem personagem={personagem} tamanho={44} />
      <div className="min-w-0">
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.13em] ${
            TEXTO[personagem.cor]
          }`}
        >
          {personagem.nome} · {personagem.papel}
        </p>
        <p className="mt-0.5 text-[14px] leading-relaxed text-ink-2">{personagem.guia}</p>
      </div>
    </div>
  )
}
