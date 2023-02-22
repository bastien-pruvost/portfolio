import type { SanityDocument } from '@sanity/types'

export type Techno = SanityDocument & {
  title: string
  category: Category
  iconName: string
  priority: number
}
