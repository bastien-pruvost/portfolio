import React, { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils/classname'

import { Navbar } from '@/components/navbar'
import { ProfileBanner } from '@/components/profile-banner'

const pageDetails = {}

export const PortfolioContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className={cn('h-full w-full')}>
      <ProfileBanner />
      <Navbar />
      {children}
    </div>
  )
}
