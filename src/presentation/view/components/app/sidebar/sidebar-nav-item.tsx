import { cn } from '@/lib/utils'
import { GenericProps } from '@/types/generic-props'
import React from 'react'

export default function SidebarNavItem({ children, className }: GenericProps) {
  return <div className={cn([className, ''])}>{children}</div>
}
