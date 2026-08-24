/**
 * Gera os PNGs do app a partir de `public/icon.svg`.
 *
 * O SVG é a fonte da verdade: mudou a marca, roda `npm run icons` e todos os
 * tamanhos saem coerentes. Sem isso, o ícone do APK fica preso numa paleta
 * antiga enquanto a interface já mudou.
 */
import { readFileSync } from 'node:fs'
import sharp from 'sharp'

const svg = readFileSync('public/icon.svg', 'utf8')

/**
 * Ícone maskable: o Android recorta a arte em formatos variados, então o
 * conteúdo precisa caber nos 80% centrais. Em vez de um segundo arquivo para
 * manter em sincronia, aqui só se expande a viewBox do mesmo desenho.
 */
const maskable = svg
  .replace('viewBox="0 0 100 100"', 'viewBox="-14 -14 128 128"')
  .replace('<rect width="100" height="100" rx="22"/>', '<rect x="-14" y="-14" width="128" height="128"/>')
  .replace(
    '<rect width="100" height="100" fill="#0E0C16"/>',
    '<rect x="-14" y="-14" width="128" height="128" fill="#0E0C16"/>',
  )

const saidas = [
  [svg, 192, 'public/icon-192.png'],
  [svg, 512, 'public/icon-512.png'],
  [svg, 1024, 'public/icon-source-1024.png'],
  [svg, 180, 'public/apple-touch-icon.png'],
  [maskable, 512, 'public/icon-maskable-512.png'],
]

await Promise.all(
  saidas.map(async ([fonte, lado, destino]) => {
    // `density` alto para o rasterizador não amostrar o SVG em baixa resolução.
    const { size } = await sharp(Buffer.from(fonte), { density: 600 })
      .resize(lado, lado)
      .png({ compressionLevel: 9 })
      .toFile(destino)
    console.log(`${destino} — ${lado}px, ${(size / 1024).toFixed(1)} kB`)
  }),
)
