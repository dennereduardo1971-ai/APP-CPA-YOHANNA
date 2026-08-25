/**
 * Ícones autorais em SVG — substituem os glifos Unicode que a navegação usava.
 *
 * Por que não uma biblioteca: o app precisa rodar offline dentro do APK, e
 * glifos Unicode dependem da fonte do sistema (no Android, vários caíam em
 * caixinha). São traços em `currentColor`, então herdam a cor do contexto e
 * não introduzem cor nova — regra 7 do CLAUDE.md.
 *
 * Grade de 24×24, traço de 1.75, pontas arredondadas.
 */

export type IconeNome =
  | 'inicio'
  | 'trilha'
  | 'raio'
  | 'revisao'
  | 'questao'
  | 'cronometro'
  | 'resumo'
  | 'mapa'
  | 'progresso'
  | 'estatistica'
  | 'meta'
  | 'troféu'
  | 'perfil'
  | 'config'
  | 'escudo'
  | 'olho'
  | 'asa'
  | 'elo'
  | 'chama'
  | 'lanca'
  | 'pena'
  | 'livro'
  | 'cadeado'
  | 'bandeira'
  | 'check'
  | 'estrela'
  | 'x'
  | 'chevron'
  | 'losango'
  | 'nivel1'
  | 'nivel2'
  | 'nivel3'

/** Exportado para que testes possam validar nomes de ícone vindos de dados. */
export const ICONES: Record<IconeNome, string> = {
  inicio: 'M3 11.2 12 4l9 7.2M5.5 9.7V19a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.7M9.8 20v-5.4h4.4V20',
  trilha: 'M6 20V9m0 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm12 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-5V9a3 3 0 0 0-3-3H9',
  raio: 'M13.2 3 5 13.4h5.3L9.8 21 18 10.6h-5.3L13.2 3Z',
  revisao: 'M20 12a8 8 0 1 1-2.6-5.9M20 4v4.5h-4.5',
  questao: 'M9.2 9a2.9 2.9 0 1 1 3.9 2.7c-.7.3-1.1 1-1.1 1.8v.6M12 17.6v.4M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z',
  cronometro: 'M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-8V8.8M9.5 3h5M18.6 6.4l1.3-1.3',
  resumo: 'M4.5 6.5h15m-15 5h15m-15 5h9',
  mapa: 'M12 3v4m0 10v4M5 12h4m6 0h4M12 9.6a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8ZM5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm14 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm14 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z',
  progresso: 'M4 19.5h16M7 19.5V12m5 7.5V6.5m5 13V9.5',
  estatistica: 'M12 3a9 9 0 1 0 9 9h-9V3Z',
  meta: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-3.3a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
  troféu: 'M7.5 4h9v5a4.5 4.5 0 0 1-9 0V4Zm9 1.5H20V8a3.5 3.5 0 0 1-3.5 3.5m-9-6H4V8a3.5 3.5 0 0 0 3.5 3.5M12 13.5V17m-3.5 3h7',
  perfil: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8.5a7 7 0 0 1 14 0',
  config: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.4-3a7.4 7.4 0 0 0-.1-1.2l2-1.5-2-3.4-2.3 1a7.4 7.4 0 0 0-2-1.2L14.6 3H9.4l-.4 2.7c-.7.3-1.4.7-2 1.2l-2.3-1-2 3.4 2 1.5a7.4 7.4 0 0 0 0 2.4l-2 1.5 2 3.4 2.3-1c.6.5 1.3.9 2 1.2l.4 2.7h5.2l.4-2.7c.7-.3 1.4-.7 2-1.2l2.3 1 2-3.4-2-1.5c.1-.4.1-.8.1-1.2Z',
  // Marcas dos personagens — diferenciadas por forma, nunca por cor.
  escudo: 'M12 3.2 19 6v5.6c0 4-2.8 7.6-7 9.2-4.2-1.6-7-5.2-7-9.2V6l7-2.8Z',
  olho: 'M2.8 12S6.6 6 12 6s9.2 6 9.2 6-3.8 6-9.2 6-9.2-6-9.2-6Zm9.2 2.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z',
  asa: 'M3.5 17.5c5-.6 8.4-3 10.2-7.2C15 7.6 17 5.6 20.5 4.5c-.3 5-2 8.7-5 11.2-2.4 2-5.7 2.7-10 1.8Zm5.3-1.8 4.6-4.6',
  elo: 'M10.2 13.8a3.5 3.5 0 0 0 5 0l2.8-2.8a3.5 3.5 0 0 0-5-5l-1 1m-2 4.2a3.5 3.5 0 0 0-5 0L2.2 14a3.5 3.5 0 0 0 5 5l1-1',
  chama: 'M12 21c3.3 0 5.5-2.2 5.5-5.2 0-3.7-3-5.5-3.5-9.3-1.6 1.3-2.4 2.8-2.4 4.4 0 .9-.7 1.4-1.3 1-.9-.7-1.3-1.8-1.3-3-1.4 1.6-2.5 3.7-2.5 6.1C6.5 18.6 8.9 21 12 21Z',
  lanca: 'M4 20 20 4M20 4h-5m5 0v5M4 20l3.5-1.2L5.2 16.5 4 20Z',
  pena: 'M4 20c0-7 4.5-13 15-14-1 10-6 13.5-12 13.5H4Zm3.5-2.5L14 11',
  livro: 'M4 5.2c2.7-.9 5.3-.9 8 0v14c-2.7-.9-5.3-.9-8 0v-14Zm16 0c-2.7-.9-5.3-.9-8 0v14c2.7-.9 5.3-.9 8 0v-14Z',
  cadeado: 'M6.5 10.5h11a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-7.5a1 1 0 0 1 1-1Zm1.8 0V8a3.7 3.7 0 0 1 7.4 0v2.5M12 14v2.5',
  bandeira: 'M6 21V4m0 1.2c4-2 8 2 12 0v8.6c-4 2-8-2-12 0',
  check: 'm5 12.6 4.6 4.6L19 7.4',
  estrela: 'M12 3.4 14.7 9l6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.9 9.3 9 12 3.4Z',
  x: 'M6.6 6.6l10.8 10.8M17.4 6.6 6.6 17.4',
  chevron: 'm9.5 5.2 7 6.8-7 6.8',
  losango: 'M12 3.2 20.8 12 12 20.8 3.2 12Z',
  // Medidor de dificuldade: 1, 2 ou 3 pontos cheios. A forma diz o nível
  // sozinha — a cor é reforço, e o rótulo em texto vem ao lado.
  nivel1: 'M9.4 12a2.6 2.6 0 1 0 5.2 0 2.6 2.6 0 1 0-5.2 0Z',
  nivel2: 'M5.8 12a2.6 2.6 0 1 0 5.2 0 2.6 2.6 0 1 0-5.2 0Zm7.2 0a2.6 2.6 0 1 0 5.2 0 2.6 2.6 0 1 0-5.2 0Z',
  nivel3:
    'M2.9 12a2.6 2.6 0 1 0 5.2 0 2.6 2.6 0 1 0-5.2 0Zm6.5 0a2.6 2.6 0 1 0 5.2 0 2.6 2.6 0 1 0-5.2 0Zm6.5 0a2.6 2.6 0 1 0 5.2 0 2.6 2.6 0 1 0-5.2 0Z',
}

interface Props {
  nome: IconeNome
  /** Tamanho em px. Padrão 20 — a barra de navegação usa 22. */
  tamanho?: number
  className?: string
  /** Passe um rótulo só quando o ícone não estiver ao lado do texto. */
  titulo?: string
  /**
   * Preenche o traço em vez de contorná-lo. Só faz sentido em forma fechada
   * (estrela, losango, pontos) — é o par cheio/vazio de um estado ligado.
   */
  preenchido?: boolean
}

export function Icone({ nome, tamanho = 20, className = '', titulo, preenchido }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={tamanho}
      height={tamanho}
      className={className}
      fill={preenchido ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={preenchido ? 1 : 1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={titulo ? 'img' : undefined}
      aria-label={titulo}
      aria-hidden={titulo ? undefined : true}
      focusable="false"
    >
      {titulo && <title>{titulo}</title>}
      <path d={ICONES[nome]} />
    </svg>
  )
}
