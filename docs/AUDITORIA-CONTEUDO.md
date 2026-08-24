# Fase 2 — Auditoria do conteúdo contra o Programa Detalhado oficial

> Confronto item a item entre o acervo do repositório e o **Programa Detalhado
> da CPA** fornecido pelo usuário.
>
> **Fonte:** `ProgramaDetalhadoCPAANBIMA.pdf` — Certificado Profissional Anbima
> (CPA). Data de elaboração 02/09/2024 · **Versão 1.2** (revisada em 04/06/2025)
> · **Vigência a partir de 01/01/2026** · Elaborado por: Anbima.

---

## 1. Identificação da certificação

O documento estabelece, textualmente:

> "Este é o programa detalhado da CPA (Certificado Profissional Anbima),
> certificação que passa a ser o requisito obrigatório de entrada no mercado
> financeiro. A CPA é direcionada a pessoas em início de carreira (…). Após a
> CPA, as pessoas com essa certificação poderão evoluir para as certificações de
> distribuição: C-Pro R (Certificado Profissional Anbima de Relacionamento) e
> C-Pro I (Certificado Profissional Anbima de Investimento)."

Consequências para o repositório:

| Campo | Valor atual | Valor oficial | Ação |
|---|---|---|---|
| Nome da certificação | "CPA — Certificação Profissional ANBIMA" | **CPA — Certificado Profissional Anbima** | Corrigir |
| `BLUEPRINT.versao` | `'2026.1'` | **`'1.2'`** (revisada em 04/06/2025) | Corrigir |
| `BLUEPRINT.vigenteDesde` | `'2026-01-01'` | `2026-01-01` | ✅ Confere |

---

## 2. Proporções oficiais por macrotema — **VERIFICADO**

O PDF declara a proporção de cada macrotema. Somam exatamente 100%.

| Macrotema oficial | Proporção | `peso` atual no repo | Ação |
|---|---|---|---|
| 1. Estrutura e dinâmica do sistema financeiro nacional | **20%** | `null` | Definir `0.20` |
| 2. Produtos do mercado financeiro | **40%** | `0.4` ✅ | Manter, marcar verificado |
| 3. Relacionamento com o cliente (prospecção, atendimento e suporte) | **30%** | `null` | Definir `0.30` |
| 4. Inovação e desenvolvimento de mercado | **10%** | `null` | Definir `0.10` |

Com fonte oficial, os 4 macrotemas passam a `pesoVerificado: true` e o banner
`AvisoVerificacao` de pesos (`PESOS_PENDENTES`) deixa de aparecer.

**Correções de nomenclatura:** o macrotema 3 oficial inclui o subtítulo
"(prospecção, atendimento e suporte)"; o macrotema 4 é "desenvolvimento **de**
mercado", não "do mercado".

---

## 3. O que o PDF **não** contém — permanece não verificado

O Programa Detalhado é um documento **de conteúdo**. Ele não traz:

- número de questões da prova;
- duração do exame;
- nota de corte / percentual mínimo de aprovação;
- proporção por formato de questão (múltipla escolha × árvore de decisão).

Portanto, `totalQuestoes: 50`, `duracaoMin: 150`, `notaCorte: 0.7` e o array
`formatos` **continuam sem fonte** e o blueprint permanece `verificado: false`.
Esses dados vivem no documento de *Regras e Procedimentos* / edital da
certificação, que não foi fornecido. Nada será preenchido por dedução (regra 4
do `CLAUDE.md`).

---

## 4. Dimensão do programa oficial

| Macrotema | Microtemas | Itens de conteúdo (todos os níveis) |
|---|---|---|
| 1. Sistema financeiro nacional | 4 | 139 |
| 2. Produtos do mercado financeiro | 5 | 217 |
| 3. Relacionamento com o cliente | 4 | 143 |
| 4. Inovação e desenvolvimento de mercado | 7 | 87 |
| **Total** | **20** | **586** |

Repositório hoje: **9 microtemas** e **14 conceitos**.

---

## 5. Matriz de auditoria

Legenda de status: **✅ coberto** · **🟡 parcial** · **❌ ausente**
Prioridade = peso do macrotema × tamanho da lacuna.

### Macrotema 1 — Estrutura e dinâmica do SFN (20%)

| Microtema oficial | Conceitos exigidos | Conteúdo existente | Conteúdo ausente | Desatualizado | Prioridade |
|---|---|---|---|---|---|
| **1.1** Sistema financeiro nacional | Órgãos normativos (CMN, CNSP, CNPC); Supervisão (BC, CVM, SUSEP, PREVIC); 17 operadores/participantes; autorreguladores (Anbima, Apimec, Planejar, Ancord, FGC, FGCCoop); SBP | 🟡 `c-cmn`, `c-bacen`, `c-cvm` (m1.1) | CNSP, CNPC, os 17 operadores, FGC/FGCCoop, autorreguladores, SBP | — | **Alta** |
| **1.2** Política econômica | Fluxo circular da renda; subdivisões do mercado; política fiscal, monetária e cambial; Copom; metas de inflação; Selic/CDI; PIB, IPCA, IGP-M, IPA, IPC-Fipe, TR; riscos de liquidez, crédito e mercado | ❌ nada | **Microtema inteiro** (32 itens) | — | **Crítica** |
| **1.3** Operações do mercado financeiro | Juros nominal/real; capitalização simples × composta; fluxo de caixa, VP/VF/VPL; TIR; duration; custo de oportunidade; taxa livre de risco; CMPC; fórmula de Fisher; SAC e Price; payback; desconto bancário | ❌ nada | **Microtema inteiro** (30 itens) — toda a matemática financeira | — | **Crítica** |
| **1.4** Regulação e infraestrutura | IMFs; SPB, SPI, Selic; contrapartes e depositários centrais; Comef; Basileia I/II/III; clearings; B3; portabilidade de custódia; BSM; classificação de investidores (Res. CVM 30); Lei 13.874/19; Código Anbima de Distribuição | ❌ nada | **Microtema inteiro** (38 itens) | — | **Crítica** |

> **Achado importante:** o microtema `m1.2` do repositório é *"Prevenção à
> lavagem de dinheiro"*. No programa oficial, **PLDFT não pertence ao macrotema 1** —
> está em **3.4.5**. O conceito `c-pld` precisa ser **realocado para o macrotema 3**.

### Macrotema 2 — Produtos do mercado financeiro (40%)

| Microtema oficial | Conceitos exigidos | Conteúdo existente | Conteúdo ausente | Desatualizado | Prioridade |
|---|---|---|---|---|---|
| **2.1** Produtos de investimentos (144 itens) | Renda fixa (títulos públicos, Tesouro Direto, títulos bancários, debêntures, CRI/CRA, rating, poupança, TR, TLP, tributação, IOF); renda variável (ações, eventos corporativos, índices, governança, tributação); **COE**; fundos (Res. CVM 175 parte geral + Anexo I FIF, tipificação, remuneração, assembleias, PL negativo); tributação de fundos; **FIIs** | 🟡 m2.1 Renda fixa, m2.2 Fundos, m2.3 Renda variável | COE; FIIs; LCD; Tesouro Educa+/Renda+; RDC; debênture de infraestrutura; eventos corporativos detalhados; segmentos de listagem; tag/drag along; estrutura de classes e subclasses da CVM 175; PL negativo; taxas de ingresso/saída | Verificar se os fundos estão descritos sob a **Res. CVM 175** (classes/subclasses) e não sob a revogada ICVM 555 | **Crítica** |
| **2.2** Previdência complementar | PGBL, VGBL; regimes progressivo e regressivo; fases; taxas; portabilidade; **7 modalidades de renda** (RMV, RMV com prazo garantido, reversível, temporária, prazo certo, pagamento único) | 🟡 dentro de m2.3 | Regimes de tributação em detalhe; portabilidade e carências; as 7 modalidades de transformação em renda | Alíquotas a conferir na legislação | **Alta** |
| **2.3** Produtos de financiamento | Rating/score/SCR; empréstimo × financiamento × leasing; cartão de crédito; cheque especial; consignado; CDC; crédito imobiliário; capital de giro; consórcio | ❌ nada | **Microtema inteiro** (18 itens) | — | **Crítica** |
| **2.4** Serviços bancários | Conta corrente; depósitos à vista; boleto; **PIX** (chaves, custos, liquidação, PJ); tarifas e gratuidades; atendimento bancário; conta internacional e IOF; câmbio | ❌ nada | **Microtema inteiro** (24 itens) | — | **Crítica** |
| **2.5** Seguros de vida e patrimoniais | Vida inteira, temporário, tradicional; automóvel, residencial, prestamista | ❌ nada | **Microtema inteiro** (8 itens) | — | **Alta** |

### Macrotema 3 — Relacionamento com o cliente (30%)

| Microtema oficial | Conceitos exigidos | Conteúdo existente | Conteúdo ausente | Desatualizado | Prioridade |
|---|---|---|---|---|---|
| **3.1** Finanças pessoais (40 itens) | Faixa etária × risco; ciclo de vida (acumulação, crescimento, preservação, distribuição); orçamento e fluxo de caixa; gestão de dívidas (12 modalidades); reserva de emergência; balanço patrimonial pessoal; planejamento financeiro (5 etapas); tributação de PF | ❌ nada | **Microtema inteiro** | — | **Crítica** |
| **3.2** Orientações financeiras | Tolerância a risco × horizonte; gestão financeira, de investimentos e de risco/seguros | ❌ nada | **Microtema inteiro** | — | **Alta** |
| **3.3** Classificação das pessoas investidoras | Perfis; adequação de produtos; risco × retorno; diversificação; investidor profissional e qualificado | 🟡 m3.1 Suitability | Diversificação de carteira; distinção formal profissional × qualificado | — | **Alta** |
| **3.4** Regras e condutas (88 itens) | Código de ética (9 princípios); suitability e Código de Distribuição; técnicas de atendimento; conflitos de interesses; riscos da atividade; **PLDFT e fraudes eletrônicas**; **LGPD e sigilo bancário**; **crimes e ilícitos contra o mercado de capitais** (insider trading, spoofing, layering, churning, front running, money pass) | 🟡 m3.1 Suitability, m3.2 Ética; `c-pld` (hoje em M1) | Os 9 princípios éticos nominais; técnicas de atendimento; riscos operacional/regulatório/legal/imagem; LGPD; sigilo bancário; **todo o bloco 3.4.7 de crimes e ilícitos** | — | **Crítica** |

### Macrotema 4 — Inovação e desenvolvimento de mercado (10%)

| Microtema oficial | Conceitos exigidos | Conteúdo existente | Conteúdo ausente | Desatualizado | Prioridade |
|---|---|---|---|---|---|
| **4.1** ESG no mercado financeiro | Conceitos E, S e G | 🟡 dentro de m4.2 | Detalhamento dos 3 pilares | — | Média |
| **4.2** Introdução aos investimentos ESG | ESG e finanças; produtos; estratégias; avaliação; PRI; CVM 175 art. 49 | 🟡 dentro de m4.2 | Estratégias de investimento ESG; PRI; art. 49 da CVM 175 | — | Média |
| **4.3** Fundos IS e fundos que integram questões ESG | Identificação | ❌ | Item inteiro | — | Média |
| **4.4** Finanças Descentralizadas (DEFI) | TradFi × DeFi; blockchain; smart contracts; DEXs; DAOs; tokenização; NFT; stablecoins; renda fixa digital; ETF de bitcoin; **DREX** | 🟡 dentro de m4.2 | Smart contracts em profundidade; DEXs; DAOs; tokenização; NFT; ETFs cripto; DREX | — | **Alta** |
| **4.5** Open finance, open investment, open insurance | Conceitos; CreditScore; Res. Conjunta nº 1/2020; CVM 229, 209, 210 | 🟡 m4.1 | Open investment e open insurance; portabilidade de valores mobiliários | — | Média |
| **4.6** Inteligência Artificial | IA generativa e regenerativa; modelos preditivos; chatbots e assistentes virtuais | ❌ nada | **Microtema inteiro** | — | **Alta** |
| **4.7** Fintechs e meios de pagamento | Fintechs; sandbox regulatório; regulação; desintermediação; arranjo, adquirente, sub-adquirente | 🟡 m4.1 | Sandbox regulatório; cadeia de meios de pagamento (arranjo/adquirente/sub-adquirente) | — | Média |

---

## 6. Regra de Ouro — resultado

> "Não considerar a aplicação completa enquanto houver microtemas ou competências
> oficiais sem material didático real e explicativo."

**A aplicação NÃO está completa.**

| Situação | Microtemas |
|---|---|
| ❌ Ausentes por completo | **8** — 1.2, 1.3, 1.4, 2.3, 2.4, 2.5, 3.1, 3.2, 4.6 *(9 contando 4.3)* |
| 🟡 Parciais | **11** |
| ✅ Cobertos integralmente | **0** |

Nenhum dos 20 microtemas oficiais está integralmente coberto.

---

## 7. Desatualizações identificadas

1. **PLDFT no macrotema errado.** `c-pld` está em `m1.2`; oficialmente é 3.4.5.
2. **Nome e versão da certificação** desalinhados do documento oficial.
3. **Fundos de investimento** precisam ser revisados sob a **Resolução CVM
   nº 175** (classes e subclasses, PL negativo, taxas de ingresso/saída) — o
   programa cita a 175 explicitamente e não menciona a ICVM 555.
4. **Alíquotas tributárias** citadas no conteúdo continuam sem verificação
   (pendência já registrada no `CLAUDE.md`).

---

## 8. Próximo passo

**Fase 3 — relatório de lacunas**, com a lista priorizada de conceitos a escrever
e questões a criar, e o dimensionamento do esforço de autoria.
