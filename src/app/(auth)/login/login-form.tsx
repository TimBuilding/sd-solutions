import React from 'react'
import { Form } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import LoginSchema from '@/app/(auth)/login/login-schema'

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>()

  return (
    <Form {...form}>
      <form></form>
    </Form>
  )
}

export default LoginForm
