<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
 
type PassportId = 'costa' | 'montana' | 'urbano'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const passportData = computed(() => ({
  costa: {
    title: t('pages.catalog.cards.coast.title'),
    subtitle: t('pages.passportDetail.subtitles.coast'),
    checkpoints: '12',
    elevation: '980m',
    completion: '67%'
  },
  montana: {
    title: t('pages.catalog.cards.mountain.title'),
    subtitle: t('pages.passportDetail.subtitles.mountain'),
    checkpoints: '16',
    elevation: '1,460m',
    completion: '41%'
  },
  urbano: {
    title: t('pages.catalog.cards.urban.title'),
    subtitle: t('pages.passportDetail.subtitles.urban'),
    checkpoints: '9',
    elevation: '320m',
    completion: '74%'
  }
}))

const isValidPassportId = (value: string): value is PassportId => {
  return ['costa', 'montana', 'urbano'].includes(value)
}

onMounted(() => {
  const id = String(route.params.id || '')

  if (!isValidPassportId(id)) {
    router.replace('/pasaportes/costa')
  }
})

const currentPassport = computed(() => {
  const id = String(route.params.id || 'costa')

  if (!isValidPassportId(id)) {
    return passportData.value.costa
  }

  return passportData.value[id]
})
</script>

<template>
  <section class="space-y-8">
    <header class="glass-panel rounded-3xl border p-8">
      <p class="text-xs font-bold uppercase tracking-[0.16em] text-primary">{{ t('pages.passportDetail.badge') }}</p>
      <h1 class="mt-3 text-4xl font-black text-on sm:text-5xl">{{ currentPassport.title }}</h1>
      <p class="mt-3 max-w-3xl text-on-muted">{{ currentPassport.subtitle }}</p>
      <div class="mt-7 flex gap-3">
        <NuxtLink to="/sellado-qr">
          <PazzoButton>{{ t('pages.passportDetail.start') }}</PazzoButton>
        </NuxtLink>
        <NuxtLink to="/dashboard/mapa-checkpoints">
          <PazzoButton variant="secondary">{{ t('pages.passportDetail.share') }}</PazzoButton>
        </NuxtLink>
      </div>
    </header>

    <section class="grid gap-5 lg:grid-cols-3">
      <article class="glass-panel rounded-2xl border p-6">
        <p class="text-sm text-on-subtle">{{ t('pages.passportDetail.kpis.checkpoints') }}</p>
        <p class="mt-1 text-3xl font-black text-on">{{ currentPassport.checkpoints }}</p>
      </article>
      <article class="glass-panel rounded-2xl border p-6">
        <p class="text-sm text-on-subtle">{{ t('pages.passportDetail.kpis.elevation') }}</p>
        <p class="mt-1 text-3xl font-black text-on">{{ currentPassport.elevation }}</p>
      </article>
      <article class="glass-panel rounded-2xl border p-6">
        <p class="text-sm text-on-subtle">{{ t('pages.passportDetail.kpis.completion') }}</p>
        <p class="mt-1 text-3xl font-black text-on">{{ currentPassport.completion }}</p>
      </article>
    </section>
  </section>
</template>
