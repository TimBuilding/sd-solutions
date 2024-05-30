'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
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

export function AnnouncementForm() {
  const form = useForm<z.infer<typeof AnnouncementSchema>>({
    resolver: zodResolver(AnnouncementSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  })

  function onSubmit(values: z.infer<typeof AnnouncementSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
