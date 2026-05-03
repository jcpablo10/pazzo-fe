<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="space-y-8">
    <header>
      <p class="text-xs font-bold uppercase tracking-[0.16em] text-primary">{{ t('pages.logo.badge') }}</p>
      <h1 class="mt-3 text-4xl font-black text-on">{{ t('pages.logo.title') }}</h1>
      <p class="mt-3 max-w-3xl text-on-muted">{{ t('pages.logo.subtitle') }}</p>
    </header>

    <article class="glass-panel flex min-h-72 items-center justify-center rounded-3xl border p-10">
      <div class="text-center">
        <p class="heading-display text-7xl font-black leading-none text-primary">PZ</p>
        <p class="mt-3 text-lg font-semibold text-on">Pazzo</p>
      </div>
    </article>
  </section>
</template>
