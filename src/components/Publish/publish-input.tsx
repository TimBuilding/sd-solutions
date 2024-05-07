import React, { FC } from 'react'
import Image from 'next/image'
import { Textarea } from '@/components/ui/textarea'

interface Props {
  setIsOpen: (_isOpen: boolean) => void
}

const PublishInput: FC<Props> = ({ setIsOpen }) => {
  return (
    <div className={'flex flex-row gap-5 px-4 pb-10'}>
      <Image
        src={'https://picsum.photos/200/300'}
        alt={''}
        width={44}
        height={44}
        className={'h-11 w-11 rounded-full'}
      />
      <Textarea
        onClick={() => setIsOpen(true)}
        className={
          'h-16 w-full min-w-[380px] resize-none border-none bg-card focus-visible:ring-0'
        }
      />
    </div>
  )
}

export default PublishInput
