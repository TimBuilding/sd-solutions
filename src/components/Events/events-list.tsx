import React, { FC } from 'react'
import { Calendar } from 'lucide-react'
import { cn } from '@/utils/tailwind'

const ListItem: FC<{
  timestamp: string
  isActive?: boolean
}> = ({ timestamp, isActive = false }) => {
  return (
    <div
      className={cn(
        isActive ? 'bg-muted' : '',
        'flex h-16 cursor-pointer flex-row items-center justify-between p-5',
      )}
    >
      <div className={'flex flex-row gap-1.5'}>
        <Calendar
          className={cn(
            isActive ? 'text-primary' : 'text-card-foreground',
            'h-5 w-5',
          )}
        />
        <span className={'text-sm font-medium'}>May 5th</span>
      </div>
      <span className={'text-xs text-muted-foreground/50'}>at 08:00 pm</span>
    </div>
  )
}

const EventsList = () => {
  return (
    <div
      className={
        'flex h-screen w-64 flex-col divide-y divide-border overflow-y-auto border-r border-border bg-card'
      }
    >
      <ListItem timestamp={'2021-05-05T20:00:00'} isActive={true} />
      <ListItem timestamp={'2021-05-05T20:00:00'} />
      <ListItem timestamp={'2021-05-05T20:00:00'} />
    </div>
  )
}

export default EventsList
