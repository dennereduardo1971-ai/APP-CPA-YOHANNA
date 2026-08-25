import type { Conceito } from '../types'

/**
 * MICROTEMA 3.1 — Finanças pessoais.
 *
 * É o microtema que precede tecnicamente todo o resto do macrotema 3: não há
 * suitability honesto sem orçamento, reserva e objetivo definidos. Um cliente
 * sem reserva de emergência que declara perfil arrojado não é arrojado — é um
 * cliente que vai resgatar no pior momento.
 *
 * Por isso as sete aulas seguem uma ordem que é também um método de trabalho:
 * medir (orçamento, balanço), proteger (reserva, endividamento), projetar
 * (objetivos, ciclo de vida) e converter em meta de longo prazo
 * (aposentadoria).
 */

export const CONCEITOS_3_1: Conceito[] = [
  {
    id: 'c-orcamento',
    microtemaId: 'm3.1',
    titulo: 'Orçamento pessoal e fluxo de caixa',
    objetivo: 'Estruturar receitas e despesas e calcular a capacidade de poupança do cliente.',
    etiquetas: ['ESSENCIAL', 'ENTENDER'],
    resumo30s:
      'Orçamento é o fluxo de caixa da pessoa: receitas menos despesas em um período. O que sobra é a capacidade de poupança — o único número que diz quanto o cliente realmente pode investir por mês.',
    explicacao: {
      oQueE:
        'Orçamento pessoal é o registro organizado das entradas e saídas de dinheiro de uma pessoa ou família em um período, normalmente mensal.',
      porQueImporta:
        'É o insumo de qualquer recomendação. Sem saber a sobra mensal, aportar em qualquer produto é chute — e um aporte que não cabe no orçamento vira resgate antecipado três meses depois.',
      paraQueServe:
        'Determinar quanto se pode poupar sem comprometer o padrão de vida, e identificar onde o dinheiro está indo.',
      comoFunciona: [
        'RECEITAS: salário líquido, pró-labore, aluguéis, rendimentos. Trabalhe sempre com o valor LÍQUIDO, já descontados tributos e encargos.',
        'DESPESAS FIXAS: repetem valor e data — aluguel, escola, plano de saúde, parcelas. São previsíveis e difíceis de cortar no curto prazo.',
        'DESPESAS VARIÁVEIS: mudam de mês a mês — alimentação, transporte, lazer. São onde há margem real de ajuste.',
        'DESPESAS SAZONAIS: acontecem poucas vezes por ano — IPVA, IPTU, material escolar, seguro. Precisam ser provisionadas mensalmente, senão viram dívida.',
        'CAPACIDADE DE POUPANÇA = receitas − despesas. É esse número, e não o saldo da conta, que define o aporte mensal sustentável.',
      ],
      exemploSimples:
        'Renda líquida de R$ 6.000, despesas fixas de R$ 3.500 e variáveis de R$ 1.700. A capacidade de poupança é R$ 800 por mês — e é isso que pode virar aporte programado.',
      exemploAplicado:
        'Um cliente quer aportar R$ 2.000 por mês porque acabou de receber o décimo terceiro. O orçamento mostra sobra de R$ 800. Aportar R$ 2.000 significaria resgatar em três meses, provavelmente com perda de rentabilidade e, se houver marcação a mercado, com prejuízo. A recomendação correta é aporte de R$ 800 recorrente mais um aporte único do décimo terceiro.',
      lembrarNaProva: [
        'Trabalhe sempre com receita LÍQUIDA.',
        'Despesa sazonal precisa de provisão mensal.',
        'Capacidade de poupança = receitas − despesas.',
        'Aporte sustentável se define pela sobra, não pelo saldo em conta.',
      ],
      revisaoRapida: [
        'Orçamento é o fluxo de caixa da pessoa.',
        'Receita líquida, nunca bruta.',
        'Fixas repetem; variáveis oscilam; sazonais concentram.',
        'Sazonal sem provisão vira dívida.',
        'A sobra mensal define o aporte sustentável.',
      ],
    },
    exemplos: [
      {
        titulo: 'Por que a sazonal quebra o orçamento',
        corpo:
          'IPVA, IPTU e material escolar somam alguns milhares por ano e chegam quase todos em janeiro. Sem provisão mensal, o cliente cobre a diferença com rotativo do cartão — e a dívida de janeiro custa o ano inteiro.',
      },
    ],
    conceitoChave:
      'A sobra mensal, não o saldo em conta, é o que define quanto o cliente pode investir de forma sustentável.',
    pontosChave: [
      'Receita líquida',
      'Fixas, variáveis e sazonais',
      'Sazonal exige provisão',
      'Sobra = receitas − despesas',
      'Aporte além da sobra vira resgate',
    ],
    erroComum:
      'Definir o aporte pelo saldo disponível na conta. Saldo é foto de um instante; o que sustenta aporte recorrente é a sobra mensal.',
    alertaProva:
      'Questão de orçamento costuma dar despesas sazonais anuais. Divida por doze antes de calcular a sobra mensal.',
    tabela: {
      titulo: 'Tipos de despesa',
      colunas: ['Tipo', 'Comportamento', 'Margem de ajuste'],
      linhas: [
        ['Fixa', 'Mesmo valor e data', 'Baixa no curto prazo'],
        ['Variável', 'Oscila mês a mês', 'Alta'],
        ['Sazonal', 'Poucas vezes ao ano', 'Baixa, exige provisão'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Renda líquida de R$ 6.000, despesas fixas de R$ 3.500 e variáveis de R$ 1.700. Qual a capacidade mensal de poupança?',
      alternativas: ['R$ 2.500', 'R$ 800', 'R$ 1.700', 'R$ 6.000'],
      correta: 1,
      explicacao:
        '6.000 − 3.500 − 1.700 = R$ 800. É esse valor que sustenta um aporte mensal recorrente.',
    },
    mapaMental: {
      id: 'mm-orc',
      rotulo: 'Orçamento',
      revisao: true,
      filhos: [
        { id: 'mm-orc-rec', rotulo: 'Receitas', detalhe: 'Sempre líquidas', revisao: true },
        {
          id: 'mm-orc-desp',
          rotulo: 'Despesas',
          revisao: true,
          filhos: [
            { id: 'mm-orc-fix', rotulo: 'Fixas', detalhe: 'Valor e data repetidos' },
            { id: 'mm-orc-var', rotulo: 'Variáveis', detalhe: 'Onde há margem de ajuste' },
            { id: 'mm-orc-saz', rotulo: 'Sazonais', detalhe: 'Exigem provisão mensal', revisao: true },
          ],
        },
        {
          id: 'mm-orc-sobra',
          rotulo: 'Capacidade de poupança',
          detalhe: 'Define o aporte sustentável',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Orçamento é anotar o que entra e o que sai. O que sobra é o que dá para investir todo mês sem apertar.',
      exemplo:
        'Entram R$ 6.000, saem R$ 5.200. Sobram R$ 800 — e é esse o valor do aporte mensal, não os R$ 2.000 que pareciam sobrar no dia do salário.',
      analogia:
        'É o extrato de uma empresa aplicado à casa: faturamento, custos e o lucro que sobra no fim do mês.',
      iniciante:
        'Antes de investir, é preciso saber quanto sobra por mês. Esse número vem de comparar tudo que entra com tudo que sai.',
    },
    niveis: {
      entenda:
        'Orçamento é o que entra menos o que sai. A sobra é o valor que dá para investir todo mês sem precisar resgatar depois.',
      aprofunde:
        'A distinção entre despesa fixa, variável e sazonal não é organizacional: ela determina a ELASTICIDADE do orçamento diante de um choque de renda. Um orçamento com alta proporção de despesa fixa é rígido — perder 20% da renda obriga a inadimplência ou a endividamento, porque não há o que cortar no curto prazo. O mesmo orçamento com peso maior em variáveis absorve o choque reduzindo consumo. É por isso que a recomendação de reserva de emergência não pode ser calibrada só pelo valor absoluto das despesas: dois clientes com a mesma despesa total, um com aluguel e escola e outro com moradia própria, têm exposições completamente diferentes. As despesas sazonais introduzem um problema adicional, de descasamento temporal: a renda é mensal e a despesa é anual, e a provisão existe para converter uma na outra. Sem ela, o orçamento estruturalmente equilibrado ainda assim gera dívida cara todo janeiro — e essa dívida, contratada no rotativo, custa mais em juros do que a despesa original.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 7,
  },

  {
    id: 'c-balanco-pessoal',
    microtemaId: 'm3.1',
    titulo: 'Balanço patrimonial pessoal',
    objetivo: 'Calcular o patrimônio líquido pessoal e distinguir ativos por liquidez.',
    etiquetas: ['ENTENDER', 'DECORAR'],
    resumo30s:
      'Ativos menos passivos é o patrimônio líquido. O orçamento é o filme do mês; o balanço é a foto do momento. Os dois são necessários, e medem coisas diferentes.',
    explicacao: {
      oQueE:
        'Balanço patrimonial pessoal é a relação, em uma data, de tudo que a pessoa tem (ativos) e de tudo que ela deve (passivos), cuja diferença é o patrimônio líquido.',
      porQueImporta:
        'Orçamento equilibrado com patrimônio líquido negativo é uma situação comum e invisível se só se olha o mês. O balanço revela endividamento estrutural que o fluxo de caixa esconde.',
      paraQueServe:
        'Medir a situação patrimonial em um instante e acompanhar sua evolução ao longo do tempo.',
      comoFunciona: [
        'ATIVOS: tudo que tem valor econômico — saldo em conta, investimentos, imóveis, veículos, participações.',
        'Os ativos se ordenam por LIQUIDEZ: quanto mais rápido viram dinheiro sem perda relevante de valor, mais líquidos.',
        'PASSIVOS: tudo que se deve — financiamentos, empréstimos, saldo de cartão, parcelamentos.',
        'PATRIMÔNIO LÍQUIDO = ativos − passivos. Pode ser negativo, e frequentemente é em quem financiou imóvel recentemente.',
        'BALANÇO é foto de um instante; ORÇAMENTO é filme de um período. Um não substitui o outro.',
      ],
      exemploSimples:
        'Ativos de R$ 400.000 (imóvel de R$ 350.000, investimentos de R$ 45.000, conta de R$ 5.000) e passivos de R$ 280.000 (saldo do financiamento). O patrimônio líquido é R$ 120.000.',
      exemploAplicado:
        'Um cliente com orçamento apertado mas patrimônio líquido alto e ilíquido — quase tudo em imóvel — não precisa de mais aporte: precisa de liquidez. A recomendação técnica é construir reserva antes de qualquer novo investimento de longo prazo, mesmo que isso pareça "render menos".',
      lembrarNaProva: [
        'Patrimônio líquido = ativos − passivos.',
        'Ativos se ordenam por liquidez.',
        'Patrimônio líquido pode ser negativo.',
        'Balanço é foto; orçamento é filme.',
      ],
      revisaoRapida: [
        'Ativos: tudo que tem valor econômico.',
        'Passivos: tudo que se deve.',
        'Patrimônio líquido é a diferença entre os dois.',
        'Liquidez ordena os ativos por rapidez de conversão.',
        'Orçamento e balanço medem coisas diferentes.',
      ],
    },
    exemplos: [
      {
        titulo: 'Rico e sem dinheiro',
        corpo:
          'Patrimônio líquido de R$ 1 milhão concentrado em um imóvel e R$ 2.000 em conta é uma situação de alto patrimônio e baixíssima liquidez. Qualquer imprevisto vira dívida cara, porque o ativo não se converte em caixa a tempo.',
      },
    ],
    conceitoChave:
      'Patrimônio alto não é o mesmo que patrimônio disponível — e é a liquidez que separa os dois.',
    pontosChave: [
      'PL = ativos − passivos',
      'Liquidez ordena os ativos',
      'PL pode ser negativo',
      'Balanço: foto; orçamento: filme',
      'Patrimônio ilíquido exige reserva',
    ],
    erroComum:
      'Somar o valor do imóvel ao patrimônio e ignorar o saldo devedor do financiamento. O que integra o patrimônio líquido é a diferença, não o valor do bem.',
    alertaProva:
      'Questão de balanço costuma listar bens financiados. Some o bem no ativo e o saldo devedor no passivo — nunca só um dos dois.',
    tabela: {
      titulo: 'Ativos por liquidez',
      colunas: ['Grau', 'Exemplos'],
      linhas: [
        ['Alta', 'Conta corrente, aplicações de liquidez diária'],
        ['Média', 'Títulos com vencimento, fundos com prazo de resgate'],
        ['Baixa', 'Imóveis, participações societárias, veículos'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Ativos totais de R$ 400.000 e um financiamento com saldo devedor de R$ 280.000. Qual o patrimônio líquido?',
      alternativas: ['R$ 400.000', 'R$ 120.000', 'R$ 280.000', 'R$ 680.000'],
      correta: 1,
      explicacao:
        'Patrimônio líquido é ativos menos passivos: 400.000 − 280.000 = R$ 120.000.',
    },
    mapaMental: {
      id: 'mm-bal',
      rotulo: 'Balanço pessoal',
      revisao: true,
      filhos: [
        {
          id: 'mm-bal-ativo',
          rotulo: 'Ativos',
          detalhe: 'Ordenados por liquidez',
          revisao: true,
        },
        { id: 'mm-bal-passivo', rotulo: 'Passivos', detalhe: 'Tudo que se deve', revisao: true },
        { id: 'mm-bal-pl', rotulo: 'Patrimônio líquido', detalhe: 'Ativos − passivos · pode ser negativo', revisao: true },
        { id: 'mm-bal-foto', rotulo: 'Foto × filme', detalhe: 'Balanço × orçamento', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'Some tudo que você tem, tire tudo que você deve. O que sobra é o seu patrimônio de verdade.',
      exemplo:
        'Imóvel de R$ 350.000 com R$ 280.000 de financiamento não vale R$ 350.000 no seu bolso: vale R$ 70.000.',
      analogia:
        'É o balanço de uma empresa aplicado à pessoa: bens de um lado, dívidas do outro, e a diferença é o que é seu.',
      iniciante:
        'Ter um carro financiado não significa ter o valor do carro. Parte dele ainda pertence ao banco.',
    },
    niveis: {
      entenda:
        'Patrimônio líquido é o que você tem menos o que você deve. Ele pode ser negativo, e isso é comum logo após financiar um imóvel.',
      aprofunde:
        'A leitura conjunta de balanço e orçamento revela combinações que nenhum dos dois mostra sozinho, e cada uma pede recomendação diferente. Patrimônio alto com fluxo apertado indica riqueza ilíquida e pede construção de reserva antes de qualquer novo aporte de longo prazo. Fluxo folgado com patrimônio baixo é o perfil de quem começou a poupar tarde e tem capacidade de recuperação. Fluxo apertado com patrimônio negativo é situação de endividamento estrutural, em que investir é tecnicamente errado: quitar dívida cara é um investimento com retorno certo igual à taxa da dívida, e nenhum ativo de risco compatível oferece isso. O erro clássico de recomendação nasce de olhar só o orçamento: um cliente com sobra mensal e rotativo aberto tem "capacidade de aporte" no papel, mas aportar enquanto carrega a dívida mais cara do varejo destrói valor de forma aritmética — a taxa que ele paga supera com folga qualquer retorno esperado ajustado a risco.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 6,
  },

  {
    id: 'c-reserva-emergencia',
    microtemaId: 'm3.1',
    titulo: 'Reserva de emergência',
    objetivo: 'Dimensionar a reserva conforme a estabilidade da renda e escolher o produto adequado.',
    etiquetas: ['ESSENCIAL', 'ATENCAO'],
    resumo30s:
      'A reserva se mede em MESES DE DESPESA, não em valor absoluto, e o número de meses depende da estabilidade da renda. Ela exige liquidez diária e baixa volatilidade — rentabilidade é o critério menos importante aqui.',
    explicacao: {
      oQueE:
        'Reserva de emergência é o montante mantido em ativos de alta liquidez e baixa oscilação, destinado a cobrir despesas diante de eventos imprevistos.',
      porQueImporta:
        'É o que impede que um imprevisto vire dívida cara ou resgate no pior momento. Sem reserva, qualquer carteira de longo prazo é, na prática, uma carteira de curto prazo.',
      paraQueServe:
        'Absorver perda de renda, despesa médica, reparo urgente ou desemprego sem desmontar o plano de investimento.',
      comoFunciona: [
        'O tamanho se mede em MESES DE DESPESA — não em salários e não em valor redondo. A referência é o custo de vida mensal do cliente.',
        'RENDA ESTÁVEL (servidor, CLT com estabilidade): a referência usual é da ordem de três a seis meses de despesa.',
        'RENDA VARIÁVEL (autônomo, comissionado, empresário): a exigência sobe, tipicamente para seis a doze meses, porque a probabilidade e a duração da interrupção de renda são maiores.',
        'O PRODUTO precisa ter liquidez diária e baixa volatilidade. Pós-fixado atrelado à Selic ou ao CDI atende; prefixado longo e renda variável, não.',
        'RENTABILIDADE é o critério MENOS importante da reserva. O objetivo dela é estar disponível e íntegra no dia em que for necessária.',
      ],
      exemploSimples:
        'Cliente com despesa mensal de R$ 5.000 e emprego estável: reserva de referência entre R$ 15.000 e R$ 30.000, em produto de liquidez diária.',
      exemploAplicado:
        'Um autônomo com renda irregular pergunta se pode manter a reserva num fundo de ações "porque rende mais". A resposta técnica é não, e a razão não é conservadorismo: a reserva será acionada justamente quando a renda cair, e crises de renda costumam coincidir com quedas de mercado. Ele venderia na baixa exatamente no mês em que mais precisa do dinheiro.',
      lembrarNaProva: [
        'Mede-se em MESES DE DESPESA, não em salários.',
        'Renda instável exige mais meses de reserva.',
        'Exige liquidez diária e baixa volatilidade.',
        'Rentabilidade é o critério menos relevante.',
      ],
      revisaoRapida: [
        'Reserva se mede em meses de despesa.',
        'Renda estável: da ordem de três a seis meses.',
        'Renda variável: tipicamente seis a doze meses.',
        'Produto: liquidez diária e baixa oscilação.',
        'Rentabilidade vem por último na escolha.',
      ],
    },
    exemplos: [
      {
        titulo: 'Por que renda variável não serve de reserva',
        corpo:
          'A reserva é acionada quando a renda falha — desemprego, crise setorial, retração econômica. São exatamente os momentos em que a bolsa costuma cair. Manter reserva em ativo volátil garante vender na baixa no pior mês possível.',
      },
    ],
    conceitoChave:
      'A reserva não existe para render: existe para estar íntegra e disponível no dia em que a renda falhar.',
    pontosChave: [
      'Meses de despesa, não salários',
      'Renda instável → mais meses',
      'Liquidez diária obrigatória',
      'Baixa volatilidade obrigatória',
      'Rentabilidade é critério secundário',
    ],
    erroComum:
      'Dimensionar a reserva em salários. Quem ganha R$ 10.000 e gasta R$ 4.000 precisa de reserva bem menor que quem ganha R$ 10.000 e gasta R$ 9.500.',
    alertaProva:
      'Se o enunciado descrever renda instável, a resposta certa sempre indica mais meses de reserva que o padrão de um assalariado.',
    tabela: {
      titulo: 'Dimensionamento por perfil de renda',
      colunas: ['Perfil de renda', 'Referência usual', 'Motivo'],
      linhas: [
        ['Estável (servidor, CLT)', '3 a 6 meses de despesa', 'Interrupção menos provável e mais curta'],
        ['Variável (autônomo, comissionado)', '6 a 12 meses de despesa', 'Interrupção mais provável e mais longa'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Qual característica é INDISPENSÁVEL no produto usado para reserva de emergência?',
      alternativas: [
        'Rentabilidade acima do CDI',
        'Liquidez diária e baixa volatilidade',
        'Isenção de imposto de renda',
        'Prazo mínimo de dois anos',
      ],
      correta: 1,
      explicacao:
        'A reserva precisa estar disponível e íntegra no dia em que for necessária. Rentabilidade é o critério menos importante.',
    },
    mapaMental: {
      id: 'mm-res',
      rotulo: 'Reserva de emergência',
      revisao: true,
      filhos: [
        {
          id: 'mm-res-tam',
          rotulo: 'Tamanho',
          detalhe: 'Meses de DESPESA',
          revisao: true,
          filhos: [
            { id: 'mm-res-est', rotulo: 'Renda estável', detalhe: '3 a 6 meses', revisao: true },
            { id: 'mm-res-var', rotulo: 'Renda variável', detalhe: '6 a 12 meses', revisao: true },
          ],
        },
        {
          id: 'mm-res-prod',
          rotulo: 'Produto',
          detalhe: 'Liquidez diária · baixa oscilação',
          revisao: true,
        },
        { id: 'mm-res-rent', rotulo: 'Rentabilidade', detalhe: 'Critério menos importante', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'É o dinheiro guardado para imprevisto. Tem de estar disponível na hora e não pode ter caído de valor justo quando você precisa.',
      exemplo:
        'Quem gasta R$ 5.000 por mês e tem emprego estável guarda entre R$ 15.000 e R$ 30.000 em algo com resgate no mesmo dia.',
      analogia:
        'É o estepe do carro. Ninguém escolhe estepe pela beleza — escolhe pelo fato de estar lá quando o pneu furar.',
      iniciante:
        'Antes de investir pensando no futuro, é preciso ter um dinheiro guardado para emergências, fácil de sacar.',
    },
    niveis: {
      entenda:
        'Reserva é dinheiro para imprevisto, medido em meses de despesa. Precisa de resgate rápido e valor estável — render mais não é o objetivo.',
      aprofunde:
        'O dimensionamento em meses de despesa e não em múltiplos de renda tem uma razão estatística: o que a reserva precisa cobrir é o CUSTO DE VIDA durante a interrupção, não a renda perdida. Quem tem alta taxa de poupança perde renda mas não perde a mesma proporção de gasto, e por isso precisa de reserva menor em termos absolutos — a folga do orçamento já é uma forma de reserva. A exigência maior para renda variável não decorre só da probabilidade de interrupção, mas de sua DURAÇÃO esperada e da correlação com o ciclo econômico: profissionais autônomos tendem a perder renda ao mesmo tempo, e por causa do mesmo evento macroeconômico, o que torna a interrupção mais longa. O ponto mais importante e menos intuitivo é a correlação entre o momento do saque e o preço dos ativos: como a reserva é acionada em choques de renda, e choques de renda se concentram em recessões, manter reserva em ativo cíclico produz saque forçado no ponto de menor preço. Não é aversão a risco — é reconhecer que o risco e a necessidade de liquidez são o mesmo evento.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 7,
  },

  {
    id: 'c-endividamento',
    microtemaId: 'm3.1',
    titulo: 'Endividamento e superendividamento',
    objetivo: 'Distinguir dívida produtiva de dívida cara e reconhecer a figura do superendividamento.',
    etiquetas: ['ESSENCIAL', 'ATENCAO'],
    resumo30s:
      'Dívida não é problema em si: o problema é o custo dela e o comprometimento de renda. Superendividamento é a impossibilidade manifesta de o consumidor de boa-fé pagar suas dívidas de consumo sem comprometer o mínimo existencial.',
    explicacao: {
      oQueE:
        'Endividamento é a existência de obrigações a pagar. Superendividamento é a situação em que essas obrigações, somadas, tornam impossível a subsistência digna do devedor de boa-fé.',
      porQueImporta:
        'Cliente endividado com dívida cara não deve investir — quitar é o investimento de melhor retorno disponível a ele. Reconhecer isso é o oposto de vender produto, e é o que a conduta exige.',
      paraQueServe:
        'Orientar a ordem correta das decisões financeiras e identificar quando o caso ultrapassa o aconselhamento e exige repactuação.',
      comoFunciona: [
        'DÍVIDA PRODUTIVA financia um ativo que gera renda ou valor duradouro — imóvel, formação, equipamento de trabalho. DÍVIDA DE CONSUMO financia gasto corrente.',
        'O que qualifica a dívida não é a finalidade sozinha, mas o CUSTO: financiamento imobiliário a taxa baixa é diferente de rotativo do cartão, mesmo que ambos tenham "boa" justificativa.',
        'COMPROMETIMENTO DE RENDA é a proporção da renda mensal destinada ao pagamento de dívidas. Quanto maior, menor a resiliência a choques.',
        'SUPERENDIVIDAMENTO, na lei de proteção do consumidor, é a impossibilidade manifesta de o consumidor pessoa natural, de BOA-FÉ, pagar a totalidade das dívidas de consumo sem comprometer o MÍNIMO EXISTENCIAL.',
        'Ficam FORA do regime dívidas contraídas com fraude ou má-fé e as decorrentes de contratos de produtos e serviços de luxo de alto valor.',
      ],
      exemploSimples:
        'Um cliente com R$ 20.000 no rotativo e R$ 20.000 aplicados em renda fixa. Manter os dois é perder a diferença entre a taxa que paga e a que recebe todos os meses — quitar é o melhor investimento disponível.',
      exemploAplicado:
        'Um cliente com sobra mensal e rotativo aberto pede sugestão de aplicação. Tecnicamente, ele não tem capacidade de aporte: tem uma dívida com retorno certo, e nenhum ativo compatível com o perfil dele oferece retorno esperado próximo daquele custo. Recomendar aplicação nesse cenário é atender à meta comercial, não ao cliente.',
      lembrarNaProva: [
        'Quitar dívida cara é investimento de retorno certo.',
        'Superendividamento exige BOA-FÉ do consumidor.',
        'O regime protege o MÍNIMO EXISTENCIAL.',
        'Dívida de luxo de alto valor e dívida com fraude ficam fora.',
      ],
      revisaoRapida: [
        'Dívida produtiva financia ativo; de consumo financia gasto.',
        'O custo importa mais que a finalidade declarada.',
        'Comprometimento de renda mede a fragilidade do orçamento.',
        'Superendividamento pressupõe consumidor de boa-fé.',
        'Fraude e produtos de luxo ficam fora do regime.',
      ],
    },
    exemplos: [
      {
        titulo: 'Quitar é investir',
        corpo:
          'Quitar uma dívida que custa 12% ao mês equivale a uma aplicação que rende 12% ao mês, líquida e sem risco. Nenhum ativo compatível com perfil conservador ou moderado chega perto disso. Por isso a ordem correta é sempre: reserva mínima, quitação da dívida cara, e só então investimento.',
      },
    ],
    conceitoChave:
      'Quitar dívida cara é o investimento de maior retorno certo disponível a uma pessoa física.',
    pontosChave: [
      'Produtiva × de consumo',
      'O custo pesa mais que a finalidade',
      'Comprometimento de renda',
      'Superendividamento exige boa-fé',
      'Mínimo existencial é protegido',
    ],
    erroComum:
      'Recomendar aplicação a cliente com rotativo aberto porque há sobra no orçamento. Aportar enquanto se carrega a dívida mais cara do varejo destrói valor de forma aritmética.',
    alertaProva:
      'O conceito legal de superendividamento tem três elementos: consumidor pessoa natural, boa-fé e comprometimento do mínimo existencial. Alternativa que suprima um deles está errada.',
    tabela: {
      titulo: 'Ordem correta das decisões',
      colunas: ['Passo', 'Ação'],
      linhas: [
        ['1', 'Construir reserva mínima de segurança'],
        ['2', 'Quitar dívidas de custo elevado'],
        ['3', 'Completar a reserva de emergência'],
        ['4', 'Investir conforme objetivo e perfil'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Um cliente tem sobra mensal no orçamento e saldo aberto no rotativo do cartão. A recomendação tecnicamente correta é:',
      alternativas: [
        'Aplicar a sobra em renda fixa de liquidez diária',
        'Direcionar a sobra à quitação da dívida antes de investir',
        'Dividir a sobra igualmente entre aplicação e pagamento',
        'Contratar um novo empréstimo para investir com alavancagem',
      ],
      correta: 1,
      explicacao:
        'Quitar a dívida mais cara é um investimento com retorno certo igual à taxa dela — retorno que nenhum ativo compatível com o perfil oferece.',
    },
    mapaMental: {
      id: 'mm-div',
      rotulo: 'Endividamento',
      revisao: true,
      filhos: [
        { id: 'mm-div-prod', rotulo: 'Produtiva × consumo', detalhe: 'O custo pesa mais', revisao: true },
        { id: 'mm-div-compr', rotulo: 'Comprometimento de renda', detalhe: 'Mede a fragilidade', revisao: true },
        {
          id: 'mm-div-super',
          rotulo: 'Superendividamento',
          detalhe: 'Boa-fé + mínimo existencial',
          revisao: true,
          filhos: [
            { id: 'mm-div-fora', rotulo: 'Fica de fora', detalhe: 'Fraude e luxo de alto valor', revisao: true },
          ],
        },
        { id: 'mm-div-ordem', rotulo: 'Quitar antes de investir', detalhe: 'Retorno certo', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'Dívida cara come mais do que qualquer aplicação rende. Por isso pagar a dívida é o melhor investimento de quem está devendo.',
      exemplo:
        'R$ 20.000 no rotativo e R$ 20.000 aplicados: todo mês você perde a diferença entre o juro que paga e o que recebe.',
      analogia:
        'É como encher um balde furado. Antes de colocar mais água, tapa-se o furo.',
      iniciante:
        'Se você deve no cartão e tem dinheiro guardado, quase sempre compensa pagar a dívida primeiro.',
    },
    niveis: {
      entenda:
        'Dívida cara custa mais do que qualquer aplicação segura rende. Quitar é o melhor investimento de quem está endividado.',
      aprofunde:
        'O regime legal do superendividamento representa uma mudança de paradigma no tratamento da dívida do consumidor: ele deixa de ser tratado apenas como inadimplente e passa a ter direito a repactuação global, com plano de pagamento que preserve o mínimo existencial. A exigência de BOA-FÉ é o filtro que impede o uso oportunista do instituto e é o elemento que a prova mais cobra — quem contraiu dívida sabendo que não poderia pagar, ou mediante fraude, fica fora. A exclusão de produtos e serviços de luxo de alto valor segue a mesma lógica de não converter proteção social em subsídio ao consumo supérfluo. Do ponto de vista de conduta profissional, o tema encosta diretamente no dever de adequação: oferecer crédito ou produto de investimento a quem está em situação de comprometimento severo de renda não é neutro. A prevenção do superendividamento passou a ser dever expresso do fornecedor de crédito, o que desloca parte da responsabilidade da decisão do consumidor para quem estruturou a oferta.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-objetivos-financeiros',
    microtemaId: 'm3.1',
    titulo: 'Objetivos financeiros e horizonte de tempo',
    objetivo: 'Traduzir objetivos do cliente em prazo, valor e tolerância a oscilação.',
    etiquetas: ['ESSENCIAL', 'ENTENDER'],
    resumo30s:
      'Objetivo sem prazo e sem valor não é objetivo — é desejo. O horizonte é o que determina a tolerância a oscilação: quanto mais perto a data, menos o dinheiro pode balançar.',
    explicacao: {
      oQueE:
        'Objetivo financeiro é uma meta com três elementos definidos: o que se quer, quanto custa e quando será necessário.',
      porQueImporta:
        'É o objetivo, e não o perfil declarado, que determina o produto adequado. O mesmo cliente pode ter dinheiro em renda variável para a aposentadoria e em pós-fixado para a entrada do apartamento no ano que vem.',
      paraQueServe:
        'Converter uma conversa vaga em parâmetros operacionais — prazo, valor-alvo e aporte necessário.',
      comoFunciona: [
        'Todo objetivo precisa de TRÊS elementos: descrição, valor estimado e data. Faltando um, não é possível recomendar produto.',
        'CURTO PRAZO (até dois anos): a prioridade é preservar o valor. Oscilação não é tolerável, porque não há tempo de recuperação.',
        'MÉDIO PRAZO (dois a cinco anos): admite alguma oscilação, com produto de prazo compatível com a data-alvo.',
        'LONGO PRAZO (acima de cinco anos): comporta mais risco, porque há tempo para atravessar ciclos de mercado.',
        'CASAR O VENCIMENTO com a data do objetivo elimina o risco de precisar vender antes do prazo e realizar marcação a mercado desfavorável.',
      ],
      exemploSimples:
        'Entrada de imóvel em 18 meses: horizonte curto, valor conhecido, data fixa. O produto adequado é pós-fixado de baixa oscilação — mesmo que o cliente se declare arrojado.',
      exemploAplicado:
        'Um cliente de perfil arrojado quer aplicar em ações o dinheiro da entrada do apartamento que vai comprar no ano que vem. O perfil dele permite risco; o objetivo, não. Quando perfil e objetivo divergem, quem manda é o objetivo — porque a data não se move e o mercado não pergunta se o cliente é arrojado.',
      lembrarNaProva: [
        'Objetivo exige descrição, valor e DATA.',
        'Quanto menor o prazo, menor a tolerância a oscilação.',
        'Casar vencimento com a data do objetivo evita venda antecipada.',
        'Havendo divergência, o objetivo prevalece sobre o perfil declarado.',
      ],
      revisaoRapida: [
        'Objetivo tem três elementos: o quê, quanto e quando.',
        'Curto prazo: preservar valor.',
        'Longo prazo: comporta mais risco.',
        'Casar vencimento com a data evita marcação desfavorável.',
        'Objetivo prevalece sobre perfil declarado.',
      ],
    },
    exemplos: [
      {
        titulo: 'O mesmo cliente, dois bolsos',
        corpo:
          'Aposentadoria daqui a 25 anos comporta renda variável. Entrada do apartamento em 12 meses não comporta. É o mesmo cliente, com o mesmo perfil — o que muda é o horizonte de cada objetivo, e é ele que decide.',
      },
    ],
    conceitoChave:
      'O horizonte de cada objetivo, e não o perfil geral do cliente, é o que define o risco tolerável naquele dinheiro.',
    pontosChave: [
      'O quê, quanto e quando',
      'Curto prazo: preservar',
      'Longo prazo: comporta risco',
      'Casar vencimento com a data',
      'Objetivo prevalece sobre perfil',
    ],
    erroComum:
      'Alocar toda a carteira pelo perfil declarado, ignorando os prazos dos objetivos. Perfil arrojado não torna prudente aplicar em ações um dinheiro que será usado em doze meses.',
    alertaProva:
      'Quando o enunciado trouxer perfil arrojado e objetivo de curto prazo, a resposta certa segue o OBJETIVO. É a divergência clássica do tema.',
    tabela: {
      titulo: 'Horizonte e tolerância',
      colunas: ['Prazo', 'Prioridade', 'Oscilação tolerável'],
      linhas: [
        ['Curto (até 2 anos)', 'Preservar o valor', 'Muito baixa'],
        ['Médio (2 a 5 anos)', 'Equilibrar', 'Moderada'],
        ['Longo (acima de 5 anos)', 'Crescer', 'Alta'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Um cliente de perfil arrojado precisa do dinheiro da entrada de um imóvel em 12 meses. A alocação adequada para esse recurso é:',
      alternativas: [
        'Renda variável, compatível com o perfil declarado',
        'Pós-fixado de baixa oscilação, compatível com o horizonte do objetivo',
        'Prefixado longo, para travar taxa mais alta',
        'Fundo multimercado alavancado, por diversificar',
      ],
      correta: 1,
      explicacao:
        'Perfil autoriza risco; objetivo de curto prazo não o comporta. Quando divergem, prevalece o objetivo — a data não se move.',
    },
    mapaMental: {
      id: 'mm-obj',
      rotulo: 'Objetivos',
      revisao: true,
      filhos: [
        {
          id: 'mm-obj-tres',
          rotulo: 'Três elementos',
          detalhe: 'O quê · quanto · quando',
          revisao: true,
        },
        {
          id: 'mm-obj-horiz',
          rotulo: 'Horizonte',
          revisao: true,
          filhos: [
            { id: 'mm-obj-curto', rotulo: 'Curto', detalhe: 'Preservar valor', revisao: true },
            { id: 'mm-obj-medio', rotulo: 'Médio', detalhe: 'Oscilação moderada' },
            { id: 'mm-obj-longo', rotulo: 'Longo', detalhe: 'Comporta risco', revisao: true },
          ],
        },
        {
          id: 'mm-obj-prev',
          rotulo: 'Objetivo > perfil',
          detalhe: 'A data não se move',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Todo objetivo precisa de valor e data. É a data que decide se o dinheiro pode ou não balançar até lá.',
      exemplo:
        'Aposentadoria em 25 anos aguenta bolsa. Entrada do apartamento em 12 meses não aguenta — e o perfil do cliente não muda isso.',
      analogia:
        'É como escolher roupa pela previsão do tempo do dia da viagem, não pelo gosto de quem viaja.',
      iniciante:
        'Dinheiro que você vai usar logo precisa ficar seguro. Dinheiro para daqui a muitos anos pode correr mais risco.',
    },
    niveis: {
      entenda:
        'Objetivo precisa de valor e data. Quanto mais perto a data, menos o dinheiro pode oscilar — independentemente do perfil do cliente.',
      aprofunde:
        'A prevalência do objetivo sobre o perfil declarado tem fundamento em risco de sequência: o retorno de um ativo volátil ao longo de vinte anos é razoavelmente previsível em média, mas o retorno em uma janela de doze meses não é — e o que importa para um objetivo com data fixa é justamente o resultado naquela janela específica, não a média de longo prazo. É o mesmo motivo pelo qual duration importa em renda fixa: o risco não está no ativo em abstrato, está na relação entre a volatilidade dele e o momento em que o dinheiro precisa sair. A técnica de casar vencimento com a data do objetivo — imunização, no vocabulário de gestão — elimina a exposição a marcação a mercado, porque o título carregado até o vencimento entrega a taxa contratada independentemente do que aconteça no caminho. Vale notar o efeito prático de separar a carteira por objetivo em vez de tratá-la como bloco único: além de melhorar a adequação técnica, isso reduz a probabilidade de resgate em pânico, porque o cliente enxerga cada oscilação no contexto do prazo daquele bolso específico.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 7,
  },

  {
    id: 'c-ciclo-vida',
    microtemaId: 'm3.1',
    titulo: 'Ciclo de vida financeiro',
    objetivo: 'Relacionar fase de vida, capacidade de assumir risco e composição da carteira.',
    etiquetas: ['ENTENDER', 'ATENCAO'],
    resumo30s:
      'Acumulação, consolidação e usufruto. A capacidade de assumir risco cai conforme o horizonte encurta e a renda do trabalho perde peso — mas capacidade não é o mesmo que tolerância.',
    explicacao: {
      oQueE:
        'Ciclo de vida financeiro é a sequência de fases pelas quais uma pessoa passa quanto à relação entre renda, poupança e patrimônio.',
      porQueImporta:
        'Explica por que a mesma carteira pode ser adequada aos 30 anos e inadequada aos 63 — e dá ao profissional um argumento estrutural, não opinativo, para propor rebalanceamento.',
      paraQueServe:
        'Antecipar mudanças de necessidade e ajustar a carteira antes que a mudança se imponha.',
      comoFunciona: [
        'ACUMULAÇÃO: renda do trabalho crescente, patrimônio pequeno, horizonte longo. É a fase de maior capacidade de assumir risco, porque há tempo e há renda futura para repor perdas.',
        'CONSOLIDAÇÃO: renda no ápice, patrimônio relevante, horizonte médio. A prioridade migra de crescer para preservar o que foi acumulado.',
        'USUFRUTO (ou desacumulação): a renda do trabalho cessa ou cai muito, e o patrimônio passa a gerar a renda. A prioridade é previsibilidade de fluxo.',
        'CAPACIDADE de assumir risco é objetiva: depende de horizonte, patrimônio e renda futura. TOLERÂNCIA é subjetiva: depende do desconforto psicológico com a oscilação.',
        'As duas podem divergir. Um jovem com alta capacidade e baixa tolerância exige carteira menos arriscada do que o horizonte permitiria — e educação financeira, não pressão.',
      ],
      exemploSimples:
        'Aos 30 anos, uma queda de 30% na carteira é recuperável por tempo e por aportes futuros. Aos 68, com a carteira financiando o custo de vida, a mesma queda obriga a resgatar na baixa e reduz o patrimônio de forma permanente.',
      exemploAplicado:
        'Um cliente às vésperas da aposentadoria mantém a mesma carteira agressiva dos 40 anos e resiste a mudar porque "sempre deu certo". O argumento técnico não é sobre retorno esperado: é sobre o risco de sequência — a ordem em que os retornos acontecem passa a importar tanto quanto a média, porque ele começará a sacar.',
      lembrarNaProva: [
        'Acumulação → consolidação → usufruto.',
        'Capacidade de risco cai com o encurtamento do horizonte.',
        'CAPACIDADE é objetiva; TOLERÂNCIA é subjetiva.',
        'Quando divergem, prevalece a menor das duas.',
      ],
      revisaoRapida: [
        'Três fases: acumulação, consolidação e usufruto.',
        'Horizonte longo permite mais risco.',
        'Na desacumulação a prioridade é previsibilidade de fluxo.',
        'Capacidade é objetiva; tolerância é subjetiva.',
        'Prevalece sempre a mais restritiva das duas.',
      ],
    },
    exemplos: [
      {
        titulo: 'Risco de sequência',
        corpo:
          'Duas carteiras com o mesmo retorno médio de 8% ao ano ao longo de 20 anos terminam com patrimônios muito diferentes se uma delas sofrer as quedas no início da fase de saques. Quem está acumulando é indiferente à ordem dos retornos; quem está sacando, não.',
      },
    ],
    conceitoChave:
      'Na acumulação a ordem dos retornos não importa; na desacumulação, ela passa a importar tanto quanto a média.',
    pontosChave: [
      'Acumulação, consolidação, usufruto',
      'Horizonte encurta → risco cai',
      'Capacidade: objetiva',
      'Tolerância: subjetiva',
      'Prevalece a mais restritiva',
    ],
    erroComum:
      'Confundir capacidade com tolerância. Um cliente jovem com alto patrimônio tem CAPACIDADE de assumir risco — o que não autoriza expô-lo além do que ele suporta emocionalmente.',
    alertaProva:
      'Se o enunciado trouxer capacidade alta e tolerância baixa, a resposta certa é a alocação mais conservadora. A mais restritiva das duas sempre prevalece.',
    tabela: {
      titulo: 'As três fases',
      colunas: ['Fase', 'Renda do trabalho', 'Prioridade'],
      linhas: [
        ['Acumulação', 'Crescente', 'Crescer patrimônio'],
        ['Consolidação', 'No ápice', 'Preservar o acumulado'],
        ['Usufruto', 'Cessou ou caiu', 'Previsibilidade de fluxo'],
      ],
    },
    perguntaRapida: {
      enunciado: 'A diferença entre CAPACIDADE e TOLERÂNCIA a risco é que a capacidade:',
      alternativas: [
        'É subjetiva e depende do desconforto do cliente com a oscilação',
        'É objetiva e depende de horizonte, patrimônio e renda futura',
        'É definida exclusivamente pela idade do cliente',
        'É a mesma coisa que tolerância, com outro nome',
      ],
      correta: 1,
      explicacao:
        'Capacidade é objetiva e mensurável; tolerância é psicológica. Quando divergem, prevalece a mais restritiva.',
    },
    mapaMental: {
      id: 'mm-ciclo',
      rotulo: 'Ciclo de vida',
      revisao: true,
      filhos: [
        { id: 'mm-ciclo-acum', rotulo: 'Acumulação', detalhe: 'Horizonte longo · mais risco', revisao: true },
        { id: 'mm-ciclo-cons', rotulo: 'Consolidação', detalhe: 'Preservar o acumulado', revisao: true },
        {
          id: 'mm-ciclo-usu',
          rotulo: 'Usufruto',
          detalhe: 'Patrimônio gera a renda',
          revisao: true,
          filhos: [
            { id: 'mm-ciclo-seq', rotulo: 'Risco de sequência', detalhe: 'A ordem dos retornos passa a importar', revisao: true },
          ],
        },
        {
          id: 'mm-ciclo-cap',
          rotulo: 'Capacidade × tolerância',
          detalhe: 'Objetiva × subjetiva · vale a menor',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Enquanto você está juntando dinheiro, dá para arriscar mais. Quando começa a viver dele, oscilação vira problema de verdade.',
      exemplo:
        'Uma queda de 30% aos 30 anos se recupera com tempo e aportes. Aos 68, com saques mensais, ela reduz o patrimônio para sempre.',
      analogia:
        'É como economizar água: enquanto chove, o nível do reservatório oscilar não importa. Na seca, cada litro conta.',
      iniciante:
        'Quanto mais perto da aposentadoria, menos faz sentido correr risco com o dinheiro que vai sustentar você.',
    },
    niveis: {
      entenda:
        'A vida financeira tem três fases: juntar, consolidar e usar. Quanto mais perto de usar, menos o dinheiro pode oscilar.',
      aprofunde:
        'O risco de sequência é a razão técnica por trás da mudança de carteira na aproximação da aposentadoria, e ele costuma ser mal explicado. Durante a acumulação, aportes regulares em um ativo volátil produzem um efeito favorável — comprar mais cotas quando o preço cai —, e por isso a ordem dos retornos é indiferente ao resultado final. Na desacumulação, saques regulares invertem a mecânica: uma queda no início da fase de saques obriga a vender mais cotas pelo mesmo valor de resgate, reduzindo permanentemente a base que geraria retorno na recuperação. Duas trajetórias com retorno médio idêntico podem levar uma carteira à exaustão e outra à preservação, dependendo apenas de quando as quedas ocorreram. Daí decorrem as estratégias de mitigação usadas na prática: manter alguns anos de saques em ativos de baixa volatilidade, reduzir gradualmente a exposição a risco nos anos que antecedem a transição, e flexibilizar o valor do saque em anos ruins. Nenhuma delas melhora o retorno esperado — todas reduzem a dependência da sorte na ordem em que ele aparece.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-planejamento-aposentadoria',
    microtemaId: 'm3.1',
    titulo: 'Planejamento da aposentadoria',
    objetivo: 'Estimar a necessidade de renda futura e o esforço de acumulação necessário.',
    etiquetas: ['ESSENCIAL', 'ENTENDER'],
    resumo30s:
      'O ponto de partida é a renda mensal desejada, não o valor acumulado. Dela se deriva o patrimônio necessário; dele, o aporte mensal. Tempo é a variável mais poderosa — e a única que não se recupera.',
    explicacao: {
      oQueE:
        'Planejamento de aposentadoria é o processo de estimar a renda necessária após a interrupção do trabalho e o patrimônio capaz de sustentá-la.',
      porQueImporta:
        'É o objetivo de maior valor e maior prazo da vida financeira da maioria das pessoas, e o único em que adiar a decisão tem custo exponencial.',
      paraQueServe:
        'Transformar uma preocupação difusa em aporte mensal definido e acompanhável.',
      comoFunciona: [
        'PASSO 1: estimar a RENDA MENSAL desejada na aposentadoria, em valores de hoje. É daqui que tudo deriva.',
        'PASSO 2: descontar as fontes já existentes — previdência oficial, previdência do empregador, aluguéis. A diferença é a lacuna a cobrir.',
        'PASSO 3: estimar o PATRIMÔNIO necessário para gerar essa lacuna de renda de forma sustentável, considerando a expectativa de anos de usufruto.',
        'PASSO 4: calcular o APORTE MENSAL que leva do patrimônio atual ao necessário, no prazo disponível, a uma taxa real conservadora.',
        'TEMPO é a variável de maior efeito, porque a capitalização é exponencial. Começar dez anos antes reduz o aporte necessário muito mais do que proporcionalmente.',
      ],
      exemploSimples:
        'Renda desejada de R$ 8.000 por mês, com R$ 3.000 já cobertos pela previdência oficial. A lacuna é R$ 5.000 mensais — e é sobre ela que se dimensiona o patrimônio necessário.',
      exemploAplicado:
        'Um cliente de 45 anos diz que quer "juntar R$ 1 milhão". A pergunta técnica é outra: quanto ele quer receber por mês, por quantos anos e a partir de quando. R$ 1 milhão pode ser muito ou pouco dependendo dessas três respostas — e sem elas não há como dizer se o aporte atual é suficiente.',
      lembrarNaProva: [
        'Começa pela RENDA desejada, não pelo montante.',
        'Descontar as fontes existentes antes de dimensionar.',
        'Usar taxa REAL, já descontada a inflação.',
        'Tempo tem efeito exponencial sobre o aporte necessário.',
      ],
      revisaoRapida: [
        'Ponto de partida é a renda mensal desejada.',
        'Descontar previdência oficial e outras fontes.',
        'Dimensionar o patrimônio para cobrir a lacuna.',
        'Calcular o aporte com taxa real conservadora.',
        'Adiar tem custo exponencial, não linear.',
      ],
    },
    exemplos: [
      {
        titulo: 'O custo de adiar',
        corpo:
          'Quem começa aos 30 acumula por 35 anos; quem começa aos 40 acumula por 25. Não são 29% menos tempo: como a capitalização é exponencial, o aporte mensal necessário para chegar ao mesmo patrimônio mais que dobra. Tempo é a única variável do plano que não se recupera.',
      },
    ],
    conceitoChave:
      'O plano começa pela renda que se quer receber, não pelo valor que se quer juntar.',
    pontosChave: [
      'Renda desejada primeiro',
      'Descontar fontes existentes',
      'Dimensionar o patrimônio',
      'Aporte com taxa real',
      'Tempo tem efeito exponencial',
    ],
    erroComum:
      'Definir a meta como um valor redondo de patrimônio. Sem saber a renda pretendida e por quantos anos, o número é arbitrário e não permite avaliar se o aporte atual é suficiente.',
    alertaProva:
      'Projeção de aposentadoria usa taxa REAL. Usar taxa nominal superestima o resultado e produz um plano que não se sustenta.',
    tabela: {
      titulo: 'Os quatro passos',
      colunas: ['Passo', 'Pergunta que responde'],
      linhas: [
        ['1', 'Quanto quero receber por mês?'],
        ['2', 'Quanto já está coberto por outras fontes?'],
        ['3', 'Que patrimônio sustenta a lacuna?'],
        ['4', 'Que aporte mensal me leva até lá?'],
      ],
    },
    perguntaRapida: {
      enunciado: 'O ponto de partida correto do planejamento de aposentadoria é:',
      alternativas: [
        'Definir um valor redondo de patrimônio a acumular',
        'Estimar a renda mensal desejada e descontar as fontes já existentes',
        'Escolher o produto de previdência com a menor taxa de administração',
        'Determinar o aporte máximo que cabe no orçamento atual',
      ],
      correta: 1,
      explicacao:
        'Tudo deriva da renda pretendida. Sem ela, o valor de patrimônio é arbitrário e não permite verificar se o aporte é suficiente.',
    },
    mapaMental: {
      id: 'mm-apo',
      rotulo: 'Aposentadoria',
      revisao: true,
      filhos: [
        { id: 'mm-apo-renda', rotulo: '1. Renda desejada', detalhe: 'Ponto de partida', revisao: true },
        { id: 'mm-apo-fontes', rotulo: '2. Fontes existentes', detalhe: 'Previdência oficial e outras', revisao: true },
        { id: 'mm-apo-patr', rotulo: '3. Patrimônio necessário', detalhe: 'Para cobrir a lacuna', revisao: true },
        { id: 'mm-apo-aporte', rotulo: '4. Aporte mensal', detalhe: 'Com taxa REAL', revisao: true },
        { id: 'mm-apo-tempo', rotulo: 'Tempo', detalhe: 'Efeito exponencial · não se recupera', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'Comece perguntando quanto você quer receber por mês depois de parar de trabalhar. O resto do plano sai daí.',
      exemplo:
        'Quer R$ 8.000 por mês e já tem R$ 3.000 da previdência oficial? A conta é sobre os R$ 5.000 que faltam.',
      analogia:
        'É como planejar uma viagem pelo destino, não pela quantidade de combustível. Primeiro se decide onde chegar.',
      iniciante:
        'Aposentadoria se planeja começando pela pergunta: quanto eu quero receber por mês quando parar de trabalhar?',
    },
    niveis: {
      entenda:
        'Planejar aposentadoria começa pela renda mensal que se quer ter. Dela se calcula o patrimônio necessário e o aporte mensal.',
      aprofunde:
        'Toda projeção de aposentadoria depende de três hipóteses que costumam ser tratadas como detalhe e determinam o resultado: a taxa REAL de retorno, a expectativa de anos de usufruto e a taxa de retirada sustentável. Usar taxa nominal é o erro mais grave, porque projeta um patrimônio nominalmente grande e realmente insuficiente — quarenta anos de inflação corroem a maior parte do poder de compra de um número não deflacionado. A expectativa de anos de usufruto vem crescendo com a longevidade, o que significa que planos calibrados por parâmetros de gerações anteriores subestimam sistematicamente a necessidade. E a taxa de retirada — quanto se pode sacar por ano sem exaurir o patrimônio — não é o retorno esperado da carteira: precisa ser menor, justamente por causa do risco de sequência, e é aqui que a fase de desacumulação se conecta ao ciclo de vida. Do ponto de vista prático, a variável de maior alavancagem continua sendo o TEMPO: como a capitalização é exponencial, cada década de antecipação reduz o aporte necessário de forma mais que proporcional — e é a única variável do plano que, uma vez perdida, não se recupera com esforço posterior.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },
]
