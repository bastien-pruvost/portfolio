import type { SanityDocument } from '@sanity/types'

export type JourneyEducation = SanityDocument & {
  _type: 'journeyEducation'
  title: string
  school: string
  degree: string
  startDate: Date
  endDate: Date
  priority: number
}
