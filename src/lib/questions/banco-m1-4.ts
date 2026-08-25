import { q } from './builder'

/**
 * Questões autorais — microtema 1.4 (Regulação e infraestrutura de mercado).
 *
 * O erro que este bloco precisa diagnosticar é sempre o mesmo: confundir as
 * TRÊS CAMADAS. Regulação estatal tem poder de polícia; autorregulação é
 * contrato entre privados; infraestrutura de mercado não regula ninguém —
 * registra, custodia e liquida. Os distratores atribuem à ANBIMA poderes da
 * CVM, à B3 função de título público e ao termo de compromisso efeito de
 * confissão, que são exatamente as três trocas que o candidato faz.
 */
export const BANCO_M1_4 = [
  /* ---- c-autorregulacao ---------------------------------------------- */
  q('q-ar-01', {
    c: 'c-autorregulacao', tipo: 'conceitual', dif: 'facil',
    hab: 'Identificar a natureza jurídica da ANBIMA',
    e: 'A ANBIMA, no exercício da autorregulação, caracteriza-se como:',
    alt: [
      ['Associação privada, cuja vinculação decorre de adesão voluntária aos seus Códigos.', true, 'Correta. A obrigação nasce do contrato de adesão, não da lei.'],
      ['Autarquia federal com poder de polícia sobre o mercado.', false, 'Essa é a natureza da CVM. A ANBIMA não é órgão público.'],
      ['Órgão do Banco Central responsável pela supervisão bancária.', false, 'A supervisão bancária é do próprio Banco Central; a ANBIMA é privada.'],
      ['Entidade pública de fiscalização de fundos de pensão.', false, 'Fundos de pensão são supervisionados pela PREVIC, que é autarquia.'],
    ],
    exp: 'A distinção fundamental do microtema: regulação estatal é poder de polícia; autorregulação é contrato entre privados.',
    tags: ['anbima', 'autorregulacao', 'conceitual'],
  }),
  q('q-ar-02', {
    c: 'c-autorregulacao', tipo: 'multipla_escolha', dif: 'media',
    hab: 'Reconhecer o rol de sanções da autorregulação',
    e: 'Entre as sanções que a ANBIMA pode aplicar a uma instituição aderente está:',
    alt: [
      ['Desligamento da associação.', true, 'Correta. Advertência, multa e desligamento são sanções de natureza contratual.'],
      ['Cassação do registro de funcionamento da instituição.', false, 'Cassar registro é competência do regulador estatal, não da autorregulação.'],
      ['Inabilitação do profissional para exercer cargo no mercado de valores mobiliários.', false, 'Inabilitação é sanção da CVM, prevista em lei.'],
      ['Prisão dos administradores responsáveis.', false, 'Nenhuma esfera administrativa aplica pena privativa de liberdade; isso é matéria penal.'],
    ],
    exp: 'A sanção contratual atinge a relação associativa. Registro, inabilitação e liberdade só a esfera estatal alcança.',
    tags: ['anbima', 'sancoes', 'autorregulacao'],
  }),
  q('q-ar-03', {
    c: 'c-autorregulacao', tipo: 'conceitual', dif: 'media',
    hab: 'Relacionar autorregulação e regulação estatal',
    e: 'A punição de uma conduta pela autorregulação da ANBIMA:',
    alt: [
      ['Não afasta a competência da CVM, que pode punir a mesma conduta de forma independente.', true, 'Correta. As esferas convivem, com fundamentos distintos.'],
      ['Extingue o processo administrativo sancionador na CVM.', false, 'A sanção contratual não interfere na competência estatal.'],
      ['Substitui a atuação da CVM sempre que a instituição for aderente.', false, 'A autorregulação complementa; nunca substitui.'],
      ['Depende de prévia autorização da CVM para produzir efeitos.', false, 'A sanção contratual decorre do próprio contrato de adesão.'],
    ],
    exp: 'Complementar não é substituir. A mesma conduta pode gerar multa na ANBIMA e inabilitação na CVM.',
    tags: ['anbima', 'cvm', 'competencias'],
  }),
  q('q-ar-04', {
    c: 'c-autorregulacao', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Identificar a origem de uma exigência de conduta',
    ctx: 'Um cliente reclama do volume de documentos e declarações exigidos antes de aplicar em um fundo simples.',
    e: 'A explicação tecnicamente correta sobre a origem dessa exigência é:',
    alt: [
      ['Boa parte decorre dos Códigos de autorregulação, que padronizam a informação que precisa chegar ao investidor antes da decisão.', true, 'Correta. A autorregulação exige padrão mais detalhado que a norma estatal.'],
      ['Trata-se de exigência interna do banco, sem base regulatória.', false, 'Há base — legal e autorregulatória — para a maior parte dessas exigências.'],
      ['Decorre exclusivamente de lei federal aprovada pelo Congresso.', false, 'Parte relevante vem de norma infralegal e de autorregulação, não de lei.'],
      ['É exigência da Receita Federal para fins tributários.', false, 'A documentação de suitability e de produto não tem finalidade tributária.'],
    ],
    exp: 'Saber a origem da exigência muda a conversa: não é burocracia do banco, é padrão de mercado voltado à decisão informada.',
    tags: ['anbima', 'distribuicao', 'atendimento'],
  }),
  q('q-ar-05', {
    c: 'c-autorregulacao', tipo: 'comparacao', dif: 'dificil',
    hab: 'Comparar alcance da regulação estatal e da autorregulação',
    e: 'Quanto ao ALCANCE, a diferença entre a regulação da CVM e a autorregulação da ANBIMA é que:',
    alt: [
      ['A norma da CVM obriga todo o mercado de valores mobiliários; os Códigos obrigam apenas os aderentes.', true, 'Correta. É a consequência direta da natureza de cada uma.'],
      ['Ambas obrigam todo o mercado, mudando apenas a gravidade das sanções.', false, 'Os Códigos não alcançam quem não aderiu.'],
      ['A ANBIMA obriga todo o mercado e a CVM apenas as companhias abertas.', false, 'Inverte completamente o alcance de cada uma.'],
      ['Nenhuma das duas é obrigatória: ambas são recomendações de boas práticas.', false, 'A norma da CVM é obrigatória e seu descumprimento gera sanção estatal.'],
    ],
    exp: 'Alcance limitado é o preço que a autorregulação paga pela agilidade de atualizar suas próprias regras.',
    tags: ['anbima', 'cvm', 'comparacao'],
  }),

  /* ---- c-registro-custodia -------------------------------------------- */
  q('q-rc-01', {
    c: 'c-registro-custodia', tipo: 'conceitual', dif: 'facil',
    hab: 'Identificar o sistema de registro dos títulos públicos',
    e: 'Os títulos públicos federais são registrados, custodiados e liquidados no:',
    alt: [
      ['SELIC, administrado pelo Banco Central.', true, 'Correta. O SELIC é específico para títulos públicos federais.'],
      ['B3, junto com os demais ativos de renda fixa.', false, 'A B3 concentra ativos privados, derivativos e renda variável.'],
      ['STR, sistema de transferência de reservas.', false, 'O STR transfere recursos entre contas de reservas; não custodia títulos.'],
      ['CVM, no registro de valores mobiliários.', false, 'A CVM registra emissões e participantes; não custodia ativos.'],
    ],
    exp: 'Regra prática: emitido pelo Tesouro vai ao SELIC; emitido por banco ou empresa vai à B3.',
    tags: ['selic', 'custodia', 'conceitual'],
  }),
  q('q-rc-02', {
    c: 'c-registro-custodia', tipo: 'aplicacao', dif: 'media',
    hab: 'Classificar ativos por sistema de registro',
    e: 'Um CDB emitido por um banco comercial é registrado em qual sistema?',
    alt: [
      ['B3.', true, 'Correta. Ativos privados de renda fixa são registrados na B3, que incorporou a antiga CETIP.'],
      ['SELIC.', false, 'O SELIC é reservado a títulos públicos federais.'],
      ['STR.', false, 'O STR liquida transferências de recursos entre bancos, não registra ativos.'],
      ['SPB, diretamente.', false, 'O SPB é o conjunto de sistemas; não é um registro específico de ativo.'],
    ],
    exp: 'O emissor decide o sistema: Tesouro → SELIC; banco ou empresa → B3.',
    tags: ['b3', 'cdb', 'custodia'],
  }),
  q('q-rc-03', {
    c: 'c-registro-custodia', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Explicar a proteção da custódia identificada',
    ctx: 'Um cliente pergunta o que acontece com o Tesouro Direto dele se o banco onde ele investe vier a quebrar.',
    e: 'A resposta tecnicamente correta é:',
    alt: [
      ['O título está registrado no SELIC em nome dele; basta transferir a custódia para outra instituição.', true, 'Correta. O banco é agente de custódia, não dono do título.'],
      ['O título é perdido, pois faz parte do patrimônio do banco liquidado.', false, 'O título é do investidor e não integra a massa do banco.'],
      ['O FGC cobre o valor até o limite por CPF e instituição.', false, 'O FGC cobre depósitos e alguns títulos privados. O título público não precisa dele.'],
      ['O Tesouro Nacional recompra o título com deságio.', false, 'Não há recompra com deságio por quebra do agente de custódia.'],
    ],
    exp: 'Aqui mora a diferença prática entre título público e CDB do mesmo banco: um é patrimônio do cliente; o outro é dívida do banco.',
    tags: ['selic', 'custodia', 'atendimento'],
  }),
  q('q-rc-04', {
    c: 'c-registro-custodia', tipo: 'conceitual', dif: 'media',
    hab: 'Explicar a função da contraparte central',
    e: 'A câmara de compensação (clearing) atua como contraparte central, o que significa que ela:',
    alt: [
      ['Se torna compradora de todo vendedor e vendedora de todo comprador, assumindo o risco de inadimplência.', true, 'Correta. É a novação que permite garantir a liquidação.'],
      ['Apenas registra as operações, sem assumir qualquer risco.', false, 'Registro é outra função; a contraparte central assume risco e exige garantias.'],
      ['Define o preço dos ativos negociados no pregão.', false, 'O preço é formado pelo encontro de ofertas, não pela câmara.'],
      ['Substitui a necessidade de custódia dos ativos.', false, 'São funções distintas e complementares.'],
    ],
    exp: 'Assumir o risco só é possível porque a câmara o pré-financia, exigindo margem de garantia dos participantes.',
    tags: ['clearing', 'contraparte-central', 'conceitual'],
  }),
  q('q-rc-05', {
    c: 'c-registro-custodia', tipo: 'conceitual', dif: 'media',
    hab: 'Descrever o princípio da entrega contra pagamento',
    e: 'O princípio da entrega contra pagamento (DVP) determina que:',
    alt: [
      ['A entrega do ativo e o pagamento ocorram de forma simultânea e condicionada entre si.', true, 'Correta. Ou as duas pernas liquidam, ou nenhuma liquida.'],
      ['O pagamento ocorra antes da entrega, para proteger o vendedor.', false, 'Isso deixaria o comprador exposto; o princípio existe para não favorecer nenhuma ponta.'],
      ['A entrega ocorra antes do pagamento, para proteger o comprador.', false, 'Isso deixaria o vendedor exposto, pelo mesmo motivo.'],
      ['A liquidação seja feita apenas ao fim do dia, por saldo líquido.', false, 'Isso descreve uma modalidade de liquidação, não o princípio de simultaneidade.'],
    ],
    exp: 'O DVP elimina o risco de principal: nenhuma parte entrega sem receber.',
    tags: ['dvp', 'liquidacao', 'conceitual'],
  }),

  /* ---- c-spb ----------------------------------------------------------- */
  q('q-spb-01', {
    c: 'c-spb', tipo: 'conceitual', dif: 'facil',
    hab: 'Identificar o operador do STR',
    e: 'O Sistema de Transferência de Reservas (STR) é operado pelo:',
    alt: [
      ['Banco Central do Brasil.', true, 'Correta. O STR liquida em tempo real entre contas de Reservas Bancárias.'],
      ['B3.', false, 'A B3 opera câmaras de compensação de ativos, não o STR.'],
      ['Tesouro Nacional.', false, 'O Tesouro emite títulos; não opera sistema de pagamentos.'],
      ['Conselho Monetário Nacional.', false, 'O CMN é órgão normativo e não opera sistemas.'],
    ],
    exp: 'O STR é o núcleo do SPB e fica com o Banco Central porque envolve contas de reservas bancárias.',
    tags: ['spb', 'str', 'bacen'],
  }),
  q('q-spb-02', {
    c: 'c-spb', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar a liquidação pelo STR',
    e: 'A liquidação de uma operação pelo STR é caracterizada como:',
    alt: [
      ['Em tempo real, irrevogável e incondicional.', true, 'Correta. Concluída a transferência, não há como desfazê-la unilateralmente.'],
      ['Diferida, com compensação de saldos ao fim do dia.', false, 'Isso descreve a liquidação líquida diferida, usada em outros sistemas.'],
      ['Condicionada à confirmação do beneficiário em até 24 horas.', false, 'Não há condição de confirmação posterior; a liquidação é definitiva.'],
      ['Reversível a pedido do banco de origem em até 30 minutos.', false, 'A irrevogabilidade é característica essencial do sistema.'],
    ],
    exp: '"Tempo real, irrevogável e incondicional" é a assinatura do STR nos enunciados de prova.',
    tags: ['str', 'liquidacao', 'conceitual'],
  }),
  q('q-spb-03', {
    c: 'c-spb', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar o objetivo central do SPB',
    e: 'O objetivo central do desenho do Sistema de Pagamentos Brasileiro é:',
    alt: [
      ['Conter o risco sistêmico, evitando que a falha de um participante contamine os demais.', true, 'Correta. Toda a arquitetura foi desenhada contra o efeito dominó.'],
      ['Maximizar a rentabilidade das instituições participantes.', false, 'Rentabilidade não é objetivo de infraestrutura de pagamentos.'],
      ['Substituir o dinheiro em espécie na economia.', false, 'A redução do uso de espécie é consequência possível, não objetivo do desenho.'],
      ['Fiscalizar a conduta dos agentes do mercado de capitais.', false, 'Fiscalização de conduta é competência da CVM, não função do SPB.'],
    ],
    exp: 'Risco sistêmico é a palavra-chave do tema: o SPB existe para que uma quebra não vire uma crise.',
    tags: ['spb', 'risco-sistemico', 'conceitual'],
  }),
  q('q-spb-04', {
    c: 'c-spb', tipo: 'comparacao', dif: 'dificil',
    hab: 'Comparar liquidação bruta e líquida',
    e: 'Em relação à liquidação líquida diferida, a liquidação bruta em tempo real:',
    alt: [
      ['Elimina o risco de crédito intradiário, mas exige mais liquidez de cada participante.', true, 'Correta. É o trade-off clássico entre risco e liquidez.'],
      ['Exige menos liquidez, pois compensa os saldos antes de liquidar.', false, 'Quem compensa saldos é a modalidade líquida diferida.'],
      ['Acumula exposição ao longo do dia até o fechamento.', false, 'A acumulação de exposição é característica da liquidação diferida.'],
      ['É mais lenta, por processar as operações em lote.', false, 'Processar em lote é característica da modalidade diferida.'],
    ],
    exp: 'Liquidar uma a uma na hora elimina exposição acumulada — e cobra caixa disponível a cada operação.',
    tags: ['spb', 'liquidacao', 'comparacao'],
  }),
  q('q-spb-05', {
    c: 'c-spb', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Explicar diferenças de prazo entre meios de pagamento',
    ctx: 'Um cliente pergunta por que a TED chega na hora enquanto o cheque leva dias para ser compensado.',
    e: 'A explicação correta é:',
    alt: [
      ['A TED liquida pelo STR, operação a operação em tempo real; o cheque passa por compensação, que agrupa lançamentos e liquida saldos em lote.', true, 'Correta. São arquiteturas distintas dentro do mesmo SPB.'],
      ['O cheque é um meio de pagamento não regulado, por isso demora.', false, 'O cheque é regulado e integra o sistema de compensação.'],
      ['A TED é mais cara e por isso tem prioridade de processamento.', false, 'A diferença é de arquitetura de liquidação, não de tarifa.'],
      ['O cheque depende de autorização prévia do Banco Central caso a caso.', false, 'Não há autorização individual; o processamento é automatizado em lote.'],
    ],
    exp: 'Bruto e imediato de um lado; líquido e diferido do outro. A escolha da arquitetura explica o prazo.',
    tags: ['spb', 'str', 'atendimento'],
  }),

  /* ---- c-sancionador --------------------------------------------------- */
  q('q-sa-01', {
    c: 'c-sancionador', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar o termo de compromisso',
    e: 'A celebração de termo de compromisso perante a CVM implica:',
    alt: [
      ['Suspensão do processo administrativo, sem confissão de culpa nem reconhecimento de ilicitude.', true, 'Correta. É solução negociada, não condenação.'],
      ['Confissão de culpa, com registro nos assentamentos do acusado.', false, 'A ausência de confissão é condição essencial do instrumento.'],
      ['Extinção automática de eventual responsabilização penal.', false, 'As esferas administrativa e penal são independentes.'],
      ['Conversão automática da penalidade prevista em simples advertência.', false, 'O termo não converte pena: ele suspende o processo.'],
    ],
    exp: 'Se houvesse confissão, ela seria prova nas esferas civil e penal — e ninguém celebraria o acordo.',
    tags: ['cvm', 'termo-compromisso', 'sancionador'],
  }),
  q('q-sa-02', {
    c: 'c-sancionador', tipo: 'multipla_escolha', dif: 'media',
    hab: 'Reconhecer as penalidades aplicáveis pela CVM',
    e: 'Entre as penalidades que a CVM pode aplicar em processo administrativo sancionador está:',
    alt: [
      ['Inabilitação temporária para o exercício de cargo em instituições do mercado.', true, 'Correta. É a sanção que, na prática, retira o profissional do mercado.'],
      ['Pena privativa de liberdade.', false, 'Prisão é matéria penal, decidida pelo Judiciário.'],
      ['Desligamento da associação de classe.', false, 'Desligamento é sanção da autorregulação, não da CVM.'],
      ['Elevação da alíquota de imposto de renda do infrator.', false, 'Tributação não é instrumento sancionador da CVM.'],
    ],
    exp: 'A escala vai de advertência a cassação de registro. Prisão e desligamento associativo pertencem a outras esferas.',
    tags: ['cvm', 'sancoes', 'sancionador'],
  }),
  q('q-sa-03', {
    c: 'c-sancionador', tipo: 'conceitual', dif: 'media',
    hab: 'Relacionar as três esferas de responsabilização',
    e: 'A punição administrativa aplicada pela CVM a um profissional:',
    alt: [
      ['É independente de eventual responsabilização civil e penal pelo mesmo fato.', true, 'Correta. As três esferas correm de forma autônoma.'],
      ['Impede que o prejudicado busque reparação no Judiciário.', false, 'A reparação civil é direito do prejudicado e não é afastada pela sanção administrativa.'],
      ['Substitui a ação penal quando a conduta é tipificada como crime.', false, 'A esfera penal é autônoma e conduzida pelo Ministério Público.'],
      ['Só pode ser aplicada após decisão judicial transitada em julgado.', false, 'O processo administrativo não depende de decisão judicial prévia.'],
    ],
    exp: 'Um mesmo fato pode gerar multa na CVM, ação de reparação e ação criminal — sem que uma exclua a outra.',
    tags: ['cvm', 'esferas', 'sancionador'],
  }),
  q('q-sa-04', {
    c: 'c-sancionador', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Avaliar o risco pessoal de descumprir dever de conduta',
    ctx: 'Um profissional é pressionado a recomendar um produto incompatível com o perfil do cliente para bater meta comercial.',
    e: 'Sobre o risco pessoal que ele assume, é correto afirmar:',
    alt: [
      ['Pode responder na esfera administrativa e sofrer inabilitação temporária, independentemente de o cliente ter tido prejuízo.', true, 'Correta. A infração está na conduta, não no resultado financeiro.'],
      ['Só há risco se o cliente registrar reclamação e comprovar prejuízo.', false, 'A apuração não depende de reclamação nem de prejuízo consumado.'],
      ['A responsabilidade é exclusivamente da instituição, nunca do profissional.', false, 'A pessoa física responde pelos próprios atos, inclusive com inabilitação.'],
      ['Basta registrar a pressão comercial por escrito para afastar a responsabilidade.', false, 'Registrar é prudente, mas não legitima a recomendação inadequada.'],
    ],
    exp: 'A infração de conduta se consuma na recomendação inadequada. Prejuízo do cliente agrava, mas não é elemento necessário.',
    tags: ['cvm', 'suitability', 'conduta'],
  }),

  /* ---- c-transparencia-mercado ----------------------------------------- */
  q('q-tm-01', {
    c: 'c-transparencia-mercado', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar a divulgação de fato relevante',
    e: 'A divulgação de fato relevante deve ser feita de forma:',
    alt: [
      ['Pública e simultânea a todo o mercado.', true, 'Correta. Informar um grupo antes já configura a infração.'],
      ['Reservada aos acionistas controladores, que decidem quando divulgar.', false, 'Informação seletiva é exatamente o que a regra proíbe.'],
      ['Restrita aos analistas que acompanham a companhia.', false, 'Divulgação seletiva a analistas viola a simultaneidade.'],
      ['Posterior à conclusão dos negócios dos administradores.', false, 'Isso descreve uso de informação privilegiada.'],
    ],
    exp: 'O que a norma protege é a SIMULTANEIDADE. Divulgar depois de alguém já ter operado não corrige a infração.',
    tags: ['fato-relevante', 'transparencia', 'conceitual'],
  }),
  q('q-tm-02', {
    c: 'c-transparencia-mercado', tipo: 'aplicacao', dif: 'dificil',
    hab: 'Reconhecer quando cessa o sigilo excepcional',
    ctx: 'Uma companhia mantém em sigilo uma negociação em curso, para não inviabilizar o negócio.',
    e: 'O sigilo deve cessar imediatamente quando:',
    alt: [
      ['A informação escapar ao controle da companhia ou o preço passar a oscilar de forma atípica.', true, 'Correta. O sigilo protege o negócio enquanto a informação está contida.'],
      ['O conselho de administração aprovar formalmente a operação.', false, 'A aprovação interna, por si, não obriga a divulgação se o sigilo ainda se justifica.'],
      ['Transcorrerem trinta dias do início das tratativas.', false, 'Não há prazo fixo: o critério é o controle da informação.'],
      ['A CVM solicitar esclarecimentos por ofício.', false, 'O ofício pode acontecer, mas a obrigação de divulgar nasce antes, com o vazamento ou a oscilação.'],
    ],
    exp: 'A exceção existe para viabilizar o negócio, não para sustentar assimetria de informação no mercado.',
    tags: ['fato-relevante', 'sigilo', 'aplicacao'],
  }),
  q('q-tm-03', {
    c: 'c-transparencia-mercado', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Reagir a informação privilegiada trazida pelo cliente',
    ctx: 'Um cliente afirma ter sabido "por dentro" que uma companhia será adquirida e pede para concentrar o patrimônio nas ações dela.',
    e: 'A conduta adequada do profissional é:',
    alt: [
      ['Não operar com base nessa informação, esclarecer que o uso caracteriza ilícito e registrar a situação conforme os procedimentos da instituição.', true, 'Correta. Além de não operar, há dever de registro e de reporte interno.'],
      ['Executar a ordem, pois a responsabilidade pela informação é do cliente.', false, 'Operar com informação privilegiada envolve quem executa, não só quem informou.'],
      ['Recusar a ordem em silêncio, sem qualquer registro.', false, 'Recusar é necessário, mas insuficiente: a situação precisa ser reportada.'],
      ['Sugerir que ele opere por outra instituição para evitar o conflito.', false, 'Direcionar a operação para outro canal não afasta o ilícito e agrava a conduta.'],
    ],
    exp: 'A concentração já seria problema de suitability. O uso de informação não pública é problema de outra ordem, e envolve responsabilidade pessoal.',
    tags: ['informacao-privilegiada', 'conduta', 'atendimento'],
  }),
  q('q-tm-04', {
    c: 'c-transparencia-mercado', tipo: 'conceitual', dif: 'media',
    hab: 'Definir informação privilegiada',
    e: 'Considera-se informação privilegiada aquela que:',
    alt: [
      ['É relevante para a decisão de investir e ainda não foi divulgada ao mercado.', true, 'Correta. O que a caracteriza é a relevância somada à não divulgação.'],
      ['Consta das demonstrações financeiras publicadas no trimestre.', false, 'Informação já publicada é pública, por definição.'],
      ['É produzida por analistas independentes a partir de dados públicos.', false, 'Análise sobre dados públicos é trabalho legítimo, não informação privilegiada.'],
      ['Diz respeito à estratégia comercial de concorrentes da companhia.', false, 'O critério não é o assunto, e sim a relevância para o preço somada à não divulgação.'],
    ],
    exp: 'Dois elementos, sempre juntos: relevância para o preço e ausência de divulgação. Falta um deles, não há informação privilegiada.',
    tags: ['informacao-privilegiada', 'transparencia', 'conceitual'],
  }),
]
