import React, { FC } from 'react'
import { format } from 'date-fns'
import Avatar, { genConfig } from 'react-nice-avatar'
import EventStatus from '@/components/Events/event-status'

interface Props {
  title: string
  date: string
  content: string
}

const EventItem: FC<Props> = ({ title, date, content }) => {
  const config1 = genConfig('email1@gmail.com')
  const config2 = genConfig('email2@gmail.com')
  const config3 = genConfig('email3@gmail.com')

  return (
    <div
      className={'flex w-full flex-col bg-card px-8 py-10 text-card-foreground'}
    >
      <h2 className={'w-72 text-2xl font-extrabold md:text-3xl'}>{title}</h2>
      <span className={'mt-10 leading-6 text-card-foreground/40'}>
        {format(new Date(date), 'MMMM d, yyyy')}
      </span>
      <p className={'mt-2.5 leading-6 text-card-foreground/60'}>{content}</p>
      <EventStatus />
    </div>
  )
}

export default EventItem
