import { ref, onMounted } from 'vue'

export const useTheme = () => {
  const isDark = ref(true)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const initTheme = () => {
    // Ensure dark mode is set on mount
    document.documentElement.classList.add('dark')
  }

  onMounted(() => {
    initTheme()
  })

  return {
    isDark,
    toggleTheme
  }
}
