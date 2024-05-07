'use server'
import { z } from 'zod'
import LoginSchema from '@/app/(auth)/login/login-schema'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const loginAction = async (formData: z.infer<typeof LoginSchema>) => {
  const supabase = createServerClient(cookies())

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  })

  if (error) {
    redirect('/login?error=login-failed')
  }

  redirect('/')
}

export default loginAction
