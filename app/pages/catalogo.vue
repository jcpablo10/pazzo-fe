<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth']
})

// Filtro activo
const filtroActivo = ref('todos')
const ordenamiento = ref('populares')

// Datos de ejemplo de pasaportes
const pasaportes = ref([
  {
    id: 1,
    titulo: 'Tour Gourmet: Sabores del Valle',
    icono: 'restaurant',
    imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjrs6mJxxxRNVBcwY_i90avIrHy4YqnNlhy4fU0qdj4TDKKucCR35OMHiP2K8ht-8aLM1SiJ3kVhdyTbRzEKXxAPdHpAUJE9WowQ5d9b91gJorSg8VRPOZ2a6bRTVBFdBDHqVDAx9jnk5IgGcCS0hR-VqwcI1M6iU2efn9pgWLZYtHhPDzVoUsvsTBDty6kHV1unEZEke3d7TgJteqPM2xbxLNm6hoim3MdEijPmSk29-E7vGPlWvLSvxFz-YjCbZiKy5BKDSmMsww',
    distancia: '45km',
    elevacion: '+300m',
    nivel: 'Principiante',
    desbloqueado: true
  },
  {
    id: 2,
    titulo: 'Ruta de los Volcanes Eternos',
    icono: 'volcano',
    imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5YAHkAJQO_5faYqS4sGDmFkKHb-UmHI2PdGQI-bjkQ_1CeG70uw_g_2G17YNTXCsLMDgEaFLaiyXwa2cyoz_O3mB84cNc9VdO1wktmtB_8gunBEVAOzD_SVAnSwrF334RcIxLhfR98V1nM_UuvNUQJ-oC_zz5h9f5BIOa1AChrZJnJUEioPa3HvvSpJKsbphaNrUwBVTj2ewHneQga4I-f3Sm8eAPYdKrkz1xRQ3rrhNJJvxK1RWui75htxx93TuMD8lOBnEwM217',
    distancia: '120km',
    elevacion: '+2.5k m',
    nivel: 'Avanzado',
    desbloqueado: false,
    requisito: 'Requiere nivel 15 o completar "Paso de Montaña"'
  },
  {
    id: 3,
    titulo: 'Costa Brava: Vientos del Sur',
    icono: 'waves',
    imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd-hEUdE0_Zc3VOeLQxW5rqCo-rp58FOwr9gdUpsMvzW_OelYVt1eiAqg5-YtFrldq13Xt1CJxEZsKMXwNpn8Ux3T-7ytQGAhFnt4X4itoMiQT-eFJiOWUDWz7RbRQ8bnJWcXbkBgvInFDtRsLATmqQKAT6vPExFYwTtv7TqtB1MvKKy8qMPk23jwFp9LzphhIDuuD3AsMT99s_5S4Ytdj55pPTJddbJ4p6mcAn1Dl6U6Y9mNhDug6-GHGn4RalO1ERbBrvAmzHdym',
    distancia: '85km',
    elevacion: '+800m',
    nivel: 'Intermedio',
    desbloqueado: true
  },
  {
    id: 4,
    titulo: 'Desafío Andino: Cruce de Gigantes',
    icono: 'landscape',
    imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnQ7uIbafwsxYwq620NsE0FbrMS794qjeF3VxjJNd350Pv6yez4e_vsSRxlG3jEArZ60xWdXlr9HGIfYVOm9It_10zo7jS4QrJtC-tEKkGtsjKtZzjwbhfbakzrZ5aImiHASF7wAkz3E-OT7awZJJWtgcwodJuqiTSR0jMbTspcB_ZIjsRRBGtXCamDqsZuqsdiqumpCskzPOiR5U5rCbyGRQlfP8mcmXY0pdtl9M4gOJ49feX8nqohZjCTzjREKrtosnSv1-cNgUu',
    distancia: '210km',
    elevacion: '+4.2k m',
    nivel: 'Avanzado',
    desbloqueado: false,
    requisito: 'Requiere Verificación de Condición Física'
  },
  {
    id: 5,
    titulo: 'Bosque Místico: Gravel Zen',
    icono: 'forest',
    imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDruf4vjtu_iCYCh_1HRxb--cwZe4vyCT8Lg6V9gws8yTVnyYgenyTrJG2YaWyMU0q7Tnj1vsL_VsKIV_zIw0E8QhVSrkz65VKJUSzWmNrFpwY1TXr65tG6uyjNsUSq-1Y1dbBdOyEAO4cds5AohurTmGqyZ5CSOduwSksiFsNa8xRb5NkeZir2VbMdGA7uNYVs9EWM59KziaoBvxIFlATmhtqydJe7pVGxYADEXQjk94lCFSPDgSX_LIZ5ULPqS0mWxgMN9IkTjNbu',
    distancia: '32km',
    elevacion: '+150m',
    nivel: 'Principiante',
    desbloqueado: true
  },
  {
    id: 6,
    titulo: 'Metrópolis Circular: Ruta Urbana',
    icono: 'location_city',
    imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTLNVbMjE2xECQz6a_KKKyHbjsZ6pqBEwUfDLRgQlZA7yZKyE5xB7yKcJ7K3BJ8x7jBchbVA6vw4T7YSK-fG4NBNX4fgLV8XFHTR7ViJTW8CWVV0QPxDMHyEQi-L2wvr5bqVCPx4c3cJb6HRjLNBtjHcZb4G-K0MdJpYq2D7mwkX0xHBJt5xKx5j7jKH7jHJBJHXK5J7jKH7jHJBJHXK5J7jKH7jHJBJHXK5J7jKH7jHJBJHXK5J7jKH7jHJBJHXK5J7jKH7jHJ',
    distancia: '25km',
    elevacion: '+50m',
    nivel: 'Principiante',
    desbloqueado: true
  }
])

const filtros = [
  { id: 'todos', label: 'Todos' },
  { id: 'principiante', label: 'Principiante' },
  { id: 'intermedio', label: 'Intermedio' },
  { id: 'avanzado', label: 'Avanzado' },
  { id: 'eventos', label: 'Eventos Especiales' }
]
</script>

<template>
  <div class="flex min-h-screen">
    <!-- Sidebar Navigation -->
    <aside class="w-64 border-r border-primary/10 p-6 flex flex-col gap-8">
      <div class="flex items-center gap-3 text-primary">
        <span class="material-symbols-outlined text-3xl font-bold">directions_bike</span>
        <h1 class="text-xl font-bold tracking-tight">BIKEPASS</h1>
      </div>

      <nav class="flex flex-col gap-2">
        <NuxtLink to="/catalogo" class="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium">
          <span class="material-symbols-outlined">explore</span>
          Explorar
        </NuxtLink>
        <NuxtLink to="#" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors text-on-background">
          <span class="material-symbols-outlined">map</span>
          Mis Rutas
        </NuxtLink>
        <NuxtLink to="#" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors text-on-background">
          <span class="material-symbols-outlined">workspace_premium</span>
          Logros
        </NuxtLink>
        <NuxtLink to="#" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors text-on-background">
          <span class="material-symbols-outlined">group</span>
          Comunidad
        </NuxtLink>
        <NuxtLink to="#" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors text-on-background">
          <span class="material-symbols-outlined">settings</span>
          Ajustes
        </NuxtLink>
      </nav>

      <div class="mt-auto pt-6 border-t border-primary/10">
        <div class="flex items-center gap-3">
          <div class="size-10 rounded-full bg-primary/20 border border-primary/50 overflow-hidden">
            <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByvGnIkv14yJTNbOJFjACTHXphW1guNSVbFF0YNvx3WOMnrLHxxtcBXdf9zl3J-uIopKV5k-SEAiIhTwIVgNY1UuMQRjwUl_5tPXIzXI9kJHNxX1rDUx5JSSeMl1yhPcAXhZvztiWFU6CLRwzH2PPn5yidLbF8C8xa0Lt2ws3R-cNecr9qRGkO4dELz1sxU3Njup3l8zF4PbDcIk2JZG4iz2b4x_dFaNobYQ57HBMhZQfnzkrePvXFdHkumVWPtX5_X7BN9nefgX2K" alt="Profile" />
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-bold text-on-background">Alex Rivera</span>
            <span class="text-xs text-primary">Nivel Pro • 1.2k km</span>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col">
      <!-- Top Header -->
      <header class="h-16 border-b border-primary/10 flex items-center justify-between px-8 bg-background-dark/50 backdrop-blur-md sticky top-0 z-10">
        <div class="flex items-center gap-4 flex-1 max-w-xl">
          <div class="relative w-full">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
            <input 
              class="w-full bg-surface-variant border-none rounded-lg py-2 pl-10 pr-4 text-sm text-on-background placeholder:text-on-surface-variant focus:ring-1 focus:ring-primary" 
              placeholder="Buscar aventuras, rutas o destinos..." 
              type="text"
            />
          </div>
        </div>
        <div class="flex items-center gap-4">
          <button class="p-2 rounded-full hover:bg-primary/10 text-on-surface-variant">
            <span class="material-symbols-outlined">notifications</span>
          </button>
          <NuxtLink to="/crear-pasaporte">
            <Button class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm">add_circle</span>
              Nueva Ruta
            </Button>
          </NuxtLink>
        </div>
      </header>

      <!-- Content Area -->
      <div class="p-8 space-y-8">
        <!-- Hero Section -->
        <div class="relative overflow-hidden rounded-xl bg-linear-to-br from-primary/20 to-transparent border border-primary/10 p-8 lg:p-12">
          <div class="max-w-2xl relative z-10">
            <h2 class="text-4xl font-black mb-4 leading-tight text-on-background">
              PASAPORTES DE<br/>
              <span class="text-primary uppercase">Aventura</span>
            </h2>
            <p class="text-on-surface-variant text-lg mb-8">
              Desbloquea desafíos épicos, colecciona sellos digitales y compite con la comunidad global de ciclistas.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/crear-pasaporte">
                <Button>Empezar ahora</Button>
              </NuxtLink>
              <Button variant="outline" class="border-primary/30 text-primary hover:bg-primary/5">
                Ver Ranking
              </Button>
            </div>
          </div>
          <div class="absolute right-[-10%] top-[-20%] opacity-10 select-none pointer-events-none">
            <span class="material-symbols-outlined text-[300px]">public</span>
          </div>
        </div>

        <!-- Filters -->
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex gap-2 overflow-x-auto pb-2">
            <button 
              v-for="filtro in filtros" 
              :key="filtro.id"
              @click="filtroActivo = filtro.id"
              :class="[
                'px-4 py-2 font-bold rounded-full text-sm whitespace-nowrap transition-colors',
                filtroActivo === filtro.id 
                  ? 'bg-primary text-background-dark' 
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              ]"
            >
              {{ filtro.label }}
            </button>
          </div>
          <div class="flex items-center gap-2 text-sm text-on-surface-variant">
            <span>Ordenar por:</span>
            <select 
              v-model="ordenamiento"
              class="bg-transparent border-none text-primary font-bold focus:ring-0 cursor-pointer"
            >
              <option value="populares">Más Populares</option>
              <option value="nuevos">Nuevos</option>
              <option value="dificultad">Dificultad</option>
            </select>
          </div>
        </div>

        <!-- Grid of Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="pasaporte in pasaportes" 
            :key="pasaporte.id"
            class="group flex flex-col bg-surface-variant/40 border border-primary/10 rounded-xl overflow-hidden hover:border-primary/40 transition-all hover:shadow-[0_0_20px_rgba(37,244,37,0.1)]"
            :class="{ 'opacity-80 hover:opacity-100': !pasaporte.desbloqueado }"
          >
            <!-- Imagen -->
            <div class="relative aspect-3/4 overflow-hidden">
              <img 
                :src="pasaporte.imagen" 
                :alt="pasaporte.titulo"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                :class="{ 'grayscale group-hover:grayscale-0': !pasaporte.desbloqueado }"
              />
              
              <!-- Badge de estado -->
              <div v-if="pasaporte.desbloqueado" class="absolute top-4 left-4">
                <span class="bg-primary/90 text-background-dark text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">
                  Desbloqueado
                </span>
              </div>

              <!-- Overlay de bloqueado -->
              <div 
                v-else
                class="absolute inset-0 bg-background-dark/60 flex flex-col items-center justify-center gap-2 group-hover:bg-background-dark/20 transition-all"
              >
                <span class="material-symbols-outlined text-4xl text-primary drop-shadow-[0_0_8px_rgba(37,244,37,0.5)]">
                  lock
                </span>
                <span class="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                  Bloqueado
                </span>
              </div>
            </div>

            <!-- Contenido -->
            <div class="p-5 space-y-3">
              <div class="flex justify-between items-start">
                <h3 class="font-bold text-lg leading-snug text-on-background">{{ pasaporte.titulo }}</h3>
                <span 
                  class="material-symbols-outlined"
                  :class="pasaporte.desbloqueado ? 'text-primary' : 'text-on-surface-variant'"
                >
                  {{ pasaporte.icono }}
                </span>
              </div>

              <div class="flex items-center gap-4 text-xs text-on-surface-variant">
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">distance</span>
                  {{ pasaporte.distancia }}
                </span>
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">trending_up</span>
                  {{ pasaporte.elevacion }}
                </span>
              </div>

              <!-- Footer de la tarjeta -->
              <div v-if="pasaporte.desbloqueado" class="pt-2 border-t border-primary/5 flex items-center justify-between">
                <span class="text-xs font-medium text-on-surface-variant">
                  Nivel: <span class="text-primary">{{ pasaporte.nivel }}</span>
                </span>
                <span class="material-symbols-outlined text-primary text-xl">chevron_right</span>
              </div>
              <div v-else class="pt-2 border-t border-primary/5">
                <p class="text-[10px] text-on-surface-variant italic">{{ pasaporte.requisito }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
