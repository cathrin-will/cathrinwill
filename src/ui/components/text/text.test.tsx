import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Text from './index'

describe('Text', () => {
    it('renders without crashing', () => {
        render(<Text />)
    })
})
