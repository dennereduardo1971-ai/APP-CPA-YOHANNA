import type { Macrotema } from '../types'

/**
 * MACROTEMA 2 — Produtos do mercado financeiro.
 * É o bloco de maior peso da prova. Concentre o estudo aqui.
 *
 * NOTA EDITORIAL: alíquotas e prazos de carência mudam por legislação
 * infralegal. Onde há número tributário, o conteúdo traz a LÓGICA (que não
 * muda) e marca com ATENCAO a necessidade de conferir a tabela vigente.
 */
export const M2: Macrotema = {
  id: 'm2',
  codigo: 'PROD',
  nome: 'Produtos do mercado financeiro',
  resumo: 'Renda fixa, renda variável, fundos e previdência. O coração da prova.',
  peso: 0.4,
  pesoVerificado: false,
  ordem: 2,
  microtemas: [
    {
      id: 'm2.1',
      macrotemaId: 'm2',
      nome: 'Renda fixa',
      ordem: 1,
      preRequisitos: [],
      conceitos: [
        {
          id: 'c-rf-base',
          microtemaId: 'm2.1',
          titulo: 'Renda fixa: os três tipos de rentabilidade',
          objetivo: 'Classificar um título como prefixado, pós-fixado ou híbrido e prever seu comportamento.',
          etiquetas: ['ESSENCIAL', 'ENTENDER'],
          resumo30s:
            'Prefixado: você sabe o valor final hoje. Pós-fixado: acompanha um indexador (CDI, Selic). Híbrido: índice de preços + taxa fixa (IPCA + 6%). Só o pós-fixado protege contra alta de juros.',
          explicacao: {
            oQueE:
              'Renda fixa é um empréstimo: você entrega dinheiro ao emissor e ele devolve com uma regra de remuneração combinada desde o início.',
            paraQueServe:
              'Dar previsibilidade. A regra é conhecida na aplicação, mesmo quando o valor exato só se conhece no resgate.',
            comoFunciona: [
              'PREFIXADO: taxa fixa definida na compra (ex.: 11% ao ano). Você sabe o valor de resgate no dia da aplicação.',
              'PÓS-FIXADO: acompanha um indexador (ex.: 102% do CDI, ou Selic + 0,05%). Você não sabe o valor final, mas acompanha os juros do país.',
              'HÍBRIDO: índice de preços mais taxa real (ex.: IPCA + 6% a.a.). Garante ganho acima da inflação.',
              'Marcação a mercado: prefixados e híbridos oscilam de preço antes do vencimento. Juros sobem → preço do título cai. Juros caem → preço sobe.',
              'Levando até o vencimento, você recebe a taxa contratada — a oscilação só importa se vender antes.',
            ],
            exemploSimples:
              'Você compra um prefixado de 11% a.a. No mês seguinte, a Selic sobe e títulos novos pagam 13%. O seu, que paga 11%, vale menos para quem quiser comprar de você hoje. Se segurar até o vencimento, recebe os 11% combinados.',
            lembrarNaProva: [
              'Juros sobem, preço do prefixado cai. Relação sempre inversa.',
              'Pós-fixado atrelado a CDI/Selic é o que menos oscila.',
              'Híbrido (IPCA+) protege o poder de compra; prefixado, não.',
              'A oscilação só se materializa em perda se houver venda antecipada.',
            ],
          },
          exemplos: [
            {
              titulo: 'Qual escolher em cada cenário',
              corpo:
                'Espera queda de juros? O prefixado trava uma taxa alta e ainda se valoriza. Espera alta de juros? O pós-fixado acompanha e não sofre marcação relevante. Quer garantir poder de compra no longo prazo? Híbrido IPCA+.',
            },
          ],
          conceitoChave:
            'A relação preço-juros é inversa, e só o pós-fixado acompanha a alta de juros sem sofrer marcação.',
          pontosChave: [
            'Prefixado: valor final conhecido na aplicação',
            'Pós-fixado: segue indexador (CDI, Selic)',
            'Híbrido: IPCA + taxa real',
            'Juros ↑ → preço de prefixado/híbrido ↓',
            'Marcação a mercado só vira perda se vender antes',
          ],
          erroComum:
            'Dizer que renda fixa "não pode dar prejuízo". Pode — se houver venda antes do vencimento com juros em alta, ou calote do emissor.',
          alertaProva:
            'A banca adora o cenário "o cliente precisou resgatar antes do vencimento". Aí a marcação a mercado entra em cena.',
          tabela: {
            titulo: 'Comportamento por tipo',
            colunas: ['Tipo', 'Sabe o valor final?', 'Protege da inflação?', 'Oscila muito?'],
            linhas: [
              ['Prefixado', 'Sim', 'Não', 'Sim'],
              ['Pós-fixado (CDI/Selic)', 'Não', 'Parcialmente', 'Pouco'],
              ['Híbrido (IPCA+)', 'Só a parte real', 'Sim', 'Sim'],
            ],
          },
          perguntaRapida: {
            enunciado:
              'O Copom eleva a Selic de forma inesperada. O que acontece com o preço de um título prefixado já emitido?',
            alternativas: ['Sobe', 'Cai', 'Não se altera', 'Depende do emissor'],
            correta: 1,
            explicacao:
              'Com juros maiores no mercado, o título antigo paga menos que os novos. Para atrair comprador, seu preço cai.',
          },
          mapaMental: {
            id: 'mm-rf',
            rotulo: 'Renda fixa',
            revisao: true,
            filhos: [
              {
                id: 'mm-rf-pre',
                rotulo: 'Prefixado',
                detalhe: 'Taxa fixa · oscila com juros',
                revisao: true,
              },
              {
                id: 'mm-rf-pos',
                rotulo: 'Pós-fixado',
                detalhe: 'CDI / Selic · baixa oscilação',
                revisao: true,
              },
              {
                id: 'mm-rf-hib',
                rotulo: 'Híbrido',
                detalhe: 'IPCA + taxa real',
                revisao: true,
              },
              {
                id: 'mm-rf-mtm',
                rotulo: 'Marcação a mercado',
                detalhe: 'Juros ↑ → preço ↓',
                revisao: true,
              },
            ],
          },
          reexplicacoes: {
            simples:
              'Existem três jeitos de um título render: taxa fixa, taxa que segue os juros do país, ou inflação mais um extra.',
            exemplo:
              'Prefixado é como combinar hoje que vai receber R$ 1.100 daqui a um ano. Pós-fixado é combinar que vai receber "o que o CDI render". Híbrido é "a inflação do período + 6%".',
            analogia:
              'Prefixado é comprar passagem antecipada por preço fixo. Pós-fixado é pagar táxi por taxímetro. Híbrido é pagar o combustível do dia mais uma taxa do motorista.',
            iniciante:
              'Renda fixa é emprestar dinheiro e receber de volta com juros. A diferença entre os tipos é só a fórmula do juro combinada no começo.',
          },
          minutosEstimados: 7,
        },
        {
          id: 'c-fgc',
          microtemaId: 'm2.1',
          titulo: 'FGC — o que é coberto e o que não é',
          objetivo: 'Determinar se um produto tem cobertura do FGC e calcular o limite.',
          etiquetas: ['ESSENCIAL', 'DECORAR', 'PEGADINHA'],
          resumo30s:
            'O FGC garante até R$ 250 mil por CPF por conglomerado, com teto global de R$ 1 milhão a cada 4 anos. Cobre depósitos, poupança, CDB/RDB, LCI e LCA. NÃO cobre fundos, debêntures, CRI, CRA nem títulos públicos.',
          explicacao: {
            oQueE:
              'O Fundo Garantidor de Créditos é uma entidade privada mantida pelas próprias instituições financeiras, que devolve o dinheiro do investidor quando o emissor quebra.',
            paraQueServe:
              'Reduzir o risco de crédito de aplicações bancárias e evitar corrida bancária.',
            comoFunciona: [
              'Limite de R$ 250.000 por CPF ou CNPJ, por conglomerado financeiro, somando todos os produtos cobertos daquele grupo.',
              'Teto global de R$ 1.000.000 por CPF, renovável a cada 4 anos.',
              'Cobre: depósito à vista, poupança, CDB e RDB, LCI, LCA, letra de câmbio e letra hipotecária.',
              'NÃO cobre: fundos de investimento, debêntures, CRI, CRA, LIG, ações, títulos públicos e previdência.',
              'O valor coberto inclui o principal e os juros já acumulados até a data da intervenção.',
            ],
            exemploSimples:
              'Você tem R$ 200 mil em CDB e R$ 80 mil em LCI, ambos no mesmo banco. Total de R$ 280 mil. O FGC cobre R$ 250 mil; os R$ 30 mil restantes viram crédito na massa falida.',
            lembrarNaProva: [
              'R$ 250 mil por CPF por CONGLOMERADO — não por produto e não por banco isolado do mesmo grupo.',
              'Teto global R$ 1 milhão a cada 4 anos.',
              'CRI e CRA parecem primos da LCI/LCA, mas NÃO têm FGC.',
              'Título público não tem FGC — tem risco soberano, que é menor ainda.',
            ],
          },
          exemplos: [
            {
              titulo: 'Cálculo em conjunta',
              corpo:
                'Em conta conjunta de duas pessoas, o limite de R$ 250 mil é da conta e o valor é dividido igualmente entre os titulares, salvo regra específica do produto. Cada titular consome seu próprio teto global.',
            },
            {
              titulo: 'Por que CRI/CRA não têm',
              corpo:
                'CRI e CRA são emitidos por securitizadoras, não por instituição financeira. Sem banco emissor, não há contribuição ao FGC e não há cobertura — o risco é do lastro e do devedor original.',
            },
          ],
          conceitoChave:
            'Se quem emite é banco, provavelmente tem FGC. Se quem emite é securitizadora ou empresa, não tem.',
          pontosChave: [
            'R$ 250 mil por CPF/CNPJ por conglomerado',
            'Teto global de R$ 1 milhão a cada 4 anos',
            'Cobre: depósitos, poupança, CDB/RDB, LCI, LCA, LC, LH',
            'Não cobre: fundos, debêntures, CRI, CRA, LIG, ações, títulos públicos',
            'Principal + juros acumulados entram no limite',
          ],
          erroComum:
            'Somar o limite por produto ("R$ 250 mil no CDB e mais R$ 250 mil na LCI do mesmo banco"). O limite é único por conglomerado.',
          alertaProva:
            'A pegadinha mais frequente da prova é colocar CRI ou CRA numa lista de produtos "com garantia do FGC".',
          tabela: {
            titulo: 'Tem FGC?',
            colunas: ['Produto', 'FGC?', 'Quem emite'],
            linhas: [
              ['CDB / RDB', 'Sim', 'Banco'],
              ['LCI / LCA', 'Sim', 'Banco'],
              ['Poupança', 'Sim', 'Banco'],
              ['CRI / CRA', 'Não', 'Securitizadora'],
              ['Debênture', 'Não', 'Empresa (S.A.)'],
              ['Fundo de investimento', 'Não', 'Condomínio de investidores'],
              ['Tesouro Direto', 'Não', 'Tesouro Nacional'],
            ],
          },
          perguntaRapida: {
            enunciado:
              'Cliente tem R$ 150 mil em CDB e R$ 150 mil em LCA no mesmo conglomerado. Quanto o FGC cobre?',
            alternativas: ['R$ 300 mil', 'R$ 250 mil', 'R$ 150 mil', 'Nada, pois são produtos diferentes'],
            correta: 1,
            explicacao:
              'Os produtos somam R$ 300 mil, mas o limite por CPF por conglomerado é R$ 250 mil. Os R$ 50 mil excedentes ficam descobertos.',
          },
          mapaMental: {
            id: 'mm-fgc',
            rotulo: 'FGC',
            revisao: true,
            filhos: [
              {
                id: 'mm-fgc-lim',
                rotulo: 'Limites',
                revisao: true,
                filhos: [
                  { id: 'mm-fgc-1', rotulo: 'R$ 250 mil', detalhe: 'Por CPF, por conglomerado', revisao: true },
                  { id: 'mm-fgc-2', rotulo: 'R$ 1 milhão', detalhe: 'Teto global / 4 anos', revisao: true },
                ],
              },
              {
                id: 'mm-fgc-sim',
                rotulo: 'Cobre',
                revisao: true,
                filhos: [
                  { id: 'mm-fgc-3', rotulo: 'CDB / RDB' },
                  { id: 'mm-fgc-4', rotulo: 'LCI / LCA' },
                  { id: 'mm-fgc-5', rotulo: 'Poupança e depósitos' },
                ],
              },
              {
                id: 'mm-fgc-nao',
                rotulo: 'NÃO cobre',
                revisao: true,
                filhos: [
                  { id: 'mm-fgc-6', rotulo: 'CRI / CRA', revisao: true },
                  { id: 'mm-fgc-7', rotulo: 'Debêntures' },
                  { id: 'mm-fgc-8', rotulo: 'Fundos' },
                  { id: 'mm-fgc-9', rotulo: 'Títulos públicos' },
                ],
              },
            ],
          },
          reexplicacoes: {
            simples:
              'O FGC é um seguro dos bancos. Se o banco quebrar, ele devolve até R$ 250 mil por pessoa naquele grupo de bancos.',
            exemplo:
              'Banco X quebra. Você tinha R$ 250 mil em CDB lá. O FGC devolve. Se você tivesse R$ 400 mil, receberia R$ 250 mil e entraria na fila da falência pelo resto.',
            analogia:
              'É o seguro do carro, mas com valor máximo de cobertura. Acima do teto, o prejuízo é seu.',
            iniciante:
              'Se o banco onde você aplicou falir, existe um fundo que devolve o seu dinheiro até um limite de R$ 250 mil. Mas ele só cobre alguns tipos de aplicação — as feitas dentro de bancos.',
          },
          minutosEstimados: 8,
        },
        {
          id: 'c-rf-tributacao',
          microtemaId: 'm2.1',
          titulo: 'Tributação da renda fixa: a lógica regressiva',
          objetivo: 'Aplicar a lógica da tabela regressiva e identificar os produtos isentos para PF.',
          etiquetas: ['ESSENCIAL', 'ATENCAO', 'DECORAR'],
          resumo30s:
            'Quanto mais tempo aplicado, menor a alíquota de IR — a tabela é regressiva e vai de 22,5% a 15%. LCI, LCA, CRI, CRA e debênture incentivada são isentos para pessoa física. O IR incide só sobre o rendimento.',
          explicacao: {
            oQueE:
              'A tributação da renda fixa é feita por imposto de renda retido na fonte, com alíquota que cai conforme o prazo da aplicação.',
            paraQueServe:
              'Incentivar a poupança de longo prazo: quem deixa o dinheiro mais tempo paga menos imposto.',
            comoFunciona: [
              'A alíquota incide apenas sobre o RENDIMENTO, nunca sobre o valor aplicado.',
              'Tabela regressiva usual: até 180 dias 22,5%; de 181 a 360 dias 20%; de 361 a 720 dias 17,5%; acima de 720 dias 15%.',
              'Há ainda IOF regressivo nos resgates com menos de 30 dias, que zera a partir do 30º dia.',
              'São isentos de IR para pessoa física: LCI, LCA, CRI, CRA, poupança e debêntures incentivadas (infraestrutura).',
              'Para pessoa jurídica não há essa isenção — a lógica muda.',
            ],
            exemploSimples:
              'Aplicou R$ 10.000 num CDB e resgatou após 2 anos com R$ 12.000. O rendimento foi R$ 2.000. Acima de 720 dias a alíquota é 15%, então o IR é R$ 300 e você recebe R$ 11.700.',
            lembrarNaProva: [
              'IR sobre o rendimento, não sobre o principal.',
              'Regressiva: mais prazo = menos imposto. Piso de 15%.',
              'Isentos para PF: LCI, LCA, CRI, CRA, poupança, debênture incentivada.',
              'Debênture comum NÃO é isenta. Só a incentivada.',
              'IOF morde só nos primeiros 30 dias.',
            ],
          },
          exemplos: [
            {
              titulo: 'Comparando bruto e líquido',
              corpo:
                'Um CDB a 100% do CDI e uma LCI a 90% do CDI podem ter o mesmo retorno líquido: a LCI é isenta e o CDB paga IR. Sempre compare o líquido, nunca o bruto.',
            },
          ],
          conceitoChave:
            'Compare sempre rendimento LÍQUIDO. Um produto isento com taxa menor pode render mais que um tributado com taxa maior.',
          pontosChave: [
            'Tabela regressiva de 22,5% a 15%',
            'Base de cálculo: apenas o rendimento',
            'IOF regressivo até 29 dias',
            'Isentos PF: LCI, LCA, CRI, CRA, poupança, debênture incentivada',
            'Debênture comum é tributada normalmente',
          ],
          erroComum:
            'Comparar taxas brutas entre um produto isento e um tributado. É a comparação errada — e a que a banca usa para pegar o candidato.',
          alertaProva:
            'ALÍQUOTAS E PRAZOS MUDAM POR LEGISLAÇÃO. A lógica regressiva é estável, mas confirme os percentuais vigentes no material oficial antes da prova.',
          tabela: {
            titulo: 'Tabela regressiva de IR (renda fixa)',
            colunas: ['Prazo da aplicação', 'Alíquota'],
            linhas: [
              ['Até 180 dias', '22,5%'],
              ['De 181 a 360 dias', '20,0%'],
              ['De 361 a 720 dias', '17,5%'],
              ['Acima de 720 dias', '15,0%'],
            ],
          },
          perguntaRapida: {
            enunciado:
              'Resgate de CDB após 400 dias, com rendimento de R$ 1.000. Qual o IR devido?',
            alternativas: ['R$ 150', 'R$ 175', 'R$ 200', 'R$ 225'],
            correta: 1,
            explicacao:
              '400 dias está na faixa de 361 a 720 dias, cuja alíquota é 17,5%. 17,5% de R$ 1.000 = R$ 175.',
          },
          mapaMental: {
            id: 'mm-trib',
            rotulo: 'Tributação RF',
            revisao: true,
            filhos: [
              {
                id: 'mm-trib-reg',
                rotulo: 'Regressiva',
                revisao: true,
                filhos: [
                  { id: 'mm-trib-1', rotulo: 'até 180d — 22,5%', revisao: true },
                  { id: 'mm-trib-2', rotulo: '181–360d — 20%', revisao: true },
                  { id: 'mm-trib-3', rotulo: '361–720d — 17,5%', revisao: true },
                  { id: 'mm-trib-4', rotulo: '> 720d — 15%', revisao: true },
                ],
              },
              {
                id: 'mm-trib-is',
                rotulo: 'Isentos (PF)',
                revisao: true,
                filhos: [
                  { id: 'mm-trib-5', rotulo: 'LCI / LCA' },
                  { id: 'mm-trib-6', rotulo: 'CRI / CRA' },
                  { id: 'mm-trib-7', rotulo: 'Poupança' },
                  { id: 'mm-trib-8', rotulo: 'Debênture incentivada', revisao: true },
                ],
              },
              { id: 'mm-trib-iof', rotulo: 'IOF', detalhe: 'Regressivo até 29 dias' },
            ],
          },
          reexplicacoes: {
            simples:
              'Quanto mais tempo o dinheiro fica aplicado, menos imposto você paga. Começa em 22,5% e chega ao mínimo de 15% depois de dois anos.',
            exemplo:
              'Rendeu R$ 1.000 em 100 dias? Paga 22,5% = R$ 225. Rendeu os mesmos R$ 1.000 em 3 anos? Paga 15% = R$ 150.',
            analogia:
              'É como desconto por fidelidade: quanto mais tempo você fica, menor a taxa que o governo cobra.',
            iniciante:
              'O imposto só pega o lucro, nunca o que você aplicou. E quanto mais tempo você deixar parado, menor a porcentagem cobrada.',
          },
          minutosEstimados: 8,
        },
      ],
    },
    {
      id: 'm2.2',
      macrotemaId: 'm2',
      nome: 'Fundos de investimento',
      ordem: 2,
      preRequisitos: ['m2.1'],
      conceitos: [
        {
          id: 'c-fundos',
          microtemaId: 'm2.2',
          titulo: 'Fundos: cota, taxas e quem é quem',
          objetivo: 'Explicar como a cota se forma e distinguir taxa de administração de taxa de performance.',
          etiquetas: ['ESSENCIAL', 'ENTENDER'],
          resumo30s:
            'Fundo é um condomínio. Você compra cotas, não ativos. A taxa de administração já está descontada na cota divulgada. A taxa de performance só pode ser cobrada acima de um benchmark e respeitando a linha d\'água.',
          explicacao: {
            oQueE:
              'Um condomínio de investidores: o dinheiro de todos é somado e aplicado em conjunto por um gestor profissional.',
            paraQueServe:
              'Dar acesso a diversificação e gestão profissional com aportes pequenos.',
            comoFunciona: [
              'O patrimônio do fundo é dividido em cotas. Valor da cota = patrimônio líquido ÷ número de cotas.',
              'Você nunca é dono direto dos ativos — é dono de cotas.',
              'ADMINISTRADOR: responsável legal pelo fundo perante a CVM e os cotistas. GESTOR: decide onde investir. CUSTODIANTE: guarda os ativos. DISTRIBUIDOR: vende as cotas.',
              'Taxa de administração: percentual anual sobre o patrimônio, provisionada diariamente. A cota divulgada JÁ está líquida dela.',
              'Taxa de performance: cobrada só sobre o que exceder um índice de referência, no mínimo semestralmente e sujeita à linha d\'água — só volta a cobrar depois de recuperar prejuízo anterior.',
              'A rentabilidade passada não é garantia de retorno futuro, e o fundo não tem garantia do FGC.',
            ],
            exemploSimples:
              'Fundo com patrimônio de R$ 1 milhão e 1.000 cotas: cada cota vale R$ 1.000. Se o patrimônio sobe para R$ 1,1 milhão sem novos aportes, a cota vai a R$ 1.100 — alta de 10%.',
            lembrarNaProva: [
              'Cota = PL ÷ nº de cotas.',
              'Taxa de administração já está descontada da cota divulgada.',
              'Taxa de performance: só acima do benchmark, com linha d\'água.',
              'Administrador responde perante a CVM; gestor toma a decisão de investimento.',
              'Fundo NÃO tem FGC.',
            ],
          },
          exemplos: [
            {
              titulo: 'Linha d\'água na prática',
              corpo:
                'O fundo rendeu acima do benchmark e cobrou performance. No semestre seguinte cai 5%. Ele não pode cobrar performance de novo até recuperar essa queda — do contrário, cobraria duas vezes pelo mesmo ganho.',
            },
          ],
          conceitoChave:
            'Você compra cotas de um condomínio, não os ativos. E a rentabilidade que você vê já é líquida de taxa de administração.',
          pontosChave: [
            'Cota = patrimônio líquido ÷ número de cotas',
            'Administrador: responsável legal. Gestor: decisão de investimento',
            'Taxa de administração já embutida na cota',
            'Taxa de performance: acima do benchmark + linha d\'água',
            'Sem FGC',
          ],
          erroComum:
            'Descontar a taxa de administração da rentabilidade divulgada. Ela já foi descontada — descontar de novo é contar duas vezes.',
          alertaProva:
            'Questão comum: "a rentabilidade divulgada é bruta ou líquida de taxa de administração?" — Líquida.',
          tabela: {
            titulo: 'Quem faz o quê no fundo',
            colunas: ['Prestador', 'Responsabilidade'],
            linhas: [
              ['Administrador', 'Responde pelo fundo perante CVM e cotistas'],
              ['Gestor', 'Escolhe os ativos'],
              ['Custodiante', 'Guarda e liquida os ativos'],
              ['Distribuidor', 'Capta e atende o cotista'],
              ['Auditor independente', 'Audita as demonstrações'],
            ],
          },
          perguntaRapida: {
            enunciado: 'A rentabilidade divulgada por um fundo é:',
            alternativas: [
              'Bruta, antes da taxa de administração',
              'Líquida de taxa de administração, mas antes de IR',
              'Líquida de todas as taxas e impostos',
              'Sempre garantida pelo administrador',
            ],
            correta: 1,
            explicacao:
              'A cota já está líquida da taxa de administração. O IR é recolhido no resgate ou via come-cotas, dependendo da classe.',
          },
          mapaMental: {
            id: 'mm-fundos',
            rotulo: 'Fundos',
            revisao: true,
            filhos: [
              { id: 'mm-f-cota', rotulo: 'Cota', detalhe: 'PL ÷ nº de cotas', revisao: true },
              {
                id: 'mm-f-quem',
                rotulo: 'Prestadores',
                revisao: true,
                filhos: [
                  { id: 'mm-f-1', rotulo: 'Administrador', detalhe: 'Responsável legal', revisao: true },
                  { id: 'mm-f-2', rotulo: 'Gestor', detalhe: 'Decide investimentos', revisao: true },
                  { id: 'mm-f-3', rotulo: 'Custodiante' },
                  { id: 'mm-f-4', rotulo: 'Distribuidor' },
                ],
              },
              {
                id: 'mm-f-taxas',
                rotulo: 'Taxas',
                revisao: true,
                filhos: [
                  { id: 'mm-f-5', rotulo: 'Administração', detalhe: 'Já na cota', revisao: true },
                  { id: 'mm-f-6', rotulo: 'Performance', detalhe: 'Acima do benchmark + linha d\'água', revisao: true },
                ],
              },
              { id: 'mm-f-fgc', rotulo: 'Sem FGC', revisao: true },
            ],
          },
          reexplicacoes: {
            simples:
              'Fundo é um bolo feito com o dinheiro de várias pessoas. Cada uma tem uma fatia (cota). Um gestor decide onde investir o bolo inteiro.',
            exemplo:
              'Cem pessoas colocam R$ 1.000 cada. O fundo tem R$ 100 mil e 100 cotas de R$ 1.000. Se o gestor faz o bolo virar R$ 110 mil, cada cota passa a valer R$ 1.100.',
            analogia:
              'É um ônibus fretado: você não dirige e não escolhe a rota, mas divide o custo e chega ao mesmo destino que todos.',
            iniciante:
              'Você entrega o dinheiro a um profissional que investe junto com o de outras pessoas. Em troca, recebe pedaços chamados cotas, e paga uma taxa por esse serviço.',
          },
          minutosEstimados: 8,
        },
      ],
    },
    {
      id: 'm2.3',
      macrotemaId: 'm2',
      nome: 'Renda variável e previdência',
      ordem: 3,
      preRequisitos: ['m2.1'],
      conceitos: [
        {
          id: 'c-acoes',
          microtemaId: 'm2.3',
          titulo: 'Ações: o que o acionista realmente compra',
          objetivo: 'Diferenciar ON e PN e reconhecer as formas de remuneração do acionista.',
          etiquetas: ['ESSENCIAL', 'ENTENDER'],
          resumo30s:
            'Ação é um pedaço da empresa. ON dá voto; PN dá preferência nos proventos. O retorno vem de valorização mais proventos (dividendos e JCP). Não há garantia nenhuma — nem de retorno, nem de capital.',
          explicacao: {
            oQueE:
              'A menor fração do capital social de uma sociedade anônima. Quem compra vira sócio, não credor.',
            paraQueServe:
              'Participar do resultado de uma empresa — e assumir o risco desse resultado.',
            comoFunciona: [
              'ON (ordinária): dá direito a voto nas assembleias.',
              'PN (preferencial): em regra não vota, mas tem preferência na distribuição de proventos e no reembolso de capital.',
              'Unit: um pacote que combina ações de classes diferentes, negociado como um único ativo.',
              'O acionista ganha de duas formas: valorização da ação e proventos.',
              'Proventos: dividendos (parcela do lucro), JCP (juros sobre capital próprio, que é despesa dedutível para a empresa), bonificação e direito de subscrição.',
              'Tag along: em caso de venda do controle, o minoritário tem direito de vender suas ações por, no mínimo, 80% do valor pago ao controlador — percentual que pode ser maior conforme o segmento de listagem.',
            ],
            exemploSimples:
              'Você compra 100 ações a R$ 20. A empresa distribui R$ 1 por ação em dividendos e a ação sobe para R$ 23. Seu retorno é R$ 300 de valorização + R$ 100 de dividendo.',
            lembrarNaProva: [
              'ON vota; PN tem preferência nos proventos.',
              'Ação não tem FGC e não tem garantia de retorno.',
              'JCP é despesa dedutível para a empresa; dividendo não é.',
              'Tag along mínimo legal para ON: 80%.',
            ],
          },
          exemplos: [
            {
              titulo: 'Por que existe o JCP',
              corpo:
                'O JCP é contabilizado como despesa financeira pela empresa, reduzindo o lucro tributável dela. Por isso muitas companhias preferem distribuir JCP a dividendos — mesmo que, para o investidor, o tratamento tributário seja diferente.',
            },
          ],
          conceitoChave:
            'Acionista é sócio, não credor. Não existe promessa de devolução do capital.',
          pontosChave: [
            'ON = voto; PN = preferência em proventos',
            'Retorno = valorização + proventos',
            'Proventos: dividendos, JCP, bonificação, subscrição',
            'Tag along mínimo de 80% para ON',
            'Sem FGC e sem garantia de capital',
          ],
          erroComum:
            'Tratar ação como se tivesse alguma proteção contra perda. Não tem. O acionista é o último a receber em caso de falência.',
          alertaProva:
            'O tratamento tributário de dividendos e JCP passou por mudanças legislativas recentes. Confirme as regras vigentes no material oficial — a lógica societária cobrada aqui não muda, mas as alíquotas sim.',
          tabela: {
            titulo: 'ON x PN',
            colunas: ['Característica', 'ON', 'PN'],
            linhas: [
              ['Direito a voto', 'Sim', 'Em regra, não'],
              ['Preferência em proventos', 'Não', 'Sim'],
              ['Tag along legal mínimo', '80%', 'Não obrigatório por lei'],
              ['Preferência no reembolso', 'Não', 'Sim'],
            ],
          },
          perguntaRapida: {
            enunciado: 'A principal característica de uma ação preferencial (PN) é:',
            alternativas: [
              'Garantir rentabilidade mínima ao acionista',
              'Dar direito a voto em todas as assembleias',
              'Ter preferência na distribuição de proventos',
              'Ser garantida pelo FGC',
            ],
            correta: 2,
            explicacao:
              'A PN troca o direito de voto por preferência nos proventos e no reembolso de capital. Não há garantia de rentabilidade nem FGC.',
          },
          mapaMental: {
            id: 'mm-acoes',
            rotulo: 'Ações',
            revisao: true,
            filhos: [
              {
                id: 'mm-ac-tipos',
                rotulo: 'Tipos',
                revisao: true,
                filhos: [
                  { id: 'mm-ac-1', rotulo: 'ON', detalhe: 'Voto · tag along 80%', revisao: true },
                  { id: 'mm-ac-2', rotulo: 'PN', detalhe: 'Preferência em proventos', revisao: true },
                  { id: 'mm-ac-3', rotulo: 'Unit', detalhe: 'Pacote de classes' },
                ],
              },
              {
                id: 'mm-ac-prov',
                rotulo: 'Proventos',
                revisao: true,
                filhos: [
                  { id: 'mm-ac-4', rotulo: 'Dividendos' },
                  { id: 'mm-ac-5', rotulo: 'JCP', detalhe: 'Dedutível para a empresa', revisao: true },
                  { id: 'mm-ac-6', rotulo: 'Bonificação' },
                  { id: 'mm-ac-7', rotulo: 'Subscrição' },
                ],
              },
              { id: 'mm-ac-risco', rotulo: 'Sem garantia', detalhe: 'Sem FGC · sócio, não credor', revisao: true },
            ],
          },
          reexplicacoes: {
            simples:
              'Comprar ação é virar dono de um pedacinho da empresa. Se ela vai bem, seu pedaço vale mais e você recebe parte do lucro. Se vai mal, perde.',
            exemplo:
              'Uma padaria vale R$ 100 mil e foi dividida em 1.000 partes. Comprando uma parte por R$ 100, você é dono de 0,1% da padaria — e do lucro dela.',
            analogia:
              'Emprestar dinheiro (renda fixa) é ser o banco da empresa. Comprar ação é ser sócio dela. O banco recebe primeiro; o sócio recebe o que sobrar.',
            iniciante:
              'Ação é um pedaço de empresa vendido na bolsa. Quem compra ganha se a empresa valorizar e recebe parte dos lucros. Mas pode perder dinheiro, e ninguém devolve.',
          },
          minutosEstimados: 7,
        },
        {
          id: 'c-previdencia',
          microtemaId: 'm2.3',
          titulo: 'PGBL x VGBL: escolher pelo imposto de renda',
          objetivo: 'Recomendar o plano correto a partir do modelo de declaração do cliente.',
          etiquetas: ['ESSENCIAL', 'DECORAR', 'PEGADINHA'],
          resumo30s:
            'PGBL: para quem declara no COMPLETO e é contribuinte do INSS — deduz até 12% da renda bruta; no resgate o IR pega TUDO. VGBL: para quem declara no SIMPLIFICADO ou é isento — sem dedução, e o IR pega SÓ o rendimento.',
          explicacao: {
            oQueE:
              'Dois planos de previdência complementar aberta, supervisionados pela SUSEP. A diferença central é tributária.',
            paraQueServe:
              'Acumular recursos para o longo prazo com um tratamento de imposto escolhido conforme o perfil fiscal do cliente.',
            comoFunciona: [
              'PGBL: permite deduzir as contribuições da base de cálculo do IR, limitado a 12% da renda bruta anual tributável. Exige declaração no modelo COMPLETO e contribuição ao INSS ou regime próprio.',
              'No resgate do PGBL, o IR incide sobre o VALOR TOTAL resgatado — principal mais rendimento.',
              'VGBL: não permite dedução. No resgate, o IR incide APENAS sobre o rendimento.',
              'Em ambos, o titular escolhe o regime tributário: progressivo (tabela do IR, com ajuste na declaração) ou regressivo (alíquota cai com o tempo, chegando ao piso após 10 anos).',
              'A escolha do regime regressivo costuma ser irreversível — atenção ao recomendar.',
            ],
            exemploSimples:
              'Cliente com renda tributável de R$ 200 mil/ano que declara no completo pode aportar até R$ 24 mil em PGBL e abater esse valor da base do IR naquele ano. Se ele fosse isento, o PGBL não traria vantagem alguma.',
            lembrarNaProva: [
              'PGBL → completo + contribui ao INSS → deduz até 12%.',
              'PGBL: IR no resgate sobre o TOTAL.',
              'VGBL → simplificado ou isento → sem dedução.',
              'VGBL: IR no resgate só sobre o RENDIMENTO.',
              'Regime regressivo tende a ser irreversível.',
            ],
          },
          exemplos: [
            {
              titulo: 'O erro que custa dinheiro ao cliente',
              corpo:
                'Vender PGBL a um cliente isento de IR é o pior cenário: ele não aproveita a dedução (o benefício do produto) e ainda paga imposto sobre o valor total no resgate. Nesse caso o VGBL é claramente melhor.',
            },
          ],
          conceitoChave:
            'PGBL para quem declara no completo. VGBL para quem declara no simplificado ou é isento. A pergunta certa é sobre a declaração, não sobre o valor do aporte.',
          pontosChave: [
            'PGBL: deduz até 12% da renda bruta anual',
            'PGBL: IR no resgate sobre o total',
            'VGBL: sem dedução; IR só sobre o rendimento',
            'Ambos: SUSEP, e escolha entre regime progressivo e regressivo',
            'Regime regressivo: piso após 10 anos, e normalmente irreversível',
          ],
          erroComum:
            'Recomendar PGBL pelo tamanho do aporte. O que decide é o modelo de declaração e a contribuição ao INSS — não o valor.',
          alertaProva:
            'Enunciado que diz "cliente isento de imposto de renda" está sinalizando VGBL. Enunciado com "declara no modelo completo" está sinalizando PGBL.',
          tabela: {
            titulo: 'PGBL x VGBL',
            colunas: ['', 'PGBL', 'VGBL'],
            linhas: [
              ['Dedução na declaração', 'Sim, até 12% da renda bruta', 'Não'],
              ['Perfil indicado', 'Declara no completo e contribui ao INSS', 'Simplificado ou isento'],
              ['IR no resgate incide sobre', 'Valor total', 'Somente o rendimento'],
              ['Supervisor', 'SUSEP', 'SUSEP'],
            ],
          },
          perguntaRapida: {
            enunciado:
              'Cliente é isento de imposto de renda e quer começar a poupar para a aposentadoria. O plano indicado é:',
            alternativas: [
              'PGBL, para aproveitar a dedução de 12%',
              'VGBL, pois não há dedução a aproveitar e o IR incide só sobre o rendimento',
              'PGBL, pois o IR será menor no resgate',
              'Indiferente — os dois têm o mesmo tratamento',
            ],
            correta: 1,
            explicacao:
              'Sem IR a pagar, a dedução do PGBL não vale nada, e ele ainda tributaria o valor total no resgate. VGBL é a recomendação correta.',
          },
          mapaMental: {
            id: 'mm-prev',
            rotulo: 'Previdência aberta',
            revisao: true,
            filhos: [
              {
                id: 'mm-prev-pgbl',
                rotulo: 'PGBL',
                revisao: true,
                filhos: [
                  { id: 'mm-prev-1', rotulo: 'Deduz até 12%', detalhe: 'Requer declaração completa', revisao: true },
                  { id: 'mm-prev-2', rotulo: 'IR sobre o TOTAL', revisao: true },
                ],
              },
              {
                id: 'mm-prev-vgbl',
                rotulo: 'VGBL',
                revisao: true,
                filhos: [
                  { id: 'mm-prev-3', rotulo: 'Sem dedução' },
                  { id: 'mm-prev-4', rotulo: 'IR só sobre o RENDIMENTO', revisao: true },
                ],
              },
              {
                id: 'mm-prev-reg',
                rotulo: 'Regimes',
                filhos: [
                  { id: 'mm-prev-5', rotulo: 'Progressivo', detalhe: 'Tabela do IR' },
                  { id: 'mm-prev-6', rotulo: 'Regressivo', detalhe: 'Piso após 10 anos', revisao: true },
                ],
              },
              { id: 'mm-prev-sup', rotulo: 'SUSEP', detalhe: 'Previdência ABERTA', revisao: true },
            ],
          },
          reexplicacoes: {
            simples:
              'PGBL abate imposto agora, mas cobra sobre tudo depois. VGBL não abate nada agora, e depois cobra só do lucro.',
            exemplo:
              'Quem paga muito IR e declara no completo ganha com o PGBL. Quem não paga IR nenhum não ganha nada com o PGBL — para essa pessoa, VGBL.',
            analogia:
              'PGBL é adiar a conta: você não paga hoje, paga tudo lá na frente. VGBL é pagar em dia: sem desconto agora, mas depois só sobre o que você ganhou a mais.',
            iniciante:
              'São dois tipos de plano de aposentadoria. Um serve para quem paga bastante imposto de renda; o outro, para quem paga pouco ou nada. A pergunta que decide é como a pessoa faz a declaração.',
          },
          minutosEstimados: 8,
        },
      ],
    },
  ],
}
