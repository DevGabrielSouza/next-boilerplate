import { cn } from '@/lib/utils'
import { GenericProps } from '@/types/generic-props'
import Link, { LinkProps } from 'next/link'
import React from 'react'

type SidebarNavLinkProps = GenericProps &
  LinkProps & {
    active?: boolean
  }

export default function SidebarNavLink({
  children,
  className,
  active,
  ...props
}: SidebarNavLinkProps) {
  return (
    <Link
      className={cn([
        'flex items-center text-sm px-3 py-2 rounded-md',
        active && 'bg-secondary text-violet-900',
        className
      ])}
      {...props}
    >
      {children}
    </Link>
  )
}
