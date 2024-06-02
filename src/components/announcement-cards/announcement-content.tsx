'use client'
import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import { Heart, MessageCircle } from 'lucide-react'
import Comments from '@/components/comments/comments'
import { useState } from 'react'
import UserProfile from '@/components/announcement-cards/user-profile'
import { ExtendedAnnouncement } from '@/components/announcement-cards/post-announcement'
import { format } from 'date-fns'

interface AnnouncementContentProps {
  content: string
  announcement: ExtendedAnnouncement
}

const AnnouncementContent: FC<AnnouncementContentProps> = ({
  content,
  announcement,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const date = announcement.created_at
    ? format(new Date(announcement.created_at), 'MMMM dd hh:mmaaa')
    : ''

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-row justify-between px-4 py-4">
        <UserProfile
          announcement={announcement}
          first_name={announcement.user_profiles.first_name || ''}
          last_name={announcement.user_profiles.last_name || ''}
          date={date}
        />
        <div className="flex flex-row justify-end">
          <Button variant="ghost" className="hover:bg-transparent">
            <Heart className="h-5 w-5" />
          </Button>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="ghost"
            className="hover:bg-transparent"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="px-4 text-left text-sm text-[#342558]">{content}</div>
      {isOpen && <Comments announcements={announcement} />}
    </div>
  )
}

export default AnnouncementContent
