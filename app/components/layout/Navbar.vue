<script setup lang="ts">
// Navigation Bar Component
const { user, isAuthenticated, logout } = useAuth()
const router = useRouter()
const showUserMenu = ref(false)

// Handle logout
const handleLogout = async () => {
  showUserMenu.value = false
  await logout()
  router.push('/login')
}

// Close menu when clicking outside
const userMenuRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (process.client) {
    document.addEventListener('click', (e) => {
      if (userMenuRef.value && !userMenuRef.value.contains(e.target as Node)) {
        showUserMenu.value = false
      }
    })
  }
})
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
      
      <!-- Not Authenticated -->
      <div v-if="!isAuthenticated" class="flex items-center gap-4">
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

      <!-- Authenticated -->
      <div v-else class="flex items-center gap-4">
        <NuxtLink 
          to="/catalogo"
          class="hidden sm:block text-sm font-bold px-4 py-2 rounded-lg hover:bg-white/5 transition-all"
        >
          Catálogo
        </NuxtLink>
        
        <!-- User Menu -->
        <div ref="userMenuRef" class="relative">
          <button
            @click="showUserMenu = !showUserMenu"
            class="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 transition-all"
          >
            <div class="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
              <span class="material-symbols-outlined text-on-primary-container text-sm">
                person
              </span>
            </div>
            <span class="hidden sm:block text-sm font-medium text-on-background max-w-[150px] truncate">
              {{ user?.email || 'Usuario' }}
            </span>
            <span class="material-symbols-outlined text-sm text-on-surface-variant">
              {{ showUserMenu ? 'expand_less' : 'expand_more' }}
            </span>
          </button>

          <!-- Dropdown Menu -->
          <Transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <div
              v-show="showUserMenu"
              class="absolute right-0 mt-2 w-56 bg-surface-variant border border-outline rounded-xl shadow-2xl overflow-hidden"
            >
              <div class="px-4 py-3 border-b border-outline/30">
                <p class="text-xs font-bold text-primary uppercase tracking-wider">Mi Cuenta</p>
                <p class="text-sm text-on-background truncate mt-1">{{ user?.email }}</p>
              </div>
              
              <div class="py-2">
                <NuxtLink
                  to="/perfil"
                  @click="showUserMenu = false"
                  class="flex items-center gap-3 px-4 py-2 text-sm text-on-background hover:bg-primary/10 transition-colors"
                >
                  <span class="material-symbols-outlined text-lg">person</span>
                  Mi Perfil
                </NuxtLink>
                
                <NuxtLink
                  to="/catalogo"
                  @click="showUserMenu = false"
                  class="flex items-center gap-3 px-4 py-2 text-sm text-on-background hover:bg-primary/10 transition-colors"
                >
                  <span class="material-symbols-outlined text-lg">explore</span>
                  Catálogo
                </NuxtLink>
                
                <NuxtLink
                  to="/crear-pasaporte"
                  @click="showUserMenu = false"
                  class="flex items-center gap-3 px-4 py-2 text-sm text-on-background hover:bg-primary/10 transition-colors"
                >
                  <span class="material-symbols-outlined text-lg">add_circle</span>
                  Crear Pasaporte
                </NuxtLink>
              </div>
              
              <div class="border-t border-outline/30 py-2">
                <button
                  @click="handleLogout"
                  class="flex items-center gap-3 px-4 py-2 text-sm text-error hover:bg-error/10 transition-colors w-full text-left"
                >
                  <span class="material-symbols-outlined text-lg">logout</span>
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </header>
</template>
