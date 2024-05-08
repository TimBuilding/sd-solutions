import React, { ComponentType, FC } from 'react'
import { cn } from '@/utils/tailwind'

interface IconProps {
  className?: string
}

interface Props {
  step: number
  activeStep: number
  icon: ComponentType<IconProps>
}

const StepperItem: FC<Props> = ({ step, activeStep, icon: Icon }) => {
  const isActive = step <= activeStep

  return (
    <div className={'relative'}>
      <span
        className={cn(
          isActive ? 'border-primary' : 'border-muted-foreground/40',
          'relative z-20 block rounded-full border bg-card p-2',
        )}
      >
        <Icon
          className={cn(
            isActive ? 'text-primary' : 'text-muted-foreground/40',
            'h-5 w-5',
          )}
        />
      </span>
      <div
        className={cn(
          step === 0 && 'hidden',
          isActive ? 'bg-primary' : 'bg-muted-foreground/40',
          ' absolute right-0 top-4 z-0 h-2 w-40 md:w-64',
        )}
      />
    </div>
  )
}

export default StepperItem
