'use client'
import React from 'react'
import EventItem from '@/components/Events/event-item'

const EventsFeed = () => {
  return (
    <div className={'flex flex-col divide-y divide-border'}>
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
