import logger from '@/config/logger'
import Oauth from '@/presentation/view/components/auth/oauth'
import { redirect } from 'next/navigation'

interface AuthPageProps {
  params: {
    code?: string
  }
}

export default async function AuthPage({ params }: AuthPageProps) {
  const { code } = params

  logger.info({
    message: 'Authenticating user',
    code
  })

  if (!code) {
    return redirect('/login')
  }

  return (
    <div>
      <Oauth code={code} />
    </div>
  )
}
