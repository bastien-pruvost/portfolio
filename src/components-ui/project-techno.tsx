import { cn } from '@/lib/utils/classname'
import type { Techno } from '@/types/sanity-models/techno'
import Image from 'next/image'

type ProjectTechnoProps = {
  techno: Techno
}

export const ProjectTechno = ({ techno }: ProjectTechnoProps) => {
  return (
    <div
      className={cn(
        'flex w-fit items-center justify-start gap-2 rounded-[4px] py-1 px-1.5 shadow-sm',
        'border-grey-50 bg-white dark:border-grey-700 dark:bg-grey-700',
      )}
    >
      {/* <div className={cn('relative h-8 w-8')}> */}
      <Image
        className={cn('block h-4 w-4 object-contain')}
        src={`/assets/icons/dev-icons/${techno.iconName}.svg`}
        alt={`Logo ${techno.title}`}
        // quality={100}
        // sizes='128px'
        width={64}
        height={64}
        // sizes='(max-width: 390px) 79vw,
        //           (max-width: 640px) 88vw,
        //           (max-width: 768px) 90vw,
        //           (max-width: 1024px) 43vw,
        //           28vw'
        // fill
        // priority
      />
      {/* </div> */}
      <p className={cn('text-xs font-medium md:text-sm')}>{techno.title}</p>
    </div>
  )
}
