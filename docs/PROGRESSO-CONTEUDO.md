# Progresso da autoria de conteúdo

> Este arquivo existe para que o trabalho sobreviva à troca de sessão. A ordem
> de prioridade vem de `LACUNAS.md` §3; aqui fica o que já foi entregue, o que
> vem a seguir e as decisões editoriais tomadas pelo caminho.
>
> **Atualize a cada microtema concluído**, no mesmo commit do conteúdo.

## Onde estamos

| | Início do plano | Agora | Alvo |
|---|---:|---:|---:|
| Conceitos | 14 | **78** | 88 |
| Questões | 43 | **314** | 700 (piso 440) |
| Microtemas com aula | 7/20 | **20/20** ✅ | 20/20 |

Questões do tipo `calculo`: 3 → **24**.

## A Regra de Ouro foi cumprida

**Os vinte microtemas do Programa Detalhado têm aula.** O painel `/admin`
reporta cobertura de 100% e `coberturaPendente()` passou a devolver `false` —
o aviso de cobertura incompleta sai do app.

Auditoria em `/admin` na data desta entrega:

| Métrica | Situação |
|---|---|
| Microtemas com aula | 20/20 |
| Aulas nos 9 blocos obrigatórios | 57/57 |
| Aulas com ao menos uma questão | 57/57 |
| Defeitos / incompletos / lacunas | **0 / 0 / 0** |

**Isto não é "conteúdo completo".** Cobertura significa que nenhum microtema
oficial está vazio — não que a profundidade seja suficiente. Faltam 23
conceitos e cerca de 150 questões para chegar ao piso de 440 do
`LACUNAS.md`, e essa é a lista P1/P2 (§3), com destaque para 2.1 (produtos de
investimentos, 15 conceitos) e 3.4 (regras e condutas, 6 conceitos).

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

### O que vem depois: aprofundamento (P1 e P2)

A cobertura está fechada; falta profundidade. A ordem sugerida é por peso da
prova, e vem de `LACUNAS.md` §3:

| Ordem | Microtema | Conceitos novos | O que falta |
|---|---|---:|---|
| ~~1~~ | ~~2.1 Produtos de investimentos — **lote B**~~ | 8 | ✅ feito |
| ~~2~~ | ~~3.4 Regras e condutas~~ | 6 | ✅ feito |
| 3 | 4.4 Finanças descentralizadas | 2 | tokenização, NFT, ETF cripto, DREX |
| 4 | 1.1 Sistema financeiro nacional | 2 | CNSP, CNPC, os 17 operadores, FGCCoop, SBP |
| 5 | 2.2 Previdência complementar | 2 | regimes de tributação em detalhe, portabilidade e carências, as 7 modalidades de renda |
| 6 | 3.3 Classificação de investidores | 2 | diversificação, investidor profissional × qualificado |
| — | Ajustes P2 (4.5, 4.7, ESG) | 5 | ver `LACUNAS.md` §3 |

Volume de questões: **314 hoje contra piso de 440**. Com 2.1 e 3.4 fechados,
os dois microtemas de maior peso da fila saíram. O que resta em P1 são blocos
menores — e 2.2 (previdência) segue dependendo da leitura das leis de
tributação, hoje possível no ambiente local.

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
