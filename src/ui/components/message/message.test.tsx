import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Message from './index'

describe('Message', () => {
    it('renders without crashing', () => {
        render(
            <Message
                type='error'
                content='test'
            />,
        )
    })
})
