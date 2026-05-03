import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue'
  ],
  // En Tailwind v4, la configuración de tema se hace en CSS con @theme
  // Este archivo se mantiene principalmente para darkMode y content
} satisfies Config
