import type { SanityDocument } from '@sanity/types'

export type Social = SanityDocument & {
  _type: 'social'
  title: string
  iconName: string
  url: string
  priority: number
}
