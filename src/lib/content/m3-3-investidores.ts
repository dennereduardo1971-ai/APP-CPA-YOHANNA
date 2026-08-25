import type { Conceito } from '../types'

/**
 * MICROTEMA 3.3 — Classificação das pessoas investidoras (aprofundamento).
 *
 * `m3-relacionamento.ts` já traz o dever de suitability. Faltavam as duas
 * peças que o completam: as CATEGORIAS de investidor, que dizem a quem o
 * dever se aplica e a quem não, e a DIVERSIFICAÇÃO, que é o conteúdo técnico
 * da recomendação depois de o perfil estar traçado.
 *
 * Fonte primária lida no texto consolidado, em 25/08/2026:
 *
 * | Fonte | O que sustenta |
 * |---|---|
 * | Res. CVM 30/2021, art. 10 | As quatro hipóteses de dispensa — e as exceções |
 * | Res. CVM 30/2021, art. 11 | Os nove incisos do investidor profissional |
 * | Res. CVM 30/2021, art. 12 | Os quatro incisos do investidor qualificado |
 * | Res. CVM 30/2021, arts. 9º, 13 e 14 | Atualização, RPPS e guarda de documentos |
 * | Res. CVM 162/2022 e 179/2023 | Fundos patrimoniais; "assessor de investimento" |
 *
 * O achado do lote está em `c-investidor-categorias`: a dispensa de
 * suitability do art. 10, I, NÃO alcança a pessoa natural que virou
 * qualificada ou profissional por declaração de patrimônio ou por
 * certificação. É a exceção que quase todo material omite.
 */

export const CONCEITOS_3_3: Conceito[] = [
  {
    id: 'c-investidor-categorias',
    microtemaId: 'm3.3',
    titulo: 'Investidor profissional, qualificado e varejo',
    objetivo:
      'Classificar o investidor nas categorias da Res. CVM 30/2021 e aplicar corretamente a dispensa de suitability.',
    etiquetas: ['ESSENCIAL', 'DECORAR', 'PEGADINHA'],
    resumo30s:
      'Profissional: acima de R$ 10 milhões em investimentos financeiros, mais os institucionais. Qualificado: acima de R$ 1 milhão, mais quem tem certificação da CVM — e todo profissional é também qualificado. Mas a dispensa de suitability NÃO alcança a pessoa natural que entrou por declaração de patrimônio ou por certificação.',
    explicacao: {
      oQueE:
        'São as categorias que a Res. CVM 30/2021 usa para graduar a proteção regulatória. Quanto mais se presume que o investidor entende o risco, menos formalidade a norma exige de quem lhe oferece produto — e mais produtos ele pode acessar.',
      porQueImporta:
        'A categoria decide duas coisas concretas: a que produtos o cliente tem acesso (há fundos restritos a qualificados e a profissionais) e se o processo de adequação pode ser dispensado. Errar a categoria é ofertar o que não se podia ofertar.',
      paraQueServe:
        'Definir o perímetro de oferta de cada cliente e saber quando o dever de verificar adequação continua valendo apesar do enquadramento.',
      comoFunciona: [
        'INVESTIDOR PROFISSIONAL (art. 11): instituições financeiras e demais autorizadas pelo Bacen; seguradoras e sociedades de capitalização; entidades abertas e fechadas de previdência complementar; fundos de investimento; fundos patrimoniais; investidores não residentes; clubes com carteira gerida por administrador autorizado; assessores de investimento, administradores de carteira, analistas e consultores autorizados, quanto a recursos próprios; e pessoas naturais ou jurídicas com mais de R$ 10 milhões em investimentos financeiros que atestem essa condição por termo próprio.',
        'INVESTIDOR QUALIFICADO (art. 12): todo investidor profissional; pessoas naturais ou jurídicas com mais de R$ 1 milhão em investimentos financeiros que atestem a condição por termo; pessoas naturais aprovadas em exames de qualificação técnica ou com certificação aceita pela CVM para registro de assessor, administrador de carteira, analista ou consultor, quanto a recursos próprios; e clubes geridos por cotistas qualificados.',
        'O critério patrimonial é INVESTIMENTOS FINANCEIROS, não patrimônio total. Imóvel, empresa e carro não entram na conta.',
        'A condição depende de ATESTADO POR ESCRITO, em termo próprio — não basta a instituição verificar o saldo.',
        'INVESTIDOR DE VAREJO é a categoria residual: quem não é qualificado. Não é definido por artigo próprio; é o que sobra.',
        'DISPENSA DE SUITABILITY (art. 10): não se aplica o dever quando o cliente for qualificado, for pessoa jurídica de direito público, tiver carteira administrada de forma discricionária por administrador autorizado, ou já tiver perfil definido por consultor autorizado e esteja implementando a recomendação dele.',
      ],
      exemploSimples:
        'Um cliente com R$ 1,2 milhão em CDBs e fundos pode ser qualificado. O mesmo cliente com R$ 1,2 milhão sendo R$ 900 mil em um apartamento, não: imóvel não é investimento financeiro.',
      exemploAplicado:
        'Uma cliente com R$ 3 milhões aplicados assina o termo de investidora qualificada para acessar um fundo restrito. Meses depois reclama de perdas alegando que ninguém verificou seu perfil. A defesa intuitiva da instituição — "ela é qualificada, e qualificado é dispensado de suitability" — está errada: o art. 10, I, exclui expressamente da dispensa as pessoas naturais do art. 12, II. Quem entrou na categoria por declaração de patrimônio continua com direito ao processo de adequação. A dispensa foi pensada para o investidor institucional, não para a pessoa física rica.',
      lembrarNaProva: [
        'Profissional: acima de R$ 10 milhões. Qualificado: acima de R$ 1 milhão.',
        'Todo profissional é qualificado; nem todo qualificado é profissional.',
        'O critério é investimentos financeiros, não patrimônio total.',
        'A condição precisa ser atestada por escrito em termo próprio.',
        'A dispensa de suitability NÃO alcança a pessoa natural que se enquadrou por patrimônio declarado ou por certificação.',
      ],
      revisaoRapida: [
        'Três degraus: varejo, qualificado, profissional.',
        'R$ 1 milhão e R$ 10 milhões, em investimentos financeiros.',
        'Sempre com termo assinado.',
        'Certificação da CVM torna a pessoa natural qualificada.',
        'A dispensa tem exceção — e ela cai em prova.',
      ],
    },
    exemplos: [
      {
        titulo: 'A exceção que quase todo material omite',
        corpo:
          'O art. 10, I, dispensa a verificação de adequação para o investidor qualificado, "com exceção das pessoas naturais mencionadas no inciso IV do art. 11 e nos incisos II e III do art. 12". Ou seja: a pessoa física que virou profissional pelos R$ 10 milhões, a que virou qualificada pelo R$ 1 milhão e a que virou qualificada pela certificação continuam protegidas pelo dever de suitability.',
      },
      {
        titulo: 'O certificado como porta de entrada',
        corpo:
          'Quem é aprovado em exame de qualificação técnica aceito pela CVM para registro de assessor de investimento, administrador de carteira, analista ou consultor torna-se investidor qualificado quanto aos próprios recursos — mesmo sem patrimônio. É a única porta de entrada que não depende de dinheiro.',
      },
    ],
    conceitoChave:
      'A categoria mede presunção de conhecimento, não riqueza — e por isso a lei devolve a proteção justamente a quem entrou na categoria só por ter dinheiro.',
    pontosChave: [
      'Profissional acima de R$ 10 milhões',
      'Qualificado acima de R$ 1 milhão',
      'Investimentos financeiros, não patrimônio',
      'Termo próprio por escrito',
      'Dispensa de suitability tem exceção',
    ],
    erroComum:
      'Concluir que "investidor qualificado é dispensado de suitability" sem ler a exceção. Para a pessoa natural que se enquadrou por patrimônio declarado ou por certificação, o dever continua integralmente.',
    alertaProva:
      'Duas armadilhas de vocabulário. A primeira: a Res. CVM 179/2023 substituiu "agente autônomo de investimento" por "assessor de investimento" — enunciado com o nome antigo trata do mesmo profissional. A segunda: os fundos patrimoniais entraram na lista de profissionais pela Res. CVM 162/2022, e listas de memorização anteriores a essa data estão incompletas.',
    tabela: {
      titulo: 'As categorias em uma tela',
      colunas: ['Categoria', 'Critério patrimonial', 'Dispensa de suitability'],
      linhas: [
        ['Profissional institucional', 'Não se aplica', 'Sim'],
        ['Profissional pessoa natural', 'Acima de R$ 10 milhões + termo', 'Não — exceção do art. 10, I'],
        ['Qualificado pessoa natural por patrimônio', 'Acima de R$ 1 milhão + termo', 'Não — exceção do art. 10, I'],
        ['Qualificado por certificação', 'Não se aplica', 'Não — exceção do art. 10, I'],
        ['Varejo', 'Residual', 'Não'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Uma pessoa natural com R$ 2 milhões em aplicações financeiras assina o termo de investidor qualificado. Quanto ao dever de verificação de adequação:',
      alternativas: [
        'Fica integralmente dispensado, pois ela é investidora qualificada',
        'Permanece exigível, porque a dispensa do art. 10, I, exclui a pessoa natural do art. 12, II',
        'Fica dispensado apenas para produtos de renda fixa',
        'Depende de acordo escrito entre o cliente e a instituição',
      ],
      correta: 1,
      explicacao:
        'A dispensa foi pensada para o investidor institucional. A pessoa natural que se enquadra por declaração de patrimônio segue com direito ao processo de adequação.',
    },
    mapaMental: {
      id: 'mm-icat',
      rotulo: 'Categorias de investidor',
      revisao: true,
      filhos: [
        {
          id: 'mm-icat-prof',
          rotulo: 'Profissional',
          detalhe: 'Art. 11 · acima de R$ 10 milhões',
          revisao: true,
          filhos: [
            { id: 'mm-icat-prof-inst', rotulo: 'Institucionais', detalhe: 'IFs, seguradoras, fundos, EAPC e EFPC' },
            { id: 'mm-icat-prof-pn', rotulo: 'Pessoa natural', detalhe: 'R$ 10 mi + termo', revisao: true },
            { id: 'mm-icat-prof-pat', rotulo: 'Fundos patrimoniais', detalhe: 'Incluídos pela Res. 162/2022' },
          ],
        },
        {
          id: 'mm-icat-qual',
          rotulo: 'Qualificado',
          detalhe: 'Art. 12 · acima de R$ 1 milhão',
          revisao: true,
          filhos: [
            { id: 'mm-icat-qual-prof', rotulo: 'Todo profissional', detalhe: 'Inciso I', revisao: true },
            { id: 'mm-icat-qual-pn', rotulo: 'Pessoa natural', detalhe: 'R$ 1 mi + termo', revisao: true },
            { id: 'mm-icat-qual-cert', rotulo: 'Por certificação', detalhe: 'Quanto a recursos próprios', revisao: true },
          ],
        },
        { id: 'mm-icat-var', rotulo: 'Varejo', detalhe: 'Categoria residual' },
        {
          id: 'mm-icat-disp',
          rotulo: 'Dispensa de suitability',
          detalhe: 'Art. 10 — com exceções',
          revisao: true,
          filhos: [
            {
              id: 'mm-icat-disp-exc',
              rotulo: 'Não alcança pessoa natural',
              detalhe: 'Art. 11, IV e art. 12, II e III',
              revisao: true,
            },
          ],
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Investidores são divididos em três grupos conforme o quanto se presume que entendem de risco. Quanto mais alto o grupo, mais produtos ele pode comprar.',
      exemplo:
        'Acima de R$ 1 milhão aplicado e com termo assinado, o cliente é qualificado. Acima de R$ 10 milhões, é profissional. Só investimento financeiro conta — imóvel não.',
      analogia:
        'É como categoria de habilitação para pilotar: quanto mais avançada, mais aeronaves você pode levar. Mas ter dinheiro para comprar o avião não é o mesmo que saber pilotar — e a norma reconhece isso.',
      iniciante:
        'Alguns produtos só podem ser vendidos a quem tem muito dinheiro aplicado ou tem certificação, porque se presume que essa pessoa entende o risco.',
    },
    niveis: {
      entenda:
        'Profissional acima de R$ 10 milhões, qualificado acima de R$ 1 milhão, ambos com termo assinado. Varejo é o resto. A dispensa de suitability não vale para a pessoa física que entrou só pelo patrimônio.',
      aprofunde:
        'A arquitetura da Res. CVM 30/2021 revela uma escolha de política regulatória que vale entender. A norma poderia ter tratado patrimônio como prova de sofisticação — foi o que a regulação brasileira fez por muito tempo, e é o que o senso comum ainda supõe. Ela não faz isso. Ao excluir da dispensa do art. 10, I, exatamente as pessoas naturais dos incisos patrimoniais e do inciso de certificação, a CVM assume que dinheiro não é conhecimento e que uma prova técnica sobre distribuição não habilita ninguém a dispensar análise da própria carteira. A dispensa integral fica com quem tem estrutura profissional dedicada: instituição financeira, seguradora, fundo, entidade de previdência. Há ainda dois pontos operacionais que a norma amarra e que costumam ser esquecidos. O art. 9º exige atualizar o perfil observando os critérios da norma de PLD-FT, com intervalo máximo de cinco anos, e reclassificar as categorias de produto em no máximo vinte e quatro meses — perfil e prateleira envelhecem em ritmos diferentes. E o art. 14 manda guardar tudo por no mínimo cinco anos contados da última recomendação ou operação, o que na prática significa que o registro do processo é a única defesa disponível quando a reclamação chega anos depois.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 10,
  },

  {
    id: 'c-diversificacao',
    microtemaId: 'm3.3',
    titulo: 'Diversificação: o que ela reduz e o que não reduz',
    objetivo:
      'Explicar por que a diversificação reduz apenas parte do risco e como isso orienta a alocação.',
    etiquetas: ['ESSENCIAL', 'ENTENDER', 'PEGADINHA'],
    resumo30s:
      'Risco não sistemático é o da empresa, do setor, do emissor — some com diversificação. Risco sistemático é o do mercado inteiro: juros, recessão, crise — não some por mais ativos que se compre. Diversificar é reduzir correlação, não aumentar quantidade.',
    explicacao: {
      oQueE:
        'Diversificação é a distribuição dos recursos entre ativos cujos resultados não andam juntos, de modo que o mau desempenho de um seja compensado pelo comportamento diferente dos outros.',
      porQueImporta:
        'É o único ganho gratuito disponível ao investidor: reduzir risco sem abrir mão de retorno esperado. E é também a recomendação mais mal executada do balcão — carteiras "diversificadas" com dez produtos do mesmo emissor e do mesmo indexador são a regra, não a exceção.',
      paraQueServe:
        'Construir uma carteira cuja oscilação seja menor que a soma das oscilações individuais, sem exigir do cliente que acerte qual ativo vai bem.',
      comoFunciona: [
        'RISCO NÃO SISTEMÁTICO (diversificável, específico): decorre do emissor ou do setor — fraude contábil, perda de contrato, quebra de um banco. Diluir entre emissores e setores reduz esse risco de forma acentuada.',
        'RISCO SISTEMÁTICO (não diversificável, de mercado): decorre de fatores que atingem todos os ativos — alta de juros, recessão, choque cambial. Comprar mais ativos da mesma classe não o elimina.',
        'O que faz a diversificação funcionar é a CORRELAÇÃO baixa entre os ativos, não a quantidade deles. Vinte ações do mesmo setor têm correlação alta e diversificam pouco.',
        'A partir de certo número de ativos, o ganho adicional de diversificação é marginal — mas o custo e a dificuldade de acompanhar continuam crescendo.',
        'Diversificar entre CLASSES (renda fixa, renda variável, câmbio, imobiliário) costuma reduzir mais risco que diversificar dentro de uma classe só.',
      ],
      exemploSimples:
        'Uma carteira com CDB de cinco bancos diferentes diversifica risco de crédito. A mesma carteira toda em CDB pós-fixado não diversifica risco de juros: uma queda da Selic atinge todos ao mesmo tempo.',
      exemploAplicado:
        'Um cliente conservador tem 100% da carteira em quatro produtos: CDB, LCI, LCA e poupança, todos do mesmo banco. Ele acredita estar diversificado porque tem quatro produtos. Na verdade acumulou concentração dupla — um único emissor, de modo que o limite do FGC se aplica ao conjunto pelo mesmo conglomerado, e um único fator de risco, já que todos seguem juros de curto prazo. A correção não é comprar um quinto produto do mesmo banco: é trocar emissor e trocar fator de risco.',
      lembrarNaProva: [
        'Diversificação elimina risco NÃO sistemático.',
        'Risco sistemático não se elimina diversificando.',
        'O que importa é correlação baixa, não quantidade.',
        'Vários produtos do mesmo emissor não diversificam crédito.',
        'Diversificar entre classes reduz mais que dentro de uma classe.',
      ],
      revisaoRapida: [
        'Dois riscos: o do ativo e o do mercado.',
        'Só o primeiro some com diversificação.',
        'Correlação é o mecanismo.',
        'Mesmo emissor não é diversificação.',
        'Classe diferente vale mais que produto diferente.',
      ],
    },
    exemplos: [
      {
        titulo: 'O teste da carteira "diversificada"',
        corpo:
          'Pergunte de cada carteira duas coisas: quantos EMISSORES diferentes ela tem, e quantos FATORES DE RISCO diferentes. Uma carteira com dez produtos, um emissor e um indexador responde "um" às duas perguntas — e não está diversificada em nenhuma das duas dimensões.',
      },
    ],
    conceitoChave:
      'Diversificação é reduzir correlação. Quantidade de produtos não é medida de diversificação, e um mesmo emissor repetido não diversifica nada.',
    pontosChave: [
      'Não sistemático some; sistemático não',
      'Correlação é o mecanismo',
      'Mesmo emissor não diversifica',
      'Classes diferentes reduzem mais',
      'Ganho marginal decrescente',
    ],
    erroComum:
      'Tratar número de produtos como medida de diversificação. Quatro produtos do mesmo banco, todos atrelados ao CDI, formam uma carteira concentrada com aparência de diversificada.',
    alertaProva:
      'Alternativa que diga "a diversificação elimina o risco da carteira" ou "reduz todos os riscos" está errada — sempre falta o adjetivo. O que ela reduz é o risco não sistemático, e enunciados costumam trocar os dois nomes de propósito.',
    tabela: {
      titulo: 'Os dois riscos',
      colunas: ['Risco', 'Origem', 'Diversificação resolve?'],
      linhas: [
        ['Não sistemático', 'Emissor, empresa, setor', 'Sim, de forma acentuada'],
        ['Sistemático', 'Juros, recessão, câmbio, crise', 'Não'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Um cliente afirma que sua carteira está diversificada porque possui CDB, LCI, LCA e poupança do mesmo banco. A avaliação correta é:',
      alternativas: [
        'Está diversificada, pois são quatro produtos distintos',
        'Está concentrada em emissor e em fator de risco, apesar da variedade de produtos',
        'Está diversificada quanto ao crédito, mas não quanto à liquidez',
        'Está adequada, desde que respeitado o limite do FGC por produto',
      ],
      correta: 1,
      explicacao:
        'Um único emissor e um único fator de risco. Além disso o limite do FGC se aplica ao conjunto pelo mesmo conglomerado, não por produto.',
    },
    mapaMental: {
      id: 'mm-dvsf',
      rotulo: 'Diversificação',
      revisao: true,
      filhos: [
        {
          id: 'mm-dvsf-ns',
          rotulo: 'Risco não sistemático',
          detalhe: 'Emissor e setor · diversificável',
          revisao: true,
        },
        {
          id: 'mm-dvsf-sis',
          rotulo: 'Risco sistemático',
          detalhe: 'Mercado inteiro · não diversificável',
          revisao: true,
        },
        {
          id: 'mm-dvsf-corr',
          rotulo: 'Correlação',
          detalhe: 'O mecanismo real, não a quantidade',
          revisao: true,
        },
        {
          id: 'mm-dvsf-err',
          rotulo: 'Falsa diversificação',
          detalhe: 'Muitos produtos, um emissor',
          revisao: true,
        },
        { id: 'mm-dvsf-cls', rotulo: 'Entre classes', detalhe: 'Reduz mais que dentro da classe' },
      ],
    },
    reexplicacoes: {
      simples:
        'Espalhar o dinheiro entre coisas diferentes reduz o risco de uma delas dar errado. Mas não protege de uma crise que atinge tudo ao mesmo tempo.',
      exemplo:
        'CDB de cinco bancos protege da quebra de um banco. Cinco CDBs do mesmo banco não protegem de nada.',
      analogia:
        'É como não colocar todos os ovos na mesma cesta. Só que trocar de cesta não adianta se todas estiverem no mesmo caminhão.',
      iniciante:
        'Dividir o dinheiro entre investimentos diferentes diminui o risco — desde que sejam de verdade diferentes.',
    },
    niveis: {
      entenda:
        'Diversificar reduz o risco que vem do emissor ou do setor. Não reduz o risco que vem do mercado inteiro. E o que faz funcionar é a diferença entre os ativos, não a quantidade.',
      aprofunde:
        'O ponto que separa diversificação de acumulação é a correlação, e ela não é estável. Ativos que historicamente andam em direções opostas tendem a convergir justamente nos momentos de estresse, quando a liquidez seca e todo mundo vende o que dá para vender — é o fenômeno conhecido como quebra da correlação, e ele significa que a proteção diminui exatamente quando é mais necessária. Duas consequências práticas para o balcão. A primeira é que a diversificação não substitui a reserva de emergência: a reserva resolve o problema de precisar de dinheiro no pior momento, e diversificação nenhuma resolve isso. A segunda é que existe um limite útil: os estudos clássicos mostram que o grosso da redução do risco específico se obtém com um número relativamente pequeno de ativos bem escolhidos, e que ir muito além disso acrescenta custo, complexidade e a ilusão de sofisticação sem redução relevante de risco. Uma carteira com quarenta fundos não é mais diversificada que uma com oito bem distribuídos — é apenas mais difícil de acompanhar, e a dificuldade de acompanhar é, ela própria, um risco.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },
]
