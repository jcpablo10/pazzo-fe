import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },
  
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'
        }
      ]
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  alias: {
    '#domain': fileURLToPath(new URL('./src/domain', import.meta.url)),
    '#application': fileURLToPath(new URL('./src/application', import.meta.url)),
    '#infrastructure': fileURLToPath(new URL('./src/infrastructure', import.meta.url)),
    '#presentation': fileURLToPath(new URL('./src/presentation', import.meta.url)),
    '#shared': fileURLToPath(new URL('./src/shared', import.meta.url))
  },
  i18n: {
    defaultLocale: 'es',
    strategy: 'no_prefix',
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'pazzo_locale',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'es'
    },
    locales: [
      { code: 'es', name: 'Español', file: 'es.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ]
  }
})
