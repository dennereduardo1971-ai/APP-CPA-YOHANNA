import { q } from './builder'

/**
 * Questões autorais — microtema 2.4 (Serviços bancários).
 *
 * Bloco de atendimento: quase toda questão nasce de uma pergunta que o
 * cliente faz de verdade — a tarifa foi devida? dá para cancelar o PIX? por
 * que o dólar da casa de câmbio é outro? Por isso a proporção de
 * `situacao_pratica` aqui é maior que nos microtemas anteriores.
 *
 * NENHUMA questão depende de quantidade normativa (saques gratuitos por mês,
 * limites do PIX, alíquota de IOF). Esses números são fixados por norma
 * infralegal e revistos periodicamente — questão ancorada neles envelhece
 * sem avisar (regra 4 do CLAUDE.md).
 */
export const BANCO_M2_4 = [
  /* ---- c-contas-deposito ---------------------------------------------- */
  q('q-cd-01', {
    c: 'c-contas-deposito', tipo: 'aplicacao', dif: 'facil',
    hab: 'Aplicar a regra de aniversário da poupança',
    ctx: 'Um cliente saca integralmente o valor da poupança dois dias antes da data de aniversário do depósito.',
    e: 'O que acontece com o rendimento do período?',
    alt: [
      ['É perdido integralmente, pois a poupança só credita rendimento na data de aniversário.', true, 'Correta. Não há proporcionalidade: 28 dias rendem o mesmo que zero.'],
      ['É pago proporcionalmente aos dias decorridos no período.', false, 'A poupança não tem rendimento pro rata; o crédito é integral na data ou nada.'],
      ['É pago integralmente, pois o período já estava quase completo.', false, 'A regra não admite arredondamento por proximidade da data.'],
      ['É convertido em rendimento da conta corrente vinculada.', false, 'Não existe conversão de rendimento entre contas.'],
    ],
    exp: 'A poupança credita rendimento uma vez por período mensal, na data de aniversário. É a característica que mais gera reclamação.',
    tags: ['poupanca', 'aniversario', 'aplicacao'],
  }),
  q('q-cd-02', {
    c: 'c-contas-deposito', tipo: 'conceitual', dif: 'media',
    hab: 'Distinguir conta de pagamento de conta de depósito',
    e: 'O saldo mantido em conta de pagamento de uma instituição de pagamento:',
    alt: [
      ['Não constitui depósito bancário, e sua proteção decorre da segregação patrimonial exigida em norma.', true, 'Correta. A arquitetura de proteção é diferente da de um depósito.'],
      ['É depósito bancário e conta com cobertura automática do FGC.', false, 'Instituição de pagamento não capta depósito; a lógica de proteção é outra.'],
      ['Integra o patrimônio da instituição, que pode usá-lo em suas operações.', false, 'A norma exige justamente a segregação desses recursos.'],
      ['É equivalente à poupança, inclusive quanto à remuneração legal.', false, 'Conta de pagamento não tem regra legal de remuneração como a poupança.'],
    ],
    exp: 'Depósito faz do cliente credor do banco — daí o FGC. Conta de pagamento protege por segregação, que é outro mecanismo.',
    tags: ['conta-pagamento', 'fgc', 'conceitual'],
  }),
  q('q-cd-03', {
    c: 'c-contas-deposito', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar a conta salário',
    e: 'A conta salário caracteriza-se por:',
    alt: [
      ['Ser gratuita, destinada ao crédito de salário e não admitir depósitos de terceiros.', true, 'Correta. E o trabalhador pode pedir portabilidade para conta de sua escolha.'],
      ['Permitir livre movimentação e depósitos de qualquer origem.', false, 'A conta salário tem uso restrito ao crédito da remuneração.'],
      ['Remunerar o saldo conforme a regra da poupança.', false, 'Não há remuneração legal do saldo em conta salário.'],
      ['Ser contratada diretamente pelo trabalhador junto ao banco de sua preferência.', false, 'Ela é aberta pelo empregador; o que o trabalhador escolhe é a portabilidade.'],
    ],
    exp: 'Gratuita, restrita e portável. A portabilidade é o direito que a prova mais cobra nesse item.',
    tags: ['conta-salario', 'portabilidade', 'conceitual'],
  }),
  q('q-cd-04', {
    c: 'c-contas-deposito', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Orientar sobre a alocação de reserva em carteira digital',
    ctx: 'O cliente mantém a reserva de emergência integralmente como saldo em uma carteira digital, afirmando que "é igual a banco".',
    e: 'A orientação tecnicamente adequada é:',
    alt: [
      ['Esclarecer que saldo em conta de pagamento não é depósito bancário e sugerir alocar a reserva em produto com garantia claramente identificada.', true, 'Correta. O saldo transacional pode ficar ali; a reserva pede proteção explícita.'],
      ['Confirmar que é equivalente, pois todo saldo em aplicativo tem cobertura do FGC.', false, 'A cobertura do FGC alcança depósitos e certos títulos, não o saldo em conta de pagamento por si.'],
      ['Recomendar que ele encerre a conta digital imediatamente.', false, 'A conta é útil para uso transacional; o problema é a alocação da reserva.'],
      ['Afirmar que reserva de emergência deve ficar em ações de dividendos.', false, 'Reserva de emergência exige liquidez e estabilidade, incompatíveis com renda variável.'],
    ],
    exp: 'A conversa não é sobre a carteira digital ser boa ou ruim: é sobre qual proteção cobre o dinheiro que não pode faltar.',
    tags: ['conta-pagamento', 'reserva-emergencia', 'atendimento'],
  }),

  /* ---- c-pix-transferencias -------------------------------------------- */
  q('q-px-01', {
    c: 'c-pix-transferencias', tipo: 'comparacao', dif: 'facil',
    hab: 'Comparar PIX e TED quanto a disponibilidade',
    e: 'Em relação à TED, o PIX diferencia-se por:',
    alt: [
      ['Funcionar 24 horas por dia, todos os dias, com liquidação em segundos.', true, 'Correta. A TED depende de dia útil e de horário do sistema.'],
      ['Ter prazo de crédito em até um dia útil.', false, 'Esse é o comportamento típico de arranjos anteriores, não do PIX.'],
      ['Exigir identificação por banco, agência e conta.', false, 'O PIX usa chave, que substitui esses dados.'],
      ['Ser exclusivo para transferências entre contas do mesmo banco.', false, 'O PIX opera entre instituições diferentes sem restrição.'],
    ],
    exp: 'Disponibilidade permanente e liquidação em segundos são as duas características que definem o arranjo.',
    tags: ['pix', 'ted', 'comparacao'],
  }),
  q('q-px-02', {
    c: 'c-pix-transferencias', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Orientar cliente sobre PIX enviado por engano',
    ctx: 'Um cliente enviou um PIX voluntariamente para a chave errada e pede o cancelamento da operação.',
    e: 'A orientação correta é:',
    alt: [
      ['Não há cancelamento: o PIX é irrevogável. Cabe solicitar a devolução ao recebedor e registrar a ocorrência na instituição.', true, 'Correta. O MED alcança fraude e falha operacional, não erro do próprio pagador.'],
      ['O PIX pode ser cancelado pelo aplicativo dentro de um prazo de arrependimento.', false, 'Não existe prazo de arrependimento no arranjo; a liquidação é definitiva.'],
      ['O Mecanismo Especial de Devolução estorna automaticamente qualquer valor enviado por engano.', false, 'O MED é procedimento excepcional, sujeito a análise, e não cobre erro de digitação.'],
      ['A instituição é obrigada a estornar o valor em até 24 horas.', false, 'Não há obrigação de estorno unilateral em operação regularmente liquidada.'],
    ],
    exp: 'Prometer cancelamento cria expectativa falsa. O caminho real é pedido de devolução e registro da ocorrência.',
    tags: ['pix', 'med', 'atendimento'],
  }),
  q('q-px-03', {
    c: 'c-pix-transferencias', tipo: 'conceitual', dif: 'media',
    hab: 'Delimitar o alcance do Mecanismo Especial de Devolução',
    e: 'O Mecanismo Especial de Devolução (MED) do PIX aplica-se a situações de:',
    alt: [
      ['Fundada suspeita de fraude ou falha operacional do sistema.', true, 'Correta. São as duas hipóteses que o mecanismo cobre.'],
      ['Arrependimento do pagador após a conclusão da transferência.', false, 'Não existe direito de arrependimento em PIX liquidado.'],
      ['Divergência comercial entre comprador e vendedor sobre um produto.', false, 'Conflito comercial se resolve entre as partes, não pelo arranjo de pagamento.'],
      ['Qualquer transferência feita para chave incorreta.', false, 'Erro de digitação do próprio pagador não é hipótese de MED.'],
    ],
    exp: 'Fraude e falha, nada além. Confundir o MED com direito de arrependimento é o erro mais comum do tema.',
    tags: ['pix', 'med', 'conceitual'],
  }),
  q('q-px-04', {
    c: 'c-pix-transferencias', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar a regra de gratuidade do PIX',
    e: 'Sobre a cobrança de tarifa em transferências por PIX, é correto afirmar:',
    alt: [
      ['Para pessoa física, as transferências são em regra gratuitas; para pessoa jurídica, a cobrança é admitida.', true, 'Correta. A regra de gratuidade se ancora na titularidade da conta.'],
      ['É sempre gratuito, para qualquer titular.', false, 'A gratuidade em regra alcança a pessoa física; PJ pode ser tarifada.'],
      ['É sempre tarifado, cabendo à instituição definir o valor.', false, 'Isso contraria a regra de gratuidade para pessoa física.'],
      ['Depende exclusivamente do valor transferido.', false, 'O critério é a titularidade e a natureza da operação, não a faixa de valor.'],
    ],
    exp: 'A pergunta a fazer é sempre "quem é o titular". A gratuidade em regra é da pessoa física.',
    tags: ['pix', 'tarifas', 'conceitual'],
  }),
  q('q-px-05', {
    c: 'c-pix-transferencias', tipo: 'conceitual', dif: 'dificil',
    hab: 'Explicar por que o PIX é irrevogável',
    e: 'A irrevogabilidade do PIX decorre de:',
    alt: [
      ['Ser condição técnica da liquidação instantânea: sem definitividade, o recebedor não poderia usar o recurso com segurança.', true, 'Correta. Reversão unilateral reintroduziria a defasagem que o arranjo elimina.'],
      ['Uma opção comercial das instituições participantes.', false, 'A definitividade é característica do arranjo, não escolha de cada participante.'],
      ['Limitação tecnológica que deve ser superada em versões futuras.', false, 'Não é limitação: é requisito de desenho da liquidação instantânea.'],
      ['Determinação do Código de Defesa do Consumidor.', false, 'A irrevogabilidade decorre do desenho do arranjo de pagamentos.'],
    ],
    exp: 'Liquidação em segundos e reversibilidade unilateral são incompatíveis. Fraude é tratada em canal separado, o MED.',
    tags: ['pix', 'liquidacao', 'conceitual'],
  }),

  /* ---- c-cambio-varejo -------------------------------------------------- */
  q('q-cv-01', {
    c: 'c-cambio-varejo', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar o indicador que permite comparar propostas de câmbio',
    e: 'Para comparar corretamente duas propostas de operação de câmbio, o cliente deve observar:',
    alt: [
      ['O Valor Efetivo Total (VET), que reúne taxa de câmbio, IOF e tarifas.', true, 'Correta. É o único número que torna as propostas comparáveis.'],
      ['A taxa de câmbio anunciada por cada instituição.', false, 'A instituição com melhor taxa pode cobrar tarifa que inverte o resultado.'],
      ['A cotação comercial divulgada no noticiário.', false, 'A comercial é entre instituições e não é a praticada com o cliente.'],
      ['O spread declarado pela instituição.', false, 'O spread é apenas um dos componentes do custo.'],
    ],
    exp: 'A taxa anunciada não é o preço da operação. O preço é o VET, e informá-lo é obrigatório.',
    tags: ['cambio', 'vet', 'conceitual'],
  }),
  q('q-cv-02', {
    c: 'c-cambio-varejo', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Avaliar propostas de câmbio com estruturas de custo diferentes',
    ctx: 'Duas propostas para a mesma remessa: a primeira oferece taxa de R$ 5,30 com tarifa fixa de R$ 90; a segunda, taxa de R$ 5,38 sem tarifa.',
    e: 'A conclusão tecnicamente correta é:',
    alt: [
      ['Depende do valor remetido: a tarifa fixa pesa proporcionalmente mais em operações pequenas, e o VET resolve a comparação.', true, 'Correta. Por isso a norma obriga a informar o VET.'],
      ['A primeira é sempre melhor, pois tem a taxa de câmbio menor.', false, 'A taxa menor pode ser anulada pela tarifa fixa em operações de baixo valor.'],
      ['A segunda é sempre melhor, pois não cobra tarifa.', false, 'Em valores altos, os oito centavos a mais por dólar superam a tarifa fixa.'],
      ['São equivalentes, pois a diferença de taxa compensa exatamente a tarifa.', false, 'A equivalência só ocorreria em um valor específico de remessa.'],
    ],
    exp: 'Componentes que se compensam entre si tornam a comparação por qualquer um deles enganosa. É a razão de existir o VET.',
    tags: ['cambio', 'vet', 'atendimento'],
  }),
  q('q-cv-03', {
    c: 'c-cambio-varejo', tipo: 'conceitual', dif: 'facil',
    hab: 'Distinguir taxa comercial de taxa de turismo',
    e: 'A cotação do dólar divulgada nos noticiários econômicos corresponde à:',
    alt: [
      ['Taxa comercial, negociada entre instituições no mercado interbancário.', true, 'Correta. Não é a praticada com o cliente de varejo.'],
      ['Taxa de turismo, praticada nas casas de câmbio.', false, 'A de turismo é a do varejo e já embute o spread da instituição.'],
      ['Taxa definida diariamente pelo Banco Central.', false, 'O regime é flutuante: o BC não define a cotação.'],
      ['Média entre a taxa de compra e a de venda no varejo.', false, 'A comercial se forma no interbancário, não pela média do varejo.'],
    ],
    exp: 'Comercial é entre instituições; turismo é com o cliente. A diferença entre as duas é o spread.',
    tags: ['cambio', 'cotacao', 'conceitual'],
  }),
  q('q-cv-04', {
    c: 'c-cambio-varejo', tipo: 'aplicacao', dif: 'media',
    hab: 'Identificar os componentes do custo de câmbio',
    e: 'Compõem o custo efetivo de uma operação de câmbio no varejo:',
    alt: [
      ['Taxa de câmbio praticada, IOF e tarifas cobradas pela instituição.', true, 'Correta. É exatamente o que o VET consolida.'],
      ['Apenas a taxa de câmbio praticada.', false, 'Ignora tributo e tarifa, que podem inverter a comparação entre propostas.'],
      ['Taxa de câmbio e imposto de renda sobre o ganho cambial.', false, 'O tributo incidente na operação de câmbio é o IOF, não o IR.'],
      ['Taxa comercial e a variação do dólar no dia seguinte.', false, 'A comercial não é a praticada, e variação posterior não integra o custo da operação.'],
    ],
    exp: 'Quatro componentes: taxa, spread embutido nela, IOF e tarifa. O VET junta tudo em um número.',
    tags: ['cambio', 'iof', 'aplicacao'],
  }),

  /* ---- c-tarifas-bancarias ---------------------------------------------- */
  q('q-tb-01', {
    c: 'c-tarifas-bancarias', tipo: 'conceitual', dif: 'facil',
    hab: 'Caracterizar os serviços essenciais',
    e: 'Sobre os serviços bancários classificados como ESSENCIAIS, é correto afirmar que:',
    alt: [
      ['São gratuitos dentro dos limites de quantidade fixados em norma.', true, 'Correta. Ultrapassado o limite, o excedente pode ser tarifado.'],
      ['São gratuitos de forma ilimitada.', false, 'A gratuidade é limitada por quantidade em cada serviço.'],
      ['Podem ser tarifados livremente pela instituição.', false, 'A vedação de cobrança dentro do limite é justamente o que define a categoria.'],
      ['Só são gratuitos para quem contrata pacote de serviços.', false, 'A cesta é opcional; os essenciais independem dela.'],
    ],
    exp: 'Gratuito não é ilimitado. É dessa confusão que nasce a maior parte das reclamações de tarifa.',
    tags: ['tarifas', 'servicos-essenciais', 'conceitual'],
  }),
  q('q-tb-02', {
    c: 'c-tarifas-bancarias', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Responder a reclamação sobre tarifa de pacote',
    ctx: 'Um cliente reclama da tarifa mensal do pacote de serviços e afirma que "banco não pode cobrar por conta".',
    e: 'A resposta tecnicamente correta é:',
    alt: [
      ['Os serviços essenciais são gratuitos e seguem disponíveis mesmo sem pacote; a cesta é opcional e pode ser cancelada.', true, 'Correta. E cabe orientar o cancelamento se o uso couber nos essenciais.'],
      ['A cobrança é indevida e deve ser integralmente estornada.', false, 'A cobrança de cesta contratada é legítima; o que cabe é avaliar o cancelamento.'],
      ['A cesta é obrigatória para manutenção de conta corrente.', false, 'A cesta é sempre opcional.'],
      ['O cliente precisa encerrar a conta para deixar de pagar a tarifa.', false, 'Basta cancelar o pacote e usar os serviços essenciais.'],
    ],
    exp: 'Separar o que é essencial do que é cesta resolve a reclamação — e costuma resultar em cancelamento de pacote, não em estorno.',
    tags: ['tarifas', 'cesta', 'atendimento'],
  }),
  q('q-tb-03', {
    c: 'c-tarifas-bancarias', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir serviços prioritários de diferenciados',
    e: 'A diferença entre serviços PRIORITÁRIOS e DIFERENCIADOS é que os prioritários:',
    alt: [
      ['Só podem ser cobrados conforme lista e nomenclatura padronizadas em norma, enquanto os diferenciados são livremente pactuados.', true, 'Correta. A padronização é o que permite comparar tabelas entre instituições.'],
      ['São gratuitos, enquanto os diferenciados são cobrados.', false, 'Gratuidade define a categoria dos essenciais, não a dos prioritários.'],
      ['São exclusivos de pessoa jurídica.', false, 'A classificação não depende do tipo de titular.'],
      ['Dependem de autorização caso a caso do Banco Central.', false, 'Não há autorização individual: a norma padroniza a lista previamente.'],
    ],
    exp: 'A norma não tabela preço; ela padroniza nome e definição, o que restaura a comparabilidade entre ofertas.',
    tags: ['tarifas', 'prioritarios', 'comparacao'],
  }),
  q('q-tb-04', {
    c: 'c-tarifas-bancarias', tipo: 'aplicacao', dif: 'media',
    hab: 'Avaliar a legitimidade da cobrança de excedente',
    ctx: 'Um cliente realiza, no mesmo mês, mais saques do que a quantidade prevista como gratuita nos serviços essenciais.',
    e: 'Quanto à cobrança dos saques excedentes:',
    alt: [
      ['É legítima, pois a gratuidade dos essenciais vale dentro do limite de quantidade.', true, 'Correta. A franquia calibra o subsídio sem tornar o serviço integralmente gratuito.'],
      ['É indevida, pois saque é serviço essencial e nunca pode ser tarifado.', false, 'Essencial é gratuito até o limite; o excedente pode ser cobrado.'],
      ['É legítima apenas se o cliente tiver pacote contratado.', false, 'A cobrança do excedente independe de haver cesta contratada.'],
      ['Depende de autorização prévia do Banco Central para cada cliente.', false, 'Não há autorização individual; a regra é geral e prevista em norma.'],
    ],
    exp: 'A franquia protege o uso básico, não o uso intensivo. É onde a maioria das reclamações se resolve.',
    tags: ['tarifas', 'servicos-essenciais', 'aplicacao'],
  }),
]
