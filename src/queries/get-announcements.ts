import { SupabaseClient } from '@supabase/supabase-js'

const getAnnouncements = async (supabase: SupabaseClient) => {
  // const {data: {user}} = await supabase.auth.getUser()
  // if (!user) {
  //   throw new Error('You must be logged in to view the announcements')
  // }

  const { data, error } = await supabase
    .from('announcements')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw error
  }

  return data
}

export default getAnnouncements
