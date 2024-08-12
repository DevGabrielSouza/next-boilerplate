import { configFactory } from '../factories/configFactory'

export default configFactory({
  isProduction: true,
  apiBaseUrl: process.env.API_BASE_URL || 'https://api.myapp.com',
  frontendUrl: process.env.FRONTEND_URL || 'https://myapp.com'
})
