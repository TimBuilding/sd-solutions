import React, { FC, ReactNode } from 'react'
import Navbar from '@/components/layout/Navbar'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex w-full flex-col items-center justify-between bg-white px-4 py-2 drop-shadow-md ">
      <Navbar />
    </div>
  )
}
export default Layout
