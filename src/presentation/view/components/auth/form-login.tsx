'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/presentation/view/components/ui/card'
import { Button } from '@/presentation/view/components/ui/button'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import environment from '@/config/environment'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import GoogleIcon from '../icons/google-icon'

export default function FormLogin() {
  const t = useTranslations()

  return (
    <div className='flex h-screen w-full items-center justify-center bg-background px-4'>
      <Card className='mx-auto w-full max-w-md'>
        <CardHeader className='text-center'>
          <CardTitle className='text-3xl font-bold'>
            {t('auth.welcome')}
          </CardTitle>
          <CardDescription className='text-muted-foreground'>
            {t('auth.signIn')}
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col space-y-2'>
          <AuthButton
            href={`${environment.apiBaseUrl}/auth/github/`}
            icon={<GitHubLogoIcon className='mr-2 h-5 w-5' />}
            label='Sign in with GitHub'
          />
          <AuthButton
            href={`${environment.apiBaseUrl}/auth/google/`}
            icon={<GoogleIcon className='mr-2 h-5 w-5' />}
            label='Sign in with Google'
          />
        </CardContent>
      </Card>
    </div>
  )
}

interface AuthButtonProps {
  href: string
  icon: React.ReactNode
  label: string
}

function AuthButton({ href, icon, label }: AuthButtonProps) {
  return (
    <Link href={href} passHref className='w-full'>
      <Button variant='outline' className='w-full'>
        {icon}
        {label}
      </Button>
    </Link>
  )
}
