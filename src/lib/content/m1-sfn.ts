import type { Macrotema } from '../types'

/**
 * MACROTEMA 1 — Estrutura e dinâmica do Sistema Financeiro Nacional.
 * Toda explicação segue a regra fixa: o que é / para que serve / como
 * funciona / exemplo simples / o que lembrar na prova.
 */
export const M1: Macrotema = {
  id: 'm1',
  codigo: 'SFN',
  nome: 'Estrutura e dinâmica do sistema financeiro nacional',
  resumo: 'Quem cria a regra, quem fiscaliza e quem opera. A base para entender todo o resto.',
  peso: 0.2,
  pesoVerificado: true,
  ordem: 1,
  microtemas: [
    {
      id: 'm1.1',
      macrotemaId: 'm1',
      codigo: '1.1',
      nome: 'Sistema financeiro nacional',
      ordem: 1,
      preRequisitos: [],
      conceitos: [
        {
          id: 'c-cmn',
          microtemaId: 'm1.1',
          titulo: 'CMN — Conselho Monetário Nacional',
          objetivo: 'Identificar o papel do CMN e diferenciá-lo dos órgãos que fiscalizam.',
          etiquetas: ['ESSENCIAL', 'DECORAR'],
          resumo30s:
            'O CMN é o órgão máximo do SFN. Ele define as regras; não fiscaliza e não atende ninguém. São três membros: Ministro da Fazenda (preside), Ministro do Planejamento e Presidente do Banco Central.',
          explicacao: {
            oQueE:
              'O órgão máximo do Sistema Financeiro Nacional. É normativo: existe para criar diretrizes, não para executá-las.',
            porQueImporta:
              'Quase toda questão de SFN começa perguntando "quem faz o quê". Se você troca normatizar por fiscalizar, erra a questão inteira — e essa confusão é o erro número um do bloco.',
            paraQueServe:
              'Fixar as diretrizes das políticas monetária, creditícia e cambial do país — inclusive a meta de inflação.',
            comoFunciona: [
              'É formado por 3 membros: Ministro da Fazenda (presidente do conselho), Ministro do Planejamento e Presidente do Banco Central.',
              'Reúne-se ordinariamente uma vez por mês e delibera por maioria, com voto de qualidade do presidente.',
              'Suas decisões saem como Resoluções, publicadas pelo Banco Central.',
              'Quem fiscaliza o cumprimento dessas regras são os supervisores: BACEN, CVM, SUSEP e PREVIC.',
            ],
            exemploSimples:
              'O CMN define que a meta de inflação do ano será de 3%. Ele não compra nem vende nada para chegar lá — quem executa é o Banco Central, via Copom, mexendo na taxa Selic.',
            exemploAplicado:
              'Um cliente pergunta por que a poupança rende o que rende. A regra de remuneração da poupança é fixada por resolução do CMN; o BACEN apenas fiscaliza se o banco a está aplicando corretamente. Quem quiser mudar a regra precisa mudar a norma do CMN, não reclamar com o banco.',
            lembrarNaProva: [
              'CMN = normatiza. BACEN/CVM/SUSEP/PREVIC = supervisionam.',
              'São 3 membros — e o Presidente do BC é um deles.',
              'Quem define a meta de inflação é o CMN; quem persegue a meta é o BACEN.',
            ],
            revisaoRapida: [
              'CMN: órgão máximo, e só normativo.',
              'Três membros: Fazenda (preside), Planejamento e BACEN.',
              'Define a meta de inflação; o Copom define a Selic para persegui-la.',
              'Não fiscaliza ninguém e não executa nada.',
            ],
          },
          exemplos: [
            {
              titulo: 'Quem faz o quê',
              corpo:
                'CMN publica uma Resolução exigindo que bancos apliquem questionário de perfil antes de recomendar investimentos. O BACEN e a CVM depois autuam a instituição que não cumprir.',
            },
          ],
          conceitoChave: 'O CMN escreve a regra. Nunca a executa e nunca fiscaliza.',
          pontosChave: [
            'Órgão máximo e normativo do SFN',
            '3 membros: Fazenda (preside), Planejamento e BACEN',
            'Define diretrizes monetária, creditícia e cambial',
            'Define a meta de inflação',
            'Delibera por Resoluções',
          ],
          erroComum:
            'Achar que o CMN fiscaliza instituições financeiras ou que o Presidente do Banco Central preside o conselho. Quem preside é o Ministro da Fazenda.',
          alertaProva:
            'A banca gosta de misturar o número de membros e trocar quem preside. Fixe: 3 membros, presidido pela Fazenda.',
          tabela: {
            titulo: 'Normatiza x Supervisiona',
            colunas: ['Órgão', 'Papel', 'Atua sobre'],
            linhas: [
              ['CMN', 'Normativo', 'Todo o SFN'],
              ['BACEN', 'Supervisor / executor', 'Instituições financeiras, moeda e crédito'],
              ['CVM', 'Supervisor', 'Valores mobiliários (ações, fundos, debêntures)'],
              ['SUSEP', 'Supervisor', 'Seguros, capitalização e previdência aberta'],
              ['PREVIC', 'Supervisor', 'Previdência complementar fechada (fundos de pensão)'],
            ],
          },
          perguntaRapida: {
            enunciado: 'Quem define a meta de inflação no Brasil?',
            alternativas: ['O Banco Central', 'O CMN', 'O Copom', 'O Ministério da Fazenda sozinho'],
            correta: 1,
            explicacao:
              'O CMN define a meta. O Copom (dentro do BACEN) define a Selic para persegui-la. São papéis diferentes.',
          },
          mapaMental: {
            id: 'mm-cmn',
            rotulo: 'CMN',
            detalhe: 'Órgão máximo e normativo',
            revisao: true,
            filhos: [
              {
                id: 'mm-cmn-comp',
                rotulo: 'Composição',
                revisao: true,
                filhos: [
                  { id: 'mm-cmn-1', rotulo: 'Ministro da Fazenda', detalhe: 'Preside', revisao: true },
                  { id: 'mm-cmn-2', rotulo: 'Ministro do Planejamento' },
                  { id: 'mm-cmn-3', rotulo: 'Presidente do BACEN' },
                ],
              },
              {
                id: 'mm-cmn-func',
                rotulo: 'Funções',
                revisao: true,
                filhos: [
                  { id: 'mm-cmn-4', rotulo: 'Política monetária', detalhe: 'Diretrizes' },
                  { id: 'mm-cmn-5', rotulo: 'Política creditícia' },
                  { id: 'mm-cmn-6', rotulo: 'Política cambial' },
                  { id: 'mm-cmn-7', rotulo: 'Meta de inflação', revisao: true },
                ],
              },
              {
                id: 'mm-cmn-nao',
                rotulo: 'O que NÃO faz',
                detalhe: 'Não fiscaliza, não executa, não atende público',
                revisao: true,
              },
            ],
          },
          reexplicacoes: {
            simples:
              'O CMN é o "conselho que escreve as regras" do dinheiro no Brasil. Três pessoas se reúnem, decidem a regra, e outros órgãos fazem valer.',
            exemplo:
              'Pense num condomínio: o CMN é a assembleia que aprova o regimento interno. O síndico (BACEN) é quem cobra quem descumpre. A assembleia não sobe no andar para reclamar do barulho.',
            analogia:
              'CMN é o legislador; BACEN e CVM são a polícia. Legislador escreve a lei, polícia fiscaliza. Um não faz o trabalho do outro.',
            iniciante:
              'No Brasil existe um grupo pequeno (3 pessoas) que decide as regras gerais sobre dinheiro, crédito e câmbio. Esse grupo é o CMN. Ele só decide — quem coloca em prática e fiscaliza são o Banco Central e a CVM.',
          },
          niveis: {
            entenda:
              'O CMN é quem escreve as regras do sistema financeiro. Ele não fiscaliza e não executa — só decide qual é a regra.',
            aprofunde:
              'O CMN foi criado pela Lei 4.595/1964, a mesma que desenhou o SFN. Suas decisões saem como Resoluções, publicadas pelo BACEN — o que gera a confusão comum de atribuir ao BACEN uma norma que é do CMN: o Banco Central publica, mas quem decidiu foi o Conselho. Repare que o CMN normatiza o mercado bancário e de capitais, mas não alcança seguros e previdência complementar aberta, que têm o CNSP como órgão normativo próprio, nem a previdência fechada, sob o CNPC. Essa divisão em três conselhos normativos é o que explica por que existem quatro supervisores diferentes.',
          },
          versao: 2,
          atualizadoEm: '2026-08-24',
          minutosEstimados: 5,
        },
        {
          id: 'c-bacen',
          microtemaId: 'm1.1',
          titulo: 'BACEN — Banco Central do Brasil',
          objetivo: 'Reconhecer as competências do BACEN e os instrumentos de política monetária.',
          etiquetas: ['ESSENCIAL', 'ENTENDER'],
          resumo30s:
            'O BACEN executa. É autarquia com autonomia, fiscaliza instituições financeiras, emite moeda e conduz a política monetária. O Copom, dentro dele, define a taxa Selic meta.',
          explicacao: {
            oQueE:
              'Autarquia federal que executa as diretrizes do CMN e supervisiona as instituições financeiras.',
            porQueImporta:
              'O BACEN é o órgão que mais aparece na prova, e quase sempre em questões de efeito: sobe o compulsório, o que acontece com o crédito? A banca quer ver se você liga o instrumento ao resultado na economia.',
            paraQueServe:
              'Manter a inflação na meta, zelar pela estabilidade do sistema financeiro e garantir o funcionamento do sistema de pagamentos.',
            comoFunciona: [
              'Emite papel-moeda e controla a liquidez da economia.',
              'Autoriza o funcionamento, fiscaliza e pune instituições financeiras.',
              'Executa a política monetária por três instrumentos clássicos: taxa de juros (Selic), depósito compulsório e operações de mercado aberto (open market). O redesconto é o socorro de liquidez de curtíssimo prazo.',
              'O Copom — Comitê de Política Monetária — se reúne 8 vezes por ano e define a meta da taxa Selic.',
              'Desde a Lei Complementar 179/2021 o BACEN tem autonomia, com mandatos fixos e não coincidentes com o do Presidente da República.',
            ],
            exemploSimples:
              'A inflação sobe acima da meta. O Copom eleva a Selic. Crédito fica mais caro, consumo cai, a pressão sobre os preços diminui.',
            exemploAplicado:
              'A inflação vem acima da meta e o Copom eleva a Selic. Na agência, os CDBs pós-fixados passam a render mais, o crédito fica mais caro e o cliente que pensava em financiar um carro adia a compra. É a política monetária contracionista chegando ao balcão.',
            lembrarNaProva: [
              'BACEN executa; CMN normatiza.',
              'Copom define a Selic meta — não o CMN.',
              'Instrumentos: Selic, compulsório e open market. Redesconto é liquidez emergencial.',
              'Autonomia com mandato fixo (LC 179/2021).',
            ],
            revisaoRapida: [
              'BACEN executa a política monetária; o CMN a normatiza.',
              'Instrumentos: open market, redesconto e depósito compulsório.',
              'Contracionista enxuga moeda e esfria a economia; expansionista faz o contrário.',
              'Também autoriza, fiscaliza e liquida instituições financeiras.',
            ],
          },
          exemplos: [
            {
              titulo: 'Política contracionista',
              corpo:
                'Inflação pressionada → Copom sobe a Selic → juros maiores → menos crédito e menos consumo → inflação cede. O efeito não é imediato: leva alguns trimestres.',
            },
            {
              titulo: 'Compulsório na prática',
              corpo:
                'Se o BACEN aumenta o depósito compulsório, o banco precisa deixar mais dinheiro parado no BC e sobra menos para emprestar. Menos crédito na praça, mesma lógica contracionista.',
            },
          ],
          conceitoChave:
            'BACEN é o braço executor: faz política monetária, fiscaliza e é o banco dos bancos.',
          pontosChave: [
            'Autarquia federal com autonomia (LC 179/2021)',
            'Emite moeda e controla liquidez',
            'Fiscaliza instituições financeiras',
            'Copom: 8 reuniões por ano, define a Selic meta',
            'Instrumentos: Selic, compulsório, open market (+ redesconto)',
          ],
          erroComum:
            'Confundir Selic meta com Selic over. A meta é decidida pelo Copom; a over é a taxa efetivamente praticada no mercado de reservas, que gravita em torno da meta.',
          alertaProva:
            'Se a questão fala em "definir a meta da taxa de juros", a resposta é Copom/BACEN. Se fala em "definir a meta de inflação", é CMN.',
          tabela: {
            titulo: 'Instrumentos de política monetária',
            colunas: ['Instrumento', 'Para segurar a inflação', 'Efeito no crédito'],
            linhas: [
              ['Taxa Selic', 'Aumentar', 'Encarece'],
              ['Depósito compulsório', 'Aumentar', 'Reduz o que o banco pode emprestar'],
              ['Open market', 'Vender títulos', 'Retira dinheiro da economia'],
              ['Redesconto', 'Encarecer / restringir', 'Socorro de liquidez mais caro'],
            ],
          },
          perguntaRapida: {
            enunciado: 'O Copom decide:',
            alternativas: [
              'A meta de inflação',
              'A meta da taxa Selic',
              'O percentual do depósito compulsório e a meta de inflação',
              'As regras de suitability',
            ],
            correta: 1,
            explicacao:
              'O Copom define a meta da taxa Selic. A meta de inflação é do CMN e as regras de suitability vêm da CVM.',
          },
          mapaMental: {
            id: 'mm-bacen',
            rotulo: 'BACEN',
            detalhe: 'Executor e supervisor',
            revisao: true,
            filhos: [
              {
                id: 'mm-bacen-pm',
                rotulo: 'Política monetária',
                revisao: true,
                filhos: [
                  { id: 'mm-bacen-1', rotulo: 'Selic', detalhe: 'Copom, 8x/ano', revisao: true },
                  { id: 'mm-bacen-2', rotulo: 'Compulsório' },
                  { id: 'mm-bacen-3', rotulo: 'Open market' },
                  { id: 'mm-bacen-4', rotulo: 'Redesconto', detalhe: 'Liquidez emergencial' },
                ],
              },
              { id: 'mm-bacen-fisc', rotulo: 'Fiscaliza IFs', revisao: true },
              { id: 'mm-bacen-moeda', rotulo: 'Emite moeda' },
              { id: 'mm-bacen-aut', rotulo: 'Autonomia', detalhe: 'LC 179/2021, mandato fixo', revisao: true },
            ],
          },
          reexplicacoes: {
            simples:
              'O Banco Central é quem faz a regra funcionar. Ele mexe nos juros para controlar a inflação e fiscaliza os bancos.',
            exemplo:
              'Se todo mundo está gastando demais e os preços sobem, o BC sobe os juros. Emprestar fica caro, as pessoas gastam menos, os preços param de subir tão rápido.',
            analogia:
              'A Selic é o pedal do carro da economia. O Copom pisa no freio (sobe a Selic) ou no acelerador (desce). O CMN só disse a que velocidade queria chegar.',
            iniciante:
              'O Banco Central cuida do dinheiro do país. Ele imprime as notas, olha se os bancos estão saudáveis e mexe na taxa de juros para os preços não subirem demais.',
          },
          niveis: {
            entenda:
              'O Banco Central é o executor: ele coloca em prática as regras do CMN e controla quanto dinheiro circula na economia.',
            aprofunde:
              'Os três instrumentos clássicos agem por caminhos diferentes. O open market é o mais ágil: comprando ou vendendo títulos públicos, o BACEN ajusta a liquidez diariamente e mantém a taxa Selic efetiva colada na meta definida pelo Copom. O compulsório é o mais lento e o mais contundente, porque trava uma fração dos depósitos e reduz o multiplicador bancário. O redesconto é socorro de liquidez, não ferramenta de ajuste fino — o banco recorre a ele quando não fecha o caixa no dia. Desde a Lei Complementar 179/2021 o BACEN é autarquia de natureza especial, com autonomia e mandatos fixos para a diretoria, o que separa a decisão de juros do calendário político.',
          },
          versao: 2,
          atualizadoEm: '2026-08-24',
          minutosEstimados: 7,
        },
        {
          id: 'c-cvm',
          microtemaId: 'm1.1',
          titulo: 'CVM, SUSEP e PREVIC — quem cuida de quê',
          objetivo: 'Separar corretamente o campo de atuação de cada supervisor.',
          etiquetas: ['ESSENCIAL', 'DECORAR', 'PEGADINHA'],
          resumo30s:
            'CVM cuida de valores mobiliários (ações, fundos, debêntures). SUSEP cuida de seguros, capitalização e previdência ABERTA (PGBL/VGBL). PREVIC cuida da previdência FECHADA (fundos de pensão).',
          explicacao: {
            oQueE:
              'Três autarquias supervisoras, cada uma com um recorte próprio de mercado.',
            porQueImporta:
              'A prova adora montar listas misturando produto e supervisor. Saber que fundo é CVM, previdência aberta é SUSEP e fundo de pensão é PREVIC resolve uma família inteira de questões.',
            paraQueServe:
              'Fiscalizar, registrar e punir dentro do seu campo — protegendo o investidor e o segurado.',
            comoFunciona: [
              'CVM: regula e fiscaliza o mercado de valores mobiliários. Ações, debêntures, cotas de fundos, CRI, CRA e ofertas públicas passam por ela.',
              'SUSEP: seguros em geral, títulos de capitalização e previdência complementar ABERTA — ou seja, PGBL e VGBL vendidos ao público.',
              'PREVIC: previdência complementar FECHADA, os fundos de pensão de empresas e entidades de classe.',
              'Nenhuma das três normatiza o SFN inteiro: todas atuam dentro das diretrizes do CMN (e, no caso de seguros, do CNSP).',
            ],
            exemploSimples:
              'Um cliente reclama de um fundo de investimento: o assunto é da CVM. Reclama do PGBL do banco: é SUSEP. Reclama do fundo de pensão da empresa onde trabalha: é PREVIC.',
            exemploAplicado:
              'Um cliente reclama que foi induzido a comprar um fundo inadequado ao perfil dele. A reclamação vai à CVM, que regula e fiscaliza fundos e a distribuição de valores mobiliários. Se a reclamação fosse sobre um VGBL, o endereço seria a SUSEP.',
            lembrarNaProva: [
              'Fundo de investimento = CVM. PGBL/VGBL = SUSEP. Fundo de pensão = PREVIC.',
              'CRI e CRA são valores mobiliários — logo, CVM.',
              'ABERTA = SUSEP. FECHADA = PREVIC.',
            ],
            revisaoRapida: [
              'CVM: valores mobiliários, fundos, ações e debêntures.',
              'SUSEP: seguros, capitalização e previdência aberta (PGBL e VGBL).',
              'PREVIC: previdência fechada, os fundos de pensão.',
              'Os três supervisionam; quem normatiza são CMN, CNSP e CNPC.',
            ],
          },
          exemplos: [
            {
              titulo: 'O corte que a banca explora',
              corpo:
                'Previdência é dividida em duas: aberta (qualquer pessoa contrata, PGBL e VGBL) e fechada (só quem pertence à empresa ou entidade). A palavra "aberta" ou "fechada" no enunciado é o que decide entre SUSEP e PREVIC.',
            },
          ],
          conceitoChave:
            'Valor mobiliário → CVM. Seguro e previdência aberta → SUSEP. Previdência fechada → PREVIC.',
          pontosChave: [
            'CVM: ações, debêntures, fundos, CRI/CRA, ofertas públicas',
            'SUSEP: seguros, capitalização, PGBL e VGBL',
            'PREVIC: entidades fechadas de previdência complementar',
            'Todos são supervisores, nenhum é o órgão máximo',
          ],
          erroComum:
            'Marcar CVM para PGBL/VGBL. Previdência aberta é SUSEP, mesmo quando o plano investe em fundos regulados pela CVM.',
          alertaProva:
            'Preste atenção nas palavras "aberta" e "fechada". Elas trocam a resposta inteira.',
          tabela: {
            titulo: 'Mapa rápido dos supervisores',
            colunas: ['Produto / tema', 'Supervisor'],
            linhas: [
              ['Ações, debêntures, CRI, CRA', 'CVM'],
              ['Fundos de investimento', 'CVM'],
              ['Seguro de vida e automóvel', 'SUSEP'],
              ['PGBL e VGBL', 'SUSEP'],
              ['Título de capitalização', 'SUSEP'],
              ['Fundo de pensão de empresa', 'PREVIC'],
              ['CDB, poupança, conta corrente', 'BACEN'],
            ],
          },
          perguntaRapida: {
            enunciado: 'Um cliente quer contratar um VGBL. Qual órgão supervisiona esse produto?',
            alternativas: ['CVM', 'PREVIC', 'SUSEP', 'BACEN'],
            correta: 2,
            explicacao:
              'VGBL é previdência complementar aberta — supervisão da SUSEP. PREVIC só cuida da previdência fechada.',
          },
          mapaMental: {
            id: 'mm-sup',
            rotulo: 'Supervisores',
            revisao: true,
            filhos: [
              {
                id: 'mm-sup-cvm',
                rotulo: 'CVM',
                detalhe: 'Valores mobiliários',
                revisao: true,
                filhos: [
                  { id: 'mm-sup-cvm1', rotulo: 'Ações e debêntures' },
                  { id: 'mm-sup-cvm2', rotulo: 'Fundos' },
                  { id: 'mm-sup-cvm3', rotulo: 'CRI / CRA' },
                ],
              },
              {
                id: 'mm-sup-susep',
                rotulo: 'SUSEP',
                detalhe: 'Seguros e previdência ABERTA',
                revisao: true,
                filhos: [
                  { id: 'mm-sup-s1', rotulo: 'PGBL / VGBL', revisao: true },
                  { id: 'mm-sup-s2', rotulo: 'Capitalização' },
                ],
              },
              {
                id: 'mm-sup-previc',
                rotulo: 'PREVIC',
                detalhe: 'Previdência FECHADA',
                revisao: true,
                filhos: [{ id: 'mm-sup-p1', rotulo: 'Fundos de pensão' }],
              },
            ],
          },
          reexplicacoes: {
            simples:
              'Três fiscais, três territórios. CVM olha investimentos do mercado de capitais. SUSEP olha seguro e previdência que qualquer um contrata. PREVIC olha o fundo de pensão da empresa.',
            exemplo:
              'Comprou ação? CVM. Comprou seguro de vida? SUSEP. Trabalha numa estatal e contribui para o fundo de pensão dela? PREVIC.',
            analogia:
              'É como delegacias especializadas: cada uma só atende um tipo de ocorrência. Levar o caso à delegacia errada não resolve.',
            iniciante:
              'Cada tipo de produto financeiro tem um órgão que cuida dele. Investimento em bolsa e fundos: CVM. Seguro e previdência que você contrata no banco: SUSEP. Previdência que só existe dentro de uma empresa: PREVIC.',
          },
          niveis: {
            entenda:
              'Cada tipo de produto tem seu fiscal: CVM cuida de investimentos do mercado de capitais, SUSEP de seguros e previdência aberta, PREVIC dos fundos de pensão.',
            aprofunde:
              'A lógica da divisão é a natureza jurídica do produto, não o balcão em que ele é vendido. Um mesmo gerente pode oferecer um fundo (CVM), um VGBL (SUSEP) e um CDB (BACEN) na mesma conversa. Note ainda que cada supervisor tem um normativo acima de si: CVM e BACEN respondem ao CMN, a SUSEP ao CNSP e a PREVIC ao CNPC. A CVM é autarquia em regime especial vinculada ao Ministério da Fazenda, com poder normativo próprio — as Resoluções CVM, como a 175 dos fundos e a 30 da classificação de investidores, são dela, não do CMN.',
          },
          versao: 2,
          atualizadoEm: '2026-08-24',
          minutosEstimados: 6,
        },
      ],
    },
    {
      id: 'm1.2',
      macrotemaId: 'm1',
      codigo: '1.2',
      nome: 'Política econômica',
      ordem: 2,
      preRequisitos: ['m1.1'],
      conceitos: [],
    },
    {
      id: 'm1.3',
      macrotemaId: 'm1',
      codigo: '1.3',
      nome: 'Operações do mercado financeiro',
      ordem: 3,
      preRequisitos: ['m1.2'],
      conceitos: [],
    },
    {
      id: 'm1.4',
      macrotemaId: 'm1',
      codigo: '1.4',
      nome: 'Regulação e infraestrutura de mercado',
      ordem: 4,
      preRequisitos: ['m1.1'],
      conceitos: [],
    },
  ],
}
