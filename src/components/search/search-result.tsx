import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import Avatar, { genConfig } from 'react-nice-avatar'
import { Tables } from '@/types/database.types'
import { useMutation } from '@tanstack/react-query'
import createConnection from '@/queries/create-connection'
import { useToast } from '@/components/ui/use-toast'

interface Props {
  profile: Tables<'user_profiles'>
}

const SearchResult: FC<Props> = ({ profile }) => {
  const config = genConfig(profile.email || 'email')
  const { toast } = useToast()

  const { mutateAsync } = useMutation({
    mutationKey: ['connect', profile.user_id],
    mutationFn: createConnection,
    onError: (err: any) => {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: err.message,
      })
    },
  })

  const handleConnect = async () => {
    await mutateAsync(profile.user_id)
    console.log('Connected')
  }
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
      <Button variant={'outline'} onClick={() => handleConnect()}>
        Connect
      </Button>
    </div>
  )
}

export default SearchResult
