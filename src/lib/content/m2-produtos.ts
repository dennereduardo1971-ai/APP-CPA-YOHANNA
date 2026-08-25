import type { Macrotema } from '../types'
import { CONCEITOS_2_1_RF } from './m2-1-renda-fixa'
import { CONCEITOS_2_3 } from './m2-3-financiamento'
import { CONCEITOS_2_4 } from './m2-4-servicos'
import { CONCEITOS_2_5 } from './m2-5-seguros'

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
  pesoVerificado: true,
  ordem: 2,
  microtemas: [
    {
      id: 'm2.1',
      macrotemaId: 'm2',
      codigo: '2.1',
      nome: 'Produtos de investimentos',
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
            porQueImporta:
              'A escolha entre prefixado, pós-fixado e híbrido é a recomendação mais frequente no atendimento. E é onde mora a marcação a mercado, que assusta o cliente e cai na prova.',
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
            exemploAplicado:
              'O cliente quer aplicar a reserva de emergência e pergunta sobre um prefixado de 12% que o gerente ofereceu. Reserva de emergência precisa de liquidez e de valor estável: o indicado é o pós-fixado atrelado à Selic, porque o prefixado oscila se ele precisar sacar antes do vencimento.',
            lembrarNaProva: [
              'Juros sobem, preço do prefixado cai. Relação sempre inversa.',
              'Pós-fixado atrelado a CDI/Selic é o que menos oscila.',
              'Híbrido (IPCA+) protege o poder de compra; prefixado, não.',
              'A oscilação só se materializa em perda se houver venda antecipada.',
            ],
            revisaoRapida: [
              'Prefixado: taxa conhecida na contratação.',
              'Pós-fixado: acompanha um indexador (CDI, Selic).',
              'Híbrido: índice de preços mais uma taxa real.',
              'Juros sobem, preço do prefixado cai — relação sempre inversa.',
              'Levando ao vencimento, você recebe a taxa contratada.',
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
          niveis: {
            entenda:
              'Renda fixa é emprestar dinheiro com a regra do juro combinada desde o início. O que muda entre os três tipos é só essa regra.',
            aprofunde:
              'A marcação a mercado é consequência direta do desconto de fluxo de caixa: o preço de um título é o valor presente dos pagamentos futuros, descontados pela taxa que o mercado exige hoje. Se a taxa exigida sobe, o denominador cresce e o preço cai. Quanto mais longo o título, mais sensível ele é — e essa sensibilidade tem nome, duration, que aparece no item 1.3 do programa. O pós-fixado quase não oscila porque sua taxa se reajusta junto com o mercado, e é por isso que ele é o instrumento de liquidez por excelência. No híbrido, só a parcela prefixada oscila; a correção pelo índice de preços é sempre incorporada ao principal.',
          },
          versao: 2,
          atualizadoEm: '2026-08-24',
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
            porQueImporta:
              'O FGC é o que permite recomendar um banco médio com segurança. Saber o limite e, principalmente, o que fica de fora, evita a recomendação errada e resolve uma das pegadinhas mais repetidas da prova.',
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
            exemploAplicado:
              'O cliente tem R$ 400 mil e quer tudo no CDB de um banco médio que paga 120% do CDI. A recomendação correta é dividir: até R$ 250 mil naquele conglomerado e o restante em outro grupo financeiro, ou em título público, que não precisa de FGC porque o risco é soberano.',
            lembrarNaProva: [
              'R$ 250 mil por CPF por CONGLOMERADO — não por produto e não por banco isolado do mesmo grupo.',
              'Teto global R$ 1 milhão a cada 4 anos.',
              'CRI e CRA parecem primos da LCI/LCA, mas NÃO têm FGC.',
              'Título público não tem FGC — tem risco soberano, que é menor ainda.',
            ],
            revisaoRapida: [
              'R$ 250 mil por CPF/CNPJ, por conglomerado — não por produto.',
              'Teto global de R$ 1 milhão a cada 4 anos.',
              'Cobre: depósitos, poupança, CDB, RDB, LCI, LCA, LC e LH.',
              'Não cobre: fundos, debêntures, CRI, CRA nem títulos públicos.',
              'CRI e CRA parecem primos da LCI/LCA, mas não têm FGC.',
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
          niveis: {
            entenda:
              'O FGC é um seguro do sistema bancário: se o banco quebrar, ele devolve até R$ 250 mil por pessoa naquele grupo.',
            aprofunde:
              'O FGC é uma associação privada mantida pelas próprias instituições, que contribuem mensalmente sobre o saldo dos depósitos garantidos — não é dinheiro público. Por isso a cobertura depende da saúde do fundo, e o teto global de R$ 1 milhão a cada quatro anos existe para impedir que um mesmo investidor consuma a garantia repetidamente. Títulos públicos ficam de fora por um motivo conceitual, não por esquecimento: o emissor é o Tesouro Nacional, e não faria sentido um fundo privado garantir o risco soberano. Para as cooperativas de crédito o equivalente é o FGCCoop. Em 2026 a Resolução CMN 5.295 endureceu as regras de captação com garantia do FGC, criando um gatilho ligado à qualidade dos ativos do emissor — o limite de cobertura do investidor, porém, não mudou.',
          },
          versao: 2,
          atualizadoEm: '2026-08-24',
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
            porQueImporta:
              'Comparar dois produtos sem considerar o imposto leva à recomendação errada, e a banca constrói a questão exatamente assim: um produto tributado com taxa maior contra um isento com taxa menor.',
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
            exemploAplicado:
              'O cliente compara um CDB a 100% do CDI com uma LCI a 92% do CDI, ambos por dois anos. O CDB paga 15% de IR sobre o rendimento; a LCI é isenta para pessoa física. Depois do imposto, a LCI a 92% supera o CDB — a comparação só faz sentido no líquido.',
            lembrarNaProva: [
              'IR sobre o rendimento, não sobre o principal.',
              'Regressiva: mais prazo = menos imposto. Piso de 15%.',
              'Isentos para PF: LCI, LCA, CRI, CRA, poupança, debênture incentivada.',
              'Debênture comum NÃO é isenta. Só a incentivada.',
              'IOF morde só nos primeiros 30 dias.',
            ],
            revisaoRapida: [
              'Tabela regressiva: 22,5% / 20% / 17,5% / 15% conforme o prazo.',
              'O IR incide só sobre o rendimento, nunca sobre o principal.',
              'Isentos para PF: LCI, LCA, CRI, CRA e debênture incentivada.',
              'IOF regressivo só nos resgates com menos de 30 dias.',
              'Compare sempre taxa líquida contra taxa líquida.',
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
            'Alíquotas conferidas em 24/08/2026: Lei 11.033/2004 (tabela regressiva e isenções) e Decreto 6.306/2007 (IOF). A MP 1.303/2025, que propunha alíquota única de 17,5% e 5% sobre os títulos isentos, NÃO virou lei. Ainda assim, alíquotas mudam por legislação — confirme antes da prova.',
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
          niveis: {
            entenda:
              'Quanto mais tempo o dinheiro fica aplicado, menor a fatia de imposto sobre o lucro. E alguns títulos não pagam imposto nenhum para pessoa física.',
            aprofunde:
              'A lógica regressiva vem da Lei 11.033/2004 e existe para desestimular o giro de curto prazo, alongando o funding do sistema. O IOF do Decreto 6.306/2007 reforça a mesma intenção nos primeiros 30 dias, com uma tabela que começa em 96% do rendimento no primeiro dia e zera no trigésimo — e ele incide antes do IR, reduzindo a base de cálculo deste. A isenção de LCI, LCA, CRI e CRA não é um favor ao investidor: é um subsídio dirigido aos setores imobiliário e do agronegócio, que barateia o funding desses créditos. O mesmo raciocínio vale para as debêntures incentivadas da Lei 12.431/2011, voltadas a projetos de infraestrutura. Vale notar que a MP 1.303/2025, que propunha alíquota única de 17,5% e tributar os isentos em 5%, não foi convertida em lei.',
          },
          versao: 2,
          atualizadoEm: '2026-08-24',
          minutosEstimados: 8,
        },
        {
          id: 'c-fundos',
          microtemaId: 'm2.1',
          titulo: 'Fundos: cota, taxas e quem é quem',
          objetivo: 'Explicar como a cota se forma e distinguir taxa de administração de taxa de performance.',
          etiquetas: ['ESSENCIAL', 'ENTENDER'],
          resumo30s:
            'Fundo é um condomínio. Você compra cotas, não ativos. A taxa de administração já está descontada na cota divulgada. A taxa de performance só pode ser cobrada acima de um benchmark e respeitando a linha d\'água.',
          explicacao: {
            oQueE:
              'Um condomínio de investidores: o dinheiro de todos é somado e aplicado em conjunto por um gestor profissional.',
            porQueImporta:
              'Fundo é o produto com mais participantes e mais taxas, e a prova cobra justamente quem responde pelo quê e qual taxa incide quando. Confundir administrador com gestor é erro clássico.',
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
            exemploAplicado:
              'O cliente reclama que o fundo rendeu 8% mas ele viu 8,4% no material de divulgação. A taxa de administração já está deduzida da cota divulgada — o que ele viu era o retorno bruto da carteira, e a diferença é exatamente a taxa provisionada dia a dia.',
            lembrarNaProva: [
              'Cota = PL ÷ nº de cotas.',
              'Taxa de administração já está descontada da cota divulgada.',
              'Taxa de performance: só acima do benchmark, com linha d\'água.',
              'Administrador responde perante a CVM; gestor toma a decisão de investimento.',
              'Fundo NÃO tem FGC.',
            ],
            revisaoRapida: [
              'Cota = patrimônio líquido dividido pelo número de cotas.',
              'A taxa de administração já está descontada da cota divulgada.',
              'Performance: só acima do benchmark e com linha d’água.',
              'Administrador responde perante a CVM; gestor decide onde investir.',
              'Fundo não tem FGC.',
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
          niveis: {
            entenda:
              'Fundo é um condomínio de investidores. Você compra cotas desse condomínio, não os ativos que estão dentro dele.',
            aprofunde:
              'A Resolução CVM 175 reorganizou a indústria: o fundo passou a ser uma estrutura que se divide em classes de cotas, e cada classe pode ter subclasses com direitos e taxas próprios. Cada classe tem patrimônio segregado, de modo que o prejuízo de uma não contamina a outra — e a norma passou a admitir responsabilidade limitada do cotista, hipótese em que ele não responde por patrimônio líquido negativo além do que investiu. A remuneração também ficou mais detalhada: além da administração e da performance, existem taxa de ingresso, taxa de saída e taxa máxima de distribuição. A linha d’água continua sendo a trava que impede cobrar performance duas vezes sobre o mesmo ganho.',
          },
          versao: 2,
          atualizadoEm: '2026-08-24',
          minutosEstimados: 8,
        },
        {
          id: 'c-acoes',
          microtemaId: 'm2.1',
          titulo: 'Ações: o que o acionista realmente compra',
          objetivo: 'Diferenciar ON e PN e reconhecer as formas de remuneração do acionista.',
          etiquetas: ['ESSENCIAL', 'ENTENDER'],
          resumo30s:
            'Ação é um pedaço da empresa. ON dá voto; PN dá preferência nos proventos. O retorno vem de valorização mais proventos (dividendos e JCP). Não há garantia nenhuma — nem de retorno, nem de capital.',
          explicacao: {
            oQueE:
              'A menor fração do capital social de uma sociedade anônima. Quem compra vira sócio, não credor.',
            porQueImporta:
              'Ação é o produto que melhor separa renda fixa de renda variável na cabeça do cliente: emprestar versus ser sócio. E os eventos corporativos são fonte constante de questão.',
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
            exemploAplicado:
              'O cliente recebe um crédito na conta chamado JCP e estranha o desconto de imposto, já que o vizinho disse que dividendo é isento. São coisas diferentes: dividendo é distribuição de lucro já tributado na empresa; JCP é despesa dedutível para a empresa e sofre retenção de 15% na fonte para o investidor.',
            lembrarNaProva: [
              'ON vota; PN tem preferência nos proventos.',
              'Ação não tem FGC e não tem garantia de retorno.',
              'JCP é despesa dedutível para a empresa; dividendo não é.',
              'Tag along mínimo legal para ON: 80%.',
            ],
            revisaoRapida: [
              'Ação é participação societária, não empréstimo.',
              'ON dá voto; PN dá preferência na distribuição.',
              'Dividendo é isento para a PF; JCP tem 15% retido na fonte.',
              'Mercado primário capitaliza a empresa; o secundário dá liquidez.',
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
          niveis: {
            entenda:
              'Comprar ação é virar sócio de uma empresa. Você ganha se ela valorizar e recebe parte do lucro, mas pode perder — ninguém devolve.',
            aprofunde:
              'A distinção entre ON e PN tem consequências práticas na governança. A PN abre mão do voto em troca de prioridade no recebimento, e a Lei 6.404/1976 limita a participação de preferenciais a 50% do capital nas companhias abertas registradas após 2001. É por isso que os segmentos especiais de listagem da B3 caminharam na direção oposta: o Novo Mercado só admite ações ordinárias, com tag along de 100%, exatamente para alinhar controlador e minoritário. Repare que grupamento e desdobramento não alteram o valor investido, apenas a quantidade e o preço unitário das ações — enquanto bonificação e subscrição mexem no capital. Essa diferença entre eventos que só reorganizam e eventos que alteram patrimônio é o corte que a banca costuma explorar.',
          },
          versao: 2,
          atualizadoEm: '2026-08-24',
          minutosEstimados: 7,
        },
        ...CONCEITOS_2_1_RF,
      ],
    },
    {
      id: 'm2.2',
      macrotemaId: 'm2',
      codigo: '2.2',
      nome: 'Produtos de previdência complementar (PGBL e VGBL)',
      ordem: 2,
      preRequisitos: ['m2.1'],
      conceitos: [
        {
          id: 'c-previdencia',
          microtemaId: 'm2.2',
          titulo: 'PGBL x VGBL: escolher pelo imposto de renda',
          objetivo: 'Recomendar o plano correto a partir do modelo de declaração do cliente.',
          etiquetas: ['ESSENCIAL', 'DECORAR', 'PEGADINHA'],
          resumo30s:
            'PGBL: para quem declara no COMPLETO e é contribuinte do INSS — deduz até 12% da renda bruta; no resgate o IR pega TUDO. VGBL: para quem declara no SIMPLIFICADO ou é isento — sem dedução, e o IR pega SÓ o rendimento.',
          explicacao: {
            oQueE:
              'Dois planos de previdência complementar aberta, supervisionados pela SUSEP. A diferença central é tributária.',
            porQueImporta:
              'É a recomendação em que errar custa dinheiro real ao cliente, e de forma difícil de desfazer. A prova cobra sempre pelo mesmo caminho: o modelo de declaração do cliente.',
            paraQueServe:
              'Acumular recursos para o longo prazo com um tratamento de imposto escolhido conforme o perfil fiscal do cliente.',
            comoFunciona: [
              'PGBL: permite deduzir as contribuições da base de cálculo do IR, limitado a 12% da renda bruta anual tributável. Exige declaração no modelo COMPLETO e contribuição ao INSS ou regime próprio.',
              'No resgate do PGBL, o IR incide sobre o VALOR TOTAL resgatado — principal mais rendimento.',
              'VGBL: não permite dedução. No resgate, o IR incide APENAS sobre o rendimento.',
              'Em ambos, o titular escolhe o regime tributário: progressivo (tabela do IR, com ajuste na declaração) ou regressivo (Lei 11.053/2004: começa em 35% e cai até o piso de 10% acima de 10 anos).',
              'A escolha do regime regressivo costuma ser irreversível — atenção ao recomendar.',
            ],
            exemploSimples:
              'Cliente com renda tributável de R$ 200 mil/ano que declara no completo pode aportar até R$ 24 mil em PGBL e abater esse valor da base do IR naquele ano. Se ele fosse isento, o PGBL não traria vantagem alguma.',
            exemploAplicado:
              'Cliente autônomo, isento de imposto de renda, quer contratar previdência porque ouviu falar da dedução de 12%. Ele não tem base tributável para deduzir: o PGBL não traria benefício algum e ainda faria o IR incidir sobre o total no resgate. O produto adequado é o VGBL.',
            lembrarNaProva: [
              'PGBL → completo + contribui ao INSS → deduz até 12%.',
              'PGBL: IR no resgate sobre o TOTAL.',
              'VGBL → simplificado ou isento → sem dedução.',
              'VGBL: IR no resgate só sobre o RENDIMENTO.',
              'Regime regressivo tende a ser irreversível.',
            ],
            revisaoRapida: [
              'PGBL: declaração completa e contribuição ao INSS, deduz até 12%.',
              'PGBL: no resgate o IR pega o total resgatado.',
              'VGBL: simplificada ou isento, sem dedução.',
              'VGBL: no resgate o IR pega só o rendimento.',
              'Ambos sob a SUSEP; o regime regressivo tende a ser irreversível.',
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
          niveis: {
            entenda:
              'PGBL serve para quem declara no completo e quer abater imposto agora. VGBL serve para quem não tem o que abater.',
            aprofunde:
              'O limite de 12% da Lei 9.532/1997 incide sobre a renda bruta anual tributável, não sobre a renda total — rendimentos isentos ou tributados exclusivamente na fonte não entram na base. A escolha entre regime progressivo e regressivo é independente da escolha entre PGBL e VGBL, e é onde o horizonte pesa: o regressivo da Lei 11.053/2004 parte de 35% e cai cinco pontos a cada dois anos até o piso de 10% acima de dez anos, o que o torna vantajoso para acumulação longa. O progressivo faz sentido para quem pretende resgatar cedo ou converter em renda mensal de valor baixo, já que permite ajuste na declaração. A portabilidade preserva o prazo já acumulado no regime regressivo, mas não permite trocar de PGBL para VGBL: só se porta entre planos da mesma modalidade.',
          },
          versao: 2,
          atualizadoEm: '2026-08-24',
          minutosEstimados: 8,
        },
      ],
    },
    {
      id: 'm2.3',
      macrotemaId: 'm2',
      codigo: '2.3',
      nome: 'Produtos de financiamento',
      ordem: 3,
      preRequisitos: [],
      conceitos: CONCEITOS_2_3,
    },
    {
      id: 'm2.4',
      macrotemaId: 'm2',
      codigo: '2.4',
      nome: 'Serviços bancários',
      ordem: 4,
      preRequisitos: [],
      conceitos: CONCEITOS_2_4,
    },
    {
      id: 'm2.5',
      macrotemaId: 'm2',
      codigo: '2.5',
      nome: 'Seguros de vida e patrimoniais',
      ordem: 5,
      preRequisitos: [],
      conceitos: CONCEITOS_2_5,
    },
  ],
}
