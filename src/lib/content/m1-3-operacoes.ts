import type { Conceito } from '../types'

/**
 * MICROTEMA 1.3 — Operações do mercado financeiro.
 *
 * É o único microtema inteiramente quantitativo do programa. Toda conta aqui
 * foi conferida numericamente antes de virar texto: os valores dos exemplos
 * são resultado de cálculo, não arredondamento de cabeça.
 *
 * Convenção de notação usada em toda a matéria:
 *   VP  valor presente      VF  valor futuro
 *   i   taxa por período    n   número de períodos
 *
 * A prova não fornece calculadora financeira. O que ela cobra é a LÓGICA —
 * qual grandeza sobe quando a outra sobe — e contas que fecham com números
 * redondos. Por isso cada aula fecha com a relação de causa e efeito, não
 * com a fórmula decorada.
 */

export const CONCEITOS_1_3: Conceito[] = [
  {
    id: 'c-juros-compostos',
    microtemaId: 'm1.3',
    titulo: 'Capitalização simples e composta',
    objetivo: 'Calcular valor futuro e valor presente e explicar por que o regime composto cresce mais rápido.',
    etiquetas: ['ESSENCIAL', 'ENTENDER'],
    resumo30s:
      'No regime simples, o juro incide sempre sobre o valor inicial. No composto, incide sobre o saldo — juro sobre juro. VF = VP × (1 + i)^n. Toda a matemática financeira do mercado usa o regime composto.',
    explicacao: {
      oQueE:
        'Capitalização é o processo de somar juros a um capital ao longo do tempo. O que separa os dois regimes é a base de cálculo do juro de cada período.',
      porQueImporta:
        'É a fundação de tudo que vem depois: preço de título, parcela de financiamento, rentabilidade de fundo e valor presente de um fluxo. Errar o regime aqui derruba todas as contas seguintes.',
      paraQueServe:
        'Responder às duas perguntas do mercado: quanto isto vale hoje, e quanto valerá no vencimento.',
      comoFunciona: [
        'SIMPLES: o juro de cada período incide sobre o capital INICIAL. VF = VP × (1 + i × n). O crescimento é uma reta.',
        'COMPOSTO: o juro de cada período incide sobre o SALDO do período anterior. VF = VP × (1 + i)^n. O crescimento é uma curva.',
        'Valor presente é a mesma fórmula ao contrário: VP = VF ÷ (1 + i)^n. Trazer para hoje é dividir; levar para o futuro é multiplicar.',
        'Em um único período (n = 1) os dois regimes dão exatamente o mesmo resultado. A diferença só nasce a partir do segundo período.',
        'Para n maior que 1, o composto sempre rende mais. Para n menor que 1 — frações de período — o simples rende mais, e é por isso que ele ainda aparece em operações de curtíssimo prazo.',
      ],
      exemploSimples:
        'R$ 1.000 a 10% ao ano por 3 anos. No regime simples: R$ 100 de juro por ano, três vezes, resgatando R$ 1.300. No composto: R$ 1.000 × 1,10³ = R$ 1.331. A diferença de R$ 31 é o juro que rendeu sobre juro.',
      exemploAplicado:
        'Um cliente compara duas aplicações de 24 meses que anunciam "1% ao mês". A primeira capitaliza mensalmente e devolve R$ 1.000 × 1,01²⁴ = R$ 1.269,73. A segunda paga juro simples e devolve R$ 1.240. O anúncio é idêntico; o resgate, não. Perguntar o regime de capitalização é parte da recomendação.',
      lembrarNaProva: [
        'VF = VP × (1 + i)^n é a fórmula do regime composto — a que o mercado usa.',
        'Trazer a valor presente é DIVIDIR por (1 + i)^n.',
        'Com n = 1 os dois regimes empatam; acima disso, o composto sempre ganha.',
        'A taxa e o número de períodos precisam estar na MESMA unidade de tempo.',
      ],
      revisaoRapida: [
        'Simples: juro sobre o capital inicial. Crescimento em linha reta.',
        'Composto: juro sobre o saldo. Crescimento em curva.',
        'VF = VP × (1 + i)^n; VP = VF ÷ (1 + i)^n.',
        'Em um período só, os dois regimes dão o mesmo valor.',
        'Taxa e prazo precisam estar na mesma unidade.',
      ],
    },
    exemplos: [
      {
        titulo: 'O efeito do prazo',
        corpo:
          'R$ 1.000 a 10% ao ano. Em 3 anos o composto entrega R$ 31 a mais que o simples. Em 10 anos, R$ 2.593,74 contra R$ 2.000 — quase R$ 600 de diferença. O juro composto não é mais agressivo no começo; ele é mais agressivo no tempo.',
      },
    ],
    conceitoChave:
      'No regime composto o juro passa a fazer parte do capital, e é por isso que o crescimento acelera com o prazo.',
    pontosChave: [
      'Simples: base fixa no capital inicial',
      'Composto: base é o saldo do período anterior',
      'VF = VP × (1 + i)^n',
      'VP = VF ÷ (1 + i)^n',
      'Taxa e prazo na mesma unidade',
    ],
    erroComum:
      'Somar prazo e taxa sem conferir a unidade — usar 12% ao ano com n = 12 meses. Ou o regime composto exige a taxa mensal, ou o n precisa virar 1 ano.',
    alertaProva:
      'A banca gosta de dar a taxa em uma unidade e o prazo em outra. Converta antes de fazer qualquer conta.',
    tabela: {
      titulo: 'R$ 1.000 a 10% ao ano',
      colunas: ['Prazo', 'Juros simples', 'Juros compostos', 'Diferença'],
      linhas: [
        ['1 ano', 'R$ 1.100,00', 'R$ 1.100,00', 'R$ 0,00'],
        ['3 anos', 'R$ 1.300,00', 'R$ 1.331,00', 'R$ 31,00'],
        ['10 anos', 'R$ 2.000,00', 'R$ 2.593,74', 'R$ 593,74'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Uma aplicação de R$ 1.000 rende 10% ao ano no regime composto. Qual o valor de resgate após 3 anos?',
      alternativas: ['R$ 1.300,00', 'R$ 1.331,00', 'R$ 1.310,00', 'R$ 1.330,00'],
      correta: 1,
      explicacao:
        '1.000 × 1,10³ = 1.000 × 1,331 = R$ 1.331. Os R$ 1.300 seriam o resultado no regime simples.',
    },
    mapaMental: {
      id: 'mm-cap',
      rotulo: 'Capitalização',
      revisao: true,
      filhos: [
        {
          id: 'mm-cap-simples',
          rotulo: 'Simples',
          detalhe: 'VF = VP × (1 + i × n) · reta',
          revisao: true,
        },
        {
          id: 'mm-cap-comp',
          rotulo: 'Composta',
          detalhe: 'VF = VP × (1 + i)ⁿ · curva',
          revisao: true,
          filhos: [
            { id: 'mm-cap-vp', rotulo: 'Valor presente', detalhe: 'VP = VF ÷ (1 + i)ⁿ', revisao: true },
            { id: 'mm-cap-vf', rotulo: 'Valor futuro', detalhe: 'Multiplica pelo fator' },
          ],
        },
        {
          id: 'mm-cap-unid',
          rotulo: 'Mesma unidade',
          detalhe: 'Taxa e prazo no mesmo período',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Juro simples rende sempre sobre o valor que você depositou. Juro composto rende também sobre o juro que já caiu na conta.',
      exemplo:
        'R$ 1.000 a 10% ao ano: no simples são R$ 100 por ano, sempre. No composto o segundo ano rende R$ 110, porque agora o saldo é R$ 1.100.',
      analogia:
        'Juro simples é uma escada de degraus iguais. Juro composto é uma rampa que fica mais inclinada conforme você sobe.',
      iniciante:
        'Dinheiro aplicado cresce com o tempo. A pergunta é se o crescimento é calculado sempre sobre o valor original ou sobre o total que já se acumulou.',
    },
    niveis: {
      entenda:
        'Juro composto é juro que rende juro. É essa recursão que faz o dinheiro crescer em curva e não em linha reta.',
      aprofunde:
        'O fator (1 + i)^n é a forma discreta de uma exponencial, e é isso que dá ao regime composto a propriedade que o mercado explora: a capitalização é multiplicativa, então taxas de períodos consecutivos se COMPÕEM por multiplicação, nunca por soma. Render 10% e depois 10% não dá 20%, dá 21% — porque 1,10 × 1,10 = 1,21. A consequência prática aparece em toda a matéria: é por isso que a taxa equivalente mensal de 12% ao ano não é 1%, que uma queda de 50% exige uma alta de 100% para recuperar, e que o valor presente de um fluxo distante encolhe muito mais rápido do que a intuição sugere. No limite de períodos infinitesimais o fator vira e^(i×n), a capitalização contínua, usada na modelagem de derivativos — mas na prova a versão discreta basta.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-taxas-equivalentes',
    microtemaId: 'm1.3',
    titulo: 'Taxa proporcional e taxa equivalente',
    objetivo: 'Converter taxas entre períodos e distinguir taxa nominal de taxa efetiva.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'Proporcional divide (regime simples): 12% a.a. ÷ 12 = 1% a.m. Equivalente extrai raiz (regime composto): (1,12)^(1/12) − 1 = 0,9489% a.m. Taxa nominal é a proporcional anunciada; efetiva é a que você recebe de fato.',
    explicacao: {
      oQueE:
        'Converter uma taxa de um período para outro. Há duas formas de fazer isso, e elas não dão o mesmo número — a diferença é exatamente o regime de capitalização.',
      porQueImporta:
        'É a pegadinha mais frequente da matemática financeira na prova, e a fonte de reclamação mais comum do cliente: a taxa anunciada não é a taxa que ele viu no extrato.',
      paraQueServe:
        'Comparar produtos com prazos diferentes na mesma régua, e entender por que "2% ao mês" não é "24% ao ano".',
      comoFunciona: [
        'TAXA PROPORCIONAL: divide ou multiplica direto. 12% ao ano ÷ 12 = 1% ao mês. Pertence ao regime SIMPLES.',
        'TAXA EQUIVALENTE: usa raiz e potência. Mensal equivalente a 12% ao ano = (1 + 0,12)^(1/12) − 1 = 0,9489% ao mês. Pertence ao regime COMPOSTO.',
        'Duas taxas são equivalentes quando, aplicadas ao mesmo capital pelo mesmo prazo total, produzem o mesmo montante.',
        'TAXA NOMINAL é a taxa anunciada em um período mas capitalizada em outro — "12% ao ano com capitalização mensal". Ela sozinha não diz quanto rende.',
        'TAXA EFETIVA é a que de fato incide. Da nominal de 12% a.a. capitalizada mensalmente sai 1% a.m. proporcional, que capitalizada 12 vezes dá 1,01¹² − 1 = 12,68% ao ano efetivos.',
      ],
      exemploSimples:
        'Um CDB anuncia 12% ao ano com capitalização mensal. A taxa mensal aplicada é 1% (proporcional). Ao fim de 12 meses o rendimento efetivo é 1,01¹² − 1 = 12,68% — e não os 12% do anúncio.',
      exemploAplicado:
        'O cliente compara um fundo que informa 0,95% ao mês com um CDB de 12% ao ano. Parecem próximos, mas 0,95% ao mês equivale a 1,0095¹² − 1 = 12,01% ao ano: praticamente empatam. Se ele tivesse multiplicado 0,95 × 12 = 11,4% teria concluído, erradamente, que o CDB era melhor.',
      lembrarNaProva: [
        'Proporcional divide; equivalente extrai raiz.',
        'Nominal é anúncio; efetiva é o que rende.',
        'Taxa nominal sempre vem acompanhada da frase "com capitalização em...".',
        'Para prazos maiores que o período da taxa, a efetiva é sempre MAIOR que a nominal.',
      ],
      revisaoRapida: [
        'Proporcional: divide direto. Regime simples.',
        'Equivalente: raiz de índice n. Regime composto.',
        '12% a.a. proporcional ao mês = 1%; equivalente = 0,9489%.',
        'Nominal 12% a.a. capitalizada ao mês vira 12,68% efetivos.',
        'Efetiva > nominal sempre que houver mais de uma capitalização.',
      ],
    },
    exemplos: [
      {
        titulo: 'Por que 2% ao mês não é 24% ao ano',
        corpo:
          '1,02¹² − 1 = 26,82% ao ano. Os 24% seriam a taxa proporcional, que ignora a capitalização dos onze meses intermediários. Quanto maior a taxa, maior a distância entre o número anunciado e o efetivo.',
      },
    ],
    conceitoChave:
      'Taxas só podem ser comparadas depois de convertidas para o mesmo período pelo mesmo regime.',
    pontosChave: [
      'Proporcional: divisão (regime simples)',
      'Equivalente: raiz (regime composto)',
      'Nominal: taxa anunciada',
      'Efetiva: taxa que incide de fato',
      '12% a.a. cap. mensal = 12,68% efetivos',
    ],
    erroComum:
      'Multiplicar a taxa mensal por 12 para achar a anual. Isso dá a taxa proporcional, que subestima o rendimento em qualquer aplicação com capitalização composta.',
    alertaProva:
      'Quando o enunciado disser "taxa nominal", ele está avisando que a resposta certa exige converter para efetiva.',
    tabela: {
      titulo: 'Conversões de 12% ao ano',
      colunas: ['Conversão', 'Regime', 'Resultado mensal'],
      linhas: [
        ['Proporcional (÷ 12)', 'Simples', '1,0000% a.m.'],
        ['Equivalente (raiz 12)', 'Composto', '0,9489% a.m.'],
        ['Nominal cap. mensal → efetiva anual', 'Composto', '12,68% a.a.'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Uma taxa nominal de 12% ao ano com capitalização mensal corresponde a qual taxa efetiva anual?',
      alternativas: ['12,00%', '12,68%', '11,39%', '12,36%'],
      correta: 1,
      explicacao:
        'A nominal de 12% a.a. gera 1% a.m. proporcional. Capitalizando doze vezes: 1,01¹² − 1 = 12,68% ao ano.',
    },
    mapaMental: {
      id: 'mm-taxas',
      rotulo: 'Conversão de taxas',
      revisao: true,
      filhos: [
        {
          id: 'mm-taxas-prop',
          rotulo: 'Proporcional',
          detalhe: 'Divide · regime simples',
          revisao: true,
        },
        {
          id: 'mm-taxas-equiv',
          rotulo: 'Equivalente',
          detalhe: 'Raiz · regime composto',
          revisao: true,
        },
        {
          id: 'mm-taxas-nom',
          rotulo: 'Nominal × efetiva',
          detalhe: 'Anúncio × o que rende',
          revisao: true,
          filhos: [
            { id: 'mm-taxas-nom-cap', rotulo: '"com capitalização em..."', detalhe: 'A pista de que é nominal' },
          ],
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Dividir a taxa pelo número de meses dá um número; extrair a raiz dá outro, menor. O mercado usa a raiz.',
      exemplo:
        '12% ao ano dividido por 12 dá 1% ao mês. Mas 1% ao mês capitalizado doze vezes dá 12,68%, não 12%. A taxa mensal que realmente equivale a 12% ao ano é 0,9489%.',
      analogia:
        'É como converter velocidade média em distância: se o carro acelera, a média simples engana. A raiz é o jeito de respeitar a aceleração.',
      iniciante:
        'A mesma taxa pode ser escrita por mês ou por ano. Trocar de unidade não é só dividir, porque o juro do primeiro mês passa a render nos meses seguintes.',
    },
    niveis: {
      entenda:
        'Converter taxa entre períodos não é dividir. Como o juro rende sobre juro, a conversão certa usa raiz.',
      aprofunde:
        'A equivalência é definida pela igualdade dos montantes: duas taxas i₁ e i₂, em períodos n₁ e n₂ que cobrem o mesmo intervalo, são equivalentes quando (1 + i₁)^n₁ = (1 + i₂)^n₂. Daí sai a fórmula da raiz. A taxa nominal, por outro lado, é uma convenção de contrato, não uma grandeza financeira — ela só ganha significado quando acompanhada da frequência de capitalização, e por isso jamais deve ser usada para comparar produtos. Conforme a frequência de capitalização aumenta, a efetiva converge para o limite e^i − 1: com 12% nominais, capitalizar mensalmente dá 12,68%, diariamente dá 12,747% e continuamente dá 12,750%. O ganho marginal de capitalizar mais vezes é decrescente, o que explica por que o mercado brasileiro padronizou em 252 dias úteis e parou por aí.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-taxa-real',
    microtemaId: 'm1.3',
    titulo: 'Taxa nominal, taxa real e a fórmula de Fisher',
    objetivo: 'Calcular o ganho real de uma aplicação descontando a inflação do período.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'Ganho real não é rendimento menos inflação. É (1 + i) ÷ (1 + π) − 1. Render 10% com inflação de 6% dá 3,77% real, não 4%. E a taxa real pode ser negativa.',
    explicacao: {
      oQueE:
        'Taxa real é quanto o poder de compra do dinheiro cresceu de fato, depois de descontada a inflação do mesmo período.',
      porQueImporta:
        'É o número que responde à única pergunta que interessa ao cliente: consigo comprar mais coisas do que conseguia antes? Um rendimento nominal alto com inflação maior ainda é empobrecimento.',
      paraQueServe:
        'Comparar aplicações entre períodos com inflações diferentes e justificar a recomendação de títulos atrelados a índices de preços.',
      comoFunciona: [
        'A fórmula de Fisher é uma divisão, não uma subtração: (1 + taxa real) = (1 + taxa nominal) ÷ (1 + inflação).',
        'Isolando: taxa real = [(1 + i) ÷ (1 + π)] − 1.',
        'A subtração simples (i − π) é uma aproximação. Ela só chega perto quando as taxas são pequenas; erra mais conforme a inflação sobe.',
        'A aproximação SEMPRE superestima o ganho real. Nunca subestima.',
        'A taxa real pode ser negativa: se a aplicação rendeu 5% e a inflação foi 8%, o poder de compra caiu.',
      ],
      exemploSimples:
        'Aplicação rendeu 10% no ano; a inflação foi 6%. Pela subtração daria 4%. Pela fórmula correta: 1,10 ÷ 1,06 = 1,0377, ou seja, 3,77% de ganho real. A subtração exagerou em 0,23 ponto.',
      exemploAplicado:
        'Um cliente diz que a poupança "rendeu bem" porque ele viu 7% no extrato do ano. Com IPCA de 8% no mesmo período, a taxa real foi 1,07 ÷ 1,08 − 1 = −0,93%. Ele tem mais reais na conta e menos poder de compra — e é essa a conversa que abre a recomendação de um título IPCA+.',
      lembrarNaProva: [
        'Fisher é DIVISÃO: (1 + i) ÷ (1 + π) − 1.',
        'A subtração i − π é aproximação e sempre exagera o ganho real.',
        'Taxa real negativa existe e significa perda de poder de compra.',
        'Só o título atrelado a índice de preços garante taxa real contratada.',
      ],
      revisaoRapida: [
        'Taxa real = (1 + i) ÷ (1 + π) − 1.',
        'Subtrair inflação do rendimento é atalho, e o atalho superestima.',
        '10% de rendimento com 6% de inflação = 3,77% real.',
        'Rendimento abaixo da inflação produz taxa real negativa.',
        'IPCA+ é o produto que contrata a taxa real diretamente.',
      ],
    },
    exemplos: [
      {
        titulo: 'Quando a aproximação quebra',
        corpo:
          'Com i = 10% e π = 6%, a subtração erra 0,23 ponto. Com i = 100% e π = 80%, a subtração diz 20% e a fórmula diz 11,1% — um erro de quase 9 pontos. Quanto maior a inflação, mais perigoso o atalho.',
      },
    ],
    conceitoChave:
      'Ganho real é uma razão entre poder de compra, e razão se calcula dividindo — não subtraindo.',
    pontosChave: [
      'Fisher: (1 + i) ÷ (1 + π) − 1',
      'i − π é aproximação superestimada',
      'Taxa real pode ser negativa',
      'IPCA+ contrata a taxa real',
      'A inflação usada tem de ser a do mesmo período',
    ],
    erroComum:
      'Subtrair a inflação do rendimento e chamar o resultado de ganho real. O atalho funciona para taxas baixas e engana justamente quando a inflação é o problema.',
    alertaProva:
      'Se as alternativas trazem tanto o resultado da subtração quanto o de Fisher, a resposta certa é sempre a de Fisher — e a subtração está ali de armadilha.',
    tabela: {
      titulo: 'Subtração × Fisher',
      colunas: ['Rendimento', 'Inflação', 'Subtração', 'Fisher (correto)'],
      linhas: [
        ['10%', '6%', '4,00%', '3,77%'],
        ['7%', '8%', '−1,00%', '−0,93%'],
        ['100%', '80%', '20,00%', '11,11%'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Uma aplicação rendeu 10% no ano e a inflação do período foi 6%. Qual foi a taxa real?',
      alternativas: ['4,00%', '3,77%', '4,23%', '16,60%'],
      correta: 1,
      explicacao:
        '1,10 ÷ 1,06 = 1,0377 → 3,77%. Os 4,00% vêm da subtração, que é aproximação e superestima.',
    },
    mapaMental: {
      id: 'mm-real',
      rotulo: 'Taxa real',
      revisao: true,
      filhos: [
        {
          id: 'mm-real-fisher',
          rotulo: 'Fórmula de Fisher',
          detalhe: '(1 + i) ÷ (1 + π) − 1',
          revisao: true,
        },
        {
          id: 'mm-real-aprox',
          rotulo: 'Atalho i − π',
          detalhe: 'Sempre superestima o ganho',
          revisao: true,
        },
        {
          id: 'mm-real-neg',
          rotulo: 'Real negativa',
          detalhe: 'Rendimento abaixo da inflação',
          revisao: true,
        },
        {
          id: 'mm-real-ipca',
          rotulo: 'IPCA+',
          detalhe: 'Contrata a taxa real direto',
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Ganho real é o quanto você passou a poder comprar. Se o preço das coisas subiu junto com o seu dinheiro, você não ganhou nada.',
      exemplo:
        'Seu saldo saiu de R$ 100 para R$ 110. O pão que custava R$ 100 agora custa R$ 106. Você consegue comprar 1,0377 pães — 3,77% a mais, não 4%.',
      analogia:
        'É uma corrida entre o seu dinheiro e os preços. O que importa não é a sua velocidade, é a distância que você abriu.',
      iniciante:
        'Se o dinheiro rende mas os preços sobem, parte do rendimento só repõe o que a inflação tirou. O que sobra é o ganho de verdade.',
    },
    niveis: {
      entenda:
        'Ganho real é rendimento descontada a inflação — mas o desconto é uma divisão, não uma subtração.',
      aprofunde:
        'A razão de ser uma divisão é que ambas as grandezas são fatores multiplicativos sobre o mesmo capital: o rendimento multiplica o saldo por (1 + i) e a inflação multiplica o preço por (1 + π). O poder de compra é o quociente entre os dois. A aproximação i − π vem da expansão de (1 + i)/(1 + π) ≈ 1 + i − π quando π é pequeno, e o termo desprezado é exatamente −π × (taxa real), sempre positivo em cenário de inflação positiva — daí o viés de superestimação ser sistemático, e não aleatório. Isso tem uma consequência de produto: num título IPCA + 6%, o "6%" É a taxa real contratada, já livre desse ajuste, porque o principal é corrigido pelo índice antes de o cupom incidir. É a única família de produto em que o cliente sabe o ganho real na data da aplicação.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 7,
  },

  {
    id: 'c-vpl-tir',
    microtemaId: 'm1.3',
    titulo: 'VPL e TIR: decidir se um investimento compensa',
    objetivo: 'Interpretar o valor presente líquido e a taxa interna de retorno para aceitar ou rejeitar um projeto.',
    etiquetas: ['ESSENCIAL', 'ENTENDER'],
    resumo30s:
      'VPL é a soma dos fluxos futuros trazidos a valor presente, menos o investimento. VPL positivo, aceita. TIR é a taxa que zera o VPL: se a TIR supera o custo de oportunidade, aceita.',
    explicacao: {
      oQueE:
        'Duas formas de responder à mesma pergunta — este investimento vale a pena? — usando o mesmo insumo: o fluxo de caixa ao longo do tempo.',
      porQueImporta:
        'É o raciocínio por trás de qualquer comparação entre alternativas de investimento, e a formalização daquilo que o cliente chama de "vale mais a pena".',
      paraQueServe:
        'Comparar projetos e produtos que pagam valores diferentes em datas diferentes, colocando tudo na mesma data para decidir.',
      comoFunciona: [
        'VPL = soma de todos os fluxos futuros descontados a valor presente, menos o investimento inicial.',
        'A taxa de desconto usada é o custo de oportunidade: quanto o dinheiro renderia na melhor alternativa disponível.',
        'REGRA DO VPL: positivo, o projeto cria valor e deve ser aceito. Negativo, destrói valor. Zero, é indiferente.',
        'TIR é a taxa de desconto que faz o VPL ser exatamente zero — a rentabilidade implícita do projeto.',
        'REGRA DA TIR: se a TIR é maior que o custo de oportunidade, aceita. As duas regras concordam para projetos convencionais.',
      ],
      exemploSimples:
        'Investimento de R$ 1.000 que devolve R$ 400, R$ 500 e R$ 600 nos três anos seguintes, com custo de oportunidade de 10% ao ano. O valor presente dos fluxos é R$ 1.227,65. O VPL é R$ 227,65 — positivo, aceita.',
      exemploAplicado:
        'Um cliente hesita entre resgatar um CDB que ainda pagará R$ 1.200 daqui a um ano e aplicar em outra coisa. Se o custo de oportunidade dele é 10% ao ano, esse fluxo vale R$ 1.090,91 hoje. Qualquer oferta de compra abaixo disso destrói valor — e é assim que se explica marcação a mercado sem falar em fórmula.',
      lembrarNaProva: [
        'VPL positivo → aceita. VPL negativo → rejeita.',
        'TIR é a taxa que zera o VPL.',
        'TIR maior que o custo de oportunidade → aceita.',
        'Quanto MAIOR a taxa de desconto, MENOR o VPL. Relação inversa.',
      ],
      revisaoRapida: [
        'VPL = fluxos descontados − investimento inicial.',
        'VPL positivo cria valor; negativo destrói.',
        'TIR é a taxa de desconto que zera o VPL.',
        'TIR acima do custo de oportunidade indica aceitar.',
        'Taxa de desconto sobe, VPL cai.',
      ],
    },
    exemplos: [
      {
        titulo: 'A mesma decisão pelos dois caminhos',
        corpo:
          'No fluxo −1.000 / +400 / +500 / +600, o VPL a 10% é R$ 227,65 (positivo, aceita) e a TIR fica em torno de 21% (acima dos 10% de custo de oportunidade, aceita). Para projetos convencionais — um desembolso seguido de entradas — os dois critérios nunca se contradizem.',
      },
    ],
    conceitoChave:
      'VPL responde quanto valor o projeto cria em reais de hoje; TIR responde a que taxa ele rende. É a mesma decisão vista por dois ângulos.',
    pontosChave: [
      'VPL > 0 → aceita',
      'TIR > custo de oportunidade → aceita',
      'TIR é a taxa que zera o VPL',
      'Taxa de desconto ↑ → VPL ↓',
      'A taxa de desconto é o custo de oportunidade',
    ],
    erroComum:
      'Comparar a TIR de dois projetos e escolher a maior sem olhar o tamanho do investimento. Uma TIR de 50% sobre R$ 100 cria menos valor que uma de 15% sobre R$ 100.000.',
    alertaProva:
      'Quando o enunciado der o VPL e perguntar a decisão, olhe só o sinal. Positivo aceita, negativo rejeita — não é preciso refazer conta.',
    tabela: {
      titulo: 'Como ler cada indicador',
      colunas: ['Indicador', 'O que mede', 'Aceita quando'],
      linhas: [
        ['VPL', 'Valor criado, em R$ de hoje', 'For positivo'],
        ['TIR', 'Rentabilidade implícita, em %', 'Superar o custo de oportunidade'],
        ['Payback', 'Tempo para recuperar o investido', 'Couber no prazo aceito'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Um projeto tem VPL de R$ 227,65 à taxa de desconto de 10% ao ano. O que isso indica?',
      alternativas: [
        'O projeto rende exatamente 10% ao ano.',
        'O projeto cria R$ 227,65 de valor em reais de hoje e deve ser aceito.',
        'O projeto deve ser rejeitado, pois o VPL deveria ser zero.',
        'A TIR do projeto é 227,65%.',
      ],
      correta: 1,
      explicacao:
        'VPL positivo significa que o projeto entrega mais do que o custo de oportunidade exigido. O valor é o excedente, medido em reais de hoje.',
    },
    mapaMental: {
      id: 'mm-vpl',
      rotulo: 'Análise de investimento',
      revisao: true,
      filhos: [
        {
          id: 'mm-vpl-vpl',
          rotulo: 'VPL',
          detalhe: 'Valor criado em R$ de hoje',
          revisao: true,
          filhos: [
            { id: 'mm-vpl-regra', rotulo: 'Positivo → aceita', revisao: true },
            { id: 'mm-vpl-inv', rotulo: 'Taxa ↑ → VPL ↓', revisao: true },
          ],
        },
        {
          id: 'mm-vpl-tir',
          rotulo: 'TIR',
          detalhe: 'Taxa que zera o VPL',
          revisao: true,
          filhos: [{ id: 'mm-vpl-tir-regra', rotulo: 'TIR > custo → aceita', revisao: true }],
        },
        {
          id: 'mm-vpl-payback',
          rotulo: 'Payback',
          detalhe: 'Tempo de recuperação · ignora o que vem depois',
        },
      ],
    },
    reexplicacoes: {
      simples:
        'VPL diz quanto dinheiro o projeto coloca no seu bolso hoje, já descontado o que você deixou de ganhar em outro lugar.',
      exemplo:
        'Você põe R$ 1.000 e recebe R$ 400, R$ 500 e R$ 600 nos três anos seguintes. Trazendo tudo para hoje a 10%, isso vale R$ 1.227,65 — R$ 227,65 a mais do que você investiu.',
      analogia:
        'VPL é o troco depois de pagar a conta. TIR é a velocidade média da viagem. Os dois descrevem o mesmo trajeto.',
      iniciante:
        'Dinheiro que chega daqui a três anos vale menos que dinheiro hoje. VPL é o jeito de comparar valores em datas diferentes.',
    },
    niveis: {
      entenda:
        'VPL soma tudo que o projeto vai render, trazido para valores de hoje, e desconta o que foi investido. Sobrou, aceita.',
      aprofunde:
        'VPL e TIR só concordam em projetos convencionais — um único desembolso inicial seguido de entradas. Quando o fluxo troca de sinal mais de uma vez, o polinômio que define a TIR pode ter mais de uma raiz real, e o projeto passa a ter TIRs múltiplas, todas matematicamente válidas e nenhuma interpretável como rentabilidade. Nesses casos o VPL continua funcionando e a TIR deve ser abandonada. Há também o problema de escala, que aparece na comparação entre projetos mutuamente excludentes: a TIR é uma taxa e ignora o tamanho, então maximizar TIR pode significar escolher o projeto que cria menos valor absoluto. A TIR ainda carrega o pressuposto implícito de que os fluxos intermediários são reinvestidos à própria TIR, o que raramente é verdade — a correção disso é a TIR modificada (MTIR), que reinveste ao custo de capital. Por tudo isso, quando os dois critérios divergem, quem manda é o VPL.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-amortizacao',
    microtemaId: 'm1.3',
    titulo: 'Sistemas de amortização: SAC e Price',
    objetivo: 'Comparar SAC e Price quanto à parcela, ao saldo devedor e ao total de juros pago.',
    etiquetas: ['ESSENCIAL', 'ATENCAO'],
    resumo30s:
      'SAC: amortização constante, parcela decrescente, começa mais cara e paga menos juros no total. Price: parcela fixa, amortização crescente, começa mais barata e paga mais juros. Em ambos, o juro incide sobre o saldo devedor.',
    explicacao: {
      oQueE:
        'Sistemas de amortização são as regras de como uma dívida é quitada ao longo do tempo. Toda parcela tem duas partes: juro sobre o saldo devedor e amortização, que abate o saldo.',
      porQueImporta:
        'É o produto de crédito mais presente na vida do cliente — financiamento imobiliário e de veículo. A escolha entre os dois sistemas muda o orçamento mensal e o custo total da dívida.',
      paraQueServe:
        'Explicar por que duas propostas com a mesma taxa e o mesmo prazo cobram parcelas diferentes, e qual delas cabe no bolso do cliente.',
      comoFunciona: [
        'Em qualquer sistema: PARCELA = JURO + AMORTIZAÇÃO, e o juro incide sempre sobre o SALDO DEVEDOR, não sobre o valor original.',
        'SAC — a amortização é constante. Como o saldo cai em passos iguais, o juro cai, e a parcela cai junto. A primeira parcela é a maior.',
        'PRICE — a parcela é constante. No começo ela é quase toda juro; com o saldo caindo, a fatia de amortização cresce a cada mês.',
        'A primeira parcela do SAC é sempre MAIOR que a do Price. A última é sempre MENOR.',
        'O SAC paga MENOS juros no total, porque amortiza mais rápido e o saldo devedor cai antes.',
      ],
      exemploSimples:
        'Financiamento de R$ 120.000 em 120 meses a 1% ao mês. No SAC, a amortização é fixa em R$ 1.000 e a primeira parcela é R$ 1.000 + R$ 1.200 = R$ 2.200; a última é R$ 1.010. No Price, todas as 120 parcelas são de R$ 1.721,65.',
      exemploAplicado:
        'O mesmo financiamento acima: no SAC o cliente paga R$ 72.600 de juros; no Price, R$ 86.598. São quase R$ 14 mil de diferença pela escolha do sistema — mas o SAC exige capacidade de pagar R$ 478 a mais na primeira parcela, e é a renda comprovada que costuma decidir.',
      lembrarNaProva: [
        'SAC: amortização constante, parcela decrescente.',
        'Price: parcela constante, amortização crescente.',
        'A primeira parcela do SAC é maior; a do Price, menor.',
        'O SAC paga menos juros no total.',
        'Em ambos, o juro incide sobre o saldo devedor.',
      ],
      revisaoRapida: [
        'Parcela = juro sobre o saldo + amortização.',
        'SAC: amortização fixa, parcela cai a cada mês.',
        'Price: parcela fixa, amortização cresce a cada mês.',
        'SAC começa mais caro e custa menos juros no total.',
        'Price cabe melhor no orçamento inicial.',
      ],
    },
    exemplos: [
      {
        titulo: 'R$ 120.000 em 120 meses a 1% a.m.',
        corpo:
          'SAC — 1ª parcela R$ 2.200, última R$ 1.010, juros totais R$ 72.600. Price — 120 parcelas de R$ 1.721,65, juros totais R$ 86.598. O SAC economiza R$ 13.998 e custa R$ 478 a mais no primeiro mês.',
      },
    ],
    conceitoChave:
      'Quem amortiza mais cedo paga menos juros — e é só isso que separa o SAC do Price.',
    pontosChave: [
      'SAC: amortização constante',
      'Price: parcela constante',
      '1ª parcela: SAC > Price',
      'Juros totais: SAC < Price',
      'Juro sempre sobre o saldo devedor',
    ],
    erroComum:
      'Achar que a parcela fixa do Price significa juro fixo em reais. A parcela é a mesma, mas a composição muda todo mês: começa quase toda juro e termina quase toda amortização.',
    alertaProva:
      'A pergunta clássica é qual sistema tem a primeira parcela maior. É o SAC — sempre, para o mesmo valor, prazo e taxa.',
    tabela: {
      titulo: 'SAC × Price — R$ 120.000, 120 meses, 1% a.m.',
      colunas: ['Característica', 'SAC', 'Price'],
      linhas: [
        ['Amortização', 'Constante (R$ 1.000)', 'Crescente'],
        ['Parcela', 'Decrescente', 'Constante (R$ 1.721,65)'],
        ['Primeira parcela', 'R$ 2.200,00', 'R$ 1.721,65'],
        ['Última parcela', 'R$ 1.010,00', 'R$ 1.721,65'],
        ['Juros totais', 'R$ 72.600', 'R$ 86.598'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Para o mesmo valor financiado, prazo e taxa, qual sistema apresenta a MAIOR primeira parcela?',
      alternativas: ['Price', 'SAC', 'São iguais na primeira parcela', 'Depende da taxa contratada'],
      correta: 1,
      explicacao:
        'No SAC a amortização é constante e o saldo devedor ainda está no máximo no primeiro mês, então juro e amortização somam o valor mais alto de toda a série.',
    },
    mapaMental: {
      id: 'mm-amort',
      rotulo: 'Amortização',
      revisao: true,
      filhos: [
        {
          id: 'mm-amort-comp',
          rotulo: 'Parcela = juro + amortização',
          detalhe: 'Juro incide sobre o saldo devedor',
          revisao: true,
        },
        {
          id: 'mm-amort-sac',
          rotulo: 'SAC',
          detalhe: 'Amortização fixa · parcela cai',
          revisao: true,
          filhos: [
            { id: 'mm-amort-sac-1', rotulo: '1ª parcela maior', revisao: true },
            { id: 'mm-amort-sac-j', rotulo: 'Menos juros no total', revisao: true },
          ],
        },
        {
          id: 'mm-amort-price',
          rotulo: 'Price',
          detalhe: 'Parcela fixa · amortização cresce',
          revisao: true,
          filhos: [
            { id: 'mm-amort-price-1', rotulo: '1ª parcela menor', revisao: true },
            { id: 'mm-amort-price-j', rotulo: 'Mais juros no total', revisao: true },
          ],
        },
      ],
    },
    reexplicacoes: {
      simples:
        'No SAC você devolve sempre o mesmo pedaço da dívida, então a parcela vai encolhendo. No Price a parcela é sempre igual, mas no começo quase tudo é juro.',
      exemplo:
        'R$ 120.000 em 120 meses a 1%: no SAC você devolve R$ 1.000 de dívida por mês e a parcela cai de R$ 2.200 para R$ 1.010. No Price você paga R$ 1.721,65 todos os meses.',
      analogia:
        'SAC é subir a serra logo no começo e descer o resto do caminho. Price é uma estrada plana que, somada, é mais longa.',
      iniciante:
        'Todo mês parte do que você paga é juro e parte abate a dívida. Os sistemas só mudam a proporção entre essas duas partes ao longo do tempo.',
    },
    niveis: {
      entenda:
        'SAC devolve pedaços iguais da dívida e a parcela vai caindo. Price mantém a parcela igual e paga mais juros no fim das contas.',
      aprofunde:
        'A parcela do Price sai da soma de uma progressão geométrica de valores presentes: PMT = PV × i ÷ [1 − (1 + i)^−n]. O denominador é o fator de valor presente de uma série uniforme, e é ele que garante que as n parcelas descontadas somem exatamente o principal. A consequência menos intuitiva é a composição interna: no Price a amortização cresce em progressão geométrica de razão (1 + i), então nos primeiros meses de um financiamento longo o saldo devedor mal se move — num contrato de 30 anos a 1% ao mês, metade do prazo se passa antes de metade do principal ser amortizado. É daí que vem a percepção do cliente de que "pago há anos e não devo menos". No SAC essa distorção não existe, porque a amortização é linear por construção. Vale notar que o Price puro pressupõe taxa fixa; contratos imobiliários brasileiros costumam ser híbridos, com correção do saldo por índice, o que muda a parcela mesmo no sistema dito "de prestação constante".',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 9,
  },

  {
    id: 'c-duration',
    microtemaId: 'm1.3',
    titulo: 'Duration: quanto o preço de um título reage aos juros',
    objetivo: 'Explicar duration e prever a variação de preço de um título diante de uma mudança na taxa.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'Duration é o prazo médio ponderado dos fluxos de um título — e mede sua sensibilidade a juros. Quanto maior a duration, mais o preço oscila. Duration modificada = duration ÷ (1 + i), e a variação do preço é aproximadamente −Dmod × variação da taxa.',
    explicacao: {
      oQueE:
        'Duration é o prazo médio dos pagamentos de um título, ponderado pelo valor presente de cada pagamento. Serve como medida de risco de taxa de juros.',
      porQueImporta:
        'É o que explica por que dois títulos com o mesmo vencimento podem oscilar de forma muito diferente, e o que sustenta a recomendação de encurtar prazo quando o cliente não tolera volatilidade.',
      paraQueServe:
        'Estimar quanto o preço de um título vai cair — ou subir — quando a taxa de juros do mercado se move.',
      comoFunciona: [
        'Cada pagamento futuro do título recebe um peso igual à sua participação no valor presente total. A duration é a média dos prazos usando esses pesos.',
        'Em um título ZERO CUPOM, que paga tudo no vencimento, a duration é IGUAL ao prazo.',
        'Em um título COM CUPONS, parte do dinheiro volta antes do vencimento, então a duration é sempre MENOR que o prazo.',
        'DURATION MODIFICADA = duration ÷ (1 + i). É ela que traduz duration em variação de preço.',
        'Variação percentual do preço ≈ − duration modificada × variação da taxa, em pontos percentuais.',
      ],
      exemploSimples:
        'Um título com duration modificada de 4,09 diante de uma alta de 1 ponto percentual na taxa perde cerca de 4,09% do preço. Se a taxa cair 1 ponto, o preço sobe aproximadamente o mesmo tanto.',
      exemploAplicado:
        'Dois títulos vencem em 5 anos: um Tesouro Prefixado com cupons semestrais e um zero cupom. O zero cupom tem duration 5; o com cupons, algo em torno de 4,3, porque os cupons devolvem caixa antes. Numa alta de juros, o zero cupom cai mais — e é essa diferença, não o vencimento, que responde à pergunta do cliente sobre qual "balança menos".',
      lembrarNaProva: [
        'Maior duration → maior sensibilidade a juros.',
        'Zero cupom: duration IGUAL ao prazo.',
        'Com cupom: duration MENOR que o prazo.',
        'Variação do preço ≈ − Dmod × variação da taxa.',
        'Cupom maior e prazo menor reduzem a duration.',
      ],
      revisaoRapida: [
        'Duration é o prazo médio ponderado dos fluxos.',
        'Zero cupom tem duration igual ao prazo.',
        'Título com cupom tem duration menor que o prazo.',
        'Duration modificada = duration ÷ (1 + i).',
        'Preço varia aproximadamente −Dmod vezes a variação da taxa.',
      ],
    },
    exemplos: [
      {
        titulo: 'O que aumenta e o que diminui a duration',
        corpo:
          'Aumentam: prazo mais longo e cupom menor. Diminuem: cupom maior, pagamentos mais frequentes e taxa de juros mais alta. Por isso um título longo e sem cupom é o instrumento mais sensível a juros que existe em renda fixa.',
      },
    ],
    conceitoChave:
      'Duration mede quando o dinheiro volta, e é a rapidez desse retorno que determina o quanto o preço balança.',
    pontosChave: [
      'Duration = prazo médio ponderado dos fluxos',
      'Zero cupom: duration = prazo',
      'Com cupom: duration < prazo',
      'Dmod = duration ÷ (1 + i)',
      'ΔPreço% ≈ −Dmod × Δtaxa',
    ],
    erroComum:
      'Tratar duration como sinônimo de prazo até o vencimento. Só coincidem no título zero cupom; em qualquer título que pague cupom, a duration é menor.',
    alertaProva:
      'Quando a questão pedir qual título oscila mais, a resposta se decide pela duration — não pelo vencimento nem pela taxa contratada.',
    tabela: {
      titulo: 'O que move a duration',
      colunas: ['Fator', 'Se aumenta', 'Efeito na duration'],
      linhas: [
        ['Prazo até o vencimento', 'Aumenta', 'Aumenta'],
        ['Tamanho do cupom', 'Aumenta', 'Diminui'],
        ['Frequência de pagamento', 'Aumenta', 'Diminui'],
        ['Taxa de juros de mercado', 'Aumenta', 'Diminui'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Um título zero cupom com vencimento em 5 anos tem duration de quanto?',
      alternativas: ['Menos de 5 anos', 'Exatamente 5 anos', 'Mais de 5 anos', 'Depende do cupom pago'],
      correta: 1,
      explicacao:
        'Todo o fluxo do zero cupom acontece no vencimento, então o prazo médio ponderado é o próprio prazo. Só nesse caso duration e vencimento coincidem.',
    },
    mapaMental: {
      id: 'mm-dur',
      rotulo: 'Duration',
      revisao: true,
      filhos: [
        {
          id: 'mm-dur-def',
          rotulo: 'Prazo médio ponderado',
          detalhe: 'Pesos = valor presente de cada fluxo',
          revisao: true,
        },
        {
          id: 'mm-dur-zero',
          rotulo: 'Zero cupom',
          detalhe: 'Duration = prazo',
          revisao: true,
        },
        {
          id: 'mm-dur-cupom',
          rotulo: 'Com cupom',
          detalhe: 'Duration < prazo',
          revisao: true,
        },
        {
          id: 'mm-dur-mod',
          rotulo: 'Duration modificada',
          detalhe: 'Dmod = D ÷ (1 + i) · ΔP ≈ −Dmod × Δi',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Duration é o tempo médio até o dinheiro voltar. Quanto mais demora, mais o preço do título sobe e desce quando os juros mudam.',
      exemplo:
        'Com duration modificada de 4,09, uma alta de 1 ponto na taxa derruba o preço em cerca de 4,09%. Uma queda de 1 ponto valoriza o título quase o mesmo tanto.',
      analogia:
        'É a alavanca de uma gangorra: quanto mais longe do apoio você senta, mais a ponta sobe e desce com o mesmo empurrão.',
      iniciante:
        'Título que devolve o dinheiro só lá na frente é mais sensível a mudanças de juros do que um que devolve aos poucos.',
    },
    niveis: {
      entenda:
        'Duration diz quanto tempo, em média, falta para o dinheiro voltar — e quanto maior esse tempo, mais o preço reage a juros.',
      aprofunde:
        'A duration de Macaulay é uma média de prazos ponderada pelo valor presente de cada fluxo; a duration modificada é essa medida dividida por (1 + i), e corresponde à derivada percentual do preço em relação à taxa. Como é uma derivada, ela é uma aproximação LINEAR de uma relação que é convexa: a estimativa −Dmod × Δi funciona bem para variações pequenas e erra para variações grandes, sempre no mesmo sentido — ela subestima a alta do preço quando os juros caem e superestima a queda quando sobem. O termo de segunda ordem que corrige isso é a convexidade, e ela é sempre favorável ao detentor do título, o que explica por que, entre dois títulos de mesma duration, o mais convexo é preferível. A duration também tem um uso de gestão além da medição: casar a duration dos ativos com a do passivo — imunização — protege uma carteira de mudanças paralelas na curva de juros, e é a técnica que fundos de previdência e seguradoras usam para honrar compromissos de longo prazo.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 9,
  },
]
