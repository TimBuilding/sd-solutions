import { Meta, StoryObj } from '@storybook/react'
import Post from '@/components/Post'

const meta: Meta = {
  title: 'Organisms/Post',
}
export default meta
type Story = StoryObj<typeof meta>

export const NewsfeedPost: Story = {
  render: () => <Post />,
}
