import { createClient } from 'next-sanity'
import { cache } from 'react'

import { sanityProjectId, sanityDataset, sanityApiVersion } from '@/root/sanity.config'

export const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: false,
})

export const clientFetch = cache(client.fetch.bind(client))
