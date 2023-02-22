import type { SanityDocument, ImageAsset, PortableTextBlock } from '@sanity/types'

export type JourneyExperience = SanityDocument & {
  title: string
  company: string
  companyLogo: ImageAsset
  description: PortableTextBlock[]
  priority: number
}
