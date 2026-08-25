import type { Conceito } from '../types'

/**
 * MACROTEMA 4 — os quatro microtemas que faltavam.
 *
 * 4.2 (introdução aos investimentos ESG), 4.3 (fundos IS), 4.4 (finanças
 * descentralizadas) e 4.7 (fintechs e meios de pagamento). Com eles, os vinte
 * microtemas do Programa Detalhado passam a ter aula.
 *
 * NOTA EDITORIAL — este é o macrotema mais volátil do programa. Taxonomia
 * ESG, regulação de ativos virtuais e arranjos de pagamento estão todos em
 * construção normativa. As aulas descrevem o MECANISMO e o que já é exigível
 * hoje, e marcam explicitamente o que ainda é matéria em discussão. Onde a
 * norma citada for recente, confira a versão vigente antes de decorar
 * (regra 4 do CLAUDE.md).
 */

export const CONCEITOS_4_2: Conceito[] = [
  {
    id: 'c-esg-investimentos',
    microtemaId: 'm4.2',
    titulo: 'Investimentos ESG: das siglas à decisão de alocação',
    objetivo: 'Distinguir as estratégias de investimento responsável e reconhecer o greenwashing.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'Investir com critério ESG não é uma coisa só: vai da exclusão de setores à integração de fatores na análise financeira, passando pelo investimento de impacto. Greenwashing é vender rótulo sem processo por trás.',
    explicacao: {
      oQueE:
        'Investimento ESG é a incorporação de fatores ambientais, sociais e de governança à decisão de alocação, por estratégias que variam bastante em profundidade e em objetivo.',
      porQueImporta:
        'A demanda por produtos com rótulo sustentável cresceu mais rápido que a padronização do que o rótulo significa — e o profissional precisa saber distinguir processo real de rótulo comercial.',
      paraQueServe:
        'Alinhar a carteira a valores declarados pelo cliente e incorporar riscos que a análise financeira tradicional captava mal.',
      comoFunciona: [
        'EXCLUSÃO (screening negativo): a mais antiga e a mais simples. Retira setores inteiros da carteira — armas, tabaco, carvão.',
        'INTEGRAÇÃO ESG: incorpora fatores ambientais, sociais e de governança à análise financeira convencional, como qualquer outro risco. Não exclui setor: precifica.',
        'BEST IN CLASS: seleciona, dentro de cada setor, as empresas com melhor desempenho ESG relativo — inclusive em setores controversos.',
        'INVESTIMENTO DE IMPACTO: busca intencionalmente resultado social ou ambiental mensurável ALÉM do retorno financeiro. É a estratégia mais exigente, porque exige medir o impacto.',
        'GREENWASHING é usar rótulo sustentável sem processo, metodologia ou métrica que o sustente. É problema de conduta e de informação, não de estratégia.',
      ],
      exemploSimples:
        'Um fundo que apenas exclui empresas de tabaco aplica screening negativo. Outro que analisa risco climático de cada empresa antes de investir aplica integração ESG. Os dois são chamados de sustentáveis, e são coisas bem diferentes.',
      exemploAplicado:
        'Um cliente quer que a carteira "não financie desmatamento". Isso é uma preferência de exclusão, e precisa ser traduzida em critério verificável — qual setor sai, com base em que dado, verificado por quem. Sem essa tradução, o pedido vira rótulo, e o cliente descobre depois que o fundo dito sustentável tem exatamente o que ele queria evitar.',
      lembrarNaProva: [
        'Exclusão retira setor; integração precifica risco.',
        'Best in class seleciona os melhores DENTRO de cada setor.',
        'Impacto exige resultado mensurável além do retorno.',
        'Greenwashing é rótulo sem processo por trás.',
      ],
      revisaoRapida: [
        'Exclusão: tira setores inteiros da carteira.',
        'Integração: incorpora fatores ESG à análise financeira.',
        'Best in class: os melhores de cada setor, inclusive controversos.',
        'Impacto: resultado mensurável, além do retorno.',
        'Greenwashing: rótulo sem metodologia que o sustente.',
      ],
    },
    exemplos: [
      {
        titulo: 'Duas carteiras, o mesmo rótulo',
        corpo:
          'Um fundo best in class pode ter a melhor petroleira do setor; um fundo de exclusão não tem petroleira nenhuma. Ambos se apresentam como sustentáveis, e o cliente que queria evitar combustível fóssil só descobre a diferença lendo a metodologia.',
      },
    ],
    conceitoChave:
      'O rótulo ESG não descreve uma carteira: descreve uma intenção. O que descreve a carteira é a metodologia.',
    pontosChave: [
      'Exclusão: retira setores',
      'Integração: precifica risco ESG',
      'Best in class: melhores de cada setor',
      'Impacto: resultado mensurável',
      'Greenwashing: rótulo sem processo',
    ],
    erroComum:
      'Tratar "fundo ESG" como categoria homogênea. Duas estratégias diferentes produzem carteiras opostas sob o mesmo rótulo.',
    alertaProva:
      'A taxonomia e as regras de rotulagem sustentável estão em construção normativa no Brasil e no exterior. Confira a norma vigente antes de afirmar exigência específica.',
    tabela: {
      titulo: 'Estratégias de investimento responsável',
      colunas: ['Estratégia', 'O que faz', 'Setor controverso'],
      linhas: [
        ['Exclusão', 'Retira setores da carteira', 'Fica de fora'],
        ['Integração', 'Precifica risco ESG na análise', 'Pode entrar, com desconto'],
        ['Best in class', 'Seleciona os melhores do setor', 'Pode entrar, o melhor deles'],
        ['Impacto', 'Busca resultado mensurável', 'Depende da tese'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Um fundo que seleciona, dentro de cada setor, as empresas com melhor desempenho ESG relativo adota a estratégia de:',
      alternativas: ['Exclusão', 'Best in class', 'Investimento de impacto', 'Screening negativo'],
      correta: 1,
      explicacao:
        'Best in class não retira setores: escolhe os melhores dentro de cada um, inclusive em setores controversos.',
    },
    mapaMental: {
      id: 'mm-esgi',
      rotulo: 'Investimentos ESG',
      revisao: true,
      filhos: [
        { id: 'mm-esgi-excl', rotulo: 'Exclusão', detalhe: 'Retira setores inteiros', revisao: true },
        { id: 'mm-esgi-integ', rotulo: 'Integração', detalhe: 'Precifica o risco ESG', revisao: true },
        { id: 'mm-esgi-best', rotulo: 'Best in class', detalhe: 'Os melhores de cada setor', revisao: true },
        { id: 'mm-esgi-imp', rotulo: 'Impacto', detalhe: 'Resultado mensurável além do retorno', revisao: true },
        { id: 'mm-esgi-green', rotulo: 'Greenwashing', detalhe: 'Rótulo sem processo', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'Existem vários jeitos de investir pensando em sustentabilidade. Uns tiram setores da carteira, outros escolhem os melhores de cada setor.',
      exemplo:
        'Um fundo pode não ter petroleira nenhuma. Outro pode ter a melhor petroleira do setor. Os dois se chamam sustentáveis.',
      analogia:
        'É como dieta: "comer melhor" pode significar cortar um grupo de alimentos ou escolher a melhor versão de cada um. São planos diferentes.',
      iniciante:
        'Investimento ESG leva em conta meio ambiente, questões sociais e boa gestão da empresa, além do retorno financeiro.',
    },
    niveis: {
      entenda:
        'Há várias estratégias ESG e elas produzem carteiras diferentes. O rótulo não diz qual foi usada — a metodologia diz.',
      aprofunde:
        'A integração ESG é a estratégia mais defensável em termos puramente fiduciários, porque não exige justificativa extrafinanceira: ela trata fatores ambientais, sociais e de governança como riscos e oportunidades que a análise tradicional captava mal — risco regulatório de carbono, passivo trabalhista, qualidade de conselho. Nessa leitura, ignorá-los é análise incompleta, não neutralidade. As estratégias de exclusão e de impacto envolvem escolha de valor além do retorno, e por isso dependem de mandato explícito do investidor: um gestor que exclui setores sem autorização está impondo preferência própria sobre patrimônio de terceiro. Essa distinção explica por que a regulação de rotulagem tem se concentrado em transparência de METODOLOGIA em vez de definir o que é sustentável: definir substantivamente exigiria um consenso que não existe, enquanto exigir que o fundo declare e siga o próprio critério é verificável e ataca diretamente o greenwashing. O problema prático que sobra é a comparabilidade — dois fundos com metodologias declaradas e coerentes podem ser incomparáveis entre si, e a agregação de ratings ESG de provedores diferentes tem correlação notoriamente baixa.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },
]

export const CONCEITOS_4_3: Conceito[] = [
  {
    id: 'c-fundos-is',
    microtemaId: 'm4.3',
    titulo: 'Fundos IS e fundos que integram questões ESG',
    objetivo: 'Distinguir fundo sustentável de fundo que apenas integra fatores ESG.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'A autorregulação separa duas categorias: o fundo IS, cujo objetivo declarado É a sustentabilidade, e o fundo que apenas INTEGRA questões ESG na análise. Só o primeiro pode se apresentar como sustentável no nome.',
    explicacao: {
      oQueE:
        'A classificação distingue os fundos que perseguem objetivo de sustentabilidade daqueles que apenas consideram fatores ESG como parte do processo de análise.',
      porQueImporta:
        'É a resposta regulatória direta ao greenwashing: sem a distinção, qualquer fundo que mencionasse ESG na lâmina poderia se vender como sustentável.',
      paraQueServe:
        'Permitir que o investidor saiba se está comprando um objetivo de sustentabilidade ou apenas um processo de análise que considera esses fatores.',
      comoFunciona: [
        'FUNDO IS (investimento sustentável): a sustentabilidade é OBJETIVO declarado do fundo, com metodologia, indicadores e governança próprios para persegui-lo e medi-lo.',
        'FUNDO QUE INTEGRA ESG: considera fatores ambientais, sociais e de governança na análise, mas o objetivo continua sendo o retorno financeiro. Não é fundo sustentável.',
        'Apenas o fundo IS pode usar no NOME termos que indiquem sustentabilidade. O que apenas integra não pode se apresentar assim.',
        'O fundo IS precisa DECLARAR a metodologia e prestar contas dela periodicamente — a exigência é de transparência e coerência, não de um padrão único de sustentabilidade.',
        'Integrar ESG sem objetivo declarado não é falha: é uma escolha legítima de processo. O que é vedado é vendê-la como se fosse a outra coisa.',
      ],
      exemploSimples:
        'Um fundo de ações que analisa risco climático das empresas antes de investir integra ESG. Um fundo que só investe em empresas com meta de descarbonização auditada e reporta o progresso dela é um fundo IS.',
      exemploAplicado:
        'Um cliente pede um fundo sustentável e recebe uma sugestão cujo material menciona critérios ESG na análise. A pergunta técnica é qual das duas categorias ele é. Se apenas integra, oferecê-lo como resposta ao pedido de "fundo sustentável" é induzir a erro — mesmo que a lâmina esteja tecnicamente correta.',
      lembrarNaProva: [
        'Fundo IS tem a sustentabilidade como OBJETIVO declarado.',
        'Fundo que integra ESG tem o retorno como objetivo.',
        'Só o fundo IS pode indicar sustentabilidade no NOME.',
        'A exigência é de transparência de metodologia, não de padrão único.',
      ],
      revisaoRapida: [
        'IS: sustentabilidade é o objetivo do fundo.',
        'Integra ESG: sustentabilidade é insumo da análise.',
        'Só o IS pode se nomear como sustentável.',
        'O IS declara metodologia e presta contas dela.',
        'Integrar sem declarar objetivo é escolha legítima.',
      ],
    },
    exemplos: [
      {
        titulo: 'Objetivo × insumo',
        corpo:
          'A pergunta que separa as categorias é uma só: a sustentabilidade é o QUE o fundo persegue, ou é uma das informações que ele usa para perseguir retorno? A primeira resposta é fundo IS; a segunda, fundo que integra ESG.',
      },
    ],
    conceitoChave:
      'A classificação não define o que é sustentável: define quem pode dizer que é.',
    pontosChave: [
      'IS: objetivo de sustentabilidade',
      'Integra: ESG como insumo da análise',
      'Só o IS usa o nome',
      'Metodologia declarada e prestada',
      'Integrar sem rótulo é legítimo',
    ],
    erroComum:
      'Concluir que um fundo é sustentável porque a lâmina menciona critérios ESG. Mencionar fator na análise é a categoria "integra", que não autoriza o rótulo.',
    alertaProva:
      'As regras de rotulagem e as exigências de reporte vêm da autorregulação e são revistas periodicamente. Confira o Código vigente antes de decorar exigência específica.',
    tabela: {
      titulo: 'IS × integra ESG',
      colunas: ['Aspecto', 'Fundo IS', 'Fundo que integra ESG'],
      linhas: [
        ['Objetivo', 'Sustentabilidade, declarada', 'Retorno financeiro'],
        ['Papel do ESG', 'Fim', 'Insumo da análise'],
        ['Nome sustentável', 'Permitido', 'Vedado'],
        ['Reporte específico', 'Exigido', 'Não exigido'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Um fundo que considera fatores ESG na análise, mas tem o retorno financeiro como objetivo, pode usar termo indicativo de sustentabilidade em seu nome?',
      alternativas: [
        'Sim, desde que mencione os critérios na lâmina',
        'Não, pois é fundo que apenas integra ESG e não fundo IS',
        'Sim, se a gestora for signatária de compromissos internacionais',
        'Sim, desde que ao menos metade da carteira seja de empresas sustentáveis',
      ],
      correta: 1,
      explicacao:
        'O nome é reservado ao fundo cujo OBJETIVO declarado é a sustentabilidade. Integrar fatores na análise não autoriza o rótulo.',
    },
    mapaMental: {
      id: 'mm-fis',
      rotulo: 'Fundos e ESG',
      revisao: true,
      filhos: [
        {
          id: 'mm-fis-is',
          rotulo: 'Fundo IS',
          detalhe: 'Sustentabilidade é o OBJETIVO',
          revisao: true,
          filhos: [
            { id: 'mm-fis-nome', rotulo: 'Pode usar o nome', revisao: true },
            { id: 'mm-fis-metod', rotulo: 'Declara metodologia', detalhe: 'E presta contas dela' },
          ],
        },
        {
          id: 'mm-fis-integ',
          rotulo: 'Integra ESG',
          detalhe: 'ESG é INSUMO · objetivo é retorno',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Um fundo é sustentável quando esse é o objetivo dele. Se ele só usa critérios ESG para escolher melhor, não pode se chamar de sustentável.',
      exemplo:
        'Analisar risco climático antes de investir é integrar ESG. Só investir em empresa com meta de descarbonização auditada é fundo IS.',
      analogia:
        'É a diferença entre um restaurante vegetariano e um que usa ingredientes orgânicos. Só um deles pode colocar isso no letreiro.',
      iniciante:
        'Nem todo fundo que fala de sustentabilidade é um fundo sustentável. Existe uma classificação que separa os dois casos.',
    },
    niveis: {
      entenda:
        'Fundo IS tem a sustentabilidade como objetivo e pode usar o nome. Fundo que só integra ESG na análise não pode.',
      aprofunde:
        'A escolha regulatória de separar as duas categorias em vez de definir substantivamente o que é sustentável é deliberada e resolve um problema real: não existe consenso sobre o conteúdo da sustentabilidade, e uma definição de autoridade envelheceria mal e capturaria mal os casos de fronteira. Ao exigir que o fundo declare o próprio critério e preste contas dele, a norma torna o compromisso VERIFICÁVEL sem precisar arbitrar o mérito — a violação deixa de ser "esse fundo não é sustentável", que é indemonstrável, e passa a ser "esse fundo não cumpriu a metodologia que declarou", que é auditável. É a mesma técnica usada em outros pontos da regulação de mercado: não se tabela o preço, obriga-se a expressá-lo de forma comparável. O limite dessa abordagem é a comparabilidade entre fundos: dois produtos com metodologias coerentes e bem reportadas podem perseguir objetivos incompatíveis, e cabe ao investidor — na prática, ao profissional que o atende — ler a metodologia antes de tratar o rótulo como equivalente.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 7,
  },
]

export const CONCEITOS_4_4: Conceito[] = [
  {
    id: 'c-blockchain',
    microtemaId: 'm4.4',
    titulo: 'Blockchain e ativos virtuais',
    objetivo: 'Explicar o registro distribuído e distinguir as categorias de ativos virtuais.',
    etiquetas: ['ESSENCIAL', 'ENTENDER'],
    resumo30s:
      'Blockchain é um registro compartilhado e encadeado, em que alterar um bloco antigo exigiria refazer todos os seguintes. É isso que dispensa o intermediário que garante a verdade do registro — e é isso que a tecnologia realmente entrega.',
    explicacao: {
      oQueE:
        'Blockchain é um livro-razão distribuído: cópias do mesmo registro mantidas por múltiplos participantes, organizadas em blocos encadeados por criptografia.',
      porQueImporta:
        'É a base de toda a discussão de ativos virtuais, tokenização e finanças descentralizadas — e separar o que a tecnologia faz do que se promete que ela faz é o trabalho técnico aqui.',
      paraQueServe:
        'Permitir que partes que não confiam umas nas outras compartilhem um registro sem depender de um intermediário central para garanti-lo.',
      comoFunciona: [
        'Cada bloco contém transações e uma referência criptográfica ao bloco anterior. Alterar um bloco antigo mudaria essa referência e invalidaria toda a cadeia seguinte.',
        'A validação é feita por CONSENSO entre os participantes da rede, segundo regras predefinidas. Não há autoridade central que decida o que é válido.',
        'REDE PÚBLICA é aberta a qualquer participante; REDE PRIVADA ou permissionada restringe quem valida. A maior parte das aplicações financeiras institucionais usa a segunda.',
        'CRIPTOMOEDA é o ativo virtual nativo de uma rede. STABLECOIN busca manter paridade com um ativo de referência, normalmente uma moeda fiduciária. TOKEN pode representar direito sobre um ativo do mundo real.',
        'A tecnologia garante a INTEGRIDADE do registro — não a veracidade do que foi registrado, nem a idoneidade de quem registrou.',
      ],
      exemploSimples:
        'Registrar que um token representa uma cota de um imóvel não torna o imóvel existente nem o título legítimo. O registro é imutável; o que ele afirma pode ser falso desde a origem.',
      exemploAplicado:
        'Um cliente diz que quer investir em cripto "porque blockchain é seguro". A confusão é comum e precisa ser desfeita: a tecnologia protege o registro contra adulteração, mas não protege o investidor contra volatilidade, contra fraude na origem, nem contra a perda das próprias chaves de acesso — que, perdidas, tornam o ativo irrecuperável.',
      lembrarNaProva: [
        'Blockchain garante integridade do registro, não veracidade do conteúdo.',
        'A validação é por consenso, sem autoridade central.',
        'Rede pública é aberta; permissionada restringe quem valida.',
        'Stablecoin busca paridade; criptomoeda nativa, não.',
      ],
      revisaoRapida: [
        'Registro distribuído, em blocos encadeados por criptografia.',
        'Validação por consenso, sem autoridade central.',
        'Pública × permissionada: quem pode validar.',
        'Token pode representar direito sobre ativo real.',
        'Integridade do registro ≠ veracidade do registrado.',
      ],
    },
    exemplos: [
      {
        titulo: 'O que a imutabilidade não resolve',
        corpo:
          'Se alguém registra na cadeia um token lastreado em um imóvel que não possui, o registro fica imutável — e falso. A tecnologia impede a adulteração posterior, não a mentira original. É por isso que tokenização de ativo real depende de estrutura jurídica e de custódia, não só de código.',
      },
    ],
    conceitoChave:
      'Blockchain resolve o problema de confiar no REGISTRO; não resolve o de confiar em quem registrou.',
    pontosChave: [
      'Blocos encadeados por criptografia',
      'Consenso, sem autoridade central',
      'Pública × permissionada',
      'Stablecoin busca paridade',
      'Integridade ≠ veracidade',
    ],
    erroComum:
      'Concluir que um ativo é seguro porque está em blockchain. A tecnologia protege o registro; não protege contra volatilidade, fraude na origem ou perda de chaves.',
    alertaProva:
      'A regulação de prestadores de serviços de ativos virtuais no Brasil é recente e está em implementação. Confira o estágio da norma antes de afirmar exigência específica.',
    tabela: {
      titulo: 'Categorias de ativo virtual',
      colunas: ['Categoria', 'Característica'],
      linhas: [
        ['Criptomoeda nativa', 'Ativo próprio da rede, sem lastro em outro ativo'],
        ['Stablecoin', 'Busca manter paridade com um ativo de referência'],
        ['Token de ativo real', 'Representa direito sobre um bem fora da rede'],
      ],
    },
    perguntaRapida: {
      enunciado: 'A imutabilidade do registro em blockchain garante que:',
      alternativas: [
        'A informação registrada é verdadeira',
        'O registro não pode ser adulterado depois de feito',
        'O ativo registrado tem lastro comprovado',
        'O emissor do ativo é idôneo',
      ],
      correta: 1,
      explicacao:
        'A tecnologia garante integridade contra adulteração posterior. Veracidade do conteúdo e idoneidade do emissor são outra camada.',
    },
    mapaMental: {
      id: 'mm-bc',
      rotulo: 'Blockchain',
      revisao: true,
      filhos: [
        { id: 'mm-bc-blocos', rotulo: 'Blocos encadeados', detalhe: 'Alterar um invalida os seguintes', revisao: true },
        { id: 'mm-bc-cons', rotulo: 'Consenso', detalhe: 'Sem autoridade central', revisao: true },
        { id: 'mm-bc-redes', rotulo: 'Pública × permissionada', detalhe: 'Quem pode validar', revisao: true },
        {
          id: 'mm-bc-ativos',
          rotulo: 'Ativos virtuais',
          revisao: true,
          filhos: [
            { id: 'mm-bc-cripto', rotulo: 'Criptomoeda', detalhe: 'Nativa da rede' },
            { id: 'mm-bc-stable', rotulo: 'Stablecoin', detalhe: 'Busca paridade', revisao: true },
            { id: 'mm-bc-token', rotulo: 'Token de ativo real', detalhe: 'Direito sobre bem fora da rede' },
          ],
        },
        { id: 'mm-bc-limite', rotulo: 'Integridade ≠ veracidade', detalhe: 'O limite da tecnologia', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'É um caderno de registros copiado em muitos computadores. Para mudar uma página antiga seria preciso mudar todas as seguintes em todas as cópias.',
      exemplo:
        'Registrar que um token vale uma cota de imóvel não faz o imóvel existir. O registro fica imutável — e pode estar errado desde o começo.',
      analogia:
        'É um cartório sem cartorário: muitos guardam a mesma cópia e conferem entre si. Mas ninguém confere se o que foi declarado é verdade.',
      iniciante:
        'Blockchain é um jeito de guardar registros que ninguém consegue alterar depois, porque muita gente tem a mesma cópia.',
    },
    niveis: {
      entenda:
        'Blockchain é um registro copiado por muitos participantes e encadeado por criptografia. Ele protege o registro contra adulteração — só isso.',
      aprofunde:
        'A propriedade que o blockchain efetivamente entrega é a resistência à dupla contabilização sem autoridade central, e ela custa caro: mecanismos de consenso consomem energia ou capital imobilizado, e a capacidade de processamento é ordens de grandeza menor que a de um sistema centralizado. Essa é a razão de as aplicações financeiras institucionais quase sempre adotarem redes PERMISSIONADAS — quando os participantes já são identificados e regulados, o problema que a rede pública resolve não existe, e o custo do consenso aberto não se justifica. O ponto de fricção mais relevante para o mercado é a tokenização de ativos reais: registrar em cadeia o direito sobre um imóvel ou um recebível só transfere segurança se houver estrutura jurídica que vincule o token ao bem e custódia confiável do bem em si — o chamado problema do oráculo, de como fatos do mundo entram no registro de forma confiável. Nenhuma propriedade criptográfica resolve isso, e é por aí que o tema volta para o terreno conhecido da regulação: identificação de partes, custódia, responsabilidade e prestação de informação.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },
  {
    id: 'c-defi',
    microtemaId: 'm4.4',
    titulo: 'Finanças descentralizadas: DEFI, contratos inteligentes e DAOs',
    objetivo: 'Descrever como serviços financeiros operam sem intermediário e identificar os riscos específicos.',
    etiquetas: ['ATENCAO', 'ENTENDER'],
    resumo30s:
      'DEFI reproduz serviços financeiros — empréstimo, câmbio, derivativos — por meio de contratos inteligentes, sem intermediário. Some o risco de contraparte tradicional e aparecem outros: falha de código, governança e ausência de recurso.',
    explicacao: {
      oQueE:
        'Finanças descentralizadas são serviços financeiros executados por programas em rede distribuída, sem uma instituição que os intermedeie ou custodie.',
      porQueImporta:
        'É o item do programa em que a diferença entre o discurso e a realidade operacional é maior — e onde o profissional precisa ser capaz de nomear os riscos que não desaparecem por não haver banco.',
      paraQueServe:
        'Oferecer acesso a serviços financeiros sem depender de aprovação de intermediário e com regras executadas automaticamente.',
      comoFunciona: [
        'CONTRATO INTELIGENTE é um programa que executa automaticamente quando as condições previstas ocorrem. Ele não interpreta: cumpre o que está escrito no código.',
        'DEX (corretora descentralizada) permite trocar ativos diretamente entre carteiras, sem custodiante. Quem guarda as chaves é o próprio usuário.',
        'DAO é uma organização cujas decisões são tomadas por votação registrada em cadeia, tipicamente proporcional à posse de um token de governança.',
        'RISCOS ESPECÍFICOS: falha ou vulnerabilidade de código, concentração de tokens de governança, ausência de contraparte a quem reclamar e perda irreversível de chaves privadas.',
        'A ausência de intermediário elimina o risco DAQUELE intermediário — não elimina risco. Ela redistribui o risco para o código e para o próprio usuário.',
      ],
      exemploSimples:
        'Um contrato inteligente de empréstimo libera o valor automaticamente quando a garantia é depositada e a executa automaticamente se a garantia cair abaixo do limite. Não há gerente a quem pedir prazo.',
      exemploAplicado:
        'Um cliente pergunta o que fazer se enviar recursos por engano numa operação DEFI. Em geral, nada: não há central de atendimento, não há estorno e não há autoridade que possa reverter. É o mesmo princípio da irrevogabilidade do PIX levado ao extremo, sem sequer o mecanismo excepcional de devolução que o arranjo brasileiro prevê.',
      lembrarNaProva: [
        'Contrato inteligente cumpre o código, não interpreta intenção.',
        'Em DEX a custódia é do próprio usuário.',
        'DAO decide por votação em cadeia, ligada a token de governança.',
        'Sem intermediário não é sem risco: o risco muda de lugar.',
      ],
      revisaoRapida: [
        'DEFI reproduz serviços financeiros sem intermediário.',
        'Contrato inteligente executa o que está no código.',
        'DEX: troca direta, custódia com o usuário.',
        'DAO: governança por token, votação em cadeia.',
        'Riscos: código, governança, ausência de recurso, perda de chave.',
      ],
    },
    exemplos: [
      {
        titulo: 'O código é a regra — inclusive quando está errado',
        corpo:
          'Se um contrato inteligente tem uma falha que permite drenar os fundos, a execução dessa falha é tecnicamente válida: o programa fez o que estava escrito. Não há cláusula de boa-fé nem juiz para dizer que a intenção era outra. Auditar código passa a ser o equivalente a analisar risco de crédito.',
      },
    ],
    conceitoChave:
      'Tirar o intermediário elimina o risco daquele intermediário e transfere o risco para o código e para o usuário.',
    pontosChave: [
      'Contrato inteligente cumpre o código',
      'DEX: custódia com o usuário',
      'DAO: governança por token',
      'Risco de código e de governança',
      'Ausência de recurso e de estorno',
    ],
    erroComum:
      'Tratar a ausência de intermediário como ausência de risco. O risco de contraparte é substituído por risco de código, de governança e de autocustódia.',
    alertaProva:
      'A regulação de ativos virtuais e de seus prestadores de serviço está em implementação no Brasil. Confira o estágio vigente antes de afirmar obrigação específica.',
    tabela: {
      titulo: 'Onde o risco fica',
      colunas: ['Arranjo', 'Risco principal', 'A quem recorrer'],
      linhas: [
        ['Intermediado tradicional', 'Contraparte e crédito', 'Instituição e regulador'],
        ['DEFI', 'Código, governança e autocustódia', 'Em geral, ninguém'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Sobre a ausência de intermediário em finanças descentralizadas, é correto afirmar que ela:',
      alternativas: [
        'Elimina os riscos da operação financeira',
        'Substitui o risco de contraparte por risco de código, de governança e de autocustódia',
        'Transfere a responsabilidade ao desenvolvedor do contrato inteligente',
        'Garante reversibilidade das operações por consenso da rede',
      ],
      correta: 1,
      explicacao:
        'Sem intermediário não é sem risco: o risco muda de lugar, e some a quem recorrer.',
    },
    mapaMental: {
      id: 'mm-defi',
      rotulo: 'DEFI',
      revisao: true,
      filhos: [
        {
          id: 'mm-defi-sc',
          rotulo: 'Contrato inteligente',
          detalhe: 'Executa o código · não interpreta',
          revisao: true,
        },
        { id: 'mm-defi-dex', rotulo: 'DEX', detalhe: 'Troca direta · autocustódia', revisao: true },
        { id: 'mm-defi-dao', rotulo: 'DAO', detalhe: 'Governança por token', revisao: true },
        {
          id: 'mm-defi-risco',
          rotulo: 'Riscos',
          detalhe: 'Código · governança · chave · sem recurso',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'São serviços financeiros que funcionam por programas, sem banco no meio. O programa faz exatamente o que está escrito nele.',
      exemplo:
        'Se você mandar dinheiro para o endereço errado numa operação DEFI, não existe atendimento nem estorno. Simplesmente não volta.',
      analogia:
        'É uma máquina de venda automática: cumpre a regra à risca, e não tem ninguém atrás dela para abrir uma exceção.',
      iniciante:
        'Dá para emprestar, trocar e investir sem banco, usando programas. Mas se algo der errado, não há a quem reclamar.',
    },
    niveis: {
      entenda:
        'DEFI oferece serviços financeiros por programas, sem intermediário. O código executa a regra — e se ele tiver falha, a falha também é executada.',
      aprofunde:
        'A promessa de DEFI é substituir confiança institucional por garantia matemática, e o ponto em que ela se rompe é sempre o mesmo: o código é escrito por pessoas, e vulnerabilidades em contratos inteligentes já produziram perdas de grande escala sem qualquer possibilidade de reversão. Isso deslocou a análise de risco de crédito para auditoria de código, uma disciplina que não tem o histórico estatístico nem os padrões que a análise financeira acumulou em décadas. A governança por DAO tem um problema análogo: votação proporcional à posse de token concentra poder em quem detém mais tokens, o que reproduz a concentração que o arranjo prometia dissolver — e a participação real em votações costuma ser baixa, o que amplia o efeito. Há ainda o desafio regulatório de fundo: praticamente todo o arcabouço de proteção ao investidor se apoia na existência de um intermediário identificável a quem impor deveres, e arranjos genuinamente sem intermediário não oferecem esse ponto de aplicação. A tendência regulatória observável tem sido, por isso, atuar nas PONTAS — nos prestadores de serviço de ativos virtuais, nas exchanges centralizadas e na conversão entre moeda fiduciária e ativo virtual — que é onde a identificação é possível.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },
]

export const CONCEITOS_4_7: Conceito[] = [
  {
    id: 'c-fintechs-pagamentos',
    microtemaId: 'm4.7',
    titulo: 'Fintechs e arranjos de pagamento',
    objetivo: 'Identificar os papéis em um arranjo de pagamento e distinguir instituição de pagamento de instituição financeira.',
    etiquetas: ['ESSENCIAL', 'DECORAR'],
    resumo30s:
      'Instituição de pagamento não faz intermediação financeira: ela movimenta recursos. Num pagamento com cartão participam emissor, credenciador, subcredenciador e bandeira — e cada um tem um papel distinto.',
    explicacao: {
      oQueE:
        'Fintechs são empresas que oferecem serviços financeiros apoiadas em tecnologia. No varejo de pagamentos, muitas operam como instituições de pagamento, categoria distinta da instituição financeira.',
      porQueImporta:
        'A confusão entre as duas categorias leva o cliente a supor proteções que não existem naquele arranjo — e leva o profissional a explicar errado o que acontece com o dinheiro dele.',
      paraQueServe:
        'Ampliar o acesso a serviços de pagamento e de crédito com estruturas mais leves que as da atividade bancária tradicional.',
      comoFunciona: [
        'INSTITUIÇÃO FINANCEIRA capta recursos do público e faz intermediação — recebe depósito e empresta. INSTITUIÇÃO DE PAGAMENTO não faz intermediação: ela gere conta de pagamento e movimenta recursos.',
        'Por isso o saldo em conta de pagamento é segregado do patrimônio da instituição, em vez de ser dívida dela com o cliente.',
        'Num arranjo de pagamento com cartão: EMISSOR é quem fornece o cartão ao portador; CREDENCIADOR é quem habilita o estabelecimento a aceitar e liquida com ele; BANDEIRA é quem define as regras do arranjo.',
        'SUBCREDENCIADOR atua sobre a estrutura do credenciador, agregando estabelecimentos menores — é a figura das maquininhas que atendem microempreendedores.',
        'SOCIEDADE DE CRÉDITO DIRETO (SCD) empresta com capital próprio; SOCIEDADE DE EMPRÉSTIMO ENTRE PESSOAS (SEP) apenas conecta credor e devedor, sem usar recursos próprios.',
      ],
      exemploSimples:
        'Numa compra no cartão, o portador tem relação com o emissor; o lojista tem relação com o credenciador; e as regras que fazem os dois lados funcionarem juntos vêm da bandeira.',
      exemploAplicado:
        'Um cliente mantém saldo relevante numa fintech e supõe cobertura idêntica à de um banco. Ele precisa saber qual é a natureza daquela instituição: se for instituição de pagamento, a proteção do saldo vem da segregação patrimonial exigida em norma, não do FGC. A conversa não é sobre a fintech ser boa ou ruim — é sobre qual mecanismo protege o dinheiro dele.',
      lembrarNaProva: [
        'Instituição de pagamento NÃO faz intermediação financeira.',
        'Emissor atende o portador; credenciador atende o estabelecimento.',
        'A bandeira define as regras do arranjo.',
        'SCD empresta com capital próprio; SEP apenas conecta as partes.',
      ],
      revisaoRapida: [
        'Instituição financeira intermedeia; de pagamento movimenta.',
        'Saldo em conta de pagamento é segregado, não é depósito.',
        'Emissor: portador. Credenciador: estabelecimento.',
        'Subcredenciador agrega estabelecimentos menores.',
        'SCD usa capital próprio; SEP conecta credor e devedor.',
      ],
    },
    exemplos: [
      {
        titulo: 'Os quatro papéis, em uma compra',
        corpo:
          'Cliente passa o cartão na loja. EMISSOR autoriza e cobra do portador. CREDENCIADOR liquida com o lojista. BANDEIRA define as regras que permitem que emissor e credenciador diferentes conversem. SUBCREDENCIADOR, quando existe, é quem coloca a maquininha na mão do lojista pequeno.',
      },
    ],
    conceitoChave:
      'Instituição de pagamento move dinheiro; instituição financeira o intermedeia. É essa fronteira que define as proteções aplicáveis.',
    pontosChave: [
      'Pagamento: sem intermediação',
      'Emissor × credenciador',
      'Bandeira define as regras',
      'Subcredenciador agrega os menores',
      'SCD: capital próprio; SEP: conecta',
    ],
    erroComum:
      'Supor que toda fintech é banco e que todo saldo tem a mesma proteção. A natureza da instituição define o mecanismo de proteção do saldo.',
    alertaProva:
      'A regulação de arranjos de pagamento e de fintechs de crédito é recente e vem sendo ajustada. Confira a norma vigente antes de afirmar exigência específica.',
    tabela: {
      titulo: 'Papéis no arranjo de pagamento',
      colunas: ['Papel', 'Relaciona-se com', 'Função'],
      linhas: [
        ['Emissor', 'Portador', 'Fornece o meio de pagamento'],
        ['Credenciador', 'Estabelecimento', 'Habilita a aceitação e liquida'],
        ['Subcredenciador', 'Estabelecimentos menores', 'Agrega sobre a estrutura do credenciador'],
        ['Bandeira', 'Todo o arranjo', 'Define as regras'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Em um arranjo de pagamento com cartão, o CREDENCIADOR relaciona-se diretamente com:',
      alternativas: [
        'O portador do cartão',
        'O estabelecimento comercial',
        'O órgão regulador',
        'A instituição emissora do cartão apenas',
      ],
      correta: 1,
      explicacao:
        'O credenciador habilita o estabelecimento a aceitar o meio de pagamento e liquida com ele. Quem atende o portador é o emissor.',
    },
    mapaMental: {
      id: 'mm-fin',
      rotulo: 'Fintechs e pagamentos',
      revisao: true,
      filhos: [
        {
          id: 'mm-fin-ip',
          rotulo: 'Instituição de pagamento',
          detalhe: 'Não intermedeia · saldo segregado',
          revisao: true,
        },
        {
          id: 'mm-fin-arranjo',
          rotulo: 'Arranjo de pagamento',
          revisao: true,
          filhos: [
            { id: 'mm-fin-emis', rotulo: 'Emissor', detalhe: 'Atende o portador', revisao: true },
            { id: 'mm-fin-cred', rotulo: 'Credenciador', detalhe: 'Atende o estabelecimento', revisao: true },
            { id: 'mm-fin-sub', rotulo: 'Subcredenciador', detalhe: 'Agrega os menores' },
            { id: 'mm-fin-band', rotulo: 'Bandeira', detalhe: 'Define as regras', revisao: true },
          ],
        },
        {
          id: 'mm-fin-credito',
          rotulo: 'Fintechs de crédito',
          detalhe: 'SCD: capital próprio · SEP: conecta',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Nem toda fintech é banco. Algumas só movimentam dinheiro, e nesse caso o saldo fica separado do patrimônio da empresa em vez de ser dívida dela com você.',
      exemplo:
        'Na compra com cartão: o emissor cuida de você, o credenciador cuida do lojista, e a bandeira define as regras que ligam os dois.',
      analogia:
        'É como um aeroporto: a companhia atende o passageiro, o operador atende as aeronaves e a autoridade define as regras que fazem tudo funcionar junto.',
      iniciante:
        'Empresas de tecnologia financeira fazem coisas diferentes. Algumas emprestam, outras só movimentam pagamentos — e as regras são diferentes.',
    },
    niveis: {
      entenda:
        'Instituição de pagamento movimenta recursos sem intermediar. No cartão, emissor atende o portador, credenciador atende o lojista e a bandeira define as regras.',
      aprofunde:
        'A criação da categoria de instituição de pagamento, separada da de instituição financeira, foi a decisão regulatória que viabilizou boa parte da concorrência recente no varejo bancário brasileiro. A lógica é proporcional ao risco: quem não capta depósito nem faz intermediação não gera o risco sistêmico que justifica a exigência prudencial pesada aplicada a bancos, e submetê-lo ao mesmo regime criaria barreira de entrada sem ganho de segurança. A contrapartida é a exigência de segregação integral dos recursos dos clientes, mantidos em conta específica no Banco Central ou em títulos públicos — proteção que funciona por isolamento patrimonial e não por fundo garantidor. O mesmo raciocínio de proporcionalidade explica a distinção entre SCD e SEP nas fintechs de crédito: a SCD assume risco com capital próprio e por isso tem exigência de capital; a SEP apenas conecta credor e devedor, não assume o risco e tem exigência mais leve — mas também não pode garantir a operação, o que precisa ficar claro para quem empresta por esse canal. Em todos os casos a lógica é a mesma: a exigência regulatória acompanha o risco que a atividade efetivamente cria.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },
]
