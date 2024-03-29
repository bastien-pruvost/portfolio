'use client'
import { ThemeProvider } from 'next-themes'

import type { PropsWithChildren } from 'react'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      {children}
      <style jsx global>{`
        .grecaptcha-badge {
          visibility: hidden !important;
        }
      `}</style>
    </ThemeProvider>
  )
}
