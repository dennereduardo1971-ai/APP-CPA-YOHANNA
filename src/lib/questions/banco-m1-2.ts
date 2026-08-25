import { q } from './builder'

/**
 * Questões autorais — microtema 1.2 (Política econômica).
 *
 * Bloco conceitual e institucional: o que a prova cobra aqui é QUEM faz O QUÊ
 * (CMN define a meta, BACEN persegue) e QUAL índice serve a QUAL finalidade.
 * Por isso a maior parte dos distratores troca um órgão por outro ou um
 * índice por outro — que é exatamente como o candidato erra.
 *
 * Nenhuma questão fixa o valor vigente da meta de inflação, da Selic ou do
 * compulsório: são decisões revistas periodicamente, e questão com número de
 * política monetária envelhece junto com a ata (regra 4 do CLAUDE.md).
 */
export const BANCO_M1_2 = [
  /* ---- c-pib --------------------------------------------------------- */
  q('q-pib-01', {
    c: 'c-pib', tipo: 'conceitual', dif: 'facil',
    hab: 'Definir o que o PIB mede',
    e: 'O Produto Interno Bruto mede:',
    alt: [
      ['O valor dos bens e serviços FINAIS produzidos no país em um período.', true, 'Correta. Contar bens intermediários somaria o mesmo valor várias vezes.'],
      ['A soma do faturamento de todas as empresas do país.', false, 'Isso produz dupla contagem: o aço apareceria no faturamento da siderúrgica e de novo no da montadora.'],
      ['O total da riqueza acumulada pelo país ao longo de sua história.', false, 'PIB é fluxo de um período, não estoque de riqueza.'],
      ['A renda dos brasileiros, inclusive a produzida no exterior.', false, 'Isso descreve o PNB. O PIB é territorial.'],
    ],
    exp: 'PIB é fluxo, é territorial e conta só bens finais — as três características que a prova cobra.',
    tags: ['pib', 'conceitual', 'macroeconomia'],
  }),
  q('q-pib-02', {
    c: 'c-pib', tipo: 'calculo', dif: 'media',
    hab: 'Converter crescimento nominal em crescimento real',
    e: 'O PIB nominal cresceu 8% em um ano de inflação de 6%. O crescimento real foi de aproximadamente:',
    alt: [
      ['1,89%', true, 'Correta. (1,08 ÷ 1,06) − 1 = 0,0189. É a mesma fórmula de Fisher usada na taxa real.'],
      ['2,00%', false, 'É a subtração simples, que superestima — o mesmo viés do cálculo de rentabilidade real.'],
      ['14,00%', false, 'Soma a inflação ao crescimento em vez de descontá-la.'],
      ['8,00%', false, 'Repete o crescimento nominal sem descontar a inflação.'],
    ],
    exp: 'Crescimento real se obtém dividindo os fatores, não subtraindo as taxas. Vale para PIB e para rentabilidade.',
    tags: ['pib', 'calculo', 'inflacao'],
  }),
  q('q-pib-03', {
    c: 'c-pib', tipo: 'multipla_escolha', dif: 'media',
    hab: 'Identificar os componentes do PIB pela ótica da despesa',
    e: 'Na ótica da despesa, o PIB é composto por:',
    alt: [
      ['Consumo + investimento + gastos do governo + exportações − importações.', true, 'Correta. As importações são subtraídas porque não foram produzidas no país.'],
      ['Consumo + investimento + gastos do governo + importações − exportações.', false, 'Os sinais estão invertidos: importação sai, exportação entra.'],
      ['Salários + lucros + juros + aluguéis.', false, 'Essa é a ótica da RENDA, não da despesa.'],
      ['Valor adicionado da agropecuária, da indústria e dos serviços.', false, 'Essa é a ótica da PRODUÇÃO.'],
    ],
    exp: 'As três óticas chegam ao mesmo número. A questão testa se você sabe qual delas foi pedida.',
    tags: ['pib', 'oticas', 'despesa'],
  }),
  q('q-pib-04', {
    c: 'c-pib', tipo: 'aplicacao', dif: 'media',
    hab: 'Aplicar o conceito de valor adicionado',
    ctx: 'Um moinho vende R$ 30 de farinha à padaria, que vende R$ 100 de pão ao consumidor.',
    e: 'Quanto essa cadeia acrescenta ao PIB?',
    alt: [
      ['R$ 100, o valor do bem final.', true, 'Correta. R$ 30 de valor adicionado no moinho mais R$ 70 na padaria somam o preço do pão.'],
      ['R$ 130, a soma das duas vendas.', false, 'Isso conta a farinha duas vezes — uma como bem intermediário e outra dentro do pão.'],
      ['R$ 70, apenas o valor adicionado pela padaria.', false, 'Falta somar o valor adicionado pelo moinho.'],
      ['R$ 30, apenas o insumo produzido.', false, 'Considera só o começo da cadeia e ignora a transformação.'],
    ],
    exp: 'A soma dos valores adicionados sempre reproduz o preço do bem final. É o que impede a dupla contagem.',
    tags: ['pib', 'valor-adicionado', 'aplicacao'],
  }),
  q('q-pib-05', {
    c: 'c-pib', tipo: 'comparacao', dif: 'dificil',
    hab: 'Distinguir PIB de PNB',
    e: 'A produção de uma montadora japonesa instalada em São Paulo entra:',
    alt: [
      ['No PIB do Brasil, porque o PIB é territorial.', true, 'Correta. O PIB conta o que se produz dentro das fronteiras, seja qual for a nacionalidade do capital.'],
      ['No PNB do Brasil, porque a fábrica está em território brasileiro.', false, 'O PNB é por nacionalidade; essa produção pertence a capital japonês.'],
      ['Em nenhum dos dois, por se tratar de empresa estrangeira.', false, 'Toda produção realizada no território brasileiro entra no PIB do Brasil.'],
      ['No PIB do Japão, por causa da origem do capital.', false, 'O PIB japonês conta o que é produzido no Japão.'],
    ],
    exp: 'PIB é território; PNB é nacionalidade. A prova cobra o PIB, mas costuma testar a distinção.',
    tags: ['pib', 'pnb', 'comparacao'],
  }),

  /* ---- c-indices-precos ---------------------------------------------- */
  q('q-idx-01', {
    c: 'c-indices-precos', tipo: 'conceitual', dif: 'facil',
    hab: 'Identificar o índice oficial da meta de inflação',
    e: 'O índice utilizado como referência oficial no regime de metas de inflação brasileiro é o:',
    alt: [
      ['IPCA, medido pelo IBGE.', true, 'Correta. É o índice oficial da meta, com abrangência de 1 a 40 salários mínimos.'],
      ['IGP-M, medido pela FGV.', false, 'O IGP-M é da FGV e serve tipicamente a contratos de aluguel, não à meta.'],
      ['INPC, medido pelo IBGE.', false, 'O INPC é do IBGE, mas cobre faixa de renda menor e serve a reajuste salarial.'],
      ['INCC, medido pela FGV.', false, 'O INCC mede custos da construção civil e é apenas um componente do IGP-M.'],
    ],
    exp: 'IPCA e meta de inflação andam juntos. Quem MEDE é o IBGE; quem PERSEGUE a meta é o Banco Central.',
    tags: ['ipca', 'meta-inflacao', 'conceitual'],
  }),
  q('q-idx-02', {
    c: 'c-indices-precos', tipo: 'multipla_escolha', dif: 'media',
    hab: 'Reconhecer a composição do IGP-M',
    e: 'O IGP-M é composto por:',
    alt: [
      ['60% de índice de atacado, 30% ao consumidor e 10% da construção civil.', true, 'Correta. IPA 60%, IPC 30% e INCC 10%.'],
      ['60% ao consumidor, 30% de atacado e 10% da construção civil.', false, 'As proporções de atacado e consumidor estão invertidas.'],
      ['100% de preços ao consumidor, como o IPCA.', false, 'Isso descreveria um índice de consumidor puro; o IGP-M é composto.'],
      ['50% de atacado e 50% da construção civil.', false, 'Ignora o componente de consumidor e altera os pesos.'],
    ],
    exp: 'O peso de 60% no atacado é o que explica o IGP-M reagir a câmbio e commodities antes do IPCA.',
    tags: ['igpm', 'composicao', 'inflacao'],
  }),
  q('q-idx-03', {
    c: 'c-indices-precos', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Explicar a divergência entre índices ao cliente',
    ctx: 'Um cliente com contrato de aluguel corrigido pelo IGP-M reclama que o reajuste veio muito acima da inflação divulgada no noticiário.',
    e: 'A explicação tecnicamente correta é:',
    alt: [
      ['O noticiário costuma citar o IPCA; o contrato dele segue o IGP-M, que tem 60% de atacado e reage antes a câmbio e commodities.', true, 'Correta. Os dois números estão certos: medem cestas diferentes.'],
      ['Houve erro de cálculo do locador, pois todo reajuste deve seguir o IPCA.', false, 'Não há índice obrigatório: o contrato define qual se aplica.'],
      ['O IGP-M inclui a variação da Selic, e por isso subiu mais.', false, 'O IGP-M é índice de preços; não incorpora a taxa de juros.'],
      ['O IGP-M e o IPCA são idênticos, e a diferença é apenas de arredondamento.', false, 'São índices distintos, com instituições, cestas e composições diferentes.'],
    ],
    exp: 'Não existe "a inflação". Existe a de cada índice, e o contrato define qual vale naquele caso.',
    tags: ['igpm', 'ipca', 'atendimento'],
  }),
  q('q-idx-04', {
    c: 'c-indices-precos', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir IPCA de INPC',
    e: 'A principal diferença entre IPCA e INPC é:',
    alt: [
      ['A faixa de renda das famílias pesquisadas: até 40 salários mínimos no IPCA e até 5 no INPC.', true, 'Correta. Ambos são do IBGE; muda o público, e com ele o peso de cada item na cesta.'],
      ['A instituição responsável: IPCA é do IBGE e INPC é da FGV.', false, 'Os dois são do IBGE. Da FGV são os índices da família IGP.'],
      ['O IPCA mede preços no atacado e o INPC ao consumidor.', false, 'Nenhum dos dois mede atacado; isso é o IPA, componente do IGP.'],
      ['O INPC é anual e o IPCA é mensal.', false, 'Ambos têm apuração mensal.'],
    ],
    exp: 'Como as famílias de renda menor gastam proporcionalmente mais com alimento, o INPC costuma reagir mais a comida.',
    tags: ['ipca', 'inpc', 'comparacao'],
  }),
  q('q-idx-05', {
    c: 'c-indices-precos', tipo: 'aplicacao', dif: 'dificil',
    hab: 'Prever a reação dos índices a um choque cambial',
    ctx: 'O real sofre desvalorização acentuada em poucas semanas.',
    e: 'O comportamento esperado dos índices é:',
    alt: [
      ['O IGP-M reage antes e com mais força que o IPCA.', true, 'Correta. Os 60% de atacado captam quase imediatamente o repasse cambial de commodities e insumos.'],
      ['O IPCA reage antes, por medir o consumidor final.', false, 'É o contrário: o repasse ao consumidor final chega diluído e com defasagem de meses.'],
      ['Os dois reagem igualmente, pois medem a mesma inflação.', false, 'A composição diferente produz sensibilidades diferentes ao mesmo choque.'],
      ['Nenhum dos dois reage, pois câmbio não é preço de bem.', false, 'O câmbio é o canal mais rápido de repasse a preços internos.'],
    ],
    exp: 'É a composição que determina a sensibilidade. Atacado cota em dólar; varejo dilui em margens e serviços.',
    tags: ['igpm', 'cambio', 'inflacao'],
  }),
  q('q-idx-06', {
    c: 'c-indices-precos', tipo: 'conceitual', dif: 'dificil',
    hab: 'Distinguir IGP-M de IGP-DI',
    e: 'A diferença entre IGP-M e IGP-DI está:',
    alt: [
      ['Na janela de coleta: o IGP-M apura do dia 21 ao dia 20 e o IGP-DI do dia 1 ao 30.', true, 'Correta. A composição — IPA, IPC e INCC — é a mesma nos dois.'],
      ['Na composição: o IGP-DI não inclui o componente de atacado.', false, 'Os dois têm a mesma composição de 60/30/10.'],
      ['Na instituição: o IGP-M é da FGV e o IGP-DI do IBGE.', false, 'Ambos são calculados pela FGV.'],
      ['Na periodicidade: o IGP-DI é trimestral.', false, 'Os dois são de apuração mensal.'],
    ],
    exp: 'Mesma receita, forno diferente: o que muda entre IGP-M e IGP-DI é apenas o período de coleta.',
    tags: ['igpm', 'igpdi', 'conceitual'],
  }),

  /* ---- c-politica-monetaria ------------------------------------------ */
  q('q-pm-01', {
    c: 'c-politica-monetaria', tipo: 'conceitual', dif: 'facil',
    hab: 'Identificar quem define a meta de inflação',
    e: 'No arranjo institucional brasileiro, a meta de inflação é definida:',
    alt: [
      ['Pelo Conselho Monetário Nacional, cabendo ao Banco Central persegui-la.', true, 'Correta. É a divisão de papéis mais cobrada da matéria.'],
      ['Pelo Copom, em reunião ordinária.', false, 'O Copom define a Selic meta; a meta de INFLAÇÃO é do CMN.'],
      ['Pelo Banco Central, com aprovação do Congresso.', false, 'O Banco Central persegue a meta; quem a define é o CMN.'],
      ['Pelo IBGE, ao divulgar o IPCA.', false, 'O IBGE mede o índice; não define meta alguma.'],
    ],
    exp: 'CMN define, BACEN persegue, IBGE mede, Copom fixa a Selic. Quatro papéis distintos.',
    tags: ['cmn', 'meta-inflacao', 'competencias'],
  }),
  q('q-pm-02', {
    c: 'c-politica-monetaria', tipo: 'multipla_escolha', dif: 'media',
    hab: 'Reconhecer os instrumentos de política monetária',
    e: 'São instrumentos clássicos de política monetária:',
    alt: [
      ['Taxa de juros, depósito compulsório, operações de mercado aberto e redesconto.', true, 'Correta. São os quatro instrumentos à disposição do Banco Central.'],
      ['Taxa de juros, alíquota de imposto de renda e salário mínimo.', false, 'Tributo e salário mínimo são instrumentos fiscais e de política de renda, não monetários.'],
      ['Emissão de títulos do Tesouro e definição do orçamento anual.', false, 'Isso é política fiscal, conduzida pelo Tesouro Nacional.'],
      ['Meta de inflação, meta de superávit primário e câmbio fixo.', false, 'São objetivos e regimes, não instrumentos operacionais.'],
    ],
    exp: 'Instrumento é o que o BC opera diretamente. Meta é o alvo; instrumento é a ferramenta.',
    tags: ['politica-monetaria', 'instrumentos', 'bacen'],
  }),
  q('q-pm-03', {
    c: 'c-politica-monetaria', tipo: 'aplicacao', dif: 'media',
    hab: 'Classificar medidas como expansionistas ou contracionistas',
    e: 'Constitui medida de política monetária CONTRACIONISTA:',
    alt: [
      ['Elevar o depósito compulsório dos bancos.', true, 'Correta. Sobra menos para emprestar, o crédito encolhe e a demanda esfria.'],
      ['Reduzir a taxa Selic.', false, 'Juro menor barateia o crédito e estimula a demanda — é expansionista.'],
      ['Comprar títulos públicos no mercado aberto.', false, 'Comprar títulos injeta moeda na economia; é expansionista.'],
      ['Ampliar as linhas de redesconto aos bancos.', false, 'Ampliar redesconto aumenta a liquidez do sistema; é expansionista.'],
    ],
    exp: 'Contracionista enxuga moeda: juro sobe, compulsório sobe, o BC VENDE títulos.',
    tags: ['politica-monetaria', 'contracionista', 'aplicacao'],
  }),
  q('q-pm-04', {
    c: 'c-politica-monetaria', tipo: 'conceitual', dif: 'media',
    hab: 'Distinguir Selic meta de Selic efetiva',
    e: 'A diferença entre Selic meta e Selic efetiva é que a meta:',
    alt: [
      ['É o alvo definido pelo Copom, enquanto a efetiva é a taxa média apurada nas operações compromissadas.', true, 'Correta. A efetiva flutua em torno do alvo.'],
      ['É a taxa cobrada dos bancos, enquanto a efetiva é a paga ao investidor.', false, 'Ambas se referem ao mesmo mercado de reservas bancárias.'],
      ['É anual e a efetiva é mensal.', false, 'Ambas são expressas ao ano.'],
      ['Já inclui a inflação, enquanto a efetiva é real.', false, 'As duas são taxas nominais; descontar inflação é outra operação.'],
    ],
    exp: 'O Copom define o alvo; o mercado produz a taxa efetiva, que orbita esse alvo.',
    tags: ['selic', 'copom', 'conceitual'],
  }),
  q('q-pm-05', {
    c: 'c-politica-monetaria', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Explicar efeitos opostos de uma alta de juros na carteira',
    ctx: 'Após uma alta da Selic, o cliente liga preocupado: o saldo do Tesouro Prefixado caiu, mas o CDB pós-fixado dele passou a render mais.',
    e: 'A explicação correta é:',
    alt: [
      ['A mesma decisão produz efeitos opostos: o pós-fixado acompanha a nova taxa e o prefixado já emitido se desvaloriza por marcação a mercado.', true, 'Correta. Não há erro nem contradição — são mecanismos diferentes sobre produtos diferentes.'],
      ['Houve erro na marcação do Tesouro, pois títulos públicos não oscilam.', false, 'Títulos públicos prefixados oscilam diariamente por marcação a mercado.'],
      ['O prefixado caiu porque o Tesouro reduziu a taxa contratada.', false, 'A taxa contratada não muda; o que muda é o preço de mercado do título.'],
      ['O CDB rendeu mais porque o banco elevou a taxa por conta própria.', false, 'O CDB pós-fixado acompanha o indexador automaticamente, sem decisão do banco.'],
    ],
    exp: 'Uma decisão do Copom atravessa a carteira inteira, e nem sempre no mesmo sentido. Explicar isso é atendimento.',
    tags: ['selic', 'marcacao-mercado', 'atendimento'],
  }),
  q('q-pm-06', {
    c: 'c-politica-monetaria', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar a periodicidade das reuniões do Copom',
    e: 'As reuniões ordinárias do Copom ocorrem:',
    alt: [
      ['A cada 45 dias, oito vezes ao ano.', true, 'Correta. É o calendário ordinário do comitê, divulgado com antecedência.'],
      ['Mensalmente, doze vezes ao ano.', false, 'O intervalo ordinário é de 45 dias, não de 30.'],
      ['Trimestralmente, quatro vezes ao ano.', false, 'Quatro reuniões seriam insuficientes para o horizonte da política monetária brasileira.'],
      ['Semanalmente, para acompanhar o mercado aberto.', false, 'Operações de mercado aberto são diárias, mas não exigem reunião do comitê.'],
    ],
    exp: 'Oito reuniões ao ano, a cada 45 dias. O calendário é público e conhecido com antecedência pelo mercado.',
    tags: ['copom', 'calendario', 'conceitual'],
  }),

  /* ---- c-politica-fiscal --------------------------------------------- */
  q('q-pf-01', {
    c: 'c-politica-fiscal', tipo: 'conceitual', dif: 'facil',
    hab: 'Definir resultado primário',
    e: 'O resultado primário do setor público corresponde a:',
    alt: [
      ['Receitas menos despesas, excluídos os juros da dívida.', true, 'Correta. Mede o esforço fiscal do período, isolado do custo da dívida herdada.'],
      ['Receitas menos despesas, incluídos os juros da dívida.', false, 'Isso é o resultado NOMINAL.'],
      ['O total da dívida pública em proporção do PIB.', false, 'Isso é um estoque; o resultado primário é um fluxo do período.'],
      ['A arrecadação tributária federal do exercício.', false, 'Arrecadação é apenas o lado da receita, sem confrontar despesas.'],
    ],
    exp: 'Primário exclui juros de propósito: mede o que o governo controla no período, sem o peso da dívida antiga.',
    tags: ['politica-fiscal', 'primario', 'conceitual'],
  }),
  q('q-pf-02', {
    c: 'c-politica-fiscal', tipo: 'calculo', dif: 'media',
    hab: 'Calcular o resultado nominal a partir do primário',
    ctx: 'Um governo apura superávit primário de R$ 5 bilhões e paga R$ 20 bilhões de juros da dívida no mesmo período.',
    e: 'O resultado nominal é:',
    alt: [
      ['Déficit de R$ 15 bilhões.', true, 'Correta. 5 − 20 = −15. É esse número que aumenta o estoque da dívida.'],
      ['Superávit de R$ 25 bilhões.', false, 'Soma os juros em vez de subtraí-los.'],
      ['Superávit de R$ 5 bilhões.', false, 'Repete o resultado primário sem considerar a conta de juros.'],
      ['Equilíbrio, pois o esforço primário compensa os juros.', false, 'O esforço de R$ 5 bilhões não cobre R$ 20 bilhões de juros.'],
    ],
    exp: 'Superávit primário e déficit nominal convivem sempre que a conta de juros supera o esforço fiscal.',
    tags: ['politica-fiscal', 'nominal', 'calculo'],
  }),
  q('q-pf-03', {
    c: 'c-politica-fiscal', tipo: 'aplicacao', dif: 'media',
    hab: 'Relacionar risco fiscal e preço de títulos',
    e: 'Uma piora na percepção de risco fiscal do país tende a produzir, sobre os títulos públicos prefixados longos já emitidos:',
    alt: [
      ['Queda de preço, pois o mercado passa a exigir taxa maior para carregá-los.', true, 'Correta. Taxa exigida maior significa preço menor nos títulos existentes.'],
      ['Alta de preço, pois o governo passa a pagar mais juros.', false, 'O título já emitido tem taxa fixa; quem sobe é a taxa EXIGIDA, e isso derruba o preço.'],
      ['Nenhum efeito, pois títulos públicos não têm risco.', false, 'Títulos públicos têm risco de mercado, e risco soberano existe.'],
      ['Queda apenas nos pós-fixados, que acompanham a Selic.', false, 'O pós-fixado é justamente o menos sensível; quem sofre é o prefixado longo.'],
    ],
    exp: 'É a mesma mecânica da marcação a mercado, com o prêmio de risco no lugar da política monetária.',
    tags: ['politica-fiscal', 'risco', 'marcacao-mercado'],
  }),
  q('q-pf-04', {
    c: 'c-politica-fiscal', tipo: 'comparacao', dif: 'dificil',
    hab: 'Explicar a dinâmica da dívida em proporção do PIB',
    e: 'A relação dívida/PIB pode CAIR mesmo em um ano de déficit nominal quando:',
    alt: [
      ['O PIB nominal cresce mais rápido que o estoque da dívida.', true, 'Correta. A relação é uma fração: se o denominador cresce mais, a razão cai.'],
      ['O governo apura superávit primário, independentemente do PIB.', false, 'Superávit primário ajuda, mas não garante queda se os juros forem maiores.'],
      ['A Selic é elevada, encarecendo o custo da dívida.', false, 'Selic maior encarece a dívida e piora a dinâmica.'],
      ['Isso é impossível: déficit nominal sempre eleva a relação dívida/PIB.', false, 'Eleva o estoque em reais, mas a RELAÇÃO depende também do PIB.'],
    ],
    exp: 'Dívida/PIB é uma fração. É por isso que crescimento — e, no curto prazo, inflação — aparecem como aliados da estatística fiscal.',
    tags: ['politica-fiscal', 'divida', 'pib'],
  }),
  q('q-pf-05', {
    c: 'c-politica-fiscal', tipo: 'aplicacao', dif: 'media',
    hab: 'Classificar medidas fiscais',
    e: 'Constitui medida de política fiscal EXPANSIONISTA:',
    alt: [
      ['Reduzir alíquotas de tributos sobre o consumo.', true, 'Correta. Menos tributo deixa mais renda disponível e estimula a demanda.'],
      ['Elevar a taxa Selic.', false, 'Selic é instrumento de política MONETÁRIA, não fiscal.'],
      ['Elevar o depósito compulsório.', false, 'Compulsório também é instrumento monetário.'],
      ['Reduzir o gasto público de custeio.', false, 'Reduzir gasto é medida contracionista.'],
    ],
    exp: 'Fiscal age por receita e despesa do governo; monetária age por moeda e juros. A prova troca uma pela outra com frequência.',
    tags: ['politica-fiscal', 'expansionista', 'aplicacao'],
  }),

  /* ---- c-politica-cambial -------------------------------------------- */
  q('q-pc-01', {
    c: 'c-politica-cambial', tipo: 'conceitual', dif: 'facil',
    hab: 'Identificar o regime cambial brasileiro',
    e: 'O regime cambial vigente no Brasil é classificado como:',
    alt: [
      ['Flutuante, com intervenções pontuais do Banco Central.', true, 'Correta. A cotação é de mercado; o BC atua contra volatilidade excessiva, sem perseguir nível.'],
      ['Fixo, com paridade definida pelo Banco Central.', false, 'O regime fixo foi abandonado em 1999.'],
      ['De bandas cambiais, com piso e teto anunciados.', false, 'As bandas pertencem ao período anterior a 1999.'],
      ['Flutuante puro, sem qualquer intervenção.', false, 'O BC intervém quando o mercado funciona de forma desordenada.'],
    ],
    exp: 'A palavra-chave é "flutuante". A intervenção existe, mas mira o funcionamento do mercado, não a cotação.',
    tags: ['cambio', 'regime', 'conceitual'],
  }),
  q('q-pc-02', {
    c: 'c-politica-cambial', tipo: 'aplicacao', dif: 'facil',
    hab: 'Prever os efeitos de uma desvalorização cambial',
    e: 'A desvalorização do real diante do dólar tende a:',
    alt: [
      ['Encarecer produtos importados e favorecer exportadores.', true, 'Correta. Mais reais por dólar encarece o que vem de fora e aumenta a receita em reais do exportador.'],
      ['Baratear importados e prejudicar exportadores.', false, 'Descreve exatamente o efeito de uma VALORIZAÇÃO do real.'],
      ['Reduzir a inflação, ao baratear insumos.', false, 'Insumos importados ficam mais caros, o que pressiona a inflação para cima.'],
      ['Não afetar preços internos, apenas viagens ao exterior.', false, 'O repasse cambial atinge insumos, commodities e bens comercializáveis.'],
    ],
    exp: 'Real fraco: importado caro, exportação competitiva, pressão inflacionária. Real forte: o inverso.',
    tags: ['cambio', 'inflacao', 'aplicacao'],
  }),
  q('q-pc-03', {
    c: 'c-politica-cambial', tipo: 'conceitual', dif: 'dificil',
    hab: 'Explicar o funcionamento do swap cambial',
    e: 'O swap cambial utilizado pelo Banco Central caracteriza-se por:',
    alt: [
      ['Ser um derivativo de liquidação financeira em reais, que oferece proteção sem consumir reservas.', true, 'Correta. Nenhum dólar troca de mãos: a liquidação é pela diferença, em reais.'],
      ['Ser a venda direta de dólares das reservas ao mercado.', false, 'Isso é a intervenção à vista, que de fato consome reservas.'],
      ['Ser um empréstimo em moeda estrangeira aos bancos.', false, 'Isso descreve os leilões de linha, que envolvem entrega de divisa com recompra.'],
      ['Fixar a cotação do dólar em um patamar determinado.', false, 'O swap oferece hedge; não fixa cotação alguma.'],
    ],
    exp: 'O swap é a peça que permite intervir preservando o estoque de reservas — hedge sem entrega de moeda.',
    tags: ['cambio', 'swap', 'derivativos'],
  }),
  q('q-pc-04', {
    c: 'c-politica-cambial', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Avaliar a adequação da compra de moeda estrangeira',
    ctx: 'Um cliente sem qualquer despesa futura em moeda estrangeira quer aplicar parte relevante do patrimônio em dólar "porque vai subir".',
    e: 'A abordagem tecnicamente correta é:',
    alt: [
      ['Esclarecer que, sem passivo em moeda estrangeira, a operação é aposta direcional e precisa caber no perfil dele.', true, 'Correta. Sem despesa futura em dólar não há hedge; há exposição a risco cambial.'],
      ['Recomendar a compra, pois dólar é reserva de valor e não tem risco.', false, 'O câmbio é volátil; dólar não é ativo livre de risco para quem tem despesas em reais.'],
      ['Recusar qualquer exposição cambial, que é sempre inadequada.', false, 'Exposição cambial é legítima quando compatível com o perfil e o objetivo.'],
      ['Sugerir que ele concentre todo o patrimônio em dólar para proteger-se da inflação.', false, 'Concentração é risco em si, e o câmbio não é hedge de inflação doméstica.'],
    ],
    exp: 'Proteção cambial pressupõe passivo em moeda estrangeira. Sem ele, a operação muda de natureza — e de exigência de perfil.',
    tags: ['cambio', 'suitability', 'atendimento'],
  }),
  q('q-pc-05', {
    c: 'c-politica-cambial', tipo: 'comparacao', dif: 'media',
    hab: 'Comparar regimes cambiais quanto ao uso de reservas',
    e: 'Comparado ao regime flutuante, o regime de câmbio FIXO caracteriza-se por:',
    alt: [
      ['Exigir uso intensivo de reservas para defender a paridade anunciada.', true, 'Correta. Manter a cotação obriga a autoridade a comprar e vender divisa contra o mercado.'],
      ['Dispensar reservas, pois a cotação é definida por decreto.', false, 'Anunciar a paridade não basta: é preciso sustentá-la com divisas.'],
      ['Produzir maior volatilidade cambial no dia a dia.', false, 'O regime fixo reduz a volatilidade diária — esse é seu principal atrativo.'],
      ['Preservar plena autonomia da política monetária.', false, 'Com conta de capital aberta, câmbio fixo custa justamente a autonomia monetária.'],
    ],
    exp: 'Câmbio fixo compra previsibilidade e paga com reservas e com autonomia monetária.',
    tags: ['cambio', 'regime', 'comparacao'],
  }),

  /* ---- c-contas-externas ---------------------------------------------- */
  q('q-bp-01', {
    c: 'c-contas-externas', tipo: 'multipla_escolha', dif: 'media',
    hab: 'Identificar os componentes da conta corrente',
    e: 'A conta corrente do balanço de pagamentos é composta por:',
    alt: [
      ['Balança comercial, serviços, renda primária e renda secundária.', true, 'Correta. São os quatro grupos que a compõem.'],
      ['Balança comercial e conta financeira.', false, 'A conta financeira é externa à conta corrente; ela financia o resultado dela.'],
      ['Apenas a balança comercial de bens.', false, 'A balança comercial é só um dos quatro grupos.'],
      ['Investimento direto, investimento em carteira e reservas.', false, 'Esses são componentes da conta FINANCEIRA.'],
    ],
    exp: 'Conta corrente tem quatro grupos. Confundi-la com a balança comercial é o erro mais comum do tema.',
    tags: ['balanco-pagamentos', 'conta-corrente', 'multipla-escolha'],
  }),
  q('q-bp-02', {
    c: 'c-contas-externas', tipo: 'aplicacao', dif: 'media',
    hab: 'Classificar transações nas contas do balanço',
    e: 'O gasto de um turista brasileiro em viagem ao exterior é registrado em:',
    alt: [
      ['Serviços, dentro da conta corrente.', true, 'Correta. Viagem é serviço; a balança comercial registra apenas bens.'],
      ['Balança comercial, por envolver saída de divisas.', false, 'A balança comercial cobre bens, não serviços — mesmo com saída de divisas.'],
      ['Renda primária, por ser transferência ao exterior.', false, 'Renda primária registra juros, lucros e dividendos.'],
      ['Conta financeira, por afetar as reservas.', false, 'A conta financeira registra investimentos e reservas, não consumo de serviços.'],
    ],
    exp: 'Regra prática: bem vai para comercial; frete, viagem e seguro vão para serviços.',
    tags: ['balanco-pagamentos', 'servicos', 'aplicacao'],
  }),
  q('q-bp-03', {
    c: 'c-contas-externas', tipo: 'aplicacao', dif: 'media',
    hab: 'Classificar remessa de lucros ao exterior',
    e: 'A remessa de lucros de uma multinacional instalada no Brasil à sua matriz no exterior é registrada em:',
    alt: [
      ['Renda primária, dentro da conta corrente.', true, 'Correta. Renda primária registra juros, lucros e dividendos.'],
      ['Renda secundária, por ser transferência ao exterior.', false, 'Renda secundária registra transferências UNILATERAIS, sem contrapartida.'],
      ['Conta financeira, como desinvestimento.', false, 'Remeter lucro não desfaz o investimento; o capital permanece no país.'],
      ['Balança comercial, como importação de serviços.', false, 'Não há bem nem serviço envolvido, e a balança comercial cobre apenas bens.'],
    ],
    exp: 'Lucro e dividendo remetidos são REMUNERAÇÃO de capital — e remuneração de fator vai para renda primária.',
    tags: ['balanco-pagamentos', 'renda-primaria', 'aplicacao'],
  }),
  q('q-bp-04', {
    c: 'c-contas-externas', tipo: 'calculo', dif: 'dificil',
    hab: 'Apurar o saldo em conta corrente',
    ctx: 'Um país exporta US$ 100 e importa US$ 80 de bens no período, e remete US$ 40 de lucros e dividendos ao exterior. Não há outros lançamentos relevantes.',
    e: 'O saldo em conta corrente é:',
    alt: [
      ['Déficit de US$ 20.', true, 'Correta. Superávit comercial de US$ 20 menos US$ 40 de renda primária.'],
      ['Superávit de US$ 20.', false, 'Esse é o saldo da balança comercial isolada; falta descontar a renda primária.'],
      ['Déficit de US$ 40.', false, 'Considera apenas a remessa e ignora o superávit comercial.'],
      ['Superávit de US$ 60.', false, 'Soma a remessa em vez de subtraí-la.'],
    ],
    exp: 'Superávit comercial não garante conta corrente positiva. A remessa de renda pode virar o resultado.',
    tags: ['balanco-pagamentos', 'conta-corrente', 'calculo'],
  }),
  q('q-bp-05', {
    c: 'c-contas-externas', tipo: 'conceitual', dif: 'dificil',
    hab: 'Avaliar a qualidade do financiamento externo',
    e: 'Um déficit em conta corrente financiado por investimento direto no país (IDP), em comparação com um financiado por investimento em carteira, é considerado:',
    alt: [
      ['Mais sustentável, pois o IDP cria capacidade produtiva e é dificilmente reversível.', true, 'Correta. Capital de carteira pode sair na velocidade de uma ordem de venda.'],
      ['Menos sustentável, pois o IDP compromete o país no longo prazo.', false, 'O horizonte longo é justamente a vantagem do IDP.'],
      ['Equivalente, pois ambos entram pela conta financeira.', false, 'Entram pela mesma conta, mas com volatilidade e reversibilidade muito diferentes.'],
      ['Irrelevante, pois déficit em conta corrente é sempre insustentável.', false, 'Déficit em conta corrente não é problema em si; o que importa é como se financia.'],
    ],
    exp: 'O que separa um déficit administrável de uma crise cambial não é o tamanho — é a natureza do capital que o financia.',
    tags: ['balanco-pagamentos', 'idp', 'risco'],
  }),
]
