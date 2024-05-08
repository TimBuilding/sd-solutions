'use client'
import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import PublishInput from '@/components/Publish/publish-input'
import Activity from '@/components/Publish/activity'
import { Separator } from '@/components/ui/separator'
import Settings from '@/components/Publish/settings'
import { Button } from '@/components/ui/button'
import { Loader2, X } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import PublishSchema from '@/components/Publish/publish-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { useToast } from '@/components/ui/use-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import publishNewPost from '@/components/Publish/publish-new-post'

const Publish = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const form = useForm<z.infer<typeof PublishSchema>>({
    resolver: zodResolver(PublishSchema),
    defaultValues: {
      content: '',
    },
  })

  const { mutateAsync, isPending } = useMutation({
    mutationFn: publishNewPost,
    mutationKey: ['newsfeed'],
    onSuccess: () => {
      // revalidate
      queryClient
        .invalidateQueries({
          queryKey: ['newsfeed'],
        })
        .then(() => {
          form.reset()
          toast({
            variant: 'default',
            title: 'Published',
            description: 'Your content has been published',
          })
          setIsOpen(false)
        })
    },
    onError: (error) => {
      toast({
        variant: 'destructive',
        title: 'Something went wrong.',
        description: error.message,
      })
    },
  })

  const publishHandler: SubmitHandler<z.infer<typeof PublishSchema>> = async (
    data,
  ) => {
    await mutateAsync(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(publishHandler)}
        className={'relative w-full max-w-3xl'}
      >
        <Card className={'pt-10'}>
          {isOpen && (
            <Button
              variant={'ghost'}
              size={'icon'}
              className={'absolute right-2 top-2 h-6 w-6'}
              onClick={() => setIsOpen(false)}
            >
              <X className={'h-4 w-4'} />
            </Button>
          )}
          <PublishInput setIsOpen={setIsOpen} isPending={isPending} />
          <Separator />
          <Activity />
          {isOpen && (
            <>
              <Separator />
              <Settings />
              <Separator />
              <div className={'p-2'}>
                <Button
                  type={'submit'}
                  className={'w-full'}
                  disabled={isPending || !form.formState.isValid}
                >
                  {isPending ? (
                    <Loader2 className={'animate-spin'} />
                  ) : (
                    'Publish'
                  )}
                </Button>
              </div>
            </>
          )}
        </Card>
      </form>
    </Form>
  )
}

export default Publish
