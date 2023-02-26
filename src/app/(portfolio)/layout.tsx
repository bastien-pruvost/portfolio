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
    <div
      className={cn(
        'relative z-[0]',
        'bg-grey-50 dark:bg-grey-1000',
        'text-color-base font-poppins',
      )}
    >
      <Providers>
        <BackgroundParticles />
        <div className={cn('flex h-screen flex-col justify-start gap-3 p-4 pt-2')}>
          <Banner pageDetails={pageDetails} />
          <main
            className={cn(
              'z-20 mx-auto w-full overflow-hidden rounded-md shadow-lg',
              'bg-white dark:bg-grey-800',
            )}
          >
            <Navbar />
            <div className={cn('p-4', 'scrollbar-custom overflow-y-scroll')}>{children}</div>
          </main>
        </div>
        <DarkThemeButton />
      </Providers>
    </div>
  )
}

export default HomeLayout
