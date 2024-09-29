import { cn } from '@/lib/utils'
import { GenericProps } from '@/types/generic-props'
import React from 'react'

export default function SidebarRoot({ children, className }: GenericProps) {
  return (
    <aside
      className={cn([
        className,
        'bg-indigo-900 text-white h-screen flex flex-col gap-2'
      ])}
    >
      {children}
    </aside>
  )
}
