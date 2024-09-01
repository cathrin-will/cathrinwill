import type { Meta, StoryObj } from '@storybook/react'
import { h2withParagraph } from '@/lib/content/typicalContent'
import Index from './index'

const meta = {
    title: 'Blocks/StatsBlock',
    component: Index,
    tags: ['autodocs'],
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        introContent: h2withParagraph,
        githubContent: h2withParagraph,
        placesWorkedStats: [
            {
                repositoriesContributedTo: 0,
                totalPRContributions: 0,
                totalPRs: 0,
                name: '',
            },
        ],
        wakaContent: h2withParagraph,
        wrapIt: true,
    },
}
