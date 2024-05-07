import { Meta, StoryObj } from '@storybook/react'
import Post from '@/components/Post/Post'

const meta: Meta = {
  title: 'Organisms/Post',
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const NewsfeedPost: Story = {
  render: () => <Post />,
}
