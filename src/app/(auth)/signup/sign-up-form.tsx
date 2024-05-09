'use client'
import React, { createContext, ReactNode, useContext, useState } from 'react'
import Stepper from '@/components/stepper/stepper'
import UserDetails from '@/app/(auth)/signup/user-details'
import UserAuthentication from '@/app/(auth)/signup/user-authentication'
import Success from '@/app/(auth)/signup/success'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import SignupSchema from '@/app/(auth)/signup/signup-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { createBrowserClient } from '@/utils/supabase'
import { useToast } from '@/components/ui/use-toast'

const useSignUpContext = () => {
  const context = useContext(SignUpContext)
  if (context === undefined) {
    throw new Error('useSignUpContext must be used within a SignUpProvider')
  }
  return context
}

const SignUpContext = createContext({
  activeStep: 0,
  setActiveStep: (step: number) => {},
})

const steps: {
  label: string
  step: ReactNode
}[] = [
  {
    label: 'Tell us more about you.',
    step: <UserDetails />,
  },
  {
    label: 'Secure your account.',
    step: <UserAuthentication />,
  },
  {
    label: "You're all set. Ready?",
    step: <Success />,
  },
]

const SignUpForm = () => {
  const [activeStep, setActiveStep] = useState(0)
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  const { toast } = useToast()

  const handleSignUp: SubmitHandler<z.infer<typeof SignupSchema>> = async (
    data,
  ) => {
    const supabase = createBrowserClient()

    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          first_name: data.firstName,
          last_name: data.lastName,
        },
      },
    })

    if (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      })
    }

    setActiveStep(2)
  }

  return (
    <Form {...form}>
      <SignUpContext.Provider
        value={{
          setActiveStep,
          activeStep,
        }}
      >
        <form
          onSubmit={form.handleSubmit(handleSignUp)}
          className={'mx-auto w-full max-w-xs pt-7 md:max-w-lg'}
        >
          <Stepper activeStep={activeStep} />
          <div className={'mt-64'}>
            <div className={'flex flex-col items-center justify-center gap-5'}>
              <h2 className={'text-xl text-foreground'}>
                {steps[activeStep].label}
              </h2>
              {steps[activeStep].step}
            </div>
          </div>
        </form>
      </SignUpContext.Provider>
    </Form>
  )
}

export default SignUpForm
export { useSignUpContext }
