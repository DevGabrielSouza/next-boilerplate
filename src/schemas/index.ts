import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({ message: 'validation.invalid_email' }),
  password: z
    .string()
    .refine((value) => value !== '', { message: 'form.required_field' })
})
