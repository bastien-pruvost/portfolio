import { groq } from 'next-sanity'

export const pageInfosQuery = groq`
      *[_type == "pageInfos"][0] {
      ...,
    }
`
