import type { Conceito } from '../types'

/**
 * MICROTEMA 1.2 — Política econômica.
 *
 * É o microtema que dá sentido a todo o resto: sem ele, "a Selic subiu" é um
 * fato solto, e não a causa da queda no preço do prefixado que o cliente viu
 * no extrato.
 *
 * NOTA EDITORIAL — números que mudam por norma. A meta de inflação, a Selic
 * vigente e o compulsório são decisões de política, revistas periodicamente
 * pelo CMN e pelo Copom. As aulas trazem o MECANISMO, que não muda, e marcam
 * com ATENCAO onde há número sujeito a revisão, em vez de fixar um valor que
 * envelhece sozinho (regra 4 do CLAUDE.md). Conferir sempre a resolução do
 * CMN e a ata do Copom vigentes.
 */

export const CONCEITOS_1_2: Conceito[] = [
  {
    id: 'c-pib',
    microtemaId: 'm1.2',
    titulo: 'PIB e os indicadores de atividade',
    objetivo: 'Interpretar o PIB pelas três óticas e distinguir crescimento nominal de real.',
    etiquetas: ['ESSENCIAL', 'ENTENDER'],
    resumo30s:
      'PIB é a soma dos bens e serviços FINAIS produzidos no país num período. Pode ser medido pela produção, pela renda ou pela despesa — as três dão o mesmo número. PIB nominal inclui inflação; PIB real, não.',
    explicacao: {
      oQueE:
        'Produto Interno Bruto é o valor de mercado de todos os bens e serviços finais produzidos dentro das fronteiras do país em um período determinado.',
      porQueImporta:
        'É o termômetro que o Banco Central lê antes de mexer nos juros e que o mercado lê antes de precificar risco. Atividade aquecida pressiona inflação; atividade fraca abre espaço para corte de juros.',
      paraQueServe:
        'Medir o tamanho e o ritmo da economia, e servir de base de comparação para dívida pública, investimento e carga tributária.',
      comoFunciona: [
        'Só entram bens FINAIS. O aço que virou carro não é contado duas vezes — senão o mesmo valor apareceria em cada etapa da cadeia.',
        'ÓTICA DA PRODUÇÃO: soma do valor adicionado por agropecuária, indústria e serviços.',
        'ÓTICA DA RENDA: soma de salários, lucros, juros e aluguéis — tudo que a produção gerou de renda.',
        'ÓTICA DA DESPESA: consumo das famílias + investimento (formação bruta de capital fixo) + gastos do governo + exportações − importações.',
        'PIB NOMINAL usa preços correntes e cresce também por inflação. PIB REAL usa preços de um ano-base e mostra o crescimento de verdade.',
      ],
      exemploSimples:
        'Uma padaria compra R$ 30 de farinha e vende R$ 100 de pão. O que entra no PIB é o valor adicionado — R$ 70 na padaria e R$ 30 no moinho —, e não R$ 130. O total bate com o preço do bem final: R$ 100.',
      exemploAplicado:
        'O PIB nominal cresceu 8% e a inflação foi 6%. Um cliente comemora "a economia cresceu 8%". Na verdade o crescimento real foi de 1,89% pela fórmula de Fisher — o resto foi preço, não produção. É o mesmo raciocínio da taxa real aplicado a um agregado.',
      lembrarNaProva: [
        'PIB conta só bens e serviços FINAIS, para evitar dupla contagem.',
        'As três óticas — produção, renda e despesa — dão o mesmo valor.',
        'PIB nominal inclui inflação; PIB real, não.',
        'PIB mede produção DENTRO das fronteiras, independentemente da nacionalidade de quem produz.',
      ],
      revisaoRapida: [
        'PIB = valor dos bens e serviços finais produzidos no país.',
        'Três óticas: produção, renda e despesa — mesmo resultado.',
        'Despesa: consumo + investimento + governo + exportações − importações.',
        'Nominal inclui inflação; real desconta.',
        'Só bens finais, para não contar o mesmo valor duas vezes.',
      ],
    },
    exemplos: [
      {
        titulo: 'PIB e PNB não são a mesma coisa',
        corpo:
          'PIB é territorial: conta o que foi produzido no Brasil, inclusive por empresa estrangeira. PNB é por nacionalidade: conta o que foi produzido por brasileiros, inclusive fora do país. O que a prova cobra é o PIB.',
      },
    ],
    conceitoChave:
      'PIB é fluxo de produção em um período, medido por valor adicionado — nunca por soma de faturamentos.',
    pontosChave: [
      'Só bens e serviços finais',
      'Três óticas, um único valor',
      'Despesa: C + I + G + (X − M)',
      'Nominal inclui inflação; real não',
      'Territorial, não por nacionalidade',
    ],
    erroComum:
      'Somar o faturamento de todas as empresas para chegar ao PIB. Isso conta o mesmo valor em cada etapa da cadeia; o certo é somar o valor adicionado.',
    alertaProva:
      'Se a questão der crescimento nominal e inflação e perguntar o crescimento real, use Fisher — a subtração é armadilha, exatamente como no cálculo de rentabilidade.',
    tabela: {
      titulo: 'As três óticas do PIB',
      colunas: ['Ótica', 'O que soma'],
      linhas: [
        ['Produção', 'Valor adicionado por agropecuária, indústria e serviços'],
        ['Renda', 'Salários, lucros, juros e aluguéis'],
        ['Despesa', 'Consumo + investimento + governo + exportações − importações'],
      ],
    },
    perguntaRapida: {
      enunciado: 'O PIB nominal cresceu 8% num ano em que a inflação foi 6%. Qual o crescimento real aproximado?',
      alternativas: ['2,00%', '1,89%', '14,00%', '0,75%'],
      correta: 1,
      explicacao:
        '(1,08 ÷ 1,06) − 1 = 1,89%. Os 2,00% vêm da subtração, que superestima — mesma lógica da taxa real de uma aplicação.',
    },
    mapaMental: {
      id: 'mm-pib',
      rotulo: 'PIB',
      revisao: true,
      filhos: [
        { id: 'mm-pib-final', rotulo: 'Só bens finais', detalhe: 'Evita dupla contagem', revisao: true },
        {
          id: 'mm-pib-oticas',
          rotulo: 'Três óticas',
          detalhe: 'Produção · renda · despesa',
          revisao: true,
          filhos: [
            { id: 'mm-pib-desp', rotulo: 'C + I + G + (X − M)', revisao: true },
          ],
        },
        { id: 'mm-pib-real', rotulo: 'Nominal × real', detalhe: 'Real desconta a inflação', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'PIB é tudo que o país produziu de novo em um ano, somado pelo preço final. Se o número cresceu só porque os preços subiram, não houve crescimento de verdade.',
      exemplo:
        'A padaria vendeu R$ 100 de pão usando R$ 30 de farinha. O PIB soma R$ 30 do moinho e R$ 70 da padaria — R$ 100, o preço do pão.',
      analogia:
        'É como medir o quanto uma fábrica produziu contando só o que sai pela porta, não o que circula entre as máquinas lá dentro.',
      iniciante:
        'PIB é o tamanho da economia. Quando ele cresce, o país produziu mais do que no período anterior.',
    },
    niveis: {
      entenda:
        'PIB é o valor de tudo que o país produziu em um período, contando só os produtos finais para não somar a mesma coisa duas vezes.',
      aprofunde:
        'A identidade entre as três óticas não é coincidência estatística: é contábil. Todo valor adicionado na produção vira renda de alguém (salário, lucro, juro ou aluguel), e toda renda vira despesa ou poupança — e a poupança financia o investimento, que é componente da despesa. Daí a identidade macroeconômica fundamental S = I em economia fechada, e S = I + (X − M) em economia aberta, que é a razão pela qual um país com déficit em conta corrente é necessariamente um país que absorve poupança externa. Na prática as três medições divergem por erros de coleta, e o IBGE publica uma discrepância estatística para reconciliá-las. Vale registrar o que o PIB NÃO mede: trabalho não remunerado, economia informal, depreciação do capital (é bruto, não líquido) e distribuição — dois países com o mesmo PIB per capita podem ter realidades sociais opostas.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 7,
  },

  {
    id: 'c-indices-precos',
    microtemaId: 'm1.2',
    titulo: 'IPCA, INPC e IGP-M: os índices de preços',
    objetivo: 'Distinguir os principais índices de inflação por instituição, público e uso contratual.',
    etiquetas: ['ESSENCIAL', 'DECORAR'],
    resumo30s:
      'IPCA é do IBGE, mede famílias de 1 a 40 salários mínimos e é o índice OFICIAL da meta de inflação. INPC é do IBGE, de 1 a 5 salários, e reajusta salários. IGP-M é da FGV, tem atacado no núcleo e reajusta aluguéis.',
    explicacao: {
      oQueE:
        'Índices de preços medem a variação média do custo de uma cesta de bens e serviços entre dois momentos. Cada índice tem uma cesta, um público e uma instituição diferentes.',
      porQueImporta:
        'O índice escolhido define quanto o cliente recebe num título IPCA+, quanto sobe o aluguel e quanto é reajustado um contrato. Trocar um pelo outro muda dinheiro de lugar.',
      paraQueServe:
        'Corrigir contratos, medir a perda de poder de compra e servir de alvo à política monetária.',
      comoFunciona: [
        'IPCA — IBGE. Famílias com renda de 1 a 40 salários mínimos, em regiões metropolitanas selecionadas. É o índice OFICIAL do regime de metas de inflação.',
        'INPC — IBGE. Mesma coleta, mas restrito a famílias de 1 a 5 salários mínimos. Como as famílias de renda menor gastam proporcionalmente mais com alimento, o INPC costuma reagir mais a comida. É a referência usual de reajuste salarial.',
        'IGP-M — FGV. Índice composto: 60% de preços no atacado (IPA), 30% ao consumidor (IPC) e 10% da construção civil (INCC).',
        'Por ter 60% de atacado, o IGP-M sente câmbio e commodities antes e com mais força — por isso oscila muito mais que o IPCA.',
        'O IGP-M coleta do dia 21 ao dia 20 do mês seguinte; o IGP-DI, com a mesma composição, coleta do dia 1 ao 30. É só a janela que muda.',
      ],
      exemploSimples:
        'Numa desvalorização do real, o preço da soja e do minério em reais sobe imediatamente. O IGP-M, que tem 60% de atacado, dispara. O IPCA sobe bem menos, porque mede o que chega à mesa do consumidor, com defasagem.',
      exemploAplicado:
        'Um cliente com contrato de aluguel corrigido pelo IGP-M reclama que o reajuste veio muito acima da "inflação do noticiário". Os dois números estão certos: o noticiário fala de IPCA, e o contrato dele segue um índice com atacado no núcleo. A conversa é sobre qual índice o contrato elegeu — não sobre erro de cálculo.',
      lembrarNaProva: [
        'IPCA: IBGE, 1 a 40 salários, índice OFICIAL da meta.',
        'INPC: IBGE, 1 a 5 salários, reajuste salarial.',
        'IGP-M: FGV, 60% IPA + 30% IPC + 10% INCC, aluguéis.',
        'IGP-M oscila mais que IPCA por causa do atacado.',
      ],
      revisaoRapida: [
        'IPCA é do IBGE e é o índice oficial da meta de inflação.',
        'INPC também é do IBGE, mas cobre faixa de renda menor.',
        'IGP-M é da FGV e mistura atacado, consumidor e construção.',
        'O peso de 60% no atacado faz o IGP-M reagir a câmbio.',
        'IGP-M e IGP-DI só diferem na janela de coleta.',
      ],
    },
    exemplos: [
      {
        titulo: 'A composição do IGP-M',
        corpo:
          'IPA (atacado) 60% · IPC (consumidor) 30% · INCC (construção) 10%. Decorar essa proporção resolve boa parte das questões do tema, porque é ela que explica o comportamento do índice.',
      },
    ],
    conceitoChave:
      'Cada índice mede uma cesta diferente para um público diferente — e é a cesta que explica por que os números divergem.',
    pontosChave: [
      'IPCA: IBGE · 1 a 40 salários · meta oficial',
      'INPC: IBGE · 1 a 5 salários · salários',
      'IGP-M: FGV · 60/30/10 · aluguéis',
      'Atacado faz o IGP-M oscilar mais',
      'IGP-M × IGP-DI: só a janela de coleta',
    ],
    erroComum:
      'Tratar "inflação" como um número único. Não existe a inflação: existe a de cada índice, e o contrato define qual vale para aquele caso.',
    alertaProva:
      'A pergunta mais frequente é qual índice serve de meta ao Banco Central. É o IPCA — e é o IBGE que o mede, não o Banco Central.',
    tabela: {
      titulo: 'Comparação dos índices',
      colunas: ['Índice', 'Instituição', 'Público / composição', 'Uso típico'],
      linhas: [
        ['IPCA', 'IBGE', '1 a 40 salários mínimos', 'Meta de inflação, títulos IPCA+'],
        ['INPC', 'IBGE', '1 a 5 salários mínimos', 'Reajuste de salários'],
        ['IGP-M', 'FGV', '60% IPA · 30% IPC · 10% INCC', 'Contratos de aluguel'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Qual índice é utilizado como referência oficial no regime de metas de inflação brasileiro?',
      alternativas: ['IGP-M', 'IPCA', 'INPC', 'INCC'],
      correta: 1,
      explicacao:
        'O IPCA, medido pelo IBGE, é o índice oficial da meta. O IGP-M é da FGV e serve tipicamente a contratos de aluguel.',
    },
    mapaMental: {
      id: 'mm-idx',
      rotulo: 'Índices de preços',
      revisao: true,
      filhos: [
        {
          id: 'mm-idx-ipca',
          rotulo: 'IPCA',
          detalhe: 'IBGE · 1 a 40 sal. · meta oficial',
          revisao: true,
        },
        { id: 'mm-idx-inpc', rotulo: 'INPC', detalhe: 'IBGE · 1 a 5 sal. · salários', revisao: true },
        {
          id: 'mm-idx-igpm',
          rotulo: 'IGP-M',
          detalhe: 'FGV · aluguéis',
          revisao: true,
          filhos: [
            { id: 'mm-idx-ipa', rotulo: 'IPA 60%', detalhe: 'Atacado — sente câmbio', revisao: true },
            { id: 'mm-idx-ipc', rotulo: 'IPC 30%', detalhe: 'Consumidor' },
            { id: 'mm-idx-incc', rotulo: 'INCC 10%', detalhe: 'Construção civil' },
          ],
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Cada índice de inflação mede o preço de uma cesta de compras diferente. Por isso dois índices do mesmo mês dão números diferentes.',
      exemplo:
        'O IGP-M tem 60% de preços de atacado. Quando o dólar sobe, soja e minério sobem na hora, e o IGP-M dispara antes de o consumidor sentir qualquer coisa.',
      analogia:
        'É como medir a temperatura com termômetros em cômodos diferentes da casa. Todos estão certos; estão medindo lugares distintos.',
      iniciante:
        'Inflação é o preço das coisas subindo. Como cada pessoa compra coisas diferentes, existe mais de um jeito de medir isso.',
    },
    niveis: {
      entenda:
        'Existem vários índices de inflação porque existem várias cestas de consumo. O IPCA é o oficial do Banco Central; o IGP-M é o dos aluguéis.',
      aprofunde:
        'A diferença de comportamento entre IPCA e IGP-M é estrutural, não conjuntural: o IPA mede preços na porta da fábrica, onde bens comercializáveis internacionalmente são cotados em dólar, então o repasse cambial é quase imediato. No IPCA o mesmo choque chega diluído por margens de varejo, serviços e bens não comercializáveis, e com defasagem de meses — é o que os economistas chamam de pass-through cambial, historicamente parcial e demorado. Há ainda o conceito de núcleo de inflação, que expurga itens voláteis (alimentos in natura, combustíveis, preços administrados) para revelar a tendência subjacente: o Banco Central acompanha vários núcleos justamente porque a meta é sobre o IPCA cheio, mas a decisão de juros precisa olhar o que é persistente. Preços administrados — energia, combustível, tarifas — são outro capítulo: respondem a contrato e a regulação, não a demanda, e por isso pouco reagem a juros, o que exige do Copom uma dose maior de aperto sobre o restante da cesta para compensar.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 7,
  },

  {
    id: 'c-politica-monetaria',
    microtemaId: 'm1.2',
    titulo: 'Política monetária: Copom, Selic e os instrumentos',
    objetivo: 'Explicar como o Banco Central controla a inflação e quais instrumentos usa.',
    etiquetas: ['ESSENCIAL', 'ATENCAO'],
    resumo30s:
      'O CMN define a meta de inflação; o Banco Central persegue. O Copom se reúne a cada 45 dias e fixa a Selic meta. Os instrumentos são taxa de juros, depósito compulsório, mercado aberto e redesconto.',
    explicacao: {
      oQueE:
        'Política monetária é o conjunto de ações do Banco Central sobre a quantidade de moeda e o custo do crédito, com o objetivo de manter a inflação na meta.',
      porQueImporta:
        'A Selic é o preço de referência de toda a renda fixa brasileira. Uma decisão do Copom muda a rentabilidade das aplicações do cliente e o preço dos títulos que ele já tem na carteira.',
      paraQueServe:
        'Manter o poder de compra da moeda — e, no arranjo brasileiro, sem prejuízo disso, suavizar as flutuações da atividade e do emprego.',
      comoFunciona: [
        'DIVISÃO DE PAPÉIS: quem define a meta de inflação é o CMN; quem persegue a meta é o Banco Central. São órgãos distintos e a prova cobra isso.',
        'O COPOM — Comitê de Política Monetária do Banco Central — se reúne ordinariamente a cada 45 dias, oito vezes por ano, e define a Selic META.',
        'A Selic EFETIVA é a taxa média das operações compromissadas com títulos públicos; ela flutua em torno da meta, que é o alvo perseguido.',
        'INSTRUMENTOS: taxa de juros (Selic), depósito compulsório, operações de mercado aberto (open market) e redesconto.',
        'POLÍTICA CONTRACIONISTA: sobe juros, sobe compulsório, vende títulos. Enxuga moeda, esfria a demanda, combate inflação. EXPANSIONISTA é o oposto.',
      ],
      exemploSimples:
        'A inflação projetada supera a meta. O Copom eleva a Selic. O crédito fica mais caro, o consumo desacelera, a demanda cede e a pressão sobre os preços diminui. O custo é atividade econômica mais fraca.',
      exemploAplicado:
        'O Copom elevou a Selic e o cliente liga preocupado: o extrato mostra o Tesouro Prefixado dele com saldo menor. Duas coisas aconteceram ao mesmo tempo — as aplicações pós-fixadas dele passaram a render mais, e o prefixado que ele já tinha se desvalorizou por marcação a mercado. A mesma decisão produz efeitos opostos em partes diferentes da carteira.',
      lembrarNaProva: [
        'CMN DEFINE a meta; Banco Central PERSEGUE.',
        'Copom se reúne a cada 45 dias e define a Selic meta.',
        'Quatro instrumentos: juros, compulsório, mercado aberto e redesconto.',
        'Contracionista: juros ↑, compulsório ↑, venda de títulos.',
      ],
      revisaoRapida: [
        'A meta de inflação é do CMN; a execução é do Banco Central.',
        'Copom define a Selic meta a cada 45 dias.',
        'Selic efetiva é a taxa média das compromissadas.',
        'Instrumentos: juros, compulsório, open market, redesconto.',
        'Juros sobem para conter inflação, ao custo de atividade.',
      ],
    },
    exemplos: [
      {
        titulo: 'O que cada instrumento faz',
        corpo:
          'COMPULSÓRIO: parcela dos depósitos que o banco é obrigado a recolher ao BC — quanto maior, menos sobra para emprestar. MERCADO ABERTO: BC compra títulos (injeta moeda) ou vende (enxuga). REDESCONTO: empréstimo de liquidez do BC aos bancos, a taxa punitiva.',
      },
    ],
    conceitoChave:
      'Política monetária age pelo custo e pela quantidade de moeda — e a Selic é o preço que organiza todos os outros.',
    pontosChave: [
      'CMN define a meta; BC persegue',
      'Copom: a cada 45 dias, Selic meta',
      'Selic efetiva ≠ Selic meta',
      'Instrumentos: juros, compulsório, open market, redesconto',
      'Contracionista enxuga; expansionista injeta',
    ],
    erroComum:
      'Dizer que o Banco Central define a meta de inflação. Quem define é o CMN; o Banco Central recebe a meta e usa os instrumentos para alcançá-la.',
    alertaProva:
      'A meta de inflação vigente e o intervalo de tolerância são fixados por resolução do CMN e podem mudar. Confira a norma em vigor antes de decorar número.',
    tabela: {
      titulo: 'Instrumentos e efeito contracionista',
      colunas: ['Instrumento', 'Ação contracionista', 'Efeito sobre a moeda'],
      linhas: [
        ['Taxa de juros (Selic)', 'Elevar', 'Encarece o crédito'],
        ['Depósito compulsório', 'Elevar', 'Reduz o que o banco pode emprestar'],
        ['Mercado aberto', 'Vender títulos', 'Enxuga moeda da economia'],
        ['Redesconto', 'Encarecer ou restringir', 'Reduz a liquidez dos bancos'],
      ],
    },
    perguntaRapida: {
      enunciado: 'No arranjo institucional brasileiro, a quem cabe DEFINIR a meta de inflação?',
      alternativas: [
        'Ao Banco Central, por meio do Copom.',
        'Ao Conselho Monetário Nacional.',
        'Ao Ministério da Fazenda, no orçamento anual.',
        'À CVM, como reguladora do mercado de capitais.',
      ],
      correta: 1,
      explicacao:
        'O CMN define a meta; o Banco Central a persegue com os instrumentos de política monetária. É a divisão de papéis que a prova mais cobra.',
    },
    mapaMental: {
      id: 'mm-pm',
      rotulo: 'Política monetária',
      revisao: true,
      filhos: [
        {
          id: 'mm-pm-papeis',
          rotulo: 'Divisão de papéis',
          detalhe: 'CMN define · BC persegue',
          revisao: true,
        },
        {
          id: 'mm-pm-copom',
          rotulo: 'Copom',
          detalhe: 'A cada 45 dias · Selic meta',
          revisao: true,
          filhos: [
            { id: 'mm-pm-selic-ef', rotulo: 'Selic efetiva', detalhe: 'Média das compromissadas' },
          ],
        },
        {
          id: 'mm-pm-instr',
          rotulo: 'Instrumentos',
          revisao: true,
          filhos: [
            { id: 'mm-pm-juros', rotulo: 'Taxa de juros', revisao: true },
            { id: 'mm-pm-comp', rotulo: 'Compulsório', revisao: true },
            { id: 'mm-pm-open', rotulo: 'Mercado aberto', revisao: true },
            { id: 'mm-pm-redesc', rotulo: 'Redesconto', revisao: true },
          ],
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Quando os preços sobem demais, o Banco Central encarece o dinheiro. Com crédito caro as pessoas compram menos, e a pressão sobre os preços cede.',
      exemplo:
        'A inflação passa da meta. O Copom sobe a Selic. Financiamento e cartão ficam mais caros, o consumo esfria e os preços param de subir tão rápido.',
      analogia:
        'A Selic é o pedal de freio da economia. Pisar segura o carro, mas também atrasa a viagem — o BC decide o quanto pisar.',
      iniciante:
        'O Banco Central controla os juros básicos do país. Juros altos seguram a inflação; juros baixos estimulam a economia.',
    },
    niveis: {
      entenda:
        'O CMN diz qual inflação o país aceita; o Banco Central mexe nos juros para chegar lá. Juro alto esfria a economia e segura preços.',
      aprofunde:
        'O regime de metas funciona por canais de transmissão que operam com defasagem — a literatura estima seis a nove meses até o efeito pleno sobre a inflação. Por isso o Copom decide olhando PROJEÇÕES e não a inflação corrente: agir sobre o número de hoje seria agir tarde. Os canais são vários e desiguais: o do crédito (juro alto encarece financiamento), o do câmbio (juro alto atrai capital, valoriza o real e barateia importados), o de expectativas (a mais poderosa, e a razão de o BC comunicar tanto) e o de preço de ativos. É também por causa da defasagem que o regime brasileiro migrou do modelo de ano-calendário para a meta CONTÍNUA, em que o horizonte relevante deixa de ser 31 de dezembro e passa a ser um período móvel — muda o que conta como descumprimento e reduz o incentivo a apertos bruscos no fim do ano. A eficácia da política tem limites conhecidos: preços administrados e choques de oferta não respondem a juros, e insistir neles significa apertar demais o resto da economia.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 9,
  },

  {
    id: 'c-politica-fiscal',
    microtemaId: 'm1.2',
    titulo: 'Política fiscal: resultado primário, nominal e dívida',
    objetivo: 'Distinguir resultado primário de nominal e explicar o efeito da política fiscal sobre juros.',
    etiquetas: ['ESSENCIAL', 'ENTENDER'],
    resumo30s:
      'Resultado primário é receita menos despesa SEM contar juros da dívida. Resultado nominal inclui os juros. Superávit primário é o esforço do governo; o nominal mostra se a dívida cresce.',
    explicacao: {
      oQueE:
        'Política fiscal é a gestão das receitas e despesas do governo — quanto arrecada, quanto gasta e como financia a diferença.',
      porQueImporta:
        'Fiscal frouxo pressiona juros: se o mercado duvida da capacidade de pagamento do governo, exige prêmio maior para comprar títulos, e isso encarece a dívida de todo mundo. É por isso que a discussão fiscal move o preço dos ativos.',
      paraQueServe:
        'Financiar a atuação do Estado e, como efeito, estimular ou conter a demanda agregada.',
      comoFunciona: [
        'RESULTADO PRIMÁRIO = receitas − despesas, EXCLUÍDOS os juros da dívida. Mede o esforço fiscal do período.',
        'RESULTADO NOMINAL = resultado primário − juros da dívida. É o que efetivamente muda o estoque da dívida.',
        'SUPERÁVIT é resultado positivo; DÉFICIT é negativo. O Brasil pode ter superávit primário e déficit nominal ao mesmo tempo — basta a conta de juros ser maior que o esforço.',
        'A dívida pública é acompanhada em proporção do PIB. Ela cai quando o PIB cresce mais rápido do que a dívida, mesmo sem superávit.',
        'POLÍTICA EXPANSIONISTA: aumenta gasto ou reduz tributo, estimulando a demanda. CONTRACIONISTA: o oposto.',
      ],
      exemploSimples:
        'O governo arrecada R$ 100 e gasta R$ 95 fora juros: superávit primário de R$ 5. Mas paga R$ 20 de juros da dívida. O resultado nominal é déficit de R$ 15, e é esse número que aumenta o estoque da dívida.',
      exemploAplicado:
        'Uma notícia de piora fiscal derruba o preço dos títulos prefixados longos. O mecanismo: mais risco percebido de crédito soberano faz o mercado exigir taxa maior; taxa maior significa preço menor nos títulos já emitidos. O cliente sente no extrato uma decisão que ninguém tomou sobre a carteira dele.',
      lembrarNaProva: [
        'Primário EXCLUI juros; nominal INCLUI.',
        'Superávit primário com déficit nominal é combinação possível e comum.',
        'A dívida é medida em proporção do PIB.',
        'Expansionista: mais gasto ou menos tributo.',
      ],
      revisaoRapida: [
        'Resultado primário: receitas − despesas, sem juros.',
        'Resultado nominal: primário menos os juros da dívida.',
        'É o nominal que faz o estoque da dívida crescer.',
        'Dívida é acompanhada como percentual do PIB.',
        'Risco fiscal percebido pressiona juros e derruba preço de título.',
      ],
    },
    exemplos: [
      {
        titulo: 'Por que a dívida/PIB pode cair sem superávit',
        corpo:
          'A relação é uma fração. Se o PIB nominal cresce mais rápido que o estoque da dívida, a razão cai mesmo com déficit. É por isso que crescimento e inflação alta aparecem, no curto prazo, como aliados da estatística fiscal.',
      },
    ],
    conceitoChave:
      'O resultado primário mede o esforço do governo; o nominal mede o que de fato acontece com a dívida.',
    pontosChave: [
      'Primário: sem juros',
      'Nominal: com juros',
      'Superávit primário + déficit nominal é possível',
      'Dívida medida como % do PIB',
      'Risco fiscal pressiona a curva de juros',
    ],
    erroComum:
      'Achar que superávit primário significa que a dívida diminuiu. Se os juros pagos superam o superávit, o resultado nominal é deficitário e a dívida cresce assim mesmo.',
    alertaProva:
      'A questão típica dá receita, despesa e juros e pede um dos dois resultados. Leia com atenção qual dos dois foi pedido — a diferença entre eles é exatamente a conta de juros.',
    tabela: {
      titulo: 'Primário × nominal',
      colunas: ['Resultado', 'Inclui juros da dívida?', 'O que revela'],
      linhas: [
        ['Primário', 'Não', 'Esforço fiscal do período'],
        ['Nominal', 'Sim', 'Variação efetiva do estoque da dívida'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'O governo apura superávit primário de R$ 5 bilhões e paga R$ 20 bilhões de juros no período. O resultado nominal é:',
      alternativas: [
        'Superávit de R$ 25 bilhões',
        'Déficit de R$ 15 bilhões',
        'Superávit de R$ 5 bilhões',
        'Equilíbrio, pois o primário compensa os juros',
      ],
      correta: 1,
      explicacao:
        'Nominal = primário − juros = 5 − 20 = −15. Superávit primário não impede déficit nominal quando a conta de juros é maior.',
    },
    mapaMental: {
      id: 'mm-pf',
      rotulo: 'Política fiscal',
      revisao: true,
      filhos: [
        {
          id: 'mm-pf-prim',
          rotulo: 'Resultado primário',
          detalhe: 'Sem juros · esforço fiscal',
          revisao: true,
        },
        {
          id: 'mm-pf-nom',
          rotulo: 'Resultado nominal',
          detalhe: 'Com juros · move a dívida',
          revisao: true,
        },
        {
          id: 'mm-pf-divida',
          rotulo: 'Dívida / PIB',
          detalhe: 'Cai se o PIB cresce mais que a dívida',
          revisao: true,
        },
        {
          id: 'mm-pf-juros',
          rotulo: 'Efeito sobre juros',
          detalhe: 'Risco fiscal ↑ → taxa exigida ↑ → preço ↓',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Primário é a conta do governo sem os juros da dívida. Nominal é a conta completa. É a completa que diz se a dívida aumentou.',
      exemplo:
        'Arrecadou 100, gastou 95 fora juros: sobrou 5. Mas pagou 20 de juros. No fim faltaram 15, e é isso que entra na dívida.',
      analogia:
        'É o orçamento de uma família que separa "gastos do mês" da parcela do financiamento. Dá para fechar o mês no azul e ainda assim ver a dívida crescer.',
      iniciante:
        'O governo arrecada impostos e gasta. Quando gasta mais do que arrecada, precisa pegar dinheiro emprestado, e a dívida cresce.',
    },
    niveis: {
      entenda:
        'Resultado primário é a conta do governo sem os juros; o nominal inclui os juros e é ele que diz se a dívida cresceu.',
      aprofunde:
        'A dinâmica da dívida em proporção do PIB depende de uma relação simples e implacável: quando a taxa de juros real da dívida supera a taxa de crescimento real do PIB, a razão dívida/PIB cresce por conta própria mesmo com resultado primário zerado — é o efeito bola de neve. Nesse cenário, estabilizar a dívida exige superávit primário, e quanto maior o diferencial juros-crescimento, maior o superávit necessário. Daí a conexão direta entre fiscal e monetário: um fiscal percebido como insustentável eleva o prêmio de risco exigido nos títulos soberanos, o que eleva o juro da dívida, o que piora a dinâmica — um circuito que se retroalimenta e que a literatura chama de dominância fiscal quando chega ao ponto de a política monetária perder eficácia. Vale distinguir também dívida BRUTA de LÍQUIDA: a líquida abate ativos do setor público, entre eles as reservas internacionais, e por isso costuma ser bem menor; qual das duas usar como referência é objeto de disputa técnica legítima, e a prova costuma cobrar apenas a existência da distinção.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-politica-cambial',
    microtemaId: 'm1.2',
    titulo: 'Política cambial e regimes de câmbio',
    objetivo: 'Explicar o regime cambial brasileiro e o efeito do câmbio sobre inflação e competitividade.',
    etiquetas: ['ESSENCIAL', 'ENTENDER'],
    resumo30s:
      'O Brasil adota câmbio flutuante com intervenções — o BC não fixa a cotação, mas atua para conter volatilidade excessiva usando reservas e swaps. Desvalorização encarece importados e favorece exportadores.',
    explicacao: {
      oQueE:
        'Política cambial é a atuação do Banco Central sobre o mercado de moeda estrangeira e sobre o regime que determina como a taxa de câmbio se forma.',
      porQueImporta:
        'O câmbio é o canal mais rápido entre o mundo e os preços internos. Uma desvalorização aparece no IGP-M em semanas e no bolso do cliente em meses.',
      paraQueServe:
        'Preservar o funcionamento ordenado do mercado de câmbio e evitar que oscilações bruscas contaminem preços e contratos.',
      comoFunciona: [
        'CÂMBIO FIXO: a autoridade define a paridade e a defende comprando e vendendo divisa. Dá previsibilidade e consome reservas.',
        'CÂMBIO FLUTUANTE PURO: o preço é definido só por oferta e demanda, sem intervenção.',
        'CÂMBIO FLUTUANTE COM INTERVENÇÕES — o caso brasileiro desde 1999. A cotação é de mercado, mas o BC intervém para conter volatilidade excessiva, sem perseguir um nível.',
        'INSTRUMENTOS DE INTERVENÇÃO: venda ou compra de dólares à vista, leilões de linha e SWAP CAMBIAL, que é um derivativo — oferece proteção sem entregar a moeda.',
        'DESVALORIZAÇÃO do real: importados e insumos ficam mais caros (pressiona inflação) e exportadores ganham competitividade. VALORIZAÇÃO faz o oposto.',
      ],
      exemploSimples:
        'O dólar sobe de R$ 5,00 para R$ 5,50. Um insumo importado que custava US$ 100 passa de R$ 500 para R$ 550. O produtor repassa parte disso ao preço final, e a inflação sente.',
      exemploAplicado:
        'Um cliente pergunta se deve comprar dólar "porque vai subir". A resposta técnica passa por objetivo: se ele tem uma despesa futura em dólar — intercâmbio do filho, viagem contratada — a compra é proteção legítima e cabe na carteira. Se é aposta direcional sem passivo em moeda estrangeira, é especulação cambial, e o perfil dele precisa comportar isso.',
      lembrarNaProva: [
        'Brasil: flutuante COM intervenções, desde 1999.',
        'Swap cambial é derivativo — protege sem entregar a moeda.',
        'Desvalorização do real: pressiona inflação, ajuda exportador.',
        'No câmbio fixo, defender a paridade consome reservas.',
      ],
      revisaoRapida: [
        'Regime brasileiro: flutuante com intervenções.',
        'BC intervém contra volatilidade, não contra nível.',
        'Instrumentos: venda à vista, leilão de linha e swap cambial.',
        'Real desvalorizado encarece importados e favorece exportações.',
        'Câmbio é o canal mais rápido de repasse a preços.',
      ],
    },
    exemplos: [
      {
        titulo: 'O que o swap cambial faz',
        corpo:
          'No swap cambial tradicional o BC assume a variação do dólar e paga ao mercado a diferença em reais, recebendo em troca a taxa de juros. Ele oferece HEDGE sem gastar reserva — a liquidação é financeira, em reais, e nenhum dólar troca de mãos.',
      },
    ],
    conceitoChave:
      'No regime brasileiro o câmbio é preço de mercado; o Banco Central cuida do funcionamento, não da cotação.',
    pontosChave: [
      'Flutuante com intervenções desde 1999',
      'Intervenção mira volatilidade, não nível',
      'Swap cambial: hedge sem gastar reserva',
      'Desvalorização: inflação ↑, exportação ↑',
      'Câmbio fixo consome reservas',
    ],
    erroComum:
      'Dizer que o Banco Central "define a cotação do dólar". Ele intervém para suavizar movimentos desordenados, mas não fixa nem persegue um patamar de câmbio.',
    alertaProva:
      'A palavra-chave do regime brasileiro é "flutuante". Alternativa que descreva câmbio fixo ou banda cambial está descrevendo outro país ou outro período.',
    tabela: {
      titulo: 'Regimes cambiais',
      colunas: ['Regime', 'Quem define a cotação', 'Uso de reservas'],
      linhas: [
        ['Fixo', 'A autoridade monetária', 'Intenso — defender a paridade'],
        ['Flutuante puro', 'O mercado', 'Nenhum'],
        ['Flutuante com intervenções', 'O mercado, com atuação pontual do BC', 'Eventual e limitado'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Uma desvalorização do real diante do dólar tende a produzir qual efeito?',
      alternativas: [
        'Barateia importados e prejudica exportadores.',
        'Encarece importados e favorece exportadores.',
        'Não afeta preços internos, apenas o turismo.',
        'Reduz a inflação, por baratear insumos.',
      ],
      correta: 1,
      explicacao:
        'Real desvalorizado significa mais reais por dólar: o importado custa mais e o exportador recebe mais reais pela mesma venda.',
    },
    mapaMental: {
      id: 'mm-cambio',
      rotulo: 'Política cambial',
      revisao: true,
      filhos: [
        {
          id: 'mm-cambio-reg',
          rotulo: 'Regimes',
          revisao: true,
          filhos: [
            { id: 'mm-cambio-fixo', rotulo: 'Fixo', detalhe: 'Autoridade define e defende' },
            { id: 'mm-cambio-flut', rotulo: 'Flutuante puro', detalhe: 'Só oferta e demanda' },
            {
              id: 'mm-cambio-suja',
              rotulo: 'Flutuante com intervenções',
              detalhe: 'Brasil, desde 1999',
              revisao: true,
            },
          ],
        },
        {
          id: 'mm-cambio-instr',
          rotulo: 'Instrumentos',
          detalhe: 'Venda à vista · leilão de linha · swap',
          revisao: true,
        },
        {
          id: 'mm-cambio-efeito',
          rotulo: 'Desvalorização',
          detalhe: 'Importado ↑ · exportador ganha',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'No Brasil o preço do dólar é de mercado. O Banco Central entra só quando o movimento fica desordenado, e não para segurar um valor.',
      exemplo:
        'O dólar sai de R$ 5,00 para R$ 5,50. O insumo importado de US$ 100 sobe de R$ 500 para R$ 550, e parte disso chega ao preço da prateleira.',
      analogia:
        'É como um rio de corrente livre: ninguém decide a altura da água, mas há comportas para evitar enchente.',
      iniciante:
        'O câmbio é o preço do dólar em reais. Quando ele sobe, tudo que vem de fora fica mais caro aqui dentro.',
    },
    niveis: {
      entenda:
        'O câmbio brasileiro é livre, mas o Banco Central intervém para conter oscilações bruscas — sem perseguir uma cotação.',
      aprofunde:
        'A escolha do regime cambial é limitada por um resultado conhecido como trilema da economia aberta: um país não pode ter simultaneamente câmbio fixo, livre mobilidade de capitais e política monetária autônoma. Deve escolher dois. O Brasil pós-1999 abriu mão do câmbio fixo justamente para preservar a autonomia monetária com conta de capital aberta — e é por isso que o regime de metas de inflação e o câmbio flutuante nasceram juntos, no mesmo ano: um depende do outro. O swap cambial é a peça que permite intervir sem contradizer essa escolha, porque oferece hedge ao mercado em liquidação financeira, em reais, preservando o estoque de reservas. Vale distinguir ainda câmbio NOMINAL de REAL: o real efetivo pondera a cesta de parceiros comerciais pelos diferenciais de inflação, e é ele, não a cotação de tela, que mede competitividade. Uma desvalorização nominal integralmente repassada a preços internos não muda competitividade nenhuma.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-contas-externas',
    microtemaId: 'm1.2',
    titulo: 'Balanço de pagamentos e as contas externas',
    objetivo: 'Identificar as contas do balanço de pagamentos e o que cada uma registra.',
    etiquetas: ['ATENCAO', 'DECORAR'],
    resumo30s:
      'O balanço de pagamentos registra todas as transações do país com o exterior. Divide-se em conta corrente (comercial, serviços, renda primária e secundária), conta capital e conta financeira.',
    explicacao: {
      oQueE:
        'O balanço de pagamentos é o registro contábil de todas as transações econômicas entre residentes do país e o resto do mundo em um período.',
      porQueImporta:
        'Déficit persistente em conta corrente significa que o país gasta mais do que produz e precisa financiar a diferença com poupança externa — o que o torna dependente do humor do capital estrangeiro.',
      paraQueServe:
        'Avaliar a solidez externa da economia e antecipar pressões sobre o câmbio.',
      comoFunciona: [
        'CONTA CORRENTE reúne quatro grupos: balança comercial (bens), serviços (fretes, viagens, seguros), renda primária (juros, lucros e dividendos remetidos) e renda secundária (transferências unilaterais, como remessas de emigrantes).',
        'BALANÇA COMERCIAL = exportações − importações de BENS. Positiva é superávit; negativa é déficit.',
        'CONTA CAPITAL registra transferências de patrimônio e é, no Brasil, de valor pequeno.',
        'CONTA FINANCEIRA registra investimento direto no país (IDP), investimento em carteira, derivativos e variação de reservas.',
        'O déficit em conta corrente precisa ser financiado pela conta financeira. Financiado por IDP, o risco é menor; financiado por capital de curto prazo, é volátil.',
      ],
      exemploSimples:
        'O país exporta US$ 100 e importa US$ 80 de bens: superávit comercial de US$ 20. Mas remete US$ 40 de lucros e dividendos ao exterior, registrados em renda primária. A conta corrente fecha deficitária em US$ 20.',
      exemploAplicado:
        'Um período de forte entrada de investimento estrangeiro em bolsa aparece na conta financeira e tende a valorizar o real, porque o estrangeiro precisa vender dólar para comprar ação em reais. Quando esse fluxo se inverte, o câmbio sente antes de qualquer indicador de atividade — e é por isso que carteira de renda variável e cotação do dólar costumam se mexer juntas.',
      lembrarNaProva: [
        'Conta corrente: comercial + serviços + renda primária + renda secundária.',
        'Balança comercial cobre BENS; fretes e viagens ficam em serviços.',
        'Lucros e dividendos remetidos entram em renda primária.',
        'Déficit em conta corrente é financiado pela conta financeira.',
      ],
      revisaoRapida: [
        'Balanço de pagamentos registra tudo entre o país e o exterior.',
        'Conta corrente tem quatro grupos, e comercial é só um deles.',
        'Serviços inclui fretes, viagens e seguros.',
        'Renda primária registra juros, lucros e dividendos.',
        'Conta financeira registra IDP, carteira, derivativos e reservas.',
      ],
    },
    exemplos: [
      {
        titulo: 'Onde cada coisa é registrada',
        corpo:
          'Soja exportada → balança comercial. Turista brasileiro gastando fora → serviços. Multinacional remetendo lucro à matriz → renda primária. Brasileiro no exterior mandando dinheiro à família → renda secundária. Estrangeiro comprando fábrica no Brasil → conta financeira (IDP).',
      },
    ],
    conceitoChave:
      'Conta corrente mede o que o país ganha e gasta com o mundo; conta financeira mede como a diferença é financiada.',
    pontosChave: [
      'Conta corrente: comercial + serviços + renda 1ª + renda 2ª',
      'Comercial cobre apenas bens',
      'Serviços: fretes, viagens, seguros',
      'Renda primária: juros, lucros, dividendos',
      'Conta financeira: IDP, carteira, derivativos, reservas',
    ],
    erroComum:
      'Tratar balança comercial como sinônimo de conta corrente. A comercial é apenas um dos quatro grupos, e o país pode ter superávit comercial com déficit em conta corrente.',
    alertaProva:
      'A questão típica descreve uma transação e pergunta onde ela é registrada. Fretes e viagens vão para SERVIÇOS, não para a balança comercial.',
    tabela: {
      titulo: 'Estrutura do balanço de pagamentos',
      colunas: ['Conta', 'O que registra'],
      linhas: [
        ['Balança comercial', 'Exportação e importação de bens'],
        ['Serviços', 'Fretes, viagens, seguros, royalties'],
        ['Renda primária', 'Juros, lucros e dividendos'],
        ['Renda secundária', 'Transferências unilaterais'],
        ['Conta capital', 'Transferências de patrimônio'],
        ['Conta financeira', 'IDP, carteira, derivativos, reservas'],
      ],
    },
    perguntaRapida: {
      enunciado: 'O gasto de um turista brasileiro em viagem ao exterior é registrado em qual conta?',
      alternativas: ['Balança comercial', 'Serviços', 'Renda primária', 'Conta capital'],
      correta: 1,
      explicacao:
        'Viagem é serviço. A balança comercial registra apenas bens; fretes, seguros e turismo ficam na conta de serviços.',
    },
    mapaMental: {
      id: 'mm-bp',
      rotulo: 'Balanço de pagamentos',
      revisao: true,
      filhos: [
        {
          id: 'mm-bp-cc',
          rotulo: 'Conta corrente',
          revisao: true,
          filhos: [
            { id: 'mm-bp-com', rotulo: 'Balança comercial', detalhe: 'Só bens', revisao: true },
            { id: 'mm-bp-serv', rotulo: 'Serviços', detalhe: 'Fretes, viagens, seguros', revisao: true },
            { id: 'mm-bp-r1', rotulo: 'Renda primária', detalhe: 'Juros, lucros, dividendos', revisao: true },
            { id: 'mm-bp-r2', rotulo: 'Renda secundária', detalhe: 'Transferências unilaterais' },
          ],
        },
        { id: 'mm-bp-cap', rotulo: 'Conta capital', detalhe: 'Transferência de patrimônio' },
        {
          id: 'mm-bp-fin',
          rotulo: 'Conta financeira',
          detalhe: 'IDP · carteira · derivativos · reservas',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'É o extrato do país com o mundo: o que entrou, o que saiu e como a diferença foi coberta.',
      exemplo:
        'Exportou US$ 100 em soja e importou US$ 80: sobrou US$ 20. Mas remeteu US$ 40 de lucro ao exterior. No fim, faltaram US$ 20.',
      analogia:
        'Conta corrente é o salário menos as despesas do mês. Conta financeira é o cartão e o empréstimo que cobrem a diferença.',
      iniciante:
        'O país compra e vende com outros países. O balanço de pagamentos anota todas essas trocas em um só lugar.',
    },
    niveis: {
      entenda:
        'O balanço de pagamentos anota tudo que o país troca com o exterior, separado entre o que ele ganha e gasta e como financia a diferença.',
      aprofunde:
        'O balanço de pagamentos é, por construção, uma identidade contábil que fecha em zero: conta corrente + conta capital + conta financeira + erros e omissões = 0. Isso significa que déficit em conta corrente NÃO é um problema em si — é a contrapartida de entrada líquida de poupança externa, o que pode ser saudável num país que investe mais do que poupa. O que importa é a QUALIDADE do financiamento: investimento direto no país cria capacidade produtiva e é dificilmente reversível; investimento em carteira pode sair na velocidade de uma ordem de venda. Um déficit em conta corrente coberto por IDP é sustentável de forma bem diferente de um coberto por capital de curto prazo — a distinção que separou países que atravessaram as crises cambiais dos anos 1990 dos que não atravessaram. As reservas internacionais entram na conta financeira como ativo do próprio país e funcionam como seguro contra parada súbita de fluxo; ter reservas altas é caro, porque elas rendem menos que o custo da dívida que as financia, e esse diferencial é o prêmio do seguro.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },
]
