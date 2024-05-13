'use server'
import React, { FC, ReactNode } from 'react'
import Navbar from '@/components/layout/Navbar'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { UserProvider } from '@/providers/UserProvider'

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

  // get user profile
  const { data: userProfile, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('user_id', user.id)
    .single()

  if (error) {
    redirect('/login')
  }

  return (
    <UserProvider userProfile={userProfile}>
      <div className={'flex w-full flex-col'}>
        <Navbar />
        <main>{children}</main>
      </div>
    </UserProvider>
  )
}
export default Layout
