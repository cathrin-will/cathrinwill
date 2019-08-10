import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import SEO from '../components/seo'

const IndexPage = () => (
    <>
        <SEO title="Home" />
        <Header siteTitle="Contact" />
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia deserunt, quos numquam cumque nostrum aperiam eaque minus. Exercitationem, optio dolorem porro quisquam temporibus
            placeat. Unde quos consequatur enim autem quae.
        </p>
        <Link to="/contact/">Contact</Link>
    </>
)

export default IndexPage
