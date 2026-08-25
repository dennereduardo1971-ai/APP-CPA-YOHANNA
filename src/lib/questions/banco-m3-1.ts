import { q } from './builder'

/**
 * Questões autorais — microtema 3.1 (Finanças pessoais).
 *
 * Este bloco cobra JULGAMENTO, não memória: quase toda questão apresenta um
 * cliente e pede a recomendação tecnicamente correta. Por isso os distratores
 * são recomendações plausíveis e comercialmente convenientes — aplicar a
 * sobra de quem tem rotativo aberto, seguir o perfil arrojado num objetivo de
 * doze meses, manter reserva em ativo que rende mais. São exatamente as
 * escolhas que atendem à meta e não ao cliente.
 */
export const BANCO_M3_1 = [
  /* ---- c-orcamento ------------------------------------------------------ */
  q('q-orc-01', {
    c: 'c-orcamento', tipo: 'calculo', dif: 'facil',
    hab: 'Calcular a capacidade mensal de poupança',
    ctx: 'Renda líquida mensal de R$ 6.000, despesas fixas de R$ 3.500 e despesas variáveis de R$ 1.700.',
    e: 'A capacidade mensal de poupança é de:',
    alt: [
      ['R$ 800', true, 'Correta. 6.000 − 3.500 − 1.700 = 800.'],
      ['R$ 2.500', false, 'Considera apenas as despesas fixas e ignora as variáveis.'],
      ['R$ 1.700', false, 'Repete o valor das despesas variáveis.'],
      ['R$ 4.300', false, 'Subtrai apenas as variáveis da renda.'],
    ],
    exp: 'É a sobra, e não o saldo em conta, que define o aporte mensal sustentável.',
    tags: ['orcamento', 'poupanca', 'calculo'],
  }),
  q('q-orc-02', {
    c: 'c-orcamento', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Dimensionar aporte compatível com o orçamento',
    ctx: 'Um cliente com sobra mensal de R$ 800 acaba de receber o décimo terceiro e quer iniciar aportes mensais de R$ 2.000.',
    e: 'A recomendação tecnicamente adequada é:',
    alt: [
      ['Programar aporte recorrente de R$ 800 e destinar o décimo terceiro a um aporte único.', true, 'Correta. Separa o que é recorrente do que é extraordinário.'],
      ['Aceitar o aporte de R$ 2.000 mensais, já que ele tem o valor disponível agora.', false, 'O décimo terceiro cobre poucos meses; depois viria resgate antecipado.'],
      ['Recusar qualquer aporte até que a sobra suba para R$ 2.000.', false, 'A sobra de R$ 800 é real e deve ser aproveitada.'],
      ['Aportar R$ 2.000 e usar o cheque especial nos meses de aperto.', false, 'Financiar aporte com crédito caro destrói valor de forma aritmética.'],
    ],
    exp: 'Aporte além da sobra vira resgate em poucos meses, muitas vezes com perda de rentabilidade ou marcação desfavorável.',
    tags: ['orcamento', 'aporte', 'atendimento'],
  }),
  q('q-orc-03', {
    c: 'c-orcamento', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer o tratamento das despesas sazonais',
    e: 'Despesas como IPVA, IPTU e material escolar devem ser tratadas no orçamento por meio de:',
    alt: [
      ['Provisão mensal, dividindo o valor anual pelos doze meses.', true, 'Correta. Sem provisão, elas viram dívida cara no mês em que se concentram.'],
      ['Registro apenas no mês em que ocorrem.', false, 'Isso produz um mês estruturalmente deficitário e leva ao uso de crédito rotativo.'],
      ['Exclusão do orçamento, por não serem recorrentes.', false, 'Elas são previsíveis e recorrentes ao longo do ano, ainda que concentradas.'],
      ['Inclusão entre as despesas variáveis, ajustáveis mês a mês.', false, 'São de baixa margem de ajuste; o que muda é a concentração, não o valor.'],
    ],
    exp: 'O problema da sazonal é descasamento temporal: renda mensal contra despesa anual. A provisão converte uma na outra.',
    tags: ['orcamento', 'sazonal', 'conceitual'],
  }),

  /* ---- c-balanco-pessoal ------------------------------------------------ */
  q('q-bp2-01', {
    c: 'c-balanco-pessoal', tipo: 'calculo', dif: 'facil',
    hab: 'Calcular o patrimônio líquido pessoal',
    ctx: 'Um cliente tem imóvel avaliado em R$ 350.000, investimentos de R$ 45.000 e R$ 5.000 em conta. O saldo devedor do financiamento imobiliário é R$ 280.000.',
    e: 'O patrimônio líquido dele é de:',
    alt: [
      ['R$ 120.000', true, 'Correta. Ativos de 400.000 menos passivos de 280.000.'],
      ['R$ 400.000', false, 'Soma os ativos e ignora o saldo devedor do financiamento.'],
      ['R$ 70.000', false, 'Considera apenas o imóvel líquido do financiamento e ignora os demais ativos.'],
      ['R$ 680.000', false, 'Soma o passivo ao ativo em vez de subtraí-lo.'],
    ],
    exp: 'Bem financiado entra duas vezes: o valor no ativo e o saldo devedor no passivo. Contar só um dos dois é o erro clássico.',
    tags: ['balanco', 'patrimonio-liquido', 'calculo'],
  }),
  q('q-bp2-02', {
    c: 'c-balanco-pessoal', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Diagnosticar riqueza ilíquida',
    ctx: 'Um cliente tem patrimônio líquido de R$ 1 milhão, quase integralmente em um imóvel, e mantém R$ 2.000 em conta corrente. Ele quer investir em um produto de longo prazo.',
    e: 'A recomendação tecnicamente adequada é:',
    alt: [
      ['Construir reserva de emergência antes de qualquer novo investimento de longo prazo.', true, 'Correta. Patrimônio alto e ilíquido converte qualquer imprevisto em dívida cara.'],
      ['Aportar no produto de longo prazo, já que o patrimônio é elevado.', false, 'Patrimônio alto não é o mesmo que patrimônio disponível.'],
      ['Vender o imóvel para diversificar imediatamente.', false, 'Medida desproporcional; o problema é falta de liquidez, não concentração em si.'],
      ['Contratar crédito com garantia do imóvel para investir.', false, 'Alavancar para investir aumenta o risco em vez de resolver a falta de liquidez.'],
    ],
    exp: 'Balanço revela o que o orçamento esconde: aqui, alto patrimônio com liquidez quase nula.',
    tags: ['balanco', 'liquidez', 'atendimento'],
  }),
  q('q-bp2-03', {
    c: 'c-balanco-pessoal', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir orçamento de balanço',
    e: 'A diferença entre orçamento pessoal e balanço patrimonial pessoal é que o orçamento:',
    alt: [
      ['Registra fluxos de um período, enquanto o balanço registra a posição em uma data.', true, 'Correta. Um é filme; o outro é foto.'],
      ['Registra a posição em uma data, enquanto o balanço registra fluxos.', false, 'As definições estão invertidas.'],
      ['Inclui apenas receitas, enquanto o balanço inclui apenas despesas.', false, 'O orçamento confronta receitas e despesas.'],
      ['Substitui o balanço quando há patrimônio líquido positivo.', false, 'São instrumentos complementares e nenhum substitui o outro.'],
    ],
    exp: 'Orçamento equilibrado com patrimônio líquido negativo é situação comum — e invisível se só se olha o mês.',
    tags: ['balanco', 'orcamento', 'comparacao'],
  }),

  /* ---- c-reserva-emergencia --------------------------------------------- */
  q('q-re-01', {
    c: 'c-reserva-emergencia', tipo: 'conceitual', dif: 'facil',
    hab: 'Identificar as características exigidas da reserva',
    e: 'Qual característica é INDISPENSÁVEL no produto usado como reserva de emergência?',
    alt: [
      ['Liquidez diária e baixa volatilidade.', true, 'Correta. A reserva precisa estar disponível e íntegra no dia em que for necessária.'],
      ['Rentabilidade consistentemente acima do CDI.', false, 'Rentabilidade é o critério menos importante na reserva.'],
      ['Isenção de imposto de renda.', false, 'Isenção é desejável, mas não substitui liquidez nem estabilidade.'],
      ['Prazo mínimo de carência de dois anos.', false, 'Carência é exatamente o oposto do que a reserva exige.'],
    ],
    exp: 'A reserva não existe para render: existe para estar lá no dia em que a renda falhar.',
    tags: ['reserva-emergencia', 'liquidez', 'conceitual'],
  }),
  q('q-re-02', {
    c: 'c-reserva-emergencia', tipo: 'aplicacao', dif: 'media',
    hab: 'Dimensionar a reserva conforme a estabilidade da renda',
    ctx: 'Dois clientes têm a mesma despesa mensal. O primeiro é servidor público; o segundo é profissional autônomo com renda irregular.',
    e: 'Sobre o dimensionamento da reserva de cada um:',
    alt: [
      ['O autônomo precisa de mais meses de despesa, porque a interrupção de renda é mais provável e mais longa.', true, 'Correta. A referência sobe de três a seis para seis a doze meses.'],
      ['Ambos precisam do mesmo valor, pois as despesas são iguais.', false, 'O tamanho depende da estabilidade da renda, não só da despesa.'],
      ['O servidor precisa de mais, por ter renda maior ao longo da carreira.', false, 'Renda futura estável reduz, e não aumenta, a necessidade de reserva.'],
      ['O autônomo deve dispensar a reserva e manter tudo investido.', false, 'É justamente quem tem renda instável que mais precisa de reserva.'],
    ],
    exp: 'A reserva se mede em meses de DESPESA, e o número de meses vem da estabilidade da renda.',
    tags: ['reserva-emergencia', 'dimensionamento', 'aplicacao'],
  }),
  q('q-re-03', {
    c: 'c-reserva-emergencia', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Recusar alocação inadequada da reserva',
    ctx: 'Um autônomo pergunta se pode manter a reserva de emergência em um fundo de ações, alegando que rende mais.',
    e: 'A resposta tecnicamente correta e sua justificativa são:',
    alt: [
      ['Não, porque a reserva é acionada quando a renda cai, e quedas de renda costumam coincidir com quedas de mercado.', true, 'Correta. Ele venderia na baixa exatamente no mês em que mais precisa do dinheiro.'],
      ['Sim, desde que ele assine o termo de ciência de risco.', false, 'Termo de ciência não torna adequada uma alocação incompatível com a finalidade.'],
      ['Sim, pois o perfil dele autoriza renda variável.', false, 'Perfil autoriza risco na carteira de longo prazo, não na reserva.'],
      ['Não, porque fundos de ações têm carência mínima de resgate por lei.', false, 'A razão não é jurídica: é a correlação entre o momento do saque e o preço do ativo.'],
    ],
    exp: 'O risco e a necessidade de liquidez são o mesmo evento. É isso que torna ativo cíclico inadequado para reserva.',
    tags: ['reserva-emergencia', 'suitability', 'atendimento'],
  }),
  q('q-re-04', {
    c: 'c-reserva-emergencia', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer a unidade de medida da reserva',
    e: 'A reserva de emergência deve ser dimensionada em:',
    alt: [
      ['Meses de despesa do cliente.', true, 'Correta. O que a reserva cobre é o custo de vida durante a interrupção de renda.'],
      ['Múltiplos do salário bruto.', false, 'Quem tem alta taxa de poupança precisa de reserva menor, mesmo com salário alto.'],
      ['Percentual fixo do patrimônio total.', false, 'O patrimônio pode ser ilíquido e não guarda relação com a despesa mensal.'],
      ['Valor absoluto padronizado, igual para todos os clientes.', false, 'A necessidade varia com o custo de vida e a estabilidade da renda.'],
    ],
    exp: 'Quem ganha R$ 10.000 e gasta R$ 4.000 precisa de reserva bem menor que quem ganha o mesmo e gasta R$ 9.500.',
    tags: ['reserva-emergencia', 'dimensionamento', 'conceitual'],
  }),

  /* ---- c-endividamento --------------------------------------------------- */
  q('q-end-01', {
    c: 'c-endividamento', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Priorizar quitação de dívida cara sobre investimento',
    ctx: 'Um cliente com sobra mensal no orçamento mantém saldo aberto no rotativo do cartão e pede sugestão de aplicação.',
    e: 'A recomendação tecnicamente correta é:',
    alt: [
      ['Direcionar a sobra à quitação da dívida antes de iniciar qualquer aplicação.', true, 'Correta. Quitar é investimento com retorno certo igual à taxa da dívida.'],
      ['Aplicar a sobra em renda fixa de liquidez diária.', false, 'Nenhum ativo compatível com o perfil rende o que o rotativo cobra.'],
      ['Dividir a sobra igualmente entre aplicação e pagamento.', false, 'Metade aplicada continua rendendo menos do que a dívida custa.'],
      ['Contratar empréstimo maior para investir com alavancagem.', false, 'Aumenta a exposição e o custo, agravando o problema.'],
    ],
    exp: 'Recomendar aplicação nesse cenário atende à meta comercial, não ao cliente.',
    tags: ['endividamento', 'conduta', 'atendimento'],
  }),
  q('q-end-02', {
    c: 'c-endividamento', tipo: 'conceitual', dif: 'dificil',
    hab: 'Caracterizar o superendividamento',
    e: 'Na legislação de proteção do consumidor, o superendividamento caracteriza-se pela:',
    alt: [
      ['Impossibilidade manifesta de o consumidor pessoa natural, de boa-fé, pagar suas dívidas de consumo sem comprometer o mínimo existencial.', true, 'Correta. São três elementos: pessoa natural, boa-fé e mínimo existencial.'],
      ['Existência de qualquer dívida vencida há mais de noventa dias.', false, 'Inadimplência não é o mesmo que superendividamento.'],
      ['Situação em que o total das dívidas supera o patrimônio do devedor.', false, 'Patrimônio líquido negativo não caracteriza por si o regime.'],
      ['Impossibilidade de pagar dívidas de qualquer natureza, inclusive empresariais.', false, 'O regime alcança dívidas de consumo de pessoa natural.'],
    ],
    exp: 'Alternativa que suprima qualquer um dos três elementos está errada. A boa-fé é o filtro mais cobrado.',
    tags: ['superendividamento', 'cdc', 'conceitual'],
  }),
  q('q-end-03', {
    c: 'c-endividamento', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar dívidas excluídas do regime',
    e: 'Ficam FORA do regime legal de repactuação do superendividamento as dívidas:',
    alt: [
      ['Contraídas mediante fraude ou má-fé e as decorrentes de produtos e serviços de luxo de alto valor.', true, 'Correta. A exclusão evita converter proteção social em subsídio ao consumo supérfluo.'],
      ['De financiamento imobiliário, por terem garantia real.', false, 'A exclusão não se define pela existência de garantia.'],
      ['Contraídas há mais de cinco anos.', false, 'O tempo de contração não é critério de exclusão.'],
      ['De valor inferior a um salário mínimo.', false, 'Não há piso de valor para o regime.'],
    ],
    exp: 'A boa-fé é condição do regime, e as duas exclusões existem para preservá-la.',
    tags: ['superendividamento', 'cdc', 'conceitual'],
  }),
  q('q-end-04', {
    c: 'c-endividamento', tipo: 'aplicacao', dif: 'media',
    hab: 'Ordenar as decisões financeiras',
    e: 'A ordem tecnicamente correta das decisões de um cliente endividado é:',
    alt: [
      ['Reserva mínima, quitação das dívidas caras, complemento da reserva e então investimento.', true, 'Correta. A reserva mínima evita que um imprevisto recrie a dívida durante a quitação.'],
      ['Investimento, reserva e por último quitação das dívidas.', false, 'Investir carregando dívida cara destrói valor de forma aritmética.'],
      ['Quitação integral de todas as dívidas antes de qualquer reserva.', false, 'Sem reserva mínima, o primeiro imprevisto recria a dívida no rotativo.'],
      ['Reserva completa de doze meses antes de tocar nas dívidas.', false, 'Acumular reserva completa enquanto se paga rotativo custa mais do que rende.'],
    ],
    exp: 'A reserva mínima primeiro é o que evita reendividamento durante o processo de quitação.',
    tags: ['endividamento', 'planejamento', 'aplicacao'],
  }),

  /* ---- c-objetivos-financeiros -------------------------------------------- */
  q('q-of-01', {
    c: 'c-objetivos-financeiros', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Resolver divergência entre perfil e objetivo',
    ctx: 'Um cliente de perfil arrojado vai usar em 12 meses o dinheiro reservado para a entrada de um imóvel.',
    e: 'A alocação adequada para esse recurso é:',
    alt: [
      ['Pós-fixado de baixa oscilação, compatível com o horizonte do objetivo.', true, 'Correta. Quando perfil e objetivo divergem, prevalece o objetivo.'],
      ['Renda variável, compatível com o perfil declarado.', false, 'O perfil autoriza risco; o horizonte de 12 meses não o comporta.'],
      ['Prefixado longo, para travar taxa mais alta.', false, 'Prefixado longo oscila e obrigaria a venda antecipada com marcação a mercado.'],
      ['Fundo multimercado alavancado, para diversificar.', false, 'Diversificação não resolve incompatibilidade de prazo.'],
    ],
    exp: 'A data não se move, e o mercado não pergunta se o cliente é arrojado.',
    tags: ['objetivos', 'horizonte', 'suitability'],
  }),
  q('q-of-02', {
    c: 'c-objetivos-financeiros', tipo: 'conceitual', dif: 'facil',
    hab: 'Identificar os elementos de um objetivo financeiro',
    e: 'Para permitir a recomendação de um produto, um objetivo financeiro precisa ter definidos:',
    alt: [
      ['Descrição, valor estimado e data em que o recurso será necessário.', true, 'Correta. Faltando um dos três, não é possível recomendar produto.'],
      ['Apenas o valor a ser acumulado.', false, 'Sem prazo não há como avaliar a tolerância a oscilação.'],
      ['Apenas o perfil de risco do cliente.', false, 'Perfil não substitui prazo nem valor.'],
      ['Apenas a rentabilidade esperada pelo cliente.', false, 'Rentabilidade esperada é expectativa, não parâmetro de recomendação.'],
    ],
    exp: 'Objetivo sem prazo e sem valor não é objetivo: é desejo.',
    tags: ['objetivos', 'planejamento', 'conceitual'],
  }),
  q('q-of-03', {
    c: 'c-objetivos-financeiros', tipo: 'aplicacao', dif: 'media',
    hab: 'Aplicar o casamento de prazos',
    e: 'Casar o vencimento do título com a data do objetivo tem como principal efeito:',
    alt: [
      ['Eliminar a necessidade de venda antecipada e, com ela, a exposição à marcação a mercado.', true, 'Correta. Levado ao vencimento, o título entrega a taxa contratada.'],
      ['Aumentar a rentabilidade contratada do título.', false, 'A taxa é a contratada na compra; casar prazos não a altera.'],
      ['Isentar a operação de imposto de renda.', false, 'O tratamento tributário não depende do casamento de prazos.'],
      ['Garantir liquidez diária ao longo de todo o período.', false, 'É o oposto: casar prazos dispensa a necessidade de liquidez intermediária.'],
    ],
    exp: 'O risco não está no ativo em abstrato: está na relação entre a volatilidade dele e o momento em que o dinheiro precisa sair.',
    tags: ['objetivos', 'marcacao-mercado', 'aplicacao'],
  }),

  /* ---- c-ciclo-vida -------------------------------------------------------- */
  q('q-cvi-01', {
    c: 'c-ciclo-vida', tipo: 'conceitual', dif: 'media',
    hab: 'Distinguir capacidade de tolerância a risco',
    e: 'A diferença entre CAPACIDADE e TOLERÂNCIA a risco é que a capacidade:',
    alt: [
      ['É objetiva e decorre de horizonte, patrimônio e renda futura.', true, 'Correta. Tolerância é subjetiva, ligada ao desconforto com a oscilação.'],
      ['É subjetiva e decorre do desconforto do cliente com a oscilação.', false, 'Essa é a definição de tolerância.'],
      ['É determinada exclusivamente pela idade do cliente.', false, 'Idade influencia o horizonte, mas não esgota a capacidade.'],
      ['É sinônimo de tolerância, com outra denominação.', false, 'São conceitos distintos e podem divergir no mesmo cliente.'],
    ],
    exp: 'Quando divergem, prevalece a mais restritiva das duas.',
    tags: ['ciclo-vida', 'risco', 'conceitual'],
  }),
  q('q-cvi-02', {
    c: 'c-ciclo-vida', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Aplicar a regra da mais restritiva',
    ctx: 'Um cliente jovem, com patrimônio elevado e horizonte longo, relata desconforto intenso com oscilações e já resgatou em pânico no passado.',
    e: 'A alocação adequada é:',
    alt: [
      ['Mais conservadora que o horizonte permitiria, pois prevalece a menor entre capacidade e tolerância.', true, 'Correta. Alta capacidade não autoriza exposição além do que o cliente suporta.'],
      ['Agressiva, pois a capacidade objetiva dele é alta.', false, 'Ignorar a tolerância produz resgate em pânico, que realiza a perda.'],
      ['Agressiva, desde que ele assine termo de ciência de risco.', false, 'O termo não corrige a inadequação nem evita o resgate em pânico.'],
      ['Integralmente em reserva de emergência, sem exposição a risco.', false, 'Medida desproporcional; o horizonte longo comporta alguma exposição.'],
    ],
    exp: 'Um cliente que resgata na baixa converte volatilidade em prejuízo permanente. A tolerância é um dado técnico, não um capricho.',
    tags: ['ciclo-vida', 'suitability', 'atendimento'],
  }),
  q('q-cvi-03', {
    c: 'c-ciclo-vida', tipo: 'conceitual', dif: 'dificil',
    hab: 'Explicar o risco de sequência',
    e: 'O risco de sequência afeta principalmente clientes que estão:',
    alt: [
      ['Na fase de desacumulação, porque saques regulares tornam relevante a ORDEM em que os retornos ocorrem.', true, 'Correta. Uma queda no início dos saques reduz permanentemente a base do patrimônio.'],
      ['Na fase de acumulação, porque aportes regulares ampliam as perdas.', false, 'Na acumulação, aportes em queda compram mais cotas — o efeito é favorável.'],
      ['Em qualquer fase, de forma idêntica.', false, 'Quem acumula é indiferente à ordem dos retornos; quem saca, não.'],
      ['Apenas em carteiras de renda fixa prefixada.', false, 'O risco de sequência decorre de saques em ativo volátil, qualquer que seja a classe.'],
    ],
    exp: 'Duas trajetórias com a mesma média podem levar uma carteira à exaustão e outra à preservação.',
    tags: ['ciclo-vida', 'desacumulacao', 'conceitual'],
  }),

  /* ---- c-planejamento-aposentadoria ---------------------------------------- */
  q('q-pa-01', {
    c: 'c-planejamento-aposentadoria', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar o ponto de partida do plano',
    e: 'O planejamento de aposentadoria deve começar pela:',
    alt: [
      ['Estimativa da renda mensal desejada, descontadas as fontes já existentes.', true, 'Correta. Tudo no plano deriva da lacuna de renda.'],
      ['Definição de um valor redondo de patrimônio a acumular.', false, 'Sem saber a renda pretendida e por quantos anos, o número é arbitrário.'],
      ['Escolha do produto de previdência com menor taxa de administração.', false, 'Escolha de produto é etapa posterior ao dimensionamento.'],
      ['Determinação do aporte máximo que cabe no orçamento atual.', false, 'O aporte é resultado do plano, não o ponto de partida.'],
    ],
    exp: '"Quero juntar R$ 1 milhão" não é um plano: pode ser muito ou pouco conforme a renda pretendida e o prazo de usufruto.',
    tags: ['aposentadoria', 'planejamento', 'conceitual'],
  }),
  q('q-pa-02', {
    c: 'c-planejamento-aposentadoria', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer a taxa adequada à projeção',
    e: 'Em uma projeção de acumulação para a aposentadoria, deve-se utilizar:',
    alt: [
      ['A taxa REAL de retorno, já descontada a inflação do período.', true, 'Correta. Usar taxa nominal superestima o poder de compra do patrimônio projetado.'],
      ['A taxa nominal, por refletir o rendimento efetivamente creditado.', false, 'Décadas de inflação corroem a maior parte do poder de compra de um número não deflacionado.'],
      ['A taxa Selic vigente na data da projeção.', false, 'A Selic de hoje não se sustenta como hipótese para décadas.'],
      ['A maior rentabilidade histórica observada na carteira.', false, 'Projetar pelo melhor resultado histórico produz plano que não se sustenta.'],
    ],
    exp: 'Projeção de longo prazo em termos nominais é o erro mais grave do tema, porque o resultado parece adequado e não é.',
    tags: ['aposentadoria', 'taxa-real', 'conceitual'],
  }),
  q('q-pa-03', {
    c: 'c-planejamento-aposentadoria', tipo: 'aplicacao', dif: 'dificil',
    hab: 'Avaliar o efeito do tempo sobre o esforço de acumulação',
    e: 'Adiar em dez anos o início dos aportes para a aposentadoria, mantido o mesmo patrimônio-alvo:',
    alt: [
      ['Eleva o aporte mensal necessário de forma MAIS que proporcional, porque a capitalização é exponencial.', true, 'Correta. Tempo é a única variável do plano que não se recupera com esforço posterior.'],
      ['Eleva o aporte necessário na mesma proporção da redução do prazo.', false, 'A relação não é linear: o efeito da capitalização composta é exponencial.'],
      ['Não altera o aporte necessário, desde que a taxa de retorno seja mantida.', false, 'Menos tempo de capitalização exige mais capital aportado.'],
      ['Reduz o aporte necessário, por concentrar os aportes em menos anos.', false, 'Concentrar aportes aumenta o valor de cada um, não o reduz.'],
    ],
    exp: 'É a mesma matemática do juro composto vista pelo avesso: o que o tempo faria, o aporte precisa fazer.',
    tags: ['aposentadoria', 'juros-compostos', 'aplicacao'],
  }),
]
