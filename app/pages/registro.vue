<script setup lang="ts">
import { ref } from 'vue'

// Form state
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  acceptedTerms: false
})

// Form submission
const handleSubmit = (e: Event) => {
  e.preventDefault()
  
  if (!formData.value.acceptedTerms) {
    alert('Debes aceptar los términos y condiciones')
    return
  }
  
  console.log('Form submitted:', formData.value)
  // TODO: Implement registration logic
}
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
          
          <form class="space-y-6" @submit="handleSubmit">
            <!-- Name Group -->
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="block text-xs font-bold text-secondary uppercase ml-1 tracking-wider">
                  Nombre
                </label>
                <input
                  v-model="formData.firstName"
                  type="text"
                  placeholder="Ej. Alex"
                  class="form-input w-full px-4 py-3 rounded-xl"
                  required
                />
              </div>
              <div class="space-y-2">
                <label class="block text-xs font-bold text-secondary uppercase ml-1 tracking-wider">
                  Apellido
                </label>
                <input
                  v-model="formData.lastName"
                  type="text"
                  placeholder="Ej. Rivera"
                  class="form-input w-full px-4 py-3 rounded-xl"
                  required
                />
              </div>
            </div>
            
            <!-- Email -->
            <div class="space-y-2">
              <label class="block text-xs font-bold text-secondary uppercase ml-1 tracking-wider">
                Correo Electrónico
              </label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">
                  mail
                </span>
                <input
                  v-model="formData.email"
                  type="email"
                  placeholder="tu@email.com"
                  class="form-input w-full pl-12 pr-4 py-3 rounded-xl"
                  required
                />
              </div>
            </div>
            
            <!-- Phone -->
            <div class="space-y-2">
              <label class="block text-xs font-bold text-secondary uppercase ml-1 tracking-wider">
                Teléfono
              </label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">
                  call
                </span>
                <input
                  v-model="formData.phone"
                  type="tel"
                  placeholder="+52 55 0000 0000"
                  class="form-input w-full pl-12 pr-4 py-3 rounded-xl"
                  required
                />
              </div>
            </div>
            
            <!-- Terms -->
            <FormsCheckbox 
              v-model="formData.acceptedTerms"
              id="terms"
              required
            >
              <span class="text-on-surface-variant text-sm leading-snug">
                Acepto los <NuxtLink to="#" class="text-primary hover:underline underline-offset-4">términos y condiciones de uso</NuxtLink> y la política de privacidad.
              </span>
            </FormsCheckbox>
            
            <!-- Actions -->
            <div class="pt-6 space-y-6">
              <UiButton
                type="submit"
                variant="primary"
                size="large"
                class="w-full"
              >
                Registrarme
                <template #append-icon>
                  <span class="material-symbols-outlined">arrow_forward</span>
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

.form-input {
  background: rgba(20, 30, 17, 0.6);
  border: 1px solid rgba(61, 93, 61, 0.3);
  color: #e8f5e8;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  border-color: #25f425;
  outline: none;
  box-shadow: 0 0 0 1px rgba(37, 244, 37, 0.2);
}

.form-input::placeholder {
  color: rgba(125, 157, 125, 0.6);
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
