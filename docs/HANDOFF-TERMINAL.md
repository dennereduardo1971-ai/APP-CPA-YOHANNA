# Passagem de bastão — continuar no terminal do PC

> Escrito em 25/08/2026, ao fim da sessão remota que fechou o microtema 2.1.
> Leia este arquivo **primeiro** ao abrir o Claude Code no seu computador.
> Ele diz onde o trabalho parou, o que só dá para fazer aí, e o que já foi
> tentado e não vale repetir.

---

## 1. Estado do repositório

| | |
|---|---|
| Branch | `claude/markdown-document-analysis-37g2pr` |
| Último commit | `82f5c14` — *Conteudo 2.1 lote B* |
| Árvore | limpa, empurrada, nada pendente |
| Testes | 175 passando em 5 arquivos |
| Typecheck / build | verdes |
| Conceitos · Questões | **72 · 290** |
| Microtemas com aula | **20/20** |
| Auditoria `/admin` | 0 defeitos · 0 incompletos · 0 lacunas |

O plano de 10 fases (`/root/.claude/plans/steady-dazzling-dragon.md` na sessão
remota) está **concluído**. O que resta não é engenharia: é **autoria de
conteúdo** e as duas pendências que só o seu PC destrava.

### Primeiros comandos na máquina nova

```bash
git clone https://github.com/dennereduardo1971-ai/APP-CPA-YOHANNA
cd APP-CPA-YOHANNA
git checkout claude/markdown-document-analysis-37g2pr
npm install
npm run typecheck && npm run test && npm run dev
```

Depois, mande o Claude ler, nesta ordem:
`CLAUDE.md` → `docs/PROGRESSO-CONTEUDO.md` → `docs/LACUNAS.md` → este arquivo.

---

## 2. O que o PC destrava (e a sessão remota não conseguiu)

### 2.1 Fontes legais bloqueadas — o gargalo real

`planalto.gov.br` está **bloqueado** no ambiente remoto. Isso trava dois
assuntos que a prova cobra e o app hoje trata por cima:

**Tributação.** As alíquotas foram conferidas em 24/08/2026 e estão vigentes
(a MP 1.303/2025 não virou lei) — a base está em `docs/ALIQUOTAS.md`. Mas a
conferência foi feita por fonte secundária: **falta ler o texto das leis**.
No seu PC, abrir e citar direto:

- Lei 11.033/2004 — tabela regressiva de renda fixa (22,5% → 15%)
- Lei 11.053/2004 — regimes de previdência (progressivo × regressivo)
- Lei 8.981/1995 e Lei 9.532/1997 — come-cotas e fundos
- IN RFB 1.585/2015 — o consolidado que a prova costuma seguir
- Lei 13.043/2014 — LCI/LCA
- Lei 12.431/2011 — debêntures incentivadas × de infraestrutura

Com isso dá para escrever o microtema de tributação com número **citado**, e
não "conferido por terceiro". Regra 4 do `CLAUDE.md`: sem fonte, `verificado:
false` — e é assim que está hoje.

**FGC sob a Res. CMN 5.295/2026**, vigente desde 01/06/2026. Muda as regras de
captação com garantia do FGC e **precisa entrar no conceito `c-fgc`**. Buscar
em `bcb.gov.br` (busca de normas) e `fgc.org.br`. Está na lista de pendências
do `CLAUDE.md` desde antes deste plano.

### 2.2 Fontes primárias da ANBIMA

O `blueprint.ts` está verificado contra o Programa Detalhado v1.2 (04/06/2025)
e o Edital v1.4 (28/05/2026). O que **continua sem fonte pública**, e por isso
está deliberadamente **fora** do `blueprint.ts`:

- rateio de questões por formato
- distribuição por grau de dificuldade

A ANBIMA não publica. **Não invente** para preencher — se aparecer fonte, o
lugar é `blueprint.ts` + registro em `/admin/versoes`.

Vale também baixar do site da ANBIMA, com data de acesso:
Código de Distribuição de Produtos de Investimento, Código de Certificação,
e as Regras e Procedimentos de Certificação. Alimentam **3.4**, o próximo
microtema da fila.

### 2.3 Imagens dos personagens — leia antes de pedir

Preciso ser direto, porque isso vai voltar na sessão nova e a resposta não
muda com o ambiente: **eu não baixo nem commito arte dos personagens de
*Akatsuki no Yona***. Baixar arte de terceiros e colocá-la no repositório é
redistribuir obra alheia; ser para uso pessoal muda o risco, não o ato. Rodar
no seu PC dá acesso à rede, não permissão sobre a obra.

O que **está pronto e funciona**, decidido justamente por causa disso:

- Os retratos são **desenhados em SVG autoral** por
  `src/components/domain/Retrato.tsx`. O app está completo sem nenhuma imagem.
- `public/personagens/` é um **slot opcional**. Veja
  `public/personagens/LEIA-ME.md`.

Se **você** tiver arquivos que pode usar, o caminho é de dois passos e o
Claude local faz sem problema:

1. salvar como `public/personagens/<id>.webp` — ids: `yona`, `ao`, `kija`,
   `shinah`, `jaeha`, `zeno`, `hak`;
2. apontar `avatar: '/personagens/<id>.webp'` no personagem correspondente em
   `src/lib/personagens.ts`.

Especificação: `.webp` quadrado, 256×256 ou mais, até ~40 KB, rosto
centralizado (é recortado em círculo, de 18 px a 52 px), fundo transparente ou
escuro. Se o arquivo faltar ou falhar, o componente volta sozinho para o SVG —
não quebra tela.

O que o Claude local **pode** fazer aqui: converter e redimensionar os seus
arquivos, otimizar para o orçamento de peso, ligar os `avatar`, e ampliar os
retratos SVG autorais (mais detalhe, variação por estado). O que ele não vai
fazer é ir buscar a arte original.

---

## 3. A fila de trabalho, na ordem

Vem de `docs/LACUNAS.md` §3, ordenada por peso na prova. Volume: **290
questões contra piso de 440** — faltam ~150.

| Ordem | Microtema | Conceitos | O que falta |
|---|---|---:|---|
| 1 | **3.4 Regras e condutas** | 6 | os 9 princípios éticos, LGPD, sigilo bancário, e o bloco de crimes: insider trading, spoofing, layering, churning, front running |
| 2 | 4.4 Finanças descentralizadas | 2 | tokenização, NFT, ETF cripto, DREX |
| 3 | 1.1 Sistema financeiro nacional | 2 | CNSP, CNPC, os 17 operadores, FGCCoop, SBP |
| 4 | 2.2 Previdência complementar | 2 | regimes de tributação em detalhe, portabilidade e carências, as 7 modalidades de renda |
| 5 | 3.3 Classificação de investidores | 2 | diversificação, investidor profissional × qualificado |
| — | Ajustes P2 (4.5, 4.7, ESG) | 5 | ver `LACUNAS.md` §3 |

**Comece por 3.4.** É o assunto com maior densidade de pegadinha da prova, e
depende de fontes que o seu PC alcança (Códigos ANBIMA, Lei 6.385/76 art. 27-D,
Lei 13.709/2018, LC 105/2001).

Note que 2.2 e boa parte de 3.4 **dependem da seção 2.1 acima**: sem os textos
legais, o conteúdo sai raso ou marcado como não verificado.

---

## 4. Como o conteúdo é escrito aqui

Isto não é preferência de estilo — é o que os testes cobram e o que faz o
material funcionar. O padrão longo está em `docs/PROGRESSO-CONTEUDO.md`;
o essencial:

1. **Conteúdo é DADO, não código.** Aulas em `src/lib/content/*`, questões em
   `src/lib/questions/*`. Nunca texto de aula dentro de componente.
2. **Nove blocos obrigatórios** por aula, mais três níveis de profundidade — o
   nível 2 é a própria `explicacao`; `niveis` guarda o 1 e o 3. Validado em
   `src/test/conteudo.test.ts`.
3. **Toda questão é autoral.** Proibido copiar de provas anteriores, cursos ou
   bancos de terceiros. Isso vale igual no seu PC, com busca disponível: a
   busca serve para **conferir o fato**, não para colher o enunciado.
4. **Cada lote nasce de um erro diagnosticado.** Os distratores atacam esse
   erro; o cabeçalho do arquivo de questões registra qual é. Exemplos: em 1.4,
   confundir regulação estatal com autorregulação e com infraestrutura; em 2.1
   lote B, confundir forma com valor (desdobramento não cria patrimônio).
5. **Não fixe número que envelhece.** Nenhuma questão fixa Selic, meta de
   inflação ou compulsório — a aula traz o mecanismo e marca onde há valor
   sujeito a revisão.
6. **Um commit por microtema**, atualizando `docs/PROGRESSO-CONTEUDO.md` no
   mesmo commit. É o que permite trocar de sessão sem perder o fio — foi assim
   que esta passagem foi possível.
7. `npm run typecheck` **antes de todo commit** (`strict` + `noUnusedLocals`).

---

## 5. Armadilhas já pagas — não repita

**IDs de questão duplicados somem em silêncio.** `montarQuestoes` indexa por
id num `Map` (precisa disso para o overlay dar patch), então a segunda questão
com o mesmo id **substitui** a primeira. Aconteceu com `q-of-01`/`q-of-02` e
duas questões evaporaram sem erro. O teste de unicidade não pega — ele roda
sobre o array já deduplicado. Hoje o `q()` de `questions/builder.ts` mantém o
conjunto de ids emitidos e falha alto na colisão. **Se `npm run docs` e a
contagem em runtime divergirem, é isso.**

**Não derive conteúdo em constante de módulo.** `MACROTEMAS`, `MICROTEMAS`,
`CONCEITOS` e `QUESTOES` são mutados *no lugar* por `aplicarOverlayLocal`. Um
`const X = MACROTEMAS.map(...)` no topo do arquivo congela o conteúdo de antes
da edição do painel. Use função — veja `conquistas()` em
`engine/gamification.ts`, que existe por causa disso. Regra 11, com teste em
`src/test/overlay.test.ts`.

**O roteador é `HashRouter`.** Rotas são `#/trilha`, `#/admin`. Link com
`href="#conteudo"` quebra a navegação — foi por isso que o skip link virou
`<button>`.

**Acessibilidade é testada, não presumida.** `src/test/acessibilidade.test.ts`
lê os tokens do próprio `index.css` e mede contraste. Mexeu em cor, rode o
teste. E nada de glifo Unicode na navegação: no Android vira caixinha.

---

## 6. Uma decisão de arquitetura que está madura e é sua — ✅ RESOLVIDA em 25/08/2026

O pedaço `conteudo` do bundle saiu de **137,91 kB** (fim da Fase 10) para
**615,81 kB** (182,42 kB gzip) e carrega inteiro na abertura — o registro
mutável exige `MACROTEMAS` síncrono.

Passamos de 70 conceitos. A partir daqui vale carregar **por macrotema, sob
demanda**. É trabalho de arquitetura de verdade (mexe no registro mutável e no
`aplicarOverlayLocal`), não cabe de raspão numa entrega de conteúdo, e por isso
não foi feito. **A decisão é sua**: se quiser, peça explicitamente na sessão
nova, como tarefa própria — antes de escrever mais 150 questões, não depois.

> **Feito.** O pedaço único virou oito: `conteudo-m1..m4` e `questoes-m1..m4`,
> mais as camadas de registro. O `index` caiu de 182 kB para 72 kB porque as
> telas do estudante passaram a carregar sob demanda. Detalhes e a regra de
> ordem entre camadas estão na decisão 13 do `CLAUDE.md` e no cabeçalho de
> `vite.config.ts`.
>
> O que **não** foi feito, e continua em aberto: adiar o TEXTO das aulas e das
> questões para depois do primeiro paint. Não dá sem separar estrutura de
> prosa no tipo `Conceito`, porque `planner.ts` e `trilha.ts` precisam do
> corpus inteiro para decidir o que mostrar na Home — e `conteudo.test.ts`
> valida a prosa de todos os conceitos de forma síncrona. É refatoração de
> tipo, não de empacotamento.

---

## 7. Pendências que continuam abertas

- [ ] Tributação com texto legal citado (seção 2.1 deste arquivo)
- [ ] Res. CMN 5.295/2026 no conceito `c-fgc`
- [ ] Rateio por formato e dificuldade — **sem fonte, manter fora do blueprint**
- [ ] Monitoramento automático da ANBIMA — exige backend; hoje `/admin/versoes`
      é registro **manual**, e quem confere é uma pessoa
- [ ] Keystore de assinatura do APK (os ícones já saem de `public/icon.svg` via
      `npm run icons`)
- [ ] Arte dos personagens — opcional, slot pronto, seção 2.3 deste arquivo
