import type { SanityDocument, ImageAsset, PortableTextBlock, FileAsset } from '@sanity/types'
import type { Social } from '@/types/sanity-models/social'
import type { Hobbie } from '@/types/sanity-models/hobbie'

export type PageDetails = SanityDocument & {
  _type: 'pageDetails'
  profilePic: ImageAsset
  fullName: string
  job: string
  city: string
  birthDate: Date
  email: string
  bio: Array<PortableTextBlock>
  hobbies: Array<Hobbie>
  socials: Array<Social>
  resume: FileAsset
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
