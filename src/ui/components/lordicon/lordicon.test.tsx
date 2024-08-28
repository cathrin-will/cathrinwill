import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Lordicon from './index'

describe('Lordicon', () => {
    it('renders without crashing', () => {
        render(<Lordicon icon='email' />)
    })
})
