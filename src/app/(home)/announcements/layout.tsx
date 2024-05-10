'use client'
import React, { ReactNode, FC } from 'react'
import RecommendedFeed from '@/components/newsfeed-cards/recommended-feed'
import LatestAnnouncement from '@/components/newsfeed-cards/latest-announcement'
import Post from '@/components/Post/Post'
import post from '@/components/Post/Post'

interface Props {
  children: ReactNode
}

const AnnouncementsLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-row gap-7">
      <div>
        <RecommendedFeed />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default AnnouncementsLayout
