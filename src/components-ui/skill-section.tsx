import { cn } from '@/lib/utils/classname'
import type { Skill } from '@/types/sanity-models/skill'
import { SkillTechno } from './skill-techno'

type SkillSectionProps = {
  skill: Skill
}

export const SkillSection = ({ skill }: SkillSectionProps) => {
  return (
    <div
      className={cn(
        'border-b border-grey-100 p-5 pb-8 dark:border-grey-700 sm:odd:border-r md:px-8 lg:odd:border-r-0 xl:odd:border-r',
      )}
    >
      <h3 className={cn('page-subtitle')}>{skill.title}</h3>
      <div
        className={cn(
          'mx-auto grid gap-4',
          'grid-cols-2 min-[430px]:grid-cols-3 min-[550px]:grid-cols-4 sm:grid-cols-2 min-[975px]:grid-cols-3 min-[1070px]:grid-cols-4 min-[1210px]:grid-cols-5  min-[1385px]:grid-cols-3',
        )}
      >
        {/* <div className={cn('flex w-fit flex-wrap gap-4 gap-y-6')}> */}
        {skill.technos &&
          skill.technos?.map(
            (techno) => techno && <SkillTechno key={techno._id} techno={techno} />,
          )}
      </div>
    </div>
  )
}
