import { q } from './builder'

/**
 * Questões autorais — microtemas 4.4 (aprofundamento) e 4.5.
 *
 * O macrotema 4 é o mais volátil do programa, e o critério editorial do banco
 * segue o já adotado em `banco-m4-resto.ts`: **cobrar o mecanismo e a lógica
 * da distinção, nunca uma exigência normativa de detalhe que envelhece**.
 * Por isso nenhuma questão daqui fixa prazo de adaptação de prestadora,
 * número de resolução do Banco Central ou cronograma do Drex.
 *
 * O distrator recorrente continua sendo o **entusiasmo**, agora em quatro
 * formas: tratar blockchain como se afastasse a competência da CVM, tratar
 * imutabilidade como veracidade, tratar rendimento de protocolo como renda
 * fixa e tratar open investment e open insurance como fases de um só sistema.
 */
export const BANCO_M4_45 = [
  /* ---- c-tokenizacao ----------------------------------------------------- */
  q('q-tokn-01', {
    c: 'c-tokenizacao', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Enquadrar um token pela substância do direito representado',
    ctx: 'Uma plataforma oferece tokens que dão direito a parte do resultado de um empreendimento imobiliário por ela administrado, com captação junto ao público.',
    e: 'O enquadramento correto desses tokens é:',
    alt: [
      ['São valores mobiliários e sujeitam-se à competência da CVM, independentemente de serem emitidos em blockchain.', true, 'Correta. Há captação pública com expectativa de lucro decorrente do esforço de terceiro.'],
      ['São ativos virtuais e sujeitam-se apenas ao regime do Banco Central.', false, 'A Lei 14.478/2022 exclui do conceito de ativo virtual o que já tem previsão legal, como valores mobiliários.'],
      ['Estão fora da regulação, por não haver norma específica para tokenização imobiliária.', false, 'A ausência de norma específica sobre a tecnologia não afasta a norma sobre o direito ofertado.'],
      ['São moeda eletrônica, nos termos da Lei 12.865/2013.', false, 'Moeda eletrônica é recurso armazenado para transação de pagamento, não participação em resultado.'],
    ],
    exp: 'A blockchain muda como o direito é registrado, não o que ele é. Alegar o contrário é o argumento típico da oferta irregular.',
    tags: ['tokenizacao', 'cvm', 'enquadramento'],
  }),
  q('q-tokn-02', {
    c: 'c-tokenizacao', tipo: 'conceitual', dif: 'media',
    hab: 'Aplicar a definição legal de ativo virtual por exclusão',
    e: 'Nos termos da Lei 14.478/2022, NÃO se considera ativo virtual:',
    alt: [
      ['A moeda eletrônica de que trata a Lei 12.865/2013 e os pontos de programas de fidelidade.', true, 'Correta. Ambos constam expressamente das exclusões do art. 3º.'],
      ['A representação digital de valor usada com propósito de investimento.', false, 'É exatamente o que a lei define como ativo virtual.'],
      ['A representação digital de valor transferível por meios eletrônicos e usada para pagamento.', false, 'Também é a definição positiva do conceito.'],
      ['O ativo virtual referenciado em moeda estrangeira.', false, 'Stablecoin é ativo virtual; o que a norma acrescentou foi o enquadramento cambial das operações com ela.'],
    ],
    exp: 'A lei define ativo virtual dizendo o que ele não é — e o que fica de fora é justamente o que já tinha dono regulatório.',
    tags: ['tokenizacao', 'ativo-virtual', 'conceitual'],
  }),
  q('q-tokn-03', {
    c: 'c-tokenizacao', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar a exigência de autorização das prestadoras',
    e: 'Sobre as prestadoras de serviços de ativos virtuais no Brasil, é correto afirmar que:',
    alt: [
      ['Somente podem funcionar mediante prévia autorização de órgão ou entidade da administração pública federal.', true, 'Correta. É o art. 2º da Lei 14.478/2022, regulamentado pelo Banco Central.'],
      ['Podem funcionar livremente, bastando registro na junta comercial.', false, 'A lei exige autorização prévia específica.'],
      ['Estão dispensadas de qualquer autorização se operarem apenas custódia.', false, 'Custódia e administração de ativos virtuais constam entre os serviços da definição legal.'],
      ['Sujeitam-se exclusivamente à autorização da CVM.', false, 'A competência sobre ativo virtual puro é do Banco Central; a CVM alcança o token que seja valor mobiliário.'],
    ],
    exp: 'A lacuna nunca foi sobre o investidor: era sobre o regime de quem presta serviço com ativo virtual puro — e ela foi fechada.',
    tags: ['tokenizacao', 'psav', 'autorizacao'],
  }),
  q('q-tokn-04', {
    c: 'c-tokenizacao', tipo: 'conceitual', dif: 'dificil',
    hab: 'Reconhecer o enquadramento cambial das stablecoins',
    e: 'A regulamentação editada pelo Banco Central sobre ativos virtuais trouxe, entre outras mudanças, o enquadramento no mercado de câmbio das operações de:',
    alt: [
      ['Compra, venda ou troca de ativos virtuais referenciados em moeda fiduciária.', true, 'Correta. É o que traz as stablecoins para o arcabouço de registro, informação e prevenção à lavagem.'],
      ['Compra e venda de qualquer criptoativo, inclusive os sem referência em moeda.', false, 'O enquadramento cambial alcança os referenciados em moeda fiduciária.'],
      ['Emissão de tokens não fungíveis representativos de obras de arte.', false, 'NFT de obra não é operação de câmbio.'],
      ['Custódia de ativos virtuais por instituição autorizada.', false, 'Custódia é serviço da prestadora; não configura por si operação cambial.'],
    ],
    exp: 'O efeito para o varejo é discreto no dia a dia e grande em risco sistêmico: stablecoin deixou de ser comércio livre e virou operação de câmbio.',
    tags: ['tokenizacao', 'stablecoin', 'cambio'],
  }),
  q('q-tokn-05', {
    c: 'c-tokenizacao', tipo: 'conceitual', dif: 'media',
    hab: 'Situar corretamente o estágio do Drex',
    e: 'Sobre o Drex, é correto afirmar que:',
    alt: [
      ['É um projeto de moeda digital de banco central e de infraestrutura para ativos tokenizados, ainda em desenvolvimento.', true, 'Correta. A plataforma usada no piloto foi descontinuada e o projeto foi reorientado.'],
      ['Já substituiu o PIX como principal meio de pagamento instantâneo do país.', false, 'O Drex não está em circulação e nunca teve essa função.'],
      ['É uma criptomoeda descentralizada emitida por consórcio de bancos privados.', false, 'Moeda digital de banco central é, por definição, emitida pela autoridade monetária.'],
      ['Foi cancelado pelo Banco Central em 2025.', false, 'O projeto foi reorientado, não cancelado.'],
    ],
    exp: 'Enunciado que descreva o Drex como meio de pagamento disponível está errado — e essa é a forma mais provável de a questão aparecer.',
    tags: ['tokenizacao', 'drex', 'atualizacao'],
  }),
  q('q-tokn-06', {
    c: 'c-tokenizacao', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir ETF de criptoativos da compra direta',
    e: 'Ao adquirir cotas de um ETF de índice de criptoativos listado em bolsa, o investidor:',
    alt: [
      ['Adquire cota de fundo regulado pela CVM, com administrador, custodiante e informação periódica — e não o criptoativo em si.', true, 'Correta. O risco de preço permanece; o que muda é a camada de proteção e a forma de acesso.'],
      ['Adquire diretamente os criptoativos, que passam a ficar em sua carteira digital.', false, 'A custódia é do fundo; o investidor detém cotas.'],
      ['Elimina a volatilidade do ativo subjacente, por se tratar de produto regulado.', false, 'Regulação não reduz volatilidade do subjacente.'],
      ['Fica sujeito ao regime das prestadoras de serviços de ativos virtuais.', false, 'O investidor de fundo está no regime de fundos de investimento, não no de PSAV.'],
    ],
    exp: 'Produto regulado com ativo volátil continua volátil. A regulação organiza o acesso, não o preço.',
    tags: ['tokenizacao', 'etf', 'comparacao'],
  }),
  q('q-tokn-07', {
    c: 'c-tokenizacao', tipo: 'aplicacao', dif: 'dificil',
    hab: 'Responder a alegação de ausência de regulação',
    ctx: 'Um cliente traz a oferta de uma plataforma que afirma "não estar sujeita à CVM porque opera integralmente em blockchain".',
    e: 'A avaliação correta dessa alegação é:',
    alt: [
      ['É improcedente: a Lei 14.478/2022 preserva expressamente a competência da CVM, e o enquadramento depende do direito ofertado, não da tecnologia.', true, 'Correta. O parágrafo único do art. 1º é explícito nesse sentido.'],
      ['É procedente, pois a lei de ativos virtuais afastou a competência da CVM sobre operações em blockchain.', false, 'A lei diz exatamente o contrário e não altera nenhuma competência da CVM.'],
      ['É procedente enquanto o Banco Central não concluir a regulamentação do setor.', false, 'A competência da CVM não depende da regulamentação do Bacen sobre ativos virtuais.'],
      ['Depende do país de constituição da plataforma.', false, 'A oferta pública dirigida a investidores no Brasil atrai a competência da CVM.'],
    ],
    exp: 'Sempre a mesma pergunta: o que está sendo ofertado? A resposta define o regime, e o suporte tecnológico não entra nela.',
    tags: ['tokenizacao', 'cvm', 'atendimento'],
  }),

  /* ---- c-defi-estruturas ------------------------------------------------- */
  q('q-dfe-01', {
    c: 'c-defi-estruturas', tipo: 'conceitual', dif: 'facil',
    hab: 'Interpretar corretamente a imutabilidade do registro',
    e: 'A imutabilidade dos registros em blockchain significa que:',
    alt: [
      ['O registro não pode ser alterado depois de gravado, o que não valida a veracidade do que foi registrado.', true, 'Correta. Dado falso registrado torna-se dado falso permanente.'],
      ['As informações registradas são necessariamente verdadeiras.', false, 'Imutabilidade protege contra alteração posterior, não contra falsidade na origem.'],
      ['Operações podem ser revertidas por decisão da maioria dos usuários.', false, 'A reversão é justamente o que a imutabilidade impede.'],
      ['A identificação das partes é dispensada, pois o registro é confiável.', false, 'Confiabilidade do registro não substitui identificação de contraparte.'],
    ],
    exp: 'É a confusão mais comum do tema: tratar "não pode ser alterado" como se fosse "é verdade".',
    tags: ['defi', 'blockchain', 'conceitual'],
  }),
  q('q-dfe-02', {
    c: 'c-defi-estruturas', tipo: 'conceitual', dif: 'media',
    hab: 'Descrever o comportamento de um contrato inteligente',
    e: 'Um contrato inteligente que contenha erro de programação:',
    alt: [
      ['Executa o erro, pois roda o código escrito e não interpreta a intenção das partes.', true, 'Correta. Não há instância que corrija a execução dentro do próprio sistema.'],
      ['É interrompido automaticamente pela rede ao detectar inconsistência.', false, 'A rede valida a execução conforme o código, não conforme a intenção.'],
      ['Pode ser revertido pelo desenvolvedor a qualquer momento.', false, 'Se pudesse, não seria descentralizado — e em regra o desenvolvedor não tem essa chave.'],
      ['Só produz efeitos após confirmação manual das partes.', false, 'A execução automática é precisamente a característica definidora.'],
    ],
    exp: '"O código é a lei" descreve bem o funcionamento e mal as consequências: resultado tecnicamente correto pode ser economicamente um roubo.',
    tags: ['defi', 'smart-contract', 'conceitual'],
  }),
  q('q-dfe-03', {
    c: 'c-defi-estruturas', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Avaliar as consequências da ausência de custodiante',
    ctx: 'Um usuário transfere criptoativos para um endereço incorreto numa corretora descentralizada.',
    e: 'A consequência dessa operação é:',
    alt: [
      ['A operação é definitiva: não há custodiante, canal de reversão nem procedimento de recuperação.', true, 'Correta. É o custo direto de remover o intermediário.'],
      ['A corretora descentralizada devolve os recursos após verificação interna.', false, 'Não há estrutura interna com poder de reverter operações.'],
      ['O Banco Central pode determinar o estorno, por se tratar de meio de pagamento.', false, 'Não há autoridade com poder de reversão dentro da arquitetura.'],
      ['A operação é cancelada automaticamente se o endereço não existir.', false, 'Endereços mal formados podem ser rejeitados, mas endereços válidos e errados não são.'],
    ],
    exp: 'Cada intermediário removido levava junto um serviço. Aqui, o serviço perdido é o socorro.',
    tags: ['defi', 'dex', 'risco'],
  }),
  q('q-dfe-04', {
    c: 'c-defi-estruturas', tipo: 'conceitual', dif: 'dificil',
    hab: 'Identificar o problema de responsabilidade nas DAOs',
    e: 'A principal dificuldade jurídica de uma organização autônoma descentralizada (DAO) é que:',
    alt: [
      ['Em regra não possui personalidade jurídica constituída, o que torna incerta a identificação de quem responde por danos.', true, 'Correta. Sem patrimônio societário, a alternativa seria responsabilidade pessoal dos participantes.'],
      ['Suas decisões dependem de aprovação prévia do regulador.', false, 'A governança é interna, por votação de detentores de token.'],
      ['Não pode deter ativos digitais em nome próprio.', false, 'Ativos costumam ficar em contratos controlados pela governança.'],
      ['Suas votações são secretas e não auditáveis.', false, 'As votações costumam ser registradas de forma pública e auditável.'],
    ],
    exp: 'Responsabilidade limitada nunca foi efeito colateral da burocracia societária: era o produto dela.',
    tags: ['defi', 'dao', 'responsabilidade'],
  }),
  q('q-dfe-05', {
    c: 'c-defi-estruturas', tipo: 'conceitual', dif: 'media',
    hab: 'Delimitar o que a titularidade de um NFT transfere',
    e: 'A aquisição de um token não fungível (NFT) representativo de uma obra:',
    alt: [
      ['Transfere a titularidade do token, mas não transfere por si direitos autorais ou de propriedade sobre a obra.', true, 'Correta. A cessão de direitos depende de contrato firmado à parte.'],
      ['Transfere automaticamente os direitos autorais da obra ao adquirente.', false, 'Direito autoral se cede por contrato, não por transferência de token.'],
      ['Confere exclusividade de exibição pública da obra.', false, 'Exclusividade de uso também depende de previsão contratual.'],
      ['Equivale ao registro da obra em órgão de propriedade intelectual.', false, 'O registro em blockchain não substitui registro de propriedade intelectual.'],
    ],
    exp: 'O NFT prova quem tem o token. Quem tem os direitos sobre a obra é outra pergunta, respondida por contrato.',
    tags: ['defi', 'nft', 'conceitual'],
  }),
  q('q-dfe-06', {
    c: 'c-defi-estruturas', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Comunicar corretamente o risco de rendimento em protocolo',
    ctx: 'Um cliente pergunta por que um protocolo de finanças descentralizadas oferece rendimento muito superior ao de um CDB.',
    e: 'A resposta tecnicamente correta é:',
    alt: [
      ['O retorno maior remunera riscos que o produto bancário não tem: falha de código, ausência de garantidor, contraparte não identificada e risco de descontinuidade do protocolo.', true, 'Correta. Nomear o risco é o dever de comunicação, não opinião sobre a tecnologia.'],
      ['O protocolo é mais eficiente porque não mantém agências nem funcionários.', false, 'Redução de custo operacional não explica um diferencial dessa ordem.'],
      ['O rendimento é equivalente a renda fixa, apenas com liquidação em outra moeda.', false, 'Não há emissor identificado, garantia nem obrigação exigível de alguém.'],
      ['O retorno é garantido pelo contrato inteligente, que não pode deixar de executar.', false, 'O contrato executa o que está programado — inclusive a perda.'],
    ],
    exp: 'Taxa maior é preço de risco. Apresentar percentual anunciado como se fosse renda fixa é o erro de comunicação mais grave do tema.',
    tags: ['defi', 'risco', 'atendimento'],
  }),
  q('q-dfe-07', {
    c: 'c-defi-estruturas', tipo: 'comparacao', dif: 'media',
    hab: 'Comparar corretora centralizada e descentralizada',
    e: 'A diferença central entre uma corretora centralizada de criptoativos e uma corretora descentralizada (DEX) é que, na DEX:',
    alt: [
      ['Não há custodiante dos ativos nem contraparte identificada: a negociação ocorre diretamente entre carteiras.', true, 'Correta. Isso remove tanto o risco de custódia quanto o socorro em caso de erro.'],
      ['As operações são registradas fora da blockchain, o que as torna mais rápidas.', false, 'A liquidação em contrato inteligente é justamente o que caracteriza a DEX.'],
      ['O usuário fica sujeito a limites de exposição definidos pelo regulador.', false, 'A ausência de intermediário implica ausência dessas travas.'],
      ['Há garantia de execução ao preço cotado no momento da ordem.', false, 'Variação de preço entre ordem e execução é risco típico do ambiente.'],
    ],
    exp: 'Sem custodiante não há risco de custodiante — e também não há quem responda por nada.',
    tags: ['defi', 'dex', 'comparacao'],
  }),
  q('q-dfe-08', {
    c: 'c-defi-estruturas', tipo: 'verdadeiro_falso', dif: 'facil',
    hab: 'Avaliar afirmação sobre transparência e segurança',
    e: 'Avalie a afirmação: "Como todas as transações de uma blockchain pública são visíveis, o ambiente é seguro contra fraudes."',
    alt: [
      ['Falsa: visibilidade das transações não impede fraude nem identifica quem está por trás dos endereços.', true, 'Correta. Transparência do registro e proteção contra fraude são coisas distintas.'],
      ['Verdadeira: a auditabilidade pública inibe integralmente condutas fraudulentas.', false, 'Fraudes ocorrem e são visíveis depois de consumadas — visibilidade não é prevenção.'],
      ['Verdadeira, desde que a rede tenha número suficiente de validadores.', false, 'Número de validadores protege o consenso, não o usuário contra golpe.'],
      ['Falsa apenas em redes privadas.', false, 'A confusão entre transparência e segurança independe do tipo de rede.'],
    ],
    exp: 'Ver todas as transações não impede que uma delas seja um golpe. São camadas diferentes do problema.',
    tags: ['defi', 'blockchain', 'risco'],
  }),

  /* ---- c-open-investment ------------------------------------------------- */
  q('q-ofin-01', {
    c: 'c-open-investment', tipo: 'conceitual', dif: 'media',
    hab: 'Relacionar open finance, open investment e open insurance',
    e: 'Sobre a relação entre open finance, open investment e open insurance, é correto afirmar que:',
    alt: [
      ['Open investment integra o escopo do open finance; open insurance é sistema separado, sob CNSP e Susep.', true, 'Correta. São dois sistemas com reguladores distintos, e não três.'],
      ['São três sistemas independentes, cada um com norma e regulador próprios.', false, 'Os dados de produtos com natureza de investimento já constam do escopo do open finance.'],
      ['Open insurance é a fase final do open finance, também sob o Banco Central.', false, 'Nasce de resolução do CNSP e de circular da Susep.'],
      ['Open finance substituiu os outros dois a partir de 2022.', false, 'Em 2022 o que houve foi a troca do nome "open banking" por "open finance".'],
    ],
    exp: 'Dois sistemas, três nomes. A ponte entre eles é o princípio da interoperabilidade.',
    tags: ['open-finance', 'open-insurance', 'conceitual'],
  }),
  q('q-ofin-02', {
    c: 'c-open-investment', tipo: 'conceitual', dif: 'facil',
    hab: 'Reconhecer a mudança de denominação do sistema',
    e: 'A expressão "open banking" foi substituída por "open finance" na regulamentação brasileira. Essa alteração:',
    alt: [
      ['Foi de denominação, sem criação de sistema novo: a norma-mãe continua sendo a Resolução Conjunta 1/2020.', true, 'Correta. A troca veio pela Resolução Conjunta 4/2022.'],
      ['Criou um sistema novo, que revogou o anterior.', false, 'Não houve revogação: a mesma resolução passou a usar o novo nome.'],
      ['Transferiu a competência do Banco Central para a CVM.', false, 'A competência permaneceu com o CMN e o Banco Central.'],
      ['Restringiu o escopo aos serviços de pagamento.', false, 'O escopo é amplo e inclui dados de cadastro, transações e diversos produtos.'],
    ],
    exp: 'O objetivo declarado da troca foi de comunicação: eliminar excesso de terminologia que confundia o público.',
    tags: ['open-finance', 'denominacao', 'conceitual'],
  }),
  q('q-ofin-03', {
    c: 'c-open-investment', tipo: 'conceitual', dif: 'dificil',
    hab: 'Aplicar a regra vigente de prazo do consentimento',
    e: 'Quanto ao prazo de validade do consentimento no open finance, a norma vigente exige que ele:',
    alt: [
      ['Seja compatível com as finalidades determinadas do compartilhamento.', true, 'Correta. Redação dada pela Resolução Conjunta 7/2023.'],
      ['Seja de no máximo doze meses, renovável.', false, 'O teto de doze meses constava da redação original e foi retirado. Material antigo ainda o repete.'],
      ['Seja indeterminado, cabendo ao cliente revogar quando quiser.', false, 'A norma exige prazo de validade, ainda que vinculado à finalidade.'],
      ['Seja fixado livremente pela instituição transmissora dos dados.', false, 'Quem obtém o consentimento é a receptora ou a iniciadora, e o prazo se vincula à finalidade.'],
    ],
    exp: 'Amarrar o prazo à finalidade é exigência mais difícil de cumprir que um teto fixo — e mais fiel à minimização que a LGPD já pedia.',
    tags: ['open-finance', 'consentimento', 'atualizacao'],
  }),
  q('q-ofin-04', {
    c: 'c-open-investment', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar as vedações na obtenção do consentimento',
    e: 'No open finance, é VEDADO obter o consentimento do cliente:',
    alt: [
      ['Por contrato de adesão, por formulário com aceite previamente preenchido ou de forma presumida.', true, 'Correta. São as três vedações do art. 10, § 3º, da Resolução Conjunta 1/2020.'],
      ['Por meio eletrônico, que não oferece garantia de autenticidade.', false, 'A norma exige justamente que o consentimento seja manifestado por meio eletrônico.'],
      ['Em mais de uma finalidade simultânea, ainda que discriminadas.', false, 'A norma exige finalidades determinadas; não proíbe que sejam mais de uma.'],
      ['Para dados de transações anteriores à data do consentimento.', false, 'O compartilhamento abrange histórico, observado o alcance previsto na norma.'],
    ],
    exp: 'As três vedações atacam a mesma coisa: consentimento que o cliente dá sem perceber que deu.',
    tags: ['open-finance', 'consentimento', 'vedacoes'],
  }),
  q('q-ofin-05', {
    c: 'c-open-investment', tipo: 'conceitual', dif: 'dificil',
    hab: 'Explicar a vedação de informar a finalidade à transmissora',
    e: 'A norma do open finance veda que se informe à instituição transmissora de dados qual é a finalidade do compartilhamento. Essa vedação existe para:',
    alt: [
      ['Impedir que a instituição de origem use a informação para reter ou dificultar a migração do cliente.', true, 'Correta. Sem ela, o sistema viraria radar de retenção em vez de instrumento de concorrência.'],
      ['Reduzir o volume de dados trafegado entre as instituições.', false, 'A vedação é de conteúdo, não de volume.'],
      ['Cumprir exigência de sigilo bancário sobre a operação.', false, 'A transmissora já detém os dados do cliente; o que se protege aqui é a intenção dele.'],
      ['Permitir que a instituição receptora cobre pelo serviço prestado.', false, 'Não há relação entre a vedação e a remuneração do serviço.'],
    ],
    exp: 'Parece minúcia e é o que impede o sistema de se converter no seu contrário.',
    tags: ['open-finance', 'concorrencia', 'consentimento'],
  }),
  q('q-ofin-06', {
    c: 'c-open-investment', tipo: 'conceitual', dif: 'media',
    hab: 'Delimitar o escopo de dados e serviços',
    e: 'O escopo do open finance abrange, entre outros, o compartilhamento de dados sobre:',
    alt: [
      ['Cadastro, transações, canais de atendimento e produtos, incluindo câmbio, investimentos, seguros e previdência complementar aberta.', true, 'Correta. É o alcance do art. 5º, I, da Resolução Conjunta 1/2020.'],
      ['Exclusivamente contas de depósito e operações de crédito.', false, 'Esse era o alcance imaginado no início, e não é o do texto vigente.'],
      ['Apenas dados públicos das instituições, sem informação de clientes.', false, 'Dados públicos são a primeira camada; cadastro e transações também estão no escopo, com consentimento.'],
      ['Notas e pontuações de crédito atribuídas ao cliente.', false, 'A norma exclui expressamente notas ou pontuações de crédito do compartilhamento de cadastro.'],
    ],
    exp: 'A alternativa errada mais sedutora é a que inclui score: é exatamente o que a norma tirou de fora.',
    tags: ['open-finance', 'escopo', 'conceitual'],
  }),
  q('q-ofin-07', {
    c: 'c-open-investment', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar a sociedade iniciadora do open insurance',
    e: 'No open insurance, a sociedade iniciadora de serviço de seguro caracteriza-se por:',
    alt: [
      ['Agregar dados e iniciar serviços em nome do cliente, com consentimento, sem jamais deter os recursos por ele pagos, salvo a própria remuneração.', true, 'Correta. É o paralelo da instituição iniciadora do open finance.'],
      ['Assumir o risco das apólices que intermedeia.', false, 'Quem assume risco é a seguradora; a iniciadora não é seguradora.'],
      ['Custodiar os prêmios pagos pelos segurados até o repasse.', false, 'A definição normativa afasta expressamente a retenção dos recursos do cliente.'],
      ['Substituir o corretor de seguros na relação com o cliente.', false, 'São figuras distintas, com funções e registros próprios.'],
    ],
    exp: 'A marca das figuras "iniciadoras" nos dois sistemas é a mesma: movimentam informação e comandos, nunca dinheiro do cliente.',
    tags: ['open-insurance', 'susep', 'conceitual'],
  }),
  q('q-ofin-08', {
    c: 'c-open-investment', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Encaminhar reclamação ao sistema e regulador corretos',
    ctx: 'Um cliente reclama de compartilhamento indevido de dados de suas apólices de seguro por um aplicativo agregador.',
    e: 'O sistema e o supervisor envolvidos são:',
    alt: [
      ['Open insurance, sob a supervisão da Susep.', true, 'Correta. Dados de apólice trafegam no sistema de seguros aberto, do CNSP e da Susep.'],
      ['Open finance, sob a supervisão do Banco Central.', false, 'O open finance alcança dados de seguros mantidos por instituições autorizadas pelo Bacen, mas o sistema das apólices é o open insurance.'],
      ['Open investment, sob a supervisão da CVM.', false, 'Não existe sistema próprio com esse nome nem competência da CVM sobre o tema.'],
      ['Nenhum dos dois: o caso é exclusivamente de LGPD, sob a ANPD.', false, 'A LGPD incide de forma transversal, mas há sistema e supervisor setoriais próprios.'],
    ],
    exp: 'Mesmo cliente, dois sistemas. Saber em qual dos dois o dado trafegou é saber a quem reclamar.',
    tags: ['open-insurance', 'atendimento', 'susep'],
  }),
  q('q-ofin-09', {
    c: 'c-open-investment', tipo: 'conceitual', dif: 'facil',
    hab: 'Reconhecer os objetivos declarados do open finance',
    e: 'Entre os objetivos declarados do open finance na norma que o institui NÃO se inclui:',
    alt: [
      ['Reduzir a taxa de juros por determinação do Conselho Monetário Nacional.', true, 'Correta. Não é objetivo da norma; a redução de spread seria, no máximo, efeito da concorrência.'],
      ['Incentivar a inovação.', false, 'Consta expressamente do art. 3º.'],
      ['Promover a concorrência.', false, 'Consta expressamente do art. 3º.'],
      ['Promover a cidadania financeira.', false, 'Consta expressamente do art. 3º.'],
    ],
    exp: 'Os objetivos são de ambiente — inovação, concorrência, eficiência e cidadania financeira —, não metas de preço.',
    tags: ['open-finance', 'objetivos', 'conceitual'],
  }),
  q('q-ofin-10', {
    c: 'c-open-investment', tipo: 'aplicacao', dif: 'dificil',
    hab: 'Explicar o consentimento ao cliente',
    ctx: 'Um cliente pergunta o que exatamente está autorizando ao aceitar o compartilhamento de dados em um aplicativo.',
    e: 'A explicação correta e completa inclui:',
    alt: [
      ['Quais dados serão compartilhados, com qual instituição, para qual finalidade e por qual prazo — e que ele pode revogar a autorização.', true, 'Correta. São os elementos que a própria norma exige do consentimento.'],
      ['Apenas que os dados serão usados para melhorar a oferta de produtos.', false, 'Finalidade genérica não atende à exigência de finalidades determinadas.'],
      ['Que a autorização é irrevogável durante o prazo contratado.', false, 'A revogação pelo cliente é elemento essencial do desenho do sistema.'],
      ['Que o compartilhamento inclui automaticamente todos os seus produtos em todas as instituições.', false, 'O consentimento discrimina dados e instituição; não é abrangente por padrão.'],
    ],
    exp: 'Se o cliente não consegue repetir o que autorizou, o consentimento pode até existir no sistema — mas não cumpriu sua função.',
    tags: ['open-finance', 'consentimento', 'atendimento'],
  }),
]
