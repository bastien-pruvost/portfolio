import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '@/schemas'

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || ''
export const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || ''

export default defineConfig({
  basePath: '/studio',
  name: 'portfolio_content_studio',
  title: 'Contenu du portfolio',
  projectId: sanityProjectId,
  dataset: sanityDataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
