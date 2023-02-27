import { cn } from '@/lib/utils/classname'
import React from 'react'
import { PageTransition } from '@/components-ui/page-transition'
import Link from 'next/link'
import { HiArrowUpRight } from 'react-icons/hi2'

const ProfilePage = () => {
  return (
    <PageTransition className={cn('pb-4')}>
      <h2 className={cn('')}>A propos de moi</h2>
      <div className={cn('px-5')}>
        <h3 className={cn('font-semibold')}>Bonjour, moi c&apos;est Bastien.</h3>
        <p className={cn('mb-2')}>
          Passionné par les <strong>nouvelles technologies</strong> et la{' '}
          <strong>programmation</strong>.
        </p>
        <p className={cn('mb-2')}>
          Je concois des sites web <strong>modernes, fonctionnels et accessibles</strong>.
        </p>
        <p className={cn('mb-2')}>
          Je suis spécialisé dans le développement front-end, mais j&apos;ai également de bonnes
          connaissances en back-end et bases de données.
        </p>
        <p className={cn('mb-2')}>
          Je travail essentielement avec les technologies Javascript, Typescript, React, Next.js et
          Node.js.
        </p>
        <p className={cn('mb-2')}>
          Je suis particulièrement intéressé par les projets qui mettent l&apos;accent sur la
          créativité, l&apos;innovation et la qualité.
        </p>
        <Link
          className={cn(
            'text-color-jade mt-4 block text-right font-medium underline underline-offset-[3px]',
          )}
          href='/skills'
        >
          Compétences
          <HiArrowUpRight className={cn('ml-2 inline')} />
        </Link>
      </div>
    </PageTransition>
  )
}

export default ProfilePage
