import { SupabaseClient } from '@supabase/supabase-js'

const getEvents = async (supabase: SupabaseClient) => {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return []
  }

  return data
}

export default getEvents
