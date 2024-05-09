import React from 'react'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useSignUpContext } from '@/app/(auth)/signup/sign-up-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Loader2 } from 'lucide-react'

const UserAuthentication = () => {
  const { activeStep, setActiveStep, isLoading } = useSignUpContext()

  return (
    <>
      <Card className={'mx-auto flex w-full flex-col gap-5 p-10'}>
        <FormField
          name={'password'}
          render={({ field }) => (
            <FormItem className={'relative'}>
              <FormLabel
                className={
                  'absolute left-3 top-4 z-10 text-xs font-medium uppercase tracking-tighter text-card-foreground/50'
                }
              >
                Password
              </FormLabel>
              <FormControl>
                <Input
                  type={'password'}
                  placeholder={'Choose a password'}
                  disabled={isLoading}
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
          name={'confirmPassword'}
          render={({ field }) => (
            <FormItem className={'relative'}>
              <FormLabel
                className={
                  'absolute left-3 top-4 z-10 text-xs font-medium uppercase tracking-tighter text-card-foreground/50'
                }
              >
                Repeat Password
              </FormLabel>
              <FormControl>
                <Input
                  type={'password'}
                  placeholder={'Repeat your password'}
                  disabled={isLoading}
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
          variant={'outline'}
          disabled={activeStep === 0}
          onClick={() => setActiveStep(activeStep - 1)}
        >
          Back
        </Button>
        <Button type={'submit'} variant={'default'} disabled={isLoading}>
          {isLoading ? <Loader2 className={'animate-spin'} /> : 'Submit'}
        </Button>
      </div>
    </>
  )
}

export default UserAuthentication
