import type { SanityDocument } from '@sanity/types'
import type { Skill } from './skill'

export type Techno = SanityDocument & {
  _type: 'techno'
  title: string
  category: Skill
  iconName: string
  // priority: number
}
