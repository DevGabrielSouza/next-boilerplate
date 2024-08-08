import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Home() {
  const t = useTranslations()
  return (
    <main className='flex bg-violet-900 min-h-screen flex-col items-center justify-center'>
      <h1 className='text-4xl text-white font-bold'>Next Boilerplate</h1>
    </main>
  )
}
