import { createBrowserClient } from '@/utils/supabase'

const getNewsfeedLikes = async (newsfeed_id: string) => {
  const supabase = createBrowserClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return []
  }

  const { data, error } = await supabase
    .from('newsfeed_likes')
    .select('*, user_profiles(first_name, user_id, email)')
    .eq('newsfeed_id', newsfeed_id)

  if (error) {
    console.log(error.message)
    return []
  }

  const formattedLikes = data.map((like) => {
    if (like.user_id === user.id) {
      return {
        ...like,
        user_profiles: { ...like.user_profiles, first_name: 'You' },
      }
    }
    return like
  })

  formattedLikes.sort((a, b) => {
    if (a.user_id === user.id) return -1
    if (b.user_id === user.id) return 1
    return 0
  })

  return formattedLikes
}

export default getNewsfeedLikes
