<script setup lang="ts">
import { ref, computed } from 'vue'

// Use dashboard layout
// @ts-expect-error - Nuxt auto-import
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth']
})

// @ts-expect-error - Nuxt auto-import
const route = useRoute()
const passportId = route.params.id

// TODO: Obtener datos del pasaporte desde la API usando el passportId
// Datos de ejemplo para el prototipo
const userProfile = {
  name: 'Explorador Neón',
  level: 15,
  xp: 1240,
  role: 'Viajero Veterano',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKwfJfCnFjE5Egpbk7m1EroateXRYT9kJdFu7GqHzZ3ISQICuAw4pefQf3sxqhj1QLFYa0mRTg0nsXx9jusF_-fRdNmHE0W7FwS6qm1i0tRzZtYTxfpkBN8HpN_t3rAp2f2qzFcDSe-I2-AUHwmR-snE3DcsLQPOMetRMtm8ikZoBNIvpT6gnMFmyjUOIsdYsoC_SpPKUcKD79X3E8fLidiyV7TQHb0tYXf_n18k5Q_6s2v8Dbng4-CPsFTS-NoNgoZ2x9zcxark0W',
  progress: 65,
  completedCheckpoints: 13,
  totalCheckpoints: 20
}

interface Checkpoint {
  id: string
  name: string
  category: string
  image: string
  completed: boolean
  completedDate?: string
  stars?: number
  locked?: boolean
  requiredLevel?: number
}

const checkpoints: Checkpoint[] = [
  {
    id: '1',
    name: 'Torre del Destello',
    category: 'Metrópolis',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmS_S6plqArGL339k0o7RzdcPMLDy7oyqIhJYbXyIvawUA2Gz4EO34qfHtXTi5bNkr4ffB1vSgtdhqwWxhHl9mQif7iZIGXcFTm7Q-kxUjpBnpRwCeN-SHm-SqcWFGGzBP5Re-Cnf_wlpsccnr67-rb3wmO-vfuAbvbAeUcGAvDtaM1Y5p5xP-xppQDeLDs2HDxacVC6SSJvfA2Hl6dvUPWt-1Lwm74yFgCs1J1iB-p8SvOD1nThpjvIBBLPpLhPP5VgAR9js1fP_8',
    completed: true,
    completedDate: '12 de Oct',
    stars: 3
  },
  {
    id: '2',
    name: 'Valle Fluorescente',
    category: 'Naturaleza',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbVaLHaT2Ee2m3516g2iB3TBJBSyyUH5JZ5bACdiHYgFrqRS4GRo6sVKG0Xid8zIglQTisYlLVu_CfZGbEUl8nTRLc7NCss3ZBaEtPT3rRwgs--p_-KjrZnGjKo5UpC15UeiJoOm6v4xbaDdpYpqI7pvvFV4TQHA_iLT6MzSB77LWAxSzLNbDeMXruPM9WLT5Mg0CENGV2SNNtf2gne6ao3S00xemVXDMEJG0pCB0bf3AJs3pYF7JhGTzsvs-_1qngd82yt7B_3iML',
    completed: true,
    completedDate: '05 de Oct',
    stars: 2
  },
  {
    id: '3',
    name: 'Fábrica de Luces',
    category: 'Industrial',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOrk9wr_mp3SNoCmYfeqLBMsTv0SQHxCXsgEzIa90pKpiHkBbREfiHxOWIZ4ejGxMHGjQ5g8w_C2rwGsBALCYLX3BAyC_4XVah5L8vocTk9FtgbYMvsFghOwM17_CS1nz_JtLzSaeVTtvrk2muIwNc5w4nD18ioKEJWT402el7QcAG3cfzEfpGXosNHjnSaWL3RJf1WxBimOOwRLyhbH20f3grgMPd3qz0XvjW8_VKW3xkwe65brhKhCOc_K750cUnqDffE63O8KzP',
    completed: false,
    locked: true,
    requiredLevel: 18
  },
  {
    id: '4',
    name: 'Dunas de Cuarzo',
    category: 'Desierto',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlBGVgIunAcmn5geLD-9v7FWYWEmJiWLjqgpWMQphSLq-J_9LIRkk3iqgaInKnPVI9a8OjwDYMFcjBw0RA8r6ILUnuSlYu91hY3nQVdbB_nB8BVNMlbI6Ptq_GYY6H7iBeNOBvvEMKzSAKdoYoiwFOMEahhU-SEIKpQG1WQ3i9SN8UPV1VytBeMJbLtvRJLaR_Rq87-x4aFhmB50i8ctpXyqBQChpZVSsQiBxHRkM_gItTpoXHuVU3l6BFHnYo3w1oIrTaE4YAz62z',
    completed: false,
    locked: false
  }
]

const activeFilter = ref('all')

const filteredCheckpoints = computed(() => {
  if (activeFilter.value === 'completed') {
    return checkpoints.filter(c => c.completed)
  }
  if (activeFilter.value === 'pending') {
    return checkpoints.filter(c => !c.completed)
  }
  return checkpoints
})
</script>

<template>
  <div class="p-6 lg:p-10">
    <div class="max-w-6xl mx-auto">
      <!-- User Profile & Progress Section -->
      <div class="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between bg-primary/5 p-6 rounded-2xl border border-primary/10">
            <div class="flex items-center gap-5">
              <div class="relative">
                <div class="size-20 rounded-full border-2 border-primary p-1">
                  <div 
                    class="size-full rounded-full bg-cover bg-center" 
                    :style="`background-image: url('${userProfile.avatar}')`"
                  />
                </div>
                <div class="absolute -bottom-1 -right-1 bg-primary text-background-dark text-[10px] font-bold px-2 py-0.5 rounded-full">
                  LVL {{ userProfile.level }}
                </div>
              </div>
              <div>
                <h1 class="text-2xl font-bold">{{ userProfile.name }}</h1>
                <p class="text-primary/70 font-medium">{{ userProfile.role }} • {{ userProfile.xp }} XP</p>
              </div>
            </div>
            <div class="flex flex-col gap-2 min-w-[280px]">
              <div class="flex justify-between items-end">
                <span class="text-sm font-semibold">Progreso de Temporada</span>
                <span class="text-primary font-bold">{{ userProfile.progress }}%</span>
              </div>
              <div class="h-3 w-full bg-primary/20 rounded-full overflow-hidden">
                <div 
                  class="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(37,244,37,0.5)]" 
                  :style="`width: ${userProfile.progress}%`"
                />
              </div>
              <p class="text-xs text-on-surface-variant">
                {{ userProfile.completedCheckpoints }} de {{ userProfile.totalCheckpoints }} checkpoints completados este mes
              </p>
            </div>
          </div>

          <!-- Filters & Stats -->
          <div class="flex flex-wrap gap-4 mb-8">
            <button 
              @click="activeFilter = 'all'"
              :class="activeFilter === 'all' ? 'bg-primary text-background-dark font-bold' : 'bg-primary/10 text-on-surface-variant font-medium hover:bg-primary/20'"
              class="px-5 py-2 rounded-full text-sm"
            >
              Todos los Sitios
            </button>
            <button 
              @click="activeFilter = 'completed'"
              :class="activeFilter === 'completed' ? 'bg-primary text-background-dark font-bold' : 'bg-primary/10 text-on-surface-variant font-medium hover:bg-primary/20'"
              class="px-5 py-2 rounded-full text-sm"
            >
              Completados ({{ checkpoints.filter(c => c.completed).length }})
            </button>
            <button 
              @click="activeFilter = 'pending'"
              :class="activeFilter === 'pending' ? 'bg-primary text-background-dark font-bold' : 'bg-primary/10 text-on-surface-variant font-medium hover:bg-primary/20'"
              class="px-5 py-2 rounded-full text-sm"
            >
              Pendientes ({{ checkpoints.filter(c => !c.completed).length }})
            </button>
          </div>

          <!-- Checkpoints Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Completed Checkpoints -->
            <div 
              v-for="checkpoint in filteredCheckpoints.filter(c => c.completed)" 
              :key="checkpoint.id"
              class="group relative overflow-hidden rounded-2xl bg-surface-variant border border-primary/20 p-4 transition-all hover:border-primary/50"
            >
              <div class="flex gap-4">
                <div class="relative size-24 shrink-0 rounded-xl overflow-hidden">
                  <div class="absolute inset-0 bg-primary/20 z-10" />
                  <div 
                    class="size-full bg-cover bg-center" 
                    :style="`background-image: url('${checkpoint.image}')`"
                  />
                  <!-- Neon Seal -->
                  <div class="absolute inset-0 z-20 flex items-center justify-center rotate-[-15deg]">
                    <div class="border-4 border-primary text-primary px-2 py-1 rounded font-black text-xs uppercase tracking-tighter bg-background-dark/80 shadow-[0_0_15px_rgba(37,244,37,0.8)]">
                      VISITADO
                    </div>
                  </div>
                </div>
                <div class="flex flex-col justify-center">
                  <span class="text-[10px] font-bold text-primary uppercase tracking-widest">
                    {{ checkpoint.category }}
                  </span>
                  <h3 class="text-lg font-bold">{{ checkpoint.name }}</h3>
                  <p class="text-sm text-on-surface-variant">
                    Completado el {{ checkpoint.completedDate }}
                  </p>
                  <div class="mt-2 flex gap-1">
                    <span 
                      v-for="star in checkpoint.stars" 
                      :key="star"
                      class="material-symbols-outlined text-primary text-xs" 
                      style="font-variation-settings: 'FILL' 1"
                    >
                      star
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pending Checkpoints -->
            <div 
              v-for="checkpoint in filteredCheckpoints.filter(c => !c.completed)" 
              :key="checkpoint.id"
              :class="checkpoint.locked ? 'opacity-70 grayscale' : 'opacity-70'"
              class="group relative overflow-hidden rounded-2xl bg-surface-variant/50 border border-outline p-4"
            >
              <div class="flex gap-4">
                <div class="relative size-24 shrink-0 rounded-xl overflow-hidden bg-surface-variant">
                  <div 
                    class="size-full bg-cover bg-center opacity-40" 
                    :style="`background-image: url('${checkpoint.image}')`"
                  />
                  <div v-if="checkpoint.locked" class="absolute inset-0 flex items-center justify-center z-20">
                    <span class="material-symbols-outlined text-on-surface-variant text-3xl">lock</span>
                  </div>
                </div>
                <div class="flex flex-col justify-center">
                  <span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                    {{ checkpoint.category }}
                  </span>
                  <h3 class="text-lg font-bold">{{ checkpoint.name }}</h3>
                  <p class="text-sm text-on-surface-variant">
                    {{ checkpoint.locked ? `Bloqueado • Nivel ${checkpoint.requiredLevel} requerido` : 'Pendiente de visita' }}
                  </p>
                  <button class="mt-2 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full self-start">
                    {{ checkpoint.locked ? 'Ver ubicación' : 'Marcar Ruta' }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Map Integration Section -->
          <div class="mt-12">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary">map</span>
              Mapa de Operaciones
            </h2>
            <div class="relative h-[400px] w-full rounded-3xl overflow-hidden border border-primary/20 group">
              <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 bg-surface-variant" />
              <div class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />
              
              <!-- Map UI Overlays -->
              <div class="absolute top-4 right-4 flex flex-col gap-2">
                <button class="bg-background-dark/80 backdrop-blur-md p-2 rounded-lg border border-primary/20 text-primary">
                  <span class="material-symbols-outlined">add</span>
                </button>
                <button class="bg-background-dark/80 backdrop-blur-md p-2 rounded-lg border border-primary/20 text-primary">
                  <span class="material-symbols-outlined">remove</span>
                </button>
              </div>
              
              <div class="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div class="bg-background-dark/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-primary/30 flex items-center gap-4">
                  <div class="size-3 rounded-full bg-primary animate-pulse" />
                  <div>
                    <p class="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Ubicación Actual</p>
                    <p class="font-bold">Sector 7 - El Nucleo</p>
                  </div>
                </div>
                <button class="bg-primary text-background-dark font-black px-6 py-3 rounded-2xl flex items-center gap-2 shadow-[0_0_20px_rgba(37,244,37,0.4)]">
                  <span class="material-symbols-outlined">navigation</span>
                  ESCANEAR ÁREA
                </button>
              </div>
            </div>
          </div>

          <!-- Bottom Navigation Mini -->
          <div class="mt-16 flex justify-center gap-10 border-t border-primary/10 py-8">
            <NuxtLink to="/pasaporte" class="flex flex-col items-center gap-1 text-primary group">
              <span class="material-symbols-outlined transition-transform group-hover:-translate-y-1">auto_stories</span>
              <span class="text-[10px] font-bold uppercase tracking-widest">Pasaporte</span>
            </NuxtLink>
            <NuxtLink to="/logros" class="flex flex-col items-center gap-1 text-on-surface-variant group">
              <span class="material-symbols-outlined transition-transform group-hover:-translate-y-1">emoji_events</span>
              <span class="text-[10px] font-bold uppercase tracking-widest">Logros</span>
            </NuxtLink>
            <NuxtLink to="/social" class="flex flex-col items-center gap-1 text-on-surface-variant group">
              <span class="material-symbols-outlined transition-transform group-hover:-translate-y-1">hub</span>
              <span class="text-[10px] font-bold uppercase tracking-widest">Social</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </template>
