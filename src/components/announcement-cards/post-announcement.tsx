'use client'
import React, { FC } from 'react'
import AnnouncementContent from '@/components/announcement-cards/announcement-content'
import Comments from '@/components/comments/comments'

interface PostAnnouncementProps {
  title: string
  content: string
}

const PostAnnouncement: FC<PostAnnouncementProps> = ({ title, content }) => {
  return (
    <div className="mx-auto flex max-w-min flex-col items-center justify-between">
      <div>
        <span className="px-6 text-xl font-bold text-[#393a4f] ">{title}</span>
        <div className="my-3 h-72 w-[438px] rounded-3xl bg-secondary md:w-[448px] lg:w-[530px]"></div>
      </div>
      <AnnouncementContent content={content} />
    </div>
  )
}

export default PostAnnouncement
