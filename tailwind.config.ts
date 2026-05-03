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
        background: 'var(--pazzo-background)',
        'on-background': 'var(--pazzo-on-background)',
        surface: 'var(--pazzo-surface)',
        'surface-dim': 'var(--pazzo-surface-dim)',
        'surface-bright': 'var(--pazzo-surface-bright)',
        'surface-container-lowest': 'var(--pazzo-surface-container-lowest)',
        'surface-container-low': 'var(--pazzo-surface-container-low)',
        'surface-container': 'var(--pazzo-surface-container)',
        'surface-container-high': 'var(--pazzo-surface-container-high)',
        'surface-container-highest': 'var(--pazzo-surface-container-highest)',
        'surface-variant': 'var(--pazzo-surface-variant)',
        'surface-tint': 'var(--pazzo-surface-tint)',
        'on-surface': 'var(--pazzo-on-surface)',
        'on-surface-variant': 'var(--pazzo-on-surface-variant)',
        'inverse-surface': 'var(--pazzo-inverse-surface)',
        'inverse-on-surface': 'var(--pazzo-inverse-on-surface)',
        outline: 'var(--pazzo-outline)',
        'outline-variant': 'var(--pazzo-outline-variant)',
        primary: 'var(--pazzo-primary)',
        'on-primary': 'var(--pazzo-on-primary)',
        'primary-container': 'var(--pazzo-primary-container)',
        'on-primary-container': 'var(--pazzo-on-primary-container)',
        'inverse-primary': 'var(--pazzo-inverse-primary)',
        secondary: 'var(--pazzo-secondary)',
        'on-secondary': 'var(--pazzo-on-secondary)',
        'secondary-container': 'var(--pazzo-secondary-container)',
        'on-secondary-container': 'var(--pazzo-on-secondary-container)',
        tertiary: 'var(--pazzo-tertiary)',
        'on-tertiary': 'var(--pazzo-on-tertiary)',
        'tertiary-container': 'var(--pazzo-tertiary-container)',
        'on-tertiary-container': 'var(--pazzo-on-tertiary-container)',
        error: 'var(--pazzo-error)',
        'on-error': 'var(--pazzo-on-error)',
        'error-container': 'var(--pazzo-error-container)',
        'on-error-container': 'var(--pazzo-on-error-container)',
        'primary-fixed': 'var(--pazzo-primary-fixed)',
        'primary-fixed-dim': 'var(--pazzo-primary-fixed-dim)',
        'on-primary-fixed': 'var(--pazzo-on-primary-fixed)',
        'on-primary-fixed-variant': 'var(--pazzo-on-primary-fixed-variant)',
        'secondary-fixed': 'var(--pazzo-secondary-fixed)',
        'secondary-fixed-dim': 'var(--pazzo-secondary-fixed-dim)',
        'on-secondary-fixed': 'var(--pazzo-on-secondary-fixed)',
        'on-secondary-fixed-variant': 'var(--pazzo-on-secondary-fixed-variant)',
        'tertiary-fixed': 'var(--pazzo-tertiary-fixed)',
        'tertiary-fixed-dim': 'var(--pazzo-tertiary-fixed-dim)',
        'on-tertiary-fixed': 'var(--pazzo-on-tertiary-fixed)',
        'on-tertiary-fixed-variant': 'var(--pazzo-on-tertiary-fixed-variant)',
        bg: 'var(--pazzo-surface)',
        'bg-deep': 'var(--pazzo-surface-container-lowest)',
        border: 'var(--pazzo-outline-variant)',
        on: 'var(--pazzo-on-surface)',
        'on-muted': 'var(--pazzo-on-surface-variant)',
        'on-subtle': 'var(--pazzo-outline)'
      },
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
        display: ['Lexend', 'sans-serif']
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
        panel: '1rem',
        action: '0.75rem'
      },
      spacing: {
        'section-y': '6rem',
        'grid-gap': '2rem',
        'stack-lg': '2rem',
        'stack-md': '1rem',
        'stack-sm': '0.5rem',
        'inline': '1.25rem'
      },
      maxWidth: {
        'container-ds': '80rem'
      },
      boxShadow: {
        glow: '0 0 40px rgba(37, 244, 37, 0.35)',
        'glow-soft': '0 0 24px rgba(37, 244, 37, 0.25)'
      },
      letterSpacing: {
        stamp: '0.1em'
      }
    }
  },
  plugins: []
} satisfies Config
