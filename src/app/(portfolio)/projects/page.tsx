import { sanityClientFetch } from '@/lib/sanity/sanity.client'
import { projectsQuery } from '@/lib/sanity/queries/project'
import { cn } from '@/lib/utils/classname'
import { ProjectCard } from '@/components-ui/project-card'

import type { Project } from '@/types/sanity-models/project'
import { PageLayout } from '@/components-ui/page-layout'
import type { PageDetails } from '@/types/sanity-models/page-details'
import { pageDetailsQuery } from '@/lib/sanity/queries/page-details'
import { Wrapper } from '@/components-ui/wrapper'

const ProjectsPage = async () => {
  const pageDetails = await sanityClientFetch<PageDetails>(pageDetailsQuery)
  const projects = await sanityClientFetch<Project[]>(projectsQuery)

  projects.sort((a, b) => {
    return b.priority - a.priority
  })

  return (
    <PageLayout title={pageDetails.projectsTitle}>
      <Wrapper>
        <div
          className={cn(
            'my-4 grid gap-4 lg:gap-4',
            'min-[540px]:grid-cols-2 min-[800px]:grid-cols-3 min-[1024px]:grid-cols-2 min-[1030px]:grid-cols-2 min-[1360px]:grid-cols-3',
          )}
        >
          {projects &&
            projects.map(
              (project) => project && <ProjectCard key={project._id} project={project} />,
            )}
        </div>
      </Wrapper>
    </PageLayout>
  )
}

export default ProjectsPage
