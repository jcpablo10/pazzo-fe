<script setup lang="ts">
import { ref } from 'vue'

// Form state
const email = ref('')
const password = ref('')
const showPassword = ref(false)

// Form handlers
const handleSubmit = () => {
  console.log('Login attempt:', { email: email.value })
  // TODO: Implement authentication logic
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden bg-background-dark">
    <!-- Background Decorative Elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20" 
           style="background-image: radial-gradient(circle at center, #25f425 1px, transparent 1px); background-size: 40px 40px;">
      </div>
    </div>

    <!-- Login Container -->
    <main class="relative z-10 w-full max-w-md px-6 py-12">
      <!-- Logo Branding -->
      <div class="flex flex-col items-center mb-10">
        <div class="w-16 h-16 mb-4 flex items-center justify-center rounded-2xl bg-primary-container shadow-[0_0_20px_rgba(37,244,37,0.3)]">
          <img 
            src="~/assets/pazzo/pazzo.logo.png" 
            alt="Pazzo Logo" 
            class="w-10 h-10 object-contain"
          />
        </div>
        <h1 class="text-primary-container italic text-4xl tracking-tighter uppercase font-display-lg">Pazzo</h1>
      </div>

      <!-- Login Form Card -->
      <div class="bg-surface-variant/40 backdrop-blur-xl border border-outline/20 rounded-3xl p-8 shadow-2xl">
        <header class="text-center mb-8">
          <h2 class="text-on-background text-3xl font-bold mb-2">Bienvenido de nuevo</h2>
          <p class="text-on-surface-variant text-base">Accede a tus aventuras y sellos</p>
        </header>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Email Field -->
          <div class="space-y-2">
            <label 
              for="email" 
              class="text-primary uppercase text-xs font-bold tracking-wider"
            >
              Correo Electrónico
            </label>
            <div class="relative">
              <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                mail
              </span>
              <input 
                id="email"
                v-model="email"
                type="email"
                placeholder="nombre@ejemplo.com"
                class="w-full bg-surface-variant border border-outline rounded-xl py-3 pl-12 pr-4 text-on-background focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all outline-none"
                required
              />
            </div>
          </div>

          <!-- Password Field -->
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <label 
                for="password" 
                class="text-primary uppercase text-xs font-bold tracking-wider"
              >
                Contraseña
              </label>
              <NuxtLink 
                to="/recuperar-password" 
                class="text-primary text-xs hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </NuxtLink>
            </div>
            <div class="relative">
              <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                lock
              </span>
              <input 
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••"
                class="w-full bg-surface-variant border border-outline rounded-xl py-3 pl-12 pr-12 text-on-background focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all outline-none"
                required
              />
              <button 
                type="button"
                @click="togglePasswordVisibility"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
              >
                <span class="material-symbols-outlined">
                  {{ showPassword ? 'visibility_off' : 'visibility' }}
                </span>
              </button>
            </div>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit"
            class="w-full bg-primary-container text-on-primary-container text-lg font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(37,244,37,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            Iniciar Sesión
          </button>
        </form>

        <!-- Divider -->
        <div class="relative my-8 flex items-center">
          <div class="grow border-t border-outline"></div>
          <span class="shrink mx-4 text-outline uppercase text-xs font-bold tracking-wider">
            O continúa con
          </span>
          <div class="grow border-t border-outline"></div>
        </div>

        <!-- Social Logins -->
        <div class="grid grid-cols-2 gap-4">
          <button 
            type="button"
            class="flex items-center justify-center gap-2 bg-surface-variant border border-outline rounded-xl py-3 hover:bg-surface-variant/80 transition-colors"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3VN-RCAxQi6qbEQjmYggHcu4LNo0PZDBXy092yK3eyoaDhLyaNgTPi7y4p681397XAMKrHq-xDzbsmIlN-IGgZADBbeY_1JZD40s__276ZpWAyv1Y8eP8Ky5VJ2fLXuM92ibfpAZx29gVxue4kbW7i6RsUiS-ZV7836XhT175861on8a97yEjiuDcwWKTGwBwIW5jM81LLWuUTW6xL-uok3Rt1N6KTYU8UHGjypuWj8HTwT0Cckr5UsGQK3-2pc5IfcoJv3lrIVTK" 
              alt="Google" 
              class="w-5 h-5"
            />
            <span class="text-on-background font-bold text-sm">Google</span>
          </button>
          <button 
            type="button"
            class="flex items-center justify-center gap-2 bg-surface-variant border border-outline rounded-xl py-3 hover:bg-surface-variant/80 transition-colors"
          >
            <span class="material-symbols-outlined text-on-background" style="font-variation-settings: 'FILL' 1;">
              ios
            </span>
            <span class="text-on-background font-bold text-sm">Apple</span>
          </button>
        </div>

        <!-- Registration Link -->
        <footer class="mt-8 text-center">
          <p class="text-on-surface-variant text-base">
            ¿No tienes cuenta? 
            <NuxtLink 
              to="/registro" 
              class="text-primary font-bold hover:underline"
            >
              Regístrate
            </NuxtLink>
          </p>
        </footer>
      </div>

      <!-- Footer Help -->
      <div class="mt-8 flex justify-center gap-6">
        <a 
          href="#" 
          class="text-outline hover:text-on-background flex items-center gap-1 text-xs font-bold tracking-wider uppercase"
        >
          <span class="material-symbols-outlined text-[16px]">help</span>
          Ayuda
        </a>
        <a 
          href="#" 
          class="text-outline hover:text-on-background flex items-center gap-1 text-xs font-bold tracking-wider uppercase"
        >
          <span class="material-symbols-outlined text-[16px]">language</span>
          Español
        </a>
      </div>
    </main>

    <!-- Decorative Bottom Gradient -->
    <div class="fixed bottom-0 left-0 w-full h-32 bg-linear-to-t from-background-dark/60 to-transparent pointer-events-none opacity-60"></div>
  </div>
</template>
