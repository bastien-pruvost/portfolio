import { cn } from '@/lib/utils/classname'
import React from 'react'

import { PageTransition } from '@/components-ui/page-transition'

const ProfilePage = () => {
  return (
    <PageTransition>
      <h2 className={cn('page-title')}>Page profil</h2>
      <h3>Bonjour, moi c&apos;est Bastien.</h3>
    </PageTransition>
  )
}

export default ProfilePage
