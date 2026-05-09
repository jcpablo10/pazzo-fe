<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { z } from 'zod'

definePageMeta({
  layout: 'default',
  middleware: 'guest'
})

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()

const token = computed(() => route.params.token as string)
const newPassword = ref('')
const confirmPassword = ref('')
const isSubmitting = ref(false)
const isValidating = ref(true)
const isTokenValid = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

// Password validation schema
const passwordSchema = z.object({
  newPassword: z.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .regex(/[A-Z]/, 'Debe contener al menos una mayúscula')
    .regex(/[0-9]/, 'Debe contener al menos un número'),
  confirmPassword: z.string()
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword']
})

// Validate token on mount
onMounted(async () => {
  await validateToken()
})

const validateToken = async () => {
  isValidating.value = true
  errorMessage.value = ''
  
  try {
    const baseURL = config.public.apiUrl || 'http://localhost:8000/api/v1'
    
    const response = await $fetch<{ valid: boolean }>('/users/password-reset/validate/', {
      baseURL,
      method: 'POST',
      body: {
        token: token.value
      }
    })
    
    isTokenValid.value = response.valid
    
    if (!response.valid) {
      errorMessage.value = 'El enlace de recuperación es inválido o ha expirado.'
    }
  } catch (error: any) {
    console.error('Error validating token:', error)
    isTokenValid.value = false
    errorMessage.value = 'El enlace de recuperación es inválido o ha expirado.'
  } finally {
    isValidating.value = false
  }
}

const handleSubmit = async () => {
  isSubmitting.value = true
  errorMessage.value = ''
  
  try {
    // Validate passwords
    const validation = passwordSchema.safeParse({
      newPassword: newPassword.value,
      confirmPassword: confirmPassword.value
    })
    
    if (!validation.success) {
      errorMessage.value = validation.error.errors[0].message
      isSubmitting.value = false
      return
    }
    
    const baseURL = config.public.apiUrl || 'http://localhost:8000/api/v1'
    
    // Call password reset confirm API
    await $fetch('/users/password-reset/confirm/', {
      baseURL,
      method: 'POST',
      body: {
        token: token.value,
        new_password: newPassword.value,
        confirm_password: confirmPassword.value
      }
    })
    
    successMessage.value = 'Tu contraseña ha sido restablecida exitosamente.'
    
    // Redirect to login after 2 seconds
    setTimeout(() => {
      router.push('/login')
    }, 2000)
    
  } catch (error: any) {
    console.error('Error resetting password:', error)
    errorMessage.value = error?.data?.detail || 'Ocurrió un error al restablecer tu contraseña. Inténtalo de nuevo.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <main class="min-h-screen flex flex-col items-center justify-center p-6">
    <!-- Auth Container -->
    <div class="w-full max-w-md">
      <!-- Logo Section -->
      <div class="flex flex-col items-center mb-12">
        <div class="relative mb-6">
          <div class="absolute inset-0 bg-primary-container/20 blur-2xl rounded-full"></div>
          <div class="relative w-24 h-24 bg-primary-container/20 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(37,244,37,0.3)]">
            <img 
              src="~/assets/pazzo/pazzo.logo.png"
              alt="Pazzo Logo" 
              class="w-16 h-16 object-contain"
            />
          </div>
        </div>
        <h1 class="font-display text-4xl font-black text-primary-container italic tracking-tighter drop-shadow-[0_0_10px_rgba(37,244,37,0.5)]">
          Pazzo
        </h1>
      </div>

      <!-- Form Panel -->
      <div class="bg-surface-variant/40 backdrop-blur-2xl border border-primary/20 p-8 rounded-xl shadow-2xl relative overflow-hidden">
        <!-- Subtle internal glow -->
        <div class="absolute -top-24 -right-24 w-48 h-48 bg-primary-container/5 rounded-full blur-3xl"></div>
        
        <div class="relative z-10 space-y-6">
          <!-- Validating Token -->
          <div v-if="isValidating" class="text-center space-y-4">
            <div class="flex justify-center">
              <div class="w-20 h-20 bg-primary-container/20 rounded-full flex items-center justify-center animate-pulse">
                <span class="material-symbols-outlined text-5xl text-primary-container">
                  verified_user
                </span>
              </div>
            </div>
            <h2 class="text-2xl font-bold text-on-surface">
              Validando enlace...
            </h2>
            <p class="text-on-surface-variant">
              Por favor espera mientras verificamos tu solicitud.
            </p>
          </div>

          <!-- Invalid Token -->
          <div v-else-if="!isTokenValid" class="text-center space-y-4">
            <div class="flex justify-center">
              <div class="w-20 h-20 bg-error/20 rounded-full flex items-center justify-center">
                <span class="material-symbols-outlined text-5xl text-error">
                  error
                </span>
              </div>
            </div>
            <h2 class="text-2xl font-bold text-on-surface">
              Enlace Inválido
            </h2>
            <p class="text-on-surface-variant">
              {{ errorMessage }}
            </p>
            <div class="pt-4">
              <NuxtLink 
                to="/recuperar-contrasena"
                class="inline-flex items-center gap-2 text-sm font-bold text-primary-container hover:text-primary transition-colors uppercase tracking-wider"
              >
                Solicitar Nuevo Enlace
                <span class="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </NuxtLink>
            </div>
          </div>

          <!-- Success Message -->
          <div v-else-if="successMessage" class="space-y-6">
            <div class="text-center space-y-4">
              <div class="flex justify-center">
                <div class="w-20 h-20 bg-primary-container/20 rounded-full flex items-center justify-center">
                  <span class="material-symbols-outlined text-5xl text-primary-container">
                    check_circle
                  </span>
                </div>
              </div>
              <h2 class="text-2xl font-bold text-on-surface">
                ¡Contraseña Restablecida!
              </h2>
              <p class="text-on-surface-variant leading-relaxed">
                {{ successMessage }} Serás redirigido al inicio de sesión...
              </p>
            </div>
          </div>

          <!-- Reset Password Form -->
          <form v-else @submit.prevent="handleSubmit" class="space-y-6">
            <div class="text-center space-y-2">
              <h2 class="text-2xl font-bold text-on-surface">
                Nueva Contraseña
              </h2>
              <p class="text-on-surface-variant leading-relaxed">
                Ingresa tu nueva contraseña. Debe tener al menos 8 caracteres, una mayúscula y un número.
              </p>
            </div>

            <!-- Error Message -->
            <div v-if="errorMessage" class="bg-error/10 border border-error/30 rounded-lg p-4">
              <p class="text-error text-sm">{{ errorMessage }}</p>
            </div>

            <FormsInput
              v-model="newPassword"
              type="password"
              label="Nueva Contraseña"
              placeholder="Mínimo 8 caracteres"
              prepend-icon="lock"
              required
            />

            <FormsInput
              v-model="confirmPassword"
              type="password"
              label="Confirmar Contraseña"
              placeholder="Repite tu contraseña"
              prepend-icon="lock"
              required
            />

            <UiButton
              type="submit"
              variant="primary"
              size="large"
              :disabled="isSubmitting || !newPassword || !confirmPassword"
              class="w-full shadow-[0_0_20px_rgba(37,244,37,0.3)]"
            >
              <template v-if="isSubmitting">
                Restableciendo...
              </template>
              <template v-else>
                Restablecer Contraseña
                <span class="material-symbols-outlined text-xl">
                  check
                </span>
              </template>
            </UiButton>

            <div class="pt-4 flex justify-center">
              <NuxtLink 
                to="/login"
                class="inline-flex items-center gap-2 text-sm font-bold text-primary-container hover:text-primary transition-colors uppercase tracking-wider"
              >
                <span class="material-symbols-outlined text-lg">
                  arrow_back
                </span>
                Volver al Inicio de Sesión
              </NuxtLink>
            </div>
          </form>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="mt-12 flex justify-center gap-8 opacity-20">
        <span class="material-symbols-outlined text-4xl">pedal_bike</span>
        <span class="material-symbols-outlined text-4xl">route</span>
        <span class="material-symbols-outlined text-4xl">distance</span>
      </div>
    </div>
  </main>
</template>
