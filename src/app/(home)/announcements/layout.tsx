'use client'
import React, { ReactNode, FC } from 'react'
import RecommendedFeed from '@/components/newsfeed-cards/recommended-feed'
import LatestAnnouncement from '@/components/newsfeed-cards/latest-announcement'
import Post from '@/components/Post/Post'
import post from '@/components/Post/Post'
import NewAnnouncements from '@/components/announcement-cards/new-announcements'

interface Props {
  children: ReactNode
}

const AnnouncementsLayout: FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-2.5 py-5">
      <div className="flex flex-row gap-7">
        <div className="hidden w-full max-w-xs lg:flex">
          <RecommendedFeed />
        </div>
        <div className="w-full">{children}</div>
        <div className="hidden w-full max-w-xs lg:flex">
          <NewAnnouncements />
        </div>
      </div>
    </div>
  )
}

export default AnnouncementsLayout
