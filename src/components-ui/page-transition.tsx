import { cn } from '@/lib/utils/classname'

import type { PropsWithChildren } from 'react'

export type PageTransitionProps = PropsWithChildren<{
  className?: string
}>

export const PageTransition = ({ children, className }: PageTransitionProps) => {
  return <div className={cn('page-transition relative')}>{children}</div>
}
