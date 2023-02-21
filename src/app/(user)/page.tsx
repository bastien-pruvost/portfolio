import { PortableText } from '@portabletext/react'

import { sanityClientFetch } from '@/lib/sanity/sanity.client'
import { pageInfosQuery } from '@/lib/sanity/queries/page-infos'
import { ClientLoggerComponent } from '@/lib/utils/client-logger-component'

import type { PageInfos } from '@/types/sanity-models/page-infos'

const HomePage = async () => {
  const pageInfos = await sanityClientFetch<PageInfos>(pageInfosQuery)

  return (
    <main>
      <ClientLoggerComponent toLog={pageInfos} />
      <p>Bjr</p>
    </main>
  )
}

export default HomePage
