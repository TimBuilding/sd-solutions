import { createBrowserClient } from '@/utils/supabase'

const getAnnouncementLikes = async (announcement_id: string) => {
  const supabase = createBrowserClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return []
  }

  const { data, error } = await supabase
    .from('announcements_likes')
    .select('id')
    .eq('announcement_id', announcement_id)

  if (error) {
    console.log(error.message)
    return []
  }

  const likeCount = data.length

  return likeCount
}

export default getAnnouncementLikes
