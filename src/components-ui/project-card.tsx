import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsGlobe2 } from 'react-icons/bs'
import { PortableText } from '@portabletext/react'

import { cn } from '@/lib/utils/classname'
import { ProjectTechno } from '@/components-ui/project-techno'

import type { Project } from '@/types/sanity-models/project'

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className={cn(
        'relative flex flex-col overflow-hidden rounded-[5px] border border-grey-100 bg-white shadow-sm dark:border-grey-700 dark:bg-grey-800',
      )}
    >
      <Image
        className={cn('block w-full border-b border-grey-50 object-contain dark:border-grey-700')}
        src={project.mainImage.url}
        alt={`Capture d'écran du projet ${project.title}`}
        quality={100}
        width={project.mainImage.metadata.dimensions.width}
        height={project.mainImage.metadata.dimensions.height}
      />
      <div className={cn('flex grow flex-col justify-start')}>
        <div className={cn('flex grow flex-col p-3')}>
          <h3 className={cn('text-color-jade mb-2 font-semibold md:text-lg')}>{project.title}</h3>
          <div className={cn('prose-custom mb-2')}>
            <PortableText value={project.description} />
          </div>
          <div className={cn('mb-4 flex flex-wrap items-start gap-x-1.5 gap-y-2')}>
            {project.technos &&
              project.technos.map(
                (techno) => techno && <ProjectTechno key={techno._id} techno={techno} />,
              )}
          </div>
        </div>

        <div
          className={cn(
            'relative bottom-0 left-0 right-0 flex divide-x border-t border-grey-100 dark:border-grey-700',
          )}
        >
          {project.githubLink ? (
            <>
              <Link
                href={project.githubLink}
                target={'_blank'}
                className={cn(
                  'flex w-full shrink items-center justify-center gap-2 border-grey-100 py-3 px-4 text-sm dark:border-grey-700',
                  'hover:bg-grey-25 hover:dark:bg-grey-900',
                  'hover:text-color-jade transition-all-color',
                )}
              >
                <span>Github</span>
                <BsGithub className='-mt-[1px] h-5 w-5' />
              </Link>
            </>
          ) : (
            <>
              <div
                className={cn(
                  'flex w-full shrink cursor-default items-center justify-center gap-2 border-grey-100 py-3 px-4 text-sm dark:border-grey-700',
                )}
              >
                <span className={cn('opacity-20')}>Github</span>
                <BsGithub className={cn('-mt-[1px] h-5 w-5 opacity-10')} />
              </div>
            </>
          )}

          {project.websiteLink ? (
            <>
              <Link
                href={project.websiteLink}
                target={'_blank'}
                className={cn(
                  'transition-all-color flex w-full shrink items-center justify-center gap-2 border-grey-100 py-3 px-4 text-sm dark:border-grey-700',
                  'hover:bg-grey-25 hover:dark:bg-grey-900',
                  'hover:text-color-jade ',
                )}
              >
                <span>Site</span>
                <BsGlobe2 className='-mt-[1px] h-5 w-5' />
              </Link>
            </>
          ) : (
            <>
              <div
                className={cn(
                  'flex w-full shrink cursor-default items-center justify-center gap-2 border-grey-100 py-3 px-4 text-sm dark:border-grey-700',
                )}
              >
                <span className={cn('opacity-20')}>Site</span>
                <BsGlobe2 className={cn('-mt-[1px] h-5 w-5 opacity-10')} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
