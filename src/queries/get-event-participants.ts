import { createBrowserClient } from '@/utils/supabase'

const getEventParticipants = async (event_id: string) => {
  const supabase = createBrowserClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return []
  }

  const { data, error } = await supabase
    .from('event_participants')
    .select('*, user_profiles(first_name, user_id)')
    .eq('event_id', event_id)

  if (error) {
    console.log(error.message)
    return []
  }

  const formattedParticipants = data.map((participant) => {
    if (participant.user_id === user.id) {
      return {
        ...participant,
        user_profiles: { ...participant.user_profiles, first_name: 'You' },
      }
    }
    return participant
  })

  formattedParticipants.sort((a, b) => {
    if (a.user_id === user.id) return -1
    if (b.user_id === user.id) return 1
    return 0
  })

  return formattedParticipants
}

export default getEventParticipants
