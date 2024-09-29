import { configSchema, Config } from '../schemas/configSchema'

export const configFactory = (overrides: Partial<Config>): Config => {
  const envConfig = {
    appName: process.env.APP_NAME,
    isProduction: process.env.NODE_ENV === 'production',
    isDevelopment: process.env.NODE_ENV === 'development',
    isTest: process.env.NODE_ENV === 'test',
    appPort: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 3000,
    apiBaseUrl: process.env.API_BASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiration: process.env.JWT_EXPIRATION
  }

  const mergedConfig = { ...envConfig, ...overrides }

  const validatedConfig = configSchema.safeParse(mergedConfig)

  if (!validatedConfig.success) {
    throw new Error(
      'Invalid configuration: ' + JSON.stringify(validatedConfig.error.format())
    )
  }

  return validatedConfig.data
}
