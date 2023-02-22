import type { SanityDocument } from '@sanity/types'

export type Social = SanityDocument & {
  title: string
  iconName: string
  url: string
  priority: number
}
