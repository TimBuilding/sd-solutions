import React from 'react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import PostUserProfile from '@/components/Post/post-user-profile'

const Post = () => {
  return (
    <Card>
      <PostUserProfile />
    </Card>
  )
}

export default Post
