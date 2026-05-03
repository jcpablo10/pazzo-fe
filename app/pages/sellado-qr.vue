<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const steps = computed(() => [
  t('pages.qr.steps.one'),
  t('pages.qr.steps.two'),
  t('pages.qr.steps.three')
])
</script>

<template>
  <section class="space-y-8">
    <header class="glass-panel rounded-3xl border p-8">
      <p class="text-xs font-bold uppercase tracking-[0.16em] text-primary">{{ t('pages.qr.badge') }}</p>
      <h1 class="mt-3 text-4xl font-black text-on">{{ t('pages.qr.title') }}</h1>
      <p class="mt-3 max-w-3xl text-on-muted">{{ t('pages.qr.subtitle') }}</p>
    </header>

    <section class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <aside class="glass-panel rounded-2xl border p-6">
        <h2 class="text-xl font-extrabold text-on">{{ t('pages.qr.scanCard') }}</h2>
        <div class="mt-5 flex h-56 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
          QR
        </div>
      </aside>

      <article class="glass-panel rounded-2xl border p-6">
        <h2 class="text-xl font-extrabold text-on">{{ t('pages.qr.flowTitle') }}</h2>
        <ol class="mt-4 space-y-3">
          <li v-for="(step, index) in steps" :key="step" class="rounded-xl border border-border/70 bg-surface/55 px-3 py-3 text-sm text-on-muted">
            <span class="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">{{ index + 1 }}</span>
            {{ step }}
          </li>
        </ol>
      </article>
    </section>
  </section>
</template>
