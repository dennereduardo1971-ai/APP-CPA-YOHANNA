import { q } from './builder'

/**
 * Questões autorais — microtema 2.1, bloco de renda variável e fundos.
 *
 * Dois erros dominam este bloco e organizam quase todos os distratores:
 *
 *   CONFUNDIR FORMA COM VALOR — achar que desdobramento e bonificação mudam
 *   o patrimônio, quando só rearranjam a posição.
 *
 *   LER O RÓTULO NO LUGAR DO REGULAMENTO — supor que "multimercado" significa
 *   moderado, que "FII paga todo mês" equivale a renda fixa, ou que a
 *   responsabilidade limitada da CVM 175 vale automaticamente.
 *
 * As questões de prazo (cotização mais liquidação) são deliberadamente
 * aritméticas: é onde o candidato erra por somar mal, não por não saber.
 */
export const BANCO_M2_1_RV = [
  /* ---- c-eventos-corporativos --------------------------------------------- */
  q('q-evc-01', {
    c: 'c-eventos-corporativos', tipo: 'calculo', dif: 'media',
    hab: 'Aplicar o efeito de um desdobramento sobre a posição',
    ctx: 'Um acionista possui 100 ações a R$ 40 e a companhia realiza desdobramento na proporção de 1 para 2.',
    e: 'Após o evento, a posição do acionista passa a ser de:',
    alt: [
      ['200 ações a R$ 20, com o mesmo patrimônio de R$ 4.000.', true, 'Correta. Quantidade e preço variam na proporção inversa.'],
      ['200 ações a R$ 40, dobrando o patrimônio.', false, 'O desdobramento não cria valor; o preço se ajusta na mesma proporção.'],
      ['50 ações a R$ 80, com o mesmo patrimônio.', false, 'Isso descreveria um grupamento de 2 para 1, não um desdobramento.'],
      ['100 ações a R$ 20, com metade do patrimônio.', false, 'A quantidade também muda; ela dobra.'],
    ],
    exp: 'Desdobramento muda a embalagem, não o conteúdo. É a origem mais comum de pânico injustificado no home broker.',
    tags: ['eventos-corporativos', 'desdobramento', 'calculo'],
  }),
  q('q-evc-02', {
    c: 'c-eventos-corporativos', tipo: 'multipla_escolha', dif: 'media',
    hab: 'Identificar eventos que não alteram o patrimônio',
    e: 'Qual evento corporativo NÃO altera o patrimônio do acionista?',
    alt: [
      ['Bonificação em ações.', true, 'Correta. Ele recebe mais ações, cada uma valendo proporcionalmente menos.'],
      ['Pagamento de dividendos.', false, 'Distribui parcela do lucro em dinheiro.'],
      ['Pagamento de juros sobre capital próprio.', false, 'Também entrega recursos ao acionista.'],
      ['Exercício de direito de subscrição com desconto.', false, 'Envolve desembolso e pode alterar o valor da posição.'],
    ],
    exp: 'Bonificação, desdobramento e grupamento apenas rearranjam a posição. Só dividendo, JCP e subscrição mexem em dinheiro.',
    tags: ['eventos-corporativos', 'bonificacao', 'multipla-escolha'],
  }),
  q('q-evc-03', {
    c: 'c-eventos-corporativos', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir dividendo de JCP',
    e: 'A diferença entre dividendo e juros sobre capital próprio (JCP) é que o JCP:',
    alt: [
      ['É dedutível como despesa para a companhia e sofre retenção na fonte para o investidor.', true, 'Correta. Por isso a empresa prefere JCP e o acionista prefere dividendo.'],
      ['É pago exclusivamente a acionistas preferenciais.', false, 'A distribuição não é restrita por espécie de ação.'],
      ['Não representa saída de caixa da companhia.', false, 'Assim como o dividendo, o JCP é pago em dinheiro.'],
      ['É obrigatório por lei em qualquer exercício com lucro.', false, 'A distribuição mínima obrigatória se refere a dividendos, não ao JCP.'],
    ],
    exp: 'A dedutibilidade do JCP reduz o viés tributário a favor do endividamento — juros de dívida sempre foram dedutíveis.',
    tags: ['eventos-corporativos', 'jcp', 'comparacao'],
  }),
  q('q-evc-04', {
    c: 'c-eventos-corporativos', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Diagnosticar queda de preço causada por evento',
    ctx: 'Um cliente liga alarmado dizendo que a ação dele "caiu quase 50% da noite para o dia", sem notícia relevante sobre a companhia.',
    e: 'A primeira verificação a ser feita é:',
    alt: [
      ['Consultar o calendário de eventos corporativos, pois um desdobramento produz exatamente esse efeito sem qualquer perda.', true, 'Correta. A quantidade de ações teria dobrado na mesma proporção.'],
      ['Recomendar a venda imediata para limitar a perda.', false, 'Vender antes de entender o que aconteceu realiza uma perda que pode não existir.'],
      ['Atribuir o movimento à volatilidade normal do mercado.', false, 'Quedas dessa magnitude sem notícia pedem verificação, não explicação genérica.'],
      ['Solicitar à corretora o cancelamento das ordens do dia.', false, 'Não há ordem a cancelar; o preço se ajustou por evento.'],
    ],
    exp: 'Confundir ajuste de evento com queda de preço é a origem mais comum de decisão precipitada em renda variável.',
    tags: ['eventos-corporativos', 'atendimento', 'desdobramento'],
  }),

  /* ---- c-governanca-listagem ------------------------------------------------ */
  q('q-gov-01', {
    c: 'c-governanca-listagem', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar o Novo Mercado',
    e: 'Uma companhia listada no Novo Mercado pode ter em circulação:',
    alt: [
      ['Apenas ações ordinárias, com tag along de 100%.', true, 'Correta. É o segmento em que todo acionista tem voto e tag along integral.'],
      ['Ações ordinárias e preferenciais, com tag along de 100%.', false, 'Isso descreve o Nível 2.'],
      ['Apenas ações preferenciais, com direito a voto.', false, 'O Novo Mercado não admite preferenciais.'],
      ['Ações ordinárias, preferenciais e de fruição.', false, 'A estrutura do Novo Mercado é de ação única.'],
    ],
    exp: 'Ação única elimina a distância entre direito sobre o fluxo de caixa e direito de controle.',
    tags: ['governanca', 'novo-mercado', 'conceitual'],
  }),
  q('q-gov-02', {
    c: 'c-governanca-listagem', tipo: 'conceitual', dif: 'media',
    hab: 'Definir tag along',
    e: 'O tag along assegura ao acionista minoritário o direito de:',
    alt: [
      ['Vender suas ações na alienação do controle, por percentual do valor pago ao controlador.', true, 'Correta. É a proteção no momento em que o controle muda de mãos.'],
      ['Receber dividendos superiores aos do controlador.', false, 'Isso não é tag along; a distribuição segue a espécie de ação.'],
      ['Vetar decisões da assembleia geral.', false, 'Tag along não confere poder de veto.'],
      ['Converter suas ações preferenciais em ordinárias a qualquer tempo.', false, 'A conversão depende de previsão estatutária específica.'],
    ],
    exp: 'Sem tag along, o prêmio de controle não é compartilhado e o minoritário fica com um controlador que não escolheu.',
    tags: ['governanca', 'tag-along', 'conceitual'],
  }),
  q('q-gov-03', {
    c: 'c-governanca-listagem', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer a natureza dos segmentos de listagem',
    e: 'Os segmentos especiais de listagem da bolsa caracterizam-se por:',
    alt: [
      ['Adesão voluntária a regras contratuais mais exigentes do que as previstas em lei.', true, 'Correta. São compromisso com a bolsa, não classificação de regulador.'],
      ['Classificação obrigatória atribuída pela CVM a cada companhia.', false, 'A CVM não classifica companhias em segmentos de listagem.'],
      ['Enquadramento automático conforme o tamanho da companhia.', false, 'Não há critério de porte; a adesão é decisão da companhia.'],
      ['Regime tributário diferenciado para os acionistas.', false, 'Os segmentos tratam de governança, não de tributação.'],
    ],
    exp: 'Aderir é decisão de financiamento: abre-se mão de flexibilidade para captar mais barato.',
    tags: ['governanca', 'listagem', 'conceitual'],
  }),
  q('q-gov-04', {
    c: 'c-governanca-listagem', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Relacionar governança e desconto de preço',
    ctx: 'Duas companhias do mesmo setor negociam com múltiplos bem diferentes. A mais barata está no segmento tradicional e tem estrutura de capital concentrada em preferenciais.',
    e: 'A leitura tecnicamente adequada é:',
    alt: [
      ['Parte do desconto pode ser prêmio de risco de governança, que se materializa justamente na alienação de controle.', true, 'Correta. Quem sabe que pode ficar de fora do prêmio exige desconto para comprar.'],
      ['O desconto indica necessariamente uma oportunidade de compra.', false, 'Desconto persistente costuma precificar risco, não distorção.'],
      ['Múltiplos diferentes entre empresas do mesmo setor são sempre irracionais.', false, 'Estruturas de governança e capital distintas justificam múltiplos distintos.'],
      ['A governança não influencia o preço, apenas a imagem da companhia.', false, 'Governança altera o direito do minoritário e, portanto, o valor da ação para ele.'],
    ],
    exp: 'Governança não é discurso: é o direito que o minoritário tem quando o controle muda de mãos.',
    tags: ['governanca', 'valuation', 'atendimento'],
  }),

  /* ---- c-fiis ---------------------------------------------------------------- */
  q('q-fii-01', {
    c: 'c-fiis', tipo: 'conceitual', dif: 'facil',
    hab: 'Identificar a forma de saída de um FII',
    e: 'Um cotista que deseja sair de um fundo imobiliário deve:',
    alt: [
      ['Vender as cotas em bolsa, a preço de mercado.', true, 'Correta. FII é fundo fechado: não há resgate.'],
      ['Solicitar resgate ao administrador, conforme o regulamento.', false, 'Não há resgate em fundo fechado.'],
      ['Aguardar o encerramento do fundo.', false, 'Existe mercado secundário; não é preciso esperar o encerramento.'],
      ['Solicitar amortização antecipada das cotas.', false, 'Amortização é decisão do fundo, não direito do cotista de sair.'],
    ],
    exp: 'Sem resgate, o preço da cota pode divergir persistentemente do valor patrimonial — para cima ou para baixo.',
    tags: ['fii', 'liquidez', 'conceitual'],
  }),
  q('q-fii-02', {
    c: 'c-fiis', tipo: 'conceitual', dif: 'media',
    hab: 'Delimitar o alcance da isenção em FII',
    e: 'A isenção de imposto de renda aplicável a fundos imobiliários, para pessoa física:',
    alt: [
      ['Alcança os rendimentos distribuídos, sujeita a condições, mas não o ganho de capital na venda das cotas.', true, 'Correta. Valorização da cota é tributada.'],
      ['Alcança rendimentos e ganho de capital, sem condições.', false, 'Há condições cumulativas e o ganho de capital é tributado.'],
      ['Alcança apenas o ganho de capital na venda.', false, 'É o contrário: a isenção é do rendimento distribuído.'],
      ['Aplica-se igualmente a pessoa física e jurídica.', false, 'A isenção é um recorte de pessoa física.'],
    ],
    exp: 'A isenção é do rendimento e depende de três condições cumulativas — cujos limiares numéricos mudaram recentemente.',
    tags: ['fii', 'isencao', 'conceitual'],
  }),
  q('q-fii-03', {
    c: 'c-fiis', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Avaliar substituição de renda fixa por FII em fase de saques',
    ctx: 'Um cliente aposentado quer migrar toda a carteira de renda fixa para FIIs, argumentando que eles "pagam todo mês".',
    e: 'A orientação tecnicamente correta é:',
    alt: [
      ['Alertar que a cota é renda variável: numa queda de mercado ele veria o patrimônio encolher enquanto continua sacando, o que agrava o risco de sequência.', true, 'Correta. A distribuição é atraente, mas não protege o principal.'],
      ['Concordar, pois a distribuição mensal substitui integralmente a renda fixa.', false, 'Distribuição de caixa não é juro contratado sobre principal estável.'],
      ['Recomendar concentração em fundos de tijolo, que não oscilam.', false, 'Fundos de tijolo também têm cotas negociadas em bolsa e oscilam.'],
      ['Concordar desde que ele assine termo de ciência de risco.', false, 'O termo não corrige a inadequação de concentrar renda de aposentadoria em ativo volátil.'],
    ],
    exp: 'É o risco de sequência aplicado a um produto que parece renda fixa e não é.',
    tags: ['fii', 'desacumulacao', 'atendimento'],
  }),
  q('q-fii-04', {
    c: 'c-fiis', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir os tipos de FII',
    e: 'Um FII classificado como "de papel" caracteriza-se por:',
    alt: [
      ['Deter ativos financeiros do setor imobiliário, como CRI, e não imóveis físicos.', true, 'Correta. O risco principal é de crédito do lastro e de indexador.'],
      ['Deter imóveis físicos destinados a locação.', false, 'Isso descreve o fundo de tijolo.'],
      ['Deter cotas de outros fundos imobiliários.', false, 'Isso descreve o fundo de fundos.'],
      ['Ser vedado à negociação em bolsa.', false, 'Fundos de papel também têm cotas negociadas em bolsa.'],
    ],
    exp: 'Chamar tijolo, papel e fundo de fundos todos de "FII" esconde perfis de risco bem diferentes.',
    tags: ['fii', 'tipos', 'comparacao'],
  }),

  /* ---- c-etf-bdr -------------------------------------------------------------- */
  q('q-eb-01', {
    c: 'c-etf-bdr', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar a posição do titular de BDR',
    e: 'O titular de um BDR:',
    alt: [
      ['Tem exposição econômica à companhia estrangeira, mas não é acionista direto dela.', true, 'Correta. O BDR é certificado lastreado em ações custodiadas no exterior.'],
      ['É acionista direto da companhia, com direito de voto.', false, 'A titularidade das ações permanece com o depositário no exterior.'],
      ['É credor da companhia estrangeira.', false, 'Não há relação de crédito: a exposição é de participação.'],
      ['É cotista de um fundo de índice internacional.', false, 'Isso descreveria um ETF, não um BDR.'],
    ],
    exp: 'A estrutura de depositário introduz um intermediário a mais entre o investidor e o ativo.',
    tags: ['bdr', 'internacional', 'conceitual'],
  }),
  q('q-eb-02', {
    c: 'c-etf-bdr', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar a gestão de um ETF',
    e: 'A gestão de um ETF que replica um índice é classificada como:',
    alt: [
      ['Passiva, pois o gestor reproduz a carteira teórica do índice em vez de selecionar ativos.', true, 'Correta. É o que mantém a taxa de administração baixa.'],
      ['Ativa, pois o gestor busca superar o índice de referência.', false, 'Buscar superar o índice caracterizaria gestão ativa, não a de um ETF de índice.'],
      ['Discricionária, conforme a visão do gestor sobre o mercado.', false, 'A discricionariedade é justamente o que a réplica de índice elimina.'],
      ['Alavancada por definição.', false, 'Alavancagem depende do mandato específico, não da natureza do ETF.'],
    ],
    exp: 'O indicador relevante para avaliar um ETF não é o desconto, e sim o tracking error contra o índice.',
    tags: ['etf', 'gestao-passiva', 'conceitual'],
  }),
  q('q-eb-03', {
    c: 'c-etf-bdr', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Comparar BDR e investimento direto no exterior',
    ctx: 'Um cliente quer exposição a empresas de tecnologia dos Estados Unidos e pergunta se compra BDR ou abre conta no exterior.',
    e: 'A resposta tecnicamente equilibrada é:',
    alt: [
      ['O BDR resolve praticidade — negociação em reais e custódia local — em troca de não conferir direitos de acionista, depender da liquidez local e embutir o câmbio no preço.', true, 'Correta. Nenhuma das duas é errada; muda o que se valoriza.'],
      ['O BDR é sempre melhor, por ser mais barato.', false, 'A comparação de custo depende do volume negociado e da estrutura tributária de cada um.'],
      ['A conta no exterior é sempre melhor, por eliminar o risco cambial.', false, 'Investir em ativo estrangeiro mantém a exposição cambial em qualquer estrutura.'],
      ['São equivalentes em todos os aspectos relevantes.', false, 'Direitos de acionista, liquidez e operacional diferem de forma relevante.'],
    ],
    exp: 'A escolha raramente se resolve pelo custo nominal: depende de quanto se negocia e do valor dado à simplicidade.',
    tags: ['bdr', 'internacional', 'atendimento'],
  }),

  /* ---- c-tipos-fundos ---------------------------------------------------------- */
  q('q-tpf-01', {
    c: 'c-tipos-fundos', tipo: 'multipla_escolha', dif: 'media',
    hab: 'Identificar a classe sem compromisso de concentração',
    e: 'Qual classe de fundo NÃO possui compromisso de concentração mínima em determinado tipo de ativo?',
    alt: [
      ['Multimercado.', true, 'Correta. É justamente a classe sem esse compromisso.'],
      ['Renda fixa.', false, 'Precisa concentrar a maior parte da carteira em ativos de renda fixa.'],
      ['Ações.', false, 'Precisa manter percentual mínimo elevado em ações.'],
      ['Cambial.', false, 'Precisa concentrar em ativos ligados à variação de moeda estrangeira.'],
    ],
    exp: 'É por isso que a classe multimercado, sozinha, não diz nada sobre o risco do fundo.',
    tags: ['fundos', 'classificacao', 'multipla-escolha'],
  }),
  q('q-tpf-02', {
    c: 'c-tipos-fundos', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Recusar inferência de risco a partir da classe',
    ctx: 'Um cliente pergunta se um fundo multimercado é conservador, já que "não é fundo de ações".',
    e: 'A resposta tecnicamente correta é:',
    alt: [
      ['A classe não responde: há multimercados próximos do CDI e outros alavancados. A resposta está no regulamento, na política de investimento e no histórico de volatilidade.', true, 'Correta. A classe é piso de composição, não retrato de risco.'],
      ['Sim, multimercados são por definição moderados.', false, 'Não há definição regulatória que associe a classe a risco moderado.'],
      ['Não, multimercados são sempre mais arriscados que fundos de ações.', false, 'Também não é verdade: alguns operam com risco muito baixo.'],
      ['Depende exclusivamente da taxa de administração cobrada.', false, 'Taxa não é indicador de risco da estratégia.'],
    ],
    exp: 'Dois multimercados podem ter volatilidades que diferem em uma ordem de grandeza sob a mesma classe.',
    tags: ['fundos', 'multimercado', 'suitability'],
  }),
  q('q-tpf-03', {
    c: 'c-tipos-fundos', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer o compromisso de um fundo de ações',
    e: 'Em um ano de forte queda da bolsa, um fundo classificado como ações:',
    alt: [
      ['Permanece obrigado a manter o percentual mínimo em ações previsto para a classe.', true, 'Correta. O compromisso de concentração o impede de migrar tudo para renda fixa.'],
      ['Pode migrar integralmente para renda fixa para proteger o cotista.', false, 'Isso descumpriria o compromisso da classe.'],
      ['Converte-se automaticamente em multimercado.', false, 'Não há conversão automática de classe.'],
      ['Fica autorizado a suspender resgates até a recuperação do mercado.', false, 'Suspensão de resgate é medida excepcional e não decorre da queda de mercado.'],
    ],
    exp: 'O cotista de fundo de ações comprou exposição a ações. É isso que a classe garante, para o bem e para o mal.',
    tags: ['fundos', 'acoes', 'conceitual'],
  }),

  /* ---- c-cvm175-classes --------------------------------------------------------- */
  q('q-175-01', {
    c: 'c-cvm175-classes', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar a responsabilidade limitada do cotista',
    e: 'A responsabilidade limitada do cotista, no regime da Resolução CVM 175:',
    alt: [
      ['Depende de previsão expressa no regulamento do fundo.', true, 'Correta. Sem previsão, o cotista pode ser chamado a cobrir patrimônio negativo.'],
      ['Aplica-se automaticamente a todos os fundos.', false, 'Ela é opcional e precisa constar do regulamento.'],
      ['Vale apenas para investidores qualificados.', false, 'A previsão não é restrita por categoria de investidor.'],
      ['Elimina o risco de perda do valor investido.', false, 'Ela limita a perda AO valor investido; não impede perdê-lo.'],
    ],
    exp: 'A verificação no regulamento é obrigatória antes de recomendar fundo com uso relevante de derivativos.',
    tags: ['cvm175', 'responsabilidade-limitada', 'conceitual'],
  }),
  q('q-175-02', {
    c: 'c-cvm175-classes', tipo: 'comparacao', dif: 'dificil',
    hab: 'Distinguir classe de subclasse',
    e: 'A diferença entre CLASSE e SUBCLASSE, no regime da Resolução CVM 175, é que a classe:',
    alt: [
      ['Tem patrimônio segregado e política de investimento própria, enquanto a subclasse compartilha a carteira e se diferencia por taxas e público-alvo.', true, 'Correta. Classe segrega patrimônio; subclasse segrega condições comerciais.'],
      ['Compartilha a carteira, enquanto a subclasse tem patrimônio segregado.', false, 'As definições estão invertidas.'],
      ['É destinada a investidores profissionais e a subclasse ao varejo.', false, 'A distinção não é por público, e sim por segregação patrimonial.'],
      ['Só existe em fundos fechados.', false, 'A estrutura de classes não depende da forma de constituição.'],
    ],
    exp: 'A segregação entre classes é oponível a terceiros — não é apenas separação contábil.',
    tags: ['cvm175', 'classes', 'comparacao'],
  }),
  q('q-175-03', {
    c: 'c-cvm175-classes', tipo: 'aplicacao', dif: 'media',
    hab: 'Aplicar o efeito da segregação entre classes',
    ctx: 'Um fundo possui duas classes: uma conservadora e outra alavancada. A classe alavancada sofre perda superior ao seu patrimônio.',
    e: 'O efeito sobre a classe conservadora é:',
    alt: [
      ['Nenhum, pois os patrimônios das classes são segregados entre si.', true, 'Correta. O passivo de uma classe não contamina a outra.'],
      ['Perda proporcional, dividida entre todas as classes do fundo.', false, 'A segregação existe justamente para impedir isso.'],
      ['Suspensão automática dos resgates de todas as classes.', false, 'Não há efeito automático sobre as demais classes.'],
      ['Chamada de capital aos cotistas da classe conservadora.', false, 'Eles não respondem pelo passivo de outra classe.'],
    ],
    exp: 'A segregação é o que permite concentrar estratégias distintas num único veículo sem misturar riscos.',
    tags: ['cvm175', 'segregacao', 'aplicacao'],
  }),

  /* ---- c-taxas-fundos-175 --------------------------------------------------------- */
  q('q-txf-01', {
    c: 'c-taxas-fundos-175', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar a taxa de performance',
    e: 'A taxa de performance de um fundo é devida:',
    alt: [
      ['Apenas sobre a parcela que exceder o referencial previamente definido.', true, 'Correta. E a linha de água impede cobrança repetida sobre o mesmo ganho.'],
      ['Sempre que o fundo apresentar rentabilidade positiva.', false, 'Rentabilidade positiva abaixo do referencial não gera performance.'],
      ['Mensalmente, sobre o patrimônio líquido do fundo.', false, 'Isso descreve a lógica da taxa de administração.'],
      ['No resgate, sobre o valor resgatado.', false, 'Isso descreve a taxa de saída.'],
    ],
    exp: 'A taxa de performance dá ao gestor retorno assimétrico — participa do ganho, não da perda. A linha de água mitiga parte disso.',
    tags: ['fundos', 'taxa-performance', 'conceitual'],
  }),
  q('q-txf-02', {
    c: 'c-taxas-fundos-175', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer que a rentabilidade divulgada já é líquida de administração',
    e: 'A rentabilidade divulgada por um fundo de investimento:',
    alt: [
      ['Já está líquida da taxa de administração, mas não do imposto de renda.', true, 'Correta. A administração é provisionada diariamente no valor da cota.'],
      ['É bruta, devendo o cotista descontar a taxa de administração.', false, 'A taxa já está refletida na cota divulgada.'],
      ['Já está líquida de administração e de imposto de renda.', false, 'O imposto incide no resgate ou nos eventos previstos, e não está na cota.'],
      ['Não considera nenhuma taxa nem tributo.', false, 'A administração está considerada.'],
    ],
    exp: 'É uma pegadinha frequente: a taxa já saiu; o imposto ainda não.',
    tags: ['fundos', 'taxa-administracao', 'conceitual'],
  }),
  q('q-txf-03', {
    c: 'c-taxas-fundos-175', tipo: 'conceitual', dif: 'dificil',
    hab: 'Explicar a função da taxa de saída',
    e: 'Além de gerar receita, a taxa de saída cumpre a função de:',
    alt: [
      ['Desestimular resgates que obrigariam o gestor a vender ativos em momento ruim, protegendo os cotistas que permanecem.', true, 'Correta. Transfere ao resgatante parte do custo que ele impõe aos demais.'],
      ['Compensar o cotista que resgata pela perda de rentabilidade futura.', false, 'A taxa é cobrada de quem sai, e não paga a ele.'],
      ['Substituir a taxa de administração em fundos fechados.', false, 'São cobranças com naturezas e momentos diferentes.'],
      ['Garantir a liquidez dos ativos da carteira.', false, 'Ela não altera a liquidez dos ativos; apenas desestimula o resgate.'],
    ],
    exp: 'É a mesma lógica das taxas antidiluição: quem gera o custo paga por ele, em vez de repassá-lo a quem fica.',
    tags: ['fundos', 'taxa-saida', 'conceitual'],
  }),

  /* ---- c-fundos-abertos-fechados ---------------------------------------------------- */
  q('q-afc-01', {
    c: 'c-fundos-abertos-fechados', tipo: 'calculo', dif: 'media',
    hab: 'Somar prazos de cotização e liquidação',
    ctx: 'Um fundo tem cotização em D+30 e liquidação em D+1.',
    e: 'Solicitando o resgate hoje, o cotista recebe o recurso em:',
    alt: [
      ['D+31.', true, 'Correta. A cota é apurada em D+30 e o crédito ocorre um dia útil depois.'],
      ['D+30.', false, 'Essa é apenas a data de apuração da cota, não a do crédito.'],
      ['D+1.', false, 'Esse é apenas o prazo de liquidação, contado a partir da cotização.'],
      ['D+29.', false, 'Não há como o prazo total ser menor que a cotização.'],
    ],
    exp: 'Cotização e liquidação são prazos distintos e SOMAM. É onde o candidato erra por aritmética, não por desconhecimento.',
    tags: ['fundos', 'cotizacao', 'calculo'],
  }),
  q('q-afc-02', {
    c: 'c-fundos-abertos-fechados', tipo: 'comparacao', dif: 'facil',
    hab: 'Distinguir fundo aberto de fechado',
    e: 'A diferença essencial entre fundo aberto e fundo fechado é que o fechado:',
    alt: [
      ['Não admite resgate, sendo a saída feita pela venda da cota no mercado secundário.', true, 'Correta. As cotas só são resgatadas no encerramento.'],
      ['Não admite novas aplicações após a constituição.', false, 'Pode haver novas emissões; a característica definidora é a ausência de resgate.'],
      ['É destinado exclusivamente a investidores profissionais.', false, 'A forma de constituição não define o público-alvo.'],
      ['Tem obrigatoriamente prazo determinado de um ano.', false, 'Não há prazo padrão associado à forma fechada.'],
    ],
    exp: 'Fundo fechado transfere a volatilidade para o preço da cota no secundário, que pode divergir do valor patrimonial.',
    tags: ['fundos', 'aberto-fechado', 'comparacao'],
  }),
  q('q-afc-03', {
    c: 'c-fundos-abertos-fechados', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Rejeitar produto por incompatibilidade de prazo',
    ctx: 'Um cliente precisa do dinheiro em duas semanas e recebe a sugestão de um multimercado com excelente histórico e resgate em D+30.',
    e: 'A orientação correta é:',
    alt: [
      ['Recusar o produto por incompatibilidade de prazo: ele não entrega o recurso na data necessária, e o histórico é irrelevante para essa decisão.', true, 'Correta. É erro de prazo, e nenhum retorno compensa não ter o dinheiro quando ele é preciso.'],
      ['Aceitar, pois o histórico compensa a espera adicional.', false, 'Histórico não muda a data em que o recurso fica disponível.'],
      ['Aceitar e solicitar ao administrador antecipação do resgate.', false, 'O prazo consta do regulamento e não é negociável caso a caso.'],
      ['Dividir a aplicação entre esse fundo e um de liquidez diária.', false, 'A parcela no fundo de D+30 continuaria indisponível na data necessária.'],
    ],
    exp: 'Compatibilidade de prazo é filtro anterior à análise de retorno, não posterior.',
    tags: ['fundos', 'liquidez', 'atendimento'],
  }),
  q('q-afc-04', {
    c: 'c-fundos-abertos-fechados', tipo: 'conceitual', dif: 'dificil',
    hab: 'Reconhecer o risco de descasamento de liquidez',
    e: 'Um fundo que oferece resgate em prazo muito curto com carteira composta por ativos ilíquidos apresenta:',
    alt: [
      ['Descasamento de liquidez: resgates em estresse forçam venda com deságio, prejudicando quem permanece e alimentando novos resgates.', true, 'Correta. É a origem de quebras que não decorrem de má gestão de crédito.'],
      ['Risco de crédito elevado, mas liquidez adequada.', false, 'O problema descrito é de liquidez, e não de crédito.'],
      ['Nenhum risco adicional, desde que o gestor seja experiente.', false, 'A experiência do gestor não cria liquidez onde ela não existe.'],
      ['Risco cambial, por conta da precificação dos ativos.', false, 'Nada no enunciado indica exposição a moeda estrangeira.'],
    ],
    exp: 'Ou a liquidez está na carteira, ou ela é fabricada às custas de quem fica. Não existe estrutura que elimine esse dilema.',
    tags: ['fundos', 'liquidez', 'risco'],
  }),
]
