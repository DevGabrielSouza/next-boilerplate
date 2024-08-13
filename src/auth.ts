import NextAuth, { type Session } from 'next-auth'
import authConfig from './auth.config'
import { cookies } from 'next/headers'

interface Token {
  access_token: string
  token_type: string
  expires_in: number
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/login'
  },
  ...authConfig
})
