'use server'
import { z } from 'zod'
import PublishSchema from '@/components/Publish/publish-schema'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { TablesInsert } from '@/types/database.types'

const publishNewPost = async (data: z.infer<typeof PublishSchema>) => {
  const supabase = createServerClient(cookies())

  // get user id
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('You must be logged in to create a new post')
  }

  // create insert object
  const values: TablesInsert<'newsfeed'> = {
    content: data.content,
    user_id: user.id,
  }

  const { error } = await supabase.from('newsfeed').insert(values)
  if (error) {
    throw error
  }
}

export default publishNewPost
