import { defineCliConfig } from 'sanity/cli'

import { sanityProjectId, sanityDataset } from '@/root/sanity.config'

export default defineCliConfig({
  api: {
    sanityProjectId,
    dataset,
  },
})
