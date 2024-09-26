import type { Meta, StoryObj } from '@storybook/react'
import { h2withParagraph, oneParagraph } from '@/lib/content/typicalContent'
import Index from './index'

const meta = {
    title: 'Components/text',
    component: Index,
    tags: ['autodocs'],
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: (
            <>
                <h1>heading 1</h1>
                <h2>heading 2</h2>
                <h3>heading 3</h3>
                <h4>heading 4</h4>
                <h5>heading 5</h5>
                <h6>heading 6</h6>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus ullam beatae alias, <a href='#'> link example</a>{' '}
                    quo officia repellendus saepe id officiis reiciendis
                    possimus libero esse amet excepturi at sint quidem
                    aspernatur. Nesciunt.
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
        content: oneParagraph,
    },
}
