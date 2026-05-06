<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  modelValue?: string | number
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  placeholder?: string
  disabled?: boolean
  error?: string
  label?: string
  labelClass?: string
  required?: boolean
  prependIcon?: string
  appendIcon?: string
  showPasswordToggle?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  required: false,
  showPasswordToggle: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const showPassword = ref(false)

const inputType = computed(() => {
  if (props.type === 'password' && props.showPasswordToggle) {
    return showPassword.value ? 'text' : 'password'
  }
  return props.type
})

const inputClasses = computed(() => {
  const classes = [
    'w-full',
    'border rounded-xl py-3',
    'focus:ring-0 focus:border-primary',
    'outline-none transition-all',
    'placeholder:text-on-surface-variant/60',
    'text-on-background',
    'bg-[rgba(20,30,17,0.6)]'
  ]
  
  // Padding adjustments based on icons
  if (props.prependIcon) {
    classes.push('pl-12')
  } else {
    classes.push('pl-4')
  }
  
  if (props.appendIcon || (props.type === 'password' && props.showPasswordToggle)) {
    classes.push('pr-12')
  } else {
    classes.push('pr-4')
  }
  
  if (props.error) {
    classes.push('border-error')
  } else {
    classes.push('border-[rgba(61,93,61,0.3)]')
  }
  
  if (props.disabled) {
    classes.push('opacity-50 cursor-not-allowed')
  }
  
  return classes.join(' ')
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <div class="w-full space-y-2">
    <label 
      v-if="label" 
      :class="labelClass || 'block text-xs font-bold text-secondary uppercase ml-1 tracking-wider'"
    >
      {{ label }}
      <span v-if="required" class="text-primary ml-1">*</span>
    </label>
    
    <div class="relative">
      <!-- Prepend Icon -->
      <span 
        v-if="prependIcon" 
        class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg pointer-events-none"
      >
        {{ prependIcon }}
      </span>
      
      <!-- Input -->
      <input
        :type="inputType"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="inputClasses"
        @input="handleInput"
      />
      
      <!-- Password Toggle Button -->
      <button
        v-if="type === 'password' && showPasswordToggle"
        type="button"
        @click="togglePassword"
        class="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
      >
        <span class="material-symbols-outlined">
          {{ showPassword ? 'visibility_off' : 'visibility' }}
        </span>
      </button>
      
      <!-- Append Icon (only if not password toggle) -->
      <span 
        v-else-if="appendIcon" 
        class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline text-lg pointer-events-none"
      >
        {{ appendIcon }}
      </span>
    </div>
    
    <p v-if="error" class="text-error text-xs mt-1">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
