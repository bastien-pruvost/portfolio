import { sanityClientFetch } from '@/lib/sanity/sanity.client'
import { pageDetailsQuery } from '@/lib/sanity/queries/page-details'
import { skillsQuery } from '@/lib/sanity/queries/skill'
import { cn } from '@/lib/utils/classname'
import { PageTransition } from '@/components-ui/page-transition'
import { SkillSection } from '@/components-ui/skill-section'
import { PageLinkBottom } from '@/components-ui/page-link-bottom'

import type { PageDetails } from '@/types/sanity-models/page-details'
import type { Skill } from '@/types/sanity-models/skill'

const SkillsPage = async () => {
  const pageDetails = await sanityClientFetch<PageDetails>(pageDetailsQuery)
  const skills = await sanityClientFetch<Skill[]>(skillsQuery)

  skills.sort((a, b) => {
    return a.priority - b.priority
  })

  return (
    <div className={cn('scrollbar-custom mt-1 overflow-y-scroll pb-6')}>
      <PageTransition>
        <h2 className={cn('page-title')}>Mes compétences</h2>
        <div
          className={cn(
            'mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 min-[1385px]:grid-cols-2',
          )}
        >
          {skills && skills.map((skill) => skill && <SkillSection key={skill._id} skill={skill} />)}
        </div>
        <PageLinkBottom href='/projects'>Projets</PageLinkBottom>
      </PageTransition>
    </div>
  )
}

export default SkillsPage
