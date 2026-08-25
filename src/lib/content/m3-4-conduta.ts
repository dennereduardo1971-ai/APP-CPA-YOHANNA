import type { Conceito } from '../types'

/**
 * MICROTEMA 3.4 — Regras e condutas aplicáveis para atuação profissional e no
 * relacionamento com o cliente.
 *
 * Os dois conceitos legados do microtema (`c-conflito` e `c-pld`) continuam
 * declarados em `m3-relacionamento.ts`. Este arquivo traz o bloco que faltava
 * e que a prova cobra com densidade: princípios de conduta, os crimes contra o
 * mercado, as práticas abusivas que não têm tipo penal próprio, sigilo
 * bancário, proteção de dados e os riscos da própria atividade.
 *
 * Toda referência normativa aqui foi lida no texto vigente da fonte primária
 * em 25/08/2026, não em fonte secundária:
 *
 * - Lei 6.385/1976, arts. 27-C a 27-F — redação da Lei 13.506/2017 para os
 *   arts. 27-C e 27-D, e da Lei 14.317/2022 para o art. 27-E.
 * - Lei Complementar 105/2001, art. 1º (§§ 3º e 4º) e art. 10.
 * - Lei 13.709/2018 (LGPD), arts. 6º, 7º, 18 e 52.
 * - Código ANBIMA de Distribuição de Produtos de Investimento, art. 6º,
 *   versão de 22/09/2025.
 *
 * Uma divergência encontrada e mantida à vista: material de cursinho costuma
 * falar em "nove princípios" do Código de Distribuição. O art. 6º da versão
 * vigente tem DEZ incisos. A aula ensina o conteúdo, não a contagem — e o
 * `alertaProva` avisa que decorar o número é o caminho errado.
 */

export const CONCEITOS_3_4: Conceito[] = [
  {
    id: 'c-principios-conduta',
    microtemaId: 'm3.4',
    titulo: 'Princípios gerais de conduta',
    objetivo:
      'Aplicar os princípios de conduta do Código de Distribuição a situações concretas de atendimento.',
    etiquetas: ['ESSENCIAL', 'ENTENDER', 'PEGADINHA'],
    resumo30s:
      'Boa-fé, transparência, diligência e lealdade são a base. O padrão exigido é o da pessoa prudente cuidando dos próprios negócios. Conflito de interesses se identifica, administra e mitiga — e a cobertura do FGC não pode ser o destaque da venda.',
    explicacao: {
      oQueE:
        'O conjunto de deveres de conduta que o Código ANBIMA de Distribuição de Produtos de Investimento impõe a quem distribui, somado aos princípios do Código de Ética da associação.',
      porQueImporta:
        'É a régua com que a prova julga as questões situacionais — e o macrotema de relacionamento vale 30% do exame. Quase toda questão de case se resolve perguntando qual alternativa respeita boa-fé, transparência e primazia do interesse do cliente.',
      paraQueServe:
        'Dar critério de decisão quando a regra específica não cobre o caso: o princípio é o que resolve a situação nova.',
      comoFunciona: [
        'A base é exercer a atividade com BOA-FÉ, TRANSPARÊNCIA, DILIGÊNCIA e LEALDADE. Esses quatro abrem o artigo e sustentam o resto.',
        'O padrão de cuidado exigido é o da pessoa prudente e diligente cuidando dos PRÓPRIOS negócios — e o distribuidor responde pelas infrações e irregularidades cometidas.',
        'Conflito de interesses deve ser IDENTIFICADO, ADMINISTRADO e MITIGADO, para preservar a imparcialidade de quem atende.',
        'A informação ao cliente precisa ser clara e inequívoca sobre riscos e consequências, incluindo taxas, periodicidade de pagamento, carência para resgate e prazo de vencimento.',
        'É vedado destacar a cobertura por fundos garantidores como elemento principal para pautar a decisão de investimento.',
        'A atuação segue os princípios de liberdade de iniciativa e livre concorrência, vedadas a concorrência desleal e as condições não equitativas.',
        'Ter o procedimento escrito não basta: o Código diz que a NÃO IMPLEMENTAÇÃO, ou a implementação inadequada, também é descumprimento.',
      ],
      exemploSimples:
        'Um cliente pergunta se pode perder dinheiro num CDB. Responder "é garantido pelo FGC, pode ficar tranquilo" usa a garantia como argumento de venda e cala o risco — exatamente o que o Código veda.',
      exemploAplicado:
        'Uma campanha interna premia a distribuição de um fundo específico no trimestre. O produto até cabe no perfil de parte dos clientes, mas o assessor passa a oferecê-lo a todos. Não há mentira em nenhuma conversa isolada — e ainda assim há infração: o conflito existia, era conhecido e não foi administrado nem mitigado. O Código não pede que a instituição deixe de ter meta; pede que a meta não contamine a imparcialidade de quem atende, e que o cliente saiba que existe remuneração ligada àquela recomendação.',
      lembrarNaProva: [
        'Boa-fé, transparência, diligência e lealdade são o piso, não o teto.',
        'O padrão de cuidado é o dos próprios negócios de uma pessoa prudente.',
        'Conflito se identifica, administra e mitiga — não se ignora nem se compensa.',
        'Cobertura de fundo garantidor não pode ser o destaque da oferta.',
        'Procedimento existente mas não implementado é descumprimento igual.',
      ],
      revisaoRapida: [
        'Quatro pilares: boa-fé, transparência, diligência, lealdade.',
        'Cuidado de quem administra o próprio negócio.',
        'Conflito: identificar, administrar, mitigar.',
        'Risco, taxas, carência e prazo informados de forma inequívoca.',
        'FGC não é argumento de venda.',
        'Papel sem prática é descumprimento.',
      ],
    },
    exemplos: [
      {
        titulo: 'Por que "não menti" não é defesa',
        corpo:
          'O dever de transparência é ativo: exige informar o que é relevante, não apenas evitar a afirmação falsa. Omitir carência de resgate numa oferta é descumprimento mesmo que nada de errado tenha sido dito em voz alta.',
      },
      {
        titulo: 'O princípio resolve o caso novo',
        corpo:
          'Nenhum código consegue prever toda situação de atendimento. Quando a regra específica não alcança o caso, a pergunta que decide é a do princípio: essa conduta preserva a boa-fé e o interesse do cliente, ou preserva o meu?',
      },
    ],
    conceitoChave:
      'Os princípios existem para decidir o caso que a regra específica não previu — e o critério é sempre o interesse do cliente.',
    pontosChave: [
      'Boa-fé, transparência, diligência e lealdade',
      'Cuidado de pessoa prudente nos próprios negócios',
      'Identificar, administrar e mitigar conflitos',
      'Informação inequívoca sobre risco, taxas e prazos',
      'FGC nunca como destaque da oferta',
      'Implementação inadequada também é descumprimento',
    ],
    erroComum:
      'Tratar o Código como lista para decorar e contar quantos itens tem. A prova cobra aplicação: dá uma situação e pede a conduta correta.',
    alertaProva:
      'Cuidado com a contagem: material de cursinho fala em "nove princípios", mas a versão vigente do Código de Distribuição traz dez incisos no art. 6º. Números de lista mudam a cada revisão do Código — a banca pergunta a conduta, não a aritmética.',
    tabela: {
      titulo: 'Situação e princípio que a resolve',
      colunas: ['Situação', 'Princípio aplicável'],
      linhas: [
        ['Campanha premia um produto específico', 'Identificar, administrar e mitigar conflito'],
        ['Cliente pergunta sobre risco de um CDB', 'Informação clara; FGC não é destaque'],
        ['Produto com carência de resgate', 'Transparência sobre carência e prazo'],
        ['Manual escrito que ninguém segue', 'Implementação inadequada é descumprimento'],
        ['Comparação depreciativa com concorrente', 'Livre concorrência, vedada a desleal'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Um cliente pergunta se corre risco ao aplicar em um CDB. A resposta mais alinhada ao Código de Distribuição é:',
      alternativas: [
        'Explicar o risco de crédito do emissor e mencionar a cobertura do FGC como um dos elementos, entre limites e condições',
        'Afirmar que é garantido pelo FGC e que ele pode ficar tranquilo',
        'Dizer que CDB de banco grande não tem risco na prática',
        'Responder que todo investimento tem risco e mudar de assunto',
      ],
      correta: 0,
      explicacao:
        'O Código veda apresentar a cobertura por fundos garantidores como elemento de maior destaque para pautar a decisão. A garantia entra como informação, não como argumento que encerra a conversa.',
    },
    mapaMental: {
      id: 'mm-pgc',
      rotulo: 'Princípios de conduta',
      revisao: true,
      filhos: [
        {
          id: 'mm-pgc-base',
          rotulo: 'Base',
          detalhe: 'Boa-fé, transparência, diligência, lealdade',
          revisao: true,
        },
        {
          id: 'mm-pgc-cuidado',
          rotulo: 'Padrão de cuidado',
          detalhe: 'Como nos próprios negócios',
          revisao: true,
        },
        {
          id: 'mm-pgc-conflito',
          rotulo: 'Conflito',
          detalhe: 'Identificar, administrar, mitigar',
          revisao: true,
        },
        {
          id: 'mm-pgc-info',
          rotulo: 'Informação',
          detalhe: 'Risco, taxas, carência, prazo',
          revisao: true,
        },
        { id: 'mm-pgc-fgc', rotulo: 'FGC', detalhe: 'Nunca como destaque', revisao: true },
        { id: 'mm-pgc-impl', rotulo: 'Implementação', detalhe: 'Papel sem prática não vale' },
      ],
    },
    reexplicacoes: {
      simples:
        'São os deveres básicos de quem oferece investimento: agir de boa-fé, dizer a verdade inteira, cuidar do dinheiro do cliente como cuidaria do próprio e não deixar o próprio interesse decidir a recomendação.',
      exemplo:
        'Uma campanha premia quem vender um fundo. Oferecer esse fundo a todos os clientes, sem olhar perfil, é conflito não administrado — mesmo que nenhuma frase dita seja falsa.',
      analogia:
        'É como um médico que recebe bônus de um laboratório: o problema não é receitar aquele remédio, é receitar por causa do bônus — e o paciente não saber que ele existe.',
      iniciante:
        'Quem vende investimento tem regras de comportamento. A principal é simples: o interesse de quem compra vem antes do interesse de quem vende.',
    },
    niveis: {
      entenda:
        'São os deveres de conduta de quem distribui investimento: boa-fé, transparência, diligência e lealdade, com o interesse do cliente sempre à frente do próprio.',
      aprofunde:
        'Vale entender por que um código de autorregulação repete deveres que a lei já impõe. A resposta está no tipo de sanção e na velocidade: a ANBIMA não prende ninguém e não aplica pena criminal, mas alcança condutas que a norma estatal descreveria de forma vaga demais para punir, e alcança rápido. O art. 7º do Código de Distribuição faz uma escolha que merece atenção: define que descumprimento não é só a ausência de procedimento, mas também a sua não implementação ou implementação inadequada — e nomeia como evidência disso a reiteração de falhas não sanadas no prazo e a ausência de mecanismos que demonstrem a aplicação do que está escrito. Na prática, isso desloca o ônus: não basta exibir o manual, é preciso exibir o rastro de que ele opera. Há ainda uma articulação que a prova explora: o Código de Distribuição declara-se somado aos princípios do Código de Ética da ANBIMA, de modo que os deveres não se substituem, se acumulam — e acima de ambos continua valendo a regulação estatal, que a autorregulação complementa e nunca afasta.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-crimes-mercado',
    microtemaId: 'm3.4',
    titulo: 'Crimes contra o mercado de capitais',
    objetivo:
      'Distinguir os três crimes da Lei 6.385/1976 e reconhecer cada um a partir da conduta descrita.',
    etiquetas: ['ESSENCIAL', 'DECORAR', 'PEGADINHA'],
    resumo30s:
      'Três tipos penais: manipulação de mercado (27-C), uso indevido de informação privilegiada (27-D) e exercício irregular da atividade (27-E). Quem repassa a informação sigilosa responde igual a quem opera com ela.',
    explicacao: {
      oQueE:
        'Os crimes tipificados na Lei 6.385/1976 para condutas que atacam a integridade do mercado de valores mobiliários.',
      porQueImporta:
        'É o bloco com maior densidade de pegadinha do exame, porque os nomes se parecem e as penas se confundem. E é o único ponto do programa em que a conduta errada leva a processo criminal, não só a sanção administrativa.',
      paraQueServe:
        'Proteger a confiança de que o preço formado no mercado reflete informação disponível a todos, e não a vantagem de quem soube antes.',
      comoFunciona: [
        'MANIPULAÇÃO DE MERCADO (art. 27-C): operações simuladas ou manobras fraudulentas destinadas a elevar, manter ou baixar a cotação, o preço ou o volume negociado de um valor mobiliário, para obter vantagem indevida ou causar dano. Pena de RECLUSÃO de 1 a 8 anos e multa de até três vezes a vantagem ilícita.',
        'USO INDEVIDO DE INFORMAÇÃO PRIVILEGIADA (art. 27-D), o insider trading: utilizar informação relevante ainda não divulgada ao mercado, capaz de propiciar vantagem indevida, negociando valores mobiliários. Pena de RECLUSÃO de 1 a 5 anos e multa de até três vezes a vantagem.',
        'Repassar a informação sigilosa também é crime, com a MESMA PENA: responde quem passa adiante fato relevante a que teve acesso por cargo no emissor ou por relação comercial, profissional ou de confiança com ele.',
        'A pena do 27-D aumenta em UM TERÇO quando o agente tinha dever de manter sigilo sobre aquela informação.',
        'EXERCÍCIO IRREGULAR (art. 27-E): atuar no mercado como administrador de carteira, assessor de investimento, auditor independente, analista ou agente fiduciário sem autorização ou registro. Pena de DETENÇÃO de 6 meses a 2 anos e multa.',
        'As multas dos arts. 27-C e 27-D são dosadas pelo dano provocado ou pela vantagem obtida, e podem chegar ao triplo em caso de reincidência.',
      ],
      exemploSimples:
        'Um funcionário sabe que sua empresa anunciará a compra de uma concorrente amanhã. Comprar ações hoje é insider trading. Contar ao cunhado para que ele compre é o mesmo crime, com a mesma pena.',
      exemploAplicado:
        'Um analista participa da reunião em que se decide uma aquisição relevante e, na mesma tarde, comenta o assunto com um gestor amigo, sem operar nada em nome próprio. O gestor compra. A intuição comum diz que só o gestor cometeu crime, porque só ele lucrou — e é justamente aí que a lei surpreende: o § 1º do art. 27-D coloca quem repassou na mesma pena, sem exigir que tenha operado ou lucrado. Como o analista tinha dever de sigilo em razão do cargo, ainda entra a majorante de um terço. Não operar não é defesa; o dano ao mercado se consuma na quebra da simetria de informação.',
      lembrarNaProva: [
        'Manipulação: reclusão de 1 a 8 anos. É a pena mais alta dos três.',
        'Insider: reclusão de 1 a 5 anos, com aumento de 1/3 se havia dever de sigilo.',
        'Quem repassa a informação responde na mesma pena de quem opera.',
        'Exercício irregular: DETENÇÃO de 6 meses a 2 anos — o único que não é reclusão.',
        'As multas dos arts. 27-C e 27-D vão até três vezes a vantagem ilícita.',
      ],
      revisaoRapida: [
        '27-C manipulação — reclusão 1 a 8 anos.',
        '27-D insider — reclusão 1 a 5 anos.',
        'Repassar informação = mesma pena do 27-D.',
        'Dever de sigilo = pena aumentada em 1/3.',
        '27-E exercício irregular — detenção 6 meses a 2 anos.',
        'Multa até 3x a vantagem; reincidência até o triplo.',
      ],
    },
    exemplos: [
      {
        titulo: 'Reclusão e detenção não são sinônimos',
        corpo:
          'Os dois crimes que atacam a formação de preço — manipulação e insider — são punidos com reclusão, o regime mais severo. O exercício irregular, que é atuar sem registro, fica na detenção. A prova gosta de trocar os dois.',
      },
      {
        titulo: 'A palavra mudou: assessor de investimento',
        corpo:
          'A redação atual do art. 27-E fala em assessor de investimento, denominação que substituiu agente autônomo de investimento na Lei 14.317/2022. Enunciado com o nome antigo trata do mesmo profissional.',
      },
    ],
    conceitoChave:
      'Os três crimes protegem coisas diferentes: a formação honesta do preço, a simetria da informação e a habilitação de quem atua.',
    pontosChave: [
      '27-C manipulação: reclusão 1 a 8 anos',
      '27-D insider: reclusão 1 a 5 anos',
      'Repasse de informação: mesma pena',
      'Dever de sigilo: aumento de 1/3',
      '27-E irregular: detenção 6 meses a 2 anos',
      'Multa de até 3x a vantagem ilícita',
    ],
    erroComum:
      'Achar que só comete insider trading quem compra ou vende. Quem apenas repassa a informação relevante responde na mesma pena, mesmo sem operar e sem lucrar.',
    alertaProva:
      'Duas trocas clássicas: dar reclusão ao exercício irregular (é detenção) e limitar o insider a quem operou (o repasse tem a mesma pena). Quando o enunciado disser que o agente tinha dever de sigilo, lembre da majorante de um terço.',
    tabela: {
      titulo: 'Os três crimes da Lei 6.385/1976',
      colunas: ['Artigo', 'Conduta', 'Pena'],
      linhas: [
        ['27-C', 'Manipulação de mercado', 'Reclusão 1 a 8 anos e multa'],
        ['27-D', 'Uso indevido de informação privilegiada', 'Reclusão 1 a 5 anos e multa'],
        ['27-D, § 1º', 'Repassar informação sigilosa relevante', 'Mesma pena do caput'],
        ['27-D, § 2º', 'Agente com dever de sigilo', 'Pena aumentada em 1/3'],
        ['27-E', 'Exercício irregular da atividade', 'Detenção 6 meses a 2 anos e multa'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Um diretor conta a um amigo, antes da divulgação, que a companhia fará uma aquisição relevante. O amigo compra ações e lucra; o diretor não opera. Sobre o diretor:',
      alternativas: [
        'Nada cometeu, pois não negociou valores mobiliários nem obteve lucro',
        'Responde por uso indevido de informação privilegiada, na mesma pena de quem operou',
        'Responde apenas administrativamente perante a CVM',
        'Responde por manipulação de mercado, por ter alterado o volume negociado',
      ],
      correta: 1,
      explicacao:
        'O § 1º do art. 27-D põe na mesma pena quem repassa informação sigilosa relativa a fato relevante obtida em razão do cargo. Operar e lucrar não são elementos exigidos de quem repassa.',
    },
    mapaMental: {
      id: 'mm-crm',
      rotulo: 'Crimes de mercado',
      revisao: true,
      filhos: [
        {
          id: 'mm-crm-27c',
          rotulo: '27-C Manipulação',
          detalhe: 'Reclusão 1 a 8 anos',
          revisao: true,
        },
        {
          id: 'mm-crm-27d',
          rotulo: '27-D Insider',
          detalhe: 'Reclusão 1 a 5 anos',
          revisao: true,
          filhos: [
            { id: 'mm-crm-27d-rep', rotulo: 'Repasse', detalhe: 'Mesma pena', revisao: true },
            { id: 'mm-crm-27d-sig', rotulo: 'Dever de sigilo', detalhe: 'Aumento de 1/3', revisao: true },
          ],
        },
        {
          id: 'mm-crm-27e',
          rotulo: '27-E Irregular',
          detalhe: 'Detenção 6 meses a 2 anos',
          revisao: true,
        },
        { id: 'mm-crm-27f', rotulo: '27-F Multa', detalhe: 'Até 3x; reincidência, o triplo' },
      ],
    },
    reexplicacoes: {
      simples:
        'São três crimes: mexer artificialmente no preço, usar informação que o mercado ainda não tem, e atuar sem registro. Os dois primeiros dão reclusão; o terceiro, detenção.',
      exemplo:
        'Saber antes que a empresa será comprada e avisar um amigo para ele comprar ações: crime, com a mesma pena de quem comprou.',
      analogia:
        'É como contar o resultado antes do jogo terminar para alguém apostar: quem contou não apostou, mas estragou a aposta de todo mundo.',
      iniciante:
        'Não vale usar informação que só você sabe para ganhar dinheiro no mercado — nem passar essa informação para outra pessoa usar.',
    },
    niveis: {
      entenda:
        'Manipular preço e usar informação privilegiada são crimes com pena de reclusão. Atuar sem registro é crime com pena de detenção, mais branda.',
      aprofunde:
        'A reforma da Lei 13.506/2017 fez uma mudança que passa despercebida e explica a estrutura atual do art. 27-D. Na redação de 2001, o tipo exigia que o agente tivesse o dever de manter sigilo sobre a informação, o que na prática restringia o crime a insiders primários — quem estava dentro da companhia. A nova redação retirou essa exigência do caput e a transformou em causa de aumento de pena no § 2º. O efeito é relevante: o insider secundário, que recebeu a informação de terceiro e não devia sigilo a ninguém, passou a caber no tipo básico, enquanto o insider primário responde pelo mesmo crime com um terço a mais. No mesmo movimento, o § 1º alcançou o tipper, encerrando a discussão sobre punir quem apenas repassa. Vale registrar também que a responsabilização criminal convive com a administrativa: a CVM pode sancionar independentemente do processo penal, e as esferas não se anulam. Por fim, o art. 27-C teve o núcleo ajustado de uma fórmula genérica sobre alterar o regular funcionamento do mercado para a descrição objetiva de elevar, manter ou baixar cotação, preço ou volume — redação que abarca com mais clareza as manobras feitas por ordens, tema do conceito seguinte.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 9,
  },

  {
    id: 'c-praticas-abusivas',
    microtemaId: 'm3.4',
    titulo: 'Práticas abusivas: spoofing, layering, churning e front running',
    objetivo:
      'Reconhecer cada prática abusiva pela descrição da conduta e identificar quem é prejudicado.',
    etiquetas: ['ESSENCIAL', 'DECORAR', 'PEGADINHA'],
    resumo30s:
      'Spoofing e layering enganam o mercado com ordens que não se quer executar. Churning gira a carteira para gerar corretagem. Front running usa a ordem do cliente antes dele. Money pass transfere resultado entre contas por operações combinadas.',
    explicacao: {
      oQueE:
        'Condutas abusivas praticadas por meio de ordens e operações, que distorcem o preço ou exploram o cliente sem que haja, necessariamente, informação privilegiada envolvida.',
      porQueImporta:
        'São os nomes que a prova cobra literalmente. E a distinção prática importa: umas atacam o mercado como um todo, outras atacam o cliente específico daquele profissional.',
      paraQueServe:
        'Nomear condutas que a fiscalização identifica por padrão de comportamento — e que, quando fraudulentas e voltadas a mover preço, caem no crime de manipulação do art. 27-C.',
      comoFunciona: [
        'SPOOFING: inserir ordens de compra ou venda sem intenção de executá-las, apenas para criar aparência de demanda ou oferta, cancelando-as antes do fechamento. A ordem falsa induz outros a reagir.',
        'LAYERING: variação do spoofing em CAMADAS — várias ordens em diferentes níveis de preço, do mesmo lado do livro, formando uma parede artificial que empurra o preço na direção desejada.',
        'CHURNING: girar a carteira do cliente com frequência desnecessária, gerando corretagem para o intermediário sem benefício correspondente ao investidor.',
        'FRONT RUNNING: operar em nome próprio ANTES de executar a ordem do cliente, aproveitando o efeito que essa ordem terá no preço.',
        'MONEY PASS: transferir resultado financeiro entre contas por meio de operações combinadas, feitas a preços fora do mercado — uma perde de propósito para que a outra ganhe.',
        'A diferença de vítima organiza tudo: spoofing, layering e money pass ferem o mercado; churning e front running ferem primeiro o cliente atendido.',
      ],
      exemploSimples:
        'Um operador coloca uma ordem grande de compra que não pretende executar, o preço sobe, ele vende o que tinha e cancela a ordem. É spoofing.',
      exemploAplicado:
        'Um assessor recebe de um cliente institucional a ordem de comprar um lote grande de determinada ação. Antes de executá-la, compra o mesmo papel na própria conta; a ordem do cliente entra em seguida, pressiona o preço para cima, e ele vende com lucro. Nenhuma informação sigilosa da companhia foi usada — a informação privilegiada aqui é a própria ordem do cliente. Por isso front running não se confunde com insider trading: o que se explorou não foi um fato relevante ainda não divulgado, foi a posição de quem conhece o fluxo antes do mercado.',
      lembrarNaProva: [
        'Spoofing: ordem falsa, sem intenção de executar, cancelada depois.',
        'Layering: o mesmo em várias camadas de preço — parede artificial.',
        'Churning: giro excessivo para gerar corretagem. A vítima é o cliente.',
        'Front running: operar na frente da ordem do cliente.',
        'Money pass: transferir resultado entre contas a preços fora do mercado.',
      ],
      revisaoRapida: [
        'Spoofing e layering: enganar pelo livro de ofertas.',
        'Layering é spoofing em camadas.',
        'Churning: corretagem à custa do cliente.',
        'Front running: a ordem do cliente é a informação explorada.',
        'Money pass: perda combinada de um lado, ganho do outro.',
      ],
    },
    exemplos: [
      {
        titulo: 'Front running não é insider trading',
        corpo:
          'Insider explora fato relevante da companhia ainda não divulgado. Front running explora o conhecimento da ordem do cliente. A prova costuma oferecer insider como distrator em caso de front running, e vice-versa.',
      },
      {
        titulo: 'Como o churning aparece no enunciado',
        corpo:
          'Raramente pelo nome. O enunciado descreve uma carteira com dezenas de operações no mês, resultado próximo de zero e corretagem alta. O sinal é a desproporção entre giro e benefício ao cliente.',
      },
    ],
    conceitoChave:
      'Pergunte quem foi lesado: o mercado inteiro (spoofing, layering, money pass) ou o cliente daquele profissional (churning, front running).',
    pontosChave: [
      'Spoofing: ordem sem intenção de executar',
      'Layering: camadas de ordens falsas',
      'Churning: giro para gerar corretagem',
      'Front running: operar na frente do cliente',
      'Money pass: resultado transferido entre contas',
    ],
    erroComum:
      'Confundir front running com insider trading. No front running a informação explorada é a ordem do cliente, não um fato relevante da companhia.',
    alertaProva:
      'Layering e spoofing costumam aparecer juntos como alternativas. O detalhe que separa é a palavra CAMADAS: várias ordens escalonadas em preços diferentes indicam layering.',
    tabela: {
      titulo: 'Prática, conduta e vítima',
      colunas: ['Prática', 'Conduta', 'Quem é lesado'],
      linhas: [
        ['Spoofing', 'Ordem falsa, cancelada antes de executar', 'O mercado'],
        ['Layering', 'Camadas de ordens falsas no livro', 'O mercado'],
        ['Churning', 'Giro excessivo da carteira', 'O cliente'],
        ['Front running', 'Operar antes da ordem do cliente', 'O cliente'],
        ['Money pass', 'Operações casadas fora do preço', 'O mercado e a contraparte'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Um intermediário insere sucessivas ordens de compra em diferentes níveis de preço, sem intenção de executá-las, para dar aparência de forte demanda. A prática é:',
      alternativas: ['Churning', 'Layering', 'Front running', 'Money pass'],
      correta: 1,
      explicacao:
        'Ordens falsas escalonadas em vários níveis de preço caracterizam layering — o spoofing em camadas. Não há giro de carteira nem uso da ordem de cliente.',
    },
    mapaMental: {
      id: 'mm-abus',
      rotulo: 'Práticas abusivas',
      revisao: true,
      filhos: [
        {
          id: 'mm-abus-mercado',
          rotulo: 'Ferem o mercado',
          revisao: true,
          filhos: [
            { id: 'mm-abus-spoof', rotulo: 'Spoofing', detalhe: 'Ordem falsa', revisao: true },
            { id: 'mm-abus-layer', rotulo: 'Layering', detalhe: 'Em camadas', revisao: true },
            { id: 'mm-abus-money', rotulo: 'Money pass', detalhe: 'Resultado transferido' },
          ],
        },
        {
          id: 'mm-abus-cliente',
          rotulo: 'Ferem o cliente',
          revisao: true,
          filhos: [
            { id: 'mm-abus-churn', rotulo: 'Churning', detalhe: 'Giro por corretagem', revisao: true },
            { id: 'mm-abus-front', rotulo: 'Front running', detalhe: 'Na frente da ordem', revisao: true },
          ],
        },
      ],
    },
    reexplicacoes: {
      simples:
        'São truques com ordens e operações: fingir interesse de compra para mexer no preço, girar a carteira do cliente só para cobrar taxa, ou passar na frente da ordem dele.',
      exemplo:
        'O assessor sabe que o cliente vai comprar um lote grande. Compra antes, o preço sobe com a ordem do cliente, e ele vende com lucro. Isso é front running.',
      analogia:
        'Front running é como o caixa que, sabendo que uma van vai comprar todo o estoque, compra as últimas unidades antes para revender mais caro à própria van.',
      iniciante:
        'Existem manobras proibidas no mercado: umas enganam quem está negociando, outras exploram o cliente de quem deveria cuidar dele.',
    },
    niveis: {
      entenda:
        'Spoofing e layering são ordens falsas para mexer no preço. Churning é girar a carteira para cobrar taxa. Front running é operar antes da ordem do cliente.',
      aprofunde:
        'Estas práticas não têm, cada uma, um tipo penal com nome próprio: são espécies que a fiscalização enquadra em categorias mais amplas. Spoofing e layering, quando destinados a elevar, manter ou baixar cotação, preço ou volume, encaixam-se na manobra fraudulenta do art. 27-C da Lei 6.385/1976 — e é por isso que a redação dada pela Lei 13.506/2017, ao descrever o resultado buscado em vez de falar genericamente em alterar o regular funcionamento do mercado, tornou o enquadramento mais direto. No plano administrativo, a CVM trabalha com as categorias de operação fraudulenta, prática não equitativa, manipulação de preços e condição artificial de demanda, oferta ou preço; churning e front running costumam ser tratados como prática não equitativa, porque colocam uma parte em posição de desvantagem indevida frente a outra. Duas consequências práticas decorrem disso. A primeira é que a punição administrativa não depende de condenação criminal, e é o caminho mais frequente. A segunda é que a prova de churning raramente se faz por uma operação isolada: constrói-se por indicadores de giro da carteira e pela relação entre corretagem gerada e patrimônio administrado, ou seja, por padrão estatístico de comportamento, não por um ato único flagrado.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-sigilo',
    microtemaId: 'm3.4',
    titulo: 'Sigilo bancário',
    objetivo:
      'Identificar quando a informação do cliente pode ser compartilhada sem violar o sigilo bancário.',
    etiquetas: ['ESSENCIAL', 'ATENCAO', 'PEGADINHA'],
    resumo30s:
      'Instituições financeiras guardam sigilo das operações ativas, passivas e serviços. A lei lista o que NÃO é violação — inclusive comunicar ilícito às autoridades. Quebrar fora dessas hipóteses é crime, com reclusão de 1 a 4 anos.',
    explicacao: {
      oQueE:
        'O dever, imposto pela Lei Complementar 105/2001, de as instituições financeiras conservarem sigilo sobre suas operações ativas e passivas e os serviços prestados.',
      porQueImporta:
        'É o ponto em que dois deveres parecem colidir: guardar segredo do cliente e comunicar operação suspeita ao COAF. A prova explora exatamente essa aparente contradição.',
      paraQueServe:
        'Proteger a privacidade financeira do cliente sem transformar o sigilo em abrigo para ilícito.',
      comoFunciona: [
        'O dever alcança bancos, corretoras, distribuidoras, cooperativas de crédito, administradoras de cartão, bolsas, entidades de liquidação e as demais listadas na lei.',
        'A lei enumera o que NÃO constitui violação do dever de sigilo — e é essa lista que a prova cobra.',
        'NÃO é violação: a troca de informações entre instituições para fins cadastrais, o fornecimento de dados a entidades de proteção ao crédito e a revelação com consentimento expresso do interessado.',
        'NÃO é violação a comunicação às autoridades competentes da prática de ilícitos penais ou administrativos, incluindo informações sobre operações com recursos de origem criminosa. É aqui que o dever de comunicar ao COAF se concilia com o sigilo.',
        'O sigilo NÃO é oponível ao BACEN e à CVM no exercício da fiscalização, e o dever de sigilo se estende a esses órgãos.',
        'A quebra pode ser decretada quando necessária à apuração de ilícito, em qualquer fase de inquérito ou processo judicial, especialmente em crimes como terrorismo, tráfico, crimes contra o SFN, contra a administração pública, lavagem de dinheiro e organização criminosa.',
        'Quebrar o sigilo fora das hipóteses autorizadas é CRIME: reclusão de 1 a 4 anos e multa. Incorre na mesma pena quem omite, retarda injustificadamente ou presta falsamente informação requerida.',
      ],
      exemploSimples:
        'Um gerente comenta com um conhecido o saldo de um cliente. Não há hipótese legal que autorize — é quebra de sigilo, e a lei a trata como crime.',
      exemploAplicado:
        'Uma instituição identifica movimentações incompatíveis com a capacidade financeira declarada e comunica ao órgão competente sem avisar o cliente. Parece violação de sigilo, e é a leitura intuitiva errada: a lei diz expressamente que comunicar às autoridades a prática de ilícitos, com informações sobre operações que envolvam recursos de origem criminosa, não constitui violação do dever de sigilo. O silêncio quanto ao cliente também não é escolha do funcionário — a legislação de prevenção à lavagem veda a cientificação. Os dois deveres não colidem: um deles já foi excepcionado pelo outro no próprio texto legal.',
      lembrarNaProva: [
        'Comunicar ilícito às autoridades NÃO é violação de sigilo.',
        'Consentimento expresso do interessado afasta a violação.',
        'Troca cadastral entre instituições e cadastro de inadimplentes não violam.',
        'O sigilo não é oponível a BACEN e CVM na fiscalização.',
        'Quebra indevida é crime: reclusão de 1 a 4 anos e multa.',
      ],
      revisaoRapida: [
        'Sigilo sobre operações ativas, passivas e serviços.',
        'Comunicar ilícito à autoridade não viola.',
        'Consentimento expresso não viola.',
        'BACEN e CVM fiscalizam e também guardam sigilo.',
        'Quebra indevida: reclusão de 1 a 4 anos.',
      ],
    },
    exemplos: [
      {
        titulo: 'Sigilo não é escudo de ilícito',
        corpo:
          'A lógica da lei é simples: o sigilo protege a privacidade do cliente honesto. Quando a informação diz respeito a possível crime, a própria lei retira a comunicação do campo da violação.',
      },
      {
        titulo: 'Sigilo bancário e sigilo fiscal',
        corpo:
          'São deveres distintos, com regimes próprios. O enunciado que trata de dados de conta e operação está no bancário, regido pela LC 105/2001.',
      },
    ],
    conceitoChave:
      'O sigilo protege o cliente, não a operação ilícita — e a própria lei lista o que fica fora do dever.',
    pontosChave: [
      'Operações ativas, passivas e serviços',
      'Comunicação de ilícito não viola',
      'Consentimento expresso não viola',
      'Não oponível a BACEN e CVM',
      'Quebra indevida: reclusão de 1 a 4 anos',
    ],
    erroComum:
      'Achar que comunicar operação suspeita ao órgão competente fere o sigilo bancário. A lei exclui expressamente essa comunicação do conceito de violação.',
    alertaProva:
      'O distrator mais comum é a alternativa que exige autorização judicial para tudo. Nem toda hipótese depende de decisão judicial: consentimento do cliente, troca cadastral e comunicação de ilícito estão fora do dever por força de lei.',
    tabela: {
      titulo: 'Viola ou não viola o sigilo',
      colunas: ['Situação', 'Enquadramento'],
      linhas: [
        ['Comunicar ilícito às autoridades', 'Não é violação'],
        ['Cliente autoriza expressamente', 'Não é violação'],
        ['Troca cadastral entre instituições', 'Não é violação'],
        ['Fiscalização do BACEN ou da CVM', 'Não é oponível'],
        ['Comentar dados do cliente com terceiro', 'Crime: reclusão 1 a 4 anos'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Uma instituição comunica ao órgão competente movimentações do cliente incompatíveis com sua capacidade financeira, sem cientificá-lo. Essa conduta:',
      alternativas: [
        'Viola o sigilo bancário e depende de autorização judicial prévia',
        'Não constitui violação do dever de sigilo, pois a lei excepciona a comunicação de ilícitos',
        'Viola o sigilo, salvo se o cliente autorizar depois',
        'Só é permitida se houver condenação criminal transitada em julgado',
      ],
      correta: 1,
      explicacao:
        'A LC 105/2001 estabelece que não constitui violação do dever de sigilo a comunicação, às autoridades competentes, da prática de ilícitos penais ou administrativos. A não cientificação do cliente é exigida pela legislação de prevenção à lavagem.',
    },
    mapaMental: {
      id: 'mm-sig',
      rotulo: 'Sigilo bancário',
      revisao: true,
      filhos: [
        {
          id: 'mm-sig-obj',
          rotulo: 'Alcance',
          detalhe: 'Operações ativas, passivas e serviços',
          revisao: true,
        },
        {
          id: 'mm-sig-nao',
          rotulo: 'Não é violação',
          revisao: true,
          filhos: [
            { id: 'mm-sig-ilicito', rotulo: 'Comunicar ilícito', revisao: true },
            { id: 'mm-sig-consent', rotulo: 'Consentimento expresso', revisao: true },
            { id: 'mm-sig-cadastro', rotulo: 'Troca cadastral' },
          ],
        },
        { id: 'mm-sig-fisc', rotulo: 'BACEN e CVM', detalhe: 'Não oponível na fiscalização' },
        { id: 'mm-sig-crime', rotulo: 'Quebra indevida', detalhe: 'Reclusão 1 a 4 anos', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'O banco não pode contar a ninguém o que você movimenta. Mas a lei abre exceções: com sua autorização, para fins cadastrais e, principalmente, para avisar as autoridades sobre possível crime.',
      exemplo:
        'Comunicar ao órgão competente uma movimentação suspeita não é quebra de sigilo — a lei diz isso com todas as letras.',
      analogia:
        'É como o sigilo de uma conversa: protege a confidência, não o plano de cometer um crime contado dentro dela.',
      iniciante:
        'As informações da sua conta são secretas. Mas se houver suspeita de crime, o banco tem de avisar as autoridades, e isso não conta como quebrar o segredo.',
    },
    niveis: {
      entenda:
        'O banco deve guardar segredo das operações do cliente. A lei lista exceções, e comunicar suspeita de crime às autoridades é uma delas.',
      aprofunde:
        'Vale distinguir dois planos que o enunciado costuma embaralhar: o afastamento do dever de sigilo e a quebra do sigilo. O primeiro está no § 3º do art. 1º da LC 105/2001, que declara certas condutas fora do conceito de violação — troca cadastral, cadastro de inadimplentes, consentimento expresso e comunicação de ilícitos, entre outras. Nesses casos não há sigilo a ser quebrado, porque a informação já não está protegida naquela finalidade específica. O segundo plano é o da quebra propriamente dita, do § 4º, que pressupõe informação protegida e exige decisão para afastá-la, sendo cabível em qualquer fase de inquérito ou processo judicial quando necessária à apuração de ilícito. Há ainda uma terceira via que gerou longa controvérsia: o acesso da administração tributária a dados bancários sem decisão judicial, previsto nos arts. 5º e 6º da mesma lei, cuja constitucionalidade foi reconhecida pelo Supremo Tribunal Federal em 2016 sob o entendimento de que se trata de transferência de sigilo, e não de quebra — o dado permanece protegido, apenas muda de custódia. Por fim, o regime não é apenas administrativo: o art. 10 tipifica a quebra fora das hipóteses autorizadas como crime punido com reclusão de um a quatro anos, e estende a mesma pena a quem omite, retarda injustificadamente ou presta falsamente as informações requeridas — ou seja, sonegar informação legítima é punido tanto quanto revelar o que deveria ficar guardado.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-lgpd',
    microtemaId: 'm3.4',
    titulo: 'LGPD: proteção de dados no atendimento',
    objetivo:
      'Aplicar os princípios e as bases legais da LGPD ao tratamento de dados do cliente investidor.',
    etiquetas: ['ESSENCIAL', 'ENTENDER', 'PEGADINHA'],
    resumo30s:
      'Consentimento é apenas UMA das dez bases legais de tratamento. Os princípios incluem finalidade, necessidade e transparência. O titular pode confirmar, acessar, corrigir, eliminar e portar seus dados. A multa vai a 2% do faturamento, limitada a R$ 50 milhões por infração.',
    explicacao: {
      oQueE:
        'A Lei 13.709/2018 disciplina o tratamento de dados pessoais, definindo princípios, hipóteses que autorizam o tratamento, direitos do titular e sanções.',
      porQueImporta:
        'O atendimento a investidor é tratamento de dados do início ao fim: cadastro, perfil de suitability, histórico de operações. A prova cobra especialmente o erro de achar que tudo depende de consentimento.',
      paraQueServe:
        'Garantir que o dado do cliente seja usado para a finalidade informada, pelo tempo necessário, com segurança e com o titular podendo saber e intervir.',
      comoFunciona: [
        'Os princípios do tratamento incluem FINALIDADE (propósito legítimo, específico e informado), ADEQUAÇÃO, NECESSIDADE (o mínimo necessário), livre acesso, qualidade dos dados, TRANSPARÊNCIA, segurança, prevenção, não discriminação e responsabilização.',
        'O tratamento só pode ocorrer nas hipóteses previstas em lei. O CONSENTIMENTO é apenas uma delas.',
        'Outras bases relevantes no atendimento: cumprimento de obrigação legal ou regulatória, execução de contrato a pedido do titular, exercício regular de direitos em processo, interesse legítimo do controlador e proteção do crédito.',
        'Cadastro exigido por norma de prevenção à lavagem é tratado com base em obrigação legal — não depende de consentimento e não pode ser recusado pelo titular.',
        'O TITULAR pode pedir, a qualquer momento: confirmação de que há tratamento, acesso aos dados, correção, anonimização ou eliminação do que for desnecessário ou excessivo, portabilidade e informação sobre com quem os dados foram compartilhados.',
        'As sanções vão de advertência a multa simples de até 2% do faturamento no Brasil, excluídos tributos, limitada a R$ 50 milhões POR INFRAÇÃO, além de multa diária, publicização, bloqueio e eliminação dos dados.',
      ],
      exemploSimples:
        'Usar o telefone que o cliente deu para abrir conta a fim de oferecer um seguro de outra empresa do grupo desvia a finalidade informada — e finalidade é princípio expresso da lei.',
      exemploAplicado:
        'Um cliente pede que a instituição apague todos os seus dados após encerrar a conta. A resposta intuitiva seria atender de imediato, já que a eliminação é direito do titular. Mas o registro cadastral e o histórico de operações são mantidos por obrigação legal e regulatória — inclusive pelas normas de prevenção à lavagem —, e essa base de tratamento não depende nem nunca dependeu do consentimento dele. O direito de eliminação alcança o que foi tratado com base em consentimento e o que é desnecessário ou excessivo; não desfaz um dever de guarda imposto por norma. A conduta correta é explicar a distinção, eliminar o que de fato só existia por consentimento, e manter o que a lei manda manter.',
      lembrarNaProva: [
        'Consentimento é UMA base legal entre várias, não a regra geral.',
        'Obrigação legal ou regulatória dispensa consentimento.',
        'Necessidade: tratar o mínimo, não tudo que for possível coletar.',
        'O titular pode confirmar, acessar, corrigir, eliminar e portar.',
        'Multa de até 2% do faturamento, limitada a R$ 50 milhões por infração.',
      ],
      revisaoRapida: [
        'Finalidade, adequação, necessidade e transparência.',
        'Consentimento não é a única base legal.',
        'Cadastro de PLD se apoia em obrigação legal.',
        'Direito de eliminação não vence dever legal de guarda.',
        'Multa: 2% do faturamento, teto de R$ 50 milhões por infração.',
      ],
    },
    exemplos: [
      {
        titulo: 'O erro do consentimento universal',
        corpo:
          'Muita gente resume a LGPD a pedir autorização. A lei enumera várias hipóteses de tratamento, e boa parte da atividade bancária se apoia em obrigação legal e execução de contrato — não em consentimento.',
      },
      {
        titulo: 'Necessidade limita a coleta',
        corpo:
          'Pelo princípio da necessidade, o tratamento se limita ao mínimo indispensável à finalidade. Coletar dado que não serve à finalidade declarada é irregular ainda que o cliente não se oponha.',
      },
    ],
    conceitoChave:
      'Todo tratamento precisa de uma base legal e de uma finalidade declarada — consentimento é só uma das portas de entrada.',
    pontosChave: [
      'Finalidade, adequação e necessidade',
      'Consentimento é uma base entre várias',
      'Obrigação legal dispensa consentimento',
      'Direitos: confirmar, acessar, corrigir, eliminar, portar',
      'Multa de 2%, teto de R$ 50 milhões por infração',
    ],
    erroComum:
      'Supor que qualquer tratamento de dados exige consentimento do cliente. Cadastro exigido por norma se apoia em obrigação legal e independe de autorização.',
    alertaProva:
      'Questão clássica: cliente pede exclusão total dos dados após encerrar relacionamento. A resposta correta separa o que era consentimento do que é dever legal de guarda — não é apagar tudo nem recusar tudo.',
    tabela: {
      titulo: 'Base legal conforme a situação',
      colunas: ['Situação no atendimento', 'Base de tratamento'],
      linhas: [
        ['Cadastro exigido por norma de PLD', 'Obrigação legal ou regulatória'],
        ['Dados para executar a ordem pedida', 'Execução de contrato'],
        ['Envio de oferta de outro produto', 'Consentimento ou interesse legítimo'],
        ['Análise para concessão de crédito', 'Proteção do crédito'],
        ['Defesa em processo judicial', 'Exercício regular de direitos'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Após encerrar a conta, o cliente exige a eliminação de todos os seus dados. A conduta correta é:',
      alternativas: [
        'Eliminar imediatamente todos os registros, por ser direito absoluto do titular',
        'Recusar integralmente, pois dados de cliente nunca podem ser eliminados',
        'Eliminar o que era tratado por consentimento e manter o que a lei obriga a guardar, explicando a distinção',
        'Condicionar a eliminação à autorização do órgão regulador',
      ],
      correta: 2,
      explicacao:
        'O direito de eliminação alcança dados tratados com base em consentimento e os desnecessários ou excessivos. Não afasta obrigação legal e regulatória de guarda, que é base autônoma de tratamento.',
    },
    mapaMental: {
      id: 'mm-lgpd',
      rotulo: 'LGPD',
      revisao: true,
      filhos: [
        {
          id: 'mm-lgpd-princ',
          rotulo: 'Princípios',
          detalhe: 'Finalidade, necessidade, transparência',
          revisao: true,
        },
        {
          id: 'mm-lgpd-bases',
          rotulo: 'Bases legais',
          revisao: true,
          filhos: [
            { id: 'mm-lgpd-consent', rotulo: 'Consentimento', detalhe: 'Uma entre várias', revisao: true },
            { id: 'mm-lgpd-obrig', rotulo: 'Obrigação legal', detalhe: 'Dispensa consentimento', revisao: true },
            { id: 'mm-lgpd-contr', rotulo: 'Execução de contrato' },
          ],
        },
        {
          id: 'mm-lgpd-dir',
          rotulo: 'Direitos do titular',
          detalhe: 'Confirmar, acessar, corrigir, eliminar, portar',
          revisao: true,
        },
        {
          id: 'mm-lgpd-sanc',
          rotulo: 'Sanções',
          detalhe: '2% do faturamento, teto de R$ 50 mi',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'A LGPD diz que dado de cliente só pode ser usado para o que foi informado, na medida necessária, e que o cliente pode saber o que existe sobre ele e pedir correção.',
      exemplo:
        'O cliente pede para apagar tudo depois de encerrar a conta. Apaga-se o que dependia da autorização dele; o que a lei manda guardar continua guardado.',
      analogia:
        'É como emprestar a chave de casa para uma reforma específica: serve para aquilo, por aquele tempo, e não autoriza entrar depois por outro motivo.',
      iniciante:
        'Seus dados só podem ser usados para o que foi combinado. Você pode perguntar o que a empresa tem sobre você e pedir para corrigir.',
    },
    niveis: {
      entenda:
        'Dados do cliente só podem ser tratados com uma base legal e para a finalidade informada. Consentimento é apenas uma dessas bases.',
      aprofunde:
        'A confusão mais persistente sobre a LGPD tem origem na leitura do art. 7º como se o inciso I fosse a regra e os demais fossem exceção. Não é a estrutura da lei: as hipóteses são alternativas e igualmente idôneas, e escolher a base correta antes de iniciar o tratamento é obrigação do controlador, não uma opção de conveniência. A escolha tem consequência prática direta, porque os direitos do titular variam conforme a base — a revogação, por exemplo, só faz sentido onde houve consentimento, e o pedido de eliminação previsto no inciso VI do art. 18 refere-se expressamente aos dados tratados com consentimento, ressalvadas as hipóteses de conservação do art. 16. Daí decorre a resposta ao caso do encerramento de conta: registros mantidos por obrigação regulatória continuam íntegros porque nunca dependeram de autorização. Vale ainda distinguir o interesse legítimo, que exige avaliação concreta e cede quando prevalecerem direitos e liberdades fundamentais do titular, das bases de aplicação mais objetiva, como obrigação legal e execução de contrato. Sobre sanções, dois detalhes costumam ser lidos errado: o teto de R$ 50 milhões é POR INFRAÇÃO, e não um limite global por instituição, e a multa simples convive com multa diária, publicização, bloqueio e eliminação dos dados, que podem ser aplicadas cumulativamente.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 9,
  },

  {
    id: 'c-atendimento',
    microtemaId: 'm3.4',
    titulo: 'Técnicas de atendimento e riscos da atividade',
    objetivo:
      'Conduzir o atendimento com registro adequado e reconhecer os riscos a que o profissional se expõe.',
    etiquetas: ['ESSENCIAL', 'ATENCAO'],
    resumo30s:
      'Escutar antes de propor, confirmar o entendimento e registrar o que foi dito. O registro protege os dois lados. Os riscos da atividade são o legal, o regulatório, o de imagem e o de conduta — e todos começam pela mesma origem: promessa ou omissão no atendimento.',
    explicacao: {
      oQueE:
        'O conjunto de práticas de condução do atendimento e a leitura dos riscos que a própria atividade de distribuição impõe ao profissional e à instituição.',
      porQueImporta:
        'Boa parte das questões situacionais da prova descreve um atendimento e pergunta o que fazer. A resposta certa quase sempre envolve escutar mais, prometer menos e registrar o que foi combinado.',
      paraQueServe:
        'Reduzir a chance de a recomendação correta virar disputa depois — e dar a quem recomendou como demonstrar o que fez.',
      comoFunciona: [
        'ESCUTA ATIVA antes da proposta: deixar o cliente descrever objetivo, prazo e receios sem interromper com produto.',
        'CONFIRMAÇÃO DE ENTENDIMENTO: repetir com as próprias palavras o que se entendeu e pedir que o cliente corrija. Cliente que só assente pode não ter compreendido.',
        'LINGUAGEM ADEQUADA ao repertório de quem ouve: jargão não é sinal de competência, é obstáculo à decisão informada.',
        'REGISTRO do que foi apresentado, dos riscos informados e da decisão tomada. O registro protege o cliente e o profissional.',
        'RISCO LEGAL: contrato, documento ou conduta que não se sustenta juridicamente, gerando responsabilização.',
        'RISCO REGULATÓRIO ou de compliance: descumprir norma do regulador ou do autorregulador, com sanção administrativa.',
        'RISCO DE IMAGEM ou reputacional: dano à confiança na instituição, que costuma sobreviver à resolução do caso concreto.',
        'RISCO DE CONDUTA: decisões individuais no atendimento — promessa de rentabilidade, omissão de risco, venda casada — que originam os três anteriores.',
      ],
      exemploSimples:
        'Um cliente assente com a cabeça durante toda a explicação e depois pergunta se pode resgatar a qualquer momento um produto com carência de dois anos. O aceno não era entendimento.',
      exemploAplicado:
        'Um assessor apresenta um fundo de crédito privado, informa o risco corretamente e o cliente aplica. Meses depois, um evento de crédito derruba a cota e o cliente afirma que jamais foi avisado de que poderia perder principal. Sem registro do que foi apresentado, a discussão vira palavra contra palavra — e o profissional que agiu certo fica na mesma posição de quem agiu errado. O registro não existe para provar a má-fé do cliente: existe porque a memória de uma conversa técnica se apaga, e o único jeito de a recomendação correta continuar demonstrável é ela ter deixado rastro.',
      lembrarNaProva: [
        'Escutar e confirmar entendimento antes de propor.',
        'Assentimento não é compreensão — confirmar com as próprias palavras.',
        'Registro protege os dois lados, não só a instituição.',
        'Risco de conduta é a origem dos riscos legal, regulatório e de imagem.',
        'Venda casada e promessa de rentabilidade são conduta vedada.',
      ],
      revisaoRapida: [
        'Escuta ativa antes do produto.',
        'Confirmar entendimento, não o aceno.',
        'Linguagem no repertório do cliente.',
        'Registrar risco informado e decisão tomada.',
        'Riscos: legal, regulatório, imagem e conduta.',
      ],
    },
    exemplos: [
      {
        titulo: 'O risco de conduta vem primeiro',
        corpo:
          'Uma promessa de rentabilidade feita numa conversa pode gerar processo (risco legal), sanção do regulador (risco regulatório) e matéria na imprensa (risco de imagem). Um ato, três riscos.',
      },
      {
        titulo: 'Registrar não é desconfiar',
        corpo:
          'O registro documenta a informação prestada. Sem ele, o profissional diligente não tem como demonstrar que foi diligente — e é ele quem mais perde com a ausência.',
      },
    ],
    conceitoChave:
      'O atendimento bem conduzido e registrado é a principal defesa contra os riscos da atividade.',
    pontosChave: [
      'Escuta ativa antes da proposta',
      'Confirmação de entendimento',
      'Linguagem adequada ao cliente',
      'Registro da informação e da decisão',
      'Riscos: legal, regulatório, imagem e conduta',
    ],
    erroComum:
      'Tratar o registro como burocracia da instituição. Ele é a única prova de que o risco foi informado — e quem mais depende dela é o profissional.',
    alertaProva:
      'Em situação de atendimento, desconfie da alternativa que resolve rápido: fechar a venda, tranquilizar o cliente ou seguir a preferência dele sem alerta. A correta costuma acrescentar uma etapa de verificação ou registro.',
    tabela: {
      titulo: 'Os riscos da atividade',
      colunas: ['Risco', 'Como se materializa'],
      linhas: [
        ['Legal', 'Responsabilização por documento ou conduta insustentável'],
        ['Regulatório', 'Sanção por descumprir norma do regulador ou autorregulador'],
        ['Imagem', 'Perda de confiança que sobrevive ao caso concreto'],
        ['Conduta', 'Promessa, omissão ou venda casada no atendimento'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Durante a explicação de um produto com carência, o cliente concorda com tudo mas depois pergunta se pode resgatar quando quiser. A conduta adequada é:',
      alternativas: [
        'Prosseguir com a aplicação, pois ele já havia concordado com as condições',
        'Retomar a explicação da carência, confirmar o entendimento com as próprias palavras dele e registrar',
        'Trocar por um produto sem carência, sem retomar a explicação',
        'Encaminhar o material por escrito e considerar a informação prestada',
      ],
      correta: 1,
      explicacao:
        'A pergunta revela que o assentimento anterior não foi compreensão. Confirmar o entendimento e registrar é o que sustenta a adequação da recomendação depois.',
    },
    mapaMental: {
      id: 'mm-atd',
      rotulo: 'Atendimento e riscos',
      revisao: true,
      filhos: [
        {
          id: 'mm-atd-tec',
          rotulo: 'Técnicas',
          revisao: true,
          filhos: [
            { id: 'mm-atd-escuta', rotulo: 'Escuta ativa', revisao: true },
            { id: 'mm-atd-conf', rotulo: 'Confirmar entendimento', revisao: true },
            { id: 'mm-atd-ling', rotulo: 'Linguagem adequada' },
            { id: 'mm-atd-reg', rotulo: 'Registro', detalhe: 'Protege os dois lados', revisao: true },
          ],
        },
        {
          id: 'mm-atd-risco',
          rotulo: 'Riscos',
          revisao: true,
          filhos: [
            { id: 'mm-atd-legal', rotulo: 'Legal' },
            { id: 'mm-atd-reg2', rotulo: 'Regulatório' },
            { id: 'mm-atd-img', rotulo: 'Imagem' },
            { id: 'mm-atd-cond', rotulo: 'Conduta', detalhe: 'Origem dos demais', revisao: true },
          ],
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Atender bem é ouvir antes de propor, falar na linguagem de quem ouve, checar se a pessoa entendeu de verdade e anotar o que foi combinado.',
      exemplo:
        'O cliente concorda com tudo e depois pergunta se pode resgatar quando quiser um produto com carência. O aceno não era entendimento.',
      analogia:
        'É como orientação de tratamento: quem entrega a receita sem checar se o paciente entendeu a posologia não orientou, apenas falou.',
      iniciante:
        'Antes de indicar qualquer coisa, escute. Depois, confirme se a pessoa entendeu. E anote o que foi conversado.',
    },
    niveis: {
      entenda:
        'Escutar antes de propor, confirmar o entendimento e registrar o combinado. Os riscos da atividade são legal, regulatório, de imagem e de conduta.',
      aprofunde:
        'A separação entre os quatro riscos é útil para responder à prova, mas esconde uma relação de causa que vale entender. Risco de conduta é o único que nasce de uma decisão individual tomada dentro do atendimento; os outros três são consequências institucionais dele. Um único episódio de promessa de rentabilidade produz simultaneamente exposição judicial, exposição sancionatória e exposição reputacional — e as três seguem trajetórias diferentes no tempo, sendo a reputacional a que costuma persistir depois de o processo terminar, mesmo em caso favorável à instituição. Isso explica por que os programas de compliance tratam o atendimento como ponto de controle e não apenas como atividade comercial: é o momento em que o risco entra. Há ainda uma assimetria pouco discutida sobre o registro. Ele é frequentemente percebido como instrumento da instituição contra o cliente, quando a prática mostra o contrário: em uma disputa, o cliente costuma dispor da própria narrativa e da assimetria técnica a seu favor, enquanto o profissional só dispõe do que ficou documentado. Quem age corretamente e não registra fica indistinguível de quem agiu mal — e essa indistinção, não a má-fé, é o que produz a maior parte das responsabilizações injustas na atividade.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },
]
