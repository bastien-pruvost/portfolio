import Link from 'next/link'
import { HiChevronRight } from 'react-icons/hi2'

import { cn } from '@/lib/utils/classname'

import type { PropsWithChildren } from 'react'

type PageLinkBottomProps = PropsWithChildren<{
  href: string
}>

export const PageLinkBottom = ({ href, children }: PageLinkBottomProps) => {
  return (
    <div className={cn('w-full text-center')}>
      <Link
        className={cn(
          'inline',
          'text-color-jade transition-text-color font-medium underline underline-offset-[3px]',
          'hover:text-jade-400 hover:dark:text-jade-600',
        )}
        href={href}
      >
        {children}
        <HiChevronRight className={cn('-mb-[1px] ml-2 inline h-[18px] w-[18px]')} />
      </Link>
    </div>
  )
}
