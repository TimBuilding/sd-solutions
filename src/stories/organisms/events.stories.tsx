import { Meta, StoryObj } from '@storybook/react'
import EventItem from '@/components/Events/event-item'
import EventsList from '@/components/Events/events-list'

const meta: Meta = {
  title: 'Organisms/Events',
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const StoryItemComponent: Story = {
  args: {
    title: 'Event Title',
    date: '2021-09-01',
    content: 'Event Content',
  },
  render: (args: any) => <EventItem {...args} />,
}

export const EventsListSideBar: Story = {
  render: () => <EventsList />,
}
