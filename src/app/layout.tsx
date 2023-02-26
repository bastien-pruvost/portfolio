import '@/assets/styles/globals.css'

export const metadata = {
  title: 'Portfolio Bastien Pruvost | Développeur Web',
  description: 'This is my insane portfolio',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='fr' suppressHydrationWarning>
      <head />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
