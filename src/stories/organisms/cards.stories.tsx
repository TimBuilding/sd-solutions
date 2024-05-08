import { Meta, StoryObj } from '@storybook/react'
import RecommendedFeed from '@/components/newsfeed-cards/recommended-feed'
import LatestAnnouncement from '@/components/newsfeed-cards/latest-announcement'

const meta: Meta = {
  title: 'Organisms/Cards',
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const RecommendedFeeds: Story = {
  render: () => <RecommendedFeed />,
}

export const LatestAnnouncements: Story = {
  render: () => <LatestAnnouncement />,
}
