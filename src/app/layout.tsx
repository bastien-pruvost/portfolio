import '@/assets/styles/globals.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='fr'>
      <head />
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
