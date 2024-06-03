'use client'
import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import { Heart, MessageCircle } from 'lucide-react'
import Comments from '@/components/comments/comments'
import { useState } from 'react'
import UserProfile from '@/components/announcement-cards/user-profile'
import { ExtendedAnnouncement } from '@/components/announcement-cards/post-announcement'
import { format } from 'date-fns'
import PublishAnnouncementReact from '@/components/announcement-cards/publish-announcement-react'
import { useQuery } from '@tanstack/react-query'
import getAnnouncementLikes from '@/queries/get-announcement-likes'
import { Separator } from '@/components/ui/separator'

interface AnnouncementContentProps {
  content: string
  announcement: ExtendedAnnouncement
}

const AnnouncementContent: FC<AnnouncementContentProps> = ({
  content,
  announcement,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const { data: likes } = useQuery({
    queryKey: ['announcements_likes', announcement.id],
    queryFn: () => getAnnouncementLikes(announcement.id),
  })

  const date = announcement.created_at
    ? format(new Date(announcement.created_at), 'MMMM dd hh:mmaaa')
    : ''

  return (
    <div className="flex w-full flex-col">
      <span className="pl-4 text-left text-2xl font-bold text-[#393a4f] ">
        {announcement.title}
      </span>
      <div className="text-md px-4 text-left text-[#342558]">{content}</div>
      <div className="flex flex-row justify-between px-4 py-4">
        <UserProfile
          announcement={announcement}
          first_name={announcement.user_profiles.first_name || ''}
          last_name={announcement.user_profiles.last_name || ''}
          date={date}
        />
        <div className="flex flex-row items-center justify-end">
          <PublishAnnouncementReact announcement={announcement} />
          <span className="text-sm font-semibold text-[#393a4f]">
            {' '}
            {likes}{' '}
          </span>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="ghost"
            className="hover:bg-transparent"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {isOpen && <Comments announcements={announcement} />}
      <Separator className="m-6" />
    </div>
  )
}

export default AnnouncementContent
