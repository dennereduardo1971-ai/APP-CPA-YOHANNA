import { q } from './builder'

/**
 * Questões autorais — microtema 3.4 (Regras e condutas).
 *
 * O erro diagnosticado que organiza este lote é a CONFUSÃO ENTRE FIGURAS
 * PARECIDAS, que aqui aparece em quatro pares. Cada família de distrator ataca
 * um deles:
 *
 * 1. Insider trading × front running — o que se explorou foi fato relevante da
 *    companhia ou a ordem do próprio cliente?
 * 2. Spoofing × layering — a palavra que separa é CAMADAS.
 * 3. Reclusão × detenção — os crimes que atacam a formação de preço são
 *    punidos com reclusão; o exercício irregular, com detenção.
 * 4. Afastamento do sigilo × quebra do sigilo, e consentimento × obrigação
 *    legal na LGPD — em ambos, o distrator plausível é o que exige autorização
 *    para o que a lei já excepcionou.
 *
 * O quinto distrator recorrente não é de nomenclatura, é de conduta: em caso
 * de atendimento, a alternativa errada costuma ser a que resolve rápido —
 * fechar, tranquilizar, seguir a preferência do cliente sem alerta.
 */
export const BANCO_M3_4 = [
  /* ---- c-principios-conduta --------------------------------------------- */
  q('q-pgc-01', {
    c: 'c-principios-conduta', tipo: 'situacao_pratica', dif: 'facil',
    hab: 'Aplicar o dever de informação sem usar a garantia como argumento',
    ctx: 'Um cliente pergunta se corre risco de perder dinheiro aplicando em um CDB.',
    e: 'A resposta mais alinhada aos princípios do Código de Distribuição é:',
    alt: [
      ['Explicar o risco de crédito do emissor e situar a cobertura do fundo garantidor como um elemento entre outros, com seus limites.', true, 'Correta. A informação sobre risco é o centro da resposta; a garantia entra como dado, não como argumento que encerra a conversa.'],
      ['Afirmar que é garantido pelo FGC e que ele pode ficar tranquilo.', false, 'O Código veda apresentar a cobertura de fundos garantidores como elemento de maior destaque para pautar a decisão.'],
      ['Dizer que CDB de banco grande, na prática, não tem risco.', false, 'Minimizar o risco de crédito é omissão de informação relevante, ainda que nenhuma frase seja literalmente falsa.'],
      ['Responder que todo investimento tem risco e passar ao preenchimento da aplicação.', false, 'Generalidade não cumpre o dever de informação clara e inequívoca sobre o risco daquele produto.'],
    ],
    exp: 'O dever de transparência é ativo: exige informar o que é relevante, não apenas evitar a afirmação falsa.',
    tags: ['conduta', 'fgc', 'informacao', 'atendimento'],
  }),
  q('q-pgc-02', {
    c: 'c-principios-conduta', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Reconhecer conflito de interesses não administrado',
    ctx: 'Uma campanha interna premia a distribuição de um fundo específico no trimestre. O assessor passa a oferecê-lo a toda a base, sem afirmar nada falso sobre o produto.',
    e: 'Sobre essa conduta, é correto afirmar que:',
    alt: [
      ['Há descumprimento, pois o conflito existia e não foi identificado, administrado nem mitigado.', true, 'Correta. O Código não veda a existência de meta; veda que ela contamine a imparcialidade de quem atende.'],
      ['Não há descumprimento, pois nenhuma informação falsa foi prestada ao cliente.', false, 'Ausência de mentira não supre o dever de administrar conflito de interesses.'],
      ['Não há descumprimento, desde que o produto seja adequado ao perfil de ao menos parte dos clientes.', false, 'A adequação para alguns não legitima a oferta indiscriminada a todos.'],
      ['Há descumprimento apenas se o cliente sofrer prejuízo financeiro.', false, 'A infração está na conduta, não no resultado; não depende de dano consumado.'],
    ],
    exp: 'Conflito de interesses se resolve identificando, administrando e mitigando — nunca ignorando porque nada de falso foi dito.',
    tags: ['conduta', 'conflito-interesses', 'campanha'],
  }),
  q('q-pgc-03', {
    c: 'c-principios-conduta', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar o padrão de cuidado exigido',
    e: 'Segundo os princípios gerais de conduta do Código de Distribuição, o cuidado que o distribuidor deve empregar no exercício de suas atividades é o que:',
    alt: [
      ['Toda pessoa prudente e diligente costuma dispensar à administração dos próprios negócios.', true, 'Correta. É o padrão expresso no Código, e ele responde pelas infrações e irregularidades cometidas.'],
      ['A regulação estatal exigir em cada norma específica, sem acréscimo.', false, 'A autorregulação soma deveres à regulação estatal; não se limita a repeti-la.'],
      ['For compatível com as metas comerciais acordadas com a instituição.', false, 'Meta comercial não define padrão de cuidado nem justifica recomendação inadequada.'],
      ['O cliente expressamente exigir no momento da contratação.', false, 'O dever independe de exigência do cliente e existe antes dela.'],
    ],
    exp: 'O parâmetro é o cuidado com os próprios negócios — uma medida deliberadamente alta, porque quem administra o próprio dinheiro não é negligente com ele.',
    tags: ['conduta', 'diligencia', 'conceitual'],
  }),
  q('q-pgc-04', {
    c: 'c-principios-conduta', tipo: 'conceitual', dif: 'dificil',
    hab: 'Reconhecer implementação inadequada como descumprimento',
    e: 'Uma instituição possui manual de procedimentos formalmente aprovado, mas registra falhas reiteradas que não são sanadas nos prazos e não consegue demonstrar a aplicação prática do que está escrito. Perante o Código de Distribuição:',
    alt: [
      ['Há descumprimento, pois a não implementação ou a implementação inadequada equivale à inexistência do procedimento.', true, 'Correta. O Código nomeia a reiteração de falhas não sanadas e a ausência de evidências de aplicação como provas de implementação inadequada.'],
      ['Não há descumprimento, pois o procedimento exigido existe e está formalizado.', false, 'A existência formal não basta: o próprio Código afasta essa leitura.'],
      ['Há descumprimento apenas se as falhas causarem prejuízo a clientes.', false, 'O descumprimento é da obrigação de implementar, independentemente de dano.'],
      ['Não há descumprimento, pois o Código exige apenas a adoção formal de políticas.', false, 'É exatamente o contrário do que o Código estabelece.'],
    ],
    exp: 'Papel sem prática é descumprimento. O ônus não é exibir o manual, é exibir o rastro de que ele opera.',
    tags: ['conduta', 'compliance', 'implementacao'],
  }),

  /* ---- c-crimes-mercado -------------------------------------------------- */
  q('q-crm-01', {
    c: 'c-crimes-mercado', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Enquadrar o repasse de informação privilegiada',
    ctx: 'Um diretor informa a um amigo, antes da divulgação ao mercado, que sua companhia anunciará uma aquisição relevante. O amigo compra ações e lucra. O diretor não realiza qualquer operação.',
    e: 'Quanto ao diretor, é correto afirmar que:',
    alt: [
      ['Responde por uso indevido de informação privilegiada na mesma pena de quem operou, ainda que não tenha negociado nem lucrado.', true, 'Correta. A lei põe na mesma pena quem repassa informação sigilosa relativa a fato relevante obtida em razão do cargo.'],
      ['Nada cometeu, pois não negociou valores mobiliários nem obteve vantagem.', false, 'Operar e lucrar não são elementos exigidos de quem repassa a informação.'],
      ['Responde somente na esfera administrativa, perante a CVM.', false, 'A conduta é tipificada como crime, sem prejuízo da responsabilização administrativa.'],
      ['Responde por manipulação de mercado, por ter influenciado o volume negociado.', false, 'Manipulação exige operação simulada ou manobra fraudulenta destinada a mover cotação, preço ou volume — não é o caso.'],
    ],
    exp: 'O dano ao mercado se consuma na quebra da simetria de informação, não no lucro de quem repassou.',
    tags: ['crimes', 'insider', 'informacao-privilegiada'],
  }),
  q('q-crm-02', {
    c: 'c-crimes-mercado', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir as penas dos crimes da Lei 6.385/1976',
    e: 'Sobre as penas dos crimes contra o mercado de capitais, é correto afirmar que:',
    alt: [
      ['Manipulação de mercado e uso indevido de informação privilegiada são punidos com reclusão, enquanto o exercício irregular da atividade é punido com detenção.', true, 'Correta. Os dois crimes que atacam a formação de preço têm o regime mais severo; atuar sem registro fica na detenção.'],
      ['Os três crimes são punidos com reclusão, variando apenas o tempo.', false, 'O exercício irregular da atividade é punido com detenção, não reclusão.'],
      ['Os três crimes são punidos com detenção, por não envolverem violência.', false, 'Manipulação e insider são punidos com reclusão.'],
      ['O uso indevido de informação privilegiada tem a pena máxima mais alta dos três.', false, 'A pena máxima mais alta é a da manipulação de mercado, de oito anos.'],
    ],
    exp: 'Reclusão para quem ataca a formação do preço e a simetria de informação; detenção para quem atua sem habilitação.',
    tags: ['crimes', 'penas', 'comparacao'],
  }),
  q('q-crm-03', {
    c: 'c-crimes-mercado', tipo: 'conceitual', dif: 'dificil',
    hab: 'Reconhecer a causa de aumento de pena do insider',
    e: 'No crime de uso indevido de informação privilegiada, a circunstância de o agente ter o dever de manter sigilo sobre a informação utilizada:',
    alt: [
      ['Aumenta a pena em um terço.', true, 'Correta. A lei transformou o dever de sigilo em causa de aumento, e não em elemento do tipo básico.'],
      ['É elemento indispensável do crime, sem o qual a conduta é atípica.', false, 'Deixou de ser exigência do tipo básico, o que permitiu alcançar também quem não devia sigilo.'],
      ['Reduz a pena, por configurar conflito de deveres.', false, 'A circunstância agrava a reprovação da conduta, não a atenua.'],
      ['É irrelevante para a dosimetria da pena.', false, 'A lei prevê expressamente o aumento nessa hipótese.'],
    ],
    exp: 'Ao tirar o dever de sigilo do tipo básico e transformá-lo em majorante, a lei passou a alcançar também o insider secundário.',
    tags: ['crimes', 'insider', 'dosimetria'],
  }),
  q('q-crm-04', {
    c: 'c-crimes-mercado', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar o exercício irregular da atividade',
    e: 'Atuar no mercado de valores mobiliários como administrador de carteira, assessor de investimento, auditor independente ou analista, sem estar autorizado ou registrado na autoridade competente:',
    alt: [
      ['Configura crime punido com detenção de seis meses a dois anos, e multa.', true, 'Correta. É o exercício irregular de cargo, profissão, atividade ou função previsto na Lei 6.385/1976.'],
      ['Configura mera infração administrativa, sujeita apenas a multa da CVM.', false, 'A conduta é tipificada como crime, além da eventual sanção administrativa.'],
      ['Só configura crime se houver prejuízo comprovado a investidores.', false, 'O tipo não exige dano; a atuação sem registro basta.'],
      ['Não configura crime quando a atuação se dá a título gratuito.', false, 'A lei alcança expressamente a atuação ainda que a título gratuito.'],
    ],
    exp: 'A exigência de registro protege o investidor de quem atua sem habilitação — e o tipo alcança inclusive quem não cobra pelo serviço.',
    tags: ['crimes', 'exercicio-irregular', 'registro'],
  }),

  /* ---- c-praticas-abusivas ----------------------------------------------- */
  q('q-abu-01', {
    c: 'c-praticas-abusivas', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar layering pela descrição da conduta',
    e: 'Um participante insere sucessivas ordens em diferentes níveis de preço, do mesmo lado do livro de ofertas, sem intenção de executá-las, criando aparência de forte demanda. Essa prática é conhecida como:',
    alt: [
      ['Layering', true, 'Correta. Ordens falsas escalonadas em camadas de preço caracterizam o layering.'],
      ['Churning', false, 'Churning é o giro excessivo da carteira do cliente para gerar corretagem.'],
      ['Front running', false, 'Front running é operar em nome próprio antes de executar a ordem do cliente.'],
      ['Money pass', false, 'Money pass é a transferência de resultado entre contas por operações combinadas fora do preço de mercado.'],
    ],
    exp: 'A palavra que separa layering de spoofing é CAMADAS: várias ordens escalonadas em níveis distintos de preço.',
    tags: ['praticas-abusivas', 'layering', 'manipulacao'],
  }),
  q('q-abu-02', {
    c: 'c-praticas-abusivas', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Distinguir front running de insider trading',
    ctx: 'Um assessor recebe de um cliente a ordem de comprar um lote expressivo de determinada ação. Antes de executá-la, compra o mesmo papel em nome próprio; a ordem do cliente pressiona o preço e ele vende com lucro.',
    e: 'A conduta é corretamente classificada como:',
    alt: [
      ['Front running, pois a informação explorada foi a ordem do próprio cliente.', true, 'Correta. Não houve uso de fato relevante da companhia ainda não divulgado, e sim do conhecimento do fluxo.'],
      ['Insider trading, pois utilizou informação não disponível ao mercado.', false, 'Insider trading pressupõe informação relevante da companhia ainda não divulgada — não a ordem de um cliente.'],
      ['Spoofing, pois sua ordem antecipou artificialmente o preço.', false, 'Não houve ordem falsa nem cancelamento: as operações foram efetivamente executadas.'],
      ['Churning, pois operou em benefício próprio na conta do cliente.', false, 'Não houve giro da carteira do cliente para gerar corretagem.'],
    ],
    exp: 'A pergunta que decide é qual informação foi explorada: fato relevante da companhia é insider; ordem do cliente é front running.',
    tags: ['praticas-abusivas', 'front-running', 'insider'],
  }),
  q('q-abu-03', {
    c: 'c-praticas-abusivas', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Reconhecer churning por indicadores de giro',
    ctx: 'A carteira de um cliente apresenta dezenas de operações no mês, resultado acumulado próximo de zero e volume de corretagem elevado em relação ao patrimônio administrado.',
    e: 'Esse conjunto de indícios aponta para:',
    alt: [
      ['Churning, pelo giro desnecessário da carteira em benefício da corretagem.', true, 'Correta. O sinal é a desproporção entre o giro e o benefício obtido pelo cliente.'],
      ['Layering, pelo número elevado de ordens registradas.', false, 'Layering envolve ordens falsas no livro, não operações efetivamente realizadas na carteira do cliente.'],
      ['Money pass, pela transferência de resultado entre as operações.', false, 'Não há indício de operações combinadas a preços fora do mercado entre contas.'],
      ['Conduta regular, pois operar com frequência é estratégia legítima de gestão.', false, 'Frequência sem benefício correspondente ao cliente, com corretagem alta, é o próprio quadro de churning.'],
    ],
    exp: 'Churning raramente se prova por uma operação isolada: constrói-se por padrão de giro e pela relação entre corretagem gerada e patrimônio.',
    tags: ['praticas-abusivas', 'churning', 'corretagem'],
  }),
  q('q-abu-04', {
    c: 'c-praticas-abusivas', tipo: 'comparacao', dif: 'media',
    hab: 'Separar as práticas pela vítima atingida',
    e: 'Considerando quem é diretamente lesado, é correto afirmar que:',
    alt: [
      ['Spoofing e layering atingem o mercado em geral, enquanto churning e front running atingem primeiro o cliente atendido.', true, 'Correta. É o critério mais estável para separar as práticas quando os nomes se confundem.'],
      ['Todas as práticas atingem exclusivamente o cliente do intermediário.', false, 'Spoofing e layering distorcem a formação de preço e afetam todos os participantes.'],
      ['Todas as práticas atingem exclusivamente o mercado, não clientes determinados.', false, 'Churning e front running lesam diretamente o cliente daquele profissional.'],
      ['Front running atinge o mercado, e spoofing atinge apenas a contraparte da ordem.', false, 'É a inversão dos dois: front running explora o cliente, e spoofing distorce o livro para todos.'],
    ],
    exp: 'Pergunte quem foi lesado: o mercado inteiro ou o cliente daquele profissional. O critério resolve a maioria dos enunciados.',
    tags: ['praticas-abusivas', 'comparacao', 'mercado'],
  }),

  /* ---- c-sigilo ---------------------------------------------------------- */
  q('q-sig-01', {
    c: 'c-sigilo', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Conciliar dever de sigilo e comunicação de ilícito',
    ctx: 'Uma instituição identifica movimentações incompatíveis com a capacidade financeira declarada pelo cliente e comunica o fato às autoridades competentes, sem cientificá-lo.',
    e: 'Sobre essa conduta, é correto afirmar que:',
    alt: [
      ['Não constitui violação do dever de sigilo, pois a lei excepciona expressamente a comunicação de ilícitos às autoridades.', true, 'Correta. A não cientificação do cliente, por sua vez, é exigida pela legislação de prevenção à lavagem.'],
      ['Viola o sigilo bancário e dependeria de autorização judicial prévia.', false, 'A comunicação de ilícitos está fora do conceito de violação por força de lei, sem necessidade de decisão judicial.'],
      ['Viola o sigilo, salvo se o cliente ratificar a comunicação posteriormente.', false, 'A licitude não depende de consentimento do cliente nessa hipótese.'],
      ['Só seria permitida após condenação criminal do cliente.', false, 'A comunicação é preventiva e antecede qualquer apuração criminal.'],
    ],
    exp: 'Os dois deveres não colidem: um foi excepcionado pelo outro dentro do próprio texto legal.',
    tags: ['sigilo', 'pld', 'comunicacao'],
  }),
  q('q-sig-02', {
    c: 'c-sigilo', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar hipóteses que não configuram violação',
    e: 'De acordo com a Lei Complementar 105/2001, NÃO constitui violação do dever de sigilo:',
    alt: [
      ['A revelação de informações sigilosas com o consentimento expresso do interessado.', true, 'Correta. O consentimento expresso está entre as hipóteses que a lei retira do conceito de violação.'],
      ['O comentário sobre a movimentação de um cliente com colega de outra instituição, em caráter informal.', false, 'Não há hipótese legal que ampare a revelação informal — a conduta é quebra de sigilo.'],
      ['A divulgação do saldo de um cliente a familiar que o acompanha à agência.', false, 'Acompanhamento não equivale a autorização expressa do titular.'],
      ['O fornecimento de dados a empresa de marketing contratada para prospecção.', false, 'Prospecção comercial não está entre as hipóteses legais de afastamento do sigilo.'],
    ],
    exp: 'A lista da lei é fechada. Fora dela, a revelação é quebra de sigilo — e a lei a trata como crime.',
    tags: ['sigilo', 'consentimento', 'conceitual'],
  }),
  q('q-sig-03', {
    c: 'c-sigilo', tipo: 'conceitual', dif: 'dificil',
    hab: 'Reconhecer a consequência penal da quebra indevida',
    e: 'A quebra de sigilo bancário fora das hipóteses autorizadas pela Lei Complementar 105/2001:',
    alt: [
      ['Constitui crime, punido com reclusão de um a quatro anos e multa.', true, 'Correta. A mesma pena alcança quem omite, retarda injustificadamente ou presta falsamente as informações requeridas.'],
      ['Sujeita o responsável apenas a sanção administrativa do Banco Central.', false, 'A lei tipifica a conduta como crime, além de eventuais sanções administrativas.'],
      ['Gera apenas responsabilidade civil pelo dano causado ao cliente.', false, 'A responsabilização civil não exclui a tipificação penal expressa.'],
      ['Não gera consequência quando não houver proveito econômico para o agente.', false, 'O tipo não exige proveito econômico.'],
    ],
    exp: 'Sonegar informação legítima é punido tanto quanto revelar o que deveria ficar guardado — a lei equipara as duas condutas.',
    tags: ['sigilo', 'crime', 'penas'],
  }),
  q('q-sig-04', {
    c: 'c-sigilo', tipo: 'conceitual', dif: 'media',
    hab: 'Situar a fiscalização de BACEN e CVM diante do sigilo',
    e: 'Em relação ao Banco Central do Brasil e à Comissão de Valores Mobiliários no exercício de suas competências de fiscalização, o sigilo bancário:',
    alt: [
      ['Não lhes é oponível, e o dever de sigilo se estende a esses órgãos quanto às informações obtidas.', true, 'Correta. A informação continua protegida: muda de custódia, não de regime.'],
      ['É plenamente oponível, exigindo autorização judicial em qualquer hipótese.', false, 'A fiscalização não depende de decisão judicial para acessar as informações no âmbito de sua competência.'],
      ['Deixa de existir, tornando as informações públicas após a fiscalização.', false, 'O dever de sigilo é expressamente estendido aos órgãos que recebem as informações.'],
      ['Só é afastado mediante consentimento prévio do cliente titular.', false, 'O acesso decorre da competência fiscalizatória, não de autorização do cliente.'],
    ],
    exp: 'Transferência de custódia da informação protegida não é o mesmo que tornar a informação pública.',
    tags: ['sigilo', 'bacen', 'cvm', 'fiscalizacao'],
  }),

  /* ---- c-lgpd ------------------------------------------------------------ */
  q('q-lgpd-01', {
    c: 'c-lgpd', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer que o consentimento é uma base entre várias',
    e: 'Sobre as hipóteses que autorizam o tratamento de dados pessoais na Lei 13.709/2018, é correto afirmar que:',
    alt: [
      ['O consentimento é uma das hipóteses legais, ao lado de outras como o cumprimento de obrigação legal ou regulatória e a execução de contrato.', true, 'Correta. As hipóteses são alternativas e igualmente idôneas; escolher a base correta é obrigação do controlador.'],
      ['O consentimento do titular é sempre exigido para qualquer tratamento.', false, 'É o erro mais comum sobre a lei: boa parte da atividade bancária se apoia em obrigação legal e execução de contrato.'],
      ['O tratamento independe de qualquer base legal quando os dados forem de cliente da instituição.', false, 'Todo tratamento exige uma base legal e uma finalidade declarada.'],
      ['Apenas o interesse legítimo do controlador autoriza o tratamento sem consentimento.', false, 'Há várias outras bases, como obrigação legal, execução de contrato e proteção do crédito.'],
    ],
    exp: 'A lei não coloca o consentimento como regra e o resto como exceção: as hipóteses são alternativas.',
    tags: ['lgpd', 'bases-legais', 'consentimento'],
  }),
  q('q-lgpd-02', {
    c: 'c-lgpd', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Separar direito de eliminação de dever legal de guarda',
    ctx: 'Após encerrar a conta, um cliente exige a eliminação de todos os seus dados mantidos pela instituição.',
    e: 'A conduta correta é:',
    alt: [
      ['Eliminar o que era tratado com base em consentimento e manter os registros que a lei e a regulação obrigam a guardar, explicando a distinção ao cliente.', true, 'Correta. O direito de eliminação não desfaz dever de guarda imposto por norma.'],
      ['Eliminar imediatamente todos os registros, por se tratar de direito absoluto do titular.', false, 'O direito de eliminação alcança dados tratados com consentimento e os desnecessários ou excessivos, não os retidos por obrigação legal.'],
      ['Recusar integralmente o pedido, pois dados de cliente jamais podem ser eliminados.', false, 'Parte dos dados pode e deve ser eliminada — a recusa integral também é irregular.'],
      ['Condicionar qualquer eliminação a autorização prévia do órgão regulador.', false, 'A lei não exige autorização do regulador para o exercício dos direitos do titular.'],
    ],
    exp: 'Registros mantidos por obrigação regulatória continuam íntegros porque nunca dependeram de autorização do titular.',
    tags: ['lgpd', 'direitos-titular', 'eliminacao'],
  }),
  q('q-lgpd-03', {
    c: 'c-lgpd', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Aplicar o princípio da finalidade',
    ctx: 'O telefone informado pelo cliente na abertura de conta passa a ser usado para ofertar seguros de outra empresa do grupo, finalidade não informada no momento da coleta.',
    e: 'Essa utilização:',
    alt: [
      ['Contraria o princípio da finalidade, que veda o tratamento posterior incompatível com os propósitos informados ao titular.', true, 'Correta. A finalidade precisa ser legítima, específica, explícita e informada, sem desvio posterior.'],
      ['É regular, pois o dado foi fornecido voluntariamente pelo cliente.', false, 'Fornecer o dado para uma finalidade não autoriza usá-lo para outra, incompatível.'],
      ['É regular, desde que a empresa pertença ao mesmo grupo econômico.', false, 'Pertencer ao mesmo grupo não amplia por si só a finalidade informada.'],
      ['É irregular apenas se o cliente manifestar oposição expressa.', false, 'A irregularidade independe de oposição: o desvio de finalidade já ocorreu.'],
    ],
    exp: 'Finalidade é princípio expresso: o dado serve ao propósito informado, não a todo uso que a empresa consiga imaginar depois.',
    tags: ['lgpd', 'finalidade', 'atendimento'],
  }),
  q('q-lgpd-04', {
    c: 'c-lgpd', tipo: 'conceitual', dif: 'media',
    hab: 'Dimensionar as sanções administrativas da LGPD',
    e: 'A multa simples prevista na Lei 13.709/2018 pode alcançar:',
    alt: [
      ['Dois por cento do faturamento da pessoa jurídica no Brasil, excluídos os tributos, limitada a cinquenta milhões de reais por infração.', true, 'Correta. O teto é por infração, e a multa simples convive com multa diária, publicização, bloqueio e eliminação dos dados.'],
      ['Dez por cento do faturamento global do grupo econômico, sem teto absoluto.', false, 'O percentual e a base de cálculo estão incorretos: a lei usa o faturamento no Brasil, excluídos tributos.'],
      ['Cinquenta milhões de reais no total, considerado o conjunto das infrações da instituição.', false, 'O limite é por infração, não um teto global por instituição.'],
      ['Valor fixo definido pela autoridade nacional, independentemente do faturamento.', false, 'A multa simples é calculada sobre o faturamento, observado o teto legal.'],
    ],
    exp: 'Dois detalhes costumam ser lidos errado: a base é o faturamento no Brasil sem tributos, e o teto é por infração.',
    tags: ['lgpd', 'sancoes', 'multa'],
  }),

  /* ---- c-atendimento ----------------------------------------------------- */
  q('q-atd-01', {
    c: 'c-atendimento', tipo: 'situacao_pratica', dif: 'facil',
    hab: 'Distinguir assentimento de compreensão',
    ctx: 'Durante a explicação de um produto com carência de dois anos, o cliente concorda com tudo. Ao final, pergunta se poderá resgatar quando quiser.',
    e: 'A conduta adequada é:',
    alt: [
      ['Retomar a explicação da carência, confirmar o entendimento com as próprias palavras do cliente e registrar a informação prestada.', true, 'Correta. A pergunta revela que o assentimento anterior não foi compreensão.'],
      ['Prosseguir com a aplicação, pois ele já havia concordado com as condições apresentadas.', false, 'Concordância formal não supre a falta de entendimento demonstrada pela pergunta.'],
      ['Trocar por um produto sem carência, sem retomar a explicação.', false, 'Trocar o produto não corrige a falha de comunicação nem cumpre o dever de informar.'],
      ['Encaminhar o material por escrito e considerar cumprido o dever de informação.', false, 'Entregar material não substitui a confirmação de que o cliente compreendeu.'],
    ],
    exp: 'Cliente que só assente pode não ter compreendido — confirmar com as próprias palavras dele é o que fecha a lacuna.',
    tags: ['atendimento', 'comunicacao', 'carencia'],
  }),
  q('q-atd-02', {
    c: 'c-atendimento', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer a função do registro no atendimento',
    e: 'O registro do que foi apresentado ao cliente, dos riscos informados e da decisão tomada serve principalmente para:',
    alt: [
      ['Permitir demonstrar, depois, que a informação foi prestada — protegendo tanto o cliente quanto o profissional.', true, 'Correta. Sem registro, quem agiu corretamente fica indistinguível de quem não agiu.'],
      ['Cumprir exigência interna de controle, sem efeito na relação com o cliente.', false, 'O registro tem efeito direto na demonstração da adequação da recomendação.'],
      ['Transferir ao cliente a responsabilidade pela decisão de investimento.', false, 'O registro documenta a informação prestada; não transfere o dever de orientar adequadamente.'],
      ['Substituir a necessidade de verificar a adequação do produto ao perfil.', false, 'Registro não substitui suitability: são deveres distintos e cumulativos.'],
    ],
    exp: 'A memória de uma conversa técnica se apaga; o único jeito de a recomendação correta continuar demonstrável é ela ter deixado rastro.',
    tags: ['atendimento', 'registro', 'evidencia'],
  }),
  q('q-atd-03', {
    c: 'c-atendimento', tipo: 'conceitual', dif: 'media',
    hab: 'Relacionar risco de conduta aos demais riscos',
    e: 'Uma promessa de rentabilidade feita por um profissional durante o atendimento pode gerar responsabilização judicial, sanção do regulador e dano reputacional à instituição. Essa relação ilustra que o risco de conduta:',
    alt: [
      ['É a origem a partir da qual se materializam os riscos legal, regulatório e de imagem.', true, 'Correta. Um único ato individual produz simultaneamente as três exposições institucionais.'],
      ['É consequência dos riscos legal e regulatório, e não sua causa.', false, 'A ordem é inversa: a decisão individual no atendimento é o que dispara os demais.'],
      ['Existe apenas quando há prejuízo financeiro efetivo ao cliente.', false, 'A conduta irregular configura risco independentemente do resultado financeiro.'],
      ['Se confunde com o risco de mercado do produto oferecido.', false, 'Risco de mercado é do produto; risco de conduta é da atuação profissional.'],
    ],
    exp: 'Risco de conduta é o único que nasce de uma decisão individual dentro do atendimento — os outros três são suas consequências.',
    tags: ['atendimento', 'riscos', 'conduta'],
  }),
  q('q-atd-04', {
    c: 'c-atendimento', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Conduzir o atendimento sem antecipar o produto',
    ctx: 'Um cliente inicia o atendimento relatando preocupação com o futuro dos filhos e insegurança quanto ao próprio emprego.',
    e: 'A conduta mais adequada nesse momento é:',
    alt: [
      ['Deixá-lo detalhar objetivos, prazos e receios antes de apresentar qualquer produto.', true, 'Correta. A escuta ativa antecede a proposta; interromper com produto encurta o diagnóstico.'],
      ['Apresentar de imediato um plano de previdência, que atende aos dois pontos citados.', false, 'Propor produto antes de compreender a situação transforma orientação em venda.'],
      ['Sugerir que ele defina sozinho as prioridades e retorne depois.', false, 'Conduzir a coleta é função do profissional, não do cliente.'],
      ['Tranquilizá-lo afirmando que a situação é comum e não exige mudanças.', false, 'Tranquilizar sem diagnóstico omite a avaliação que o caso pede.'],
    ],
    exp: 'Em atendimento, desconfie da alternativa que resolve rápido: a correta costuma acrescentar escuta ou verificação.',
    tags: ['atendimento', 'escuta-ativa', 'diagnostico'],
  }),
]
