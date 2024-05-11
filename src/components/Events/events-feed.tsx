'use client'
import React from 'react'
import EventItem from '@/components/Events/event-item'
import { useQuery } from '@tanstack/react-query'
import { createBrowserClient } from '@/utils/supabase'
import getEvents from '@/queries/get-events'

const EventsFeed = () => {
  const supabase = createBrowserClient()

  const { data } = useQuery({
    queryKey: ['events'],
    queryFn: () => getEvents(supabase),
  })

  return (
    <div className={'flex w-full flex-shrink flex-col divide-y divide-border'}>
      {data?.data?.map((event) => (
        <EventItem
          key={event.id}
          title={event.title}
          date={event.created_at}
          content={event.content}
        />
      ))}
      <EventItem
        title={'Awesome Pool Party with Friends'}
        date={'2021-08-01T12:00:00Z'}
        content={'hello world'}
      />
      <EventItem
        title={'Awesome Pool Party with Friends'}
        date={'2021-08-01T12:00:00Z'}
        content={'hello world'}
      />
      <EventItem
        title={'Awesome Pool Party with Friends'}
        date={'2021-08-01T12:00:00Z'}
        content={'hello world'}
      />
    </div>
  )
}

export default EventsFeed
