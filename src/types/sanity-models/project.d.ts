import type { SanityDocument, ImageAsset, PortableTextBlock, Slug } from '@sanity/types'
import type { Techno } from './techno'

export type Project = SanityDocument & {
  _type: 'project'
  title: string
  slug: Slug
  mainImage: ImageAsset
  technos: Techno[]
  description: PortableTextBlock[]
  publishedAt: Date
  githubLink: string
  websiteLink: string
  priority: number
}
