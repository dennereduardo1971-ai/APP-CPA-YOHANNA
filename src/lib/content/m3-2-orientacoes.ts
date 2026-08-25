import type { Conceito } from '../types'

/**
 * MICROTEMA 3.2 — Orientações financeiras para o cliente.
 *
 * Fecha o arco do macrotema 3: 3.1 mediu a situação, 3.3 classifica o
 * investidor, 3.4 traz as regras de conduta — e este microtema é o método que
 * liga tudo. Ele responde a uma pergunta operacional: qual é a sequência de
 * trabalho que transforma dados do cliente em recomendação defensável, e como
 * comunicar essa recomendação sem prometer o que não se pode entregar.
 */

export const CONCEITOS_3_2: Conceito[] = [
  {
    id: 'c-processo-consultivo',
    microtemaId: 'm3.2',
    titulo: 'O processo de orientação financeira',
    objetivo: 'Descrever as etapas do processo consultivo e o que cada uma precisa produzir.',
    etiquetas: ['ESSENCIAL', 'ENTENDER'],
    resumo30s:
      'Coletar, diagnosticar, recomendar, implementar e acompanhar. Pular a coleta produz recomendação sem base; pular o acompanhamento faz o plano envelhecer sem que ninguém perceba.',
    explicacao: {
      oQueE:
        'Processo de orientação financeira é a sequência estruturada de etapas que vai da coleta de informações do cliente até o acompanhamento periódico da recomendação.',
      porQueImporta:
        'É o que separa recomendação de venda. Uma recomendação sem coleta documentada não é defensável — nem tecnicamente diante do cliente, nem formalmente diante do regulador.',
      paraQueServe:
        'Produzir recomendações rastreáveis, fundamentadas nas informações do próprio cliente, e mantê-las atualizadas ao longo do tempo.',
      comoFunciona: [
        'COLETA: situação patrimonial e orçamentária, objetivos com prazo e valor, conhecimento e experiência, tolerância a oscilação. Sem registro, a etapa não existe.',
        'DIAGNÓSTICO: transformar os dados em leitura — há reserva? há dívida cara? os objetivos cabem na capacidade de poupança? é aqui que se descobre o que o cliente não perguntou.',
        'RECOMENDAÇÃO: propor alocação por OBJETIVO, com justificativa explícita de por que cada produto atende àquele prazo e àquela tolerância.',
        'IMPLEMENTAÇÃO: executar o combinado, registrando o que foi contratado e em que condições.',
        'ACOMPANHAMENTO: revisar periodicamente e sempre que houver evento relevante — casamento, filho, mudança de emprego, herança, doença. Plano não revisado envelhece sozinho.',
      ],
      exemploSimples:
        'Um cliente pede indicação de fundo. O processo exige antes saber para quê, para quando e com que dinheiro. Sem isso, qualquer fundo indicado é palpite com aparência técnica.',
      exemploAplicado:
        'Um cliente que já tinha perfil traçado há três anos aparece para aportar. Nesse intervalo ele trocou de emprego e teve um filho — dois eventos que alteram capacidade de poupança, horizonte e necessidade de proteção. Aportar sobre o perfil antigo é usar um diagnóstico vencido. A revisão não é formalidade; é a etapa que evita recomendar sobre uma realidade que não existe mais.',
      lembrarNaProva: [
        'A coleta antecede a recomendação, sempre.',
        'A recomendação se organiza por OBJETIVO, não por produto.',
        'O acompanhamento é etapa do processo, não cortesia.',
        'Evento de vida relevante dispara revisão fora do calendário.',
      ],
      revisaoRapida: [
        'Coletar, diagnosticar, recomendar, implementar e acompanhar.',
        'Sem registro, a coleta não existe para efeito de prova.',
        'O diagnóstico revela o que o cliente não perguntou.',
        'A recomendação se organiza por objetivo.',
        'Evento de vida dispara revisão fora do calendário.',
      ],
    },
    exemplos: [
      {
        titulo: 'O que o diagnóstico costuma revelar',
        corpo:
          'O cliente entra perguntando qual fundo render mais. O diagnóstico frequentemente mostra que ele não tem reserva, carrega saldo no rotativo ou não tem seguro compatível com a dependência financeira da família. A resposta certa raramente é a resposta à pergunta feita.',
      },
    ],
    conceitoChave:
      'A recomendação é consequência do diagnóstico — e o diagnóstico é consequência de uma coleta registrada.',
    pontosChave: [
      'Coleta antes de tudo',
      'Diagnóstico revela o não perguntado',
      'Recomendação por objetivo',
      'Implementação registrada',
      'Acompanhamento periódico e por evento',
    ],
    erroComum:
      'Começar pela recomendação porque o cliente já chegou pedindo um produto específico. Atender ao pedido sem diagnóstico é venda, não orientação.',
    alertaProva:
      'Em questões de processo, a resposta certa quase sempre é a que INSERE uma etapa anterior — coletar antes de recomendar, revisar antes de aportar.',
    tabela: {
      titulo: 'As cinco etapas',
      colunas: ['Etapa', 'O que precisa produzir'],
      linhas: [
        ['Coleta', 'Registro de patrimônio, objetivos, conhecimento e tolerância'],
        ['Diagnóstico', 'Leitura da situação e identificação de lacunas'],
        ['Recomendação', 'Alocação por objetivo, com justificativa'],
        ['Implementação', 'Execução documentada do que foi combinado'],
        ['Acompanhamento', 'Revisão periódica e por evento relevante'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Um cliente chega pedindo diretamente a indicação de um fundo. A conduta correta é:',
      alternativas: [
        'Indicar o fundo de melhor desempenho recente da prateleira',
        'Coletar objetivos, prazo e situação antes de qualquer indicação',
        'Indicar o fundo mais conservador disponível, por segurança',
        'Encaminhar o cliente para escolher sozinho pelo aplicativo',
      ],
      correta: 1,
      explicacao:
        'Atender ao pedido sem diagnóstico é venda, não orientação. A coleta antecede a recomendação sempre.',
    },
    mapaMental: {
      id: 'mm-proc',
      rotulo: 'Processo consultivo',
      revisao: true,
      filhos: [
        { id: 'mm-proc-col', rotulo: '1. Coleta', detalhe: 'Sem registro, não existe', revisao: true },
        { id: 'mm-proc-diag', rotulo: '2. Diagnóstico', detalhe: 'Revela o não perguntado', revisao: true },
        { id: 'mm-proc-rec', rotulo: '3. Recomendação', detalhe: 'Por objetivo, com justificativa', revisao: true },
        { id: 'mm-proc-impl', rotulo: '4. Implementação', detalhe: 'Execução documentada' },
        {
          id: 'mm-proc-acomp',
          rotulo: '5. Acompanhamento',
          detalhe: 'Periódico e por evento de vida',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Antes de indicar qualquer produto, é preciso saber para que serve o dinheiro, quando será usado e como está a vida financeira do cliente.',
      exemplo:
        'O cliente pede um fundo. Você descobre que ele não tem reserva e está no rotativo. A resposta certa não é o fundo.',
      analogia:
        'É como consulta médica: ninguém receita antes de examinar, e receita antiga não serve para queixa nova.',
      iniciante:
        'Orientar dinheiro tem uma ordem: primeiro entender a situação da pessoa, depois sugerir o que fazer.',
    },
    niveis: {
      entenda:
        'O processo tem cinco etapas: coletar, diagnosticar, recomendar, implementar e acompanhar. Pular a primeira transforma orientação em venda.',
      aprofunde:
        'O registro da coleta cumpre duas funções que costumam ser confundidas. A primeira é técnica: sem os dados, não há como justificar por que aquele produto atende àquele objetivo — a recomendação vira preferência pessoal do assessor. A segunda é probatória: em uma disputa posterior, a defesa de quem recomendou depende de demonstrar que a informação em que se baseou veio do próprio cliente e estava atualizada. É por isso que a atualização periódica do perfil não é burocracia: um diagnóstico antigo não protege ninguém, e um cliente cuja situação mudou tem argumento legítimo de que a recomendação não considerou sua realidade. O acompanhamento tem ainda uma função menos discutida, de gestão do comportamento: a maior parte da destruição de valor em carteiras de pessoa física não vem da escolha do produto, e sim de decisões tomadas em momentos de estresse — resgate na baixa, concentração após uma alta. O contato periódico é o que dá ao profissional a chance de intervir antes dessas decisões, e não depois.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 7,
  },

  {
    id: 'c-comunicacao-risco',
    microtemaId: 'm3.2',
    titulo: 'Comunicar risco e expectativa sem prometer',
    objetivo: 'Comunicar rentabilidade, risco e cenários de forma correta e verificável.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'Rentabilidade passada não é promessa nem indicativo de resultado futuro. Comunicar risco significa dizer o que pode dar errado, quanto pode cair e o que fazer se cair — antes da aplicação, não depois.',
    explicacao: {
      oQueE:
        'Comunicação de risco é a exposição, em linguagem acessível, do que o cliente pode perder, sob que circunstâncias e com que probabilidade aproximada.',
      porQueImporta:
        'A maior parte dos conflitos com cliente não nasce da perda em si: nasce da perda que ele não esperava. Expectativa mal calibrada transforma volatilidade normal em quebra de confiança.',
      paraQueServe:
        'Permitir uma decisão informada e reduzir a chance de resgate em pânico, que é o que converte oscilação em prejuízo permanente.',
      comoFunciona: [
        'RENTABILIDADE PASSADA não é garantia nem indicativo de rentabilidade futura. A frase é obrigatória em material, mas o dever é substantivo: não usar histórico como promessa na conversa.',
        'Nunca prometer resultado, nem por aproximação. "Costuma render em torno de" é promessa disfarçada quando dita sobre ativo de risco.',
        'Comunicar risco é dizer O QUE pode dar errado, QUANTO pode cair e por QUANTO TEMPO pode ficar negativo — as três coisas, não só a primeira.',
        'Usar linguagem que o cliente compreenda é obrigação, não gentileza. Termo técnico não compreendido não informa: apenas transfere responsabilidade.',
        'CONFIRMAR A COMPREENSÃO é parte do dever. Perguntar "ficou claro?" não confirma nada; pedir que o cliente descreva o que entendeu, sim.',
      ],
      exemploSimples:
        'Em vez de "esse fundo rende cerca de 12% ao ano", o correto é "esse fundo teve 12% no último ano; ele pode ter anos negativos, e nos piores períodos já caiu X% e levou Y meses para recuperar".',
      exemploAplicado:
        'Um cliente conservador aceita um multimercado depois de ouvir que "historicamente rende mais que o CDI". Três meses depois a cota cai e ele resgata no prejuízo, revoltado. O problema não foi o produto: foi a comunicação, que apresentou o retorno sem a contrapartida. Um cliente que soubesse de antemão que aquela queda era possível teria a chance de decidir se a tolerava.',
      lembrarNaProva: [
        'Rentabilidade passada NÃO é garantia de resultado futuro.',
        'Prometer retorno, mesmo aproximado, é vedado.',
        'Comunicar risco inclui magnitude e duração da queda possível.',
        'Confirmar compreensão é dever, não cortesia.',
      ],
      revisaoRapida: [
        'Rentabilidade passada não indica resultado futuro.',
        'Promessa aproximada continua sendo promessa.',
        'Dizer o que pode cair, quanto e por quanto tempo.',
        'Linguagem acessível é obrigação.',
        'Confirmar a compreensão faz parte do dever.',
      ],
    },
    exemplos: [
      {
        titulo: 'Duas frases sobre o mesmo produto',
        corpo:
          'ERRADA: "esse fundo rende uns 12% ao ano". CORRETA: "no último ano rendeu 12%; ele já teve períodos de queda de dois dígitos e levou mais de um ano para recuperar. Se o senhor precisar do dinheiro nesse intervalo, pode sair no prejuízo". A segunda leva vinte segundos a mais e evita o conflito inteiro.',
      },
    ],
    conceitoChave:
      'Comunicar risco não é avisar que existe risco: é dizer quanto pode cair e por quanto tempo.',
    pontosChave: [
      'Passado não indica futuro',
      'Promessa aproximada é promessa',
      'Magnitude e duração da queda',
      'Linguagem acessível é obrigação',
      'Confirmar compreensão',
    ],
    erroComum:
      'Reduzir a comunicação de risco à frase de rodapé. Dizer "todo investimento tem risco" sem quantificar a queda possível não informa o cliente e não protege ninguém.',
    alertaProva:
      'Alternativa que traga previsão de rentabilidade, ainda que em termos aproximados ou condicionais, está errada em qualquer contexto de recomendação.',
    tabela: {
      titulo: 'O que a comunicação de risco precisa cobrir',
      colunas: ['Pergunta', 'Exemplo de resposta adequada'],
      linhas: [
        ['O que pode dar errado?', 'O gestor pode errar a estratégia; o mercado pode cair'],
        ['Quanto pode cair?', 'Em períodos ruins, já houve quedas de dois dígitos'],
        ['Por quanto tempo?', 'A recuperação já levou mais de um ano em alguns períodos'],
        ['E se eu precisar antes?', 'Resgate na baixa realiza a perda; por isso o prazo importa'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Ao apresentar um fundo de investimento a um cliente, é correto afirmar que:',
      alternativas: [
        'O fundo tende a repetir a rentabilidade dos últimos doze meses',
        'A rentabilidade passada não constitui garantia nem indicativo de resultado futuro',
        'O histórico permite estimar com segurança o retorno do próximo ano',
        'Fundos com bom histórico não apresentam risco relevante de perda',
      ],
      correta: 1,
      explicacao:
        'Usar histórico como previsão é promessa disfarçada. O dever é substantivo, não apenas a inclusão da frase no material.',
    },
    mapaMental: {
      id: 'mm-com',
      rotulo: 'Comunicação de risco',
      revisao: true,
      filhos: [
        {
          id: 'mm-com-passado',
          rotulo: 'Passado ≠ futuro',
          detalhe: 'Nem como aproximação',
          revisao: true,
        },
        {
          id: 'mm-com-tres',
          rotulo: 'O que dizer',
          detalhe: 'O quê · quanto · por quanto tempo',
          revisao: true,
        },
        { id: 'mm-com-ling', rotulo: 'Linguagem acessível', detalhe: 'Obrigação, não gentileza', revisao: true },
        {
          id: 'mm-com-conf',
          rotulo: 'Confirmar compreensão',
          detalhe: 'Pedir que descreva, não perguntar "entendeu?"',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Nunca prometa quanto vai render. Explique o que pode dar errado, quanto pode cair e quanto tempo pode demorar para voltar.',
      exemplo:
        'Em vez de "rende uns 12%", diga: "rendeu 12% no último ano, já caiu dois dígitos em períodos ruins e levou mais de um ano para recuperar".',
      analogia:
        'É a bula do remédio: o efeito esperado vem junto com os efeitos possíveis, não depois deles.',
      iniciante:
        'O que rendeu no passado não vai necessariamente se repetir. Quem investe precisa saber que pode perder, e quanto.',
    },
    niveis: {
      entenda:
        'Não se promete rentabilidade. Comunicar risco é dizer o que pode dar errado, quanto pode cair e por quanto tempo pode ficar negativo.',
      aprofunde:
        'A comunicação de risco eficaz precisa vencer vieses cognitivos conhecidos, e é por isso que a frase genérica não funciona. O viés de otimismo faz o cliente processar o risco como algo que acontece com outras pessoas; a ancoragem faz o primeiro número mencionado — em geral o retorno recente — dominar a percepção; e a aversão à perda faz a mesma queda doer desproporcionalmente mais do que um ganho equivalente agrada. Dizer "existe risco" não neutraliza nenhum dos três. O que funciona é apresentar magnitude e duração em termos concretos, porque isso substitui o abstrato por uma cena que o cliente consegue imaginar acontecendo com ele. A confirmação de compreensão pela reformulação — pedir que o cliente descreva com as próprias palavras — é a técnica mais simples e mais negligenciada: ela expõe a lacuna antes da aplicação, quando ainda há tempo, em vez de depois da queda, quando o custo já foi realizado. Do ponto de vista de resultado, essa conversa faz mais pelo patrimônio do cliente do que a escolha entre dois produtos semelhantes, porque previne o resgate em pânico — que é onde a maior parte da destruição de valor efetivamente ocorre.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },
]
