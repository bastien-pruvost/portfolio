import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

import { cn } from '@/lib/utils/classname'

import type { Social } from '@/types/sanity-models/social'

export type BannerSocialsProps = {
  // socials: Array<Social>
  className?: string
}

export const BannerSocials = ({ className }: BannerSocialsProps) => {
  return (
    <div className={cn([className, 'flex items-center justify-center gap-4 text-lg'])}>
      <Link href='https://github.com' className={cn('hover:text-color-jade p-1 transition-all')}>
        <BsGithub preserveAspectRatio={'xMidYMid meet'} className={cn('h-7 w-7')} />
      </Link>
      <Link href='https://linkedin.fr' className={cn('hover:text-color-jade p-1 transition-all')}>
        <BsLinkedin preserveAspectRatio={'xMidYMid meet'} className={cn('h-7 w-7')} />
      </Link>
    </div>
  )
}
