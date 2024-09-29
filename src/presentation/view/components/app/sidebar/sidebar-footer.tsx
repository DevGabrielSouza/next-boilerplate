import { cn } from '@/lib/utils'
import { GenericProps } from '@/types/generic-props'
import React from 'react'

export default function SidebarFooter({ children, className }: GenericProps) {
  return (
    <div className={cn([className, 'mt-auto border-t border-border p-4'])}>
      {children}
    </div>
  )
}
