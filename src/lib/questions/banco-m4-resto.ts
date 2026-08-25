import { q } from './builder'

/**
 * Questões autorais — microtemas 4.2, 4.3, 4.4 e 4.7.
 *
 * Os quatro fecham o Programa Detalhado. É o macrotema mais volátil do
 * programa, e o banco foi escrito para não envelhecer com ele: nenhuma
 * questão afirma exigência normativa específica sobre taxonomia ESG, ativos
 * virtuais ou arranjos de pagamento — todas cobram o MECANISMO e a lógica da
 * distinção, que é o que a prova consegue cobrar de um tema em construção.
 *
 * O distrator recorrente aqui é o entusiasmo: tratar rótulo como carteira,
 * imutabilidade como veracidade e ausência de intermediário como ausência de
 * risco. São as três confusões que o discurso do setor produz.
 */
export const BANCO_M4_RESTO = [
  /* ---- c-esg-investimentos (4.2) ---------------------------------------- */
  q('q-esg2-01', {
    c: 'c-esg-investimentos', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar a estratégia best in class',
    e: 'Um fundo que seleciona, dentro de cada setor, as empresas com melhor desempenho ESG relativo adota a estratégia de:',
    alt: [
      ['Best in class.', true, 'Correta. Ela não retira setores: escolhe os melhores dentro de cada um, inclusive nos controversos.'],
      ['Exclusão.', false, 'A exclusão retira setores inteiros da carteira, e não seleciona dentro deles.'],
      ['Investimento de impacto.', false, 'Impacto exige resultado social ou ambiental mensurável além do retorno.'],
      ['Screening negativo.', false, 'É outro nome para exclusão, que faz o oposto do descrito.'],
    ],
    exp: 'Um fundo best in class pode ter a melhor petroleira do setor; um de exclusão não tem petroleira nenhuma.',
    tags: ['esg', 'estrategias', 'conceitual'],
  }),
  q('q-esg2-02', {
    c: 'c-esg-investimentos', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir exclusão de integração ESG',
    e: 'A diferença entre a estratégia de exclusão e a de integração ESG é que a integração:',
    alt: [
      ['Incorpora fatores ESG à análise financeira como qualquer outro risco, em vez de retirar setores da carteira.', true, 'Correta. Ela precifica; não exclui.'],
      ['Retira da carteira os setores com pior desempenho ambiental.', false, 'Isso descreve a exclusão.'],
      ['Exige resultado social mensurável além do retorno financeiro.', false, 'Isso descreve o investimento de impacto.'],
      ['Só investe em empresas certificadas por selo internacional.', false, 'Certificação não define nenhuma das estratégias descritas.'],
    ],
    exp: 'Integração é a estratégia mais defensável em termos fiduciários: trata ESG como risco, não como preferência de valor.',
    tags: ['esg', 'integracao', 'comparacao'],
  }),
  q('q-esg2-03', {
    c: 'c-esg-investimentos', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Traduzir preferência do cliente em critério verificável',
    ctx: 'Um cliente pede que a carteira "não financie desmatamento".',
    e: 'A conduta tecnicamente adequada é:',
    alt: [
      ['Traduzir o pedido em critério verificável — quais setores saem, com base em que dado e verificado por quem — antes de selecionar produtos.', true, 'Correta. Sem tradução, o pedido vira rótulo e o cliente descobre depois o que ficou na carteira.'],
      ['Selecionar qualquer fundo que se apresente como sustentável.', false, 'Estratégias diferentes produzem carteiras opostas sob o mesmo rótulo.'],
      ['Explicar que não é possível atender a preferências não financeiras.', false, 'É possível e legítimo, desde que declarado e implementado por critério.'],
      ['Aplicar screening negativo de tabaco e armas, por serem os setores usuais.', false, 'Excluir setores que o cliente não mencionou não atende ao pedido dele.'],
    ],
    exp: 'O rótulo ESG não descreve uma carteira: descreve uma intenção. Quem descreve a carteira é a metodologia.',
    tags: ['esg', 'greenwashing', 'atendimento'],
  }),
  q('q-esg2-04', {
    c: 'c-esg-investimentos', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar o greenwashing',
    e: 'Caracteriza greenwashing em produtos de investimento:',
    alt: [
      ['Usar rótulo sustentável sem metodologia, processo ou métrica que o sustente.', true, 'Correta. É problema de conduta e de informação, não de estratégia.'],
      ['Adotar estratégia de exclusão em vez de investimento de impacto.', false, 'Exclusão é estratégia legítima e declarável.'],
      ['Investir em setor controverso sob a estratégia best in class.', false, 'Best in class admite setor controverso por construção, e isso é declarado.'],
      ['Cobrar taxa de administração acima da média do mercado.', false, 'Nível de taxa é questão de custo, não de rotulagem enganosa.'],
    ],
    exp: 'O que a regulação ataca não é a estratégia escolhida — é a distância entre o que se declara e o que se faz.',
    tags: ['esg', 'greenwashing', 'conduta'],
  }),

  /* ---- c-fundos-is (4.3) -------------------------------------------------- */
  q('q-fis-01', {
    c: 'c-fundos-is', tipo: 'conceitual', dif: 'media',
    hab: 'Aplicar a regra de nomenclatura de fundos sustentáveis',
    e: 'Um fundo que considera fatores ESG na análise, mas tem o retorno financeiro como objetivo, pode usar termo indicativo de sustentabilidade no nome?',
    alt: [
      ['Não, pois é fundo que apenas integra ESG e não fundo IS.', true, 'Correta. O nome é reservado ao fundo cujo OBJETIVO declarado é a sustentabilidade.'],
      ['Sim, desde que mencione os critérios utilizados na lâmina.', false, 'Mencionar critério na análise não autoriza o rótulo.'],
      ['Sim, se a gestora for signatária de compromissos internacionais.', false, 'Compromisso da gestora não altera a classificação do fundo.'],
      ['Sim, desde que ao menos metade da carteira seja de empresas sustentáveis.', false, 'Não é a composição que define a categoria, e sim o objetivo declarado.'],
    ],
    exp: 'A pergunta que separa as categorias: a sustentabilidade é o QUE o fundo persegue, ou um insumo para perseguir retorno?',
    tags: ['fundos-is', 'rotulagem', 'conceitual'],
  }),
  q('q-fis-02', {
    c: 'c-fundos-is', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir fundo IS de fundo que integra ESG',
    e: 'A diferença essencial entre um fundo IS e um fundo que integra questões ESG está em:',
    alt: [
      ['O papel da sustentabilidade: objetivo do fundo no primeiro, insumo da análise no segundo.', true, 'Correta. É essa diferença que autoriza ou veda o uso do nome.'],
      ['O percentual mínimo da carteira alocado em empresas sustentáveis.', false, 'Não há percentual que converta uma categoria na outra.'],
      ['A classe de ativos em que cada um pode investir.', false, 'A classificação independe da classe de ativos.'],
      ['A obrigatoriedade de gestão passiva no fundo IS.', false, 'Não há exigência de estratégia passiva para fundos IS.'],
    ],
    exp: 'Objetivo × insumo. É a única pergunta que resolve a classificação.',
    tags: ['fundos-is', 'classificacao', 'comparacao'],
  }),
  q('q-fis-03', {
    c: 'c-fundos-is', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Avaliar oferta de produto diante de pedido por fundo sustentável',
    ctx: 'Um cliente pede um fundo sustentável. O material do produto sugerido menciona que a gestora considera critérios ESG na análise das empresas.',
    e: 'A leitura tecnicamente correta é:',
    alt: [
      ['É preciso verificar em qual categoria o fundo se enquadra; se apenas integra ESG, oferecê-lo como resposta ao pedido induz o cliente a erro.', true, 'Correta. Mesmo com lâmina tecnicamente correta, a oferta pode ser enganosa.'],
      ['A menção a critérios ESG basta para atender ao pedido do cliente.', false, 'Integrar fatores na análise não é o mesmo que ter a sustentabilidade como objetivo.'],
      ['O pedido do cliente é subjetivo demais para ser atendido tecnicamente.', false, 'Ele é traduzível em critério e categoria verificáveis.'],
      ['Basta obter do cliente declaração de ciência sobre a metodologia.', false, 'Declaração não corrige uma oferta que não corresponde ao pedido.'],
    ],
    exp: 'A lâmina pode estar correta e a oferta ainda assim induzir a erro. O dever é sobre o que o cliente entende, não sobre o que o papel diz.',
    tags: ['fundos-is', 'greenwashing', 'atendimento'],
  }),

  /* ---- c-blockchain (4.4) -------------------------------------------------- */
  q('q-bc-01', {
    c: 'c-blockchain', tipo: 'conceitual', dif: 'media',
    hab: 'Delimitar o que a imutabilidade garante',
    e: 'A imutabilidade do registro em blockchain garante que:',
    alt: [
      ['O registro não pode ser adulterado depois de feito.', true, 'Correta. A tecnologia protege a integridade contra alteração posterior.'],
      ['A informação registrada é verdadeira.', false, 'Um registro falso na origem fica imutável — e falso.'],
      ['O ativo registrado tem lastro comprovado.', false, 'Lastro depende de estrutura jurídica e custódia, não de criptografia.'],
      ['O emissor do ativo é idôneo.', false, 'A rede não avalia a idoneidade de quem registra.'],
    ],
    exp: 'Blockchain resolve o problema de confiar no REGISTRO; não resolve o de confiar em quem registrou.',
    tags: ['blockchain', 'integridade', 'conceitual'],
  }),
  q('q-bc-02', {
    c: 'c-blockchain', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar a validação por consenso',
    e: 'Em uma rede blockchain, a validação das transações é feita:',
    alt: [
      ['Por consenso entre os participantes, segundo regras predefinidas, sem autoridade central.', true, 'Correta. É a ausência de autoridade central que caracteriza o arranjo.'],
      ['Por uma autoridade certificadora designada pelo regulador.', false, 'Não há autoridade central de validação numa rede distribuída.'],
      ['Pelo emissor do ativo, que confirma cada operação.', false, 'O emissor não valida as transações da rede.'],
      ['Por auditoria posterior das operações registradas.', false, 'A validação ocorre no momento do registro, não em auditoria posterior.'],
    ],
    exp: 'Consenso sem autoridade central é a propriedade que o arranjo entrega — e a que custa energia e capacidade de processamento.',
    tags: ['blockchain', 'consenso', 'conceitual'],
  }),
  q('q-bc-03', {
    c: 'c-blockchain', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Corrigir a associação entre blockchain e segurança do investimento',
    ctx: 'Um cliente afirma que quer investir em criptoativos "porque blockchain é seguro".',
    e: 'O esclarecimento tecnicamente correto é:',
    alt: [
      ['A tecnologia protege o registro contra adulteração, mas não protege contra volatilidade, fraude na origem ou perda das chaves de acesso.', true, 'Correta. São camadas de risco distintas e a tecnologia só cobre uma delas.'],
      ['A segurança da tecnologia se estende ao valor do ativo registrado.', false, 'Integridade do registro não tem relação com o preço do ativo.'],
      ['O risco só existe em redes públicas; em permissionadas não há risco.', false, 'O tipo de rede altera quem valida, não elimina risco de mercado nem de fraude.'],
      ['A imutabilidade garante recuperação em caso de perda de acesso.', false, 'Perda de chave privada torna o ativo, em regra, irrecuperável.'],
    ],
    exp: 'A confusão entre segurança do registro e segurança do investimento é a mais comum do tema.',
    tags: ['blockchain', 'risco', 'atendimento'],
  }),
  q('q-bc-04', {
    c: 'c-blockchain', tipo: 'conceitual', dif: 'media',
    hab: 'Distinguir categorias de ativo virtual',
    e: 'Uma stablecoin distingue-se de uma criptomoeda nativa por:',
    alt: [
      ['Buscar manter paridade com um ativo de referência, tipicamente uma moeda fiduciária.', true, 'Correta. A criptomoeda nativa não persegue paridade com nada.'],
      ['Ser emitida por um banco central.', false, 'Moeda digital de banco central é outra categoria, distinta de stablecoin privada.'],
      ['Ser registrada em rede permissionada obrigatoriamente.', false, 'O tipo de rede não define a categoria do ativo.'],
      ['Não utilizar tecnologia de registro distribuído.', false, 'Stablecoins operam sobre redes distribuídas como os demais ativos virtuais.'],
    ],
    exp: 'A busca de paridade é o que define a categoria — e o mecanismo que a sustenta é o que define seu risco.',
    tags: ['blockchain', 'stablecoin', 'conceitual'],
  }),

  /* ---- c-defi (4.4) --------------------------------------------------------- */
  q('q-def-01', {
    c: 'c-defi', tipo: 'conceitual', dif: 'media',
    hab: 'Avaliar o efeito da ausência de intermediário',
    e: 'Sobre a ausência de intermediário em finanças descentralizadas, é correto afirmar que ela:',
    alt: [
      ['Substitui o risco de contraparte por risco de código, de governança e de autocustódia.', true, 'Correta. O risco muda de lugar, e some a quem recorrer.'],
      ['Elimina os riscos da operação financeira.', false, 'Sem intermediário não é sem risco.'],
      ['Transfere a responsabilidade ao desenvolvedor do contrato inteligente.', false, 'Em arranjos genuinamente descentralizados não há a quem imputar essa responsabilidade.'],
      ['Garante reversibilidade das operações por consenso da rede.', false, 'A regra é a irreversibilidade; reverter exigiria coordenação excepcional da rede.'],
    ],
    exp: 'Tirar o intermediário elimina o risco DAQUELE intermediário. Não elimina risco.',
    tags: ['defi', 'risco', 'conceitual'],
  }),
  q('q-def-02', {
    c: 'c-defi', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar o contrato inteligente',
    e: 'Um contrato inteligente caracteriza-se por:',
    alt: [
      ['Executar automaticamente o que está escrito no código quando as condições previstas ocorrem, sem interpretar intenção.', true, 'Correta. Não há cláusula de boa-fé nem juiz para dizer que a intenção era outra.'],
      ['Exigir homologação judicial para produzir efeitos.', false, 'A execução é automática e independe de homologação.'],
      ['Permitir revisão por equidade quando o resultado for desproporcional.', false, 'Revisão por equidade pressupõe um foro que o arranjo não tem.'],
      ['Ser interpretado conforme a vontade declarada pelas partes.', false, 'O programa cumpre o código; não interpreta vontade.'],
    ],
    exp: 'Se o contrato tem uma falha que permite drenar fundos, a execução dessa falha é tecnicamente válida.',
    tags: ['defi', 'contrato-inteligente', 'conceitual'],
  }),
  q('q-def-03', {
    c: 'c-defi', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Orientar sobre envio equivocado em operação DEFI',
    ctx: 'Um cliente pergunta o que fazer se enviar recursos por engano em uma operação de finanças descentralizadas.',
    e: 'A resposta tecnicamente correta é:',
    alt: [
      ['Em regra não há estorno nem autoridade que possa reverter: a operação é definitiva e não há contraparte a quem recorrer.', true, 'Correta. É a irrevogabilidade sem sequer o mecanismo excepcional que o PIX prevê.'],
      ['Basta acionar o suporte da rede para solicitar o estorno.', false, 'Não há central de atendimento em arranjo descentralizado.'],
      ['O Banco Central pode determinar a devolução dos valores.', false, 'Não há intermediário sujeito a essa determinação.'],
      ['A operação pode ser revertida por votação da comunidade em até 24 horas.', false, 'Reversão por coordenação da rede é evento excepcional, não mecanismo disponível ao usuário.'],
    ],
    exp: 'É o princípio da irrevogabilidade levado ao extremo — sem o MED, que existe no arranjo brasileiro de pagamentos.',
    tags: ['defi', 'irrevogabilidade', 'atendimento'],
  }),
  q('q-def-04', {
    c: 'c-defi', tipo: 'conceitual', dif: 'dificil',
    hab: 'Reconhecer o risco de concentração em DAOs',
    e: 'A governança de uma DAO por votação proporcional à posse de tokens apresenta como risco específico:',
    alt: [
      ['A concentração de poder em quem detém mais tokens, reproduzindo a concentração que o arranjo prometia dissolver.', true, 'Correta. E a participação real em votações costuma ser baixa, o que amplia o efeito.'],
      ['A impossibilidade técnica de registrar votos na rede.', false, 'O registro de votos em cadeia é justamente o que a estrutura oferece.'],
      ['A exigência de aprovação prévia do regulador para cada deliberação.', false, 'Não há esse requisito no arranjo descrito.'],
      ['A obrigatoriedade de decisão unânime entre os participantes.', false, 'A deliberação é por maioria dos tokens, não por unanimidade.'],
    ],
    exp: 'Descentralização de infraestrutura não implica descentralização de poder decisório.',
    tags: ['defi', 'dao', 'governanca'],
  }),

  /* ---- c-fintechs-pagamentos (4.7) -------------------------------------------- */
  q('q-fp-01', {
    c: 'c-fintechs-pagamentos', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar o papel do credenciador',
    e: 'Em um arranjo de pagamento com cartão, o credenciador relaciona-se diretamente com:',
    alt: [
      ['O estabelecimento comercial, habilitando-o a aceitar o meio de pagamento e liquidando com ele.', true, 'Correta. Quem atende o portador é o emissor.'],
      ['O portador do cartão.', false, 'A relação com o portador é do emissor.'],
      ['O órgão regulador do sistema de pagamentos.', false, 'A relação regulatória existe, mas não define o papel no arranjo.'],
      ['Exclusivamente a instituição emissora.', false, 'O credenciador se relaciona com o estabelecimento; a bandeira liga os dois lados.'],
    ],
    exp: 'Emissor atende o portador; credenciador atende o lojista; a bandeira define as regras que ligam os dois.',
    tags: ['pagamentos', 'credenciador', 'conceitual'],
  }),
  q('q-fp-02', {
    c: 'c-fintechs-pagamentos', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir instituição de pagamento de instituição financeira',
    e: 'A distinção entre instituição de pagamento e instituição financeira está em que a instituição de pagamento:',
    alt: [
      ['Não realiza intermediação financeira: ela gere conta de pagamento e movimenta recursos, que ficam segregados de seu patrimônio.', true, 'Correta. A proteção do saldo vem da segregação, não de fundo garantidor.'],
      ['Capta depósitos do público e empresta com recursos próprios.', false, 'Isso descreve a instituição financeira.'],
      ['Está dispensada de qualquer autorização do Banco Central.', false, 'Instituições de pagamento se sujeitam a autorização e supervisão.'],
      ['Só pode operar por meio de aplicativo, sem rede física.', false, 'O canal de atendimento não define a categoria.'],
    ],
    exp: 'A exigência regulatória acompanha o risco que a atividade cria. Quem não intermedeia não gera o mesmo risco sistêmico.',
    tags: ['fintechs', 'instituicao-pagamento', 'comparacao'],
  }),
  q('q-fp-03', {
    c: 'c-fintechs-pagamentos', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Esclarecer a proteção do saldo em fintech',
    ctx: 'Um cliente mantém saldo relevante em uma fintech e supõe que a cobertura é idêntica à de um banco.',
    e: 'O esclarecimento adequado é:',
    alt: [
      ['Verificar a natureza da instituição: se for instituição de pagamento, a proteção do saldo decorre da segregação patrimonial exigida em norma, e não do FGC.', true, 'Correta. A conversa é sobre qual mecanismo protege o dinheiro, não sobre a fintech ser boa ou ruim.'],
      ['Confirmar que todo saldo em aplicativo financeiro tem cobertura do FGC.', false, 'A cobertura do FGC alcança depósitos e certos títulos, não o saldo em conta de pagamento.'],
      ['Recomendar o encerramento imediato da conta na fintech.', false, 'Medida desproporcional; o ponto é conhecer a proteção aplicável.'],
      ['Informar que fintechs não são supervisionadas pelo Banco Central.', false, 'Instituições de pagamento autorizadas são supervisionadas.'],
    ],
    exp: 'A natureza da instituição define o mecanismo de proteção. Supor equivalência é o erro que custa caro num evento de insolvência.',
    tags: ['fintechs', 'fgc', 'atendimento'],
  }),
  q('q-fp-04', {
    c: 'c-fintechs-pagamentos', tipo: 'conceitual', dif: 'dificil',
    hab: 'Distinguir SCD de SEP',
    e: 'A diferença entre a Sociedade de Crédito Direto (SCD) e a Sociedade de Empréstimo entre Pessoas (SEP) é que a SCD:',
    alt: [
      ['Empresta com capital próprio, assumindo o risco da operação, enquanto a SEP apenas conecta credor e devedor.', true, 'Correta. Por isso a exigência de capital é diferente entre elas.'],
      ['Apenas conecta credor e devedor, sem assumir risco.', false, 'Isso descreve a SEP.'],
      ['Capta depósitos do público para financiar suas operações.', false, 'Nenhuma das duas capta depósito do público.'],
      ['Está autorizada a emitir meios de pagamento.', false, 'Emissão de meio de pagamento é outra atividade, de arranjo de pagamento.'],
    ],
    exp: 'Quem assume o risco tem exigência de capital; quem apenas conecta, não — mas também não pode garantir a operação.',
    tags: ['fintechs', 'scd', 'sep'],
  }),
]
