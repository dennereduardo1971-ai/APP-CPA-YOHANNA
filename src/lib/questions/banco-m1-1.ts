import { q } from './builder'

/**
 * Questões autorais — microtema 1.1 (complemento: seguros, previdência e
 * operadores).
 *
 * O erro que organiza o lote é **confundir quem vende com quem regula**. O
 * cliente compra previdência no banco, paga a maquininha com uma fintech e
 * investe por uma corretora — três balcões, três reguladores diferentes, e a
 * intuição do balcão erra os três. Os distratores plausíveis são sempre os que
 * seguem o lugar da venda em vez de seguir a atividade.
 *
 * Duas questões deste lote se apoiam em mudança normativa recente que boa
 * parte do material ainda não absorveu (`q-cnsp-03` e `q-cnsp-06`). Em ambas,
 * a alternativa "clássica" é a errada — e a justificativa diz por quê.
 */
export const BANCO_M1_1 = [
  /* ---- c-cnsp-cnpc ------------------------------------------------------- */
  q('q-cnsp-01', {
    c: 'c-cnsp-cnpc', tipo: 'conceitual', dif: 'facil',
    hab: 'Identificar o fiscalizador da previdência aberta',
    e: 'A fiscalização das entidades abertas de previdência complementar, que operam PGBL e VGBL, cabe:',
    alt: [
      ['À Susep, executora das diretrizes fixadas pelo CNSP.', true, 'Correta. Previdência aberta integra o sistema de seguros privados.'],
      ['Ao Banco Central, por serem produtos distribuídos por bancos.', false, 'O Bacen fiscaliza o distribuidor, não o plano. A atividade é que define o regulador.'],
      ['À Previc, que supervisiona toda previdência complementar.', false, 'A Previc supervisiona apenas a previdência FECHADA, das EFPC.'],
      ['À CVM, por haver aplicação em fundos de investimento.', false, 'A CVM regula os fundos em que o plano investe, não o plano previdenciário.'],
    ],
    exp: 'Aberta é Susep; fechada é Previc. O balcão onde se vende não muda isso.',
    tags: ['sfn', 'susep', 'previdencia'],
  }),
  q('q-cnsp-02', {
    c: 'c-cnsp-cnpc', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir entidade aberta de entidade fechada',
    e: 'O critério que distingue uma entidade FECHADA de previdência complementar de uma entidade ABERTA é:',
    alt: [
      ['O acesso: a fechada exige vínculo com patrocinador ou instituidor; a aberta é oferecida ao público.', true, 'Correta. É o acesso que define o regime e, com ele, o regulador.'],
      ['O valor mínimo de aporte exigido do participante.', false, 'Valor de aporte é condição comercial, não critério de classificação legal.'],
      ['O fato de a fechada investir apenas em renda fixa.', false, 'Não há tal restrição: a política de investimento é definida por norma do CMN e pelo próprio plano.'],
      ['A existência de benefício por invalidez apenas na aberta.', false, 'Ambas podem prever coberturas de risco, conforme o regulamento do plano.'],
    ],
    exp: 'Se qualquer pessoa pode contratar no balcão, é aberta e é Susep. Se só entra quem tem vínculo, é fechada e é Previc.',
    tags: ['sfn', 'previdencia', 'comparacao'],
  }),
  q('q-cnsp-03', {
    c: 'c-cnsp-cnpc', tipo: 'conceitual', dif: 'dificil',
    hab: 'Reconhecer o papel do CNSP sem depender de lista decorada',
    e: 'Sobre o Conselho Nacional de Seguros Privados (CNSP), é correto afirmar que:',
    alt: [
      ['É órgão normativo do sistema de seguros privados, presidido pelo Ministro da Fazenda, e conta com o Superintendente da Susep entre seus membros.', true, 'Correta. Essas são as características estáveis do colegiado.'],
      ['Sua composição inclui obrigatoriamente um representante da CVM.', false, 'A Lei 14.711/2023 revogou o inciso VI do art. 33 do Decreto-Lei 73/1966 e retirou a CVM do conselho. Muito material ainda repete a lista antiga.'],
      ['Fiscaliza diretamente as seguradoras e aplica as penalidades.', false, 'Quem fiscaliza e pune é a Susep. O CNSP normatiza.'],
      ['Subordina-se ao Conselho Monetário Nacional, que ratifica suas resoluções.', false, 'São conselhos autônomos, com competências próprias e sem relação hierárquica.'],
    ],
    exp: 'Conselho normatiza, autarquia fiscaliza. E composição de colegiado muda por lei — decorar a lista é o caminho errado.',
    tags: ['sfn', 'cnsp', 'atualizacao'],
  }),
  q('q-cnsp-04', {
    c: 'c-cnsp-cnpc', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Encaminhar reclamação ao regulador correto',
    ctx: 'Um cliente participa do fundo de pensão da empresa em que trabalha e quer reclamar da forma como o plano vem sendo administrado.',
    e: 'A entidade competente para receber e apurar essa reclamação é:',
    alt: [
      ['A Previc, que supervisiona as entidades fechadas de previdência complementar.', true, 'Correta. Fundo de pensão de empresa é EFPC, sob CNPC e Previc.'],
      ['A Susep, que supervisiona toda a previdência complementar do país.', false, 'A Susep supervisiona apenas a previdência ABERTA.'],
      ['O Banco Central, por se tratar de aplicação de recursos de terceiros.', false, 'O Bacen não supervisiona entidade de previdência complementar.'],
      ['O CNPC, que é o órgão normativo e também julga reclamações.', false, 'O CNPC normatiza; a supervisão e a apuração cabem à Previc.'],
    ],
    exp: 'Fundo de pensão exige vínculo — é fechado, é EFPC, é Previc.',
    tags: ['sfn', 'previc', 'atendimento'],
  }),
  q('q-cnsp-05', {
    c: 'c-cnsp-cnpc', tipo: 'multipla_escolha', dif: 'facil',
    hab: 'Localizar capitalização e resseguro no sistema',
    e: 'Os títulos de capitalização e as operações de resseguro são supervisionados por:',
    alt: [
      ['Susep, em ambos os casos.', true, 'Correta. Os dois integram o sistema de seguros privados, sob CNSP e Susep.'],
      ['Banco Central, por envolverem captação de recursos do público.', false, 'Capitalização não é depósito; e resseguro é contrato de seguro entre seguradoras.'],
      ['CVM, por serem produtos com componente de investimento.', false, 'Nenhum dos dois é valor mobiliário.'],
      ['Susep para capitalização e Banco Central para resseguro.', false, 'Desde a LC 126/2007 o resseguro também está sob CNSP e Susep.'],
    ],
    exp: 'Capitalização e resseguro moram na Susep. Nenhum dos dois é depósito nem valor mobiliário.',
    tags: ['sfn', 'susep', 'capitalizacao'],
  }),
  q('q-cnsp-06', {
    c: 'c-cnsp-cnpc', tipo: 'conceitual', dif: 'dificil',
    hab: 'Reconhecer a inclusão da proteção patrimonial mutualista no sistema',
    e: 'As operações de proteção patrimonial mutualista, popularmente conhecidas como associações de proteção veicular:',
    alt: [
      ['Passaram a integrar o sistema de seguros privados, submetidas ao CNSP e à Susep, por força da Lei Complementar 213/2025.', true, 'Correta. A LC 213/2025 criou a figura e a trouxe para dentro do sistema, com exigência de administradora autorizada.'],
      ['Permanecem fora de qualquer regulação, por serem associações civis sem fins lucrativos.', false, 'Era assim antes da LC 213/2025; deixou de ser.'],
      ['São reguladas pelo Banco Central, por captarem contribuições mensais.', false, 'Contribuição de rateio não é captação bancária; a competência é do CNSP/Susep.'],
      ['Foram equiparadas a seguro por lei e podem usar livremente a denominação "seguradora".', false, 'A lei criou categoria PRÓPRIA e distinta de seguro, com regras específicas — não houve equiparação.'],
    ],
    exp: 'O que era mercado paralelo entrou no sistema, mas como figura própria: mutualismo regulado, não seguro.',
    tags: ['sfn', 'susep', 'atualizacao'],
  }),
  q('q-cnsp-07', {
    c: 'c-cnsp-cnpc', tipo: 'aplicacao', dif: 'media',
    hab: 'Separar o papel normativo do papel fiscalizador',
    e: 'Uma seguradora descumpre norma sobre provisões técnicas. A aplicação da penalidade cabe:',
    alt: [
      ['À Susep, na qualidade de órgão fiscalizador e executor das diretrizes do CNSP.', true, 'Correta. Normatiza o conselho; fiscaliza e pune a autarquia.'],
      ['Ao CNSP, que editou a norma descumprida.', false, 'Quem edita a norma não é quem aplica a sanção nesse desenho institucional.'],
      ['Ao Conselho Monetário Nacional, órgão máximo do SFN.', false, 'O CMN não tem competência sobre seguradoras.'],
      ['Ao Ministério da Fazenda, que preside o CNSP.', false, 'A presidência do colegiado não confere poder sancionador direto.'],
    ],
    exp: 'A regra vale para os três ramos: CMN e Bacen, CNSP e Susep, CNPC e Previc. Conselho normatiza; autarquia pune.',
    tags: ['sfn', 'sancao', 'aplicacao'],
  }),
  q('q-cnsp-08', {
    c: 'c-cnsp-cnpc', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Aplicar a regra de portabilidade entre regimes',
    ctx: 'Um participante de fundo de pensão da empresa se desliga e quer levar o direito acumulado para um plano de entidade aberta.',
    e: 'Nos termos da LC 109/2001, essa portabilidade:',
    alt: [
      ['É admitida, desde que a integralidade dos recursos seja usada para contratar renda mensal vitalícia ou por prazo determinado não inferior a quinze anos.', true, 'Correta. É a exigência do art. 14, § 4º, que impede que a saída do regime fechado vire saque disfarçado.'],
      ['É livre, e o participante pode resgatar o valor portado a qualquer momento.', false, 'Justamente o contrário: é vedado resgatar montante portado de entidade fechada.'],
      ['É vedada em qualquer hipótese, por serem regimes jurídicos distintos.', false, 'A portabilidade entre regimes é admitida, com condição.'],
      ['Exige autorização prévia e individual da Previc para cada participante.', false, 'A norma estabelece a condição objetiva; não há autorização caso a caso.'],
    ],
    exp: 'A condição existe porque previdência fechada tem tratamento próprio: sair dela não pode equivaler a sacar.',
    tags: ['previdencia', 'portabilidade', 'lc109'],
  }),

  /* ---- c-operadores-sfn -------------------------------------------------- */
  q('q-oper-01', {
    c: 'c-operadores-sfn', tipo: 'conceitual', dif: 'facil',
    hab: 'Identificar a atividade privativa do banco comercial',
    e: 'A captação de depósitos à vista, movimentáveis por cheque ou por meio eletrônico, é atividade:',
    alt: [
      ['Privativa de instituições financeiras com carteira comercial, incluídas as cooperativas de crédito em relação aos associados.', true, 'Correta. É a atividade que cria moeda escritural e por isso está sujeita a compulsório.'],
      ['Permitida a qualquer instituição autorizada pelo Banco Central, inclusive de pagamento.', false, 'A instituição de pagamento é autorizada pelo Bacen, mas não pode captar depósito.'],
      ['Exclusiva dos bancos múltiplos, por reunirem mais de uma carteira.', false, 'Basta a carteira comercial; o banco comercial puro também capta.'],
      ['Permitida também aos bancos de investimento, desde que autorizados.', false, 'Banco de investimento não capta depósito à vista em nenhuma hipótese.'],
    ],
    exp: 'Depósito à vista é o divisor: quem pode captá-lo cria moeda e responde a compulsório.',
    tags: ['sfn', 'operadores', 'deposito'],
  }),
  q('q-oper-02', {
    c: 'c-operadores-sfn', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir banco comercial de banco de investimento',
    e: 'A diferença central entre um banco comercial e um banco de investimento é que o de investimento:',
    alt: [
      ['Não capta depósito à vista, operando com depósito a prazo, repasses e distribuição de emissões.', true, 'Correta. É a marca da carteira de investimento.'],
      ['Não pode conceder crédito, apenas assessorar empresas.', false, 'Pode conceder crédito de médio e longo prazo, inclusive por repasse.'],
      ['É fiscalizado pela CVM, e não pelo Banco Central.', false, 'É instituição financeira e é fiscalizado pelo Bacen; a CVM alcança sua atuação no mercado de valores mobiliários.'],
      ['Não pode administrar recursos de terceiros.', false, 'A administração de recursos é uma das suas atividades típicas.'],
    ],
    exp: 'Se a alternativa fala em conta corrente e banco de investimento na mesma frase, ela está errada.',
    tags: ['sfn', 'operadores', 'comparacao'],
  }),
  q('q-oper-03', {
    c: 'c-operadores-sfn', tipo: 'conceitual', dif: 'media',
    hab: 'Definir banco múltiplo pela composição de carteiras',
    e: 'Um banco múltiplo caracteriza-se por:',
    alt: [
      ['Reunir, na mesma pessoa jurídica, ao menos duas carteiras, sendo uma delas comercial ou de investimento.', true, 'Correta. É a exigência que impede que o "múltiplo" seja apenas soma de carteiras acessórias.'],
      ['Reunir obrigatoriamente as carteiras comercial e de investimento.', false, 'Basta que UMA das duas esteja presente, ao lado de outra qualquer.'],
      ['Possuir agências em mais de uma unidade da federação.', false, 'Presença geográfica não define tipo de instituição.'],
      ['Ser controlado por mais de um grupo econômico.', false, 'A composição societária não é critério de classificação da instituição.'],
    ],
    exp: 'Múltiplo não é um tipo novo de banco: é a permissão de operar carteiras diferentes sob um CNPJ e um balanço.',
    tags: ['sfn', 'operadores', 'conceitual'],
  }),
  q('q-oper-04', {
    c: 'c-operadores-sfn', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Identificar a garantia aplicável ao depósito em cooperativa',
    ctx: 'Um associado mantém R$ 180 mil em depósito a prazo numa cooperativa de crédito singular.',
    e: 'Em caso de liquidação da cooperativa, esse valor:',
    alt: [
      ['É coberto pelo FGCoop, fundo garantidor próprio do sistema cooperativo.', true, 'Correta. Cooperativa singular e banco cooperativo respondem ao FGCoop.'],
      ['É coberto pelo FGC, o mesmo fundo dos bancos.', false, 'O FGC cobre instituições bancárias associadas; cooperativa singular tem fundo próprio.'],
      ['Não tem cobertura, por a cooperativa não ser instituição financeira.', false, 'Cooperativa de crédito É instituição financeira.'],
      ['É coberto pelo FGC apenas na parcela que exceder R$ 100 mil.', false, 'Não existe essa repartição entre fundos.'],
    ],
    exp: 'Mesma lógica de proteção, fundo diferente. Trocar FGC por FGCoop é o distrator mais frequente do tema.',
    tags: ['sfn', 'cooperativa', 'fgcoop'],
  }),
  q('q-oper-05', {
    c: 'c-operadores-sfn', tipo: 'conceitual', dif: 'dificil',
    hab: 'Delimitar o perímetro da instituição de pagamento',
    e: 'Nos termos da Lei 12.865/2013, às instituições de pagamento é VEDADO:',
    alt: [
      ['Realizar atividades privativas de instituições financeiras, como captar depósito e emprestar recursos de terceiros por conta própria.', true, 'Correta. É o § 2º do art. 6º — a fronteira que separa os dois regimes.'],
      ['Emitir instrumento de pagamento e credenciar sua aceitação.', false, 'São exatamente as atividades típicas da instituição de pagamento.'],
      ['Gerir conta de pagamento e converter moeda física em moeda eletrônica.', false, 'Também são atividades expressamente previstas na lei.'],
      ['Aderir a mais de um arranjo de pagamento simultaneamente.', false, 'A lei prevê a adesão a um ou mais arranjos.'],
    ],
    exp: 'A instituição de pagamento move dinheiro; não o toma emprestado do público para reemprestar. É por isso que grupos de fintech criam uma SCD ao lado.',
    tags: ['sfn', 'pagamento', 'perimetro'],
  }),
  q('q-oper-06', {
    c: 'c-operadores-sfn', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Comparar a proteção do depósito e a da conta de pagamento',
    ctx: 'Um cliente mantém R$ 40 mil na conta de pagamento pré-paga de uma fintech e pergunta se está protegido como no banco.',
    e: 'A resposta tecnicamente correta é:',
    alt: [
      ['O saldo não tem FGC; é protegido por segregação patrimonial, ficando em conta no Banco Central ou em título público federal, fora da massa em caso de falência.', true, 'Correta. É proteção real, mas de natureza diferente da do FGC.'],
      ['O saldo tem FGC até R$ 250 mil, como qualquer conta.', false, 'Conta de pagamento não é depósito e não integra a cobertura do FGC.'],
      ['O saldo não tem proteção alguma e integra a massa falida da fintech.', false, 'A segregação imposta pelo Bacen retira esse recurso da massa.'],
      ['O saldo é garantido pelo instituidor do arranjo de pagamento.', false, 'O instituidor do arranjo define regras; não garante saldo de usuário final.'],
    ],
    exp: 'Nem "tem FGC" nem "não tem nada". A proteção existe e é de outro tipo — e essa distinção é o que a prova cobra.',
    tags: ['sfn', 'pagamento', 'fgc'],
  }),
  q('q-oper-07', {
    c: 'c-operadores-sfn', tipo: 'comparacao', dif: 'dificil',
    hab: 'Avaliar a distinção entre corretora e distribuidora',
    e: 'Sobre a diferença entre sociedades corretoras (CTVM) e distribuidoras (DTVM) de títulos e valores mobiliários, é correto afirmar que:',
    alt: [
      ['Desde 2009 as distribuidoras também podem operar diretamente nos mercados organizados, de modo que os escopos operacionais se equivaleram.', true, 'Correta. A diferença remanescente é histórica, de constituição.'],
      ['Apenas a corretora pode intermediar operações em bolsa; a distribuidora atua só no mercado de balcão.', false, 'Essa é a distinção clássica, superada desde 2009. É o distrator mais provável do tema.'],
      ['Apenas a distribuidora pode administrar carteiras de valores mobiliários.', false, 'Ambas podem, mediante autorização da CVM.'],
      ['A corretora é fiscalizada pela CVM e a distribuidora pelo Banco Central.', false, 'Ambas respondem a Bacen e CVM, cada um em seu campo.'],
    ],
    exp: 'Alternativa que separa CTVM de DTVM pela bolsa está repetindo material desatualizado.',
    tags: ['sfn', 'ctvm', 'atualizacao'],
  }),
  q('q-oper-08', {
    c: 'c-operadores-sfn', tipo: 'aplicacao', dif: 'media',
    hab: 'Classificar instituição pela atividade descrita',
    ctx: 'Uma empresa autorizada pelo Banco Central capta recursos do público, concede empréstimo pessoal com recursos próprios e captados, mas não oferece conta movimentável por cheque.',
    e: 'Essa descrição é compatível com:',
    alt: [
      ['Uma instituição financeira sem carteira comercial, como uma financeira ou um banco de investimento.', true, 'Correta. Capta e empresta — logo é instituição financeira — mas sem depósito à vista.'],
      ['Uma instituição de pagamento, que também pode conceder crédito.', false, 'Instituição de pagamento não pode captar do público nem emprestar recurso de terceiro por conta própria.'],
      ['Uma corretora de valores, que intermedeia crédito entre clientes.', false, 'Corretora intermedeia valores mobiliários; não capta depósito para emprestar.'],
      ['Um correspondente bancário, que atende em nome de outra instituição.', false, 'Correspondente atua em nome de terceiro; não capta nem concede crédito próprio.'],
    ],
    exp: 'Sempre o mesmo teste: capta do público para emprestar por conta própria? Então é instituição financeira, com ou sem conta corrente.',
    tags: ['sfn', 'operadores', 'aplicacao'],
  }),
]
