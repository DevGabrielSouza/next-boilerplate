import createMiddleware from 'next-intl/middleware'
import { i18nConfig } from './i18n'
import { NextRequest, NextResponse } from 'next/server'
import { auth } from './auth'
import {
  APP_HOME,
  DEFAULT_APP_LOGIN_REDIRECT,
  authRoutes,
  publicRoutes,
  privateRoutes
} from '@/routes'
import { cookies } from 'next/headers'

const intlMiddleware = createMiddleware(i18nConfig)

class RouteHandler {
  private req: NextRequest
  private locale: string
  private pathNameWithoutLocale: string

  constructor(req: NextRequest) {
    this.req = req
    this.locale = this.getCurrentLocale()
    this.pathNameWithoutLocale = this.getPathNameWithoutLocale()
  }

  private getCurrentLocale(): string {
    const { nextUrl } = this.req
    return nextUrl.locale || cookies().get('NEXT_LOCALE')?.value || 'en-US'
  }

  private getPathNameWithoutLocale(): string {
    const { pathname } = this.req.nextUrl
    return pathname.replace(/^\/[a-z]{2}-[A-Z]{2}/, '')
  }

  isPublicRoute(): boolean {
    return publicRoutes.includes(this.pathNameWithoutLocale)
  }

  isAuthRoute(): boolean {
    return authRoutes.includes(this.pathNameWithoutLocale)
  }

  isApiAuthRoute(): boolean {
    return this.req.nextUrl.pathname.startsWith(this.pathNameWithoutLocale)
  }

  isPrivateRoute(): boolean {
    return privateRoutes.includes(this.pathNameWithoutLocale)
  }

  handleRedirection(isLoggedIn: boolean): NextResponse | undefined {
    if (
      this.isApiAuthRoute() ||
      this.isPublicRoute() ||
      (!isLoggedIn && this.isAuthRoute()) ||
      (isLoggedIn && this.isPrivateRoute())
    ) {
      return intlMiddleware(this.req)
    }

    if (!isLoggedIn && this.isPrivateRoute()) {
      const redirectUrl = new URL(
        `/${this.locale}${DEFAULT_APP_LOGIN_REDIRECT}`,
        this.req.nextUrl.origin
      )
      return NextResponse.redirect(redirectUrl)
    }

    if (isLoggedIn && this.isAuthRoute()) {
      const redirectUrl = new URL(
        `/${this.locale}${APP_HOME}`,
        this.req.nextUrl.origin
      )
      return NextResponse.redirect(redirectUrl)
    }

    return
  }
}

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const routeHandler = new RouteHandler(req)

  return routeHandler.handleRedirection(isLoggedIn)
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
