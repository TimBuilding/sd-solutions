import React from 'react'
import PostAnnouncement from '@/components/announcement-cards/post-announcement'
import NewAnnouncements from '@/components/announcement-cards/new-announcements'
import Comments from '@/components/comments/comments'

const Page = () => {
  return (
    <div className="flex flex-col gap-7 px-4">
      <PostAnnouncement />
      <Comments />
    </div>
  )
}

export default Page
