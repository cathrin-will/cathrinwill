import React from 'react'
import { Link } from 'gatsby'
// import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'

const IndexPage = () => (
    <>
        <Header siteTitle="Front-end Developer: Ann-Cathrin Will" />
        <Link to="/contact/">Contact</Link>
        <Footer />
    </>
)

export default IndexPage
