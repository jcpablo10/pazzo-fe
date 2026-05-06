/**
 * Auth middleware
 * Protects routes that require authentication
 * Redirects to login if user is not authenticated
 */
export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()
  
  // Initialize auth state from localStorage if not already done
  if (process.client && !authStore.isAuthenticated) {
    authStore.initAuth()
  }
  
  // Check if user is authenticated
  if (!authStore.isAuthenticated) {
    // Redirect to login with return URL
    return navigateTo({
      path: '/login',
      query: { redirect: to.fullPath },
    })
  }
})
