import {
  countParticipants,
  formatParticipants,
  getParticipantEmails,
} from '@/app/(home)/events/format-participants'
import { Button } from '@/components/ui/button'
import getEventParticipants from '@/queries/get-event-participants'
import { Tables } from '@/types/database.types'
import { useQuery } from '@tanstack/react-query'
import { Hand } from 'lucide-react'
import { FC } from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'

interface Props {
  event: Tables<'events'>
}

const EventStatus: FC<Props> = ({ event }) => {
  const config1 = genConfig('email1@gmail.com')
  const config2 = genConfig('email2@gmail.com')
  const config3 = genConfig('email3@gmail.com')

  const { data } = useQuery({
    queryKey: ['event_participants', event.id],
    queryFn: () => getEventParticipants(event.id),
  })

  return (
    <div className={'mt-2.5 flex w-full flex-row items-center justify-start'}>
      <div className={'flex w-fit flex-row items-center justify-center'}>
        {data &&
          data.length > 0 &&
          getParticipantEmails(data).map((email, index) => (
            <Avatar
              key={index}
              className={`z-${index * 10} h-10 w-10 ${
                index > 0 ? `-translate-x-${3 * index}` : ''
              } rounded-full border-4 border-card`}
              {...genConfig(email)}
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
        <Button
          variant={'outline'}
          size={'interactions'}
          className={'text-muted-foreground/50'}
        >
          <Hand className={'h-4 w-4'} />
        </Button>
      </div>
    </div>
  )
}

export default EventStatus
