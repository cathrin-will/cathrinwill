import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import AccordionBlock from './index'
import { h2withParagraph, oneParagraph } from '@/lib/content/typicalContent'

describe('Accordion', () => {
    it('renders without crashing', () => {
        render(
            <AccordionBlock
                content={h2withParagraph}
                items={[
                    {
                        summary: 'Heading',
                        details: oneParagraph,
                    },
                    {
                        summary: 'Heading',
                        details: oneParagraph,
                    },
                ]}
                wrapIt={true}
            />,
        )
    })
})
