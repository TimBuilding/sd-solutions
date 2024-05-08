import { Meta, StoryObj } from '@storybook/react'
import UserDetails from '@/app/(auth)/signup/user-details'
import UserAuthentication from '@/app/(auth)/signup/user-authentication'
import Success from '@/app/(auth)/signup/success'
import StepperOverview from '@/app/(auth)/signup/stepper-overview'

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
