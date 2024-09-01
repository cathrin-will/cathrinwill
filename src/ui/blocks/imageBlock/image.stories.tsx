import type { Meta, StoryObj } from '@storybook/react'
import { imageExample } from '@/lib/content/typicalContent'

import Index from './index'

const meta = {
    title: 'Blocks/ImageBlock',
    component: Index,
    tags: ['autodocs'],
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        image: imageExample,
    },
}
