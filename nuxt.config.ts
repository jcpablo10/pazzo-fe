import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  alias: {
    '#domain': '/src/domain',
    '#application': '/src/application',
    '#infrastructure': '/src/infrastructure',
    '#presentation': '/src/presentation',
    '#shared': '/src/shared'
  },
  i18n: {
    defaultLocale: 'es',
    strategy: 'prefix',
    langDir: 'locales',
    locales: [
      { code: 'es', name: 'Español', file: 'es.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ]
  }
})
