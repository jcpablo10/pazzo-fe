<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="space-y-8">
    <header>
      <p class="text-xs font-bold uppercase tracking-[0.16em] text-primary">{{ t('pages.createPassport.badge') }}</p>
      <h1 class="mt-3 text-4xl font-black text-on">{{ t('pages.createPassport.title') }}</h1>
      <p class="mt-3 max-w-3xl text-on-muted">{{ t('pages.createPassport.subtitle') }}</p>
    </header>

    <section class="grid gap-6 lg:grid-cols-2">
      <article class="glass-panel rounded-2xl border p-6">
        <h2 class="text-2xl font-extrabold text-on">{{ t('pages.createPassport.form.title') }}</h2>
        <div class="mt-5 space-y-4">
          <div class="rounded-xl border border-border/80 bg-surface/50 px-4 py-3 text-sm text-on-muted">{{ t('pages.createPassport.form.name') }}</div>
          <div class="rounded-xl border border-border/80 bg-surface/50 px-4 py-3 text-sm text-on-muted">{{ t('pages.createPassport.form.city') }}</div>
          <div class="rounded-xl border border-border/80 bg-surface/50 px-4 py-3 text-sm text-on-muted">{{ t('pages.createPassport.form.difficulty') }}</div>
        </div>
        <PazzoButton class="mt-6">{{ t('pages.createPassport.form.submit') }}</PazzoButton>
      </article>

      <article class="glass-panel rounded-2xl border p-6">
        <h2 class="text-2xl font-extrabold text-on">{{ t('pages.createPassport.previewTitle') }}</h2>
        <p class="mt-4 text-on-muted">{{ t('pages.createPassport.previewBody') }}</p>
      </article>
    </section>
  </section>
</template>
