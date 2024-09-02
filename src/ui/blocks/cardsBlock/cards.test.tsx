import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import CardsBlock from './index'

describe('Cards', () => {
    it('renders without crashing', () => {
        render(<CardsBlock />)
    })
})
