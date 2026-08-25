import type { Conceito } from '../types'

/**
 * MICROTEMA 2.4 — Serviços bancários.
 *
 * É o microtema mais próximo do dia a dia do cliente e, por isso, aquele em
 * que o profissional mais responde pergunta prática: por que a tarifa foi
 * cobrada, por que o dólar da casa de câmbio é diferente do da notícia, o
 * que dá para fazer quando o PIX foi para a chave errada.
 *
 * NOTA EDITORIAL — números normativos. A composição da cesta de serviços
 * essenciais gratuitos, os limites operacionais do PIX e as alíquotas de IOF
 * sobre câmbio são fixados por norma infralegal e revistos periodicamente.
 * As aulas trazem o MECANISMO e a lógica da regra; onde citam quantidade,
 * marcam explicitamente que o valor precisa ser conferido na norma vigente
 * (regra 4 do CLAUDE.md). Nenhuma questão do banco depende desses números.
 */

export const CONCEITOS_2_4: Conceito[] = [
  {
    id: 'c-contas-deposito',
    microtemaId: 'm2.4',
    titulo: 'Contas de depósito e conta de pagamento',
    objetivo: 'Distinguir conta corrente, poupança, conta salário e conta de pagamento quanto a titular, remuneração e garantia.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'Conta corrente é depósito à vista e não rende. Poupança é depósito de poupança e rende por regra legal. Conta salário é gratuita e de uso restrito. Conta de pagamento é de instituição de pagamento — e o saldo nela NÃO é depósito bancário.',
    explicacao: {
      oQueE:
        'São os diferentes contratos pelos quais uma pessoa mantém recursos em uma instituição, cada um com regra própria de remuneração, custo e proteção.',
      porQueImporta:
        'A diferença mais relevante não aparece no extrato: é a proteção. Saldo em conta de depósito num banco tem cobertura do FGC; saldo em conta de pagamento de uma instituição de pagamento segue outra lógica, e o cliente costuma não saber disso.',
      paraQueServe:
        'Guardar e movimentar recursos com o arranjo adequado ao uso — transacional, de reserva ou de recebimento de salário.',
      comoFunciona: [
        'CONTA CORRENTE (depósito à vista): movimentação livre, sem remuneração do saldo. É a conta transacional por excelência.',
        'CONTA POUPANÇA (depósito de poupança): remuneração definida em regra legal, creditada na data de aniversário. Saque antes do aniversário faz perder o rendimento do período.',
        'CONTA SALÁRIO: aberta pelo empregador para crédito de salário. Não admite depósitos de terceiros, é gratuita e permite portabilidade para conta de livre escolha do trabalhador.',
        'CONTA DE PAGAMENTO: mantida em instituição de pagamento. Os recursos são segregados do patrimônio da instituição, mas NÃO são depósito bancário — e a lógica de proteção é diferente da do FGC.',
        'A conta corrente e a poupança são contratos de instituição financeira; a conta de pagamento não pressupõe intermediação financeira.',
      ],
      exemploSimples:
        'O cliente saca da poupança dois dias antes do aniversário da aplicação. Ele perde todo o rendimento daquele período mensal — a poupança só credita rendimento na data de aniversário, e não proporcionalmente.',
      exemploAplicado:
        'Um cliente diz que mantém uma reserva razoável "na conta da carteira digital, que é igual a banco". A diferença importa: em conta de pagamento não há depósito bancário, e a proteção não segue a mesma regra do FGC. A recomendação técnica é manter ali apenas o saldo transacional e alocar a reserva num produto com garantia clara.',
      lembrarNaProva: [
        'Conta corrente é depósito À VISTA e não remunera saldo.',
        'Poupança rende na DATA DE ANIVERSÁRIO; saque antes perde o período.',
        'Conta salário é gratuita, restrita e portável.',
        'Conta de pagamento NÃO é depósito bancário.',
      ],
      revisaoRapida: [
        'Conta corrente: depósito à vista, sem remuneração.',
        'Poupança: rendimento creditado no aniversário.',
        'Sacar antes do aniversário zera o rendimento do período.',
        'Conta salário: gratuita, sem depósito de terceiros, portável.',
        'Conta de pagamento: instituição de pagamento, não é depósito.',
      ],
    },
    exemplos: [
      {
        titulo: 'O detalhe do aniversário',
        corpo:
          'A poupança credita rendimento uma vez por período mensal, na data de aniversário do depósito. Não há proporcionalidade: 29 dias rendem zero, e 30 dias rendem o período inteiro. É a característica que mais gera reclamação de cliente.',
      },
    ],
    conceitoChave:
      'O nome da conta define o contrato — e o contrato define remuneração, custo e, sobretudo, o tipo de proteção do saldo.',
    pontosChave: [
      'Conta corrente: à vista, sem rendimento',
      'Poupança: rende no aniversário',
      'Saque antecipado perde o período',
      'Conta salário: gratuita e portável',
      'Conta de pagamento não é depósito bancário',
    ],
    erroComum:
      'Tratar conta de pagamento de carteira digital como se fosse conta bancária. Ela não é depósito, e a proteção do saldo não segue automaticamente a regra do FGC.',
    alertaProva:
      'A pegadinha clássica é o saque na véspera do aniversário da poupança. A resposta é sempre a mesma: perde o rendimento do período inteiro.',
    tabela: {
      titulo: 'Comparação das contas',
      colunas: ['Conta', 'Remunera saldo?', 'Característica marcante'],
      linhas: [
        ['Corrente (à vista)', 'Não', 'Movimentação livre'],
        ['Poupança', 'Sim, no aniversário', 'Saque antecipado perde o período'],
        ['Salário', 'Não', 'Gratuita, restrita e portável'],
        ['De pagamento', 'Depende do arranjo', 'Não é depósito bancário'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Um cliente saca o valor da poupança dois dias antes da data de aniversário do depósito. O que acontece com o rendimento?',
      alternativas: [
        'Recebe proporcionalmente aos dias decorridos',
        'Perde integralmente o rendimento do período',
        'Recebe o rendimento integral do período',
        'Recebe metade do rendimento do período',
      ],
      correta: 1,
      explicacao:
        'A poupança credita rendimento apenas na data de aniversário. Não há proporcionalidade: sacar antes zera o período.',
    },
    mapaMental: {
      id: 'mm-contas',
      rotulo: 'Contas',
      revisao: true,
      filhos: [
        { id: 'mm-contas-cc', rotulo: 'Corrente', detalhe: 'Depósito à vista · não rende', revisao: true },
        {
          id: 'mm-contas-pp',
          rotulo: 'Poupança',
          detalhe: 'Rende no aniversário',
          revisao: true,
          filhos: [
            { id: 'mm-contas-pp-saque', rotulo: 'Saque antecipado', detalhe: 'Perde o período inteiro', revisao: true },
          ],
        },
        { id: 'mm-contas-sal', rotulo: 'Salário', detalhe: 'Gratuita · restrita · portável', revisao: true },
        {
          id: 'mm-contas-pag',
          rotulo: 'De pagamento',
          detalhe: 'Não é depósito bancário',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Cada tipo de conta é um contrato diferente. Muda quanto rende, quanto custa e o que protege o seu dinheiro se a instituição quebrar.',
      exemplo:
        'Sacar da poupança um dia antes do aniversário faz perder o rendimento do mês inteiro. Não existe rendimento pela metade.',
      analogia:
        'É como aluguel com data fixa: cumprir 29 dos 30 dias não gera desconto proporcional nenhum.',
      iniciante:
        'Conta corrente serve para movimentar. Poupança serve para guardar e rende. As duas ficam no banco, mas funcionam de formas diferentes.',
    },
    niveis: {
      entenda:
        'Conta corrente movimenta e não rende; poupança rende, mas só na data de aniversário. Conta de pagamento não é conta de banco.',
      aprofunde:
        'A distinção entre depósito e conta de pagamento é jurídica antes de ser comercial, e tem consequências patrimoniais reais. Depósito bancário transfere a propriedade do dinheiro à instituição, que passa a dever o valor ao cliente — por isso o depositante é CREDOR do banco e por isso existe o FGC, que é seguro contra a insolvência desse devedor. Em conta de pagamento, os recursos permanecem segregados do patrimônio da instituição de pagamento por determinação legal, mantidos em conta específica no Banco Central ou em títulos públicos, o que significa que a proteção vem da SEGREGAÇÃO e não de um fundo garantidor. São arquiteturas de proteção diferentes, com riscos residuais diferentes, e a simples leitura do aplicativo não revela qual delas está em uso — muitas carteiras digitais operam simultaneamente como instituição de pagamento e como distribuidora de produtos de banco parceiro, e o mesmo saldo pode migrar entre os dois regimes conforme o cliente aplica ou resgata.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 7,
  },

  {
    id: 'c-pix-transferencias',
    microtemaId: 'm2.4',
    titulo: 'PIX e as transferências entre contas',
    objetivo: 'Comparar PIX e TED quanto a prazo, disponibilidade e custo, e conhecer o mecanismo de devolução.',
    etiquetas: ['ESSENCIAL', 'ATENCAO'],
    resumo30s:
      'PIX é o pagamento instantâneo do Banco Central: 24 horas, todos os dias, liquidação em segundos e gratuito para pessoa física em transferências. A TED funciona em horário bancário e em dias úteis. O DOC foi descontinuado.',
    explicacao: {
      oQueE:
        'PIX é o arranjo de pagamentos instantâneos criado e operado pelo Banco Central, em que a transferência é liquidada em segundos, a qualquer hora e em qualquer dia.',
      porQueImporta:
        'Mudou a estrutura de custo e de prazo do varejo bancário e virou o meio de pagamento mais usado do país. Toda conversa sobre tarifa, liquidez e disponibilidade de recursos passa por ele.',
      paraQueServe:
        'Transferir e receber valores de forma imediata, sem depender de horário bancário nem de intermediação de bandeira de cartão.',
      comoFunciona: [
        'A CHAVE PIX é um apelido que identifica a conta: CPF ou CNPJ, e-mail, número de celular ou chave aleatória. Ela substitui banco, agência e conta.',
        'A liquidação é em SEGUNDOS e ocorre 24 horas por dia, sete dias por semana, inclusive feriados.',
        'Para PESSOA FÍSICA, as transferências e os pagamentos por PIX são, em regra, GRATUITOS. Para pessoa jurídica a cobrança é admitida.',
        'O MED — Mecanismo Especial de Devolução — permite ao banco bloquear e devolver recursos em casos de fundada suspeita de fraude ou de falha operacional. Não é arrependimento: erro de destinatário por digitação não se resolve pelo MED.',
        'A TED liquida no mesmo dia, mas apenas em DIAS ÚTEIS e dentro do horário do sistema. O DOC foi descontinuado.',
      ],
      exemploSimples:
        'Um pagamento feito às 23h de um domingo por PIX cai na conta do destinatário em segundos. A mesma transferência por TED só seria processada na manhã do dia útil seguinte.',
      exemploAplicado:
        'Um cliente transferiu por PIX para a chave errada e pergunta como cancelar. Não há cancelamento: o PIX é irrevogável. O caminho é solicitar a devolução ao recebedor e registrar a ocorrência no banco; o MED se aplica a fraude e falha operacional, não a erro de digitação do próprio pagador. Dizer isso com clareza evita a expectativa falsa de estorno automático.',
      lembrarNaProva: [
        'PIX: 24 horas, todos os dias, liquidação em segundos.',
        'Gratuito para pessoa física em transferências; PJ pode ser tarifada.',
        'A chave substitui banco, agência e conta.',
        'MED é para fraude e falha operacional — não para arrependimento.',
      ],
      revisaoRapida: [
        'PIX opera 24 por 7, com liquidação em segundos.',
        'Chaves: CPF/CNPJ, e-mail, celular ou aleatória.',
        'Gratuito para PF em transferências; PJ pode pagar tarifa.',
        'TED só em dia útil e em horário bancário.',
        'MED cobre fraude e falha operacional, não erro de digitação.',
      ],
    },
    exemplos: [
      {
        titulo: 'O que o MED não resolve',
        corpo:
          'O Mecanismo Especial de Devolução atua sobre fundada suspeita de fraude e sobre falha operacional do sistema. Transferência feita voluntariamente para a chave errada, ou pagamento de que a pessoa se arrependeu, ficam fora — nesses casos o caminho é o pedido de devolução ao recebedor.',
      },
    ],
    conceitoChave:
      'O PIX é irrevogável por desenho: é a irrevogabilidade que permite a liquidação em segundos.',
    pontosChave: [
      'Liquidação em segundos, 24 por 7',
      'Chave substitui banco, agência e conta',
      'Gratuito para PF em transferências',
      'TED: dia útil e horário bancário',
      'MED: fraude e falha, não arrependimento',
    ],
    erroComum:
      'Prometer ao cliente que o PIX pode ser cancelado. Ele é irrevogável; o que existe é pedido de devolução ao recebedor e, em hipóteses restritas, o MED.',
    alertaProva:
      'Atenção ao par gratuidade e titularidade: a regra de isenção alcança a pessoa física. Para pessoa jurídica a cobrança é admitida.',
    tabela: {
      titulo: 'PIX × TED',
      colunas: ['Aspecto', 'PIX', 'TED'],
      linhas: [
        ['Disponibilidade', '24 horas, todos os dias', 'Dias úteis, em horário definido'],
        ['Prazo de crédito', 'Segundos', 'Mesmo dia útil'],
        ['Custo para PF', 'Em regra, gratuito', 'Em regra, tarifado'],
        ['Identificação', 'Chave PIX', 'Banco, agência e conta'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Um cliente fez um PIX voluntariamente para a chave errada e quer cancelar a operação. O que se aplica?',
      alternativas: [
        'O PIX pode ser cancelado pelo aplicativo em até 30 minutos',
        'Não há cancelamento: cabe solicitar devolução ao recebedor e registrar a ocorrência',
        'O MED devolve automaticamente qualquer valor enviado por engano',
        'O banco é obrigado a estornar o valor em até 24 horas',
      ],
      correta: 1,
      explicacao:
        'O PIX é irrevogável. O MED alcança fraude e falha operacional — não erro de digitação do próprio pagador.',
    },
    mapaMental: {
      id: 'mm-pix',
      rotulo: 'PIX',
      revisao: true,
      filhos: [
        { id: 'mm-pix-247', rotulo: '24 por 7', detalhe: 'Liquidação em segundos', revisao: true },
        { id: 'mm-pix-chave', rotulo: 'Chave', detalhe: 'CPF/CNPJ · e-mail · celular · aleatória', revisao: true },
        { id: 'mm-pix-grat', rotulo: 'Gratuidade', detalhe: 'PF em transferências', revisao: true },
        {
          id: 'mm-pix-med',
          rotulo: 'MED',
          detalhe: 'Fraude e falha — não arrependimento',
          revisao: true,
        },
        { id: 'mm-pix-ted', rotulo: 'TED', detalhe: 'Dia útil · horário bancário', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'O PIX manda dinheiro na hora, a qualquer dia e hora, usando uma chave no lugar dos dados da conta. E, uma vez enviado, não volta sozinho.',
      exemplo:
        'Às 23h de domingo, um PIX cai em segundos. A mesma TED só sairia na manhã de segunda-feira.',
      analogia:
        'É como entregar dinheiro em mãos: chega na hora, e não existe botão de desfazer.',
      iniciante:
        'PIX é transferência instantânea. Funciona sempre, é rápido e, para pessoa física, normalmente não se paga por ele.',
    },
    niveis: {
      entenda:
        'PIX transfere dinheiro em segundos, a qualquer hora, usando uma chave. É irrevogável: não existe botão de cancelar.',
      aprofunde:
        'A irrevogabilidade não é uma escolha de conveniência: é condição técnica da liquidação instantânea. Um sistema que permitisse reversão unilateral precisaria manter provisão sobre cada transação até o fim do prazo de arrependimento, o que reintroduziria exatamente a defasagem que o arranjo elimina — o recebedor não poderia usar o recurso com segurança. O PIX resolve isso liquidando de forma definitiva e tratando fraude por um canal separado, o MED, que é procedimento excepcional e sujeito a análise, e não direito de arrependimento. Do ponto de vista de infraestrutura, o PIX se apoia no SPI, sistema de liquidação operado pelo Banco Central que funciona sobre contas específicas mantidas pelos participantes, e é essa arquitetura que permite operar fora do horário do STR. Vale registrar o efeito competitivo, que é o motivo declarado do desenho: ao criar um trilho de pagamento público, gratuito para a pessoa física e aberto a instituições de pagamento, o Banco Central reduziu a barreira de entrada no varejo bancário e retirou das bandeiras de cartão o monopólio do pagamento eletrônico de baixo valor.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-cambio-varejo',
    microtemaId: 'm2.4',
    titulo: 'Câmbio no varejo: cotação, spread e VET',
    objetivo: 'Explicar por que a cotação paga pelo cliente difere da divulgada e identificar o VET.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'A cotação da notícia é a comercial, entre instituições. O cliente paga a taxa de turismo, que embute o spread da instituição. O VET — Valor Efetivo Total — reúne taxa, IOF e tarifas e é o número que permite comparar propostas.',
    explicacao: {
      oQueE:
        'Operação de câmbio é a troca de moeda nacional por estrangeira, realizada por instituição autorizada, formalizada em contrato de câmbio.',
      porQueImporta:
        'É a operação em que a diferença entre o preço anunciado e o preço pago é maior e menos transparente. Saber ler o VET é o que permite ao cliente comparar de verdade.',
      paraQueServe:
        'Viabilizar pagamentos, recebimentos e viagens internacionais dentro de um arranjo autorizado e rastreável.',
      comoFunciona: [
        'TAXA COMERCIAL é a cotação negociada entre instituições no mercado interbancário. É a que aparece no noticiário.',
        'TAXA DE TURISMO é a praticada com o cliente de varejo. Ela embute o SPREAD da instituição — a margem entre o que ela paga e o que ela cobra.',
        'Sobre a operação incide IOF, com alíquota que varia conforme a finalidade e a forma de pagamento.',
        'O VET — Valor Efetivo Total — reúne taxa de câmbio, IOF e tarifas em um único número por unidade de moeda estrangeira. Informá-lo é obrigatório.',
        'Comparar propostas pela taxa de câmbio isolada engana: uma instituição pode anunciar taxa menor e cobrar tarifa maior. Só o VET permite comparação.',
      ],
      exemploSimples:
        'A notícia informa dólar a R$ 5,00 — é a taxa comercial. Na casa de câmbio o cliente compra em espécie a R$ 5,35, valor que já inclui o spread. Somados IOF e tarifa, o VET fica ainda acima disso.',
      exemploAplicado:
        'Dois orçamentos para a mesma remessa: um anuncia taxa de R$ 5,30 com tarifa de R$ 90, outro R$ 5,38 sem tarifa. Para um valor pequeno, a segunda proposta sai mais barata, e para um valor grande, a primeira. Só o VET responde qual é qual — e é justamente por isso que informá-lo é obrigatório.',
      lembrarNaProva: [
        'Comercial é entre instituições; turismo é com o cliente de varejo.',
        'O spread é a margem embutida na taxa praticada.',
        'O VET reúne taxa, IOF e tarifas.',
        'Comparar apenas a taxa de câmbio leva a conclusão errada.',
      ],
      revisaoRapida: [
        'Taxa comercial: mercado interbancário.',
        'Taxa de turismo: varejo, já com spread.',
        'IOF incide conforme a finalidade da operação.',
        'VET reúne taxa, IOF e tarifas num único número.',
        'Só o VET permite comparar propostas de câmbio.',
      ],
    },
    exemplos: [
      {
        titulo: 'Por que a tarifa muda a conclusão',
        corpo:
          'Tarifa fixa pesa proporcionalmente mais em operação pequena. Uma taxa de câmbio ligeiramente pior sem tarifa costuma vencer em valores baixos; em valores altos, a taxa domina. O VET incorpora as duas coisas e resolve a comparação.',
      },
    ],
    conceitoChave:
      'A taxa anunciada não é o preço da operação. O preço é o VET.',
    pontosChave: [
      'Comercial: entre instituições',
      'Turismo: varejo, com spread',
      'IOF conforme a finalidade',
      'VET = taxa + IOF + tarifas',
      'Comparação válida só pelo VET',
    ],
    erroComum:
      'Comparar duas ofertas de câmbio apenas pela taxa. A instituição com melhor taxa pode cobrar tarifa que inverte o resultado.',
    alertaProva:
      'As alíquotas de IOF sobre câmbio mudam por norma. Confira a tabela vigente antes de decorar percentual.',
    tabela: {
      titulo: 'Componentes do custo de câmbio',
      colunas: ['Componente', 'O que é'],
      linhas: [
        ['Taxa comercial', 'Cotação entre instituições'],
        ['Spread', 'Margem da instituição sobre a comercial'],
        ['IOF', 'Tributo, variável conforme a finalidade'],
        ['Tarifa', 'Cobrança pelo serviço prestado'],
        ['VET', 'Todos os anteriores em um único número'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Qual informação permite comparar corretamente duas propostas de operação de câmbio?',
      alternativas: [
        'A taxa de câmbio anunciada por cada instituição',
        'O Valor Efetivo Total (VET)',
        'A cotação comercial divulgada no noticiário',
        'O spread informado pela instituição',
      ],
      correta: 1,
      explicacao:
        'O VET reúne taxa, IOF e tarifas. Comparar apenas a taxa pode levar à escolha mais cara.',
    },
    mapaMental: {
      id: 'mm-cambiov',
      rotulo: 'Câmbio no varejo',
      revisao: true,
      filhos: [
        { id: 'mm-cambiov-com', rotulo: 'Taxa comercial', detalhe: 'Interbancário · a do noticiário', revisao: true },
        {
          id: 'mm-cambiov-tur',
          rotulo: 'Taxa de turismo',
          detalhe: 'Varejo · já com spread',
          revisao: true,
        },
        { id: 'mm-cambiov-iof', rotulo: 'IOF', detalhe: 'Varia conforme a finalidade', revisao: true },
        {
          id: 'mm-cambiov-vet',
          rotulo: 'VET',
          detalhe: 'Taxa + IOF + tarifas · obrigatório informar',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'O dólar da notícia não é o dólar que você compra. O seu já vem com a margem da instituição, mais imposto e tarifa.',
      exemplo:
        'Notícia: R$ 5,00. Casa de câmbio: R$ 5,35. Com IOF e tarifa, o valor efetivo fica ainda maior.',
      analogia:
        'É como o preço de fábrica e o preço de prateleira: entre um e outro há margem, imposto e serviço.',
      iniciante:
        'Ao trocar reais por dólares, o preço final inclui a taxa, um imposto e a tarifa do serviço. O VET é a soma disso tudo.',
    },
    niveis: {
      entenda:
        'O cliente nunca paga a cotação da notícia. Ele paga a taxa de turismo mais imposto e tarifa — e o VET é a soma de tudo.',
      aprofunde:
        'O spread cambial de varejo é maior que o interbancário por razões estruturais, não apenas por margem comercial: operações de baixo valor têm custo fixo relevante de compliance, e o câmbio é a operação com maior exigência de identificação e registro do sistema financeiro, justamente por ser a porta natural de saída de recursos ilícitos. A obrigatoriedade do VET nasce de uma percepção regulatória específica sobre este mercado: como o preço tem quatro componentes que se compensam entre si, a comparação por qualquer um deles isoladamente é sistematicamente enganosa, e a assimetria favorece quem estrutura a oferta. Padronizar o número em uma métrica única e comparável é a mesma lógica do Custo Efetivo Total no crédito — em ambos os casos a regulação não limita o preço, ela obriga a expressá-lo de forma comparável, o que transfere ao mercado, e não ao regulador, a tarefa de comprimir a margem.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 7,
  },

  {
    id: 'c-tarifas-bancarias',
    microtemaId: 'm2.4',
    titulo: 'Tarifas bancárias e serviços essenciais',
    objetivo: 'Distinguir serviços essenciais, prioritários e diferenciados quanto à possibilidade de cobrança.',
    etiquetas: ['ATENCAO', 'ENTENDER'],
    resumo30s:
      'Serviços ESSENCIAIS não podem ser tarifados, dentro dos limites de quantidade fixados em norma. Serviços PRIORITÁRIOS podem, desde que constem de tabela padronizada e divulgada. Diferenciados são livremente pactuados.',
    explicacao: {
      oQueE:
        'Tarifa é a remuneração pela prestação de um serviço bancário. A norma classifica os serviços em categorias, e é a categoria que define se pode haver cobrança.',
      porQueImporta:
        'É a reclamação mais frequente do cliente de varejo, e o profissional que não sabe a categoria do serviço não consegue responder se a cobrança é devida.',
      paraQueServe:
        'Equilibrar a remuneração da instituição com o acesso a serviços básicos e com a comparabilidade entre ofertas.',
      comoFunciona: [
        'SERVIÇOS ESSENCIAIS: não podem ser tarifados dentro dos limites de quantidade previstos em norma. Incluem, entre outros, fornecimento de cartão de débito, certo número de saques e de extratos por mês e consultas pela internet.',
        'SERVIÇOS PRIORITÁRIOS: podem ser cobrados, mas apenas conforme lista e nomenclatura padronizadas pela norma, o que permite comparar tabelas entre instituições.',
        'SERVIÇOS DIFERENCIADOS: livremente pactuados entre instituição e cliente, mediante contrato específico.',
        'A CESTA DE SERVIÇOS é pacote opcional. O cliente sempre pode optar por não contratá-la e usar apenas os serviços essenciais gratuitos.',
        'A instituição é obrigada a divulgar a tabela de tarifas e a informar previamente qualquer majoração, com antecedência definida em norma.',
      ],
      exemploSimples:
        'O cliente faz mais saques no mês do que o limite gratuito previsto para os serviços essenciais. Os saques excedentes podem ser tarifados — a gratuidade vale dentro do limite, não de forma ilimitada.',
      exemploAplicado:
        'Um cliente reclama de tarifa mensal de pacote e diz que "banco não pode cobrar". A resposta correta separa as coisas: os serviços essenciais são gratuitos e continuam disponíveis mesmo sem pacote; o que ele contratou foi uma cesta, que é opcional. Cabe orientá-lo a cancelar o pacote se o uso couber nos essenciais.',
      lembrarNaProva: [
        'Essenciais: gratuitos, dentro do limite de quantidade.',
        'Prioritários: cobráveis, com nomenclatura padronizada.',
        'Diferenciados: livremente pactuados.',
        'A cesta de serviços é sempre OPCIONAL.',
      ],
      revisaoRapida: [
        'Essenciais não são tarifados dentro do limite previsto.',
        'Excedente ao limite pode ser cobrado.',
        'Prioritários têm lista e nomenclatura padronizadas.',
        'Diferenciados dependem de contrato específico.',
        'Cesta de serviços é opcional e cancelável.',
      ],
    },
    exemplos: [
      {
        titulo: 'Gratuito não é ilimitado',
        corpo:
          'A gratuidade dos serviços essenciais vale até a quantidade fixada em norma para cada serviço. Ultrapassado o limite, a cobrança do excedente é legítima — e é aí que nasce a maior parte das reclamações.',
      },
    ],
    conceitoChave:
      'A pergunta certa nunca é "pode cobrar?", e sim "de que categoria é este serviço?".',
    pontosChave: [
      'Essenciais: gratuitos até o limite',
      'Prioritários: cobráveis e padronizados',
      'Diferenciados: contrato específico',
      'Cesta é opcional',
      'Tabela de tarifas é de divulgação obrigatória',
    ],
    erroComum:
      'Dizer ao cliente que serviço essencial é gratuito sem ressalva. A gratuidade vale dentro do limite de quantidade; o excedente pode ser tarifado.',
    alertaProva:
      'As quantidades gratuitas de cada serviço essencial são fixadas por resolução e podem ser revistas. Confira a norma vigente antes de decorar número.',
    tabela: {
      titulo: 'Categorias de serviço',
      colunas: ['Categoria', 'Pode ser tarifado?', 'Observação'],
      linhas: [
        ['Essencial', 'Não, dentro do limite', 'Excedente pode ser cobrado'],
        ['Prioritário', 'Sim', 'Nomenclatura padronizada em norma'],
        ['Diferenciado', 'Sim', 'Livremente pactuado em contrato'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Sobre os serviços bancários classificados como ESSENCIAIS, é correto afirmar que:',
      alternativas: [
        'Podem ser tarifados livremente pela instituição',
        'São gratuitos dentro dos limites de quantidade fixados em norma',
        'São gratuitos de forma ilimitada, sem qualquer restrição',
        'Só são gratuitos para clientes com pacote de serviços contratado',
      ],
      correta: 1,
      explicacao:
        'A gratuidade dos essenciais existe, mas é limitada por quantidade. Ultrapassado o limite, o excedente pode ser cobrado.',
    },
    mapaMental: {
      id: 'mm-tarifas',
      rotulo: 'Tarifas',
      revisao: true,
      filhos: [
        {
          id: 'mm-tarifas-ess',
          rotulo: 'Essenciais',
          detalhe: 'Gratuitos até o limite',
          revisao: true,
          filhos: [
            { id: 'mm-tarifas-exc', rotulo: 'Excedente', detalhe: 'Pode ser cobrado', revisao: true },
          ],
        },
        {
          id: 'mm-tarifas-prio',
          rotulo: 'Prioritários',
          detalhe: 'Cobráveis · nomenclatura padronizada',
          revisao: true,
        },
        { id: 'mm-tarifas-dif', rotulo: 'Diferenciados', detalhe: 'Contrato específico', revisao: true },
        { id: 'mm-tarifas-cesta', rotulo: 'Cesta', detalhe: 'Sempre opcional', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'Alguns serviços do banco são de graça até certa quantidade. Passou disso, pode cobrar. O pacote mensal é sempre opcional.',
      exemplo:
        'O cliente faz mais saques do que o limite gratuito do mês. Os saques a mais podem ser tarifados.',
      analogia:
        'É como a franquia de um plano de celular: dentro dela não se paga; fora dela, sim.',
      iniciante:
        'O banco não pode cobrar por tudo. Existe uma lista de serviços básicos que precisa ser oferecida sem tarifa.',
    },
    niveis: {
      entenda:
        'Serviços essenciais são gratuitos até uma quantidade fixada em norma. Passou do limite, a cobrança é legítima. O pacote é opcional.',
      aprofunde:
        'A padronização de nomenclatura dos serviços prioritários é o instrumento regulatório mais subestimado do tema e resolve um problema específico: antes dela, cada instituição batizava o mesmo serviço de forma diferente, o que tornava a tabela de tarifas tecnicamente pública e praticamente incomparável. Ao fixar nomes e definições, a norma não tabela preço — ela restaura a comparabilidade e devolve a disciplina ao mercado, exatamente como o VET faz no câmbio e o CET no crédito. A obrigatoriedade dos serviços essenciais segue outra lógica, de acesso: uma conta de depósito é hoje condição prática para receber salário, benefício social e para participar da economia formal, e permitir que o custo de mantê-la excluísse a parcela de baixa renda inverteria a função do sistema de pagamentos. É por isso que a lista de essenciais protege o USO BÁSICO com franquia, e não o uso intensivo — a franquia calibra o subsídio cruzado entre clientes de perfis diferentes sem transformar a conta em serviço integralmente gratuito.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 7,
  },
]
