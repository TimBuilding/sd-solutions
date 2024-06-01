import React, { FC, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import CommentsContent from '@/components/comments/comments-content'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from '@/components/ui/use-toast'
import { Tables } from '@/types/database.types'
import createAnnouncementsComments from '@/queries/create-announcements-comments'
import PublishComments from '@/components/comments/publish-comments'
import CommentsList from '@/app/(home)/announcements/comments-list'

interface CommentsProps {
  announcements: Tables<'announcements'>
}

const Comments: FC<CommentsProps> = ({ announcements }) => {
  const [comment, setComment] = useState('')
  const queryClient = useQueryClient()

  const { mutateAsync } = useMutation({
    mutationKey: ['announcements'],
    mutationFn: (commentContent: string) =>
      createAnnouncementsComments(announcements.id, commentContent),
    onSuccess: () => {
      queryClient
        .invalidateQueries({
          queryKey: ['announcement_comments', announcements.id],
        })
        .then(() => {
          toast({
            title: 'Comment Posted',
            description: 'Your comment has been posted successfully',
          })
        })
    },

    onError: (error) => {
      console.log(error.message)
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: error.message,
      })
    },
  })

  const handlePostComment = async () => {
    try {
      await mutateAsync(comment)
      setComment('')
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: 'Failed to post comment',
      })
    }
  }

  return (
    <div className="py-4">
      <Card className="w-full border border-slate-200 drop-shadow-sm">
        <CardContent className="p-3 pt-4  ">
          <CommentsContent onCommentChange={setComment} />
          <Separator />
          <div className="flex flex-row justify-end pt-2">
            <Button
              onClick={handlePostComment}
              className="h-9 rounded-lg bg-secondary text-center text-xs font-semibold text-white "
            >
              Post Comment{' '}
            </Button>
          </div>
        </CardContent>
      </Card>
      <CommentsList announcementId={announcements.id} initialData={[]} />
    </div>
  )
}

export default Comments
