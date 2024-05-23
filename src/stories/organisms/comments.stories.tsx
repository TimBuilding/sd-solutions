import { Meta, StoryObj } from '@storybook/react'
import Post from '@/components/Post/Post'
import Comments from '@/components/comments/comments'

const meta: Meta = {
  title: 'Organisms/Comments',
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const AnnouncementComments: Story = {
  render: () => <Comments />,
}
