import React from 'react'

import { cn } from '@/lib/utils/classname'
import { ProfilePicture } from '@/components-ui/profile-picture'

// export type ProfileBannerProps = {}

export const ProfileBanner = () => {
  return (
    <div className={cn('z-10 h-60 w-full rounded-md bg-grey-900 shadow-lg')}>
      {/* <ProfilePicture src={} /> */}
      <p>Bastien Pruvost</p>
    </div>
  )
}
