import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'

const getUserRole = async () => {
  const supabase = createServerClient(cookies())

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  const { data, error } = await supabase
    .from('user_profiles')
    .select('role')
    .eq('user_id', user.id)
    .single()
  if (error) {
    return null
  }

  return data.role
}

export default getUserRole
