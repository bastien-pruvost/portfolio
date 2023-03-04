import Image from 'next/image'
import { cn } from '@/lib/utils/classname'

import type { Techno } from '@/types/sanity-models/techno'

type SkillTechnoProps = {
  techno: Techno
}

export const SkillTechno = ({ techno }: SkillTechnoProps) => {
  return (
    <div
      className={cn(
        'w-full rounded-[5px] py-3 px-4 shadow-sm',
        'flex flex-col items-center justify-center gap-2 md:gap-3',
        'border border-grey-50 bg-white dark:border-grey-700 dark:bg-grey-700',
      )}
    >
      <div className={cn('relative h-8 w-8 lg:h-9 lg:w-9')}>
        <Image
          className={cn('h-full w-full object-contain')}
          src={`/assets/icons/dev-icons/${techno.iconName}.svg`}
          alt={`Logo ${techno.title}`}
          // quality={100}
          fill
        />
      </div>
      <p className={cn('text-color-light -mb-[2px] text-xs font-medium lg:text-sm')}>
        {techno.title}
      </p>
    </div>
  )
}
