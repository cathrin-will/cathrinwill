import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import DayNight from '.'

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
})

describe('DayNight', () => {
    it('renders without crashing', () => {
        render(<DayNight />)
    })
})
