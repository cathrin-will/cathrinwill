import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import LanguageChanger from './index'

describe('LanguageChanger', () => {
    it('renders without crashing', () => {
        render(<LanguageChanger />)
    })
})
