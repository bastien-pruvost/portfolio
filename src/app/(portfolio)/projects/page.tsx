import { cn } from '@/lib/utils/classname'
import React from 'react'
import { PageTransition } from '@/components-ui/page-transition'
import { ProjectCard } from '@/components-ui/project-card'

const ProjectsPage = () => {
  return (
    <PageTransition>
      <h2 className={cn('page-title')}>Projets réalisés</h2>
      <div className={cn('grid grid-cols-fit-60 gap-6 p-5')}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </PageTransition>
  )
}

export default ProjectsPage
