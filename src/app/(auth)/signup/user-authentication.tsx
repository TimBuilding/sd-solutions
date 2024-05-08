import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

const UserAuthentication = () => {
  return (
    <Card className={'mx-auto flex w-full max-w-xs flex-col gap-5 p-10'}>
      <div className={'relative'}>
        <Label
          className={
            'absolute left-3 top-3 z-10 text-xs font-medium uppercase tracking-tighter text-card-foreground/50'
          }
        >
          Password
        </Label>
        <Input
          type={'password'}
          placeholder={'Choose a password'}
          className={'h-16 pt-6 text-sm  placeholder:text-muted-foreground/30'}
        />
      </div>
      <div className={'relative'}>
        <Label
          className={
            'absolute left-3 top-3 z-10 text-xs font-medium uppercase tracking-tighter text-card-foreground/50'
          }
        >
          Repeat Password
        </Label>
        <Input
          type={'password'}
          placeholder={'Repeat your password'}
          className={'h-16 pt-6 text-sm  placeholder:text-muted-foreground/30'}
        />
      </div>
    </Card>
  )
}

export default UserAuthentication
