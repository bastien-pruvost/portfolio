import React from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils/classname'

import type { ImageAsset } from '@sanity/types'

export type BannerProfilePicProps = {
  className: string
  profilePic: ImageAsset
}

export const BannerProfilePic = ({ className, profilePic }: BannerProfilePicProps) => {
  return (
    <Image
      className={cn(className)}
      src={profilePic.url}
      alt='Bastien Pruvost - Développeur Web'
      quality={100}
      // sizes='128px'
      width={128}
      height={128}
      // width={profilePic.metadata.dimensions.width}
      // height={profilePic.metadata.dimensions.height}
      priority
    />
  )
}
