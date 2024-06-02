import React, { FC } from 'react'
import PublishCommentsContent from '@/components/comments/publish-comments-content'
import { ExtendedAnnouncementComments } from '@/app/(home)/announcements/comments-list'
import { format } from 'date-fns'

interface PublishCommentsProps {
  comments: ExtendedAnnouncementComments
}

const PublishComments: FC<PublishCommentsProps> = ({ comments }) => {
  const date = comments.created_at
    ? format(new Date(comments.created_at), 'MMMM dd hh:mmaaa')
    : ''

  return (
    <div className="mx-auto flex w-full flex-col pt-4">
      <div>
        <PublishCommentsContent
          content={comments.content}
          first_name={comments.user_profiles.first_name || ''}
          last_name={comments.user_profiles.last_name || ''}
          comments={comments}
          date={date}
        />
      </div>
    </div>
  )
}

export default PublishComments
