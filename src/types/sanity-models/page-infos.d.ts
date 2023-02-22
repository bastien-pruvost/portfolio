import type { SanityDocument, ImageAsset, PortableTextBlock } from '@sanity/types'
import type { Social } from './social'

export type PageInfos = SanityDocument & {
  _type: 'pageInfos'
  profilePic: ImageAsset
  fullName: string
  job: string
  city: string
  birthDate: Date
  email: string
  bio: PortableTextBlock[]
  socials: Social[]
  profileTitle: string
  profileSubTitle: string
  projectsTitle: string
  projectsSubTitle: string
  skillsTitle: string
  skillsSubTitle: string
  contactTitle: string
  contactSubTitle: string
  journeyTitle?: string
  journeySubTitle?: string
}
