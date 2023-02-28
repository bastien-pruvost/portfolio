import { cn } from '@/lib/utils/classname'
import Link from 'next/link'
import type { IconType } from 'react-icons'

export type NavbarLinkProps = {
  href: string
  label: string
  IconComponent: IconType
  currentRoute: string | null
}

export const NavbarLink = ({ href, label, IconComponent, currentRoute }: NavbarLinkProps) => {
  const isLinkActive = currentRoute === href

  return (
    <li
      className={cn(
        'shrink grow basis-0 border-x-grey-50 dark:border-x-grey-800',
        isLinkActive ? 'text-color-jade' : 'bg-grey-0 dark:bg-grey-900',
      )}
    >
      <Link href={href} className={cn('flex flex-col items-center gap-1 p-4')}>
        <IconComponent preserveAspectRatio={'xMidYMid slice'} className={cn('h-6 w-6')} />
        <span className={cn('-mb-1 hidden text-sm sm:block')}>{label}</span>
      </Link>
    </li>
  )
}
