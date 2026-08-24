# Arte dos personagens

Este diretório é um **slot opcional**. O app funciona sem nenhum arquivo aqui:
quando não há arte, `MarcaPersonagem` desenha o retrato autoral em SVG de
`src/components/domain/Retrato.tsx` — uma silhueta simbólica na cor de
identidade do personagem, definida em `src/lib/personagens.ts`.

## Como adicionar

1. Coloque o arquivo como `public/personagens/<id>.webp`, usando o `id` do
   personagem: `yona`, `ao`, `kija`, `shinah`, `jaeha`, `zeno`, `hak`.
2. Aponte o campo `avatar` do personagem em `src/lib/personagens.ts`:

   ```ts
   { id: 'yona', /* ... */ avatar: '/personagens/yona.webp' }
   ```

Se o arquivo faltar ou falhar ao carregar, o componente volta sozinho para o
retrato desenhado — não quebra a tela.

## Recomendações

- **Formato:** `.webp`, quadrado, 256×256 no mínimo.
- **Peso:** até ~40 KB cada. O APK roda offline e carrega tudo do bundle.
- **Enquadramento:** rosto centralizado — a marca é exibida recortada em
  círculo, de 18 px (trilha) a 52 px (início).
- **Fundo:** transparente ou escuro. O app é dark mode único, sobre violeta
  profundo (`#0E0C16`).
- **Cor:** a moldura já é desenhada na cor do personagem (aurora para Yona, Ao
  e Son Hak; branco, azul, verde e ouro para os quatro guardiões). A arte não
  precisa carregar a cor sozinha.

## Direitos

O repositório **não inclui** arte dos personagens, e nada no app depende de
arte externa para funcionar. Use apenas arquivos que você tenha direito de
usar. Os nomes e papéis em `personagens.ts` são referências de identidade da
plataforma; os textos de guia, os retratos em SVG e toda a paleta são
autorais.
