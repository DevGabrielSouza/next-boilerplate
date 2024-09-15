import type { NextAuthConfig, User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { AxiosHttpClient } from './shared/infra/http/axios-http-client'
import { HttpMethod } from './shared/infra/http/http-client'
import environment from './config/environment'

import logger from './config/logger'

import { cookies } from 'next/headers'

export default {
  providers: [
    Credentials({
      async authorize(): Promise<User | null> {
        const token = cookies().get('jwt')?.value

        if (token) {
          try {
            const axiosClient = new AxiosHttpClient()
            const userResponse = await axiosClient.request<User>({
              url: `${environment.apiBaseUrl}/auth/me`,
              method: HttpMethod.POST,
              headers: {
                Authorization: `Bearer ${token}`
              }
            })

            const user = userResponse.data

            if (user) {
              cookies().set('jwt', '', { maxAge: -1 })
              return {
                id: user.id,
                email: user.email,
                name: user.name,
                image: user.image,
                emailVerifiedAt: user.emailVerifiedAt,
                token
              } as User
            } else {
              return null
            }
          } catch (error) {
            logger.error('Error fetching user from /me endpoint', error)
            return null
          }
        }
        return null
      }
    })
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.id) {
        return false
      }
      return true
    },

    async jwt({ token, user }) {
      if (user) {
        token = {
          ...token,
          id: user.id,
          email: user.email,
          name: user.name,
          picture: user.image,
          emailVerifiedAt: user.emailVerifiedAt,
          accessToken: user.token
        }
      }
      return token
    },

    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        email: token.email as string,
        name: token.name as string,
        image: token.picture as string,
        emailVerifiedAt: token?.emailVerifiedAt as string,
        emailVerified: new Date(),
        token: token.accessToken as string
      }
      session.token = token.accessToken as string
      return session
    }
  }
} satisfies NextAuthConfig
