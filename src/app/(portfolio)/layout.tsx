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
  title: 'Portfolio Bastien Pruvost | Développeur Web Front-End',
  description:
    'Portfolio de Bastien Pruvost. Développeur Web Frontend spécialisé dans la création de sites web en Javascript, TypeScript, React et Node.js.',
  creator: 'Bastien Pruvost',
  openGraph: {
    locale: 'fr-FR',
    title: 'Portfolio Bastien Pruvost | Développeur Web Front-End',
    description:
      'Portfolio de Bastien Pruvost. Développeur Web Frontend spécialisé dans la création de sites web en Javascript, TypeScript, React et Node.js.',
    url: 'https://www.pruvostbastien.fr',
    siteName: 'Portfolio Bastien Pruvost | Développeur Web Front-End',
    images: [
      {
        url: 'https://www.pruvostbastien.fr/og.jpeg',
        width: 1200,
        height: 600,
        alt: 'Portfolio Bastien Pruvost | Développeur web front-end',
      },
    ],
  },
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
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const revalidate = 604800

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
            'relative h-full w-full p-4 md:p-8',
            'flex flex-col items-center justify-start gap-3 ',
            'max-w-[68rem] md:static',
          )}
        >
          <Banner pageDetails={pageDetails} />
          <div
            className={cn(
              'dark:shadow-left-md relative z-10 w-full overflow-hidden rounded-md shadow-md lg:h-full',
              'flex grow flex-col',
              // 'animation-entry-app ',
              'bg-grey-0 dark:bg-grey-800',
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
