import '@/assets/styles/globals.css'
import { cn } from '@/lib/utils/classname'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='fr' suppressHydrationWarning>
      <head />
      <body className={cn('relative h-screen w-screen')}>{children}</body>
    </html>
  )
}

export default RootLayout
