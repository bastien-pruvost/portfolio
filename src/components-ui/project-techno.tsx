import { cn } from '@/lib/utils/classname'
import Image from 'next/image'

export const ProjectTechno = () => {
  return (
    <div
      className={cn(
        'flex w-fit items-center justify-start gap-2 rounded-[4px] border border-grey-100 py-1 px-1.5 dark:border-grey-500',
      )}
    >
      {/* <div className={cn('relative h-8 w-8')}> */}
      <Image
        className={cn('block h-4 w-4 object-contain')}
        src='/assets/icons/dev-icons/javascript/javascript-original.svg'
        alt='logo js'
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
      <p className={cn('paragraph text-xs font-medium')}>Javascript</p>
    </div>
  )
}
