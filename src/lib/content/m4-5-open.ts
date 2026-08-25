import type { Conceito } from '../types'

/**
 * MICROTEMA 4.5 — Open finance, open investment e open insurance.
 *
 * `m4-inovacao.ts` já traz o conceito geral. Esta aula existe para desfazer a
 * confusão que o próprio nome do microtema produz: os três termos não são três
 * sistemas paralelos, nem três fases de um mesmo sistema. Open investment é
 * ESCOPO dentro do open finance; open insurance é um sistema SEPARADO, sob
 * outro regulador.
 *
 * Fontes lidas no texto consolidado, em 25/08/2026:
 *
 * | Fonte | O que sustenta |
 * |---|---|
 * | Res. Conjunta CMN/BCB 1/2020, arts. 1º a 5º e 10 | Objeto, princípios, escopo e consentimento |
 * | Res. Conjunta 4/2022 | Renomeia o sistema para Open Finance, a partir de 2/5/2022 |
 * | Res. Conjunta 7/2023 | Nova redação ao art. 10, § 1º, III — retira o teto de 12 meses |
 * | Res. CNSP 415/2021 e Circular Susep 635/2021 | Open insurance e a sociedade iniciadora |
 *
 * O achado do lote está no consentimento: comparando a redação original com a
 * consolidada, o limite de doze meses ("limitado a doze meses") foi SUBSTITUÍDO
 * por "prazo de validade compatível com as finalidades". Material corrente
 * ainda ensina o teto fixo.
 */

export const CONCEITOS_4_5: Conceito[] = [
  {
    id: 'c-open-investment',
    microtemaId: 'm4.5',
    titulo: 'Open investment e open insurance: um sistema ou três?',
    objetivo:
      'Distinguir o escopo do open finance do sistema de seguros aberto e aplicar as regras de consentimento.',
    etiquetas: ['ESSENCIAL', 'PEGADINHA'],
    resumo30s:
      'Open finance é UM sistema, sob CMN e Bacen — e "open banking" é só o nome antigo dele. Open investment não é sistema à parte: é o alcance do open finance aos dados de produtos de investimento. Open insurance é SISTEMA SEPARADO, sob CNSP e Susep, com norma e participantes próprios.',
    explicacao: {
      oQueE:
        'Open finance é o compartilhamento padronizado de dados e serviços entre instituições autorizadas pelo Banco Central, mediante consentimento do cliente. Open insurance é o sistema equivalente no mercado de seguros, previdência aberta e capitalização, criado por norma do CNSP e da Susep.',
      porQueImporta:
        'Porque a nomenclatura sugere três coisas onde há duas, e a prova explora exatamente isso. Além disso, a regra de consentimento mudou e é o ponto em que o material desatualizado erra com mais frequência.',
      paraQueServe:
        'Explicar ao cliente o que ele está autorizando, por quanto tempo, para qual finalidade e o que pode revogar — e saber a quem reclamar em cada sistema.',
      comoFunciona: [
        'OPEN FINANCE é o nome atual do sistema criado como Open Banking. A mudança veio pela Resolução Conjunta 4/2022 e foi só de denominação: a norma-mãe continua sendo a Resolução Conjunta 1/2020.',
        'OBJETIVOS: incentivar a inovação, promover a concorrência, aumentar a eficiência do SFN e do Sistema de Pagamentos Brasileiro e promover a cidadania financeira.',
        'PRINCÍPIOS: transparência, segurança e privacidade dos dados, qualidade dos dados, tratamento não discriminatório, reciprocidade e interoperabilidade — inclusive com iniciativas dos mercados de seguros, previdência e capitalização.',
        'ESCOPO: dados de canais de atendimento, de produtos e serviços, de cadastro e de transações — abrangendo contas, crédito, câmbio, credenciamento, produtos com natureza de investimento, seguros e previdência aberta — e os serviços de iniciação de transação de pagamento e de encaminhamento de proposta de crédito.',
        'É por isso que "open investment" não é um sistema: os dados de produtos com natureza de investimento já estão dentro do escopo do open finance. O termo descreve uma fase de implantação, não uma norma separada.',
        'OPEN INSURANCE é outro sistema: nasce da Res. CNSP 415/2021 e da Circular Susep 635/2021, tem participantes próprios — entre eles a sociedade iniciadora de serviço de seguro, que agrega dados e inicia serviços sem jamais deter recursos do cliente — e responde à Susep, não ao Bacen.',
      ],
      exemploSimples:
        'Um aplicativo mostra num só lugar contas de três bancos: isso é open finance. Se mostra também as apólices de duas seguradoras, está usando também o open insurance — sistema diferente, mesmo cliente.',
      exemploAplicado:
        'Um cliente autoriza um agregador a ver seus dados para receber uma proposta de portabilidade de crédito. A norma proíbe informar à instituição transmissora QUAL é a finalidade do compartilhamento — e a razão é competitiva: se o banco de origem soubesse que o cliente está cotando portabilidade, poderia retaliar ou antecipar-se. É uma proteção discreta, quase invisível ao usuário, e é ela que faz o sistema servir à concorrência em vez de virar radar de retenção.',
      lembrarNaProva: [
        'Open banking e open finance são o mesmo sistema; mudou o nome em 2022.',
        'Open investment é escopo do open finance, não sistema separado.',
        'Open insurance é sistema separado, sob CNSP e Susep.',
        'O consentimento é livre, informado, prévio, inequívoco e eletrônico.',
        'É vedado consentimento por contrato de adesão, aceite pré-marcado ou forma presumida.',
      ],
      revisaoRapida: [
        'Dois sistemas, três nomes.',
        'Bacen para finanças; Susep para seguros.',
        'Consentimento por finalidade determinada.',
        'Nada de aceite pré-marcado.',
        'A transmissora não sabe a finalidade.',
      ],
    },
    exemplos: [
      {
        titulo: 'O que o consentimento precisa conter',
        corpo:
          'Linguagem clara, finalidades determinadas, prazo de validade compatível com essas finalidades, identificação da instituição transmissora ou detentora da conta, discriminação dos dados ou serviços compartilhados e identificação do cliente. Faltando qualquer um, o consentimento não atende à norma.',
      },
      {
        titulo: 'A sociedade iniciadora do open insurance',
        corpo:
          'É a figura equivalente, no mercado de seguros, à instituição iniciadora do open finance: presta agregação de dados, painéis de acompanhamento e, com consentimento, inicia serviços em nome do cliente — sem nunca deter os recursos pagos por ele, salvo a própria remuneração.',
      },
    ],
    conceitoChave:
      'São dois sistemas com reguladores diferentes e uma ponte entre eles: a interoperabilidade prevista nos princípios do open finance.',
    pontosChave: [
      'Open banking virou open finance em 2022',
      'Open investment é escopo, não sistema',
      'Open insurance é CNSP e Susep',
      'Consentimento por finalidade',
      'Aceite pré-marcado é vedado',
    ],
    erroComum:
      'Tratar open investment e open insurance como fases do open finance. A primeira é escopo do mesmo sistema; a segunda é sistema próprio, com norma, regulador e participantes distintos.',
    alertaProva:
      'O consentimento NÃO tem mais teto fixo de doze meses. A redação original da Res. Conjunta 1/2020 dizia "limitado a doze meses"; a Res. Conjunta 7/2023 substituiu por "prazo de validade compatível com as finalidades". Material antigo ainda ensina o teto — e alternativa que o afirme está desatualizada.',
    tabela: {
      titulo: 'Os dois sistemas',
      colunas: ['', 'Open finance', 'Open insurance'],
      linhas: [
        ['Norma de origem', 'Res. Conjunta CMN/BCB 1/2020', 'Res. CNSP 415/2021 e Circular Susep 635/2021'],
        ['Regulador', 'CMN e Banco Central', 'CNSP e Susep'],
        ['Participantes', 'Instituições autorizadas pelo Bacen', 'Supervisionadas da Susep e sociedades iniciadoras'],
        ['Abrange investimentos?', 'Sim — está no escopo de dados', 'Não'],
        ['Ponte entre eles', 'Princípio da interoperabilidade', 'Princípio da interoperabilidade'],
      ],
    },
    perguntaRapida: {
      enunciado: 'Sobre a relação entre open finance, open investment e open insurance:',
      alternativas: [
        'São três sistemas independentes, cada um com norma e regulador próprios',
        'Open investment integra o escopo do open finance; open insurance é sistema separado, sob CNSP e Susep',
        'Open insurance é a quarta fase do open finance, sob o Banco Central',
        'Open finance substituiu os outros dois a partir de 2022',
      ],
      correta: 1,
      explicacao:
        'Dois sistemas, não três: os dados de produtos com natureza de investimento já constam do escopo do open finance, enquanto o open insurance nasce de norma do CNSP e da Susep.',
    },
    mapaMental: {
      id: 'mm-ofin',
      rotulo: 'Os sistemas abertos',
      revisao: true,
      filhos: [
        {
          id: 'mm-ofin-of',
          rotulo: 'Open finance',
          detalhe: 'CMN e Bacen · ex-open banking',
          revisao: true,
          filhos: [
            { id: 'mm-ofin-of-esc', rotulo: 'Escopo', detalhe: 'Contas, crédito, câmbio, investimento, seguro', revisao: true },
            { id: 'mm-ofin-of-inv', rotulo: 'Open investment', detalhe: 'Escopo, não sistema', revisao: true },
            { id: 'mm-ofin-of-serv', rotulo: 'Serviços', detalhe: 'Iniciação de pagamento e proposta de crédito' },
          ],
        },
        {
          id: 'mm-ofin-oi',
          rotulo: 'Open insurance',
          detalhe: 'CNSP e Susep · sistema separado',
          revisao: true,
          filhos: [
            { id: 'mm-ofin-oi-siss', rotulo: 'Sociedade iniciadora', detalhe: 'Nunca detém os recursos' },
          ],
        },
        {
          id: 'mm-ofin-cons',
          rotulo: 'Consentimento',
          detalhe: 'Livre, informado, prévio, inequívoco',
          revisao: true,
          filhos: [
            { id: 'mm-ofin-cons-fin', rotulo: 'Finalidade determinada', detalhe: 'E prazo compatível com ela', revisao: true },
            { id: 'mm-ofin-cons-ved', rotulo: 'Vedações', detalhe: 'Adesão, aceite pré-marcado, presunção', revisao: true },
            { id: 'mm-ofin-cons-sig', rotulo: 'Transmissora não sabe a finalidade', detalhe: 'Protege a concorrência' },
          ],
        },
      ],
    },
    reexplicacoes: {
      simples:
        'Open finance deixa você levar seus dados bancários para onde quiser. Open insurance faz o mesmo com seguros, mas é outro sistema, com outro órgão por trás.',
      exemplo:
        'Um app que junta suas contas de três bancos usa o open finance. Se juntar também suas apólices, está usando o open insurance.',
      analogia:
        'É como portabilidade de número de telefone: o dado é seu e vai com você. Só que existe uma portabilidade para telefone e outra para internet, com reguladores diferentes.',
      iniciante:
        'Seus dados financeiros são seus. Esses sistemas existem para você poder mostrá-los a quem quiser e receber ofertas melhores.',
    },
    niveis: {
      entenda:
        'Open finance é o sistema do Banco Central e já inclui dados de investimento. Open insurance é outro sistema, da Susep. E o consentimento precisa dizer para quê, por quanto tempo e sobre quais dados.',
      aprofunde:
        'O detalhe mais elegante da norma é a vedação do art. 10, § 4º: é proibido informar à instituição transmissora qual é a finalidade do compartilhamento. Parece uma minúcia e é o que impede que o sistema se converta no seu contrário. Sem essa regra, o banco de origem passaria a receber, em tempo real, um fluxo de sinais sobre quais clientes estão cotando crédito em concorrentes — e poderia usá-lo para reter, encarecer ou dificultar. Com ela, a instituição transmissora sabe que precisa entregar dados, e não sabe por quê. O outro ponto que merece leitura é o abandono do teto de doze meses para o consentimento. À primeira vista parece afrouxamento; na prática é o contrário. O teto fixo produzia um ritual de renovação anual em massa, que treinava o usuário a reconsentir por reflexo — exatamente o comportamento que a norma tenta evitar ao proibir aceite pré-marcado e consentimento presumido. Amarrar o prazo à finalidade obriga quem pede os dados a justificar por quanto tempo precisa deles, o que é uma exigência mais difícil de cumprir e mais fiel ao princípio da minimização que a LGPD já impunha.',
    },
    versao: 1,
    atualizadoEm: '2026-08-25',
    minutosEstimados: 8,
  },
]
