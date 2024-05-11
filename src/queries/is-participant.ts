import { createBrowserClient } from '@/utils/supabase'

const isParticipant = async (eventId: string): Promise<boolean> => {
  const supabase = createBrowserClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return false

  const { error } = await supabase
    .from('event_participants')
    .select('id')
    .eq('event_id', eventId)
    .eq('user_id', user?.id)
    .single()

  return !error
}

export default isParticipant
