<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const items = computed(() => [
  { label: t('landing.stats.routes'), value: '42' },
  { label: t('landing.stats.stamps'), value: '1,280' },
  { label: t('landing.stats.cities'), value: '17' }
])
</script>

<template>
  <section class="grid gap-4 sm:grid-cols-3">
    <article v-for="item in items" :key="item.label" class="glass-panel rounded-2xl border p-5">
      <p class="text-sm uppercase tracking-[0.12em] text-on-subtle">{{ item.label }}</p>
      <p class="mt-2 text-3xl font-black text-on">{{ item.value }}</p>
    </article>
  </section>
</template>
