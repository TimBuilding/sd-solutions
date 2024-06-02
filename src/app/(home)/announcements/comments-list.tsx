import React, { FC } from 'react'
import { createBrowserClient } from '@/utils/supabase'
import getAnnouncementComments from '@/queries/get-announcement-comments'
import PublishCommentsContent from '@/components/comments/publish-comments-content'
import { useQuery } from '@tanstack/react-query'
import PublishComments from '@/components/comments/publish-comments'
import { Tables } from '@/types/database.types'

interface CommentsListProps {
  announcementId: string
  initialData: ExtendedAnnouncementComments[]
}

export type ExtendedAnnouncementComments = Tables<'announcement_comments'> & {
  user_profiles: {
    user_id: string
    first_name: string
    last_name: string
  }
}

const CommentsList: FC<CommentsListProps> = ({
  announcementId,
  initialData,
}) => {
  const supabase = createBrowserClient()
  const { data, isPending } = useQuery({
    queryKey: ['announcement_comments', announcementId],
    queryFn: () => getAnnouncementComments(announcementId, supabase),
    initialData,
  })
  return (
    <div className="mx-auto flex w-full flex-col pt-10">
      <span> Comments </span>
      {data &&
        data.map((comments) => (
          <PublishComments comments={comments} key={comments.id} />
        ))}
    </div>
  )
}

export default CommentsList
