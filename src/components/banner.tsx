'use client'
import { useEffect, useState } from 'react'
import { HiMapPin, HiOutlineBars3, HiXMark } from 'react-icons/hi2'

import { cn } from '@/lib/utils/classname'
import { BannerProfilePic } from '@/components-ui/banner-profile-pic'
import { BannerSocials } from '@/components-ui/banner-socials'
import { BannerLinks } from '@/components-ui/banner-links'

import type { PageDetails } from '@/types/sanity-models/page-details'
import { DarkThemeButton } from '@/components-ui/dark-theme-button'
import { useOutsideClick } from '@/lib/hooks/use-outside-click'

export type BannerProps = {
  pageDetails: PageDetails
}

export const Banner = ({ pageDetails }: BannerProps) => {
  const [isBannerOpen, setIsBannerOpen] = useState(false)
  const containerRef = useOutsideClick(() => {
    setIsBannerOpen(false)
  })

  const toggleBanner = () => {
    if (isBannerOpen === true) {
      setIsBannerOpen(false)
    } else {
      setIsBannerOpen(true)
    }
  }

  return (
    <header
      ref={containerRef}
      className={cn(
        'transition-margin animation-entry-banner relative w-full rounded-md text-center',
        'bg-grey-0 shadow-md dark:bg-grey-800',
        isBannerOpen ? 'mt-16' : 'mt-8',
        ' lg:max-w-sm',
        'lg:-mr-11 lg:pr-8',
      )}
    >
      <DarkThemeButton
        className={cn('hover:text-color-jade transition-invert-button absolute top-3 left-3')}
      />

      <button
        onClick={toggleBanner}
        className={cn(
          'hover:text-color-jade transition-invert-button absolute top-3 right-3',
          isBannerOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
          'lg:hidden',
        )}
        aria-label='Ouvrir le menu'
      >
        <HiOutlineBars3 preserveAspectRatio={'xMidYMid slice'} className={cn('h-7 w-8')} />
      </button>

      <button
        onClick={toggleBanner}
        className={cn(
          'hover:text-color-jade transition-invert-button absolute top-3 right-3',
          isBannerOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
          'lg:hidden',
        )}
        aria-label='Fermer le menu'
      >
        <HiXMark preserveAspectRatio={'xMidYMid slice'} className={cn('h-8 w-8')} />
      </button>

      <div className={cn('px-5')}>
        <BannerProfilePic
          className={cn(
            'transition-image animation-entry-profile-pic mx-auto rounded-full shadow-md',
            'border-white dark:border-grey-700',
            isBannerOpen
              ? '-mt-16 mb-6 h-32 w-32 border-[5px]'
              : '-mt-8 mb-2 h-16 w-16 border-[3px]',
            'lg:mb-6 lg:-mt-16 lg:h-32 lg:w-32 lg:border-[5px]',
          )}
          profilePic={pageDetails.profilePic}
        />

        <h1
          className={cn(
            'transition-text-size font-semibold',
            isBannerOpen ? 'mb-1 text-2xl' : 'mb-1 text-xl',
            'md:text-2xl lg:mb-3',
          )}
        >
          {pageDetails.fullName}
        </h1>

        <p
          className={cn(
            'text-color-jade transition-text-size font-medium',
            isBannerOpen ? 'mb-2 text-base' : 'mb-4 text-sm',
            'md:text-base lg:mb-4',
          )}
        >
          {pageDetails.job}
        </p>
      </div>
      <div
        className={cn(
          'transition-banner',
          isBannerOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
          'lg:max-h-96 lg:opacity-100',
        )}
      >
        <div
          className={cn(
            'text-color-light transition-text-size mb-6 flex items-center justify-center gap-1.5 font-medium',
            isBannerOpen ? 'text-base' : 'text-sm',
            'lg:mb-8 lg:text-base',
          )}
        >
          <HiMapPin
            preserveAspectRatio={'xMidYMid slice'}
            className={cn(isBannerOpen ? 'h-5 w-4' : 'h-4 w-3', 'transition-image lg:h-5 lg:w-4')}
          />
          <p>{pageDetails.city}</p>
        </div>
        <BannerSocials
          className={cn('text-color-light mb-10 mt-2')}
          socials={pageDetails.socials}
        />

        <BannerLinks className={cn('text-color-base mx-auto')} resume={pageDetails.resume} />
      </div>
    </header>
  )
}
