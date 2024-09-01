import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Container from './index'

describe('Container', () => {
    it('renders without crashing', () => {
        render(<Container children={''} />)
    })
})
