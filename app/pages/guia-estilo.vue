<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="space-y-8">
    <header>
      <p class="text-xs font-bold uppercase tracking-[0.16em] text-primary">{{ t('pages.styleGuide.badge') }}</p>
      <h1 class="mt-3 text-4xl font-black text-on">{{ t('pages.styleGuide.title') }}</h1>
      <p class="mt-3 max-w-3xl text-on-muted">{{ t('pages.styleGuide.subtitle') }}</p>
    </header>

    <section class="grid gap-6 lg:grid-cols-3">
      <article class="glass-panel rounded-2xl border p-6">
        <p class="text-xs font-bold uppercase tracking-[0.14em] text-on-subtle">{{ t('pages.styleGuide.colors') }}</p>
        <div class="mt-4 flex gap-3">
          <span class="h-10 w-10 rounded-lg bg-primary" />
          <span class="h-10 w-10 rounded-lg bg-bg" />
          <span class="h-10 w-10 rounded-lg bg-surface border border-border" />
        </div>
      </article>

      <article class="glass-panel rounded-2xl border p-6">
        <p class="text-xs font-bold uppercase tracking-[0.14em] text-on-subtle">{{ t('pages.styleGuide.typography') }}</p>
        <p class="heading-display mt-3 text-3xl font-black text-on">Playfair Display</p>
        <p class="mt-2 text-on-muted">Lexend</p>
      </article>

      <article class="glass-panel rounded-2xl border p-6">
        <p class="text-xs font-bold uppercase tracking-[0.14em] text-on-subtle">{{ t('pages.styleGuide.components') }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <PazzoButton size="sm">Primary</PazzoButton>
          <PazzoButton size="sm" variant="secondary">Secondary</PazzoButton>
        </div>
      </article>
    </section>
  </section>
</template>
