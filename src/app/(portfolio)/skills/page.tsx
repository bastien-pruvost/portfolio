import { cn } from '@/lib/utils/classname'
import React from 'react'
import { PageTransition } from '@/components-ui/page-transition'
import { TechnoBadge } from '@/components-ui/techno-badge'

const SkillsPage = () => {
  return (
    <PageTransition className={cn('pb-4')}>
      <h2>Mes compétences</h2>
      {/* <div>JS/TS</div> */}
      <div className={cn('px-5')}>
        <h3>Front-End</h3>
        <div className={cn('flex flex-wrap justify-center gap-2')}>
          <TechnoBadge />
          <TechnoBadge />
          <TechnoBadge />
        </div>
      </div>
    </PageTransition>
  )
}

export default SkillsPage
