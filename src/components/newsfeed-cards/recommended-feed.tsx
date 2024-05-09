import React, { FC } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Bell,
  Calendar,
  ChevronRight,
  LucideIcon,
  Megaphone,
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Feed {
  title: string
  description: string
  link: string
  icon: LucideIcon
}

const links: Feed[] = [
  {
    title: 'News Feed',
    description: 'Latest updates',
    link: '/',
    icon: Bell,
  },
  {
    title: 'Announcements',
    description: 'Company news',
    link: '/announcements',
    icon: Megaphone,
  },
  {
    title: 'Events',
    description: 'Upcoming events',
    link: '/events',
    icon: Calendar,
  },
]

const Feed: FC<Feed> = ({ title, description, link, icon: Icon }) => {
  return (
    <Link
      href={link}
      className={
        'flex w-full flex-row justify-between gap-8 rounded-lg px-6 py-5 hover:bg-muted/50'
      }
    >
      <div className={'flex flex-row items-center justify-center'}>
        <span
          className={
            'flex h-10 w-10 flex-row items-center justify-center rounded-full bg-primary'
          }
        >
          <Icon />
        </span>
        <div className={'flex flex-col items-start justify-center px-2.5'}>
          <span
            className={'text-sm font-semibold capitalize text-card-foreground'}
          >
            {title}
          </span>
          <span className={'text-xs text-card-foreground/30'}>
            {description}
          </span>
        </div>
      </div>
      <Button
        variant={'ghost'}
        size={'icon'}
        className={'hover:bg-transparent'}
      >
        <ChevronRight />
      </Button>
    </Link>
  )
}

const RecommendedFeed = () => {
  return (
    <Card className={'h-fit w-full max-w-xs'}>
      <CardHeader className={'text-sm text-card-foreground/40'}>
        Recommended Feeds
      </CardHeader>
      <Separator />
      <CardContent className={'flex flex-col px-0'}>
        {links.map((link) => (
          <Feed
            key={link.title}
            title={link.title}
            description={link.description}
            link={link.link}
            icon={link.icon}
          />
        ))}
      </CardContent>
    </Card>
  )
}

export default RecommendedFeed
