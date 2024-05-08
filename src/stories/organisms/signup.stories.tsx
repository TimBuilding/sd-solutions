import { Meta, StoryObj } from '@storybook/react'
import UserDetails from '@/app/(auth)/signup/user-details'

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
