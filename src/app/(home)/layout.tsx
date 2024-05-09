'use server'
import React, { FC, ReactNode } from 'react'
import Navbar from '@/components/layout/Navbar'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = async ({ children }) => {
  const supabase = createServerClient(cookies())

  // check if user is not logged in
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    redirect('/login')
  }

  return (
    <div className={'flex w-full flex-col'}>
      <Navbar />
      <main className={'mx-auto w-full max-w-7xl px-2.5 py-5'}>{children}</main>
    </div>
  )
}
export default Layout
