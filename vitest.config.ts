import { defineVitestConfig } from '@nuxt/test-utils/config'
import { fileURLToPath } from 'node:url'

export default defineVitestConfig({
  resolve: {
    alias: {
      'bun:test': fileURLToPath(new URL('./test/stubs/bun-test.ts', import.meta.url))
    }
  },
  test: {
    environment: 'nuxt',
    server: {
      deps: {
        inline: ['entities', '@vue/compiler-core', '@vue/compiler-dom', '@vue/compiler-sfc']
      }
    }
  }
})
