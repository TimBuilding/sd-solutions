'use client'
import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import PublishInput from '@/components/Publish/publish-input'
import Activity from '@/components/Publish/activity'
import { Separator } from '@/components/ui/separator'
import Settings from '@/components/Publish/settings'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import PublishSchema from '@/components/Publish/publish-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { createBrowserClient } from '@/utils/supabase'
import { TablesInsert } from '@/types/database.types'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

const Publish = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const form = useForm<z.infer<typeof PublishSchema>>({
    resolver: zodResolver(PublishSchema),
    defaultValues: {
      content: '',
    },
  })

  const publishHandler: SubmitHandler<z.infer<typeof PublishSchema>> = async ({
    content,
  }) => {
    const supabase = createBrowserClient()

    // get user id
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      toast({
        variant: 'destructive',
        title: 'User not found',
        description: 'Please login to publish',
      })
      return router.push('/login')
    }

    // create insert object
    const values: TablesInsert<'newsfeed'> = {
      content: content,
      user_id: user.id,
    }

    // insert into database
    const { error } = await supabase.from('newsfeed').insert(values)
    if (error) {
      return toast({
        variant: 'destructive',
        title: 'Something went wrong.',
        description: error.message,
      })
    }

    // show success message
    toast({
      variant: 'default',
      title: 'Published',
      description: 'Your content has been published',
    })
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
          <PublishInput setIsOpen={setIsOpen} />
          <Separator />
          <Activity />
          {isOpen && (
            <>
              <Separator />
              <Settings />
              <Separator />
              <div className={'p-2'}>
                <Button type={'submit'} className={'w-full'}>
                  Publish
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
