import React from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils/classname'

import type { ImageAsset } from '@sanity/types'

type ProfilePicProps = {
  className: string
  profilePic: ImageAsset
}

export const ProfilePic = ({ className, profilePic }: ProfilePicProps) => {
  return (
    <div className={cn(className)}>
      <Image
        className={cn('object-contain')}
        src={profilePic.url}
        alt='Bastien Pruvost - Développeur Web'
        quality={100}
        sizes='208px'
        // width={250}
        // height={280}
        // width={profilePic.metadata.dimensions.width}
        // height={profilePic.metadata.dimensions.height}
        fill
        priority
      />
    </div>
  )
}
