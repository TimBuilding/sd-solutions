import React from 'react'
import { Button } from '@/components/ui/button'
import Avatar, { genConfig } from 'react-nice-avatar'

const email = 'monds@gmail.com'
const SearchResult = () => {
  const config = genConfig(email)

  return (
    <div
      className={
        'flex w-full flex-row items-center justify-between px-4 py-2 hover:bg-muted'
      }
    >
      <div className={'flex flex-row items-center justify-center gap-2'}>
        <Avatar className={'h-9 w-9 rounded-full'} {...config} />
        <span>Monds Francisco</span>
      </div>
      <Button variant={'outline'}>Connect</Button>
    </div>
  )
}

export default SearchResult
