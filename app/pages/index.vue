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
  <section class="space-y-6">
    <header class="space-y-3">
      <p class="text-sm font-medium uppercase tracking-wider text-slate-500">
        {{ locale.toUpperCase() }}
      </p>
      <h1 class="text-4xl font-semibold tracking-tight">
        {{ t('home.title') }}
      </h1>
      <p class="text-lg text-slate-700">
        {{ t('home.subtitle') }}
      </p>
      <p class="text-slate-600">
        {{ t('home.description') }}
      </p>
    </header>

    <div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p class="text-sm text-slate-500">{{ t('home.visits') }}</p>
      <p class="text-2xl font-semibold text-slate-900">{{ appStore.visits }}</p>
    </div>
  </section>
</template>
