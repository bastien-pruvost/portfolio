import '@/assets/styles/globals.css'
import { cn } from '@/lib/utils/classname'

export const metadata = {
  title: 'Portfolio Bastien Pruvost | Développeur Web',
  description: 'This is my insane portfolio',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='fr' suppressHydrationWarning>
      <head />
      <body className={cn('relative h-screen w-screen')}>{children}</body>
    </html>
  )
}

export default RootLayout
