'use client'
import { ReCaptchaProvider } from 'next-recaptcha-v3'
import type { PropsWithChildren } from 'react'

export const RecaptchaProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? ''}>
      {children}
    </ReCaptchaProvider>
  )
}
