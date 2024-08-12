import environment from '@/config/environment'
import logger from '@/config/logger'

export default function Home() {
  const { apiBaseUrl } = environment

  logger.info(apiBaseUrl)

  return (
    <main className='flex bg-violet-900 min-h-screen flex-col items-center justify-center'>
      <h1 className='text-4xl text-white font-bold'>Next Boilerplate</h1>
    </main>
  )
}
