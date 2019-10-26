import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Footer from './footer'
import Header from './header'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme.json'
import SEO from './seo'

const MainLayout = styled.main`
    max-width: ${theme.container.width};
    width: 100%;
    padding: 40px 40px;
    flex-grow: 1;
    margin: 0 auto;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Layout = ({ children }) => (
    <Wrapper>
        <SEO title="Home" />
        <GlobalStyle />
        <Header />
        <MainLayout>{children}</MainLayout>
        <Footer />
    </Wrapper>
)

Layout.propTypes = {
    children: PropTypes.node
}

Layout.defaultProps = {
    children: ''
}

export default Layout
