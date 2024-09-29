import { cn } from '@/lib/utils'
import { GenericProps } from '@/types/generic-props'
import React from 'react'

export default function PageHeaderTitle({ children, className }: GenericProps) {
  return (
    <span
      className={cn(['text-md text-muted-foreground uppercase', className])}
    >
      {children}
    </span>
  )
}
