# Progresso da autoria de conteúdo

> Este arquivo existe para que o trabalho sobreviva à troca de sessão. A ordem
> de prioridade vem de `LACUNAS.md` §3; aqui fica o que já foi entregue, o que
> vem a seguir e as decisões editoriais tomadas pelo caminho.
>
> **Atualize a cada microtema concluído**, no mesmo commit do conteúdo.

## Onde estamos

| | Início do plano | Agora | Alvo |
|---|---:|---:|---:|
| Conceitos | 14 | **31** | 88 |
| Questões | 43 | **133** | 700 (piso 440) |
| Microtemas com aula | 7/20 | **10/20** | 20/20 |

Questões do tipo `calculo`: 3 → **22**.

**Macrotema 1 (SFN, 20% da prova) está completo**: 1.1, 1.2, 1.3 e 1.4 têm aula.

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

## Fila, na ordem de prioridade

| Ordem | Microtema | Conceitos | Situação |
|---|---|---:|---|
| 1 | ~~1.3 Operações do mercado financeiro~~ | 6 | ✅ feito |
| 2 | ~~1.2 Política econômica~~ | 6 | ✅ feito |
| 3 | ~~1.4 Regulação e infraestrutura~~ | 5 | ✅ feito |
| 4 | 2.4 Serviços bancários | 4 | próximo |
| 5 | 2.3 Produtos de financiamento | 4 | |
| 6 | 2.5 Seguros de vida e patrimoniais | 2 | |
| 7 | 3.1 Finanças pessoais | 7 | |
| 8 | 3.2 Orientações financeiras | 2 | |
| 9 | 4.6 Inteligência artificial | 2 | |
| — | P1 e P2 (`LACUNAS.md` §3) | 36 | depois do P0 |

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
