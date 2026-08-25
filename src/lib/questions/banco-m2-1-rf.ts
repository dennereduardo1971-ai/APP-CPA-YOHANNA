import { q } from './builder'

/**
 * Questões autorais — microtema 2.1, bloco de renda fixa e crédito privado.
 *
 * Três perguntas resolvem a maior parte deste bloco, e o banco foi escrito
 * para treiná-las:
 *
 *   QUEM EMITE?   Banco tem FGC. Securitizadora e empresa, não.
 *   QUAL LASTRO?  Define o risco de crédito real por trás do papel.
 *   DE QUEM É O BENEFÍCIO FISCAL?  Nem todo incentivo chega ao investidor.
 *
 * Os distratores exploram a semelhança superficial entre produtos que a
 * prateleira coloca lado a lado: CRI ao lado de LCI (mesma isenção, garantia
 * diferente), Letra Financeira ao lado de CDB (mesmo emissor, sem FGC),
 * debênture de infraestrutura ao lado da incentivada (nomes quase iguais,
 * beneficiários opostos).
 */
export const BANCO_M2_1_RF = [
  /* ---- c-tesouro-direto -------------------------------------------------- */
  q('q-td-01', {
    c: 'c-tesouro-direto', tipo: 'conceitual', dif: 'facil',
    hab: 'Selecionar o título público adequado à reserva de emergência',
    e: 'Qual título do Tesouro Direto é o mais adequado para reserva de emergência?',
    alt: [
      ['Tesouro Selic.', true, 'Correta. É o de menor oscilação da família, e reserva é sacada sem escolher o momento.'],
      ['Tesouro Prefixado.', false, 'Oscila com os juros; sacar em alta de taxa realiza prejuízo.'],
      ['Tesouro IPCA+ com juros semestrais.', false, 'Também oscila, e o cupom não resolve a necessidade de liquidez estável.'],
      ['Tesouro Renda+.', false, 'É produto de acumulação para renda futura, com conversão em data contratada.'],
    ],
    exp: 'Reserva não escolhe o dia do saque. Por isso o critério é oscilação baixa, não taxa.',
    tags: ['tesouro-direto', 'reserva-emergencia', 'conceitual'],
  }),
  q('q-td-02', {
    c: 'c-tesouro-direto', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar o Tesouro Renda+ e o Educa+',
    e: 'O Tesouro Renda+ e o Tesouro Educa+ diferenciam-se dos demais títulos porque:',
    alt: [
      ['Após a data de conversão, pagam o resgate em parcelas mensais corrigidas pela inflação.', true, 'Correta. São produtos de objetivo: renda na aposentadoria e custeio da faculdade.'],
      ['Garantem rentabilidade fixa superior à dos demais títulos.', false, 'Não há promessa de rentabilidade superior; muda o formato de pagamento.'],
      ['São isentos de imposto de renda para pessoa física.', false, 'A tributação segue a regra dos demais títulos públicos.'],
      ['Não sofrem marcação a mercado em nenhum momento.', false, 'Durante a acumulação eles oscilam como qualquer título longo.'],
    ],
    exp: 'A inovação está na ESTRUTURA DE PAGAMENTO, não na remuneração: eles convertem montante em renda periódica.',
    tags: ['tesouro-direto', 'renda-mais', 'conceitual'],
  }),
  q('q-td-03', {
    c: 'c-tesouro-direto', tipo: 'aplicacao', dif: 'media',
    hab: 'Avaliar o efeito do cupom semestral na acumulação',
    e: 'Para um investidor em fase de acumulação de longo prazo, o título COM juros semestrais é, em relação ao equivalente sem cupom:',
    alt: [
      ['Menos indicado, pois o cupom é tributado na saída e precisa ser reinvestido à taxa vigente naquele momento.', true, 'Correta. O título sem cupom capitaliza internamente até o vencimento.'],
      ['Mais indicado, pois antecipa parte do rendimento.', false, 'Antecipar rendimento é vantagem para quem precisa de renda, não para quem acumula.'],
      ['Equivalente, pois a rentabilidade total é a mesma.', false, 'Tributação na fonte e risco de reinvestimento tornam os resultados diferentes.'],
      ['Mais indicado, por reduzir a marcação a mercado.', false, 'O cupom reduz a duration, mas o ponto relevante aqui é a acumulação.'],
    ],
    exp: 'Cupom serve a quem precisa de renda. Quem acumula prefere que o dinheiro fique rendendo dentro do título.',
    tags: ['tesouro-direto', 'cupom', 'aplicacao'],
  }),
  q('q-td-04', {
    c: 'c-tesouro-direto', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Recomendar título para objetivo com data definida',
    ctx: 'Um cliente quer garantir o custeio da faculdade da filha, que começa em oito anos e dura cinco.',
    e: 'O título mais aderente a esse objetivo é:',
    alt: [
      ['Tesouro Educa+, que acumula até a data e depois paga em parcelas mensais durante o período do curso.', true, 'Correta. Resolve a proteção contra inflação e o formato de desembolso.'],
      ['Tesouro Selic, pela liquidez diária.', false, 'Liquidez não é o problema: o objetivo tem data e prazo definidos.'],
      ['Tesouro Prefixado de oito anos.', false, 'Trava taxa nominal, mas não protege da inflação nem parcela o desembolso.'],
      ['Tesouro Renda+, por ter horizonte longo.', false, 'O Renda+ é desenhado para aposentadoria, com pagamento por vinte anos.'],
    ],
    exp: 'Objetivo com data e com desembolso parcelado pede produto que resolva as duas coisas.',
    tags: ['tesouro-direto', 'objetivos', 'atendimento'],
  }),

  /* ---- c-cdb-rdb-lf -------------------------------------------------------- */
  q('q-clf-01', {
    c: 'c-cdb-rdb-lf', tipo: 'multipla_escolha', dif: 'media',
    hab: 'Identificar o produto sem cobertura do FGC',
    e: 'Qual destes produtos NÃO conta com cobertura do FGC?',
    alt: [
      ['Letra Financeira.', true, 'Correta. É instrumento de captação de longo prazo, expressamente fora da cobertura.'],
      ['CDB.', false, 'É depósito a prazo de instituição financeira e tem cobertura.'],
      ['RDB.', false, 'Também é depósito a prazo e tem cobertura, apesar de ser intransferível.'],
      ['Caderneta de poupança.', false, 'A poupança é coberta pelo FGC.'],
    ],
    exp: 'A ausência de FGC na LF não é lacuna: é o desenho do instrumento, que existe para dar funding longo ao banco.',
    tags: ['letra-financeira', 'fgc', 'multipla-escolha'],
  }),
  q('q-clf-02', {
    c: 'c-cdb-rdb-lf', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir CDB de RDB',
    e: 'A principal diferença entre CDB e RDB é que o RDB:',
    alt: [
      ['É intransferível e, em regra, não admite resgate antecipado.', true, 'Correta. Ambos têm FGC; o que muda é a negociabilidade.'],
      ['Não conta com cobertura do FGC.', false, 'O RDB é coberto, como o CDB.'],
      ['É emitido por securitizadora, e não por banco.', false, 'Ambos são emitidos por instituição financeira.'],
      ['É isento de imposto de renda para pessoa física.', false, 'Nenhum dos dois é isento.'],
    ],
    exp: 'Três perguntas separam a família: dá para transferir? tem FGC? dá para sacar antes?',
    tags: ['cdb', 'rdb', 'comparacao'],
  }),
  q('q-clf-03', {
    c: 'c-cdb-rdb-lf', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Explicar o que a taxa maior de uma LF está pagando',
    ctx: 'Um cliente conservador recebe oferta de Letra Financeira do mesmo banco em que tem CDB, com taxa superior.',
    e: 'A informação essencial a ser prestada é que, em relação ao CDB, a LF:',
    alt: [
      ['Não tem cobertura do FGC e não admite resgate antecipado — é isso que a taxa maior está pagando.', true, 'Correta. São duas diferenças estruturais, não um detalhe de rendimento.'],
      ['Tem o mesmo risco, mudando apenas o prazo de aplicação.', false, 'A ausência de FGC muda o risco de forma relevante.'],
      ['É isenta de imposto de renda, o que explica a taxa maior.', false, 'A LF não é isenta; a taxa maior vem do risco e da iliquidez.'],
      ['Pode ser resgatada a qualquer momento, com perda de rentabilidade.', false, 'A LF veda o resgate antecipado.'],
    ],
    exp: 'Taxa maior num depósito a prazo é sempre paga com prazo, liquidez ou garantia. Aqui são as duas últimas.',
    tags: ['letra-financeira', 'fgc', 'atendimento'],
  }),
  q('q-clf-04', {
    c: 'c-cdb-rdb-lf', tipo: 'conceitual', dif: 'dificil',
    hab: 'Caracterizar a letra financeira subordinada',
    e: 'A Letra Financeira SUBORDINADA remunera mais que a comum porque:',
    alt: [
      ['Fica atrás dos demais credores na ordem de pagamento em caso de liquidação do emissor.', true, 'Correta. O investidor absorve perda antes dos depositantes comuns.'],
      ['Tem prazo de vencimento mais curto.', false, 'Prazo curto reduziria, e não aumentaria, a remuneração exigida.'],
      ['Conta com garantia real de ativos do banco.', false, 'É o oposto: ela não tem garantia e ainda recebe por último.'],
      ['É isenta de imposto de renda para pessoa física.', false, 'Não há isenção; o prêmio vem do risco assumido.'],
    ],
    exp: 'Sob certas condições ela compõe o capital regulatório do banco — o investidor financia o colchão de perdas da instituição.',
    tags: ['letra-financeira', 'subordinada', 'conceitual'],
  }),

  /* ---- c-lci-lca-lcd -------------------------------------------------------- */
  q('q-lci-01', {
    c: 'c-lci-lca-lcd', tipo: 'aplicacao', dif: 'media',
    hab: 'Comparar produto isento com produto tributado',
    ctx: 'Uma LCI paga 90% do CDI e um CDB do mesmo banco paga 100% do CDI, ambos para o mesmo prazo.',
    e: 'É correto concluir que:',
    alt: [
      ['A comparação só é possível depois de descontar o imposto de renda do CDB.', true, 'Correta. A LCI é isenta para PF, então seu bruto já é o líquido.'],
      ['O CDB é necessariamente mais vantajoso, por pagar taxa maior.', false, 'Comparar taxas brutas favorece sistematicamente o produto tributado.'],
      ['A LCI é sempre mais vantajosa, por ser isenta.', false, 'Depende do prazo e da alíquota aplicável; nem sempre a isenta vence.'],
      ['Os dois são equivalentes, por terem o mesmo emissor e prazo.', false, 'O tratamento tributário difere, e é ele que decide.'],
    ],
    exp: 'Isento contra tributado só se compara pelo líquido, e o líquido depende do prazo.',
    tags: ['lci', 'tributacao', 'aplicacao'],
  }),
  q('q-lci-02', {
    c: 'c-lci-lca-lcd', tipo: 'conceitual', dif: 'facil',
    hab: 'Identificar o lastro de cada letra',
    e: 'A LCA é obrigatoriamente lastreada em:',
    alt: [
      ['Créditos do agronegócio.', true, 'Correta. A LCI tem lastro imobiliário e a LCD, em financiamento ao desenvolvimento.'],
      ['Créditos imobiliários.', false, 'Esse é o lastro da LCI.'],
      ['Títulos públicos federais.', false, 'Título público não serve de lastro para letra de crédito.'],
      ['Recebíveis de cartão de crédito.', false, 'Não é lastro admitido para LCA.'],
    ],
    exp: 'A exigência de lastro é a contrapartida da isenção: o subsídio é setorial, não ao investidor.',
    tags: ['lca', 'lastro', 'conceitual'],
  }),
  q('q-lci-03', {
    c: 'c-lci-lca-lcd', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Reconhecer a carência como impedimento',
    ctx: 'Um cliente vai usar o dinheiro em quatro meses, numa viagem já marcada, e recebe oferta de LCI com taxa atrativa.',
    e: 'A orientação correta é:',
    alt: [
      ['Recusar a LCI e indicar produto com liquidez, pois a letra tem prazo mínimo de carência antes do resgate.', true, 'Correta. O problema não é a taxa: é a indisponibilidade na data necessária.'],
      ['Aceitar a LCI, já que a isenção compensa a espera.', false, 'Isenção não resolve a impossibilidade de resgatar na data do compromisso.'],
      ['Aceitar a LCI e resgatar antecipadamente com deságio.', false, 'A carência impede o resgate; não é questão de aceitar deságio.'],
      ['Aplicar metade em LCI e metade em produto líquido.', false, 'Metade do valor continuaria indisponível na data da viagem.'],
    ],
    exp: 'Objetivo com data curta elimina produtos com carência, por melhor que seja a taxa.',
    tags: ['lci', 'carencia', 'atendimento'],
  }),
  q('q-lci-04', {
    c: 'c-lci-lca-lcd', tipo: 'conceitual', dif: 'media',
    hab: 'Delimitar o alcance da isenção',
    e: 'A isenção de imposto de renda nas LCI, LCA e LCD aplica-se:',
    alt: [
      ['À pessoa física; a pessoa jurídica é tributada normalmente.', true, 'Correta. É um recorte por tipo de investidor.'],
      ['A qualquer investidor, pessoa física ou jurídica.', false, 'A isenção não alcança a pessoa jurídica.'],
      ['Apenas a investidores qualificados.', false, 'A isenção não depende de classificação do investidor.'],
      ['Somente a aplicações acima de doze meses.', false, 'A isenção não é condicionada a esse prazo.'],
    ],
    exp: 'O recorte é por titular. Confundir isso muda completamente a recomendação a um cliente PJ.',
    tags: ['lci', 'isencao', 'conceitual'],
  }),

  /* ---- c-cri-cra ------------------------------------------------------------ */
  q('q-cri-01', {
    c: 'c-cri-cra', tipo: 'conceitual', dif: 'media',
    hab: 'Explicar a ausência de FGC em CRI e CRA',
    e: 'Por que CRI e CRA não contam com cobertura do FGC?',
    alt: [
      ['Porque são emitidos por securitizadoras, que não são instituições financeiras.', true, 'Correta. O FGC cobre depósitos e títulos de instituições financeiras.'],
      ['Porque são isentos de imposto de renda.', false, 'A isenção não tem relação com a cobertura do FGC — LCI e LCA são isentas e cobertas.'],
      ['Porque têm prazo superior a cinco anos.', false, 'Prazo não é critério de cobertura.'],
      ['Porque são destinados apenas a investidores qualificados.', false, 'A distribuição no varejo é possível e a cobertura continua não existindo.'],
    ],
    exp: 'A regra prática que resolve o tema todo: emissor banco → FGC; emissor securitizadora ou empresa → sem FGC.',
    tags: ['cri', 'cra', 'fgc'],
  }),
  q('q-cri-02', {
    c: 'c-cri-cra', tipo: 'comparacao', dif: 'dificil',
    hab: 'Comparar CRI e LCI quanto a risco',
    e: 'Comparando um CRI e uma LCI, ambos isentos de IR para pessoa física, é correto afirmar que:',
    alt: [
      ['O CRI expõe o investidor ao risco de crédito do lastro, sem FGC, enquanto a LCI expõe ao risco do banco emissor, com FGC.', true, 'Correta. A isenção é igual; a garantia, não.'],
      ['Ambos têm o mesmo perfil de risco, por serem isentos e lastreados em crédito imobiliário.', false, 'A diferença de emissor e de garantia é justamente o ponto.'],
      ['A LCI é mais arriscada, por depender da saúde do banco.', false, 'O banco tem FGC; o lastro do CRI não tem cobertura alguma.'],
      ['O CRI é mais seguro, por ter regime fiduciário.', false, 'O regime fiduciário protege da insolvência da securitizadora, não do calote dos devedores.'],
    ],
    exp: 'A prateleira coloca os dois lado a lado por causa da isenção. O que os separa é a garantia.',
    tags: ['cri', 'lci', 'comparacao'],
  }),
  q('q-cri-03', {
    c: 'c-cri-cra', tipo: 'conceitual', dif: 'dificil',
    hab: 'Delimitar o alcance do regime fiduciário',
    e: 'O regime fiduciário aplicado a uma emissão de CRI protege o investidor:',
    alt: [
      ['Da insolvência da securitizadora, ao segregar o lastro de seu patrimônio — mas não do inadimplemento dos devedores do lastro.', true, 'Correta. São duas proteções distintas, e só uma existe.'],
      ['Do inadimplemento dos devedores do lastro.', false, 'Nenhum mecanismo do CRI cobre o calote do lastro.'],
      ['De perdas por marcação a mercado no mercado secundário.', false, 'O regime não interfere no preço de negociação.'],
      ['Até o limite de cobertura do FGC por CPF.', false, 'Não há FGC em CRI.'],
    ],
    exp: 'Segregação patrimonial e garantia de pagamento são coisas diferentes — e a confusão entre elas é o erro do tema.',
    tags: ['cri', 'regime-fiduciario', 'conceitual'],
  }),
  q('q-cri-04', {
    c: 'c-cri-cra', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Avaliar adequação de CRI a perfil conservador',
    ctx: 'Um cliente conservador, ainda sem reserva de emergência montada, recebe oferta de CRI com taxa bem acima da LCI, ambos isentos.',
    e: 'A conduta adequada é:',
    alt: [
      ['Explicar que a taxa maior remunera ausência de FGC, risco do lastro e liquidez fraca, e que o produto é inadequado antes de a reserva estar montada.', true, 'Correta. O produto pode até caber depois; agora, não.'],
      ['Recomendar o CRI, já que a isenção é a mesma e a taxa é maior.', false, 'A isenção é igual, mas o risco não — e ele não tem reserva.'],
      ['Recomendar dividir o valor entre CRI e LCI.', false, 'Diversificar não corrige a inadequação de alocar reserva em produto sem liquidez.'],
      ['Recomendar o CRI mediante assinatura de termo de ciência de risco.', false, 'Termo não torna adequado um produto incompatível com a situação do cliente.'],
    ],
    exp: 'É análise de crédito estruturado vendida com a linguagem de renda fixa bancária. A adequação vem antes da taxa.',
    tags: ['cri', 'suitability', 'atendimento'],
  }),

  /* ---- c-debentures --------------------------------------------------------- */
  q('q-deb-01', {
    c: 'c-debentures', tipo: 'conceitual', dif: 'dificil',
    hab: 'Identificar o beneficiário do incentivo fiscal',
    e: 'Na chamada debênture de infraestrutura, o benefício fiscal é atribuído:',
    alt: [
      ['À empresa emissora, e o investidor pessoa física é tributado normalmente.', true, 'Correta. É a diferença em relação à debênture incentivada.'],
      ['Ao investidor pessoa física, que fica isento.', false, 'Isso descreve a debênture INCENTIVADA, que é o outro regime.'],
      ['A ambos, de forma proporcional ao valor investido.', false, 'O benefício é de um lado só, e a escolha do regime define qual.'],
      ['Ao agente fiduciário da emissão.', false, 'O agente fiduciário representa os debenturistas e não recebe benefício fiscal.'],
    ],
    exp: 'Dois regimes com nomes quase iguais colocam o benefício em pessoas diferentes. Só um chega ao investidor.',
    tags: ['debentures', 'incentivo-fiscal', 'conceitual'],
  }),
  q('q-deb-02', {
    c: 'c-debentures', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Comparar debêntures de regimes diferentes',
    ctx: 'Um cliente pessoa física compara duas debêntures do mesmo projeto de energia: uma incentivada, com taxa menor, e uma de infraestrutura, com taxa maior.',
    e: 'A orientação correta é:',
    alt: [
      ['Comparar o rendimento líquido, pois na incentivada ele é isento e na de infraestrutura é tributado — a taxa maior pode perder depois do imposto.', true, 'Correta. A primeira pergunta é em qual regime cada papel foi emitido.'],
      ['Escolher a de infraestrutura, por ter a maior taxa anunciada.', false, 'Taxa bruta maior num papel tributado pode render menos que a menor num isento.'],
      ['Escolher a incentivada, pois isenção sempre vence.', false, 'Nem sempre: depende da diferença de taxa e do prazo.'],
      ['Considerar as duas equivalentes, por financiarem o mesmo projeto.', false, 'O projeto é o mesmo; o tratamento tributário do investidor, não.'],
    ],
    exp: 'Os dois papéis competem no mesmo balcão com nomes quase idênticos. Converter para líquido é obrigatório.',
    tags: ['debentures', 'comparacao', 'atendimento'],
  }),
  q('q-deb-03', {
    c: 'c-debentures', tipo: 'conceitual', dif: 'media',
    hab: 'Ordenar as garantias de uma debênture',
    e: 'Entre as espécies de garantia de debêntures, a que confere MAIOR proteção ao debenturista é a:',
    alt: [
      ['Garantia real, vinculada a um bem específico.', true, 'Correta. A ordem é real, flutuante, quirografária e subordinada.'],
      ['Garantia flutuante.', false, 'Dá privilégio geral sobre o ativo, mas sem bem determinado.'],
      ['Quirografária.', false, 'Não tem garantia: concorre com os demais credores.'],
      ['Subordinada.', false, 'Recebe depois de todos os credores, antes apenas dos acionistas.'],
    ],
    exp: 'Real, flutuante, quirografária, subordinada. A ordem é a mesma da fila de recebimento.',
    tags: ['debentures', 'garantias', 'conceitual'],
  }),
  q('q-deb-04', {
    c: 'c-debentures', tipo: 'conceitual', dif: 'facil',
    hab: 'Reconhecer a natureza do emissor e a ausência de FGC',
    e: 'Sobre a debênture, é correto afirmar que:',
    alt: [
      ['É título de dívida de sociedade por ações não financeira e não conta com cobertura do FGC.', true, 'Correta. O risco é o de crédito da companhia emissora.'],
      ['É emitida por instituição financeira e coberta pelo FGC.', false, 'Debênture não é emitida por instituição financeira.'],
      ['Confere ao titular participação no capital da emissora.', false, 'Isso descreve a ação; a debênture confere direito de crédito.'],
      ['Tem rentabilidade garantida pelo Tesouro Nacional.', false, 'Não há garantia pública sobre dívida corporativa.'],
    ],
    exp: 'Debenturista é credor, não sócio. E não há FGC sobre dívida de empresa.',
    tags: ['debentures', 'fgc', 'conceitual'],
  }),

  /* ---- c-coe ----------------------------------------------------------------- */
  q('q-coe-01', {
    c: 'c-coe', tipo: 'conceitual', dif: 'media',
    hab: 'Delimitar o alcance da proteção de capital no COE',
    e: 'Em um COE de valor nominal protegido, no pior cenário o investidor:',
    alt: [
      ['Recebe de volta o valor aplicado, sem qualquer correção.', true, 'Correta. A proteção é do valor NOMINAL, não do poder de compra.'],
      ['Recebe o valor aplicado corrigido pela inflação do período.', false, 'Não há correção: o custo de oportunidade e a inflação correm por conta do investidor.'],
      ['Recebe o valor aplicado acrescido do CDI do período.', false, 'O rendimento da parte de renda fixa é justamente o que financia a estrutura.'],
      ['Tem a perda coberta pelo FGC.', false, 'O COE não conta com cobertura do FGC.'],
    ],
    exp: 'Três anos no zero a zero devolvem o mesmo número — e um poder de compra menor.',
    tags: ['coe', 'capital-protegido', 'conceitual'],
  }),
  q('q-coe-02', {
    c: 'c-coe', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar o documento obrigatório do COE',
    e: 'O documento de entrega obrigatória ao investidor antes da aquisição de um COE, contendo os cenários de retorno, é o:',
    alt: [
      ['DIE — Documento de Informações Essenciais.', true, 'Correta. É nele que aparecem teto, participação e condições da estrutura.'],
      ['Prospecto de distribuição pública.', false, 'Prospecto é documento de oferta pública de valores mobiliários, não do COE.'],
      ['Termo de ciência de risco assinado pelo cliente.', false, 'O termo registra a ciência; não é o documento que descreve os cenários.'],
      ['Regulamento do fundo de investimento.', false, 'COE não é fundo e não tem regulamento.'],
    ],
    exp: 'DIE é a sigla que a prova cobra. É o documento onde o teto de ganho aparece.',
    tags: ['coe', 'die', 'conceitual'],
  }),
  q('q-coe-03', {
    c: 'c-coe', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Expor o custo real da proteção de capital',
    ctx: 'Um cliente conservador se interessa por um COE de capital protegido de três anos, atrelado a um índice de ações.',
    e: 'A informação essencial que precisa ser prestada é:',
    alt: [
      ['Se o índice cair, ele receberá de volta o mesmo valor nominal ao fim de três anos — período em que um pós-fixado teria rendido e a inflação teria corroído esse valor.', true, 'Correta. O custo da proteção é de oportunidade, e não aparece no extrato.'],
      ['Que o produto elimina o risco, por ter capital protegido.', false, 'Permanecem custo de oportunidade, inflação, risco do emissor e falta de liquidez.'],
      ['Que o COE conta com cobertura do FGC até o limite por CPF.', false, 'Não há cobertura do FGC em COE.'],
      ['Que o rendimento acompanha integralmente a alta do índice.', false, 'O ganho costuma ter teto ou participação parcial — é assim que a proteção se paga.'],
    ],
    exp: 'Proteger o número não é proteger o poder de compra. É a diferença que o cliente não enxerga sozinho.',
    tags: ['coe', 'custo-oportunidade', 'atendimento'],
  }),
  q('q-coe-04', {
    c: 'c-coe', tipo: 'aplicacao', dif: 'dificil',
    hab: 'Aplicar teto e participação a um cenário',
    ctx: 'Um COE de capital protegido oferece participação de 70% na alta de um índice, com teto de 30% de rentabilidade.',
    e: 'Se o índice subir 60% no período, o retorno do investidor será de:',
    alt: [
      ['30%, limitado pelo teto.', true, 'Correta. 70% de 60% dariam 42%, mas o teto corta em 30%.'],
      ['42%, correspondente à participação de 70%.', false, 'A participação levaria a 42%, mas o teto de 30% prevalece.'],
      ['60%, acompanhando integralmente o índice.', false, 'A estrutura não entrega a alta integral: há participação parcial e teto.'],
      ['70%, correspondente ao percentual de participação.', false, 'Os 70% são participação sobre a alta, não a rentabilidade.'],
    ],
    exp: 'Participação e teto atuam em sequência: primeiro reduz-se a alta, depois aplica-se o limite.',
    tags: ['coe', 'calculo', 'aplicacao'],
  }),

  /* ---- c-risco-credito -------------------------------------------------------- */
  q('q-rcr-01', {
    c: 'c-risco-credito', tipo: 'conceitual', dif: 'media',
    hab: 'Interpretar o spread de crédito',
    ctx: 'Um CDB de banco pequeno paga 120% do CDI enquanto o de um banco grande paga 100%.',
    e: 'Os 20 pontos de diferença representam:',
    alt: [
      ['O spread de crédito: o preço cobrado pelo mercado para assumir o risco maior do emissor.', true, 'Correta. Taxa acima do mercado é prêmio de risco, não oportunidade.'],
      ['Uma ineficiência de mercado que pode ser explorada.', false, 'A diferença é sistemática e reflete risco, não distorção.'],
      ['A diferença de tributação entre os dois emissores.', false, 'A tributação de CDB é a mesma, independentemente do porte do banco.'],
      ['O custo da cobertura do FGC repassado ao investidor.', false, 'A contribuição ao FGC é do banco e não explica a diferença de taxa.'],
    ],
    exp: 'A pergunta certa nunca é se a taxa compensa: é de qual risco ela é o preço.',
    tags: ['risco-credito', 'spread', 'conceitual'],
  }),
  q('q-rcr-02', {
    c: 'c-risco-credito', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir os três riscos da renda fixa',
    e: 'Um Tesouro Prefixado de longo prazo apresenta, principalmente:',
    alt: [
      ['Risco de mercado elevado e risco de crédito muito baixo.', true, 'Correta. O emissor é o Tesouro, mas o preço oscila bastante com os juros.'],
      ['Risco de crédito elevado e risco de mercado baixo.', false, 'Inverte os dois: o risco de crédito soberano em moeda local é o menor do país.'],
      ['Ausência de qualquer risco, por ser título público.', false, 'Título público tem risco de mercado, que se materializa na venda antecipada.'],
      ['Risco de liquidez elevado, por não haver recompra.', false, 'O Tesouro Direto oferece recompra, o que torna a liquidez adequada.'],
    ],
    exp: 'Os três riscos são independentes. Confundi-los produz a ideia de que "renda fixa não perde".',
    tags: ['risco-credito', 'risco-mercado', 'comparacao'],
  }),
  q('q-rcr-03', {
    c: 'c-risco-credito', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer as limitações do rating',
    e: 'Sobre a classificação de risco atribuída por agência de rating, é correto afirmar que:',
    alt: [
      ['É uma opinião sobre a capacidade de pagamento, sujeita a revisão, e não constitui garantia.', true, 'Correta. Ela é retrospectiva por construção e costuma se mover depois do preço de mercado.'],
      ['Garante o pagamento do título enquanto se mantiver em grau de investimento.', false, 'Rating não garante nada; apenas expressa uma avaliação.'],
      ['É atribuída pelo Banco Central às instituições financeiras.', false, 'Ratings são atribuídos por agências privadas.'],
      ['Substitui a análise de crédito do investidor.', false, 'É insumo da análise, não substituto dela.'],
    ],
    exp: 'Na prática, o spread negociado costuma antecipar o rebaixamento — o preço se move antes da nota.',
    tags: ['risco-credito', 'rating', 'conceitual'],
  }),
  q('q-rcr-04', {
    c: 'c-risco-credito', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Avaliar concentração de reserva em emissor de maior risco',
    ctx: 'Um cliente quer concentrar toda a reserva de emergência em um CDB de banco pequeno a 130% do CDI, argumentando que "tem FGC".',
    e: 'A orientação tecnicamente correta é:',
    alt: [
      ['O FGC cobre até um limite por CPF e por instituição, e o pagamento tem processo e prazo — não é liquidez imediata, que é justamente o que a reserva exige.', true, 'Correta. Para dinheiro que precisa estar disponível amanhã, prêmio de crédito é o risco a não assumir.'],
      ['A cobertura do FGC torna a operação equivalente a um título público.', false, 'A cobertura limita a perda, mas não entrega liquidez imediata.'],
      ['Basta manter o valor abaixo do limite de cobertura para não haver risco algum.', false, 'Mesmo dentro do limite, o acionamento do FGC leva tempo.'],
      ['O risco é irrelevante porque a taxa compensa.', false, 'Compensar risco não é critério válido para o dinheiro da reserva.'],
    ],
    exp: 'FGC limita a perda; não entrega o dinheiro na hora. Reserva precisa das duas coisas.',
    tags: ['risco-credito', 'fgc', 'reserva-emergencia'],
  }),
]
