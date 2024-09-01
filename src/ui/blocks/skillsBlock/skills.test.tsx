import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import SkillsBlock from './index'
import { h2withParagraph } from '@/lib/content/typicalContent'

describe('Skills', () => {
    it('renders without crashing', () => {
        render(<SkillsBlock content={h2withParagraph} />)
    })
})
