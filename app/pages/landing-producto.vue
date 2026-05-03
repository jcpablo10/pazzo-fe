<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="space-y-10">
    <header class="glass-panel rounded-3xl border p-8 sm:p-12">
      <p class="text-xs font-bold uppercase tracking-[0.16em] text-primary">{{ t('pages.product.heroBadge') }}</p>
      <h1 class="heading-display mt-4 text-5xl font-black leading-tight text-on sm:text-6xl">{{ t('pages.product.title') }}</h1>
      <p class="mt-5 max-w-3xl text-lg text-on-muted">{{ t('pages.product.subtitle') }}</p>
      <div class="mt-8 flex gap-3">
        <NuxtLink to="/dashboard/crear-pasaporte">
          <PazzoButton>{{ t('pages.product.primaryCta') }}</PazzoButton>
        </NuxtLink>
        <NuxtLink to="/sellado-qr">
          <PazzoButton variant="secondary">{{ t('pages.product.secondaryCta') }}</PazzoButton>
        </NuxtLink>
      </div>
    </header>

    <section class="grid gap-5 md:grid-cols-3">
      <article class="glass-panel rounded-2xl border p-6" v-for="item in [
        t('pages.product.points.one'),
        t('pages.product.points.two'),
        t('pages.product.points.three')
      ]" :key="item">
        <p class="text-on-muted">{{ item }}</p>
      </article>
    </section>
  </section>
</template>
