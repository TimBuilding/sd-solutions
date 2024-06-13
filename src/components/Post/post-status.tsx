'use client'
import {
  countLikers,
  formatLikers,
  getLikerUserIds,
  getTotalLikes,
} from '@/app/(home)/(feed)/format-likers'
import getNewsfeedLikes from '@/queries/get-newsfeed-likes'
import { useQuery } from '@tanstack/react-query'
import { Heart, Link2, MessageCircle } from 'lucide-react'
import Avatar, { genConfig } from 'react-nice-avatar'
import { usePostContext } from './Post'

const PostStatus = () => {
  const { post } = usePostContext()

  const { data } = useQuery({
    queryKey: ['newsfeed_likes', post.id],
    queryFn: () => getNewsfeedLikes(post.id),
  })

  return (
    <div
      className={'flex flex-row items-center justify-between px-4 pb-4 pt-2.5'}
    >
      <div className={'flex flex-row items-center justify-center'}>
        {data &&
          data.length > 0 &&
          getLikerUserIds(data).map((userId, index) => (
            <Avatar
              key={index}
              className={`z-${index * 10} h-10 w-10 ${
                index > 0 ? `-translate-x-${3 * index}` : ''
              } rounded-full border-4 border-card`}
              {...genConfig(userId)}
            />
          ))}
        <div className={'flex flex-col'}>
          <span className={'text-xs leading-5 text-card-foreground/90'}>
            {data && data.length > 0
              ? formatLikers(data).toString()
              : 'No one liked this'}
          </span>
          <span className={'text-xs leading-6 text-card-foreground/30'}>
            {data && data.length > 2
              ? `and ${countLikers(data)} more liked this`
              : ''}
          </span>
        </div>
      </div>
      <div className={'flex flex-row items-center justify-center gap-3'}>
        <div
          className={
            'flex flex-row items-center justify-center gap-1 text-muted-foreground/50'
          }
        >
          <Heart className={'h-4 w-4'} />
          <span>{data ? getTotalLikes(data) : 0}</span>
        </div>
      </div>
    </div>
  )
}

export default PostStatus
