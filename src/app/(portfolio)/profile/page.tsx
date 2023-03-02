import { PortableText } from '@portabletext/react'

import { sanityClientFetch } from '@/lib/sanity/sanity.client'
import { pageDetailsQuery } from '@/lib/sanity/queries/page-details'
import { cn } from '@/lib/utils/classname'
import { PageTransition } from '@/components-ui/page-transition'
import { PageLinkBottom } from '@/components-ui/page-link-bottom'

import type { PageDetails } from '@/types/sanity-models/page-details'

const ProfilePage = async () => {
  const pageDetails = await sanityClientFetch<PageDetails>(pageDetailsQuery)

  return (
    <div className={cn('scrollbar-custom mt-2 overflow-y-scroll pb-6')}>
      <PageTransition>
        <h2 className={cn('page-title')}>{pageDetails.profileTitle}</h2>
        <div className={cn('prose-profile p-5 pb-2 md:px-8 md:text-base')}>
          <PortableText value={pageDetails.bio} />
        </div>
        <PageLinkBottom href='/skills'>Mes compétences</PageLinkBottom>
      </PageTransition>
    </div>
  )
}

export default ProfilePage
