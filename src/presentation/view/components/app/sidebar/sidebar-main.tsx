import { cn } from '@/lib/utils'
import { GenericProps } from '@/types/generic-props'
import React from 'react'

export default function SidebarMain({ children, className }: GenericProps) {
  return <div className={cn([className, 'px-4'])}>{children}</div>
}
