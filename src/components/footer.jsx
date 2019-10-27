import React from 'react'
import styled from 'styled-components'
import Social from './social'

const MainFooter = styled.footer`
    align-items: center;
    background: #010f17;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    @media (min-width: 600px) {
        position: sticky;
        bottom: 0;
    }
    @media (max-width: 600px) {
        flex-direction: column;
        padding: 40px;
    }
`
const FooterText = styled.p`
    font-size: ${14 / 18}rem;
    margin: 0;
    @media (max-width: 600px) {
        margin-bottom: 10px;
    }
`
const StyledLink = styled.a`
    @media (max-width: 600px) {
        margin-top: 10px;
    }
`
const Footer = () => (
    <MainFooter>
        <FooterText>&copy; cathrinwill 2019</FooterText>
        <Social />
        <StyledLink href="mailto:ann@cathrinwill.com">ann@cathrinwill.com</StyledLink>
    </MainFooter>
)

export default Footer
