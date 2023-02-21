import '@/assets/styles/globals.css'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=''>
      <p>Home Layout</p>
      {children}
    </div>
  )
}

export default HomeLayout
