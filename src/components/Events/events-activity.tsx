'use client'
import React, { FC } from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'
import { formatDistance } from 'date-fns'

import { createBrowserClient } from '@/utils/supabase'
import { useQuery } from '@tanstack/react-query'
import getEventActivities from '@/queries/get-event-activities'
import { Tables } from '@/types/database.types'

const ActivityItem: FC<{
  activity: Tables<'events_with_participants'>
}> = ({ activity }) => {
  const config = genConfig(activity.user_id || '')
  return (
    <div className={'flex flex-row items-start justify-start gap-2.5 py-2.5'}>
      <Avatar className={'h-8 w-8 flex-shrink-0 rounded-full'} {...config} />
      <div>
        <p className={'text-sm leading-5'}>
          {activity.type === 'event' ? (
            <>
              <span className={'font-medium'}>
                {activity.first_name} {activity.last_name}
              </span>{' '}
              created the{' '}
              <span className={'font-medium'}>{activity.event_title}</span>{' '}
              event.
            </>
          ) : (
            <>
              <span className={'font-medium'}>
                {activity.first_name} {activity.last_name}
              </span>{' '}
              is now participating to the{' '}
              <span className={'font-medium'}>{activity.event_title}</span>{' '}
              event.
            </>
          )}
        </p>
        <span className={'text-sm leading-5 text-muted-foreground/40'}>
          {formatDistance(new Date(activity.created_at || ''), new Date(), {
            addSuffix: true,
          })}
        </span>
      </div>
    </div>
  )
}

const EventsActivity = () => {
  const supabase = createBrowserClient()
  const { data } = useQuery({
    queryKey: ['events_activity'],
    queryFn: () => getEventActivities(supabase),
  })

  return (
    <div
      className={
        'sticky right-0 top-0 hidden h-screen w-72 flex-shrink-0 overflow-y-auto border-l border-border bg-card xl:block 2xl:w-96'
      }
    >
      <div className={'px-8 py-5'}>
        <h2 className={'font-semibold text-card-foreground/90'}>
          Events Activity
        </h2>
      </div>
      <div className={'px-5'}>
        {data?.map((activity, i) => (
          <ActivityItem key={i} activity={activity} />
        ))}
      </div>
    </div>
  )
}

export default EventsActivity
