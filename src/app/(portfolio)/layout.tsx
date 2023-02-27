import { cn } from '@/lib/utils/classname'
import { Providers } from '@/components-providers/providers'
import { BackgroundParticles } from '@/components-ui/background-particles'
import { Banner } from '@/components/banner'
import { DarkThemeButton } from '@/components-ui/dark-theme-button'
import { Navbar } from '@/components/navbar'

import '@/assets/styles/globals.css'

import type { PropsWithChildren } from 'react'
import type { PageDetails } from '@/types/sanity-models/page-details'

// TODO: fetch pageDetails from sanity
const pageDetails = {
  profilePic: {
    url: 'https://cdn.sanity.io/images/on0eksnn/production/c2ce1e08163830c5c2765dca3d0697546ce58f24-500x500.jpg',
  },
  socials: {},
}

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <Providers>
      <div
        className={cn(
          'relative z-0 flex h-full w-full flex-col items-center justify-start gap-3 p-4 pt-2',
          'text-color-base font-poppins',
          'bg-grey-50 dark:bg-grey-1000',
        )}
      >
        <BackgroundParticles />
        <Banner pageDetails={pageDetails} />
        <div
          className={cn(
            'flex w-full grow flex-col overflow-hidden rounded-md shadow-lg',
            'bg-white dark:bg-grey-800',
          )}
        >
          <Navbar />
          <div className={cn('scrollbar-custom mt-2 overflow-y-scroll')}>{children}</div>
        </div>
      </div>
    </Providers>
  )
}

export default HomeLayout
