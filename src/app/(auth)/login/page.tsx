import React from 'react'
import LoginForm from '@/app/(auth)/login/login-form'
import SDSolutionsLogo from '@/components/SDSolutionsLogo'

const LoginPage = () => {
  return (
    <div
      className={
        'flex min-h-screen w-full flex-col items-center justify-center gap-5'
      }
    >
      <span className={'max-w-xs'}>
        <SDSolutionsLogo />
      </span>
      <LoginForm />
    </div>
  )
}

export default LoginPage
