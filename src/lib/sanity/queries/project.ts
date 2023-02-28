import { groq } from 'next-sanity'

export const allProjectsQuery = groq`
  *[_type == "project"] {
    ...,
    "mainImage": mainImage.asset->,
    "slug": slug.current,
    "technos": *[_type == "techno"] {
      ...,
      category->
    }
  }
`

export const projectByIdQuery = groq`
  *[_type == "project" && _id == $projectId ][0] {
    ...,
    "mainImage": mainImage.asset->,
    "slug": slug.current,
    technos[]->
  }
`
export const projectBySlugQuery = groq`
  *[_type == "project" && slug == $projectSlug ][0] {
    ...,
    "mainImage": mainImage.asset->,
    "slug": slug.current,
    technos[]->
  }
`
