'use client'
import React, { FC, useState } from 'react'
import { Calendar } from 'lucide-react'
import { cn } from '@/utils/tailwind'
import { createBrowserClient } from '@/utils/supabase'
import { useQuery } from '@tanstack/react-query'
import { Tables } from '@/types/database.types'
import getEvents from '@/queries/get-events'
import { format } from 'date-fns'

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
        <span className={'text-sm font-medium'}>
          {format(new Date(timestamp), 'MMM do')}
        </span>
      </div>
      <span className={'text-xs text-muted-foreground/50'}>
        {format(new Date(timestamp), 'p')}
      </span>
    </div>
  )
}

interface Props {
  initialData: Tables<'events'>[]
}

const EventsList: FC<Props> = ({ initialData }) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const supabase = createBrowserClient()

  const { data, isPending } = useQuery({
    queryKey: ['events'],
    queryFn: () => getEvents(supabase),
    initialData,
  })

  return (
    <div
      className={
        'hidden h-full min-h-screen w-64 flex-shrink-0 flex-col divide-y divide-border overflow-y-auto border-r border-border bg-card lg:flex'
      }
    >
      {data.map((event) => (
        <ListItem
          key={event.id}
          timestamp={event.created_at}
          isActive={activeTab === data.indexOf(event)}
        />
      ))}
    </div>
  )
}

export default EventsList
