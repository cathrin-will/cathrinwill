import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import LinkList from './index'

describe('LinkList', () => {
    it('renders without crashing', () => {
        render(
            <LinkList
                _type={'link.list'}
                label={''}
                style={''}
            />,
        )
    })
})
