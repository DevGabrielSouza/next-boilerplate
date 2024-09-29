import { cn } from '@/lib/utils'
import { GenericProps } from '@/types/generic-props'
import React from 'react'

export default function PageFooter({ children, className }: GenericProps) {
  return (
    <footer className={cn([className, 'mt-auto border-t border-border p-4'])}>
      {children}
    </footer>
  )
}
