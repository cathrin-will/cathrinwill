import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Message from '@/ui/components/message'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Message',
    component: Message,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            defaultValue: 'error',
            description: 'The type of the message',
            control: {
                type: 'radio',
                options: ['error', 'success'],
            },
        },
        content: { control: 'text' },
        className: { control: 'text' },
    },
} satisfies Meta<typeof Message>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
    args: {
        type: 'success',
        content: 'lorem ipsum',
    },
}

export const Error: Story = {
    args: {
        type: 'error',
        content: 'lorem ipsum',
    },
}
