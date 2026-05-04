<script setup lang="ts">
import { ref } from 'vue'

// Use dashboard layout
// @ts-expect-error - Nuxt auto-import
definePageMeta({
  layout: 'dashboard'
})

// Types
interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

interface RadioOption {
  label: string
  value: string | number
  disabled?: boolean
}

// Form state
const formData = ref({
  name: '',
  category: '',
  difficulty: 'medio',
  coverImage: null as File | null,
  checkpoints: 0
})

// Options
const categoryOptions: SelectOption[] = [
  { label: 'Ciclismo de Montaña', value: 'mountain' },
  { label: 'Ciclismo de Ruta', value: 'road' },
  { label: 'Gastronomía Local', value: 'gastronomy' },
  { label: 'Ruta Histórica', value: 'historical' },
  { label: 'Ecoturismo', value: 'ecotourism' }
]

const difficultyOptions: RadioOption[] = [
  { label: 'Bajo', value: 'bajo' },
  { label: 'Medio', value: 'medio' },
  { label: 'Alto', value: 'alto' }
]

// Actions
const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  // TODO: Implement form submission
}

const handleDiscard = () => {
  formData.value = {
    name: '',
    category: '',
    difficulty: 'medio',
    coverImage: null,
    checkpoints: 0
  }
}
</script>

<template>
  <!-- Header -->
  <header class="h-16 border-b border-primary/10 flex items-center justify-between px-8 sticky top-0 bg-background-dark/80 backdrop-blur-md z-10">
    <div class="flex items-center gap-2">
      <span class="text-on-surface-variant font-medium">Pasaportes</span>
      <span class="material-symbols-outlined text-sm text-on-surface-variant">chevron_right</span>
      <span class="font-semibold text-primary">Crear Nuevo</span>
    </div>
    
    <div class="flex items-center gap-4">
      <button class="p-2 rounded-full hover:bg-primary/10 text-on-surface-variant transition-colors relative">
        <span class="material-symbols-outlined">notifications</span>
        <span class="absolute top-2 right-2 size-2 bg-primary rounded-full shadow-[0_0_10px_rgba(37,244,37,0.3)]"></span>
      </button>
      
      <button class="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 text-sm font-medium hover:bg-primary/5 transition-colors">
        <span class="material-symbols-outlined text-lg">add_circle</span>
        Nuevo Proyecto
      </button>
    </div>
  </header>

  <!-- Form Content -->
      <div class="max-w-4xl mx-auto px-8 py-12">
        <div class="mb-10">
          <h1 class="text-4xl font-black tracking-tight text-on-background mb-2">
            Crear Nuevo Pasaporte
          </h1>
          <p class="text-on-surface-variant text-lg">
            Define los retos y experiencias para tu comunidad ciclista.
          </p>
        </div>

        <form class="space-y-8" @submit.prevent="handleSubmit">
          <!-- Section 1: Basic Info -->
          <UiCard variant="neon" padding="large" title="Información Principal">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="col-span-full">
                <FormsInput
                  v-model="formData.name"
                  label="Nombre del Pasaporte"
                  placeholder="Ej. Ruta Volcanes Extremos"
                />
              </div>

              <FormsSelect
                v-model="formData.category"
                :options="categoryOptions"
                label="Categoría"
                placeholder="Selecciona una categoría"
              />

              <FormsRadioGroup
                v-model="formData.difficulty"
                :options="difficultyOptions"
                label="Nivel de Dificultad"
                name="difficulty"
              />
            </div>
          </UiCard>

          <!-- Section 2: Visuals & Details -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <FormsFileUpload
                v-model="formData.coverImage"
                label="Imagen de Portada"
                helper-text="Sube una imagen (16:9)"
                aspect-ratio="video"
              />
            </div>

            <div class="space-y-4">
              <div>
                <label class="block text-on-background font-medium mb-2">
                  Puntos de Control (Checkpoints)
                </label>
                <div class="flex gap-2 mb-3">
                  <input
                    v-model.number="formData.checkpoints"
                    type="number"
                    min="0"
                    placeholder="0"
                    class="w-24 bg-surface-variant border border-primary/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none text-on-background"
                  />
                  <button
                    type="button"
                    class="flex-1 bg-surface-variant text-on-background rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-surface-variant/80 transition-all"
                  >
                    <span class="material-symbols-outlined text-lg">location_on</span>
                    Gestionar Mapa
                  </button>
                </div>
                <div class="h-32 rounded-2xl bg-surface-variant overflow-hidden relative border border-primary/10">
                  <div class="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-xs font-bold bg-background-dark/80 px-3 py-1 rounded-full text-primary">
                      Previsualización de Mapa
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center justify-end gap-4 pt-6 border-t border-primary/10">
            <UiButton
              variant="ghost"
              size="large"
              type="button"
              @click="handleDiscard"
            >
              Descartar
            </UiButton>
            
            <UiButton
              variant="primary"
              size="large"
              type="submit"
            >
              Crear Pasaporte
              <template #append-icon>
                <span class="material-symbols-outlined">send</span>
              </template>
            </UiButton>
          </div>
        </form>
      </div>
</template>
