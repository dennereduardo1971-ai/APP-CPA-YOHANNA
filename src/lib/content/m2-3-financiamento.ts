import type { Conceito } from '../types'

/**
 * MICROTEMA 2.3 — Produtos de financiamento.
 *
 * O outro lado do balcão: até aqui o macrotema 2 tratou de onde o cliente
 * aplica; este microtema trata de onde ele toma. E a lógica se inverte — em
 * aplicação, taxa maior é melhor; em crédito, taxa maior é pior, e o número
 * que importa não é a taxa anunciada, é o Custo Efetivo Total.
 *
 * NOTA EDITORIAL — números normativos. Teto de juros do cheque especial,
 * limite de encargos do rotativo, margem consignável e teto de valor do
 * imóvel no SFH são fixados por norma e revistos periodicamente. As aulas
 * trazem o MECANISMO e a lógica da regra, e marcam onde conferir a norma
 * vigente (regra 4 do CLAUDE.md). Nenhuma questão depende desses números.
 */

export const CONCEITOS_2_3: Conceito[] = [
  {
    id: 'c-credito-modalidades',
    microtemaId: 'm2.3',
    titulo: 'Modalidades de crédito à pessoa física',
    objetivo: 'Ordenar as modalidades de crédito por custo e explicar o que justifica a diferença de taxa.',
    etiquetas: ['ESSENCIAL', 'ENTENDER'],
    resumo30s:
      'Quanto melhor a garantia, menor a taxa. Consignado tem desconto em folha e é o mais barato; crédito pessoal não tem garantia; cheque especial e rotativo do cartão são os mais caros, porque são crédito automático e sem análise no momento do uso.',
    explicacao: {
      oQueE:
        'Modalidades de crédito são os diferentes contratos pelos quais uma instituição empresta a uma pessoa física, cada um com garantia, prazo e custo próprios.',
      porQueImporta:
        'A ordem de custo entre as modalidades é a informação mais útil que o profissional pode dar a um cliente endividado — trocar rotativo por consignado costuma reduzir o custo da dívida em várias vezes.',
      paraQueServe:
        'Antecipar consumo ou cobrir descasamento de caixa, ao preço de comprometer renda futura.',
      comoFunciona: [
        'O QUE DEFINE A TAXA é o risco que o credor corre. Garantia melhor, risco menor, taxa menor. Essa é a única regra que explica toda a ordem.',
        'CONSIGNADO: a parcela é descontada diretamente da folha de pagamento ou do benefício. Risco baixíssimo, taxa das menores. Há limite de comprometimento da renda (margem consignável), fixado em norma.',
        'CRÉDITO PESSOAL: sem garantia real nem desconto em folha. Taxa intermediária, definida pela análise de crédito do tomador.',
        'CHEQUE ESPECIAL: limite pré-aprovado de uso automático na conta. Como o crédito é liberado sem análise no momento do saque, é dos mais caros. Há teto de juros fixado em norma.',
        'ROTATIVO DO CARTÃO: saldo não pago da fatura. É o crédito mais caro do varejo; a norma limita o total de juros e encargos que pode ser cobrado sobre a dívida original.',
      ],
      exemploSimples:
        'O mesmo cliente, no mesmo banco, no mesmo dia: consignado a uma taxa, crédito pessoal a uma taxa bem maior e rotativo do cartão a um múltiplo disso. Nada mudou nele — mudou a garantia que cada contrato oferece ao credor.',
      exemploAplicado:
        'Um cliente aposentado carrega saldo no rotativo há meses e diz que "não consegue sair". A saída técnica costuma ser portar a dívida para uma modalidade com garantia melhor — consignado, se houver margem — e cancelar o uso do rotativo. A conversa não é sobre disciplina: é sobre trocar o contrato mais caro pelo mais barato disponível.',
      lembrarNaProva: [
        'Melhor garantia → menor taxa. Vale para toda a ordem.',
        'Consignado é o mais barato porque desconta em folha.',
        'Cheque especial e rotativo são os mais caros.',
        'A margem consignável limita o comprometimento da renda.',
      ],
      revisaoRapida: [
        'A taxa reflete o risco que o credor corre.',
        'Consignado: desconto em folha, taxa das menores.',
        'Crédito pessoal: sem garantia, taxa intermediária.',
        'Cheque especial: crédito automático, taxa alta.',
        'Rotativo do cartão: o mais caro do varejo.',
      ],
    },
    exemplos: [
      {
        titulo: 'Por que o rotativo é tão caro',
        corpo:
          'Ele é concedido automaticamente, sem análise no momento do uso, a qualquer portador que deixe de pagar a fatura integral — inclusive a quem está em dificuldade. O credor precifica essa seleção adversa na taxa, e é por isso que a norma precisou limitar o total de encargos.',
      },
    ],
    conceitoChave:
      'Não existe taxa alta ou baixa em abstrato: existe o risco que a garantia do contrato não cobre.',
    pontosChave: [
      'Garantia melhor → taxa menor',
      'Consignado: desconto em folha',
      'Crédito pessoal: sem garantia',
      'Cheque especial: automático e caro',
      'Rotativo: o mais caro do varejo',
    ],
    erroComum:
      'Comparar modalidades pela taxa mensal isolada. Prazo, tarifas e seguros mudam o custo real — a comparação válida é pelo CET.',
    alertaProva:
      'Teto de juros do cheque especial, limite de encargos do rotativo e margem consignável são fixados por norma e mudam. Confira a regra vigente antes de decorar percentual.',
    tabela: {
      titulo: 'Ordem típica de custo',
      colunas: ['Modalidade', 'Garantia', 'Custo relativo'],
      linhas: [
        ['Consignado', 'Desconto em folha', 'O menor'],
        ['Crédito pessoal', 'Nenhuma', 'Intermediário'],
        ['Cheque especial', 'Nenhuma, uso automático', 'Alto'],
        ['Rotativo do cartão', 'Nenhuma, uso automático', 'O maior'],
      ],
    },
    perguntaRapida: {
      enunciado: 'O que explica o crédito consignado ter taxa menor que o crédito pessoal?',
      alternativas: [
        'O prazo do consignado é sempre mais curto',
        'A parcela é descontada em folha, o que reduz o risco de inadimplência',
        'O consignado é subsidiado pelo governo federal',
        'O valor emprestado no consignado é sempre menor',
      ],
      correta: 1,
      explicacao:
        'A taxa reflete o risco. Desconto direto na folha ou no benefício reduz drasticamente a chance de inadimplência.',
    },
    mapaMental: {
      id: 'mm-credito',
      rotulo: 'Crédito PF',
      revisao: true,
      filhos: [
        {
          id: 'mm-cred-regra',
          rotulo: 'Garantia define a taxa',
          detalhe: 'Menos risco → menos juro',
          revisao: true,
        },
        { id: 'mm-cred-cons', rotulo: 'Consignado', detalhe: 'Desconto em folha · o mais barato', revisao: true },
        { id: 'mm-cred-pess', rotulo: 'Crédito pessoal', detalhe: 'Sem garantia · intermediário', revisao: true },
        { id: 'mm-cred-che', rotulo: 'Cheque especial', detalhe: 'Automático · caro', revisao: true },
        { id: 'mm-cred-rot', rotulo: 'Rotativo', detalhe: 'O mais caro do varejo', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'Quanto mais seguro o banco se sente de receber de volta, menos ele cobra. Desconto em folha é a maior segurança que existe.',
      exemplo:
        'O mesmo cliente pega consignado barato e rotativo caríssimo no mesmo dia. O que mudou não foi ele: foi a garantia do contrato.',
      analogia:
        'É como o seguro do carro: quem tem garagem paga menos. O preço reflete o risco, não a pessoa.',
      iniciante:
        'Existem vários jeitos de pegar dinheiro emprestado, e cada um cobra juros diferentes. Os mais fáceis de conseguir costumam ser os mais caros.',
    },
    niveis: {
      entenda:
        'A taxa de cada modalidade reflete a garantia que ela oferece ao credor. Consignado desconta em folha e é o mais barato; rotativo é automático e é o mais caro.',
      aprofunde:
        'O rotativo do cartão concentra um problema de seleção adversa em estado puro: ele é concedido automaticamente a quem não paga a fatura integral, ou seja, exatamente à parcela da carteira que sinalizou dificuldade de caixa. O credor não escolhe a quem emprestar nem quando, e precifica isso na taxa — que por sua vez agrava a dificuldade de quem já estava apertado, num circuito que se retroalimenta. Foi essa dinâmica, e não o nível absoluto de juros, que motivou a limitação normativa do total de encargos sobre a dívida original: o objetivo declarado não é tabelar preço, é impedir que o saldo cresça indefinidamente sobre um devedor que já demonstrou não conseguir quitá-lo. O consignado tem o problema inverso e menos discutido: o risco baixo permite conceder crédito a quem não teria acesso por outra via, mas a garantia é a própria renda futura, e o comprometimento excessivo transfere fragilidade para o orçamento doméstico — daí a existência da margem consignável, que é um limite prudencial sobre o tomador, não sobre o credor.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-cet',
    microtemaId: 'm2.3',
    titulo: 'Custo Efetivo Total: o número que compara crédito',
    objetivo: 'Explicar o que o CET incorpora e por que a taxa de juros isolada não permite comparação.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'O CET reúne juros, tributos, tarifas, seguros e demais despesas em uma única taxa anual. É de informação obrigatória antes da contratação, e é o único número que permite comparar propostas de crédito.',
    explicacao: {
      oQueE:
        'Custo Efetivo Total é a taxa que expressa, em percentual ao ano, tudo que o tomador paga em uma operação de crédito — não apenas os juros.',
      porQueImporta:
        'A taxa de juros anunciada é apenas um dos componentes do custo. Duas propostas com a mesma taxa podem ter custos muito diferentes, e sem o CET a comparação é impossível.',
      paraQueServe:
        'Tornar comparáveis operações com estruturas de cobrança diferentes e dar ao tomador o preço real da decisão.',
      comoFunciona: [
        'O CET incorpora: juros, tributos (IOF), tarifas, seguros e quaisquer outras despesas cobradas na operação.',
        'É expresso em percentual ANUAL e deve ser informado ANTES da contratação, não depois.',
        'Matematicamente, o CET é a taxa que iguala o valor presente do fluxo de pagamentos ao valor efetivamente liberado ao tomador — ou seja, é a TIR da operação sob a ótica do cliente.',
        'Se a instituição cobra tarifa de cadastro ou embute seguro prestamista, esses valores entram no CET e o elevam acima da taxa de juros nominal.',
        'Comparar propostas pela taxa de juros isolada leva à escolha errada sempre que a estrutura de tarifas for diferente entre elas.',
      ],
      exemploSimples:
        'Uma proposta anuncia 1,8% ao mês de juros. Somados IOF, tarifa de cadastro e seguro prestamista, o CET pode superar com folga a taxa anunciada. É esse número maior que representa o que o cliente vai pagar.',
      exemploAplicado:
        'Duas propostas de crédito pessoal: uma com juros de 1,9% ao mês e sem tarifa, outra com 1,7% ao mês mais tarifa de cadastro e seguro. A segunda parece melhor pela taxa e costuma ser pior pelo CET. Pedir o CET das duas resolve a conversa em um minuto — e é direito do cliente recebê-lo.',
      lembrarNaProva: [
        'O CET inclui juros, tributos, tarifas, seguros e demais despesas.',
        'É expresso ao ANO e informado ANTES da contratação.',
        'É a taxa que iguala o fluxo de pagamentos ao valor liberado.',
        'Comparar pela taxa de juros isolada é o erro que o CET existe para corrigir.',
      ],
      revisaoRapida: [
        'CET reúne todo o custo da operação em uma taxa.',
        'Inclui IOF, tarifas e seguros, não só juros.',
        'Expresso em percentual anual.',
        'Informação obrigatória antes da contratação.',
        'É a única base válida de comparação entre propostas.',
      ],
    },
    exemplos: [
      {
        titulo: 'A mesma lógica em três mercados',
        corpo:
          'CET no crédito, VET no câmbio e a nomenclatura padronizada das tarifas bancárias resolvem o mesmo problema: quando o preço tem vários componentes que se compensam, comparar por um deles engana. A regulação não tabela preço — obriga a expressá-lo de forma comparável.',
      },
    ],
    conceitoChave:
      'A taxa de juros é um componente do preço. O preço é o CET.',
    pontosChave: [
      'Inclui juros, IOF, tarifas e seguros',
      'Percentual ao ano',
      'Informado antes de contratar',
      'É a TIR da operação para o cliente',
      'Única base válida de comparação',
    ],
    erroComum:
      'Escolher a proposta com menor taxa de juros. A que tem juros menores pode cobrar tarifa e seguro que a tornam a mais cara no CET.',
    alertaProva:
      'Se o enunciado der duas propostas com taxas de juros diferentes e estruturas de tarifa diferentes, a resposta certa depende do CET — nunca da taxa isolada.',
    tabela: {
      titulo: 'O que entra em cada número',
      colunas: ['Componente', 'Na taxa de juros', 'No CET'],
      linhas: [
        ['Juros', 'Sim', 'Sim'],
        ['IOF', 'Não', 'Sim'],
        ['Tarifa de cadastro', 'Não', 'Sim'],
        ['Seguro prestamista', 'Não', 'Sim'],
      ],
    },
    perguntaRapida: {
      enunciado: 'O Custo Efetivo Total (CET) de uma operação de crédito compreende:',
      alternativas: [
        'Apenas os juros contratados',
        'Juros, tributos, tarifas, seguros e demais despesas da operação',
        'Juros e IOF, excluídas tarifas e seguros',
        'O valor total das parcelas, sem expressá-lo em taxa',
      ],
      correta: 1,
      explicacao:
        'O CET consolida todo o custo em uma taxa anual. É por isso que ele costuma ficar bem acima da taxa de juros anunciada.',
    },
    mapaMental: {
      id: 'mm-cet',
      rotulo: 'CET',
      revisao: true,
      filhos: [
        {
          id: 'mm-cet-comp',
          rotulo: 'O que inclui',
          detalhe: 'Juros · IOF · tarifas · seguros',
          revisao: true,
        },
        { id: 'mm-cet-anual', rotulo: 'Percentual ao ano', detalhe: 'Informado antes de contratar', revisao: true },
        { id: 'mm-cet-tir', rotulo: 'É a TIR do cliente', detalhe: 'Iguala fluxo ao valor liberado' },
        {
          id: 'mm-cet-comparar',
          rotulo: 'Base de comparação',
          detalhe: 'Taxa isolada engana',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'O CET é o preço final do empréstimo: juros mais imposto, tarifa e seguro. É esse número que você compara, não a taxa do anúncio.',
      exemplo:
        'Anunciam 1,8% ao mês. Com IOF, tarifa de cadastro e seguro, o custo real fica bem acima disso — e o CET mostra quanto.',
      analogia:
        'É a diferença entre o preço da passagem e o valor final com taxas e bagagem. Só o total permite comparar companhias.',
      iniciante:
        'Empréstimo tem outros custos além do juro. O CET junta tudo num número só para você saber quanto vai pagar de verdade.',
    },
    niveis: {
      entenda:
        'O CET é o custo total do crédito — juros, imposto, tarifa e seguro — expresso em uma taxa anual. É o número que se compara.',
      aprofunde:
        'O CET é, matematicamente, a taxa interna de retorno da operação sob a ótica do tomador: a taxa que iguala o valor presente de todos os desembolsos futuros ao valor líquido efetivamente liberado. Essa definição tem uma consequência prática pouco percebida — como qualquer TIR, o CET incorpora o MOMENTO de cada pagamento, não só o valor. Uma tarifa cobrada na liberação pesa mais no CET do que a mesma tarifa diluída nas parcelas, porque reduz de imediato o valor líquido recebido. É também por isso que operações de prazo curto exibem CET desproporcionalmente alto quando há custo fixo: anualizar uma tarifa paga uma vez sobre um prazo de poucos meses produz percentuais que assustam sem serem enganosos. A escolha regulatória de expressar o CET ao ano é deliberada: padroniza a base temporal e impede que a comparação dependa do prazo escolhido pela instituição — a mesma razão pela qual a taxa equivalente, e não a proporcional, é a conversão correta entre períodos.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 7,
  },

  {
    id: 'c-financiamento-imobiliario',
    microtemaId: 'm2.3',
    titulo: 'Financiamento imobiliário: SFH, SFI e as garantias',
    objetivo: 'Distinguir SFH de SFI e comparar alienação fiduciária e hipoteca.',
    etiquetas: ['ESSENCIAL', 'DECORAR'],
    resumo30s:
      'SFH usa recursos da poupança e do FGTS e tem limites de valor e de taxa. SFI é livre em valor e taxa. A garantia dominante é a alienação fiduciária, que permite retomada extrajudicial — bem mais rápida que a execução de hipoteca.',
    explicacao: {
      oQueE:
        'Financiamento imobiliário é a operação de crédito de longo prazo destinada à aquisição de imóvel, com o próprio imóvel em garantia.',
      porQueImporta:
        'É a maior dívida da vida da maioria das famílias e o produto de crédito com mais variáveis — sistema de amortização, indexador, garantia e origem dos recursos mudam o custo total de forma relevante.',
      paraQueServe:
        'Viabilizar a aquisição de imóvel diluindo o desembolso ao longo de décadas.',
      comoFunciona: [
        'SFH — Sistema Financeiro da Habitação. Usa recursos da poupança (SBPE) e do FGTS. Tem limite de valor do imóvel e teto de taxa de juros, ambos fixados em norma.',
        'SFI — Sistema de Financiamento Imobiliário. Não tem limite de valor nem teto de taxa: as condições são livremente pactuadas.',
        'ALIENAÇÃO FIDUCIÁRIA: o devedor transfere ao credor a propriedade resolúvel do imóvel e fica com a posse. Quitada a dívida, a propriedade se consolida no devedor automaticamente.',
        'Na inadimplência, a alienação fiduciária permite retomada por procedimento EXTRAJUDICIAL, conduzido em cartório. É rápida — e é o que barateia o crédito.',
        'HIPOTECA: garantia real que exige EXECUÇÃO JUDICIAL para a retomada. Muito mais lenta, e por isso praticamente substituída pela alienação fiduciária no crédito imobiliário.',
      ],
      exemploSimples:
        'No financiamento com alienação fiduciária, o imóvel fica registrado em nome do banco como propriedade resolúvel enquanto durar a dívida. O cliente mora nele, usa e pode vendê-lo com anuência — mas a propriedade plena só volta a ele com a quitação.',
      exemploAplicado:
        'Um cliente pergunta por que o financiamento imobiliário tem juros muito menores que o crédito pessoal, sendo ambos do mesmo banco. A resposta está na garantia: a alienação fiduciária permite retomar o imóvel por via extrajudicial em prazo curto, o que reduz a perda esperada do credor. Garantia melhor, taxa menor — a mesma regra de todo o crédito.',
      lembrarNaProva: [
        'SFH: recursos de poupança e FGTS, com limites de valor e de taxa.',
        'SFI: sem limite de valor, taxa livre.',
        'Alienação fiduciária: propriedade resolúvel e retomada EXTRAJUDICIAL.',
        'Hipoteca: exige execução JUDICIAL, é mais lenta.',
      ],
      revisaoRapida: [
        'SFH usa poupança e FGTS e tem tetos normativos.',
        'SFI é livre em valor e em taxa.',
        'Na alienação fiduciária o credor tem a propriedade resolúvel.',
        'Quitada a dívida, a propriedade se consolida no devedor.',
        'Retomada extrajudicial é o que barateia o crédito imobiliário.',
      ],
    },
    exemplos: [
      {
        titulo: 'Por que a hipoteca perdeu espaço',
        corpo:
          'Executar hipoteca é processo judicial e pode levar anos. A alienação fiduciária resolve em procedimento de cartório, com prazos definidos. Menor tempo de recuperação significa menor perda esperada — e menor taxa cobrada de todos os tomadores.',
      },
    ],
    conceitoChave:
      'A garantia real não protege só o banco: é ela que permite emprestar por trinta anos a uma taxa que o crédito sem garantia jamais alcançaria.',
    pontosChave: [
      'SFH: poupança e FGTS, com limites',
      'SFI: livre em valor e taxa',
      'Alienação fiduciária: propriedade resolúvel',
      'Retomada extrajudicial e rápida',
      'Hipoteca: execução judicial, lenta',
    ],
    erroComum:
      'Achar que na alienação fiduciária o cliente não é dono de nada. Ele tem a posse e o direito de uso; o que o credor detém é propriedade resolúvel, que se extingue com a quitação.',
    alertaProva:
      'O teto de valor do imóvel no SFH e o limite de taxa são fixados por norma e revistos periodicamente. Confira a regra vigente antes de decorar valor.',
    tabela: {
      titulo: 'SFH × SFI e as garantias',
      colunas: ['Aspecto', 'SFH', 'SFI'],
      linhas: [
        ['Origem dos recursos', 'Poupança (SBPE) e FGTS', 'Livre'],
        ['Limite de valor do imóvel', 'Sim, fixado em norma', 'Não há'],
        ['Teto de taxa', 'Sim', 'Não há'],
        ['Garantia usual', 'Alienação fiduciária', 'Alienação fiduciária'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Na alienação fiduciária de imóvel, enquanto a dívida não é quitada:',
      alternativas: [
        'O devedor detém a propriedade plena e o credor apenas um direito de preferência',
        'O credor detém a propriedade resolúvel e o devedor, a posse do imóvel',
        'O imóvel fica indisponível e não pode ser habitado',
        'A propriedade permanece com o vendedor original até a quitação',
      ],
      correta: 1,
      explicacao:
        'A propriedade é resolúvel: consolida-se automaticamente no devedor com a quitação. Até lá, ele tem a posse e usa o imóvel.',
    },
    mapaMental: {
      id: 'mm-imob',
      rotulo: 'Financiamento imobiliário',
      revisao: true,
      filhos: [
        {
          id: 'mm-imob-sfh',
          rotulo: 'SFH',
          detalhe: 'Poupança e FGTS · com limites',
          revisao: true,
        },
        { id: 'mm-imob-sfi', rotulo: 'SFI', detalhe: 'Livre em valor e taxa', revisao: true },
        {
          id: 'mm-imob-af',
          rotulo: 'Alienação fiduciária',
          detalhe: 'Propriedade resolúvel · posse com o devedor',
          revisao: true,
          filhos: [
            { id: 'mm-imob-extra', rotulo: 'Retomada extrajudicial', detalhe: 'Rápida — barateia o crédito', revisao: true },
          ],
        },
        { id: 'mm-imob-hip', rotulo: 'Hipoteca', detalhe: 'Execução judicial · lenta', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'No financiamento da casa, o imóvel fica no nome do banco até você quitar. Você mora e usa; a propriedade volta sozinha quando a dívida acaba.',
      exemplo:
        'Cliente financia o apartamento e mora nele desde o primeiro dia. No registro consta a alienação fiduciária, que cai automaticamente com a última parcela.',
      analogia:
        'É como um documento guardado em caução: o bem é seu de fato, e o papel só é liberado quando a conta fecha.',
      iniciante:
        'Quem financia um imóvel deixa o próprio imóvel como garantia. Se parar de pagar, pode perdê-lo — e por isso o juro é bem menor.',
    },
    niveis: {
      entenda:
        'SFH usa poupança e FGTS e tem limites; SFI é livre. A garantia usual é a alienação fiduciária, que permite retomada rápida e barateia o crédito.',
      aprofunde:
        'A substituição da hipoteca pela alienação fiduciária no crédito imobiliário brasileiro é um dos casos mais claros de como o desenho de garantia determina o preço do crédito. Sob hipoteca, o credor precisava de execução judicial e enfrentava anos de litígio, com o imóvel se depreciando e o saldo devedor crescendo — a perda esperada era alta e entrava na taxa de todos os tomadores, inclusive dos adimplentes. A alienação fiduciária desloca a propriedade para o credor desde a origem, o que transforma a retomada em consolidação de propriedade em cartório, com prazos definidos e purgação de mora possível até a data do leilão. O efeito sobre o custo do crédito foi expressivo e é o argumento central de quem defende o instituto. A crítica legítima aponta a outra ponta: a celeridade extrajudicial reduz o espaço de contraditório do devedor, e a proteção prática passou a depender dos prazos de purgação e da regra de devolução do saldo remanescente do leilão — pontos que concentram a litigiosidade remanescente do tema.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-leasing-cdc',
    microtemaId: 'm2.3',
    titulo: 'Leasing e CDC: financiar um bem de duas formas',
    objetivo: 'Comparar arrendamento mercantil e crédito direto ao consumidor quanto à propriedade e ao desfecho.',
    etiquetas: ['ATENCAO', 'ENTENDER'],
    resumo30s:
      'No CDC o cliente é o dono desde o início, com o bem em alienação fiduciária. No leasing quem compra o bem é a arrendadora: o cliente arrenda e, ao final, escolhe entre comprar pelo valor residual, devolver ou renovar.',
    explicacao: {
      oQueE:
        'São dois contratos distintos para viabilizar o uso de um bem — tipicamente um veículo ou equipamento — sem desembolso integral à vista.',
      porQueImporta:
        'A diferença de propriedade muda tudo: quem pode vender o bem, quem responde por ele e o que acontece no fim do contrato. Cliente que assina leasing achando que comprou tem surpresa no vencimento.',
      paraQueServe:
        'Adquirir ou usar um bem durável pagando ao longo do tempo, com estruturas fiscais e patrimoniais diferentes.',
      comoFunciona: [
        'CDC — Crédito Direto ao Consumidor. O cliente COMPRA o bem e o financia. A propriedade é dele, gravada com alienação fiduciária em favor do credor até a quitação.',
        'LEASING (arrendamento mercantil). A ARRENDADORA compra o bem e o arrenda ao cliente, que paga contraprestações pelo uso. A propriedade é da arrendadora durante o contrato.',
        'Ao fim do leasing o arrendatário tem TRÊS opções: exercer a compra pelo valor residual garantido (VRG), devolver o bem ou renovar o contrato.',
        'O VRG pode ser pago de forma antecipada e diluída nas parcelas. Isso aproxima o leasing de uma compra financiada na prática — mas não muda a natureza jurídica do contrato.',
        'LEASING FINANCEIRO tem prazo próximo da vida útil do bem e destina-se à aquisição; LEASING OPERACIONAL é mais curto, voltado ao uso, e costuma incluir manutenção.',
      ],
      exemploSimples:
        'No CDC de um carro, o veículo já está no nome do cliente com alienação fiduciária averbada. No leasing do mesmo carro, o documento fica em nome da arrendadora durante todo o contrato.',
      exemploAplicado:
        'Um cliente quer vender o carro antes de terminar de pagar. Se o contrato é CDC, ele vende quitando ou transferindo a dívida com anuência do credor. Se é leasing, ele não pode vender o que não é dele: precisa exercer a opção de compra pelo VRG e só então vender. A resposta muda por causa do contrato, não do carro.',
      lembrarNaProva: [
        'CDC: propriedade do cliente, com alienação fiduciária.',
        'Leasing: propriedade da ARRENDADORA durante o contrato.',
        'Ao fim do leasing: comprar pelo VRG, devolver ou renovar.',
        'Leasing financeiro visa aquisição; operacional visa uso.',
      ],
      revisaoRapida: [
        'No CDC o cliente compra e financia.',
        'No leasing a arrendadora compra e arrenda.',
        'Três opções ao fim do leasing: comprar, devolver ou renovar.',
        'O VRG pode ser diluído nas parcelas.',
        'Financeiro é de longo prazo; operacional é de uso.',
      ],
    },
    exemplos: [
      {
        titulo: 'O VRG diluído',
        corpo:
          'Antecipar o valor residual nas parcelas faz o leasing parecer um financiamento comum e reduz a parcela final. Mas a natureza do contrato não muda: até o exercício da opção, a propriedade continua sendo da arrendadora.',
      },
    ],
    conceitoChave:
      'A pergunta que separa os dois contratos é uma só: de quem é o bem durante o contrato.',
    pontosChave: [
      'CDC: propriedade do cliente',
      'Leasing: propriedade da arrendadora',
      'Fim do leasing: comprar, devolver ou renovar',
      'VRG pode ser diluído',
      'Financeiro × operacional',
    ],
    erroComum:
      'Tratar leasing como financiamento comum. Enquanto o contrato corre, o bem não é do cliente — e isso limita venda, transferência e uso como garantia.',
    alertaProva:
      'A banca costuma perguntar as opções ao fim do leasing. São sempre três: exercer a compra pelo VRG, devolver o bem ou renovar o contrato.',
    tabela: {
      titulo: 'CDC × Leasing',
      colunas: ['Aspecto', 'CDC', 'Leasing'],
      linhas: [
        ['Quem compra o bem', 'O cliente', 'A arrendadora'],
        ['Propriedade no contrato', 'Do cliente, com alienação fiduciária', 'Da arrendadora'],
        ['Desfecho', 'Quitação e baixa do gravame', 'Comprar pelo VRG, devolver ou renovar'],
        ['Pode vender durante', 'Sim, com anuência do credor', 'Não, antes de exercer a opção'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Ao término de um contrato de arrendamento mercantil, o arrendatário pode:',
      alternativas: [
        'Apenas devolver o bem à arrendadora',
        'Exercer a compra pelo valor residual, devolver o bem ou renovar o contrato',
        'Apenas exercer a compra, que é obrigatória',
        'Transferir automaticamente a propriedade sem qualquer pagamento adicional',
      ],
      correta: 1,
      explicacao:
        'São três opções, e a compra é faculdade e não obrigação — mesmo quando o VRG foi diluído nas parcelas.',
    },
    mapaMental: {
      id: 'mm-leasing',
      rotulo: 'Leasing × CDC',
      revisao: true,
      filhos: [
        {
          id: 'mm-lea-cdc',
          rotulo: 'CDC',
          detalhe: 'Cliente compra · alienação fiduciária',
          revisao: true,
        },
        {
          id: 'mm-lea-lea',
          rotulo: 'Leasing',
          detalhe: 'Arrendadora compra · cliente arrenda',
          revisao: true,
          filhos: [
            { id: 'mm-lea-opcoes', rotulo: 'Três opções ao fim', detalhe: 'Comprar · devolver · renovar', revisao: true },
            { id: 'mm-lea-vrg', rotulo: 'VRG', detalhe: 'Pode ser diluído nas parcelas', revisao: true },
          ],
        },
        {
          id: 'mm-lea-tipos',
          rotulo: 'Financeiro × operacional',
          detalhe: 'Aquisição × uso',
        },
      ],
    },
    reexplicacoes: {
      simples:
        'No CDC o carro é seu desde o começo, com o banco como garantia. No leasing o carro é da empresa e você paga para usar — e decide no fim se compra.',
      exemplo:
        'Quer vender o carro antes de quitar? No CDC dá, com anuência do credor. No leasing não: primeiro você compra pelo valor residual.',
      analogia:
        'CDC é comprar a casa financiada. Leasing é alugar com opção de compra no fim do contrato.',
      iniciante:
        'São dois jeitos de ter um carro pagando aos poucos. A diferença é de quem é o carro enquanto você paga.',
    },
    niveis: {
      entenda:
        'No CDC o bem é do cliente desde o início. No leasing é da arrendadora, e o cliente escolhe no fim entre comprar, devolver ou renovar.',
      aprofunde:
        'A diluição do VRG nas parcelas gerou uma das controvérsias mais longas do direito bancário brasileiro, porque tensiona a própria natureza do contrato: se o arrendatário paga antecipadamente o valor residual, ele estaria de fato comprando o bem, e o arrendamento seria compra e venda disfarçada — com consequências tributárias, já que o tratamento fiscal do leasing é distinto. A jurisprudência acabou consolidando que a cobrança antecipada do VRG NÃO descaracteriza o arrendamento mercantil, preservando a estrutura, mas com o contrapeso de que, na resolução antecipada do contrato, o VRG pago deve ser devolvido ou compensado com o que for devido — o que impede que a antecipação vire enriquecimento da arrendadora. O ponto conceitual que sobrevive a toda essa discussão é o mesmo que a prova cobra: enquanto a opção de compra não é exercida, a propriedade é da arrendadora, e é dela que decorrem as limitações práticas de venda, transferência e oferecimento do bem em garantia.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },
]
