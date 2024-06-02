import { z } from 'zod'
import { createBrowserClient } from '@/utils/supabase'
import { Tables, TablesInsert } from '@/types/database.types'
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
    throw new Error('You must be logged in to create a comment') // Throw an error if the user is not logged in
  }

  const insertAnnouncementComments: TablesInsert<'announcement_comments'> = {
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
