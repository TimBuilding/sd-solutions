import React from 'react'
import UserProfileSchema from '@/components/layout/user-profile-schema'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import createUserProfileUpdate from '@/queries/create-user-profile-update'
import { toast } from '@/components/ui/use-toast'

export function UserProfileForm() {
  const form = useForm<z.infer<typeof UserProfileSchema>>({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  })

  const queryClient = useQueryClient()

  const { mutateAsync } = useMutation({
    mutationKey: ['user_profiles'],
    mutationFn: (data: z.infer<typeof UserProfileSchema>) =>
      createUserProfileUpdate(data),
    onSuccess: () => {
      queryClient
        .invalidateQueries({ queryKey: ['user_profiles'] })
        .then(() => {
          form.reset()

          toast({
            title: 'User Profile Updated',
            description: 'Your user profile has been updated successfully!',
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

  const onSubmit: SubmitHandler<z.infer<typeof UserProfileSchema>> = async (
    data,
  ) => {
    await mutateAsync(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center gap-4 ">
              <FormLabel className="w-24 text-right text-sm ">
                First Name
              </FormLabel>
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
          name="lastName"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center gap-4">
              <FormLabel className="w-24 text-right text-sm">
                Last Name
              </FormLabel>
              <div className="flex w-full flex-col justify-between">
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage className="mt-2" />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Save Changes</Button>
      </form>
    </Form>
  )
}

export default UserProfileForm
