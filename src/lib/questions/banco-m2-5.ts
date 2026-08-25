import { q } from './builder'

/**
 * Questões autorais — microtema 2.5 (Seguros de vida e patrimoniais).
 *
 * Quase toda pegadinha do tema nasce de aplicar a regra de um tipo de seguro
 * ao outro: cumular apólices (permitido em pessoas, vedado para lucro em
 * dano), sub-rogação (existe em dano, não em pessoas), inventário (o bem
 * segurado entra, o capital do seguro de vida não). Os distratores fazem
 * exatamente essa troca, que é como o candidato erra.
 *
 * O vocabulário é a segunda armadilha: prêmio é o que o segurado PAGA, e a
 * troca com indenização aparece em enunciado com frequência.
 */
export const BANCO_M2_5 = [
  /* ---- c-seguros-fundamentos ------------------------------------------- */
  q('q-sf-01', {
    c: 'c-seguros-fundamentos', tipo: 'conceitual', dif: 'facil',
    hab: 'Identificar o significado de prêmio no contrato de seguro',
    e: 'No contrato de seguro, o prêmio corresponde ao:',
    alt: [
      ['Valor pago pelo segurado à seguradora pela cobertura contratada.', true, 'Correta. Prêmio é o preço do seguro, e quem paga é o segurado.'],
      ['Valor pago pela seguradora ao segurado após o sinistro.', false, 'Isso é a indenização ou o capital segurado, conforme o tipo de seguro.'],
      ['Parcela do prejuízo que fica a cargo do segurado.', false, 'Essa é a franquia.'],
      ['Limite máximo de cobertura previsto na apólice.', false, 'Esse é o limite máximo de indenização, outro conceito.'],
    ],
    exp: 'A troca entre prêmio e indenização é o erro de vocabulário mais frequente do tema.',
    tags: ['seguros', 'premio', 'conceitual'],
  }),
  q('q-sf-02', {
    c: 'c-seguros-fundamentos', tipo: 'aplicacao', dif: 'media',
    hab: 'Aplicar o princípio indenizatório',
    ctx: 'Um cliente contrata duas apólices de seguro residencial, em seguradoras diferentes, sobre o mesmo imóvel, esperando receber de ambas em caso de sinistro.',
    e: 'Sobre o pagamento das indenizações, é correto afirmar:',
    alt: [
      ['A soma das indenizações não pode superar o prejuízo efetivo, por força do princípio indenizatório.', true, 'Correta. Seguro de dano repara a perda; não é fonte de lucro.'],
      ['Ele receberá integralmente de ambas as seguradoras, pois pagou dois prêmios.', false, 'Pagar dois prêmios não afasta o princípio indenizatório em seguro de dano.'],
      ['Apenas a apólice mais antiga é válida; a segunda é nula.', false, 'Ambas são válidas; o que se limita é o total indenizado.'],
      ['O princípio indenizatório só se aplica a seguros de automóvel.', false, 'Ele se aplica a todo seguro de dano.'],
    ],
    exp: 'Se a indenização pudesse superar o prejuízo, o segurado passaria a ter interesse econômico no sinistro — e o produto ruiria.',
    tags: ['seguros', 'principio-indenizatorio', 'aplicacao'],
  }),
  q('q-sf-03', {
    c: 'c-seguros-fundamentos', tipo: 'conceitual', dif: 'media',
    hab: 'Distinguir franquia de carência',
    e: 'A diferença entre franquia e carência é que a franquia:',
    alt: [
      ['É um valor — a parcela do prejuízo que fica com o segurado —, enquanto a carência é um prazo em que a cobertura ainda não vale.', true, 'Correta. São conceitos de eixos diferentes: um de valor, outro de tempo.'],
      ['É o prazo inicial sem cobertura, enquanto a carência é a parcela do prejuízo do segurado.', false, 'As definições estão invertidas.'],
      ['É o valor pago pelo segurado à seguradora todo mês.', false, 'Esse é o prêmio.'],
      ['É o limite máximo de indenização previsto na apólice.', false, 'Esse é o limite máximo de indenização, não a franquia.'],
    ],
    exp: 'Franquia é valor; carência é tempo. A troca entre os dois é um dos erros mais comuns da matéria.',
    tags: ['seguros', 'franquia', 'conceitual'],
  }),
  q('q-sf-04', {
    c: 'c-seguros-fundamentos', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar a estrutura regulatória do setor de seguros',
    e: 'No sistema brasileiro de seguros, a supervisão das sociedades seguradoras cabe:',
    alt: [
      ['À SUSEP, enquanto a normatização cabe ao CNSP.', true, 'Correta. Seguro-saúde é exceção e fica com a ANS.'],
      ['Ao CNSP, que normatiza e supervisiona.', false, 'O CNSP normatiza; a supervisão é da SUSEP.'],
      ['Ao Banco Central, como parte do sistema financeiro.', false, 'O Banco Central supervisiona instituições financeiras, não seguradoras.'],
      ['À CVM, por se tratar de produto de investimento.', false, 'A CVM supervisiona o mercado de valores mobiliários.'],
    ],
    exp: 'A dupla normatiza-supervisiona se repete no SFN: CMN e BACEN, CNSP e SUSEP, CNPC e PREVIC.',
    tags: ['susep', 'cnsp', 'conceitual'],
  }),
  q('q-sf-05', {
    c: 'c-seguros-fundamentos', tipo: 'aplicacao', dif: 'facil',
    hab: 'Aplicar o efeito da franquia sobre a indenização',
    ctx: 'Um veículo segurado sofre dano cujo orçamento de reparo é inferior ao valor da franquia contratada.',
    e: 'Quanto ao pagamento pela seguradora:',
    alt: [
      ['Não haverá pagamento, pois o prejuízo não supera a franquia.', true, 'Correta. A franquia é a parcela do prejuízo que fica com o segurado.'],
      ['A seguradora paga integralmente, pois o sinistro está coberto.', false, 'A cobertura existe, mas a franquia limita o pagamento a valores acima dela.'],
      ['A seguradora paga metade do orçamento.', false, 'Não há divisão proporcional: abaixo da franquia, não há pagamento.'],
      ['O segurado pode exigir a devolução do prêmio pago.', false, 'O prêmio remunera a cobertura do período, independentemente de haver sinistro.'],
    ],
    exp: 'A franquia elimina sinistros de baixo valor, cujo custo administrativo superaria a indenização — e preserva o incentivo ao cuidado.',
    tags: ['seguros', 'franquia', 'aplicacao'],
  }),

  /* ---- c-seguro-vida ----------------------------------------------------- */
  q('q-sv-01', {
    c: 'c-seguro-vida', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer o tratamento sucessório do capital segurado',
    e: 'O capital pago ao beneficiário de um seguro de vida em razão da morte do segurado:',
    alt: [
      ['Não integra o inventário nem responde por dívidas do falecido.', true, 'Correta. O direito do beneficiário é originário, e não decorre de transmissão hereditária.'],
      ['Integra o inventário e é partilhado entre os herdeiros necessários.', false, 'O capital não é herança e não entra em partilha.'],
      ['Só é pago após a conclusão da partilha.', false, 'O pagamento independe do inventário — é justamente essa a vantagem do instrumento.'],
      ['É limitado ao valor do patrimônio deixado pelo segurado.', false, 'O capital é o contratado na apólice, sem relação com o patrimônio deixado.'],
    ],
    exp: 'É liquidez imediata num momento em que o resto do patrimônio costuma estar travado.',
    tags: ['seguro-vida', 'sucessao', 'conceitual'],
  }),
  q('q-sv-02', {
    c: 'c-seguro-vida', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir seguro de pessoas de seguro de dano quanto à cumulação',
    e: 'Sobre a contratação de mais de uma apólice para o mesmo risco, é correto afirmar:',
    alt: [
      ['Em seguro de pessoas a cumulação é permitida e o segurado pode receber de todas as apólices.', true, 'Correta. Não se aplica o princípio indenizatório ao seguro de pessoas.'],
      ['Em seguro de pessoas a cumulação é vedada, como em seguro de dano.', false, 'A vedação para lucro é do seguro de dano, não do de pessoas.'],
      ['Em seguro de dano a cumulação permite receber de todas as seguradoras integralmente.', false, 'O princípio indenizatório limita a soma ao prejuízo efetivo.'],
      ['A cumulação é sempre vedada, em qualquer modalidade de seguro.', false, 'Em seguro de pessoas ela é expressamente admitida.'],
    ],
    exp: 'Seguro de pessoas paga capital contratado; não repara prejuízo. Por isso a lógica da cumulação é oposta.',
    tags: ['seguro-vida', 'cumulacao', 'comparacao'],
  }),
  q('q-sv-03', {
    c: 'c-seguro-vida', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Recomendar seguro de vida para liquidez sucessória',
    ctx: 'Um cliente com empresa e patrimônio pouco líquido pergunta como garantir caixa imediato à família caso ele venha a faltar.',
    e: 'A resposta tecnicamente adequada é:',
    alt: [
      ['O seguro de vida atende diretamente ao objetivo: o capital é pago ao beneficiário sem passar por inventário e sem ser retido por dívidas.', true, 'Correta. É liquidez numa hora em que o restante do patrimônio está bloqueado.'],
      ['Basta manter saldo elevado em conta corrente conjunta, que é liberado automaticamente.', false, 'Saldo em conta integra o espólio e depende de autorização judicial ou de regras específicas.'],
      ['Aplicar em imóveis, que têm maior valor de revenda.', false, 'Imóvel é o ativo menos líquido e ainda integra o inventário.'],
      ['Concentrar o patrimônio em ações, que podem ser vendidas rapidamente.', false, 'Ações também integram o espólio e ficam indisponíveis durante o inventário.'],
    ],
    exp: 'O problema declarado não é rentabilidade: é liquidez no momento em que o inventário trava tudo.',
    tags: ['seguro-vida', 'sucessorio', 'atendimento'],
  }),
  q('q-sv-04', {
    c: 'c-seguro-vida', tipo: 'conceitual', dif: 'dificil',
    hab: 'Reconhecer a ausência de sub-rogação em seguro de pessoas',
    e: 'Após pagar o capital em seguro de pessoas, a seguradora:',
    alt: [
      ['Não se sub-roga nos direitos do segurado contra o causador do dano.', true, 'Correta. A sub-rogação é característica do seguro de dano, não do de pessoas.'],
      ['Sub-roga-se automaticamente e pode cobrar o causador do dano.', false, 'Isso ocorre em seguro de dano, onde a seguradora repara prejuízo.'],
      ['Pode escolher entre sub-rogar-se ou não, conforme a apólice.', false, 'A ausência de sub-rogação em seguro de pessoas não é opcional.'],
      ['Sub-roga-se apenas se o capital superar o valor do prejuízo.', false, 'Seguro de pessoas não mede prejuízo: paga capital contratado.'],
    ],
    exp: 'O capital não repara dano, então não há direito de reparação a ser transferido à seguradora.',
    tags: ['seguro-vida', 'sub-rogacao', 'conceitual'],
  }),
  q('q-sv-05', {
    c: 'c-seguro-vida', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar a indicação de beneficiário',
    e: 'Sobre a indicação de beneficiário em seguro de vida, é correto afirmar:',
    alt: [
      ['É de livre indicação pelo segurado e pode ser alterada a qualquer tempo, salvo cláusula de irrevogabilidade.', true, 'Correta. O beneficiário não precisa estar na ordem de vocação hereditária.'],
      ['Deve obrigatoriamente recair sobre herdeiros necessários.', false, 'A indicação é livre e pode alcançar pessoa fora da ordem hereditária.'],
      ['É definitiva a partir da assinatura da proposta.', false, 'A alteração é possível, salvo se houver cláusula de irrevogabilidade.'],
      ['Depende de homologação judicial para produzir efeitos.', false, 'A indicação produz efeitos contratuais, sem necessidade de homologação.'],
    ],
    exp: 'A liberdade de indicação é o que faz do seguro de vida um instrumento de planejamento, e não só de proteção de renda.',
    tags: ['seguro-vida', 'beneficiario', 'conceitual'],
  }),
]
