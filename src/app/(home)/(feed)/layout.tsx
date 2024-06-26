import React, { FC, ReactNode } from 'react'
import RecommendedFeed from '@/components/newsfeed-cards/recommended-feed'
import LatestAnnouncement from '@/components/newsfeed-cards/latest-announcement'

interface Props {
  children: ReactNode
}

const NewsfeedLayout: FC<Props> = ({ children }) => {
  return (
    <div className={'mx-auto w-full max-w-7xl px-2.5 py-5'}>
      <div className={'flex w-full flex-row gap-7'}>
        <div className={'hidden w-full max-w-xs lg:flex'}>
          <RecommendedFeed />
        </div>
        <div className={'w-full'}>{children}</div>
        <div className={'hidden w-full max-w-xs lg:flex'}>
          <LatestAnnouncement />
        </div>
      </div>
    </div>
  )
}

export default NewsfeedLayout
