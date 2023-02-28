import { groq } from 'next-sanity'

export const allSkillsQuery = groq`
  *[_type == "skill"] {
    ...,
    "technos": *[_type == "techno" && category._ref ==  ^._id] {
      ...,
    }
  }
`
