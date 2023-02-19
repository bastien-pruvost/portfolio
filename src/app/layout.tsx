import '@/assets/styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <head />
      <body>{children}</body>
    </html>
  )
}
