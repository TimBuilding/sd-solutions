import React from 'react'
import Navbar from '@/components/layout/Navbar'

interface Props {
  children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex w-full flex-row items-center justify-between bg-white px-4 py-2 drop-shadow-md">
      <Navbar />
    </div>
  )
}
export default Layout
