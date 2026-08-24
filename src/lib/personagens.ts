import type { IconeNome } from '@/components/ui/Icone'
import type { RetratoNome } from '@/components/domain/Retrato'

/**
 * Identidade temática da plataforma — DADO, não código.
 *
 * Nenhum componente deve conter nome, papel ou fala de personagem: tudo sai
 * daqui. Trocar a temática inteira é editar este arquivo.
 *
 * Três decisões que valem registro:
 *
 * 1. **Uma cor por guardião, e só para os guardiões.** A regra 7 do CLAUDE.md
 *    admite um acento de marca (`aurora`) mais quatro cores de identidade de
 *    módulo — as dos quatro dragões. Elas nunca decoram: só aparecem para
 *    dizer de que módulo aquilo é. Personagem sem módulo herda `aurora`.
 * 2. **Arte externa é opcional.** O app desenha o retrato em SVG (ver
 *    `components/domain/Retrato.tsx`) e funciona offline. `avatar` é um slot
 *    para `public/personagens/<id>.webp`; quando o arquivo existe, ele
 *    substitui o desenho.
 * 3. **Falas autorais.** Os textos de guia foram escritos para o contexto de
 *    estudo; não reproduzem diálogo da obra original.
 */

/** Cores de identidade — o acento da marca mais os quatro dragões. */
export type CorDragao = 'aurora' | 'hakuryuu' | 'seiryuu' | 'ryokuryuu' | 'ouryuu'

export interface Personagem {
  id: string
  nome: string
  /** Papel na plataforma, em uma linha. */
  papel: string
  /** Fala curta de acompanhamento, exibida na área que o personagem guia. */
  guia: string
  icone: IconeNome
  /** Retrato autoral em SVG — sempre existe, mesmo sem arquivo de arte. */
  retrato: RetratoNome
  /** Identidade de cor. Só os guardiões de módulo têm cor própria. */
  cor: CorDragao
  /** Arte própria, se houver: `/personagens/<id>.webp`. */
  avatar?: string
  /** Macrotema guardado — só para os guardiões de módulo. */
  macrotemaId?: string
}

export const PERSONAGENS: Personagem[] = [
  {
    id: 'yona',
    retrato: 'yona',
    cor: 'aurora',
    nome: 'Yona',
    papel: 'Guia da jornada',
    guia: 'Você não precisa saber tudo hoje. Precisa saber um pouco mais do que ontem.',
    icone: 'chama',
  },
  {
    id: 'ao',
    retrato: 'ao',
    cor: 'aurora',
    nome: 'Ao',
    papel: 'Companhia de estudo',
    guia: 'Sessão curta, feita todo dia, vence maratona feita uma vez por mês.',
    icone: 'pena',
  },
  {
    id: 'kija',
    retrato: 'kija',
    cor: 'hakuryuu',
    nome: 'Kija',
    papel: 'Guardião do módulo 1',
    guia: 'Comece pela estrutura. Quem entende quem manda no sistema entende todo o resto.',
    icone: 'escudo',
    macrotemaId: 'm1',
  },
  {
    id: 'shinah',
    retrato: 'shinah',
    cor: 'seiryuu',
    nome: 'Shin-Ah',
    papel: 'Guardião do módulo 2',
    guia: 'Aqui está o maior peso da prova. Enxergue a diferença entre os produtos antes de decorar nomes.',
    icone: 'olho',
    macrotemaId: 'm2',
  },
  {
    id: 'jaeha',
    retrato: 'jaeha',
    cor: 'ryokuryuu',
    nome: 'Jae-Ha',
    papel: 'Guardião do módulo 3',
    guia: 'Este módulo é sobre pessoas. A resposta certa costuma ser a que protege o cliente.',
    icone: 'asa',
    macrotemaId: 'm3',
  },
  {
    id: 'zeno',
    retrato: 'zeno',
    cor: 'ouryuu',
    nome: 'Zeno',
    papel: 'Guardião do módulo 4',
    guia: 'O módulo mais novo e o mais leve. Vale pontos fáceis para quem não deixa por último.',
    icone: 'elo',
    macrotemaId: 'm4',
  },
  {
    id: 'hak',
    retrato: 'hak',
    cor: 'aurora',
    nome: 'Son Hak',
    papel: 'Guardião dos desafios',
    guia: 'Simulado não é prova. É onde errar sai barato — então erre aqui.',
    icone: 'lanca',
  },
]

const porId = new Map(PERSONAGENS.map((p) => [p.id, p]))
const porMacrotema = new Map(
  PERSONAGENS.filter((p) => p.macrotemaId).map((p) => [p.macrotemaId!, p]),
)

export const getPersonagem = (id: string) => porId.get(id)

/** Guardião do macrotema, quando houver um alocado. */
export const guardiaoDoMacrotema = (macrotemaId: string) => porMacrotema.get(macrotemaId)

/** Guia da jornada — perfil, início e progresso. */
export const GUIA_PRINCIPAL = porId.get('yona')!

/** Companhia de estudo — trilha, estudo rápido e conteúdo. */
export const MASCOTE = porId.get('ao')!

/** Guardião dos desafios — simulados e modo exame. */
export const GUARDIAO_DESAFIOS = porId.get('hak')!
