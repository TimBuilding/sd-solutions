import React from 'react'
import LoginForm from '@/app/(auth)/login/login-form'
import SDSolutionsLogo from '@/components/SDSolutionsLogo'
import SDSolutionsLogoMinimal from '@/components/SDSolutionsLogo-Minimal'

const LoginPage = ({ searchParams }: { searchParams: { error: string } }) => {
  return (
    <div className={'relative flex min-h-screen w-full flex-row'}>
      {/* md: show */}
      <div
        className={
          'hidden w-1/2 flex-col items-center justify-center bg-secondary md:flex'
        }
      >
        <h2
          className={
            'text-shadow mx-auto w-80 text-5xl font-bold leading-snug text-secondary-foreground text-shadow-blur-0 text-shadow-x-6 text-shadow-y-6'
          }
        >
          Join the SDSolutions community.
        </h2>
      </div>

      {/* md: center logo */}
      <div
        className={
          'absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-background bg-secondary p-8 lg:block'
        }
      >
        <span className={'block h-12 w-12'}>
          <SDSolutionsLogoMinimal />
        </span>
      </div>
      <div
        className={
          'flex w-full flex-col items-center justify-center gap-5 md:w-1/2'
        }
      >
        <h1 className={'sr-only'}>Login</h1>
        <span className={'max-w-xs md:max-w-sm'}>
          <SDSolutionsLogo />
        </span>
        {searchParams.error === 'login-failed' && (
          <div
            className={
              'max-w-xs border-l-4 border-red-500 bg-red-100 p-4 text-red-700 lg:max-w-sm'
            }
            role={'alert'}
          >
            <p className={'font-bold'}>Login failed</p>
            <p>Check your email and password and try again.</p>
          </div>
        )}
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
