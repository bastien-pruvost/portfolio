import '@/assets/styles/globals.css'
import { Poppins } from 'next/font/google'

import { sanityClientFetch } from '@/lib/sanity/sanity.client'
import { pageDetailsQuery } from '@/lib/sanity/queries/page-details'
import { cn } from '@/lib/utils/classname'
import { Providers } from '@/components-providers/providers'
import { Banner } from '@/components/banner'
import { Navbar } from '@/components/navbar'
import { BackgroundParticles } from '@/components-ui/background-particles'

import type { PropsWithChildren } from 'react'
import type { PageDetails } from '@/types/sanity-models/page-details'

export const metadata = {
  title: 'Portfolio Bastien Pruvost',
  description:
    'Portfolio de Bastien Pruvost. Développeur Web spécialisé dans la création de sites web en Javascript, TypeScript, React, Node.js.',
  creator: 'Bastien Pruvost',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
}

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
})

const HomeLayout = async ({ children }: PropsWithChildren) => {
  const pageDetails = await sanityClientFetch<PageDetails>(pageDetailsQuery)

  return (
    <Providers>
      <div
        className={cn(
          'relative z-0 h-full w-full',
          'flex items-center justify-center',
          'text-color-base font-poppins',
          'bg-grey-50 dark:bg-grey-1000',
          poppins.className,
        )}
      >
        <BackgroundParticles />
        <div
          className={cn(
            'flex h-full w-full flex-col items-center justify-start gap-3 p-4 md:p-8 lg:max-h-[52rem] lg:min-h-[626px] lg:max-w-[88rem] lg:flex-row lg:items-center lg:px-16 lg:py-16',
          )}
        >
          <Banner pageDetails={pageDetails} />
          <div
            className={cn(
              'dark:shadow-left-md relative z-10 flex w-full grow flex-col rounded-md shadow-md ',
              'animation-entry-app overflow-hidden',
              'bg-grey-0 dark:bg-grey-800',
              'lg:h-full',
            )}
          >
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </Providers>
  )
}

export default HomeLayout
