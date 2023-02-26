import React from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils/classname'

import type { ImageAsset } from '@sanity/types'

export type BannerProfilePicProps = {
  profilePic: ImageAsset
}

export const BannerProfilePic = ({ profilePic }: BannerProfilePicProps) => {
  return (
    <Image
      className={cn('block h-full w-full rounded-full object-contain')}
      src={profilePic.url}
      alt='Photo de Bastien Pruvost'
      quality={100}
      sizes='128px'
      // sizes='(max-width: 390px) 79vw,
      //           (max-width: 640px) 88vw,
      //           (max-width: 768px) 90vw,
      //           (max-width: 1024px) 43vw,
      //           28vw'
      priority
      fill
    />
  )
}
