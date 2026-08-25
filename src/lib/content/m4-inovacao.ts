import type { Macrotema } from '../types'
import { CONCEITOS_4_4_CRIPTO } from './m4-4-cripto'
import { CONCEITOS_4_5 } from './m4-5-open'
import { CONCEITOS_4_6 } from './m4-6-ia'
import { CONCEITOS_4_2, CONCEITOS_4_3, CONCEITOS_4_4, CONCEITOS_4_7 } from './m4-resto'

/** MACROTEMA 4 — Inovação e desenvolvimento do mercado. */
export const M4: Macrotema = {
  id: 'm4',
  codigo: 'INOV',
  nome: 'Inovação e desenvolvimento de mercado',
  resumo: 'Open Finance, Pix, ativos digitais e finanças sustentáveis. O bloco novo da CPA.',
  peso: 0.1,
  pesoVerificado: true,
  ordem: 4,
  microtemas: [
    {
      id: 'm4.1',
      macrotemaId: 'm4',
      codigo: '4.1',
      nome: 'ESG no mercado financeiro',
      ordem: 1,
      preRequisitos: [],
      conceitos: [
        {
          id: 'c-asg',
          microtemaId: 'm4.1',
          titulo: 'ASG e greenwashing',
          objetivo: 'Reconhecer os três pilares ASG e identificar greenwashing.',
          etiquetas: ['ESSENCIAL', 'ATENCAO'],
          resumo30s:
            'ASG são três pilares: Ambiental, Social e Governança. Rótulo "sustentável" sem critério verificável e sem divulgação é greenwashing — e é infração de conduta, não só problema de marketing.',
          explicacao: {
            oQueE:
              'ASG (em inglês, ESG) é o conjunto de critérios ambientais, sociais e de governança usados para avaliar uma empresa ou um investimento além do retorno financeiro.',
            porQueImporta:
              'ESG entrou no programa oficial com microtemas próprios e o macrotema vale 10% da prova. O corte cobrado é quase sempre o greenwashing e o pilar de governança, que todo mundo esquece.',
            paraQueServe:
              'Incorporar riscos e oportunidades que o balanço não captura — risco climático, risco reputacional, risco de governança.',
            comoFunciona: [
              'AMBIENTAL: emissões, uso de recursos naturais, resíduos, risco climático físico e de transição.',
              'SOCIAL: relações com empregados, comunidades, clientes e cadeia de fornecedores.',
              'GOVERNANÇA: estrutura de controle, conselho, transparência, combate à corrupção, direitos dos minoritários.',
              'Um fundo só pode se apresentar como sustentável se houver critério objetivo, metodologia divulgada e aderência verificável — a autorregulação da ANBIMA trata do uso desse rótulo.',
              'GREENWASHING é usar o rótulo sem substância. Além de enganar o investidor, configura violação de conduta.',
              'ASG não é promessa de retorno superior nem garantia de nada — é uma dimensão adicional de análise.',
            ],
            exemploSimples:
              'Um fundo se chama "Fundo Verde" mas investe em qualquer setor, sem política de seleção divulgada nem métricas. O nome sugere um compromisso que a carteira não tem: é greenwashing.',
            exemploAplicado:
              'Um fundo se apresenta como sustentável porque exclui empresas de tabaco, mas não tem política formal, não reporta indicadores e não integra critérios ambientais na seleção dos demais ativos. Chamar esse fundo de sustentável no material de venda é greenwashing.',
            lembrarNaProva: [
              'A = Ambiental, S = Social, G = Governança.',
              'Rótulo sustentável exige metodologia divulgada e verificável.',
              'Greenwashing é infração de conduta, não apenas marketing ruim.',
              'ASG não garante retorno melhor.',
            ],
            revisaoRapida: [
              'E de ambiental, S de social e G de governança — os três contam.',
              'Governança é o pilar mais esquecido e o mais cobrado.',
              'Greenwashing é alegar sustentabilidade sem prática nem evidência.',
              'Rótulo ESG exige política formal, critério e transparência.',
            ],
          },
          exemplos: [
            {
              titulo: 'Governança esquecida',
              corpo:
                'Muita gente reduz ASG a "meio ambiente". O G costuma ser o pilar que mais destrói valor quando falha: fraude contábil, conselho capturado e conflito de interesses derrubam empresas inteiras.',
            },
          ],
          conceitoChave:
            'Rótulo sem metodologia divulgada e verificável é greenwashing — e isso é problema de conduta.',
          pontosChave: [
            'Três pilares: Ambiental, Social, Governança',
            'Rótulo exige critério objetivo e divulgação',
            'Greenwashing viola dever de informação',
            'ASG não é garantia de retorno',
            'Governança é o pilar mais subestimado',
          ],
          erroComum:
            'Tratar ASG como sinônimo de "ambiental" e ignorar governança — que é justamente onde a maioria dos escândalos acontece.',
          alertaProva:
            'Se o enunciado diz que o fundo "se apresenta como sustentável, mas não divulga metodologia", a resposta envolve greenwashing e falha no dever de informar.',
          tabela: {
            titulo: 'Os três pilares',
            colunas: ['Pilar', 'Exemplos de tema'],
            linhas: [
              ['Ambiental', 'Emissões, água, resíduos, risco climático'],
              ['Social', 'Trabalho, diversidade, comunidade, fornecedores'],
              ['Governança', 'Conselho, transparência, anticorrupção, minoritários'],
            ],
          },
          perguntaRapida: {
            enunciado:
              'Um fundo se apresenta como sustentável, mas não divulga metodologia nem critérios de seleção. Isso caracteriza:',
            alternativas: [
              'Prática aceitável, desde que a rentabilidade seja boa',
              'Greenwashing, com violação do dever de informação',
              'Estratégia de gestão ativa protegida por sigilo',
              'Enquadramento automático como fundo ASG',
            ],
            correta: 1,
            explicacao:
              'Usar o rótulo sem critério verificável e sem divulgação é greenwashing e fere o dever de prestar informação clara ao investidor.',
          },
          mapaMental: {
            id: 'mm-asg',
            rotulo: 'ASG',
            revisao: true,
            filhos: [
              { id: 'mm-asg-a', rotulo: 'Ambiental', detalhe: 'Emissões, recursos, clima', revisao: true },
              { id: 'mm-asg-s', rotulo: 'Social', detalhe: 'Pessoas e comunidade', revisao: true },
              { id: 'mm-asg-g', rotulo: 'Governança', detalhe: 'Controle e transparência', revisao: true },
              {
                id: 'mm-asg-gw',
                rotulo: 'Greenwashing',
                detalhe: 'Rótulo sem metodologia = infração',
                revisao: true,
              },
              { id: 'mm-asg-nao', rotulo: 'Não garante retorno', revisao: true },
            ],
          },
          reexplicacoes: {
            simples:
              'ASG olha três coisas na empresa: como ela trata o meio ambiente, como trata as pessoas e como ela é administrada.',
            exemplo:
              'Duas empresas dão o mesmo lucro. Uma polui e tem conselho capturado; a outra não. A segunda tem menos risco de multa, processo e escândalo — e isso vale dinheiro.',
            analogia:
              'É como avaliar um inquilino: não basta ver se ele tem renda. Você também quer saber se cuida do imóvel e se é confiável.',
            iniciante:
              'ASG é um jeito de avaliar investimentos olhando além do lucro: o impacto no ambiente, nas pessoas e a qualidade da administração. Quando uma empresa se diz sustentável sem provar, chamamos isso de greenwashing.',
          },
          niveis: {
            entenda:
              'ESG é olhar a empresa por três lentes além do lucro: como trata o meio ambiente, as pessoas e as próprias regras internas.',
            aprofunde:
              'No Brasil a autorregulação chegou antes da regulação: as Regras e Procedimentos Anbima para fundos sustentáveis separam o fundo que tem o investimento sustentável como objetivo, identificado como IS, daquele que apenas integra questões ESG na análise — e só o primeiro pode se apresentar como sustentável no nome. A Resolução CVM 175 tratou do tema no artigo 49, exigindo que a denominação corresponda à política efetivamente adotada. No plano internacional, os Princípios para Investimento Responsável, o PRI, estabeleceram o compromisso voluntário que difundiu a agenda entre gestores. O desafio prático que o programa cita é a comparabilidade: sem padrão único de divulgação, notas ESG de provedores diferentes discordam sobre a mesma empresa.',
          },
          versao: 2,
          atualizadoEm: '2026-08-24',
          minutosEstimados: 6,
        },
      ],
    },
    {
      id: 'm4.2',
      macrotemaId: 'm4',
      codigo: '4.2',
      nome: 'Introdução aos investimentos ESG',
      ordem: 2,
      preRequisitos: ['m4.1'],
      conceitos: CONCEITOS_4_2,
    },
    {
      id: 'm4.3',
      macrotemaId: 'm4',
      codigo: '4.3',
      nome: 'Identificação dos fundos de investimento sustentável (IS) e fundos que integram questões ESG',
      ordem: 3,
      preRequisitos: ['m4.2'],
      conceitos: CONCEITOS_4_3,
    },
    {
      id: 'm4.4',
      macrotemaId: 'm4',
      codigo: '4.4',
      nome: 'Finanças descentralizadas (DEFI)',
      ordem: 4,
      preRequisitos: [],
      conceitos: [...CONCEITOS_4_4, ...CONCEITOS_4_4_CRIPTO],
    },
    {
      id: 'm4.5',
      macrotemaId: 'm4',
      codigo: '4.5',
      nome: 'Open finance, open investment e open insurance',
      ordem: 5,
      preRequisitos: [],
      conceitos: [
        {
          id: 'c-openfinance',
          microtemaId: 'm4.5',
          titulo: 'Open Finance: o dado é do cliente',
          objetivo: 'Explicar o princípio do consentimento e o que muda para o atendimento.',
          etiquetas: ['ESSENCIAL', 'ENTENDER'],
          resumo30s:
            'Open Finance permite ao cliente autorizar o compartilhamento dos próprios dados financeiros entre instituições. O dado pertence ao cliente, o consentimento é específico, temporário e revogável a qualquer momento.',
          explicacao: {
            oQueE:
              'Um ecossistema regulado pelo Banco Central em que o cliente autoriza instituições a compartilharem seus dados e a iniciarem pagamentos em seu nome.',
            porQueImporta:
              'Open Finance é o item de inovação mais provável de virar questão situacional, porque muda a relação com o cliente: o dado deixa de ser do banco e passa a ser dele.',
            paraQueServe:
              'Aumentar a concorrência e permitir ofertas mais adequadas, porque a instituição passa a enxergar o cliente por inteiro, e não só o que ele tem na casa dela.',
            comoFunciona: [
              'Princípio central: o dado financeiro pertence ao CLIENTE, não à instituição que o coletou.',
              'O compartilhamento só acontece mediante consentimento explícito, com finalidade e prazo definidos.',
              'O consentimento é revogável a qualquer momento, pelo próprio cliente.',
              'Abrange dados cadastrais, de produtos e serviços, além do iniciador de transação de pagamento.',
              'A adesão do cliente é sempre voluntária — recusar não pode gerar restrição de atendimento.',
              'A LGPD se aplica em paralelo: finalidade, necessidade e transparência continuam valendo.',
            ],
            exemploSimples:
              'Cliente com conta em três bancos autoriza que o banco A veja o histórico dos bancos B e C. Com a visão completa, o banco A pode oferecer crédito mais barato porque enxerga um risco menor.',
            exemploAplicado:
              'O cliente quer uma taxa melhor no crédito e autoriza a instituição concorrente a acessar seu histórico de relacionamento. Com esse histórico, a concorrente enxerga um risco menor do que veria por um cadastro isolado e oferece juros mais baixos — foi o consentimento do cliente que gerou a proposta.',
            lembrarNaProva: [
              'O dado é do cliente.',
              'Consentimento: explícito, com finalidade, prazo e revogável.',
              'Adesão voluntária — recusa não pode prejudicar o atendimento.',
              'Regulado pelo Banco Central; LGPD se aplica em conjunto.',
            ],
            revisaoRapida: [
              'O dado é do cliente, não da instituição.',
              'O compartilhamento exige consentimento explícito, com prazo e finalidade.',
              'O consentimento pode ser revogado a qualquer momento.',
              'Compartilhar dado não é transferir conta nem produto.',
            ],
          },
          exemplos: [
            {
              titulo: 'O que NÃO é Open Finance',
              corpo:
                'Não é acesso livre a dados. Sem consentimento específico e vigente, não há compartilhamento — e a instituição que acessar fora dessa moldura comete infração.',
            },
          ],
          conceitoChave: 'Sem consentimento explícito e vigente, não há compartilhamento. Ponto.',
          pontosChave: [
            'Dado pertence ao cliente',
            'Consentimento explícito, com finalidade e prazo',
            'Revogável a qualquer momento',
            'Adesão voluntária',
            'Regulação do BACEN + LGPD',
          ],
          erroComum:
            'Entender Open Finance como "bancos trocando dados entre si". A troca só existe quando o cliente autoriza, caso a caso.',
          alertaProva:
            'A palavra-chave que resolve quase toda questão de Open Finance é CONSENTIMENTO.',
          tabela: {
            titulo: 'Características do consentimento',
            colunas: ['Atributo', 'Regra'],
            linhas: [
              ['Forma', 'Explícito, nunca presumido'],
              ['Finalidade', 'Específica e informada'],
              ['Prazo', 'Determinado'],
              ['Revogação', 'A qualquer momento, pelo cliente'],
              ['Adesão', 'Voluntária'],
            ],
          },
          perguntaRapida: {
            enunciado: 'No Open Finance, o compartilhamento de dados do cliente ocorre:',
            alternativas: [
              'Automaticamente entre instituições autorizadas pelo BACEN',
              'Mediante consentimento explícito, específico e revogável do cliente',
              'Sempre que houver interesse comercial da instituição',
              'Somente por decisão judicial',
            ],
            correta: 1,
            explicacao:
              'O consentimento do cliente é a condição do compartilhamento, e ele pode revogá-lo a qualquer momento.',
          },
          mapaMental: {
            id: 'mm-of',
            rotulo: 'Open Finance',
            revisao: true,
            filhos: [
              { id: 'mm-of-1', rotulo: 'Dado é do cliente', revisao: true },
              {
                id: 'mm-of-2',
                rotulo: 'Consentimento',
                revisao: true,
                filhos: [
                  { id: 'mm-of-3', rotulo: 'Explícito', revisao: true },
                  { id: 'mm-of-4', rotulo: 'Com finalidade e prazo' },
                  { id: 'mm-of-5', rotulo: 'Revogável', revisao: true },
                ],
              },
              { id: 'mm-of-6', rotulo: 'Adesão voluntária' },
              { id: 'mm-of-7', rotulo: 'BACEN + LGPD' },
            ],
          },
          reexplicacoes: {
            simples:
              'Open Finance é você poder mandar seu banco mostrar seu histórico a outro banco — e poder cancelar isso quando quiser.',
            exemplo:
              'Você tem conta há 10 anos no banco A e quer crédito no banco B. Autorizando o compartilhamento, o banco B vê que você é bom pagador e cobra juros menores.',
            analogia:
              'É como o histórico escolar: é seu, você decide para qual faculdade enviar, e pode parar de enviar quando quiser.',
            iniciante:
              'Seus dados bancários são seus, não do banco. O Open Finance é o sistema que permite você autorizar outra instituição a ver esses dados, para conseguir ofertas melhores.',
          },
          niveis: {
            entenda:
              'Open Finance é o cliente poder levar o próprio histórico bancário para outra instituição e conseguir uma oferta melhor com ele.',
            aprofunde:
              'O arranjo nasceu da Resolução Conjunta nº 1/2020 do BACEN e do CMN e avança por fases, começando por dados cadastrais e de conta e chegando a serviços de iniciação de pagamento. O consentimento é granular e temporário: o cliente escolhe quais dados, para qual instituição e por quanto tempo, e a revogação precisa ser tão simples quanto a concessão — exigência que conversa diretamente com a LGPD. O mesmo desenho se estende ao open investment, com a portabilidade de valores mobiliários tratada nas Resoluções CVM 209, 210 e 229, e ao open insurance no setor de seguros. O efeito de fundo é a desintermediação: reduzir o custo de troca de instituição transfere poder de barganha para o cliente.',
          },
          versao: 2,
          atualizadoEm: '2026-08-24',
          minutosEstimados: 6,
        },
        ...CONCEITOS_4_5,
      ],
    },
    {
      id: 'm4.6',
      macrotemaId: 'm4',
      codigo: '4.6',
      nome: 'Inteligência artificial',
      ordem: 6,
      preRequisitos: [],
      conceitos: CONCEITOS_4_6,
    },
    {
      id: 'm4.7',
      macrotemaId: 'm4',
      codigo: '4.7',
      nome: 'Fintechs e meios de pagamento',
      ordem: 7,
      preRequisitos: [],
      conceitos: CONCEITOS_4_7,
    },
  ],
}
