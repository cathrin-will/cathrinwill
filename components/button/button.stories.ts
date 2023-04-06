import type { Meta, StoryObj } from '@storybook/react'
import Button from './index'

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['atom'],
    parameters: {
        status: {
            type: 'alpha',
        },
    },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        children: 'Button',
        disabled: false,
    },
}
// children,
//     href,
//     className,
//     onClick,
//     disabled,
//     type = 'submit',
//     target = '_self',
