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
      className={cn(
        className,
        'align-center text-color-light flex w-full flex-col sm:flex-row md:flex-col md:pr-8',
      )}
    >
      <Link
        className={cn([
          'flex w-full items-center justify-center gap-3 rounded-bl-md border-t py-4 sm:border-r md:border-r-0',
          'border-grey-200 dark:border-grey-700',
          'hover:bg-grey-25 hover:dark:bg-grey-900',
          'hover:text-color-jade transition-all-color',
          'md:justify-end md:border-0 md:hover:bg-grey-0 md:hover:dark:bg-grey-800',
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
          'md:hidden',
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
