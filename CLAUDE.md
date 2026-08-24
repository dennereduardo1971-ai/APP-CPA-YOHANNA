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
   número de questões, duração ou nota de corte pelo código. Os 20 microtemas
   oficiais são declarados em `src/lib/content/m*.ts` com o campo `codigo`
   (ex.: `'2.1'`), que deve espelhar o Programa Detalhado.
4. **Nada de inventar regra de prova.** Se um dado oficial não pôde ser
   verificado, marcar `verificado: false` / `pesoVerificado: false` — a
   interface exibe aviso sozinha.
5. **Toda questão é autoral.** É proibido copiar questões de provas
   anteriores, cursos ou bancos de terceiros.
6. **Lição segue os 9 blocos obrigatórios**: o que é / por que importa /
   como funciona / exemplo simples / exemplo aplicado ao mercado / o que
   lembrar na prova / erro comum / miniquestão / revisão rápida. Além disso,
   três níveis de profundidade — o nível 2 ("Aprenda") é a própria
   `explicacao`; `niveis` guarda só o 1 e o 3. Validado em
   `src/test/conteudo.test.ts`.
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

- [x] ~~Conferir pesos por módulo, nº de questões e nota de corte~~ — feito.
      Programa Detalhado v1.2 (04/06/2025) e Edital dos Exames v1.4
      (28/05/2026). Ver `docs/AUDITORIA-CONTEUDO.md`.
- [ ] Rateio de questões por formato e distribuição por grau de dificuldade:
      a ANBIMA **não publica** esses dados. Manter fora do `blueprint.ts`
      enquanto não houver fonte.
- [~] Alíquotas tributárias: conferidas em 24/08/2026 e todas vigentes — a
      MP 1.303/2025 não virou lei. Base legal em `docs/ALIQUOTAS.md`. Falta
      ler o texto das leis: `planalto.gov.br` está bloqueado neste ambiente.
- [ ] Res. CMN 5.295/2026 (novas regras de captação com garantia do FGC,
      vigente desde 01/06/2026): incorporar ao conceito `c-fgc`.
- [ ] Gerar ícones definitivos e keystore de assinatura do APK.

<!-- AUTO:INICIO -->
<!-- Gerado por scripts/update-claude-md.mjs — não editar à mão. -->

## Estado atual

_Atualizado em 2026-08-24._

| Métrica | Valor |
|---|---|
| Macrotemas | 4 |
| Microtemas | 20 |
| Conceitos (aulas) | 14 |
| Questões no banco | 43 |
| Páginas | 21 |
| Componentes | 11 |
| Arquivos de teste | 2 |
| Linhas em `src/` | 11.178 |

**Blueprint vigente:** CPA — Certificado Profissional Anbima · versão 1.2 ·
50 questões · 150 min · corte
0.7 · verificado: **true**

**Rotas registradas (22):**
`/onboarding` · `/` · `/trilha` · `/conteudo/:conceitoId` · `/resumos` · `/mapas` · `/mapas/:conceitoId` · `/questoes` · `/rapido` · `/simulados` · `/simulado/:modo` · `/resultado/:simuladoId` · `/revisao` · `/metas` · `/conquistas` · `/estatisticas` · `/progresso` · `/perfil` · `/config` · `/vespera` · `/baixar` · `*`

**Arquivos do motor:**
- `src/lib/engine/gamification.ts`
- `src/lib/engine/mastery.ts`
- `src/lib/engine/planner.ts`
- `src/lib/engine/scheduler.ts`
- `src/lib/engine/stats.ts`
<!-- AUTO:FIM -->
