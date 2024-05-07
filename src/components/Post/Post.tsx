import React from 'react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import PostUserProfile from '@/components/Post/post-user-profile'
import PostContent from '@/components/Post/post-content'
import PostInteractions from '@/components/Post/post-interactions'
import PostStatus from '@/components/Post/post-status'

const Post = () => {
  return (
    <Card>
      <PostUserProfile />
      <PostContent />
      <PostInteractions />
      <PostStatus />
    </Card>
  )
}

export default Post
