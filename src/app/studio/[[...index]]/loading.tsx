'use client'

import { NextStudioLoading } from 'next-sanity/studio/loading'

import config from '@/root/sanity.config'

export default function Loading() {
  return <NextStudioLoading config={config} />
}
