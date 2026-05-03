<script setup lang="ts">
// Footer Component
</script>

<template>
  <footer class="mt-auto border-t border-slate-800 bg-background-dark px-6 lg:px-20 py-12">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div class="flex items-center gap-2 text-primary">
        <span class="material-symbols-outlined text-2xl">pedal_bike</span>
        <span class="font-bold text-lg">Pazzo</span>
      </div>
      <div class="flex gap-8 text-slate-500 text-sm font-medium">
        <a class="hover:text-primary" href="#">Privacidad</a>
        <a class="hover:text-primary" href="#">Términos</a>
        <a class="hover:text-primary" href="#">Contacto</a>
      </div>
      <div class="flex gap-4">
        <div class="size-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all cursor-pointer">
          <span class="material-symbols-outlined text-xl">share</span>
        </div>
        <div class="size-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all cursor-pointer">
          <span class="material-symbols-outlined text-xl">language</span>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto text-center mt-10 text-slate-600 text-xs">
      © 2026 Pazzo Pasaporte Digital. Rodando hacia el futuro.
    </div>
  </footer>
</template>
