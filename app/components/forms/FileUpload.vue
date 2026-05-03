<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  accept?: string
  label?: string
  helperText?: string
  error?: string
  preview?: boolean
  aspectRatio?: 'square' | 'video' | 'auto'
}

const props = withDefaults(defineProps<Props>(), {
  accept: 'image/*',
  preview: true,
  aspectRatio: 'video'
})

const emit = defineEmits<{
  'update:modelValue': [file: File | null]
  'change': [file: File | null]
}>()

const fileInput = ref<HTMLInputElement>()
const previewUrl = ref<string>()

const aspectClasses = computed(() => {
  switch (props.aspectRatio) {
    case 'square':
      return 'aspect-square'
    case 'video':
      return 'aspect-video'
    case 'auto':
    default:
      return ''
  }
})

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0] || null
  
  if (file && props.preview) {
    const reader = new FileReader()
    reader.onload = (e) => {
      previewUrl.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
  
  emit('update:modelValue', file)
  emit('change', file)
}

const clearFile = () => {
  if (fileInput.value) {
    fileInput.value.value = ''
  }
  previewUrl.value = undefined
  emit('update:modelValue', null)
  emit('change', null)
}
</script>

<template>
  <div class="w-full">
    <label v-if="label" class="block text-on-background font-medium mb-2">
      {{ label }}
    </label>
    
    <div class="relative">
      <div
        v-if="!previewUrl"
        :class="[
          'relative group cursor-pointer border-2 border-dashed rounded-3xl overflow-hidden',
          'flex flex-col items-center justify-center',
          'bg-primary/5 hover:bg-primary/10 transition-all',
          error ? 'border-red-500 dark:border-red-400' : 'border-primary/20',
          aspectClasses
        ]"
      >
        <span class="material-symbols-outlined text-4xl text-primary mb-2">image</span>
        <p class="text-sm text-on-surface-variant">{{ helperText || 'Sube una imagen' }}</p>
        <input
          ref="fileInput"
          type="file"
          :accept="accept"
          class="absolute inset-0 opacity-0 cursor-pointer"
          @change="handleFileChange"
        />
      </div>
      
      <div v-else class="relative">
        <div :class="['rounded-3xl overflow-hidden', aspectClasses]">
          <img :src="previewUrl" alt="Preview" class="w-full h-full object-cover" />
        </div>
        <button
          type="button"
          class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
          @click="clearFile"
        >
          <span class="material-symbols-outlined text-sm">close</span>
        </button>
      </div>
    </div>
    
    <p v-if="error" class="mt-1 text-sm text-red-500 dark:text-red-400">
      {{ error }}
    </p>
  </div>
</template>
