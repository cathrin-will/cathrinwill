import type { Meta, StoryObj } from '@storybook/react'

import Index from './index'

const meta = {
    title: 'Components/Text',
    component: Index,
    tags: ['autodocs'],
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: (
            <>
                <h2>Hello</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus ullam beatae alias, cupiditate quo officia
                    repellendus saepe id officiis reiciendis possimus libero
                    esse amet excepturi at sint quidem aspernatur. Nesciunt.
                </p>
                <ul>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                </ul>
            </>
        ),
    },
}

export const SanityCMSContent: Story = {
    args: {
        content: [
            {
                _type: 'block',
                children: [{ _key: '1', _type: 'span', text: 'lorem ipsum' }],
            },
        ],
    },
}
