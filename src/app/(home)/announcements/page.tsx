'use client'

import React, { FC } from 'react'
import PostAnnouncement from '@/components/announcement-cards/post-announcement'
import Comments from '@/components/comments/comments'
import PublishComments from '@/components/comments/publish-comments'
import AnnouncementList from '@/app/(home)/announcements/announcement-list'
import PublishAnnouncement from '@/components/announcement-cards/publish-announcement'
import getUserProfile from '@/queries/get-user-profile'
import { Tables } from '@/types/database.types'

interface Props {
  user: Tables<'user_profiles'>
}

const Page: FC<Props> = ({ user }) => {
  return (
    <div className="mx-auto flex flex-col gap-7 px-4">
      <PublishAnnouncement />
      {/*<PostAnnouncement />*/}
      {/*<Comments />*/}
      {/*<PublishComments />*/}
      <AnnouncementList initialData={[]} />
    </div>
  )
}

export default Page
