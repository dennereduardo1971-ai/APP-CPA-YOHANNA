import type { Conceito } from '../types'

/**
 * MICROTEMA 1.1 — Sistema financeiro nacional (complemento).
 *
 * O arquivo `m1-sfn.ts` já traz o ramo mais visível do SFN: CMN, Bacen e CVM.
 * Este complemento fecha o mapa por onde a maioria do material passa correndo
 * — os outros dois ramos normativos (seguros e previdência fechada) e a
 * camada dos operadores, que é onde o cliente de fato encosta.
 *
 * Fontes primárias lidas no texto vigente, em 25/08/2026:
 *
 * | Fonte | O que sustenta |
 * |---|---|
 * | Decreto-Lei 73/1966, arts. 32, 33 e 36 | CNSP e Susep: competência e composição |
 * | Lei 14.711/2023, art. 18, II | Revoga o inciso VI do art. 33 do DL 73 — tira a CVM do CNSP |
 * | LC 213/2025 | Traz a proteção patrimonial mutualista para dentro do CNSP/Susep |
 * | LC 109/2001, arts. 4º, 5º, 14, 21 e 31 a 36 | EFPC × EAPC e o desenho do regulador |
 * | Lei 12.865/2013, art. 6º | Instituição de pagamento: o que é e o que lhe é vedado |
 *
 * Dois achados que só apareceram por ler a fonte, e que contrariam material
 * corrente de cursinho, estão registrados nos `alertaProva` das aulas.
 */

export const CONCEITOS_1_1: Conceito[] = [
  {
    id: 'c-cnsp-cnpc',
    microtemaId: 'm1.1',
    titulo: 'Seguros e previdência: os outros dois ramos normativos',
    objetivo:
      'Situar CNSP/Susep e CNPC/Previc ao lado de CMN/Bacen/CVM e dizer quem regula cada produto.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'O SFN tem mais de um ramo normativo. Moeda e crédito: CMN e Bacen. Valores mobiliários: CMN e CVM. Seguros, capitalização e previdência ABERTA: CNSP e Susep. Previdência FECHADA, o fundo de pensão: CNPC e Previc.',
    explicacao: {
      oQueE:
        'CNSP e CNPC são conselhos normativos — fixam a política e as regras. Susep e Previc são as autarquias que fiscalizam e aplicam penalidade. Cada dupla cuida de um pedaço do sistema que não pertence nem ao Bacen nem à CVM.',
      porQueImporta:
        'Porque PGBL e VGBL, que são produto de balcão de banco, não são regulados pelo Bacen nem pela CVM: são da Susep. Quem só decora "CMN, Bacen, CVM" erra a pergunta mais comum do microtema — quem responde por previdência aberta.',
      paraQueServe:
        'Saber a quem o cliente reclama, quem autoriza o produto e quem pune quem — e não confundir os dois tipos de previdência complementar, que têm reguladores diferentes.',
      comoFunciona: [
        'RAMO 1 — moeda, crédito e câmbio: o CMN normatiza, o Bacen executa e fiscaliza. Bancos, cooperativas, financeiras, instituições de pagamento.',
        'RAMO 2 — valores mobiliários: o CMN também normatiza no alto nível, e a CVM regula e fiscaliza. Ações, debêntures, fundos, e a distribuição desses papéis.',
        'RAMO 3 — seguros privados: o CNSP fixa diretrizes e a Susep fiscaliza. Abrange seguros, resseguro, capitalização e previdência complementar ABERTA (EAPC) — é aqui que moram PGBL e VGBL.',
        'RAMO 4 — previdência complementar FECHADA: o CNPC normatiza e a Previc supervisiona. São os fundos de pensão de empresa ou de entidade de classe (EFPC), fechados a quem tem vínculo.',
        'A divisória decisiva entre os dois últimos é o ACESSO: se qualquer pessoa pode comprar num balcão, é aberta e é Susep; se só entra quem tem vínculo com patrocinador ou instituidor, é fechada e é Previc.',
      ],
      exemploSimples:
        'Um cliente compra um VGBL com o gerente do banco. O produto é de seguradora, autorizado pela Susep. O banco só distribui — o Bacen fiscaliza o banco, não o plano.',
      exemploAplicado:
        'Um funcionário de estatal tem duas coisas com nome parecido: o fundo de pensão da empresa e um PGBL que abriu por conta própria. O primeiro é EFPC, sem fim lucrativo, regulado pelo CNPC e supervisionado pela Previc, e ele só participa porque é empregado. O segundo é EAPC, operado por entidade com fim lucrativo, sob CNSP e Susep, e continuaria valendo se ele pedisse demissão amanhã. Mesma finalidade econômica, dois sistemas jurídicos distintos — e a portabilidade entre eles tem regra própria justamente por isso.',
      lembrarNaProva: [
        'Previdência ABERTA (PGBL, VGBL) → CNSP e Susep.',
        'Previdência FECHADA (fundo de pensão) → CNPC e Previc.',
        'Conselho normatiza; autarquia fiscaliza e pune.',
        'Capitalização (título de capitalização) é Susep, não Bacen.',
        'Resseguro também é CNSP/Susep, desde a LC 126/2007.',
      ],
      revisaoRapida: [
        'Ramos normativos: CMN, CNSP e CNPC.',
        'Executores: Bacen e CVM, Susep, Previc.',
        'Aberta é Susep; fechada é Previc.',
        'O critério é o acesso, não o nome do produto.',
        'Capitalização e resseguro moram na Susep.',
      ],
    },
    exemplos: [
      {
        titulo: 'A pergunta que resolve',
        corpo:
          'Diante de qualquer produto previdenciário, pergunte: qualquer pessoa pode contratar? Se sim, é aberta — entidade aberta ou seguradora, sob Susep. Se só entra quem tem vínculo com a empresa ou com a associação, é fechada — EFPC, sob Previc.',
      },
      {
        titulo: 'O que a LC 213/2025 trouxe para dentro',
        corpo:
          'As chamadas associações de proteção veicular operaram anos fora do sistema de seguros. A LC 213/2025 criou a figura da proteção patrimonial mutualista e a submeteu ao CNSP e à Susep, com exigência de administradora autorizada. Deixou de ser mercado paralelo.',
      },
    ],
    conceitoChave:
      'O SFN não tem um regulador — tem ramos. Errar o ramo é errar quem autoriza, quem fiscaliza e a quem o cliente reclama.',
    pontosChave: [
      'CNSP normatiza seguros; Susep fiscaliza',
      'CNPC normatiza previdência fechada; Previc fiscaliza',
      'Aberta é Susep, fechada é Previc',
      'Capitalização e resseguro são Susep',
      'O critério de divisão é o acesso',
    ],
    erroComum:
      'Dizer que PGBL e VGBL são fiscalizados pelo Banco Central porque são vendidos no banco. O banco é apenas o distribuidor: o plano é de entidade aberta e responde à Susep.',
    alertaProva:
      'Cuidado com a composição do CNSP. A Lei 14.711/2023 revogou o inciso VI do art. 33 do Decreto-Lei 73/1966 e RETIROU o representante da CVM do conselho — muito material ainda repete a lista antiga, com seis membros. Decorar a lista é o caminho errado: o que se cobra é que o CNSP é presidido pelo Ministro da Fazenda e que o Superintendente da Susep tem assento nele.',
    tabela: {
      titulo: 'Quem regula o quê',
      colunas: ['Mercado', 'Normatiza', 'Fiscaliza'],
      linhas: [
        ['Moeda, crédito e câmbio', 'CMN', 'Bacen'],
        ['Valores mobiliários', 'CMN', 'CVM'],
        ['Seguros, resseguro e capitalização', 'CNSP', 'Susep'],
        ['Previdência complementar aberta', 'CNSP', 'Susep'],
        ['Previdência complementar fechada', 'CNPC', 'Previc'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Um cliente contrata um PGBL na agência do seu banco. A entidade responsável pela fiscalização desse plano é:',
      alternativas: [
        'O Banco Central, porque o plano foi contratado em uma instituição financeira',
        'A Susep, porque o plano é operado por entidade aberta de previdência complementar',
        'A Previc, porque todo plano de previdência complementar é supervisionado por ela',
        'A CVM, porque o plano investe em fundos de investimento',
      ],
      correta: 1,
      explicacao:
        'O banco apenas distribui. O PGBL é plano de entidade aberta, normatizado pelo CNSP e fiscalizado pela Susep.',
    },
    mapaMental: {
      id: 'mm-snsp',
      rotulo: 'Ramos normativos do SFN',
      revisao: true,
      filhos: [
        {
          id: 'mm-snsp-moeda',
          rotulo: 'Moeda e crédito',
          detalhe: 'CMN normatiza · Bacen fiscaliza',
          revisao: true,
        },
        {
          id: 'mm-snsp-vm',
          rotulo: 'Valores mobiliários',
          detalhe: 'CMN e CVM',
          revisao: true,
        },
        {
          id: 'mm-snsp-seg',
          rotulo: 'Seguros privados',
          detalhe: 'CNSP normatiza · Susep fiscaliza',
          revisao: true,
          filhos: [
            { id: 'mm-snsp-seg-cap', rotulo: 'Capitalização', detalhe: 'Título de capitalização' },
            { id: 'mm-snsp-seg-res', rotulo: 'Resseguro', detalhe: 'LC 126/2007' },
            {
              id: 'mm-snsp-seg-eapc',
              rotulo: 'Previdência aberta',
              detalhe: 'PGBL e VGBL — acesso livre',
              revisao: true,
            },
            {
              id: 'mm-snsp-seg-mut',
              rotulo: 'Proteção mutualista',
              detalhe: 'Trazida pela LC 213/2025',
            },
          ],
        },
        {
          id: 'mm-snsp-fech',
          rotulo: 'Previdência fechada',
          detalhe: 'CNPC normatiza · Previc fiscaliza',
          revisao: true,
          filhos: [
            {
              id: 'mm-snsp-fech-efpc',
              rotulo: 'EFPC',
              detalhe: 'Fundo de pensão — exige vínculo',
              revisao: true,
            },
          ],
        },
      ],
    },
    reexplicacoes: {
      simples:
        'O sistema financeiro tem áreas separadas. Banco é com o Banco Central. Bolsa é com a CVM. Seguro e previdência de banco é com a Susep. Fundo de pensão de empresa é com a Previc.',
      exemplo:
        'O VGBL do seu banco não é fiscalizado pelo Banco Central: quem responde por ele é a Susep, porque quem o opera é uma entidade aberta de previdência.',
      analogia:
        'É como órgão de trânsito: o municipal cuida da via urbana, o estadual da rodovia estadual, o federal da BR. Todos são trânsito, mas reclamar no lugar errado não resolve nada.',
      iniciante:
        'Cada tipo de produto financeiro tem um órgão que manda nele. Saber qual é o órgão é saber a quem cobrar quando algo dá errado.',
    },
    niveis: {
      entenda:
        'Além do CMN/Bacen/CVM existem mais dois ramos: CNSP/Susep para seguros e previdência aberta, e CNPC/Previc para os fundos de pensão fechados.',
      aprofunde:
        'A separação não é arbitrária: ela acompanha a natureza jurídica de quem opera. A entidade aberta é sociedade anônima com fim lucrativo, vende no mercado e por isso precisa de tutela de consumo e de solvência típica de seguradora — daí a Susep, que já supervisiona provisões técnicas e reservas atuariais. A entidade fechada não vende nada: é criada por um patrocinador ou instituidor, não tem fim lucrativo e os participantes são, em última instância, os donos do próprio plano. O risco ali não é de má venda, é de desequilíbrio atuarial e de desvio na gestão dos ativos — problema de governança, que é o que a Previc supervisiona. Isso explica assimetrias que parecem gratuitas: o déficit de um plano fechado pode ser equacionado com contribuição extraordinária dos participantes e do patrocinador (LC 109/2001, art. 21), o que seria impensável num produto de prateleira; e a portabilidade de recursos de uma entidade fechada para uma aberta só é admitida se a integralidade for usada para contratar renda mensal vitalícia ou por prazo determinado de no mínimo quinze anos (art. 14, § 4º), justamente para impedir que a saída do regime fechado vire saque disfarçado.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-operadores-sfn',
    microtemaId: 'm1.1',
    titulo: 'Os operadores: quem pode fazer o quê',
    objetivo:
      'Distinguir as instituições que operam no SFN pela atividade que a norma permite a cada uma.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'Só instituição financeira capta depósito à vista e empresta recursos de terceiros. Banco de investimento não tem conta corrente. Corretora e distribuidora fazem hoje a mesma coisa. Instituição de pagamento NÃO é instituição financeira — e conta de pagamento não tem FGC.',
    explicacao: {
      oQueE:
        'Operadores são as instituições que executam as operações do sistema: captam, emprestam, intermediam, custodiam, liquidam e pagam. Cada uma tem um perímetro de atividade definido em lei ou em norma do Bacen e da CVM.',
      porQueImporta:
        'A prova cobra o perímetro, não o nome. Uma alternativa errada quase sempre atribui a uma instituição uma atividade que ela não pode exercer — e o cliente que confia numa conta de pagamento achando que tem FGC descobre a diferença no pior momento.',
      paraQueServe:
        'Responder a três perguntas práticas: essa instituição pode receber meu depósito? esse saldo tem garantia do FGC? quem autorizou essa empresa a funcionar?',
      comoFunciona: [
        'BANCO COMERCIAL: capta depósito à vista e concede crédito de curto e médio prazo. É o grupo que cria moeda escritural, e por isso está sujeito a recolhimento compulsório.',
        'BANCO DE INVESTIMENTO: NÃO capta depósito à vista. Trabalha com depósito a prazo, repasses, distribuição de emissões, fusões e aquisições e administração de recursos.',
        'BANCO MÚLTIPLO: reúne no mesmo CNPJ pelo menos duas carteiras, sendo uma delas comercial ou de investimento. É a forma da maioria dos bancos grandes do país.',
        'COOPERATIVA DE CRÉDITO: é instituição financeira, capta e empresta, mas opera para os associados. Seus depósitos são cobertos pelo FGCoop, não pelo FGC.',
        'CTVM e DTVM: intermediam e distribuem valores mobiliários, administram carteiras e clubes, operam câmbio. Desde 2009 a DTVM também pode operar diretamente nos mercados organizados — na prática, a distinção clássica entre as duas deixou de existir.',
        'INSTITUIÇÃO DE PAGAMENTO: gere conta de pagamento, emite instrumento de pagamento e credencia estabelecimentos. É autorizada pelo Bacen, mas a Lei 12.865/2013 lhe veda as atividades privativas de instituição financeira — não capta depósito nem empresta recurso de terceiro por conta própria.',
      ],
      exemploSimples:
        'A conta de uma fintech de pagamento e a conta corrente de um banco parecem iguais na tela do celular. Só uma das duas é depósito — e só o depósito tem FGC.',
      exemploAplicado:
        'Uma empresa de maquininha oferece antecipação de recebíveis ao lojista. Isso não é empréstimo: é a compra dos direitos creditórios que o próprio arranjo gerou, atividade que cabe no credenciamento e não invade o perímetro da instituição financeira. Se a mesma empresa oferecesse capital de giro com recursos captados de terceiros, precisaria de autorização como instituição financeira — e é essa a fronteira que muitos grupos atravessam constituindo uma sociedade de crédito direto dentro do próprio grupo, justamente porque a instituição de pagamento sozinha não pode fazê-lo.',
      lembrarNaProva: [
        'Banco de investimento não capta depósito à vista.',
        'Banco múltiplo precisa de ao menos duas carteiras, uma delas comercial ou de investimento.',
        'Cooperativa de crédito tem FGCoop, não FGC.',
        'Conta de pagamento não é depósito e não tem FGC.',
        'CTVM e DTVM têm hoje o mesmo escopo operacional.',
      ],
      revisaoRapida: [
        'Depósito à vista é privativo de instituição financeira.',
        'Investimento capta a prazo, não à vista.',
        'Múltiplo é a soma de carteiras, não um tipo novo.',
        'FGCoop cobre cooperativa; FGC cobre banco.',
        'Instituição de pagamento não é instituição financeira.',
      ],
    },
    exemplos: [
      {
        titulo: 'O teste do perímetro',
        corpo:
          'Pergunte sempre: essa instituição capta recurso do público para emprestar por conta própria? Se sim, é instituição financeira e precisa de autorização como tal. Se apenas movimenta pagamento e guarda saldo em moeda eletrônica, é instituição de pagamento — e o saldo, por norma do Bacen, fica segregado em conta no próprio Bacen ou em título público, o que protege o cliente da falência da fintech, mas não é FGC.',
      },
    ],
    conceitoChave:
      'Toda instituição do SFN é definida pelo que a norma lhe permite fazer — e a garantia do cliente segue a atividade, não a aparência do aplicativo.',
    pontosChave: [
      'Depósito à vista é privativo',
      'Investimento não tem conta corrente',
      'Múltiplo é soma de carteiras',
      'Cooperativa vai para o FGCoop',
      'Pagamento não é instituição financeira',
    ],
    erroComum:
      'Tratar saldo em conta de pagamento como se fosse depósito coberto pelo FGC. O saldo é protegido por segregação patrimonial imposta pelo Bacen, que é outra coisa: não há fundo garantidor pagando até um limite.',
    alertaProva:
      'A distinção "corretora opera em bolsa, distribuidora não" está desatualizada desde 2009, quando Bacen e CVM autorizaram as DTVM a operar diretamente nos mercados organizados. Se uma alternativa apoiar-se nessa diferença, desconfie: hoje as duas têm o mesmo escopo, e o que restou é diferença histórica de constituição.',
    tabela: {
      titulo: 'Perímetro por instituição',
      colunas: ['Instituição', 'Depósito à vista', 'Garantia do saldo'],
      linhas: [
        ['Banco comercial ou múltiplo com carteira comercial', 'Sim', 'FGC'],
        ['Banco de investimento', 'Não', 'FGC nos produtos elegíveis'],
        ['Cooperativa de crédito', 'Sim, ao associado', 'FGCoop'],
        ['CTVM e DTVM', 'Não', 'Recurso do cliente fica segregado'],
        ['Instituição de pagamento', 'Não', 'Segregação patrimonial, sem FGC'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Sobre as instituições de pagamento, é correto afirmar que:',
      alternativas: [
        'São instituições financeiras autorizadas pelo Banco Central a captar depósitos',
        'Podem conceder crédito com recursos captados do público, como um banco',
        'Não são instituições financeiras e não podem exercer atividades privativas destas',
        'Têm o saldo das contas de pagamento coberto pelo FGC até R$ 250 mil',
      ],
      correta: 2,
      explicacao:
        'A Lei 12.865/2013, art. 6º, § 2º, veda às instituições de pagamento as atividades privativas de instituição financeira. O saldo é protegido por segregação, não pelo FGC.',
    },
    mapaMental: {
      id: 'mm-oper',
      rotulo: 'Operadores do SFN',
      revisao: true,
      filhos: [
        {
          id: 'mm-oper-if',
          rotulo: 'Instituições financeiras',
          detalhe: 'Captam e emprestam',
          revisao: true,
          filhos: [
            {
              id: 'mm-oper-if-com',
              rotulo: 'Banco comercial',
              detalhe: 'Depósito à vista',
              revisao: true,
            },
            {
              id: 'mm-oper-if-inv',
              rotulo: 'Banco de investimento',
              detalhe: 'Sem conta corrente',
              revisao: true,
            },
            {
              id: 'mm-oper-if-mult',
              rotulo: 'Banco múltiplo',
              detalhe: 'Duas carteiras ou mais',
            },
            { id: 'mm-oper-if-coop', rotulo: 'Cooperativa', detalhe: 'FGCoop', revisao: true },
          ],
        },
        {
          id: 'mm-oper-dist',
          rotulo: 'Sistema de distribuição',
          detalhe: 'Intermedeia valor mobiliário',
          filhos: [
            {
              id: 'mm-oper-dist-ctvm',
              rotulo: 'CTVM e DTVM',
              detalhe: 'Mesmo escopo desde 2009',
              revisao: true,
            },
          ],
        },
        {
          id: 'mm-oper-pag',
          rotulo: 'Instituição de pagamento',
          detalhe: 'Não é instituição financeira',
          revisao: true,
          filhos: [
            {
              id: 'mm-oper-pag-fgc',
              rotulo: 'Sem FGC',
              detalhe: 'Protegida por segregação',
              revisao: true,
            },
          ],
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Cada instituição só pode fazer o que a norma deixa. Banco de investimento não abre conta corrente, e a conta de uma fintech de pagamento não tem FGC.',
      exemplo:
        'Duas telas idênticas no celular: a conta do banco tem FGC até R$ 250 mil; a conta da fintech de pagamento não tem — o dinheiro fica separado, que é proteção de outro tipo.',
      analogia:
        'É como habilitação: quem tem categoria B dirige carro, não caminhão. O veículo pode parecer grande, mas a permissão é que define o que se pode conduzir.',
      iniciante:
        'Nem toda empresa que guarda seu dinheiro é banco. O que muda é o que ela pode fazer com esse dinheiro e quem garante se ela quebrar.',
    },
    niveis: {
      entenda:
        'Cada operador tem um perímetro. Banco de investimento não capta à vista, cooperativa tem FGCoop e instituição de pagamento não é instituição financeira.',
      aprofunde:
        'A fronteira entre instituição de pagamento e instituição financeira sustenta boa parte da arquitetura das fintechs brasileiras. Como a Lei 12.865/2013 veda à instituição de pagamento a atividade privativa de instituição financeira, um grupo que queira ofertar crédito precisa de uma segunda licença — daí a proliferação das Sociedades de Crédito Direto e das Sociedades de Empréstimo entre Pessoas criadas pela Resolução CMN 4.656/2018. A distinção tem consequência prudencial concreta: os recursos mantidos em conta de pagamento pré-paga precisam ser integralmente segregados em conta no Bacen ou em título público federal, e por isso não sustentam operação de crédito. Isso protege o usuário da falência da fintech de um jeito que, em um aspecto, é mais direto que o FGC — o recurso não integra a massa falida —, mas cobra um preço: não há remuneração automática desse saldo, nem cobertura de um fundo quando o problema é fraude ou falha operacional em vez de insolvência. Chamar isso de "FGC das fintechs" é errado nos dois sentidos.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 9,
  },
]
