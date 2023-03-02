import { cn } from '@/lib/utils/classname'
import type { Techno } from '@/types/sanity-models/techno'
import Image from 'next/image'

type SkillTechnoProps = {
  techno: Techno
}

export const SkillTechno = ({ techno }: SkillTechnoProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-center gap-2 rounded-[5px] border py-3 px-4 shadow-sm md:gap-3',
        'border-grey-25 bg-white dark:border-grey-700 dark:bg-grey-700',
      )}
    >
      <div className={cn('relative h-8 w-8')}>
        <Image
          className={cn('block h-full w-full object-contain')}
          src={`/assets/icons/dev-icons/${techno.iconName}.svg`}
          alt={`Logo ${techno.title}`}
          // quality={100}
          // sizes='128px'
          // width={32}
          // height={32}
          // sizes='(max-width: 390px) 79vw,
          //           (max-width: 640px) 88vw,
          //           (max-width: 768px) 90vw,
          //           (max-width: 1024px) 43vw,
          //           28vw'
          fill
          // priority
        />
      </div>
      <p className={cn('paragraph -mb-0.5 text-xs font-medium md:text-sm')}>{techno.title}</p>
    </div>
  )
}
