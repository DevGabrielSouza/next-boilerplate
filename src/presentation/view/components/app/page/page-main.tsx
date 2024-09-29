import { cn } from '@/lib/utils'
import { GenericProps } from '@/types/generic-props'
import React from 'react'

export default function PageMain({ children, className }: GenericProps) {
  return (
    <main className={cn(['h-full overflow-auto p-4', className])}>
      {children}
    </main>
  )
}
