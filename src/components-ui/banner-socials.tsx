import Link from 'next/link'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

import { cn } from '@/lib/utils/classname'

import type { Social } from '@/types/sanity-models/social'

type BannerSocialsProps = {
  className?: string
  socials: Array<Social>
}

export const BannerSocials = ({ className, socials }: BannerSocialsProps) => {
  return (
    <div className={cn([className, 'flex items-center justify-center gap-4'])}>
      <Link
        href='https://github.com/Bastien-Pruvost'
        className={cn('hover:text-color-jade transition-text-color p-1')}
        target='_blank'
        aria-label='Accéder à mon github'
      >
        <BsGithub preserveAspectRatio={'xMidYMid meet'} className={cn('h-7 w-7')} target='_blank' />
      </Link>
      <Link
        href='https://www.linkedin.com/in/pruvost-bastien/'
        className={cn('hover:text-color-jade transition-text-color p-1')}
        target='_blank'
        aria-label='Accéder à mon Linkedin'
      >
        <BsLinkedin preserveAspectRatio={'xMidYMid meet'} className={cn('h-7 w-7')} />
      </Link>
      <Link
        href='https://twitter.com/BastienDev_'
        className={cn('hover:text-color-jade transition-text-color p-1')}
        target='_blank'
        aria-label='Accéder à mon Twitter'
      >
        <BsTwitter preserveAspectRatio={'xMidYMid meet'} className={cn('h-7 w-7')} />
      </Link>
    </div>
  )
}
