import { type DefaultSession } from 'next-auth'

export type ExtendedUser = DefaultSession['user'] & {
  email_verified_at: string
  isOAuth: boolean
}

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser
  }
}
