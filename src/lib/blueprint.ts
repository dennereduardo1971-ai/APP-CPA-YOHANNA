import type { ExamBlueprint } from './types'

/**
 * Estrutura oficial da prova — DADO, não código.
 *
 * Alterar este arquivo é suficiente para o app inteiro se adaptar a uma
 * mudança de programa: pesos, contagens, nota de corte e formatos são lidos
 * daqui pelo motor de desempenho, pelo gerador de simulado e pela interface.
 *
 * FONTES (agosto/2026): a ANBIMA reformulou as certificações em 2026,
 * descontinuando CPA-10, CPA-20 e CEA em favor da trilha CPA → C-Pro R →
 * C-Pro I. A nova CPA tem 50 questões (40 de múltipla escolha contextualizada
 * + 10 de árvore de decisão), 2h30 de duração e 70% de aprovação, dividida em
 * quatro blocos.
 *
 * ATENÇÃO: os PDFs oficiais da ANBIMA não puderam ser baixados neste
 * ambiente (bloqueio de rede). Os pesos por módulo marcados com
 * `pesoVerificado: false` em `content/index.ts` PRECISAM ser conferidos
 * contra o Programa Detalhado vigente antes de uso real. O app exibe aviso
 * enquanto `verificado` for `false`.
 */
export const BLUEPRINT: ExamBlueprint = {
  id: 'cpa',
  nome: 'CPA — Certificação Profissional ANBIMA',
  orgao: 'ANBIMA',
  versao: '2026.1',
  vigenteDesde: '2026-01-01',
  totalQuestoes: 50,
  duracaoMin: 150,
  notaCorte: 0.7,
  formatos: [
    { tipo: 'multipla_escolha', quantidade: 40 },
    { tipo: 'arvore_decisao', quantidade: 10 },
  ],
  verificado: false,
  fonte: 'anbima.com.br — Programa Detalhado da CPA (conferir edital vigente)',
}

/** Configuração dos modos de simulado, derivada do blueprint. */
export const SIMULADO_PRESETS = {
  completo: {
    rotulo: 'Simulado completo',
    descricao: `${BLUEPRINT.totalQuestoes} questões · ${BLUEPRINT.duracaoMin} min · cronômetro`,
    questoes: BLUEPRINT.totalQuestoes,
    minutos: BLUEPRINT.duracaoMin,
    cronometro: true,
  },
  rapido: {
    rotulo: 'Simulado rápido',
    descricao: '10 questões · 20 min · para medir o momento',
    questoes: 10,
    minutos: 20,
    cronometro: true,
  },
  tema: {
    rotulo: 'Simulado por tema',
    descricao: 'Você escolhe os macrotemas e a dificuldade',
    questoes: 15,
    minutos: 30,
    cronometro: false,
  },
  pontos_fracos: {
    rotulo: 'Simulado dos pontos fracos',
    descricao: 'Montado com os assuntos em que você mais erra',
    questoes: 15,
    minutos: 30,
    cronometro: false,
  },
} as const

/** Faixas de domínio — indicadores pedagógicos, não previsão de aprovação. */
export const FAIXAS_DOMINIO = [
  { id: 'inicial', min: 0, max: 0.399, rotulo: 'Inicial', cor: 'muted' },
  { id: 'desenvolvimento', min: 0.4, max: 0.599, rotulo: 'Em desenvolvimento', cor: 'warn' },
  { id: 'intermediario', min: 0.6, max: 0.749, rotulo: 'Intermediário', cor: 'warn' },
  { id: 'bom', min: 0.75, max: 0.899, rotulo: 'Bom', cor: 'aqua' },
  { id: 'dominado', min: 0.9, max: 1, rotulo: 'Dominado', cor: 'aqua' },
] as const
