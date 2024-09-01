import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import ImageBlock from './index'
import { imageExample } from '@/lib/content/typicalContent'

describe('Image', () => {
    it('renders without crashing', () => {
        render(<ImageBlock image={imageExample} />)
    })
})
