import { q } from './builder'

/**
 * Questões autorais — macrotema 2, complemento de cobertura.
 *
 * Mesma razão de `banco-m1-piso.ts`: levar ao piso de cinco questões por
 * conceito os itens que os lotes anteriores deixaram com três ou quatro.
 * Como o macrotema 2 é o de maior peso na prova (40%), é aqui que a falta de
 * lastro mais atrapalhava o motor adaptativo.
 *
 * Uma restrição editorial vale para o arquivo inteiro: **nenhuma questão
 * fixa quantidade normativa sujeita a revisão** — saques gratuitos por mês,
 * limites de IOF, tetos do SFH. O que se cobra é o mecanismo.
 */
export const BANCO_M2_PISO = [
  /* ---- c-rf-base ---------------------------------------------------------- */
  q('q-rfb-p1', {
    c: 'c-rf-base', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Identificar o tipo de rentabilidade que protege de alta de juros',
    ctx: 'Um cliente teme que a taxa básica de juros suba nos próximos meses e quer proteger a parcela conservadora da carteira.',
    e: 'Entre os tipos de rentabilidade da renda fixa, o adequado a essa preocupação é:',
    alt: [
      ['Pós-fixado, que acompanha o indexador e sobe junto com os juros.', true, 'Correta. É o único que acompanha a alta em vez de sofrer com ela.'],
      ['Prefixado, que trava a taxa e protege de qualquer variação.', false, 'Travar a taxa protege de QUEDA. Com juros em alta, o prefixado se desvaloriza na marcação a mercado.'],
      ['Híbrido, porque a parcela de IPCA neutraliza o efeito dos juros.', false, 'O híbrido tem parcela prefixada e também sofre marcação a mercado na alta de juros.'],
      ['Qualquer um, pois renda fixa não oscila até o vencimento.', false, 'Levar até o vencimento entrega a taxa contratada, mas isso não é proteção contra o custo de oportunidade.'],
    ],
    exp: 'A pergunta é sempre a mesma: se a taxa subir, meu papel acompanha ou fica para trás?',
    tags: ['renda-fixa', 'indexador', 'juros'],
  }),
  q('q-rfb-p2', {
    c: 'c-rf-base', tipo: 'verdadeiro_falso', dif: 'facil',
    hab: 'Avaliar a afirmação de que renda fixa não dá prejuízo',
    e: 'Avalie a afirmação: "Aplicações de renda fixa não podem gerar prejuízo ao investidor."',
    alt: [
      ['Falsa: há perda na venda antecipada com juros em alta e há perda por inadimplência do emissor.', true, 'Correta. "Fixa" descreve a regra de remuneração, não a ausência de risco.'],
      ['Verdadeira: o rendimento é contratado e sempre entregue.', false, 'O rendimento contratado pressupõe carregar até o vencimento e o emissor pagar.'],
      ['Verdadeira para os títulos com cobertura do FGC.', false, 'O FGC limita a perda por insolvência até um teto; não afasta a perda por marcação a mercado.'],
      ['Falsa apenas para títulos privados.', false, 'Título público prefixado também se desvaloriza na venda antecipada com juros em alta.'],
    ],
    exp: 'Renda fixa é fixa na fórmula, não no resultado de quem vende antes do vencimento.',
    tags: ['renda-fixa', 'risco', 'conceitual'],
  }),

  /* ---- c-fgc -------------------------------------------------------------- */
  q('q-fgc-p1', {
    c: 'c-fgc', tipo: 'calculo', dif: 'media',
    hab: 'Aplicar o limite por conglomerado',
    ctx: 'Um cliente mantém, no mesmo conglomerado financeiro, R$ 200 mil em CDB e R$ 120 mil em LCI.',
    e: 'Em caso de liquidação da instituição, o valor coberto pelo FGC será de:',
    alt: [
      ['R$ 250 mil, pois o limite é único por CPF e por conglomerado, somando os produtos cobertos.', true, 'Correta. Os R$ 70 mil restantes viram crédito na massa.'],
      ['R$ 320 mil, pois ambos os produtos têm cobertura.', false, 'Ter cobertura não significa somar dois limites: o teto é do conjunto.'],
      ['R$ 500 mil, pois o limite se aplica a cada produto separadamente.', false, 'O limite nunca foi por produto — é por CPF e por conglomerado.'],
      ['R$ 200 mil, pois apenas o CDB é coberto.', false, 'LCI também é coberta pelo FGC.'],
    ],
    exp: 'A soma é dos produtos cobertos daquele grupo; o limite continua sendo um só.',
    tags: ['fgc', 'limite', 'calculo'],
  }),
  q('q-fgc-p2', {
    c: 'c-fgc', tipo: 'conceitual', dif: 'dificil',
    hab: 'Distinguir mudança prudencial de mudança de cobertura',
    e: 'As regras editadas em 2026 sobre contribuição adicional ao FGC e alocação obrigatória em títulos públicos:',
    alt: [
      ['Alcançam as instituições associadas e não alteraram os limites de cobertura do investidor.', true, 'Correta. São instrumentos prudenciais, do lado do emissor.'],
      ['Reduziram o limite de cobertura por CPF e por conglomerado.', false, 'O limite por CPF e por conglomerado não foi alterado.'],
      ['Ampliaram a cobertura para incluir CRI e CRA.', false, 'A lista de produtos cobertos não foi modificada por essas regras.'],
      ['Eliminaram o teto global por investidor a cada quatro anos.', false, 'O teto global segue existindo.'],
    ],
    exp: 'A norma encarece a captação apoiada em FGC para o banco. O que o investidor recebe se o banco quebrar continua o mesmo.',
    tags: ['fgc', 'atualizacao', 'conceitual'],
  }),

  /* ---- c-rf-tributacao ---------------------------------------------------- */
  q('q-rft-p1', {
    c: 'c-rf-tributacao', tipo: 'comparacao', dif: 'dificil',
    hab: 'Comparar produto isento com produto tributado',
    ctx: 'Um cliente pessoa física compara uma LCI que paga 92% do CDI com um CDB que paga 105% do CDI, ambos para resgate em pouco mais de dois anos.',
    e: 'A comparação tecnicamente correta exige:',
    alt: [
      ['Comparar o retorno LÍQUIDO: a LCI é isenta e o CDB será tributado pela alíquota da faixa de prazo.', true, 'Correta. Comparar taxas brutas entre isento e tributado é a comparação errada — e é a que a banca usa.'],
      ['Escolher o CDB, cuja taxa é maior.', false, 'Taxa bruta maior não significa retorno líquido maior quando um dos produtos é isento.'],
      ['Escolher a LCI, pois isenção sempre vence tributação.', false, 'Nem sempre: depende de quanto a taxa bruta do tributado supera a do isento.'],
      ['Comparar apenas a garantia, já que ambos têm FGC.', false, 'A garantia é igual aqui; o que decide é o líquido.'],
    ],
    exp: 'A pergunta certa não é "qual paga mais", é "qual sobra mais depois do imposto".',
    tags: ['renda-fixa', 'tributacao', 'comparacao'],
  }),
  q('q-rft-p2', {
    c: 'c-rf-tributacao', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar a base de incidência do IR na renda fixa',
    e: 'Na renda fixa tributada, o imposto de renda incide sobre:',
    alt: [
      ['O rendimento, e não sobre o valor total resgatado.', true, 'Correta. Diferentemente do PGBL, em que a incidência é sobre o total.'],
      ['O valor total resgatado, incluindo o principal aplicado.', false, 'Isso descreve o PGBL, não a renda fixa em geral.'],
      ['O valor aplicado, no momento do aporte.', false, 'Não há tributação sobre o aporte em renda fixa.'],
      ['O rendimento, com alíquota fixa independentemente do prazo.', false, 'A base está certa, mas a alíquota é regressiva conforme o prazo.'],
    ],
    exp: 'Base e alíquota são duas decisões separadas — e a banca costuma acertar uma e errar a outra na mesma alternativa.',
    tags: ['renda-fixa', 'tributacao', 'conceitual'],
  }),

  /* ---- c-acoes ------------------------------------------------------------ */
  q('q-aco-p1', {
    c: 'c-acoes', tipo: 'conceitual', dif: 'media',
    hab: 'Situar o acionista na ordem de recebimento',
    e: 'Em caso de falência da companhia, o acionista:',
    alt: [
      ['É o último a receber, depois de credores e de eventuais debenturistas — e frequentemente não recebe nada.', true, 'Correta. É o preço estrutural de ser sócio, não credor.'],
      ['Recebe antes dos debenturistas, por ser sócio da companhia.', false, 'Debenturista é credor; credor recebe antes de sócio.'],
      ['Tem o capital garantido pelo FGC até o limite legal.', false, 'Ação não tem cobertura do FGC em hipótese alguma.'],
      ['Recebe proporcionalmente junto com os demais credores.', false, 'O acionista não concorre com credores: fica na posição residual.'],
    ],
    exp: 'Sócio ganha quando sobra. Essa é a diferença entre comprar ação e comprar dívida da mesma empresa.',
    tags: ['acoes', 'risco', 'conceitual'],
  }),
  q('q-aco-p2', {
    c: 'c-acoes', tipo: 'comparacao', dif: 'facil',
    hab: 'Distinguir ações ordinárias de preferenciais',
    e: 'A diferença clássica entre ações ordinárias (ON) e preferenciais (PN) é que:',
    alt: [
      ['A ON confere direito de voto; a PN confere preferência na distribuição de proventos.', true, 'Correta. Voto de um lado, prioridade no dinheiro do outro.'],
      ['A PN confere direito de voto e a ON, preferência nos dividendos.', false, 'Está invertido: o voto é da ordinária e a preferência em proventos, da preferencial.'],
      ['A ON garante dividendo mínimo e a PN não.', false, 'A prioridade em proventos é característica da PN, conforme o estatuto.'],
      ['Somente a PN pode ser negociada em bolsa.', false, 'Ambas podem ser negociadas.'],
    ],
    exp: 'No Novo Mercado só há ON — o segmento troca a possibilidade de PN por governança mais rígida.',
    tags: ['acoes', 'on-pn', 'comparacao'],
  }),

  /* ---- c-etf-bdr ---------------------------------------------------------- */
  q('q-ebd-p1', {
    c: 'c-etf-bdr', tipo: 'conceitual', dif: 'media',
    hab: 'Delimitar a posição do titular de BDR',
    e: 'O titular de um BDR negociado no Brasil:',
    alt: [
      ['Detém um certificado lastreado em ações estrangeiras, com exposição econômica, mas sem a condição de acionista direto.', true, 'Correta. Quem detém as ações é a instituição depositária.'],
      ['É acionista direto da companhia estrangeira, com os mesmos direitos dos demais acionistas.', false, 'A titularidade das ações permanece com a depositária.'],
      ['Detém cota de fundo de índice de empresas estrangeiras.', false, 'Isso descreve um ETF, não um BDR.'],
      ['Fica isento de exposição à variação cambial.', false, 'O preço do BDR reflete o ativo lastro e o câmbio.'],
    ],
    exp: 'BDR entrega o resultado econômico, não a condição jurídica de sócio.',
    tags: ['bdr', 'internacional', 'conceitual'],
  }),
  q('q-ebd-p2', {
    c: 'c-etf-bdr', tipo: 'comparacao', dif: 'media',
    hab: 'Comparar ETF e fundo de investimento tradicional',
    e: 'Uma característica que distingue um ETF de um fundo de investimento aberto tradicional é que:',
    alt: [
      ['A cota do ETF é comprada e vendida em bolsa, como uma ação, em vez de aplicada e resgatada junto ao administrador.', true, 'Correta. E é isso que dá liquidez intradiária e preço formado em mercado.'],
      ['O ETF não cobra taxa de administração.', false, 'Cobra, em geral baixa por ser gestão passiva — mas cobra.'],
      ['O ETF não está sujeito à regulação da CVM.', false, 'ETF é fundo e é regulado pela CVM.'],
      ['O ETF garante retorno igual ao do índice, sem desvio.', false, 'Há erro de aderência; a replicação nunca é perfeita.'],
    ],
    exp: 'A diferença é de porta de entrada e saída, não de natureza: ETF é fundo.',
    tags: ['etf', 'fundos', 'comparacao'],
  }),

  /* ---- c-tipos-fundos ----------------------------------------------------- */
  q('q-tfd-p1', {
    c: 'c-tipos-fundos', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Recusar o rótulo como medida de risco',
    ctx: 'Um cliente de perfil conservador pede um fundo multimercado por acreditar que a classe é "intermediária entre renda fixa e ações".',
    e: 'A orientação correta é:',
    alt: [
      ['Explicar que multimercado é a classe SEM compromisso de concentração, podendo ser mais arriscada que muitos fundos de ações, e avaliar o regulamento antes de qualquer indicação.', true, 'Correta. A classe não gradua risco; ela apenas não restringe a carteira.'],
      ['Confirmar a percepção do cliente e indicar o multimercado com melhor histórico.', false, 'A premissa é falsa e histórico não é medida de risco.'],
      ['Indicar um fundo de renda fixa, pois multimercado é sempre inadequado a conservador.', false, 'Há multimercados de baixa volatilidade; a análise é do regulamento, não do rótulo.'],
      ['Indicar um fundo cambial, que seria a classe realmente intermediária.', false, 'Fundo cambial acompanha moeda estrangeira e é bastante volátil.'],
    ],
    exp: 'Nome de classe diz o que o fundo PODE fazer, não o quanto ele arrisca.',
    tags: ['fundos', 'classificacao', 'suitability'],
  }),
  q('q-tfd-p2', {
    c: 'c-tipos-fundos', tipo: 'conceitual', dif: 'facil',
    hab: 'Reconhecer o critério de classificação por carteira',
    e: 'A classificação de um fundo como "de ações" decorre de:',
    alt: [
      ['A concentração mínima da carteira em ações e ativos a elas relacionados.', true, 'Correta. A classificação segue a composição da carteira.'],
      ['A denominação escolhida pelo gestor no momento do registro.', false, 'A denominação não pode contrariar a composição efetiva.'],
      ['O perfil de risco atribuído pelo distribuidor.', false, 'O distribuidor classifica o produto para fins de adequação; não define a classe do fundo.'],
      ['O histórico de rentabilidade dos últimos doze meses.', false, 'Rentabilidade passada não classifica fundo.'],
    ],
    exp: 'Classe vem da carteira. É por isso que "multimercado" não significa moderado: ele simplesmente não tem concentração exigida.',
    tags: ['fundos', 'classificacao', 'conceitual'],
  }),

  /* ---- c-cvm175-classes --------------------------------------------------- */
  q('q-c175-p1', {
    c: 'c-cvm175-classes', tipo: 'conceitual', dif: 'dificil',
    hab: 'Aplicar a condição da responsabilidade limitada',
    e: 'Sob a Resolução CVM 175, a responsabilidade limitada do cotista:',
    alt: [
      ['Depende de previsão expressa no regulamento da classe; sem ela, permanece o regime anterior.', true, 'Correta. Não houve conversão automática de todos os fundos.'],
      ['Passou a valer automaticamente para todos os fundos de investimento.', false, 'É a suposição mais comum e está errada.'],
      ['Aplica-se apenas a fundos destinados a investidores profissionais.', false, 'A previsão não é restrita por categoria de investidor.'],
      ['Foi revogada pela própria Resolução CVM 175.', false, 'Ao contrário: foi ela que trouxe a possibilidade.'],
    ],
    exp: 'A pergunta prática que resolve: o regulamento daquela classe prevê responsabilidade limitada? Sem isso, nada mudou.',
    tags: ['fundos', 'cvm175', 'responsabilidade'],
  }),
  q('q-c175-p2', {
    c: 'c-cvm175-classes', tipo: 'conceitual', dif: 'media',
    hab: 'Descrever a estrutura de classes e subclasses',
    e: 'Na estrutura trazida pela Resolução CVM 175, as CLASSES de cotas de um mesmo fundo:',
    alt: [
      ['Podem ter patrimônios segregados entre si, e cada classe pode ainda comportar subclasses.', true, 'Correta. É o que permite carteiras e públicos distintos sob um mesmo fundo.'],
      ['Compartilham obrigatoriamente o mesmo patrimônio e a mesma carteira.', false, 'A segregação patrimonial entre classes é justamente a novidade.'],
      ['São o novo nome dos antigos fundos exclusivos.', false, 'Classe é elemento de estrutura, não sinônimo de fundo exclusivo.'],
      ['Só podem existir em fundos destinados a investidores profissionais.', false, 'A estrutura não é restrita a essa categoria.'],
    ],
    exp: 'Um fundo, várias classes com patrimônio separado, e subclasses dentro de cada uma — é a arquitetura que a norma abriu.',
    tags: ['fundos', 'cvm175', 'estrutura'],
  }),

  /* ---- c-taxas-fundos-175 ------------------------------------------------- */
  q('q-tx175-p1', {
    c: 'c-taxas-fundos-175', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Comparar fundos considerando todas as taxas',
    ctx: 'Dois fundos semelhantes: o primeiro cobra 1,0% de administração e taxa de ingresso; o segundo cobra 1,3% de administração e nenhuma outra taxa.',
    e: 'A comparação correta entre eles:',
    alt: [
      ['Exige somar o efeito de todas as taxas sobre o horizonte pretendido, pois a de ingresso incide de uma vez e a de administração, ao longo do tempo.', true, 'Correta. O prazo pretendido inverte a resposta.'],
      ['Aponta o primeiro como mais barato, por ter menor taxa de administração.', false, 'Ignora a taxa de ingresso, que pode dominar em prazo curto.'],
      ['Aponta o segundo como mais barato, por não cobrar taxa de ingresso.', false, 'Em prazo longo, 0,3% ao ano a mais pode superar o ingresso.'],
      ['É indiferente, pois taxas não afetam a rentabilidade divulgada.', false, 'Todas as taxas reduzem o retorno do cotista.'],
    ],
    exp: 'Taxa de ingresso é um custo único; administração é recorrente. Qual pesa mais depende de quanto tempo o dinheiro fica.',
    tags: ['fundos', 'taxas', 'comparacao'],
  }),
  q('q-tx175-p2', {
    c: 'c-taxas-fundos-175', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer a condição de cobrança da taxa de performance',
    e: 'A taxa de performance de um fundo:',
    alt: [
      ['Só é devida quando o desempenho supera o referencial previsto no regulamento, observada a linha d’água.', true, 'Correta. A linha d’água impede cobrar duas vezes pela recuperação do mesmo prejuízo.'],
      ['É cobrada periodicamente, independentemente do desempenho.', false, 'Isso descreve a taxa de administração.'],
      ['Substitui a taxa de administração nos fundos que a adotam.', false, 'As duas coexistem.'],
      ['Incide sobre o patrimônio total do fundo, e não sobre o excedente.', false, 'Incide sobre o que excede o referencial.'],
    ],
    exp: 'Sem linha d’água, o gestor cobraria performance ao recuperar uma perda que ele mesmo produziu.',
    tags: ['fundos', 'performance', 'conceitual'],
  }),

  /* ---- c-previdencia ------------------------------------------------------ */
  q('q-prv-p1', {
    c: 'c-previdencia', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Escolher o plano pelo modelo de declaração',
    ctx: 'Um cliente autônomo, isento de imposto de renda, quer contratar previdência por causa da "dedução de 12%".',
    e: 'A orientação correta é:',
    alt: [
      ['Indicar VGBL e explicar que, sem base tributável, a dedução do PGBL não traz benefício algum — e o IR incidiria sobre o total no resgate.', true, 'Correta. É o pior cenário possível para um PGBL.'],
      ['Indicar PGBL, para que ele aproveite a dedução quando passar a ter renda tributável.', false, 'A dedução aproveita no ano do aporte; adiar não recupera o benefício perdido.'],
      ['Indicar PGBL com aporte limitado a 12% da renda bruta.', false, 'Aplicar o limite não resolve: falta a base tributável para deduzir.'],
      ['Indicar qualquer um dos dois, pois a diferença só aparece no resgate.', false, 'A diferença começa no aporte e se completa no resgate.'],
    ],
    exp: 'A pergunta que decide não é o valor do aporte: é o modelo de declaração e a contribuição ao regime público.',
    tags: ['previdencia', 'pgbl-vgbl', 'atendimento'],
  }),
  q('q-prv-p2', {
    c: 'c-previdencia', tipo: 'comparacao', dif: 'media',
    hab: 'Comparar a base de incidência do IR em PGBL e VGBL',
    e: 'No resgate, a base de incidência do imposto de renda é:',
    alt: [
      ['O valor total resgatado no PGBL e apenas o rendimento no VGBL.', true, 'Correta. É a contrapartida da dedução aproveitada no PGBL.'],
      ['Apenas o rendimento em ambos.', false, 'No PGBL o imposto alcança o total, porque o aporte foi deduzido.'],
      ['O valor total resgatado em ambos.', false, 'No VGBL não houve dedução e o principal não é tributado.'],
      ['Apenas o rendimento no PGBL e o total no VGBL.', false, 'Está invertido: quem deduziu na entrada é tributado sobre o total, e esse é o PGBL.'],
    ],
    exp: 'Quem deduziu na entrada paga na saída sobre tudo. Quem não deduziu paga só sobre o ganho.',
    tags: ['previdencia', 'tributacao', 'comparacao'],
  }),

  /* ---- um item por conceito ----------------------------------------------- */
  q('q-fnd-p1', {
    c: 'c-fundos', tipo: 'conceitual', dif: 'media',
    hab: 'Interpretar a rentabilidade divulgada de um fundo',
    e: 'A rentabilidade divulgada de um fundo de investimento:',
    alt: [
      ['Já está líquida da taxa de administração, que é deduzida no cálculo diário da cota.', true, 'Correta. Descontá-la de novo é contar duas vezes.'],
      ['É bruta e exige que o investidor deduza a taxa de administração para conhecer o resultado.', false, 'A taxa já foi provisionada na cota divulgada.'],
      ['Já está líquida de imposto de renda.', false, 'O imposto incide no resgate, conforme o tipo de fundo e o prazo.'],
      ['Corresponde ao resultado bruto da carteira, antes de qualquer despesa.', false, 'A cota reflete a carteira já descontadas as despesas do fundo.'],
    ],
    exp: 'Taxa de administração já está na cota; imposto ainda não. Confundir os dois muda a conta.',
    tags: ['fundos', 'cota', 'conceitual'],
  }),
  q('q-td-p1', {
    c: 'c-tesouro-direto', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Selecionar o título adequado à reserva de emergência',
    ctx: 'Um cliente quer aplicar a reserva de emergência no Tesouro Direto e cogita o Prefixado por oferecer taxa maior.',
    e: 'A orientação correta é:',
    alt: [
      ['Indicar o Tesouro Selic, cuja oscilação é a menor da família — a reserva é sacada justamente quando não se pode escolher o momento.', true, 'Correta. Reserva não admite risco de preço no resgate.'],
      ['Indicar o Prefixado, pois a taxa maior compensa qualquer oscilação.', false, 'A oscilação é o problema exatamente quando o saque é involuntário.'],
      ['Indicar o IPCA+, que protege da inflação do período.', false, 'Também oscila com a marcação a mercado; proteção de longo prazo não serve à reserva.'],
      ['Indicar qualquer um, pois todos são garantidos pelo Tesouro Nacional.', false, 'A garantia é do pagamento no vencimento, não do preço na venda antecipada.'],
    ],
    exp: 'Risco soberano baixo não é o mesmo que preço estável. A reserva precisa das duas coisas.',
    tags: ['tesouro-direto', 'reserva', 'atendimento'],
  }),
  q('q-cdb-p1', {
    c: 'c-cdb-rdb-lf', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir Letra Financeira de CDB',
    e: 'A Letra Financeira difere do CDB principalmente porque:',
    alt: [
      ['Não tem cobertura do FGC e não admite resgate antecipado, além de exigir prazo e valor mínimos elevados.', true, 'Correta. São diferenças estruturais, não detalhe de taxa.'],
      ['É emitida por securitizadora, e não por instituição financeira.', false, 'É emitida por instituição financeira; a securitizadora emite CRI e CRA.'],
      ['É isenta de imposto de renda para pessoa física.', false, 'A Letra Financeira é tributada.'],
      ['Tem liquidez diária garantida pelo emissor.', false, 'É justamente o oposto: prazo longo e sem resgate antecipado.'],
    ],
    exp: '"Um CDB que rende mais" é a leitura errada: o prêmio existe porque faltam FGC e liquidez.',
    tags: ['cdb', 'letra-financeira', 'comparacao'],
  }),
  q('q-lci-p1', {
    c: 'c-lci-lca-lcd', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer a exigência de lastro nos títulos isentos',
    e: 'A característica que LCI, LCA e LCD têm em comum, além da isenção de IR para pessoa física, é:',
    alt: [
      ['A exigência de lastro em uma carteira específica de crédito da instituição emissora.', true, 'Correta. Imobiliário na LCI, do agronegócio na LCA e de desenvolvimento na LCD.'],
      ['A ausência de cobertura do FGC.', false, 'Os três são títulos bancários cobertos pelo FGC.'],
      ['A emissão por securitizadora.', false, 'Quem emite é instituição financeira; securitizadora emite CRI e CRA.'],
      ['A liquidez diária desde a data de aplicação.', false, 'Há prazo mínimo de carência fixado em norma.'],
    ],
    exp: 'O lastro é a razão da isenção: o incentivo fiscal serve para baratear crédito naqueles setores.',
    tags: ['lci-lca', 'lastro', 'conceitual'],
  }),
  q('q-cri-p1', {
    c: 'c-cri-cra', tipo: 'comparacao', dif: 'media',
    hab: 'Separar isenção de garantia',
    e: 'CRI e CRA assemelham-se a LCI e LCA quanto à isenção de IR para pessoa física, mas diferem porque:',
    alt: [
      ['São emitidos por securitizadoras e, por isso, não têm cobertura do FGC.', true, 'Correta. A isenção é igual; a garantia, não.'],
      ['São tributados pela tabela regressiva.', false, 'São isentos para pessoa física, como LCI e LCA.'],
      ['Têm prazo de carência menor.', false, 'A diferença relevante não é de carência.'],
      ['São emitidos apenas por instituições financeiras públicas.', false, 'A emissão é de companhias securitizadoras.'],
    ],
    exp: 'Mesma prateleira, mesmo benefício fiscal, risco completamente diferente — é a confusão mais cara do bloco.',
    tags: ['cri-cra', 'fgc', 'comparacao'],
  }),
  q('q-deb-p1', {
    c: 'c-debentures', tipo: 'comparacao', dif: 'dificil',
    hab: 'Distinguir debênture incentivada de debênture de infraestrutura',
    e: 'Quanto ao beneficiário do incentivo fiscal, a diferença entre a debênture incentivada e a chamada debênture de infraestrutura é que:',
    alt: [
      ['Na incentivada o benefício é do INVESTIDOR pessoa física, que fica isento; no regime de infraestrutura o benefício é do EMISSOR, e o investidor pessoa física é tributado.', true, 'Correta. Nomes quase iguais, beneficiários opostos.'],
      ['Em ambas o investidor pessoa física fica isento.', false, 'Só na incentivada.'],
      ['Em ambas o benefício é do emissor.', false, 'Na incentivada quem ganha isenção é o investidor.'],
      ['Na incentivada o benefício é do emissor e na de infraestrutura, do investidor.', false, 'Está invertido: a isenção do investidor pessoa física é da debênture incentivada.'],
    ],
    exp: 'Os dois papéis competem no mesmo balcão com nomes parecidos — e a resposta certa é sempre perguntar de quem é o benefício.',
    tags: ['debentures', 'tributacao', 'comparacao'],
  }),
  q('q-coe-p1', {
    c: 'c-coe', tipo: 'conceitual', dif: 'media',
    hab: 'Interpretar corretamente o capital protegido',
    e: 'Em um COE de valor nominal protegido, "capital protegido" significa que:',
    alt: [
      ['A perda nominal é limitada, mas permanecem o custo de oportunidade, a inflação do período, o risco de crédito do emissor e a falta de liquidez.', true, 'Correta. Proteção nominal não é ausência de risco.'],
      ['Não há risco algum para o investidor.', false, 'Há pelo menos quatro riscos remanescentes.'],
      ['O emissor garante a devolução corrigida pela inflação.', false, 'A proteção é do valor nominal, sem correção.'],
      ['O produto tem cobertura do FGC até o limite legal.', false, 'COE não tem cobertura do FGC.'],
    ],
    exp: 'A proteção é paga com teto de ganho e participação parcial. Nunca é de graça.',
    tags: ['coe', 'risco', 'conceitual'],
  }),
  q('q-rsc-p1', {
    c: 'c-risco-credito', tipo: 'conceitual', dif: 'media',
    hab: 'Avaliar o alcance real da proteção do FGC',
    e: 'Sobre o efeito do FGC no risco de crédito de uma aplicação bancária, é correto afirmar que:',
    alt: [
      ['Limita a perda até um teto por CPF e por conglomerado, com processo e prazo próprios de pagamento — não elimina o risco nem garante liquidez imediata.', true, 'Correta. Proteção com limite e com espera.'],
      ['Elimina integralmente o risco de crédito da aplicação.', false, 'Acima do teto a perda é do investidor, e o pagamento não é instantâneo.'],
      ['Garante o pagamento no dia útil seguinte à liquidação da instituição.', false, 'Há procedimento e prazo; não é imediato.'],
      ['Cobre também o risco de mercado do título.', false, 'O FGC responde por insolvência do emissor, não por oscilação de preço.'],
    ],
    exp: 'Quem depende do dinheiro em uma semana não deveria confiar no FGC como se fosse liquidez.',
    tags: ['risco-credito', 'fgc', 'conceitual'],
  }),
  q('q-evc-p1', {
    c: 'c-eventos-corporativos', tipo: 'calculo', dif: 'media',
    hab: 'Avaliar o efeito patrimonial de um desdobramento',
    ctx: 'Um investidor tem 100 ações a R$ 40,00 cada. A companhia aprova desdobramento na proporção de 1 para 4.',
    e: 'Após o evento, e desconsiderando oscilação de mercado, a posição do investidor será de:',
    alt: [
      ['400 ações a R$ 10,00, com valor total inalterado de R$ 4.000,00.', true, 'Correta. O desdobramento rearranja a posição sem criar nem destruir patrimônio.'],
      ['400 ações a R$ 40,00, totalizando R$ 16.000,00.', false, 'Isso quadruplicaria o patrimônio a partir de um evento contábil.'],
      ['100 ações a R$ 10,00, totalizando R$ 1.000,00.', false, 'A quantidade aumenta no desdobramento; ela não permanece.'],
      ['400 ações a R$ 8,00, totalizando R$ 3.200,00.', false, 'O preço se ajusta na mesma proporção do desdobramento, para R$ 10,00.'],
    ],
    exp: 'A queda de preço após o desdobramento não é perda: é o ajuste proporcional à quantidade.',
    tags: ['eventos-corporativos', 'desdobramento', 'calculo'],
  }),
  q('q-gov-p1', {
    c: 'c-governanca-listagem', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar a natureza dos segmentos de listagem',
    e: 'Os segmentos especiais de listagem da B3, como o Novo Mercado:',
    alt: [
      ['São de adesão voluntária e impõem, por contrato com a bolsa, exigências além do mínimo legal.', true, 'Correta. Não são classificação da CVM nem exigência da lei.'],
      ['São classificações atribuídas pela CVM conforme o porte da companhia.', false, 'A CVM não classifica companhias em segmentos de listagem.'],
      ['Decorrem diretamente da Lei das Sociedades por Ações.', false, 'A lei fixa o mínimo; o segmento é compromisso adicional.'],
      ['São obrigatórios para toda companhia que abre capital.', false, 'A adesão é facultativa.'],
    ],
    exp: 'É contrato com a bolsa, não norma do regulador — e por isso a saída do segmento é possível, com regras próprias.',
    tags: ['governanca', 'b3', 'conceitual'],
  }),
  q('q-fii-p1', {
    c: 'c-fiis', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Recusar a comparação entre distribuição de FII e taxa de CDB',
    ctx: 'Um cliente compara o rendimento mensal distribuído por um FII com a taxa de um CDB e conclui que o FII "rende mais e paga todo mês".',
    e: 'A avaliação correta é:',
    alt: [
      ['São grandezas diferentes: o FII distribui caixa de um ativo cuja cota oscila e não tem principal garantido; o CDB remunera principal estável por contrato.', true, 'Correta. Comparar os dois números diretamente é comparar coisas distintas.'],
      ['O cliente está correto, pois ambos entregam renda periódica.', false, 'Periodicidade não torna as grandezas comparáveis.'],
      ['O cliente está correto se o FII for de tijolo e não de papel.', false, 'O tipo de FII não altera o fato de a cota oscilar e não haver principal garantido.'],
      ['A comparação é válida desde que se desconte o IR do CDB.', false, 'Ajustar o imposto não resolve a diferença de natureza entre os produtos.'],
    ],
    exp: 'Distribuição de caixa não é juros sobre principal. É o erro que faz um cliente conservador comprar renda variável achando que é renda fixa.',
    tags: ['fii', 'renda', 'atendimento'],
  }),
  q('q-fac-p1', {
    c: 'c-fundos-abertos-fechados', tipo: 'calculo', dif: 'media',
    hab: 'Somar corretamente cotização e liquidação',
    ctx: 'Um fundo tem cotização de resgate em D+30 e liquidação em D+1 após a cotização.',
    e: 'O investidor que solicita resgate hoje receberá os recursos em:',
    alt: [
      ['D+31, pois os dois prazos se somam.', true, 'Correta. Cotização apura o valor da cota; liquidação entrega o dinheiro.'],
      ['D+30, pois a liquidação ocorre no mesmo dia da cotização.', false, 'São etapas distintas e sequenciais.'],
      ['D+1, pois a liquidação é o prazo que importa para o investidor.', false, 'A liquidação só começa a contar depois da cotização.'],
      ['D+29, pois o dia da solicitação já conta como o primeiro.', false, 'A contagem não antecipa a cotização.'],
    ],
    exp: 'Dois relógios em série, não em paralelo. É o erro de conta mais comum sobre resgate de fundo.',
    tags: ['fundos', 'resgate', 'calculo'],
  }),
  q('q-crd-p1', {
    c: 'c-credito-modalidades', tipo: 'conceitual', dif: 'facil',
    hab: 'Relacionar garantia e custo do crédito',
    e: 'Entre as modalidades de crédito à pessoa física, a que tende a apresentar a menor taxa é:',
    alt: [
      ['O crédito consignado, por ter desconto em folha e, portanto, menor risco de inadimplência.', true, 'Correta. Quanto melhor a garantia, menor o preço do risco.'],
      ['O cheque especial, por ser concedido apenas a bons clientes.', false, 'É das modalidades mais caras: crédito automático e sem análise no momento do uso.'],
      ['O rotativo do cartão de crédito, por ter prazo curto.', false, 'Prazo curto não reduz a taxa; o rotativo é das modalidades mais caras.'],
      ['O crédito pessoal sem garantia, por ser o mais popular.', false, 'A ausência de garantia encarece o crédito.'],
    ],
    exp: 'A lógica é sempre a mesma: garantia melhor, taxa menor. E a comparação final se faz pelo CET.',
    tags: ['credito', 'consignado', 'conceitual'],
  }),
  q('q-cet-p1', {
    c: 'c-cet', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Escolher proposta de crédito pelo CET',
    ctx: 'Duas propostas de financiamento: a primeira tem juros de 1,7% ao mês mais tarifa de cadastro e seguro; a segunda, 1,9% ao mês sem encargos adicionais.',
    e: 'A comparação correta entre elas:',
    alt: [
      ['Deve ser feita pelo Custo Efetivo Total, que reúne juros, tributos, tarifas e seguros em uma única taxa.', true, 'Correta. A de juros menores pode ser a mais cara no CET.'],
      ['Aponta a primeira como mais barata, por ter a menor taxa de juros.', false, 'É exatamente o erro que o CET existe para evitar.'],
      ['Aponta a segunda como mais barata, por não cobrar tarifas.', false, 'Sem calcular o CET não se pode afirmar isso.'],
      ['É impossível, pois as estruturas de cobrança são diferentes.', false, 'É justamente para isso que o CET foi criado, e sua informação é obrigatória.'],
    ],
    exp: 'O CET é o único número que torna duas propostas de estruturas diferentes comparáveis.',
    tags: ['credito', 'cet', 'atendimento'],
  }),
  q('q-imb-p1', {
    c: 'c-financiamento-imobiliario', tipo: 'conceitual', dif: 'dificil',
    hab: 'Explicar a posição do devedor na alienação fiduciária',
    e: 'No financiamento imobiliário com alienação fiduciária, durante o contrato o comprador:',
    alt: [
      ['Tem a posse direta e o direito de uso do imóvel, enquanto o credor detém propriedade resolúvel, que se extingue com a quitação.', true, 'Correta. Ele não é dono pleno, mas está longe de não ter nada.'],
      ['Não tem qualquer direito sobre o imóvel até a quitação.', false, 'Tem posse direta e direito de uso desde o início.'],
      ['É proprietário pleno, e o credor detém apenas hipoteca.', false, 'Na alienação fiduciária a propriedade fica resolúvel com o credor.'],
      ['Divide a propriedade com o credor em partes iguais.', false, 'Não há condomínio; há propriedade resolúvel.'],
    ],
    exp: '"Resolúvel" quer dizer que se desfaz com a quitação — é o que torna a retomada extrajudicial mais rápida que a execução de hipoteca.',
    tags: ['imobiliario', 'alienacao-fiduciaria', 'conceitual'],
  }),
  q('q-lea-p1', {
    c: 'c-leasing-cdc', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir a titularidade do bem no leasing e no CDC',
    e: 'A diferença estrutural entre leasing e CDC é que, no leasing:',
    alt: [
      ['O bem é comprado e mantido pela arrendadora, cabendo ao cliente, ao final, optar entre comprar pelo valor residual, devolver ou renovar.', true, 'Correta. Durante o contrato o bem não é do cliente.'],
      ['O cliente é proprietário desde o início, com o bem em alienação fiduciária.', false, 'Isso descreve o CDC.'],
      ['Não há incidência de encargos financeiros sobre as parcelas.', false, 'Há remuneração do capital nas duas modalidades.'],
      ['O bem pode ser livremente vendido pelo cliente durante o contrato.', false, 'Justamente porque o bem não é dele, a venda não é possível.'],
    ],
    exp: 'A consequência prática é limitação para vender, transferir ou dar o bem em garantia enquanto o contrato corre.',
    tags: ['leasing', 'cdc', 'comparacao'],
  }),
  q('q-cnt-p1', {
    c: 'c-contas-deposito', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir conta de depósito de conta de pagamento',
    e: 'A diferença jurídica entre uma conta corrente e uma conta de pagamento de carteira digital é que:',
    alt: [
      ['A conta corrente é depósito à vista em instituição financeira, com FGC; a conta de pagamento não é depósito e seu saldo é protegido por segregação, sem FGC.', true, 'Correta. Telas parecidas, regimes distintos.'],
      ['Ambas são depósitos, mudando apenas a instituição que as oferece.', false, 'Conta de pagamento não é depósito.'],
      ['A conta de pagamento tem FGC ampliado por não render juros.', false, 'Não há FGC em conta de pagamento.'],
      ['A conta corrente não pode ser movimentada por meio eletrônico.', false, 'Pode, e é a forma predominante hoje.'],
    ],
    exp: 'A proteção segue a natureza jurídica do saldo, não a aparência do aplicativo.',
    tags: ['contas', 'fgc', 'comparacao'],
  }),
  q('q-cam-p1', {
    c: 'c-cambio-varejo', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Comparar propostas de câmbio pelo VET',
    ctx: 'Duas casas de câmbio oferecem cotações de turismo para a mesma quantia: uma com taxa levemente melhor e tarifa de serviço, outra com taxa pior e sem tarifa.',
    e: 'A comparação correta entre as propostas:',
    alt: [
      ['Deve ser feita pelo Valor Efetivo Total, que reúne taxa, IOF e tarifas.', true, 'Correta. A melhor taxa pode perder depois da tarifa.'],
      ['Deve considerar apenas a taxa de câmbio oferecida.', false, 'É o erro que o VET existe para evitar.'],
      ['Deve usar a cotação comercial divulgada na imprensa.', false, 'A comercial é entre instituições; o cliente paga a de turismo.'],
      ['É indiferente, pois o IOF equaliza as propostas.', false, 'O IOF incide sobre a operação, mas não iguala tarifas diferentes.'],
    ],
    exp: 'VET está para câmbio como CET está para crédito: o número que torna propostas comparáveis.',
    tags: ['cambio', 'vet', 'atendimento'],
  }),
  q('q-tar-p1', {
    c: 'c-tarifas-bancarias', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Comunicar corretamente a gratuidade dos serviços essenciais',
    ctx: 'Um cliente pergunta se os serviços essenciais da conta são gratuitos.',
    e: 'A resposta correta e completa é:',
    alt: [
      ['São gratuitos dentro dos limites de quantidade fixados em norma; o que exceder esses limites pode ser tarifado.', true, 'Correta. Afirmar gratuidade sem ressalva gera reclamação legítima depois.'],
      ['São integralmente gratuitos, sem qualquer limite.', false, 'A gratuidade é limitada por quantidade.'],
      ['São gratuitos apenas na conta salário.', false, 'A gratuidade dos essenciais não se restringe à conta salário.'],
      ['Podem ser tarifados livremente, desde que informados na tabela.', false, 'Isso descreve os serviços prioritários e diferenciados, não os essenciais.'],
    ],
    exp: 'Meia informação vira reclamação: a ressalva do limite é parte da resposta, não detalhe.',
    tags: ['tarifas', 'servicos-essenciais', 'atendimento'],
  }),
]
