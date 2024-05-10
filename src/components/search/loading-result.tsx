import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const LoadingResult = () => {
  return (
    <div
      className={
        'flex w-full flex-row items-center justify-between px-4 py-2 hover:bg-muted'
      }
    >
      <div className={'flex flex-row items-center justify-center gap-2'}>
        <Skeleton className={'h-9 w-9 rounded-full'} />
        <Skeleton className={'h-4 w-20'} />
      </div>
      <Skeleton className={'h-8 w-24'} />
    </div>
  )
}

export default LoadingResult
