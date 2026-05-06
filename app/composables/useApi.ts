import type { UseFetchOptions } from '#app'

/**
 * Custom API client with authentication interceptors
 * 
 * Features:
 * - Automatically adds Authorization header with access token
 * - Handles 401 errors by refreshing the token
 * - Redirects to login if refresh fails
 */
export const useApi = () => {
  const config = useRuntimeConfig()
  const router = useRouter()
  
  // Get API base URL from config
  const baseURL = config.public.apiUrl || 'http://localhost:8000/api/v1'

  /**
   * Make an authenticated API request
   */
  const api = async <T>(
    url: string,
    options: UseFetchOptions<T> = {}
  ) => {
    // Get tokens from localStorage
    const accessToken = localStorage.getItem('access_token')
    const refreshToken = localStorage.getItem('refresh_token')

    // Set up headers
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    }

    // Add Authorization header if access token exists
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`
    }

    try {
      // Make the request
      const response = await $fetch<T>(url, {
        baseURL,
        ...options,
        headers,
      })

      return response
    } catch (error: any) {
      // Handle 401 Unauthorized - token might be expired
      if (error?.response?.status === 401 && refreshToken) {
        try {
          // Try to refresh the token
          const refreshResponse = await $fetch<{ access: string }>('/token/refresh/', {
            baseURL,
            method: 'POST',
            body: { refresh: refreshToken },
          })

          // Save new access token
          localStorage.setItem('access_token', refreshResponse.access)

          // Retry the original request with new token
          const retryResponse = await $fetch<T>(url, {
            baseURL,
            ...options,
            headers: {
              ...headers,
              Authorization: `Bearer ${refreshResponse.access}`,
            },
          })

          return retryResponse
        } catch (refreshError) {
          // Refresh failed - clear tokens and redirect to login
          localStorage.removeItem('access_token')
          localStorage.removeItem('refresh_token')
          localStorage.removeItem('user')
          
          // Redirect to login with return URL
          if (process.client) {
            router.push({
              path: '/login',
              query: { redirect: router.currentRoute.value.fullPath },
            })
          }
          
          throw refreshError
        }
      }

      // Re-throw other errors
      throw error
    }
  }

  /**
   * Make a GET request
   */
  const get = <T>(url: string, options: UseFetchOptions<T> = {}) => {
    return api<T>(url, { ...options, method: 'GET' })
  }

  /**
   * Make a POST request
   */
  const post = <T>(url: string, body?: any, options: UseFetchOptions<T> = {}) => {
    return api<T>(url, { ...options, method: 'POST', body })
  }

  /**
   * Make a PUT request
   */
  const put = <T>(url: string, body?: any, options: UseFetchOptions<T> = {}) => {
    return api<T>(url, { ...options, method: 'PUT', body })
  }

  /**
   * Make a PATCH request
   */
  const patch = <T>(url: string, body?: any, options: UseFetchOptions<T> = {}) => {
    return api<T>(url, { ...options, method: 'PATCH', body })
  }

  /**
   * Make a DELETE request
   */
  const del = <T>(url: string, options: UseFetchOptions<T> = {}) => {
    return api<T>(url, { ...options, method: 'DELETE' })
  }

  return {
    api,
    get,
    post,
    put,
    patch,
    delete: del,
  }
}
