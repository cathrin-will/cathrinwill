import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import DayNight from './index'

describe('DayNight', () => {
    it('renders without crashing', () => {
        render(<DayNight />)
    })
})
