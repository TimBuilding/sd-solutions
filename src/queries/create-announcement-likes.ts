import { createBrowserClient } from '@/utils/supabase'

const createAnnouncementLikes = async (announcementId: string) => {
  const supabase = createBrowserClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error()
  }

  const { data: like } = await supabase
    .from('announcements_likes')
    .select('id')
    .eq('announcement_id', announcementId)
    .eq('user_id', user.id)
    .maybeSingle()

  if (like) {
    return await supabase
      .from('announcements_likes')
      .delete()
      .eq('id', like.id)
      .throwOnError()
  }

  const announcementLikes = {
    announcement_id: announcementId,
    user_id: user.id,
  }

  return await supabase
    .from('announcements_likes')
    .insert(announcementLikes)
    .throwOnError()
}

export default createAnnouncementLikes
