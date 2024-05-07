import React from 'react'
import Image from 'next/image'

const PostUserProfile = () => {
  return (
    <div className={'flex flex-row gap-2.5 px-4 pt-4'}>
      <Image
        src={'https://picsum.photos/200/300'}
        alt={'User'}
        width={44}
        height={44}
        className={'h-11 w-11 rounded-full'}
      />
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
