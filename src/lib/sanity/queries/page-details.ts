import { groq } from 'next-sanity'

export const pageDetailsQuery = groq`
  *[_type == "pageDetails"][0] {
    ...,
    "profilePic": profilePic.asset->,
    "resume": resume.asset->,
    socials[]->,
    hobbies[]->,
  }
`
