'use client'

import { usePathname } from 'next/navigation'

export function GetPathNameWithoutLocale(): string {
  const pathname = usePathname()
  return pathname.replace(/^\/[a-z]{2}-[A-Z]{2}/, '')
}
