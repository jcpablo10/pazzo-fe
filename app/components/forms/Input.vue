<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue?: string | number
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  placeholder?: string
  disabled?: boolean
  error?: string
  label?: string
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const inputClasses = computed(() => {
  const classes = [
    'w-full bg-white dark:bg-surface-variant',
    'border rounded-xl px-4 py-3',
    'focus:ring-2 focus:ring-primary focus:border-transparent',
    'outline-none transition-all',
    'placeholder:text-on-surface-variant',
    'text-on-background'
  ]
  
  if (props.error) {
    classes.push('border-red-500 dark:border-red-400')
  } else {
    classes.push('border-outline dark:border-primary/20')
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
</script>

<template>
  <div class="w-full">
    <label v-if="label" class="block text-on-background font-medium mb-2">
      {{ label }}
      <span v-if="required" class="text-primary">*</span>
    </label>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="inputClasses"
      @input="handleInput"
    />
    <p v-if="error" class="mt-1 text-sm text-red-500 dark:text-red-400">
      {{ error }}
    </p>
  </div>
</template>
