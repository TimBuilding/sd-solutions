import { z } from 'zod'
import EventSchema from './event-schema'
import { createBrowserClient } from '@/utils/supabase'
import { TablesInsert } from '@/types/database.types'

const createEvent = async (formData: z.infer<typeof EventSchema>) => {
  const { title, content } = formData
  const supabase = createBrowserClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('You must be logged in to create an event')
  }

  const insertEvent: TablesInsert<'events'> = {
    title,
    content,
    user_id: user.id,
  }

  await supabase.from('events').insert(insertEvent).throwOnError()
}

export default createEvent
