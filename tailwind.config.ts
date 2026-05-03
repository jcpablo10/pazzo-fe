import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue'
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--pazzo-bg)',
        'bg-deep': 'var(--pazzo-bg-deep)',
        surface: 'var(--pazzo-surface)',
        border: 'var(--pazzo-border)',
        primary: 'var(--pazzo-primary)',
        on: 'var(--pazzo-on)',
        'on-muted': 'var(--pazzo-on-muted)',
        'on-subtle': 'var(--pazzo-on-subtle)',
        'on-primary': 'var(--pazzo-on-primary)'
      },
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
        display: ['"Playfair Display"', 'serif']
      },
      borderRadius: {
        panel: '1rem',
        action: '0.75rem'
      },
      boxShadow: {
        glow: '0 0 40px rgba(37, 244, 37, 0.35)'
      }
    }
  },
  plugins: []
} satisfies Config
