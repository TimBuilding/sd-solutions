import { Meta, StoryObj } from '@storybook/react'
import Publish from '@/components/Publish/publish'

const meta: Meta = {
  title: 'Organisms/Publish',
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const PublishText: Story = {
  render: () => <Publish />,
}
