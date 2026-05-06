/**
 * User data types
 */
export interface User {
  id: number
  email: string
  is_active: boolean
  created_at?: string
}

/**
 * Authentication tokens
 */
export interface AuthTokens {
  access: string
  refresh: string
}

/**
 * Login response from API
 */
export interface LoginResponse {
  user: User
  tokens: AuthTokens
}

/**
 * Registration response from API
 */
export interface RegisterResponse {
  id: number
  email: string
  is_active: boolean
  created_at?: string
}

/**
 * API Error response
 */
export interface ApiError {
  detail?: string
  [key: string]: any
}
