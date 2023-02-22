import type { SanityDocument } from '@sanity/types'

export type Techno = SanityDocument & {
  _type: 'techno'
  title: string
  category: Category
  iconName: string
  priority: number
}
