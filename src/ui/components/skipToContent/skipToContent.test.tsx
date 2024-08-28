import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import SkipToContent from './index'

describe('SkipToContent', () => {
    it('renders without crashing', () => {
        render(<SkipToContent />)
    })
})
