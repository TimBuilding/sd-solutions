import { Meta, StoryObj } from '@storybook/react'
import PublishInput from '@/components/Publish/publish-input'

const meta: Meta = {
  title: 'Organisms/Publish',
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const PublishText: Story = {
  render: () => <PublishInput />,
}
