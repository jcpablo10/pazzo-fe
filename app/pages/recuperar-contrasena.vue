<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'default',
  middleware: 'guest'
})

const email = ref('')
const isSubmitting = ref(false)
const emailSent = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // TODO: Implementar lógica de recuperación de contraseña
    console.log('Solicitud de recuperación para:', email.value)
    
    // Simulación de llamada a API
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    emailSent.value = true
  } catch (error) {
    console.error('Error al solicitar recuperación:', error)
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
          <!-- Success Message -->
          <div v-if="emailSent" class="space-y-6">
            <div class="text-center space-y-4">
              <div class="flex justify-center">
                <div class="w-20 h-20 bg-primary-container/20 rounded-full flex items-center justify-center">
                  <span class="material-symbols-outlined text-5xl text-primary-container">
                    mail
                  </span>
                </div>
              </div>
              <h2 class="text-2xl font-bold text-on-surface">
                ¡Correo Enviado!
              </h2>
              <p class="text-on-surface-variant leading-relaxed">
                Te hemos enviado un enlace de recuperación a <span class="text-primary-container font-semibold">{{ email }}</span>. 
                Revisa tu bandeja de entrada y sigue las instrucciones.
              </p>
            </div>

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
          </div>

          <!-- Form -->
          <form v-else @submit.prevent="handleSubmit" class="space-y-6">
            <div class="text-center space-y-2">
              <h2 class="text-2xl font-bold text-on-surface">
                ¿Olvidaste tu contraseña?
              </h2>
              <p class="text-on-surface-variant leading-relaxed">
                No te preocupes, dinos el correo electrónico de tu cuenta y te enviaremos un enlace para restablecerla.
              </p>
            </div>

            <FormsInput
              v-model="email"
              type="email"
              label="Correo Electrónico"
              placeholder="tu@email.com"
              prepend-icon="mail"
              required
            />

            <UiButton
              type="submit"
              variant="primary"
              size="large"
              :disabled="isSubmitting || !email"
              class="w-full shadow-[0_0_20px_rgba(37,244,37,0.3)]"
            >
              <template v-if="isSubmitting">
                Enviando...
              </template>
              <template v-else>
                Enviar Enlace de Recuperación
                <span class="material-symbols-outlined text-xl">
                  send
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
