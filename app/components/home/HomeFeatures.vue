<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const features = computed(() => [
  {
    title: t('landing.features.passportTitle'),
    body: t('landing.features.passportBody')
  },
  {
    title: t('landing.features.qrTitle'),
    body: t('landing.features.qrBody')
  },
  {
    title: t('landing.features.mapTitle'),
    body: t('landing.features.mapBody')
  }
])
</script>

<template>
  <section class="grid gap-6 lg:grid-cols-3">
    <article v-for="feature in features" :key="feature.title" class="glass-panel rounded-2xl border p-6">
      <h2 class="text-2xl font-extrabold tracking-tight text-on">{{ feature.title }}</h2>
      <p class="mt-3 text-on-muted">{{ feature.body }}</p>
    </article>
  </section>
</template>
