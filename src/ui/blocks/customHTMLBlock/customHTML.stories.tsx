import type { Meta, StoryObj } from '@storybook/react'

import Index from './index'

const meta = {
    title: 'Blocks/CustomHtmlBlock',
    component: Index,
    tags: ['autodocs'],
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        html: '<h1>hello</h1>',
    },
}
