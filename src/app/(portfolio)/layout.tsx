import { cn } from '@/lib/utils/classname'
import { Providers } from '@/components-providers/providers'
import { BackgroundParticles } from '@/components-ui/background-particles'
import { ProfileBanner } from '@/components/profile-banner'
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
}

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={cn(
        'relative h-screen w-screen bg-grey-100 p-2 font-poppins text-grey-800 dark:bg-grey-900 dark:text-grey-50',
      )}
    >
      <Providers>
        <BackgroundParticles />
        <ProfileBanner pageDetails={pageDetails} />
        <main>{children}</main>
        <DarkThemeButton />
        <Navbar />
      </Providers>
    </div>
  )
}

export default HomeLayout
