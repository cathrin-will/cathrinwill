import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import SliderBlock from './index'
import { h2withParagraph, imageExample } from '@/lib/content/typicalContent'

describe('Slider', () => {
    it('renders without crashing', () => {
        render(
            <SliderBlock
                content={h2withParagraph}
                images={[imageExample, imageExample]}
            />,
        )
    })
})
