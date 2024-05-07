import React from 'react'
import { Heart, Link2, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const PostStatus = () => {
  return (
    <div
      className={'flex flex-row items-center justify-between px-4 pb-4 pt-2.5'}
    >
      <div className={'flex flex-row items-center justify-center'}>
        <Image
          src={'https://picsum.photos/200/300'}
          alt={''}
          className={'z-0 h-10 w-10 rounded-full border-4 border-card'}
          width={36}
          height={36}
        />
        <Image
          src={'https://picsum.photos/200/300'}
          alt={''}
          className={
            'z-10 h-10 w-10 -translate-x-3 rounded-full border-4 border-card'
          }
          width={36}
          height={36}
        />
        <Image
          src={'https://picsum.photos/200/300'}
          alt={''}
          className={
            'z-20 h-10 w-10 -translate-x-6 rounded-full border-4 border-card'
          }
          width={36}
          height={36}
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
