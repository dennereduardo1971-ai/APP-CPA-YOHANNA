import type { Conceito } from '../types'

/**
 * MICROTEMA 2.1 — produtos de renda fixa e crédito privado.
 *
 * Complementa os conceitos já existentes em `m2-produtos.ts` (tipos de
 * rentabilidade, FGC e tributação da renda fixa). Aqui entram os PRODUTOS em
 * si, um a um, na ordem em que a prova costuma cobrá-los.
 *
 * Três eixos organizam quase todas as questões do bloco, e as aulas voltam a
 * eles o tempo todo:
 *
 *   QUEM EMITE  → define se há FGC. Banco tem; securitizadora e empresa, não.
 *   QUAL LASTRO → define o risco de crédito real por trás do papel.
 *   QUE BENEFÍCIO FISCAL → e, sobretudo, de QUEM é o benefício.
 *
 * NOTA EDITORIAL: prazos mínimos de carência, valores mínimos de aplicação e
 * a taxa de custódia da B3 são fixados por norma e revistos periodicamente.
 * As aulas trazem o mecanismo e marcam onde conferir (regra 4 do CLAUDE.md).
 * A tributação em si continua tratada em `c-rf-tributacao`; onde um produto
 * tem regime próprio, a aula diz qual é a lógica e remete à conferência.
 */

export const CONCEITOS_2_1_RF: Conceito[] = [
  {
    id: 'c-tesouro-direto',
    microtemaId: 'm2.1',
    titulo: 'Tesouro Direto: a família de títulos',
    objetivo: 'Escolher o título público adequado ao objetivo e ao horizonte do cliente.',
    etiquetas: ['ESSENCIAL', 'DECORAR'],
    resumo30s:
      'Tesouro Selic é o de menor oscilação e serve de reserva. Prefixado trava taxa. IPCA+ contrata ganho real. Renda+ e Educa+ acumulam e depois pagam em parcelas mensais — são produtos de objetivo, não de rentabilidade.',
    explicacao: {
      oQueE:
        'Tesouro Direto é o programa que permite à pessoa física comprar títulos da dívida pública federal diretamente, em frações pequenas, pela internet.',
      porQueImporta:
        'É o menor risco de crédito disponível no país e a porta de entrada da maioria dos clientes. Escolher o título errado dentro da família é o erro mais comum — e o que produz a reclamação de "renda fixa que deu prejuízo".',
      paraQueServe:
        'Emprestar ao Tesouro Nacional com regra de remuneração conhecida, escolhendo o formato conforme o objetivo.',
      comoFunciona: [
        'TESOURO SELIC: pós-fixado, acompanha a Selic. É o de MENOR oscilação da família e o único adequado a reserva de emergência.',
        'TESOURO PREFIXADO: taxa travada na compra. Oscila com juros antes do vencimento; levado até o fim, entrega a taxa contratada.',
        'TESOURO IPCA+: híbrido. O principal é corrigido pelo índice e a taxa somada é o ganho REAL contratado.',
        'TESOURO RENDA+ e EDUCA+: acumulam até a data de conversão e depois pagam em PARCELAS MENSAIS corrigidas pela inflação — o Renda+ por vinte anos, o Educa+ por cinco. São produtos de objetivo: aposentadoria e faculdade.',
        'Versões COM JUROS SEMESTRAIS pagam cupom no caminho. Para acumulação de longo prazo isso é desvantagem: o cupom sai, é tributado e precisa ser reinvestido.',
      ],
      exemploSimples:
        'Um cliente quer reserva de emergência e compra Tesouro Prefixado porque a taxa estava alta. Três meses depois os juros sobem e ele precisa sacar: vende com prejuízo. O título certo para reserva era o Tesouro Selic.',
      exemploAplicado:
        'Um cliente quer garantir a faculdade da filha, que começa em oito anos. O Educa+ resolve os dois problemas de uma vez: protege da inflação até lá e depois entrega o dinheiro em parcelas mensais durante os cinco anos do curso, em vez de um valor único que ele teria de administrar sozinho.',
      lembrarNaProva: [
        'Tesouro Selic é o de menor oscilação — o único para reserva.',
        'Prefixado e IPCA+ oscilam antes do vencimento.',
        'Renda+ e Educa+ pagam em PARCELAS MENSAIS, não em valor único.',
        'Cupom semestral atrapalha a acumulação de longo prazo.',
      ],
      revisaoRapida: [
        'Selic: pós-fixado, menor oscilação, serve de reserva.',
        'Prefixado: trava taxa, oscila até o vencimento.',
        'IPCA+: contrata ganho real acima da inflação.',
        'Renda+ e Educa+: acumulam e pagam em parcelas mensais.',
        'Juros semestrais: bom para renda, ruim para acumular.',
      ],
    },
    exemplos: [
      {
        titulo: 'Por que o cupom atrapalha quem acumula',
        corpo:
          'Cada cupom semestral sai do título, é tributado na fonte e cai na conta. Para voltar a render, precisa ser reinvestido — e à taxa que existir naquele momento, não à contratada. Quem acumula prefere o título sem cupom, que capitaliza tudo internamente até o vencimento.',
      },
    ],
    conceitoChave:
      'Dentro do Tesouro Direto o risco de crédito é o mesmo; o que muda entre os títulos é a oscilação e o formato de pagamento.',
    pontosChave: [
      'Selic: reserva, menor oscilação',
      'Prefixado: trava taxa',
      'IPCA+: ganho real contratado',
      'Renda+ / Educa+: parcelas mensais',
      'Cupom: renda sim, acumulação não',
    ],
    erroComum:
      'Usar Tesouro Prefixado ou IPCA+ como reserva de emergência por causa da taxa. Os dois oscilam, e a reserva é sacada justamente quando não dá para escolher o momento.',
    alertaProva:
      'A taxa de custódia da B3 e as faixas de isenção sobre ela são revistas periodicamente. Confira a regra vigente antes de citar percentual.',
    tabela: {
      titulo: 'Qual título para qual objetivo',
      colunas: ['Título', 'Oscila?', 'Serve para'],
      linhas: [
        ['Tesouro Selic', 'Muito pouco', 'Reserva de emergência e caixa'],
        ['Tesouro Prefixado', 'Sim', 'Travar taxa com data definida'],
        ['Tesouro IPCA+', 'Sim', 'Proteger poder de compra no longo prazo'],
        ['Tesouro Renda+', 'Sim, na acumulação', 'Renda mensal na aposentadoria'],
        ['Tesouro Educa+', 'Sim, na acumulação', 'Custeio dos anos de faculdade'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Qual título do Tesouro Direto é o mais adequado para reserva de emergência?',
      alternativas: ['Tesouro Prefixado', 'Tesouro Selic', 'Tesouro IPCA+ com juros semestrais', 'Tesouro Renda+'],
      correta: 1,
      explicacao:
        'O Tesouro Selic é o de menor oscilação da família. Reserva é sacada sem escolher o momento, e por isso não pode depender do preço do dia.',
    },
    mapaMental: {
      id: 'mm-td',
      rotulo: 'Tesouro Direto',
      revisao: true,
      filhos: [
        { id: 'mm-td-selic', rotulo: 'Selic', detalhe: 'Pós-fixado · menor oscilação · reserva', revisao: true },
        { id: 'mm-td-pre', rotulo: 'Prefixado', detalhe: 'Trava taxa · oscila', revisao: true },
        { id: 'mm-td-ipca', rotulo: 'IPCA+', detalhe: 'Ganho real contratado', revisao: true },
        {
          id: 'mm-td-obj',
          rotulo: 'Renda+ e Educa+',
          detalhe: 'Acumulam e pagam em parcelas',
          revisao: true,
          filhos: [
            { id: 'mm-td-renda', rotulo: 'Renda+', detalhe: '20 anos de parcelas' },
            { id: 'mm-td-educa', rotulo: 'Educa+', detalhe: '5 anos de parcelas' },
          ],
        },
        { id: 'mm-td-cupom', rotulo: 'Juros semestrais', detalhe: 'Renda sim; acumulação não', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'São vários títulos do governo. Um acompanha os juros e quase não balança; outros travam taxa e balançam até o vencimento.',
      exemplo:
        'Comprou Prefixado para reserva e precisou sacar com os juros em alta? Vende no prejuízo. Para reserva, o certo é o Tesouro Selic.',
      analogia:
        'É a mesma loja com produtos diferentes: um é a poupança do caixa, outro é o plano de longo prazo. Confundi-los custa dinheiro.',
      iniciante:
        'Você empresta dinheiro para o governo e recebe com juros. O que muda entre os títulos é a regra do juro e quando o dinheiro volta.',
    },
    niveis: {
      entenda:
        'Todos os títulos do Tesouro têm o mesmo emissor. O que muda entre eles é o quanto o preço oscila e como o dinheiro volta.',
      aprofunde:
        'O Tesouro Selic quase não oscila por uma razão específica: sua taxa se reajusta diariamente junto com a taxa básica, o que mantém a duration próxima de zero — o valor presente dos fluxos praticamente não muda quando a curva se move. É a mesma mecânica que torna o prefixado longo o instrumento mais sensível da família. O Renda+ e o Educa+ inovam menos na remuneração do que na ESTRUTURA DE PAGAMENTO: eles resolvem um problema real de comportamento, que é a dificuldade de converter um montante acumulado em renda periódica sem consumi-lo cedo demais — o mesmo problema que a fase de desacumulação apresenta e que o risco de sequência agrava. Ao entregar parcelas mensais corrigidas, o título transfere para o desenho do produto uma decisão que o investidor tomaria mal sozinho. A contrapartida é rigidez: a conversão em parcelas segue o cronograma contratado, e sair antes significa vender a mercado, sujeito à marcação como qualquer título longo.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-cdb-rdb-lf',
    microtemaId: 'm2.1',
    titulo: 'CDB, RDB e Letra Financeira',
    objetivo: 'Distinguir os depósitos bancários a prazo quanto a negociabilidade, resgate e garantia.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'CDB é negociável e tem FGC. RDB é INTRANSFERÍVEL e, em regra, sem resgate antecipado — mas tem FGC. Letra Financeira é de prazo longo, valor mínimo alto e NÃO tem FGC.',
    explicacao: {
      oQueE:
        'São os títulos pelos quais um banco capta recursos a prazo, prometendo devolver com a remuneração combinada.',
      porQueImporta:
        'É a família mais vendida do varejo, e as três siglas parecem intercambiáveis. A diferença de garantia entre elas é justamente a que o cliente não percebe sozinho.',
      paraQueServe:
        'Dar ao banco funding com prazo definido e ao investidor uma aplicação de risco de crédito bancário.',
      comoFunciona: [
        'CDB — Certificado de Depósito Bancário. É NEGOCIÁVEL: pode ser transferido a terceiros. Muitos oferecem liquidez diária por recompra do próprio emissor. Tem cobertura do FGC.',
        'RDB — Recibo de Depósito Bancário. É INTRANSFERÍVEL e, em regra, INEGOCIÁVEL: o investidor carrega até o vencimento. Também tem cobertura do FGC.',
        'LETRA FINANCEIRA — LF. Instrumento de captação de LONGO PRAZO, com prazo mínimo e valor mínimo de aplicação elevados fixados em norma. NÃO conta com cobertura do FGC.',
        'A LF SUBORDINADA fica atrás dos demais credores na ordem de pagamento em caso de liquidação, e por isso paga mais. Risco maior, remuneração maior.',
        'A regra prática: quanto mais longo e menos resgatável o instrumento, maior a taxa — e, no caso da LF, some também a garantia.',
      ],
      exemploSimples:
        'Dois papéis do mesmo banco, mesmo prazo: um CDB e uma Letra Financeira. A LF paga mais. A diferença de taxa não é generosidade — é o preço de não haver FGC e de não haver saída antes do vencimento.',
      exemploAplicado:
        'Um cliente conservador é ofertado com uma LF por causa da taxa superior à do CDB. É preciso dizer o que ele está trocando: perde a cobertura do FGC e a possibilidade de resgate. Para quem tem a reserva já montada e prazo definido, pode fazer sentido; para quem depende daquele dinheiro, não.',
      lembrarNaProva: [
        'CDB é negociável; RDB é INTRANSFERÍVEL.',
        'CDB e RDB têm FGC. Letra Financeira NÃO tem.',
        'LF é de prazo e valor mínimo elevados.',
        'LF subordinada paga mais porque recebe depois dos outros credores.',
      ],
      revisaoRapida: [
        'CDB: negociável, com FGC, frequentemente com liquidez diária.',
        'RDB: intransferível, sem resgate antecipado, mas com FGC.',
        'Letra Financeira: longo prazo, valor alto, SEM FGC.',
        'LF subordinada: última na fila, taxa maior.',
        'Taxa maior sempre tem contrapartida: prazo, liquidez ou garantia.',
      ],
    },
    exemplos: [
      {
        titulo: 'A pergunta que resolve as três',
        corpo:
          'Posso transferir para outra pessoa? CDB sim, RDB não. Tem FGC? CDB e RDB sim, LF não. Posso sacar antes? CDB em geral sim, RDB em regra não, LF não. Três perguntas separam os três produtos.',
      },
    ],
    conceitoChave:
      'A taxa maior de um depósito a prazo é sempre paga com alguma coisa: prazo, liquidez ou garantia.',
    pontosChave: [
      'CDB: negociável, com FGC',
      'RDB: intransferível, com FGC',
      'LF: longa, cara, SEM FGC',
      'LF subordinada: paga mais, recebe depois',
      'Taxa maior tem contrapartida',
    ],
    erroComum:
      'Tratar Letra Financeira como "um CDB que rende mais". Ela não tem FGC e não admite resgate antecipado — são duas diferenças estruturais, não um detalhe de taxa.',
    alertaProva:
      'Prazo mínimo e valor mínimo da Letra Financeira são fixados por norma e revistos. Confira a regra vigente antes de decorar número.',
    tabela: {
      titulo: 'Os três depósitos a prazo',
      colunas: ['Produto', 'Negociável?', 'FGC?', 'Resgate antecipado'],
      linhas: [
        ['CDB', 'Sim', 'Sim', 'Frequente, por recompra'],
        ['RDB', 'Não', 'Sim', 'Em regra, não'],
        ['Letra Financeira', 'Sim', 'Não', 'Vedado'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Qual destes produtos NÃO conta com cobertura do FGC?',
      alternativas: ['CDB', 'RDB', 'Letra Financeira', 'Caderneta de poupança'],
      correta: 2,
      explicacao:
        'A Letra Financeira é instrumento de captação de longo prazo e está expressamente fora da cobertura do FGC. CDB, RDB e poupança são cobertos.',
    },
    mapaMental: {
      id: 'mm-cdb',
      rotulo: 'Depósitos a prazo',
      revisao: true,
      filhos: [
        { id: 'mm-cdb-cdb', rotulo: 'CDB', detalhe: 'Negociável · FGC · liquidez comum', revisao: true },
        { id: 'mm-cdb-rdb', rotulo: 'RDB', detalhe: 'Intransferível · FGC · sem saída', revisao: true },
        {
          id: 'mm-cdb-lf',
          rotulo: 'Letra Financeira',
          detalhe: 'Longa · valor alto · SEM FGC',
          revisao: true,
          filhos: [
            { id: 'mm-cdb-lfsub', rotulo: 'Subordinada', detalhe: 'Recebe por último · paga mais', revisao: true },
          ],
        },
      ],
    },
    reexplicacoes: {
      simples:
        'São três jeitos de emprestar dinheiro a um banco. Mudam se dá para transferir, se dá para sacar antes e se o FGC cobre.',
      exemplo:
        'A Letra Financeira paga mais que o CDB do mesmo banco. O que ela cobra por isso é o FGC e a possibilidade de sacar antes.',
      analogia:
        'É a diferença entre poupar com a porta destrancada, trancada, ou trancada e sem seguro. Cada nível paga um pouco mais.',
      iniciante:
        'Quando você aplica num banco, existe mais de um tipo de papel. Alguns têm seguro do FGC e outros não.',
    },
    niveis: {
      entenda:
        'CDB e RDB têm FGC; a Letra Financeira não. E o RDB, ao contrário do CDB, não pode ser transferido nem resgatado antes.',
      aprofunde:
        'A exclusão da Letra Financeira da cobertura do FGC não é uma lacuna: é o propósito do instrumento. Ela foi criada para dar aos bancos funding longo e estável, e um passivo garantido por fundo garantidor não cumpre essa função de forma limpa — a garantia transferiria ao FGC parte do risco que deveria disciplinar a captação. Daí decorrem, no mesmo pacote, o prazo mínimo elevado, a vedação de resgate antecipado e o valor mínimo alto, que restringe o produto a investidores com capacidade de análise. A versão SUBORDINADA vai um passo além: por ficar atrás dos demais credores na ordem de pagamento, ela é computada no capital regulatório do banco sob certas condições, funcionando como colchão de absorção de perdas. Isso explica por que ela paga tanto mais: o investidor está, na prática, financiando o capital da instituição e assumindo perda antes dos depositantes comuns em um cenário de estresse.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 7,
  },

  {
    id: 'c-lci-lca-lcd',
    microtemaId: 'm2.1',
    titulo: 'LCI, LCA e LCD: os títulos isentos com lastro',
    objetivo: 'Identificar o lastro de cada letra e comparar rendimento líquido com produto tributado.',
    etiquetas: ['ESSENCIAL', 'ATENCAO'],
    resumo30s:
      'São títulos bancários isentos de imposto de renda para pessoa física, com lastro obrigatório: crédito imobiliário na LCI, do agronegócio na LCA e de desenvolvimento na LCD. Têm FGC e prazo mínimo de carência.',
    explicacao: {
      oQueE:
        'São letras emitidas por instituições financeiras, cada uma vinculada a uma carteira de crédito específica que lhe serve de lastro.',
      porQueImporta:
        'A isenção muda a comparação com qualquer produto tributado — e comparar rendimento bruto entre um isento e um tributado é o erro mais frequente do varejo.',
      paraQueServe:
        'Financiar setores específicos da economia com funding mais barato, e oferecer ao investidor pessoa física rendimento líquido de imposto.',
      comoFunciona: [
        'LCI — Letra de Crédito Imobiliário. Lastro em créditos imobiliários. LCA — Letra de Crédito do Agronegócio. Lastro em créditos do agronegócio. LCD — Letra de Crédito do Desenvolvimento, mais recente, ligada ao financiamento de projetos de desenvolvimento.',
        'As três são ISENTAS de imposto de renda para PESSOA FÍSICA. Pessoa jurídica é tributada normalmente.',
        'Têm cobertura do FGC, porque o emissor é instituição financeira.',
        'Há PRAZO MÍNIMO DE CARÊNCIA antes do resgate, fixado em norma e revisto periodicamente. Não são produtos de liquidez.',
        'Para comparar com um produto tributado, converta: o rendimento líquido do tributado é o que deve ser confrontado com o bruto do isento, já que neste os dois coincidem.',
      ],
      exemploSimples:
        'Uma LCI a 90% do CDI e um CDB a 100% do CDI. Parece que o CDB ganha. Mas o CDB é tributado e a LCI não — dependendo do prazo, o líquido da LCI supera. A comparação só existe depois do imposto.',
      exemploAplicado:
        'Um cliente quer aplicar o dinheiro de uma viagem marcada para dali a quatro meses e recebe oferta de LCI com taxa atrativa. O problema não é a taxa: é a carência. Ele não conseguirá resgatar quando precisar, e a alternativa correta é um produto de liquidez, ainda que tributado e com rendimento menor.',
      lembrarNaProva: [
        'Isenção de IR vale para PESSOA FÍSICA; PJ é tributada.',
        'Têm FGC, porque o emissor é banco.',
        'Há prazo mínimo de carência — não são produtos de liquidez.',
        'A comparação com produto tributado só vale depois do imposto.',
      ],
      revisaoRapida: [
        'LCI: lastro imobiliário. LCA: agronegócio. LCD: desenvolvimento.',
        'Isentas de IR para pessoa física.',
        'Cobertas pelo FGC — o emissor é instituição financeira.',
        'Têm carência mínima; não servem para liquidez.',
        'Comparar com tributado exige olhar o líquido.',
      ],
    },
    exemplos: [
      {
        titulo: 'Como converter para comparar',
        corpo:
          'Pegue o rendimento do produto tributado e desconte a alíquota da tabela regressiva aplicável ao prazo pretendido. O resultado é o líquido. Só esse número pode ser comparado com o da letra isenta — comparar percentuais brutos favorece sistematicamente o produto tributado.',
      },
    ],
    conceitoChave:
      'Entre um isento e um tributado, só o rendimento LÍQUIDO permite comparação — e ele depende do prazo.',
    pontosChave: [
      'LCI: imobiliário · LCA: agro · LCD: desenvolvimento',
      'Isentas de IR para PF',
      'Com FGC',
      'Carência mínima em norma',
      'Comparar sempre pelo líquido',
    ],
    erroComum:
      'Comparar a taxa bruta de uma LCI com a de um CDB. O CDB parece melhor e frequentemente não é — a comparação válida acontece depois do imposto.',
    alertaProva:
      'Prazos mínimos de carência da LCI, LCA e LCD são fixados por resolução e foram alterados recentemente. Confira a norma vigente antes de citar prazo.',
    tabela: {
      titulo: 'As três letras',
      colunas: ['Letra', 'Lastro', 'IR para PF', 'FGC'],
      linhas: [
        ['LCI', 'Crédito imobiliário', 'Isenta', 'Sim'],
        ['LCA', 'Crédito do agronegócio', 'Isenta', 'Sim'],
        ['LCD', 'Financiamento ao desenvolvimento', 'Isenta', 'Sim'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Uma LCI paga 90% do CDI e um CDB do mesmo banco paga 100% do CDI, ambos para o mesmo prazo. É correto concluir que:',
      alternativas: [
        'O CDB é necessariamente mais vantajoso, por pagar taxa maior',
        'A comparação só é possível depois de descontar o imposto do CDB',
        'A LCI é sempre mais vantajosa, por ser isenta',
        'Os dois são equivalentes, pois têm o mesmo emissor',
      ],
      correta: 1,
      explicacao:
        'A LCI é isenta para pessoa física, então seu bruto já é líquido. O CDB precisa ter o IR descontado antes de qualquer comparação.',
    },
    mapaMental: {
      id: 'mm-lci',
      rotulo: 'Letras de crédito',
      revisao: true,
      filhos: [
        { id: 'mm-lci-lci', rotulo: 'LCI', detalhe: 'Lastro imobiliário', revisao: true },
        { id: 'mm-lci-lca', rotulo: 'LCA', detalhe: 'Lastro no agronegócio', revisao: true },
        { id: 'mm-lci-lcd', rotulo: 'LCD', detalhe: 'Financiamento ao desenvolvimento', revisao: true },
        { id: 'mm-lci-isencao', rotulo: 'Isenção de IR', detalhe: 'Pessoa física · PJ é tributada', revisao: true },
        { id: 'mm-lci-carencia', rotulo: 'Carência', detalhe: 'Não são produtos de liquidez', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'São aplicações de banco que não pagam imposto de renda para pessoa física. Em troca, você precisa deixar o dinheiro parado por um tempo mínimo.',
      exemplo:
        'LCI a 90% do CDI pode render mais que CDB a 100%, porque no CDB o imposto sai do rendimento e na LCI não.',
      analogia:
        'É o preço com e sem imposto na etiqueta. Comparar um com o outro sem fazer a conta leva à escolha errada.',
      iniciante:
        'Alguns investimentos de banco não descontam imposto de renda de pessoa física. Isso muda quanto sobra no bolso.',
    },
    niveis: {
      entenda:
        'LCI, LCA e LCD são isentas de IR para pessoa física e têm FGC. Em troca, exigem prazo mínimo de carência.',
      aprofunde:
        'A isenção não é um benefício ao investidor: é um subsídio ao SETOR lastreado, e o investidor apenas participa da transferência. Ao renunciar à arrecadação, o Estado permite que o banco capte mais barato — o investidor aceita uma taxa nominal menor porque não paga imposto — e a economia se destina, ao menos em tese, ao custo do crédito imobiliário, do agronegócio ou dos projetos de desenvolvimento. É por isso que a isenção vem sempre acompanhada de exigência de LASTRO: sem vínculo obrigatório com a carteira de crédito correspondente, o subsídio virava captação barata sem contrapartida setorial. Foi exatamente esse desvio que motivou os apertos recentes nas regras de lastro e nos prazos mínimos, restringindo quais créditos podem lastrear cada letra. Para o investidor, a consequência prática é que a atratividade dessas letras depende de duas variáveis que se movem por decisão de política pública, e não de mercado: a manutenção da isenção e as regras de lastro. Nenhuma das duas é permanente.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 7,
  },

  {
    id: 'c-cri-cra',
    microtemaId: 'm2.1',
    titulo: 'CRI e CRA: securitização sem FGC',
    objetivo: 'Reconhecer que o emissor é securitizadora e avaliar o risco real do lastro.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'CRI e CRA são emitidos por SECURITIZADORAS, não por bancos — e por isso NÃO têm FGC. São isentos de IR para pessoa física, e o risco é o do lastro e da estrutura, não o de um banco.',
    explicacao: {
      oQueE:
        'São certificados de recebíveis: títulos lastreados em fluxos de crédito imobiliário (CRI) ou do agronegócio (CRA), emitidos por companhias securitizadoras.',
      porQueImporta:
        'São vendidos ao lado da LCI e da LCA, com isenção parecida e taxa maior — e a diferença que importa, a ausência de FGC, é justamente a que não aparece na comparação de taxas.',
      paraQueServe:
        'Transformar carteiras de recebíveis em títulos negociáveis, antecipando recursos a quem originou o crédito.',
      comoFunciona: [
        'A SECURITIZADORA compra recebíveis e emite títulos lastreados neles. Ela não é instituição financeira — logo, NÃO HÁ FGC.',
        'São isentos de imposto de renda para PESSOA FÍSICA, como a LCI e a LCA.',
        'O risco é do LASTRO: se os devedores dos recebíveis não pagarem, o investidor sente. Não há banco no meio absorvendo a perda.',
        'REGIME FIDUCIÁRIO separa o lastro do patrimônio da securitizadora, protegendo o investidor da insolvência DELA — mas não do calote dos devedores.',
        'A taxa maior em relação a LCI e LCA não é oportunidade: é o prêmio pela ausência de garantia e pelo risco de crédito pulverizado ou concentrado do lastro.',
      ],
      exemploSimples:
        'Um CRA lastreado nos recebíveis de uma única agroindústria depende inteiramente da saúde daquela empresa. Se ela quebrar, não há FGC nem banco para cobrir — o investidor entra na fila do lastro.',
      exemploAplicado:
        'Um cliente conservador recebe oferta de CRI com taxa bem acima da LCI, ambos isentos. A conversa correta expõe o que a taxa está pagando: sem FGC, risco do lastro e liquidez de mercado secundário, que costuma ser ruim. Para perfil conservador sem reserva montada, é produto inadequado independentemente da taxa.',
      lembrarNaProva: [
        'Emissor é SECURITIZADORA — não há FGC.',
        'Isentos de IR para pessoa física.',
        'O risco é do lastro, não de um banco.',
        'Regime fiduciário protege da insolvência da securitizadora, não do calote.',
      ],
      revisaoRapida: [
        'CRI: recebíveis imobiliários. CRA: do agronegócio.',
        'Emitidos por securitizadora, não por banco.',
        'SEM cobertura do FGC.',
        'Isentos de IR para pessoa física.',
        'Taxa maior é prêmio de risco, não oportunidade.',
      ],
    },
    exemplos: [
      {
        titulo: 'Pulverizado × concentrado',
        corpo:
          'Um CRI lastreado em milhares de financiamentos residenciais tem risco pulverizado: alguns inadimplentes não derrubam a estrutura. Um CRA lastreado em uma única empresa tem risco concentrado, equivalente ao de uma debênture daquela empresa — com a diferença de vir embrulhado como "renda fixa isenta".',
      },
    ],
    conceitoChave:
      'A isenção é igual à da LCI e da LCA; a garantia não é. É a ausência do FGC que a taxa maior está pagando.',
    pontosChave: [
      'Emissor: securitizadora',
      'SEM FGC',
      'Isentos para PF',
      'Risco do lastro',
      'Regime fiduciário ≠ garantia de pagamento',
    ],
    erroComum:
      'Colocar CRI e CRA na mesma prateleira mental de LCI e LCA por serem todos isentos. A isenção é igual; a garantia, não.',
    alertaProva:
      'A regra prática que resolve o tema: emissor banco → FGC. Emissor securitizadora ou empresa → sem FGC.',
    tabela: {
      titulo: 'Isentos, mas diferentes',
      colunas: ['Produto', 'Emissor', 'FGC', 'Risco principal'],
      linhas: [
        ['LCI / LCA', 'Instituição financeira', 'Sim', 'Crédito do banco'],
        ['CRI / CRA', 'Securitizadora', 'Não', 'Crédito do lastro'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Por que CRI e CRA não contam com cobertura do FGC?',
      alternativas: [
        'Porque são isentos de imposto de renda',
        'Porque são emitidos por securitizadoras, e não por instituições financeiras',
        'Porque têm prazo superior a cinco anos',
        'Porque são destinados apenas a investidores qualificados',
      ],
      correta: 1,
      explicacao:
        'O FGC cobre depósitos e títulos de instituições financeiras. Securitizadora não é instituição financeira.',
    },
    mapaMental: {
      id: 'mm-cri',
      rotulo: 'CRI e CRA',
      revisao: true,
      filhos: [
        { id: 'mm-cri-emissor', rotulo: 'Securitizadora', detalhe: 'Não é banco · sem FGC', revisao: true },
        { id: 'mm-cri-isento', rotulo: 'Isenção de IR', detalhe: 'Pessoa física', revisao: true },
        {
          id: 'mm-cri-lastro',
          rotulo: 'Risco do lastro',
          detalhe: 'Pulverizado ou concentrado',
          revisao: true,
        },
        {
          id: 'mm-cri-fiduciario',
          rotulo: 'Regime fiduciário',
          detalhe: 'Protege da insolvência da emissora, não do calote',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'São papéis lastreados em dívidas de outras pessoas. Não têm FGC, e se quem deve não pagar, o prejuízo é seu.',
      exemplo:
        'Um CRA de uma única empresa depende daquela empresa. Se ela quebrar, não há banco nem FGC para cobrir.',
      analogia:
        'É comprar a promessa de pagamento de terceiros. Se eles não pagarem, ninguém entra no lugar deles.',
      iniciante:
        'CRI e CRA parecem com LCI e LCA porque também não pagam imposto — mas não têm a proteção do FGC.',
    },
    niveis: {
      entenda:
        'CRI e CRA são isentos como LCI e LCA, mas quem emite é uma securitizadora, e por isso não há FGC. O risco é de quem deve o lastro.',
      aprofunde:
        'A securitização cumpre uma função econômica real: ela separa o risco do ORIGINADOR do risco do ATIVO. Uma incorporadora pode vender sua carteira de recebíveis e, mesmo que venha a falir depois, os compradores dos CRIs continuam recebendo dos mutuários — é isso que o regime fiduciário protege, ao segregar o lastro do patrimônio da securitizadora. O que o regime NÃO faz, e é onde o investidor de varejo se confunde, é garantir o pagamento: se os devedores do lastro não honrarem, não há a quem recorrer. A qualidade de um CRI ou CRA depende, então, de três camadas que precisam ser analisadas separadamente — a qualidade do crédito subjacente, a estrutura de garantias e reforços (subordinação, fundo de reserva, coobrigação) e a liquidez do mercado secundário, historicamente fraca para esses papéis. É uma análise de crédito estruturado, não de renda fixa bancária, e o fato de o produto ser distribuído no varejo com a mesma linguagem de LCI e LCA é justamente o problema de adequação que a prova cobra.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-debentures',
    microtemaId: 'm2.1',
    titulo: 'Debêntures: comuns, incentivadas e de infraestrutura',
    objetivo: 'Distinguir os regimes de debênture e identificar de quem é o benefício fiscal em cada um.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'Debênture é dívida de empresa — sem FGC. Na INCENTIVADA o benefício fiscal é do INVESTIDOR pessoa física, que fica isento. Na chamada DE INFRAESTRUTURA o benefício é do EMISSOR, e o investidor pessoa física é tributado normalmente.',
    explicacao: {
      oQueE:
        'Debênture é um título de dívida de médio ou longo prazo emitido por sociedade por ações não financeira, que confere ao titular direito de crédito contra a emissora.',
      porQueImporta:
        'É o principal instrumento de crédito corporativo acessível ao varejo, e o ponto em que o benefício fiscal muda de mãos entre dois regimes com nomes parecidos — distinção que a prova explora e que muda o retorno líquido do cliente.',
      paraQueServe:
        'Permitir que empresas captem diretamente no mercado, sem intermediação bancária, e que investidores acessem crédito corporativo.',
      comoFunciona: [
        'A ESCRITURA DE EMISSÃO define prazo, remuneração, garantias e cláusulas. O AGENTE FIDUCIÁRIO representa os debenturistas e fiscaliza o cumprimento.',
        'NÃO HÁ FGC: o emissor é empresa, não banco. O risco é o de crédito da companhia.',
        'DEBÊNTURE INCENTIVADA: ligada a projetos de infraestrutura, dá ISENÇÃO de imposto de renda ao investidor PESSOA FÍSICA. O benefício é DO INVESTIDOR.',
        'DEBÊNTURE DE INFRAESTRUTURA: regime mais recente em que o benefício fiscal é DO EMISSOR, que deduz. O investidor pessoa física é tributado normalmente.',
        'GARANTIAS escalonam o risco: real, flutuante, quirografária e subordinada — nessa ordem, da mais protegida à que recebe por último.',
      ],
      exemploSimples:
        'Duas debêntures do mesmo projeto de energia, uma incentivada e outra "de infraestrutura". Na primeira o investidor pessoa física não paga IR; na segunda, paga. O nome parecido esconde uma diferença que muda o rendimento líquido.',
      exemploAplicado:
        'Um cliente compara duas debêntures pela taxa anunciada e escolhe a de maior percentual, que é a de infraestrutura. Como ela é tributada e a outra é isenta para ele, a escolha pode ter sido a errada. A conversa correta é sempre sobre o líquido — e, antes disso, sobre qual dos dois regimes é aquele papel.',
      lembrarNaProva: [
        'Debênture não tem FGC — o emissor é empresa.',
        'INCENTIVADA: o benefício fiscal é do INVESTIDOR pessoa física.',
        'DE INFRAESTRUTURA: o benefício é do EMISSOR; o investidor PF é tributado.',
        'Ordem das garantias: real, flutuante, quirografária, subordinada.',
      ],
      revisaoRapida: [
        'Debênture é dívida de empresa; não há FGC.',
        'Escritura define as regras; agente fiduciário representa os credores.',
        'Incentivada isenta o investidor pessoa física.',
        'De infraestrutura beneficia o emissor, não o investidor.',
        'Garantia real protege mais; subordinada, menos.',
      ],
    },
    exemplos: [
      {
        titulo: 'A ordem das garantias',
        corpo:
          'REAL — vinculada a um bem específico, é a mais protegida. FLUTUANTE — privilégio geral sobre o ativo da empresa, mas sem bem determinado. QUIROGRAFÁRIA — sem garantia, concorre com os demais credores. SUBORDINADA — recebe depois de todos, antes só dos acionistas.',
      },
    ],
    conceitoChave:
      'Dois regimes com nomes quase iguais colocam o benefício fiscal em pessoas diferentes — e só um deles chega ao investidor.',
    pontosChave: [
      'Dívida de empresa, sem FGC',
      'Incentivada: isenta o investidor PF',
      'De infraestrutura: beneficia o emissor',
      'Agente fiduciário representa os credores',
      'Real > flutuante > quirografária > subordinada',
    ],
    erroComum:
      'Supor que toda debênture ligada a infraestrutura isenta o investidor. Só a incentivada faz isso; no regime de debênture de infraestrutura quem ganha o benefício é a empresa emissora.',
    alertaProva:
      'Os dois regimes convivem e têm nomes parecidos. Se a questão mencionar benefício ao EMISSOR, está falando da debênture de infraestrutura, e o investidor PF é tributado.',
    tabela: {
      titulo: 'De quem é o benefício fiscal',
      colunas: ['Regime', 'Quem é beneficiado', 'Investidor PF'],
      linhas: [
        ['Debênture comum', 'Ninguém', 'Tributado'],
        ['Debênture incentivada', 'O investidor', 'Isento'],
        ['Debênture de infraestrutura', 'O emissor', 'Tributado'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Na chamada debênture de infraestrutura, o benefício fiscal é atribuído:',
      alternativas: [
        'Ao investidor pessoa física, que fica isento',
        'À empresa emissora, e o investidor pessoa física é tributado normalmente',
        'A ambos, de forma proporcional',
        'Ao agente fiduciário da emissão',
      ],
      correta: 1,
      explicacao:
        'É a diferença entre os dois regimes: na incentivada o benefício vai ao investidor; na de infraestrutura, ao emissor.',
    },
    mapaMental: {
      id: 'mm-deb',
      rotulo: 'Debêntures',
      revisao: true,
      filhos: [
        { id: 'mm-deb-semfgc', rotulo: 'Sem FGC', detalhe: 'Emissor é empresa', revisao: true },
        {
          id: 'mm-deb-regimes',
          rotulo: 'Regimes',
          revisao: true,
          filhos: [
            { id: 'mm-deb-inc', rotulo: 'Incentivada', detalhe: 'Isenta o INVESTIDOR PF', revisao: true },
            { id: 'mm-deb-infra', rotulo: 'De infraestrutura', detalhe: 'Beneficia o EMISSOR', revisao: true },
          ],
        },
        {
          id: 'mm-deb-gar',
          rotulo: 'Garantias',
          detalhe: 'Real > flutuante > quirografária > subordinada',
          revisao: true,
        },
        { id: 'mm-deb-agente', rotulo: 'Agente fiduciário', detalhe: 'Representa os debenturistas' },
      ],
    },
    reexplicacoes: {
      simples:
        'Debênture é emprestar para uma empresa. Não tem FGC. Algumas isentam você de imposto; outras isentam a empresa, não você.',
      exemplo:
        'Duas debêntures do mesmo projeto de energia: numa você não paga IR, na outra paga. O nome é parecido e o resultado no bolso, não.',
      analogia:
        'É como dois descontos com nomes iguais: um sai do seu preço, o outro sai do custo da loja. Só um chega até você.',
      iniciante:
        'Empresas também pegam dinheiro emprestado do público. O papel que representa essa dívida é a debênture.',
    },
    niveis: {
      entenda:
        'Debênture é dívida de empresa e não tem FGC. Na incentivada você fica isento de IR; na de infraestrutura quem ganha o benefício é a empresa.',
      aprofunde:
        'A criação do regime de debênture de infraestrutura ao lado do de incentivada responde a uma crítica técnica ao modelo original: a isenção ao investidor pessoa física é um subsídio caro e mal focalizado, porque parte dele é capturada pelo emissor na forma de taxa menor e parte fica com investidores de alta renda — que são os que mais se beneficiam de isenção de IR. Ao mover o benefício para o emissor, na forma de dedução, o novo regime pretende direcionar o incentivo ao projeto e ampliar a base de investidores, incluindo os institucionais, que não se beneficiavam da isenção de pessoa física. Para o investidor de varejo o efeito prático é direto: os dois papéis competem no mesmo balcão, com nomes quase idênticos, e a taxa nominal maior do regime tributado frequentemente perde para a menor do isento depois do imposto. A comparação exige converter para líquido, e a primeira pergunta — antes de qualquer conta — é saber em qual dos dois regimes aquele papel foi emitido.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-coe',
    microtemaId: 'm2.1',
    titulo: 'COE — Certificado de Operações Estruturadas',
    objetivo: 'Explicar o que a proteção de capital custa e identificar o documento obrigatório de informação.',
    etiquetas: ['ATENCAO', 'PEGADINHA'],
    resumo30s:
      'O COE embala renda fixa e derivativos num só produto. Há duas modalidades: valor nominal PROTEGIDO e valor nominal EM RISCO. A proteção não é grátis — ela é paga com teto de ganho, participação parcial e ausência de FGC.',
    explicacao: {
      oQueE:
        'COE é um certificado emitido por instituição financeira que combina componentes de renda fixa e de derivativos em um único instrumento, com cenários de retorno definidos na emissão.',
      porQueImporta:
        'É vendido como "ganho da bolsa sem risco de perder", e a frase é falsa em dois sentidos: o ganho é limitado e o capital protegido é nominal, não real.',
      paraQueServe:
        'Dar exposição a um ativo ou índice com um perfil de retorno desenhado — normalmente limitando a perda em troca de limitar o ganho.',
      comoFunciona: [
        'VALOR NOMINAL PROTEGIDO: no pior cenário o investidor recebe de volta o valor aplicado, sem correção. VALOR NOMINAL EM RISCO: pode receber menos do que aplicou.',
        'A proteção é comprada com o rendimento: a parte em renda fixa gera o retorno que financia a estrutura de derivativos. Quem paga a proteção é o próprio investidor, com o juro que deixou de receber.',
        'O ganho costuma ser LIMITADO — por teto de rentabilidade, por participação parcial na alta ou por barreira que cancela o ganho se o ativo passar de certo nível.',
        'O DIE — Documento de Informações Essenciais — é obrigatório e traz os cenários de retorno. É nele que o teto e as condições aparecem.',
        'NÃO HÁ COBERTURA DO FGC. E o produto costuma ter liquidez baixa: sair antes do vencimento depende de recompra e a valor de mercado.',
      ],
      exemploSimples:
        'Um COE de capital protegido atrelado a um índice de ações, com participação de 70% na alta e teto de 30%. Se o índice subir 60%, o investidor ganha 30%. Se cair 40%, recebe de volta o valor aplicado — sem correção nenhuma pelo período.',
      exemploAplicado:
        'Um cliente conservador se anima com "capital protegido". O ponto que falta é o custo de oportunidade: se o índice cair, ele recebe de volta o mesmo valor nominal depois de três anos, período em que um pós-fixado simples teria rendido. Proteção do nominal não é proteção do poder de compra, e essa diferença é o preço real da estrutura.',
      lembrarNaProva: [
        'Duas modalidades: valor nominal PROTEGIDO e EM RISCO.',
        'Capital protegido é NOMINAL, sem correção.',
        'O DIE é obrigatório e traz os cenários.',
        'Não há cobertura do FGC.',
      ],
      revisaoRapida: [
        'COE combina renda fixa e derivativos num só papel.',
        'Protegido devolve o nominal; em risco pode devolver menos.',
        'O ganho costuma ter teto ou participação parcial.',
        'DIE é o documento obrigatório com os cenários.',
        'Sem FGC e com liquidez baixa antes do vencimento.',
      ],
    },
    exemplos: [
      {
        titulo: 'O custo invisível da proteção',
        corpo:
          'Três anos de capital protegido que terminam no zero a zero devolvem o mesmo valor aplicado. Nesse período, um pós-fixado teria rendido e a inflação teria corroído o poder de compra do valor devolvido. A perda não aparece no extrato porque é custo de oportunidade — mas é real.',
      },
    ],
    conceitoChave:
      'Capital protegido protege o número, não o poder de compra — e o ganho vem limitado para pagar essa proteção.',
    pontosChave: [
      'Nominal protegido × nominal em risco',
      'Proteção é do valor nominal',
      'Ganho com teto ou participação parcial',
      'DIE obrigatório',
      'Sem FGC e sem liquidez',
    ],
    erroComum:
      'Entender "capital protegido" como "sem risco". O risco de perda nominal é limitado, mas permanecem o custo de oportunidade, a inflação do período, o risco de crédito do emissor e a falta de liquidez.',
    alertaProva:
      'Se a alternativa disser que o COE tem cobertura do FGC ou que garante rendimento, está errada. O DIE é o documento que a prova costuma citar.',
    tabela: {
      titulo: 'As duas modalidades',
      colunas: ['Modalidade', 'Pior cenário', 'Contrapartida'],
      linhas: [
        ['Valor nominal protegido', 'Recebe o valor aplicado, sem correção', 'Ganho mais limitado'],
        ['Valor nominal em risco', 'Pode receber menos que o aplicado', 'Potencial de ganho maior'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Em um COE de valor nominal protegido, no pior cenário o investidor:',
      alternativas: [
        'Recebe o valor aplicado corrigido pela inflação do período',
        'Recebe de volta o valor aplicado, sem qualquer correção',
        'Recebe o valor aplicado acrescido do CDI do período',
        'Tem a perda coberta pelo FGC',
      ],
      correta: 1,
      explicacao:
        'A proteção é do valor NOMINAL. O custo de oportunidade e a inflação do período correm por conta do investidor, e não há FGC.',
    },
    mapaMental: {
      id: 'mm-coe',
      rotulo: 'COE',
      revisao: true,
      filhos: [
        {
          id: 'mm-coe-mod',
          rotulo: 'Modalidades',
          revisao: true,
          filhos: [
            { id: 'mm-coe-prot', rotulo: 'Nominal protegido', detalhe: 'Devolve o aplicado, sem correção', revisao: true },
            { id: 'mm-coe-risco', rotulo: 'Nominal em risco', detalhe: 'Pode devolver menos' },
          ],
        },
        { id: 'mm-coe-teto', rotulo: 'Ganho limitado', detalhe: 'Teto ou participação parcial', revisao: true },
        { id: 'mm-coe-die', rotulo: 'DIE', detalhe: 'Documento obrigatório com os cenários', revisao: true },
        { id: 'mm-coe-fgc', rotulo: 'Sem FGC', detalhe: 'E com liquidez baixa', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'É um pacote que junta renda fixa com aposta em um índice. Alguns devolvem o que você aplicou se der errado — mas só o valor, sem juros.',
      exemplo:
        'O índice sobe 60% e você ganha 30%, porque havia teto. O índice cai 40% e você recebe de volta exatamente o que aplicou, três anos depois.',
      analogia:
        'É um seguro que você paga com o próprio rendimento: em troca de não perder o valor, você abre mão de parte do ganho.',
      iniciante:
        'É um investimento montado com regras específicas de ganho e perda, escritas antes. Elas ficam num documento chamado DIE.',
    },
    niveis: {
      entenda:
        'O COE mistura renda fixa e derivativos. O capital protegido devolve o valor aplicado sem correção, e o ganho vem com teto.',
      aprofunde:
        'A estrutura típica de um COE de capital protegido é mais simples do que parece: a maior parte do recurso vai para um título de renda fixa dimensionado para valer, no vencimento, exatamente o valor aplicado; o restante — que é o rendimento que aquele título geraria — compra opções sobre o ativo de referência. Essa decomposição explica tudo o mais. Explica por que a proteção existe: o principal está garantido pelo componente de renda fixa. Explica por que o ganho é limitado: o orçamento de prêmio disponível para comprar opções é pequeno, e ampliá-lo exigiria reduzir a proteção. E explica por que o produto fica menos atrativo quando os juros caem: com juro baixo, sobra menos para o componente de opções, e o teto de ganho precisa cair. O ponto que a análise de adequação precisa capturar é que o investidor poderia montar a mesma estrutura separadamente, com custo transparente — o COE embala isso num único papel, com a margem do emissor embutida e sem exibi-la, e é por essa opacidade de preço que o produto é mais criticado do que pela estrutura em si.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-risco-credito',
    microtemaId: 'm2.1',
    titulo: 'Risco de crédito, rating e spread',
    objetivo: 'Ler o prêmio de um título como preço de risco e distinguir os três riscos da renda fixa.',
    etiquetas: ['ESSENCIAL', 'ENTENDER'],
    resumo30s:
      'Todo prêmio sobre o título público é preço de risco. Renda fixa tem três riscos, e eles são independentes: crédito (o emissor não paga), mercado (o preço oscila) e liquidez (não há a quem vender).',
    explicacao: {
      oQueE:
        'Risco de crédito é a possibilidade de o emissor não honrar o pagamento. O spread é o quanto o mercado exige a mais, sobre o título público de mesmo prazo, para assumir esse risco.',
      porQueImporta:
        'É a ferramenta que transforma "esse paga mais" em "esse paga mais porque...". Sem ela, o cliente escolhe por taxa, que é escolher pelo risco sem saber.',
      paraQueServe:
        'Comparar títulos de emissores diferentes e explicar por que o mais rentável não é o melhor.',
      comoFunciona: [
        'SPREAD DE CRÉDITO é a diferença entre a taxa do título e a do título público de prazo equivalente. Ele é o preço do risco, cobrado pelo mercado.',
        'RATING é a opinião de uma agência sobre a capacidade de pagamento do emissor. Divide-se em GRAU DE INVESTIMENTO e GRAU ESPECULATIVO.',
        'Rating é opinião, não garantia. Ele muda, às vezes tarde, e não substitui a análise do investidor.',
        'RISCO DE MERCADO é a oscilação de preço por mudança de juros — é a marcação a mercado, e independe da qualidade do emissor.',
        'RISCO DE LIQUIDEZ é não encontrar comprador a preço justo. Papéis de crédito privado no varejo costumam ter mercado secundário fraco, e sair antes custa deságio.',
      ],
      exemploSimples:
        'Um CDB de banco grande paga 100% do CDI e outro, de banco pequeno, paga 120%. Os 20 pontos de diferença são o spread: o mercado cobrando mais para assumir o risco de crédito maior.',
      exemploAplicado:
        'Um cliente quer concentrar a reserva num CDB de banco pequeno a 130% do CDI, "porque tem FGC". O FGC cobre até um limite por CPF e por instituição, e a cobertura não é instantânea — há processo e prazo. Para dinheiro que precisa estar disponível amanhã, prêmio de crédito é exatamente o risco que não se deve assumir.',
      lembrarNaProva: [
        'Spread é o preço do risco, medido contra o título público.',
        'Rating é opinião de agência, não garantia.',
        'Os três riscos são independentes: crédito, mercado e liquidez.',
        'Risco de mercado existe mesmo em título do Tesouro.',
      ],
      revisaoRapida: [
        'Spread de crédito: prêmio sobre o título público de mesmo prazo.',
        'Rating separa grau de investimento de especulativo.',
        'Rating muda e pode chegar tarde.',
        'Risco de mercado é a marcação a mercado.',
        'Risco de liquidez é não achar comprador a preço justo.',
      ],
    },
    exemplos: [
      {
        titulo: 'Os três riscos, separados',
        corpo:
          'Um Tesouro Prefixado tem risco de crédito quase nulo e risco de mercado alto. Um CDB de liquidez diária de banco pequeno tem risco de crédito relevante e risco de mercado baixo. Um CRA tem os três. Confundi-los leva a achar que "renda fixa não perde".',
      },
    ],
    conceitoChave:
      'Taxa acima do título público é sempre prêmio de risco — a pergunta não é se ela compensa, é de qual risco ela é o preço.',
    pontosChave: [
      'Spread = preço do risco de crédito',
      'Rating é opinião, não garantia',
      'Crédito, mercado e liquidez são independentes',
      'Risco de mercado existe no Tesouro',
      'Crédito privado tem secundário fraco',
    ],
    erroComum:
      'Tratar o FGC como se eliminasse o risco de crédito. Ele limita a perda até um teto por CPF e por instituição, e o pagamento tem processo e prazo — não é liquidez imediata.',
    alertaProva:
      'Questão que descreve um título pagando bem acima do mercado está sinalizando risco, não oportunidade. A resposta correta quase sempre nomeia qual risco é esse.',
    tabela: {
      titulo: 'Os três riscos da renda fixa',
      colunas: ['Risco', 'O que acontece', 'Como se reduz'],
      linhas: [
        ['Crédito', 'O emissor não paga', 'Emissor melhor, diversificação, FGC'],
        ['Mercado', 'O preço oscila com os juros', 'Prazo menor, pós-fixado, carregar ao vencimento'],
        ['Liquidez', 'Não há comprador a preço justo', 'Produtos com recompra e mercado ativo'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Um CDB de banco pequeno paga 120% do CDI enquanto o de um banco grande paga 100%. Os 20 pontos de diferença representam:',
      alternativas: [
        'Uma ineficiência do mercado que pode ser explorada',
        'O spread de crédito: o preço cobrado pelo risco maior do emissor',
        'A diferença de tributação entre os dois emissores',
        'O custo da cobertura do FGC repassado ao investidor',
      ],
      correta: 1,
      explicacao:
        'Taxa acima do mercado é prêmio de risco. O banco pequeno paga mais porque precisa compensar o risco de crédito maior.',
    },
    mapaMental: {
      id: 'mm-rc',
      rotulo: 'Riscos da renda fixa',
      revisao: true,
      filhos: [
        {
          id: 'mm-rc-credito',
          rotulo: 'Crédito',
          detalhe: 'O emissor não paga',
          revisao: true,
          filhos: [
            { id: 'mm-rc-spread', rotulo: 'Spread', detalhe: 'Prêmio sobre o título público', revisao: true },
            { id: 'mm-rc-rating', rotulo: 'Rating', detalhe: 'Opinião, não garantia', revisao: true },
          ],
        },
        { id: 'mm-rc-mercado', rotulo: 'Mercado', detalhe: 'Marcação a mercado · existe no Tesouro', revisao: true },
        { id: 'mm-rc-liquidez', rotulo: 'Liquidez', detalhe: 'Não achar comprador a preço justo', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'Quem paga mais está pedindo que você corra mais risco. A diferença de taxa é o preço desse risco.',
      exemplo:
        'CDB de banco grande a 100% do CDI e de banco pequeno a 120%. Os 20 pontos são o que o mercado cobra pelo risco extra.',
      analogia:
        'É o mesmo que juros de empréstimo: quem tem histórico ruim paga mais. Aqui você está do lado de quem empresta.',
      iniciante:
        'Em renda fixa dá para perder de três jeitos: o emissor não pagar, o preço cair antes do vencimento, ou não achar quem compre.',
    },
    niveis: {
      entenda:
        'Taxa maior é preço de risco. Renda fixa tem três riscos independentes: o emissor não pagar, o preço oscilar e não haver comprador.',
      aprofunde:
        'O spread de crédito não remunera apenas a probabilidade de inadimplência: ele embute também a PERDA ESPERADA — probabilidade multiplicada pela severidade, já que um calote raramente significa perder tudo — mais um prêmio de risco pela incerteza em torno dessa estimativa e um componente de iliquidez. Decompor o spread é o trabalho da análise de crédito, e é por isso que dois papéis com o mesmo rating podem negociar com prêmios bem diferentes: mudam a garantia, a estrutura e a profundidade do mercado secundário. O rating tem limitações conhecidas que a prova não cobra mas o profissional precisa carregar: ele é retrospectivo por construção, tende a se mover depois do preço de mercado, e o modelo de remuneração das agências — pagas pelo emissor — cria um conflito de interesses documentado. Na prática, o spread negociado costuma antecipar o rebaixamento. Para o investidor de varejo, a conclusão operacional é simples e vale mais que qualquer análise: diversificar emissores é a única proteção que não depende de acertar a avaliação de crédito de ninguém.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },
]
