import React from 'react'
import styled from 'styled-components'
import Social from './social'

const MainFooter = styled.footer`
    padding: 20px 40px;
    color: #fff;
    background: #010f17;
    display: flex;
    justify-content: space-between;
    position: sticky;
    bottom: 0;
`
const FooterText = styled.p`
    margin: 0;
`
const Footer = () => (
    <MainFooter>
        <FooterText>&copy; cathrinwill 2019</FooterText>
        <Social />
        <FooterText>
            <a href="mailto:ann@cathrinwill.com">ann@cathrinwill.com</a>
        </FooterText>
    </MainFooter>
)

export default Footer
