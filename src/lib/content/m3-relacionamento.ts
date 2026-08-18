import type { Macrotema } from '../types'

/** MACROTEMA 3 — Relacionamento com o cliente. */
export const M3: Macrotema = {
  id: 'm3',
  codigo: 'REL',
  nome: 'Relacionamento com o cliente',
  resumo: 'Perfil, adequação, conduta e conflito de interesses. O bloco mais aplicado da prova.',
  peso: null,
  pesoVerificado: false,
  ordem: 3,
  microtemas: [
    {
      id: 'm3.1',
      macrotemaId: 'm3',
      nome: 'Suitability e perfil do investidor',
      ordem: 1,
      preRequisitos: [],
      conceitos: [
        {
          id: 'c-suitability',
          microtemaId: 'm3.1',
          titulo: 'Suitability: adequar o produto ao cliente',
          objetivo: 'Aplicar as três dimensões do suitability e reconhecer quando não se pode recomendar.',
          etiquetas: ['ESSENCIAL', 'ENTENDER', 'ATENCAO'],
          resumo30s:
            'Suitability avalia três coisas: objetivo, situação financeira e conhecimento. Sem perfil válido não se recomenda. Se o cliente insiste em produto inadequado, é preciso alertar por escrito e registrar.',
          explicacao: {
            oQueE:
              'O dever de verificar a adequação de um produto ao perfil do cliente antes de recomendá-lo.',
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
            lembrarNaProva: [
              'São TRÊS dimensões: objetivo, situação financeira e conhecimento.',
              'Sem perfil válido, não se recomenda.',
              'Produto inadequado: alertar + colher ciência expressa. Não basta avisar de boca.',
              'A responsabilidade não some porque o cliente assinou o termo.',
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
          minutosEstimados: 7,
        },
      ],
    },
    {
      id: 'm3.2',
      macrotemaId: 'm3',
      nome: 'Ética e conflito de interesses',
      ordem: 2,
      preRequisitos: ['m3.1'],
      conceitos: [
        {
          id: 'c-conflito',
          microtemaId: 'm3.2',
          titulo: 'Conflito de interesses e dever de informar',
          objetivo: 'Identificar situações de conflito e a conduta esperada em cada uma.',
          etiquetas: ['ESSENCIAL', 'ATENCAO', 'PEGADINHA'],
          resumo30s:
            'Conflito de interesses não se resolve escondendo: resolve-se informando. O interesse do cliente vem antes do da instituição e antes do seu. Meta comercial nunca justifica recomendação inadequada.',
          explicacao: {
            oQueE:
              'Situação em que o interesse do profissional ou da instituição pode influenciar uma recomendação em prejuízo do cliente.',
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
            lembrarNaProva: [
              'Interesse do cliente em primeiro lugar, sempre.',
              'Conflito se resolve com transparência prévia, não com silêncio.',
              'Nunca prometer rentabilidade ou garantir resultado.',
              'Sigilo é regra; comunicação ao COAF é exceção legal.',
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
          minutosEstimados: 6,
        },
      ],
    },
  ],
}
