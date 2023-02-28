'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils/classname'

import type { IconType } from 'react-icons'

import {
  HiOutlineIdentification,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineCommandLine,
  HiOutlineInboxStack,
} from 'react-icons/hi2'

import { NavbarLink } from '@/components-ui/navbar-link'

export const Navbar = () => {
  const currentRoute = usePathname()

  return (
    <nav>
      <ul className={cn('flex justify-center divide-x')}>
        <NavbarLink
          href='/profile'
          label='Profil'
          IconComponent={HiOutlineIdentification}
          currentRoute={currentRoute}
        />
        <NavbarLink
          href='/skills'
          label='Compétences'
          IconComponent={HiOutlineCommandLine}
          currentRoute={currentRoute}
        />
        <NavbarLink
          href='/projects'
          label='Projets'
          IconComponent={HiOutlineInboxStack}
          currentRoute={currentRoute}
        />
        <NavbarLink
          href='/contact'
          label='Contact'
          IconComponent={HiOutlineChatBubbleOvalLeftEllipsis}
          currentRoute={currentRoute}
        />
      </ul>
    </nav>
  )
}
