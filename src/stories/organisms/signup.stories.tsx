import { Meta, StoryObj } from '@storybook/react'
import UserDetails from '@/app/(auth)/signup/user-details'
import UserAuthentication from '@/app/(auth)/signup/user-authentication'
import Success from '@/app/(auth)/signup/success'
import Stepper from '@/components/stepper/stepper'

const meta: Meta = {
  title: 'Organisms/Signup',
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const UserDetailsForm = {
  render: () => <UserDetails />,
}

export const UserAuthenticationForm = {
  render: () => <UserAuthentication />,
}

export const SuccessStep = {
  render: () => <Success />,
}

export const StepperComponent = {
  argTypes: {
    activeStep: {
      control: {
        type: 'select',
      },
      options: [0, 1, 2],
    },
  },
  render: (args: any) => <Stepper activeStep={args.activeStep} />,
}
