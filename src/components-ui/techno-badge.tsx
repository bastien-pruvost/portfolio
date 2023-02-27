import { cn } from '@/lib/utils/classname'
import Image from 'next/image'

export const TechnoBadge = () => {
  return (
    <div className={cn('flex flex-col items-center gap-1 p-2')}>
      <div className={cn('relative h-8 w-8')}>
        <Image
          className={cn('block h-full w-full object-contain')}
          src='../assets/icons/dev-icons/javascript/javascript-original.svg'
          alt='logo js'
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
      <p className={cn('text-xs')}>Javascript</p>
    </div>
  )
}
