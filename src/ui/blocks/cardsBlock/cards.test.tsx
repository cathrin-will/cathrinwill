import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import CardsBlock from './index'
import { h2withParagraph } from '@/lib/content/typicalContent'

describe('Cards', () => {
    it('renders without crashing', () => {
        render(
            <CardsBlock
                content={h2withParagraph}
                cards={[
                    {
                        title: 'title',
                        siteType: 'siteType',
                        year: 2022,
                        type: 'type',
                        details: 'details',
                        myRole: 'myRole',
                        techStack: 'techStack',
                        team: ['team'],
                        tech: ['tech'],
                    },
                    {
                        title: 'title',
                        siteType: 'siteType',
                        year: 2022,
                        type: 'type',
                        details: 'details',
                        myRole: 'myRole',
                        techStack: 'techStack',
                        team: ['team'],
                        tech: ['tech'],
                    },
                ]}
            />,
        )
    })
})
