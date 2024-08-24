import type { Meta, StoryObj } from '@storybook/react'

import Index from './index'

const meta = {
    title: 'Components/Button',
    component: Index,
    tags: ['autodocs'],
    argTypes: {
        link: {
            control: 'object',
        },
        style: {
            control: 'radio',
            options: ['button', 'link'],
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: <p>lorem ipsum</p>,
        link: {
            type: 'external',
            external: 'https://google.com',
            label: 'Google',
        },
        style: 'button',
    },
}
