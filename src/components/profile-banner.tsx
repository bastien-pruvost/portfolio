import React from 'react'

import { cn } from '@/lib/utils/classname'
import { ProfilePicture } from '@/components-ui/profile-picture'
import type { PageDetails } from '@/types/sanity-models/page-details'
import Image from 'next/image'

export type ProfileBannerProps = {
  pageDetails: PageDetails
}

export const ProfileBanner = ({ pageDetails }: any) => {
  return (
    <header
      className={cn(
        'relative mx-auto mt-12 flex w-11/12 flex-col items-center rounded-md bg-grey-50 px-5 pb-5 shadow-lg dark:bg-grey-800',
      )}
    >
      <div
        className={cn(
          'relative -mt-12 h-24 w-24 rounded-full border-4 border-grey-50 shadow-md dark:border-grey-700',
        )}
      >
        <ProfilePicture profilePic={pageDetails.profilePic} />
      </div>

      <p className={cn('mt-3 text-2xl font-semibold')}>Bastien Pruvost</p>
      <p className={cn('mt-2 text-sm text-jade-700 dark:text-jade-400')}>Développeur Frontend</p>
    </header>
  )
}
