import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import Avatar, { genConfig } from 'react-nice-avatar'
import { Tables } from '@/types/database.types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import createConnection from '@/queries/create-connection'
import { useToast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'
import isConnected from '@/queries/is-connected'

interface Props {
  profile: Tables<'user_profiles'>
}

const SearchResult: FC<Props> = ({ profile }) => {
  const config = genConfig(profile.user_id || '')
  const { toast } = useToast()
  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['connect', profile.user_id],
    mutationFn: createConnection,
    onError: (err: any) => {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: err.message,
      })
    },
    onSuccess: () => {
      // re-fetch the connection status
      queryClient
        .invalidateQueries({
          queryKey: ['is-connected', profile.user_id],
        })
        .then(() => {
          toast({
            variant: 'default',
            title: 'Connected',
            description: `You have successfully connected with ${profile.first_name} ${profile.last_name}`,
          })
        })
    },
  })

  const handleConnect = async () => {
    await mutateAsync(profile.user_id)
  }

  // check if user is already connected
  const { isPending: connectionIsPending, data: isConnectionExist } = useQuery({
    queryKey: ['is-connected', profile.user_id],
    queryFn: () => isConnected(profile.user_id),
    retry: false,
  })
  return (
    <div
      className={
        'flex w-full flex-row items-center justify-between px-4 py-2 hover:bg-muted'
      }
    >
      <div className={'flex flex-row items-center justify-center gap-2'}>
        <Avatar className={'h-9 w-9 rounded-full'} {...config} />
        <span>
          {profile.first_name} {profile.last_name}
        </span>
      </div>
      <Button
        variant={'outline'}
        onClick={() => handleConnect()}
        disabled={isPending || connectionIsPending || isConnectionExist}
      >
        {isPending ? (
          <Loader2 className={'animate-spin'} />
        ) : isConnectionExist ? (
          'Connected'
        ) : (
          'Connect'
        )}
      </Button>
    </div>
  )
}

export default SearchResult
