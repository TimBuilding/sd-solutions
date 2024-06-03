import { createBrowserClient } from '@/utils/supabase'

const getCommentsLikes = async (comment_id: string) => {
  const supabase = createBrowserClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { likes: 0, dislikes: 0 }
  }

  const { data: likesData, error: likesError } = await supabase
    .from('comments_likes')
    .select('id, likes')
    .eq('comment_id', comment_id)

  const { data: dislikesData, error: dislikesError } = await supabase
    .from('comments_likes')
    .select('id, dislike')
    .eq('comment_id', comment_id)

  if (likesError || dislikesError) {
    throw new Error(likesError?.message || dislikesError?.message)
  }

  const likes = likesData.filter(({ likes }) => likes).length
  const dislikes = dislikesData.filter(({ dislike }) => dislike).length

  return { likes, dislikes }
}

export default getCommentsLikes
