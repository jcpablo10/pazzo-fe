<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const passports = computed(() => [
  {
    id: 'costa',
    level: t('pages.catalog.cards.coast.level'),
    title: t('pages.catalog.cards.coast.title'),
    description: t('pages.catalog.cards.coast.description')
  },
  {
    id: 'montana',
    level: t('pages.catalog.cards.mountain.level'),
    title: t('pages.catalog.cards.mountain.title'),
    description: t('pages.catalog.cards.mountain.description')
  },
  {
    id: 'urbano',
    level: t('pages.catalog.cards.urban.level'),
    title: t('pages.catalog.cards.urban.title'),
    description: t('pages.catalog.cards.urban.description')
  }
])
</script>

<template>
  <section class="space-y-8">
    <header>
      <p class="text-xs font-bold uppercase tracking-[0.16em] text-primary">{{ t('pages.catalog.badge') }}</p>
      <h1 class="mt-3 text-4xl font-black text-on sm:text-5xl">{{ t('pages.catalog.title') }}</h1>
      <p class="mt-3 max-w-3xl text-on-muted">{{ t('pages.catalog.subtitle') }}</p>
    </header>

    <section class="grid gap-5 md:grid-cols-3">
      <article v-for="passport in passports" :key="passport.id" class="glass-panel rounded-2xl border p-6">
        <p class="text-xs font-bold uppercase tracking-[0.14em] text-primary">{{ passport.level }}</p>
        <h2 class="mt-3 text-2xl font-extrabold text-on">{{ passport.title }}</h2>
        <p class="mt-3 text-on-muted">{{ passport.description }}</p>
        <NuxtLink :to="`/pasaportes/${passport.id}`" class="mt-5 inline-flex text-sm font-bold text-primary hover:underline">
          {{ t('pages.catalog.viewDetail') }}
        </NuxtLink>
      </article>
    </section>
  </section>
</template>
