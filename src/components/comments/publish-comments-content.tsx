import React, { FC } from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'
import PublishCommentsLikesCount from '@/components/comments/publish-comments-likes-count'
import { ExtendedAnnouncementComments } from '@/app/(home)/announcements/comments-list'

interface PublishCommentsContentProps {
  content: string
  first_name: string
  last_name: string
  comments: ExtendedAnnouncementComments
  date: string
}

const PublishCommentsContent: FC<PublishCommentsContentProps> = ({
  content,
  first_name,
  last_name,
  comments,
  date,
}) => {
  const config = genConfig(comments.user_profiles.user_id || '')
  return (
    <div className="mx-auto flex w-full flex-row gap-4 py-4">
      <div className="border-1 h-fit rounded-full border border-[#999999] p-1.5">
        <Avatar className="h-8 w-8 flex-shrink-0 rounded-full" {...config} />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2">
          <span className="text-sm font-bold">
            {' '}
            {first_name} {last_name}
          </span>
          <span className="text-xs text-[#999999]"> {date}</span>
        </div>
        <span className="text-base text-[#6A6C93]">{content}</span>
        <PublishCommentsLikesCount comments={comments} />
      </div>
    </div>
  )
}

export default PublishCommentsContent
