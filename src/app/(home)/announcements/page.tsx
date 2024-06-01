'use client'

import React from 'react'
import PostAnnouncement from '@/components/announcement-cards/post-announcement'
import Comments from '@/components/comments/comments'
import PublishComments from '@/components/comments/publish-comments'
import AnnouncementList from '@/app/(home)/announcements/announcement-list'
import PublishAnnouncement from '@/components/announcement-cards/publish-announcement'
import AnnouncementList from '@/app/(home)/announcements/announcement-list'

//TODO: Add useContext in this page

const Page = () => {
  return (
    <div className="mx-auto flex flex-col gap-7 px-4">
      <PublishAnnouncement />
      <PostAnnouncement />
      <Comments />
      <PublishComments />
      <AnnouncementList />
    </div>
  )
}

export default Page
