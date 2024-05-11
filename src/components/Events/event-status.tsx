import formatParticipants from '@/app/(home)/events/format-participants'
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

  console.log(data)
  return (
    <div className={'mt-2.5 flex w-full flex-row items-center justify-start'}>
      <div className={'flex w-fit flex-row items-center justify-center'}>
        <Avatar
          className={'z-0 h-10 w-10 rounded-full border-4 border-card'}
          {...config1}
        />
        <Avatar
          className={
            'z-10 h-10 w-10 -translate-x-3 rounded-full border-4 border-card'
          }
          {...config2}
        />
        <Avatar
          className={
            'z-20 h-10 w-10 -translate-x-6 rounded-full border-4 border-card'
          }
          {...config3}
        />
      </div>
      <div className={'flex w-full flex-row items-center justify-between'}>
        <div className={'flex flex-col'}>
          <span className={'text-xs leading-5 text-card-foreground/90'}>
            {data && data.length > 0
              ? formatParticipants(data).toString()
              : 'No participants'}
          </span>
          <span className={'text-xs leading-6 text-card-foreground/30'}>
            and 23 more are participating
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
