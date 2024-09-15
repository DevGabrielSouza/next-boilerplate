import { currentUser } from '@/lib/auth'
import React from 'react'

export default async function AppPage() {
  const user = await currentUser()

  return (
    <div>
      <h1>App Page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
