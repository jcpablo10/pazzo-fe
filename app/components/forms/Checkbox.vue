<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue?: boolean
  disabled?: boolean
  label?: string
  required?: boolean
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const checkboxId = computed(() => props.id || `checkbox-${Math.random().toString(36).substr(2, 9)}`)

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<template>
  <div class="flex items-start space-x-3">
    <div class="relative flex items-center mt-1">
      <input
        :id="checkboxId"
        :checked="modelValue"
        :disabled="disabled"
        type="checkbox"
        class="w-5 h-5 rounded border-outline bg-surface-variant text-primary 
               focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark
               cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
               transition-all"
        @change="handleChange"
      />
    </div>
    <label
      v-if="label || $slots.default"
      :for="checkboxId"
      class="text-on-surface-variant text-sm leading-snug cursor-pointer select-none"
    >
      <slot>{{ label }}</slot>
      <span v-if="required" class="text-primary ml-1">*</span>
    </label>
  </div>
</template>
