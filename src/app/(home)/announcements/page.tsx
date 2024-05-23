'use client'

import React from 'react'
import PostAnnouncement from '@/components/announcement-cards/post-announcement'
import NewAnnouncements from '@/components/announcement-cards/new-announcements'
import Comments from '@/components/comments/comments'
import PublishComments from '@/components/comments/publish-comments'

const Page = () => {
  return (
    <div className="mx-auto flex flex-col gap-7 px-4">
      <PostAnnouncement />
      <Comments />
      <PublishComments />
    </div>
  )
}

export default Page
