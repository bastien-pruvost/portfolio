import type { PropsWithChildren } from 'react'

export const metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
}

const SanityStudioLayout = ({ children }: PropsWithChildren) => {
  return <>{children}</>
}

export default SanityStudioLayout
