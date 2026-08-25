import type { Conceito } from '../types'

/**
 * MICROTEMA 4.4 — Finanças descentralizadas (aprofundamento).
 *
 * `m4-resto.ts` já traz blockchain e o conceito geral de DeFi. Faltavam as
 * duas frentes que a prova cobra e que mudaram de estado no último ano: a
 * TOKENIZAÇÃO com o regime de autorização das prestadoras, e as ESTRUTURAS
 * descentralizadas (contrato inteligente, DEX, DAO, NFT), onde o distrator
 * recorrente é confundir ausência de intermediário com ausência de risco.
 *
 * Fontes lidas em 25/08/2026:
 *
 * | Fonte | O que sustenta |
 * |---|---|
 * | Lei 14.478/2022, arts. 1º a 5º | Definição de ativo virtual, o que fica de fora, PSAV |
 * | Res. BCB 519, 520 e 521, de 10/11/2025 | Autorização, funcionamento e o enquadramento cambial |
 *
 * **Cuidado deliberado com o Drex.** O piloto teve a plataforma de teste
 * descontinuada e o projeto foi reorientado; não existe Drex em produção. A
 * aula descreve o que ele é e em que estágio está, e nenhuma questão do banco
 * afirma exigência ou funcionalidade vigente.
 */

export const CONCEITOS_4_4_CRIPTO: Conceito[] = [
  {
    id: 'c-tokenizacao',
    microtemaId: 'm4.4',
    titulo: 'Tokenização, stablecoins e o regime das prestadoras',
    objetivo:
      'Classificar um token pelo direito que ele representa e identificar quem regula cada caso.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA', 'ATENCAO'],
    resumo30s:
      'Tokenizar é registrar em blockchain um direito que já existe. O rótulo "token" não define o regulador: se o direito representado é valor mobiliário, é CVM; se é ativo virtual, é Bacen, sob a Lei 14.478/2022. Stablecoin referenciada em moeda estrangeira entrou no mercado de câmbio.',
    explicacao: {
      oQueE:
        'Tokenização é a representação digital de um direito — um recebível, uma cota, um imóvel, um crédito de carbono — em registro distribuído. Stablecoin é o ativo virtual cujo valor é referenciado a outro ativo, tipicamente uma moeda fiduciária.',
      porQueImporta:
        'Porque a pergunta que o cliente faz — "isso é regulado?" — não se responde pela tecnologia. Dois tokens tecnicamente idênticos podem ter reguladores diferentes, e a resposta errada vira oferta irregular de valor mobiliário.',
      paraQueServe:
        'Saber quem autoriza a oferta, a quem se reclama e que proteções o investidor tem em cada caso.',
      comoFunciona: [
        'A Lei 14.478/2022 define ativo virtual como representação digital de valor negociável ou transferível por meios eletrônicos, usada para pagamento ou investimento.',
        'FICAM DE FORA da definição: moeda nacional e estrangeira; moeda eletrônica da Lei 12.865/2013; pontos e recompensas de fidelidade; e representações de ativos cuja emissão ou negociação já esteja prevista em lei — a exemplo de valores mobiliários e ativos financeiros.',
        'É essa última exclusão que resolve a maior parte dos casos: se o token representa participação em resultado de empreendimento de terceiro, ele é valor mobiliário e vai para a CVM, independentemente de se chamar token.',
        'PRESTADORA DE SERVIÇOS DE ATIVOS VIRTUAIS (PSAV): pessoa jurídica que executa, por conta de terceiros, troca entre ativo virtual e moeda, troca entre ativos virtuais, transferência, custódia ou administração. Só pode funcionar com autorização prévia (art. 2º).',
        'O Banco Central editou em novembro de 2025 três resoluções que regulamentam o setor: a de autorização, a de constituição e funcionamento com supervisão proporcional ao risco, e a que enquadra no MERCADO DE CÂMBIO as operações com ativos virtuais referenciados em moeda fiduciária.',
        'DREX é o projeto de moeda digital de banco central e infraestrutura de liquidação para ativos tokenizados. Está em desenvolvimento: a plataforma usada no piloto foi descontinuada e o projeto foi reorientado. Não há Drex em circulação.',
      ],
      exemploSimples:
        'Um token que dá direito a parte do aluguel de um imóvel administrado por terceiros é, na substância, um contrato de investimento coletivo — e contrato de investimento coletivo é valor mobiliário, é CVM.',
      exemploAplicado:
        'Uma plataforma oferece "tokens de recebíveis" com promessa de rendimento fixo, dizendo-se fora da regulação por operar em blockchain. A tecnologia é irrelevante para o enquadramento: se há captação pública com expectativa de lucro decorrente do esforço de terceiro, há valor mobiliário e há necessidade de registro ou dispensa. A blockchain muda como o direito é registrado, não o que ele é — e alegar o contrário é justamente o argumento que sustenta ofertas irregulares.',
      lembrarNaProva: [
        'Ativo virtual exclui moeda, moeda eletrônica e valor mobiliário.',
        'Token que é valor mobiliário fica com a CVM.',
        'PSAV depende de autorização prévia para funcionar.',
        'Stablecoin referenciada em moeda estrangeira entrou no mercado de câmbio.',
        'Drex está em desenvolvimento, não em circulação.',
      ],
      revisaoRapida: [
        'Tokenizar é registrar direito, não criar direito.',
        'A substância define o regulador, não o rótulo.',
        'Ativo virtual tem definição legal por exclusão.',
        'PSAV precisa de autorização.',
        'Drex é projeto, não produto.',
      ],
    },
    exemplos: [
      {
        titulo: 'O teste que resolve o enquadramento',
        corpo:
          'Pergunte o que o token representa. Se representa direito de participação em resultado de empreendimento gerido por outra pessoa, é valor mobiliário — CVM. Se representa unidade de valor negociável sem esse vínculo, é ativo virtual — Bacen. Se representa apenas acesso a um serviço ou benefício, pode nem ser nenhum dos dois.',
      },
      {
        titulo: 'ETF de criptoativos',
        corpo:
          'Quem compra um ETF de índice de criptoativos listado em bolsa não está comprando criptomoeda: está comprando cota de fundo regulado pela CVM, com administrador, custodiante e informação periódica. O ativo subjacente é volátil do mesmo jeito — o que muda é a camada de proteção e a forma de acesso.',
      },
    ],
    conceitoChave:
      'A tecnologia não determina o regime jurídico. O que determina é o direito representado — e a lei excluiu do conceito de ativo virtual exatamente aquilo que já tem dono regulatório.',
    pontosChave: [
      'Ativo virtual é definido por exclusão',
      'Valor mobiliário tokenizado segue sendo CVM',
      'PSAV exige autorização prévia',
      'Stablecoin em moeda estrangeira é câmbio',
      'Drex ainda é projeto',
    ],
    erroComum:
      'Concluir que uma oferta está fora da regulação porque é feita em blockchain. A forma de registro não altera a natureza do direito ofertado nem afasta a competência da CVM.',
    alertaProva:
      'Não afirme que existe Drex em funcionamento. O projeto teve a plataforma do piloto descontinuada e foi reorientado para liquidação de ativos tokenizados; a implantação ampla continua sem data confirmada. Enunciado que descreva o Drex como meio de pagamento já disponível está errado.',
    tabela: {
      titulo: 'Quem regula o quê no mundo tokenizado',
      colunas: ['O que o token representa', 'Regime', 'Regulador'],
      linhas: [
        ['Participação em resultado de empreendimento de terceiro', 'Valor mobiliário', 'CVM'],
        ['Unidade de valor negociável para pagamento ou investimento', 'Ativo virtual', 'Bacen'],
        ['Referência a moeda estrangeira (stablecoin)', 'Ativo virtual + mercado de câmbio', 'Bacen'],
        ['Moeda eletrônica em conta de pagamento', 'Fora do conceito de ativo virtual', 'Bacen'],
        ['Pontos de programa de fidelidade', 'Fora do conceito de ativo virtual', 'Não regulado como ativo'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Uma plataforma oferece tokens que dão direito a parte do resultado de um empreendimento imobiliário administrado por ela. Esses tokens:',
      alternativas: [
        'Estão fora da regulação por serem emitidos em blockchain',
        'São ativos virtuais sujeitos apenas à autorização do Banco Central',
        'Configuram valor mobiliário e sujeitam-se à competência da CVM',
        'São moeda eletrônica, nos termos da Lei 12.865/2013',
      ],
      correta: 2,
      explicacao:
        'A Lei 14.478/2022 exclui do conceito de ativo virtual as representações de ativos cuja emissão ou negociação já esteja prevista em lei — e a lei preserva expressamente a competência da CVM.',
    },
    mapaMental: {
      id: 'mm-tokn',
      rotulo: 'Tokenização',
      revisao: true,
      filhos: [
        {
          id: 'mm-tokn-av',
          rotulo: 'Ativo virtual',
          detalhe: 'Lei 14.478/2022 · definido por exclusão',
          revisao: true,
          filhos: [
            { id: 'mm-tokn-av-fora', rotulo: 'Fica de fora', detalhe: 'Moeda, moeda eletrônica, VM, fidelidade', revisao: true },
            { id: 'mm-tokn-av-psav', rotulo: 'PSAV', detalhe: 'Autorização prévia do Bacen', revisao: true },
          ],
        },
        {
          id: 'mm-tokn-vm',
          rotulo: 'Token que é valor mobiliário',
          detalhe: 'Substância vence rótulo · CVM',
          revisao: true,
        },
        {
          id: 'mm-tokn-stb',
          rotulo: 'Stablecoin',
          detalhe: 'Referenciada em moeda · entrou no câmbio',
          revisao: true,
        },
        { id: 'mm-tokn-drex', rotulo: 'Drex', detalhe: 'Projeto em desenvolvimento', revisao: true },
        { id: 'mm-tokn-etf', rotulo: 'ETF de cripto', detalhe: 'Cota de fundo, não criptomoeda' },
      ],
    },
    reexplicacoes: {
      simples:
        'Colocar um investimento em blockchain não muda o que ele é. Se o token dá direito a lucro de um negócio de outra pessoa, ele é investimento regulado pela CVM.',
      exemplo:
        'Token que paga parte do aluguel de um prédio administrado por terceiros é investimento coletivo — precisa de registro, como qualquer oferta.',
      analogia:
        'Trocar o papel do contrato por um arquivo digital não muda as obrigações do contrato. O suporte mudou, o direito não.',
      iniciante:
        'Vender algo em blockchain não deixa a venda fora da lei. Vale a mesma regra do que está sendo vendido.',
    },
    niveis: {
      entenda:
        'Tokenizar é registrar um direito em blockchain. Se esse direito é um investimento coletivo, é valor mobiliário e é CVM. Ativo virtual é o que sobra, e quem presta serviço com ele precisa de autorização do Bacen.',
      aprofunde:
        'A Lei 14.478/2022 fez uma escolha de técnica legislativa que vale notar: em vez de listar o que é ativo virtual, ela lista o que não é. O parágrafo único do art. 1º e o inciso IV do art. 3º, lidos juntos, preservam integralmente a competência da CVM e impedem que a tokenização funcione como porta de saída da regulação de valores mobiliários. Isso significa que a expressão "cripto não é regulado no Brasil" nunca foi verdadeira para a parte que importa ao investidor: o que estava sem regime próprio era a prestação de serviço com ativo virtual puro, e é essa lacuna que as resoluções do Banco Central de novembro de 2025 fecharam, com regime de autorização, exigência de estrutura e supervisão proporcional ao risco. A mudança de maior efeito prático foi a cambial: ao enquadrar no mercado de câmbio a compra, venda e troca de ativos virtuais referenciados em moeda fiduciária, o regulador trouxe as stablecoins para dentro do arcabouço de registro, prestação de informação e prevenção à lavagem que já governa remessas internacionais. O efeito para o cliente de varejo é discreto no dia a dia e grande em risco sistêmico: uma stablecoin deixou de ser objeto de comércio livre e passou a ser operação de câmbio, com tudo o que isso implica.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 9,
  },

  {
    id: 'c-defi-estruturas',
    microtemaId: 'm4.4',
    titulo: 'Contratos inteligentes, DEX, DAO e NFT',
    objetivo:
      'Descrever as estruturas típicas das finanças descentralizadas e os riscos que a descentralização cria.',
    etiquetas: ['ESSENCIAL', 'ENTENDER', 'PEGADINHA'],
    resumo30s:
      'Contrato inteligente é código que executa sozinho — inclusive quando o código está errado. DEX negocia sem custodiante e sem quem reverta. DAO decide por voto de token e em regra não tem personalidade jurídica. NFT prova a titularidade do token, não a titularidade da obra.',
    explicacao: {
      oQueE:
        'São os componentes das finanças descentralizadas: programas que executam regras automaticamente, ambientes de negociação sem intermediário, organizações governadas por token e representações digitais de itens únicos.',
      porQueImporta:
        'Porque cada uma delas remove um intermediário — e cada intermediário removido também prestava um serviço: reverter erro, responder por perda, identificar contraparte, garantir liquidação. Descentralizar não elimina esses problemas; transfere-os ao usuário.',
      paraQueServe:
        'Avaliar honestamente o que se ganha e o que se perde nessas estruturas, e explicar isso a um cliente sem repetir o entusiasmo do setor.',
      comoFunciona: [
        'CONTRATO INTELIGENTE: código que executa automaticamente quando as condições programadas se verificam. Não interpreta intenção, não admite exceção e não tem quem reverta — inclusive quando há falha no próprio código.',
        'DEX (corretora descentralizada): negociação diretamente entre carteiras, sem custódia central. Em regra não há identificação de contraparte nem procedimento de recuperação; o risco de contrato e o risco de liquidez ficam com o usuário.',
        'DAO (organização autônoma descentralizada): decisões tomadas por votação de detentores de token. Em regra não tem personalidade jurídica constituída, o que deixa sem resposta clara a pergunta de quem responde quando algo dá errado.',
        'NFT (token não fungível): representa um item único. A titularidade do token não transfere, por si, direitos autorais ou de propriedade sobre a obra representada — isso depende do contrato firmado à parte.',
        'STAKING e provisão de liquidez: entregar ativos ao protocolo em troca de remuneração. Não são renda fixa: há risco de contrato, de oscilação do ativo e de perda pela variação relativa dos ativos depositados.',
      ],
      exemploSimples:
        'Um usuário envia recursos ao endereço errado numa DEX. Não há canal de atendimento, chargeback nem juiz do sistema: a operação está feita e é definitiva.',
      exemploAplicado:
        'Um cliente pergunta por que um protocolo paga 20% ao ano enquanto o banco paga menos. A resposta honesta não é que o protocolo é mais eficiente por não ter agência: é que o retorno remunera riscos que o produto bancário não tem — falha de código, ausência de garantidor, contraparte não identificada e possibilidade de o protocolo simplesmente deixar de existir. A taxa maior é preço de risco, e nomear esse risco é exatamente o dever de comunicação que a regulação impõe.',
      lembrarNaProva: [
        'Contrato inteligente executa o código, não a intenção.',
        'DEX não tem custodiante nem reversão de operação.',
        'DAO em regra não tem personalidade jurídica.',
        'Comprar NFT não é comprar os direitos sobre a obra.',
        'Imutabilidade garante o registro, não a veracidade do que foi registrado.',
      ],
      revisaoRapida: [
        'Sem intermediário é também sem recurso.',
        'Código com erro executa o erro.',
        'Governança por token concentra em quem tem mais token.',
        'NFT prova posse do token.',
        'Retorno alto é preço de risco.',
      ],
    },
    exemplos: [
      {
        titulo: 'As três confusões que o discurso do setor produz',
        corpo:
          'Tratar imutabilidade como veracidade — o registro é imutável, o dado registrado pode ser falso. Tratar transparência como proteção — ver todas as transações não impede fraude. Tratar ausência de intermediário como ausência de risco — o risco não some, muda de dono.',
      },
    ],
    conceitoChave:
      'Cada intermediário removido levava junto um serviço. Descentralizar transfere ao usuário o risco que o intermediário absorvia.',
    pontosChave: [
      'Código executa o erro',
      'DEX não reverte operação',
      'DAO sem personalidade jurídica',
      'NFT não transfere direito autoral',
      'Imutabilidade não é veracidade',
    ],
    erroComum:
      'Apresentar rendimento de protocolo DeFi como equivalente a renda fixa por ter percentual anunciado. Não há emissor identificado, garantia, fundo garantidor nem obrigação exigível de alguém.',
    alertaProva:
      'A pegadinha clássica é a frase "como a blockchain é imutável, os dados registrados são confiáveis". A imutabilidade protege o registro contra alteração posterior; não valida o que foi registrado. Dado falso registrado em blockchain é dado falso permanente.',
    tabela: {
      titulo: 'O que cada estrutura remove — e o custo',
      colunas: ['Estrutura', 'Remove', 'Custo para o usuário'],
      linhas: [
        ['Contrato inteligente', 'A interpretação humana', 'Erro de código é executado'],
        ['DEX', 'O custodiante', 'Sem reversão e sem contraparte identificada'],
        ['DAO', 'A administração formal', 'Sem responsável claro'],
        ['NFT', 'O registro central de titularidade', 'Direito sobre a obra depende de contrato à parte'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Sobre a imutabilidade dos registros em blockchain, é correto afirmar que:',
      alternativas: [
        'Garante que as informações registradas sejam verdadeiras',
        'Impede a alteração posterior do registro, mas não valida o conteúdo registrado',
        'Permite reverter operações mediante decisão da maioria dos usuários',
        'Elimina a necessidade de identificação das partes envolvidas',
      ],
      correta: 1,
      explicacao:
        'A imutabilidade protege contra alteração posterior. Um dado falso registrado torna-se um dado falso permanente.',
    },
    mapaMental: {
      id: 'mm-dex',
      rotulo: 'Estruturas DeFi',
      revisao: true,
      filhos: [
        {
          id: 'mm-dex-sc',
          rotulo: 'Contrato inteligente',
          detalhe: 'Executa o código, não a intenção',
          revisao: true,
        },
        {
          id: 'mm-dex-dex',
          rotulo: 'DEX',
          detalhe: 'Sem custódia · sem reversão',
          revisao: true,
        },
        {
          id: 'mm-dex-dao',
          rotulo: 'DAO',
          detalhe: 'Voto por token · sem personalidade jurídica',
          revisao: true,
        },
        {
          id: 'mm-dex-nft',
          rotulo: 'NFT',
          detalhe: 'Titularidade do token, não da obra',
          revisao: true,
        },
        {
          id: 'mm-dex-conf',
          rotulo: 'As três confusões',
          detalhe: 'Imutável ≠ verdadeiro · transparente ≠ seguro · sem intermediário ≠ sem risco',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Nessas estruturas não existe atendimento nem quem desfaça um erro. O programa faz exatamente o que está escrito, mesmo quando o que está escrito está errado.',
      exemplo:
        'Enviou para o endereço errado? Não há como cancelar. Não existe telefone, chargeback nem gerente.',
      analogia:
        'É como dinheiro em espécie entregue em mão: rápido, direto e sem qualquer forma de recuperar se você entregou para a pessoa errada.',
      iniciante:
        'Sem banco no meio, ninguém conserta engano. A vantagem da velocidade vem junto com essa desvantagem.',
    },
    niveis: {
      entenda:
        'Contrato inteligente executa sozinho, DEX negocia sem custodiante, DAO decide por token e NFT representa um item único. Em todos, tirar o intermediário tira também o socorro.',
      aprofunde:
        'A dificuldade jurídica mais interessante do arranjo está na DAO, e ela é instrutiva porque expõe o limite da ideia de organização sem organização. Se uma DAO causa dano — porque o protocolo falhou, porque a governança aprovou algo lesivo, porque houve captura por quem acumulou tokens de voto — a pergunta de quem responde não tem resposta pronta. Sem personalidade jurídica, não há patrimônio societário a executar; e a alternativa que alguns ordenamentos vêm considerando, tratar a DAO como sociedade de fato, implicaria responsabilidade pessoal e ilimitada dos participantes, justamente o oposto do que atraía as pessoas. O ponto é que responsabilidade limitada nunca foi um efeito colateral da burocracia societária: era o produto dela. O mesmo raciocínio se aplica ao contrato inteligente. A máxima "o código é a lei" descreve bem o funcionamento e mal as consequências: quando um contrato inteligente é explorado por uma falha, o resultado é tecnicamente correto e economicamente um roubo, e resolver isso exige uma autoridade externa ao sistema — que é precisamente o que a arquitetura se propôs a dispensar. Comunicar isso a um cliente não é ser contra a tecnologia; é descrever o que ela faz e o que ela não faz.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 9,
  },
]
