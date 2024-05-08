'use client'
import React, { ReactNode, useState } from 'react'
import Stepper from '@/components/stepper/stepper'
import UserDetails from '@/app/(auth)/signup/user-details'
import UserAuthentication from '@/app/(auth)/signup/user-authentication'
import Success from '@/app/(auth)/signup/success'
import { Button } from '@/components/ui/button'

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

  return (
    <div className={'mx-auto w-full max-w-xs pt-7 md:max-w-lg'}>
      <Stepper activeStep={activeStep} />
      <div className={'mt-64'}>
        <div className={'flex flex-col items-center justify-center gap-5'}>
          <h2 className={'text-xl text-foreground'}>
            {steps[activeStep].label}
          </h2>
          {steps[activeStep].step}
          <div
            className={'flex w-full flex-row items-center justify-end gap-2'}
          >
            <Button
              variant={'outline'}
              disabled={activeStep === 0}
              onClick={() => setActiveStep(activeStep - 1)}
            >
              Back
            </Button>
            <Button
              variant={'default'}
              disabled={activeStep === steps.length - 1}
              onClick={() => setActiveStep(activeStep + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm
