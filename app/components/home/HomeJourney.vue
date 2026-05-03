<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const steps = computed(() => [
  t('landing.steps.one'),
  t('landing.steps.two'),
  t('landing.steps.three')
])
</script>

<template>
  <section class="glass-panel rounded-3xl border p-8">
    <h2 class="text-3xl font-black text-on">{{ t('landing.journeyTitle') }}</h2>
    <ol class="mt-6 space-y-5">
      <li
        v-for="(step, index) in steps"
        :key="step"
        class="rounded-xl border border-border/80 bg-black/10 p-4 text-on-muted"
      >
        <span class="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">{{ index + 1 }}</span>
        {{ step }}
      </li>
    </ol>
  </section>
</template>
