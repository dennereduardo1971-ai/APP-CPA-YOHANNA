# Progresso da autoria de conteúdo

> Este arquivo existe para que o trabalho sobreviva à troca de sessão. A ordem
> de prioridade vem de `LACUNAS.md` §3; aqui fica o que já foi entregue, o que
> vem a seguir e as decisões editoriais tomadas pelo caminho.
>
> **Atualize a cada microtema concluído**, no mesmo commit do conteúdo.

## Onde estamos

| | Início do plano | Agora | Alvo |
|---|---:|---:|---:|
| Conceitos | 14 | **88** ✅ | 88 |
| Questões | 43 | **484** ✅ | 700 (piso 440) |
| Microtemas com aula | 7/20 | **20/20** ✅ | 20/20 |

Questões do tipo `calculo`: 3 → **28**.

**A fila de conteúdo do `LACUNAS.md` está fechada.** Os 88 conceitos previstos
na seção 1 estão escritos, e o piso de questões foi ultrapassado: 484 contra as
440 do mínimo viável. Mais importante que o total, **nenhum conceito ficou
abaixo de cinco questões** — que é a forma real do piso, já que ele existe para
o motor Elo ter material de calibração. Há teste guardando isso em
`src/test/conteudo.test.ts` ("todo conceito tem ao menos cinco questões").

O que resta não é fila: é o alvo de 700 questões, que é folga de banco, não
cobertura.

## A Regra de Ouro foi cumprida

**Os vinte microtemas do Programa Detalhado têm aula.** O painel `/admin`
reporta cobertura de 100% e `coberturaPendente()` passou a devolver `false` —
o aviso de cobertura incompleta sai do app.

Auditoria em `/admin` na data desta entrega:

| Métrica | Situação |
|---|---|
| Microtemas com aula | 20/20 |
| Aulas nos 9 blocos obrigatórios | 88/88 |
| Aulas com ao menos uma questão | 88/88 |
| Defeitos / incompletos / lacunas | **0 / 0 / 0** |

**Isto não era "conteúdo completo" quando foi escrito.** Cobertura significa
que nenhum microtema oficial está vazio — não que a profundidade seja
suficiente. Naquele momento faltavam 23 conceitos e cerca de 150 questões para
o piso do `LACUNAS.md`. Essa era a lista P1/P2 (§3), e ela foi concluída em
25/08/2026.

## Entregue

### 1.3 — Operações do mercado financeiro ✅
*6 conceitos, 33 questões.* `content/m1-3-operacoes.ts`, `questions/banco-m1-3.ts`.

Capitalização simples e composta · Taxa proporcional e equivalente · Taxa real
(Fisher) · VPL e TIR · SAC e Price · Duration.

Escolhido primeiro porque `LACUNAS.md` o aponta como o mais crítico: é o único
microtema inteiramente quantitativo, e o tipo `calculo` tinha 3 itens no banco
inteiro — o app não preparava para nenhuma questão numérica da prova.

### 1.2 — Política econômica ✅
*6 conceitos, 32 questões.* `content/m1-2-politica.ts`, `questions/banco-m1-2.ts`.

PIB e indicadores de atividade · IPCA, INPC e IGP-M · Política monetária
(Copom, Selic, instrumentos) · Política fiscal (primário, nominal, dívida) ·
Política cambial e regimes · Balanço de pagamentos.

**Nenhuma questão fixa o valor vigente** da meta de inflação, da Selic ou do
compulsório. São decisões revistas periodicamente pelo CMN e pelo Copom, e
questão com número de política monetária envelhece junto com a ata. As aulas
trazem o mecanismo e marcam onde há número sujeito a revisão.

### 1.4 — Regulação e infraestrutura de mercado ✅
*5 conceitos, 23 questões.* `content/m1-4-regulacao.ts`, `questions/banco-m1-4.ts`.

Autorregulação e Códigos ANBIMA · SELIC, B3 e custódia · Sistema de Pagamentos
Brasileiro · Poder sancionador e termo de compromisso · Transparência e
informação privilegiada.

O erro que este bloco diagnostica é a confusão entre **três camadas**:
regulação estatal tem poder de polícia; autorregulação é contrato entre
privados; infraestrutura de mercado não regula ninguém — registra, custodia e
liquida. Os distratores fazem exatamente essas trocas.

### 2.4 — Serviços bancários ✅
*4 conceitos, 17 questões.* `content/m2-4-servicos.ts`, `questions/banco-m2-4.ts`.

Contas de depósito e conta de pagamento · PIX e transferências · Câmbio no
varejo (cotação, spread, VET) · Tarifas e serviços essenciais.

Bloco de atendimento: quase toda questão nasce de uma pergunta que o cliente
faz de verdade. Por isso a proporção de `situacao_pratica` é maior aqui.
**Nenhuma questão depende de quantidade normativa** — saques gratuitos por
mês, limites do PIX, alíquota de IOF — porque esses números vêm de norma
infralegal revista periodicamente.

### 2.3 — Produtos de financiamento ✅
*4 conceitos, 16 questões.* `content/m2-3-financiamento.ts`, `questions/banco-m2-3.ts`.

Modalidades de crédito PF · Custo Efetivo Total · Financiamento imobiliário
(SFH, SFI, alienação fiduciária) · Leasing e CDC.

A lógica se inverte em relação ao resto do macrotema 2: em aplicação, taxa
maior é melhor; em crédito, taxa maior é pior — e o número que decide não é a
taxa anunciada, é o CET. Boa parte dos distratores explora essa inversão,
oferecendo a proposta de menor taxa nominal quando a estrutura de tarifas a
torna a mais cara.

### 2.5 — Seguros de vida e patrimoniais ✅
*2 conceitos, 10 questões.* `content/m2-5-seguros.ts`, `questions/banco-m2-5.ts`.

Fundamentos do seguro (prêmio, sinistro, franquia, apólice) · Seguro de vida
(capital, beneficiário, sucessão).

Uma distinção organiza o microtema inteiro: **seguro de dano** indeniza
prejuízo e obedece ao princípio indenizatório; **seguro de pessoas** paga
capital contratado, admite cumulação de apólices e não comporta sub-rogação.
Quase toda pegadinha do tema aplica a regra de um ao outro.

### 3.1 — Finanças pessoais ✅
*7 conceitos, 21 questões.* `content/m3-1-financas.ts`, `questions/banco-m3-1.ts`.

Orçamento e fluxo de caixa · Balanço patrimonial pessoal · Reserva de
emergência · Endividamento e superendividamento · Objetivos e horizonte ·
Ciclo de vida financeiro · Planejamento da aposentadoria.

Este microtema precede tecnicamente todo o resto do macrotema 3: não há
suitability honesto sem orçamento, reserva e objetivo definidos. As sete
aulas seguem uma ordem que é também um método — medir, proteger, projetar e
converter em meta de longo prazo.

Aqui o banco cobra **julgamento, não memória**: os distratores são
recomendações plausíveis e comercialmente convenientes (aplicar a sobra de
quem tem rotativo aberto, seguir o perfil arrojado num objetivo de doze
meses, manter reserva no que rende mais). São as escolhas que atendem à meta
e não ao cliente.

### 3.2 — Orientações financeiras ✅
*2 conceitos, 9 questões.* `content/m3-2-orientacoes.ts`, `questions/banco-m3-2.ts`.

Processo de orientação (coletar, diagnosticar, recomendar, implementar,
acompanhar) · Comunicar risco e expectativa sem prometer.

### 4.6 — Inteligência artificial ✅
*2 conceitos, 7 questões.* `content/m4-6-ia.ts`, `questions/banco-m4-6.ts`.

IA no mercado financeiro (apoio × decisão automatizada) · Riscos e governança
(viés, dados pessoais, responsabilidade).

**A regulação específica de IA no Brasil ainda está em construção
legislativa.** Nenhuma aula ou questão afirma existir norma vigente sobre o
tema — descrevem o que já é aplicável hoje (proteção de dados, dever de
adequação, dever de informação) e tratam o resto como matéria em discussão.

### 4.2, 4.3, 4.4 e 4.7 — o que faltava do macrotema 4 ✅
*5 conceitos, 19 questões.* `content/m4-resto.ts`, `questions/banco-m4-resto.ts`.

Investimentos ESG (estratégias e greenwashing) · Fundos IS × fundos que
integram ESG · Blockchain e ativos virtuais · Finanças descentralizadas ·
Fintechs e arranjos de pagamento.

É o macrotema mais volátil do programa — taxonomia ESG, regulação de ativos
virtuais e arranjos de pagamento estão todos em construção normativa. Nenhuma
questão afirma exigência normativa específica: todas cobram o mecanismo e a
lógica da distinção, que é o que se consegue cobrar de um tema em movimento.

O distrator recorrente aqui é o **entusiasmo**: tratar rótulo como carteira,
imutabilidade como veracidade e ausência de intermediário como ausência de
risco. São as três confusões que o discurso do setor produz.

### 3.4 — Regras e condutas ✅
*6 conceitos, 24 questões.* `content/m3-4-conduta.ts`, `questions/banco-m3-4.ts`.

Princípios gerais de conduta · Crimes contra o mercado de capitais · Práticas
abusivas (spoofing, layering, churning, front running, money pass) · Sigilo
bancário · LGPD · Técnicas de atendimento e riscos da atividade.

Primeiro lote escrito **com fonte primária lida**, e não conferida por
terceiro — o ambiente local alcança `planalto.gov.br`, que estava bloqueado na
sessão remota. Foram lidos no texto vigente, em 25/08/2026:

| Fonte | O que sustenta |
|---|---|
| Lei 6.385/1976, arts. 27-C a 27-F | Os três crimes, suas penas e a majorante |
| LC 105/2001, art. 1º (§§ 3º e 4º) e art. 10 | O que não é violação de sigilo, e a pena da quebra |
| Lei 13.709/2018, arts. 6º, 7º, 18 e 52 | Princípios, bases legais, direitos e sanções |
| Código ANBIMA de Distribuição, art. 6º (22/09/2025) | Os princípios gerais de conduta |

Três achados que só apareceram por ler a fonte:

1. **O Código de Distribuição tem DEZ incisos no art. 6º, não nove.** Material
   de cursinho repete "nove princípios". A aula ensina o conteúdo e o
   `alertaProva` avisa que a contagem muda a cada revisão do Código — decorar o
   número é o caminho errado.
2. **O art. 27-E fala em "assessor de investimento"**, denominação que a Lei
   14.317/2022 pôs no lugar de "agente autônomo de investimento". Registrado
   como exemplo, porque enunciado com o nome antigo trata do mesmo profissional.
3. **A Lei 13.506/2017 tirou o dever de sigilo do tipo básico do art. 27-D** e
   o transformou em causa de aumento de um terço. O efeito é que o insider
   secundário passou a caber no tipo — e o § 1º alcança quem apenas repassa,
   na mesma pena. É o eixo da questão `q-crm-01`.

O erro diagnosticado que organiza o lote é a **confusão entre figuras
parecidas**, em quatro pares: insider × front running, spoofing × layering,
reclusão × detenção, e afastamento do sigilo × quebra do sigilo (com o
paralelo consentimento × obrigação legal na LGPD). Em todos, o distrator
plausível é o que exige autorização para o que a lei já excepcionou.

### 1.1 — Sistema financeiro nacional ✅ *(complemento)*
*2 conceitos, 16 questões.* `content/m1-1-sfn.ts`, `questions/banco-m1-1.ts`.

Seguros e previdência: os outros dois ramos normativos · Os operadores: quem
pode fazer o quê.

O erro que organiza o lote é **confundir quem vende com quem regula**. O cliente
compra previdência no banco, paga a maquininha com uma fintech e investe por uma
corretora — três balcões, três reguladores, e a intuição do balcão erra os três.

Dois achados de fonte primária:

1. **A Lei 14.711/2023 tirou a CVM do CNSP.** O art. 18, II, revogou o inciso VI
   do art. 33 do Decreto-Lei 73/1966. Material corrente ainda lista os seis
   membros antigos. A aula ensina o que é estável — presidência da Fazenda,
   assento da Susep — e desaconselha decorar a composição.
2. **A LC 213/2025 trouxe a proteção patrimonial mutualista para dentro do
   sistema de seguros**, sob CNSP e Susep, como figura própria e distinta de
   seguro. O que era mercado paralelo passou a ser mercado regulado.

### 2.2 — Previdência complementar ✅ *(aprofundamento)*
*3 conceitos, 24 questões.* `content/m2-2-previdencia.ts`, `questions/banco-m2-2.ts`.

Regime progressivo e regressivo · Portabilidade, resgate, BPD e carência · As
modalidades de renda.

**O achado que obrigou a corrigir conteúdo já publicado.** A Lei 14.803/2024 deu
nova redação ao § 6º do art. 1º da Lei 11.053/2004: a opção pelo regime de
tributação **não é mais feita na adesão** — vai até a obtenção do benefício ou a
requisição do primeiro resgate. O art. 2º abriu ainda uma volta ao progressivo
para quem já havia optado, e o art. 3º fecha tudo depois do primeiro pagamento.

O repositório ensinava a regra antiga: `c-previdencia` afirmava em quatro
lugares que a escolha "tende a ser irreversível". Corrigido, com o conceito
passando à versão 3.

Segundo achado: o art. 11 da Lei 9.532/1997 **condiciona** a dedução dos 12% ao
recolhimento também ao RGPS ou a regime próprio (§ 5º excetua aposentados e
pensionistas desses regimes). "PGBL deduz 12%" sozinho é incompleto.

As sete modalidades de renda vieram da página oficial da Susep. A confusão que
os distratores exploram é **temporária × prazo certo**: nomes que sugerem a
mesma coisa e resultados invertidos na morte do participante.

### 3.3 — Classificação das pessoas investidoras ✅ *(aprofundamento)*
*2 conceitos, 22 questões.* `content/m3-3-investidores.ts`, `questions/banco-m3-3.ts`.

Investidor profissional, qualificado e varejo · Diversificação: o que ela reduz
e o que não reduz.

**A exceção que quase todo material omite.** O art. 10, I, da Res. CVM 30/2021
dispensa a verificação de adequação para o investidor qualificado, *"com exceção
das pessoas naturais mencionadas no inciso IV do art. 11 e nos incisos II e III
do art. 12"*. Ou seja: quem se enquadrou por patrimônio declarado ou por
certificação **continua** com direito ao processo de suitability. A frase
corrente "qualificado é dispensado de suitability" é falsa justamente para o
caso mais comum no balcão.

A leitura revela uma escolha de política regulatória: a CVM assume que dinheiro
não é conhecimento. A dispensa integral fica com quem tem estrutura profissional
dedicada — instituição financeira, seguradora, fundo, entidade de previdência.

### 4.4 e 4.5 — cripto e sistemas abertos ✅ *(aprofundamento)*
*3 conceitos, 25 questões.* `content/m4-4-cripto.ts`, `content/m4-5-open.ts`,
`questions/banco-m4-45.ts`.

Tokenização, stablecoins e o regime das prestadoras · Contratos inteligentes,
DEX, DAO e NFT · Open investment e open insurance: um sistema ou três?

**São dois sistemas, não três.** Open investment é escopo dentro do open finance
(Res. Conjunta 1/2020, art. 5º, que já inclui produtos com natureza de
investimento); open insurance é sistema separado, sob CNSP e Susep. O nome do
microtema oficial sugere três coisas onde há duas, e é exatamente isso que a
prova explora.

**O consentimento não tem mais teto de doze meses.** Comparando a redação
original da Res. Conjunta 1/2020 (*"limitado a doze meses"*) com a consolidada
(*"prazo de validade compatível com as finalidades"*), o teto saiu pela Res.
Conjunta 7/2023. Material corrente ainda o ensina.

**Tratamento deliberado do Drex.** O piloto teve a plataforma descontinuada e o
projeto foi reorientado; não há Drex em circulação. A aula diz em que estágio
ele está, e `q-tokn-05` cobra exatamente isso.

### Complemento de cobertura — o piso por conceito ✅
*83 questões.* `questions/banco-m1-piso.ts`, `banco-m2-piso.ts`,
`banco-m3-piso.ts`, `banco-m4-piso.ts`.

Não é conteúdo novo: é **requisito do motor**. O `LACUNAS.md` fixa cinco
questões por conceito porque abaixo disso o Elo não tem material para calibrar
dificuldade e um simulado começa a repetir item. Cinquenta e nove conceitos
vinham de lotes anteriores com três ou quatro — `c-openfinance` tinha duas.

Ficam em arquivos separados por macrotema, e não dentro dos bancos existentes,
para preservar a divisão de pedaços do `vite.config.ts` (decisão 13): o padrão
`banco-mN` já os encaminha para o pedaço certo.

Há teste guardando o piso, para que ele não regrida em silêncio.

## Fila, na ordem de prioridade

| Ordem | Microtema | Conceitos | Situação |
|---|---|---:|---|
| 1 | ~~1.3 Operações do mercado financeiro~~ | 6 | ✅ feito |
| 2 | ~~1.2 Política econômica~~ | 6 | ✅ feito |
| 3 | ~~1.4 Regulação e infraestrutura~~ | 5 | ✅ feito |
| 4 | ~~2.4 Serviços bancários~~ | 4 | ✅ feito |
| 5 | ~~2.3 Produtos de financiamento~~ | 4 | ✅ feito |
| 6 | ~~2.5 Seguros de vida e patrimoniais~~ | 2 | ✅ feito |
| 7 | ~~3.1 Finanças pessoais~~ | 7 | ✅ feito |
| 8 | ~~3.2 Orientações financeiras~~ | 2 | ✅ feito |
| 9 | ~~4.6 Inteligência artificial~~ | 2 | ✅ feito |
| — | **P0 concluído** | | ✅ |
| 10 | ~~4.2 Introdução aos investimentos ESG~~ | 1 | ✅ feito |
| 11 | ~~4.3 Fundos de investimento sustentável~~ | 1 | ✅ feito |
| 12 | ~~4.4 Finanças descentralizadas~~ | 2 | ✅ feito |
| 13 | ~~4.7 Fintechs e meios de pagamento~~ | 1 | ✅ feito |
| — | **Cobertura 20/20 atingida** | | ✅ |
| 14 | ~~2.1 Produtos de investimentos (lotes A e B)~~ | 15 | ✅ feito |
| 15 | ~~3.4 Regras e condutas~~ | 6 | ✅ feito |
| 16 | ~~1.1 Sistema financeiro nacional~~ | 2 | ✅ feito |
| 17 | ~~2.2 Previdência complementar~~ | 3 | ✅ feito |
| 18 | ~~3.3 Classificação das pessoas investidoras~~ | 2 | ✅ feito |
| 19 | ~~4.4 Finanças descentralizadas (aprofundamento)~~ | 2 | ✅ feito |
| 20 | ~~4.5 Open investment e open insurance~~ | 1 | ✅ feito |
| — | **Fila concluída — 88/88 conceitos, 484 questões** | | ✅ |

### 2.1 — produtos de renda fixa e crédito privado ✅ *(lote A)*
*7 conceitos, 28 questões.* `content/m2-1-renda-fixa.ts`, `questions/banco-m2-1-rf.ts`.

Tesouro Direto (a família inteira, com Renda+ e Educa+) · CDB, RDB e Letra
Financeira · LCI, LCA e LCD · CRI e CRA · Debêntures (comuns, incentivadas e
de infraestrutura) · COE · Risco de crédito, rating e spread.

Três perguntas resolvem quase todo o bloco, e as aulas voltam a elas:
**quem emite** (define se há FGC), **qual lastro** (define o risco real) e
**de quem é o benefício fiscal** — porque nem todo incentivo chega ao
investidor.

A distinção mais afiada do lote é entre **debênture incentivada** (o benefício
é do investidor pessoa física, que fica isento) e **debênture de
infraestrutura** (o benefício é do emissor, e o investidor PF é tributado).
Nomes quase iguais, beneficiários opostos, e os dois papéis competem no mesmo
balcão.

Os distratores exploram a semelhança de prateleira: CRI ao lado de LCI (mesma
isenção, garantia diferente), Letra Financeira ao lado de CDB (mesmo emissor,
sem FGC), COE vendido como "ganho de bolsa sem risco".

### 2.1 — renda variável, fundos e a CVM 175 ✅ *(lote B)*
*8 conceitos, 28 questões.* `content/m2-1-variavel.ts`, `questions/banco-m2-1-rv.ts`.

Eventos corporativos · Governança e segmentos de listagem da B3 · FIIs ·
ETF e BDR · Classificação de fundos · CVM 175 (classes e subclasses) ·
Taxas de ingresso e saída e PL negativo · Fundos abertos × fechados.

Com este lote o microtema 2.1 fecha em **15 conceitos e 56 questões** — o
maior do app, à altura do peso que tem na prova.

Dois erros organizam os distratores do lote:

**Confundir forma com valor.** Desdobramento, grupamento e bonificação
rearranjam a posição sem criar nem destruir patrimônio; o preço se ajusta na
mesma proporção. Quem lê "ganhou ações" como "ficou mais rico" erra a família
inteira de questões.

**Ler o rótulo no lugar do regulamento.** "Multimercado" não significa
moderado, FII que distribui todo mês não é renda fixa, e a responsabilidade
limitada do cotista na CVM 175 **não** é automática: depende de previsão
expressa no regulamento da classe.

### O que vem depois — a fila acabou, e o que sobra não é fila

Todo o P1 e o P2 do `LACUNAS.md` §3 foram entregues em 25/08/2026. O placar
fechou em **88 conceitos e 484 questões**, com nenhum conceito abaixo de cinco
questões.

O que continua aberto **não é cobertura**, e convém não confundir as duas
coisas:

| Item | Natureza | Por que não é fila |
|---|---|---|
| Alvo de 700 questões | Folga de banco | 484 já supera o piso de 440. Mais questões melhoram a variedade de simulado, não a cobertura |
| Mapas por microtema e por macrotema | Consolidação | `LACUNAS.md` §6: hoje há um mapa por conceito. Os consolidados são material de revisão, não matéria faltante |
| Diagnóstico didático do erro | Campo novo no tipo | `LACUNAS.md` §5: "por que você errou", "o que você precisa entender", "como lembrar na prova". Exige mexer em `types.ts` e nas 484 questões |
| Formatos `case` e árvore de diálogo | Distribuição | O edital nomeia os formatos; a ANBIMA não publica o rateio. O banco tem poucos de cada |

**Nenhum desses depende de fonte externa que ainda falte ler.** A pendência de
alíquotas foi fechada com leitura de fonte primária em 25/08/2026 — ver
`docs/ALIQUOTAS.md` §7.

## Um defeito achado nesta entrega, e o guarda que o impede

Dois IDs de questão colidiram (`q-of-01` e `q-of-02`, de objetivos financeiros
contra open finance). `montarQuestoes` monta o banco num `Map` indexado por id
— precisa disso para o overlay aplicar patch por id —, então a segunda questão
**substituiu** a primeira e as duas sumiram do banco sem erro nenhum.

O teste de unicidade não pegava: ele roda sobre o array já deduplicado, onde a
colisão já aconteceu. Quem pegou foi a divergência entre a contagem do
`npm run docs` (que conta no código-fonte) e a contagem em tempo de execução.

O `q()` de `questions/builder.ts` passou a manter o conjunto de ids já
emitidos e **falha alto** na colisão, no ponto exato da chamada — junto das
outras validações que ele já fazia (gabarito único, justificativa em toda
alternativa, conceito existente).

## Tamanho do pacote de conteúdo

Medição da Fase 10, agora com quase quatro vezes mais material:

| Momento | Conceitos | Questões | Pedaço `conteudo` |
|---|---:|---:|---:|
| Fase 10 | 14 | 43 | 137,91 kB (43,02 kB gzip) |
| Agora | 57 | 234 | **615,81 kB (182,42 kB gzip)** |

O conteúdo é carregado **na abertura do app**, porque o registro mutável
(regra 11) exige que `MACROTEMAS` esteja disponível de forma síncrona. No
alvo de 88 conceitos e 700 questões isso passa de 1 MB.

**Quando agir:** ao ultrapassar ~70 conceitos, vale carregar o conteúdo por
macrotema sob demanda. Isso exige rever o registro mutável, e é trabalho de
arquitetura — não de autoria. Enquanto isso, o número aparece em todo build.

## Padrão editorial destas aulas

Vale para tudo que for escrito daqui em diante — é o que os testes cobram e o
que mantém as aulas com a mesma cara.

1. **Todo número foi calculado antes de virar texto.** Nenhum valor de exemplo
   é arredondamento de cabeça. Nas aulas quantitativas os resultados foram
   conferidos por execução, não por estimativa.
2. **Distrator reproduz um erro real.** Cada alternativa incorreta é o
   resultado de um engano específico e nomeado — regime trocado, taxa
   proporcional no lugar da equivalente, subtração no lugar de Fisher — e a
   justificativa diz qual foi. Alternativa com número aleatório não ensina.
3. **Os nove blocos e os três níveis são obrigatórios** (regra 6 do
   `CLAUDE.md`), validados em `src/test/conteudo.test.ts`.
4. **`exemploSimples` ≠ `exemploAplicado`.** O primeiro isola a mecânica; o
   segundo é uma conversa de atendimento com um cliente.
5. **O nível 3 vai além da prova de propósito.** É onde entram as exceções
   (TIR múltipla, convexidade, imunização) que a CPA não cobra mas que
   respondem ao "por que" de quem quer entender.

## Assuntos que NÃO serão escritos sem fonte

- **Tributação.** Falta o texto das leis; `planalto.gov.br` está bloqueado
  neste ambiente. Ver `ALIQUOTAS.md`.
- **FGC sob a Res. CMN 5.295/2026.** O conceito `c-fgc` segue com as regras
  anteriores até que o texto da norma possa ser lido.

Onde uma aula encostar nesses temas, ela traz a lógica — que não muda — e marca
o número como pendente de conferência, conforme a regra 4 do `CLAUDE.md`.
