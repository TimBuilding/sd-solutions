import {
  countParticipants,
  formatParticipants,
  getParticipantIds,
} from '@/app/(home)/events/format-participants'
import getEventParticipants from '@/queries/get-event-participants'
import { Tables } from '@/types/database.types'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'
import ParticipateButton from './participate-button'

interface Props {
  event: Tables<'events'>
}

const EventStatus: FC<Props> = ({ event }) => {
  const { data } = useQuery({
    queryKey: ['event_participants', event.id],
    queryFn: () => getEventParticipants(event.id),
  })

  return (
    <div className={'mt-2.5 flex w-full flex-row items-center justify-start'}>
      <div className={'flex w-fit flex-row items-center justify-center'}>
        {data &&
          data.length > 0 &&
          getParticipantIds(data).map((userId, index) => (
            <Avatar
              key={index}
              className={`z-${index * 10} h-10 w-10 ${
                index > 0 ? `-translate-x-${3 * index}` : ''
              } rounded-full border-4 border-card`}
              {...genConfig(userId)}
            />
          ))}
      </div>
      <div className={'flex w-full flex-row items-center justify-between'}>
        <div className={'flex flex-col'}>
          <span className={'text-xs leading-5 text-card-foreground/90'}>
            {data && data.length > 0
              ? formatParticipants(data).toString()
              : 'No participants'}
          </span>
          <span className={'text-xs leading-6 text-card-foreground/30'}>
            {data && data.length > 2
              ? `and ${countParticipants(data)} more are participating`
              : ''}
          </span>
        </div>
        <ParticipateButton event={event} />
      </div>
    </div>
  )
}

export default EventStatus
