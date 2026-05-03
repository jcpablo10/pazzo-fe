<script setup lang="ts">
// Landing Page - Enbiciados
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative w-full">
      <div class="px-6 lg:px-20 py-12 lg:py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div class="flex flex-col gap-8 text-left z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span class="text-xs font-bold text-primary uppercase tracking-widest">Nueva Temporada 2024</span>
          </div>
          <h1 class="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
            Tu Pasaporte a la <span class="text-primary">Aventura</span>
          </h1>
          <p class="text-lg lg:text-xl text-slate-400 max-w-lg leading-relaxed">
            Explora, Rueda, Colecciona. El primer pasaporte digital para los amantes de las rutas, la libertad y los retos épicos.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <UiButton 
              variant="primary" 
              size="large"
            >
              Crea tu primera aventura
              <template #append-icon>
                <span class="material-symbols-outlined">arrow_forward</span>
              </template>
            </UiButton>
            <UiButton 
              variant="ghost" 
              size="large"
            >
              <template #prepend-icon>
                <span class="material-symbols-outlined">play_circle</span>
              </template>
              Ver Video
            </UiButton>
          </div>
        </div>
        <div class="relative h-125 lg:h-150 w-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-primary/20">
          <div class="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent z-10"></div>
          <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMk-DUED3uOa6r6ZAhNIQJlrcNX_3JaILFAdGgkFTru6vAaiql4gsDT-Vx9jA6PjgkMmZWSZXaSAhrQxhSUXpjEWuDpleENRrQStx358ic3tSNSAD-NkXpf2pQnlzEMlpx2QeWxNBDnDSDDojuX6jdwkkbhQe9LE2xnekKkHupZ8AZijzhsMHPmLjKzbNvawyOL7gKufDBSZCFCYWO4zIk8dp-tGQ-dANTpIocT5a027bbY5lxLtcn_C6rH4sRqlK9yO1a5XIsZ-_K');"></div>
          <div class="absolute bottom-6 left-6 right-6 z-20 bg-background-dark/80 backdrop-blur-xl p-6 rounded-xl border border-white/10 flex items-center gap-4">
            <div class="size-12 rounded-full bg-primary flex items-center justify-center text-background-dark">
              <span class="material-symbols-outlined">verified</span>
            </div>
            <div>
              <p class="font-bold">Sello Desbloqueado</p>
              <p class="text-sm text-slate-400 tracking-wide">Pico de la Libertad - 2,450m</p>
            </div>
            <div class="ml-auto text-primary font-black text-xl">+500 XP</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Category Grid -->
    <section class="px-6 lg:px-20 py-24 bg-slate-900/30">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col gap-4 mb-16 text-center">
          <h2 class="text-3xl lg:text-5xl font-black">Vive la Experiencia <span class="text-primary">Pazzo</span></h2>
          <p class="text-slate-400 text-lg max-w-2xl mx-auto">
            Diseñado para los que no se detienen. Registra cada parada y colecciona sellos exclusivos en todas tus pasiones.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Ciclismo -->
          <div class="group relative overflow-hidden rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-primary/50 transition-all">
            <div class="aspect-video w-full overflow-hidden">
              <div class="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_z-A-k0-hyXnL84dHfUvR27Sl2SWOg_ohfrnab9PORvRfA5RyNzmTUCkwsITIHUxjHOZL5dIUsrinrY7v_JQRPmdV5h8l0vpIu9O_ODp5DuDWrkuJOyN6YwYbKR-mdWeHX0HhUxNRsD5Pbf6oNMvhTRRSXPqWzHyjrEXLNnYp5raz5TaNPP226cL_1oSKA_qjnKgoL_ctkZVOK8WTKa3I-f5tCHitLb4eEeNTe0sJjp1Lsv7r0ZEWngB6nOPHRnJIzRaxYjFZo2D1');"></div>
            </div>
            <div class="p-8">
              <div class="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
                <span class="material-symbols-outlined text-3xl">mountain_flag</span>
              </div>
              <h3 class="text-2xl font-bold mb-3">Ciclismo Épico</h3>
              <p class="text-slate-400 leading-relaxed">
                Registra tus ascensos y conquista puertos de montaña icónicos. Obtén insignias digitales por cada desnivel acumulado.
              </p>
            </div>
          </div>
          <!-- Gastronomía -->
          <div class="group relative overflow-hidden rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-primary/50 transition-all">
            <div class="aspect-video w-full overflow-hidden">
              <div class="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8xFEQ9wmj4JXqTvuEReXIVoAPMorLBCLzoANVleZN2cYXgp43Usjg_NVaHMB91gsG5L4tet2fmKvwHivvThdIC73X5mZL90HymReXc5A7a8RqSqeZhhT0m7DjFuJm1J99CKC9X64yDhwH0vwglFdbAKz7DZtJsg5o8bbeRHMBpaScFMkw7tvnL0bgQpuzKKFRJOXxdWvDqTABO7XfEi67vO9fWW1t5kValLNJY_w_SXiMlPjwYt2so8FbcWGwvMv0gQXqgCgmRaFD');"></div>
            </div>
            <div class="p-8">
              <div class="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
                <span class="material-symbols-outlined text-3xl">restaurant</span>
              </div>
              <h3 class="text-2xl font-bold mb-3">Rutas Gastronómicas</h3>
              <p class="text-slate-400 leading-relaxed">
                Descubre los mejores puntos de hidratación y comida local para ciclistas. Sella tu pasaporte en cada parada culinaria.
              </p>
            </div>
          </div>
          <!-- Viajes -->
          <div class="group relative overflow-hidden rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-primary/50 transition-all">
            <div class="aspect-video w-full overflow-hidden">
              <div class="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAM3i_DdneMptdcq4zj5WrHV-hxFF1pQF8WHa4Fyy_qougDRGagf52EKvDlZ8uYTfafqp6FtfhncfxD6TwM74k8K_SjG1ZYcnyY5FO4CRYNW_FhfqzY-V2jV2LdHyWCbQ4oR-fZ4N2Nv2wvnz1bpq1F0_JaRU0CJNUkPzvwipKkVn0IkUZZIsta30B7UzBfDbnCEPI-FdDCudUHqxutzexwEliSn0rInE3xHA_ybsC3fxuRrAP2FUCk6iogVXU-WBLJ45P6bNL1pjBY');"></div>
            </div>
            <div class="p-8">
              <div class="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
                <span class="material-symbols-outlined text-3xl">map</span>
              </div>
              <h3 class="text-2xl font-bold mb-3">Viajes Inolvidables</h3>
              <p class="text-slate-400 leading-relaxed">
                Organiza tus travesías y guarda recuerdos de cada kilómetro recorrido. Crea tu propio diario de viaje interactivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="relative px-6 py-24 lg:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-primary/5 pointer-events-none"></div>
      <div class="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-10">
        <div class="size-20 rounded-full bg-primary/20 flex items-center justify-center text-primary animate-bounce">
          <span class="material-symbols-outlined text-4xl">travel_explore</span>
        </div>
        <h2 class="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
          ¿Listo para sellar tu próximo destino?
        </h2>
        <p class="text-xl text-slate-400">
          Únete a la comunidad de ciclistas y aventureros más grande y empieza a coleccionar logros hoy mismo. Es gratis y para siempre.
        </p>
        <div class="w-full max-w-md">
          <UiButton 
            variant="primary" 
            size="large"
            class="w-full text-xl"
          >
            Crea tu primera aventura
          </UiButton>
          <p class="mt-6 text-sm text-slate-500 font-medium uppercase tracking-widest">Disponible en iOS y Android</p>
        </div>
      </div>
    </section>
  </div>
</template>
