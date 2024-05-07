import React from 'react'
import LoginForm from '@/app/(auth)/login/login-form'
import LogoFull from '@/assets/images/Logo Full.png'
import Image from 'next/image'

const LoginPage = () => {
  return (
    <div
      className={
        'gap-5g flex min-h-screen w-full flex-col items-center justify-center'
      }
    >
      <Image src={LogoFull} alt={'SD Solutions'} width={320} />
      <LoginForm />
    </div>
  )
}

export default LoginPage
