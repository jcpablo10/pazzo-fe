<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps<{
  visits: number
}>()

const { t } = useI18n()
</script>

<template>
  <aside class="glass-panel rounded-3xl border p-8">
    <p class="text-sm uppercase tracking-[0.12em] text-on-subtle">{{ t('landing.liveCardTitle') }}</p>
    <p class="mt-3 text-4xl font-black text-on">{{ visits }}</p>
    <p class="mt-2 text-on-muted">{{ t('landing.liveCardBody') }}</p>
  </aside>
</template>
