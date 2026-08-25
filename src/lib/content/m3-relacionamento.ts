import type { Macrotema } from '../types'
import { CONCEITOS_3_1 } from './m3-1-financas'
import { CONCEITOS_3_2 } from './m3-2-orientacoes'
import { CONCEITOS_3_4 } from './m3-4-conduta'

/** MACROTEMA 3 — Relacionamento com o cliente. */
export const M3: Macrotema = {
  id: 'm3',
  codigo: 'REL',
  nome: 'Relacionamento com o cliente (prospecção, atendimento e suporte)',
  resumo: 'Perfil, adequação, conduta e conflito de interesses. O bloco mais aplicado da prova.',
  peso: 0.3,
  pesoVerificado: true,
  ordem: 3,
  microtemas: [
    {
      id: 'm3.1',
      macrotemaId: 'm3',
      codigo: '3.1',
      nome: 'Finanças pessoais',
      ordem: 1,
      preRequisitos: [],
      conceitos: CONCEITOS_3_1,
    },
    {
      id: 'm3.2',
      macrotemaId: 'm3',
      codigo: '3.2',
      nome: 'Orientações financeiras para o cliente',
      ordem: 2,
      preRequisitos: ['m3.1'],
      conceitos: CONCEITOS_3_2,
    },
    {
      id: 'm3.3',
      macrotemaId: 'm3',
      codigo: '3.3',
      nome: 'Classificação das pessoas investidoras',
      ordem: 3,
      preRequisitos: [],
      conceitos: [
        {
          id: 'c-suitability',
          microtemaId: 'm3.3',
          titulo: 'Suitability: adequar o produto ao cliente',
          objetivo: 'Aplicar as três dimensões do suitability e reconhecer quando não se pode recomendar.',
          etiquetas: ['ESSENCIAL', 'ENTENDER', 'ATENCAO'],
          resumo30s:
            'Suitability avalia três coisas: objetivo, situação financeira e conhecimento. Sem perfil válido não se recomenda. Se o cliente insiste em produto inadequado, é preciso alertar por escrito e registrar.',
          explicacao: {
            oQueE:
              'O dever de verificar a adequação de um produto ao perfil do cliente antes de recomendá-lo.',
            porQueImporta:
              'Suitability é o coração do macrotema de relacionamento, que vale 30% da prova. E é a norma que protege o profissional: seguir o processo é o que separa uma recomendação legítima de uma venda inadequada.',
            paraQueServe:
              'Evitar que o cliente assuma risco que não entende ou não pode suportar — e proteger a instituição.',
            comoFunciona: [
              'Três dimensões obrigatórias: OBJETIVOS de investimento (para quê e por quanto tempo), SITUAÇÃO FINANCEIRA (capacidade de suportar perdas) e CONHECIMENTO/experiência sobre o produto.',
              'O perfil precisa estar vigente. Perfil vencido ou inexistente impede a recomendação.',
              'Se o produto é inadequado ao perfil, o profissional deve alertar o cliente sobre a inadequação e obter declaração expressa de ciência antes de prosseguir.',
              'O suitability se aplica à RECOMENDAÇÃO. Operação partida exclusivamente do cliente, sem recomendação, segue regra própria — mas o alerta continua devido.',
              'O perfil deve ser atualizado periodicamente e sempre que houver mudança relevante na vida do cliente.',
            ],
            exemploSimples:
              'Cliente aposentado, perfil conservador, precisa do dinheiro em 6 meses para uma cirurgia. Recomendar fundo de ações é inadequado nas três dimensões: objetivo, prazo e tolerância a risco.',
            exemploAplicado:
              'O cliente de perfil conservador pede um fundo de ações depois de ver a alta da bolsa no noticiário. O profissional não pode simplesmente vender, nem simplesmente recusar: precisa informar formalmente a inadequação, registrar a manifestação do cliente e obter a declaração de que ele deseja prosseguir mesmo ciente.',
            lembrarNaProva: [
              'São TRÊS dimensões: objetivo, situação financeira e conhecimento.',
              'Sem perfil válido, não se recomenda.',
              'Produto inadequado: alertar + colher ciência expressa. Não basta avisar de boca.',
              'A responsabilidade não some porque o cliente assinou o termo.',
            ],
            revisaoRapida: [
              'Três dimensões: objetivo, situação financeira e conhecimento.',
              'Verificar antes de recomendar, sempre.',
              'Produto inadequado: alertar por escrito e registrar.',
              'O perfil precisa ser reavaliado periodicamente.',
            ],
          },
          exemplos: [
            {
              titulo: 'O cliente insiste',
              corpo:
                'Cliente conservador quer comprar um fundo de ações porque "o vizinho ganhou dinheiro". O caminho correto: explicar a inadequação, registrar o alerta, colher a declaração de ciência e só então executar — nunca apenas executar em silêncio.',
            },
          ],
          conceitoChave:
            'Suitability não é papelada: é a checagem de que o produto cabe nos objetivos, no bolso e no entendimento do cliente.',
          pontosChave: [
            'Objetivos + situação financeira + conhecimento',
            'Perfil vencido bloqueia recomendação',
            'Inadequação exige alerta e ciência expressa',
            'Atualização periódica do perfil',
            'Termo assinado não transfere toda a responsabilidade',
          ],
          erroComum:
            'Tratar o questionário como formalidade e recomendar por conveniência comercial. É exatamente o que a regra existe para impedir.',
          alertaProva:
            'Enunciado com "o cliente insiste" quase sempre cobra: alertar sobre a inadequação e obter declaração de ciência.',
          tabela: {
            titulo: 'As três dimensões',
            colunas: ['Dimensão', 'Pergunta que responde'],
            linhas: [
              ['Objetivos', 'Para que e por quanto tempo o dinheiro será investido?'],
              ['Situação financeira', 'O cliente aguenta perder parte disso?'],
              ['Conhecimento', 'O cliente entende o produto e seus riscos?'],
            ],
          },
          perguntaRapida: {
            enunciado:
              'Cliente de perfil conservador solicita aplicação em produto de alto risco, por iniciativa própria. O profissional deve:',
            alternativas: [
              'Recusar a operação em qualquer hipótese',
              'Executar normalmente, pois o cliente pediu',
              'Alertar sobre a inadequação e obter declaração expressa de ciência',
              'Alterar o perfil do cliente para permitir a operação',
            ],
            correta: 2,
            explicacao:
              'Alterar o perfil para acomodar a venda é falta grave. O correto é alertar sobre a inadequação e registrar a ciência do cliente.',
          },
          mapaMental: {
            id: 'mm-suit',
            rotulo: 'Suitability',
            revisao: true,
            filhos: [
              {
                id: 'mm-suit-dim',
                rotulo: '3 dimensões',
                revisao: true,
                filhos: [
                  { id: 'mm-suit-1', rotulo: 'Objetivos', revisao: true },
                  { id: 'mm-suit-2', rotulo: 'Situação financeira', revisao: true },
                  { id: 'mm-suit-3', rotulo: 'Conhecimento', revisao: true },
                ],
              },
              {
                id: 'mm-suit-inad',
                rotulo: 'Produto inadequado',
                revisao: true,
                filhos: [
                  { id: 'mm-suit-4', rotulo: 'Alertar' },
                  { id: 'mm-suit-5', rotulo: 'Ciência expressa', revisao: true },
                  { id: 'mm-suit-6', rotulo: 'Registrar' },
                ],
              },
              { id: 'mm-suit-nunca', rotulo: 'Nunca ajustar o perfil para vender', revisao: true },
            ],
          },
          reexplicacoes: {
            simples:
              'Antes de indicar um investimento, você precisa saber três coisas do cliente: para que ele quer o dinheiro, quanto ele aguenta perder e o quanto ele entende do produto.',
            exemplo:
              'É como um médico receitando remédio: precisa saber o que a pessoa tem, se ela tem alergia e se vai conseguir tomar direito. Receitar sem perguntar é imprudência.',
            analogia:
              'Vender fundo de ações a quem precisa do dinheiro em 6 meses é como vender tênis de corrida para alguém que vai escalar uma montanha. Produto bom, uso errado.',
            iniciante:
              'Suitability é o nome da regra que obriga o profissional a checar se o investimento combina com a pessoa antes de indicar. Se não combina, ele tem que avisar e registrar que avisou.',
          },
          niveis: {
            entenda:
              'Suitability é conferir se o produto serve para aquele cliente antes de oferecer, olhando objetivo, bolso e conhecimento.',
            aprofunde:
              'As três dimensões não são pesos que se compensam: basta uma falhar para o produto ser inadequado. Um cliente com patrimônio de sobra e conhecimento técnico ainda assim não deve receber um produto de dez anos se o objetivo declarado é comprar um imóvel em dois. A obrigação também é contínua, não pontual — mudanças na vida do cliente reabrem a análise, e o próprio perfil tem prazo de validade. O Código Anbima de Distribuição soma a isso o dever de transparência na remuneração do canal, porque o conflito de interesses costuma entrar exatamente pela porta do produto que remunera melhor quem vende. Vale distinguir suitability de Conheça Seu Cliente: o KYC olha a origem dos recursos e o risco de lavagem; o suitability olha a adequação do produto ao objetivo.',
          },
          versao: 2,
          atualizadoEm: '2026-08-24',
          minutosEstimados: 7,
        },
      ],
    },
    {
      id: 'm3.4',
      macrotemaId: 'm3',
      codigo: '3.4',
      nome: 'Regras e condutas aplicáveis para atuação profissional e no relacionamento com o cliente',
      ordem: 4,
      preRequisitos: ['m3.3'],
      conceitos: [
        {
          id: 'c-conflito',
          microtemaId: 'm3.4',
          titulo: 'Conflito de interesses e dever de informar',
          objetivo: 'Identificar situações de conflito e a conduta esperada em cada uma.',
          etiquetas: ['ESSENCIAL', 'ATENCAO', 'PEGADINHA'],
          resumo30s:
            'Conflito de interesses não se resolve escondendo: resolve-se informando. O interesse do cliente vem antes do da instituição e antes do seu. Meta comercial nunca justifica recomendação inadequada.',
          explicacao: {
            oQueE:
              'Situação em que o interesse do profissional ou da instituição pode influenciar uma recomendação em prejuízo do cliente.',
            porQueImporta:
              'Conflito de interesses é o tema com maior chance de aparecer em questão situacional, no formato de case ou árvore de diálogo, que a CPA usa em boa parte da prova.',
            paraQueServe:
              'A regra de conduta existe para que a confiança do investidor no mercado não dependa da boa vontade de cada profissional.',
            comoFunciona: [
              'O princípio central é a primazia do interesse do cliente.',
              'Havendo conflito potencial, o dever é DIVULGAR de forma clara e prévia — não ocultar.',
              'Remuneração variável por produto, campanha de vendas e meta de distribuição são fontes clássicas de conflito e devem ser transparentes.',
              'É vedado prometer ou sugerir rentabilidade, garantir resultado, ou omitir riscos relevantes.',
              'Informação privilegiada não pode ser usada em benefício próprio ou de terceiros.',
              'O sigilo das informações do cliente é dever permanente, com as exceções previstas em lei — como a comunicação de PLD ao COAF.',
            ],
            exemploSimples:
              'A instituição está com campanha para distribuir um fundo próprio, com bônus ao gerente. O gerente pode oferecer o fundo — desde que seja adequado ao perfil e que a existência do incentivo não distorça a recomendação.',
            exemploAplicado:
              'A instituição lança uma campanha que remunera melhor a venda de um fundo específico no mês. O profissional continua obrigado a recomendar o que é adequado ao cliente e a informar a forma de remuneração quando questionado — a campanha interna não altera o dever com o investidor.',
            lembrarNaProva: [
              'Interesse do cliente em primeiro lugar, sempre.',
              'Conflito se resolve com transparência prévia, não com silêncio.',
              'Nunca prometer rentabilidade ou garantir resultado.',
              'Sigilo é regra; comunicação ao COAF é exceção legal.',
            ],
            revisaoRapida: [
              'O interesse do cliente vem antes do seu e do da instituição.',
              'Conflito que não pode ser evitado deve ser informado.',
              'Transparência sobre remuneração é dever, não cortesia.',
              'Recusar a venda inadequada é conduta esperada, não perda de negócio.',
            ],
          },
          exemplos: [
            {
              titulo: 'Recusar a venda fácil',
              corpo:
                'Bater meta com um produto inadequado é infração, ainda que o cliente concorde e o resultado acabe positivo. A conduta é avaliada no momento da recomendação, não pelo resultado.',
            },
          ],
          conceitoChave:
            'A conduta é julgada pela decisão tomada, não pelo resultado obtido. Recomendação inadequada que deu lucro continua sendo infração.',
          pontosChave: [
            'Primazia do interesse do cliente',
            'Divulgação prévia e clara do conflito',
            'Proibido prometer ou garantir rentabilidade',
            'Vedado uso de informação privilegiada',
            'Sigilo permanente, com exceções legais',
          ],
          erroComum:
            'Achar que basta o cliente ter lucrado para a conduta estar correta. O critério é a adequação no momento da recomendação.',
          alertaProva:
            'Enunciados com "campanha de vendas", "meta do gerente" ou "bônus por produto" estão testando conflito de interesses.',
          tabela: {
            titulo: 'Conduta esperada',
            colunas: ['Situação', 'Conduta correta'],
            linhas: [
              ['Campanha com bônus por produto', 'Divulgar o incentivo e manter a adequação'],
              ['Cliente pede garantia de retorno', 'Explicar que não existe garantia; não prometer'],
              ['Acesso a informação não pública', 'Não usar e não repassar'],
              ['Suspeita de lavagem', 'Comunicar ao COAF sem avisar o cliente'],
              ['Produto inadequado desejado pelo cliente', 'Alertar e colher ciência expressa'],
            ],
          },
          perguntaRapida: {
            enunciado:
              'Diante de um conflito de interesses potencial, a conduta correta do profissional é:',
            alternativas: [
              'Evitar mencionar o conflito para não confundir o cliente',
              'Divulgar o conflito de forma clara e prévia ao cliente',
              'Transferir o cliente para outro profissional sem explicação',
              'Prosseguir normalmente, pois o conflito é da instituição',
            ],
            correta: 1,
            explicacao:
              'Conflito de interesses se administra com transparência prévia. Ocultar é o que caracteriza a infração.',
          },
          mapaMental: {
            id: 'mm-conf',
            rotulo: 'Conflito de interesses',
            revisao: true,
            filhos: [
              { id: 'mm-conf-1', rotulo: 'Interesse do cliente primeiro', revisao: true },
              { id: 'mm-conf-2', rotulo: 'Divulgar, não ocultar', revisao: true },
              {
                id: 'mm-conf-3',
                rotulo: 'Vedações',
                revisao: true,
                filhos: [
                  { id: 'mm-conf-4', rotulo: 'Prometer rentabilidade', revisao: true },
                  { id: 'mm-conf-5', rotulo: 'Omitir riscos' },
                  { id: 'mm-conf-6', rotulo: 'Usar informação privilegiada' },
                ],
              },
              { id: 'mm-conf-7', rotulo: 'Sigilo', detalhe: 'Exceção: COAF' },
            ],
          },
          reexplicacoes: {
            simples:
              'Se você ganha mais vendendo um produto, precisa contar isso ao cliente. Esconder é que é errado — não a existência do incentivo.',
            exemplo:
              'O gerente tem meta de vender o fundo do próprio banco. Ele pode oferecer, desde que o fundo sirva ao cliente e ele seja transparente sobre o incentivo.',
            analogia:
              'É como um mecânico que ganha comissão por peça: ele pode indicar a peça, mas precisa dizer que ganha por isso — e não trocar peça que está boa.',
            iniciante:
              'Quando o que é bom para você não é o melhor para o cliente, existe conflito. A regra é simples: o cliente vem primeiro, e você conta a ele o que pode influenciar sua indicação.',
          },
          niveis: {
            entenda:
              'Quando o que é bom para você não é o melhor para o cliente, existe conflito. A regra é o cliente primeiro — e falar abertamente sobre isso.',
            aprofunde:
              'A ordem de tratamento é evitar, depois mitigar, e só então divulgar: divulgar não substitui evitar quando evitar era possível. Estruturalmente, as instituições tratam o problema com segregação de funções, a chamada barreira de informação, políticas formais de conflito, comitês de ética e relatórios de transparência — todos itens listados no programa oficial. Note que o dever de conduta não termina no atendimento: usar informação privilegiada obtida no trabalho configura crime do artigo 27-D da Lei 6.385/1976, e antecipar-se à ordem do cliente para operar em benefício próprio é front running, prática não equitativa punida pela Resolução CVM 62. O código de ética das certificações Anbima acrescenta a essas normas nove princípios que valem também para a pessoa candidata, antes mesmo da certificação.',
          },
          versao: 2,
          atualizadoEm: '2026-08-24',
          minutosEstimados: 6,
        },
        {
          id: 'c-pld',
          microtemaId: 'm3.4',
          titulo: 'PLD/FT — as três etapas e o dever de comunicar',
          objetivo: 'Reconhecer as etapas da lavagem e as obrigações do profissional.',
          etiquetas: ['ESSENCIAL', 'DECORAR', 'ATENCAO'],
          resumo30s:
            'Lavagem tem três etapas: colocação, ocultação e integração. O profissional tem dever de conhecer o cliente (KYC), registrar operações e comunicar ao COAF — sem avisar o cliente.',
          explicacao: {
            oQueE:
              'Lavagem de dinheiro é o processo de dar aparência lícita a recursos de origem criminosa.',
            porQueImporta:
              'PLD é dever legal com responsabilização pessoal: o profissional que deixa de comunicar responde junto com a instituição. Por isso o tema é cobrado com frequência e sempre pelo lado da conduta.',
            paraQueServe:
              'A PLD/FT (prevenção à lavagem de dinheiro e ao financiamento do terrorismo) existe para impedir que o sistema financeiro seja usado como lavanderia.',
            comoFunciona: [
              'Etapa 1 — Colocação: o dinheiro entra no sistema financeiro. É o momento mais vulnerável e onde a fiscalização é mais eficaz.',
              'Etapa 2 — Ocultação (ou estratificação): sucessivas movimentações para apagar o rastro da origem.',
              'Etapa 3 — Integração: o recurso volta à economia formal com aparência legítima — imóveis, empresas, investimentos.',
              'A instituição deve manter política de KYC (conheça seu cliente), cadastro atualizado e registro das operações.',
              'Operações suspeitas ou acima dos limites definidos pela regulação devem ser comunicadas ao COAF.',
              'A comunicação é feita SEM dar ciência ao cliente. Avisar o cliente caracteriza falha grave.',
            ],
            exemploSimples:
              'Um cliente que sempre movimentou R$ 3 mil por mês começa a depositar R$ 40 mil semanais em espécie, sem justificativa compatível com a renda declarada. Isso é sinal de alerta e exige análise e, se confirmado o indício, comunicação ao COAF.',
            exemploAplicado:
              'Um cliente aposentado, que sempre recebeu apenas o benefício, passa a receber transferências de várias pessoas físicas e sacar em espécie no mesmo dia. O profissional não decide se houve crime: registra, comunica pelos canais internos e ao COAF quando cabível, e não avisa o cliente.',
            lembrarNaProva: [
              'A ordem é: Colocação → Ocultação → Integração.',
              'A colocação é a fase mais vulnerável para o criminoso.',
              'Comunicar ao COAF sem avisar o cliente.',
              'Não comunicar quando devido gera responsabilização da instituição e do profissional.',
            ],
            revisaoRapida: [
              'A ordem é colocação, ocultação e integração.',
              'A colocação é a fase mais vulnerável para o criminoso.',
              'Comunicar ao COAF sem avisar o cliente.',
              'Não comunicar quando devido responsabiliza instituição e profissional.',
              'Cadastro desatualizado enfraquece todo o controle.',
            ],
          },
          exemplos: [
            {
              titulo: 'Sinais de alerta típicos',
              corpo:
                'Movimentação incompatível com a renda ou o patrimônio; fracionamento de valores para ficar abaixo de limites; resistência a fornecer documentos; operações sem fundamento econômico aparente; uso de terceiros sem relação clara com o cliente.',
            },
          ],
          conceitoChave:
            'Colocação, ocultação, integração. E o dever de comunicar existe mesmo sem certeza do crime: basta o indício.',
          pontosChave: [
            'Três etapas na ordem: colocação → ocultação → integração',
            'KYC: conhecer o cliente e manter cadastro atualizado',
            'Comunicação ao COAF, sem ciência do cliente',
            'Registro e guarda das operações',
            'Responsabilidade é da instituição e também do profissional',
          ],
          erroComum:
            'Achar que só se comunica quando há prova do crime, ou que é preciso avisar o cliente. Nenhum dos dois é verdade: comunica-se o indício, e em sigilo.',
          alertaProva:
            'Questão clássica: "o gerente deve informar o cliente sobre a comunicação ao COAF?" — Não. Nunca.',
          tabela: {
            titulo: 'As três etapas',
            colunas: ['Etapa', 'O que acontece', 'Exemplo'],
            linhas: [
              ['Colocação', 'Dinheiro entra no sistema', 'Depósitos em espécie fracionados'],
              ['Ocultação', 'Apaga-se o rastro', 'Várias transferências entre contas e países'],
              ['Integração', 'Volta como recurso "limpo"', 'Compra de imóvel ou empresa'],
            ],
          },
          perguntaRapida: {
            enunciado: 'Ao identificar indício de lavagem, o profissional deve:',
            alternativas: [
              'Encerrar a conta e avisar o cliente do motivo',
              'Comunicar ao COAF sem dar ciência ao cliente',
              'Aguardar decisão judicial antes de qualquer ação',
              'Comunicar somente se o valor exceder R$ 1 milhão',
            ],
            correta: 1,
            explicacao:
              'A comunicação ao COAF é feita em sigilo, sem informar o cliente, e independe de decisão judicial ou de um piso tão alto.',
          },
          mapaMental: {
            id: 'mm-pld',
            rotulo: 'PLD/FT',
            revisao: true,
            filhos: [
              {
                id: 'mm-pld-etapas',
                rotulo: 'Etapas',
                revisao: true,
                filhos: [
                  { id: 'mm-pld-1', rotulo: '1. Colocação', detalhe: 'Fase mais vulnerável', revisao: true },
                  { id: 'mm-pld-2', rotulo: '2. Ocultação', revisao: true },
                  { id: 'mm-pld-3', rotulo: '3. Integração', revisao: true },
                ],
              },
              {
                id: 'mm-pld-dev',
                rotulo: 'Deveres',
                revisao: true,
                filhos: [
                  { id: 'mm-pld-4', rotulo: 'KYC' },
                  { id: 'mm-pld-5', rotulo: 'Registro de operações' },
                  { id: 'mm-pld-6', rotulo: 'Comunicar ao COAF', detalhe: 'Sem avisar o cliente', revisao: true },
                ],
              },
            ],
          },
          reexplicacoes: {
            simples:
              'Lavar dinheiro é fazer dinheiro sujo parecer limpo. Isso acontece em três passos: colocar no banco, embaralhar e trazer de volta como se fosse legítimo.',
            exemplo:
              'Um traficante deposita dinheiro vivo em várias contas (colocação), transfere entre elas e para o exterior (ocultação) e compra um restaurante (integração). O restaurante agora "justifica" o dinheiro.',
            analogia:
              'É como lavar uma roupa manchada: molhar (colocação), bater e enxaguar várias vezes (ocultação), pendurar limpa no varal (integração).',
            iniciante:
              'Quando alguém ganha dinheiro com crime, precisa esconder de onde veio. O banco é obrigado a perceber isso e avisar as autoridades — em silêncio, sem contar ao cliente.',
          },
          niveis: {
            entenda:
              'Lavagem de dinheiro é dar aparência legal a dinheiro de crime. O banco é obrigado a perceber e avisar as autoridades, em silêncio.',
            aprofunde:
              'A Lei 9.613/1998, alterada pela Lei 12.683/2012, deixou de exigir uma lista fechada de crimes antecedentes: hoje qualquer infração penal pode originar a lavagem, o que amplia bastante o dever de vigilância. O modelo vigente é o de abordagem baseada em risco, com avaliação interna que classifica clientes, produtos e canais por grau de exposição e calibra o monitoramento conforme esse grau. Avisar o cliente sobre a comunicação configura o tipo penal, e a ausência de comunicação é infração administrativa punível pelo BACEN mesmo quando não se prova o crime. O programa oficial coloca o KYC nesse mesmo bloco, e a razão é prática: sem cadastro atualizado e sem análise de capacidade financeira, não há como afirmar que uma movimentação é incompatível.',
          },
          versao: 2,
          atualizadoEm: '2026-08-24',
          minutosEstimados: 7,
        },
        ...CONCEITOS_3_4,
      ],
    },
  ],
}
