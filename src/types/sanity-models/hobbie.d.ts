import type { SanityDocument } from '@sanity/types'
import type { Category } from '@/types/sanity-models/category'

export type Hobbie = SanityDocument & {
  _type: 'hobbie'
  title: string
  iconName: string
  priority: number
}
