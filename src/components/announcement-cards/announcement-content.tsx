'use client'
import React, { FC } from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'
import { Button } from '@/components/ui/button'
import { Heart, MessageCircle } from 'lucide-react'
import Comments from '@/components/comments/comments'
import { useState } from 'react'
import { Tables } from '@/types/database.types'

interface AnnouncementContentProps {
  content: string
  announcement: Tables<'announcements'>
}

const AnnouncementContent: FC<AnnouncementContentProps> = ({
  content,
  announcement,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const config = genConfig()
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-row justify-between px-4 py-4">
        <div className="flex flex-row items-center justify-start">
          <Avatar className="h-11 w-11 rounded-full" {...config} />
          <div className="flex flex-col px-2">
            <span className="text-sm font-bold text-[#393a4f]"> Jane Doe </span>
            <span className="text-sm font-normal text-[#999999]">
              {' '}
              2 hours ago
            </span>
          </div>
        </div>
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
