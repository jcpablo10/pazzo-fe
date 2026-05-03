<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="space-y-8">
    <header>
      <p class="text-xs font-bold uppercase tracking-[0.16em] text-primary">{{ t('pages.map.badge') }}</p>
      <h1 class="mt-3 text-4xl font-black text-on">{{ t('pages.map.title') }}</h1>
      <p class="mt-3 max-w-3xl text-on-muted">{{ t('pages.map.subtitle') }}</p>
    </header>

    <section class="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
      <article class="glass-panel rounded-2xl border p-6">
        <div class="flex h-96 items-center justify-center rounded-2xl border border-border/70 bg-surface/55 text-on-subtle">
          {{ t('pages.map.mapPlaceholder') }}
        </div>
      </article>

      <aside class="glass-panel rounded-2xl border p-6">
        <h2 class="text-xl font-extrabold text-on">{{ t('pages.map.sidebarTitle') }}</h2>
        <ul class="mt-4 space-y-3">
          <li class="rounded-xl border border-border/70 bg-surface/55 px-3 py-2 text-sm text-on-muted">{{ t('pages.map.stops.one') }}</li>
          <li class="rounded-xl border border-border/70 bg-surface/55 px-3 py-2 text-sm text-on-muted">{{ t('pages.map.stops.two') }}</li>
          <li class="rounded-xl border border-border/70 bg-surface/55 px-3 py-2 text-sm text-on-muted">{{ t('pages.map.stops.three') }}</li>
        </ul>
      </aside>
    </section>
  </section>
</template>
