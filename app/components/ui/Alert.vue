<script setup lang="ts">
interface Props {
  variant?: 'success' | 'error' | 'warning' | 'info'
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'info'
})

const variantClasses = {
  success: {
    container: 'bg-primary/10 border-primary',
    text: 'text-primary',
    defaultIcon: 'check_circle'
  },
  error: {
    container: 'bg-error/10 border-error',
    text: 'text-error',
    defaultIcon: 'error'
  },
  warning: {
    container: 'bg-yellow-500/10 border-yellow-500',
    text: 'text-yellow-500',
    defaultIcon: 'warning'
  },
  info: {
    container: 'bg-secondary/10 border-secondary',
    text: 'text-secondary',
    defaultIcon: 'info'
  }
}

const currentVariant = variantClasses[props.variant]
const iconToShow = props.icon || currentVariant.defaultIcon
</script>

<template>
  <div 
    :class="[
      'border rounded-xl p-4 flex items-start gap-3',
      currentVariant.container
    ]"
  >
    <span :class="['material-symbols-outlined', currentVariant.text]">
      {{ iconToShow }}
    </span>
    <p :class="['text-sm flex-1', currentVariant.text]">
      <slot />
    </p>
  </div>
</template>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
