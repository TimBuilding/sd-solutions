import { SupabaseClient } from '@supabase/supabase-js'
import { createBrowserClient } from '@/utils/supabase'
import { Tables } from '@/types/database.types'

const createAnnouncementsComments = async (
  announcementId: string,
  commentContent: string,
) => {
  const supabase = createBrowserClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { error } = await supabase.from('announcement_comments').insert({
    user_id: user?.id,
    content: commentContent,
    announcement_id: announcementId,
  })

  if (error) {
    throw error
  }
}

export default createAnnouncementsComments
