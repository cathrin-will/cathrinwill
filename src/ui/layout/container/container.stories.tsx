import type { Meta, StoryObj } from '@storybook/react'

import Index from './index'

const meta = {
    title: 'layout/container',
    component: Index,
    tags: ['autodocs'],
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: (
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo in similique eaque voluptatum itaque quasi velit
                minima neque! Cupiditate aut dicta numquam rem possimus hic nam
                sit quos magnam. Provident.,
            </p>
        ),
    },
}
