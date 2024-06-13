import React, { FC } from 'react'
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import PublishCommentsReact from '@/components/comments/publish-comments-react'
import { ExtendedAnnouncementComments } from '@/app/(home)/announcements/comments-list'
import { useQuery } from '@tanstack/react-query'
import getCommentsLikes from '@/queries/get-comments-likes'

interface PublishCommentsLikesCountProps {
  comments: ExtendedAnnouncementComments
}

interface CommentsLikesData {
  likes: number
  dislikes: number
}

const PublishCommentsLikesCount: FC<PublishCommentsLikesCountProps> = ({
  comments,
}) => {
  const { data } = useQuery<CommentsLikesData>({
    queryKey: ['comments_likes', comments.id],
    queryFn: () => getCommentsLikes(comments.id),
  })
  const likes = data?.likes || 0
  const dislikes = data?.dislikes || 0

  return (
    <div className="flex min-w-full flex-row items-center justify-between pt-4">
      <div className="flex flex-row justify-start gap-4">
        <ThumbsUp className="h-5 w-5 text-[#999999]" />
        <span className="text-sm font-semibold text-[#999999]"> {likes}</span>
        <ThumbsDown className="h-5 w-5 text-[#999999]" />
        <span className="text-sm font-semibold text-[#999999]">{dislikes}</span>
      </div>
      <PublishCommentsReact comments={comments} />
    </div>
  )
}

export default PublishCommentsLikesCount
