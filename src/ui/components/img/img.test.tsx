import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Img from './index'

describe('Img', () => {
    it('renders without crashing', () => {
        render(<Img />)
    })
})
