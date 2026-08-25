import { q } from './builder'

/**
 * Questões autorais — macrotema 1, complemento de cobertura.
 *
 * Este arquivo existe por uma razão de MOTOR, não de conteúdo. O
 * `LACUNAS.md` fixa cinco questões por conceito como piso: abaixo disso o
 * Elo não tem material para calibrar dificuldade, e um simulado começa a
 * repetir item. Os conceitos aqui atendidos vinham de lotes anteriores com
 * três ou quatro questões cada.
 *
 * O critério de autoria é o mesmo dos demais bancos: cada item ataca um erro
 * identificável, e cada distrator descreve uma confusão que acontece de
 * verdade — não uma alternativa obviamente absurda para preencher espaço.
 */
export const BANCO_M1_PISO = [
  /* ---- c-cmn -------------------------------------------------------------- */
  q('q-cmn-p1', {
    c: 'c-cmn', tipo: 'conceitual', dif: 'media',
    hab: 'Separar competência normativa de competência fiscalizadora',
    e: 'O Conselho Monetário Nacional, no desenho do SFN:',
    alt: [
      ['Fixa as normas da política de moeda e crédito, sem fiscalizar instituições nem atender ao público.', true, 'Correta. Normatizar e fiscalizar são funções separadas, e o CMN só exerce a primeira.'],
      ['Fiscaliza as instituições financeiras e aplica as penalidades cabíveis.', false, 'Quem fiscaliza e pune instituição financeira é o Banco Central.'],
      ['Recebe e julga reclamações de clientes contra bancos.', false, 'O CMN não tem canal de atendimento ao público nem competência para julgar reclamação individual.'],
      ['Executa a política monetária por meio de operações de mercado aberto.', false, 'A execução é do Banco Central; o CMN fixa as diretrizes.'],
    ],
    exp: 'A pergunta que resolve quase todo item sobre o CMN: isso é decidir a regra ou aplicá-la? Só a primeira é dele.',
    tags: ['sfn', 'cmn', 'conceitual'],
  }),
  q('q-cmn-p2', {
    c: 'c-cmn', tipo: 'conceitual', dif: 'facil',
    hab: 'Identificar a presidência do colegiado',
    e: 'A presidência do Conselho Monetário Nacional cabe:',
    alt: [
      ['Ao Ministro da Fazenda.', true, 'Correta. O Presidente do Banco Central é membro, não presidente do conselho.'],
      ['Ao Presidente do Banco Central.', false, 'Ele integra o colegiado, mas não o preside — é a troca mais frequente do tema.'],
      ['Ao Presidente da República.', false, 'O Presidente da República não integra o CMN.'],
      ['Ao Presidente da CVM.', false, 'A CVM não integra o CMN.'],
    ],
    exp: 'Quem executa a política não preside quem a define. A separação é proposital.',
    tags: ['sfn', 'cmn', 'composicao'],
  }),

  /* ---- c-bacen ------------------------------------------------------------ */
  q('q-bcn-p1', {
    c: 'c-bacen', tipo: 'comparacao', dif: 'dificil',
    hab: 'Distinguir Selic meta de Selic over',
    e: 'A diferença entre a Selic meta e a Selic over é que:',
    alt: [
      ['A meta é a taxa definida pelo Copom; a over é a taxa efetivamente praticada nas operações compromissadas de um dia com título público, que gravita em torno da meta.', true, 'Correta. Uma é decisão, a outra é resultado observado.'],
      ['A meta é a taxa média do mercado e a over é a decidida pelo Copom.', false, 'Está invertido: o Copom decide a meta, e a over é a média observada no mercado.'],
      ['A meta vale para o setor público e a over para o setor privado.', false, 'Não há essa segmentação por setor.'],
      ['A meta é anual e a over é mensal.', false, 'Ambas são expressas ao ano; a diferença não é de periodicidade.'],
    ],
    exp: 'Meta é o alvo que o Copom anuncia; over é onde o mercado efetivamente negocia, e o Bacen atua para aproximar as duas.',
    tags: ['bacen', 'selic', 'comparacao'],
  }),
  q('q-bcn-p2', {
    c: 'c-bacen', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer as atribuições executivas do Banco Central',
    e: 'Entre as atribuições do Banco Central do Brasil NÃO se inclui:',
    alt: [
      ['Fixar as diretrizes da política de moeda e crédito do país.', true, 'Correta. Essa competência normativa é do CMN.'],
      ['Emitir papel-moeda nos termos da legislação.', false, 'É atribuição do Bacen.'],
      ['Fiscalizar as instituições financeiras e aplicar penalidades.', false, 'É atribuição do Bacen.'],
      ['Executar a política monetária, inclusive por operações de mercado aberto.', false, 'É atribuição do Bacen.'],
    ],
    exp: 'Toda alternativa que use o verbo "fixar diretrizes" com o Bacen como sujeito merece desconfiança.',
    tags: ['bacen', 'competencias', 'conceitual'],
  }),

  /* ---- c-cvm -------------------------------------------------------------- */
  q('q-cvm-p1', {
    c: 'c-cvm', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Encaminhar reclamação de produto ao supervisor correto',
    ctx: 'Na mesma conversa, um gerente oferece a um cliente um fundo de investimento, um VGBL e um CDB.',
    e: 'Os supervisores desses três produtos são, respectivamente:',
    alt: [
      ['CVM, Susep e Banco Central.', true, 'Correta. Um mesmo balcão, três reguladores — porque o critério é o produto, não o local da venda.'],
      ['Banco Central para os três, por serem oferecidos por instituição financeira.', false, 'O banco é fiscalizado pelo Bacen; os produtos seguem sua própria natureza.'],
      ['CVM para os três, por envolverem aplicação de recursos.', false, 'A CVM alcança valores mobiliários, não seguros nem depósitos.'],
      ['CVM, Previc e Banco Central.', false, 'VGBL é previdência ABERTA, e previdência aberta é Susep.'],
    ],
    exp: 'É o exercício que resolve o microtema: o mesmo gerente pode vender três produtos de três sistemas diferentes.',
    tags: ['sfn', 'supervisores', 'atendimento'],
  }),
  q('q-cvm-p2', {
    c: 'c-cvm', tipo: 'conceitual', dif: 'media',
    hab: 'Situar a CVM na estrutura institucional',
    e: 'Sobre a Comissão de Valores Mobiliários, é correto afirmar que:',
    alt: [
      ['É autarquia em regime especial com poder normativo próprio, exercido por meio de Resoluções CVM.', true, 'Correta. As Resoluções 30 e 175, por exemplo, são dela e não do CMN.'],
      ['É órgão do Banco Central especializado no mercado de capitais.', false, 'É autarquia autônoma, não órgão interno do Bacen.'],
      ['Depende de aprovação do CMN para editar cada uma de suas normas.', false, 'A CVM tem poder normativo próprio dentro de sua competência.'],
      ['Supervisiona também as entidades abertas de previdência complementar.', false, 'Previdência aberta é Susep; a CVM alcança os fundos em que o plano investe.'],
    ],
    exp: 'Resolução CVM é norma da CVM. Quando um enunciado atribui essas resoluções ao CMN, está errado.',
    tags: ['cvm', 'institucional', 'conceitual'],
  }),

  /* ---- c-sancionador ------------------------------------------------------ */
  q('q-snc-p1', {
    c: 'c-sancionador', tipo: 'conceitual', dif: 'dificil',
    hab: 'Caracterizar corretamente o termo de compromisso',
    e: 'A celebração de termo de compromisso em processo administrativo sancionador da CVM:',
    alt: [
      ['Suspende o processo sem que haja confissão de culpa ou reconhecimento de ilicitude pelo compromitente.', true, 'Correta. É expressamente o contrário de uma condenação branda.'],
      ['Equivale a confissão da infração, com penalidade reduzida.', false, 'Não há reconhecimento de ilicitude — é o ponto central do instituto.'],
      ['Encerra o processo com registro de condenação no cadastro do infrator.', false, 'Não há condenação a registrar.'],
      ['Só pode ser proposto pela CVM, nunca pelo acusado.', false, 'A proposta pode partir do interessado, cabendo à autarquia aceitá-la ou não.'],
    ],
    exp: 'Cessar a prática e indenizar prejuízos, sem admitir culpa. Ler isso como "pena menor" é o erro clássico.',
    tags: ['cvm', 'sancionador', 'termo-compromisso'],
  }),

  /* ---- c-transparencia-mercado -------------------------------------------- */
  q('q-tra-p1', {
    c: 'c-transparencia-mercado', tipo: 'situacao_pratica', dif: 'dificil',
    hab: 'Reconhecer a simultaneidade como núcleo do dever',
    ctx: 'Uma companhia comunica um fato relevante a um grupo de analistas em reunião fechada e divulga o mesmo fato ao mercado duas horas depois.',
    e: 'A avaliação correta dessa conduta é:',
    alt: [
      ['Houve infração: o que a norma protege é a simultaneidade do acesso, e informar um grupo antes do mercado já a viola.', true, 'Correta. A divulgação posterior não sana a assimetria criada nas duas horas.'],
      ['Não houve infração, pois a divulgação geral ocorreu no mesmo dia.', false, 'O intervalo é exatamente o problema: nele existiu informação privilegiada em circulação restrita.'],
      ['Não houve infração, pois analistas profissionais não são investidores.', false, 'A condição de quem recebe não altera o dever de divulgação simultânea.'],
      ['Houve infração apenas se algum participante da reunião tiver negociado.', false, 'A negociação seria infração adicional; a divulgação seletiva já é ilícita por si.'],
    ],
    exp: 'Divulgar depois não conserta ter divulgado antes para alguns. O bem protegido é o acesso igual.',
    tags: ['transparencia', 'fato-relevante', 'conduta'],
  }),
]
