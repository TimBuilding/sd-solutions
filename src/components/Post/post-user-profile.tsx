'use client'
import React from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'
import { usePostContext } from '@/components/Post/Post'
import { format } from 'date-fns'

const email = 'email@gmail.com'

const PostUserProfile = () => {
  const { post } = usePostContext()
  const config = genConfig(email)

  return (
    <div className={'flex flex-row gap-2.5 px-4 pt-4'}>
      <Avatar className={'h-11 w-11 rounded-full'} {...config} />
      <div className={'flex flex-col items-start justify-center'}>
        <h3 className={'text-sm font-medium text-card-foreground'}>
          {post.user_id}
        </h3>
        <span className={'text-xs text-muted-foreground/50'}>
          {post.created_at &&
            format(new Date(post.created_at), 'MMMM dd, yyyy, hh:mmaaa')}
        </span>
      </div>
    </div>
  )
}

export default PostUserProfile
