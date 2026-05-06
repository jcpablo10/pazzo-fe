/**
 * Guest middleware
 * Redirects authenticated users away from guest-only pages (login, register)
 * Useful for preventing logged-in users from accessing login/register pages
 */
export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()
  
  // Initialize auth state from localStorage if not already done
  if (process.client && !authStore.isAuthenticated) {
    authStore.initAuth()
  }
  
  // If user is authenticated, redirect to home
  if (authStore.isAuthenticated) {
    return navigateTo('/')
  }
})
