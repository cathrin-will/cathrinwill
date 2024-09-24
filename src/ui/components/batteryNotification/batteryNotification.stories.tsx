import type { Meta, StoryObj } from '@storybook/react'

import Index from './index'

const meta = {
    title: 'Components/BatteryNotification',
    component: Index,
    tags: ['autodocs'],
    argTypes: {
        override: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        override: true,
    },
}
