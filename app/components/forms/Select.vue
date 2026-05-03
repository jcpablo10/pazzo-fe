<script setup lang="ts">
import { computed } from 'vue'

export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

interface Props {
  modelValue?: string | number
  options?: SelectOption[]
  placeholder?: string
  disabled?: boolean
  error?: string
  label?: string
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  disabled: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const selectClasses = computed(() => {
  const classes = [
    'w-full appearance-none bg-white dark:bg-surface-variant',
    'border rounded-xl px-4 py-3 pr-10',
    'focus:ring-2 focus:ring-primary focus:border-transparent',
    'outline-none transition-all',
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

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="w-full">
    <label v-if="label" class="block text-on-background font-medium mb-2">
      {{ label }}
      <span v-if="required" class="text-primary">*</span>
    </label>
    <div class="relative">
      <select
        :value="modelValue"
        :disabled="disabled"
        :class="selectClasses"
        @change="handleChange"
      >
        <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </option>
      </select>
      <span class="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-primary">
        keyboard_arrow_down
      </span>
    </div>
    <p v-if="error" class="mt-1 text-sm text-red-500 dark:text-red-400">
      {{ error }}
    </p>
  </div>
</template>
