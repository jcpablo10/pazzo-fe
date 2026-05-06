import { z } from 'zod'

/**
 * Validation schema for user login
 */
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'El correo electrónico es requerido')
    .email('Debe ser un correo electrónico válido'),
  password: z
    .string()
    .min(1, 'La contraseña es requerida')
    .min(8, 'La contraseña debe tener al menos 8 caracteres'),
})

/**
 * Validation schema for user registration
 */
export const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(1, 'El nombre es requerido')
      .min(2, 'El nombre debe tener al menos 2 caracteres')
      .max(50, 'El nombre no puede exceder 50 caracteres'),
    lastName: z
      .string()
      .min(1, 'El apellido es requerido')
      .min(2, 'El apellido debe tener al menos 2 caracteres')
      .max(50, 'El apellido no puede exceder 50 caracteres'),
    email: z
      .string()
      .min(1, 'El correo electrónico es requerido')
      .email('Debe ser un correo electrónico válido'),
    phone: z
      .string()
      .optional()
      .refine(
        (val) => {
          if (!val) return true
          // Basic phone validation - digits, spaces, dashes, parentheses, plus
          return /^[\d\s\-+()]+$/.test(val)
        },
        { message: 'Formato de teléfono inválido' }
      ),
    password: z
      .string()
      .min(1, 'La contraseña es requerida')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(128, 'La contraseña no puede exceder 128 caracteres')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'La contraseña debe contener al menos una mayúscula, una minúscula y un número'
      ),
    confirmPassword: z.string().min(1, 'Confirme su contraseña'),
    termsAccepted: z
      .boolean()
      .refine((val) => val === true, {
        message: 'Debe aceptar los términos y condiciones',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  })

/**
 * Type inference from schemas
 */
export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>

/**
 * Helper function to get error messages from Zod validation
 */
export function getZodErrorMessages(error: z.ZodError): Record<string, string> {
  const messages: Record<string, string> = {}
  
  error.errors.forEach((err) => {
    const path = err.path.join('.')
    messages[path] = err.message
  })
  
  return messages
}
