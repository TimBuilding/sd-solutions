'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import EventSchema from './event-schema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import createEvent from './create-event'
import { useToast } from '../ui/use-toast'
import { FC } from 'react'

interface Props {
  setIsFormOpen: (_isFormOpen: boolean) => void
}

const NewEventForm: FC<Props> = ({ setIsFormOpen }) => {
  const form = useForm<z.infer<typeof EventSchema>>({
    resolver: zodResolver(EventSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  })
  const { toast } = useToast()
  const queryClient = useQueryClient()

  const { mutateAsync } = useMutation({
    mutationKey: ['events'],
    mutationFn: (data: z.infer<typeof EventSchema>) => createEvent(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] }).then(() => {
        form.reset() // This will clear the form fields after the event is successfully created

        setIsFormOpen(false) // This will close the form after the event is successfully created

        toast({
          title: 'Event Created',
          description: 'Your event has been created successfully!',
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

  const handleSubmit: SubmitHandler<z.infer<typeof EventSchema>> = async (
    data,
  ) => {
    await mutateAsync(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mt-4 flex w-full flex-col items-center justify-center gap-4"
      >
        <FormField
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Event Title</FormLabel>
              <Input {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="content"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Event Content</FormLabel>
              <Textarea {...field} rows={10} />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Create Event
        </Button>
      </form>
    </Form>
  )
}

export default NewEventForm
