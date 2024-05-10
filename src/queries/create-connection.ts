'use server'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { TablesInsert } from '@/types/database.types'

const createConnection = async (connectionUserId: string) => {
  const supabase = createServerClient(cookies())

  // get user_id
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    throw new Error('User not found')
  }

  const insertData: TablesInsert<'connections'> = {
    user_id: user.id,
    connection_user_id: connectionUserId,
  }

  await supabase.from('connections').insert(insertData).throwOnError()
}

export default createConnection
