import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { ExtendedAnnouncementComments } from '@/app/(home)/announcements/comments-list'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from '@/components/ui/use-toast'
import createCommentsLikes from '@/queries/create-comments-likes'

interface PublishCommentsReactProps {
  comments: ExtendedAnnouncementComments
}

const PublishCommentsReact: FC<PublishCommentsReactProps> = ({ comments }) => {
  const queryClient = useQueryClient()
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['comments_likes', comments.id],
    mutationFn: (like: boolean) => createCommentsLikes(comments.id, like),
    onError: (error) => {
      console.log(error.message)
      toast({
        title: 'Something went wrong.',
        description: 'Please try again later.',
        variant: 'destructive',
      })
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'You have liked the comment',
        variant: 'default',
      })
      queryClient.invalidateQueries({
        queryKey: ['comments_likes', comments.id],
      })
    },
  })

  return (
    <div className="flex flex-row gap-2 ">
      <div className="group h-8 w-8 rounded-full border border-[#999999] hover:border-[#1ce589]">
        <Button
          variant="ghost"
          className="hover:bg-transparent"
          onClick={() => mutateAsync(true)}
        >
          {' '}
          <ThumbsUp className="-ml-2 -mt-3 h-3.5 w-3.5 text-[#999999] group-hover:text-[#1ce589] " />
        </Button>
      </div>
      <div className="group h-8 w-8 rounded-full border border-[#999999] hover:border-red-500">
        <Button
          variant="ghost"
          className="hover:bg-transparent"
          onClick={() => mutateAsync(false)}
        >
          {' '}
          <ThumbsDown className="-ml-2 -mt-2 h-3.5 w-3.5 text-[#999999] group-hover:text-red-500" />
        </Button>
      </div>
    </div>
  )
}

export default PublishCommentsReact
