<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { registerSchema } from '#shared/validation'

// Meta and SEO
definePageMeta({
  layout: 'default',
  middleware: ['guest'],
})

// Composables
const { register } = useAuth()
const router = useRouter()

// Form state
const errorMessage = ref('')
const successMessage = ref('')
const isSubmitting = ref(false)

// Setup form with Zod validation
const { handleSubmit, errors, defineField } = useForm({
  validationSchema: toTypedSchema(registerSchema),
})

// Define form fields
const [firstName] = defineField('firstName')
const [lastName] = defineField('lastName')
const [email] = defineField('email')
const [phone] = defineField('phone')
const [password] = defineField('password')
const [confirmPassword] = defineField('confirmPassword')
const [termsAccepted] = defineField('termsAccepted')

// Form submission
const onSubmit = handleSubmit(async (values) => {
  errorMessage.value = ''
  successMessage.value = ''
  isSubmitting.value = true
  debugger
  try {
    // Note: Backend currently only accepts email and password
    // firstName, lastName, phone, etc. can be added in a future iteration
    await register({
      email: values.email,
      password: values.password,
    })

    successMessage.value = 'Cuenta creada exitosamente. Redirigiendo al login...'
    
    // Redirect to login after 2 seconds
    setTimeout(() => {
      router.push('/login')
    }, 2000)
  } catch (error: any) {
    errorMessage.value = error.message || 'Error al crear la cuenta. Intenta de nuevo.'
  } finally {
    isSubmitting.value = false
  }
})

</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4 md:p-8 bg-linear-to-br from-[#102210] via-background-dark to-[#071006] relative overflow-hidden">
    <!-- Background Elements -->
    <div class="fixed top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
    <div class="fixed bottom-0 left-0 w-1/2 h-1/2 bg-secondary-container/10 blur-[120px] rounded-full -z-10"></div>
    
    <!-- Registration Content Shell -->
    <main class="w-full max-w-300 grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left Side: Visual Narrative -->
      <div class="hidden lg:flex flex-col space-y-8 animate-fade-in">
        <div class="space-y-4">
          <h1 class="font-display-xl text-6xl font-black text-primary leading-none italic tracking-tighter">
            PAZZO
          </h1>
          <div class="h-1 w-24 bg-primary rounded-full"></div>
        </div>
        
        <div class="space-y-6">
          <h2 class="text-4xl font-extrabold text-on-background">
            El mundo es tu <span class="text-primary">pista.</span>
          </h2>
          <p class="text-lg text-on-surface-variant max-w-md leading-relaxed">
            Descubre rutas inexploradas, compite con ciclistas de todo el mundo y desbloquea sellos exclusivos en tu pasaporte digital.
          </p>
        </div>
        
        <!-- Decorative Image Frame -->
        <div class="relative group">
          <div class="absolute -inset-1 bg-linear-to-r from-primary to-transparent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div class="relative glass-card rounded-2xl overflow-hidden aspect-square w-full max-w-100">
            <img 
              class="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700" 
              src="../assets/pazzo/cyclist-registration.jpg"
              alt="Ciclista profesional en ruta de montaña al amanecer"
            />
          </div>
        </div>
      </div>
      
      <!-- Right Side: Registration Card -->
      <div class="flex justify-center w-full">
        <div class="glass-card p-8 md:p-12 rounded-4xl w-full max-w-130 shadow-2xl relative overflow-hidden">
          <!-- Top Brand Accents -->
          <div class="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/40 to-transparent"></div>
          
          <header class="mb-10 text-center lg:text-left">
            <div class="flex lg:hidden justify-center mb-6">
              <span class="text-2xl font-black text-primary italic tracking-tighter">PAZZO</span>
            </div>
            <h3 class="text-2xl font-bold text-on-background mb-3">
              Crea tu cuenta Pazzo
            </h3>
            <p class="text-on-surface-variant">
              Únete a la comunidad de exploradores y empieza a coleccionar aventuras.
            </p>
          </header>

          <!-- Success Message -->
          <UiAlert v-if="successMessage" variant="success" class="mb-6">
            {{ successMessage }}
          </UiAlert>

          <!-- Error Message -->
          <UiAlert v-if="errorMessage" variant="error" class="mb-6">
            {{ errorMessage }}
          </UiAlert>
          
          <form class="space-y-6" @submit.prevent="onSubmit">
            <!-- Name Group -->
            <div class="grid grid-cols-2 gap-4">
              <FormsInput
                v-model="firstName"
                label="Nombre"
                placeholder="Ej. Alex"
                :error="errors.firstName"
              />
              <FormsInput
                v-model="lastName"
                label="Apellido"
                placeholder="Ej. Rivera"
                :error="errors.lastName"
              />
            </div>
            
            <!-- Email -->
            <FormsInput
              v-model="email"
              type="email"
              label="Correo Electrónico"
              placeholder="tu@email.com"
              prepend-icon="mail"
              :error="errors.email"
            />
            
            <!-- Phone -->
            <FormsInput
              v-model="phone"
              type="tel"
              label="Teléfono"
              placeholder="+52 55 0000 0000"
              prepend-icon="call"
              :error="errors.phone"
            />

            <!-- Password -->
            <FormsInput
              v-model="password"
              type="password"
              label="Contraseña"
              placeholder="••••••••"
              prepend-icon="lock"
              show-password-toggle
              :error="errors.password"
            />

            <!-- Confirm Password -->
            <FormsInput
              v-model="confirmPassword"
              type="password"
              label="Confirmar Contraseña"
              placeholder="••••••••"
              prepend-icon="lock"
              show-password-toggle
              :error="errors.confirmPassword"
            />
            
            <!-- Terms -->
            <div class="space-y-2">
              <FormsCheckbox 
                v-model="termsAccepted"
                id="terms"
              >
                <span class="text-on-surface-variant text-sm leading-snug">
                  Acepto los <NuxtLink to="#" class="text-primary hover:underline underline-offset-4">términos y condiciones de uso</NuxtLink> y la política de privacidad.
                </span>
              </FormsCheckbox>
              <p v-if="errors.termsAccepted" class="text-error text-xs mt-1">{{ errors.termsAccepted }}</p>
            </div>
            
            <!-- Actions -->
            <div class="pt-6 space-y-6">
              <UiButton
                type="submit"
                variant="primary"
                size="large"
                class="w-full"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Creando cuenta...' : 'Registrarme' }}
                <template #append-icon>
                  <span class="material-symbols-outlined">
                    {{ isSubmitting ? 'hourglass_empty' : 'arrow_forward' }}
                  </span>
                </template>
              </UiButton>
              
              <div class="flex flex-col items-center space-y-4">
                <NuxtLink 
                  to="/login"
                  class="text-on-surface-variant text-sm hover:text-primary transition-colors duration-200"
                >
                  Ya tengo una cuenta. <span class="text-primary font-bold">Iniciar sesión</span>
                </NuxtLink>
              </div>
            </div>
          </form>
          
          <!-- Footer Accents -->
          <div class="mt-10 pt-8 border-t border-outline/30 text-center">
            <p class="text-xs font-bold text-outline uppercase tracking-widest">
              High Performance Community
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.glass-card {
  background: rgba(45, 77, 45, 0.4);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(61, 93, 61, 0.2);
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
