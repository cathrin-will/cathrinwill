import type { Meta, StoryObj } from '@storybook/react'

import Index from './index'

const meta = {
    title: 'Components/button',
    component: Index,
    tags: ['autodocs'],
    argTypes: {
        link: {
            control: 'object',
        },
        style: {
            control: 'radio',
            options: ['button', 'text', 'plain'],
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const External: Story = {
    args: {
        link: {
            type: 'external',
            external: 'https://google.com',
            label: 'Google',
        },
        style: 'button',
    },
}

export const Internal: Story = {
    args: {
        link: {
            type: 'internal',
            internal: {
                title: 'About',
                metadata: {
                    slug: {
                        current: 'about',
                    },
                },
            },
        },
        style: 'button',
    },
}
