import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import Avatar, { genConfig } from 'react-nice-avatar'
import { Tables } from '@/types/database.types'

interface Props {
  profile: Tables<'user_profiles'>
}

const SearchResult: FC<Props> = ({ profile }) => {
  const config = genConfig(profile.email || 'email')

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
      <Button variant={'outline'}>Connect</Button>
    </div>
  )
}

export default SearchResult
