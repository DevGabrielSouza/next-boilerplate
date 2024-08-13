'use client'
import { ThemeType } from '@/types/style'
import React from 'react'
import { ThemeProvider } from 'styled-components'

interface ThemeProps {
  theme: ThemeType
  children: React.ReactNode
}

export default function AppTheme({ theme, children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
