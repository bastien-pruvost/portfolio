import { cn } from '@/lib/utils/classname'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'
import { HiChevronRight } from 'react-icons/hi2'

type PageLinkBottomProps = PropsWithChildren<{
  href: string
}>

export const PageLinkBottom = ({ href, children }: PageLinkBottomProps) => {
  return (
    <div className={cn('w-full text-right')}>
      <Link className={cn('bottom-page-link')} href={href}>
        {children}
        <HiChevronRight className={cn('-mb-[1px] ml-2 inline h-[18px] w-[18px]')} />
      </Link>
    </div>
  )
}
