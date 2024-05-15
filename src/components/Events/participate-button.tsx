'use client'
import createEventParticipant from '@/queries/create-event-participant'
import { Tables } from '@/types/database.types'
import { createBrowserClient } from '@/utils/supabase'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Hand, Loader2 } from 'lucide-react'
import { FC } from 'react'
import { Button } from '../ui/button'
import { useToast } from '../ui/use-toast'
import isParticipant from '@/queries/is-participant'

interface Props {
  event: Tables<'events'>
}

const ParticipateButton: FC<Props> = ({ event }) => {
  const { toast } = useToast()
  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['event_participants', event.id],
    mutationFn: () => createEventParticipant(event.id),
    onSuccess: () => {
      queryClient
        .invalidateQueries({
          queryKey: ['event_participants_button', event.id],
        })
        .then(async () => {
          await queryClient.invalidateQueries({
            queryKey: ['events_activity'],
          })
          await queryClient.invalidateQueries({
            queryKey: ['event_participants', event.id],
          })
          toast({
            title: 'Participant added',
            description: 'You are now participating in this event',
          })
        })
    },
    onError: () => {
      toast({
        title: 'Something went wrong',
        description: 'An error occurred while adding the participant',
      })
    },
  })

  const { data } = useQuery({
    queryKey: ['event_participants_button', event.id],
    queryFn: () => isParticipant(event.id),
    retry: false,
  })
  return (
    <Button
      variant={'outline'}
      size={'interactions'}
      className={'text-muted-foreground/50'}
      disabled={isPending || data}
      onClick={() => mutateAsync()}
    >
      {isPending ? (
        <Loader2 className={'h-4 w-4'} />
      ) : (
        <Hand className={'h-4 w-4'} />
      )}
    </Button>
  )
}

export default ParticipateButton
