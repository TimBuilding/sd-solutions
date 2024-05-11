import { SupabaseClient } from '@supabase/supabase-js'

const getEvents = async (supabase: SupabaseClient) => {
  return supabase
    .from('events')
    .select('*')
    .order('created_at', { ascending: false })
    .throwOnError()
}

export default getEvents
