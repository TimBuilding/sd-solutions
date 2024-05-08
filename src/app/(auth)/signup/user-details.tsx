import React from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const UserDetails = () => {
  return (
    <Card className={'mx-auto flex w-full flex-col gap-5 p-10'}>
      <div className={'relative'}>
        <Label
          className={
            'absolute left-3 top-3 z-10 text-xs font-medium uppercase tracking-tighter text-card-foreground/50'
          }
        >
          First Name
        </Label>
        <Input
          placeholder={'Enter your first name'}
          className={'h-16 pt-6 text-sm  placeholder:text-muted-foreground/30'}
        />
      </div>
      <div className={'relative'}>
        <Label
          className={
            'absolute left-3 top-3 z-10 text-xs font-medium uppercase tracking-tighter text-card-foreground/50'
          }
        >
          Last Name
        </Label>
        <Input
          placeholder={'Enter your last name'}
          className={'h-16 pt-6 text-sm  placeholder:text-muted-foreground/30'}
        />
      </div>
      <div className={'relative'}>
        <Label
          className={
            'absolute left-3 top-3 z-10 text-xs font-medium uppercase tracking-tighter text-card-foreground/50'
          }
        >
          Email
        </Label>
        <Input
          placeholder={'Enter your email address'}
          className={'h-16 pt-6 text-sm  placeholder:text-muted-foreground/30'}
        />
      </div>
    </Card>
  )
}

export default UserDetails
