'use client'
import React, { FC } from 'react'
import EventItem from '@/components/Events/event-item'
import { useQuery } from '@tanstack/react-query'
import { createBrowserClient } from '@/utils/supabase'
import getEvents from '@/queries/get-events'
import { Tables } from '@/types/database.types'
import LoadingEvents from './loading-events'

interface Props {
  initialData: Tables<'events'>[]
}

const EventsFeed: FC<Props> = ({ initialData }) => {
  const supabase = createBrowserClient()

  const { data, isPending } = useQuery({
    queryKey: ['events'],
    queryFn: () => getEvents(supabase),
    initialData: initialData,
  })

  return (
    <div
      className={
        'flex w-full flex-shrink flex-col divide-y divide-border lg:ml-64'
      }
    >
      {isPending &&
        [...Array(5)].map((_, index) => <LoadingEvents key={index} />)}
      {data?.map((event) => (
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
