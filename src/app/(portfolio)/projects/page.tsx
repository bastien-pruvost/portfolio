import { cn } from '@/lib/utils/classname'
import React from 'react'
import { PageTransition } from '@/components-ui/page-transition'
import { ProjectCard } from '@/components-ui/project-card'
import type { Project } from '@/types/sanity-models/project'
import { projectsQuery } from '@/lib/sanity/queries/project'
import { sanityClientFetch } from '@/lib/sanity/sanity.client'
import { PageLinkBottom } from '@/components-ui/page-link-bottom'

const ProjectsPage = async () => {
  const projects = await sanityClientFetch<Project[]>(projectsQuery)

  projects.sort((a, b) => {
    return b.priority - a.priority
  })

  return (
    <div className={cn('scrollbar-custom mt-1 overflow-y-scroll pb-6')}>
      <PageTransition>
        <h2 className={cn('page-title')}>Projets réalisés</h2>
        <div
          className={cn(
            'grid grid-cols-fit-48 gap-6 p-5 min-[435px]:grid-cols-fit-72 md:gap-8 md:px-8',
          )}
        >
          {projects &&
            projects.map(
              (project) => project && <ProjectCard key={project._id} project={project} />,
            )}
        </div>
        <PageLinkBottom href='/contact'>Me contacter</PageLinkBottom>
      </PageTransition>
    </div>
  )
}

export default ProjectsPage
