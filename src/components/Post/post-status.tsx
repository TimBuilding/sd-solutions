'use client'
import React from 'react'
import { Heart, Link2, MessageCircle } from 'lucide-react'
import Avatar, { genConfig } from 'react-nice-avatar'

const PostStatus = () => {
  const config1 = genConfig('email1@gmail.com')
  const config2 = genConfig('email2@gmail.com')
  const config3 = genConfig('email3@gmail.com')

  return (
    <div
      className={'flex flex-row items-center justify-between px-4 pb-4 pt-2.5'}
    >
      <div className={'flex flex-row items-center justify-center'}>
        <Avatar
          className={'z-0 h-9 w-9 rounded-full border-4 border-card'}
          {...config1}
        />
        <Avatar
          className={
            'z-10 h-9 w-9 -translate-x-3 rounded-full border-4 border-card'
          }
          {...config2}
        />
        <Avatar
          className={
            'z-20 h-9 w-9 -translate-x-6 rounded-full border-4 border-card'
          }
          {...config3}
        />
      </div>
      <div className={'flex flex-row items-center justify-center gap-3'}>
        <div
          className={
            'flex flex-row items-center justify-center gap-1 text-muted-foreground/50'
          }
        >
          <Heart className={'h-4 w-4'} />
          <span>2</span>
        </div>
        <div
          className={
            'flex flex-row items-center justify-center gap-1 text-muted-foreground/50'
          }
        >
          <Link2 className={'h-4 w-4'} />
          <span>0</span>
        </div>
        <div
          className={
            'flex flex-row items-center justify-center gap-1 text-muted-foreground/50'
          }
        >
          <MessageCircle className={'h-4 w-4'} />
          <span>0</span>
        </div>
      </div>
    </div>
  )
}

export default PostStatus
