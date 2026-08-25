import type { Conceito } from '../types'

/**
 * MICROTEMA 2.5 — Seguros de vida e patrimoniais.
 *
 * A distinção que organiza o microtema inteiro é uma só: SEGURO DE DANO
 * indeniza prejuízo e por isso obedece ao princípio indenizatório — a
 * indenização não pode superar a perda. SEGURO DE PESSOAS paga um capital
 * previamente contratado, não repara prejuízo, e por isso admite cumulação
 * de apólices e não comporta sub-rogação. Quase toda pegadinha do tema nasce
 * de aplicar a regra de um ao outro.
 *
 * NOTA EDITORIAL: as regras citadas aqui são de direito civil e de estrutura
 * do contrato de seguro, estáveis por natureza. Onde houver número de
 * natureza tributária ou limite operacional, a aula marca a necessidade de
 * conferência (regra 4 do CLAUDE.md).
 */

export const CONCEITOS_2_5: Conceito[] = [
  {
    id: 'c-seguros-fundamentos',
    microtemaId: 'm2.5',
    titulo: 'Fundamentos do seguro: prêmio, sinistro e apólice',
    objetivo: 'Identificar os elementos do contrato de seguro e aplicar o princípio indenizatório.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'PRÊMIO é o que o segurado paga; SINISTRO é o evento; INDENIZAÇÃO é o que a seguradora paga. Em seguro de DANO vale o princípio indenizatório: a indenização não pode superar o prejuízo. Quem supervisiona é a SUSEP; quem normatiza é o CNSP.',
    explicacao: {
      oQueE:
        'Seguro é o contrato pelo qual a seguradora se obriga, mediante pagamento do prêmio, a garantir interesse legítimo do segurado contra riscos predeterminados.',
      porQueImporta:
        'É o produto em que o vocabulário mais confunde o cliente — e o profissional que troca prêmio por indenização, ou franquia por carência, perde credibilidade na primeira conversa.',
      paraQueServe:
        'Transferir para a seguradora o risco financeiro de um evento incerto, trocando uma perda grande e improvável por um custo pequeno e certo.',
      comoFunciona: [
        'PRÊMIO é o valor pago PELO SEGURADO à seguradora. Não confundir com a indenização, que é o que a seguradora paga ao segurado.',
        'SINISTRO é a ocorrência do evento coberto. APÓLICE é o documento que formaliza o contrato e delimita coberturas, exclusões e limites.',
        'FRANQUIA é a participação obrigatória do segurado no prejuízo, típica de seguros de dano. Abaixo dela, não há pagamento.',
        'PRINCÍPIO INDENIZATÓRIO: em seguro de DANO a indenização não pode superar o prejuízo efetivo nem o limite da apólice. O seguro repara — não é fonte de lucro.',
        'ESTRUTURA REGULATÓRIA: o CNSP normatiza, a SUSEP supervisiona. Seguro-saúde é exceção e fica com a ANS.',
      ],
      exemploSimples:
        'Um seguro de automóvel com franquia. O carro sofre um dano orçado abaixo do valor da franquia: não há pagamento. O dano acima dela é indenizado, descontada a franquia.',
      exemploAplicado:
        'Um cliente segurou o mesmo imóvel em duas seguradoras achando que receberia duas indenizações. Em seguro de dano isso não acontece: o princípio indenizatório impede que a soma das indenizações supere o prejuízo. Ele pagou dois prêmios para receber, no total, o valor de um prejuízo — e é isso que precisa ser dito antes da contratação, não depois do sinistro.',
      lembrarNaProva: [
        'PRÊMIO é pago pelo segurado; INDENIZAÇÃO é paga pela seguradora.',
        'Franquia é participação do segurado no prejuízo.',
        'Em seguro de DANO, a indenização não pode superar o prejuízo.',
        'CNSP normatiza, SUSEP supervisiona; saúde fica com a ANS.',
      ],
      revisaoRapida: [
        'Prêmio: o que o segurado paga.',
        'Sinistro: o evento coberto que ocorreu.',
        'Apólice: o contrato, com coberturas e exclusões.',
        'Franquia: participação do segurado no prejuízo.',
        'Princípio indenizatório: reparar, nunca lucrar.',
      ],
    },
    exemplos: [
      {
        titulo: 'Franquia não é carência',
        corpo:
          'FRANQUIA é valor: a parcela do prejuízo que fica com o segurado. CARÊNCIA é tempo: o período inicial em que a cobertura ainda não vale. São conceitos de eixos diferentes, e a troca entre eles é um dos erros mais comuns do tema.',
      },
    ],
    conceitoChave:
      'Seguro de dano repara prejuízo — e é essa finalidade que limita a indenização ao tamanho da perda.',
    pontosChave: [
      'Prêmio: pago pelo segurado',
      'Indenização: paga pela seguradora',
      'Franquia: participação no prejuízo',
      'Indenizatório: não pode superar a perda',
      'CNSP normatiza · SUSEP supervisiona',
    ],
    erroComum:
      'Chamar de prêmio o valor que o cliente recebe. Prêmio é o que ele PAGA; o que ele recebe é indenização ou capital segurado.',
    alertaProva:
      'A banca gosta de cenários com duas apólices sobre o mesmo bem. Em seguro de dano, a soma das indenizações não pode exceder o prejuízo.',
    tabela: {
      titulo: 'Vocabulário do contrato',
      colunas: ['Termo', 'Quem paga / o que é'],
      linhas: [
        ['Prêmio', 'Valor pago pelo segurado à seguradora'],
        ['Sinistro', 'Ocorrência do evento coberto'],
        ['Indenização', 'Valor pago pela seguradora ao segurado'],
        ['Franquia', 'Parcela do prejuízo que fica com o segurado'],
        ['Apólice', 'Documento que formaliza o contrato'],
      ],
    },
    perguntaRapida: {
      enunciado: 'No contrato de seguro, o prêmio corresponde ao:',
      alternativas: [
        'Valor que a seguradora paga ao segurado após o sinistro',
        'Valor que o segurado paga à seguradora pela cobertura',
        'Parcela do prejuízo que fica a cargo do segurado',
        'Limite máximo de indenização previsto na apólice',
      ],
      correta: 1,
      explicacao:
        'Prêmio é o preço do seguro, pago pelo segurado. O que a seguradora paga é indenização; a parcela do segurado no prejuízo é a franquia.',
    },
    mapaMental: {
      id: 'mm-seg',
      rotulo: 'Contrato de seguro',
      revisao: true,
      filhos: [
        { id: 'mm-seg-premio', rotulo: 'Prêmio', detalhe: 'Pago PELO segurado', revisao: true },
        { id: 'mm-seg-sinistro', rotulo: 'Sinistro', detalhe: 'O evento coberto', revisao: true },
        { id: 'mm-seg-indeniz', rotulo: 'Indenização', detalhe: 'Paga PELA seguradora', revisao: true },
        {
          id: 'mm-seg-franquia',
          rotulo: 'Franquia',
          detalhe: 'Valor · não confundir com carência',
          revisao: true,
        },
        {
          id: 'mm-seg-princ',
          rotulo: 'Princípio indenizatório',
          detalhe: 'Repara, não gera lucro',
          revisao: true,
        },
        { id: 'mm-seg-reg', rotulo: 'CNSP e SUSEP', detalhe: 'Normatiza · supervisiona', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'Você paga um valor pequeno todo mês — o prêmio — para a seguradora cobrir um prejuízo grande se ele acontecer.',
      exemplo:
        'O carro bate e o conserto fica abaixo da franquia: você paga tudo. Acima dela, a seguradora paga a diferença.',
      analogia:
        'É um bolão em que todos contribuem e só quem sofre o acidente recebe. Por isso ninguém recebe mais do que perdeu.',
      iniciante:
        'Seguro é trocar um risco grande e raro por um custo pequeno e certo. O prêmio é esse custo.',
    },
    niveis: {
      entenda:
        'Prêmio é o que você paga; indenização é o que a seguradora paga. Em seguro de bens, ela nunca paga mais do que o prejuízo.',
      aprofunde:
        'O princípio indenizatório não existe por moralismo: ele é condição de viabilidade do produto. Se a indenização pudesse superar o prejuízo, o segurado passaria a ter interesse econômico na ocorrência do sinistro — risco moral em estado puro —, e a frequência de sinistros deixaria de ser um fenômeno estatístico previsível para virar consequência do próprio contrato. É a mesma razão de existir a franquia: ao manter uma parcela do prejuízo com o segurado, ela preserva o incentivo ao cuidado e elimina os sinistros de baixo valor, cujo custo administrativo de regulação superaria a indenização. Toda a precificação do seguro depende dessa previsibilidade — o prêmio é calculado sobre a frequência e a severidade esperadas de uma carteira, e a lei dos grandes números só funciona se o comportamento do segurado não se alterar por causa da cobertura. Daí decorrem também as exclusões de dolo e de agravamento intencional do risco: não são letras miúdas oportunistas, são o que impede o contrato de destruir a própria base atuarial.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },

  {
    id: 'c-seguro-vida',
    microtemaId: 'm2.5',
    titulo: 'Seguro de vida: capital, beneficiário e sucessão',
    objetivo: 'Explicar por que o seguro de vida não integra o inventário e como se distingue do seguro de dano.',
    etiquetas: ['ESSENCIAL', 'ATENCAO'],
    resumo30s:
      'Seguro de pessoas paga capital contratado, não repara prejuízo. O beneficiário é de livre indicação, o capital NÃO entra em inventário nem responde por dívidas do falecido, e é possível cumular apólices — o que em seguro de dano seria vedado.',
    explicacao: {
      oQueE:
        'Seguro de vida é modalidade de seguro de pessoas em que a seguradora paga um capital previamente contratado na ocorrência do evento previsto — morte, invalidez ou sobrevivência.',
      porQueImporta:
        'É a ferramenta mais direta de planejamento sucessório disponível a qualquer cliente: o capital chega ao beneficiário rapidamente, sem depender de inventário e sem ser alcançado pelos credores do falecido.',
      paraQueServe:
        'Proteger a renda de quem depende do segurado e prover liquidez imediata num momento em que o patrimônio costuma estar bloqueado.',
      comoFunciona: [
        'Seguro de pessoas paga CAPITAL SEGURADO — valor contratado — e não indenização por prejuízo. Não se aplica a ele o princípio indenizatório.',
        'Por isso é POSSÍVEL CUMULAR apólices: o cliente pode ter vários seguros de vida e receber de todos. Em seguro de dano isso seria vedado.',
        'O BENEFICIÁRIO é de livre indicação e pode ser alterado a qualquer tempo, salvo cláusula de irrevogabilidade.',
        'O capital NÃO integra o inventário, NÃO é considerado herança e NÃO responde por dívidas do segurado falecido.',
        'Não há SUB-ROGAÇÃO em seguro de pessoas: a seguradora que paga o capital não assume o direito de cobrar o causador do dano — o que ocorre normalmente em seguro de dano.',
      ],
      exemploSimples:
        'O segurado falece deixando dívidas. Os credores podem se habilitar no inventário para receber do patrimônio, mas não alcançam o capital do seguro de vida, que vai diretamente ao beneficiário indicado.',
      exemploAplicado:
        'Um cliente com empresa e patrimônio ilíquido pergunta como garantir que a família tenha caixa imediato se ele faltar. O seguro de vida responde exatamente a isso: enquanto o inventário corre — e ele pode levar anos —, o capital do seguro é pago ao beneficiário sem passar por partilha e sem ser retido por dívidas. É liquidez numa hora em que o resto do patrimônio está travado.',
      lembrarNaProva: [
        'Seguro de pessoas paga CAPITAL, não indenização por prejuízo.',
        'Pode CUMULAR apólices — em seguro de dano, não.',
        'O capital não entra em inventário nem responde por dívidas.',
        'Não há sub-rogação em seguro de pessoas.',
      ],
      revisaoRapida: [
        'Seguro de pessoas paga capital previamente contratado.',
        'Não se aplica o princípio indenizatório.',
        'Cumulação de apólices é permitida.',
        'Capital não integra herança nem responde por dívidas.',
        'Sem sub-rogação contra o causador do dano.',
      ],
    },
    exemplos: [
      {
        titulo: 'Dano × pessoas, lado a lado',
        corpo:
          'Seguro de DANO: indeniza prejuízo, obedece ao princípio indenizatório, não admite cumulação para lucro e gera sub-rogação. Seguro de PESSOAS: paga capital contratado, admite cumulação, não gera sub-rogação e não integra inventário. Quase toda pegadinha do tema aplica a regra de um ao outro.',
      },
    ],
    conceitoChave:
      'O capital do seguro de vida não é herança: ele nasce em favor do beneficiário, e não do espólio.',
    pontosChave: [
      'Capital contratado, não indenização',
      'Cumulação de apólices permitida',
      'Fora do inventário',
      'Não responde por dívidas do falecido',
      'Sem sub-rogação',
    ],
    erroComum:
      'Tratar o capital do seguro de vida como parte da herança. Ele não integra o inventário e não pode ser alcançado pelos credores do segurado.',
    alertaProva:
      'O tratamento tributário do capital pago ao beneficiário é matéria de legislação fiscal, sujeita a alteração. Confira a regra vigente antes de afirmar isenção.',
    tabela: {
      titulo: 'Seguro de dano × seguro de pessoas',
      colunas: ['Aspecto', 'Dano', 'Pessoas'],
      linhas: [
        ['O que paga', 'Indenização do prejuízo', 'Capital contratado'],
        ['Princípio indenizatório', 'Aplica-se', 'Não se aplica'],
        ['Cumulação de apólices', 'Vedada para lucro', 'Permitida'],
        ['Sub-rogação', 'Sim', 'Não'],
        ['Integra inventário', 'O bem, sim', 'O capital, não'],
      ],
    },
    perguntaRapida: {
      enunciado: 'O capital pago ao beneficiário de um seguro de vida em razão da morte do segurado:',
      alternativas: [
        'Integra o inventário e é partilhado entre os herdeiros',
        'Não integra o inventário nem responde por dívidas do falecido',
        'Só é pago após a conclusão da partilha',
        'É limitado ao valor do patrimônio deixado pelo segurado',
      ],
      correta: 1,
      explicacao:
        'O capital nasce em favor do beneficiário indicado. Não é herança, não entra em partilha e não é alcançado pelos credores do segurado.',
    },
    mapaMental: {
      id: 'mm-vida',
      rotulo: 'Seguro de vida',
      revisao: true,
      filhos: [
        {
          id: 'mm-vida-capital',
          rotulo: 'Capital contratado',
          detalhe: 'Não repara prejuízo',
          revisao: true,
        },
        {
          id: 'mm-vida-cumul',
          rotulo: 'Cumulação permitida',
          detalhe: 'Em seguro de dano, vedada',
          revisao: true,
        },
        {
          id: 'mm-vida-suc',
          rotulo: 'Fora do inventário',
          detalhe: 'Não é herança · não paga dívida',
          revisao: true,
          filhos: [
            { id: 'mm-vida-liq', rotulo: 'Liquidez imediata', detalhe: 'Enquanto o inventário corre', revisao: true },
          ],
        },
        { id: 'mm-vida-subro', rotulo: 'Sem sub-rogação', detalhe: 'Diferente do seguro de dano', revisao: true },
      ],
    },
    reexplicacoes: {
      simples:
        'O seguro de vida paga um valor combinado a quem você escolher. Esse dinheiro não entra na partilha e não é usado para pagar suas dívidas.',
      exemplo:
        'O segurado morre com dívidas. Os credores buscam o patrimônio no inventário, mas não alcançam o capital do seguro, que vai direto ao beneficiário.',
      analogia:
        'É um envelope endereçado antes da viagem: ele não passa pela mesa da partilha, vai direto a quem estava escrito nele.',
      iniciante:
        'É um valor combinado que a seguradora paga para quem você indicar, se algo acontecer com você. Chega rápido e não depende de processo.',
    },
    niveis: {
      entenda:
        'O seguro de vida paga um valor combinado ao beneficiário indicado. Esse dinheiro não é herança, não entra em inventário e não paga dívidas do falecido.',
      aprofunde:
        'A exclusão do capital do inventário decorre de uma construção jurídica precisa: o direito do beneficiário não é derivado do segurado, é originário — nasce nele por força do contrato, e não por transmissão hereditária. Essa distinção é a razão de o capital não integrar o espólio e de os credores do falecido não o alcançarem, e é também o que faz do seguro de vida um instrumento de planejamento sucessório e não apenas de proteção de renda. As consequências práticas são relevantes: o beneficiário pode ser pessoa fora da ordem de vocação hereditária, e o capital não se sujeita à regra da legítima que restringe a disposição do patrimônio — embora a jurisprudência module esse alcance quando o seguro é usado de forma manifestamente fraudulenta para esvaziar a herança de herdeiros necessários. Há ainda o prazo de carência legal aplicável ao suicídio, cuja função é a mesma da franquia no seguro de dano: preservar a base atuarial contra a contratação motivada pela intenção de acionar a cobertura. Passado o prazo, a cobertura é devida sem discussão sobre premeditação, e é essa objetividade que dá segurança ao contrato.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },
]
