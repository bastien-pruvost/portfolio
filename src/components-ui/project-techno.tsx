import Image from 'next/image'
import { cn } from '@/lib/utils/classname'

import type { Techno } from '@/types/sanity-models/techno'

type ProjectTechnoProps = {
  techno: Techno
}

export const ProjectTechno = ({ techno }: ProjectTechnoProps) => {
  return (
    <div
      className={cn(
        'rounded-full py-1 px-2 shadow-sm',
        'flex items-center gap-2',
        'border border-grey-50 bg-white dark:border-grey-700 dark:bg-grey-700',
      )}
    >
      <Image
        className={cn('h-4 w-4 rounded-full object-contain')}
        src={`/assets/icons/dev-icons/${techno.iconName}.svg`}
        alt={`Logo ${techno.title}`}
        width={64}
        height={64}
      />
      <p className={cn('text-xs font-normal')}>{techno.title}</p>
    </div>
  )
}
