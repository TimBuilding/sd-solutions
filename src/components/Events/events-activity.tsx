'use client'
import React, { FC } from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'
import { formatDistance } from 'date-fns'

const ActivityItem: FC<{
  name: string
  email: string
  event: string
  timestamp: string
}> = ({ name, email, event, timestamp }) => {
  const config1 = genConfig(email)
  return (
    <div className={'flex flex-row items-start justify-start gap-2.5 py-2.5'}>
      <Avatar className={'h-8 w-8 flex-shrink-0 rounded-full'} {...config1} />
      <div>
        <p className={'text-sm leading-5'}>
          <span className={'font-medium'}>{name}</span> is now participating to
          the <span className={'font-medium'}>{event}</span> event.
        </p>
        <span className={'text-sm leading-5 text-muted-foreground/40'}>
          {formatDistance(new Date(timestamp), new Date(), {
            addSuffix: true,
          })}
        </span>
      </div>
    </div>
  )
}

const EventsActivity = () => {
  return (
    <div
      className={
        'hidden h-screen w-72 flex-shrink-0 overflow-y-auto border-l border-border bg-card xl:block 2xl:w-96'
      }
    >
      <div className={'px-8 py-5'}>
        <h2 className={'font-semibold text-card-foreground/90'}>
          Events Activity
        </h2>
      </div>
      <div className={'px-5'}>
        <ActivityItem
          name={'David Kim'}
          event={'Awesome Pool Party with Friends'}
          email={'david@gmail.com'}
          timestamp={'2021-08-01T12:00:00Z'}
        />
        <ActivityItem
          name={'David Kim'}
          event={'Awesome Pool Party with Friends'}
          email={'david@gmail.com'}
          timestamp={'2021-08-01T12:00:00Z'}
        />
        <ActivityItem
          name={'David Kim'}
          event={'Awesome Pool Party with Friends'}
          email={'david@gmail.com'}
          timestamp={'2021-08-01T12:00:00Z'}
        />
      </div>
    </div>
  )
}

export default EventsActivity
