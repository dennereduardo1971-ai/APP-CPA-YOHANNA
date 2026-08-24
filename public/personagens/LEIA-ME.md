# Arte dos personagens

Este diretório é um **slot opcional**. O app funciona sem nenhum arquivo aqui:
quando não há arte, `MarcaPersonagem` desenha o ícone geométrico autoral
definido em `src/lib/personagens.ts`.

## Como adicionar

1. Coloque o arquivo como `public/personagens/<id>.webp`, usando o `id` do
   personagem: `yona`, `ao`, `kija`, `shinah`, `jaeha`, `zeno`, `hak`.
2. Aponte o campo `avatar` do personagem em `src/lib/personagens.ts`:

   ```ts
   { id: 'yona', /* ... */ avatar: '/personagens/yona.webp' }
   ```

Se o arquivo faltar ou falhar ao carregar, o componente volta sozinho para o
ícone — não quebra a tela.

## Recomendações

- **Formato:** `.webp`, quadrado, 256×256 no mínimo.
- **Peso:** até ~40 KB cada. O APK roda offline e carrega tudo do bundle.
- **Enquadramento:** rosto centralizado — a marca é exibida recortada em
  círculo, de 18 px (trilha) a 44 px (início).
- **Fundo:** transparente ou escuro. O app é dark mode único.

## Direitos

O repositório **não inclui** arte dos personagens. Use apenas arquivos que
você tenha direito de usar. Os nomes e papéis em `personagens.ts` são
referências de identidade da plataforma; os textos de guia são autorais.
