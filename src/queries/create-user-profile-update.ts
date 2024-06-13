import { SupabaseClient } from '@supabase/supabase-js'
import UserProfileSchema from '@/components/layout/user-profile-schema'
import { z } from 'zod'
import { createBrowserClient } from '@/utils/supabase'

const createUserProfileUpdate = async (
  formData: z.infer<typeof UserProfileSchema>,
) => {
  const { firstName, lastName } = formData
  const supabase = createBrowserClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('You must be logged in to update your profile')
  }

  const { data, error } = await supabase
    .from('user_profiles')
    .update({ first_name: firstName, last_name: lastName })
    .eq('user_id', user.id) // Update the user profile where the user_id matches the current user's id

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export default createUserProfileUpdate
