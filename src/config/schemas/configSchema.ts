import { z } from 'zod'

export const configSchema = z.object({
  appName: z.string().default('Next Boilerplate'),
  isProduction: z.boolean(),
  isDevelopment: z.boolean(),
  isTest: z.boolean(),
  appPort: z.number().min(1).max(65535),
  apiBaseUrl: z.string().url().default('http://localhost:3001'),
  jwtSecret: z.string().min(10).default('your_jwt_secret'),
  jwtExpiration: z.string().default('7d')
})

export type Config = z.infer<typeof configSchema>
