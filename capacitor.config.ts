import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'br.com.preparatoriocpa.app',
  appName: 'Preparatório CPA',
  webDir: 'dist',
  android: {
    // A aplicação é dark-only; evita o flash branco na abertura.
    backgroundColor: '#0B1211',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 600,
      backgroundColor: '#0B1211',
      showSpinner: false,
      androidScaleType: 'CENTER_CROP',
    },
  },
}

export default config
