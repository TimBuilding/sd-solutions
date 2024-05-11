import { SupabaseClient } from '@supabase/supabase-js'

const getEventActivities = async (supabase: SupabaseClient) => {
  const { data, error } = await supabase
    .from('events_with_participants')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw error
  }

  return data
}

export default getEventActivities
