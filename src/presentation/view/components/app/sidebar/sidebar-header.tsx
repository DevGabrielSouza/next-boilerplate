import { cn } from '@/lib/utils'
import { GenericProps } from '@/types/generic-props'
import React from 'react'

export default function SidebarHeader({ children, className }: GenericProps) {
  return <div className={cn([className, 'p-4'])}>{children}</div>
}