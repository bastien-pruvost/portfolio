import '@/assets/styles/globals.css'

import { cn } from '@/lib/utils/classname'
import { Providers } from '@/components-providers/providers'
import { BackgroundParticles } from '@/components-ui/background-particles'
import { Banner } from '@/components/banner'
import { DarkThemeButton } from '@/components-ui/dark-theme-button'
import { Navbar } from '@/components/navbar'
import { pageDetailsQuery } from '@/lib/sanity/queries/page-details'
import type { PropsWithChildren } from 'react'
import type { PageDetails } from '@/types/sanity-models/page-details'
import { sanityClientFetch } from '@/lib/sanity/sanity.client'
import { Poppins } from 'next/font/google'

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
            'flex h-full w-full flex-col items-center justify-start gap-3 p-4 md:p-8 lg:max-h-[48rem] lg:min-h-[626px] lg:max-w-[88rem] lg:flex-row lg:items-center lg:px-16 lg:py-16',
          )}
        >
          <Banner pageDetails={pageDetails} />
          <div
            className={cn(
              'shadow-left-md relative z-10 flex w-full grow flex-col rounded-md ',
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
