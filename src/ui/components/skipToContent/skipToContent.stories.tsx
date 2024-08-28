import type { Meta, StoryObj } from '@storybook/react'

import Index from './index'

const meta = {
    title: 'Components/skipToContent',
    component: Index,
    parameters: {
        docs: {
            description: {
                component: 'Tab to see the component',
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
