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
npm run icons       # regenera os PNGs do app a partir de public/icon.svg
npm run cap:sync    # build + sincroniza o projeto Android (Capacitor)
```

## Regras de trabalho neste repositório

1. **Rodar `npm run typecheck` antes de qualquer commit.** O projeto usa
   `strict: true` com `noUnusedLocals`; build quebra fácil.
2. **Conteúdo e questões são DADOS, não código.** Toda mudança de matéria
   acontece em `src/lib/content/*` e `src/lib/questions/*`. Nunca embutir
   texto de aula em componente. O painel `/admin` grava um *overlay* local
   por cima disso — serve para correção urgente, não para autoria: o
   canônico segue no repositório, e o overlay se exporta para voltar pra cá.
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
7. **Paleta "Alvorada", fechada em três camadas.** Um acento de marca
   (`aurora`, o carmesim do amanhecer) mais quatro cores de identidade de
   módulo — os dragões: `hakuryuu`, `seiryuu`, `ryokuryuu`, `ouryuu`. Os
   semânticos são apelidos dessas mesmas cores, não cores novas: `jade`
   (acerto) é o verde do Ryokuryuu e `warn` é o ouro. **Cor de dragão só
   aparece para dizer de que módulo algo é** — nunca como decoração. Não
   introduzir cor fora dessa lista; o cabeçalho de `src/styles/index.css`
   documenta a estrutura.
   - **Acerto nunca usa o acento.** Num app de questões, "certo" em carmesim ao
     lado de "errado" em vermelho é indistinguível. Acerto é `jade`.
   - **Cor de desempenho sai do motor** (`engine/mastery.ts`), nunca de um
     ternário dentro da página. São duas escalas, de propósito: `tomDominio()`
     para nível de domínio (faixas pedagógicas) e `tomAcerto()` para taxa de
     acerto (ancorada na nota de corte do `blueprint.ts`). Barra, anel e
     rótulo do mesmo número usam a mesma função, senão 74% aparece com rótulo
     verde sobre barra âmbar.
9. **A temática vive em `src/lib/personagens.ts`.** Nome, papel ou fala de
   personagem não entram em componente. Arte é opcional
   (`public/personagens/<id>.webp`); sem arquivo, o app desenha o ícone.
10. **Todo desenho é SVG autoral.** Ícones em `src/components/ui/Icone.tsx`,
   retratos de personagem em `src/components/domain/Retrato.tsx` e ornamento
   (céu da alvorada, selo de tinta, traço de pincel, escamas) em
   `src/components/ui/Ornamento.tsx`. Nada de glifo Unicode na navegação — no
   Android vira caixinha — e nada de asset externo: o APK roda sem rede.
   Desenhar com forma cheia, não traço fino: a marca aparece a partir de 18 px.
   Ícone que vem de DADO (conquista, desbloqueio, estado vazio) guarda o **nome**
   de um traço de `Icone.tsx`, nunca o glifo. Há teste conferindo os nomes.
8. **Persistência passa sempre pelo store** (`src/lib/store.ts`). Não
   escrever em `localStorage` direto de dentro de componente.
12. **Acessibilidade é verificada, não presumida.** Três coisas não podem
   ser afrouxadas sem quebrar teste: (a) todo par texto/fundo passa de 4.5:1
   e todo indicador gráfico de 3:1 — conferido em `src/test/acessibilidade.test.ts`
   lendo os tokens do próprio `index.css`; (b) nenhum estado é dito **só**
   pela cor — certo/errado, conquistado/bloqueado e destacado/apagado têm
   forma e texto, este último em `sr-only` quando não cabe na tela;
   (c) `opacity` nunca esmaece texto abaixo do mínimo — "bloqueado" não pode
   virar "ilegível" (o piso prático é `opacity-65`). Controle composto
   declara o papel ARIA de verdade e o teclado que ele promete: o player de
   questões é `radiogroup` com setas, o mapa mental é `tree` com ↑↓←→.

11. **Não derivar conteúdo em constante de módulo.** `MACROTEMAS`,
   `MICROTEMAS`, `CONCEITOS` e `QUESTOES` são mutados **no lugar** por
   `aplicarOverlayLocal` (`src/lib/pacote.ts`) — por isso quem já importou
   continua lendo a versão em vigor. Mas um `const X = MACROTEMAS.map(...)`
   no topo do arquivo congela o conteúdo de antes da edição. Use função:
   ver `conquistas()` em `engine/gamification.ts`, que existe por causa
   disso. Há teste em `src/test/overlay.test.ts` guardando o comportamento.

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
      trilha.ts       jornada: estágios, nós e a etapa "você está aqui"
      planner.ts      monta a sessão de estudo rápido e o "Estude agora"
      gamification.ts XP, níveis, conquistas, desbloqueios, sequência
      stats.ts        desempenho por macrotema, microtema, dificuldade e tempo
    content/overlay.ts  edições locais do painel — funções puras
    auditoria.ts    saúde do conteúdo (o que falta, o que está quebrado)
    pacote.ts       aplica o overlay: conteúdo primeiro, questões depois
    store.ts        Zustand + persistência local (camada única de I/O)
                    `merge` funde o gravado POR CIMA dos padrões: estado
                    salvo por versão antiga não devolve campo `undefined`
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
| 6 | Dark mode único, paleta "Alvorada": acento carmesim + as 4 cores dos dragões | Definido pelo cliente. Revisto em 24/08/2026, quando o cliente pediu fidelidade à estética da temática — substitui o acento verde-água anterior. Em 25/08/2026 o carmesim clareou 12% (`237 59 94` → `239 83 113`): no tom anterior o acento não alcançava 4.5:1 como texto sobre `elevated` nem dentro da própria pílula |
| 7 | APK gerado por GitHub Actions, não localmente | Build Android exige SDK que não existe no ambiente de dev |
| 9 | Desbloqueio é recompensa, nunca trava | Nada que já estava aberto fecha para caber na lista. Um desbloqueio fechado diz o que falta; os módulos seguem livres (decisão 8) |
| 10 | Painel `/admin` edita conteúdo por **overlay local**, não substitui o código | Sem backend e sem build no aparelho, a única forma de corrigir hoje. O canônico continua em `src/lib/content/*`; o overlay é exportável para voltar ao repositório, e o painel avisa em toda tela quando há divergência |
| 8 | Trilha é jornada de nós (`engine/trilha.ts`), não lista de aulas | **Macrotema nunca tranca** — a especificação pede acesso livre aos módulos. O pré-requisito vale entre microtemas (60%) e dentro deles (miniquiz depois das aulas, desafio depois do domínio). A regra vive no motor, não no JSX, para ser testável |
| 11 | Pílula e chip usam fundo opaco (`*-soft`), nunca `cor/15` | Com transparência o contraste passava a depender da superfície embaixo: o mesmo componente lia bem num card e mal em outro |
| 12 | Painel `/admin` e bibliotecas em pedaços separados do app | O service worker guarda por nome de arquivo com hash. Junto, corrigir uma alíquota obrigava o aparelho a baixar de novo os ~167 kB de React que não mudaram |

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
- [ ] Monitoramento automático das publicações da ANBIMA. O app roda offline
      e sem servidor, então `/admin/versoes` é um registro **manual** — quem
      confere a fonte é uma pessoa. Automatizar exigiria backend.
- [ ] Keystore de assinatura do APK. (Os ícones já saem de `public/icon.svg`
      via `npm run icons`.)
- [ ] Arte dos personagens é opcional e **não** está no repositório: o app
      desenha os retratos em SVG. Para usar arte própria, ver
      `public/personagens/LEIA-ME.md`.

<!-- AUTO:INICIO -->
<!-- Gerado por scripts/update-claude-md.mjs — não editar à mão. -->

## Estado atual

_Atualizado em 2026-08-25._

| Métrica | Valor |
|---|---|
| Macrotemas | 4 |
| Microtemas | 20 |
| Conceitos (aulas) | 72 |
| Questões no banco | 290 |
| Páginas | 29 |
| Componentes | 18 |
| Arquivos de teste | 5 |
| Linhas em `src/` | 29.022 |

**Blueprint vigente:** CPA — Certificado Profissional Anbima · versão 1.2 ·
50 questões · 150 min · corte
0.7 · verificado: **true**

**Rotas registradas (30):**
`/onboarding` · `/` · `/trilha` · `/conteudo/:conceitoId` · `/resumos` · `/mapas` · `/mapas/:conceitoId` · `/questoes` · `/rapido` · `/simulados` · `/simulado/:modo` · `/resultado/:simuladoId` · `/revisao` · `/metas` · `/conquistas` · `/estatisticas` · `/progresso` · `/perfil` · `/config` · `/vespera` · `/baixar` · `/admin` · `/admin/estrutura` · `/admin/conceitos` · `/admin/conceito/:conceitoId` · `/admin/questoes` · `/admin/questao/:questaoId` · `/admin/versoes` · `/admin/dados` · `*`

**Arquivos do motor:**
- `src/lib/engine/gamification.ts`
- `src/lib/engine/mastery.ts`
- `src/lib/engine/planner.ts`
- `src/lib/engine/scheduler.ts`
- `src/lib/engine/stats.ts`
- `src/lib/engine/trilha.ts`
<!-- AUTO:FIM -->
