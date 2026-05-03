<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'neon' | 'elevated'
  padding?: 'none' | 'small' | 'medium' | 'large'
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'medium'
})

const cardClasses = computed(() => {
  const classes = ['rounded-3xl']
  
  // Variant classes
  switch (props.variant) {
    case 'neon':
      classes.push(
        'bg-primary/5 border border-primary/10',
        'shadow-[0_0_10px_rgba(37,244,37,0.1)]'
      )
      break
    case 'elevated':
      classes.push(
        'bg-surface-variant',
        'border border-primary/10',
        'shadow-lg'
      )
      break
    case 'default':
    default:
      classes.push(
        'bg-surface-variant/30',
        'border border-primary/10'
      )
      break
  }
  
  // Padding classes
  switch (props.padding) {
    case 'none':
      break
    case 'small':
      classes.push('p-4')
      break
    case 'medium':
      classes.push('p-6')
      break
    case 'large':
      classes.push('p-8')
      break
  }
  
  return classes.join(' ')
})
</script>

<template>
  <div :class="cardClasses">
    <div v-if="title" class="mb-6">
      <h3 class="text-sm font-bold tracking-wider uppercase text-primary">{{ title }}</h3>
    </div>
    <slot />
  </div>
</template>
