import React from 'react'
import { Separator } from '@/components/ui/separator'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import LoadingPost from '@/app/(home)/(feed)/loading-post'

const NewsfeedLoading = () => {
  return (
    <div className={'flex flex-col items-center gap-7'}>
      <Card className={'w-full pt-10'}>
        <div className={'flex flex-row gap-5 px-4 pb-10'}>
          <Skeleton
            className={
              'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'
            }
          />
          <Skeleton className={'h-20 min-w-[380px]'} />
        </div>
        <Separator />
        <div
          className={' flex flex-row items-center justify-start gap-2.5 p-2'}
        >
          <Skeleton className={'h-8 w-[85px] rounded-full'} />
          <Skeleton className={'h-8 w-[54px] rounded-full'} />
        </div>
      </Card>
      {[1, 2, 3, 4, 5].map((_, index) => (
        <LoadingPost key={index} />
      ))}
    </div>
  )
}

export default NewsfeedLoading
