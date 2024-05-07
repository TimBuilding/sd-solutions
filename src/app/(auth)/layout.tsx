'use server'
import React, { FC, ReactNode } from 'react'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

interface Props {
  children: ReactNode
}

const AuthLayout: FC<Props> = async ({ children }) => {
  const supabase = createServerClient(cookies())
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect('/')
  }

  return <>{children}</>
}

export default AuthLayout
