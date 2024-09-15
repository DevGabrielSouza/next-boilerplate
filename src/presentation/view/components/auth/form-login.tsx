'use client'
import { AuthProvider } from '@/shared/domain/enums/auth-provider.enum'
import { signIn } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import React from 'react'

type FormLoginProps = {
  provider: AuthProvider
  credentials?: {
    email: string
    password: string
  }
}

export default function FormLogin() {
  const t = useTranslations()

  const handleLogin = async ({ provider, credentials }: FormLoginProps) => {
    signIn(provider, credentials)
  }

  return (
    <div>
      <p>{t('form.select_option')}</p>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          handleLogin({
            provider: AuthProvider.CREDENTIALS,
            credentials: {
              email: 'devgabrielsouza@yahoo.com',
              password: '123456782'
            }
          })
        }}
      >
        <input
          type='email'
          placeholder='Email'
          className='border border-gray-400 p-2 mb-4'
        />
        <input
          type='password'
          placeholder='Password'
          className='border border-gray-400 p-2 mb-4'
        />
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Login
        </button>
      </form>

      <button
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => handleLogin({ provider: AuthProvider.GOOGLE })}
      >
        Login with Google
      </button>
    </div>
  )
}
