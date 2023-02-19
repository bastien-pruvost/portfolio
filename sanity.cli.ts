import { defineCliConfig } from 'sanity/cli'

import { projectId, dataset } from '@/root/sanity.config'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
})
