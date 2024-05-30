import { Meta, StoryObj } from '@storybook/react'
import Comments from '@/components/comments/comments'
import PublishComments from '@/components/comments/publish-comments'
import PublishAnnouncement from '@/components/announcement-cards/publish-announcement'

const meta: Meta = {
  title: 'Organisms/Announcements',
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const AnnouncementTextBox: Story = {
  render: () => <PublishAnnouncement />,
}
