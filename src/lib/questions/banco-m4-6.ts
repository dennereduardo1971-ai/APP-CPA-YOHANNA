import { q } from './builder'

/**
 * Questões autorais — microtema 4.6 (Inteligência artificial).
 *
 * O que a prova cobra aqui não é técnica de modelagem: é ONDE A
 * RESPONSABILIDADE FICA quando a decisão passa por um sistema automatizado. A
 * resposta é sempre a mesma — com a instituição e com o profissional —, e os
 * distratores oferecem as três fugas mais comuns: transferir o dever ao
 * fornecedor, invocar segredo comercial para não explicar, e tratar a saída
 * do modelo como objetiva por ser estatística.
 *
 * Nenhuma questão afirma existir regulação específica de IA vigente no
 * Brasil: o tema está em construção legislativa (regra 4 do CLAUDE.md).
 */
export const BANCO_M4_6 = [
  /* ---- c-ia-mercado ------------------------------------------------------ */
  q('q-iam-01', {
    c: 'c-ia-mercado', tipo: 'conceitual', dif: 'media',
    hab: 'Distinguir sistema de apoio de decisão automatizada',
    e: 'A distinção relevante entre sistema de apoio à decisão e decisão automatizada está em:',
    alt: [
      ['Se a decisão final permanece com uma pessoa ou é tomada pelo sistema sem intervenção humana.', true, 'Correta. Os deveres associados a cada caso são diferentes.'],
      ['Na complexidade do modelo estatístico utilizado.', false, 'A complexidade técnica não altera de quem é a decisão.'],
      ['No volume de dados processados pelo sistema.', false, 'Volume não define o regime de responsabilidade.'],
      ['Na existência de contrato com fornecedor externo.', false, 'A origem da tecnologia não muda quem decide.'],
    ],
    exp: 'A pergunta que separa os dois casos é operacional: alguém revisou antes de valer?',
    tags: ['ia', 'decisao-automatizada', 'conceitual'],
  }),
  q('q-iam-02', {
    c: 'c-ia-mercado', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Responder a pedido de explicação sobre decisão automatizada',
    ctx: 'Um cliente teve o crédito negado por um sistema automatizado e pergunta o motivo.',
    e: 'A conduta correta da instituição é:',
    alt: [
      ['Informar os critérios considerados e oferecer a possibilidade de revisão da decisão.', true, 'Correta. A opacidade do modelo é problema de quem o adotou, não do cliente.'],
      ['Informar que a decisão é do sistema e não pode ser detalhada.', false, '"O sistema decidiu" não é justificativa aceitável perante o cliente.'],
      ['Encaminhar o cliente ao fornecedor do sistema de análise.', false, 'A relação do cliente é com a instituição, que ofereceu o serviço.'],
      ['Recusar a explicação por se tratar de segredo comercial do modelo.', false, 'Segredo comercial não afasta o dever de explicar decisão que afeta direitos.'],
    ],
    exp: 'Decisão que afeta direitos precisa ser justificável — a tecnologia empregada não altera esse dever.',
    tags: ['ia', 'explicabilidade', 'atendimento'],
  }),
  q('q-iam-03', {
    c: 'c-ia-mercado', tipo: 'conceitual', dif: 'media',
    hab: 'Localizar a responsabilidade no uso de consultores automatizados',
    e: 'Quando uma instituição oferece recomendação de investimentos por meio de consultor automatizado, o dever de adequação:',
    alt: [
      ['Permanece integralmente com a instituição que oferece o serviço.', true, 'Correta. O robô segue regras definidas por alguém e opera sobre dados coletados por alguém.'],
      ['Transfere-se ao desenvolvedor do algoritmo.', false, 'Quem responde perante o cliente é quem ofereceu o serviço.'],
      ['Transfere-se ao cliente, que escolheu usar o canal automatizado.', false, 'A escolha do canal não afasta o dever de adequação.'],
      ['Fica suspenso enquanto a operação for exclusivamente digital.', false, 'O dever não depende do meio pelo qual o serviço é prestado.'],
    ],
    exp: 'A tecnologia muda quem executa a tarefa; não muda de quem é o dever.',
    tags: ['ia', 'suitability', 'conceitual'],
  }),

  /* ---- c-ia-riscos --------------------------------------------------------- */
  q('q-iar-01', {
    c: 'c-ia-riscos', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer a origem do viés algorítmico',
    e: 'O viés em um modelo de análise de crédito decorre principalmente de:',
    alt: [
      ['O modelo aprender os padrões do dado histórico com que foi treinado, inclusive os injustos.', true, 'Correta. E apresentar o resultado como conclusão estatística, não como preconceito herdado.'],
      ['Erros de programação cometidos no desenvolvimento do sistema.', false, 'O viés pode existir em código perfeitamente correto: ele vem do dado.'],
      ['Falta de capacidade computacional para processar todos os casos.', false, 'Capacidade de processamento não gera nem corrige viés.'],
      ['Interferência manual dos analistas na decisão final.', false, 'O problema discutido é justamente o da decisão sem intervenção humana.'],
    ],
    exp: 'Um número produzido a partir de dado enviesado é um viés com aparência de neutralidade.',
    tags: ['ia', 'vies', 'conceitual'],
  }),
  q('q-iar-02', {
    c: 'c-ia-riscos', tipo: 'comparacao', dif: 'dificil',
    hab: 'Comparar erro humano e erro automatizado',
    e: 'A principal diferença entre um viés humano e um viés incorporado a um modelo automatizado é que o viés do modelo:',
    alt: [
      ['Afeta todos os casos simultaneamente, de forma consistente e sem que ninguém precise concordar com ele.', true, 'Correta. É a escala que transforma um erro em milhares de erros idênticos.'],
      ['É mais fácil de identificar, por estar expresso em código.', false, 'Modelos complexos são opacos por construção; o viés costuma ser invisível.'],
      ['Tem impacto menor, por ser resultado de cálculo estatístico.', false, 'A origem estatística não reduz o impacto; apenas o disfarça de objetividade.'],
      ['Só ocorre quando o modelo utiliza dados pessoais sensíveis.', false, 'O viés sobrevive em variáveis aparentemente neutras que funcionam como proxies.'],
    ],
    exp: 'O erro humano é individual e visível; o erro automatizado é coletivo, consistente e silencioso.',
    tags: ['ia', 'vies', 'comparacao'],
  }),
  q('q-iar-03', {
    c: 'c-ia-riscos', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Avaliar a alegação de segredo comercial do fornecedor',
    ctx: 'Uma instituição adota motor de recomendação de terceiros. Ele passa a sugerir sistematicamente produtos de maior taxa, e o fornecedor alega segredo comercial sobre o algoritmo.',
    e: 'A leitura tecnicamente correta é:',
    alt: [
      ['A instituição continua obrigada a auditar e a responder pelo que oferece; a opacidade contratada é risco assumido, não defesa.', true, 'Correta. O dever de adequação e a vedação ao conflito de interesses são dela.'],
      ['A responsabilidade pela adequação passa a ser do fornecedor do sistema.', false, 'O dever perante o cliente não se transfere por contrato de fornecimento.'],
      ['O segredo comercial dispensa a verificação de conflito de interesses.', false, 'Nenhuma cláusula contratual afasta dever regulatório.'],
      ['Basta informar ao cliente que a recomendação é automatizada.', false, 'Informar o meio não substitui a verificação da adequação do que é recomendado.'],
    ],
    exp: 'Se a instituição não consegue auditar o que recomenda, ela não consegue demonstrar que cumpre o dever de adequação.',
    tags: ['ia', 'conflito-interesses', 'conduta'],
  }),
  q('q-iar-04', {
    c: 'c-ia-riscos', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer a aplicação da proteção de dados a sistemas de IA',
    e: 'O tratamento de dados pessoais para treinar e operar modelos de inteligência artificial:',
    alt: [
      ['Continua integralmente sujeito à legislação de proteção de dados, inclusive quanto a finalidade, base legal e direitos do titular.', true, 'Correta. A tecnologia empregada não cria exceção.'],
      ['Fica dispensado de base legal, por se tratar de uso estatístico.', false, 'Uso estatístico não é, por si, dispensa de base legal.'],
      ['Só é regulado quando envolve dados sensíveis.', false, 'A legislação alcança dado pessoal em geral, não apenas o sensível.'],
      ['Passa a ser responsabilidade do fornecedor da tecnologia.', false, 'O controlador do tratamento responde independentemente de quem forneceu o sistema.'],
    ],
    exp: 'Finalidade, base legal, minimização e direitos do titular não são afastados por automação.',
    tags: ['ia', 'protecao-dados', 'conceitual'],
  }),
]
