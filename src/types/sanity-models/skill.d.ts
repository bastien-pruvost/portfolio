import type { SanityDocument, PortableTextBlock } from '@sanity/types'
import type { Techno } from './techno'

export type Skill = SanityDocument & {
  title: string
  description: PortableTextBlock[]
  technos: Techno[]
  priority: number
}
