import type { CorDragao } from '@/lib/personagens'

/**
 * Retratos dos personagens — SVG autoral, desenhado aqui dentro.
 *
 * São silhuetas simbólicas, não semelhanças: cada uma carrega o atributo que
 * identifica o personagem (cabeleira, máscara, garra, asa, elo, lâmina). Não
 * reproduzem arte de terceiros e não dependem de arquivo externo — o app
 * precisa desenhar tudo offline, dentro do APK.
 *
 * Desenhados com FORMA CHEIA, não traço fino. A marca aparece a partir de
 * 18 px na trilha, e nesse tamanho contorno vira borrão: só massa preenchida
 * continua legível.
 *
 * O recorte do rosto usa `rgb(var(--bg))` de propósito — é o fundo da página
 * aparecendo através do desenho, o que mantém o retrato correto sem precisar
 * saber em que superfície ele foi colocado.
 *
 * Quem quiser arte própria põe `public/personagens/<id>.webp`; o componente
 * `MarcaPersonagem` usa o arquivo quando existe e cai neste desenho quando não.
 */

export type RetratoNome = 'yona' | 'ao' | 'kija' | 'shinah' | 'jaeha' | 'zeno' | 'hak'

const CLASSE_COR: Record<CorDragao, string> = {
  aurora: 'text-aurora',
  hakuryuu: 'text-hakuryuu',
  seiryuu: 'text-seiryuu',
  ryokuryuu: 'text-ryokuryuu',
  ouryuu: 'text-ouryuu',
}

const VAZIO = 'rgb(var(--bg))'

const TRACOS: Record<RetratoNome, JSX.Element> = {
  // Cabeleira volumosa com o rosto recortado — a marca da guia da jornada.
  yona: (
    <>
      <path
        d="M11.8 41c-2.4-9.6-2.6-19.4 1.4-26.7C16.2 8.7 20 6.2 24 6.2s7.8 2.5 10.8 8.1c4 7.3 3.8 17.1 1.4 26.7-1-8-2.2-13.9-4.4-18-2 3.3-4.6 4.9-7.8 4.9s-5.8-1.6-7.8-4.9c-2.2 4.1-3.4 10-4.4 18Z"
        fill="currentColor"
      />
      <ellipse cx="24" cy="19.6" rx="6.6" ry="7.6" fill={VAZIO} />
    </>
  ),
  // Pequeno companheiro de estudo: corpo redondo e cauda em pluma.
  ao: (
    <>
      <path
        d="M30.4 11.4c4.8 0 8.2 4.3 8.2 10.4 0 8.6-5.2 15-13.4 16.6l.8 4.2H14.2c-2.8-2.2-4.4-5.4-4.4-9.2 0-7.3 5.4-13.2 12.2-13.2 1.4 0 2.7.2 3.9.6-.8-1.5-1.3-3.2-1.3-5 0-2.8 2.5-4.4 5.8-4.4Z"
        fill="currentColor"
      />
      <circle cx="18.2" cy="30.6" r="1.7" fill={VAZIO} />
    </>
  ),
  // Garra do dragão branco — o braço que protege.
  kija: (
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.6 25.4c3-3.8 7-5.7 12-5.7 4.6 0 8.5 1.7 11.4 5.1" strokeWidth="3.2" />
      <path d="M16.6 44c-3.4-6.9-3.6-13.5-.6-19.9" strokeWidth="3.4" />
      <path d="M25 44c1-7.3.2-13.6-2.4-18.8" strokeWidth="3.4" />
      <path d="M33 41c3-5.9 4-11.9 3-18.2" strokeWidth="3.4" />
    </g>
  ),
  // Máscara de fendas — o guardião que enxerga longe.
  shinah: (
    <>
      <path
        d="M10.6 15.2h26.8v10.4c0 5.7-4.4 9.8-10.2 9.8h-6.4c-5.8 0-10.2-4.1-10.2-9.8Z"
        fill="currentColor"
      />
      <rect x="15.4" y="21" width="5.8" height="3.2" rx="1.6" fill={VAZIO} />
      <rect x="26.8" y="21" width="5.8" height="3.2" rx="1.6" fill={VAZIO} />
      <path d="M8.6 39.6c3.2-2.4 6.6-3.6 10.2-3.6M39.4 39.6c-3.2-2.4-6.6-3.6-10.2-3.6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" opacity=".5" />
    </>
  ),
  // Asas — o guardião que se move livre.
  jaeha: (
    <>
      <path
        d="M23 43C13.4 41.4 6.6 34.2 6.6 25c4.3 3.2 8.1 4.7 11.5 4.5-3.8-3.6-6-8.3-6.2-13.7 4 4.1 7.7 6.4 11.1 7Z"
        fill="currentColor"
      />
      <path
        d="M25 43c9.6-1.6 16.4-8.8 16.4-18-4.3 3.2-8.1 4.7-11.5 4.5 3.8-3.6 6-8.3 6.2-13.7-4 4.1-7.7 6.4-11.1 7Z"
        fill="currentColor"
      />
      <path d="M24 11.6v31.6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" opacity=".7" />
    </>
  ),
  // Elo que não se rompe — o guardião do módulo mais novo.
  zeno: (
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 8.6c8.5 0 15.4 6.9 15.4 15.4S32.5 39.4 24 39.4c-6.1 0-11.4-3.5-13.9-8.6" strokeWidth="4.2" />
      <path d="M10.4 32.6 8.2 24.4l8.2-1.8" strokeWidth="3.4" />
    </g>
  ),
  // Lâmina em haste — o guardião dos desafios.
  hak: (
    <>
      <path d="M12.4 43.6 30 17.2" stroke="currentColor" strokeWidth="4.2" strokeLinecap="round" fill="none" />
      <path
        d="M27.4 20.6c1.6-5.2 5-9 10.2-11.4-.9 5.4-.5 10.2 1.4 14.2-5.2.9-9.5.2-11.6-2.8Z"
        fill="currentColor"
      />
    </>
  ),
}

export function Retrato({
  nome,
  cor,
  tamanho = 40,
  className = '',
}: {
  nome: RetratoNome
  cor: CorDragao
  tamanho?: number
  className?: string
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 48 48"
      width={tamanho}
      height={tamanho}
      className={`${CLASSE_COR[cor]} ${className}`}
    >
      {TRACOS[nome]}
    </svg>
  )
}
