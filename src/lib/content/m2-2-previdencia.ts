import type { Conceito } from '../types'

/**
 * MICROTEMA 2.2 — Previdência complementar (aprofundamento).
 *
 * `m2-produtos.ts` já resolve a escolha do produto (PGBL × VGBL pelo modelo de
 * declaração). Este lote cobre o que vem depois da escolha e é onde o cliente
 * de fato perde ou ganha dinheiro: o regime de tributação, os institutos de
 * saída (portabilidade, resgate, BPD, carência) e a forma de recebimento.
 *
 * Fontes primárias lidas no texto vigente, em 25/08/2026:
 *
 * | Fonte | O que sustenta |
 * |---|---|
 * | Lei 11.053/2004, art. 1º | A tabela regressiva de 35% a 10% e o prazo de acumulação |
 * | Lei 14.803/2024 | Move o momento da opção e permitiu uma volta ao progressivo |
 * | Lei 9.532/1997, art. 11 e §§ 5º e 6º | Limite de 12% e a condição de contribuir ao RGPS |
 * | LC 109/2001, arts. 14, 15 e 27 | BPD, portabilidade, resgate e a vedação de trânsito |
 * | Susep — Previdência Complementar Aberta | As sete modalidades de renda e a carência |
 *
 * O achado que reorganiza o microtema está em `c-prev-regimes`: desde a Lei
 * 14.803/2024 a opção pelo regime NÃO é mais feita na adesão. Praticamente
 * todo material de cursinho ainda ensina o contrário.
 */

export const CONCEITOS_2_2: Conceito[] = [
  {
    id: 'c-prev-regimes',
    microtemaId: 'm2.2',
    titulo: 'Regime progressivo e regressivo: qual e quando escolher',
    objetivo:
      'Comparar os dois regimes de tributação da previdência e situar corretamente o momento da opção.',
    etiquetas: ['ESSENCIAL', 'DECORAR', 'PEGADINHA'],
    resumo30s:
      'Regressivo: começa em 35% e cai 5 pontos a cada 2 anos até 10% acima de 10 anos, e é exclusivo na fonte. Progressivo: tabela do IR com 15% retido no resgate como antecipação, ajustada na declaração. Desde a Lei 14.803/2024, a opção pode ser feita até o benefício ou o primeiro resgate — não mais na adesão.',
    explicacao: {
      oQueE:
        'São os dois tratamentos possíveis de imposto de renda sobre o que sai de um plano de previdência complementar. O regime não muda o produto — PGBL e VGBL admitem os dois — e muda muito o resultado líquido.',
      porQueImporta:
        'A diferença entre 35% e 10% sobre a mesma reserva é grande o bastante para inverter a recomendação. E o momento da escolha, que a maioria do material ensina errado, é justamente o que dá ao cliente a chance de decidir com informação real em vez de palpite feito vinte anos antes.',
      paraQueServe:
        'Decidir, com base no horizonte e na renda tributável esperada no recebimento, qual regime deixa mais dinheiro no bolso do cliente.',
      comoFunciona: [
        'REGRESSIVO (Lei 11.053/2004): a alíquota depende do PRAZO DE ACUMULAÇÃO de cada aporte — 35% até 2 anos, 30% até 4, 25% até 6, 20% até 8, 15% até 10 e 10% acima de 10 anos. A tributação é EXCLUSIVA na fonte: não entra no ajuste anual.',
        'A contagem é por APORTE, não pela data de abertura do plano. Cada contribuição tem seu próprio relógio, e a saída costuma consumir primeiro os aportes mais antigos.',
        'PROGRESSIVO: no resgate retém-se 15% como ANTECIPAÇÃO; no benefício aplica-se a tabela mensal do IR. Em qualquer caso o valor entra na declaração de ajuste e pode gerar imposto a pagar ou restituição.',
        'MOMENTO DA OPÇÃO: a Lei 14.803/2024 deu nova redação ao § 6º do art. 1º da Lei 11.053/2004. A opção pelo regressivo pode ser exercida ATÉ o momento da obtenção do benefício ou da requisição do primeiro resgate — e só então é irretratável.',
        'Quem já havia optado pelo regressivo pôde voltar ao progressivo, uma vez, até o benefício ou o primeiro resgate posterior à lei (art. 2º). Depois que o pagamento começa, não se muda mais nada (art. 3º).',
      ],
      exemploSimples:
        'Uma reserva de R$ 100 mil formada há mais de dez anos paga R$ 10 mil de IR no regressivo. A mesma reserva sacada no segundo ano pagaria R$ 35 mil. O que mudou não foi o produto: foi o tempo.',
      exemploAplicado:
        'Uma cliente acumulou por dezoito anos e vai se aposentar recebendo cerca de R$ 3.500 por mês de benefício, sem outra renda tributável relevante. O reflexo de mercado é recomendar o regressivo, porque "10% é menos". Mas nesse patamar de renda a tabela progressiva pode resultar em alíquota efetiva menor que 10%, e ainda permite deduzir despesas médicas e dependentes no ajuste — o que o regime exclusivo na fonte não permite. É exatamente o tipo de conta que só se faz perto da aposentadoria, e é por isso que mover o momento da opção mudou a qualidade da decisão.',
      lembrarNaProva: [
        'Regressivo: 35% a 10%, cai 5 pontos a cada 2 anos, piso acima de 10 anos.',
        'Regressivo é EXCLUSIVO na fonte; progressivo entra no ajuste.',
        'No progressivo, o resgate retém 15% como antecipação.',
        'O prazo conta por APORTE, não pela abertura do plano.',
        'A opção pode ir até o benefício ou o primeiro resgate (Lei 14.803/2024).',
      ],
      revisaoRapida: [
        'Duas escalas: tabela do IR ou tabela do tempo.',
        'Regressivo premia prazo; progressivo premia renda baixa.',
        'Exclusivo na fonte não gera restituição.',
        'Cada aporte tem seu próprio relógio.',
        'A escolha ficou para o fim, não para a adesão.',
      ],
    },
    exemplos: [
      {
        titulo: 'A tabela do regressivo',
        corpo:
          'Até 2 anos: 35%. De 2 a 4: 30%. De 4 a 6: 25%. De 6 a 8: 20%. De 8 a 10: 15%. Acima de 10 anos: 10%. Repare que o degrau é de 5 pontos a cada 2 anos e que o piso, 10%, é o menor do sistema tributário brasileiro para renda financeira.',
      },
      {
        titulo: 'O que a portabilidade preserva',
        corpo:
          'Na portabilidade, o prazo de acumulação do plano de origem é computado no plano de destino (Lei 11.053/2004, art. 1º, § 4º). O relógio não zera — e é por isso que trocar de instituição não custa alíquota ao cliente que optou pelo regressivo.',
      },
    ],
    conceitoChave:
      'O regressivo aposta no tempo; o progressivo aposta na renda baixa no recebimento. E a decisão entre eles não precisa mais ser tomada às cegas na adesão.',
    pontosChave: [
      '35% a 10%, degrau de 5 pontos',
      'Exclusivo na fonte não vai ao ajuste',
      'Progressivo retém 15% no resgate',
      'Prazo conta por aporte',
      'Opção até o benefício ou 1º resgate',
    ],
    erroComum:
      'Recomendar o regressivo automaticamente para quem tem horizonte longo, sem olhar a renda tributável esperada no recebimento. Para benefício mensal modesto, a tabela progressiva pode cobrar menos que 10% e ainda admitir deduções.',
    alertaProva:
      'A afirmação "a opção pelo regime tributário é feita no momento da adesão e é irretratável" está DESATUALIZADA. A Lei 14.803/2024 alterou o § 6º do art. 1º da Lei 11.053/2004: a opção vai até a obtenção do benefício ou o primeiro resgate. Como material antigo ainda repete a regra velha, leia o enunciado com atenção — e note que a irretratabilidade continua existindo, só que a partir daquele momento.',
    tabela: {
      titulo: 'Progressivo × regressivo',
      colunas: ['Aspecto', 'Progressivo', 'Regressivo'],
      linhas: [
        ['Base da alíquota', 'Valor recebido no mês', 'Prazo de acumulação do aporte'],
        ['Faixa', '0% a 27,5%', '35% a 10%'],
        ['Natureza', 'Antecipação, ajusta na declaração', 'Exclusiva na fonte, definitiva'],
        ['Retenção no resgate', '15%', 'Alíquota da faixa de prazo'],
        ['Permite deduções no ajuste', 'Sim', 'Não'],
        ['Favorece', 'Renda baixa no recebimento', 'Horizonte longo'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Sobre o momento da opção pelo regime regressivo de tributação da previdência complementar, é correto afirmar que:',
      alternativas: [
        'Deve ser feita na adesão ao plano e é irretratável desde então',
        'Pode ser exercida até a obtenção do benefício ou a requisição do primeiro resgate',
        'Pode ser alterada livremente a qualquer tempo, inclusive após o início do benefício',
        'É automática para todo plano com prazo superior a dez anos',
      ],
      correta: 1,
      explicacao:
        'A Lei 14.803/2024 deu nova redação ao § 6º do art. 1º da Lei 11.053/2004. A opção vai até o benefício ou o primeiro resgate — e só aí se torna irretratável.',
    },
    mapaMental: {
      id: 'mm-ptrib',
      rotulo: 'Regimes de tributação',
      revisao: true,
      filhos: [
        {
          id: 'mm-ptrib-prog',
          rotulo: 'Progressivo',
          detalhe: 'Tabela do IR · vai ao ajuste',
          revisao: true,
          filhos: [
            { id: 'mm-ptrib-prog-ant', rotulo: '15% no resgate', detalhe: 'Antecipação', revisao: true },
            { id: 'mm-ptrib-prog-ded', rotulo: 'Admite deduções', detalhe: 'Médicas, dependentes' },
          ],
        },
        {
          id: 'mm-ptrib-reg',
          rotulo: 'Regressivo',
          detalhe: '35% → 10% · exclusivo na fonte',
          revisao: true,
          filhos: [
            { id: 'mm-ptrib-reg-deg', rotulo: 'Degrau de 5 pontos', detalhe: 'A cada 2 anos', revisao: true },
            { id: 'mm-ptrib-reg-piso', rotulo: 'Piso 10%', detalhe: 'Acima de 10 anos', revisao: true },
            { id: 'mm-ptrib-reg-ap', rotulo: 'Conta por aporte', detalhe: 'Não pela abertura' },
          ],
        },
        {
          id: 'mm-ptrib-mom',
          rotulo: 'Momento da opção',
          detalhe: 'Até benefício ou 1º resgate',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Há duas formas de pagar imposto na previdência: pela tabela normal do IR ou por uma tabela que cai conforme o dinheiro fica parado. A segunda começa em 35% e chega a 10% depois de dez anos.',
      exemplo:
        'R$ 100 mil guardados por mais de dez anos pagam R$ 10 mil no regressivo. Os mesmos R$ 100 mil sacados no segundo ano pagam R$ 35 mil.',
      analogia:
        'É como uma multa que diminui quanto mais tempo você espera para retirar. Só que, se sua renda for baixa na hora de receber, a tabela comum pode cobrar ainda menos.',
      iniciante:
        'Quanto mais tempo o dinheiro fica no plano, menos imposto ele paga — se você escolher a tabela que premia o tempo.',
    },
    niveis: {
      entenda:
        'Regressivo: quanto mais tempo, menos imposto, de 35% até 10%. Progressivo: tabela normal do IR, com acerto na declaração. A escolha vai até o momento de começar a receber.',
      aprofunde:
        'Três detalhes decidem casos reais. O primeiro é que o prazo de acumulação corre por aporte, e não pelo plano: um cliente com dezoito anos de plano que aportou pesado nos últimos dois carrega uma reserva com alíquotas mistas, e a ordem de consumo dos aportes na saída — normalmente do mais antigo para o mais novo, conforme o regulamento — determina o imposto efetivo de cada resgate. O segundo é que a portabilidade preserva o prazo (art. 1º, § 4º), o que torna a troca de instituição neutra do ponto de vista tributário e remove o argumento de retenção mais usado pelo distribuidor que não quer perder o cliente. O terceiro é o que a Lei 14.803/2024 realmente fez: ao mover a opção para o fim, ela transformou uma decisão sob incerteza quase total — feita aos trinta anos, sobre uma renda de aposentadoria desconhecida — em uma decisão sob informação. O efeito prático é que o regressivo deixou de ser aposta e passou a ser cálculo: no momento da opção o cliente já sabe o prazo de cada aporte, o valor da reserva e a renda tributável que terá. A lei ainda abriu, no art. 2º, uma janela de retorno ao progressivo para quem havia optado antes — e o art. 3º fecha tudo: valores já pagos a título de benefício ou resgate não admitem mudança de regime.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 10,
  },

  {
    id: 'c-prev-institutos',
    microtemaId: 'm2.2',
    titulo: 'Portabilidade, resgate, BPD e carência',
    objetivo:
      'Distinguir os institutos de saída de um plano de previdência e as consequências de cada um.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'Portabilidade NÃO é resgate: o dinheiro vai de plano a plano sem passar pelo participante e sem incidência de IR, e o prazo de acumulação é preservado. Resgate é saída para o bolso e tributa. BPD é direito de quem sai da empresa antes de poder se aposentar. Carência é o tempo mínimo entre movimentações.',
    explicacao: {
      oQueE:
        'Institutos são as saídas previstas em lei e em regulamento para o participante que não quer, ou não pode, continuar como estava. A LC 109/2001 os lista no art. 14: benefício proporcional diferido, portabilidade, resgate e autopatrocínio.',
      porQueImporta:
        'Porque a diferença entre portar e resgatar é de dezenas de milhares de reais em imposto, e porque a orientação errada é irreversível: quem resgata para "reaplicar em outro plano" já pagou o imposto e zerou o relógio do regressivo.',
      paraQueServe:
        'Orientar corretamente quem troca de emprego, quer mudar de instituição, precisa do dinheiro ou quer apenas parar de contribuir.',
      comoFunciona: [
        'PORTABILIDADE: transferência do direito acumulado para outro plano. Não caracteriza resgate (LC 109, arts. 15 e 27, § 1º), é VEDADO que os recursos transitem pelo participante, e não há incidência de IR. O prazo de acumulação do regressivo é preservado.',
        'RESGATE: saída de recursos para o participante. Há tributação conforme o regime escolhido, e o relógio recomeça se o valor for reaplicado.',
        'BPD (benefício proporcional diferido): direito de quem cessa o vínculo antes de cumprir os requisitos do benefício pleno — mantém o direito acumulado no plano e recebe quando ficar elegível.',
        'AUTOPATROCÍNIO: faculdade de manter as contribuições, inclusive a parcela que era do patrocinador, quando há perda parcial ou total da remuneração.',
        'CARÊNCIA: prazo mínimo entre movimentações, fixado no regulamento e limitado pela norma do supervisor. Na previdência aberta, a carência para cobertura de risco não passa de 24 meses, e morte ou invalidez ACIDENTAL não têm carência.',
      ],
      exemploSimples:
        'Um cliente insatisfeito com as taxas do plano pede para "sacar e aplicar em outro". A conduta correta é portar: mesma mudança, sem imposto e sem perder o tempo já acumulado.',
      exemploAplicado:
        'Um participante de plano fechado é demitido. Ele tem quatro caminhos e nenhum é neutro: resgatar (recebe agora, paga imposto e perde a parcela do patrocinador conforme o regulamento), portar (leva o direito acumulado, mas se for para entidade aberta a integralidade precisa virar renda vitalícia ou por prazo determinado de no mínimo quinze anos, art. 14, § 4º), ficar no BPD (preserva tudo e recebe quando ficar elegível) ou autopatrocinar-se (continua contribuindo, inclusive pela parte do patrocinador). A escolha depende de necessidade de caixa e de horizonte — e a única que costuma ser vendida por telefone é a pior delas.',
      lembrarNaProva: [
        'Portabilidade não é resgate e não tem IR.',
        'É vedado o dinheiro transitar pelo participante.',
        'A portabilidade preserva o prazo do regressivo.',
        'BPD é para quem sai antes de ficar elegível.',
        'Morte e invalidez acidental não têm carência.',
      ],
      revisaoRapida: [
        'Portar move; resgatar retira.',
        'Só o resgate tributa.',
        'O recurso vai direto de plano a plano.',
        'BPD guarda o direito para depois.',
        'Autopatrocínio mantém a contribuição inteira.',
      ],
    },
    exemplos: [
      {
        titulo: 'Por que o dinheiro não pode passar pelo participante',
        corpo:
          'Se os recursos transitassem pela conta do cliente, a operação seria economicamente um resgate seguido de nova aplicação — com imposto e relógio zerado. A vedação do art. 15, II, da LC 109 é justamente o que sustenta a neutralidade tributária da portabilidade.',
      },
      {
        titulo: 'A restrição da portabilidade em plano fechado',
        corpo:
          'Na entidade fechada, o art. 14, § 1º, não admite portabilidade sem cessação do vínculo empregatício com o patrocinador. Na entidade aberta a regra é outra: o art. 27 assegura a portabilidade ao participante, observadas as condições do órgão regulador.',
      },
    ],
    conceitoChave:
      'Sair de um plano tem quatro portas, e só uma delas cobra imposto. Confundir portabilidade com resgate é o erro mais caro do microtema.',
    pontosChave: [
      'Portabilidade não é resgate',
      'Sem trânsito pelo participante',
      'Prazo do regressivo preservado',
      'BPD preserva o direito acumulado',
      'Carência máxima de 24 meses no risco',
    ],
    erroComum:
      'Orientar o cliente a resgatar e reaplicar em outro plano quando o objetivo é apenas trocar de instituição. Isso tributa o que não precisava ser tributado e zera o prazo de acumulação já conquistado.',
    alertaProva:
      'A portabilidade em entidade FECHADA depende da cessação do vínculo empregatício (LC 109, art. 14, § 1º) — na ABERTA não há essa exigência. Enunciado que descreve um participante de fundo de pensão ainda empregado querendo portar está testando exatamente isso.',
    tabela: {
      titulo: 'As quatro portas de saída',
      colunas: ['Instituto', 'O que faz', 'Tributa?'],
      linhas: [
        ['Portabilidade', 'Move o direito acumulado para outro plano', 'Não'],
        ['Resgate', 'Retira recursos para o participante', 'Sim'],
        ['BPD', 'Congela o direito para receber quando elegível', 'Não no momento'],
        ['Autopatrocínio', 'Mantém as contribuições após perda de remuneração', 'Não'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Um cliente quer transferir seu PGBL para outra instituição por causa das taxas. A orientação correta é:',
      alternativas: [
        'Resgatar o saldo e aplicar o valor no novo plano',
        'Solicitar a portabilidade, que não caracteriza resgate nem gera incidência de IR',
        'Aguardar dez anos para resgatar com alíquota mínima e depois reaplicar',
        'Manter o plano, pois a troca de instituição não é permitida',
      ],
      correta: 1,
      explicacao:
        'A portabilidade transfere o direito acumulado sem que os recursos transitem pelo participante, sem IR e preservando o prazo de acumulação.',
    },
    mapaMental: {
      id: 'mm-pport',
      rotulo: 'Institutos do plano',
      revisao: true,
      filhos: [
        {
          id: 'mm-pport-port',
          rotulo: 'Portabilidade',
          detalhe: 'Sem IR · sem trânsito · preserva prazo',
          revisao: true,
          filhos: [
            {
              id: 'mm-pport-port-fech',
              rotulo: 'Fechada exige cessação de vínculo',
              detalhe: 'LC 109, art. 14, § 1º',
              revisao: true,
            },
          ],
        },
        { id: 'mm-pport-res', rotulo: 'Resgate', detalhe: 'Tributa e zera o relógio', revisao: true },
        { id: 'mm-pport-bpd', rotulo: 'BPD', detalhe: 'Guarda o direito para depois', revisao: true },
        { id: 'mm-pport-auto', rotulo: 'Autopatrocínio', detalhe: 'Mantém a contribuição inteira' },
        {
          id: 'mm-pport-car',
          rotulo: 'Carência',
          detalhe: 'Até 24 meses no risco; acidental não tem',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Mudar de plano não é sacar. Na portabilidade o dinheiro vai direto de uma instituição para a outra, sem passar por você e sem pagar imposto.',
      exemplo:
        'Quem saca R$ 200 mil para reaplicar paga imposto sobre os R$ 200 mil e recomeça a contagem do tempo. Quem porta não paga nada e mantém o tempo.',
      analogia:
        'É como transferir uma matrícula de escola: o histórico vai junto. Trancar e fazer nova matrícula seria começar do zero.',
      iniciante:
        'Existe um jeito de trocar de plano sem perder tempo nem pagar imposto. Ele se chama portabilidade — e é diferente de sacar.',
    },
    niveis: {
      entenda:
        'Quatro saídas: portar (move sem imposto), resgatar (retira e tributa), BPD (guarda para depois) e autopatrocínio (segue contribuindo).',
      aprofunde:
        'A neutralidade tributária da portabilidade depende de uma condição formal que costuma passar despercebida: os recursos não podem transitar pelo participante, sob nenhuma forma (LC 109, art. 15, II, e art. 27, § 2º). É por isso que a operação é feita diretamente entre as instituições, com prazo regulamentar próprio, e não pode ser "simulada" por um saque seguido de aporte — economicamente parecido, juridicamente outra coisa, e tributariamente muito pior. Há ainda uma assimetria relevante entre os dois regimes. Na entidade fechada, portar exige cessação do vínculo com o patrocinador, e a portabilidade para uma entidade aberta traz a trava do art. 14, § 4º: a integralidade precisa contratar renda vitalícia ou por prazo determinado de no mínimo quinze anos. Na entidade aberta, o art. 27 assegura portabilidade e resgate, total ou parcial, observadas as condições do regulador — e é justamente por essa liberdade que o produto aberto é vendido como flexível. A leitura correta é que a rigidez do regime fechado não é defeito: ela protege a natureza previdenciária da reserva, que no plano aberto fica a cargo da disciplina do próprio cliente.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 9,
  },

  {
    id: 'c-prev-rendas',
    microtemaId: 'm2.2',
    titulo: 'As modalidades de renda: como o dinheiro sai',
    objetivo:
      'Descrever as formas de recebimento do benefício e recomendar a adequada ao caso do cliente.',
    etiquetas: ['ESSENCIAL', 'ENTENDER'],
    resumo30s:
      'Chegada a hora de receber, o participante escolhe: pagamento único ou uma das rendas mensais — vitalícia, vitalícia com prazo mínimo garantido, vitalícia reversível ao beneficiário, vitalícia reversível ao cônjuge com continuidade aos menores, temporária ou por prazo certo. A vitalícia pura paga mais por mês e não deixa nada.',
    explicacao: {
      oQueE:
        'Modalidade de renda é a forma pela qual a reserva acumulada se converte em pagamento. A escolha é feita na concessão do benefício, com base nas condições do plano contratado.',
      porQueImporta:
        'Porque é uma decisão irreversível que troca dinheiro por proteção: quanto mais garantias a renda oferece aos herdeiros, menor o valor mensal. O cliente precisa entender que está comprando, não ganhando, cada garantia.',
      paraQueServe:
        'Transformar reserva em fluxo de renda com o desenho de proteção que a família do cliente efetivamente precisa.',
      comoFunciona: [
        'PAGAMENTO ÚNICO: recebe todo o saldo de uma vez. Simples, mas transfere ao cliente o risco de sobrevivência — o de o dinheiro acabar antes da vida.',
        'RENDA MENSAL VITALÍCIA: paga enquanto o participante viver, e cessa com a morte. É a de maior valor mensal, porque nada sobra.',
        'VITALÍCIA COM PRAZO MÍNIMO GARANTIDO: vitalícia, mas se o participante morre antes do prazo mínimo, os beneficiários recebem o restante daquele prazo.',
        'VITALÍCIA REVERSÍVEL AO BENEFICIÁRIO INDICADO: na morte do participante, um percentual da renda passa a ser pago vitaliciamente a quem ele indicou.',
        'VITALÍCIA REVERSÍVEL AO CÔNJUGE COM CONTINUIDADE AOS MENORES: reverte ao cônjuge e, na falta dele, continua temporariamente aos filhos menores até a idade prevista.',
        'TEMPORÁRIA: paga exclusivamente ao participante por prazo contratado; cessa na morte OU no fim do prazo, o que ocorrer primeiro — não deixa nada para herdeiros.',
        'POR PRAZO CERTO: paga pelo número de meses contratado, ao participante ou, se ele morrer, aos beneficiários até o fim do prazo.',
      ],
      exemploSimples:
        'Duas rendas sobre a mesma reserva: a vitalícia pura paga mais por mês; a reversível ao cônjuge paga menos, porque o dinheiro precisa durar duas vidas.',
      exemploAplicado:
        'Um cliente de 62 anos, casado, com cônjuge sem renda própria, escolhe a vitalícia pura porque é a que paga o maior valor mensal. É uma escolha coerente com o número e incoerente com a situação: no dia da sua morte, a renda simplesmente para, e a pessoa que depende dela fica sem nada. A alternativa correta não é necessariamente a reversível — pode ser vitalícia pura combinada com um seguro de vida, que às vezes protege a mesma pessoa por um custo menor. O ponto é que a comparação precisa ser feita, e a vitalícia pura só deve ser escolhida por quem entendeu o que ela não faz.',
      lembrarNaProva: [
        'Vitalícia pura paga mais e cessa com a morte.',
        'Temporária cessa na morte ou no fim do prazo, o que vier primeiro.',
        'Prazo certo continua aos beneficiários até o fim do prazo.',
        'Toda garantia adicional reduz o valor mensal.',
        'A escolha da modalidade é feita na concessão do benefício.',
      ],
      revisaoRapida: [
        'Sete formas: pagamento único e seis rendas mensais.',
        'Vitalícia pura: maior renda, nenhuma herança.',
        'Temporária morre com o titular; prazo certo não.',
        'Reversível divide a renda entre duas vidas.',
        'Proteção custa mensalidade.',
      ],
    },
    exemplos: [
      {
        titulo: 'Temporária × prazo certo — a confusão clássica',
        corpo:
          'Ambas têm prazo. A diferença está na morte: a TEMPORÁRIA cessa imediatamente, porque é exclusiva do participante; a de PRAZO CERTO continua sendo paga aos beneficiários até completar os meses contratados. Nomes parecidos, resultados opostos para a família.',
      },
    ],
    conceitoChave:
      'Toda garantia embutida na renda é paga com mensalidade menor. Não existe modalidade melhor — existe a compatível com quem depende daquele dinheiro.',
    pontosChave: [
      'Vitalícia pura paga mais',
      'Temporária cessa com a morte',
      'Prazo certo segue aos beneficiários',
      'Reversível divide entre duas vidas',
      'Escolha feita na concessão',
    ],
    erroComum:
      'Escolher a vitalícia pura só porque o valor mensal é o maior, sem verificar se alguém depende financeiramente do cliente. A renda que mais paga é também a que menos protege.',
    alertaProva:
      'Renda TEMPORÁRIA e renda por PRAZO CERTO são as figuras mais trocadas do microtema. A pergunta que separa: se o participante morre no meio do prazo, alguém continua recebendo? Na temporária, não. No prazo certo, sim.',
    tabela: {
      titulo: 'O que acontece na morte do participante',
      colunas: ['Modalidade', 'Na morte do participante'],
      linhas: [
        ['Vitalícia', 'Cessa'],
        ['Vitalícia com prazo mínimo garantido', 'Segue aos beneficiários até o fim do prazo mínimo'],
        ['Vitalícia reversível ao beneficiário', 'Percentual passa a ser pago vitaliciamente a ele'],
        ['Vitalícia reversível ao cônjuge com continuidade aos menores', 'Reverte ao cônjuge e depois, temporariamente, aos menores'],
        ['Temporária', 'Cessa'],
        ['Por prazo certo', 'Segue aos beneficiários até o fim do prazo'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Um participante contrata renda mensal temporária de 15 anos e falece no oitavo ano. Os beneficiários:',
      alternativas: [
        'Recebem os sete anos restantes, como em qualquer renda com prazo',
        'Não recebem nada, pois a renda temporária é exclusiva do participante e cessa com a morte',
        'Recebem o saldo da reserva em pagamento único',
        'Passam a receber renda vitalícia proporcional',
      ],
      correta: 1,
      explicacao:
        'A renda temporária cessa na morte ou no fim do prazo, o que ocorrer primeiro. Quem continua pagando aos beneficiários é a renda por prazo certo.',
    },
    mapaMental: {
      id: 'mm-prend',
      rotulo: 'Modalidades de renda',
      revisao: true,
      filhos: [
        { id: 'mm-prend-unico', rotulo: 'Pagamento único', detalhe: 'Risco de sobrevivência vai ao cliente' },
        {
          id: 'mm-prend-vit',
          rotulo: 'Vitalícias',
          detalhe: 'Duram a vida do participante',
          revisao: true,
          filhos: [
            { id: 'mm-prend-vit-pura', rotulo: 'Pura', detalhe: 'Maior renda · cessa na morte', revisao: true },
            { id: 'mm-prend-vit-min', rotulo: 'Prazo mínimo garantido', detalhe: 'Beneficiário completa o prazo' },
            { id: 'mm-prend-vit-rev', rotulo: 'Reversível ao beneficiário', detalhe: 'Percentual vitalício' },
            { id: 'mm-prend-vit-conj', rotulo: 'Reversível ao cônjuge', detalhe: 'Com continuidade aos menores' },
          ],
        },
        {
          id: 'mm-prend-prazo',
          rotulo: 'Com prazo',
          detalhe: 'Duram o contratado',
          revisao: true,
          filhos: [
            { id: 'mm-prend-prazo-temp', rotulo: 'Temporária', detalhe: 'Cessa na morte', revisao: true },
            { id: 'mm-prend-prazo-certo', rotulo: 'Prazo certo', detalhe: 'Segue aos beneficiários', revisao: true },
          ],
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Na hora de receber, o cliente escolhe como o dinheiro sai: tudo de uma vez, ou uma renda mensal que pode durar a vida toda, um prazo, ou passar para a família.',
      exemplo:
        'A renda vitalícia pura paga mais por mês, mas acaba no dia da morte. A reversível paga menos e continua para o cônjuge.',
      analogia:
        'É como escolher entre um carro sem seguro e outro com seguro completo pelo mesmo orçamento: o primeiro é mais potente, o segundo protege quem vai junto.',
      iniciante:
        'Quanto mais gente a renda precisa sustentar depois que você morrer, menor ela é enquanto você vive.',
    },
    niveis: {
      entenda:
        'São sete formas de receber: à vista ou seis rendas mensais. Quanto mais proteção a modalidade dá aos herdeiros, menor o valor mensal.',
      aprofunde:
        'A precificação de cada modalidade sai da tábua biométrica e da taxa de juros garantida no plano, ambas definidas na contratação, e é isso que explica por que a conversão em renda costuma decepcionar. Uma tábua atualizada com expectativa de vida maior distribui a mesma reserva por mais meses e reduz a renda mensal; uma taxa garantida fixada há vinte anos pode ter virado vantagem ou desvantagem grande conforme o juro corrente. Duas consequências práticas: primeiro, comparar o valor da renda de dois planos exige olhar tábua e taxa garantida, não só o saldo acumulado — e essa informação está no regulamento, não no extrato. Segundo, a decisão de converter em renda não é obrigatória: em plano aberto o participante pode manter a reserva e fazer resgates programados, assumindo pessoalmente o risco de sobrevivência em troca de manter o controle e a possibilidade de herança. Existe um argumento técnico real de cada lado, e a escolha honesta depende de saúde, de existência de dependentes e de outras fontes de renda vitalícia — a começar pelo próprio INSS, que já é uma renda vitalícia e às vezes torna desnecessário comprar outra.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 9,
  },
]
