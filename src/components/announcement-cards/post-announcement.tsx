'use client'
import React from 'react'
import AnnouncementContent from '@/components/announcement-cards/announcement-content'

const PostAnnouncement = () => {
  // const config = genConfig()
  return (
    <div className="mx-auto flex w-full max-w-min flex-col items-center justify-between">
      <div>
        <span className="px-6 text-xl font-bold text-[#393a4f] ">
          {' '}
          New Announcement!{' '}
        </span>
        <div className="my-3 h-72 w-[530px] rounded-3xl bg-secondary"></div>
      </div>
      <AnnouncementContent />
    </div>
  )
}

export default PostAnnouncement
