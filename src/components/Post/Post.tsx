import React from 'react'
import { Card } from '@/components/ui/card'
import PostUserProfile from '@/components/Post/post-user-profile'
import PostContent from '@/components/Post/post-content'
import PostInteractions from '@/components/Post/post-interactions'
import PostStatus from '@/components/Post/post-status'

const Post = () => {
  return (
    <Card className={'w-full md:max-w-3xl'}>
      <PostUserProfile />
      <PostContent />
      <PostInteractions />
      <PostStatus />
    </Card>
  )
}

export default Post
