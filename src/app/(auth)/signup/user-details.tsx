import React from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useSignUpContext } from '@/app/(auth)/signup/sign-up-form'
import { useFormContext } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const UserDetails = () => {
  const { activeStep, setActiveStep } = useSignUpContext()
  const form = useFormContext()

  const isNextDisabled = () => {
    // if firstName and lastName and email are not filled and valid
    return (
      !form.getValues('firstName') ||
      !form.getValues('lastName') ||
      !form.getValues('email')
    )
  }
  return (
    <>
      <Card className={'mx-auto flex w-full flex-col gap-5 p-10'}>
        <FormField
          name={'firstName'}
          render={({ field }) => (
            <FormItem className={'relative'}>
              <FormLabel
                className={
                  'absolute left-3 top-4 z-10 text-xs font-medium uppercase tracking-tighter text-card-foreground/50'
                }
              >
                First Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={'Enter your first name'}
                  className={
                    'h-16 pt-6 text-sm  placeholder:text-muted-foreground/30'
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name={'lastName'}
          render={({ field }) => (
            <FormItem className={'relative'}>
              <FormLabel
                className={
                  'absolute left-3 top-4 z-10 text-xs font-medium uppercase tracking-tighter text-card-foreground/50'
                }
              >
                Last Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={'Enter your last name'}
                  className={
                    'h-16 pt-6 text-sm  placeholder:text-muted-foreground/30'
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name={'email'}
          render={({ field }) => (
            <FormItem className={'relative'}>
              <FormLabel
                className={
                  'absolute left-3 top-4 z-10 text-xs font-medium uppercase tracking-tighter text-card-foreground/50'
                }
              >
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={'Enter your email address'}
                  className={
                    'h-16 pt-6 text-sm  placeholder:text-muted-foreground/30'
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Card>
      <div className={'flex w-full flex-row items-center justify-end gap-2'}>
        <Button
          variant={'default'}
          disabled={activeStep === 2 || isNextDisabled()}
          onClick={() => setActiveStep(activeStep + 1)}
        >
          Next
        </Button>
      </div>
    </>
  )
}

export default UserDetails
