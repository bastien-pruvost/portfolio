'use client'

import type { PropsWithChildren } from 'react'

import { ReCaptchaProvider } from 'next-recaptcha-v3'

export const RecaptchaProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? ''}>
      {children}
    </ReCaptchaProvider>
  )
}
