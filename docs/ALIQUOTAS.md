# Conferência das alíquotas tributárias citadas no conteúdo

> Fecha a pendência *"Conferir alíquotas tributárias citadas no conteúdo (mudam
> por legislação)"* do `CLAUDE.md`.
>
> **Data da conferência: 24/08/2026.**

---

## 1. Limitação desta conferência — **superada em 25/08/2026**

> **Atualização de 25/08/2026.** A fonte primária **foi lida**. O bloqueio
> descrito abaixo não era da rede: `planalto.gov.br` recusa o User-Agent padrão
> do `curl` e responde 200 a um User-Agent de navegador. Feita a troca, os
> textos vigentes foram lidos direto do Planalto. Ver a seção 7.

Redação original, mantida como registro do que se sabia em 24/08/2026:

Os sites oficiais **não puderam ser lidos** neste ambiente. `planalto.gov.br`,
`gov.br` (Receita Federal), `anbima.com.br` e `anbimaedu.com.br` são todos
recusados pela política de egresso da sessão (403 no CONNECT).

A conferência foi feita por **busca, cruzando fontes secundárias
independentes**, e cada alíquota está ancorada na **base legal identificada**,
para que a verificação no texto da lei seja direta.

Isso é diferente do que ocorreu com o blueprint: lá os dois documentos oficiais
da ANBIMA foram lidos integralmente e os campos estão `verificado: true`. Aqui,
**a fonte primária não foi lida**.

---

## 2. Contexto decisivo: a MP 1.303/2025 não virou lei

Esta era a razão de a pendência existir. A **Medida Provisória nº 1.303/2025**
propunha, a partir de 2026:

- **alíquota única de 17,5%** sobre aplicações financeiras, extinguindo a tabela
  regressiva de 22,5% a 15%;
- **IRRF de 5%** sobre títulos hoje isentos (LCI, LCA, CRI, CRA e debêntures
  incentivadas).

**A MP não foi convertida em lei** — perdeu eficácia em outubro de 2025, após ser
retirada de pauta na Câmara e esgotar o prazo constitucional de 120 dias.

**Consequência: nada mudou.** A tabela regressiva e todas as isenções seguem
vigentes, e o conteúdo do app está correto.

---

## 3. Resultado item a item

| # | Afirmação no conteúdo | Base legal | Situação |
|---|---|---|---|
| 1 | IR regressivo em renda fixa: **22,5%** até 180d · **20%** de 181 a 360d · **17,5%** de 361 a 720d · **15%** acima de 720d | Lei nº 11.033/2004, art. 1º | ✅ vigente |
| 2 | Isenção de IR para PF em **LCI, LCA, CRI, CRA e debênture incentivada** | Lei nº 11.033/2004, art. 3º; Lei nº 12.431/2011 | ✅ vigente |
| 3 | **IOF regressivo** em resgates com menos de 30 dias, de 96% no 1º dia a 0% no 30º | Decreto nº 6.306/2007, Anexo | ✅ vigente |
| 4 | **FGC**: R$ 250 mil por CPF/CNPJ por conglomerado; teto global de R$ 1 milhão a cada 4 anos | Resolução CMN / Estatuto do FGC | ✅ vigente |
| 5 | **PGBL**: dedução de até **12% da renda bruta anual tributável**, exigindo declaração completa e contribuição ao INSS | Lei nº 9.532/1997, art. 11 | ✅ vigente |
| 6 | **Previdência, regime regressivo**: alíquota cai de 35% até atingir o piso de **10% após 10 anos** | Lei nº 11.053/2004, art. 1º | ✅ vigente |

Nenhuma alíquota do conteúdo precisou de correção.

---

## 4. Percentuais que **não** são alíquotas

O `grep` por `%` no conteúdo devolve muitos números que são **exemplos didáticos**,
não dados normativos, e portanto não exigem verificação: `IPCA + 6%`, `102% do
CDI`, `prefixado de 11% a.a.`, `Selic + 0,05%`, `alta de 10% da cota`. Ficam como
estão.

---

## 5. Achado colateral — atualização de conteúdo necessária

A **Resolução CMN nº 5.295/2026**, em vigor desde **01/06/2026**, endureceu as
regras para bancos captarem recursos com garantia do FGC, criando um gatilho
baseado na qualidade e diversificação dos ativos do emissor (o "Ativo de
Referência").

**Não altera o limite de cobertura do investidor** — os R$ 250 mil e o teto de
R$ 1 milhão seguem iguais. Mas é matéria nova e provável de prova: entra como
complemento ao conceito `c-fgc` e ao microtema oficial **1.1** (FGC e FGCCoop),
registrado no relatório de lacunas.

---

## 6. Recomendação — **atendida**

A recomendação era ler a lei em vez de confiar em fonte secundária. Foi feito
em 25/08/2026; o resultado está na seção 7.

O `alertaProva` do conceito de tributação foi atualizado para citar a base legal
e a data desta conferência, em vez de um aviso genérico.

---

## 7. Leitura da fonte primária — 25/08/2026

Textos lidos no Planalto, na versão consolidada e vigente:

| Norma | Dispositivo | O que confirma |
|---|---|---|
| Lei 11.033/2004 | art. 1º, I a IV | Tabela regressiva da renda fixa: **22,5% · 20% · 17,5% · 15%**, nas faixas de até 180, 181–360, 361–720 e acima de 720 dias |
| Lei 11.033/2004 | art. 3º, I a III | Isenção para PF: ações até R$ 20 mil de alienação no mês, LH/CRI/LCI, e rendimentos distribuídos por FII e Fiagro negociados em bolsa ou balcão organizado |
| Lei 11.053/2004 | art. 1º, I a VI | Tabela regressiva da previdência: **35% → 10%**, degrau de 5 pontos a cada 2 anos, piso acima de 10 anos |
| Lei 11.053/2004 | art. 1º, § 4º | A portabilidade **preserva** o prazo de acumulação no plano receptor |
| Lei 14.803/2024 | arts. 1º a 3º | Nova redação ao § 6º do art. 1º da Lei 11.053: a opção pelo regime vai **até o benefício ou o primeiro resgate** |
| Lei 9.532/1997 | art. 11, caput e § 5º | Limite de **12%** da renda bruta tributável, **condicionado** a recolher também ao RGPS ou a regime próprio — ressalvados aposentados e pensionistas desses regimes |

**Confirmação sobre a MP 1.303/2025.** O próprio texto do Planalto marca, nos
arts. 1º e 3º da Lei 11.033/2004, a nota *"Vide Medida Provisória nº 1.303, de
2025 — Vigência encerrada"*. Isso fecha por fonte primária o que a seção 2
sustentava por fonte secundária: **a MP não produziu efeito permanente e a
tabela regressiva e as isenções seguem vigentes**.

**Achado que mudou conteúdo do app.** A leitura da Lei 14.803/2024 mostrou que
o repositório ensinava a regra antiga — `c-previdencia` afirmava, em quatro
lugares, que a opção pelo regime tributário é feita na adesão e é irreversível.
Corrigido em 25/08/2026, com o conceito passando à versão 3. A regra vigente
está em `c-prev-regimes` (`content/m2-2-previdencia.ts`).

**O que segue sem leitura de fonte primária:** o Decreto 6.306/2007 (IOF) e o
estatuto do FGC. Nenhuma aula ou questão do app depende de alíquota de IOF, e
os limites do FGC estão conferidos contra a Resolução CMN 4.222/2013 e suas
alterações.
