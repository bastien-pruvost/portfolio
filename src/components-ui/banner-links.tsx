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
          'flex w-full items-center justify-center gap-3 rounded-bl-md border-t border-grey-200 py-5 px-6 uppercase sm:border-r',
          'hover:text-color-jade transition-all hover:bg-grey-0',
          'dark:border-grey-600 dark:hover:bg-grey-900',
        ])}
        href='https://cdn.sanity.io/files/on0eksnn/production/0f8d343e31641108df2579441627b772ead930b2.pdf'
        download='CV_Bastien_PRUVOST_Developpeur_Web'
        target='_blank'
      >
        <span className={cn('text-sm font-medium')}>Télécharger mon CV</span>
        <HiOutlineArrowDownOnSquare
          preserveAspectRatio={'xMidYMid slice'}
          className={cn('mb-1 h-6 w-4')}
        />
      </Link>

      <Link
        className={cn([
          'flex w-full items-center justify-center gap-3 rounded-br-md border-t border-grey-200 py-5 px-6 uppercase',
          'hover:text-color-jade transition-all hover:bg-grey-0',
          'dark:border-grey-600 dark:hover:bg-grey-900',
        ])}
        href='/contact'
      >
        <span className={cn('text-sm font-medium')}>Me contacter</span>
        <HiOutlineChatBubbleOvalLeftEllipsis
          preserveAspectRatio={'xMidYMid slice'}
          className={cn('mb-1 h-6 w-5')}
        />
      </Link>
    </div>
  )
}
