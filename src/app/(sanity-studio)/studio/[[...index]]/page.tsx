'use client'

import { NextStudio } from 'next-sanity/studio'

import config from '@/root/sanity.config'

const StudioPage = () => {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return <NextStudio config={config} />
}

export default StudioPage
