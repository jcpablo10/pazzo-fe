<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const mobileOpen = ref(false)

const links = computed(() => [
  { to: '/', label: t('site.nav.home') },
  { to: '/landing-producto', label: t('site.nav.product') },
  { to: '/pasaportes', label: t('site.nav.catalog') },
  { to: '/pasaportes/costa', label: t('site.nav.passportDetail') },
  { to: '/dashboard/crear-pasaporte', label: t('site.nav.createPassport') },
  { to: '/dashboard/mapa-checkpoints', label: t('site.nav.map') },
  { to: '/sellado-qr', label: t('site.nav.qrFlow') },
  { to: '/logo', label: t('site.nav.logo') },
  { to: '/guia-estilo', label: t('site.nav.styleGuide') },
  { to: '/documentacion/prd', label: t('site.nav.prd') }
])

watch(() => route.fullPath, () => {
  mobileOpen.value = false
})

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }

  if (path === '/pasaportes') {
    return route.path === '/pasaportes'
  }

  return route.path.startsWith(path)
}

const toggleMobileMenu = () => {
  mobileOpen.value = !mobileOpen.value
}
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-border/60 bg-bg/85 backdrop-blur-lg">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
      <NuxtLink to="/" class="flex items-center gap-3" @click="mobileOpen = false">
        <span class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-sm font-black text-primary">PZ</span>
        <div>
          <p class="text-sm font-black tracking-wide text-on">Pazzo</p>
          <p class="text-xs text-on-subtle">{{ t('site.subtitle') }}</p>
        </div>
      </NuxtLink>

      <button
        type="button"
        class="inline-flex items-center rounded-lg border border-border/70 bg-surface/60 px-3 py-2 text-xs font-bold text-on lg:hidden"
        @click="toggleMobileMenu"
      >
        {{ mobileOpen ? t('site.nav.closeMenu') : t('site.nav.openMenu') }}
      </button>

      <nav class="hidden flex-wrap gap-2 lg:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-full border px-3 py-1.5 text-xs font-semibold transition"
          :class="isActive(link.to)
            ? 'border-primary/45 bg-primary/12 text-primary'
            : 'border-border/70 bg-surface/60 text-on-muted hover:border-primary/50 hover:text-on'"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>

    <div v-if="mobileOpen" class="lg:hidden">
      <div class="fixed inset-0 z-40 bg-black/60" @click="mobileOpen = false" />
      <nav class="fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm border-l border-border bg-bg-deep px-5 py-6 shadow-2xl">
        <div class="mb-5 flex items-center justify-between">
          <p class="text-sm font-black tracking-wide text-on">{{ t('site.nav.mobileTitle') }}</p>
          <button type="button" class="rounded-lg border border-border/70 px-2 py-1 text-xs font-bold text-on-muted" @click="mobileOpen = false">
            {{ t('site.nav.closeMenu') }}
          </button>
        </div>

        <div class="flex flex-col gap-2">
          <NuxtLink
            v-for="link in links"
            :key="`mobile-${link.to}`"
            :to="link.to"
            class="rounded-xl border px-4 py-3 text-sm font-semibold transition"
            :class="isActive(link.to)
              ? 'border-primary/45 bg-primary/12 text-primary'
              : 'border-border/70 bg-surface/60 text-on-muted hover:border-primary/50 hover:text-on'"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>
