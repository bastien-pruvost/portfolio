import '@/assets/styles/globals.css'
import { BackgroundParticles } from '@/components/background-particles'
import { PortfolioContainer } from '@/components/portfolio-container'
import { cn } from '@/lib/utils/classname'
import type { PropsWithChildren } from 'react'

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={cn('relative h-screen w-screen p-4 text-grey-50')}>
      <BackgroundParticles />
      <PortfolioContainer>{children}</PortfolioContainer>
    </div>
  )
}

export default HomeLayout
