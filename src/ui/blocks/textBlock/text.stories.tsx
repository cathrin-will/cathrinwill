import type { Meta, StoryObj } from '@storybook/react'
import { h2withParagraph } from '@/lib/content/typicalContent'
import Index from './index'

const meta = {
    title: 'Blocks/TextBlock',
    component: Index,
    tags: ['autodocs'],
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        content: h2withParagraph,
    },
}