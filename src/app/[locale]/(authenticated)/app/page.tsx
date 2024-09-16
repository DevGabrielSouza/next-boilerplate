import { currentUser } from '@/lib/auth'
import React from 'react'

export default async function AppPage() {
  const user = await currentUser()

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome {user?.email}</p>
      <pre>
        <p>{JSON.stringify(user, null, 2)}</p>
      </pre>
    </div>
  )
}
