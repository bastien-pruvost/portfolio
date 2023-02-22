import type { SanityDocument, ImageAsset, PortableTextBlock } from '@sanity/types'

export type JourneyExperience = SanityDocument & {
  _type: 'journeyExperience'
  title: string
  company: string
  companyLogo: ImageAsset
  description: PortableTextBlock[]
  priority: number
}
