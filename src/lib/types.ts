/**
 * Tipos de domínio do Preparatório CPA.
 *
 * Hierarquia de conteúdo (conforme especificado):
 *   MACROTEMA → MICROTEMA → CONCEITO → EXPLICAÇÃO → EXEMPLO
 *             → PONTO DE ATENÇÃO → QUESTÃO → REVISÃO
 */

/* ------------------------------------------------------------------ */
/* Blueprint da prova (estrutura oficial — dado, não código)           */
/* ------------------------------------------------------------------ */

export interface ExamBlueprint {
  /** Slug da certificação. */
  id: string
  nome: string
  orgao: string
  /** Versão do programa detalhado em que este blueprint se baseia. */
  versao: string
  vigenteDesde: string
  totalQuestoes: number
  duracaoMin: number
  /** Percentual mínimo de acerto para aprovação (0–1). */
  notaCorte: number
  /**
   * Formatos de questão da prova. A ANBIMA nomeia os formatos no edital, mas
   * NÃO publica quantas questões cabem a cada um — por isso `quantidade` é
   * opcional e fica ausente enquanto não houver fonte.
   */
  formatos: { tipo: QuestionKind; quantidade?: number }[]
  /**
   * `true` somente quando os dados foram conferidos contra documento oficial
   * da ANBIMA. Enquanto `false`, a interface exibe aviso.
   */
  verificado: boolean
  fonte: string
}

/* ------------------------------------------------------------------ */
/* Conteúdo                                                            */
/* ------------------------------------------------------------------ */

export type Etiqueta = 'ESSENCIAL' | 'ATENCAO' | 'DECORAR' | 'ENTENDER' | 'PEGADINHA'

export interface Macrotema {
  id: string
  codigo: string
  nome: string
  resumo: string
  /** Peso do módulo na prova (0–1). `null` quando ainda não verificado. */
  peso: number | null
  pesoVerificado: boolean
  ordem: number
  microtemas: Microtema[]
}

export interface Microtema {
  id: string
  macrotemaId: string
  /** Código do item no Programa Detalhado oficial (ex.: "2.1"). */
  codigo: string
  nome: string
  ordem: number
  /** Microtemas que precisam estar em nível >= 0.6 para liberar este. */
  preRequisitos: string[]
  conceitos: Conceito[]
}

/**
 * Corpo da lição. Cobre os nove blocos obrigatórios da especificação:
 *
 * | # | Bloco                            | Campo                    |
 * |---|----------------------------------|--------------------------|
 * | 1 | O que é?                         | `oQueE`                  |
 * | 2 | Por que isso importa?            | `porQueImporta`          |
 * | 3 | Como funciona?                   | `comoFunciona`           |
 * | 4 | Exemplo simples                  | `exemploSimples`         |
 * | 5 | Exemplo aplicado ao mercado      | `exemploAplicado`        |
 * | 6 | O que preciso lembrar?           | `lembrarNaProva`         |
 * | 7 | Erro comum                       | `Conceito.erroComum`     |
 * | 8 | Miniquestão                      | `Conceito.perguntaRapida`|
 * | 9 | Revisão rápida                   | `revisaoRapida`          |
 *
 * Os três blocos novos são opcionais durante a migração dos conceitos
 * legados e passam a obrigatórios quando todos estiverem preenchidos.
 */
export interface Explicacao {
  oQueE: string
  /** Bloco 2 — por que o assunto importa na prática e na prova. */
  porQueImporta?: string
  paraQueServe: string
  comoFunciona: string[]
  exemploSimples: string
  /** Bloco 5 — o mesmo conceito numa situação real de mercado. */
  exemploAplicado?: string
  lembrarNaProva: string[]
  /** Bloco 9 — varredura final, uma linha por ideia. */
  revisaoRapida?: string[]
}

/**
 * Três níveis progressivos de profundidade (item 4 da especificação).
 *
 * O **nível 2 (Aprenda)** é a própria `Conceito.explicacao` — não se duplica
 * texto. Aqui ficam só o degrau abaixo e o degrau acima:
 *
 * - `entenda`   — nível 1: uma ou duas frases, linguagem do dia a dia.
 * - `aprofunde` — nível 3: detalhe técnico, exceções e conexões com outros
 *                 conceitos, para quem quer ir além do exigido na prova.
 *
 * O usuário nunca é obrigado a ler os níveis 2 ou 3.
 */
export interface NiveisExplicacao {
  entenda: string
  aprofunde: string
}

export interface Conceito {
  id: string
  microtemaId: string
  titulo: string
  objetivo: string
  etiquetas: Etiqueta[]
  /** Resumo de 30 segundos. */
  resumo30s: string
  explicacao: Explicacao
  exemplos: Exemplo[]
  conceitoChave: string
  pontosChave: string[]
  erroComum: string
  /** Alerta de prova — o que a banca costuma explorar. */
  alertaProva?: string
  tabela?: TabelaComparativa
  /** Pergunta rápida ao fim da aula (miniquestão). */
  perguntaRapida: PerguntaRapida
  mapaMental: MapaMentalNode
  /** Reformulações pré-autoradas para "Explique de outro jeito". */
  reexplicacoes: Reexplicacoes
  /** Níveis 1 e 3. O nível 2 é a própria `explicacao`. */
  niveis?: NiveisExplicacao
  minutosEstimados: number
  /** Versão do conteúdo — incrementada a cada revisão editorial. */
  versao?: number
  /** Data ISO da última revisão editorial. */
  atualizadoEm?: string
}

export interface Exemplo {
  titulo: string
  corpo: string
}

export interface TabelaComparativa {
  titulo: string
  colunas: string[]
  linhas: string[][]
}

export interface PerguntaRapida {
  enunciado: string
  alternativas: string[]
  correta: number
  explicacao: string
}

export interface MapaMentalNode {
  id: string
  rotulo: string
  /** Detalhe curto exibido ao destacar o nó. */
  detalhe?: string
  /** Nós marcados aparecem no "Mapa mental para revisão". */
  revisao?: boolean
  filhos?: MapaMentalNode[]
}

export interface Reexplicacoes {
  simples: string
  exemplo: string
  analogia: string
  iniciante: string
}

/* ------------------------------------------------------------------ */
/* Questões                                                            */
/* ------------------------------------------------------------------ */

export type QuestionKind =
  | 'multipla_escolha'
  | 'conceitual'
  | 'aplicacao'
  | 'calculo'
  | 'situacao_pratica'
  | 'comparacao'
  | 'verdadeiro_falso'
  | 'arvore_decisao'
  | 'case'

export type Dificuldade = 'facil' | 'media' | 'dificil'

export interface Alternativa {
  id: string
  texto: string
  correta: boolean
  /** Justificativa — obrigatória inclusive nas incorretas. */
  justificativa: string
}

export interface Questao {
  id: string
  macrotemaId: string
  microtemaId: string
  conceitoId: string
  tipo: QuestionKind
  dificuldade: Dificuldade
  /** Habilidade avaliada (verbo + objeto). */
  habilidade: string
  /** Contexto opcional — usado em situação prática e case. */
  contexto?: string
  enunciado: string
  alternativas: Alternativa[]
  explicacao: string
  tags: string[]
  /** Dificuldade latente para o motor adaptativo (escala logit). */
  b: number
  /** Passos de uma árvore de decisão. Só em `arvore_decisao`. */
  passos?: PassoDecisao[]
  /** Origem — todo item é autoral. */
  origem: 'autoral'
}

export interface PassoDecisao {
  id: string
  enunciado: string
  alternativas: Alternativa[]
  /** Texto que liga este passo ao próximo, conforme a escolha. */
  desdobramento: string
}

/* ------------------------------------------------------------------ */
/* Registro de respostas e desempenho                                  */
/* ------------------------------------------------------------------ */

export type Origem = 'aula' | 'pratica' | 'rapido' | 'simulado' | 'revisao' | 'vespera'

export interface Resposta {
  id: string
  questaoId: string
  macrotemaId: string
  microtemaId: string
  conceitoId: string
  dificuldade: Dificuldade
  /** Índice/ID da alternativa escolhida. */
  escolhida: string
  correta: string
  acertou: boolean
  /** Milissegundos gastos. */
  tempoMs: number
  /** Tentativa nº para esta questão (1 = primeira vez). */
  tentativa: number
  data: number
  origem: Origem
}

export interface EstadoConceito {
  conceitoId: string
  microtemaId: string
  macrotemaId: string
  /** Habilidade latente (logit). */
  theta: number
  /** Nível de domínio 0–1, sem decaimento. */
  m: number
  /** Nº de respostas registradas. */
  n: number
  acertos: number
  /** Estabilidade da memória, em dias. */
  estabilidade: number
  ultimaPratica: number
  /** Timestamp em que a revisão vence. */
  revisarEm: number
  /** Aula concluída. */
  aulaConcluida: boolean
  /** Erros ainda não superados. */
  errosAbertos: number
}

export type NivelDominio = 'inicial' | 'desenvolvimento' | 'intermediario' | 'bom' | 'dominado'

/* ------------------------------------------------------------------ */
/* Gamificação, metas e conta                                          */
/* ------------------------------------------------------------------ */

export interface Conquista {
  id: string
  nome: string
  descricao: string
  icone: string
  /** Categoria pedagógica que a conquista incentiva. */
  incentiva: 'consistencia' | 'revisao' | 'conclusao' | 'desempenho' | 'meta' | 'guardioes'
}

export interface EventoXP {
  id: string
  pontos: number
  motivo: string
  data: number
}

export interface Metas {
  minutosDia: number
  questoesDia: number
  diasSemana: number
  dataProva: string | null
}

export interface Sequencia {
  atual: number
  recorde: number
  ultimoDia: string | null
  congelamentos: number
}

export interface SessaoHistorico {
  id: string
  tipo: Origem
  inicio: number
  fim: number
  questoes: number
  acertos: number
  xp: number
  rotulo: string
}

export interface ResultadoSimulado {
  id: string
  modo: SimuladoModo
  inicio: number
  fim: number
  totalQuestoes: number
  acertos: number
  percentual: number
  aprovado: boolean
  tempoMedioMs: number
  porMacrotema: Record<string, { total: number; acertos: number }>
  porDificuldade: Record<Dificuldade, { total: number; acertos: number }>
  respostas: Resposta[]
}

export type SimuladoModo = 'completo' | 'rapido' | 'tema' | 'pontos_fracos'

export interface Favoritos {
  conceitos: string[]
  questoes: string[]
  mapas: string[]
}

export interface Perfil {
  nome: string
  avatar: string | null
  criadoEm: number
}
