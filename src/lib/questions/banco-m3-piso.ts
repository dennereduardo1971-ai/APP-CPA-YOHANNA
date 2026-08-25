import { q } from './builder'

/**
 * Questões autorais — macrotema 3, complemento de cobertura.
 *
 * Mesma razão de `banco-m1-piso.ts` e `banco-m2-piso.ts`: levar ao piso de
 * cinco questões por conceito os itens que ficaram com três ou quatro.
 *
 * O macrotema 3 tem uma característica que orienta a autoria deste arquivo:
 * quase nenhum item se resolve por memória. Os distratores são condutas
 * comercialmente convenientes e plausíveis — aportar a sobra de quem tem
 * rotativo aberto, seguir o perfil declarado contra o prazo do objetivo,
 * avisar o cliente da comunicação ao COAF. São escolhas que atendem à meta e
 * não ao cliente.
 */
export const BANCO_M3_PISO = [
  /* ---- c-orcamento -------------------------------------------------------- */
  q('q-orc-p1', {
    c: 'c-orcamento', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Dimensionar aporte pela capacidade de poupança',
    ctx: 'Um cliente tem R$ 12 mil parados na conta neste mês e pergunta quanto pode aportar mensalmente em um plano de longo prazo.',
    e: 'O número que responde a essa pergunta é:',
    alt: [
      ['A capacidade de poupança mensal — a sobra recorrente entre receitas e despesas.', true, 'Correta. Saldo é foto de um instante; aporte recorrente exige sobra recorrente.'],
      ['O saldo atual em conta, dividido por doze.', false, 'Um saldo pontual não indica capacidade de repetir o aporte no mês seguinte.'],
      ['Um percentual fixo da renda bruta, como 10%.', false, 'Regra de bolso ignora a estrutura de despesas daquele cliente.'],
      ['O valor mínimo exigido pelo produto escolhido.', false, 'O mínimo do produto é restrição comercial, não capacidade do cliente.'],
    ],
    exp: 'Orçamento é o filme do mês. Aporte que não cabe no filme vira resgate no mês seguinte.',
    tags: ['financas-pessoais', 'orcamento', 'atendimento'],
  }),
  q('q-orc-p2', {
    c: 'c-orcamento', tipo: 'conceitual', dif: 'facil',
    hab: 'Definir capacidade de poupança',
    e: 'A capacidade de poupança de um cliente corresponde:',
    alt: [
      ['À diferença entre receitas e despesas em um período, de forma recorrente.', true, 'Correta. É o único número que sustenta aporte mensal.'],
      ['Ao total de ativos que ele possui.', false, 'Isso é patrimônio, medido no balanço, não no orçamento.'],
      ['Ao saldo médio mantido em conta corrente.', false, 'Saldo médio mistura fluxo e estoque e não indica sobra.'],
      ['Ao limite de crédito pré-aprovado disponível.', false, 'Limite de crédito é dívida potencial, não poupança.'],
    ],
    exp: 'Receita menos despesa. Todo o resto do planejamento se apoia nesse número.',
    tags: ['financas-pessoais', 'orcamento', 'conceitual'],
  }),

  /* ---- c-balanco-pessoal -------------------------------------------------- */
  q('q-bal-p1', {
    c: 'c-balanco-pessoal', tipo: 'calculo', dif: 'media',
    hab: 'Calcular patrimônio líquido com passivo vinculado',
    ctx: 'Um cliente tem um imóvel avaliado em R$ 600 mil com saldo devedor de financiamento de R$ 380 mil, R$ 50 mil em aplicações e R$ 20 mil de dívida no cartão.',
    e: 'Seu patrimônio líquido é de:',
    alt: [
      ['R$ 250 mil.', true, 'Correta. (600 + 50) − (380 + 20) = 250.'],
      ['R$ 650 mil, somando o imóvel e as aplicações.', false, 'Ignora os passivos, que é justamente o erro típico do tema.'],
      ['R$ 270 mil, desconsiderando a dívida do cartão.', false, 'Toda dívida entra no passivo, inclusive a de curto prazo.'],
      ['R$ 220 mil, considerando apenas o imóvel líquido do financiamento.', false, 'Faltou somar as aplicações ao ativo.'],
    ],
    exp: 'O que integra o patrimônio líquido é a diferença, nunca o valor do bem isolado.',
    tags: ['financas-pessoais', 'balanco', 'calculo'],
  }),
  q('q-bal-p2', {
    c: 'c-balanco-pessoal', tipo: 'comparacao', dif: 'facil',
    hab: 'Distinguir orçamento de balanço',
    e: 'A diferença entre o orçamento pessoal e o balanço patrimonial pessoal é que:',
    alt: [
      ['O orçamento mede fluxo em um período; o balanço mede estoque em um momento.', true, 'Correta. Um é o filme, o outro é a foto — e os dois são necessários.'],
      ['O orçamento mede estoque e o balanço mede fluxo.', false, 'Está invertido: o orçamento é fluxo de um período e o balanço é estoque de um momento.'],
      ['Ambos medem a mesma coisa, mudando apenas a periodicidade.', false, 'Medem grandezas diferentes: fluxo e estoque.'],
      ['O balanço só se aplica a pessoas jurídicas.', false, 'O balanço pessoal é ferramenta usual de planejamento.'],
    ],
    exp: 'Dá para ter patrimônio alto e orçamento apertado — e o contrário também. Por isso as duas medidas.',
    tags: ['financas-pessoais', 'balanco', 'comparacao'],
  }),

  /* ---- c-objetivos-financeiros -------------------------------------------- */
  q('q-obj-p1', {
    c: 'c-objetivos-financeiros', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Fazer o prazo do objetivo prevalecer sobre o perfil declarado',
    ctx: 'Um cliente de perfil arrojado quer aplicar em ações o dinheiro da entrada de um imóvel que pretende comprar em doze meses.',
    e: 'A orientação correta é:',
    alt: [
      ['Alocar conforme o PRAZO do objetivo, em ativo de baixa oscilação, ainda que o perfil declarado seja arrojado.', true, 'Correta. Perfil arrojado não torna prudente arriscar dinheiro com data marcada próxima.'],
      ['Seguir o perfil declarado, pois ele expressa a tolerância do cliente.', false, 'Tolerância a risco não altera o fato de a data ser em doze meses.'],
      ['Dividir meio a meio entre ações e renda fixa, como solução intermediária.', false, 'Metade do dinheiro da entrada continua sujeita a oscilação com data marcada.'],
      ['Aplicar em ações e reavaliar mensalmente para sair no melhor momento.', false, 'Depender de acertar o momento é o oposto de planejar por objetivo.'],
    ],
    exp: 'A alocação se faz por objetivo. O perfil entra depois, para escolher dentro do que o prazo permite.',
    tags: ['objetivos', 'horizonte', 'suitability'],
  }),
  q('q-obj-p2', {
    c: 'c-objetivos-financeiros', tipo: 'conceitual', dif: 'facil',
    hab: 'Caracterizar um objetivo financeiro bem formulado',
    e: 'Para efeito de planejamento, um objetivo financeiro só é utilizável quando tem:',
    alt: [
      ['Valor e prazo definidos.', true, 'Correta. Sem os dois, não é objetivo: é desejo.'],
      ['Um produto de investimento já escolhido.', false, 'O produto é consequência do objetivo, não parte da definição.'],
      ['Rentabilidade-alvo estabelecida pelo cliente.', false, 'Rentabilidade desejada não substitui valor e prazo, e não é escolha do cliente.'],
      ['Aprovação formal do distribuidor.', false, 'Objetivo é do cliente; não depende de aprovação.'],
    ],
    exp: '"Quero render mais" não permite montar plano nenhum. "R$ 60 mil em três anos" permite.',
    tags: ['objetivos', 'planejamento', 'conceitual'],
  }),

  /* ---- c-ciclo-vida ------------------------------------------------------- */
  q('q-ccv-p1', {
    c: 'c-ciclo-vida', tipo: 'conceitual', dif: 'dificil',
    hab: 'Distinguir capacidade de tolerância a risco',
    e: 'A diferença entre CAPACIDADE e TOLERÂNCIA a risco é que:',
    alt: [
      ['A capacidade é objetiva — horizonte, patrimônio e estabilidade de renda; a tolerância é subjetiva, ligada a quanto o cliente suporta ver oscilar.', true, 'Correta. Ter capacidade não autoriza expor além do que o cliente suporta.'],
      ['São sinônimos, usados em contextos diferentes.', false, 'São dimensões distintas e podem apontar em sentidos opostos.'],
      ['A capacidade é declarada pelo cliente e a tolerância, calculada pelo distribuidor.', false, 'É o inverso: a capacidade se apura em dados objetivos.'],
      ['A tolerância varia com a idade e a capacidade é fixa ao longo da vida.', false, 'A capacidade muda com horizonte, patrimônio e renda ao longo do ciclo de vida.'],
    ],
    exp: 'Um cliente jovem e rico tem capacidade de assumir risco. Se ele resgata no primeiro susto, a tolerância diz outra coisa.',
    tags: ['ciclo-vida', 'risco', 'conceitual'],
  }),
  q('q-ccv-p2', {
    c: 'c-ciclo-vida', tipo: 'conceitual', dif: 'media',
    hab: 'Relacionar fase do ciclo de vida e capacidade de risco',
    e: 'Ao longo do ciclo de vida financeiro, a capacidade de assumir risco tende a:',
    alt: [
      ['Diminuir conforme o horizonte encurta e a renda do trabalho perde peso na composição total.', true, 'Correta. Menos tempo para recuperar e menos fluxo novo entrando.'],
      ['Aumentar, pois o patrimônio acumulado cresce ao longo da vida.', false, 'Patrimônio maior ajuda, mas o encurtamento do horizonte pesa mais.'],
      ['Permanecer constante, já que depende apenas do perfil psicológico.', false, 'Isso descreveria a tolerância, não a capacidade.'],
      ['Variar apenas em função da rentabilidade obtida na fase de acumulação.', false, 'A capacidade não é função do resultado passado da carteira.'],
    ],
    exp: 'Acumulação, consolidação e usufruto: em cada fase muda quanto tempo existe para recuperar um erro.',
    tags: ['ciclo-vida', 'alocacao', 'conceitual'],
  }),

  /* ---- c-planejamento-aposentadoria --------------------------------------- */
  q('q-apo-p1', {
    c: 'c-planejamento-aposentadoria', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Ordenar corretamente as variáveis do plano de aposentadoria',
    ctx: 'Um cliente diz que sua meta é "acumular R$ 1 milhão até os 60 anos".',
    e: 'A conduta técnica correta diante dessa meta é:',
    alt: [
      ['Partir da renda mensal desejada e do prazo de usufruto para verificar se R$ 1 milhão é suficiente, insuficiente ou excessivo.', true, 'Correta. O valor redondo é arbitrário até ser ancorado em renda e duração.'],
      ['Aceitar a meta e calcular o aporte mensal necessário para alcançá-la.', false, 'Calcula-se com precisão um número que pode estar completamente errado.'],
      ['Sugerir dobrar a meta, por segurança.', false, 'Arbitrar para cima é tão infundado quanto arbitrar para baixo.'],
      ['Indicar o produto de maior rentabilidade histórica para acelerar o acúmulo.', false, 'Escolher produto antes de definir a meta inverte o processo.'],
    ],
    exp: 'Renda desejada → patrimônio necessário → aporte mensal. Começar pelo meio produz precisão sobre premissa falsa.',
    tags: ['aposentadoria', 'planejamento', 'atendimento'],
  }),
  q('q-apo-p2', {
    c: 'c-planejamento-aposentadoria', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer o tempo como variável dominante',
    e: 'No planejamento da aposentadoria, a variável mais poderosa e a única que não pode ser recuperada depois é:',
    alt: [
      ['O tempo de acumulação.', true, 'Correta. Aporte e rentabilidade podem ser ajustados; anos perdidos, não.'],
      ['A rentabilidade obtida na carteira.', false, 'Importa, mas é a menos controlável e pode ser compensada por aporte.'],
      ['O valor do aporte mensal.', false, 'Pode ser aumentado mais adiante, ainda que com sacrifício.'],
      ['A escolha entre PGBL e VGBL.', false, 'Afeta a eficiência tributária, não a viabilidade do plano.'],
    ],
    exp: 'É por isso que começar cedo com pouco costuma vencer começar tarde com muito.',
    tags: ['aposentadoria', 'juros-compostos', 'conceitual'],
  }),

  /* ---- c-suitability ------------------------------------------------------ */
  q('q-sui-p1', {
    c: 'c-suitability', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Conduzir o caso de insistência do cliente em produto inadequado',
    ctx: 'Após o alerta de inadequação, o cliente insiste em adquirir um produto incompatível com seu perfil.',
    e: 'A conduta correta do distribuidor é:',
    alt: [
      ['Alertar formalmente sobre a inadequação, obter a manifestação expressa do cliente de que deseja prosseguir e registrar tudo.', true, 'Correta. O alerta e o registro são condição, não formalidade.'],
      ['Recusar a operação em qualquer hipótese.', false, 'A norma prevê o caminho do alerta e da manifestação, não a recusa obrigatória.'],
      ['Executar a ordem sem ressalvas, já que a decisão é do cliente.', false, 'Executar sem alertar e registrar descumpre o dever.'],
      ['Reclassificar o perfil do cliente para acomodar o produto desejado.', false, 'Ajustar o perfil ao produto é fraude ao próprio processo.'],
    ],
    exp: 'A alternativa mais tentadora é a última — e é a que transforma suitability em teatro.',
    tags: ['suitability', 'conduta', 'atendimento'],
  }),
  q('q-sui-p2', {
    c: 'c-suitability', tipo: 'conceitual', dif: 'media',
    hab: 'Distinguir suitability de KYC',
    e: 'A diferença entre suitability e "conheça seu cliente" (KYC) é que:',
    alt: [
      ['O suitability verifica a adequação do produto ao objetivo e ao perfil; o KYC olha a identificação do cliente e a origem dos recursos, para fins de prevenção à lavagem.', true, 'Correta. São deveres distintos e cumulativos.'],
      ['São o mesmo procedimento, com nomes diferentes conforme o regulador.', false, 'Têm finalidades e fundamentos normativos distintos.'],
      ['O KYC substitui o suitability para investidores qualificados.', false, 'Um não substitui o outro em nenhuma hipótese.'],
      ['O suitability é exigido apenas na abertura de conta e o KYC, a cada operação.', false, 'Ambos são deveres contínuos, com regras próprias de atualização.'],
    ],
    exp: 'Um pergunta "esse produto serve para você?". O outro pergunta "de onde vem esse dinheiro?".',
    tags: ['suitability', 'kyc', 'comparacao'],
  }),

  /* ---- c-conflito --------------------------------------------------------- */
  q('q-cfl-p1', {
    c: 'c-conflito', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Avaliar conduta pelo momento da recomendação',
    ctx: 'Um assessor recomendou a um cliente conservador um produto claramente inadequado, que acabou gerando lucro relevante.',
    e: 'A avaliação da conduta é:',
    alt: [
      ['Irregular: o critério é a adequação no momento da recomendação, e o resultado favorável não a convalida.', true, 'Correta. Sorte não corrige conduta.'],
      ['Regular, pois o cliente teve lucro e não sofreu dano.', false, 'A ausência de dano não torna adequada uma recomendação inadequada.'],
      ['Regular, desde que o cliente tenha assinado o termo de ciência depois.', false, 'Ciência posterior não substitui a análise prévia de adequação.'],
      ['Irregular apenas se o cliente apresentar reclamação formal.', false, 'A irregularidade independe de reclamação.'],
    ],
    exp: 'Se o resultado convalidasse a conduta, a regra só valeria quando desse errado — e aí não seria regra.',
    tags: ['conflito', 'conduta', 'atendimento'],
  }),
  q('q-cfl-p2', {
    c: 'c-conflito', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar o tratamento correto do conflito de interesses',
    e: 'Diante de um conflito de interesses potencial na distribuição de um produto, a conduta esperada é:',
    alt: [
      ['Identificar, informar o cliente de forma clara e adotar medidas para mitigar o conflito.', true, 'Correta. Conflito não se resolve escondendo: resolve-se informando e administrando.'],
      ['Omitir a informação para não gerar desconfiança desnecessária no cliente.', false, 'A omissão é exatamente a conduta vedada.'],
      ['Recusar sempre a operação, por precaução.', false, 'Nem todo conflito impede a operação; ele precisa ser informado e administrado.'],
      ['Registrar internamente, sem necessidade de comunicar ao cliente.', false, 'O registro interno não substitui o dever de informar quem é afetado.'],
    ],
    exp: 'O interesse do cliente vem antes do da instituição e antes do seu. Meta comercial nunca justifica recomendação inadequada.',
    tags: ['conflito', 'transparencia', 'conduta'],
  }),

  /* ---- um item por conceito ----------------------------------------------- */
  q('q-res-p1', {
    c: 'c-reserva-emergencia', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Dimensionar a reserva pela despesa, não pela renda',
    ctx: 'Dois clientes ganham R$ 10 mil por mês. O primeiro gasta R$ 4 mil; o segundo, R$ 9,5 mil.',
    e: 'Sobre o dimensionamento da reserva de emergência de cada um:',
    alt: [
      ['A do segundo será bem maior, pois a reserva se mede em meses de DESPESA, não em múltiplos de renda.', true, 'Correta. Mesma renda, necessidades de reserva muito diferentes.'],
      ['As duas serão iguais, pois a renda é a mesma.', false, 'Dimensionar em salários é justamente o erro do tema.'],
      ['A do primeiro será maior, pois ele tem maior capacidade de poupança.', false, 'Capacidade de poupança define quanto tempo leva para formar a reserva, não seu tamanho.'],
      ['Nenhum dos dois precisa de reserva, dada a renda elevada.', false, 'Renda alta não substitui liquidez para imprevisto.'],
    ],
    exp: 'A reserva cobre despesas durante uma interrupção de renda. Quem gasta mais precisa de mais.',
    tags: ['reserva', 'financas-pessoais', 'atendimento'],
  }),
  q('q-end-p1', {
    c: 'c-endividamento', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Priorizar quitação de dívida cara sobre aplicação',
    ctx: 'Um cliente tem sobra mensal no orçamento e mantém saldo no rotativo do cartão.',
    e: 'A orientação tecnicamente correta é:',
    alt: [
      ['Direcionar a sobra à quitação do rotativo antes de qualquer aplicação, pois o custo da dívida supera com folga qualquer retorno disponível.', true, 'Correta. É aritmética, não preferência.'],
      ['Aplicar a sobra em produto de liquidez diária e pagar o mínimo do cartão.', false, 'Aportar enquanto se carrega a dívida mais cara do varejo destrói valor.'],
      ['Dividir a sobra entre aplicação e amortização, para manter disciplina de investimento.', false, 'Metade do valor continua rendendo menos do que a dívida custa.'],
      ['Aplicar em produto isento de IR, cujo retorno líquido compensa o rotativo.', false, 'Nenhum produto disponível ao varejo rende o que o rotativo cobra.'],
    ],
    exp: 'Quitar dívida cara é o investimento de maior retorno garantido que existe para esse cliente.',
    tags: ['endividamento', 'rotativo', 'atendimento'],
  }),
  q('q-pc2-p1', {
    c: 'c-processo-consultivo', tipo: 'conceitual', dif: 'media',
    hab: 'Ordenar corretamente as etapas do processo',
    e: 'Na sequência do processo de orientação financeira, o diagnóstico:',
    alt: [
      ['Vem depois da coleta e antes da recomendação, e é a etapa que revela o que o cliente não perguntou.', true, 'Correta. É onde aparecem reserva ausente, dívida cara e proteção incompatível.'],
      ['Vem antes da coleta, para orientar quais informações buscar.', false, 'Não há o que diagnosticar sem os dados coletados.'],
      ['Ocorre simultaneamente à implementação.', false, 'A implementação executa o que o diagnóstico e a recomendação definiram.'],
      ['É dispensável quando o cliente já sabe o que quer.', false, 'É justamente aí que ele mais costuma ser necessário.'],
    ],
    exp: 'Coletar, diagnosticar, recomendar, implementar, acompanhar. O diagnóstico é o filtro entre o dado e a proposta.',
    tags: ['processo-consultivo', 'diagnostico', 'conceitual'],
  }),
  q('q-pld-p1', {
    c: 'c-pld', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Conduzir corretamente a comunicação de operação suspeita',
    ctx: 'Um profissional identifica indícios de operação atípica na conta de um cliente antigo e de bom relacionamento.',
    e: 'A conduta correta é:',
    alt: [
      ['Comunicar ao órgão competente, sem cientificar o cliente da comunicação.', true, 'Correta. Comunica-se o indício, e em sigilo — avisar o cliente compromete a apuração.'],
      ['Aguardar prova do ilícito antes de qualquer comunicação.', false, 'O dever é de comunicar o INDÍCIO; exigir prova esvaziaria o sistema.'],
      ['Informar o cliente e pedir esclarecimentos antes de decidir se comunica.', false, 'Cientificar o cliente da comunicação é vedado.'],
      ['Encerrar a conta e arquivar o caso internamente.', false, 'Encerrar a relação não substitui o dever de comunicar.'],
    ],
    exp: 'Indício basta, e o sigilo da comunicação é parte do dever — não uma escolha do profissional.',
    tags: ['pld', 'coaf', 'conduta'],
  }),
  q('q-pgc-p1', {
    c: 'c-principios-conduta', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Aplicar o padrão de conduta a uma situação concreta',
    ctx: 'Um profissional percebe que dois produtos atendem igualmente ao objetivo do cliente, e um deles remunera melhor o canal de distribuição.',
    e: 'A conduta esperada é:',
    alt: [
      ['Informar o cliente sobre a existência das duas alternativas e sobre a diferença de remuneração, deixando a escolha esclarecida.', true, 'Correta. Conflito se administra com transparência, não com silêncio.'],
      ['Recomendar o que remunera melhor, já que ambos atendem ao objetivo.', false, 'Equivalência técnica não autoriza decidir pelo próprio interesse sem informar.'],
      ['Recomendar o de menor remuneração, para evitar qualquer questionamento.', false, 'Escolher pelo medo também não é decidir pelo cliente; o dever é informar.'],
      ['Deixar o cliente escolher sozinho, sem manifestar preferência nem explicar as diferenças.', false, 'Omitir orientação é descumprir o dever de diligência.'],
    ],
    exp: 'O Código não se resolve contando incisos: ele se aplica a situações como esta.',
    tags: ['conduta', 'conflito', 'transparencia'],
  }),
  q('q-crm-p1', {
    c: 'c-crimes-mercado', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer o alcance do tipo de uso indevido de informação privilegiada',
    e: 'Quanto ao uso indevido de informação privilegiada, é correto afirmar que:',
    alt: [
      ['Quem apenas repassa a informação relevante sigilosa responde na mesma pena, ainda que não opere e não obtenha lucro.', true, 'Correta. O repasse está expressamente alcançado pelo tipo.'],
      ['Só comete o crime quem efetivamente compra ou vende com base na informação.', false, 'É a leitura mais comum e está incompleta.'],
      ['O crime exige a comprovação de lucro efetivo do agente.', false, 'A vantagem indevida pode ser o elemento, mas o repasse é punido independentemente disso.'],
      ['A conduta configura apenas infração administrativa, sem tipo penal.', false, 'Há tipo penal específico na Lei 6.385/1976.'],
    ],
    exp: 'Repassar já é conduta típica. O erro de achar que "só quem opera responde" é o eixo do tema.',
    tags: ['crimes-mercado', 'insider', 'conceitual'],
  }),
  q('q-abu-p1', {
    c: 'c-praticas-abusivas', tipo: 'comparacao', dif: 'dificil',
    hab: 'Distinguir front running de insider trading',
    e: 'A diferença entre front running e uso indevido de informação privilegiada está em que, no front running:',
    alt: [
      ['A informação explorada é a ORDEM DO CLIENTE, e não um fato relevante da companhia.', true, 'Correta. O intermediário se antecipa à execução da ordem que recebeu.'],
      ['A informação explorada é um fato relevante ainda não divulgado.', false, 'Isso descreve o insider trading.'],
      ['Não há vantagem econômica para o agente.', false, 'A vantagem é justamente o motivo da conduta.'],
      ['A conduta é praticada pelo próprio investidor, e não pelo intermediário.', false, 'Quem tem acesso à ordem é o intermediário.'],
    ],
    exp: 'Duas figuras parecidas, fontes de informação diferentes: a companhia num caso, o próprio cliente no outro.',
    tags: ['praticas-abusivas', 'front-running', 'comparacao'],
  }),
  q('q-sig-p1', {
    c: 'c-sigilo', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar o que a lei exclui do conceito de violação de sigilo',
    e: 'Nos termos da legislação sobre sigilo das operações financeiras, NÃO constitui violação de sigilo:',
    alt: [
      ['A comunicação de indícios de ilícito às autoridades competentes.', true, 'Correta. A lei exclui expressamente essa hipótese do conceito de violação.'],
      ['O fornecimento de extratos a empresa de cobrança contratada pelo banco.', false, 'Terceirização não afasta o dever de sigilo perante o cliente.'],
      ['A divulgação de dados a instituição do mesmo grupo para oferta de produtos.', false, 'A finalidade comercial não excepciona o sigilo.'],
      ['A resposta a pedido informal de autoridade sem procedimento instaurado.', false, 'O afastamento do sigilo depende de procedimento e de forma previstos em lei.'],
    ],
    exp: 'Deixar de comunicar por "respeito ao sigilo" é inverter a norma: a própria lei tirou essa hipótese do conceito de violação.',
    tags: ['sigilo', 'pld', 'conceitual'],
  }),
  q('q-lgp-p1', {
    c: 'c-lgpd', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Identificar a base legal correta para o cadastro obrigatório',
    ctx: 'Um cliente pede que a instituição apague todos os seus dados cadastrais, invocando a LGPD.',
    e: 'A resposta correta é:',
    alt: [
      ['Explicar que o cadastro exigido por norma se apoia em cumprimento de obrigação legal, base que não depende de consentimento e não é afastada por pedido de eliminação.', true, 'Correta. O direito à eliminação não alcança o tratamento com base legal própria.'],
      ['Atender ao pedido integralmente, pois o titular tem direito absoluto à eliminação.', false, 'O direito à eliminação tem exceções, e o cumprimento de obrigação legal é uma delas.'],
      ['Negar o pedido informando que a LGPD não se aplica a instituições financeiras.', false, 'A LGPD se aplica; o que muda é a base legal do tratamento.'],
      ['Atender ao pedido apenas se o cliente encerrar o relacionamento.', false, 'O encerramento não afasta obrigações legais de guarda de registros.'],
    ],
    exp: 'Consentimento é uma das bases legais, não a única. Boa parte do que o banco trata não depende dele.',
    tags: ['lgpd', 'bases-legais', 'atendimento'],
  }),
  q('q-atd-p1', {
    c: 'c-atendimento', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer a função do registro do atendimento',
    e: 'O registro do que foi informado ao cliente durante o atendimento serve principalmente para:',
    alt: [
      ['Comprovar, depois, que os riscos foram comunicados — e quem mais depende dessa prova é o próprio profissional.', true, 'Correta. É proteção mútua, não burocracia da instituição.'],
      ['Cumprir exigência interna sem efeito prático na relação com o cliente.', false, 'É a única prova disponível quando a reclamação chega meses depois.'],
      ['Transferir ao cliente a responsabilidade pela decisão tomada.', false, 'O registro documenta a informação prestada; não transfere o dever de adequação.'],
      ['Substituir a análise de adequação do produto ao perfil.', false, 'São deveres distintos e cumulativos.'],
    ],
    exp: 'Sem registro, a versão do cliente é a única que existe. É por isso que a burocracia protege quem a cumpre.',
    tags: ['atendimento', 'registro', 'conduta'],
  }),
]
