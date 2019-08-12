import React from 'react'
// import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )
    return (
        <Layout>
            <h1>{data.site.siteMetadata.title}</h1>
            <p>
                I&#39;m an experienced Front-end Developer having worked at a variety of digital and marketing agencies for over 7 years. With strong skills in writing <strong>HTML</strong>,&nbsp;
                <strong>CSS</strong> using <strong>Sass</strong> and <strong>javaScript</strong>.
            </p>
        </Layout>
    )
}

export default IndexPage
