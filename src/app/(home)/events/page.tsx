'use server'
import React from 'react'
import EventsFeed from '@/components/Events/events-feed'
import EventsList from '@/components/Events/events-list'
import EventsActivity from '@/components/Events/events-activity'
import getEvents from '@/queries/get-events'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { Tables } from '@/types/database.types'

const EventsPage = async () => {
  const supabase = createServerClient(cookies())

  const initialEvents = await getEvents(supabase)

  return (
    <div className="flex flex-row items-start justify-center">
      <EventsList initialData={initialEvents} />
      <EventsFeed initialData={initialEvents} />
      <EventsActivity />
    </div>
  )
}

export default EventsPage
