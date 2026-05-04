<script setup lang="ts">
// Sidebar component for dashboard layout
</script>

<template>
  <aside class="w-64 shrink-0 border-r border-primary/10 bg-background-dark flex flex-col">
    <div class="p-6 flex items-center gap-3">
      <div class="bg-primary/20 p-2 rounded-lg text-primary">
        <span class="material-symbols-outlined text-3xl">pedal_bike</span>
      </div>
      <h2 class="text-xl font-bold tracking-tight text-on-background">Enbiciados</h2>
    </div>
    
    <nav class="flex-1 px-4 py-4 space-y-2">
      <NuxtLink
        to="/dashboard"
        class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-primary/10 hover:text-primary rounded-xl transition-all"
      >
        <span class="material-symbols-outlined">dashboard</span>
        <span class="font-medium">Dashboard</span>
      </NuxtLink>
      
      <NuxtLink
        to="/crear-pasaporte"
        class="flex items-center gap-3 px-4 py-3 bg-primary text-on-primary-container rounded-xl transition-all shadow-[0_0_10px_rgba(37,244,37,0.3)]"
      >
        <span class="material-symbols-outlined">confirmation_number</span>
        <span class="font-medium">Pasaportes</span>
      </NuxtLink>
      
      <NuxtLink
        to="/rutas"
        class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-primary/10 hover:text-primary rounded-xl transition-all"
      >
        <span class="material-symbols-outlined">map</span>
        <span class="font-medium">Rutas</span>
      </NuxtLink>
      
      <NuxtLink
        to="/ciclistas"
        class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-primary/10 hover:text-primary rounded-xl transition-all"
      >
        <span class="material-symbols-outlined">group</span>
        <span class="font-medium">Ciclistas</span>
      </NuxtLink>
      
      <NuxtLink
        to="/ajustes"
        class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-primary/10 hover:text-primary rounded-xl transition-all"
      >
        <span class="material-symbols-outlined">settings</span>
        <span class="font-medium">Ajustes</span>
      </NuxtLink>
    </nav>
    
    <div class="p-4 mt-auto">
      <div class="p-4 bg-primary/5 rounded-2xl border border-primary/10">
        <div class="flex items-center gap-3 mb-3">
          <div class="size-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
            <span class="material-symbols-outlined text-primary">person</span>
          </div>
          <div>
            <p class="text-sm font-bold text-on-background">Admin Pro</p>
            <p class="text-xs text-primary">Organizador Senior</p>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
