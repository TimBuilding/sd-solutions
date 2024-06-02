import { createBrowserClient } from '@/utils/supabase'
import { SupabaseClient } from '@supabase/supabase-js'

const getUserProfile = async (user_id: string, supabase: SupabaseClient) => {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return []
  }

  const { data, error } = await supabase
    .from('user_profiles')
    .select('first_name, last_name')

  if (error) {
    console.log(error.message)
    return []
  }
}

export default getUserProfile
