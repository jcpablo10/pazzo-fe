<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="space-y-8">
    <header class="glass-panel rounded-3xl border p-8">
      <p class="text-xs font-bold uppercase tracking-[0.16em] text-primary">{{ t('pages.prd.badge') }}</p>
      <h1 class="mt-3 text-4xl font-black text-on">{{ t('pages.prd.title') }}</h1>
      <p class="mt-3 max-w-3xl text-on-muted">{{ t('pages.prd.subtitle') }}</p>
    </header>

    <section class="grid gap-6 lg:grid-cols-3">
      <article class="glass-panel rounded-2xl border p-6">
        <h2 class="text-xl font-extrabold text-on">{{ t('pages.prd.blocks.problemTitle') }}</h2>
        <p class="mt-3 text-on-muted">{{ t('pages.prd.blocks.problemBody') }}</p>
      </article>
      <article class="glass-panel rounded-2xl border p-6">
        <h2 class="text-xl font-extrabold text-on">{{ t('pages.prd.blocks.solutionTitle') }}</h2>
        <p class="mt-3 text-on-muted">{{ t('pages.prd.blocks.solutionBody') }}</p>
      </article>
      <article class="glass-panel rounded-2xl border p-6">
        <h2 class="text-xl font-extrabold text-on">{{ t('pages.prd.blocks.metricsTitle') }}</h2>
        <p class="mt-3 text-on-muted">{{ t('pages.prd.blocks.metricsBody') }}</p>
      </article>
    </section>
  </section>
</template>
