import { SupabaseClient } from '@supabase/supabase-js'

const getNewsfeed = async (supabase: SupabaseClient) => {
  // get current user
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    throw new Error('You must be logged in to view the newsfeed')
  }

  // get users friends user_id list from "connections" table
  const { data: connectedData, error: connectedError } = await supabase
    .from('connections')
    .select('connection_user_id')
    .eq('user_id', user.id)

  if (connectedError) {
    throw connectedError
  }

  // extract user_id from connectedData and store in an array
  const connectedUsers = connectedData.map(
    (connection) => connection.connection_user_id,
  )

  const { data, error } = await supabase
    .from('newsfeed')
    .select('*')
    .in('user_id', connectedUsers)

  if (error) {
    throw error
  }

  return data
}

export default getNewsfeed
