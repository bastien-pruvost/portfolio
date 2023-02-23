import type { SanityDocument, PortableTextBlock } from '@sanity/types'
import type { Techno } from '@/types/sanity-models/techno'

export type Skill = SanityDocument & {
  _type: 'skill'
  title: string
  description: PortableTextBlock[]
  technos: Techno[]
  priority: number
}
