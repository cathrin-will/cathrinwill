import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import CustomHtmlBlock from './index'

describe('CustomHtml', () => {
    it('renders without crashing', () => {
        render(<CustomHtmlBlock html={'<b>HTML</b>'} />)
    })
})
