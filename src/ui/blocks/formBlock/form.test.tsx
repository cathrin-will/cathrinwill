import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import FormBlock from './index'

describe('Form', () => {
    it('renders without crashing', () => {
        render(
            <FormBlock
                formReference={{
                    _id: 'test',
                    title: 'Test',
                    description: 'Test',
                    submitButtonText: 'Test',
                    fields: [],
                }}
            />,
        )
    })
})
