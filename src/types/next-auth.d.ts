// src/types/next-auth.d.ts

import { DefaultSession } from 'next-auth'

export type ExtendedUser = DefaultSession['user'] & {
  id: string
  email: string
  name: string
  image: string | null
  emailVerifiedAt: string | null
  token: string
}

export type ExtendedToken = DefaultSession['token'] & ExtendedUser

declare module 'next-auth' {
  /**
   * Retorno do `useSession`, `getSession` e callback `session`
   */
  interface Session {
    user: ExtendedUser
    token: ExtendedToken
  }

  /**
   * Tipos estendidos para os objetos de token e usuário
   */
  interface User {
    id: string
    email: string
    name: string
    image: string | null
    emailVerifiedAt: string | null
    token: string // JWT retornado pela API do NestJS
  }

  interface JWT {
    accessToken: string
  }
}
