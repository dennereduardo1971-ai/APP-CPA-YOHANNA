import { q } from './builder'

/**
 * Questões autorais — microtema 2.3 (Produtos de financiamento).
 *
 * A lógica se inverte em relação ao resto do macrotema 2: em aplicação, taxa
 * maior é melhor; em crédito, taxa maior é pior — e o número que decide não é
 * a taxa anunciada, é o CET. Boa parte dos distratores explora exatamente
 * essa inversão, oferecendo a proposta de menor taxa nominal como resposta
 * plausível quando a estrutura de tarifas a torna a mais cara.
 *
 * Nenhuma questão depende de teto de juros, margem consignável ou limite de
 * valor do SFH: são números de norma, revistos periodicamente.
 */
export const BANCO_M2_3 = [
  /* ---- c-credito-modalidades ------------------------------------------ */
  q('q-cm-01', {
    c: 'c-credito-modalidades', tipo: 'conceitual', dif: 'facil',
    hab: 'Explicar o que determina a taxa de cada modalidade',
    e: 'O que explica o crédito consignado ter taxa menor que o crédito pessoal?',
    alt: [
      ['A parcela é descontada diretamente da folha ou do benefício, o que reduz o risco de inadimplência.', true, 'Correta. Garantia melhor, risco menor, taxa menor — a regra vale para toda a ordem.'],
      ['O prazo do consignado é obrigatoriamente mais curto.', false, 'Prazo não é o determinante; consignado costuma ter prazos longos.'],
      ['O consignado é subsidiado com recursos públicos.', false, 'Não há subsídio: o que muda é a garantia do contrato.'],
      ['O valor emprestado no consignado é sempre menor.', false, 'O valor não determina a taxa; a garantia determina.'],
    ],
    exp: 'A taxa é preço de risco. Desconto em folha é a garantia mais eficaz do crédito pessoal.',
    tags: ['consignado', 'credito', 'conceitual'],
  }),
  q('q-cm-02', {
    c: 'c-credito-modalidades', tipo: 'comparacao', dif: 'media',
    hab: 'Ordenar modalidades de crédito por custo',
    e: 'Entre as modalidades abaixo, a que tipicamente apresenta o MAIOR custo para o tomador é:',
    alt: [
      ['Rotativo do cartão de crédito.', true, 'Correta. É concedido automaticamente a quem não paga a fatura integral, e a taxa reflete essa seleção.'],
      ['Crédito consignado.', false, 'É tipicamente o mais barato, por causa do desconto em folha.'],
      ['Financiamento imobiliário com alienação fiduciária.', false, 'Garantia real forte torna essa uma das menores taxas do varejo.'],
      ['Crédito pessoal com garantia de aplicação financeira.', false, 'A garantia reduz o risco e, com ele, a taxa.'],
    ],
    exp: 'A ordem de custo segue a qualidade da garantia. Crédito automático e sem garantia é sempre o mais caro.',
    tags: ['rotativo', 'credito', 'comparacao'],
  }),
  q('q-cm-03', {
    c: 'c-credito-modalidades', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Orientar a reestruturação de uma dívida cara',
    ctx: 'Um cliente aposentado carrega saldo no rotativo do cartão há vários meses e afirma que não consegue quitá-lo.',
    e: 'A orientação tecnicamente adequada é:',
    alt: [
      ['Avaliar a portabilidade da dívida para modalidade com garantia melhor, como o consignado, se houver margem, e interromper o uso do rotativo.', true, 'Correta. Trocar o contrato mais caro pelo mais barato disponível resolve a matemática do problema.'],
      ['Orientar apenas que ele pague o valor mínimo da fatura todo mês.', false, 'Pagar o mínimo mantém o saldo no rotativo, que é a modalidade mais cara.'],
      ['Sugerir que ele solicite aumento do limite do cartão.', false, 'Ampliar o limite não reduz o custo da dívida existente.'],
      ['Recomendar o uso do cheque especial para quitar a fatura.', false, 'Troca uma dívida cara por outra também cara, sem ganho relevante.'],
    ],
    exp: 'Não é questão de disciplina do cliente: é questão de qual contrato carrega a dívida.',
    tags: ['rotativo', 'consignado', 'atendimento'],
  }),
  q('q-cm-04', {
    c: 'c-credito-modalidades', tipo: 'conceitual', dif: 'dificil',
    hab: 'Explicar a seleção adversa no crédito rotativo',
    e: 'O elevado custo do rotativo do cartão de crédito decorre principalmente de:',
    alt: [
      ['Ser concedido automaticamente a quem deixa de pagar a fatura integral, concentrando tomadores em dificuldade.', true, 'Correta. O credor não escolhe a quem emprestar nem quando, e precifica essa seleção.'],
      ['Envolver prazo mais longo que as demais modalidades.', false, 'O rotativo é de curtíssimo prazo, o que não explica a taxa.'],
      ['Exigir garantia real de difícil execução.', false, 'O rotativo não tem garantia alguma.'],
      ['Ser destinado exclusivamente a pessoas jurídicas.', false, 'É modalidade típica do varejo de pessoa física.'],
    ],
    exp: 'É seleção adversa em estado puro — e foi ela, não o nível de juros, que motivou o limite normativo de encargos.',
    tags: ['rotativo', 'risco', 'conceitual'],
  }),

  /* ---- c-cet ------------------------------------------------------------ */
  q('q-cet-01', {
    c: 'c-cet', tipo: 'conceitual', dif: 'facil',
    hab: 'Identificar o que o CET incorpora',
    e: 'O Custo Efetivo Total (CET) de uma operação de crédito compreende:',
    alt: [
      ['Juros, tributos, tarifas, seguros e demais despesas da operação.', true, 'Correta. É por isso que o CET fica acima da taxa de juros anunciada.'],
      ['Apenas os juros contratados.', false, 'Se fosse só juros, ele seria idêntico à taxa e não teria utilidade.'],
      ['Juros e IOF, excluídas tarifas e seguros.', false, 'Tarifas e seguros integram o CET.'],
      ['O somatório das parcelas, sem conversão em taxa.', false, 'O CET é expresso em percentual anual, não em valor absoluto.'],
    ],
    exp: 'Todo custo da operação entra. É essa consolidação que torna as propostas comparáveis.',
    tags: ['cet', 'credito', 'conceitual'],
  }),
  q('q-cet-02', {
    c: 'c-cet', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Comparar propostas de crédito com estruturas diferentes',
    ctx: 'Duas propostas de crédito pessoal: a primeira com juros de 1,7% ao mês mais tarifa de cadastro e seguro prestamista; a segunda com 1,9% ao mês e sem cobranças adicionais.',
    e: 'A conduta correta do profissional é:',
    alt: [
      ['Solicitar e comparar o CET das duas propostas, pois a taxa isolada não permite concluir qual é mais barata.', true, 'Correta. O CET é informação obrigatória e resolve a comparação.'],
      ['Recomendar a primeira, por ter a menor taxa de juros.', false, 'Tarifa e seguro podem elevar o custo acima da segunda proposta.'],
      ['Recomendar a segunda, por não cobrar tarifas.', false, 'Sem o CET não é possível afirmar que ela é mais barata.'],
      ['Recomendar a de menor parcela mensal.', false, 'Parcela menor pode significar prazo maior e custo total maior.'],
    ],
    exp: 'Quando os componentes do preço se compensam entre si, comparar por um deles é sistematicamente enganoso.',
    tags: ['cet', 'comparacao', 'atendimento'],
  }),
  q('q-cet-03', {
    c: 'c-cet', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer a obrigatoriedade e a forma de expressão do CET',
    e: 'Quanto à informação do CET ao tomador, é correto afirmar que ele deve ser:',
    alt: [
      ['Informado antes da contratação e expresso em percentual anual.', true, 'Correta. Informar depois de contratado não cumpre a finalidade da norma.'],
      ['Informado apenas se o cliente solicitar expressamente.', false, 'A informação é obrigatória, independentemente de pedido.'],
      ['Expresso em percentual mensal, para facilitar a comparação com a taxa.', false, 'A padronização é anual, justamente para não depender do prazo escolhido.'],
      ['Informado no primeiro extrato após a liberação do recurso.', false, 'Depois da contratação a informação não serve à decisão.'],
    ],
    exp: 'Antes e ao ano. As duas exigências existem para que o número sirva à decisão e seja comparável.',
    tags: ['cet', 'transparencia', 'conceitual'],
  }),
  q('q-cet-04', {
    c: 'c-cet', tipo: 'conceitual', dif: 'dificil',
    hab: 'Relacionar CET e taxa interna de retorno',
    e: 'Do ponto de vista matemático, o CET corresponde à:',
    alt: [
      ['Taxa que iguala o valor presente do fluxo de pagamentos ao valor efetivamente liberado ao tomador.', true, 'Correta. É a TIR da operação sob a ótica do cliente.'],
      ['Soma aritmética da taxa de juros com as tarifas percentuais.', false, 'Somar componentes ignora o momento de cada pagamento.'],
      ['Média ponderada das taxas praticadas pelo mercado no período.', false, 'O CET é específico da operação contratada, não uma referência de mercado.'],
      ['Diferença entre o valor total pago e o valor emprestado, dividida pelo prazo.', false, 'Isso produziria uma taxa média simples, sem considerar valor presente.'],
    ],
    exp: 'Por ser uma TIR, o CET incorpora o MOMENTO de cada cobrança: tarifa paga na liberação pesa mais que a mesma tarifa diluída.',
    tags: ['cet', 'tir', 'conceitual'],
  }),

  /* ---- c-financiamento-imobiliario -------------------------------------- */
  q('q-fi-01', {
    c: 'c-financiamento-imobiliario', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar a alienação fiduciária de imóvel',
    e: 'Na alienação fiduciária de imóvel, enquanto a dívida não é quitada:',
    alt: [
      ['O credor detém a propriedade resolúvel e o devedor detém a posse do imóvel.', true, 'Correta. A propriedade se consolida no devedor automaticamente com a quitação.'],
      ['O devedor detém a propriedade plena e o credor apenas direito de preferência.', false, 'Isso descreveria uma garantia mais fraca, próxima da hipoteca.'],
      ['O imóvel fica indisponível e não pode ser habitado pelo devedor.', false, 'A posse é do devedor, que mora e usa o imóvel normalmente.'],
      ['A propriedade permanece com o vendedor original.', false, 'O vendedor sai da relação com a conclusão da compra e venda.'],
    ],
    exp: 'Propriedade resolúvel é a chave do instituto: ela existe apenas enquanto a dívida existir.',
    tags: ['alienacao-fiduciaria', 'imobiliario', 'conceitual'],
  }),
  q('q-fi-02', {
    c: 'c-financiamento-imobiliario', tipo: 'comparacao', dif: 'media',
    hab: 'Comparar alienação fiduciária e hipoteca',
    e: 'A principal vantagem da alienação fiduciária sobre a hipoteca, do ponto de vista do credor, é:',
    alt: [
      ['Permitir a retomada do bem por procedimento extrajudicial, muito mais rápido que a execução judicial.', true, 'Correta. Menor tempo de recuperação significa menor perda esperada e menor taxa.'],
      ['Dispensar o registro da garantia em cartório.', false, 'A alienação fiduciária também exige registro.'],
      ['Permitir a cobrança de taxa de juros ilimitada.', false, 'A garantia não altera regras de taxa; ela altera o risco.'],
      ['Transferir ao devedor a responsabilidade pelos tributos do imóvel.', false, 'A responsabilidade tributária não decorre do tipo de garantia.'],
    ],
    exp: 'É a celeridade da retomada que barateia o crédito imobiliário para todos os tomadores, inclusive os adimplentes.',
    tags: ['alienacao-fiduciaria', 'hipoteca', 'comparacao'],
  }),
  q('q-fi-03', {
    c: 'c-financiamento-imobiliario', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir SFH de SFI',
    e: 'A distinção entre o SFH e o SFI está em que o SFH:',
    alt: [
      ['Utiliza recursos da poupança e do FGTS e observa limites de valor do imóvel e de taxa fixados em norma.', true, 'Correta. No SFI as condições são livremente pactuadas.'],
      ['Destina-se exclusivamente a imóveis comerciais.', false, 'O SFH é voltado à habitação, como o próprio nome indica.'],
      ['Não admite o uso de alienação fiduciária como garantia.', false, 'A alienação fiduciária é a garantia usual em ambos os sistemas.'],
      ['Permite taxa de juros livremente pactuada entre as partes.', false, 'Taxa livre é característica do SFI, não do SFH.'],
    ],
    exp: 'Origem dos recursos e limites normativos: são esses dois eixos que separam os sistemas.',
    tags: ['sfh', 'sfi', 'comparacao'],
  }),
  q('q-fi-04', {
    c: 'c-financiamento-imobiliario', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Explicar a diferença de taxa entre crédito com e sem garantia real',
    ctx: 'Um cliente estranha que o financiamento imobiliário do mesmo banco tenha juros muito menores que o crédito pessoal que ele contratou.',
    e: 'A explicação tecnicamente correta é:',
    alt: [
      ['A garantia real permite retomar o imóvel por via extrajudicial em prazo curto, o que reduz a perda esperada do credor.', true, 'Correta. Garantia melhor, risco menor, taxa menor.'],
      ['O financiamento imobiliário é subsidiado pelo Tesouro Nacional em todas as modalidades.', false, 'Não há subsídio universal; o que diferencia é a garantia.'],
      ['O prazo mais longo do financiamento imobiliário reduz a taxa cobrada.', false, 'Prazo mais longo, isoladamente, tende a aumentar o risco e não a reduzi-lo.'],
      ['O crédito pessoal é mais caro porque tem menor valor contratado.', false, 'O valor não determina a taxa; a garantia determina.'],
    ],
    exp: 'É a mesma regra do consignado e do rotativo, aplicada a outro produto: quem oferece garantia melhor paga menos.',
    tags: ['imobiliario', 'garantias', 'atendimento'],
  }),

  /* ---- c-leasing-cdc ----------------------------------------------------- */
  q('q-lc-01', {
    c: 'c-leasing-cdc', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar a titularidade do bem no leasing',
    e: 'Durante a vigência de um contrato de arrendamento mercantil, a propriedade do bem pertence:',
    alt: [
      ['À arrendadora, cabendo ao arrendatário a posse e o uso.', true, 'Correta. É a diferença essencial em relação ao CDC.'],
      ['Ao arrendatário, com gravame de alienação fiduciária.', false, 'Isso descreve o CDC, não o leasing.'],
      ['Ao fornecedor do bem, até o pagamento da última parcela.', false, 'O fornecedor sai da relação com a venda à arrendadora.'],
      ['A ambos, em condomínio proporcional às parcelas pagas.', false, 'Não há condomínio: a propriedade é integralmente da arrendadora.'],
    ],
    exp: 'A pergunta que separa os dois contratos é sempre a mesma: de quem é o bem durante o contrato.',
    tags: ['leasing', 'propriedade', 'conceitual'],
  }),
  q('q-lc-02', {
    c: 'c-leasing-cdc', tipo: 'multipla_escolha', dif: 'media',
    hab: 'Reconhecer as opções ao término do leasing',
    e: 'Ao término de um contrato de leasing, o arrendatário pode:',
    alt: [
      ['Exercer a compra pelo valor residual, devolver o bem ou renovar o contrato.', true, 'Correta. São três opções, e a compra é faculdade.'],
      ['Apenas devolver o bem à arrendadora.', false, 'A opção de compra é elemento essencial do arrendamento mercantil.'],
      ['Apenas exercer a compra, que é obrigatória.', false, 'A compra é faculdade, mesmo com VRG diluído nas parcelas.'],
      ['Receber a propriedade automaticamente, sem pagamento adicional.', false, 'A transferência depende do exercício da opção de compra.'],
    ],
    exp: 'Comprar, devolver ou renovar. A banca cobra esse trio com frequência.',
    tags: ['leasing', 'vrg', 'multipla-escolha'],
  }),
  q('q-lc-03', {
    c: 'c-leasing-cdc', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Avaliar a possibilidade de venda do bem antes da quitação',
    ctx: 'Um cliente quer vender o veículo antes de terminar de pagar e pergunta se pode.',
    e: 'A resposta depende do contrato porque:',
    alt: [
      ['No CDC ele é o proprietário e pode vender com anuência do credor; no leasing precisa antes exercer a opção de compra, pois o bem não é dele.', true, 'Correta. A titularidade do bem muda o que ele pode fazer.'],
      ['Em ambos os casos a venda é livre, bastando comunicar a instituição.', false, 'No leasing ele não pode vender o que não lhe pertence.'],
      ['Em ambos os casos a venda é vedada até a quitação integral.', false, 'No CDC a venda é possível com anuência do credor.'],
      ['A diferença é apenas tributária e não afeta a possibilidade de venda.', false, 'A diferença é de propriedade, e ela é determinante.'],
    ],
    exp: 'A resposta muda por causa do contrato, não do carro. É a consequência prática mais visível da distinção.',
    tags: ['leasing', 'cdc', 'atendimento'],
  }),
  q('q-lc-04', {
    c: 'c-leasing-cdc', tipo: 'conceitual', dif: 'dificil',
    hab: 'Avaliar o efeito da diluição do VRG',
    e: 'A cobrança antecipada e diluída do valor residual garantido (VRG) nas parcelas do leasing:',
    alt: [
      ['Não descaracteriza o arrendamento mercantil; a propriedade permanece com a arrendadora até o exercício da opção.', true, 'Correta. A antecipação muda o fluxo de pagamento, não a natureza do contrato.'],
      ['Converte automaticamente o contrato em compra e venda financiada.', false, 'A estrutura do arrendamento é preservada mesmo com VRG antecipado.'],
      ['Transfere a propriedade do bem ao arrendatário desde a primeira parcela.', false, 'A propriedade só se transfere com o exercício da opção de compra.'],
      ['Torna obrigatório o exercício da opção de compra ao final.', false, 'A compra continua sendo faculdade do arrendatário.'],
    ],
    exp: 'O contrapeso é que, na resolução antecipada, o VRG pago deve ser devolvido ou compensado — a antecipação não vira ganho da arrendadora.',
    tags: ['leasing', 'vrg', 'conceitual'],
  }),
]
