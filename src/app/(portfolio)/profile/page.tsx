import { cn } from '@/lib/utils/classname'
import React from 'react'
import { PageTransition } from '@/components-ui/page-transition'
import Link from 'next/link'
import { HiChevronRight } from 'react-icons/hi2'
import { sanityClientFetch } from '@/lib/sanity/sanity.client'
import type { PageDetails } from '@/types/sanity-models/page-details'
import { pageDetailsQuery } from '@/lib/sanity/queries/page-details'
import { PortableText } from '@portabletext/react'
import { PageLinkBottom } from '@/components-ui/page-link-bottom'

const ProfilePage = async () => {
  const pageDetails = await sanityClientFetch<PageDetails>(pageDetailsQuery)

  return (
    <div className={cn('scrollbar-custom mt-2 overflow-y-scroll pb-6')}>
      <PageTransition>
        <h2 className={cn('page-title')}>{pageDetails.profileTitle}</h2>
        <div className={cn('prose-profile md:text-base', 'p-5 pb-2 md:px-8')}>
          <PortableText value={pageDetails.bio} />
        </div>
        <PageLinkBottom href='/skills'>Mes compétences</PageLinkBottom>
      </PageTransition>
    </div>
  )
}

export default ProfilePage
