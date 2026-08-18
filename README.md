# Preparatório CPA

Plataforma de estudos para a certificação **CPA da ANBIMA**. Aplicação web
estática que funciona offline, instala como aplicativo e é empacotada em APK
Android.

Não é um banco de questões com trilha em cima: é um motor de aprendizagem que
decide o que você estuda a partir do seu desempenho.

---

## Começar

```bash
npm install
npm run dev        # http://localhost:5173
```

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Serve o build localmente |
| `npm run typecheck` | `tsc --noEmit` — rodar antes de commitar |
| `npm test` | Testes do motor e da integridade do conteúdo |
| `npm run docs` | Regenera a seção "Estado atual" do `CLAUDE.md` |
| `npm run cap:sync` | Build + sincroniza o projeto Android |

## O que existe

- **Estudo rápido** — sessão de 30 a 45 min montada sozinha a partir do seu
  desempenho, com a explicação de por que cada item apareceu.
- **Trilha** com desbloqueio por domínio (60%), não por conclusão.
- **Aulas** no formato fixo: resumo de 30s → 5 passos → exemplos → tabela →
  conceito-chave → erro comum → alerta de prova → mapa mental → miniquestão.
- **Mapas mentais** navegáveis, com modo "só o essencial para revisão".
- **Questões autorais** em 9 formatos, com justificativa em todas as
  alternativas — inclusive nas erradas.
- **Simulados** completo, rápido, por tema e por pontos fracos, com cronômetro
  do servidor de tempo, grade de navegação e marcação de questão.
- **Revisão adaptativa** por curva de esquecimento, com fila de erros abertos.
- **Modo véspera** — sete etapas de revisão expressa para o dia anterior à prova.
- **Explique de outro jeito** — quatro reformulações pré-autoradas por conceito.
- **Gamificação** que premia consistência e revisão, não volume de cliques.

## Estrutura

```
src/
  lib/
    types.ts          contratos de domínio
    blueprint.ts      estrutura oficial da prova (dado versionado)
    content/          MACROTEMA > MICROTEMA > CONCEITO
    questions/        banco de questões autorais
    engine/           motor pedagógico — TS puro, sem React
    store.ts          Zustand + persistência local
  components/ui | layout | domain
  pages/              uma página por rota
```

Tudo em `src/lib/engine/` é função pura: dá para testar sem DOM e, no futuro,
rodar no servidor sem reescrever nada.

## Publicar

**Web** — `.github/workflows/web.yml` publica em GitHub Pages a cada push na
`main`. Habilite Pages em Settings → Pages → Source: GitHub Actions.

**APK** — `.github/workflows/android.yml` gera o APK. Dispare manualmente em
Actions ou crie uma tag:

```bash
git tag v0.1.0 && git push origin v0.1.0
```

O APK vai para Releases, que é de onde a página `/baixar` do app puxa o
arquivo. O build atual é **debug, não assinado** — para publicar na Play Store
é preciso gerar um keystore e configurar a assinatura.

## Pendências externas

- [ ] Conferir pesos por módulo, número de questões e nota de corte no Programa
      Detalhado oficial vigente e atualizar `src/lib/blueprint.ts` e os campos
      `peso` / `pesoVerificado` em `src/lib/content/*`. Enquanto
      `verificado: false`, a interface exibe aviso sozinha.
- [ ] Conferir as alíquotas tributárias citadas no conteúdo — mudam por
      legislação.
- [ ] Gerar keystore de assinatura para distribuição do APK.

## Conteúdo

Todo o conteúdo e todas as questões são **autorais**. Nada foi copiado de
provas anteriores, cursos ou bancos de terceiros — as provas da ANBIMA são
sigilosas e seu material é protegido.

Material de estudo independente, sem vínculo com a ANBIMA.
