interface Config {
  isProduction: boolean
  isDevelopment: boolean
  isTest: boolean
  port: number
  apiBaseUrl: string
  frontendUrl: string
  jwtSecret: string
  jwtExpiration: string
}

export const configFactory = (overrides: Partial<Config>): Config => {
  const baseConfig: Config = {
    isProduction: false,
    isDevelopment: false,
    isTest: false,
    port: parseInt(process.env.PORT || '3000', 10),
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3001',
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
    jwtSecret: process.env.JWT_SECRET || 'secret',
    jwtExpiration: process.env.JWT_EXPIRATION || '7d'
  }

  return { ...baseConfig, ...overrides }
}
