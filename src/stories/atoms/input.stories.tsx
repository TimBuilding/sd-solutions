import { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components/ui/input'
import { User } from 'lucide-react'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: (args) => <Input {...args} />,
  args: {
    type: 'text',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'file',
        'email',
        'password',
        'text',
        'checkbox',
        'radio',
        ' date',
        'datetime-local',
        'email',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'time',
        'url',
        'week',
      ],
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Name',
  },
}

export const InputWithIcon: Story = {
  args: {
    variant: 'default',
    icon: <User />,
  },
}

export const FullWidth: Story = {
  render: (args) => (
    <div className={'w-96'}>
      <Input {...args} className={'w-full'} />
    </div>
  ),
}
