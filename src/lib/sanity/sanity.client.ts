import { createClient } from 'next-sanity'
import { cache } from 'react'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'undefined',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2022-11-15',
}

export const sanityClient = createClient(config)

export const sanityClientFetch = cache(sanityClient.fetch.bind(sanityClient))
