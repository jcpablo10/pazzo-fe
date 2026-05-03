<script setup lang="ts">
import { computed } from 'vue'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  variant?: ButtonVariant
  size?: ButtonSize
  type?: 'button' | 'submit' | 'reset'
  block?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  block: false
})

const sizeClass = computed(() => {
  if (props.size === 'sm') return 'px-4 py-2 text-xs'
  if (props.size === 'lg') return 'px-7 py-3.5 text-base'
  return 'px-6 py-3 text-sm'
})

const variantClass = computed(() => {
  if (props.variant === 'secondary') {
    return 'border border-border bg-surface text-on hover:border-primary/60'
  }

  if (props.variant === 'ghost') {
    return 'border border-transparent bg-transparent text-on hover:border-border hover:bg-surface/40'
  }

  return 'border border-transparent bg-primary text-on-primary hover:scale-[1.03] hover:shadow-glow'
})
</script>

<template>
  <button
    :type="type"
    :class="[
      'inline-flex items-center justify-center rounded-action font-bold tracking-wide transition duration-200 disabled:cursor-not-allowed disabled:opacity-60',
      sizeClass,
      variantClass,
      block ? 'w-full' : ''
    ]"
  >
    <slot />
  </button>
</template>
