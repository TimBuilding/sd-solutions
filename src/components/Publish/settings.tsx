import React from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Bell, Check, Megaphone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Settings = () => {
  return (
    <div className={'bg-muted'}>
      <RadioGroup className={'gap-0 px-2'} defaultValue={'activity-feed'}>
        <div className={'flex flex-row items-center justify-between p-1.5'}>
          <RadioGroupItem value={'activity-feed'} className={'peer hidden'} />
          <div className={'flex flex-row items-center justify-center gap-2.5'}>
            <div
              className={
                'flex h-6 w-6 flex-col items-center justify-center rounded-full bg-primary text-primary-foreground'
              }
            >
              <Check className={'h-4 w-4 peer-checked:hidden'} />
            </div>
            <Button
              variant={'outline'}
              size={'icon'}
              className={'cursor-default rounded-full hover:bg-background'}
            >
              <Bell className={'h-5 w-5 text-muted-foreground/30'} />
            </Button>
            <span className={'text-sm font-medium'}>Activity Feed</span>
          </div>
        </div>
      </RadioGroup>
    </div>
  )
}

export default Settings
