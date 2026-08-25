import { q } from './builder'

/**
 * Questões autorais — macrotema 4, complemento de cobertura.
 *
 * Fecha o piso de cinco questões por conceito. Aqui o `c-openfinance` era o
 * caso mais grave do app inteiro: duas questões para um conceito de microtema
 * oficial.
 *
 * Critério editorial herdado de `banco-m4-resto.ts` e mantido: como o
 * macrotema é o mais volátil do programa, **nenhuma questão afirma exigência
 * normativa de detalhe** — cobra-se o mecanismo e a lógica da distinção, que
 * é o que sobrevive a uma revisão de norma.
 */
export const BANCO_M4_PISO = [
  /* ---- c-openfinance ------------------------------------------------------ */
  q('q-of-p1', {
    c: 'c-openfinance', tipo: 'conceitual', dif: 'facil',
    hab: 'Corrigir a leitura de que os bancos trocam dados entre si',
    e: 'A afirmação "no Open Finance os bancos trocam dados de clientes entre si" está errada porque:',
    alt: [
      ['O compartilhamento só ocorre mediante consentimento específico do próprio cliente, para finalidades determinadas.', true, 'Correta. Sem autorização não há tráfego de dado nenhum.'],
      ['Os dados compartilhados são apenas os públicos das instituições.', false, 'Dados de cadastro e de transações também estão no escopo, com consentimento.'],
      ['A troca de dados é vedada pela LGPD em qualquer hipótese.', false, 'A LGPD admite o tratamento com base legal adequada, incluindo o consentimento.'],
      ['Apenas instituições do mesmo conglomerado podem compartilhar dados.', false, 'O sistema existe justamente para permitir compartilhamento entre concorrentes.'],
    ],
    exp: 'O dado é do cliente. O sistema só transporta o que ele mandou transportar.',
    tags: ['open-finance', 'consentimento', 'conceitual'],
  }),
  q('q-of-p2', {
    c: 'c-openfinance', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Orientar o cliente sobre a revogação do consentimento',
    ctx: 'Um cliente autorizou o compartilhamento de dados com um aplicativo e agora quer interromper esse compartilhamento.',
    e: 'A orientação correta é:',
    alt: [
      ['Ele pode revogar o consentimento a qualquer momento, interrompendo o compartilhamento dali em diante.', true, 'Correta. A revogabilidade é característica estrutural do consentimento no sistema.'],
      ['Precisa aguardar o fim do prazo de validade do consentimento.', false, 'A revogação independe do prazo restante.'],
      ['Precisa encerrar a conta na instituição transmissora.', false, 'Encerrar relacionamento não é condição para revogar consentimento.'],
      ['Só pode revogar mediante justificativa aceita pela instituição receptora.', false, 'A revogação não depende de justificativa nem de aceitação.'],
    ],
    exp: 'Autorizar e desautorizar precisam ser igualmente fáceis — é o que sustenta a ideia de que o dado é do cliente.',
    tags: ['open-finance', 'revogacao', 'atendimento'],
  }),
  q('q-of-p3', {
    c: 'c-openfinance', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar o consentimento como específico e finalístico',
    e: 'No Open Finance, o consentimento do cliente deve ser:',
    alt: [
      ['Específico quanto aos dados e às finalidades, com prazo de validade e possibilidade de revogação.', true, 'Correta. Genérico e perpétuo é exatamente o que a norma impede.'],
      ['Amplo e por prazo indeterminado, para não exigir renovações frequentes.', false, 'Consentimento genérico contraria a exigência de finalidades determinadas.'],
      ['Obtido uma única vez na abertura de conta, valendo para todas as instituições.', false, 'O consentimento é por instituição e por finalidade.'],
      ['Presumido a partir do uso do aplicativo pelo cliente.', false, 'Consentimento presumido é expressamente vedado.'],
    ],
    exp: 'Específico, temporário e revogável. Se faltar qualquer um dos três, não é consentimento válido no sistema.',
    tags: ['open-finance', 'consentimento', 'conceitual'],
  }),

  /* ---- c-asg -------------------------------------------------------------- */
  q('q-asg-p1', {
    c: 'c-asg', tipo: 'conceitual', dif: 'media',
    hab: 'Recuperar o pilar de governança dentro da sigla',
    e: 'Ao avaliar uma empresa sob critérios ASG, o pilar de GOVERNANÇA trata de:',
    alt: [
      ['Estrutura de controle, conselho, transparência, gestão de conflitos e prestação de contas.', true, 'Correta. É onde a maioria dos escândalos corporativos efetivamente acontece.'],
      ['Emissões, uso de recursos naturais e gestão de resíduos.', false, 'Isso é o pilar Ambiental.'],
      ['Relações com empregados, comunidades e fornecedores.', false, 'Isso é o pilar Social.'],
      ['Rentabilidade e solidez financeira da companhia.', false, 'Análise financeira tradicional não é o pilar de governança.'],
    ],
    exp: 'Tratar ASG como sinônimo de "ambiental" ignora justamente o pilar de maior impacto sobre risco de investimento.',
    tags: ['asg', 'governanca', 'conceitual'],
  }),
  q('q-asg-p2', {
    c: 'c-asg', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Identificar greenwashing como infração de conduta',
    ctx: 'Um produto é divulgado como "sustentável" sem critério verificável, sem metodologia divulgada e sem qualquer processo de seleção correspondente.',
    e: 'Essa divulgação:',
    alt: [
      ['Caracteriza greenwashing e é infração de conduta, por induzir o investidor a erro sobre característica essencial do produto.', true, 'Correta. Não é apenas problema de marketing.'],
      ['É aceitável, pois "sustentável" é termo de uso livre no mercado.', false, 'Rótulo que influencia decisão de investimento não é uso livre.'],
      ['Só é irregular se o produto tiver desempenho inferior ao de mercado.', false, 'A irregularidade está na informação enganosa, não no resultado.'],
      ['É irregular apenas se houver reclamação formal de investidor.', false, 'A infração independe de reclamação.'],
    ],
    exp: 'Rótulo sem processo por trás é informação enganosa sobre característica do produto — e informação enganosa tem consequência.',
    tags: ['asg', 'greenwashing', 'conduta'],
  }),

  /* ---- c-fundos-is -------------------------------------------------------- */
  q('q-fis-p1', {
    c: 'c-fundos-is', tipo: 'comparacao', dif: 'dificil',
    hab: 'Distinguir fundo IS de fundo que integra ESG',
    ctx: 'A lâmina de um fundo informa que a gestora "considera fatores ESG na análise dos ativos".',
    e: 'Essa informação, isoladamente, permite concluir que o fundo:',
    alt: [
      ['Enquadra-se na categoria que INTEGRA questões ESG, o que não autoriza apresentá-lo como sustentável no nome.', true, 'Correta. A categoria IS exige objetivo declarado de sustentabilidade.'],
      ['É um fundo de investimento sustentável (IS) e pode usar o rótulo.', false, 'Mencionar fatores na análise é justamente a categoria que NÃO autoriza o rótulo.'],
      ['Não tem qualquer relação com critérios ESG.', false, 'Tem: é a categoria de integração.'],
      ['Está irregular, pois a menção a ESG é vedada fora dos fundos IS.', false, 'A menção é permitida; o que é restrito é o rótulo no nome.'],
    ],
    exp: 'Duas categorias, exigências diferentes. Ler a lâmina e concluir "é sustentável" é o erro que a autorregulação quis impedir.',
    tags: ['fundos-is', 'esg', 'comparacao'],
  }),
  q('q-fis-p2', {
    c: 'c-fundos-is', tipo: 'conceitual', dif: 'media',
    hab: 'Caracterizar o fundo de investimento sustentável',
    e: 'Para que um fundo possa ser identificado como de investimento sustentável (IS), é necessário que:',
    alt: [
      ['A sustentabilidade seja o objetivo declarado do fundo, com metodologia e processo correspondentes.', true, 'Correta. Objetivo, não menção.'],
      ['Ao menos um dos ativos da carteira tenha certificação ambiental.', false, 'Um ativo certificado não define o objetivo do fundo.'],
      ['A gestora seja signatária de algum compromisso internacional.', false, 'Adesão institucional não substitui o objetivo e o processo do fundo.'],
      ['O fundo exclua da carteira empresas de qualquer setor controverso.', false, 'Exclusão é uma estratégia possível, não a condição da categoria.'],
    ],
    exp: 'A pergunta que separa: sustentabilidade é o OBJETIVO do fundo ou apenas um fator considerado na análise?',
    tags: ['fundos-is', 'esg', 'conceitual'],
  }),

  /* ---- c-ia-mercado ------------------------------------------------------- */
  q('q-iam-p1', {
    c: 'c-ia-mercado', tipo: 'conceitual', dif: 'media',
    hab: 'Situar a responsabilidade pelo uso de sistema de IA',
    e: 'Quando uma instituição adota um sistema de inteligência artificial de fornecedor externo para apoiar recomendações a clientes:',
    alt: [
      ['A responsabilidade perante o cliente permanece integralmente de quem oferece o serviço.', true, 'Correta. Contratar tecnologia não terceiriza dever regulatório.'],
      ['A responsabilidade passa ao fornecedor do sistema, nos termos do contrato.', false, 'Contrato entre empresas não opõe-se ao cliente nem afasta o dever da distribuidora.'],
      ['A responsabilidade é dividida igualmente entre instituição e fornecedor.', false, 'Perante o cliente, o dever é de quem presta o serviço.'],
      ['Não há responsabilidade se a decisão foi tomada automaticamente pelo sistema.', false, 'Automatizar a decisão não elimina quem responde por ela.'],
    ],
    exp: 'O dever de adequação é de quem recomenda. A ferramenta usada para recomendar é escolha dele.',
    tags: ['ia', 'responsabilidade', 'conceitual'],
  }),
  q('q-iam-p2', {
    c: 'c-ia-mercado', tipo: 'comparacao', dif: 'media',
    hab: 'Distinguir sistema de apoio de sistema decisório',
    e: 'A distinção relevante entre os usos de IA no mercado financeiro está em:',
    alt: [
      ['Se o sistema APOIA uma decisão humana ou se DECIDE sozinho — o que muda o desenho de controles e de prestação de contas.', true, 'Correta. O que varia entre casos não é a tecnologia, é o papel dela na decisão.'],
      ['Se o modelo foi treinado com dados internos ou externos.', false, 'Importa para qualidade e privacidade, mas não é a distinção estruturante.'],
      ['Se o fornecedor do sistema é nacional ou estrangeiro.', false, 'A origem do fornecedor não altera o desenho de responsabilidade.'],
      ['Se o sistema utiliza aprendizado de máquina ou regras determinísticas.', false, 'A técnica empregada não define o regime de controles.'],
    ],
    exp: 'A pergunta que organiza o tema: quem, no fim, assinou a decisão?',
    tags: ['ia', 'governanca', 'comparacao'],
  }),

  /* ---- um item por conceito ----------------------------------------------- */
  q('q-esgi-p1', {
    c: 'c-esg-investimentos', tipo: 'conceitual', dif: 'media',
    hab: 'Reconhecer a heterogeneidade das estratégias ESG',
    e: 'Dois fundos apresentados como "ESG" podem ter carteiras muito diferentes porque:',
    alt: [
      ['As estratégias variam da exclusão de setores à integração de fatores na análise financeira, passando pelo investimento de impacto.', true, 'Correta. "ESG" não é categoria homogênea de carteira.'],
      ['Um deles necessariamente descumpre a regulação aplicável.', false, 'Estratégias distintas podem ser ambas legítimas e bem divulgadas.'],
      ['O rótulo depende apenas do setor de atuação das empresas investidas.', false, 'O rótulo depende da estratégia e do processo, não só do setor.'],
      ['A diferença decorre exclusivamente do prazo médio da carteira.', false, 'Prazo não explica divergência de composição por estratégia ESG.'],
    ],
    exp: 'Um fundo que exclui petróleo e outro que investe na petrolífera com melhor transição podem carregar o mesmo rótulo.',
    tags: ['esg', 'estrategias', 'conceitual'],
  }),
  q('q-blk-p1', {
    c: 'c-blockchain', tipo: 'situacao_pratica', dif: 'media',
    hab: 'Separar segurança do registro de segurança do investimento',
    ctx: 'Um cliente afirma que determinado ativo é seguro "porque está registrado em blockchain".',
    e: 'A avaliação correta dessa afirmação é:',
    alt: [
      ['A tecnologia protege a integridade do registro, mas não protege contra volatilidade, fraude na origem ou perda de chaves.', true, 'Correta. São camadas diferentes do problema.'],
      ['A afirmação está correta: registro em blockchain elimina o risco do ativo.', false, 'Registro íntegro não torna o ativo menos volátil nem menos sujeito a fraude.'],
      ['A afirmação está correta apenas para redes públicas com muitos validadores.', false, 'O número de validadores protege o consenso, não o investidor.'],
      ['A afirmação está errada porque blockchain não permite registro de ativos.', false, 'Permite: o problema está no que se conclui daí.'],
    ],
    exp: 'A blockchain garante que o registro não mudou. Não garante que ele era verdadeiro nem que o ativo vale algo.',
    tags: ['blockchain', 'risco', 'atendimento'],
  }),
  q('q-dfi-p1', {
    c: 'c-defi', tipo: 'conceitual', dif: 'media',
    hab: 'Descrever a substituição de riscos nas finanças descentralizadas',
    e: 'Ao eliminar o intermediário, as finanças descentralizadas:',
    alt: [
      ['Substituem o risco de contraparte tradicional por risco de código, de governança e de autocustódia.', true, 'Correta. O risco não desaparece: troca de forma e de dono.'],
      ['Eliminam os riscos financeiros da operação.', false, 'Nenhum arranjo elimina risco; ele apenas muda de natureza.'],
      ['Transferem o risco integralmente ao protocolo, que responde por perdas.', false, 'Protocolo não é pessoa e não responde por nada.'],
      ['Mantêm exatamente os mesmos riscos do sistema tradicional.', false, 'Os riscos mudam de natureza — desaparece um, aparecem outros.'],
    ],
    exp: 'Sem intermediário não há quem quebre — e também não há quem responda.',
    tags: ['defi', 'risco', 'conceitual'],
  }),
  q('q-iar-p1', {
    c: 'c-ia-riscos', tipo: 'conceitual', dif: 'dificil',
    hab: 'Avaliar a suposta objetividade da saída de um modelo',
    e: 'A afirmação de que a saída de um modelo estatístico é objetiva por ser numérica:',
    alt: [
      ['É falsa: um número produzido a partir de dado enviesado é um viés com aparência de neutralidade, agora reproduzido em escala.', true, 'Correta. A forma numérica não sanea a origem do dado.'],
      ['É verdadeira, pois modelos não têm preferências pessoais.', false, 'Ausência de intenção não é ausência de viés.'],
      ['É verdadeira quando o modelo é treinado com volume suficiente de dados.', false, 'Mais dados enviesados produzem viés mais estável, não menor.'],
      ['É falsa apenas quando o modelo utiliza dados pessoais sensíveis.', false, 'O problema do viés não se restringe a dado sensível.'],
    ],
    exp: 'O risco não é o modelo inventar: é ele reproduzir com precisão uma desigualdade que já estava no dado.',
    tags: ['ia', 'vies', 'governanca'],
  }),
  q('q-fpg-p1', {
    c: 'c-fintechs-pagamentos', tipo: 'conceitual', dif: 'media',
    hab: 'Identificar os papéis em um arranjo de pagamento com cartão',
    e: 'Em uma transação com cartão, o papel de credenciar estabelecimentos para aceitar o instrumento de pagamento e liquidar os valores devidos a eles cabe:',
    alt: [
      ['Ao credenciador.', true, 'Correta. É a função de "adquirir" o estabelecimento para o arranjo.'],
      ['Ao emissor do cartão.', false, 'O emissor mantém a relação com o portador, não com o lojista.'],
      ['À bandeira.', false, 'A bandeira institui e disciplina o arranjo; não credencia nem liquida diretamente.'],
      ['Ao Banco Central.', false, 'O Bacen regula e supervisiona o arranjo; não participa da operação.'],
    ],
    exp: 'Quatro papéis distintos numa mesma transação. Trocar credenciador por bandeira é o erro mais comum do tema.',
    tags: ['fintechs', 'arranjos', 'conceitual'],
  }),
]
