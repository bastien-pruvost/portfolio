import { cn } from '@/lib/utils/classname'
import React from 'react'
import { PageTransition } from '@/components-ui/page-transition'

const ProjectsPage = () => {
  return (
    <PageTransition>
      <div className={cn('page-title')}>
        <h2>Projets</h2>
      </div>
    </PageTransition>
  )
}

export default ProjectsPage
