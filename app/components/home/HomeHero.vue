<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<template>
  <header class="glass-panel mt-2 overflow-hidden rounded-3xl border p-8 sm:p-12">
    <div class="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
      <span class="h-2 w-2 rounded-full bg-primary" />
      {{ t('landing.badge') }} · {{ locale.toUpperCase() }}
    </div>

    <h1 class="heading-display max-w-4xl text-5xl font-black leading-[1.02] text-on sm:text-6xl lg:text-7xl">
      {{ t('landing.title') }}
    </h1>

    <p class="mt-6 max-w-3xl text-lg text-on-muted sm:text-xl">
      {{ t('landing.subtitle') }}
    </p>

    <div class="mt-10 flex flex-wrap gap-4">
      <NuxtLink to="/dashboard/crear-pasaporte">
        <PazzoButton variant="primary">
          {{ t('landing.ctaPrimary') }}
        </PazzoButton>
      </NuxtLink>
      <NuxtLink to="/landing-producto">
        <PazzoButton variant="secondary">
          {{ t('landing.ctaSecondary') }}
        </PazzoButton>
      </NuxtLink>
    </div>
  </header>
</template>
