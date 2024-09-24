import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Message from './index'

describe('Message Component', () => {
    it('renders correctly with given props', () => {
        render(<Message type="error" content="This is an error message" className="custom-class" />)

        expect(screen.getByText('error')).toBeInTheDocument()
        expect(screen.getByText('This is an error message')).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /close message/i })).toBeInTheDocument()
    })

    it('hides the message when close button is clicked', () => {
        render(<Message type="error" content="This is an error message" className="custom-class" />)

        const closeButton = screen.getByRole('button', { name: /close message/i })
        fireEvent.click(closeButton)

        expect(screen.queryByText('This is an error message')).not.toBeInTheDocument()
    })
})
