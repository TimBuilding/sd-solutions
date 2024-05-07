import React from 'react'
import { Button } from '@/components/ui/button'
import { Heart, Link2, MessageCircle } from 'lucide-react'

const PostInteractions = () => {
  return (
    <div
      className={'flex w-full flex-row items-center justify-end space-x-1 px-4'}
    >
      <Button size={'interactions'} variant={'default'}>
        <MessageCircle className={'h-4 w-4'} />
      </Button>
      <Button size={'interactions'} variant={'default'}>
        <Link2 className={'h-4 w-4'} />
      </Button>
      <Button size={'interactions'} variant={'secondary'}>
        <Heart className={'h-4 w-4 fill-destructive text-destructive'} />
      </Button>
    </div>
  )
}

export default PostInteractions
