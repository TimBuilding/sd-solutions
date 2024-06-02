import { SupabaseClient } from '@supabase/supabase-js'

const getAnnouncementComments = async (
  announcementId: string,
  supabase: SupabaseClient,
) => {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    throw new Error('You must be logged in to view the comments')
  }

  const { data, error } = await supabase
    .from('announcement_comments')
    .select('*, user_profiles(first_name, last_name, user_id, email)')
    .eq('announcement_id', announcementId)

  if (error) {
    throw error
  }

  return data
}

export default getAnnouncementComments
