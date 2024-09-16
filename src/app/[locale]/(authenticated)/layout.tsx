import { currentUser } from '@/lib/auth'

import React from 'react'
import AppSidebar from './app/_components/app-sidebar'

export default async function AppLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await currentUser()

  if (!user) return null

  return (
    <div className='grid grid-cols-[18rem_1fr]'>
      <AppSidebar user={user} />
      <main>{children}</main>
    </div>
  )
}
