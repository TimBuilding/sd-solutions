import React from 'react'
import EventsFeed from '@/components/Events/events-feed'
import EventsList from '@/components/Events/events-list'
import EventsActivity from '@/components/Events/events-activity'

const EventsPage = () => {
  return (
    <div className="flex flex-row items-start justify-center">
      <EventsList />
      <EventsFeed />
      <EventsActivity />
    </div>
  )
}

export default EventsPage
