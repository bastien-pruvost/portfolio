import { PortableText } from '@portabletext/react'

import { sanityClientFetch } from '@/lib/sanity/sanity.client'
import { pageDetailsQuery } from '@/lib/sanity/queries/page-details'
import { cn } from '@/lib/utils/classname'

import type { PageDetails } from '@/types/sanity-models/page-details'
import { PageLayout } from '@/components-ui/page-layout'
import { Wrapper } from '@/components-ui/wrapper'
import { ProfilePic } from '@/components-ui/profile-pic'

const ProfilePage = async () => {
  const pageDetails = await sanityClientFetch<PageDetails>(pageDetailsQuery)

  return (
    <PageLayout title={pageDetails.profileTitle}>
      <Wrapper>
        <div
          className={cn('mt-2 flex flex-wrap items-start justify-center gap-4 sm:gap-2 lg:mt-4')}
        >
          <ProfilePic
            className={cn(
              // 'animation-entry-profile-pic',
              'relative mt-4 h-52 w-52 shrink-0 shadow-md',
              'transition-image overflow-hidden rounded-full',
              'border-white dark:border-grey-700',
            )}
            profilePic={pageDetails.profilePic}
          />
          <div className={cn('prose-profile shrink grow basis-80')}>
            <PortableText value={pageDetails.bio} />
          </div>
        </div>
      </Wrapper>
    </PageLayout>
  )
}

export default ProfilePage
