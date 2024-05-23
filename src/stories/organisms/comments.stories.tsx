import { Meta, StoryObj } from '@storybook/react'
import Comments from '@/components/comments/comments'
import PublishComments from '@/components/comments/publish-comments'

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
export const PostComments: Story = {
  render: () => <PublishComments />,
}
