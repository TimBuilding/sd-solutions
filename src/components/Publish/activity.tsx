import React from 'react'
import { Button } from '@/components/ui/button'

const Activity = () => {
  return (
    <div className={' flex flex-row items-center justify-start gap-2.5 p-2'}>
      <Button
        variant={'outline'}
        size={'interactions'}
        className={'w-fit px-4 text-muted-foreground/70'}
      >
        Activity
      </Button>
      <Button
        variant={'outline'}
        size={'interactions'}
        className={'w-fit px-4 text-muted-foreground/70'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-ellipsis"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </Button>
    </div>
  )
}

export default Activity
