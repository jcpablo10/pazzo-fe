<script setup lang="ts">
// Navigation Bar Component
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3 text-primary hover:opacity-80 transition-opacity cursor-pointer">
        <img src="../../assets/pazzo/pazzo.logo.png" alt="Pazzo Logo">
      </NuxtLink>
      <nav class="hidden md:flex items-center gap-10">
        <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Ciclismo</a>
        <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Gastronomía</a>
        <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Viajes</a>
        <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Aventuras</a>
      </nav>
      <div class="flex items-center gap-4">
        <NuxtLink 
          to="/login"
          class="hidden sm:block text-sm font-bold px-4 py-2 rounded-lg hover:bg-white/5 transition-all"
        >
          Iniciar Sesión
        </NuxtLink>
        <NuxtLink to="/registro">
          <ui-button 
            variant="primary" 
            size="small" 
          >
            Unirse
          </ui-button>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
