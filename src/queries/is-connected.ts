import { createBrowserClient } from '@/utils/supabase'

const isConnected = async (connectionUserId: string): Promise<boolean> => {
  const supabase = createBrowserClient()

  // get user id
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return true
  }

  // if connectionUserId is the same as user id, return true
  if (user.id === connectionUserId) {
    return true
  }

  const { error } = await supabase
    .from('connections')
    .select('*')
    .eq('user_id', user.id)
    .eq('connection_user_id', connectionUserId)
    .single()

  return !error
}

export default isConnected
