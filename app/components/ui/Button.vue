<script setup lang="ts">
import { computed, useSlots } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'icon'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  rounded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  rounded: false
})

const slots = useSlots()

const buttonClasses = computed(() => {
  const classes = []
  
  // Base classes
  classes.push('inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider transition-all')
  
  // Variant classes
  switch (props.variant) {
    case 'primary':
      classes.push(
        'bg-primary text-bg-dark',
        'hover:scale-[1.05] hover:shadow-[0_0_25px_rgba(37,244,37,0.5)]',
        'active:scale-95',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-surface-variant disabled:text-on-surface-variant'
      )
      break
    case 'secondary':
      classes.push(
        'bg-secondary-container/30 text-secondary',
        'hover:bg-secondary-container/50',
        'disabled:opacity-40 disabled:cursor-not-allowed'
      )
      break
    case 'ghost':
      classes.push(
        'bg-transparent border border-outline text-on-background',
        'hover:bg-white/5 hover:border-primary/50',
        'disabled:opacity-40 disabled:cursor-not-allowed disabled:border-outline/20'
      )
      break
    case 'outline':
      classes.push(
        'bg-transparent border border-outline text-on-background',
        'hover:bg-white/5',
        'disabled:opacity-40 disabled:cursor-not-allowed disabled:border-outline/20'
      )
      break
    case 'icon':
      classes.push(
        'bg-surface-variant text-primary border border-primary/20',
        'hover:scale-110',
        'disabled:opacity-50 disabled:cursor-not-allowed'
      )
      break
  }
  
  // Size classes
  if (props.variant === 'icon') {
    switch (props.size) {
      case 'small':
        classes.push('w-9 h-9')
        break
      case 'medium':
        classes.push('w-12 h-12')
        break
      case 'large':
        classes.push('w-16 h-16')
        break
    }
  } else {
    switch (props.size) {
      case 'small':
        classes.push('h-9 px-4 text-xs rounded-lg')
        break
      case 'medium':
        classes.push('h-12 px-6 text-sm rounded-xl')
        break
      case 'large':
        classes.push('h-16 px-10 text-sm rounded-xl')
        break
    }
  }
  
  // Rounded
  if (props.rounded || props.variant === 'icon') {
    classes.push(props.rounded && props.variant !== 'icon' ? 'rounded-full' : 'rounded-xl')
  }
  
  return classes.join(' ')
})
</script>

<template>
  <button 
    :class="buttonClasses" 
    :disabled="disabled"
    class="button-pazzo"
  >
    <slot name="prepend-icon" />
    <slot />
    <slot name="append-icon" />
  </button>
</template>

<style scoped>
.button-pazzo {
  font-family: 'Lexend', sans-serif;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  font-size: 1.25rem;
}
</style>
