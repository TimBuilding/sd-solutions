import React, { FC } from 'react'

interface Props {
  step: number
}

const StepperOverview: FC<Props> = ({ step }) => {
  return <div className={'flex flex-row items-center justify-center'}></div>
}

export default StepperOverview
