import createMiddleware from 'next-intl/middleware'
import { i18nConfig } from './i18n'

export default createMiddleware(i18nConfig)

export const config = {
  matcher: ['/', '/(en-US|pt-BR)/:path*']
}
