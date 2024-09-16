import { cn } from '@/lib/utils'
import { GenericProps } from '@/types/generic-props'
import React from 'react'

export default function PageRoot({ children, className }: GenericProps) {
  return (
    <div className={cn(['h-screen overflow-hidden', className])}>
      {children}
    </div>
  )
}
