import { defineStore } from 'pinia'
import type { User, LoginResponse, RegisterResponse } from '#shared/auth.types'
import type { LoginFormData } from '#shared/validation'

interface AuthState {
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  }),

  getters: {
    /**
     * Check if user is authenticated
     */
    isAuth: (state): boolean => {
      return state.isAuthenticated && !!state.accessToken
    },

    /**
     * Get current user
     */
    currentUser: (state): User | null => {
      return state.user
    },
  },

  actions: {
    /**
     * Initialize auth state from localStorage
     */
    initAuth() {
      if (process.client) {
        const accessToken = localStorage.getItem('access_token')
        const refreshToken = localStorage.getItem('refresh_token')
        const userStr = localStorage.getItem('user')

        if (accessToken && refreshToken && userStr) {
          try {
            this.accessToken = accessToken
            this.refreshToken = refreshToken
            this.user = JSON.parse(userStr)
            this.isAuthenticated = true
          } catch (error) {
            console.error('Error parsing stored user data:', error)
            this.clearAuth()
          }
        }
      }
    },

    /**
     * Login user with email and password
     */
    async login(credentials: LoginFormData) {
      this.isLoading = true
      this.error = null

      try {
        const { api } = useApi()
        
        const response = await api<LoginResponse>('/users/login/', {
          method: 'POST',
          body: credentials,
        })

        // Save tokens and user
        this.accessToken = response.tokens.access
        this.refreshToken = response.tokens.refresh
        this.user = response.user
        this.isAuthenticated = true

        // Persist to localStorage
        if (process.client) {
          localStorage.setItem('access_token', response.tokens.access)
          localStorage.setItem('refresh_token', response.tokens.refresh)
          localStorage.setItem('user', JSON.stringify(response.user))
        }

        return response
      } catch (error: any) {
        const message = error?.data?.detail || error?.message || 'Error al iniciar sesión'
        this.error = message
        throw new Error(message)
      } finally {
        this.isLoading = false
      }
    },

    /**
     * Register a new user
     */
    async register(userData: { email: string; password: string }) {
      this.isLoading = true
      this.error = null

      try {
        const { api } = useApi()
        
        const response = await api<RegisterResponse>('/users/register/', {
          method: 'POST',
          body: userData,
        })

        return response
      } catch (error: any) {
        const message = error?.data?.detail || error?.data?.email?.[0] || error?.message || 'Error al registrar usuario'
        this.error = message
        throw new Error(message)
      } finally {
        this.isLoading = false
      }
    },

    /**
     * Logout user
     */
    async logout() {
      this.isLoading = true

      try {
        // Call logout endpoint to blacklist refresh token
        if (this.refreshToken) {
          const { api } = useApi()
          await api('/users/logout/', {
            method: 'POST',
            body: { refresh: this.refreshToken },
          })
        }
      } catch (error) {
        console.error('Error during logout:', error)
        // Continue with logout even if API call fails
      } finally {
        this.clearAuth()
        this.isLoading = false
      }
    },

    /**
     * Fetch current user from API
     */
    async fetchCurrentUser() {
      if (!this.isAuthenticated) {
        return
      }

      this.isLoading = true
      this.error = null

      try {
        const { get } = useApi()
        const user = await get<User>('/users/me/')

        this.user = user

        // Update localStorage
        if (process.client) {
          localStorage.setItem('user', JSON.stringify(user))
        }

        return user
      } catch (error: any) {
        const message = error?.data?.detail || error?.message || 'Error al obtener datos del usuario'
        this.error = message
        
        // If unauthorized, clear auth
        if (error?.response?.status === 401) {
          this.clearAuth()
        }
        
        throw new Error(message)
      } finally {
        this.isLoading = false
      }
    },

    /**
     * Refresh access token
     */
    async refreshAccessToken() {
      if (!this.refreshToken) {
        throw new Error('No refresh token available')
      }

      try {
        const { api } = useApi()
        const response = await api<{ access: string }>('/token/refresh/', {
          method: 'POST',
          body: { refresh: this.refreshToken },
        })

        this.accessToken = response.access

        // Update localStorage
        if (process.client) {
          localStorage.setItem('access_token', response.access)
        }

        return response.access
      } catch (error: any) {
        console.error('Error refreshing token:', error)
        this.clearAuth()
        throw error
      }
    },

    /**
     * Clear authentication state
     */
    clearAuth() {
      this.user = null
      this.accessToken = null
      this.refreshToken = null
      this.isAuthenticated = false
      this.error = null

      // Clear localStorage
      if (process.client) {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('user')
      }
    },
  },
})
