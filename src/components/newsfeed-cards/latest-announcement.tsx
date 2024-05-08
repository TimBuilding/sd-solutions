'use client'
import React from 'react'
import { Card } from '@/components/ui/card'
import { Megaphone } from 'lucide-react'
import Avatar, { genConfig } from 'react-nice-avatar'
import { Button } from '@/components/ui/button'

const LatestAnnouncement = () => {
  const config = genConfig('email@gmail.com')

  return (
    <Card
      className={
        'w-full max-w-xs bg-primary/70 px-6 pb-9 pt-6 text-primary-foreground'
      }
    >
      <Megaphone className={'h-6 w-6'} />
      <div className={'flex flex-col items-center gap-4 pb-4 pt-9'}>
        <Avatar className={'h-11 w-11 rounded-full'} {...config} />
        <div className={'flex flex-col text-center'}>
          <span className={'font-semibold'}>New Announcement!</span>
          <span className={'text-sm'}>Check out our new feature! 🎉</span>
        </div>
        <Button variant={'outline'}>Read More</Button>
      </div>
    </Card>
  )
}

export default LatestAnnouncement
