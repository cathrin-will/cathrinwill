import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import TextBlock from './index'
import { h2withParagraph } from '@/lib/content/typicalContent'

describe('Text', () => {
    it('renders without crashing', () => {
        render(<TextBlock content={h2withParagraph} />)
    })
})
