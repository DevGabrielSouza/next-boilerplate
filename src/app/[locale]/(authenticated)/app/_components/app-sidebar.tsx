'use client'

import environment from '@/config/environment'
import { Sidebar } from '@/presentation/view/components/app/sidebar'
import { UserDropdown } from '@/presentation/view/components/app/user/user-dropdown'
import { GetPathNameWithoutLocale } from '@/shared/utils/pathname'

import { Session } from 'next-auth'
import React from 'react'

type AppSidebarProps = {
  user: Session['user']
}

export default function AppSidebar({ user }: AppSidebarProps) {
  const pathname = GetPathNameWithoutLocale()

  const isActive = (path: string) => {
    return pathname === path
  }

  const appName = environment.appName

  return (
    <Sidebar.Root>
      <Sidebar.Header>
        <h1 className='text-3xl text-center'>{appName}</h1>
      </Sidebar.Header>
      <Sidebar.Main>
        <Sidebar.NavMain>
          <Sidebar.NavItem>
            <Sidebar.NavLink href='/app' active={isActive('/app')}>
              Home
            </Sidebar.NavLink>
          </Sidebar.NavItem>
        </Sidebar.NavMain>
      </Sidebar.Main>
      <Sidebar.Footer>
        <UserDropdown user={user} />
      </Sidebar.Footer>
    </Sidebar.Root>
  )
}
