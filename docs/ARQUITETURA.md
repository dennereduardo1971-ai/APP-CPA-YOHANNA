# Preparatório CPA — Arquitetura Técnica e Funcional

> Documento de proposta. Nenhum código foi escrito. Status: **aguardando aprovação**.
> Versão 0.1 — 18/08/2026

---

## 0. Sumário executivo

A proposta central é: **não construir um app de questões com conteúdo dentro dele, e sim um motor de aprendizagem com o conteúdo do lado de fora.**

Três separações sustentam tudo o que vem a seguir:

1. **Conteúdo ≠ código.** Lições, resumos, mapas mentais e questões vivem num pacote de conteúdo versionado (MDX + YAML no Git), validado por schema e ingerido no banco. Atualizar a prova é um *merge*, não um *deploy*.
2. **Currículo ≠ produto.** O que a ANBIMA cobra é um dado (`exam_blueprint`) com vigência, peso por módulo, nº de questões e nota de corte. O app lê esse dado. Quando a prova muda, muda a linha da tabela.
3. **Motor pedagógico ≠ interface.** Maestria, agendamento de revisão e montagem de sessão são um pacote TypeScript puro, testável isoladamente, sem React e sem banco.

### Achado crítico da pesquisa

**A certificação mudou em 2026.** A ANBIMA descontinuou CPA-10, CPA-20 e CEA e as substituiu por uma trilha modular: **CPA** (base, pré-requisito), **C-Pro R** (relacionamento) e **C-Pro I** (investimentos). O modelo novo também introduz microcertificações e atualização anual contínua no lugar da renovação periódica.

Isso não invalida o projeto — **valida a arquitetura proposta**. Um sistema que tratasse "CPA-20" como constante de código já estaria obsoleto oito meses depois de nascer. Por isso `certification` é entidade de primeira classe desde o dia 1, e a mesma base atende CPA, C-Pro R e C-Pro I sem refatoração.

### Decisões pendentes (não bloqueiam o desenho, mas mudam o escopo de conteúdo)

| # | Decisão | Impacto |
|---|---|---|
| D1 | Alvo do v1: nova **CPA** (2026), ou legado **CPA-10/CPA-20** para quem ainda vai prestar na janela de transição? | Define qual `blueprint` é produzido primeiro. Recomendação: nova CPA. |
| D2 | Origem das questões: 100% autorais, ou rascunho por IA com revisão humana obrigatória? | Recomendação: rascunho por IA + revisão humana travada no schema. Copiar questões reais da prova é vedado e a prova é sigilosa. |
| D3 | Monetização (free / freemium / assinatura) | Afeta limites de uso, mas não o modelo de dados. Pode ficar para depois do v1. |

---

## 1. Arquitetura

### 1.1 Camadas

```
┌─ AUTORIA ────────────────────────────────────────────────────┐
│ content/ (Git)  MDX + YAML   →  validação Zod  →  CLI sync   │
│ revisão editorial via Pull Request                            │
└───────────────────────────┬──────────────────────────────────┘
                            ↓ publica
┌─ DADOS ──────────────────────────────────────────────────────┐
│ Postgres (Supabase)                                           │
│  currículo · conteúdo · itens · eventos · agregados · pgvector│
│  RLS por usuário · append-only em `responses`                 │
└───────────────────────────┬──────────────────────────────────┘
                            ↕
┌─ MOTOR (@cpa/engine — TS puro, sem React, sem SQL) ──────────┐
│  mastery   · atualização θ/b (Elo-IRT)                        │
│  retention · agendamento FSRS                                 │
│  planner   · montagem da sessão de 30–45 min                  │
│  readiness · nota esperada + incerteza                        │
└───────────────────────────┬──────────────────────────────────┘
                            ↕
┌─ APLICAÇÃO ──────────────────────────────────────────────────┐
│ Next.js (App Router) · Server Actions · Edge Functions        │
│ PWA + IndexedDB (sessão offline) · TanStack Query             │
└──────────────────────────────────────────────────────────────┘
```

### 1.2 Princípios de projeto

**P1 — Respostas são um log, não um estado.** `responses` é append-only e idempotente (`client_event_id`). Maestria, XP e estatísticas são *derivados*. Isso permite reprocessar todo o histórico quando o motor melhorar, e resolve sincronização offline sem conflito.

**P2 — O motor roda dos dois lados.** O mesmo pacote calcula no cliente (feedback instantâneo, otimista) e no servidor (verdade). O cliente nunca escreve maestria; escreve eventos.

**P3 — Identificadores de objetivo são estáveis e eternos.** Um `learning_objective.code` (ex.: `RF.CDB.FGC`) nunca é reciclado. Quando o programa muda, `lo_aliases` mapeia antigo→novo e a maestria do usuário migra junto. Sem isso, cada atualização de conteúdo zera o progresso de todo mundo.

**P4 — O servidor é dono do tempo.** Cronômetro de simulado, virada de streak e prazos de revisão são calculados no servidor, no fuso do usuário. Relógio de cliente não é fonte de verdade.

**P5 — Nada regulatório é publicado sem humano.** Conteúdo gerado por IA nasce em `draft` e só o revisor humano move para `published`. Não há caminho automático.

### 1.3 Pesquisa e atualização de fontes externas

Não há scraping no cliente e não há "IA consultando a internet ao vivo" para responder ao aluno. O pipeline é assíncrono e supervisionado:

```
sources (allowlist curada)
   → job semanal busca e extrai texto
   → source_snapshots (hash do conteúdo)
   → hash mudou? → diff contra o snapshot anterior
   → content_drift_alerts (aberto)
   → humano tria: aplicar / descartar
   → PR no repositório de conteúdo
   → publica
```

A fonte primária é a ANBIMA (programa detalhado e edital vigente); fontes secundárias servem apenas de sinal de que "algo mudou", nunca de conteúdo.

**Restrição real já observada:** durante esta pesquisa, `anbima.com.br` e vários portais foram **bloqueados pelo proxy de egresso** do ambiente. Isso não é acidente — é o comportamento normal de ambientes com allowlist. Consequência arquitetural: o buscador de fontes precisa rodar em um worker com egresso explicitamente liberado por domínio, com timeout, retry e *fallback para upload manual do PDF*. O sistema nunca pode depender de conseguir baixar algo da internet para funcionar.

**Nota jurídica:** o programa detalhado é uma lista de tópicos (fato), mas os PDFs da ANBIMA são obra protegida, e as questões da prova são sigilosas. Todo conteúdo e todo item do banco são **autorais**.

---

## 2. Páginas

| # | Rota | Objetivo | Consome |
|---|---|---|---|
| 1 | `/` | Dashboard: o que fazer agora | próxima ação, streak, meta do dia, prontidão |
| 2 | `/trilha` | Mapa da jornada por módulo → tópico → unidade | `topic_progress`, estado de desbloqueio |
| 3 | `/conteudo/[lo]` | Micro-lição (3–7 min) | `content_items` tipo `licao` |
| 4 | `/resumos` | Resumo por tópico, leitura de 60s | `content_items` tipo `resumo` |
| 5 | `/mapas/[topico]` | Mapa mental navegável | `mindmaps` |
| 6 | `/questoes` | Prática dirigida, com filtro por módulo/dificuldade | `items`, `lo_mastery` |
| 7 | `/simulados` | Simulado completo, por módulo, ou relâmpago | `mock_exams`, `blueprint` |
| 8 | `/revisao` | Fila de erros não resolvidos + revisão espaçada | `error_log`, `review_queue` |
| 9 | `/metas` | Meta diária, data da prova, meta de maestria | `goals` |
| 10 | `/conquistas` | XP, medalhas, streak, liga (opt-in) | `xp_ledger`, `achievements` |
| 11 | `/estatisticas` | Acerto por módulo, tempo por questão, evolução | agregados materializados |
| 12 | `/progresso` | Cobertura do programa e maestria por LO | `lo_mastery` + currículo |
| 13 | `/perfil` | Dados, certificação alvo, data da prova | `profiles` |
| 14 | `/config` | Notificações, som, acessibilidade, tema, dados | `user_settings` |
| ★ | `/rapido` | **Estudo rápido** — entra e estuda, sem escolher nada | `planner` |
| — | `/onboarding` | Diagnóstico adaptativo de ~12 questões | motor de calibração |
| — | `/admin/**` | Estúdio de conteúdo, revisão de itens, alertas de fonte | acesso restrito |

O `/rapido` é a página mais importante do produto e deve ser alcançável em **um toque** do dashboard. Ela existe para eliminar a decisão "o que eu estudo hoje?", que é o principal ponto de abandono.

---

## 3. Componentes

**Base (design system):** Botão, Campo, Seletor, Modal, Aba, Toast, Avatar, Badge, Progresso (barra e anel), Esqueleto de carregamento, Estado vazio, Folha inferior (mobile).

**Domínio — aprendizagem**
- `LicaoCard` — bloco de micro-conteúdo com "entendi / ainda não"
- `ConceitoChave` — destaque de definição, com âncora para o glossário
- `Flashcard` — virar, autoavaliar (FSRS: de novo / difícil / bom / fácil)
- `MapaMental` — grafo navegável, com colapso por ramo
- `ResumoRapido` — cartão de 60 segundos por tópico

**Domínio — prática**
- `QuestaoPlayer` — enunciado, alternativas embaralhadas, cronômetro opcional
- `FeedbackResposta` — racional **de cada alternativa**, inclusive das erradas
- `SeletorMotivoErro` — conceito / cálculo / interpretação / desatenção / chute (1 toque)
- `PainelCalculadora` — para itens de cálculo (RF, rentabilidade, tributação)
- `SimuladoShell` — cronômetro do servidor, navegação por grade, marcar para revisar

**Domínio — progresso**
- `AnelMaestria` — maestria de um LO/tópico com estado (Novo/Aprendendo/Sólido/Manutenção)
- `MapaCalor` — cobertura do programa por módulo
- `GaugeProntidao` — nota esperada **com faixa de incerteza**
- `GraficoEvolucao` — série temporal de maestria ponderada
- `TrilhaNode` — nó da trilha com estado de desbloqueio

**Domínio — motivação**
- `Streak` — dias seguidos, com congelamento disponível
- `MetaDiaria` — minutos/questões do dia
- `XPBar`, `ConquistaToast`, `ResumoSessao` (o "fim de sessão" que fecha o loop)

---

## 4. Modelo de dados

### 4.1 Núcleo do currículo

```
certifications ──< exam_blueprints ──< blueprint_modules ──< topics ──< learning_objectives
                     (vigência)          (peso min/max)                  (code estável)
                                                                              │
                                              ┌───────────────────────────────┤
                                              ↓                               ↓
                                        content_items                       items
                                     (licao/resumo/mapa/                  (questões)
                                      flashcard/glossario)                    │
                                                                        item_options
```

**`certifications`** — `slug` (`cpa`, `c-pro-r`, `c-pro-i`, `cpa-20-legado`), nome, órgão, ativo.

**`exam_blueprints`** — `certification_id`, `version`, `effective_from`, `effective_to`, `n_questions`, `duration_min`, `cut_score`, `status`. É a "constituição" da prova. Toda ponderação de desempenho lê daqui.

**`blueprint_modules`** — `code`, `name`, `weight_min`, `weight_max`, `order`. A ANBIMA publica pesos em faixa (ex.: 15–25%); o motor usa o ponto médio e expõe a faixa na UI.

**`topics`** — `module_id`, `slug`, `name`, `est_minutes`, `order`.

**`learning_objectives` (LO)** — a unidade atômica de tudo. `topic_id`, `code` (estável), `statement`, `bloom_level` (lembrar/entender/aplicar), `prereq_codes[]`, `weight`. **Todo conteúdo e toda questão apontam para um LO.** Sem isso não existe adaptatividade.

**`lo_aliases`** — `old_code`, `new_code`, `kind` (rename/merge/split), `weight`. Preserva maestria quando o programa muda.

### 4.2 Conteúdo

- **`content_items`** — `lo_id`, `type`, `format` (mdx), `body`, `est_seconds`, `layer` (`essencial` | `aprofundamento` | `pegadinha`), `version`, `status`, `locale`
- **`content_versions`** — histórico com autor, revisor e diff
- **`mindmaps`** — `topic_id`, `graph` (jsonb: nós + arestas)
- **`glossary_terms`**, **`media_assets`**

### 4.3 Banco de itens

- **`items`** — `lo_id`, `stem`, `type` (`mc4` | `vf` | `calc`), `difficulty_b`, `discrimination_a`, `calibration_n`, `status`, `origin` (`autoral` | `ia_revisada`), `cooldown_hours`
- **`item_options`** — `item_id`, `text`, `is_correct`, `rationale` *(obrigatório em todas, inclusive erradas)*
- **`item_variants`** — parametrização numérica para itens de cálculo (evita decorar o número)
- **`item_stats`** — `p_acerto`, `tempo_medio_ms`, `taxa_descarte`, `flag_qualidade`
- **`item_reviews`** — trilha de revisão editorial

### 4.4 Aprendizagem

- **`study_sessions`** — `user_id`, `kind` (`trilha`|`rapido`|`simulado`|`revisao`), `started_at`, `ended_at`, `minutes`, `plan` (jsonb do plano gerado)
- **`responses`** *(append-only)* — `user_id`, `item_id`, `session_id`, `answer`, `is_correct`, `elapsed_ms`, `confidence`, `error_reason`, `theta_before`, `theta_after`, `client_event_id` (único → idempotência offline)
- **`lo_mastery`** — `user_id`, `lo_code`, `theta`, `m`, `n`, `last_practiced_at`, `stability`, `difficulty`, `due_at`, `state` (FSRS)
- **`error_log`** — erros ainda não resolvidos, com `resolved_at` quando o usuário acerta 2× o mesmo LO
- **`topic_progress` / `module_progress`** — agregados materializados (nunca calculados em leitura)

### 4.5 Simulados

- **`mock_exams`** — `blueprint_id`, `mode` (`completo`|`modulo`|`relampago`), `seed`
- **`mock_exam_attempts`** — `started_at_server`, `deadline_server`, `score`, `passed`, `by_module` (jsonb)
- **`mock_exam_items`** — composição sorteada segundo os pesos do blueprint

### 4.6 Metas e gamificação

- **`goals`** — `kind` (`minutos_dia`|`questoes_dia`|`data_prova`|`maestria_alvo`), `target`, `period`, `progress`
- **`streaks`** — `current`, `best`, `freezes_available`, `last_local_day`
- **`xp_ledger`** *(append-only)* — `source`, `points`, `reason`
- **`achievements` / `user_achievements`**
- **`leagues` / `league_memberships`** — opt-in, nunca padrão

### 4.7 Fontes e operação

- **`sources`** — `url`, `org`, `kind` (`oficial`|`secundaria`), `trust`, `active`
- **`source_snapshots`** — `hash`, `fetched_at`, `extracted_text`, `storage_ref`
- **`content_drift_alerts`** — `snapshot_id`, `diff`, `affected_entity`, `status`, `reviewer_id`
- **`audit_log`**, **`feature_flags`**

RLS: todo dado de usuário é isolado por `auth.uid()`. Currículo, conteúdo e itens publicados são legíveis por qualquer autenticado; `item_options.is_correct` **não** é exposto antes da resposta.

---

## 5. Fluxo do usuário

### 5.1 Onboarding (uma vez, ~6 min)
1. Escolhe a certificação alvo e (opcional) a data da prova
2. Declara tempo disponível por dia → vira a meta diária
3. **Diagnóstico adaptativo de ~12 questões**, uma por módulo, dificuldade ajustada a cada resposta
4. Recebe um mapa inicial: onde está forte, onde está fraco, quantos dias faltam
5. Cai direto numa primeira sessão de 10 min (nunca terminar o onboarding numa tela vazia)

### 5.2 Ciclo diário (o loop principal)
```
abre o app → dashboard mostra UMA ação → /rapido
  → 30–45 min montados pelo planner
  → resumo de sessão: o que melhorou, o que revisar amanhã
  → streak + XP + meta do dia
```

### 5.3 Ciclo semanal
Relatório: módulos que subiram, módulos estagnados, sugestão de foco, e um simulado por módulo quando a maestria média do módulo passa de 0,6.

### 5.4 Reta final (últimos 21 dias antes da prova)
O planner muda de regime automaticamente: menos conteúdo novo, mais simulado completo, revisão concentrada nos LOs de maior peso × menor maestria, e "pegadinhas" priorizadas.

---

## 6. Estratégia de progressão

### 6.1 Estados de um LO

| Estado | Condição | O que o app faz |
|---|---|---|
| **Novo** | sem respostas | oferece a micro-lição |
| **Aprendendo** | m < 0,5 | prática com apoio, feedback longo |
| **Consolidando** | 0,5 ≤ m < 0,8 | prática espaçada, feedback curto |
| **Sólido** | m ≥ 0,8 e n ≥ 6 | entra em manutenção (FSRS), frequência cai |
| **Enferrujado** | m era ≥ 0,8 e R(t) < 0,7 | volta para a fila de revisão |

### 6.2 Desbloqueio por maestria, não por conclusão

Um tópico abre quando os pré-requisitos atingem **m ≥ 0,6** — não quando o usuário "clicou em concluir". Isso impede o padrão de avançar sem aprender, que é o defeito mais comum em trilhas gamificadas.

Há uma **válvula de escape obrigatória**: o usuário pode sempre "testar direto" um tópico bloqueado e desbloqueá-lo acertando um mini-checkpoint. Quem já sabe não é obrigado a assistir à aula.

### 6.3 Camadas de conteúdo

Todo LO tem três camadas: `essencial` (obrigatória, curta), `aprofundamento` (opcional, sob demanda) e `pegadinha` (o erro típico da prova). O caminho padrão só passa pela camada essencial. É assim que se cumpre "ensinar o essencial primeiro e aprofundar somente quando necessário" sem transformar isso em decisão do usuário a cada tela.

### 6.4 Dificuldade desejável

O seletor de item busca `P(acerto) ≈ 0,80`. Abaixo disso o aluno frustra; acima, não aprende. Esse alvo cai para ~0,70 em modo simulado e sobe para ~0,90 nos primeiros itens de uma sessão (aquecimento).

---

## 7. Cálculo de desempenho

### 7.1 Habilidade e dificuldade (Elo-IRT de 1 parâmetro)

Cada LO tem uma habilidade do usuário `θ`; cada item, uma dificuldade `b`.

```
P(acerto) = 1 / (1 + e^-(θ - b))

θ ← θ + K_u · (y - P)        y ∈ {0,1}
b ← b - K_i · (y - P)

K_u = K₀ / (1 + n_usuario/30)      # aprende rápido no começo, estabiliza
K_i = K₁ / (1 + n_item/50)         # item congela após ~200 respostas
```

Vantagem sobre IRT completo: funciona com pouquíssimos dados, calibra item e aluno simultaneamente e é trivial de auditar.

### 7.2 Maestria do LO

```
m = σ(θ_LO - b̄_LO)                      # maestria "fresca", em [0,1]
R(t) = (1 + t / (9·S))^-1                # retenção FSRS (S = estabilidade, t em dias)
m_eff = m · max(R(t), 0.35)              # maestria efetiva, com piso
```

O piso existe para que conhecimento consolidado não seja modelado como esquecido por completo.

### 7.3 Agregação ponderada pelo blueprint

```
maestria_tópico  = Σ(peso_LO · m_eff) / Σ peso_LO
maestria_módulo  = Σ(peso_tópico · maestria_tópico) / Σ peso_tópico
nota_esperada    = Σ_módulos (w_m · maestria_módulo)      w_m = ponto médio da faixa do blueprint
```

### 7.4 Prontidão — com honestidade estatística

Mostrar "78% de chance de aprovação" com base em 20 questões é mentira estatística e destrói a confiança no produto. O cálculo:

1. Para cada módulo, a maestria tem posterior `Beta(a+1, b+1)` a partir de acertos/erros
2. Monte Carlo com ~2.000 amostras propaga a incerteza para a nota final
3. Reporta `P(nota ≥ cut_score)` **e** o intervalo de credibilidade de 80%
4. **Portões de exibição:** só mostra a probabilidade com `n ≥ 150` respostas e **≥ 60% dos LOs tocados**. Abaixo disso, a UI diz "cobertura insuficiente — faltam X módulos" em vez de um número inventado.
5. Após o primeiro simulado completo, o modelo é **calibrado** contra a nota real (deslocamento aditivo), porque simulado cronometrado mede algo que a prática solta não mede.

### 7.5 O planner do Estudo Rápido

Prioridade por LO:

```
score(LO) = w₁·(1 - m_eff)              # lacuna de conhecimento
          + w₂·peso_exame(LO)           # relevância para a prova
          + w₃·max(0, 1 - R(t))         # urgência de revisão
          + w₄·recência_de_erro         # errou há pouco, decai em ~7 dias
          - w₅·saturação_recente        # já apareceu nas últimas 24h
          × porta_prerequisito          # 0 se algum pré-requisito < 0,5
```

Composição da sessão — **orçada em minutos, não em número de itens** (é isso que garante os 30–45 min):

| Bloco | Fatia | Conteúdo |
|---|---|---|
| Aprender | ~25% | micro-lição do LO de maior score ainda **Novo** |
| Praticar | ~45% | questões nos LOs de maior score |
| Revisar | ~25% | fila FSRS vencida |
| Pegadinha | ~5% | um erro típico da prova |

Regras de intercalação: no máximo 3 itens seguidos do mesmo tópico, mínimo 2 módulos por sessão, e o bloco de revisão nunca é sacrificado quando o tempo aperta (é o que sustenta a retenção de longo prazo).

**Exemplo pedido:** usuário fraco em renda fixa → `(1 - m_eff)` alto **e** `peso_exame` alto → renda fixa domina o score e ocupa a maior parte da sessão. Quando `m_eff` sobe acima de 0,8, o termo de lacuna despenca, o LO entra em manutenção FSRS e reaparece só quando `R(t)` cai. A frequência diminui sozinha — sem regra especial.

### 7.6 Taxonomia de erro

Após cada erro, um toque: **conceito / cálculo / interpretação / desatenção / chute**. Isso separa "não sei" de "sei e escorreguei" — que exigem intervenções opostas. Erro de desatenção não deve derrubar a maestria tanto quanto erro de conceito (peso menor no update de θ).

---

## 8. Problemas técnicos previstos

| Risco | Severidade | Mitigação |
|---|---|---|
| **Programa da certificação muda** (já mudou em 2026) | Alta | `exam_blueprints` com vigência + `lo_aliases` preservando maestria |
| **Partida a frio**: usuário e item novos, sem dados | Alta | Prior de dificuldade declarado pelo autor do item; diagnóstico adaptativo no onboarding; `K` alto no início |
| **Memorização do item** em vez do conceito | Alta | Embaralhar alternativas, `item_variants` com números parametrizados, cooldown por item, banco ≥ 30 itens/LO |
| **Conteúdo autoral em escala** — o gargalo real do projeto | Alta | É trabalho de conteúdo, não de engenharia. Pipeline de rascunho por IA + revisão humana obrigatória, e o schema impede publicar sem revisor |
| **Direito autoral / sigilo da prova** | Alta | Nada copiado da ANBIMA; itens 100% autorais; fontes oficiais só como referência de tópico |
| **Egresso de rede bloqueado** (confirmado nesta pesquisa) | Média | Worker com allowlist por domínio, retry, e fallback de upload manual do PDF. O app nunca depende de rede externa para funcionar |
| **Sincronização offline** (PWA, metrô, avião) | Média | `responses` append-only + `client_event_id` idempotente; servidor reprocessa na ordem que receber |
| **Custo/latência de IA** | Média | Explicações pré-geradas e cacheadas por item; IA ao vivo só em "explique de outro jeito", com RAG sobre o conteúdo publicado |
| **Estatísticas caras em leitura** | Média | Agregados materializados atualizados por job; nunca `GROUP BY` sobre `responses` na renderização |
| **Fuso horário e virada de streak** | Média | Dia local calculado no servidor a partir do fuso do perfil; `last_local_day` como chave |
| **Streak vira ansiedade** e causa abandono | Média | Congelamentos, modo férias, meta ajustável; **nunca** perder progresso real por perder um dia |
| **Gamificação distorce o estudo** (Lei de Goodhart) | Média | XP por dificuldade e por revisão vencida, não por volume; refazer item fácil rende ~0 XP |
| **Mapas mentais pesados no mobile** | Baixa | SVG pré-renderizado + interatividade progressiva; colapso por ramo |
| **Integridade do simulado** | Baixa | Cronômetro e correção no servidor; cliente não decide nota |
| **LGPD** — desempenho é dado pessoal | Média | Exportação e exclusão de conta self-service; retenção declarada; dados em região BR |

---

## 9. Stack sugerida

| Camada | Escolha | Por quê |
|---|---|---|
| Front | **Next.js 15 (App Router) + TypeScript** | Server Components reduzem o JS enviado; Server Actions eliminam metade da API |
| UI | **Tailwind + shadcn/ui (Radix)** | Acessibilidade pronta, sem lock-in de biblioteca visual |
| Mobile | **PWA** (Serwist) + IndexedDB (Dexie) | Sensação de app sem custo de loja. App nativo fica para o v2 |
| Estado | **TanStack Query** + **Zustand** (sessão em curso) | Separa estado do servidor do estado efêmero da sessão |
| Backend | **Supabase** (Postgres + Auth + RLS + Storage + Edge Functions) | Postgres relacional é o certo para agregações de desempenho; RLS resolve isolamento sem camada de autorização própria |
| Motor | **`@cpa/engine`** — pacote TS puro | Testável sem banco e sem browser; roda no cliente e no servidor |
| Revisão espaçada | **FSRS-5** (`ts-fsrs`) | Mais preciso que SM-2, aberto, e já em TypeScript |
| Jobs | **pg_cron + Edge Functions** | Agregados, calibração de itens, monitor de fontes |
| Conteúdo | **MDX + YAML no Git** + validação Zod + CLI `content:sync` | Revisão editorial por PR, rollback grátis, diff legível |
| IA | **Claude API**, server-side | Rascunho de itens e explicações; sempre `draft` até revisão humana |
| Busca/RAG | **pgvector** | Sem serviço extra |
| Gráficos | **visx** ou **Recharts** | Controle sobre a apresentação de incerteza |
| Mapas mentais | **React Flow** | Grafo interativo com colapso |
| Testes | **Vitest + Playwright + fast-check** | Motor testado por propriedades: `m ∈ [0,1]`, monotonicidade, idempotência |
| Deploy | **Vercel** ou **Netlify** + Supabase | Ambos já disponíveis neste workspace |
| Observabilidade | **Sentry + PostHog** | Funil de sessão e abandono são métricas de produto aqui |

### Alternativas consideradas e descartadas

- **React Native/Expo no v1** — PWA cobre o caso "app-like" sem o custo das lojas. Reavaliar quando houver retenção comprovada.
- **CMS headless (Sanity/Payload)** — Git + PR já dá versionamento, revisão e rollback. Um CMS entra quando existir equipe de conteúdo não-técnica.
- **Firebase/Firestore** — as consultas de desempenho são relacionais e agregadas; Postgres ganha com folga.
- **SM-2 (Anki clássico)** — FSRS é melhor e igualmente barato de adotar.
- **IRT de 3 parâmetros** — exige milhares de respostas por item para calibrar. Elo-IRT entrega 90% do valor com 1% dos dados; migrar depois é possível porque `responses` guarda tudo.

### Fases sugeridas

| Fase | Entrega | Duração estimada |
|---|---|---|
| **F0** Fundação | Schema, auth, blueprint da CPA vigente, pipeline de conteúdo | 2–3 semanas |
| **F1** Núcleo | Trilha, micro-lições, questões, motor de maestria, **Estudo Rápido** | 4–5 semanas |
| **F2** Retenção | FSRS, revisão de erros, metas, streak, XP | 3 semanas |
| **F3** Prova | Simulados, prontidão calibrada, estatísticas | 3 semanas |
| **F4** Escala | Mapas mentais, monitor de fontes, estúdio admin | contínuo |

O caminho crítico **não é a engenharia** — é a produção do conteúdo autoral. F1 só entrega valor real com ~1 módulo completo (≈ 40 LOs, ≈ 1.200 itens). Vale começar a produção de conteúdo em paralelo à F0.

---

## Fontes consultadas

- [Programa Detalhado da Certificação Profissional ANBIMA (CPA)](https://www.anbima.com.br/data/files/6A/52/6F/A1/BED73910B07B2739B82BA2A8/Programa-Detalhado-CPA-ANBIMA.pdf)
- [Programa Detalhado CPA-20 — versão 10.9, vigência 03.03.2025](https://www.anbima.com.br/data/files/A0/51/9B/BC/5DCA49108056A849EA2BA2A8/PD%20CPA-20_versao%2010.9%20_vigencia%2003.03.2025_%20Limpo.pdf)
- [Programa Detalhado CPA-10 — versão 6.8, vigência 03.03.2025](https://www.anbima.com.br/data/files/32/94/93/09/BCCA49108056A849EA2BA2A8/PD%20CPA-10_versao%206.8%20_vigencia%2003.03.2025_%20Limpo.pdf)
- [CPA-20 — ANBIMA](https://www.anbima.com.br/pt_br/educar/certificacoes/cpa-20.htm)
- [Guia das certificações ANBIMA 2026 — InfoMoney](https://www.infomoney.com.br/advisor/certificacoes-anbima-2026/)
- [Certificação CPA ANBIMA: prova, custos e transição — TopInvest](https://www.topinvest.com.br/cpa/)
- [O que muda em 2026 nas Certificações da ANBIMA — Portal do Cooperativismo Financeiro](https://cooperativismodecredito.coop.br/2026/01/o-que-muda-em-2026-nas-certificacoes-da-anbima/)

> Os dados de peso por módulo, nº de questões e nota de corte **devem ser confirmados no programa detalhado e no edital vigente** antes de popular o `exam_blueprint`. Vários domínios da ANBIMA estavam bloqueados pelo proxy de rede durante esta pesquisa.
