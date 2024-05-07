import React from 'react'
import Image from 'next/image'

const PostUserProfile = () => {
  return (
    <div className={'flex flex-row gap-2.5'}>
      <Image
        src={'https://picsum.photos/200/300'}
        alt={'User'}
        width={44}
        height={44}
        className={'h-11 w-11 rounded-full'}
      />
    </div>
  )
}

export default PostUserProfile
