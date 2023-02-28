import { cn } from '@/lib/utils/classname'
import Image from 'next/image'
import { ProjectTechno } from './project-techno'

export const ProjectCard = () => {
  return (
    <div className={cn('overflow-hidden rounded-md border border-grey-50 dark:border-grey-700')}>
      <Image
        className={cn('block w-full border-b border-grey-50 object-contain dark:border-grey-700')}
        src='/assets/projects-screenshots/groupomania.jpg'
        alt='logo js'
        quality={100}
        // sizes='128px'
        width={1322}
        height={827}
        // sizes='(max-width: 390px) 79vw,
        //           (max-width: 640px) 88vw,
        //           (max-width: 768px) 90vw,
        //           (max-width: 1024px) 43vw,
        //           28vw'
        // fill
        // priority
      />
      <div className={cn('p-3')}>
        <h3 className={cn('font-semibold')}>Groupomania</h3>
        <p className={cn('paragraph mb-3 font-medium')}>Réseau social d&apos;entreprise</p>
        <div className={cn('flex flex-wrap gap-1')}>
          <ProjectTechno />
          <ProjectTechno />
          <ProjectTechno />
          <ProjectTechno />
          <ProjectTechno />
          <ProjectTechno />
          <ProjectTechno />
        </div>
      </div>
    </div>
  )
}
