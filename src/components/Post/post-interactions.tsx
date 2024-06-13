import React from 'react'
import { Button } from '@/components/ui/button'
import { Heart, Link2, MessageCircle } from 'lucide-react'
import createNewsfeedLike from '@/queries/create-newsfeed-like'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { usePostContext } from './Post'
import { useToast } from '../ui/use-toast'
import { cn } from '@/utils/tailwind'

const PostInteractions = () => {
  const { post } = usePostContext()
  const { toast } = useToast()
  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['newsfeed_likes', post.id],
    mutationFn: () => createNewsfeedLike(post.id),
    onError: () => {
      toast({
        title: 'Something went wrong.',
        description: 'Please try again later.',
        variant: 'destructive',
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['newsfeed_likes', post.id] })
    },
  })

  return (
    <div
      className={'flex w-full flex-row items-center justify-end space-x-1 px-4'}
    >
      <Button
        size={'interactions'}
        variant={'secondary'}
        onClick={() => mutateAsync()}
        disabled={isPending}
      >
        <Heart
          className={cn(
            isPending && 'animate-pulse',
            'h-4 w-4 fill-destructive text-destructive',
          )}
        />
      </Button>
    </div>
  )
}

export default PostInteractions
