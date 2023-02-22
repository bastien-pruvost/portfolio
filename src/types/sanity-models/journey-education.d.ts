import type { SanityDocument } from '@sanity/types'

export type JourneyEducation = SanityDocument & {
  title: string
  school: string
  degree: string
  startDate: Date
  endDate: Date
  priority: number
}
