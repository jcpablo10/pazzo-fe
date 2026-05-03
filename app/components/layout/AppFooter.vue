<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="border-t border-border/60 bg-bg-deep/80">
    <div class="mx-auto grid max-w-6xl gap-6 px-6 py-10 sm:px-8 md:grid-cols-3">
      <div>
        <p class="text-lg font-black text-on">Pazzo</p>
        <p class="mt-2 text-sm text-on-muted">{{ t('site.footer.description') }}</p>
      </div>

      <div>
        <p class="text-xs font-bold uppercase tracking-[0.14em] text-on-subtle">{{ t('site.footer.product') }}</p>
        <ul class="mt-3 space-y-2 text-sm text-on-muted">
          <li>{{ t('site.footer.items.passports') }}</li>
          <li>{{ t('site.footer.items.checkpoints') }}</li>
          <li>{{ t('site.footer.items.analytics') }}</li>
        </ul>
      </div>

      <div>
        <p class="text-xs font-bold uppercase tracking-[0.14em] text-on-subtle">{{ t('site.footer.legal') }}</p>
        <p class="mt-3 text-sm text-on-muted">{{ t('site.footer.copy') }}</p>
      </div>
    </div>
  </footer>
</template>
