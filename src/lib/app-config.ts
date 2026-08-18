/**
 * Configuração de distribuição. Ajuste aqui ao publicar.
 * Nada disso é segredo — são apenas endereços públicos.
 */
export const APP = {
  nome: 'Preparatório CPA',
  versao: '0.1.0',
  repositorio: 'https://github.com/dennereduardo1971-ai/APP-CPA-YOHANNA',
  /** Página de releases onde o APK é publicado pelo GitHub Actions. */
  releases: 'https://github.com/dennereduardo1971-ai/APP-CPA-YOHANNA/releases',
  /** Link direto para o APK da última versão publicada. */
  apkLatest:
    'https://github.com/dennereduardo1971-ai/APP-CPA-YOHANNA/releases/latest/download/preparatorio-cpa.apk',
  pacoteAndroid: 'br.com.preparatoriocpa.app',
} as const
