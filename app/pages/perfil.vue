<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth'],
})

const { user, logout, isLoading } = useAuth()
const router = useRouter()

// Handle logout
const handleLogout = async () => {
  await logout()
  router.push('/login')
}
</script>

<template>
  <div class="container mx-auto px-6 py-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-on-background mb-2">Mi Perfil</h1>
        <p class="text-on-surface-variant">Administra tu información personal</p>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>

      <!-- Profile Card -->
      <div v-else-if="user" class="bg-surface-variant/40 backdrop-blur-xl border border-outline/20 rounded-3xl p-8 shadow-2xl">
        <!-- User Info -->
        <div class="flex items-center gap-6 mb-8 pb-8 border-b border-outline/30">
          <div class="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center shadow-[0_0_20px_rgba(37,244,37,0.3)]">
            <span class="material-symbols-outlined text-on-primary-container text-5xl">
              person
            </span>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-on-background mb-1">{{ user.email }}</h2>
            <p class="text-on-surface-variant">
              <span :class="[
                'inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium',
                user.is_active ? 'bg-primary/20 text-primary' : 'bg-error/20 text-error'
              ]">
                <span class="material-symbols-outlined text-sm">
                  {{ user.is_active ? 'check_circle' : 'cancel' }}
                </span>
                {{ user.is_active ? 'Cuenta Activa' : 'Cuenta Inactiva' }}
              </span>
            </p>
          </div>
        </div>

        <!-- User Details -->
        <div class="space-y-6 mb-8">
          <div>
            <label class="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
              ID de Usuario
            </label>
            <p class="text-on-background text-lg">{{ user.id }}</p>
          </div>

          <div>
            <label class="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
              Correo Electrónico
            </label>
            <p class="text-on-background text-lg">{{ user.email }}</p>
          </div>

          <div v-if="user.created_at">
            <label class="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
              Miembro Desde
            </label>
            <p class="text-on-background text-lg">
              {{ new Date(user.created_at).toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              }) }}
            </p>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex flex-col sm:flex-row gap-4 pt-8 border-t border-outline/30">
          <button
            class="flex-1 bg-surface-variant border border-outline text-on-background py-3 px-6 rounded-xl hover:bg-surface-variant/80 transition-colors font-bold"
            disabled
          >
            <span class="material-symbols-outlined inline-block mr-2 align-middle">edit</span>
            Editar Perfil (Próximamente)
          </button>
          
          <button
            @click="handleLogout"
            class="flex-1 bg-error/10 border border-error text-error py-3 px-6 rounded-xl hover:bg-error/20 transition-colors font-bold"
          >
            <span class="material-symbols-outlined inline-block mr-2 align-middle">logout</span>
            Cerrar Sesión
          </button>
        </div>
      </div>

      <!-- Error State -->
      <div v-else class="bg-error/10 border border-error rounded-xl p-8 text-center">
        <span class="material-symbols-outlined text-error text-6xl mb-4">error</span>
        <p class="text-error text-lg">No se pudo cargar la información del usuario</p>
      </div>
    </div>
  </div>
</template>
