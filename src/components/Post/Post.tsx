import React, { createContext, FC, useContext } from 'react'
import { Card } from '@/components/ui/card'
import PostUserProfile from '@/components/Post/post-user-profile'
import PostContent from '@/components/Post/post-content'
import PostInteractions from '@/components/Post/post-interactions'
import PostStatus from '@/components/Post/post-status'
import { Tables } from '@/types/database.types'

const usePostContext = () => {
  return useContext(PostContext)
}

const PostContext = createContext({
  post: {} as Tables<'newsfeed'>,
})

interface Props {
  post: Tables<'newsfeed'>
}

const Post: FC<Props> = ({ post }) => {
  return (
    <PostContext.Provider
      value={{
        post,
      }}
    >
      <Card className={'w-full md:max-w-3xl'}>
        <PostUserProfile />
        <PostContent />
        <PostInteractions />
        <PostStatus />
      </Card>
    </PostContext.Provider>
  )
}

export default Post
export { usePostContext }
