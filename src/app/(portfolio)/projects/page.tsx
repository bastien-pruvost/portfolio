import { PageTransition } from '@/components-ui/page-transition'
import { cn } from '@/lib/utils/classname'
import React from 'react'

const ProfilePage = () => {
  return (
    <PageTransition>
      <div className={cn('page-title')}>
        <h2>Page projets</h2>
      </div>
    </PageTransition>
  )
}

export default ProfilePage
