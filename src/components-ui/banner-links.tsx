import Link from 'next/link'
import { HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineArrowDownOnSquare } from 'react-icons/hi2'

import { cn } from '@/lib/utils/classname'

export type BannerLinksProps = {
  className?: string
}

export const BannerLinks = ({ className }: BannerLinksProps) => {
  return (
    <div className={cn([className, 'align-center flex w-full flex-col sm:flex-row'])}>
      <Link
        className={cn([
          'flex w-full items-center justify-center gap-3 rounded-bl-md border-t  py-5 px-6 sm:border-r',
          'border-grey-200 dark:border-grey-700',
          'hover:bg-grey-0 hover:dark:bg-grey-900',
          'hover:text-color-jade ',
        ])}
        href='https://cdn.sanity.io/files/on0eksnn/production/0f8d343e31641108df2579441627b772ead930b2.pdf'
        download='CV_Bastien_PRUVOST_Developpeur_Web'
        target='_blank'
      >
        <span className={cn('text-base font-medium')}>Télécharger mon CV</span>
        <HiOutlineArrowDownOnSquare
          preserveAspectRatio={'xMidYMid slice'}
          className={cn('mb-1 h-6 w-4')}
        />
      </Link>

      <Link
        className={cn([
          'flex w-full items-center justify-center gap-3 rounded-br-md border-t py-5 px-6',
          'border-grey-200 dark:border-grey-700',
          'hover:bg-grey-0 hover:dark:bg-grey-900',
          'hover:text-color-jade ',
        ])}
        href='/contact'
      >
        <span className={cn('text-base font-medium')}>Me contacter</span>
        <HiOutlineChatBubbleOvalLeftEllipsis
          preserveAspectRatio={'xMidYMid slice'}
          className={cn('h-6 w-5')}
        />
      </Link>
    </div>
  )
}
