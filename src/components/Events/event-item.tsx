import React, { FC } from 'react'
import { format } from 'date-fns'
import Avatar, { genConfig } from 'react-nice-avatar'
import EventStatus from '@/components/Events/event-status'
import { useQuery } from '@tanstack/react-query'
import getEventParticipants from '@/queries/get-event-participants'
import { Tables } from '@/types/database.types'

interface Props {
  event: Tables<'events'>
}

const EventItem: FC<Props> = ({ event }) => {
  return (
    <div
      className={'flex w-full flex-col bg-card px-8 py-10 text-card-foreground'}
    >
      <h2 className={'w-72 text-2xl font-extrabold md:text-3xl'}>
        {event.title}
      </h2>
      <span className={'mt-10 leading-6 text-card-foreground/40'}>
        {format(new Date(event.created_at || ''), 'MMMM d, yyyy')}
      </span>
      <p className={'mt-2.5 leading-6 text-card-foreground/60'}>
        {event.content}
      </p>
      <EventStatus event={event} />
    </div>
  )
}

export default EventItem
