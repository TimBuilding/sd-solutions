import React, { FC } from 'react'
import PublishCommentsContent from '@/components/comments/publish-comments-content'
import { createBrowserClient } from '@/utils/supabase'
import { useQuery } from '@tanstack/react-query'
import getAnnouncementComments from '@/queries/get-announcement-comments'
import { Tables } from '@/types/database.types'

interface PublishCommentsProps {
  comments: Tables<'announcement_comments'>
}

const PublishComments: FC<PublishCommentsProps> = ({ comments }) => {
  return (
    <div className="mx-auto flex w-full flex-col pt-4">
      <div>
        <PublishCommentsContent content={comments.content} />
      </div>
    </div>
  )
}

export default PublishComments
