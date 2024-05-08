import React, { FC, ReactNode } from 'react'
import Navbar from '@/components/layout/Navbar'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={'flex w-full flex-col'}>
      <Navbar />
      <main className={'mx-auto w-full max-w-7xl px-2.5 py-5'}>{children}</main>
    </div>
  )
}
export default Layout
