<script setup lang="ts">
import { onMounted } from 'vue'
import { useAppStore } from '../stores/app.store'

const appStore = useAppStore()

onMounted(() => {
  appStore.registerVisit()
})
</script>

<template>
  <section class="relative space-y-16 pb-16">
    <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-136 bg-[radial-gradient(circle_at_15%_20%,rgba(37,244,37,0.25),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(0,230,20,0.18),transparent_40%)]" />

    <HomeHero />
    <HomeStats />
    <HomeFeatures />

    <section class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <HomeJourney />
      <HomeLiveActivity :visits="appStore.visits" />
    </section>
  </section>
</template>
