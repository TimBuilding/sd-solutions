import React, { ComponentType, FC } from 'react'
import StepperItem from '@/components/stepper/stepper-item'
import { Flag, Lock, User } from 'lucide-react'

const steps: {
  step: number
  icon: ComponentType
}[] = [
  {
    step: 0,
    icon: User,
  },
  {
    step: 1,
    icon: Lock,
  },
  {
    step: 2,
    icon: Flag,
  },
]

interface Props {
  activeStep: number
}

const Stepper: FC<Props> = ({ activeStep }) => {
  return (
    <div className={'flex w-96 flex-row items-center justify-between'}>
      {steps.map(({ step, icon }) => (
        <StepperItem
          key={step}
          step={step}
          activeStep={activeStep}
          icon={icon}
        />
      ))}
    </div>
  )
}

export default Stepper
