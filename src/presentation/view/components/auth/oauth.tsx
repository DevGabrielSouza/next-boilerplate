'use client'

import { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import logger from '@/config/logger'
import { APP_HOME, DEFAULT_APP_LOGIN_REDIRECT } from '@/routes'

interface AuthPageProps {
  code?: string
}

const Oauth = ({ code }: AuthPageProps) => {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const { status } = useSession()

  useEffect(() => {
    const handleAuth = async () => {
      if (!code) {
        handleError('Missing authentication code.')
        return
      }

      try {
        await exchangeCodeForToken(code)
        if (status === 'unauthenticated') {
          await signInUser()
        }
        router.push(APP_HOME)
      } catch (err) {
        handleError(
          err instanceof Error ? err.message : 'Unexpected error occurred.'
        )
      }
    }

    handleAuth()
  }, [code, router, status])

  const exchangeCodeForToken = async (authCode: string) => {
    const response = await fetch('http://localhost:3001/auth/exchange-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ code: authCode })
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData?.error || 'Failed to exchange code.')
    }
  }

  const signInUser = async () => {
    await signIn('credentials', { redirect: false })
  }

  const handleError = (message: string) => {
    setError(message)
    setLoading(false)
    logger.error({ message })
  }

  return (
    <div className='flex h-screen items-center justify-center bg-gray-100'>
      <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full'>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <AuthError
            error={error}
            onRetry={() => router.push(DEFAULT_APP_LOGIN_REDIRECT)}
          />
        ) : (
          <p className='text-center text-gray-600'>Redirecting...</p>
        )}
      </div>
    </div>
  )
}

const LoadingSpinner = () => (
  <div className='flex items-center justify-center'>
    <div
      className='spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500'
      role='status'
    >
      <span className='sr-only'>Loading...</span>
    </div>
    <p className='ml-4 text-gray-600'>Authenticating...</p>
  </div>
)

interface AuthErrorProps {
  error: string
  onRetry: () => void
}

const AuthError = ({ error, onRetry }: AuthErrorProps) => (
  <div className='text-center'>
    <p className='text-red-500 text-lg font-semibold mb-4'>
      Authentication Error
    </p>
    <p className='text-gray-600'>{error}</p>
    <button
      onClick={onRetry}
      className='mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'
    >
      Go back to login
    </button>
  </div>
)

export default Oauth
