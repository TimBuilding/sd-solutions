import React from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'
import { Button } from '@/components/ui/button'
import { Hand } from 'lucide-react'

const EventStatus = () => {
  const config1 = genConfig('email1@gmail.com')
  const config2 = genConfig('email2@gmail.com')
  const config3 = genConfig('email3@gmail.com')

  return (
    <div className={'mt-2.5 flex w-full flex-row items-center justify-start'}>
      <div className={'flex w-fit flex-row items-center justify-center'}>
        <Avatar
          className={'z-0 h-10 w-10 rounded-full border-4 border-card'}
          {...config1}
        />
        <Avatar
          className={
            'z-10 h-10 w-10 -translate-x-3 rounded-full border-4 border-card'
          }
          {...config2}
        />
        <Avatar
          className={
            'z-20 h-10 w-10 -translate-x-6 rounded-full border-4 border-card'
          }
          {...config3}
        />
      </div>
      <div className={'flex w-full flex-row items-center justify-between'}>
        <div className={'flex flex-col'}>
          <span className={'text-xs leading-5 text-card-foreground/90'}>
            You, David
          </span>
          <span className={'text-xs leading-6 text-card-foreground/30'}>
            and 23 more are participating
          </span>
        </div>
        <Button
          variant={'outline'}
          size={'interactions'}
          className={'text-muted-foreground/50'}
        >
          <Hand className={'h-4 w-4'} />
        </Button>
      </div>
    </div>
  )
}

export default EventStatus
