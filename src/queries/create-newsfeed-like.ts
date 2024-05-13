import { TablesInsert } from '@/types/database.types'
import { createBrowserClient } from '@/utils/supabase'

const createNewsfeedLike = async (postId: string) => {
  const supabase = createBrowserClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    throw new Error('User not found')
  }

  // check if like already exists
  const { data: like } = await supabase
    .from('newsfeed_likes')
    .select('id')
    .eq('newsfeed_id', postId)
    .eq('user_id', user.id)
    .maybeSingle()

  // if like exists, delete it
  if (like) {
    return await supabase
      .from('newsfeed_likes')
      .delete()
      .eq('id', like.id)
      .throwOnError()
  }

  const newsfeedLikesData: TablesInsert<'newsfeed_likes'> = {
    newsfeed_id: postId,
    user_id: user.id,
  }

  return await supabase
    .from('newsfeed_likes')
    .insert(newsfeedLikesData)
    .throwOnError()
}

export default createNewsfeedLike
