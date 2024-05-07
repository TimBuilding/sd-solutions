'use client'
import React, { FC } from 'react'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import LoginSchema from '@/app/(auth)/login/login-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Lock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

const LoginForm: FC = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: '', password: '' },
  })

  return (
    <Form {...form}>
      <form className={'mx-auto w-full max-w-xs space-y-3'}>
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
