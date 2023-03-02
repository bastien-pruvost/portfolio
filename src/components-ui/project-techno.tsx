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
        'flex w-fit items-center justify-start gap-2 rounded-[4px] py-1 px-1.5 shadow-sm',
        'border border-grey-50 bg-white shadow-sm dark:border-grey-700 dark:bg-grey-700',
      )}
    >
      <Image
        className={cn('block h-4 w-4 object-contain')}
        src={`/assets/icons/dev-icons/${techno.iconName}.svg`}
        alt={`Logo ${techno.title}`}
        width={64}
        height={64}
      />
      <p className={cn('text-xs font-medium md:text-sm')}>{techno.title}</p>
    </div>
  )
}
