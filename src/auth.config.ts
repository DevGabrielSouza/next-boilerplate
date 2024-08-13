import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

import { LoginSchema } from '@/schemas'
import { AxiosHttpClient } from './shared/infra/http/axios-http-client'
import { HttpMethod } from './shared/infra/http/http-client'
import environment from './config/environment'
import { LoginResponse } from './shared/types/http-responses'

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials)

        if (!validatedFields.success) return null

        const { email, password } = validatedFields.data

        const axiosClient = new AxiosHttpClient()

        try {
          const loginResponse = await axiosClient.request<LoginResponse>({
            url: `${environment.apiBaseUrl}/auth/login`,
            method: HttpMethod.POST,
            body: { email, password }
          })
          return (loginResponse?.data?.user as any) || null
        } catch (error: any) {
          return null
        }

        return null
      }
    })
  ]
} satisfies NextAuthConfig
