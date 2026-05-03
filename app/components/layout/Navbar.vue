<script setup lang="ts">
// Navigation Bar Component
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-3 text-primary">
        <span class="material-symbols-outlined text-3xl">pedal_bike</span>
        <h2 class="text-xl font-bold tracking-tight">Enbiciados</h2>
      </div>
      <nav class="hidden md:flex items-center gap-10">
        <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Ciclismo</a>
        <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Gastronomía</a>
        <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Viajes</a>
        <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Aventuras</a>
      </nav>
      <div class="flex items-center gap-4">
        <button class="hidden sm:block text-sm font-bold px-4 py-2 rounded-lg hover:bg-white/5 transition-all">
          Iniciar Sesión
        </button>
        <button class="bg-primary text-background-dark px-6 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
          Unirse
        </button>
      </div>
    </div>
  </header>
</template>
