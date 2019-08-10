import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'
import Nav from './nav'

const MainHeader = styled.header`
    background: linear-gradient(90deg, rgba(99, 29, 33, 1) 0%, rgba(134, 36, 52, 1) 8%, rgba(203, 78, 100, 1) 23%, rgba(245, 132, 122, 1) 49%, rgba(247, 171, 127, 1) 100%);
    color: #fff;
`
const HeaderContainer = styled.div`
    max-width: ${theme.container.width};
    padding: 20px;
    width: 100%;
`

const Header = () => (
    <MainHeader>
        <HeaderContainer>
            <Nav />
        </HeaderContainer>
    </MainHeader>
)

export default Header
