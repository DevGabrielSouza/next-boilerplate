import { cn } from '@/lib/utils'
import { GenericProps } from '@/types/generic-props'
import React from 'react'

export default function PageHeader({ children, className }: GenericProps) {
  return (
    <header
      className={cn([
        className,
        'px-4 py-8 h-12 border-b border-border flex items-center justify-between'
      ])}
    >
      {children}
    </header>
  )
}
