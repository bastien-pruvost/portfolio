import { cn } from '@/lib/utils/classname'
import { SkillTechno } from '@/components-ui/skill-techno'

import type { Skill } from '@/types/sanity-models/skill'
import { Wrapper } from './wrapper'

type SkillSectionProps = {
  skill: Skill
}

export const SkillSection = ({ skill }: SkillSectionProps) => {
  return (
    <div className={cn('border-b border-grey-100 dark:border-grey-700 min-[810px]:odd:border-r')}>
      <Wrapper>
        <h3 className={cn('page-subtitle')}>{skill.title}</h3>
        <div
          className={cn(
            'mb-5 grid grid-cols-1 gap-2 ',
            'min-[310px]:grid-cols-2 min-[420px]:grid-cols-3 min-[540px]:grid-cols-4 min-[650px]:grid-cols-5',
            'min-[810px]:grid-cols-3',
          )}
        >
          {skill.technos &&
            skill.technos?.map(
              (techno) => techno && <SkillTechno key={techno._id} techno={techno} />,
            )}
        </div>
      </Wrapper>
    </div>
  )
}
