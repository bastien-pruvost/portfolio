'use client'
import { useEffect, useState } from 'react'
import { HiMapPin, HiOutlineBars3, HiXMark } from 'react-icons/hi2'

import { cn } from '@/lib/utils/classname'
import { BannerProfilePic } from '@/components-ui/banner-profile-pic'
import { BannerSocials } from '@/components-ui/banner-socials'
import { BannerLinks } from '@/components-ui/banner-links'

import type { PageDetails } from '@/types/sanity-models/page-details'
import { DarkThemeButton } from '@/components-ui/dark-theme-button'

export type BannerProps = {
  pageDetails: PageDetails
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Banner = ({ pageDetails }: any) => {
  const [isBannerOpen, setIsBannerOpen] = useState(false)

  const toggleBanner = () => {
    if (isBannerOpen === true) {
      setIsBannerOpen(false)
    } else {
      setIsBannerOpen(true)
    }
  }

  return (
    <header
      className={cn(
        'relative w-full max-w-2xl rounded-md text-center',
        'bg-white shadow-md dark:bg-grey-800',
        isBannerOpen ? 'mt-16' : 'mt-8',
      )}
    >
      <DarkThemeButton className={cn('absolute top-3 left-3 duration-500')} />

      <button
        onClick={toggleBanner}
        className={cn(
          'absolute top-3 right-3',
          isBannerOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
        )}
      >
        <HiOutlineBars3 preserveAspectRatio={'xMidYMid slice'} className={cn('h-7 w-8')} />
      </button>

      <button
        onClick={toggleBanner}
        className={cn(
          'absolute top-3 right-3',
          isBannerOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
        )}
      >
        <HiXMark preserveAspectRatio={'xMidYMid slice'} className={cn('h-8 w-8')} />
      </button>

      <div className={cn('px-5')}>
        <div
          className={cn(
            'relative mx-auto rounded-full shadow-md',
            'border-white dark:border-grey-700',
            isBannerOpen
              ? '-mt-16 mb-6 h-32 w-32 border-[5px]'
              : '-mt-8 mb-2 h-16 w-16 border-[3px]',
          )}
        >
          <BannerProfilePic profilePic={pageDetails.profilePic} />
        </div>

        <h1 className={cn('font-semibold', isBannerOpen ? 'mb-2 text-2xl' : 'mb-1 text-xl')}>
          Bastien Pruvost
        </h1>

        <p
          className={cn(
            'text-color-jade font-medium',
            isBannerOpen ? 'mb-3 text-base' : 'mb-4 text-sm',
          )}
        >
          Développeur Frontend
        </p>
      </div>
      <div
        className={cn(
          'overflow-hidden',
          isBannerOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div
          className={cn(
            'text-color-light mb-4 flex items-center justify-center gap-1.5',
            isBannerOpen ? 'text-base' : 'text-sm',
          )}
        >
          <HiMapPin
            preserveAspectRatio={'xMidYMid slice'}
            className={cn('', isBannerOpen ? 'h-5 w-4' : 'h-4 w-3')}
          />
          <p>Toulouse</p>
        </div>
        <BannerSocials className={cn('text-color-light mb-6 mt-2')} />

        <BannerLinks className={cn('text-color-base mx-auto')} />
      </div>
    </header>
  )
}
