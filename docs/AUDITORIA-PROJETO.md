# Fase 1 — Auditoria do projeto atual

> Documento gerado na Fase 1 do roteiro de
> `Melhorias_Conteudo_e_Tematico_Complementares_CPA.md`.
> Objetivo: registrar **o que existe hoje**, sem opinião e sem alterar código,
> e medir o delta contra cada um dos 21 itens da especificação.
>
> Data da auditoria: 2026-08-24 · branch `claude/markdown-document-analysis-37g2pr`
> · commit base `7003c3f`.

---

## 1. Inventário quantitativo

| Métrica | Valor |
|---|---|
| Macrotemas | 4 |
| Microtemas | 9 |
| Conceitos (aulas) | 14 |
| Questões autorais | 43 |
| Páginas | 21 |
| Rotas registradas | 22 |
| Componentes | 10 |
| Arquivos do motor | 5 |
| Arquivos de teste | 2 (~60 casos) |
| Dependências de runtime | 4 (react, react-dom, react-router-dom, zustand) |

Distribuição do conteúdo:

| Macrotema | Arquivo | Microtemas | Conceitos | Questões |
|---|---|---|---|---|
| M1 Sistema Financeiro Nacional | `src/lib/content/m1-sfn.ts` | 2 | 4 | 13 |
| M2 Produtos do mercado financeiro | `src/lib/content/m2-produtos.ts` | 3 | 6 | 19 |
| M3 Relacionamento com o cliente | `src/lib/content/m3-relacionamento.ts` | 2 | 2 | 11 (M3+M4) |
| M4 Inovação e desenvolvimento | `src/lib/content/m4-inovacao.ts` | 2 | 2 | — |

---

## 2. Contratos de domínio — `src/lib/types.ts`

Hierarquia: MACROTEMA → MICROTEMA → CONCEITO → EXPLICAÇÃO → EXEMPLO →
PONTO DE ATENÇÃO → QUESTÃO → REVISÃO.

- `Macrotema` — `id, codigo, nome, resumo, peso: number|null, pesoVerificado: boolean, ordem, microtemas[]`
- `Microtema` — `id, macrotemaId, nome, ordem, preRequisitos: string[], conceitos[]`
- `Conceito` — `id, microtemaId, titulo, objetivo, etiquetas, resumo30s, explicacao,
  exemplos[], conceitoChave, pontosChave[], erroComum, alertaProva?, tabela?,
  perguntaRapida, mapaMental, reexplicacoes, minutosEstimados`
- `Explicacao` — `oQueE, paraQueServe, comoFunciona[], exemploSimples, lembrarNaProva[]`
  (os 5 passos da regra 6 do `CLAUDE.md`)
- `Etiqueta` — `ESSENCIAL | ATENCAO | DECORAR | ENTENDER | PEGADINHA`
- `Reexplicacoes` — `simples, exemplo, analogia, iniciante` (4 variantes planas,
  todas pré-autoradas)

Demais tipos: `Questao`, `Alternativa`, `PassoDecisao`, `Resposta`,
`EstadoConceito`, `NivelDominio`, `Conquista`, `EventoXP`, `Metas`, `Sequencia`,
`SessaoHistorico`, `ResultadoSimulado`, `SimuladoModo`, `Favoritos`, `Perfil`,
`ExamBlueprint`.

**Não existe** no tipo: níveis de profundidade 1/2/3, `porQueImporta`,
`exemploAplicado`, `revisaoRapida`, versionamento por conceito.

---

## 3. Estrutura da prova — `src/lib/blueprint.ts`

```
BLUEPRINT = { id: 'cpa', versao: '2026.1', vigenteDesde: '2026-01-01',
              totalQuestoes: 50, duracaoMin: 150, notaCorte: 0.7,
              formatos: [multipla_escolha 40, arvore_decisao 10],
              verificado: false }
```

Também exporta `SIMULADO_PRESETS` (completo/rápido/tema/pontos fracos) e
`FAIXAS_DOMINIO` (inicial <0,4 · desenvolvimento · intermediário 0,6 · bom 0,75 ·
dominado 0,9).

**Estado de verificação:** `verificado: false`. Os 4 macrotemas estão com
`pesoVerificado: false`; apenas M2 tem `peso: 0.4`, os demais `peso: null`.
`pesosEfetivos()` (`src/lib/content/index.ts:38`) distribui o resíduo igualmente
e `PESOS_PENDENTES` dispara o banner `AvisoVerificacao` em `pages/Trilha.tsx:41`
e `pages/Config.tsx:181`. O comportamento previsto pela regra 4 do `CLAUDE.md`
está funcionando: nenhum dado não conferido é apresentado como oficial.

---

## 4. Motor pedagógico — `src/lib/engine/`

| Arquivo | Conteúdo |
|---|---|
| `mastery.ts` (164 l.) | Elo/IRT 1 parâmetro: `probabilidadeAcerto`, `fatorK`, `estadoInicial`, `registrarResposta`, `retencao` (curva de esquecimento em potência), `dominioEfetivo`, `nivelDominio`, `dificuldadeAlvo`. `PESO_MOTIVO` pondera o tipo de erro (desatenção pesa 0,45; conceito pesa 1). |
| `scheduler.ts` (137 l.) | `pontuarConceito` → `ItemPriorizado {conceitoId, score, motivo, explicacao}` — **já devolve justificativa textual**. `escolherQuestao` (mira P(acerto)≈0,8), `filaDeRevisao`, `errosAbertos`. `ROTULO_SELECAO` traz as frases prontas ("Você errou isso recentemente", "Seu ponto mais fraco agora"). |
| `planner.ts` (275 l.) | `montarSessao` → `PlanoSessao {passos, minutosEstimados, justificativa, focos}`, orçado em minutos, com `intercalar()` (máx. 3 itens seguidos do mesmo microtema). `montarVespera` prioriza erros abertos e etiquetas PEGADINHA/DECORAR. `MIX = aprender 25% · praticar 45% · revisar 25% · pegadinha 5%`. |
| `gamification.ts` (171 l.) | `XP` (9 chaves), `xpPorResposta`, `nivelPorXP` (quadrático), `TITULOS_NIVEL`, `atualizarSequencia` (com congelamentos), `CONQUISTAS` (12). |
| `stats.ts` (172 l.) | `agregar`, `porMacrotema`, `porDificuldade`, `dominioMacrotema`, `progressoGeral`, `cobertura`, `ranking`, `assuntosFracos/Fortes`, `evolucaoDiaria`, `prontidao` (retorna `null` abaixo de 60 respostas / 50% de cobertura, em vez de inventar probabilidade). |

Tudo em TS puro, sem React — testável sem DOM, conforme a arquitetura declarada.

**Lacuna estrutural:** o domínio é calculado **por conceito** e agregado **por
macrotema**. Não existe `dominioMicrotema()` exportado; há uma função local
ad-hoc em `pages/Trilha.tsx:13`, usada só para o gate de pré-requisito de 60%.

---

## 5. Persistência — `src/lib/store.ts` (510 l.)

Zustand + `persist` sobre `localStorage`, `version: VERSAO_ESTADO = 1`,
`partialize` explícito. Camada única de I/O, conforme a regra 8.

Persistido: `versao, onboardingConcluido, perfil, metas, preferencias, sequencia,
xpTotal, eventosXP[], conquistas[], estados, respostas[], sessoes[], simulados[],
favoritos, minutosPorDia, questoesPorDia`.

`Resposta` registra `questaoId, macrotemaId, microtemaId, conceitoId, dificuldade,
escolhida, correta, acertou, tempoMs, tentativa, data, origem` — cobre integralmente
as métricas exigidas pelo item 8 da especificação.

`Metas.dataProva: string|null` + helper `diasParaProva()` (`store.ts:503`) já
existem, editáveis em `pages/Metas.tsx:159` e `pages/Onboarding.tsx:107`.

---

## 6. Delta contra os 21 itens da especificação

Legenda: **✅ existe** · **🟡 parcial** · **❌ ausente**

| # | Item da spec | Status | Situação atual e o que falta |
|---|---|---|---|
| 1 | Fonte oficial ANBIMA | 🟡 | `BLUEPRINT.fonte` aponta para o Programa Detalhado, mas `verificado: false` e nenhum peso conferido. **Falta o PDF oficial.** |
| 1b | Arquitetura flexível a atualizações | 🟡 | Conteúdo é dado versionado (`blueprint.versao`), separado de código. Falta versionamento por conceito/questão e changelog. |
| 2 | Matriz de auditoria de conteúdo | ❌ | Não existe. É a Fase 2 — **bloqueada no PDF**. |
| 3 | Lição em 9 blocos | 🟡 | `pages/Aula.tsx` já renderiza ~15 blocos. Faltam 3 campos tipados: `porQueImporta`, `exemploAplicado`, `revisaoRapida`. |
| 3b | "Quero entender melhor" | 🟡 | Existe como botão "Não entendi — explique de outro jeito" (`Aula.tsx:283`). Falta o recurso de expandir detalhe técnico progressivo. |
| 4 | Níveis 1/2/3 (Entenda/Aprenda/Aprofunde) | ❌ | Existe `reexplicacoes` (4 variantes de enquadramento), que é outro eixo. Nenhuma noção de profundidade progressiva. |
| 5 | Mapas mentais completo + revisão | ✅ | `components/domain/MapaMental.tsx` + `pages/Mapas.tsx` com toggle "modo revisão" (`MapaMentalNode.revisao`). Existe por **conceito**; a spec pede também por macro/microtema. |
| 6 | Modos de revisão (prova / 5 min / 15 min / completa) | 🟡 | `pages/Resumos.tsx`, `pages/Revisao.tsx` e `pages/Vespera.tsx` cobrem parte. `planner.montarSessao` já aceita orçamento em minutos — os 4 modos nominais não estão expostos na UI. |
| 7 | Atributos obrigatórios da questão | ✅ | Todos presentes e **validados em tempo de carga** por `questions/builder.ts`: macro/micro/conceito, habilidade, dificuldade, explicação e justificativa em **toda** alternativa, inclusive incorretas. |
| 7b | Tipos de questão | 🟡 | `QuestionKind` tem 9 valores e o teste exige ≥6 cobertos. **Só 1 questão de árvore de decisão existe** (`banco-m1.ts:164`), contra 10 previstas no blueprint. |
| 8 | Métricas por tentativa | ✅ | `Resposta` cobre tudo, incluindo `tempoMs` e nº de tentativa. |
| 8b | Diagnóstico didático do erro | 🟡 | `QuestaoPlayer.tsx` coleta o **motivo do erro** (conceito/cálculo/interpretação/desatenção/chute) e mostra justificativas. Faltam os 3 blocos nominais ("Por que você errou" / "O que precisa entender" / "Como lembrar no dia da prova") e o botão "Praticar novamente". |
| 9 | Índice de domínio por microtema | 🟡 | Existe por conceito e por macrotema. **Falta a agregação por microtema no engine.** |
| 9b | "Estude Agora" com justificativa | 🟡 | Existe em substância: `/rapido` + bloco "Recomendação de estudo" em `Home.tsx:117`. A spec pede **1 a 3** recomendações; hoje há uma. |
| 10 | Gamificação | ✅ | XP, níveis, títulos, streak com congelamento, 12 conquistas, metas diárias/semanais. Faltam desbloqueios progressivos e desafios. |
| 11 | Dark mode + verde-água | ✅ | `src/styles/index.css:5-27` + `tailwind.config.js:5-21`. Acento único `--aqua: 53 214 176`; `--warn`/`--danger` semânticos. |
| 11b | Atmosfera Akatsuki no Yona | ❌ | Zero ocorrências no repositório. Ícones são glifos Unicode inline (`AppShell.tsx:15-30`). |
| 12 | Personagens por módulo | ❌ | Não existe. Depende do nº de macrotemas do programa novo. |
| 13 | Dashboard | ✅ | `pages/Home.tsx` já tem progresso, meta do dia, sequência, recomendação justificada e próximos conteúdos. Falta "Próximo desafio". |
| 14 | Trilha visual de aprendizagem | 🟡 | `pages/Trilha.tsx` lista macrotemas com domínio e gate de pré-requisito em 60%. **Não há jornada visual** INÍCIO→MÓDULO→LIÇÃO→MINIQUIZ→DESAFIO→REVISÃO. |
| 15 | Modo "Tenho Prova" | 🟡 | `Metas.dataProva` + `diasParaProva()` existem e a Home usa. **Falta o cálculo de ritmo necessário** e metas diárias dinâmicas. |
| 15b | Modo Véspera | ✅ | `pages/Vespera.tsx` com roteiro de 7 etapas + `planner.montarVespera`. |
| 16 | Assistente de explicação | 🟡 | `ExpliqueDeOutroJeito.tsx` tem 4 botões pré-autorados. Falta renomear/remapear para os 3 rótulos da spec. **Sem IA, por decisão.** |
| 17 | Atualização contínua | ❌ | Não existe. Será registro manual de versões (decisão desta sessão). |
| 18 | Painel administrativo | ❌ | Não existe rota, página ou componente. |
| 19 | Design, mobile-first, performance | 🟡 | Mobile-first com sidebar + tab bar (`AppShell.tsx`), PWA offline (`public/sw.js`), bundle enxuto (4 deps). **Acessibilidade não auditada.** |
| 19b | Precisão factual | ✅ | Regra 4 aplicada: `verificado`/`pesoVerificado` + `AvisoVerificacao`; `prontidao()` retorna `null` em vez de estimar sem amostra. |
| 20 | Aviso legal no rodapé | 🟡 | O texto existe, mas **só em `pages/Config.tsx:232`**. `AppShell.tsx` não tem `<footer>` global. |
| 21 | Roteiro em 10 fases | 🟡 | Fase 1 é este documento. |

**Resumo:** 8 itens ✅ · 15 🟡 · 7 ❌.

---

## 7. Testes existentes

| Arquivo | Casos | Cobertura |
|---|---|---|
| `src/test/conteudo.test.ts` (187 l.) | 25 | Integridade de dados: IDs únicos, referências válidas, 5 passos preenchidos, 4 reexplicações, índice de `perguntaRapida` válido, mapas com nó de revisão, tabelas consistentes; questões com 1 correta, justificativa em toda alternativa, ≥3 alternativas, `origem: 'autoral'`, ≥1 questão por conceito, ≥6 dos 9 tipos; blueprint somando formatos e pesos. |
| `src/test/engine.test.ts` (312 l.) | ~35 | Domínio em [0,1], subida/queda, peso do motivo do erro, retenção decaindo, intervalo de revisão, faixas, dificuldade alvo, seleção adaptativa, prioridade, XP/nível/sequência, estatísticas e prontidão com amostra insuficiente. |

Sem testes de componente ou de acessibilidade.

---

## 8. Riscos e dívidas identificadas

1. **Blueprint não verificado.** `totalQuestoes: 50`, `duracaoMin: 150` e
   `notaCorte: 0.7` não têm fonte conferida e a certificação de referência mudou.
   Bloqueia as Fases 2 e 4.
2. **Cobertura de conteúdo rasa.** 14 conceitos e 9 microtemas dificilmente
   cobrem um programa detalhado completo. Dimensionamento real só na Fase 3.
3. **Árvore de decisão sub-representada.** 1 questão contra 10 previstas no
   blueprint — o simulado completo não consegue montar a proporção declarada.
4. **`eslint` no script `lint` mas ausente das dependências** (`package.json`).
5. **Aviso legal fora do rodapé global**, contrariando o item 20.
6. **Acessibilidade nunca auditada** — sem `aria-*` nos mapas mentais e no player.
7. **Sem migração de estado persistido.** `VERSAO_ESTADO = 1` existe, mas não há
   função de migração; mudanças de tipo nas próximas fases podem invalidar o
   progresso já salvo do usuário.

---

## 9. Próximo passo

**Fase 2 — auditoria do conteúdo contra o Programa Detalhado oficial.**
Bloqueada até o recebimento do PDF do programa vigente da ANBIMA. Nenhum
macrotema, peso, número de questões, duração ou nota de corte será preenchido
sem essa fonte (regra 4 do `CLAUDE.md`).
