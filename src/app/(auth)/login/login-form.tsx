'use client'
import React, { FC, useTransition } from 'react'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import LoginSchema from '@/app/(auth)/login/login-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Lock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import loginAction from '@/app/(auth)/login/login-action'

const LoginForm: FC = () => {
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: '', password: '' },
  })

  const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = (data) => {
    startTransition(() => loginAction(data))
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={'mx-auto w-full max-w-xs space-y-3 lg:max-w-sm'}
      >
        <FormField
          control={form.control}
          name={'email'}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  icon={<User />}
                  placeholder={'email@sdsolutions.com'}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'password'}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  icon={<Lock />}
                  type={'password'}
                  placeholder={'mysecretpassword'}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type={'submit'} className={'w-full'}>
          Login
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
