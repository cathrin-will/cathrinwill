import type { Meta, StoryObj } from '@storybook/react'
import { h2withParagraph } from '@/lib/content/typicalContent'
import Index from './index'

const meta = {
    title: 'Blocks/CardsBlock',
    component: Index,
    tags: ['autodocs'],
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        content: h2withParagraph,
        cards: [
            {
                title: 'title',
                siteType: 'siteType',
                year: 2022,
                type: 'type',
                details: 'details',
                myRole: 'myRole',
                techStack: 'techStack',
                team: ['team'],
                tech: ['tech'],
            },
            {
                title: 'title',
                siteType: 'siteType',
                year: 2022,
                type: 'type',
                details: 'details',
                myRole: 'myRole',
                techStack: 'techStack',
                team: ['team'],
                tech: ['tech'],
            },
        ],
    },
}
