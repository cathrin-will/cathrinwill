import type { Meta, StoryObj } from '@storybook/react'

import Index from './index'

const meta = {
    title: 'Components/linkList',
    component: Index,
    argTypes: {
        label: {
            control: 'text',
        },
        style: {
            control: 'radio',
            options: ['button'],
        },
    },
    parameters: {
        docs: {
            story: {
                inline: false,
                iframeHeight: 300,
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        _type: 'link.list',
        label: 'Click me',
        style: 'button',
        blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        links: [
            {
                _type: 'link',
                type: 'external',
                external: 'https://acwill.dev',
                style: 'text',
                label: 'Link 1',
            },
            {
                _type: 'link',
                type: 'external',
                external: 'https://acwill.dev',
                style: 'text',
                label: 'Link 1',
            },
        ],
    },
}
