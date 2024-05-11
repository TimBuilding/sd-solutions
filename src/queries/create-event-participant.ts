import { createBrowserClient } from '@/utils/supabase'

const createEventParticipant = async (eventId: string) => {
  const supabase = createBrowserClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return supabase
    .from('event_participants')
    .insert({ event_id: eventId, user_id: user?.id })
    .throwOnError()
}

export default createEventParticipant
