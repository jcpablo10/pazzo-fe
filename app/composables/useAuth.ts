import { useAuthStore } from '~/stores/auth.store'

/**
 * Composable for authentication functionality
 * Provides easy access to auth store and utilities
 */
export const useAuth = () => {
  const authStore = useAuthStore()
  const router = useRouter()

  // Initialize auth on first use
  if (process.client && !authStore.isAuthenticated) {
    authStore.initAuth()
  }

  /**
   * Require authentication - redirect to login if not authenticated
   * Use this in pages or composables that need authentication
   */
  const requireAuth = () => {
    if (!authStore.isAuth) {
      router.push({
        path: '/login',
        query: { redirect: router.currentRoute.value.fullPath },
      })
      return false
    }
    return true
  }

  /**
   * Redirect to the intended page after login
   * Checks for 'redirect' query parameter
   */
  const redirectAfterLogin = () => {
    const route = useRoute()
    const redirectPath = (route.query.redirect as string) || '/'
    router.push(redirectPath)
  }

  /**
   * Check if user has required role/permission (placeholder for future)
   */
  const hasPermission = (permission: string): boolean => {
    // TODO: Implement permission checking logic
    return authStore.isAuth
  }

  return {
    // State
    user: computed(() => authStore.currentUser),
    isAuthenticated: computed(() => authStore.isAuth),
    isLoading: computed(() => authStore.isLoading),
    error: computed(() => authStore.error),

    // Actions
    login: authStore.login,
    register: authStore.register,
    logout: authStore.logout,
    fetchCurrentUser: authStore.fetchCurrentUser,
    refreshAccessToken: authStore.refreshAccessToken,

    // Utilities
    requireAuth,
    redirectAfterLogin,
    hasPermission,
  }
}
