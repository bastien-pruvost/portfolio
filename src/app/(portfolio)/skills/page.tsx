import { cn } from '@/lib/utils/classname'
import React from 'react'
import { PageTransition } from '@/components-ui/page-transition'
import { SkillTechno } from '@/components-ui/skill-techno'

const SkillsPage = () => {
  return (
    <PageTransition>
      <h2 className={cn('page-title')}>Mes compétences</h2>
      {/* <div>JS/TS</div> */}
      <div className={cn('p-5')}>
        <h3 className={cn('page-subtitle')}>Front-End</h3>
        <div className={cn('grid-cols-auto grid gap-6')}>
          <SkillTechno />
          <SkillTechno />
          <SkillTechno />
          <SkillTechno />
          <SkillTechno />
          <SkillTechno />
          <SkillTechno />
        </div>
      </div>
    </PageTransition>
  )
}

export default SkillsPage
