import React from 'react'
import PostAnnouncement from '@/components/announcement-cards/post-announcement'
import NewAnnouncements from '@/components/announcement-cards/new-announcements'

const Page = () => {
  return (
    <div className="flex flex-row gap-7">
      <PostAnnouncement />
      <NewAnnouncements />
    </div>
  )
}

export default Page
