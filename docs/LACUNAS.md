# Fase 3 — Relatório de lacunas e dimensionamento

> Deriva diretamente de `AUDITORIA-CONTEUDO.md`. Traduz a matriz de auditoria em
> uma lista priorizada de **conceitos a escrever** e **questões a criar**, com o
> tamanho real do trabalho de autoria.

---

## 1. Resumo executivo

| | Hoje | Alvo | Delta |
|---|---:|---:|---:|
| Macrotemas | 4 | 4 | ✅ 0 |
| Microtemas | 9 | **20** | **+11** |
| Conceitos (aulas) | 14 | **88** | **+74** |
| Questões | 43 | **700** | **+657** |
| Mapas mentais | 9 | 88 + 20 de revisão | +99 |

Os 14 conceitos existentes **não são descartados** — são migrados para a nova
estrutura de 9 blocos / 3 níveis e realocados quando estiverem no macrotema errado.

---

## 2. Como o alvo foi calculado

**Conceitos:** um conceito = uma lição de 5–10 min. O número por microtema segue
a densidade de itens do programa oficial, não uma divisão uniforme.

**Questões:** distribuídas pelas **proporções oficiais verificadas** (20/40/30/10),
não pelo número de conceitos. É isso que faz um simulado ter a mesma silhueta da
prova real.

| Macrotema | Proporção oficial | Questões alvo | Conceitos alvo | Questões/conceito |
|---|---:|---:|---:|---:|
| 1. SFN | 20% | 140 | 22 | ~6 |
| 2. Produtos | 40% | 280 | 32 | ~9 |
| 3. Relacionamento | 30% | 210 | 20 | ~10 |
| 4. Inovação | 10% | 70 | 14 | ~5 |
| **Total** | **100%** | **700** | **88** | ~8 |

> **Mínimo viável:** 5 questões por conceito (**440**). Abaixo disso o motor Elo
> não tem material para calibrar dificuldade nem para montar simulados sem
> repetir questão. 700 é o alvo; 440 é o piso.

---

## 3. Lacunas de conceito, por prioridade

### P0 — Bloqueantes (microtemas oficiais sem uma linha de conteúdo)

Nove microtemas hoje não têm **nada**. Somados, representam **~60% do peso da prova**.

| # | Microtema | Peso do macro | Conceitos a escrever |
|---|---|---:|---:|
| 1 | **1.3** Operações do mercado financeiro *(matemática financeira)* | 20% | 6 |
| 2 | **1.2** Política econômica | 20% | 6 |
| 3 | **1.4** Regulação e infraestrutura de mercado | 20% | 5 |
| 4 | **2.4** Serviços bancários *(PIX, tarifas, câmbio)* | 40% | 4 |
| 5 | **2.3** Produtos de financiamento | 40% | 4 |
| 6 | **2.5** Seguros de vida e patrimoniais | 40% | 2 |
| 7 | **3.1** Finanças pessoais | 30% | 7 |
| 8 | **3.2** Orientações financeiras para o cliente | 30% | 2 |
| 9 | **4.6** Inteligência Artificial | 10% | 2 |
| | **Subtotal** | | **38** |

*(4.3 — fundos IS — é um item isolado, absorvido em 4.2.)*

**Por que 1.3 é o item mais crítico:** é o único microtema inteiramente
quantitativo (VP/VF, VPL, TIR, Fisher, SAC × Price, duration, payback). Sem ele,
o tipo de questão `calculo` — hoje com 3 questões no banco todo — não tem lastro,
e o app não prepara para nenhuma questão numérica da prova.

### P1 — Cobertura parcial grave

| Microtema | O que falta | Conceitos novos |
|---|---|---:|
| **3.4** Regras e condutas | 9 princípios éticos nominais, técnicas de atendimento, riscos da atividade, LGPD, sigilo bancário, **todo o bloco de crimes e ilícitos** (insider trading, spoofing, layering, churning, front running, money pass) | 6 |
| **2.1** Produtos de investimentos | COE, FIIs, LCD, Tesouro Educa+/Renda+, debênture de infraestrutura, eventos corporativos, governança e segmentos de listagem, CVM 175 (classes/subclasses, PL negativo, taxas de ingresso/saída) | 15 |
| **1.1** Sistema financeiro nacional | CNSP, CNPC, 17 operadores, autorreguladores, FGC/FGCCoop, SBP | 2 |
| **2.2** Previdência complementar | regimes de tributação em detalhe, portabilidade e carências, as 7 modalidades de renda | 2 |
| **4.4** Finanças descentralizadas | smart contracts, DEXs, DAOs, tokenização, NFT, stablecoins, ETF cripto, DREX | 4 |
| **3.3** Classificação de investidores | diversificação, investidor profissional × qualificado | 2 |
| | | **31** |

### P2 — Ajustes e complementos

| Microtema | Ação | Conceitos novos |
|---|---|---:|
| **4.5** Open finance | separar open investment e open insurance | 1 |
| **4.7** Fintechs | sandbox regulatório, arranjo/adquirente/sub-adquirente | 1 |
| **4.1 / 4.2 / 4.3** ESG | desmembrar `c-asg` nos três itens oficiais | 3 |
| | | **5** |

**38 (P0) + 31 (P1) + 5 (P2) = 74 conceitos novos.**

---

## 4. Correções estruturais (não são conteúdo novo)

| # | Correção | Arquivo |
|---|---|---|
| 1 | `c-pld` sai do macrotema 1 e vai para o 3 (item oficial 3.4.5) | `content/m1-sfn.ts` → `m3-relacionamento.ts` |
| 2 | Nome da certificação: "Certificado Profissional Anbima" | `blueprint.ts` |
| 3 | `versao: '2026.1'` → `'1.2'` | `blueprint.ts` |
| 4 | Pesos 0.20 / 0.40 / 0.30 / 0.10 + `pesoVerificado: true` | `blueprint.ts` |
| 5 | Macrotema 3 ganha o subtítulo "(prospecção, atendimento e suporte)" | `content/m3-relacionamento.ts` |
| 6 | Macrotema 4: "desenvolvimento **de** mercado" | `content/m4-inovacao.ts` |
| 7 | Revisar fundos sob a **Res. CVM 175**, não ICVM 555 | `content/m2-produtos.ts` |
| 8 | Renomear microtemas do repo para os títulos oficiais | `content/*.ts` |

---

## 5. Lacunas do banco de questões

O `builder.ts` **já atende** quase todos os atributos obrigatórios do item 7 da
especificação: macrotema, microtema, conceito, habilidade, dificuldade,
alternativas com justificativa individual (validada em runtime) e explicação.

O que falta:

| Lacuna | Situação |
|---|---|
| **Volume** | 43 questões para 88 conceitos alvo. 74 conceitos ficarão com zero. |
| **Questões de cálculo** | 3 no banco inteiro. O microtema 1.3 é todo quantitativo. |
| **Cases e árvore de decisão** | 1 de cada. A especificação pede esses formatos explicitamente. |
| **Diagnóstico didático do erro** (item 8) | Hoje há `explicacao` + justificativa por alternativa. Faltam os campos "por que você errou", "o que você precisa entender" e "como lembrar na prova". |

Distribuição atual por tipo — desequilibrada para o que a especificação pede:

| Tipo | Hoje | Alvo (700) |
|---|---:|---:|
| conceitual | 13 | 175 |
| aplicacao / situacao_pratica | 11 | 210 |
| comparacao | 5 | 105 |
| calculo | **3** | **105** |
| multipla_escolha / verdadeiro_falso | 9 | 70 |
| case | **1** | **21** |
| arvore_decisao | **1** | **14** |

---

## 6. Lacunas de mapa mental

A especificação (item 5) pede, para **cada macrotema e microtema**, duas versões:
completo e de revisão. Hoje existem 9 mapas, um por conceito, e nenhum
consolidado por microtema ou macrotema.

| Nível | Hoje | Alvo |
|---|---:|---:|
| Por conceito | 9 | 88 |
| Por microtema (revisão) | 0 | 20 |
| Por macrotema (completo) | 0 | 4 |

---

## 7. Ordem de execução recomendada

A autoria é o gargalo — não o código. Por isso a ordem abaixo entrega **valor
utilizável a cada etapa**, em vez de deixar todo o conteúdo para o fim.

1. **Correções estruturais** (seção 4) — baratas, destravam os pesos verificados
   e o `AvisoVerificacao` de pesos some. *Fase 4.*
2. **Novos tipos e migração dos 14 conceitos** para 9 blocos / 3 níveis. Valida a
   arquitetura em material que já existe, antes de escrever 74 conceitos nela. *Fase 4.*
3. **P0 por peso decrescente**: 2.3/2.4/2.5 (40%) → 3.1/3.2 (30%) → 1.2/1.3/1.4
   (20%) → 4.6 (10%).
4. **P1**, começando por 2.1 (maior volume, maior peso) e 3.4 (crimes e ilícitos).
5. **P2** e mapas consolidados.
6. Questões acompanham cada conceito no mesmo commit — nunca conceito sem questão.

---

## 8. Pendências de verificação — o que falta para fechar a Fase 3

A Fase 3 está **concluída como relatório**. O que segue em aberto são os dados de
*estrutura da prova*, que dependem de documento oficial não obtido.

| # | Pendência | Situação | Como fecha |
|---|---|---|---|
| 1 | `totalQuestoes`, `duracaoMin`, `notaCorte`, `formatos` | Valores corroborados em fontes secundárias (50 · 150 min · 70% · 40 MC + 10 árvore de decisão), mas sem fonte primária | **Edital dos Exames de Certificação Profissional Anbima** (v1.4, 28/05/2026) |
| 2 | Conflito na nota de corte: 35 × 32 acertos | 3 fontes dizem 35; 1 diz 32 (provável número da C-Pro R) | Mesmo edital |
| 3 | Distribuição oficial de dificuldade (25/50/25) | Duas fontes concordam; dado novo, não existe no blueprint | Mesmo edital |
| 4 | Alíquotas tributárias do conteúdo | Mudam por legislação; nunca foram verificadas | Legislação vigente / Receita Federal |

**Bloqueio de ambiente:** `anbima.com.br` e `anbimaedu.com.br` são recusados pela
política de egresso desta sessão (403 no CONNECT). Detalhes e URLs exatas em
`AUDITORIA-CONTEUDO.md` §3.

Nada disso bloqueia a **Fase 4**: os pesos (20/40/30/10) já estão verificados pelo
Programa Detalhado, e os demais campos permanecem `verificado: false` — que é
exatamente o comportamento previsto pela regra 4 do `CLAUDE.md`.

---

## 9. Aviso sobre o volume

74 conceitos × 9 blocos × 3 níveis de profundidade + ~657 questões autorais é um
volume de autoria que **não cabe em uma sessão**. O plano prevê entrega faseada,
e as fases 4–10 continuam válidas para a *infraestrutura*; o preenchimento do
conteúdo será incremental e priorizado conforme a seção 7.

Até que os 20 microtemas tenham material real, a **Regra de Ouro** da
especificação permanece violada e a aplicação não deve ser anunciada como
completa. A interface já tem `AvisoVerificacao` para sinalizar dados não
verificados; convém um indicador equivalente de **cobertura de microtema**, para
o estudante saber o que ainda não está coberto — proposto para a Fase 4.
