import { ExtendedUser } from '@/types/next-auth'
import { auth } from '@/auth'

export const currentSession = async () => {
  const session = await auth()

  return session
}

export const currentUser = async () => {
  const session = await auth()

  return session?.user || null
}

export const updateUser = async (user: ExtendedUser) => {
  const session = await auth()

  if (session) {
    session.user = user
  }
}
