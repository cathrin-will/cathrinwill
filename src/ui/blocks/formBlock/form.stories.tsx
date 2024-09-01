import type { Meta, StoryObj } from '@storybook/react'

import Index from './index'

const meta = {
    title: 'Blocks/FormBlock',
    component: Index,
    tags: ['autodocs'],
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        formReference: {
            _id: 'test',
            title: 'Test',
            description: 'Test',
            submitButtonText: 'Test',
            fields: [],
        },
    },
}
