import { PortableText } from '@portabletext/react'

import { sanityClientFetch } from '@/lib/sanity/sanity.client'
import { pageDetailsQuery } from '@/lib/sanity/queries/page-details'
import { cn } from '@/lib/utils/classname'

import type { PageDetails } from '@/types/sanity-models/page-details'
import { PageLayout } from '@/components-ui/page-layout'
import { Wrapper } from '@/components-ui/wrapper'

const ProfilePage = async () => {
  const pageDetails = await sanityClientFetch<PageDetails>(pageDetailsQuery)

  return (
    <PageLayout title={pageDetails.profileTitle}>
      <Wrapper>
        <div className={cn('prose-profile')}>
          <PortableText value={pageDetails.bio} />
        </div>
      </Wrapper>
    </PageLayout>
  )
}

export default ProfilePage
