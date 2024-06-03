import { createBrowserClient } from '@/utils/supabase'

const createCommentsLikes = async (comment_id: string, like: boolean) => {
  const supabase = createBrowserClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error()
  }

  const { data: existingRecord } = await supabase
    .from('comments_likes')
    .select('id')
    .eq('comment_id', comment_id)
    .eq('user_id', user.id)
    .maybeSingle()

  // if (existingRecord) { // If the user has already liked or disliked the comment
  //   throw new Error('You have already interacted with this comment')
  // } else {
  //   const commentInteraction = {
  //     comment_id: comment_id,
  //     user_id: user.id,
  //   }
  //   await supabase // Insert the user's like or dislike into the comments_likes table
  //     .from('comments_likes')
  //     .insert(commentInteraction)
  //     .throwOnError()
  // }

  if (existingRecord) {
    // If the user has already liked  the comment
    // Delete the existing like or dislike
    await supabase
      .from('comments_likes')
      .delete()
      .eq('id', existingRecord.id)
      .throwOnError()
  } else {
    const commentInteraction = {
      comment_id: comment_id,
      user_id: user.id,
      likes: like,
      dislike: !like,
    }
    // Insert the user's like or dislike into the comments_likes table
    await supabase
      .from('comments_likes')
      .insert(commentInteraction)
      .throwOnError()
  }
}

export default createCommentsLikes
