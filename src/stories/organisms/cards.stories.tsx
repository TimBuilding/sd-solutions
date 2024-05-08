import { Meta, StoryObj } from '@storybook/react'
import RecommendedFeed from '@/components/recommended-feed'

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
