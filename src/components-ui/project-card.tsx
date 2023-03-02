import { cn } from '@/lib/utils/classname'
import type { Project } from '@/types/sanity-models/project'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsGlobe, BsGlobe2 } from 'react-icons/bs'
import { ProjectTechno } from './project-techno'

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className={cn(
        'relative flex flex-col overflow-hidden rounded-[5px] border border-grey-50 bg-white shadow-sm dark:border-grey-700 dark:bg-grey-800',
      )}
    >
      <Image
        className={cn('block w-full border-b border-grey-50 object-contain dark:border-grey-700')}
        src={project.mainImage.url}
        alt={`Capture d'écran du projet ${project.title}`}
        quality={100}
        // sizes='128px'
        width={project.mainImage.metadata.dimensions.width}
        height={project.mainImage.metadata.dimensions.height}
        // fill
        // priority
      />
      <div className={cn('flex grow flex-col justify-start')}>
        <div className={cn('flex grow flex-col p-3')}>
          <h3 className={cn('mb-2 font-semibold md:text-lg')}>{project.title}</h3>
          <div className={cn('prose-custom mb-1 grow')}>
            <PortableText value={project.description} />
          </div>
          {/* <p className={cn('paragraph mb-3 font-medium')}>{project.description}</p> */}
          <div className={cn('mb-3 flex flex-wrap gap-1.5')}>
            {project.technos &&
              project.technos.map(
                (techno) => techno && <ProjectTechno key={techno._id} techno={techno} />,
              )}
          </div>
        </div>

        <div
          className={cn(
            'relative bottom-0 left-0 right-0 divide-y border-t border-grey-100 dark:border-grey-700',
          )}
        >
          {project.githubLink ? (
            <>
              <Link
                href={project.githubLink}
                target={'_blank'}
                className={cn(
                  'flex w-full items-center justify-center gap-3 border-grey-100 py-4 px-6 text-sm dark:border-grey-700 md:text-base',
                  'hover:bg-grey-25 hover:dark:bg-grey-900',
                  'hover:text-color-jade transition-all-color',
                )}
              >
                <span>Voir le projet github</span>
                <BsGithub className='-mt-[1px] h-6 w-6' />
              </Link>
            </>
          ) : (
            <>
              <div
                className={cn(
                  'flex w-full cursor-default items-center justify-center gap-3 border-grey-100 py-4 px-6 text-sm dark:border-grey-700 md:text-base',
                )}
              >
                <span className={cn('opacity-10')}>Voir le projet github</span>
                <BsGithub className={cn('-mt-[1px] h-6 w-6 opacity-10')} />
              </div>
            </>
          )}

          {project.websiteLink ? (
            <>
              <Link
                href={project.websiteLink}
                target={'_blank'}
                className={cn(
                  'transition-all-color flex w-full items-center justify-center gap-3 border-grey-100 py-4 px-6 text-sm dark:border-grey-700 md:text-base',
                  'hover:bg-grey-25 hover:dark:bg-grey-900',
                  'hover:text-color-jade ',
                )}
              >
                <span>Voir le site</span>
                <BsGlobe2 className='-mt-[1px] h-6 w-6' />
              </Link>
            </>
          ) : (
            <>
              <div
                className={cn(
                  'flex w-full cursor-default items-center justify-center gap-3 border-grey-100 py-4 px-6 text-sm dark:border-grey-700 md:text-base',
                )}
              >
                <span className={cn('opacity-10')}>Voir le site</span>
                <BsGlobe2 className={cn('-mt-[1px] h-6 w-6 opacity-10')} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
