import { PortableText } from '@portabletext/react'

import { sanityClientFetch } from '@/lib/sanity/sanity.client'
import { pageInfosQuery } from '@/lib/sanity/queries/page-infos'
import { allProjectsQuery } from '@/lib/sanity/queries/project'
import { ClientLoggerComponent } from '@/lib/utils/client-logger-component'

import type { PageInfos } from '@/types/sanity-models/page-infos'
import type { Project } from '@/types/sanity-models/project'

const HomePage = async () => {
  const pageInfos = await sanityClientFetch<PageInfos>(pageInfosQuery)
  return (
    <main>
      <p>Bjr</p>
    </main>
  )
}

export default HomePage
