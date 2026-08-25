import type { Conceito } from '../types'

/**
 * MICROTEMA 2.1 — renda variável e fundos.
 *
 * Segundo lote do microtema. Complementa `c-acoes` e `c-fundos`, que já
 * tratavam do básico, com o que a prova cobra e o app não tinha: eventos
 * corporativos, segmentos de listagem, FIIs, ETFs e BDRs, a classificação
 * dos fundos e a estrutura da Resolução CVM 175.
 *
 * NOTA EDITORIAL: percentuais de free float, composição de conselho nos
 * segmentos da B3 e os limiares numéricos da isenção de FII são fixados em
 * regulamento e foram alterados recentemente. As aulas trazem a ESTRUTURA da
 * regra — quais condições existem e por que — e marcam os números como
 * sujeitos a conferência (regra 4 do CLAUDE.md).
 */

export const CONCEITOS_2_1_RV: Conceito[] = [
  {
    id: 'c-eventos-corporativos',
    microtemaId: 'm2.1',
    titulo: 'Eventos corporativos: o que muda o seu patrimônio e o que não muda',
    objetivo: 'Distinguir eventos que alteram o patrimônio do acionista dos que apenas mudam a forma da posição.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'Dividendo e JCP entregam dinheiro. Bonificação, desdobramento e grupamento apenas rearranjam a posição — mais ações valendo menos cada, ou menos ações valendo mais. Subscrição é direito de comprar, e ele tem valor negociável.',
    explicacao: {
      oQueE:
        'Eventos corporativos são deliberações da companhia que afetam as ações em circulação — distribuindo resultado, alterando a quantidade de papéis ou oferecendo novos.',
      porQueImporta:
        'Metade deles não muda o patrimônio do acionista, e é justamente essa metade que gera pânico no home broker: o cliente vê o preço da ação cair pela metade e acha que perdeu dinheiro.',
      paraQueServe:
        'Remunerar o acionista, ajustar a liquidez do papel ou captar recursos junto aos sócios atuais.',
      comoFunciona: [
        'DIVIDENDO: parcela do lucro distribuída em dinheiro. A lei prevê distribuição mínima obrigatória quando o estatuto é omisso.',
        'JCP — juros sobre capital próprio: também entrega dinheiro, mas é DEDUTÍVEL como despesa para a companhia e tributado na fonte para o investidor. Por isso a empresa prefere JCP e o acionista prefere dividendo.',
        'BONIFICAÇÃO: novas ações distribuídas gratuitamente por incorporação de reservas ao capital. O acionista fica com mais ações — cada uma valendo proporcionalmente menos. Patrimônio inalterado.',
        'DESDOBRAMENTO (split) e GRUPAMENTO (inplit): dividem ou juntam ações, ajustando o preço na proporção inversa. Servem à liquidez e à faixa de preço, não ao bolso.',
        'SUBSCRIÇÃO: direito de preferência para comprar novas ações emitidas. O direito em si tem valor e pode ser negociado por quem não quiser exercê-lo.',
      ],
      exemploSimples:
        'Um desdobramento na proporção de um para dois: quem tinha 100 ações a R$ 40 passa a ter 200 a R$ 20. A posição continua valendo R$ 4.000 — mudou a embalagem, não o conteúdo.',
      exemploAplicado:
        'Um cliente liga assustado porque a ação "caiu 50% da noite para o dia". Antes de falar de mercado, é preciso checar o calendário de eventos: se houve desdobramento, a quantidade de ações dobrou e não houve perda alguma. Confundir ajuste de evento com queda de preço é a origem mais comum de pânico injustificado.',
      lembrarNaProva: [
        'Bonificação, desdobramento e grupamento NÃO alteram o patrimônio.',
        'Dividendo e JCP entregam dinheiro; o JCP é dedutível para a empresa.',
        'O direito de subscrição pode ser vendido por quem não exerce.',
        'Grupamento reduz a quantidade e eleva o preço na mesma proporção.',
      ],
      revisaoRapida: [
        'Dividendo: dinheiro, parcela do lucro.',
        'JCP: dinheiro, dedutível para a empresa, tributado na fonte.',
        'Bonificação: mais ações, mesmo patrimônio.',
        'Split e inplit: só mudam quantidade e preço, na proporção inversa.',
        'Subscrição: direito de comprar, negociável.',
      ],
    },
    exemplos: [
      {
        titulo: 'Por que a empresa prefere JCP',
        corpo:
          'O JCP é contabilizado como despesa financeira e reduz o lucro tributável da companhia. O dividendo sai do lucro já tributado. Para a empresa, distribuir via JCP é mais barato — e é por isso que muitas alternam entre os dois formatos ao longo do ano.',
      },
    ],
    conceitoChave:
      'Só dividendo, JCP e subscrição mexem em dinheiro. O resto rearranja a posição sem alterar o valor dela.',
    pontosChave: [
      'Dividendo e JCP: entram recursos',
      'Bonificação: mais ações, mesmo valor',
      'Split e inplit: proporção inversa',
      'Subscrição: direito negociável',
      'JCP é dedutível para a empresa',
    ],
    erroComum:
      'Interpretar a queda de preço após um desdobramento como perda. O preço cai porque a quantidade subiu na mesma proporção — o valor da posição não mudou.',
    alertaProva:
      'A alíquota de retenção sobre o JCP e o tratamento tributário dos dividendos são matéria de legislação fiscal e podem mudar. Confira a regra vigente antes de afirmar percentual.',
    tabela: {
      titulo: 'O que cada evento faz',
      colunas: ['Evento', 'Entra dinheiro?', 'Muda o patrimônio?'],
      linhas: [
        ['Dividendo', 'Sim', 'Sim, distribui resultado'],
        ['JCP', 'Sim', 'Sim, distribui resultado'],
        ['Bonificação', 'Não', 'Não'],
        ['Desdobramento / grupamento', 'Não', 'Não'],
        ['Subscrição', 'Sai, se exercer', 'Depende do preço de emissão'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Após um desdobramento na proporção de 1 para 2, o acionista que possuía 100 ações a R$ 40 passa a ter:',
      alternativas: [
        '200 ações a R$ 40, dobrando o patrimônio',
        '200 ações a R$ 20, com o mesmo patrimônio',
        '50 ações a R$ 80, com o mesmo patrimônio',
        '100 ações a R$ 20, com metade do patrimônio',
      ],
      correta: 1,
      explicacao:
        'O desdobramento multiplica a quantidade e divide o preço na mesma proporção. A posição continua valendo R$ 4.000.',
    },
    mapaMental: {
      id: 'mm-ev',
      rotulo: 'Eventos corporativos',
      revisao: true,
      filhos: [
        {
          id: 'mm-ev-dinheiro',
          rotulo: 'Entram recursos',
          revisao: true,
          filhos: [
            { id: 'mm-ev-div', rotulo: 'Dividendo', detalhe: 'Parcela do lucro', revisao: true },
            { id: 'mm-ev-jcp', rotulo: 'JCP', detalhe: 'Dedutível para a empresa', revisao: true },
          ],
        },
        {
          id: 'mm-ev-forma',
          rotulo: 'Só mudam a forma',
          revisao: true,
          filhos: [
            { id: 'mm-ev-bon', rotulo: 'Bonificação', detalhe: 'Mais ações, mesmo valor', revisao: true },
            { id: 'mm-ev-split', rotulo: 'Split / inplit', detalhe: 'Proporção inversa', revisao: true },
          ],
        },
        { id: 'mm-ev-sub', rotulo: 'Subscrição', detalhe: 'Direito de comprar · negociável', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'Alguns eventos colocam dinheiro na sua conta. Outros só trocam suas ações por um número diferente de ações que valem o mesmo total.',
      exemplo:
        'Tinha 100 ações a R$ 40 e agora tem 200 a R$ 20. Continua com R$ 4.000 — o desdobramento não tirou nem colocou nada.',
      analogia:
        'É trocar uma nota de cem por duas de cinquenta. Você tem mais papéis e o mesmo dinheiro.',
      iniciante:
        'De vez em quando a empresa distribui lucro ou muda a quantidade de ações. Nem toda mudança significa ganho ou perda.',
    },
    niveis: {
      entenda:
        'Dividendo e JCP colocam dinheiro na conta. Bonificação, desdobramento e grupamento só mudam a quantidade de ações — o valor total continua o mesmo.',
      aprofunde:
        'A preferência das companhias pelo JCP nasce de uma assimetria tributária deliberada: ao permitir a dedução do JCP como despesa, o legislador reduziu o viés que o sistema tributário criava a favor do endividamento sobre o capital próprio — juros de dívida sempre foram dedutíveis, e sem o JCP a empresa era fiscalmente estimulada a se financiar com dívida. Do ponto de vista do acionista, o JCP chega líquido de retenção na fonte enquanto o dividendo tem tratamento próprio, e a comparação entre os dois precisa ser feita em termos líquidos como qualquer outra. Sobre os eventos que não movem patrimônio, vale notar que o desdobramento tem efeito documentado sobre a liquidez: reduzir o preço unitário amplia a base de investidores capazes de comprar lotes, e é por isso que companhias com ação muito valorizada recorrem a ele periodicamente. O grupamento costuma ter motivação oposta e menos confortável — tirar o papel de faixas de preço muito baixas, onde a variação de um centavo representa percentual grande e atrai negociação especulativa.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-governanca-listagem',
    microtemaId: 'm2.1',
    titulo: 'Governança e segmentos de listagem',
    objetivo: 'Relacionar segmento de listagem, tipo de ação e direito de tag along.',
    etiquetas: ['ESSENCIAL', 'DECORAR'],
    resumo30s:
      'Os segmentos da B3 são adesão voluntária a regras mais duras que a lei. O Novo Mercado admite apenas ações ON e garante tag along de 100%. Quanto maior a exigência, menor o risco de governança — e menor o desconto que o mercado aplica.',
    explicacao: {
      oQueE:
        'Segmentos de listagem são níveis diferenciados de governança corporativa a que uma companhia adere voluntariamente ao listar suas ações, assumindo obrigações superiores às da lei.',
      porQueImporta:
        'Governança é risco. O minoritário de uma companhia sem tag along pode ficar de fora quando o controle é vendido — e isso se reflete no preço que o mercado paga pela ação.',
      paraQueServe:
        'Sinalizar compromisso com o acionista minoritário e reduzir o custo de capital da companhia.',
      comoFunciona: [
        'A adesão é VOLUNTÁRIA e contratual com a bolsa. A companhia se obriga a mais do que a lei exige.',
        'NOVO MERCADO é o segmento mais exigente: admite APENAS ações ordinárias (ON) e garante TAG ALONG de 100% a todos os acionistas.',
        'NÍVEL 2 admite ON e PN, mas estende o tag along de 100% também às preferenciais.',
        'NÍVEL 1 concentra exigências de transparência e de percentual mínimo em circulação, mantendo o tag along da lei.',
        'TAG ALONG é o direito de vender junto quando o controle é alienado. A lei assegura um percentual mínimo do valor pago ao controlador às ações ordinárias; os segmentos elevam esse patamar.',
      ],
      exemploSimples:
        'O controlador vende o controle por R$ 100 por ação. No Novo Mercado, o minoritário tem direito de vender pelos mesmos R$ 100. Em uma companhia do segmento tradicional, o preço assegurado ao minoritário é menor.',
      exemploAplicado:
        'Dois papéis do mesmo setor negociam com múltiplos diferentes, e o cliente pergunta por que o mais barato não é a melhor compra. Parte da resposta costuma estar na governança: companhia sem tag along pleno e com estrutura de capital que concentra poder embute risco que o desconto está precificando — e que pode se materializar exatamente na hora da venda de controle.',
      lembrarNaProva: [
        'Novo Mercado: só ações ON e tag along de 100%.',
        'Nível 2: ON e PN, com tag along de 100% para todas.',
        'A adesão aos segmentos é VOLUNTÁRIA.',
        'Tag along é o direito de vender junto na alienação de controle.',
      ],
      revisaoRapida: [
        'Segmentos são adesão voluntária a regras acima da lei.',
        'Novo Mercado: apenas ON, tag along de 100%.',
        'Nível 2: ON e PN, tag along de 100%.',
        'Nível 1: mais transparência, tag along legal.',
        'Governança melhor reduz o custo de capital da companhia.',
      ],
    },
    exemplos: [
      {
        titulo: 'Por que governança vira preço',
        corpo:
          'Se o minoritário sabe que pode ficar de fora do prêmio de controle, ele exige desconto para comprar. Esse desconto é o custo de capital da companhia. Aderir a um segmento mais exigente é, na prática, uma decisão de financiamento: abre-se mão de flexibilidade para captar mais barato.',
      },
    ],
    conceitoChave:
      'Governança não é discurso: é o direito que o minoritário tem quando o controle muda de mãos.',
    pontosChave: [
      'Adesão voluntária',
      'Novo Mercado: só ON, tag along 100%',
      'Nível 2: ON e PN, tag along 100%',
      'Nível 1: transparência e free float',
      'Governança melhor, custo de capital menor',
    ],
    erroComum:
      'Achar que os segmentos são classificação da CVM. Eles são compromisso contratual com a bolsa, de adesão voluntária, e vão além do que a lei exige.',
    alertaProva:
      'Percentuais de free float e composição mínima de conselho em cada segmento são fixados em regulamento da B3 e revistos. Confira a regra vigente antes de decorar número.',
    tabela: {
      titulo: 'Os segmentos, do mais ao menos exigente',
      colunas: ['Segmento', 'Tipos de ação', 'Tag along'],
      linhas: [
        ['Novo Mercado', 'Somente ON', '100% para todas'],
        ['Nível 2', 'ON e PN', '100% para todas'],
        ['Nível 1', 'ON e PN', 'O da lei'],
        ['Tradicional', 'ON e PN', 'O da lei'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Uma companhia listada no Novo Mercado pode ter em circulação:',
      alternativas: [
        'Ações ordinárias e preferenciais, com tag along de 100%',
        'Apenas ações ordinárias, com tag along de 100%',
        'Apenas ações preferenciais, com direito a voto',
        'Ações ordinárias, preferenciais e de fruição',
      ],
      correta: 1,
      explicacao:
        'O Novo Mercado admite apenas ações ordinárias. É o segmento em que todo acionista tem voto e tag along integral.',
    },
    mapaMental: {
      id: 'mm-gov',
      rotulo: 'Segmentos de listagem',
      revisao: true,
      filhos: [
        { id: 'mm-gov-vol', rotulo: 'Adesão voluntária', detalhe: 'Contrato com a bolsa', revisao: true },
        {
          id: 'mm-gov-nm',
          rotulo: 'Novo Mercado',
          detalhe: 'Só ON · tag along 100%',
          revisao: true,
        },
        { id: 'mm-gov-n2', rotulo: 'Nível 2', detalhe: 'ON e PN · tag along 100%', revisao: true },
        { id: 'mm-gov-n1', rotulo: 'Nível 1', detalhe: 'Transparência e free float', revisao: true },
        {
          id: 'mm-gov-tag',
          rotulo: 'Tag along',
          detalhe: 'Vender junto na alienação de controle',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'A empresa pode se comprometer com regras mais duras do que a lei exige. Quanto mais dura a regra, mais protegido fica quem tem pouca ação.',
      exemplo:
        'O dono vende o controle por R$ 100 a ação. No Novo Mercado, você também vende por R$ 100. Fora dele, pode receber menos.',
      analogia:
        'É como um selo de qualidade: ninguém obriga a empresa a ter, mas quem tem consegue vender mais barato o próprio risco.',
      iniciante:
        'Existem níveis de compromisso das empresas com quem compra suas ações. Os níveis mais altos protegem melhor o pequeno investidor.',
    },
    niveis: {
      entenda:
        'Os segmentos são compromissos voluntários com regras acima da lei. No Novo Mercado só existem ações ON e todo acionista tem tag along de 100%.',
      aprofunde:
        'A exigência de ação única no Novo Mercado ataca a raiz do problema de governança brasileiro: a separação entre direito sobre o fluxo de caixa e direito de controle. Com ações preferenciais sem voto, o controlador pode deter uma fração pequena do capital total e ainda assim decidir sozinho — e quanto maior essa distância, maior o incentivo a extrair benefícios privados de controle, porque o custo dessas extrações é dividido com quem não decide. Uma companhia com estrutura acionária única elimina essa cunha: quem manda tem o mesmo interesse econômico de quem não manda. É por isso que a literatura empírica associa esse desenho a menor desconto de governança. O tag along atua sobre o momento em que a assimetria mais dói, que é a alienação de controle: sem ele, o prêmio pago ao controlador não é compartilhado, e o minoritário fica com um novo controlador que não escolheu e sem o prêmio. As regras de saída — obrigação de oferta pública para fechar capital ou migrar de segmento — completam o arranjo, impedindo que o compromisso seja desfeito unilateralmente depois que o capital foi captado sob ele.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-fiis',
    microtemaId: 'm2.1',
    titulo: 'Fundos imobiliários',
    objetivo: 'Caracterizar o FII quanto à forma, à distribuição obrigatória e às condições de isenção.',
    etiquetas: ['ESSENCIAL', 'ATENCAO'],
    resumo30s:
      'FII é fundo FECHADO com cotas negociadas em bolsa — não há resgate, a saída é vender. Distribui obrigatoriamente a maior parte do resultado de caixa, e o rendimento é isento para pessoa física apenas se três condições forem cumpridas.',
    explicacao: {
      oQueE:
        'Fundo de investimento imobiliário é um condomínio de investidores que aplica em imóveis ou em ativos financeiros do setor imobiliário, com cotas negociadas em bolsa.',
      porQueImporta:
        'É o produto que mais se aproxima de "renda mensal" no varejo, e por isso o mais mal entendido: o cliente compara o rendimento distribuído com o de uma aplicação de renda fixa, ignorando que a cota oscila.',
      paraQueServe:
        'Dar acesso a investimento imobiliário com valor de entrada baixo, gestão profissional e liquidez de bolsa.',
      comoFunciona: [
        'É fundo FECHADO: não há resgate de cotas. Quem quer sair vende na bolsa, a preço de mercado — que pode estar acima ou abaixo do valor patrimonial.',
        'Há obrigação de DISTRIBUIR periodicamente a maior parte do resultado apurado pelo regime de caixa. É daí que vem o rendimento mensal.',
        'A isenção de IR sobre os rendimentos distribuídos, para PESSOA FÍSICA, depende de TRÊS condições cumulativas: número mínimo de cotistas no fundo, participação individual abaixo de um limite, e cotas negociadas em bolsa ou balcão organizado.',
        'O GANHO DE CAPITAL na venda da cota é tributado — a isenção alcança o rendimento distribuído, não a valorização.',
        'TIPOS: fundos de TIJOLO detêm imóveis; fundos de PAPEL detêm ativos financeiros como CRI; fundos de FUNDOS aplicam em outros FIIs.',
      ],
      exemploSimples:
        'Um FII distribui rendimento mensal equivalente a 0,7% do valor da cota. Se a cota cai 15% no ano, o investidor recebeu os rendimentos e perdeu no principal — a distribuição não protege o valor da cota.',
      exemploAplicado:
        'Um cliente aposentado quer trocar toda a renda fixa por FIIs "porque paga todo mês". A distribuição é atraente, mas a cota é renda variável: em uma queda de mercado ele veria o patrimônio encolher enquanto continua sacando. Para renda com previsibilidade de principal, o produto não é esse — e essa conversa precisa acontecer antes, não depois.',
      lembrarNaProva: [
        'FII é FECHADO: não há resgate, a saída é a venda em bolsa.',
        'Há obrigação de distribuir a maior parte do resultado de caixa.',
        'A isenção do rendimento para PF exige TRÊS condições cumulativas.',
        'O ganho de capital na venda é tributado — a isenção não o alcança.',
      ],
      revisaoRapida: [
        'Fundo fechado, cotas negociadas em bolsa.',
        'Sem resgate: sair significa vender a preço de mercado.',
        'Distribuição periódica obrigatória do resultado de caixa.',
        'Isenção do rendimento para PF depende de três condições.',
        'Ganho de capital na venda é tributado.',
      ],
    },
    exemplos: [
      {
        titulo: 'Tijolo, papel e fundo de fundos',
        corpo:
          'TIJOLO tem imóvel: o risco é de vacância, inadimplência de locatário e desvalorização. PAPEL tem CRI e recebíveis: o risco é de crédito do lastro e de indexador. FUNDO DE FUNDOS tem cotas de outros FIIs: adiciona uma camada de taxa e diversifica. Chamar os três de "FII" esconde perfis de risco muito diferentes.',
      },
    ],
    conceitoChave:
      'O rendimento mensal do FII é distribuição de caixa, não juro contratado — e a cota que o gera é renda variável.',
    pontosChave: [
      'Fundo fechado, sem resgate',
      'Distribuição obrigatória do caixa',
      'Isenção: três condições cumulativas',
      'Ganho de capital é tributado',
      'Tijolo, papel e fundo de fundos',
    ],
    erroComum:
      'Comparar o rendimento distribuído por um FII com a taxa de um CDB. Um é distribuição de caixa de um ativo que oscila; o outro é remuneração contratada sobre principal estável.',
    alertaProva:
      'Os limiares numéricos da isenção — número mínimo de cotistas e participação individual máxima — foram alterados recentemente. Confira a regra vigente antes de citar número.',
    tabela: {
      titulo: 'FII × renda fixa',
      colunas: ['Aspecto', 'FII', 'Renda fixa'],
      linhas: [
        ['Principal', 'Oscila com o mercado', 'Estável ou contratado'],
        ['Retorno periódico', 'Distribuição de caixa', 'Juro contratado'],
        ['Saída', 'Venda em bolsa', 'Resgate ou vencimento'],
        ['Isenção para PF', 'Do rendimento, com condições', 'Depende do produto'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Um cotista que deseja sair de um fundo imobiliário deve:',
      alternativas: [
        'Solicitar resgate ao administrador, conforme o regulamento',
        'Vender as cotas em bolsa, a preço de mercado',
        'Aguardar o encerramento do fundo',
        'Solicitar a amortização antecipada das cotas',
      ],
      correta: 1,
      explicacao:
        'FII é fundo fechado: não há resgate. A saída acontece pela venda das cotas no mercado secundário.',
    },
    mapaMental: {
      id: 'mm-fii',
      rotulo: 'FII',
      revisao: true,
      filhos: [
        { id: 'mm-fii-fechado', rotulo: 'Fundo fechado', detalhe: 'Sem resgate · sai vendendo', revisao: true },
        { id: 'mm-fii-dist', rotulo: 'Distribuição obrigatória', detalhe: 'Resultado de caixa', revisao: true },
        {
          id: 'mm-fii-isencao',
          rotulo: 'Isenção do rendimento',
          detalhe: 'Três condições cumulativas',
          revisao: true,
          filhos: [
            { id: 'mm-fii-ganho', rotulo: 'Ganho de capital', detalhe: 'É tributado', revisao: true },
          ],
        },
        {
          id: 'mm-fii-tipos',
          rotulo: 'Tipos',
          detalhe: 'Tijolo · papel · fundo de fundos',
          revisao: true,
        },
      ],
    },
    reexplicacoes: {
      simples:
        'É um fundo que investe em imóveis e paga rendimento todo mês. As cotas são negociadas em bolsa e o preço delas sobe e desce.',
      exemplo:
        'O fundo paga 0,7% ao mês, mas a cota cai 15% no ano. Você recebeu os rendimentos e perdeu no valor investido.',
      analogia:
        'É ser dono de uma fatia de um prédio alugado: entra aluguel todo mês, e o valor do prédio varia com o mercado.',
      iniciante:
        'Dá para investir em imóveis comprando cotas na bolsa. O fundo aluga os imóveis e repassa o aluguel aos cotistas.',
    },
    niveis: {
      entenda:
        'FII é fundo fechado com cotas em bolsa. Distribui a maior parte do caixa periodicamente, e a cota oscila como qualquer ativo de bolsa.',
      aprofunde:
        'A obrigação de distribuir a maior parte do resultado de caixa é o que dá ao FII seu perfil de renda, e também o que limita sua capacidade de crescer por retenção: um fundo que precisa distribuir quase tudo não acumula recursos para novas aquisições e depende de emissões de cotas para crescer. Daí a importância de acompanhar as emissões subsequentes, que podem diluir o cotista que não acompanha. A distinção entre resultado CONTÁBIL e resultado de CAIXA é outra fonte frequente de mal-entendido: a base da distribuição obrigatória é o caixa, o que significa que ganhos ou perdas não realizados de reavaliação de imóveis não entram na conta — um fundo pode distribuir rendimento em um período em que o valor patrimonial das cotas caiu. Por fim, a negociação em bolsa introduz uma variável ausente nos fundos abertos: o preço da cota pode divergir persistentemente do valor patrimonial, para cima ou para baixo, e essa diferença reflete expectativa de mercado sobre vacância, inadimplência e taxa de juros — o que torna o FII sensível a juros de forma semelhante a um título longo.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-etf-bdr',
    microtemaId: 'm2.1',
    titulo: 'ETFs e BDRs',
    objetivo: 'Caracterizar o fundo de índice e o certificado de depósito de valores mobiliários estrangeiros.',
    etiquetas: ['ATENCAO', 'ENTENDER'],
    resumo30s:
      'ETF é fundo de índice negociado em bolsa: gestão passiva, taxa baixa, cota comprada como ação. BDR é certificado que representa ação de empresa estrangeira negociado aqui — o investidor não é acionista direto.',
    explicacao: {
      oQueE:
        'ETF é um fundo cujas cotas são negociadas em bolsa e cuja carteira replica um índice de referência. BDR é um certificado emitido no Brasil lastreado em valores mobiliários emitidos no exterior.',
      porQueImporta:
        'São as duas formas mais simples de o investidor brasileiro acessar diversificação ampla e exposição internacional sem abrir conta fora do país.',
      paraQueServe:
        'Comprar um índice inteiro em uma única ordem, e ter exposição a empresas estrangeiras dentro da estrutura de negociação local.',
      comoFunciona: [
        'O ETF replica um ÍNDICE. A gestão é passiva: o gestor não escolhe ativos, ele reproduz a carteira teórica. Isso mantém a taxa de administração baixa.',
        'A cota do ETF é comprada e vendida em bolsa, como uma ação, durante o pregão — diferente do fundo aberto, cuja cota é apurada no fechamento.',
        'O BDR representa ações de companhia estrangeira custodiadas no exterior. Quem compra tem exposição econômica, mas NÃO é acionista direto da empresa.',
        'Há níveis de BDR com exigências diferentes de registro e divulgação. Os patrocinados contam com participação da própria emissora estrangeira; os não patrocinados, não.',
        'O BDR carrega risco CAMBIAL: o preço aqui acompanha a ação lá fora convertida pela taxa de câmbio, e os dois fatores podem se mover em direções opostas.',
      ],
      exemploSimples:
        'Um ETF que replica um índice de ações compra, em proporção, todas as ações daquele índice. Comprar uma cota é comprar uma fração de toda a carteira, em uma única ordem e com uma única corretagem.',
      exemploAplicado:
        'Um cliente quer exposição a tecnologia dos Estados Unidos e pergunta se compra BDR ou abre conta no exterior. O BDR resolve praticidade — negociação em reais, custódia local, sem remessa. Em troca, ele não vota, depende da liquidez do papel aqui, e carrega o câmbio embutido no preço. Nenhuma das duas opções é errada; a escolha depende de quanto ele valoriza cada uma dessas coisas.',
      lembrarNaProva: [
        'ETF replica índice — gestão PASSIVA, taxa baixa.',
        'A cota do ETF é negociada em bolsa durante o pregão.',
        'O titular de BDR NÃO é acionista direto da companhia estrangeira.',
        'BDR embute risco cambial.',
      ],
      revisaoRapida: [
        'ETF: fundo de índice, gestão passiva.',
        'Cota negociada em bolsa, como ação.',
        'BDR: certificado lastreado em ação estrangeira.',
        'Não confere condição de acionista direto.',
        'BDR embute variação cambial no preço.',
      ],
    },
    exemplos: [
      {
        titulo: 'ETF × fundo aberto de ações',
        corpo:
          'No fundo aberto você aplica e resgata pela cota do fechamento, com prazos de cotização e liquidação. No ETF você compra e vende no pregão, pelo preço do momento, com corretagem — e sem prazo de resgate. São veículos com a mesma finalidade e mecânicas operacionais bem diferentes.',
      },
    ],
    conceitoChave:
      'ETF entrega o índice inteiro em uma ordem; BDR entrega exposição a uma empresa estrangeira sem torná-lo acionista dela.',
    pontosChave: [
      'ETF: réplica de índice, gestão passiva',
      'Negociado em bolsa, como ação',
      'BDR: certificado, não é ação',
      'Sem direito de acionista direto',
      'BDR carrega risco cambial',
    ],
    erroComum:
      'Tratar BDR como se fosse a ação estrangeira. É um certificado lastreado nela: o titular tem exposição econômica, mas não a condição de acionista.',
    alertaProva:
      'As regras de acesso do investidor de varejo aos diferentes níveis de BDR foram alteradas nos últimos anos. Confira a norma vigente antes de afirmar restrição.',
    tabela: {
      titulo: 'ETF e BDR em uma tabela',
      colunas: ['Aspecto', 'ETF', 'BDR'],
      linhas: [
        ['O que é', 'Fundo de índice', 'Certificado de depósito'],
        ['Gestão', 'Passiva', 'Não se aplica'],
        ['Negociação', 'Bolsa, no pregão', 'Bolsa, no pregão'],
        ['Risco cambial', 'Depende do índice', 'Sim, embutido'],
      ],
    },
    perguntaRapida: {
      enunciado: 'O titular de um BDR:',
      alternativas: [
        'É acionista direto da companhia estrangeira, com direito de voto',
        'Tem exposição econômica à companhia, mas não é acionista direto',
        'É credor da companhia estrangeira',
        'É cotista de um fundo de índice internacional',
      ],
      correta: 1,
      explicacao:
        'O BDR é um certificado lastreado em ações custodiadas no exterior. A exposição econômica existe; a condição de acionista direto, não.',
    },
    mapaMental: {
      id: 'mm-etf',
      rotulo: 'ETF e BDR',
      revisao: true,
      filhos: [
        {
          id: 'mm-etf-etf',
          rotulo: 'ETF',
          detalhe: 'Fundo de índice · gestão passiva',
          revisao: true,
          filhos: [
            { id: 'mm-etf-bolsa', rotulo: 'Negociado no pregão', detalhe: 'Diferente do fundo aberto', revisao: true },
          ],
        },
        {
          id: 'mm-etf-bdr',
          rotulo: 'BDR',
          detalhe: 'Certificado lastreado em ação estrangeira',
          revisao: true,
          filhos: [
            { id: 'mm-etf-naoacion', rotulo: 'Não é acionista direto', revisao: true },
            { id: 'mm-etf-cambio', rotulo: 'Risco cambial embutido', revisao: true },
          ],
        },
      ],
    },
    reexplicacoes: {
      simples:
        'ETF é comprar um índice inteiro numa ordem só. BDR é comprar aqui um papel que representa uma ação lá fora.',
      exemplo:
        'Uma cota de ETF de índice já contém, em proporção, todas as ações daquele índice — sem precisar comprar uma a uma.',
      analogia:
        'ETF é a cesta pronta do mercado. BDR é o produto importado com etiqueta em reais.',
      iniciante:
        'Existem formas simples de investir em muitas empresas de uma vez, ou em empresas de fora do Brasil, sem sair da bolsa daqui.',
    },
    niveis: {
      entenda:
        'ETF replica um índice e é comprado como ação. BDR representa uma ação estrangeira, mas quem compra não vira acionista dela.',
      aprofunde:
        'A mecânica que mantém o preço do ETF colado ao valor da carteira é a criação e o resgate de cotas por participantes autorizados: quando a cota negocia acima do valor da carteira, é lucrativo montar a cesta de ativos, entregá-la e receber cotas novas para vender — e o inverso quando negocia abaixo. Essa arbitragem contínua é o que diferencia estruturalmente o ETF de um fundo fechado, cujo preço pode divergir persistentemente do valor patrimonial, como acontece nos FIIs. O ponto de atenção real em ETFs não é o desconto, então, mas o TRACKING ERROR: a diferença entre o retorno do fundo e o do índice, causada por taxa de administração, custos de rebalanceamento e tratamento de proventos. Nos BDRs, a estrutura de depositário introduz um intermediário a mais entre o investidor e o ativo, e com ele riscos operacionais e de liquidez local que a ação original não tem — o papel pode ter poucos negócios aqui mesmo quando a ação lá fora é líquida, e o spread reflete isso. É por essa razão que a escolha entre BDR e conta no exterior raramente se resolve pelo custo nominal: ela depende de quanto o investidor negocia e de quanto valoriza custódia e tributação simplificadas.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-tipos-fundos',
    microtemaId: 'm2.1',
    titulo: 'Classificação dos fundos por composição da carteira',
    objetivo: 'Classificar um fundo pela concentração mínima exigida em cada categoria.',
    etiquetas: ['ESSENCIAL', 'DECORAR'],
    resumo30s:
      'Renda fixa concentra em ativos de renda fixa; ações concentram em ações; cambial acompanha a variação de moeda estrangeira; multimercado não tem compromisso de concentração — pode misturar tudo.',
    explicacao: {
      oQueE:
        'A classificação por composição agrupa os fundos conforme a natureza dos ativos em que devem concentrar a carteira, definida em percentual mínimo.',
      porQueImporta:
        'É o primeiro filtro de adequação. Um fundo classificado como ações é renda variável por definição, e recomendá-lo a quem não tolera oscilação é inadequação clara, independentemente do histórico dele.',
      paraQueServe:
        'Dar ao investidor uma expectativa mínima e verificável sobre onde o dinheiro será aplicado.',
      comoFunciona: [
        'RENDA FIXA: obrigado a concentrar a maior parte da carteira em ativos de renda fixa. O fator de risco principal é a variação da taxa de juros ou do índice de preços.',
        'AÇÕES: obrigado a manter percentual mínimo elevado em ações e ativos relacionados. É renda variável por definição.',
        'CAMBIAL: concentra em ativos relacionados à variação de uma moeda estrangeira. O fator de risco é o câmbio.',
        'MULTIMERCADO: NÃO tem compromisso de concentração. Pode combinar juros, moedas, ações e derivativos — e por isso a classificação, sozinha, diz pouco sobre o risco.',
        'A classificação define o COMPROMISSO MÍNIMO, não a estratégia. Dois fundos da mesma classe podem ter perfis de risco muito diferentes.',
      ],
      exemploSimples:
        'Um fundo classificado como ações precisa manter a maior parte da carteira em ações. Mesmo em um ano ruim de bolsa, ele não pode migrar tudo para renda fixa — o compromisso da classe o impede.',
      exemploAplicado:
        'Um cliente pergunta se um multimercado é conservador. A classe não responde: multimercado é a categoria sem compromisso de concentração, e há desde fundos que operam próximos do CDI até fundos alavancados. A resposta está no regulamento, na política de investimento e no histórico de volatilidade — nunca no nome da classe.',
      lembrarNaProva: [
        'Renda fixa, ações e cambial têm concentração MÍNIMA obrigatória.',
        'Multimercado NÃO tem compromisso de concentração.',
        'A classe define o compromisso mínimo, não a estratégia.',
        'Fundo de ações é renda variável por definição.',
      ],
      revisaoRapida: [
        'Renda fixa: concentra em juros e índices de preços.',
        'Ações: percentual mínimo elevado em ações.',
        'Cambial: acompanha moeda estrangeira.',
        'Multimercado: sem compromisso de concentração.',
        'A classe é piso, não retrato da estratégia.',
      ],
    },
    exemplos: [
      {
        titulo: 'Por que "multimercado" não diz nada sozinho',
        corpo:
          'Dois fundos multimercado podem ter volatilidades que diferem em uma ordem de grandeza. Um opera arbitragem de juros com risco pequeno; outro faz posições direcionais alavancadas em câmbio. A classe é a mesma. Só o regulamento e o histórico separam os dois.',
      },
    ],
    conceitoChave:
      'A classe informa onde o fundo é OBRIGADO a concentrar — não o quanto ele arrisca.',
    pontosChave: [
      'Renda fixa: juros e índices',
      'Ações: renda variável por definição',
      'Cambial: fator de risco é a moeda',
      'Multimercado: sem compromisso',
      'Classe é piso, não estratégia',
    ],
    erroComum:
      'Concluir que um multimercado é moderado por não ser fundo de ações. Multimercado é a classe sem compromisso de concentração — pode ser mais arriscado que muitos fundos de ações.',
    alertaProva:
      'Os percentuais mínimos de concentração de cada classe são fixados em norma e podem ser revistos. Confira a regra vigente antes de decorar percentual.',
    tabela: {
      titulo: 'As classes por fator de risco',
      colunas: ['Classe', 'Concentração exigida', 'Fator de risco principal'],
      linhas: [
        ['Renda fixa', 'Sim, elevada', 'Juros e índices de preços'],
        ['Ações', 'Sim, elevada', 'Preço das ações'],
        ['Cambial', 'Sim, elevada', 'Variação da moeda'],
        ['Multimercado', 'Não há', 'Variados, conforme a estratégia'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Qual classe de fundo NÃO possui compromisso de concentração mínima em determinado tipo de ativo?',
      alternativas: ['Renda fixa', 'Ações', 'Multimercado', 'Cambial'],
      correta: 2,
      explicacao:
        'O multimercado é justamente a classe sem compromisso de concentração — pode combinar juros, câmbio, ações e derivativos.',
    },
    mapaMental: {
      id: 'mm-tf',
      rotulo: 'Classes de fundo',
      revisao: true,
      filhos: [
        { id: 'mm-tf-rf', rotulo: 'Renda fixa', detalhe: 'Juros e índices de preços', revisao: true },
        { id: 'mm-tf-acoes', rotulo: 'Ações', detalhe: 'Renda variável por definição', revisao: true },
        { id: 'mm-tf-camb', rotulo: 'Cambial', detalhe: 'Fator de risco é a moeda', revisao: true },
        {
          id: 'mm-tf-multi',
          rotulo: 'Multimercado',
          detalhe: 'SEM compromisso de concentração',
          revisao: true,
        },
        { id: 'mm-tf-piso', rotulo: 'Classe é piso', detalhe: 'Não descreve a estratégia', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'Cada tipo de fundo se compromete a aplicar a maior parte do dinheiro em um tipo de ativo. O multimercado não se compromete com nenhum.',
      exemplo:
        'Fundo de ações precisa ficar em ações mesmo em ano ruim de bolsa. Ele não pode migrar tudo para renda fixa.',
      analogia:
        'É o cardápio da casa: um restaurante de peixe serve peixe. O "cozinha variada" pode servir qualquer coisa.',
      iniciante:
        'Fundos são agrupados pelo tipo de investimento que fazem. Isso ajuda a saber, antes de aplicar, onde o dinheiro vai.',
    },
    niveis: {
      entenda:
        'A classe diz onde o fundo é obrigado a concentrar. Multimercado é a única sem esse compromisso, e por isso a classe não indica o risco dele.',
      aprofunde:
        'A classificação regulatória por composição convive com a classificação da autorregulação, mais detalhada, que subdivide cada classe conforme a estratégia — renda fixa duração baixa, média ou livre; ações indexadas, ativas ou livres; multimercado macro, long and short, estratégia específica. Essa segunda camada existe porque a primeira, sozinha, é insuficiente para comparação: colocar na mesma tabela um fundo de renda fixa de duração baixa e outro de duração livre produz um ranking sem sentido, já que assumem riscos de mercado incomparáveis. É por isso que a comparação de desempenho só é válida DENTRO da mesma subcategoria e contra o mesmo referencial. Vale registrar o efeito perverso da classificação frouxa no varejo: a categoria multimercado, por não ter compromisso, acomoda produtos com perfis de risco radicalmente distintos, e o cliente que a associa a "equilibrado" está inferindo de um rótulo que não carrega essa informação. A leitura do regulamento e da política de investimento não é etapa opcional aqui — é a única fonte da informação que a classe não dá.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 7,
  },

  {
    id: 'c-cvm175-classes',
    microtemaId: 'm2.1',
    titulo: 'Resolução CVM 175: classes, subclasses e responsabilidade limitada',
    objetivo: 'Descrever a estrutura de classes do novo marco de fundos e o efeito da responsabilidade limitada.',
    etiquetas: ['ESSENCIAL', 'ATENCAO'],
    resumo30s:
      'A CVM 175 permite que um fundo tenha CLASSES de cotas com patrimônios segregados, e cada classe pode ter SUBCLASSES. E permite prever RESPONSABILIDADE LIMITADA do cotista — que deixa de responder por patrimônio negativo.',
    explicacao: {
      oQueE:
        'A Resolução CVM 175 é o marco regulatório da indústria de fundos que substituiu a norma anterior, reorganizando a estrutura dos veículos e a divisão de responsabilidades entre prestadores.',
      porQueImporta:
        'Muda o que o cotista arrisca. Sob a regra antiga, patrimônio líquido negativo podia gerar chamada de capital; com responsabilidade limitada, a perda máxima passa a ser o valor investido.',
      paraQueServe:
        'Permitir estruturas mais flexíveis dentro de um mesmo fundo e alinhar o risco do cotista ao que ele efetivamente aplicou.',
      comoFunciona: [
        'Um FUNDO pode ter várias CLASSES de cotas, cada uma com PATRIMÔNIO SEGREGADO e política de investimento própria. O passivo de uma classe não contamina a outra.',
        'Cada classe pode ter SUBCLASSES, que se diferenciam por público-alvo, taxas e condições de aplicação — mas compartilham a mesma carteira.',
        'RESPONSABILIDADE LIMITADA pode ser prevista no regulamento. Havendo previsão, o cotista não é chamado a aportar recursos se o patrimônio ficar negativo: a perda máxima é o que ele investiu.',
        'Sem essa previsão, o regime anterior persiste, e o patrimônio negativo pode ser exigido dos cotistas.',
        'A norma organiza os PRESTADORES DE SERVIÇOS ESSENCIAIS — administração e gestão — delimitando responsabilidades que antes se confundiam.',
      ],
      exemploSimples:
        'Um fundo com duas classes: uma conservadora e outra alavancada. Se a alavancada tiver perda superior ao patrimônio dela, a classe conservadora não é afetada — os patrimônios são segregados.',
      exemploAplicado:
        'Um cliente pergunta se pode "dever" mais do que aplicou em um fundo. A resposta depende do regulamento: se houver previsão de responsabilidade limitada, não; sem ela, sim. É uma informação que precisa ser verificada antes da aplicação, e não é a mesma para todos os fundos.',
      lembrarNaProva: [
        'Classes têm patrimônio SEGREGADO entre si.',
        'Subclasses compartilham a carteira e diferem em taxas e público.',
        'Responsabilidade limitada precisa estar PREVISTA no regulamento.',
        'Com ela, a perda máxima do cotista é o valor investido.',
      ],
      revisaoRapida: [
        'Um fundo pode ter várias classes com patrimônios segregados.',
        'Subclasses dividem a mesma carteira, com taxas diferentes.',
        'Responsabilidade limitada depende de previsão no regulamento.',
        'Sem previsão, patrimônio negativo pode ser exigido do cotista.',
        'A norma delimita as responsabilidades de administrador e gestor.',
      ],
    },
    exemplos: [
      {
        titulo: 'Classe × subclasse',
        corpo:
          'CLASSE é a carteira: patrimônio próprio, política própria, segregação em relação às outras. SUBCLASSE é a mesma carteira oferecida em condições diferentes — taxa menor para quem aplica mais, público restrito, prazo de resgate distinto. Confundir os dois níveis é o erro do tema.',
      },
    ],
    conceitoChave:
      'Classe segrega patrimônio; subclasse segrega condições comerciais sobre o mesmo patrimônio.',
    pontosChave: [
      'Classes com patrimônio segregado',
      'Subclasses compartilham a carteira',
      'Responsabilidade limitada é opcional',
      'Precisa constar do regulamento',
      'Prestadores essenciais delimitados',
    ],
    erroComum:
      'Supor que todo fundo passou automaticamente a ter responsabilidade limitada. Ela depende de previsão expressa no regulamento — e sem ela o regime anterior continua valendo.',
    alertaProva:
      'A implementação da norma é gradual e envolve prazos de adaptação. Confira o estágio vigente antes de afirmar que determinada regra já se aplica a todos os fundos.',
    tabela: {
      titulo: 'Os dois níveis da estrutura',
      colunas: ['Nível', 'Patrimônio', 'O que diferencia'],
      linhas: [
        ['Classe', 'Segregado', 'Política de investimento e carteira'],
        ['Subclasse', 'Compartilhado com a classe', 'Taxas, público-alvo e condições'],
      ],
    },
    perguntaRapida: {
      enunciado: 'A responsabilidade limitada do cotista, no regime da Resolução CVM 175:',
      alternativas: [
        'Aplica-se automaticamente a todos os fundos',
        'Depende de previsão expressa no regulamento do fundo',
        'Só vale para investidores qualificados',
        'Elimina o risco de perda do valor investido',
      ],
      correta: 1,
      explicacao:
        'Ela é opcional e precisa constar do regulamento. Sem previsão, o cotista pode ser chamado a cobrir patrimônio negativo.',
    },
    mapaMental: {
      id: 'mm-175',
      rotulo: 'CVM 175',
      revisao: true,
      filhos: [
        {
          id: 'mm-175-classe',
          rotulo: 'Classe',
          detalhe: 'Patrimônio segregado · política própria',
          revisao: true,
        },
        {
          id: 'mm-175-sub',
          rotulo: 'Subclasse',
          detalhe: 'Mesma carteira · taxas e público diferentes',
          revisao: true,
        },
        {
          id: 'mm-175-resp',
          rotulo: 'Responsabilidade limitada',
          detalhe: 'Opcional · precisa estar no regulamento',
          revisao: true,
          filhos: [
            { id: 'mm-175-pl', rotulo: 'PL negativo', detalhe: 'Sem previsão, pode ser exigido', revisao: true },
          ],
        },
        { id: 'mm-175-prest', rotulo: 'Prestadores essenciais', detalhe: 'Administração e gestão' },
      ],
    },
    reexplicacoes: {
      simples:
        'Um fundo agora pode ter várias carteiras separadas dentro dele. E pode dizer no regulamento que você nunca vai perder mais do que aplicou.',
      exemplo:
        'Se uma classe alavancada quebrar, a classe conservadora do mesmo fundo não é afetada: os patrimônios são separados.',
      analogia:
        'É um prédio com apartamentos independentes: um problema em um não invade o outro.',
      iniciante:
        'A regra dos fundos mudou. Agora um fundo pode ter partes separadas, e pode limitar o quanto o investidor arrisca.',
    },
    niveis: {
      entenda:
        'Um fundo pode ter classes com patrimônios separados, e cada classe pode ter subclasses. A responsabilidade limitada, quando prevista, impede que você perca mais do que aplicou.',
      aprofunde:
        'A segregação patrimonial entre classes resolve um problema estrutural de custo: antes, cada estratégia exigia um veículo próprio, com CNPJ, auditoria, administrador e custos fixos duplicados. Concentrar várias classes em um fundo dilui essa estrutura sem misturar riscos — o que só funciona porque a segregação é oponível a terceiros, e não apenas contábil. A responsabilidade limitada tem efeito mais profundo do que parece: sob o regime anterior, o cotista de um fundo alavancado carregava uma exposição teoricamente ilimitada, o que é incompatível com a lógica de um produto distribuído no varejo e obrigava a estruturas de proteção artificiais. Ao permitir a limitação por regulamento, a norma aproxima o fundo da lógica societária de responsabilidade limitada e transfere ao gestor o incentivo de calibrar a alavancagem, já que a perda além do patrimônio deixa de ter a quem ser repassada. O ponto de atenção prático permanece: como é opcional, a verificação no regulamento é obrigatória antes de recomendar qualquer fundo com uso relevante de derivativos.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-taxas-fundos-175',
    microtemaId: 'm2.1',
    titulo: 'Taxas de ingresso e saída e o efeito sobre o retorno',
    objetivo: 'Identificar todas as taxas que incidem sobre um fundo e seu efeito no retorno líquido.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'Além da administração e da performance, o novo marco admite expressamente taxas de INGRESSO e de SAÍDA. Toda taxa reduz o retorno, mas a de performance só é devida se um referencial for superado — e há regra sobre isso.',
    explicacao: {
      oQueE:
        'São as cobranças previstas no regulamento que incidem sobre o patrimônio do fundo ou sobre a movimentação do cotista.',
      porQueImporta:
        'Taxa é o único componente do retorno que se conhece com certeza antes de aplicar. Comparar fundos por rentabilidade passada e ignorar a estrutura de taxas é comparar pelo incerto e desprezar o certo.',
      paraQueServe:
        'Remunerar administração, gestão e distribuição, e — no caso das taxas de movimentação — desestimular entradas e saídas que prejudiquem os demais cotistas.',
      comoFunciona: [
        'TAXA DE ADMINISTRAÇÃO: percentual anual sobre o patrimônio, provisionado diariamente. A rentabilidade divulgada já é líquida dela.',
        'TAXA DE PERFORMANCE: percentual sobre o que exceder um referencial previamente definido. Só é devida quando há superação, e a norma disciplina a periodicidade e a linha de água.',
        'TAXA DE INGRESSO: cobrada na aplicação. TAXA DE SAÍDA: cobrada no resgate. O novo marco as admite expressamente, previstas no regulamento.',
        'A taxa de saída tem função além da receita: desestimula resgates que forçariam o gestor a vender ativos em momento ruim, protegendo quem fica.',
        'Toda taxa reduz o retorno do cotista. A comparação entre fundos exige olhar a estrutura completa, não apenas a administração.',
      ],
      exemploSimples:
        'Dois fundos com a mesma rentabilidade bruta e taxas de administração idênticas. Um cobra taxa de saída e o outro não. Para quem pretende resgatar em prazo curto, o retorno líquido não é o mesmo.',
      exemploAplicado:
        'Um cliente compara dois fundos pela rentabilidade dos últimos doze meses e escolhe o de melhor número. A comparação ignora o que é conhecido — taxas — e privilegia o que é incerto — desempenho passado. A conversa correta inverte a ordem: primeiro a estrutura de custos, depois a aderência ao objetivo, e só então o histórico como contexto.',
      lembrarNaProva: [
        'A rentabilidade divulgada já é líquida da taxa de administração.',
        'A performance só é devida se o referencial for superado.',
        'Taxas de ingresso e saída são admitidas e devem constar do regulamento.',
        'A taxa de saída protege quem permanece no fundo.',
      ],
      revisaoRapida: [
        'Administração: percentual anual sobre o patrimônio.',
        'Performance: sobre o que exceder o referencial.',
        'Ingresso: na aplicação. Saída: no resgate.',
        'Taxa de saída desestimula resgates prejudiciais.',
        'Toda taxa reduz o retorno do cotista.',
      ],
    },
    exemplos: [
      {
        titulo: 'A linha de água',
        corpo:
          'A regra da linha de água impede que a taxa de performance seja cobrada duas vezes sobre o mesmo ganho: depois de uma queda, o gestor só volta a receber performance quando recuperar o patamar anterior. Sem ela, uma sequência de alta e baixa geraria cobrança sem ganho líquido para o cotista.',
      },
    ],
    conceitoChave:
      'Taxa é o único componente do retorno conhecido com certeza antes de aplicar — e por isso o primeiro a ser comparado.',
    pontosChave: [
      'Administração: sobre o patrimônio',
      'Performance: só sobre a superação',
      'Ingresso e saída: admitidas em regulamento',
      'Saída protege quem permanece',
      'Toda taxa reduz o retorno',
    ],
    erroComum:
      'Comparar fundos apenas pela taxa de administração. Ingresso, saída e performance também incidem, e a soma delas muda a ordem de preferência entre produtos semelhantes.',
    alertaProva:
      'Se a questão perguntar sobre a rentabilidade divulgada de um fundo, lembre que ela JÁ está líquida da taxa de administração — mas não do imposto de renda.',
    tabela: {
      titulo: 'As quatro taxas',
      colunas: ['Taxa', 'Quando incide', 'Sobre o quê'],
      linhas: [
        ['Administração', 'Continuamente', 'Patrimônio do fundo'],
        ['Performance', 'Quando supera o referencial', 'O excedente'],
        ['Ingresso', 'Na aplicação', 'Valor aplicado'],
        ['Saída', 'No resgate', 'Valor resgatado'],
      ],
    },
    perguntaRapida: {
      enunciado: 'A taxa de performance de um fundo é devida:',
      alternativas: [
        'Sempre que o fundo apresentar rentabilidade positiva',
        'Apenas sobre a parcela que exceder o referencial previamente definido',
        'Mensalmente, sobre o patrimônio líquido',
        'No momento do resgate, sobre o valor resgatado',
      ],
      correta: 1,
      explicacao:
        'Ela incide sobre a superação do referencial, e a regra da linha de água impede cobrança repetida sobre o mesmo ganho.',
    },
    mapaMental: {
      id: 'mm-tx',
      rotulo: 'Taxas dos fundos',
      revisao: true,
      filhos: [
        { id: 'mm-tx-adm', rotulo: 'Administração', detalhe: 'Sobre o patrimônio · já descontada', revisao: true },
        {
          id: 'mm-tx-perf',
          rotulo: 'Performance',
          detalhe: 'Só sobre o excedente',
          revisao: true,
          filhos: [
            { id: 'mm-tx-agua', rotulo: 'Linha de água', detalhe: 'Impede cobrar duas vezes o mesmo ganho', revisao: true },
          ],
        },
        { id: 'mm-tx-ing', rotulo: 'Ingresso', detalhe: 'Na aplicação', revisao: true },
        { id: 'mm-tx-sai', rotulo: 'Saída', detalhe: 'No resgate · protege quem fica', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'O fundo cobra taxas. A de administração já está descontada do que você vê. A de performance só aparece se o fundo superar a meta combinada.',
      exemplo:
        'Dois fundos com o mesmo rendimento: um cobra taxa de saída, o outro não. Quem resgata cedo recebe menos no primeiro.',
      analogia:
        'É o custo fixo mais a comissão por resultado. Um sempre existe; o outro só se a meta for batida.',
      iniciante:
        'Fundos cobram para administrar seu dinheiro. Vale saber quais taxas existem antes de aplicar.',
    },
    niveis: {
      entenda:
        'Fundo pode cobrar administração, performance, ingresso e saída. A rentabilidade divulgada já vem sem a de administração.',
      aprofunde:
        'A taxa de performance cria um problema de alinhamento conhecido: ela dá ao gestor um retorno assimétrico — participa do ganho, não participa da perda —, o que em tese incentiva risco acima do que o cotista escolheria. A regra da linha de água mitiga parte disso ao exigir recuperação de perdas anteriores antes de nova cobrança, e a exigência de referencial compatível com a política do fundo impede o truque mais grosseiro, que é cobrar performance sobre um índice fácil de superar. O que a norma não elimina é o incentivo ao risco no fim do período de apuração, quando o gestor abaixo da linha tem pouco a perder ao aumentar exposição. A admissão expressa de taxas de ingresso e saída, por sua vez, atende a uma preocupação distinta e legítima de proteção do cotista que PERMANECE: resgates grandes em momentos de estresse obrigam o gestor a vender os ativos mais líquidos primeiro, deteriorando a carteira de quem fica. Cobrar do resgatante parte desse custo transfere ao causador a despesa que ele impõe aos demais — a mesma lógica das taxas antidiluição usadas em outros mercados.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-fundos-abertos-fechados',
    microtemaId: 'm2.1',
    titulo: 'Fundos abertos, fechados, exclusivos e restritos',
    objetivo: 'Distinguir as formas de constituição e entender cotização e liquidação.',
    etiquetas: ['ESSENCIAL', 'DECORAR'],
    resumo30s:
      'No fundo ABERTO há resgate; no FECHADO não há, e a saída é vender a cota. Cotização é quando o valor da cota é apurado; liquidação é quando o dinheiro chega. Os dois prazos são distintos e somam.',
    explicacao: {
      oQueE:
        'A forma de constituição define se o fundo admite entrada e saída contínuas de cotistas, e o público define a quem ele pode ser oferecido.',
      porQueImporta:
        'É onde mora a liquidez real do produto. Um cliente que precisa do dinheiro em cinco dias e aplica em um fundo com resgate em D+30 não tem um problema de rentabilidade: tem um problema de prazo.',
      paraQueServe:
        'Compatibilizar a liquidez oferecida ao cotista com a liquidez dos ativos em que o fundo investe.',
      comoFunciona: [
        'FUNDO ABERTO: admite aplicação e resgate a qualquer tempo, conforme o regulamento. O patrimônio varia com a movimentação dos cotistas.',
        'FUNDO FECHADO: não admite resgate. As cotas são resgatadas apenas no encerramento, e a saída antes disso é a venda no mercado secundário.',
        'COTIZAÇÃO é a data em que o valor da cota de resgate é apurado. LIQUIDAÇÃO é a data em que o recurso é creditado. Os dois prazos são independentes e se somam.',
        'FUNDO EXCLUSIVO tem um único cotista, necessariamente investidor profissional. FUNDO RESTRITO destina-se a um grupo determinado, como uma família ou um grupo econômico.',
        'A regra de ouro da liquidez: o prazo de resgate precisa ser compatível com a liquidez dos ativos da carteira. Fundo com ativos ilíquidos e resgate curto é uma promessa que quebra no primeiro estresse.',
      ],
      exemploSimples:
        'Um fundo com cotização em D+30 e liquidação em D+1 significa que, pedindo o resgate hoje, o valor da cota será o de daqui a trinta dias e o dinheiro chega no dia seguinte a isso — ou seja, em D+31.',
      exemploAplicado:
        'Um cliente precisa do dinheiro em duas semanas e o gerente oferece um multimercado com histórico excelente e resgate em D+30. O histórico é irrelevante: o produto não entrega o dinheiro na data necessária. É erro de prazo, e nenhum retorno compensa não ter o recurso quando ele é preciso.',
      lembrarNaProva: [
        'Aberto tem resgate; fechado não — a saída é a venda da cota.',
        'Cotização e liquidação são prazos DISTINTOS e somam.',
        'Fundo exclusivo tem um único cotista investidor profissional.',
        'O prazo de resgate deve ser compatível com a liquidez da carteira.',
      ],
      revisaoRapida: [
        'Aberto: aplicação e resgate contínuos.',
        'Fechado: sem resgate; sai vendendo a cota.',
        'Cotização: quando a cota é apurada.',
        'Liquidação: quando o dinheiro chega.',
        'Exclusivo: um cotista, investidor profissional.',
      ],
    },
    exemplos: [
      {
        titulo: 'Por que o descasamento quebra fundos',
        corpo:
          'Um fundo que promete resgate em D+1 com carteira de crédito privado ilíquido funciona enquanto ninguém sai. No primeiro estresse, os resgates obrigam a vender ativos com deságio, o que derruba a cota e provoca mais resgates. Ele não quebra por má gestão de crédito: quebra por descasamento de liquidez.',
      },
    ],
    conceitoChave:
      'A liquidez prometida ao cotista precisa existir na carteira — quando não existe, ela é criada às custas de quem fica.',
    pontosChave: [
      'Aberto: com resgate',
      'Fechado: sem resgate',
      'Cotização ≠ liquidação',
      'Exclusivo: um cotista profissional',
      'Prazo compatível com a carteira',
    ],
    erroComum:
      'Somar mal os prazos. Cotização em D+30 com liquidação em D+1 significa receber em D+31, e não em D+30 nem em D+1.',
    alertaProva:
      'Enunciado que dá cotização e liquidação separadas quase sempre pede a soma. Some antes de responder.',
    tabela: {
      titulo: 'Formas e públicos',
      colunas: ['Tipo', 'Resgate', 'Público'],
      linhas: [
        ['Aberto', 'Sim, conforme o regulamento', 'Conforme a oferta'],
        ['Fechado', 'Só no encerramento', 'Conforme a oferta'],
        ['Exclusivo', 'Conforme o regulamento', 'Um único investidor profissional'],
        ['Restrito', 'Conforme o regulamento', 'Grupo determinado'],
      ],
    },
    perguntaRapida: {
      enunciado:
        'Um fundo tem cotização em D+30 e liquidação em D+1. Solicitando o resgate hoje, o cotista recebe o recurso em:',
      alternativas: ['D+1', 'D+30', 'D+31', 'D+29'],
      correta: 2,
      explicacao:
        'A cota é apurada em D+30 e o crédito ocorre um dia útil depois. Os prazos somam: D+31.',
    },
    mapaMental: {
      id: 'mm-af',
      rotulo: 'Formas de fundo',
      revisao: true,
      filhos: [
        { id: 'mm-af-aberto', rotulo: 'Aberto', detalhe: 'Aplicação e resgate contínuos', revisao: true },
        { id: 'mm-af-fechado', rotulo: 'Fechado', detalhe: 'Sem resgate · sai vendendo', revisao: true },
        {
          id: 'mm-af-prazos',
          rotulo: 'Prazos',
          detalhe: 'Cotização + liquidação',
          revisao: true,
          filhos: [
            { id: 'mm-af-cot', rotulo: 'Cotização', detalhe: 'Quando a cota é apurada' },
            { id: 'mm-af-liq', rotulo: 'Liquidação', detalhe: 'Quando o dinheiro chega' },
          ],
        },
        { id: 'mm-af-excl', rotulo: 'Exclusivo e restrito', detalhe: 'Um cotista · grupo determinado', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'Em alguns fundos você pede o dinheiro de volta a qualquer hora; em outros, só vendendo a cota para outra pessoa.',
      exemplo:
        'Cotização em D+30 e liquidação em D+1 quer dizer que o dinheiro chega em D+31, não em D+30.',
      analogia:
        'É a diferença entre a data do fechamento da conta e a data em que o pagamento cai. São duas coisas.',
      iniciante:
        'Cada fundo tem um prazo para devolver seu dinheiro. Antes de aplicar, vale saber qual é.',
    },
    niveis: {
      entenda:
        'Fundo aberto devolve o dinheiro quando você pede; fechado, não. E o prazo total é a soma de cotização e liquidação.',
      aprofunde:
        'O descasamento de liquidez é a fonte de risco mais subestimada da indústria de fundos, e ele não decorre de má-fé: prometer resgate curto é competitivo, e a carteira que rende mais costuma ser a menos líquida. O problema é que a estrutura cria um incentivo de corrida — quem resgata primeiro sai pelo preço bom, e quem fica arca com a venda forçada dos ativos remanescentes. Essa assimetria é exatamente o que a taxa de saída e os prazos de resgate mais longos tentam corrigir, transferindo ao resgatante parte do custo que ele impõe. Fundos fechados resolvem o problema pela raiz, ao eliminar o resgate — mas transferem a volatilidade para o preço da cota no secundário, que pode negociar com desconto persistente em relação ao valor patrimonial. Não existe estrutura que elimine o trade-off: ou a liquidez está na carteira, ou ela é fabricada às custas de alguém. Reconhecer isso é o que separa a leitura de um regulamento da leitura de uma lâmina.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },
]
