# Preparatório CPA — memória do projeto

Plataforma de estudos para a certificação **CPA da ANBIMA**. SPA estática
(roda offline, empacotável como APK Android), sem backend obrigatório.

> Este arquivo é lido automaticamente a cada sessão. Mantenha-o curto e
> factual. A seção **Estado atual** é gerada por script — não edite à mão.

---

## Comandos

```bash
npm run dev         # servidor de desenvolvimento
npm run build       # build de produção -> dist/
npm run typecheck   # tsc --noEmit (rodar SEMPRE antes de commitar)
npm run test        # vitest (motor de aprendizagem)
npm run docs        # regenera a seção "Estado atual" deste arquivo
npm run cap:sync    # build + sincroniza o projeto Android (Capacitor)
```

## Regras de trabalho neste repositório

1. **Rodar `npm run typecheck` antes de qualquer commit.** O projeto usa
   `strict: true` com `noUnusedLocals`; build quebra fácil.
2. **Conteúdo e questões são DADOS, não código.** Toda mudança de matéria
   acontece em `src/lib/content/*` e `src/lib/questions/*`. Nunca embutir
   texto de aula em componente.
3. **A estrutura da prova vive em `src/lib/blueprint.ts`.** Não espalhar
   número de questões, duração ou nota de corte pelo código.
4. **Nada de inventar regra de prova.** Se um dado oficial não pôde ser
   verificado, marcar `verificado: false` / `pesoVerificado: false` — a
   interface exibe aviso sozinha.
5. **Toda questão é autoral.** É proibido copiar questões de provas
   anteriores, cursos ou bancos de terceiros.
6. **Explicação segue os 5 passos obrigatórios**: o que é / para que serve /
   como funciona / exemplo simples / o que lembrar na prova.
7. **Uma cor de destaque só: verde-água (`aqua`).** `warn` e `danger` são
   semânticos e não contam como acento. Não introduzir novas cores.
8. **Persistência passa sempre pelo store** (`src/lib/store.ts`). Não
   escrever em `localStorage` direto de dentro de componente.

## Arquitetura em uma tela

```
src/
  lib/
    types.ts        contratos de domínio (fonte da verdade dos tipos)
    blueprint.ts    estrutura oficial da prova (dado versionado)
    content/        MACROTEMA > MICROTEMA > CONCEITO
    questions/      banco de questões autorais
    engine/         motor pedagógico — TS puro, sem React
      mastery.ts      Elo + nível de domínio com esquecimento
      scheduler.ts    revisão espaçada explicável
      planner.ts      monta a sessão de estudo rápido
      gamification.ts XP, níveis, conquistas, sequência
      stats.ts        desempenho por tema, dificuldade e tempo
    store.ts        Zustand + persistência local (camada única de I/O)
  components/ui|layout|domain
  pages/            uma página por rota
```

**Motor sem React**: tudo em `src/lib/engine/` é função pura. Isso é
proposital — permite testar sem DOM e, no futuro, rodar no servidor.

## Decisões já tomadas (não reverter sem avisar)

| # | Decisão | Motivo |
|---|---|---|
| 1 | Vite + React SPA estática (não Next.js) | Precisa virar APK via Capacitor e rodar offline |
| 2 | Persistência local primeiro (`localStorage` via store) | Progresso salvo sem obrigar o usuário a criar backend |
| 3 | Camada de repositório isolada no store | Permite plugar sync Supabase depois sem tocar em UI |
| 4 | Elo-IRT + revisão espaçada simples e explicável | Funciona com poucos dados; o usuário consegue entender por que uma questão apareceu |
| 5 | "Explique de outro jeito" com textos pré-autorados | Garante explicação correta e funciona offline; hook de IA fica opcional |
| 6 | Dark mode único, acento verde-água | Definido pelo cliente |
| 7 | APK gerado por GitHub Actions, não localmente | Build Android exige SDK que não existe no ambiente de dev |

## Pendências externas

- [ ] Conferir pesos por módulo, nº de questões e nota de corte no Programa
      Detalhado oficial vigente e atualizar `blueprint.ts` +
      `pesoVerificado`.
- [ ] Conferir alíquotas tributárias citadas no conteúdo (mudam por
      legislação).
- [ ] Gerar ícones definitivos e keystore de assinatura do APK.

<!-- AUTO:INICIO -->
<!-- Gerado por scripts/update-claude-md.mjs — não editar à mão. -->

## Estado atual

_Atualizado em 2026-08-18._

| Métrica | Valor |
|---|---|
| Macrotemas | 4 |
| Microtemas | 9 |
| Conceitos (aulas) | 14 |
| Questões no banco | 43 |
| Páginas | 21 |
| Componentes | 10 |
| Arquivos de teste | 2 |
| Linhas em `src/` | 10.448 |

**Blueprint vigente:** CPA — Certificação Profissional ANBIMA · versão 2026.1 ·
50 questões · 150 min · corte
0.7 · verificado: **false**

**Rotas registradas (22):**
`/onboarding` · `/` · `/trilha` · `/conteudo/:conceitoId` · `/resumos` · `/mapas` · `/mapas/:conceitoId` · `/questoes` · `/rapido` · `/simulados` · `/simulado/:modo` · `/resultado/:simuladoId` · `/revisao` · `/metas` · `/conquistas` · `/estatisticas` · `/progresso` · `/perfil` · `/config` · `/vespera` · `/baixar` · `*`

**Arquivos do motor:**
- `src/lib/engine/gamification.ts`
- `src/lib/engine/mastery.ts`
- `src/lib/engine/planner.ts`
- `src/lib/engine/scheduler.ts`
- `src/lib/engine/stats.ts`
<!-- AUTO:FIM -->
