import type { Conceito } from '../types'

/**
 * MICROTEMA 1.4 — Regulação e infraestrutura de mercado.
 *
 * Aqui mora a distinção que a banca mais explora no macrotema 1: REGULAÇÃO
 * ESTATAL (CVM, BACEN, SUSEP, PREVIC — poder de polícia, adesão obrigatória)
 * é coisa diferente de AUTORREGULAÇÃO (ANBIMA — contrato privado, adesão
 * voluntária). E infraestrutura — onde o ativo é registrado, custodiado e
 * liquidado — é uma terceira camada, que não regula ninguém: opera.
 *
 * NOTA EDITORIAL: a lista nominal dos Códigos ANBIMA e o rol de penalidades
 * são revistos periodicamente. As aulas trazem a NATUREZA de cada instrumento
 * e a lógica das sanções, sem fixar rol que envelhece (regra 4 do CLAUDE.md).
 */

export const CONCEITOS_1_4: Conceito[] = [
  {
    id: 'c-autorregulacao',
    microtemaId: 'm1.4',
    titulo: 'Autorregulação e os Códigos ANBIMA',
    objetivo: 'Distinguir autorregulação de regulação estatal e identificar o alcance das sanções da ANBIMA.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'A ANBIMA é entidade privada. Sua autorregulação vale por adesão voluntária, e as sanções são contratuais — advertência, multa, desligamento. Ela NÃO substitui a CVM nem afasta a sanção estatal.',
    explicacao: {
      oQueE:
        'Autorregulação é a criação e a fiscalização de regras pelos próprios participantes do mercado, organizados em uma entidade privada, em complemento — nunca em substituição — à regulação estatal.',
      porQueImporta:
        'É o que sustenta o padrão de conduta na distribuição de produtos de investimento no Brasil. O selo ANBIMA numa lâmina e a exigência de certificação para atender cliente nascem daí, não de lei.',
      paraQueServe:
        'Elevar o padrão do mercado com regras mais detalhadas e mais rápidas de atualizar do que a norma estatal, e criar um foro técnico de fiscalização entre pares.',
      comoFunciona: [
        'A ANBIMA é ASSOCIAÇÃO PRIVADA. Não é órgão público e não tem poder de polícia.',
        'A vinculação é por ADESÃO VOLUNTÁRIA aos Códigos de Regulação e Melhores Práticas. Aderindo, a instituição se obriga contratualmente.',
        'As sanções são de natureza CONTRATUAL: advertência, multa e desligamento da associação. Não há prisão, não há inabilitação estatal.',
        'A autorregulação NÃO afasta a competência da CVM. A mesma conduta pode ser punida nas duas esferas, de forma independente.',
        'Os Códigos disciplinam áreas distintas — distribuição de produtos, administração e gestão de recursos de terceiros, certificação de profissionais, ofertas públicas — e são revistos periodicamente.',
      ],
      exemploSimples:
        'Uma distribuidora aderente descumpre a regra de lâmina de fundo. A ANBIMA pode multá-la e, no limite, desligá-la. Ela continua funcionando como instituição — o que perde é o selo e a condição de associada.',
      exemploAplicado:
        'Um cliente pergunta por que precisa assinar tanto papel para aplicar num fundo simples. Boa parte dessa exigência vem do Código de Distribuição, não de lei: é a autorregulação padronizando a informação que precisa chegar até ele antes da decisão. Saber a origem da exigência muda a explicação — não é burocracia do banco, é regra de mercado.',
      lembrarNaProva: [
        'ANBIMA é entidade PRIVADA, adesão VOLUNTÁRIA.',
        'Sanções: advertência, multa e desligamento — todas contratuais.',
        'Autorregulação COMPLEMENTA, não substitui, a regulação estatal.',
        'A mesma conduta pode ser punida pela ANBIMA e pela CVM.',
      ],
      revisaoRapida: [
        'ANBIMA é associação privada, sem poder de polícia.',
        'A vinculação nasce da adesão voluntária aos Códigos.',
        'Sanções contratuais: advertência, multa, desligamento.',
        'Não afasta a competência da CVM nem a substitui.',
        'Os Códigos cobram padrão mais detalhado que a norma estatal.',
      ],
    },
    exemplos: [
      {
        titulo: 'As duas esferas em paralelo',
        corpo:
          'Um profissional que descumpre regra de suitability pode responder na ANBIMA (multa, desligamento da instituição associada) e na CVM (multa, inabilitação para o exercício do cargo). São processos independentes, com fundamentos distintos: um contratual, outro estatal.',
      },
    ],
    conceitoChave:
      'Autorregulação é contrato entre privados; regulação estatal é poder de polícia. As duas convivem, e uma não anula a outra.',
    pontosChave: [
      'ANBIMA: entidade privada',
      'Adesão voluntária aos Códigos',
      'Sanções contratuais',
      'Complementa a regulação estatal',
      'Punição em ambas as esferas é possível',
    ],
    erroComum:
      'Tratar a ANBIMA como se fosse um órgão regulador estatal, com poder de cassar registro ou inabilitar profissional. Esse poder é da CVM; a ANBIMA atua no plano contratual.',
    alertaProva:
      'Se a alternativa atribuir à ANBIMA poder de polícia, cassação de registro ou competência para editar norma obrigatória a não associados, está errada.',
    tabela: {
      titulo: 'Regulação estatal × autorregulação',
      colunas: ['Aspecto', 'CVM (estatal)', 'ANBIMA (autorregulação)'],
      linhas: [
        ['Natureza', 'Autarquia federal', 'Associação privada'],
        ['Vinculação', 'Obrigatória por lei', 'Voluntária por adesão'],
        ['Sanções', 'Multa, inabilitação, cassação', 'Advertência, multa, desligamento'],
        ['Alcance', 'Todo o mercado de valores mobiliários', 'Apenas os aderentes'],
      ],
    },
    perguntaRapida: {
      enunciado: 'A vinculação de uma instituição aos Códigos ANBIMA decorre de:',
      alternativas: [
        'Imposição legal a todas as instituições financeiras',
        'Adesão voluntária, com efeitos contratuais',
        'Determinação da CVM em processo administrativo',
        'Registro obrigatório no Banco Central',
      ],
      correta: 1,
      explicacao:
        'A ANBIMA é privada e sua autorregulação vale para quem adere. A obrigação nasce do contrato, não da lei.',
    },
    mapaMental: {
      id: 'mm-autorreg',
      rotulo: 'Autorregulação',
      revisao: true,
      filhos: [
        {
          id: 'mm-autorreg-nat',
          rotulo: 'Entidade privada',
          detalhe: 'Sem poder de polícia',
          revisao: true,
        },
        {
          id: 'mm-autorreg-adesao',
          rotulo: 'Adesão voluntária',
          detalhe: 'Obrigação contratual',
          revisao: true,
        },
        {
          id: 'mm-autorreg-sanc',
          rotulo: 'Sanções',
          detalhe: 'Advertência · multa · desligamento',
          revisao: true,
        },
        {
          id: 'mm-autorreg-cvm',
          rotulo: 'Não substitui a CVM',
          detalhe: 'As duas esferas convivem',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'A ANBIMA é um clube do próprio mercado. Quem entra aceita regras mais duras; quem descumpre pode ser multado ou expulso do clube — mas continua sendo uma empresa.',
      exemplo:
        'A distribuidora erra na lâmina do fundo. A ANBIMA multa e pode desligá-la. Ela perde o selo, não a licença de funcionar.',
      analogia:
        'É como um conselho de ética de uma profissão: pode cassar a carteirinha da entidade, mas não substitui o juiz.',
      iniciante:
        'Além das leis, o mercado cria regras próprias de bom comportamento. Quem aceita essas regras se compromete a segui-las.',
    },
    niveis: {
      entenda:
        'A ANBIMA é uma entidade privada. Quem adere aos códigos dela se obriga por contrato — e isso não tira nem substitui a fiscalização da CVM.',
      aprofunde:
        'A autorregulação existe porque a norma estatal é lenta e genérica por natureza: alterar uma resolução exige processo formal, enquanto um código privado se atualiza por deliberação de associados. A contrapartida é o alcance limitado, restrito aos aderentes, e a natureza contratual da sanção — o que produz a assimetria que a prova explora. Há ainda um arranjo intermediário no direito brasileiro, a autorregulação DELEGADA, em que a entidade privada exerce função fiscalizatória por convênio com o regulador estatal, modelo que a B3 aplica na supervisão de mercado das operações realizadas em seus ambientes. Nesse desenho a fronteira entre as duas naturezas fica menos nítida, mas a distinção conceitual permanece: mesmo delegada, a atuação privada não gera sanção estatal — ela reporta ao regulador, que decide. Vale registrar o incentivo econômico que sustenta o sistema: o selo funciona como sinal de qualidade e o desligamento tem custo reputacional real, e é essa perda, não a multa, que dá eficácia à autorregulação.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-registro-custodia',
    microtemaId: 'm1.4',
    titulo: 'Onde os ativos ficam: SELIC, B3 e a custódia',
    objetivo: 'Identificar em qual sistema cada tipo de ativo é registrado, custodiado e liquidado.',
    etiquetas: ['ESSENCIAL', 'DECORAR'],
    resumo30s:
      'SELIC — administrado pelo Banco Central — registra e liquida TÍTULOS PÚBLICOS federais. A B3 registra e liquida ativos PRIVADOS (CDB, LCI, LCA, debêntures) e a renda variável. Regra prática: público no SELIC, privado na B3.',
    explicacao: {
      oQueE:
        'Registro é a anotação da existência do ativo e de seu titular; custódia é a guarda; liquidação é a troca efetiva de ativo por dinheiro. Cada função acontece em uma infraestrutura autorizada.',
      porQueImporta:
        'É a resposta técnica à pergunta "onde está o meu dinheiro". O título não fica no banco onde o cliente aplicou: ele está registrado em nome dele numa infraestrutura de mercado, e é isso que o protege se o distribuidor quebrar.',
      paraQueServe:
        'Garantir que o ativo existe, tem dono identificado e que a operação se conclui sem que uma ponta receba sem entregar.',
      comoFunciona: [
        'SELIC — Sistema Especial de Liquidação e de Custódia. Administrado pelo BANCO CENTRAL. Registra, custodia e liquida TÍTULOS PÚBLICOS FEDERAIS.',
        'B3 — após a incorporação da CETIP, concentra o registro e a liquidação de ativos PRIVADOS de renda fixa (CDB, LCI, LCA, debêntures, CRI, CRA), de derivativos e da renda variável.',
        'A liquidação no SELIC é BRUTA e em TEMPO REAL: operação a operação, no mesmo dia, sem compensação de saldos.',
        'A CÂMARA DE COMPENSAÇÃO (clearing) se interpõe entre comprador e vendedor como CONTRAPARTE CENTRAL, assumindo o risco de inadimplência de uma das pontas.',
        'A entrega contra pagamento (DVP) é o princípio que impede que uma ponta entregue o ativo sem receber: as duas pernas liquidam simultaneamente ou nenhuma liquida.',
      ],
      exemploSimples:
        'O cliente compra Tesouro Direto pelo aplicativo do banco. O banco é apenas o agente de custódia que intermedeia; o título fica registrado no SELIC em nome do cliente, com CPF identificado.',
      exemploAplicado:
        'Um cliente pergunta o que acontece com o Tesouro Direto dele se o banco onde ele investe quebrar. A resposta é que o título é dele e está registrado no SELIC: basta transferir a custódia para outra instituição. É diferente de um CDB do mesmo banco, que é dívida do próprio banco e depende do FGC.',
      lembrarNaProva: [
        'Título PÚBLICO federal: SELIC, administrado pelo Banco Central.',
        'Ativo PRIVADO e renda variável: B3.',
        'A clearing atua como CONTRAPARTE CENTRAL das operações.',
        'Entrega contra pagamento: as duas pernas liquidam juntas.',
      ],
      revisaoRapida: [
        'SELIC é do Banco Central e cuida de título público federal.',
        'B3 registra e liquida ativos privados e renda variável.',
        'Liquidação no SELIC é bruta e em tempo real.',
        'A clearing se interpõe como contraparte central.',
        'Custódia identificada protege o investidor da quebra do distribuidor.',
      ],
    },
    exemplos: [
      {
        titulo: 'Por que a contraparte central importa',
        corpo:
          'Sem clearing, quem vende uma ação corre o risco de o comprador não pagar. Com a clearing, ela se torna compradora de todo vendedor e vendedora de todo comprador: o risco de crédito bilateral vira risco contra uma entidade que exige garantias de ambos.',
      },
    ],
    conceitoChave:
      'Registro diz que o ativo existe e de quem é; a clearing garante que a troca se conclui mesmo se uma das pontas falhar.',
    pontosChave: [
      'SELIC: BACEN · título público federal',
      'B3: privados, derivativos e renda variável',
      'SELIC liquida bruto e em tempo real',
      'Clearing = contraparte central',
      'DVP: entrega contra pagamento',
    ],
    erroComum:
      'Achar que o título comprado fica "no banco". O banco é agente de custódia; o registro do título público está no SELIC, em nome do investidor.',
    alertaProva:
      'A pergunta clássica dá um ativo e pede o sistema. Regra prática: emitido pelo Tesouro vai ao SELIC; emitido por banco ou empresa vai à B3.',
    tabela: {
      titulo: 'Onde cada ativo é registrado',
      colunas: ['Ativo', 'Sistema', 'Administrador'],
      linhas: [
        ['Tesouro Selic, Prefixado, IPCA+', 'SELIC', 'Banco Central'],
        ['CDB, LCI, LCA, debênture, CRI, CRA', 'B3', 'B3 S.A.'],
        ['Ações e derivativos', 'B3', 'B3 S.A.'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Em qual sistema são registrados e liquidados os títulos públicos federais?',
      alternativas: ['B3', 'SELIC', 'STR', 'SPB'],
      correta: 1,
      explicacao:
        'O SELIC é administrado pelo Banco Central e cuida especificamente de títulos públicos federais. Ativos privados ficam na B3.',
    },
    mapaMental: {
      id: 'mm-custodia',
      rotulo: 'Registro e custódia',
      revisao: true,
      filhos: [
        {
          id: 'mm-cust-selic',
          rotulo: 'SELIC',
          detalhe: 'BACEN · título público federal',
          revisao: true,
        },
        {
          id: 'mm-cust-b3',
          rotulo: 'B3',
          detalhe: 'Privados · derivativos · ações',
          revisao: true,
        },
        {
          id: 'mm-cust-clearing',
          rotulo: 'Clearing',
          detalhe: 'Contraparte central · assume o risco',
          revisao: true,
          filhos: [
            { id: 'mm-cust-dvp', rotulo: 'Entrega contra pagamento', detalhe: 'As duas pernas juntas', revisao: true },
          ],
        },
      ],
    },
    reexplicacoes: {
      simples:
        'O título que você compra não fica guardado no banco. Ele é registrado no seu nome num sistema do mercado, e o banco só intermedeia.',
      exemplo:
        'Você compra Tesouro Direto pelo app. O título vai para o SELIC com o seu CPF. Se o banco quebrar, você transfere a custódia para outro.',
      analogia:
        'É como o cartório de imóveis: a imobiliária vendeu, mas quem registra que a casa é sua é o cartório.',
      iniciante:
        'Existe um lugar oficial onde fica anotado quem é dono de cada título. Assim ninguém precisa confiar só na palavra do banco.',
    },
    niveis: {
      entenda:
        'Título público fica registrado no SELIC, do Banco Central; título privado e ação ficam na B3. O banco só intermedeia.',
      aprofunde:
        'A contraparte central opera por NOVAÇÃO: o contrato original entre comprador e vendedor é extinto e substituído por dois contratos novos, cada um com a câmara em uma das pontas. É essa figura jurídica que permite à clearing garantir a liquidação mesmo quando uma das partes falha, e é ela que sustenta a exigência de margem de garantia e de fundo de liquidação — a câmara só pode assumir o risco porque o pré-financia. A escolha entre liquidação BRUTA em tempo real e liquidação LÍQUIDA diferida é um trade-off clássico entre risco e liquidez: a bruta elimina risco de crédito intradiário mas exige que cada participante tenha caixa para cada operação isolada; a líquida compensa saldos e economiza liquidez, ao custo de acumular exposição até o momento da liquidação. O SELIC adota a bruta em tempo real justamente porque opera com títulos públicos, onde a integridade da liquidação é questão sistêmica. Vale ainda distinguir custódia FUNGÍVEL de INFUNGÍVEL: na primeira os ativos de vários investidores são mantidos de forma indistinta, com controle apenas escritural de quantidades; na segunda cada unidade é individualizada — distinção que importa quando se discute o que acontece com os ativos na insolvência do custodiante.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-spb',
    microtemaId: 'm1.4',
    titulo: 'Sistema de Pagamentos Brasileiro',
    objetivo: 'Explicar a função do SPB e o papel do STR na liquidação em tempo real.',
    etiquetas: ['ATENCAO', 'ENTENDER'],
    resumo30s:
      'O SPB é o conjunto de entidades, sistemas e regras que transferem recursos entre agentes da economia. Seu núcleo é o STR, operado pelo Banco Central, que liquida em tempo real e de forma irrevogável entre contas de reservas bancárias.',
    explicacao: {
      oQueE:
        'O Sistema de Pagamentos Brasileiro é a infraestrutura que permite transferir dinheiro entre pessoas, empresas e instituições financeiras com segurança jurídica e operacional.',
      porQueImporta:
        'É a encanação por onde tudo passa. Quando o cliente faz um PIX, uma TED ou liquida uma compra de ações, ele está usando o SPB — e a razão de o dinheiro chegar em segundos, e não em dias, é a arquitetura desse sistema.',
      paraQueServe:
        'Garantir que a transferência de recursos seja definitiva e que a falha de um participante não se propague para todo o sistema financeiro.',
      comoFunciona: [
        'O SPB reúne as câmaras de compensação e liquidação, os sistemas de transferência de fundos e as regras que os governam.',
        'O STR — Sistema de Transferência de Reservas — é operado pelo BANCO CENTRAL e liquida em TEMPO REAL, operação a operação, entre contas de Reservas Bancárias.',
        'A liquidação pelo STR é IRREVOGÁVEL e INCONDICIONAL: concluída a transferência, não há como desfazê-la unilateralmente.',
        'A reforma de 2002 transferiu o risco sistêmico das costas do Banco Central para as próprias câmaras, que passaram a exigir garantias dos participantes.',
        'RISCO SISTÊMICO é o risco de que a quebra de um participante contamine os demais por efeito dominó. Conter esse risco é o objetivo central do desenho do SPB.',
      ],
      exemploSimples:
        'Uma TED entre bancos diferentes é liquidada pelo STR: o Banco Central debita a conta de reservas do banco de origem e credita a do banco de destino, em tempo real e em caráter definitivo.',
      exemploAplicado:
        'Um cliente questiona por que a TED cai na hora e o cheque leva dias. São arquiteturas diferentes do mesmo SPB: a TED liquida pelo STR, operação a operação, em tempo real; o cheque passa por compensação, que agrupa lançamentos e liquida saldos em lote. Um é bruto e imediato; o outro é líquido e diferido.',
      lembrarNaProva: [
        'O STR é operado pelo BANCO CENTRAL.',
        'Liquidação pelo STR: tempo real, irrevogável e incondicional.',
        'O objetivo central do SPB é conter o RISCO SISTÊMICO.',
        'Após 2002 as câmaras assumiram o risco, exigindo garantias.',
      ],
      revisaoRapida: [
        'SPB é o conjunto de sistemas de transferência de recursos.',
        'STR é o núcleo, operado pelo Banco Central.',
        'A liquidação pelo STR é em tempo real e definitiva.',
        'Objetivo do desenho: conter risco sistêmico.',
        'Câmaras exigem garantias porque assumem o risco.',
      ],
    },
    exemplos: [
      {
        titulo: 'Bruto e imediato × líquido e diferido',
        corpo:
          'A TED liquida uma a uma, em tempo real, e por isso exige que o banco tenha o recurso na hora. A compensação de cheques agrupa milhares de lançamentos e liquida só o saldo, o que economiza liquidez mas acumula exposição até o fechamento.',
      },
    ],
    conceitoChave:
      'O SPB existe para que uma quebra não vire uma crise: cada camada foi desenhada para conter o contágio.',
    pontosChave: [
      'STR: operado pelo Banco Central',
      'Tempo real, irrevogável, incondicional',
      'Objetivo: conter risco sistêmico',
      'Câmaras assumem risco e exigem garantia',
      'Bruto imediato × líquido diferido',
    ],
    erroComum:
      'Tratar o SPB como se fosse um sistema único. Ele é um conjunto de sistemas e regras, e o STR é apenas — embora seja o mais importante — um deles.',
    alertaProva:
      'Quando o enunciado citar liquidação "em tempo real, irrevogável e incondicional entre contas de reservas bancárias", está descrevendo o STR.',
    tabela: {
      titulo: 'Modalidades de liquidação',
      colunas: ['Modalidade', 'Como funciona', 'Efeito'],
      linhas: [
        ['Bruta em tempo real', 'Operação a operação, imediata', 'Elimina risco intradiário; exige liquidez'],
        ['Líquida diferida', 'Compensa saldos e liquida em lote', 'Economiza liquidez; acumula exposição'],
      ],
    },
    perguntaRapida: {
      enunciado: 'O Sistema de Transferência de Reservas (STR) é operado por qual instituição?',
      alternativas: ['B3', 'Banco Central do Brasil', 'CVM', 'Tesouro Nacional'],
      correta: 1,
      explicacao:
        'O STR é operado pelo Banco Central e liquida em tempo real entre contas de Reservas Bancárias, de forma irrevogável.',
    },
    mapaMental: {
      id: 'mm-spb',
      rotulo: 'SPB',
      revisao: true,
      filhos: [
        {
          id: 'mm-spb-str',
          rotulo: 'STR',
          detalhe: 'BACEN · tempo real · irrevogável',
          revisao: true,
        },
        {
          id: 'mm-spb-camaras',
          rotulo: 'Câmaras',
          detalhe: 'Assumem risco · exigem garantia',
          revisao: true,
        },
        {
          id: 'mm-spb-risco',
          rotulo: 'Risco sistêmico',
          detalhe: 'Efeito dominó — o que o SPB evita',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'O SPB é a encanação por onde o dinheiro corre entre os bancos. O STR é o cano principal, e o Banco Central é quem opera.',
      exemplo:
        'Você faz uma TED. O Banco Central tira o valor da conta de reservas do seu banco e coloca na do banco de destino, na hora e sem volta.',
      analogia:
        'É o sistema de eclusas de um canal: cada comporta impede que um problema em um trecho inunde os outros.',
      iniciante:
        'Todo dinheiro que se move entre bancos passa por um sistema central que garante que a transferência realmente aconteceu.',
    },
    niveis: {
      entenda:
        'O SPB é o conjunto de sistemas por onde o dinheiro circula entre bancos. O STR, do Banco Central, liquida em tempo real e sem volta.',
      aprofunde:
        'A reforma de 2002 mudou o desenho de incentivos do sistema, e é essa mudança — mais que a tecnologia — que explica o SPB moderno. Antes dela, o Banco Central absorvia o risco de liquidação: se um banco não honrasse sua posição ao fim do dia, o BC cobria e cobrava depois, o que criava risco moral e concentrava exposição no balanço da autoridade monetária. Com a reforma, o risco passou às câmaras, que só puderam assumi-lo exigindo garantias, limites operacionais e fundos de liquidação dos próprios participantes — quem gera o risco passou a pré-financiá-lo. A contrapartida foi a necessidade de liquidez intradiária, resolvida pelas operações de redesconto intradia, em que o BC empresta contra títulos públicos dentro do mesmo dia sem custo de juros. Esse arranjo — liquidação bruta em tempo real financiada por liquidez intradia colateralizada — é hoje o padrão internacional para sistemas de pagamento de grande valor, e é o que permitiu ao Brasil construir sobre ele um sistema de pagamentos instantâneos de varejo operando 24 horas por dia.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 7,
  },

  {
    id: 'c-sancionador',
    microtemaId: 'm1.4',
    titulo: 'Poder sancionador da CVM e termo de compromisso',
    objetivo: 'Identificar as sanções aplicáveis pela CVM e a natureza do termo de compromisso.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'A CVM apura infrações em processo administrativo sancionador. As penalidades vão de advertência a cassação de registro, passando por multa e inabilitação. O termo de compromisso SUSPENDE o processo sem confissão de culpa.',
    explicacao: {
      oQueE:
        'O poder sancionador é a competência da CVM para apurar e punir administrativamente infrações às normas do mercado de valores mobiliários.',
      porQueImporta:
        'Define a consequência real de descumprir dever de conduta. Para o profissional certificado, a inabilitação é a sanção mais grave na prática: ela o retira do mercado.',
      paraQueServe:
        'Dar efetividade à regulação — norma sem sanção não muda comportamento.',
      comoFunciona: [
        'A apuração ocorre em PROCESSO ADMINISTRATIVO SANCIONADOR, com direito a defesa. A esfera é administrativa, distinta da criminal e da cível.',
        'O rol de penalidades é escalonado por gravidade: advertência, multa, suspensão do exercício do cargo, inabilitação temporária, suspensão ou cassação de autorização ou registro e proibição temporária de praticar determinadas atividades.',
        'TERMO DE COMPROMISSO: o acusado se compromete a cessar a prática e a corrigir as irregularidades, podendo indenizar prejuízos. O processo é SUSPENSO.',
        'O termo de compromisso NÃO implica confissão de culpa nem reconhecimento de ilicitude. É solução negociada, não condenação.',
        'A sanção administrativa é independente das esferas civil e penal. A mesma conduta pode gerar processo na CVM, ação de reparação e ação criminal.',
      ],
      exemploSimples:
        'Um administrador de fundo descumpre regra de divulgação. A CVM instaura processo. Ele propõe termo de compromisso, corrige a falha e indeniza cotistas. O processo é suspenso sem que ele admita culpa.',
      exemploAplicado:
        'Um profissional pergunta o que arrisca ao seguir uma orientação comercial que contraria suitability. A resposta inclui a inabilitação temporária: ele pode ficar impedido de exercer cargo no mercado por prazo determinado. É a sanção que, na prática, encerra uma carreira — e ela não depende de o cliente ter perdido dinheiro.',
      lembrarNaProva: [
        'A esfera é ADMINISTRATIVA, independente da civil e da penal.',
        'Termo de compromisso SUSPENDE o processo, sem confissão de culpa.',
        'As penalidades vão de advertência a cassação de registro.',
        'Inabilitação temporária impede o exercício de cargo no mercado.',
      ],
      revisaoRapida: [
        'A CVM apura em processo administrativo sancionador.',
        'Penalidades escalonadas: advertência, multa, suspensão, inabilitação, cassação.',
        'Termo de compromisso suspende o processo.',
        'Não há confissão de culpa no termo de compromisso.',
        'Administrativo, civil e penal correm de forma independente.',
      ],
    },
    exemplos: [
      {
        titulo: 'Três esferas, um mesmo fato',
        corpo:
          'Uso de informação privilegiada pode gerar, ao mesmo tempo: processo sancionador na CVM (multa e inabilitação), ação civil de reparação movida por prejudicados e ação penal — o insider trading é crime tipificado. Nenhuma delas exclui as outras.',
      },
    ],
    conceitoChave:
      'O termo de compromisso é acordo, não absolvição: encerra o litígio administrativo sem declarar quem tinha razão.',
    pontosChave: [
      'Processo administrativo sancionador',
      'Advertência → multa → suspensão → inabilitação → cassação',
      'Termo de compromisso suspende o processo',
      'Sem confissão de culpa',
      'Independente das esferas civil e penal',
    ],
    erroComum:
      'Entender o termo de compromisso como admissão de culpa ou como condenação branda. Ele é expressamente o contrário: não há reconhecimento de ilicitude.',
    alertaProva:
      'Se a alternativa disser que o termo de compromisso implica confissão, extingue a ação penal ou substitui a multa como pena, está errada.',
    tabela: {
      titulo: 'As três esferas de responsabilização',
      colunas: ['Esfera', 'Quem conduz', 'Consequência típica'],
      linhas: [
        ['Administrativa', 'CVM', 'Multa, inabilitação, cassação'],
        ['Civil', 'Judiciário, a pedido do prejudicado', 'Reparação de prejuízo'],
        ['Penal', 'Ministério Público e Judiciário', 'Pena privativa de liberdade e multa'],
      ],
    },
    perguntaRapida: {
      enunciado: 'A celebração de termo de compromisso perante a CVM implica:',
      alternativas: [
        'Confissão de culpa e reconhecimento da ilicitude',
        'Suspensão do processo, sem confissão de culpa',
        'Extinção automática de eventual ação penal',
        'Conversão da penalidade em advertência',
      ],
      correta: 1,
      explicacao:
        'O termo de compromisso é solução negociada: o acusado cessa a prática e corrige as irregularidades, e o processo é suspenso sem reconhecimento de ilicitude.',
    },
    mapaMental: {
      id: 'mm-sanc',
      rotulo: 'Poder sancionador',
      revisao: true,
      filhos: [
        {
          id: 'mm-sanc-proc',
          rotulo: 'Processo administrativo',
          detalhe: 'Com direito a defesa',
          revisao: true,
        },
        {
          id: 'mm-sanc-penas',
          rotulo: 'Penalidades',
          detalhe: 'Advertência → cassação',
          revisao: true,
          filhos: [
            { id: 'mm-sanc-inab', rotulo: 'Inabilitação', detalhe: 'Retira o profissional do mercado', revisao: true },
          ],
        },
        {
          id: 'mm-sanc-tc',
          rotulo: 'Termo de compromisso',
          detalhe: 'Suspende · sem confissão',
          revisao: true,
        },
        {
          id: 'mm-sanc-esferas',
          rotulo: 'Três esferas',
          detalhe: 'Administrativa · civil · penal',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'A CVM pode punir quem descumpre as regras do mercado, com multa ou proibindo a pessoa de trabalhar no setor por um tempo.',
      exemplo:
        'O administrador do fundo erra na divulgação. Em vez de brigar no processo, ele corrige, indeniza os cotistas e o caso é suspenso — sem admitir culpa.',
      analogia:
        'É como um acordo antes do julgamento: as partes resolvem o problema e o juiz arquiva, sem dizer quem estava certo.',
      iniciante:
        'Quem trabalha no mercado financeiro segue regras. Quem descumpre pode ser multado ou proibido de continuar atuando.',
    },
    niveis: {
      entenda:
        'A CVM investiga e pune quem descumpre as regras do mercado. O termo de compromisso encerra o processo por acordo, sem que ninguém confesse culpa.',
      aprofunde:
        'O termo de compromisso existe por razões de eficiência regulatória, não de leniência: processos sancionadores são longos e caros, e um regulador com recursos finitos precisa escolher onde gastá-los. Ao aceitar um compromisso, a CVM troca a punição incerta e distante por uma correção imediata e verificável, muitas vezes com indenização a prejudicados — resultado que a condenação nem sempre entrega. A ausência de confissão não é concessão ao acusado: é condição necessária para que o instrumento funcione, porque uma confissão administrativa seria prova nas esferas civil e penal, e ninguém celebraria acordo nessas condições. A decisão de aceitar ou recusar leva em conta a oportunidade e a conveniência, a gravidade da conduta e o histórico do proponente — condutas graves, como fraude e uso de informação privilegiada, tendem à recusa justamente porque o efeito dissuasório da punição é o bem jurídico em jogo. É essa avaliação que separa o instrumento de um mero preço da infração.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-transparencia-mercado',
    microtemaId: 'm1.4',
    titulo: 'Transparência e eficiência de mercado',
    objetivo: 'Relacionar divulgação de informação, formação de preços e proteção do investidor.',
    etiquetas: ['ENTENDER', 'ESSENCIAL'],
    resumo30s:
      'A regulação exige divulgação porque o preço só reflete a realidade se a informação for pública e simultânea. Fato relevante, informação privilegiada e dever de sigilo são três faces da mesma regra.',
    explicacao: {
      oQueE:
        'Transparência de mercado é o conjunto de obrigações de divulgar informação capaz de influenciar a decisão de investir, de modo público, simultâneo e acessível a todos.',
      porQueImporta:
        'É a condição para o preço significar alguma coisa. Onde a informação circula de forma desigual, o preço deixa de ser referência e o investidor comum entra em desvantagem estrutural.',
      paraQueServe:
        'Permitir que o preço incorpore a informação disponível e proteger quem não tem acesso privilegiado.',
      comoFunciona: [
        'FATO RELEVANTE é qualquer ato ou fato capaz de influir de modo ponderável na cotação, na decisão de negociar ou no exercício de direitos dos investidores.',
        'A divulgação deve ser PÚBLICA E SIMULTÂNEA — não vale contar a um grupo antes e ao mercado depois.',
        'Enquanto o fato não é divulgado, ele é INFORMAÇÃO PRIVILEGIADA, e negociar com base nela é ilícito.',
        'A companhia pode excepcionalmente MANTER SIGILO quando a divulgação puser em risco interesse legítimo — mas o sigilo cessa se a informação escapar ou se o preço começar a oscilar de forma atípica.',
        'A eficiência informacional do mercado é o grau em que os preços já refletem a informação disponível. Quanto mais eficiente, menos espaço para ganho consistente com informação pública.',
      ],
      exemploSimples:
        'Uma companhia fecha uma aquisição relevante. Ela precisa divulgar fato relevante antes da abertura do pregão ou imediatamente ao fechar o negócio — nunca depois de o diretor comprar ações.',
      exemploAplicado:
        'Um cliente conta que "soube por dentro" que uma empresa vai ser comprada e quer aplicar tudo nela. Além do risco de concentração, a operação pode caracterizar uso de informação privilegiada — e o dever do profissional inclui não operar com base nisso e registrar a situação, não apenas recusar a ordem em silêncio.',
      lembrarNaProva: [
        'Fato relevante: divulgação PÚBLICA e SIMULTÂNEA.',
        'Informação privilegiada é a não divulgada ao mercado.',
        'O sigilo excepcional cessa se houver vazamento ou oscilação atípica.',
        'Mercado eficiente é aquele cujos preços já refletem a informação disponível.',
      ],
      revisaoRapida: [
        'Fato relevante é o que pode influenciar cotação ou decisão de investir.',
        'A divulgação precisa ser pública e simultânea.',
        'Informação ainda não divulgada é privilegiada.',
        'Sigilo excepcional cessa com vazamento ou oscilação atípica.',
        'Preço só é referência onde a informação circula igual para todos.',
      ],
    },
    exemplos: [
      {
        titulo: 'Quando o sigilo cai',
        corpo:
          'Uma negociação em curso pode ser mantida em sigilo para não inviabilizar o negócio. Mas se a notícia vaza para a imprensa, ou se a ação passa a oscilar de forma atípica, a companhia é obrigada a divulgar imediatamente — o sigilo protege o negócio, não o silêncio.',
      },
    ],
    conceitoChave:
      'A regra da simultaneidade existe porque informação vazada em vantagem de alguém é, necessariamente, desvantagem de outro.',
    pontosChave: [
      'Fato relevante influencia cotação ou decisão',
      'Divulgação pública e simultânea',
      'Informação não divulgada é privilegiada',
      'Sigilo excepcional e revogável',
      'Eficiência: preço reflete a informação',
    ],
    erroComum:
      'Achar que basta divulgar depois. O que a norma protege é a SIMULTANEIDADE: informar um grupo antes do mercado já é a infração, mesmo que a divulgação geral venha em seguida.',
    alertaProva:
      'A banca gosta do cenário do sigilo excepcional. Lembre que ele cessa automaticamente diante de vazamento ou de oscilação atípica no preço.',
    tabela: {
      titulo: 'Três faces da mesma regra',
      colunas: ['Instituto', 'O que exige'],
      linhas: [
        ['Fato relevante', 'Divulgar de forma pública e simultânea'],
        ['Informação privilegiada', 'Não negociar enquanto não divulgada'],
        ['Dever de sigilo', 'Não repassar a terceiros antes da divulgação'],
      ],
    },
    perguntaRapida: {
      enunciado: 'A companhia mantém em sigilo uma negociação em curso. O sigilo deve cessar imediatamente quando:',
      alternativas: [
        'O conselho de administração aprovar o negócio',
        'A informação escapar ou o preço oscilar de forma atípica',
        'Completar 30 dias da decisão inicial',
        'A CVM solicitar esclarecimentos por ofício',
      ],
      correta: 1,
      explicacao:
        'O sigilo excepcional protege o negócio enquanto a informação está contida. Vazamento ou oscilação atípica derrubam a exceção.',
    },
    mapaMental: {
      id: 'mm-transp',
      rotulo: 'Transparência',
      revisao: true,
      filhos: [
        {
          id: 'mm-transp-fr',
          rotulo: 'Fato relevante',
          detalhe: 'Público e simultâneo',
          revisao: true,
        },
        {
          id: 'mm-transp-ip',
          rotulo: 'Informação privilegiada',
          detalhe: 'Não divulgada — não se negocia',
          revisao: true,
        },
        {
          id: 'mm-transp-sig',
          rotulo: 'Sigilo excepcional',
          detalhe: 'Cessa com vazamento ou oscilação',
          revisao: true,
        },
        {
          id: 'mm-transp-efic',
          rotulo: 'Eficiência informacional',
          detalhe: 'Preço reflete o que é público',
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Notícia que mexe no preço tem de ser contada para todo mundo ao mesmo tempo. Quem sabe antes e opera está roubando de quem não sabia.',
      exemplo:
        'A empresa fecha uma compra grande. Precisa anunciar ao mercado inteiro — nunca depois de um diretor ter comprado ações.',
      analogia:
        'É como uma partida em que todos veem o mesmo placar. Se alguém enxerga o resultado antes, o jogo deixa de ser jogo.',
      iniciante:
        'Informação que muda o preço de uma ação precisa ser pública. Usar o que ainda é segredo para lucrar é proibido.',
    },
    niveis: {
      entenda:
        'Notícia capaz de mexer no preço precisa ser divulgada a todos ao mesmo tempo. Quem opera antes disso comete infração.',
      aprofunde:
        'A exigência de simultaneidade se apoia na hipótese de eficiência de mercado, que sustenta que os preços incorporam rapidamente a informação disponível — em sua forma SEMIFORTE, a que a regulação implicitamente adota, os preços refletem toda a informação pública, o que torna impossível ganho consistente com análise de dados já divulgados, mas deixa espaço de ganho a quem detém informação não pública. É exatamente esse espaço que a norma fecha ao criminalizar o uso de informação privilegiada: não por moralismo, mas porque o investidor comum, sabendo que joga contra alguém com carta marcada, exige prêmio maior para participar — e esse prêmio encarece o capital de todas as companhias, inclusive as honestas. O custo do insider trading é, portanto, sistêmico e não bilateral. Vale distinguir ainda fato relevante de ato relevante e de informação periódica: a divulgação periódica (demonstrações, formulário de referência) é calendarizada e previsível; o fato relevante é eventual e exige divulgação imediata, justamente porque sua novidade é o que move preço.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },
]
