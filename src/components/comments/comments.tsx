import React, { FC, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import CommentsContent from '@/components/comments/comments-content'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from '@/components/ui/use-toast'
import { Tables } from '@/types/database.types'
import createAnnouncementsComments from '@/queries/create-announcements-comments'
import { zodResolver } from '@hookform/resolvers/zod'
import CommentsList from '@/app/(home)/announcements/comments-list'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import CommentsSchema from '@/components/comments/comments-schema'
import AnnouncementSchema from '@/components/announcement-cards/publish-announcement-schema'
import { Textarea } from '@/components/ui/textarea'

interface CommentsProps {
  announcements: Tables<'announcements'>
}

export const Comments: FC<CommentsProps> = ({ announcements }) => {
  const [comment, setComment] = useState('')
  const queryClient = useQueryClient()

  const { mutateAsync } = useMutation({
    mutationKey: ['announcements'],
    mutationFn: (data: z.infer<typeof CommentsSchema>) =>
      createAnnouncementsComments(announcements.id, data),
    onSuccess: () => {
      queryClient
        .invalidateQueries({
          queryKey: ['announcement_comments', announcements.id],
        })
        .then(() => {
          form.reset()

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

  const form = useForm<z.infer<typeof CommentsSchema>>({
    resolver: zodResolver(CommentsSchema),
    defaultValues: {
      content: '',
    },
  })

  const onSubmit: SubmitHandler<z.infer<typeof CommentsSchema>> = async (
    data,
  ) => {
    await mutateAsync(data)
  }

  return (
    <div className="py-4">
      <Card className="w-full border border-slate-200 drop-shadow-sm">
        <CardContent className="p-3 pt-4  ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className="h-32 w-full resize-none border-none bg-card placeholder:text-muted-foreground/30 focus-visible:ring-0"
                        placeholder="Post a comment..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Separator />
              <div className="flex flex-row justify-end pt-2">
                <Button
                  type="submit"
                  className="h-9 rounded-lg bg-secondary text-center text-xs font-semibold text-white "
                >
                  Post Comment{' '}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <CommentsList announcementId={announcements.id} initialData={[]} />
    </div>
  )
}

export default Comments
