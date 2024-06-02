import { SupabaseClient } from '@supabase/supabase-js'
import { z } from 'zod'
import { createBrowserClient } from '@/utils/supabase'
import { Tables } from '@/types/database.types'
import CommentsSchema from '@/components/comments/comments-schema'

const createAnnouncementsComments = async (
  announcementId: string,
  formData: z.infer<typeof CommentsSchema>,
) => {
  const supabase = createBrowserClient()
  const { content } = formData
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('You must be an admin to create an announcement') // Throw an error if the user is not logged in
  }

  const insertAnnouncementComments: Tables<'announcement_comments'> = {
    content,
    user_id: user.id,
    announcement_id: announcementId,
  }

  await supabase
    .from('announcement_comments')
    .insert(insertAnnouncementComments)
    .throwOnError()
}

export default createAnnouncementsComments
