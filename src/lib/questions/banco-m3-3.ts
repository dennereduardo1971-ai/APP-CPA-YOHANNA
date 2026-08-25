import { q } from './builder'

/**
 * Questões autorais — microtema 3.3 (classificação das pessoas investidoras).
 *
 * Dois erros organizam o lote, e os dois vêm de generalizar corretamente até
 * o ponto em que a norma faz uma exceção:
 *
 * 1. **"Qualificado é dispensado de suitability."** Verdadeiro para o
 *    institucional, falso para a pessoa natural que se enquadrou por
 *    patrimônio declarado ou por certificação (Res. CVM 30/2021, art. 10, I).
 * 2. **"Tenho vários produtos, logo estou diversificado."** Quantidade não é
 *    diversificação; correlação é. Vários produtos do mesmo emissor são uma
 *    carteira concentrada com aparência de espalhada.
 *
 * Nenhuma questão pede a lista completa dos incisos de cor: os enunciados
 * cobram o critério e a exceção, que é o que sobrevive a uma revisão da norma.
 */
export const BANCO_M3_3 = [
  /* ---- c-investidor-categorias ------------------------------------------ */
  q('q-icat-01', {
    c: 'c-investidor-categorias', tipo: 'conceitual', dif: 'facil',
    hab: 'Reproduzir os limites patrimoniais das categorias',
    e: 'Nos termos da Res. CVM 30/2021, os valores de investimentos financeiros que permitem a uma pessoa natural enquadrar-se como investidora profissional e como qualificada são, respectivamente:',
    alt: [
      ['Superior a R$ 10 milhões e superior a R$ 1 milhão, em ambos os casos mediante termo próprio.', true, 'Correta. São os incisos IV do art. 11 e II do art. 12.'],
      ['Superior a R$ 1 milhão e superior a R$ 300 mil.', false, 'R$ 1 milhão é o patamar do qualificado; não há faixa de R$ 300 mil na resolução vigente.'],
      ['Superior a R$ 20 milhões e superior a R$ 2 milhões.', false, 'Não são esses os valores da Res. CVM 30/2021.'],
      ['Superior a R$ 10 milhões e superior a R$ 1 milhão, bastando a verificação de saldo pela instituição.', false, 'O valor está certo, mas falta o essencial: a norma exige atestado POR ESCRITO em termo próprio.'],
    ],
    exp: 'Os dois patamares vêm sempre acompanhados da mesma exigência formal — o termo assinado.',
    tags: ['investidor', 'categorias', 'cvm30'],
  }),
  q('q-icat-02', {
    c: 'c-investidor-categorias', tipo: 'conceitual', dif: 'dificil',
    hab: 'Aplicar a exceção à dispensa de suitability',
    e: 'Uma pessoa natural enquadrada como investidora qualificada por declarar investimentos financeiros superiores a R$ 1 milhão:',
    alt: [
      ['Continua sujeita ao dever de verificação da adequação, pois o art. 10, I, exclui expressamente da dispensa as pessoas naturais do art. 12, II.', true, 'Correta. A dispensa foi desenhada para o investidor institucional.'],
      ['Fica dispensada da verificação de adequação, como todo investidor qualificado.', false, 'É a leitura incompleta do art. 10, I — a norma abre exceção justamente para essa hipótese.'],
      ['Fica dispensada apenas quando adquirir produtos restritos a qualificados.', false, 'A exceção não varia conforme o produto.'],
      ['Fica dispensada desde que renuncie por escrito ao processo de adequação.', false, 'A norma não prevê renúncia do investidor ao dever da instituição.'],
    ],
    exp: 'Dinheiro não é conhecimento, e a resolução assume isso: quem entrou na categoria só pelo patrimônio mantém a proteção.',
    tags: ['investidor', 'suitability', 'cvm30'],
  }),
  q('q-icat-03', {
    c: 'c-investidor-categorias', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer a base de cálculo do critério patrimonial',
    e: 'Para fins de enquadramento como investidor qualificado, o patamar de R$ 1 milhão considera:',
    alt: [
      ['Os investimentos financeiros do investidor.', true, 'Correta. A norma fala em investimentos financeiros, e não em patrimônio total.'],
      ['O patrimônio total, incluindo imóveis e participações societárias.', false, 'Imóvel e empresa não entram no cálculo.'],
      ['A renda bruta anual do investidor.', false, 'O critério é de estoque aplicado, não de renda.'],
      ['O somatório dos investimentos do investidor e de seus dependentes.', false, 'O enquadramento é individual, pelo próprio investidor.'],
    ],
    exp: 'É a diferença entre um cliente com R$ 1,2 milhão aplicado e outro com um apartamento de R$ 900 mil e R$ 300 mil no banco.',
    tags: ['investidor', 'categorias', 'patrimonio'],
  }),
  q('q-icat-04', {
    c: 'c-investidor-categorias', tipo: 'conceitual', dif: 'media',
    hab: 'Relacionar as duas categorias entre si',
    e: 'A relação entre investidor profissional e investidor qualificado é a de que:',
    alt: [
      ['Todo investidor profissional é também qualificado, mas nem todo qualificado é profissional.', true, 'Correta. O art. 12, I, inclui expressamente os profissionais entre os qualificados.'],
      ['São categorias mutuamente excludentes.', false, 'Não são: a norma faz a inclusão de forma expressa.'],
      ['Todo investidor qualificado é também profissional.', false, 'É o contrário: a inclusão vai do profissional para o qualificado.'],
      ['A distinção só existe para pessoas jurídicas.', false, 'A distinção alcança pessoas naturais e jurídicas.'],
    ],
    exp: 'Uma escada: profissional está dentro de qualificado, que está acima do varejo.',
    tags: ['investidor', 'categorias', 'conceitual'],
  }),
  q('q-icat-05', {
    c: 'c-investidor-categorias', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Identificar a via de enquadramento por certificação',
    ctx: 'Uma profissional recém-aprovada em exame de certificação aceito pela CVM para o registro de assessor de investimento tem R$ 60 mil aplicados.',
    e: 'Quanto ao seu enquadramento em relação aos recursos próprios, ela é:',
    alt: [
      ['Investidora qualificada, pois a aprovação em exame de qualificação técnica aceito pela CVM enquadra a pessoa natural quanto aos próprios recursos.', true, 'Correta. É a única porta de entrada que não depende de patrimônio.'],
      ['Investidora de varejo, pois não atinge o patamar de R$ 1 milhão.', false, 'O patrimônio é uma das vias, não a única.'],
      ['Investidora profissional, pois exerce atividade regulada pela CVM.', false, 'Assessores autorizados são profissionais quanto a recursos próprios apenas quando registrados; a aprovação no exame enquadra como QUALIFICADA.'],
      ['Investidora qualificada apenas depois de atingir R$ 300 mil aplicados.', false, 'Não há patamar intermediário na resolução.'],
    ],
    exp: 'A norma reconhece conhecimento técnico como substituto do patrimônio — mas mantém o dever de suitability também nesse caso.',
    tags: ['investidor', 'certificacao', 'cvm30'],
  }),
  q('q-icat-06', {
    c: 'c-investidor-categorias', tipo: 'conceitual', dif: 'media',
    hab: 'Listar as hipóteses de dispensa do dever de adequação',
    e: 'Entre as hipóteses de dispensa do dever de verificação da adequação previstas na Res. CVM 30/2021, NÃO se inclui:',
    alt: [
      ['O cliente que declara, por escrito, aceitar os riscos e dispensar a análise de perfil.', true, 'Correta. A norma não admite renúncia do cliente ao dever da instituição.'],
      ['O cliente que for pessoa jurídica de direito público.', false, 'Está no art. 10, II.'],
      ['O cliente cuja carteira seja administrada discricionariamente por administrador autorizado pela CVM.', false, 'Está no art. 10, III.'],
      ['O cliente que já teve o perfil definido por consultor autorizado e esteja implementando a recomendação dele.', false, 'Está no art. 10, IV — com a exigência de exibir a avaliação feita pelo consultor.'],
    ],
    exp: 'O dever é da instituição e existe para proteger o cliente. Cliente não abre mão de proteção alheia por declaração.',
    tags: ['investidor', 'suitability', 'dispensa'],
  }),
  q('q-icat-07', {
    c: 'c-investidor-categorias', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Avaliar defesa institucional em reclamação de cliente',
    ctx: 'Uma cliente com R$ 3 milhões aplicados assinou termo de investidora qualificada, adquiriu cotas de fundo restrito e depois reclamou de perdas alegando que seu perfil nunca foi verificado.',
    e: 'A alegação da instituição de que "investidor qualificado é dispensado de suitability" é:',
    alt: [
      ['Improcedente, porque a dispensa do art. 10, I, não alcança a pessoa natural enquadrada por declaração de patrimônio.', true, 'Correta. Ela permanecia com direito ao processo de adequação.'],
      ['Procedente, pois o termo assinado transfere à cliente a responsabilidade pela escolha.', false, 'O termo atesta a condição; não transfere o dever de adequação da instituição.'],
      ['Procedente, desde que o fundo fosse efetivamente restrito a qualificados.', false, 'A restrição do produto e o dever de adequação são exigências independentes.'],
      ['Improcedente apenas se a cliente comprovar que desconhecia o risco.', false, 'O descumprimento do dever independe de prova de desconhecimento.'],
    ],
    exp: 'A dispensa existe para o investidor com estrutura profissional dedicada. Pessoa física rica não é isso.',
    tags: ['investidor', 'suitability', 'atendimento'],
  }),
  q('q-icat-08', {
    c: 'c-investidor-categorias', tipo: 'conceitual', dif: 'media',
    hab: 'Aplicar os prazos de atualização e de guarda',
    e: 'Quanto aos prazos previstos na Res. CVM 30/2021, é correto afirmar que:',
    alt: [
      ['O perfil do cliente deve ser atualizado em intervalo máximo de cinco anos e as categorias de produto reclassificadas em no máximo vinte e quatro meses.', true, 'Correta. Arts. 9º, I e II — perfil e prateleira envelhecem em ritmos diferentes.'],
      ['Tanto o perfil quanto as categorias de produto devem ser revistos anualmente.', false, 'A norma não fixa periodicidade anual para nenhum dos dois.'],
      ['O perfil deve ser atualizado a cada vinte e quatro meses e os produtos, a cada cinco anos.', false, 'Os prazos estão invertidos.'],
      ['Não há prazo definido: a atualização ocorre apenas por solicitação do cliente.', false, 'A norma fixa intervalos máximos e a iniciativa é da instituição.'],
    ],
    exp: 'Cinco anos para o perfil, vinte e quatro meses para a prateleira. Inverter os dois é o distrator natural.',
    tags: ['investidor', 'prazos', 'cvm30'],
  }),
  q('q-icat-09', {
    c: 'c-investidor-categorias', tipo: 'conceitual', dif: 'dificil',
    hab: 'Reconhecer atualizações recentes da lista de profissionais',
    e: 'Sobre a lista de investidores profissionais da Res. CVM 30/2021, é correto afirmar que:',
    alt: [
      ['Inclui os fundos patrimoniais e utiliza a denominação "assessor de investimento", em razão de alterações posteriores à edição original.', true, 'Correta. Res. CVM 162/2022 incluiu os fundos patrimoniais; a Res. CVM 179/2023 trocou a denominação.'],
      ['Permanece idêntica à redação original de 2021.', false, 'Foi alterada ao menos pelas Resoluções CVM 162/2022 e 179/2023.'],
      ['Exclui os investidores não residentes, que formam categoria própria.', false, 'Investidores não residentes constam expressamente da lista de profissionais.'],
      ['Não abrange entidades de previdência complementar, que seguem regime próprio.', false, 'Entidades abertas e fechadas de previdência complementar são investidores profissionais.'],
    ],
    exp: '"Agente autônomo de investimento" e "assessor de investimento" designam o mesmo profissional; a troca é de nome, não de figura.',
    tags: ['investidor', 'atualizacao', 'cvm30'],
  }),
  q('q-icat-10', {
    c: 'c-investidor-categorias', tipo: 'aplicacao', dif: 'media',
    hab: 'Classificar investidor a partir do caso descrito',
    ctx: 'Uma sociedade seguradora e uma pessoa natural com R$ 4 milhões em aplicações, com termo assinado, são clientes da mesma distribuidora.',
    e: 'Quanto ao enquadramento e ao dever de adequação:',
    alt: [
      ['A seguradora é profissional e dispensada da verificação; a pessoa natural é qualificada e NÃO dispensada.', true, 'Correta. A dispensa alcança o institucional e não a pessoa natural do art. 12, II.'],
      ['Ambas são profissionais e ambas dispensadas.', false, 'R$ 4 milhões enquadram como qualificada, não como profissional — o patamar profissional é acima de R$ 10 milhões.'],
      ['Ambas são qualificadas e ambas dispensadas.', false, 'A seguradora é profissional, e a pessoa natural não é dispensada.'],
      ['A seguradora é profissional e não dispensada; a pessoa natural é qualificada e dispensada.', false, 'Está exatamente invertido.'],
    ],
    exp: 'Duas decisões independentes em cada caso: em que categoria o cliente cai, e se aquela categoria dispensa o dever.',
    tags: ['investidor', 'categorias', 'aplicacao'],
  }),
  q('q-icat-11', {
    c: 'c-investidor-categorias', tipo: 'verdadeiro_falso', dif: 'facil',
    hab: 'Avaliar afirmação sobre a formalização da condição',
    e: 'Avalie a afirmação: "Basta que a instituição verifique em seus sistemas que o cliente possui mais de R$ 1 milhão aplicado para tratá-lo como investidor qualificado."',
    alt: [
      ['Falsa: a norma exige que o cliente ateste a condição por escrito, em termo próprio.', true, 'Correta. O termo é elemento constitutivo do enquadramento, não formalidade acessória.'],
      ['Verdadeira: o critério é objetivo e a verificação de saldo o comprova.', false, 'O critério é objetivo, mas a norma acrescenta a declaração escrita.'],
      ['Verdadeira, desde que o saldo esteja integralmente na própria instituição.', false, 'A localização do saldo não substitui o termo.'],
      ['Falsa apenas para o enquadramento como investidor profissional.', false, 'A exigência de termo vale para as duas categorias patrimoniais.'],
    ],
    exp: 'O termo serve para que o cliente saiba que está abrindo mão de proteções — e isso não se presume de um extrato.',
    tags: ['investidor', 'termo', 'conceitual'],
  }),
  q('q-icat-12', {
    c: 'c-investidor-categorias', tipo: 'conceitual', dif: 'media',
    hab: 'Definir a categoria residual',
    e: 'A categoria de investidor de varejo caracteriza-se por:',
    alt: [
      ['Ser residual: é de varejo quem não se enquadra como investidor qualificado.', true, 'Correta. A resolução define as categorias superiores e o varejo é o que resta.'],
      ['Ter investimentos financeiros inferiores a R$ 300 mil, conforme definição própria.', false, 'Não existe patamar definidor de varejo na resolução.'],
      ['Ser composta apenas por pessoas naturais.', false, 'Pessoa jurídica que não se enquadre nas demais categorias também é varejo.'],
      ['Estar impedida de adquirir cotas de fundos de investimento.', false, 'O varejo acessa a maior parte dos produtos; o que é restrito são categorias específicas.'],
    ],
    exp: 'Varejo é o padrão do sistema — a proteção máxima, e a única categoria que não exige declaração alguma.',
    tags: ['investidor', 'varejo', 'conceitual'],
  }),

  /* ---- c-diversificacao -------------------------------------------------- */
  q('q-dvsf-01', {
    c: 'c-diversificacao', tipo: 'conceitual', dif: 'facil',
    hab: 'Identificar o risco eliminado pela diversificação',
    e: 'A diversificação de uma carteira de investimentos permite reduzir:',
    alt: [
      ['O risco não sistemático, próprio do emissor, da empresa ou do setor.', true, 'Correta. É o risco específico, também chamado de diversificável.'],
      ['Todos os riscos da carteira, inclusive o de mercado.', false, 'Nenhuma diversificação elimina o risco sistemático.'],
      ['O risco sistemático, decorrente de juros, recessão e câmbio.', false, 'Esse é justamente o risco que a diversificação não alcança.'],
      ['O risco de liquidez, por multiplicar o número de ativos.', false, 'Ter mais ativos não os torna mais líquidos; pode até piorar.'],
    ],
    exp: 'Alternativa que diga "elimina o risco" sem adjetivo está errada — sempre falta a palavra que delimita.',
    tags: ['diversificacao', 'risco', 'conceitual'],
  }),
  q('q-dvsf-02', {
    c: 'c-diversificacao', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Avaliar diversificação aparente',
    ctx: 'Um cliente tem CDB, LCI, LCA e poupança, todos do mesmo banco, e afirma estar diversificado.',
    e: 'A avaliação técnica correta dessa carteira é:',
    alt: [
      ['Está concentrada em um único emissor e em um único fator de risco, apesar de reunir quatro produtos.', true, 'Correta. Variedade de produto não é diversificação.'],
      ['Está diversificada, pois os quatro produtos têm regras e tributações distintas.', false, 'Regra tributária diferente não altera a concentração de crédito nem de fator de risco.'],
      ['Está diversificada quanto ao crédito, pois cada produto tem garantia própria.', false, 'O limite do FGC se aplica ao conjunto pelo mesmo conglomerado, não por produto.'],
      ['Está adequada, desde que nenhum produto isolado supere R$ 250 mil.', false, 'O limite do FGC não se conta por produto isolado.'],
    ],
    exp: 'Duas perguntas resolvem: quantos emissores? quantos fatores de risco? Aqui a resposta é "um" nas duas.',
    tags: ['diversificacao', 'concentracao', 'atendimento'],
  }),
  q('q-dvsf-03', {
    c: 'c-diversificacao', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer a correlação como mecanismo',
    e: 'O que faz a diversificação efetivamente reduzir o risco de uma carteira é:',
    alt: [
      ['A baixa correlação entre os retornos dos ativos que a compõem.', true, 'Correta. Não é a quantidade de ativos, é o quanto eles deixam de andar juntos.'],
      ['O número total de ativos diferentes na carteira.', false, 'Vinte ações do mesmo setor têm correlação alta e diversificam pouco.'],
      ['A distribuição igualitária dos recursos entre os ativos.', false, 'Pesos iguais entre ativos correlacionados não reduzem risco.'],
      ['A escolha de ativos com maior retorno histórico.', false, 'Retorno passado não guarda relação com a redução de risco da carteira.'],
    ],
    exp: 'Diversificação é sobre diferença entre os ativos, não sobre quantidade deles.',
    tags: ['diversificacao', 'correlacao', 'conceitual'],
  }),
  q('q-dvsf-04', {
    c: 'c-diversificacao', tipo: 'comparacao', dif: 'media',
    hab: 'Comparar diversificação dentro e entre classes',
    e: 'Entre as duas estratégias abaixo, tende a reduzir mais o risco da carteira:',
    alt: [
      ['Distribuir entre classes distintas — renda fixa, renda variável, câmbio e imobiliário.', true, 'Correta. Classes diferentes respondem a fatores diferentes, o que reduz a correlação média.'],
      ['Aumentar o número de ativos dentro de uma mesma classe.', false, 'Dentro de uma classe a correlação tende a ser alta e o ganho, marginal.'],
      ['Concentrar na classe de melhor desempenho recente.', false, 'Concentração é o oposto de diversificação, e desempenho recente não prevê o futuro.'],
      ['Dividir o valor igualmente entre produtos do mesmo indexador.', false, 'Mesmo indexador significa mesmo fator de risco.'],
    ],
    exp: 'A pergunta útil não é "quantos produtos?", é "quantos fatores de risco diferentes?".',
    tags: ['diversificacao', 'alocacao', 'comparacao'],
  }),
  q('q-dvsf-05', {
    c: 'c-diversificacao', tipo: 'conceitual', dif: 'dificil',
    hab: 'Avaliar o comportamento da correlação em estresse',
    e: 'Em momentos de forte estresse de mercado, a proteção oferecida pela diversificação tende a:',
    alt: [
      ['Diminuir, porque as correlações entre ativos costumam aumentar justamente nesses momentos.', true, 'Correta. É a quebra de correlação: a proteção enfraquece quando é mais necessária.'],
      ['Aumentar, pois a dispersão entre os ativos cresce na crise.', false, 'Ocorre o contrário: os preços tendem a cair de forma conjunta.'],
      ['Permanecer inalterada, já que a correlação é uma característica fixa dos ativos.', false, 'Correlação é medida histórica e instável, não característica fixa.'],
      ['Depender exclusivamente do número de ativos da carteira.', false, 'O número de ativos não impede o aumento conjunto das correlações.'],
    ],
    exp: 'É por isso que diversificação não substitui reserva de emergência: a reserva resolve o problema de precisar do dinheiro no pior momento.',
    tags: ['diversificacao', 'risco', 'estresse'],
  }),
  q('q-dvsf-06', {
    c: 'c-diversificacao', tipo: 'aplicacao', dif: 'media',
    hab: 'Corrigir uma carteira concentrada',
    ctx: 'Um cliente conservador tem toda a carteira em produtos pós-fixados de um único banco.',
    e: 'A correção mais efetiva é:',
    alt: [
      ['Trocar parte para outros emissores e incluir ao menos um fator de risco diferente do juro de curto prazo.', true, 'Correta. Ataca as duas concentrações ao mesmo tempo.'],
      ['Acrescentar mais um produto pós-fixado do mesmo banco, aumentando o número de ativos.', false, 'Não resolve nenhuma das duas concentrações.'],
      ['Migrar tudo para renda variável, para diversificar de forma definitiva.', false, 'Trocar uma concentração por outra, e ainda incompatível com o perfil declarado.'],
      ['Manter a carteira, pois produtos pós-fixados são de baixo risco.', false, 'Baixo risco de mercado não afasta risco de crédito concentrado num único emissor.'],
    ],
    exp: 'A correção precisa mexer em emissor E em fator de risco. Mexer em um só deixa metade do problema de pé.',
    tags: ['diversificacao', 'alocacao', 'aplicacao'],
  }),
  q('q-dvsf-07', {
    c: 'c-diversificacao', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer o ganho marginal decrescente',
    e: 'Quanto ao número de ativos em uma carteira diversificada, é correto afirmar que:',
    alt: [
      ['A partir de certo número de ativos bem escolhidos, o ganho adicional de redução de risco torna-se marginal.', true, 'Correta. E o custo e a dificuldade de acompanhamento continuam crescendo.'],
      ['Quanto maior o número de ativos, proporcionalmente menor será o risco, sem limite.', false, 'A redução é decrescente e tende a um piso: o risco sistemático.'],
      ['Carteiras com menos de vinte ativos não são consideradas diversificadas.', false, 'Não há número mínimo normativo nem técnico universal.'],
      ['O número de ativos é irrelevante: só a classe importa.', false, 'O número importa até o ponto em que o ganho se esgota.'],
    ],
    exp: 'Quarenta fundos não formam carteira mais diversificada que oito bem distribuídos — só mais difícil de acompanhar.',
    tags: ['diversificacao', 'carteira', 'conceitual'],
  }),
  q('q-dvsf-08', {
    c: 'c-diversificacao', tipo: 'comparacao', dif: 'facil',
    hab: 'Classificar exemplos de risco',
    e: 'Uma fraude contábil que derruba as ações de uma companhia específica é exemplo de:',
    alt: [
      ['Risco não sistemático, que pode ser mitigado por diversificação.', true, 'Correta. É risco do emissor, não do mercado.'],
      ['Risco sistemático, por afetar a confiança em todo o mercado.', false, 'O efeito reputacional existe, mas a origem é específica da companhia.'],
      ['Risco de liquidez, por dificultar a venda das ações.', false, 'A iliquidez é consequência possível, não a natureza do risco.'],
      ['Risco de mercado, por decorrer da variação de preços.', false, 'Toda perda se manifesta em preço; isso não define a origem do risco.'],
    ],
    exp: 'Origem no emissor é risco específico. Origem em fatores que atingem todos é risco sistemático.',
    tags: ['diversificacao', 'risco', 'comparacao'],
  }),
  q('q-dvsf-09', {
    c: 'c-diversificacao', tipo: 'conceitual', dif: 'facil',
    hab: 'Classificar a alta de juros como risco sistemático',
    e: 'Um ciclo de alta da taxa básica de juros que reduz o preço de títulos prefixados de todos os emissores é exemplo de:',
    alt: [
      ['Risco sistemático, não eliminável por diversificação.', true, 'Correta. Atinge a classe inteira, independentemente do emissor.'],
      ['Risco não sistemático, mitigável pela troca de emissor.', false, 'Trocar de emissor não protege de um movimento que atinge todos.'],
      ['Risco de crédito, por afetar a capacidade de pagamento dos emissores.', false, 'O efeito descrito é de marcação a mercado, não de inadimplência.'],
      ['Risco operacional, por decorrer de decisão de política monetária.', false, 'Risco operacional é de falha interna de processo, pessoa ou sistema.'],
    ],
    exp: 'Aqui a proteção não vem de diversificar dentro da classe: vem de mudar de classe ou de prazo.',
    tags: ['diversificacao', 'risco', 'juros'],
  }),
  q('q-dvsf-10', {
    c: 'c-diversificacao', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Relacionar diversificação e reserva de emergência',
    ctx: 'Um cliente com carteira bem diversificada e sem reserva de emergência precisa de recursos durante uma queda generalizada de preços.',
    e: 'A leitura correta da situação é:',
    alt: [
      ['A diversificação não resolve a necessidade de caixa: ele será obrigado a vender na baixa, convertendo oscilação em perda permanente.', true, 'Correta. São problemas diferentes e exigem instrumentos diferentes.'],
      ['A diversificação garante que sempre haverá um ativo em alta para vender.', false, 'Em estresse generalizado as correlações sobem e a dispersão diminui.'],
      ['A carteira diversificada substitui a reserva, por reduzir o risco total.', false, 'Reduzir oscilação não é o mesmo que ter liquidez imediata sem risco de preço.'],
      ['A situação se resolve aumentando o número de ativos da carteira.', false, 'Mais ativos não criam liquidez nem evitam a venda em momento ruim.'],
    ],
    exp: 'Reserva resolve o problema de PRECISAR do dinheiro; diversificação resolve o problema de um ativo dar errado.',
    tags: ['diversificacao', 'reserva', 'atendimento'],
  }),
]
