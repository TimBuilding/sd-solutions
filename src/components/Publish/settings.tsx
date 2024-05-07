import React from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Bell, Megaphone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Settings = () => {
  return (
    <div className={'bg-muted'}>
      <RadioGroup className={'gap-0 px-2'} defaultValue={'activity-feed'}>
        <div className={'flex flex-row items-center justify-between p-1.5'}>
          <div className={'flex flex-row items-center justify-center gap-2.5'}>
            <RadioGroupItem value={'activity-feed'} />
            <Button
              variant={'outline'}
              size={'icon'}
              className={'rounded-full'}
            >
              <Bell className={'h-5 w-5 text-muted-foreground/30'} />
            </Button>
            <span className={'text-sm font-medium'}>Activity Feed</span>
          </div>
        </div>
        <div className={'flex flex-row items-center justify-between p-1.5'}>
          <div className={'flex flex-row items-center justify-center gap-2.5'}>
            <RadioGroupItem value={'announcements'} />
            <Button
              variant={'outline'}
              size={'icon'}
              className={'rounded-full'}
            >
              <Megaphone className={'h-5 w-5 text-muted-foreground/30'} />
            </Button>
            <span className={'text-sm font-medium'}>Announcements</span>
          </div>
        </div>
      </RadioGroup>
    </div>
  )
}

export default Settings
