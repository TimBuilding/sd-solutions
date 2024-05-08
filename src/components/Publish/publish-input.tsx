import React, { FC } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface Props {
  setIsOpen: (_isOpen: boolean) => void
}

const PublishInput: FC<Props> = ({ setIsOpen }) => {
  return (
    <div className={'flex flex-row gap-5 px-4 pb-10'}>
      <Avatar>
        <AvatarImage src={'https://picsum.photos/200/300'} />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Textarea
        onClick={() => setIsOpen(true)}
        className={
          'h-16 w-full min-w-[380px] resize-none border-none bg-card placeholder:text-muted-foreground/30 focus-visible:ring-0'
        }
        placeholder={'Write something awesome...'}
      />
    </div>
  )
}

export default PublishInput
