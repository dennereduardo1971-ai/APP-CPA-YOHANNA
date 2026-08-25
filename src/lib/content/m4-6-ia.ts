import type { Conceito } from '../types'

/**
 * MICROTEMA 4.6 — Inteligência artificial.
 *
 * NOTA EDITORIAL — tema em movimento. A regulação específica de IA no Brasil
 * ainda está em construção legislativa, e citar como vigente uma norma que
 * não foi aprovada seria inventar regra de prova. Estas aulas descrevem o que
 * já é aplicável hoje — proteção de dados, dever de adequação, dever de
 * informação, responsabilidade da instituição — e tratam a regulação
 * específica como o que ela é: matéria em discussão (regra 4 do CLAUDE.md).
 *
 * O que a prova cobra aqui não é técnica de modelagem: é onde a
 * responsabilidade fica quando a decisão passa por um sistema automatizado.
 * A resposta, em todos os casos, é: com a instituição e com o profissional.
 */

export const CONCEITOS_4_6: Conceito[] = [
  {
    id: 'c-ia-mercado',
    microtemaId: 'm4.6',
    titulo: 'Inteligência artificial no mercado financeiro',
    objetivo: 'Identificar as aplicações de IA no setor e distinguir automação de decisão automatizada.',
    etiquetas: ['ENTENDER', 'ATENCAO'],
    resumo30s:
      'IA já opera em análise de crédito, prevenção a fraude, atendimento e recomendação de produtos. O que muda de caso para caso não é a tecnologia: é se o sistema APOIA uma decisão humana ou se DECIDE sozinho.',
    explicacao: {
      oQueE:
        'Inteligência artificial, no contexto financeiro, é o conjunto de técnicas que permite a sistemas identificar padrões em grandes volumes de dados e produzir classificações, previsões ou recomendações.',
      porQueImporta:
        'A tecnologia já está no fluxo de trabalho — análise de crédito, monitoramento de fraude, robôs de atendimento, motores de recomendação. Saber onde ela decide e onde apenas sugere é o que define de quem é a responsabilidade.',
      paraQueServe:
        'Processar volume e velocidade que nenhuma equipe humana alcançaria, e liberar tempo humano para o que exige julgamento.',
      comoFunciona: [
        'ANÁLISE DE CRÉDITO: modelos estimam probabilidade de inadimplência a partir de histórico e comportamento, ampliando a base de dados muito além do que a análise tradicional usava.',
        'PREVENÇÃO A FRAUDE E PLD: sistemas detectam padrões atípicos em tempo real, em volume de transações que inviabiliza revisão manual.',
        'ATENDIMENTO: assistentes conversacionais resolvem demandas repetitivas e encaminham as demais.',
        'RECOMENDAÇÃO DE PRODUTOS: motores sugerem alocações a partir de perfil e comportamento — os chamados consultores automatizados.',
        'A distinção decisiva é entre SISTEMA DE APOIO, que sugere e deixa a decisão com a pessoa, e DECISÃO AUTOMATIZADA, em que o sistema decide sem intervenção humana. Os deveres associados são diferentes.',
      ],
      exemploSimples:
        'Um motor de recomendação sugere três fundos compatíveis com o perfil registrado. Se o profissional analisa a sugestão e decide, é sistema de apoio. Se o produto é contratado direto pelo aplicativo sem revisão, é decisão automatizada.',
      exemploAplicado:
        'Um cliente teve crédito negado por um modelo automatizado e pergunta o motivo. A instituição precisa ser capaz de informar os critérios utilizados e de revisar a decisão — não basta responder que "o sistema não aprovou". A opacidade do modelo é problema de quem o adotou, não do cliente.',
      lembrarNaProva: [
        'O que muda o dever é APOIO × DECISÃO AUTOMATIZADA.',
        'A responsabilidade permanece com a instituição, não com o fornecedor do sistema.',
        'Decisão automatizada relevante exige possibilidade de revisão.',
        '"O sistema decidiu" não é justificativa aceitável perante o cliente.',
      ],
      revisaoRapida: [
        'IA no setor: crédito, fraude, atendimento e recomendação.',
        'Sistema de apoio sugere; decisão automatizada decide.',
        'Os deveres mudam conforme essa distinção.',
        'A responsabilidade não se transfere ao fornecedor da tecnologia.',
        'O cliente tem direito a explicação e a revisão.',
      ],
    },
    exemplos: [
      {
        titulo: 'Consultor automatizado não é isenção de dever',
        corpo:
          'Um robô de alocação segue regras definidas por alguém e opera sobre dados coletados por alguém. Se o perfil está desatualizado ou a regra é inadequada, a recomendação sai errada — e o dever de adequação continua sendo da instituição que ofereceu o serviço.',
      },
    ],
    conceitoChave:
      'A tecnologia muda quem executa a tarefa; não muda de quem é o dever.',
    pontosChave: [
      'Crédito, fraude, atendimento, recomendação',
      'Apoio × decisão automatizada',
      'Responsabilidade fica na instituição',
      'Direito a explicação e revisão',
      '"O sistema decidiu" não justifica',
    ],
    erroComum:
      'Tratar a adoção de IA como transferência de responsabilidade ao fornecedor do sistema. O dever perante o cliente é de quem oferece o serviço.',
    alertaProva:
      'A regulação específica de IA no Brasil ainda está em construção legislativa. Confira o estágio da norma antes de afirmar que existe regra vigente sobre o tema.',
    tabela: {
      titulo: 'Apoio × decisão automatizada',
      colunas: ['Aspecto', 'Sistema de apoio', 'Decisão automatizada'],
      linhas: [
        ['Quem decide', 'A pessoa, com a sugestão à vista', 'O sistema, sem intervenção'],
        ['Dever principal', 'Analisar criticamente a sugestão', 'Explicar critérios e permitir revisão'],
        ['Responsabilidade', 'Da instituição', 'Da instituição'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Um cliente teve crédito negado por sistema automatizado e pergunta o motivo. A conduta correta da instituição é:',
      alternativas: [
        'Informar que a decisão é do sistema e não pode ser detalhada',
        'Informar os critérios considerados e oferecer possibilidade de revisão',
        'Encaminhar o cliente ao fornecedor do sistema de análise',
        'Recusar a explicação, por se tratar de segredo comercial do modelo',
      ],
      correta: 1,
      explicacao:
        'A opacidade do modelo é problema de quem o adotou. A responsabilidade perante o cliente permanece com a instituição.',
    },
    mapaMental: {
      id: 'mm-ia',
      rotulo: 'IA no mercado financeiro',
      revisao: true,
      filhos: [
        {
          id: 'mm-ia-usos',
          rotulo: 'Aplicações',
          revisao: true,
          filhos: [
            { id: 'mm-ia-credito', rotulo: 'Análise de crédito' },
            { id: 'mm-ia-fraude', rotulo: 'Fraude e PLD', detalhe: 'Padrões atípicos em tempo real' },
            { id: 'mm-ia-atend', rotulo: 'Atendimento' },
            { id: 'mm-ia-rec', rotulo: 'Recomendação', detalhe: 'Consultores automatizados' },
          ],
        },
        {
          id: 'mm-ia-dist',
          rotulo: 'Apoio × automatizada',
          detalhe: 'Sugere × decide',
          revisao: true,
        },
        {
          id: 'mm-ia-resp',
          rotulo: 'Responsabilidade',
          detalhe: 'Permanece com a instituição',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Sistemas automáticos já analisam crédito, detectam fraude e sugerem investimentos. O que muda é se eles ajudam a decidir ou decidem sozinhos.',
      exemplo:
        'O robô sugere três fundos e o assessor escolhe: é apoio. O cliente contrata direto pelo app sem ninguém olhar: é decisão automatizada.',
      analogia:
        'É a diferença entre o GPS que sugere a rota e o carro que dirige sozinho. A responsabilidade pelo trajeto muda de lugar.',
      iniciante:
        'Bancos usam programas que aprendem com dados para decidir coisas mais rápido. Mas quem responde pelo resultado continua sendo o banco.',
    },
    niveis: {
      entenda:
        'IA já analisa crédito, detecta fraude e sugere investimentos. O que define os deveres é se o sistema apoia a decisão humana ou decide sozinho.',
      aprofunde:
        'A adoção de IA no setor financeiro criou uma tensão entre desempenho preditivo e explicabilidade que não tem solução puramente técnica. Modelos mais simples — regressões, árvores de decisão rasas — são auditáveis linha a linha, mas capturam menos padrão. Modelos complexos capturam mais e são opacos por construção: nem o próprio desenvolvedor consegue apontar com precisão qual variável determinou um resultado individual. O setor financeiro é justamente onde essa opacidade é mais problemática, porque negar crédito, classificar risco ou recomendar produto são decisões que afetam direitos e precisam ser justificáveis. Daí o campo de explicabilidade — técnicas que produzem aproximações locais do comportamento do modelo para explicar decisões individuais — e daí também a escolha, comum em crédito, de sacrificar alguma acurácia em favor de modelos auditáveis. Vale notar que o dilema não é novo em espécie: a análise de crédito humana também nunca foi plenamente explicável. A diferença é de escala e de velocidade — um viés humano afeta os casos de um analista; um viés no modelo afeta todos os casos, simultaneamente e sem que ninguém precise concordar com ele.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 7,
  },

  {
    id: 'c-ia-riscos',
    microtemaId: 'm4.6',
    titulo: 'Riscos e governança da IA: viés, dados e responsabilidade',
    objetivo: 'Reconhecer os riscos de sistemas automatizados e os deveres que permanecem com a instituição.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'Modelo treinado em dado enviesado reproduz o viés em escala. Dado pessoal em IA continua sujeito à lei de proteção de dados. E a responsabilidade pela decisão nunca migra para o sistema: fica com quem o adotou.',
    explicacao: {
      oQueE:
        'Governança de IA é o conjunto de controles sobre como um sistema automatizado é construído, validado, monitorado e revisado ao longo do tempo.',
      porQueImporta:
        'Sem governança, um erro de modelo não é um erro: é milhares de erros idênticos, aplicados de forma consistente e invisível, até que alguém perceba.',
      paraQueServe:
        'Garantir que a automação amplie a capacidade da instituição sem ampliar, na mesma escala, seus erros e seus vieses.',
      comoFunciona: [
        'VIÉS: o modelo aprende os padrões do dado com que foi treinado, inclusive os injustos. Se o histórico contém discriminação, o modelo a reproduz — com aparência de objetividade estatística.',
        'ESCALA: o viés humano afeta os casos de um analista; o viés do modelo afeta TODOS os casos, ao mesmo tempo e sem que ninguém precise concordar com ele.',
        'DADOS PESSOAIS: treinar e operar modelos com dado pessoal continua sujeito à legislação de proteção de dados — finalidade, base legal, minimização e direitos do titular não são afastados pela tecnologia.',
        'EXPLICABILIDADE: decisões que afetam direitos precisam ser justificáveis. Modelo opaco não dispensa a instituição de explicar o critério e de permitir revisão.',
        'RESPONSABILIDADE: contratar um fornecedor não transfere o dever. Perante o cliente e perante o regulador, responde quem ofereceu o serviço.',
      ],
      exemploSimples:
        'Um modelo de crédito treinado com histórico em que determinado grupo recebia menos aprovação aprende a negar mais a esse grupo — e apresenta o resultado como conclusão estatística, não como preconceito herdado.',
      exemploAplicado:
        'Uma instituição adota um motor de recomendação de terceiros que passa a sugerir sistematicamente produtos de maior taxa. O fornecedor alega que o algoritmo é proprietário. Isso não resolve nada: o dever de adequação e a vedação ao conflito de interesses são da instituição que ofereceu a recomendação ao cliente, e ela precisa ser capaz de auditar o que oferece.',
      lembrarNaProva: [
        'Modelo aprende o viés do dado de treino e o aplica em escala.',
        'Dado pessoal em IA continua sob a lei de proteção de dados.',
        'Decisão que afeta direitos exige explicação e possibilidade de revisão.',
        'Contratar fornecedor NÃO transfere a responsabilidade.',
      ],
      revisaoRapida: [
        'Viés no dado vira viés no modelo, com cara de objetividade.',
        'O erro automatizado acontece em escala e de forma consistente.',
        'Proteção de dados continua aplicável integralmente.',
        'Explicabilidade e revisão são deveres, não cortesias.',
        'A responsabilidade permanece com quem oferece o serviço.',
      ],
    },
    exemplos: [
      {
        titulo: 'Por que "o algoritmo é proprietário" não resolve',
        corpo:
          'Se a instituição não consegue auditar o que o sistema recomenda, ela não consegue demonstrar que cumpre o dever de adequação nem que não há conflito de interesses embutido. A opacidade contratada é um risco assumido, não uma defesa.',
      },
    ],
    conceitoChave:
      'O erro humano é individual e visível; o erro automatizado é coletivo, consistente e silencioso.',
    pontosChave: [
      'Viés do dado vira viés do modelo',
      'Erro automatizado acontece em escala',
      'LGPD continua aplicável',
      'Explicabilidade e revisão são deveres',
      'Fornecedor não assume a responsabilidade',
    ],
    erroComum:
      'Tratar a saída do modelo como objetiva por ser estatística. Um número produzido a partir de dado enviesado é um viés com aparência de neutralidade.',
    alertaProva:
      'Alternativa que transfira a responsabilidade ao fornecedor da tecnologia, ou que dispense a explicação por segredo comercial, está errada.',
    tabela: {
      titulo: 'Riscos e o dever correspondente',
      colunas: ['Risco', 'Dever da instituição'],
      linhas: [
        ['Viés herdado do dado de treino', 'Validar e monitorar resultados por grupo'],
        ['Opacidade da decisão', 'Explicar critérios e permitir revisão'],
        ['Uso de dado pessoal', 'Observar finalidade, base legal e direitos do titular'],
        ['Dependência de fornecedor', 'Auditar o que oferece ao cliente'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Uma instituição adota motor de recomendação de terceiros e o fornecedor alega segredo comercial sobre o algoritmo. Isso:',
      alternativas: [
        'Transfere ao fornecedor a responsabilidade pela adequação das recomendações',
        'Não afasta o dever da instituição de auditar e responder pelo que oferece ao cliente',
        'Dispensa a instituição de verificar conflito de interesses nas sugestões',
        'Isenta a instituição de explicar a recomendação ao cliente',
      ],
      correta: 1,
      explicacao:
        'A opacidade contratada é risco assumido pela instituição, não defesa. O dever perante o cliente permanece com quem oferece o serviço.',
    },
    mapaMental: {
      id: 'mm-iar',
      rotulo: 'Riscos da IA',
      revisao: true,
      filhos: [
        {
          id: 'mm-iar-vies',
          rotulo: 'Viés',
          detalhe: 'Aprende o preconceito do dado',
          revisao: true,
          filhos: [
            { id: 'mm-iar-escala', rotulo: 'Em escala', detalhe: 'Todos os casos, ao mesmo tempo', revisao: true },
          ],
        },
        {
          id: 'mm-iar-dados',
          rotulo: 'Dados pessoais',
          detalhe: 'Proteção de dados continua valendo',
          revisao: true,
        },
        {
          id: 'mm-iar-expl',
          rotulo: 'Explicabilidade',
          detalhe: 'Explicar critério · permitir revisão',
          revisao: true,
        },
        {
          id: 'mm-iar-resp',
          rotulo: 'Responsabilidade',
          detalhe: 'Não migra para o fornecedor',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Um sistema aprende com dados antigos. Se esses dados tinham injustiça, ele repete a injustiça — só que com todo mundo e ao mesmo tempo.',
      exemplo:
        'Se no histórico um grupo era mais recusado, o modelo aprende a recusar mais esse grupo e apresenta isso como conclusão estatística.',
      analogia:
        'É como copiar a resposta de uma prova antiga: se ela estava errada, agora está errada em todas as cópias.',
      iniciante:
        'Programas que decidem sozinhos podem errar de forma repetida. Por isso alguém precisa conferir o que eles estão fazendo.',
    },
    niveis: {
      entenda:
        'Sistema treinado em dado enviesado repete o viés em escala. E quem responde pela decisão continua sendo a instituição, não o fornecedor.',
      aprofunde:
        'O viés algorítmico raramente aparece como uma variável discriminatória explícita — essa é fácil de remover. Ele sobrevive por PROXIES: variáveis aparentemente neutras que se correlacionam com o atributo protegido, como CEP, escola de formação ou padrão de consumo. Remover a variável sensível do modelo e manter as proxies produz a ilusão de neutralidade com o mesmo resultado prático, e é por isso que o controle eficaz não é sobre os insumos, e sim sobre os RESULTADOS: monitorar taxas de aprovação e de erro por grupo, ao longo do tempo. Há ainda o problema da retroalimentação, mais sutil: um modelo que nega crédito a determinado grupo deixa de gerar dados sobre o desempenho desse grupo, e a ausência de dados confirma a decisão original na próxima rodada de treinamento — o viés se torna profecia autorrealizável. Do ponto de vista de governança, a consequência prática é que a validação de um modelo não é evento único de implantação: é monitoramento contínuo, com métricas definidas antes e revisão periódica, exatamente como qualquer outro controle de risco operacional.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },
]
