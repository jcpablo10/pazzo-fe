<script setup lang="ts">
export interface RadioOption {
  label: string
  value: string | number
  disabled?: boolean
}

interface Props {
  modelValue?: string | number
  options: RadioOption[]
  name?: string
  label?: string
  required?: boolean
  error?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'radio-group',
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const handleChange = (value: string | number) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="w-full">
    <label v-if="label" class="block text-on-background font-medium mb-2">
      {{ label }}
      <span v-if="required" class="text-primary">*</span>
    </label>
    <div class="flex gap-2">
      <label
        v-for="option in options"
        :key="option.value"
        class="flex-1 cursor-pointer group"
        :class="{ 'opacity-50 cursor-not-allowed': option.disabled }"
      >
        <input
          type="radio"
          :name="name"
          :value="option.value"
          :checked="modelValue === option.value"
          :disabled="option.disabled"
          class="hidden peer"
          @change="() => handleChange(option.value)"
        />
        <div
          class="text-center py-3 rounded-xl border border-primary/20 
                 peer-checked:bg-primary/20 peer-checked:border-primary peer-checked:text-primary 
                 transition-all group-hover:bg-primary/5"
        >
          <p class="text-sm font-bold">{{ option.label }}</p>
        </div>
      </label>
    </div>
    <p v-if="error" class="mt-1 text-sm text-red-400">
      {{ error }}
    </p>
  </div>
</template>
