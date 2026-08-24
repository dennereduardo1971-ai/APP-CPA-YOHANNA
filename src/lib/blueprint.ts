import type { ExamBlueprint } from './types'

/**
 * Estrutura oficial da prova — DADO, não código.
 *
 * Alterar este arquivo é suficiente para o app inteiro se adaptar a uma
 * mudança de programa: pesos, contagens, nota de corte e formatos são lidos
 * daqui pelo motor de desempenho, pelo gerador de simulado e pela interface.
 *
 * FONTES OFICIAIS (ambas conferidas):
 *
 * 1. Programa Detalhado da CPA — versão 1.2, revisada em 04/06/2025, vigente
 *    a partir de 01/01/2026. Define os 4 macrotemas e suas proporções
 *    (20% / 40% / 30% / 10%).
 * 2. Edital dos Exames de Certificação Profissional Anbima — versão 1.4, de
 *    28/05/2026, seções 3.2 e 13.5. Define, para a CPA: 50 questões, 2h30 de
 *    duração e mínimo de 35 acertos para aprovação (= 70%).
 *
 * O que a ANBIMA NÃO publica, e por isso não está declarado aqui:
 *
 * - quantas questões cabem a cada formato (o edital nomeia os três formatos,
 *   mas não os quantifica);
 * - a distribuição por grau de dificuldade.
 *
 * A prova disponibiliza calculadora, planilha eletrônica e um formulário de
 * fórmulas no próprio sistema (edital, itens 13.10 e 13.11) — o estudante não
 * precisa decorar fórmula, precisa saber aplicá-la.
 */
export const BLUEPRINT: ExamBlueprint = {
  id: 'cpa',
  nome: 'CPA — Certificado Profissional Anbima',
  orgao: 'ANBIMA',
  versao: '1.2',
  vigenteDesde: '2026-01-01',
  totalQuestoes: 50,
  duracaoMin: 150,
  /** 35 acertos em 50 questões (edital v1.4, seção 3.2). */
  notaCorte: 0.7,
  /**
   * Os três formatos nomeados no edital (seções 4.3 e 13.4) para a CPA.
   * Sem `quantidade`: a ANBIMA não divulga o rateio entre eles.
   */
  formatos: [
    { tipo: 'multipla_escolha' },
    { tipo: 'arvore_decisao' },
    { tipo: 'case' },
  ],
  verificado: true,
  fonte:
    'ANBIMA — Programa Detalhado da CPA v1.2 (04/06/2025) e Edital dos Exames ' +
    'de Certificação Profissional Anbima v1.4 (28/05/2026), seções 3.2 e 13.4.',
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
