'use client'
import React, { FC, useState, useTransition } from 'react'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import LoginSchema from '@/app/(auth)/login/login-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Eye, EyeOff, Loader2, Lock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import loginAction from '@/app/(auth)/login/login-action'
import Link from 'next/link'

const LoginForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false)
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
                  icon={<User />}
                  placeholder={'email@sdsolutions.com'}
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'password'}
          render={({ field }) => (
            <FormItem className={'relative'}>
              <FormControl>
                <>
                  <Input
                    icon={<Lock />}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={'mysecretpassword'}
                    disabled={isPending}
                    {...field}
                  />
                  <Button
                    className={'absolute -top-2 right-1'}
                    variant={'ghost'}
                    size={'icon'}
                    type={'button'}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <Eye className={'h-4 w-4'} />
                    ) : (
                      <EyeOff className={'h-4 w-4'} />
                    )}
                  </Button>
                </>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type={'submit'} className={'w-full'} disabled={isPending}>
          {isPending ? <Loader2 className={'animate-spin'} /> : 'Login'}
        </Button>
        <div className="flex flex-col items-center justify-center">
          <Link href={'/signup'} className="text-sm underline">
            Don&apos;t have an account?
          </Link>
        </div>
      </form>
    </Form>
  )
}

export default LoginForm
