'use client'
import React from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'

const email = 'email@gmail.com'

const PostUserProfile = () => {
  const config = genConfig(email)

  return (
    <div className={'flex flex-row gap-2.5 px-4 pt-4'}>
      <Avatar className={'h-11 w-11 rounded-full'} {...config} />
      <div className={'flex flex-col items-start justify-center'}>
        <h3 className={'text-sm font-medium text-card-foreground'}>
          Bobby Brown
        </h3>
        <span className={'text-xs text-muted-foreground/50'}>
          July 26, 2018, 11:14am
        </span>
      </div>
    </div>
  )
}

export default PostUserProfile
