import Link from 'next/link'
import { HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineArrowDownOnSquare } from 'react-icons/hi2'

import { cn } from '@/lib/utils/classname'

import type { FileAsset } from 'sanity'

type BannerLinksProps = {
  className?: string
  resume: FileAsset
}

export const BannerLinks = ({ className, resume }: BannerLinksProps) => {
  return (
    <div
      className={cn([className, 'align-center flex w-full flex-col sm:flex-row', 'lg:flex-col'])}
    >
      <Link
        className={cn([
          'flex w-full items-center justify-center gap-3 rounded-bl-md border-t py-4 px-6 sm:border-r lg:border-r-0',
          'border-grey-200 dark:border-grey-700',
          'hover:bg-grey-25 hover:dark:bg-grey-900',
          'hover:text-color-jade transition-all-color',
        ])}
        href={resume.url}
        download='CV_Bastien_PRUVOST_Developpeur_Web'
        target='_blank'
      >
        <span className={cn('text-sm font-medium')}>Télécharger mon CV</span>
        <HiOutlineArrowDownOnSquare
          preserveAspectRatio={'xMidYMid slice'}
          className={cn('h-6 w-4')}
        />
      </Link>

      <Link
        className={cn([
          'flex w-full items-center justify-center gap-3 rounded-br-md border-t py-4 px-6',
          'border-grey-200 dark:border-grey-700',
          'hover:bg-grey-25 hover:dark:bg-grey-900',
          'hover:text-color-jade transition-all-color',
        ])}
        href='/contact'
      >
        <span className={cn('text-sm font-medium')}>Me contacter</span>
        <HiOutlineChatBubbleOvalLeftEllipsis
          preserveAspectRatio={'xMidYMid slice'}
          className={cn('h-6 w-5')}
        />
      </Link>
    </div>
  )
}
