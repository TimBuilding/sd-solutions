'use client'
import React from 'react'
import { usePostContext } from '@/components/Post/Post'

const PostContent = () => {
  const { post } = usePostContext()

  return (
    <div className={'px-4 pb-2.5 pt-4'}>
      <p className={'text-sm leading-5 text-card-foreground/70'}>
        {post.content}
      </p>
    </div>
  )
}

export default PostContent
