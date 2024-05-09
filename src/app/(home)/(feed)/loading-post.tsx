import React from 'react'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const LoadingPost = () => {
  return (
    <Card className={'h-52 w-full md:max-w-3xl'}>
      <div className={'flex flex-row gap-2.5 px-4 pt-4'}>
        <Skeleton className={'h-11 w-11 rounded-full'} />
        <div className={'flex flex-col items-start justify-center gap-1'}>
          <h3 className={'text-sm font-medium capitalize text-card-foreground'}>
            <Skeleton className={'h-4 w-20'} />
          </h3>
          <span className={'text-xs text-muted-foreground/50'}>
            <Skeleton className={'h-3 w-28'} />
          </span>
        </div>
      </div>
      <div className={'px-4 pb-2.5 pt-4'}>
        <p className={'space-y-2 text-sm leading-5 text-card-foreground/70'}>
          <Skeleton className={'h-4 w-80'} />
          <Skeleton className={'h-4 w-96'} />
        </p>
      </div>
      <div
        className={
          'flex w-full flex-row items-center justify-end space-x-1 px-4'
        }
      >
        <Skeleton className={'h-8 w-8 rounded-full'} />
        <Skeleton className={'h-8 w-8 rounded-full'} />
        <Skeleton className={'h-8 w-8 rounded-full'} />
      </div>
      <div
        className={
          'flex flex-row items-center justify-between px-4 pb-4 pt-2.5'
        }
      >
        <div className={'flex flex-row items-center justify-center'}>
          <Skeleton
            className={'z-0 h-9 w-9 rounded-full border-4 border-card'}
          />
          <Skeleton
            className={
              'z-10 h-9 w-9 -translate-x-3 rounded-full border-4 border-card'
            }
          />
          <Skeleton
            className={
              'z-20 h-9 w-9 -translate-x-6 rounded-full border-4 border-card'
            }
          />
        </div>
        <div className={'flex flex-row items-center justify-center gap-3'}>
          <div
            className={
              'flex flex-row items-center justify-center gap-1 text-muted-foreground/50'
            }
          >
            <Skeleton className={'h-4 w-4'} />
          </div>
          <div
            className={
              'flex flex-row items-center justify-center gap-1 text-muted-foreground/50'
            }
          >
            <Skeleton className={'h-4 w-4'} />
          </div>
          <div
            className={
              'flex flex-row items-center justify-center gap-1 text-muted-foreground/50'
            }
          >
            <Skeleton className={'h-4 w-4'} />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default LoadingPost
