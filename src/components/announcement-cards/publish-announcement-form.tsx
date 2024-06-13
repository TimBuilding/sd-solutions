'use client'

import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import AnnouncementSchema from '@/components/announcement-cards/publish-announcement-schema'
import { Textarea } from '@/components/ui/textarea'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import createAnnouncement from '@/components/announcement-cards/create-announcement'
import { toast } from '@/components/ui/use-toast'

export function AnnouncementForm() {
  const form = useForm<z.infer<typeof AnnouncementSchema>>({
    resolver: zodResolver(AnnouncementSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  })

  const queryClient = useQueryClient()
  const [photo, setPhoto] = useState(null)

  const { mutateAsync } = useMutation({
    mutationKey: ['announcements'],
    mutationFn: (data: z.infer<typeof AnnouncementSchema>) =>
      createAnnouncement(data),
    onSuccess: () => {
      queryClient
        .invalidateQueries({ queryKey: ['announcements'] })
        .then(() => {
          form.reset()

          toast({
            title: 'Announcement Created',
            description: 'Your announcement has been created successfully!',
          })
        })
    },

    onError: (error) => {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: error.message,
      })
    },
  })

  const onSubmit: SubmitHandler<z.infer<typeof AnnouncementSchema>> = async (
    data,
  ) => {
    console.log(data)
    await mutateAsync(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="imageFile"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem className="flex flex-row items-center gap-9">
              <FormLabel className="text-right text-sm">Picture</FormLabel>
              <div className="flex w-full flex-col justify-between">
                <FormControl>
                  <Input
                    {...fieldProps}
                    placeholder="Picture"
                    type="file"
                    accept="image/*, application/pdf"
                    onChange={(event) =>
                      onChange(event.target.files && event.target.files[0])
                    }
                  />
                </FormControl>
                <FormMessage className="mt-2" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center gap-9">
              <FormLabel className="text-right text-sm">Title</FormLabel>
              <div className="flex w-full flex-col justify-between">
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage className="mt-2" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center gap-3">
              <FormLabel className="text-right text-sm">Content</FormLabel>
              <div className="flex w-full flex-col justify-between">
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage className="mt-2" />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default AnnouncementForm
