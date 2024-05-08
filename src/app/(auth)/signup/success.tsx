import React from 'react'
import { Card } from '@/components/ui/card'
import MailBox from '@/components/MailBox'
import { Button } from '@/components/ui/button'

const Success = () => {
  return (
    <Card className={'px-8 pb-11 pt-8'}>
      <span className={'relative h-32 w-32'}>
        <MailBox className={'mx-auto h-32 w-32'} />
      </span>
      <h2 className={'mt-3 text-center font-medium'}>
        Congratulations! Your account has been successfully created.
      </h2>
      <p className={'text-center text-sm text-card-foreground/50'}>
        Please check your email to verify your account. If you don&apos;t see
        the email, please check your spam folder.
      </p>
      <Button variant={'outline'} className={'mt-5 w-full'}>
        Login
      </Button>
    </Card>
  )
}

export default Success
