import React from 'react'
import AnnouncementList from '@/app/(home)/announcements/announcement-list'
import Publish from '@/components/Publish/publish'
import PostAnnouncement from '@/components/announcement-cards/post-announcement'

const Page = () => {
  return (
    <div className="flex flex-col">
      <PostAnnouncement />
    </div>
  )
}

export default Page
