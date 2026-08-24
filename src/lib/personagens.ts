import type { IconeNome } from '@/components/ui/Icone'

/**
 * Identidade temática da plataforma — DADO, não código.
 *
 * Nenhum componente deve conter nome, papel ou fala de personagem: tudo sai
 * daqui. Trocar a temática inteira é editar este arquivo.
 *
 * Três decisões que valem registro:
 *
 * 1. **Sem cor por personagem.** Os dragões têm cores no material de origem,
 *    mas a regra 7 do CLAUDE.md admite um único acento (verde-água). A
 *    identidade visual vem da FORMA do ícone, nunca de cor nova.
 * 2. **Sem arte embutida.** `avatar` é um slot opcional apontando para
 *    `public/personagens/<id>.webp`. Enquanto não houver arquivo, o app
 *    desenha o ícone geométrico — e continua funcionando offline.
 * 3. **Falas autorais.** Os textos de guia foram escritos para o contexto de
 *    estudo; não reproduzem diálogo da obra original.
 */
export interface Personagem {
  id: string
  nome: string
  /** Papel na plataforma, em uma linha. */
  papel: string
  /** Fala curta de acompanhamento, exibida na área que o personagem guia. */
  guia: string
  icone: IconeNome
  /** Arte própria, se houver: `/personagens/<id>.webp`. */
  avatar?: string
  /** Macrotema guardado — só para os guardiões de módulo. */
  macrotemaId?: string
}

export const PERSONAGENS: Personagem[] = [
  {
    id: 'yona',
    nome: 'Yona',
    papel: 'Guia da jornada',
    guia: 'Você não precisa saber tudo hoje. Precisa saber um pouco mais do que ontem.',
    icone: 'chama',
  },
  {
    id: 'ao',
    nome: 'Ao',
    papel: 'Companhia de estudo',
    guia: 'Sessão curta, feita todo dia, vence maratona feita uma vez por mês.',
    icone: 'pena',
  },
  {
    id: 'kija',
    nome: 'Kija',
    papel: 'Guardião do módulo 1',
    guia: 'Comece pela estrutura. Quem entende quem manda no sistema entende todo o resto.',
    icone: 'escudo',
    macrotemaId: 'm1',
  },
  {
    id: 'shinah',
    nome: 'Shin-Ah',
    papel: 'Guardião do módulo 2',
    guia: 'Aqui está o maior peso da prova. Enxergue a diferença entre os produtos antes de decorar nomes.',
    icone: 'olho',
    macrotemaId: 'm2',
  },
  {
    id: 'jaeha',
    nome: 'Jae-Ha',
    papel: 'Guardião do módulo 3',
    guia: 'Este módulo é sobre pessoas. A resposta certa costuma ser a que protege o cliente.',
    icone: 'asa',
    macrotemaId: 'm3',
  },
  {
    id: 'zeno',
    nome: 'Zeno',
    papel: 'Guardião do módulo 4',
    guia: 'O módulo mais novo e o mais leve. Vale pontos fáceis para quem não deixa por último.',
    icone: 'elo',
    macrotemaId: 'm4',
  },
  {
    id: 'hak',
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
