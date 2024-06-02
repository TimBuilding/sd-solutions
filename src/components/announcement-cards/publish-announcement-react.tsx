import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from '@/components/ui/use-toast'
import { ExtendedAnnouncement } from '@/components/announcement-cards/post-announcement'
import createAnnouncementLikes from '@/queries/create-announcement-likes'

interface PublishAnnouncementReactProps {
  announcement: ExtendedAnnouncement
}

const PublishAnnouncementReact: FC<PublishAnnouncementReactProps> = ({
  announcement,
}) => {
  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['announcements_likes', announcement.id],
    mutationFn: () => createAnnouncementLikes(announcement.id),
    onError: (error) => {
      toast({
        title: 'Something went wrong.',
        description: 'Please try again later.',
        variant: 'destructive',
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['announcements_likes', announcement.id],
      })
    },
  })

  return (
    <div>
      <Button
        variant="ghost"
        className="group hover:bg-transparent"
        onClick={() => mutateAsync()}
      >
        <Heart className="group h-5 w-5 hover:text-red-500" />
      </Button>
    </div>
  )
}

export default PublishAnnouncementReact
