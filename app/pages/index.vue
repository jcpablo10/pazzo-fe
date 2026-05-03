<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '../stores/app.store'

const appStore = useAppStore()
const { t, locale } = useI18n()

onMounted(() => {
  appStore.registerVisit()
})
</script>

<template>
  <section class="relative space-y-16 pb-16">
    <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-136 bg-[radial-gradient(circle_at_15%_20%,rgba(37,244,37,0.25),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(0,230,20,0.18),transparent_40%)]" />

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
        <PazzoButton variant="primary">
          {{ t('landing.ctaPrimary') }}
        </PazzoButton>
        <PazzoButton variant="secondary">
          {{ t('landing.ctaSecondary') }}
        </PazzoButton>
      </div>
    </header>

    <section class="grid gap-4 sm:grid-cols-3">
      <article class="glass-panel rounded-2xl border p-5">
        <p class="text-sm uppercase tracking-[0.12em] text-on-subtle">{{ t('landing.stats.routes') }}</p>
        <p class="mt-2 text-3xl font-black text-on">42</p>
      </article>
      <article class="glass-panel rounded-2xl border p-5">
        <p class="text-sm uppercase tracking-[0.12em] text-on-subtle">{{ t('landing.stats.stamps') }}</p>
        <p class="mt-2 text-3xl font-black text-on">1,280</p>
      </article>
      <article class="glass-panel rounded-2xl border p-5">
        <p class="text-sm uppercase tracking-[0.12em] text-on-subtle">{{ t('landing.stats.cities') }}</p>
        <p class="mt-2 text-3xl font-black text-on">17</p>
      </article>
    </section>

    <section class="grid gap-6 lg:grid-cols-3">
      <article class="glass-panel rounded-2xl border p-6">
        <h2 class="text-2xl font-extrabold tracking-tight text-on">{{ t('landing.features.passportTitle') }}</h2>
        <p class="mt-3 text-on-muted">{{ t('landing.features.passportBody') }}</p>
      </article>
      <article class="glass-panel rounded-2xl border p-6">
        <h2 class="text-2xl font-extrabold tracking-tight text-on">{{ t('landing.features.qrTitle') }}</h2>
        <p class="mt-3 text-on-muted">{{ t('landing.features.qrBody') }}</p>
      </article>
      <article class="glass-panel rounded-2xl border p-6">
        <h2 class="text-2xl font-extrabold tracking-tight text-on">{{ t('landing.features.mapTitle') }}</h2>
        <p class="mt-3 text-on-muted">{{ t('landing.features.mapBody') }}</p>
      </article>
    </section>

    <section class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="glass-panel rounded-3xl border p-8">
        <h2 class="text-3xl font-black text-on">{{ t('landing.journeyTitle') }}</h2>
        <ol class="mt-6 space-y-5">
          <li class="rounded-xl border border-border/80 bg-black/10 p-4 text-on-muted">
            <span class="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">1</span>
            {{ t('landing.steps.one') }}
          </li>
          <li class="rounded-xl border border-border/80 bg-black/10 p-4 text-on-muted">
            <span class="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">2</span>
            {{ t('landing.steps.two') }}
          </li>
          <li class="rounded-xl border border-border/80 bg-black/10 p-4 text-on-muted">
            <span class="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">3</span>
            {{ t('landing.steps.three') }}
          </li>
        </ol>
      </div>

      <aside class="glass-panel rounded-3xl border p-8">
        <p class="text-sm uppercase tracking-[0.12em] text-on-subtle">{{ t('landing.liveCardTitle') }}</p>
        <p class="mt-3 text-4xl font-black text-on">{{ appStore.visits }}</p>
        <p class="mt-2 text-on-muted">{{ t('landing.liveCardBody') }}</p>
      </aside>
    </section>
  </section>
</template>
