import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Bell, ChevronRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const Feed = () => {
  return (
    <div className={'flex flex-row gap-8 py-4'}>
      <div className={'flex flex-row items-center justify-center'}>
        <span
          className={
            'flex h-10 w-10 flex-row items-center justify-center rounded-full bg-primary'
          }
        >
          <Bell />
        </span>
        <div className={'flex flex-col items-start justify-center px-2.5'}>
          <span className={'text-sm font-semibold text-card-foreground'}>
            News Feed
          </span>
          <span className={'text-xs text-card-foreground/30'}>
            Latest updates
          </span>
        </div>
      </div>
      <Button variant={'ghost'} size={'icon'}>
        <ChevronRight />
      </Button>
    </div>
  )
}

const RecommendedFeed = () => {
  return (
    <Card className={'w-full max-w-xs'}>
      <CardHeader className={'text-sm text-card-foreground/40'}>
        Recommended Pages
      </CardHeader>
      <Separator />
      <CardContent>
        <Feed />
        <Feed />
        <Feed />
      </CardContent>
    </Card>
  )
}

export default RecommendedFeed
