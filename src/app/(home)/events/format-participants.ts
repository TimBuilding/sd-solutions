import { Tables } from '@/types/database.types'
import { createBrowserClient } from '@/utils/supabase'

type Participant = Tables<'event_participants'> & {
  user_profiles: {
    first_name: string
    user_id: string
  }
}

const formatParticipants = (participants: Participant[]): string => {
  if (participants.length === 0) {
    return ''
  }

  const names = participants.map(
    (participant) => participant.user_profiles?.first_name || 'Unknown',
  )

  if (names.length === 1) {
    return names[0]
  }

  return names.slice(0, 2).join(', ')
}

export default formatParticipants
